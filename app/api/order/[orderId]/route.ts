import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { NextResponse } from "next/server";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function GET(
    request: Request,
  context: { params: Promise<{ orderId: string }> }
) {
    try {
        const { orderId } = await context.params;
        if (!orderId) {
            return NextResponse.json(
                { error: "Order ID is required" },
                { status: 400 }
            );
        }

        console.log("API route: Fetching order with ID:", orderId);
        
        // Pass the order ID to Convex
        const data = await convex.query(api.orders.getOrder, { orderId });
        return NextResponse.json(data);
    } catch (error) {
        console.error("Failed to fetch orders:", error);
        return NextResponse.json(
            { error: "Failed to fetch orders" },
            { status: 500 }
        );
    }
}