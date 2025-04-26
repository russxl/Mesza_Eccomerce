import Link from "next/link";
import { ChevronRight, CreditCard, ShieldCheck } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function CheckoutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <nav className="flex gap-2 text-sm text-muted-foreground mb-2">
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/cart" className="hover:text-foreground">
                  Cart
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>Checkout</span>
              </nav>
              <h1 className="text-3xl font-bold tracking-tight">Checkout</h1>
              <p className="text-muted-foreground">
                Complete your purchase by providing your shipping and payment
                details.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
              <div>
                <Tabs defaultValue="details" className="w-full">
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="details">Details</TabsTrigger>
                    <TabsTrigger value="shipping">Shipping</TabsTrigger>
                    <TabsTrigger value="payment">Payment</TabsTrigger>
                  </TabsList>
                  <TabsContent value="details" className="space-y-6 pt-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">
                        Contact Information
                      </h2>
                      <div className="grid gap-4">
                        <div className="grid grid-cols-2 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="first-name">First name</Label>
                            <input
                              id="first-name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="John"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="last-name">Last name</Label>
                            <input
                              id="last-name"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="Doe"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <input
                            id="email"
                            type="email"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="john.doe@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <input
                            id="phone"
                            type="tel"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="(123) 456-7890"
                          />
                        </div>
                      </div>
                    </div>
                    <div className="flex justify-end">
                      <Button>Continue to Shipping</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="shipping" className="space-y-6 pt-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">
                        Shipping Address
                      </h2>
                      <div className="grid gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="address">Street Address</Label>
                          <input
                            id="address"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="123 Main St"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="address2">
                            Apartment, suite, etc. (optional)
                          </Label>
                          <input
                            id="address2"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                            placeholder="Apt 4B"
                          />
                        </div>
                        <div className="grid grid-cols-3 gap-4">
                          <div className="space-y-2">
                            <Label htmlFor="city">City</Label>
                            <input
                              id="city"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="San Francisco"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state">State</Label>
                            <input
                              id="state"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="CA"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="zip">ZIP Code</Label>
                            <input
                              id="zip"
                              className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                              placeholder="94107"
                            />
                          </div>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="country">Country</Label>
                          <select
                            id="country"
                            className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          >
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="UK">United Kingdom</option>
                          </select>
                        </div>
                      </div>
                      <div className="space-y-2 pt-2">
                        <h3 className="text-lg font-medium">Shipping Method</h3>
                        <RadioGroup
                          defaultValue="standard"
                          className="grid gap-4 pt-2"
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
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline">Back to Details</Button>
                      <Button>Continue to Payment</Button>
                    </div>
                  </TabsContent>
                  <TabsContent value="payment" className="space-y-6 pt-6">
                    <div className="space-y-4">
                      <h2 className="text-xl font-semibold">Payment Method</h2>
                      <RadioGroup
                        defaultValue="credit-card"
                        className="grid gap-4"
                      >
                        <div className="rounded-lg border p-4">
                          <div className="flex items-center gap-3 mb-4">
                            <RadioGroupItem
                              value="credit-card"
                              id="credit-card"
                            />
                            <Label
                              htmlFor="credit-card"
                              className="font-medium flex items-center gap-2"
                            >
                              <CreditCard className="h-4 w-4" />
                              Credit Card
                            </Label>
                          </div>
                          <div className="grid gap-4 pl-7">
                            <div className="space-y-2">
                              <Label htmlFor="card-number">Card Number</Label>
                              <input
                                id="card-number"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="1234 5678 9012 3456"
                              />
                            </div>
                            <div className="grid grid-cols-3 gap-4">
                              <div className="space-y-2">
                                <Label htmlFor="expiry-month">
                                  Expiry Month
                                </Label>
                                <select
                                  id="expiry-month"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  <option value="">MM</option>
                                  {Array.from({ length: 12 }, (_, i) => (
                                    <option key={i + 1} value={i + 1}>
                                      {i + 1}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="expiry-year">Expiry Year</Label>
                                <select
                                  id="expiry-year"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                >
                                  <option value="">YYYY</option>
                                  {Array.from({ length: 10 }, (_, i) => (
                                    <option
                                      key={i}
                                      value={new Date().getFullYear() + i}
                                    >
                                      {new Date().getFullYear() + i}
                                    </option>
                                  ))}
                                </select>
                              </div>
                              <div className="space-y-2">
                                <Label htmlFor="cvv">CVV</Label>
                                <input
                                  id="cvv"
                                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                  placeholder="123"
                                />
                              </div>
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="name-on-card">Name on Card</Label>
                              <input
                                id="name-on-card"
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                                placeholder="John Doe"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <RadioGroupItem value="paypal" id="paypal" />
                            <Label htmlFor="paypal" className="font-medium">
                              PayPal
                            </Label>
                          </div>
                          <div className="text-sm text-muted-foreground">
                            You will be redirected to PayPal
                          </div>
                        </div>
                      </RadioGroup>
                      <div className="flex items-start gap-2 pt-4">
                        <input
                          type="checkbox"
                          id="billing-same"
                          className="mt-1 h-4 w-4 rounded border-gray-300"
                          defaultChecked
                        />
                        <Label htmlFor="billing-same" className="text-sm">
                          Billing address is the same as shipping address
                        </Label>
                      </div>
                    </div>
                    <div className="flex justify-between">
                      <Button variant="outline">Back to Shipping</Button>
                      <Button>Complete Order</Button>
                    </div>
                  </TabsContent>
                </Tabs>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-4">
                      <div className="space-y-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Subtotal
                          </span>
                          <span>$828.00</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">
                            Shipping
                          </span>
                          <span>Free</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Tax</span>
                          <span>$82.80</span>
                        </div>
                        <Separator />
                        <div className="flex justify-between font-medium">
                          <span>Total</span>
                          <span>$910.80</span>
                        </div>
                      </div>

                      <div className="space-y-4 pt-4">
                        <h4 className="text-sm font-medium">
                          Items in Your Order
                        </h4>
                        <div className="space-y-3">
                          <div className="flex justify-between text-sm">
                            <span>Mesza Pro (1)</span>
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
                  <CardFooter className="flex items-center justify-center border-t p-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <ShieldCheck className="h-4 w-4" />
                      <span>Secure checkout powered by Stripe</span>
                    </div>
                  </CardFooter>
                </Card>

                <div className="mt-6 space-y-4">
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Need Help?</h4>
                    <p className="text-sm text-muted-foreground">
                      Our customer service team is available Monday-Friday,
                      9am-6pm EST.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Call us at{" "}
                      <a
                        href="tel:18003538283"
                        className="text-primary hover:underline"
                      >
                        1-800-ELEVATE
                      </a>{" "}
                      or email{" "}
                      <a
                        href="mailto:support@Mesza.com"
                        className="text-primary hover:underline"
                      >
                        support@Mesza.com
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
