import { NextRequest, NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { shippingSchema } from "@/schema/shipping-schema"; // Import the Zod schema for validation

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);


export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    // Extract orderId separately if it's passed in the body,
    // otherwise, it needs to be part of the shippingData
    const { orderId, ...shippingData } = body;

    if (!orderId) {
      return NextResponse.json({ error: "Missing orderId" }, { status: 400 });
    }

    // Validate the shipping data against the Zod schema
    const validationResult = shippingSchema.safeParse(shippingData);
    if (!validationResult.success) {
      console.error(
        "Shipping data validation error:",
        validationResult.error.errors
      );
      return NextResponse.json(
        {
          error: "Invalid shipping data",
          details: validationResult.error.flatten(),
        },
        { status: 400 }
      );
    }

    // Prepare data for the Convex mutation, ensuring all required fields are present
    const mutationArgs = {
      orderId: orderId, // Pass the user-facing order ID
      ...validationResult.data, // Pass the validated shipping data
    };

    // Call the Convex mutation to add shipping details
    const response = await convex.mutation(
      api.orders.addShippingDetails,
      mutationArgs
    );

    if (response.success) {
      // Fetch the order to get the cart
      const order = await convex.query(api.orders.getOrder, { orderId });
      return NextResponse.json({
        status: "success",
        message: "Shipping details added successfully.",
        shippingId: response.shippingId, // Return the new shipping document ID
        cart: order?.cart || [], // Include the cart in the response
        total: order?.subTotal || 0 // Optionally include total for convenience
      });
    } else {
      // Handle potential errors returned from the mutation itself if needed
      console.error("Convex mutation failed:", response);
      return NextResponse.json(
        { error: "Failed to add shipping details in Convex" },
        { status: 500 }
      );
    }
  } catch (error: unknown) {
    console.error("Shipping API error:", error);
    // Handle potential JSON parsing errors or other unexpected issues
    const errorMessage =
      error instanceof Error ? error.message : "An unknown error occurred";
    return NextResponse.json(
      { error: "Failed to process shipping details", details: errorMessage },
      { status: 500 }
    );
  }
}
