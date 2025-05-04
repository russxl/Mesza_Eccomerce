import { api } from "@/convex/_generated/api";
import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function POST(request: NextRequest) {
  try {
    const { subTotal, cart } = await request.json();

    // Create order with the required fields
    const response = await convex.mutation(api.orders.createOrder, {
      subTotal,
      cart,
    });

    // Return the orderId for the next step (shipping)
    return NextResponse.json({
      orderId: response,
      status: "success",
      message: "Order created successfully",
    });
  } catch (error) {
    console.error("Order creation error:", error);
    return NextResponse.json(
      { error: "Failed to create order" },
      { status: 500 }
    );
  }
}
