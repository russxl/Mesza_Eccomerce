"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Check, Copy, MessageSquare } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function OrderSummaryPage() {
  const [copied, setCopied] = useState(false);
  const orderUrl = typeof window !== "undefined" ? window.location.href : "";
  const orderUrlRef = useRef<HTMLInputElement>(null);
  const orderId = "MESZA-" + Math.floor(100000 + Math.random() * 900000);
  const orderDate = new Date().toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const copyToClipboard = () => {
    if (orderUrlRef.current) {
      orderUrlRef.current.select();
      document.execCommand("copy");
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              <div className="flex flex-col gap-2 mb-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Order Received
                </h1>
                <p className="text-muted-foreground">
                  Thank you for your order! Please copy your order URL for the
                  next step.
                </p>
              </div>

              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold">
                          Order Information
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          Please save this information for your records.
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          Order Date
                        </div>
                        <div>{orderDate}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-2">Order ID</h3>
                        <p className="text-lg font-mono">{orderId}</p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Order Status</h3>
                        <div className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold bg-yellow-100 text-yellow-800 border-yellow-200 dark:bg-yellow-900 dark:text-yellow-100">
                          Pending Payment
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-medium">Order URL</h3>
                      <div className="flex gap-2">
                        <input
                          ref={orderUrlRef}
                          type="text"
                          value={orderUrl}
                          readOnly
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                        <Button onClick={copyToClipboard} className="gap-2">
                          {copied ? (
                            <Check className="h-4 w-4" />
                          ) : (
                            <Copy className="h-4 w-4" />
                          )}
                          {copied ? "Copied" : "Copy"}
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Copy this URL to check your order status or reference in
                        communications.
                      </p>
                    </div>

                    <Alert className="bg-primary/10 border-primary/20">
                      <AlertDescription className="flex items-start gap-2">
                        <MessageSquare className="h-5 w-5 mt-0.5 flex-shrink-0" />
                        <span>
                          <strong>Next Step:</strong> Please send your Order ID
                          ({orderId}) to our messenger service to confirm your
                          order and receive payment instructions.
                        </span>
                      </AlertDescription>
                    </Alert>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center p-6 pt-0">
                  <Button asChild>
                    <Link href="/contact">Contact Us via Messenger</Link>
                  </Button>
                </CardFooter>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Details</h2>

                  <div className="space-y-6">
                    <div>
                      <h3 className="font-medium mb-3">Items</h3>
                      <div className="space-y-4">
                        <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">Mesza Desk Pro</h4>
                              <p className="text-sm text-muted-foreground">
                                60cm × 30cm × 100cm, Black
                              </p>
                              <p className="text-sm">Qty: 1</p>
                            </div>
                          </div>
                          <div className="font-medium">$699.00</div>
                        </div>

                        <div className="flex justify-between items-center">
                          <div className="flex gap-4">
                            <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0"></div>
                            <div>
                              <h4 className="font-medium">Monitor Arm</h4>
                              <p className="text-sm text-muted-foreground">
                                Silver
                              </p>
                              <p className="text-sm">Qty: 1</p>
                            </div>
                          </div>
                          <div className="font-medium">$129.00</div>
                        </div>
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>$828.00</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">
                          Shipping (Standard)
                        </span>
                        <span>Free</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>$82.80</span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>$910.80</span>
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Shipping Address</h3>
                      <address className="not-italic text-muted-foreground">
                        John Doe
                        <br />
                        123 Main Street
                        <br />
                        Apt 4B
                        <br />
                        San Francisco, CA 94107
                        <br />
                        United States
                      </address>
                    </div>

                    <div>
                      <h3 className="font-medium mb-3">Contact Information</h3>
                      <div className="text-muted-foreground">
                        <p>Email: john.doe@example.com</p>
                        <p>Phone: (123) 456-7890</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
