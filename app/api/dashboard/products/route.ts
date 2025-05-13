import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { NextResponse } from "next/server";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function GET() {
  try {
    const products = await convex.query(api.product.getProducts, {
      onlyActive: false,
    });

    return NextResponse.json(products, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const product = await convex.mutation(api.product.createProduct, body);

    return NextResponse.json(product, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Failed to create product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}

export async function PUT(request: Request) {
  try {
    // Note: For specific product updates, usually the ID is part of the URL
    // e.g., /api/dashboard/products/[productId]
    // If this route is meant for bulk updates or a general update endpoint
    // that receives the ID in the body, this is fine.
    // Assuming productId is in the body for this example.
    const body = await request.json();

    // Ensure productId is present in the body for the updateProduct mutation
    if (!body.productId) {
      return NextResponse.json(
        { error: "Product ID is required for update" },
        {
          status: 400, // Bad Request
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    const updatedProduct = await convex.mutation(
      api.product.updateProduct,
      body
    );

    return NextResponse.json(updatedProduct, {
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Failed to update product:", error);
    let errorMessage = "Failed to update product";
    if (error instanceof Error) {
      errorMessage = error.message;
    }
    return NextResponse.json(
      { error: errorMessage },
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
