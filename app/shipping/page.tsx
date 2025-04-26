"use client";

import type React from "react";
import { useForm, FormProvider, useFormContext } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Shipping, shippingSchema } from "@/schema/shipping-schema";

// Contact Information Component
function ContactInformation() {
  const { control } = useFormContext<Shipping>();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
      <div className="grid gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <FormField
            control={control}
            name="firstName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>First name</FormLabel>
                <FormControl>
                  <Input placeholder="John" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="lastName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Last name</FormLabel>
                <FormControl>
                  <Input placeholder="Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="john.doe@example.com"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="phone"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Phone</FormLabel>
              <FormControl>
                <Input type="tel" placeholder="(123) 456-7890" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

// Shipping Address Component
function ShippingAddress() {
  const { control } = useFormContext<Shipping>();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>
      <div className="grid gap-4">
        <FormField
          control={control}
          name="address"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Street Address</FormLabel>
              <FormControl>
                <Input placeholder="123 Main St" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="apartment"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Apartment, suite, etc. (optional)</FormLabel>
              <FormControl>
                <Input placeholder="Apt 4B" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <FormField
            control={control}
            name="city"
            render={({ field }) => (
              <FormItem>
                <FormLabel>City</FormLabel>
                <FormControl>
                  <Input placeholder="San Francisco" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="state"
            render={({ field }) => (
              <FormItem>
                <FormLabel>State/Province</FormLabel>
                <FormControl>
                  <Input placeholder="CA" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={control}
            name="zipCode"
            render={({ field }) => (
              <FormItem>
                <FormLabel>ZIP/Postal Code</FormLabel>
                <FormControl>
                  <Input placeholder="94107" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={control}
          name="country"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Country</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a country" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="US">United States</SelectItem>
                  <SelectItem value="CA">Canada</SelectItem>
                  <SelectItem value="MX">Mexico</SelectItem>
                  <SelectItem value="UK">United Kingdom</SelectItem>
                  <SelectItem value="AU">Australia</SelectItem>
                  <SelectItem value="PH">Philippines</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}

// Shipping Method Component
function ShippingMethod() {
  const { control } = useFormContext<Shipping>();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
      <FormField
        control={control}
        name="shippingMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="grid gap-4"
              >
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="standard" id="standard" />
                    <Label htmlFor="standard" className="font-medium">
                      Standard Shipping
                    </Label>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">Free</div>
                    <div className="text-sm text-muted-foreground">
                      5-7 business days
                    </div>
                  </div>
                </div>
                <div className="flex items-center justify-between rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="express" id="express" />
                    <Label htmlFor="express" className="font-medium">
                      Express Shipping
                    </Label>
                  </div>
                  <div className="text-right">
                    <div className="font-medium">$25.00</div>
                    <div className="text-sm text-muted-foreground">
                      2-3 business days
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

// Special Instructions Component
function SpecialInstructions() {
  const { control } = useFormContext<Shipping>();

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">
        Special Instructions (Optional)
      </h2>
      <FormField
        control={control}
        name="specialInstructions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Delivery instructions, gate codes, etc.</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Leave package at the front door, gate code: 1234, etc."
                className="min-h-[100px]"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}

// Order Summary Component
function OrderSummary() {
  return (
    <div>
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>$828.00</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Tax</span>
                <span>$82.80</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-medium">
                <span>Total</span>
                <span>$910.80</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-medium">Items in Your Order</h4>
              <div className="space-y-3">
                <div className="flex justify-between text-sm">
                  <span>Mesza Desk Pro (1)</span>
                  <span>$699.00</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span>Monitor Arm (1)</span>
                  <span>$129.00</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 space-y-4">
        <div className="space-y-2">
          <h4 className="text-sm font-medium">Need Assistance?</h4>
          <p className="text-sm text-muted-foreground">
            Our customer service team is available Monday-Friday, 9am-6pm.
          </p>
          <p className="text-sm text-muted-foreground">
            Call us at{" "}
            <a href="tel:18003538283" className="text-primary hover:underline">
              1-800-MESZA
            </a>{" "}
            or email{" "}
            <a
              href="mailto:support@meszadesk.com"
              className="text-primary hover:underline"
            >
              support@meszadesk.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default function ShippingPage() {
  // Initialize the form with useForm
  const methods = useForm<Shipping>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      cartId: "cart-123", // This would typically come from your cart state or URL params
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      apartment: "",
      city: "",
      state: "",
      zipCode: "",
      country: "US",
      shippingMethod: "standard",
      specialInstructions: "",
    },
  });

  const onSubmit = (data: Shipping) => {
    console.log("Form data submitted:", data);
    // In a real application, you would submit this data to your API
    // and handle the response, including navigation to the next page
    window.location.href = "/order-summary";
  };

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
              <Card>
                <FormProvider {...methods}>
                  <form onSubmit={methods.handleSubmit(onSubmit)}>
                    <CardContent className="p-6">
                      <div className="space-y-6">
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
                      <Button type="submit">
                        Continue to Order Summary
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </form>
                </FormProvider>
              </Card>

              <OrderSummary />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
