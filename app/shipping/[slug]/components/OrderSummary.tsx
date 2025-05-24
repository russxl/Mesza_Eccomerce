"use client";

import type React from "react";
import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Shipping } from "@/schema/shipping-schema"; // Keep Shipping for form context type
import { formatCurrency } from "@/utils/formatToCurrency";
import { useFormContext } from "react-hook-form";
import { useOrderStore, OrderWithShipping } from "@/store/orderStore"; // Import the new type

export function OrderSummary() {
  const { getOrderById } = useOrderStore();
  const { slug } = useParams();
  const [order, setOrder] = useState<OrderWithShipping | null>(null); // Use OrderWithShipping
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  // Keep dynamic shipping cost calculation based on form for checkout process
  const [calculatedShippingCost, setCalculatedShippingCost] = useState(0);

  // Try to get form context, but don't error if it doesn't exist
  const formContext = useFormContext<Shipping>(); // Form context uses the Shipping schema for form fields

  // Watch for province and shipping method changes if form context exists
  useEffect(() => {
    if (formContext) {
      const subscription = formContext.watch((value, { name }) => {
        if (name === "state" || name === "shippingMethod" || !name) {
          const province = value.state;
          const shippingMethod = value.shippingMethod;

          // If pickup is selected, shipping is free
          if (shippingMethod === "Pickup") {
            setCalculatedShippingCost(0);
            return;
          }

          // For standard shipping, calculate based on location
          const metroManilaProvinces = [
            "790000",
            "920000",
            "MM",
            "METRO-MANILA",
          ];
          const isMetroManila = metroManilaProvinces.includes(province || "");
          const isRizal = province === "RIZAL";

          // Update the calculated shipping cost based on form selections
          if (isMetroManila || isRizal) {
            setCalculatedShippingCost(999);
          } else {
            setCalculatedShippingCost(3500);
          }
        }
      });

      return () => subscription.unsubscribe();
    }
  }, [formContext]);

  useEffect(() => {
    const fetchOrder = async () => {
      if (slug) {
        setLoading(true);
        setError(null);
        try {
          // Fetch order data using the updated store function
          const orderData: OrderWithShipping | null = await getOrderById(
            slug as string
          );
          if (orderData) {
            setOrder(orderData);
            // Note: We don't set shippingCost from orderData here,
            // as this component calculates it dynamically based on the form during checkout.
          } else {
            setError("Order not found.");
          }
        } catch (err) {
          console.error("Failed to fetch order:", err);
          setError("Failed to load order details.");
        } finally {
          setLoading(false);
        }
      } else {
        setError("Order ID is missing.");
        setLoading(false);
      }
    };

    fetchOrder();
  }, [slug, getOrderById]);

  // Calculate totals using the fetched subTotal and the dynamically calculated shipping cost
  const subTotal = order?.subTotal ?? 0;
  const total = subTotal + calculatedShippingCost;

  if (loading) {
    return (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          {/* Skeleton Loader */}
          <div className="space-y-2">
            <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 animate-pulse"></div>
            <div className="h-4 bg-gray-200 rounded w-1/3 animate-pulse"></div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (error) {
    return (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4 text-red-600">Error</h3>
          <p className="text-muted-foreground">{error}</p>
        </CardContent>
      </Card>
    );
  }

  if (!order) {
    return (
      <Card>
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <p className="text-muted-foreground">No order details available.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="w-full">
      <Card className="w-full">
        <CardContent className="p-4 sm:p-6">
          <h3 className="text-lg font-semibold mb-4">Order Summary</h3>
          <div className="space-y-4">
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>{formatCurrency({ number: subTotal })}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Shipping</span>
                {/* Display the dynamically calculated shipping cost */}
                <span>
                  {formatCurrency({ number: calculatedShippingCost })}
                </span>
              </div>
              {/* Removed Tax line for now */}
              <div className="border-t pt-3 flex justify-between font-medium">
                <span>Total</span>
                <span>{formatCurrency({ number: total })}</span>
              </div>
            </div>

            <div className="space-y-4 pt-4">
              <h4 className="text-sm font-medium">Items in Your Order</h4>
              <div className="space-y-3">
                {/* Add check for order.cart before mapping */}
                {order.cart &&
                  order.cart.map((item, index) => (
                    <div key={index} className="flex flex-col xs:flex-row justify-between text-sm break-words">
                      <span className="w-full xs:w-auto">{item.name} ({item.quantity})</span>
                      <span className="w-full xs:w-auto text-right xs:text-left">{formatCurrency({ number: item.price * item.quantity })}</span>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Assistance Section */}
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
