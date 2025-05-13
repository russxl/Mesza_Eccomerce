"use client"; // Ensure this is at the top

import type React from "react";
import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useParams, useRouter, notFound } from "next/navigation";
import { useQuery } from "convex/react"; // Added useQuery
import { api } from "@/convex/_generated/api"; // Added api
import { ChevronRight, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Shipping, shippingSchema } from "@/schema/shipping-schema";
import { sendEmail } from "@/lib/email";

// Helper function to calculate shipping cost
// TODO: This should ideally come from a backend configuration or a more dynamic calculation
const calculateShippingCost = (shippingMethod: string): number => {
  if (shippingMethod === "standard") {
    return 999; // Based on the provided image (₱999.00)
  }
  if (shippingMethod === "express") {
    return 1500; // Example cost for express
  }
  return 0; // Default or for free shipping methods
};

// Import the extracted components
import { ContactInformation } from "./components/ContactInformation";
import { ShippingAddress } from "./components/ShippingAddress";
import { ShippingMethod } from "./components/ShippingMethod";
import { SpecialInstructions } from "./components/SpecialInstructions";
import { OrderSummary } from "./components/OrderSummary";
import ShippingLoading from "./loading";

export default function ShippingPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.slug as string;
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false); // Renamed isLoading to isSubmitting for clarity
  const [submitError, setSubmitError] = useState<string | null>(null); // Renamed error to submitError

  // Fetch order data to check for existing shippingId
  const orderData = useQuery(
    api.orders.getOrder,
    orderId ? { orderId } : "skip"
  );

  // Initialize the form with useForm
  const methods = useForm<Shipping>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      // cartId removed - we use orderId from URL
      firstName: "",
      lastName: "",
      email: "", // Consider pre-filling if user is logged in
      phone: "",
      address: "", // Added address field
      city: "",
      state: "",
      zipCode: "", // Added zipCode field
      country: "PH", // Default country
      shippingMethod: "standard",
      specialInstructions: "",
    },
  });

  const onSubmit = async (data: Shipping) => {
    setIsSubmitting(true);
    setSubmitError(null);

    try {
      const response = await fetch("/api/shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, orderId }), // Include orderId
      });

      const result = await response.json();

      if (result.status === "success") {
        setIsRedirecting(true);
        // Send order confirmation email
        try {
          // Construct shippingAddress object
          const shippingAddressPayload = {
            name: `${data.firstName} ${data.lastName}`, // Assuming data.lastName is available from the form
            line1: data.address,
            // line2: data.apartmentSuite || undefined, // Add if you have an apartment/suite field in your form
            city: data.city,
            state: data.state,
            postalCode: data.zipCode,
            country: data.country,
          };

          // Calculate subtotal from the cart items returned by the API
          // Assuming items in result.cart match the CartItem structure from lib/email.ts
          // If not, a more specific type local to this file might be needed for item.
          // This interface should ensure compatibility with CartItem from lib/email.ts
          interface CartItemForSubtotal {
            name: string; // Added to match CartItem in lib/email.ts
            price: number;
            quantity: number;
            description?: string; // Optional, to align with CartItem
            imageUrl?: string; // Optional, to align with CartItem
            // [key: string]: any; // Can be removed if all expected props are listed
          }
          const cartForEmail: CartItemForSubtotal[] = result.cart || [];
          const calculatedSubtotal = cartForEmail.reduce(
            (acc: number, item: CartItemForSubtotal) =>
              acc + item.price * item.quantity,
            0
          );

          // Calculate shipping fee based on selected method
          const shippingFee = calculateShippingCost(data.shippingMethod);

          // Calculate grand total
          const grandTotal = calculatedSubtotal + shippingFee;

          // Optional: Compare with API's total if needed for sanity check
          if (result.total && result.total !== grandTotal) {
            console.warn(
              `Calculated total (${grandTotal}) differs from API total (${result.total}). Email will use calculated values.`
            );
          }

          await sendEmail("orderPlaced", data.email, {
            firstName: data.firstName,
            orderId: orderId,
            total: grandTotal, // Use calculated grand total for email
            cart: cartForEmail,
            subtotal: calculatedSubtotal, // Use calculated subtotal
            shippingCost: shippingFee, // Use calculated shipping fee
            contactEmail: data.email,
            contactPhone: data.phone,
            shippingAddress: shippingAddressPayload,
          });
        } catch (emailError) {
          console.warn("Failed to send order confirmation email:", emailError);
          // Don't block the flow if email fails
        }

        router.push(`/order-summary/${orderId}`);
      } else {
        throw new Error(result.error || "Failed to submit shipping details.");
      }
    } catch (err: unknown) {
      console.error("Submission error:", err);
      setSubmitError(
        err instanceof Error
          ? err.message
          : "An error occurred while submitting shipping details."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state while fetching order data
  if (orderData === undefined) {
    return <ShippingLoading />;
  }

  if (isSubmitting) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Processing your order...</p>
      </div>
    );
  }

  if ((orderData?.shippingId && !isRedirecting) || !orderData) {
    return notFound();
  }
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                Shipping Details
              </h1>
              <p className="text-muted-foreground">
                Please provide your shipping information to continue with your
                order.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
              {/* Form Section */}
              <Card>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <CardContent className="p-6">
                      {submitError && (
                        <Alert variant="destructive" className="mb-4">
                          <Terminal className="h-4 w-4" />
                          <AlertTitle>Submission Error</AlertTitle>
                          <AlertDescription>{submitError}</AlertDescription>
                        </Alert>
                      )}
                      <div className="space-y-6">
                        {/* Use imported components */}
                        <ContactInformation />
                        <ShippingAddress />
                        <ShippingMethod />
                        <SpecialInstructions />
                      </div>
                    </CardContent>
                    <CardFooter className="flex flex-col sm:flex-row gap-2 justify-between p-4 sm:p-6 pt-0">
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full sm:w-auto"
                      >
                        {isSubmitting
                          ? "Processing..."
                          : "Continue to Order Summary"}
                        {!isSubmitting && (
                          <ChevronRight className="ml-2 h-4 w-4" />
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                </FormProvider>
              </Card>

              {/* Order Summary Section (outside the form) */}
              {/* OrderSummary uses useParams and useFormContext internally */}
              <FormProvider {...methods}>
                <OrderSummary />
              </FormProvider>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
