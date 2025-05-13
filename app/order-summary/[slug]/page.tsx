"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { useParams, notFound } from "next/navigation";
import { Check, Copy, MessageSquare, Loader2, Package } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { useOrderStore, OrderWithShipping } from "@/store/orderStore";
import { formatCurrency } from "@/utils/formatToCurrency"; // Import currency formatter
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { Badge } from "@/components/ui/badge";

// Function to calculate shipping cost based on saved details (similar to OrderSummary component)
const calculateSavedShippingCost = (
  shipping: OrderWithShipping["shipping"]
): number => {
  if (!shipping) return 0; // Or a default if no shipping info yet

  const expressShippingCost = shipping.shippingMethod === "express" ? 500 : 0;
  const metroManilaProvinces = ["790000", "920000", "MM", "METRO-MANILA"];
  const isMetroManila = metroManilaProvinces.includes(shipping.state || "");
  const isRizal = shipping.state === "RIZAL";

  if (isMetroManila || isRizal) {
    return 999 + expressShippingCost;
  } else {
    return 3500 + expressShippingCost;
  }
};

export default function OrderSummaryPage() {
  const { slug } = useParams();
  const { getOrderById } = useOrderStore();
  const [order, setOrder] = useState<OrderWithShipping | null>(null);
  const [loading, setLoading] = useState(true);
  /* eslint-disable @typescript-eslint/no-unused-vars */
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const orderUrl = typeof window !== "undefined" ? window.location.href : "";
  const orderUrlRef = useRef<HTMLInputElement>(null);

  const orderData = useQuery(
    api.orders.getOrder,
    slug ? { orderId: slug as string } : "skip"
  );
  

  useEffect(() => {
    const fetchOrder = async () => {
      if (!slug) {
        notFound();
        return;
      }

      setLoading(true);
      try {
        const orderData = await getOrderById(slug as string);
        if (!orderData) {
          notFound();
          return;
        }
        setOrder(orderData);
      } catch {
        notFound();
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [slug, getOrderById]);

  const copyToClipboard = () => {
    if (orderUrlRef.current) {
      navigator.clipboard.writeText(orderUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  // Calculate shipping cost and total based on fetched data
  const shippingCost = order ? calculateSavedShippingCost(order.shipping) : 0;
  const subTotal = order?.subTotal ?? 0;
  const total = subTotal + shippingCost; // Assuming no tax for now, adjust if needed

  const formattedOrderDate = order?._creationTime
    ? new Date(order._creationTime).toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      })
    : "N/A";

  if (loading) {
    return (
      <div className="flex min-h-[100dvh] flex-col items-center justify-center">
        <Loader2 className="h-16 w-16 animate-spin text-primary" />
        <p className="mt-4 text-muted-foreground">Loading order details...</p>
      </div>
    );
  }

 

  if (!order || error) {
    // This case might be redundant if error handles 'Order not found'
    return notFound();
  }

  // If order doesn't have shipping details, show 404 page
  if (orderData !== undefined && !orderData?.shippingId) {
    notFound(); // Trigger 404 page
  }

  // Determine status display
  const getStatusBadge = (status: string) => {
    switch (status.toLowerCase()) {
      case "pending":
        return (
          <Badge
            variant="outline"
            className="bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
          >
            {" "}
            Pending Payment
          </Badge>
        );
      case "processing":
        return (
          <Badge
            variant="outline"
            className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
          >
            Processing
          </Badge>
        );
      case "shipped":
        return (
          <Badge
            variant="outline"
            className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
          >
            Shipped
          </Badge>
        );
      case "delivered":
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
          >
            Delivered
          </Badge>
        );
      case "cancelled":
        return (
          <Badge
            variant="outline"
            className="bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
          >
            Cancelled
          </Badge>
        );
      default:
        return (
          <Badge
            variant="outline"
            className="bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-100"
          >
            {status}
          </Badge>
        );
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="mx-auto max-w-3xl">
              {/* Confirmation Header */}
              <div className="flex flex-col gap-2 mb-8 text-center">
                <div className="flex justify-center mb-4">
                  <div className="h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <Check className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <h1 className="text-3xl font-bold tracking-tight">
                  Order Confirmed
                </h1>
                <p className="text-muted-foreground">
                  Thank you for your order! Your details are below.
                </p>
              </div>

              {/* Email Sent Notification */}
              <Card className="mb-8 mt-8">
                <CardContent className="p-6 text-center">
                  <h2 className="text-lg font-semibold mb-2">Order Confirmation Email Sent</h2>
                  <p className="text-muted-foreground">
                    An order confirmation email was sent to <span className="font-medium">{order.shipping?.email || "your email"}</span>.
                    <br />
                    Please check your inbox (and spam folder) for details.
                  </p>
                </CardContent>
              </Card>

              {/* Order Information Card */}
              <Card className="mb-8">
                <CardContent className="p-6">
                  <div className="space-y-6">
                    {/* Order Info Header */}
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div>
                        <h2 className="text-lg font-semibold">
                          Order Information
                        </h2>
                        <p className="text-sm text-muted-foreground mt-1">
                          Reference this information for inquiries.
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-muted-foreground">
                          Order Date
                        </div>
                        <div>{formattedOrderDate}</div>
                      </div>
                    </div>

                    {/* Order ID & Status */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <h3 className="font-medium mb-2">Order ID</h3>
                        <p className="text-lg font-mono">{order.orderId}</p>
                      </div>
                      <div>
                        <h3 className="font-medium mb-2">Order Status</h3>
                        {getStatusBadge(order.status)}
                      </div>
                    </div>

                    {/* Order URL */}
                    <div className="space-y-2">
                      <h3 className="font-medium">Order Tracking URL</h3>
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
                        Copy this URL to check your order status.
                      </p>
                    </div>

                    {/* Optional: Next Step Alert (if needed based on status) */}
                    {order.status === "pending" && (
                      <Alert className="bg-primary/10 border-primary/20">
                        <AlertDescription className="flex items-start gap-2">
                          <MessageSquare className="h-5 w-5 mt-0.5 flex-shrink-0" />
                          <span>
                            <strong>Next Step:</strong> Please send your Order
                            ID ({order.orderId}) to our messenger service to
                            confirm your order and receive payment instructions.
                          </span>
                        </AlertDescription>
                      </Alert>
                    )}
                  </div>
                </CardContent>
                {/* Optional: Footer Button (if needed) */}
                {order.status === "pending" && (
                  <CardFooter className="flex justify-center p-6 pt-0">
                    <Button asChild>
                      <Link href="/contact">Contact Us via Messenger</Link>
                    </Button>
                  </CardFooter>
                )}
              </Card>

              {/* Tracking Number Section */}
              {order.shipping?.trackingNumber && (
                <Card className="mb-8">
                  <CardContent className="p-6 text-center">
                    <h2 className="text-lg font-semibold mb-2">Tracking Number</h2>
                    <p className="text-muted-foreground">
                      Your tracking number is: <span className="font-mono font-bold break-all">{order.shipping.trackingNumber}</span>
                    </p>
                    {/* Optionally, add a tracking link if you have one */}
                    {order.shipping.trackingNumber && (
                      <Button
                      variant="outline"
                      className="flex-1 gap-2"
                      onClick={() =>
                        window.open(
                          `${order.shipping?.trackingNumber}`,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    >
                      <Package className="size-6" />
                      Track your package
                    </Button>
                    )}
                  </CardContent>
                </Card>
              )}

              {/* Order Details Card */}
              <Card>
                <CardContent className="p-6">
                  <h2 className="text-xl font-semibold mb-4">Order Details</h2>
                  <div className="space-y-6">
                    {/* Items */}
                    <div>
                      <h3 className="font-medium mb-3">Items</h3>
                      <div className="space-y-4">
                        {order.cart.map((item, index) => (
                          <div
                            key={index}
                            className="flex justify-between items-start"
                          >
                            <div className="flex gap-4">
                              <div className="w-16 h-16 bg-muted rounded-md flex-shrink-0 relative overflow-hidden">
                                <Image
                                  src={
                                    item.image ||
                                    "/placeholder.svg?height=64&width=64"
                                  }
                                  alt={item.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                              <div>
                                <h4 className="font-medium">{item.name}</h4>
                                {item.selectedOptions &&
                                  Object.entries(item.selectedOptions).map(
                                    ([key, value]) => (
                                      <p
                                        key={key}
                                        className="text-sm text-muted-foreground"
                                      >
                                        {key}: {String(value)}
                                      </p>
                                    )
                                  )}
                                <p className="text-sm">Qty: {item.quantity}</p>
                              </div>
                            </div>
                            <div className="font-medium text-right">
                              {formatCurrency({
                                number: item.price * item.quantity,
                              })}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Separator />

                    {/* Totals */}
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>{formatCurrency({ number: subTotal })}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span>{formatCurrency({ number: shippingCost })}</span>
                      </div>
                      {/* Add Tax calculation if applicable */}
                      {/* <div className="flex justify-between">
                        <span className="text-muted-foreground">Tax</span>
                        <span>{formatCurrency({ number: taxAmount })}</span>
                      </div> */}
                      <Separator />
                      <div className="flex justify-between font-medium text-lg">
                        <span>Total</span>
                        <span>{formatCurrency({ number: total })}</span>
                      </div>
                    </div>

                    {/* Shipping Address (if available) */}
                    {order.shipping && (
                      <div>
                        <h3 className="font-medium mb-3">Shipping Address</h3>
                        <address className="not-italic text-muted-foreground">
                          {order.shipping.firstName} {order.shipping.lastName}
                          <br />
                          {order.shipping.address}
                          {order.shipping.apartment && (
                            <>
                              <br />
                              {order.shipping.apartment}
                            </>
                          )}
                          <br />
                          {order.shipping.city}, {order.shipping.state}{" "}
                          {order.shipping.zipCode}
                          <br />
                          {order.shipping.country}
                        </address>
                      </div>
                    )}

                    {/* Contact Information (if available) */}
                    {order.shipping && (
                      <div>
                        <h3 className="font-medium mb-3">
                          Contact Information
                        </h3>
                        <div className="text-muted-foreground">
                          <p>Email: {order.shipping.email}</p>
                          <p>Phone: {order.shipping.phone}</p>
                        </div>
                      </div>
                    )}
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
