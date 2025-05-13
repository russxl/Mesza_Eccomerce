import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";

// Initialize Convex client
const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function PATCH(
  request: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  try {
    // Await params since it's now a Promise in Next.js 15
    const { orderId } = await context.params;
    
    if (!orderId) {
      return NextResponse.json(
        { message: "Order ID is required" },
        { status: 400 }
      );
    }

    const updates = await request.json();
    if (Object.keys(updates).length === 0) {
      return NextResponse.json(
        { message: "No update data provided" },
        { status: 400 }
      );
    }

    // Call the Convex mutation
    // Note: If your mutation requires authentication, you'll need to handle passing
    // the session/token appropriately here, or ensure the Convex function handles it.
    const result = await convex.mutation(api.orders.updateOrderStatusAndTracking, {
      orderId,
      status: updates.status, // Pass undefined if not present, Convex handles optional fields
      message: updates.message,
      trackingNumber: updates.trackingNumber,
    });

    if (result && result.success) {
      return NextResponse.json(result);
    } else {
      // If Convex returns a specific error message, pass it along
      return NextResponse.json(
        { message: result?.message || "Failed to update order in Convex" },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error("API PATCH /api/order/[orderId] Error:", error);
    const errorMessage = error instanceof Error ? error.message : "Internal server error";
    return NextResponse.json({ message: errorMessage }, { status: 500 });
  }
}

// GET handler for fetching order details
export async function GET(
  request: NextRequest,
  context: { params: Promise<{ orderId: string }> }
) {
  // Await params since it's now a Promise in Next.js 15
  const { orderId } = await context.params;
  
  if (!orderId) {
    return NextResponse.json(
      { message: "Order ID is required" },
      { status: 400 }
    );
  }

  try {
    const order = await convex.query(api.orders.getOrderSummaryById, { orderId });
    if (!order) {
      return NextResponse.json({ message: "Order not found" }, { status: 404 });
    }
    return NextResponse.json(order);
  } catch {
    return NextResponse.json({ message: "Order not found" }, { status: 404 });
  }
}
