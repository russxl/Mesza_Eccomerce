import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { sendEmail } from "@/lib/email";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { orderId, status, customerEmail, customerName } = body;

    // Validate required fields
    if (!orderId || !status || !customerEmail || !customerName) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Get order details first
    const orderDetails = await convex.query(api.orders.getOrderSummaryById, {
      orderId,
    });

    if (!orderDetails) {
      return NextResponse.json(
        { error: "Order not found" },
        { status: 404 }
      );
    }

    // Update order status in the database
    const result = await convex.mutation(api.orders.updateOrderStatusAndTracking, {
      orderId,
      status,
      message: `Order status updated to ${status}`,
    });

    if (!result || !result.success) {
      return NextResponse.json(
        { error: "Failed to update order status" },
        { status: 500 }
      );
    }

    // Send appropriate email based on status
    switch (status) {
      case "shipped":
        await sendEmail("orderShipped", customerEmail, {
          firstName: customerName,
          orderId,
          trackingNumber: orderDetails.shipping?.trackingNumber,
          carrier: "Standard Shipping", // You might want to make this dynamic based on shipping method
          trackingUrl: `https://tracking.example.com/${orderDetails.shipping?.trackingNumber}`, // Replace with actual tracking URL
        });
        break;

      case "delivered":
        await sendEmail("orderDelivered", customerEmail, {
          firstName: customerName,
          orderId,
          deliveryDate: new Date().toLocaleDateString(),
        });
        break;
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error updating order status:", error);
    return NextResponse.json(
      { error: "Failed to update order status" },
      { status: 500 }
    );
  }
} 