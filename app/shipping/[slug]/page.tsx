"use client"; // Ensure this is at the top

import type React from "react";
import { useState, useEffect } from "react"; // Added useEffect
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useParams, useRouter, notFound } from "next/navigation"; // Added notFound
import { useQuery } from "convex/react"; // Added useQuery
import { api } from "@/convex/_generated/api"; // Added api
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Terminal } from "lucide-react";
import { Skeleton } from "@/components/ui/skeleton"; // Added Skeleton for loading
import { Shipping, shippingSchema } from "@/schema/shipping-schema";

// Import the extracted components
import { ContactInformation } from "./components/ContactInformation";
import { ShippingAddress } from "./components/ShippingAddress";
import { ShippingMethod } from "./components/ShippingMethod";
import { SpecialInstructions } from "./components/SpecialInstructions";
import { OrderSummary } from "./components/OrderSummary";

// Removed OrderData interface definition
// Removed ContactInformation component definition
// Removed ShippingAddress component definition
// Removed formatName helper function
// Removed ShippingMethod component definition
// Removed SpecialInstructions component definition
// Removed OrderSummary component definition

export default function ShippingPage() {
  const params = useParams();
  const router = useRouter();
  const orderId = params.slug as string;
  const [isSubmitting, setIsSubmitting] = useState(false); // Renamed isLoading to isSubmitting for clarity
  const [submitError, setSubmitError] = useState<string | null>(null); // Renamed error to submitError

  // Fetch order data to check for existing shippingId
  const orderData = useQuery(
    api.orders.getOrder,
    orderId ? { orderId } : "skip"
  );

  useEffect(() => {
    // Check if data is loaded and shippingId exists
    if (orderData && orderData.shippingId) {
      console.log(
        `Order ${orderId} already has shipping details. Redirecting to 404.`
      );
      notFound(); // Trigger 404 page
    }
    // No need to check for !orderData here, as useQuery handles loading/error states
    // and the component will show loading/error UI below.
  }, [orderData, orderId]); // Re-run effect if orderData or orderId changes

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
    console.log("Submitting shipping data:", data, "for order:", orderId);

    try {
      const response = await fetch("/api/shipping", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, orderId }), // Include orderId
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit shipping details.");
      }

      console.log("Shipping details submitted successfully:", result);
      // Redirect to the next step, e.g., payment or order summary page
      // Pass the orderId along if needed
      router.push(`/order-summary?orderId=${orderId}`); // Example redirect
      //@eslint-disable-next-line no-empty
    } catch (err: unknown) {
      console.error("Submission error:", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Loading state while fetching order data
  if (orderData === undefined) {
    return (
      <div className="flex min-h-[100dvh] flex-col">
        <SiteHeader />
        <main className="flex-1 flex items-center justify-center">
          <div className="container px-4 md:px-6 text-center">
            <Skeleton className="h-8 w-48 mx-auto mb-4" />
            <Skeleton className="h-4 w-64 mx-auto" />
          </div>
        </main>
        <SiteFooter />
      </div>
    );
  }

  // Handle case where order doesn't exist (already handled by notFound if shippingId exists)
  // If orderData is null after loading, it means the order wasn't found by the query.
  if (orderData === null) {
    console.log(`Order ${orderId} not found. Redirecting to 404.`);
    notFound(); // Or show a specific "Order not found" message/component
  }

  // Render the main page content only if loading is complete, order exists, and shippingId is not present
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
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
                    <CardFooter className="flex justify-between p-6 pt-0">
                      <Button variant="outline" asChild>
                        <Link href="/cart">
                          <ChevronLeft className="mr-2 h-4 w-4" />
                          Back to Cart
                        </Link>
                      </Button>
                      <Button type="submit" disabled={isSubmitting}>
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
