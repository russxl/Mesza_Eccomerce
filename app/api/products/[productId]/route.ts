import { NextResponse } from "next/server";
import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

// Helper function to handle CORS
function corsResponse(response: NextResponse) {
  response.headers.set("Access-Control-Allow-Credentials", "true");
  response.headers.set("Access-Control-Allow-Origin", "*"); // Adjust this to specific domains in production
  response.headers.set(
    "Access-Control-Allow-Methods",
    "GET,DELETE,PATCH,POST,PUT"
  );
  response.headers.set(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version"
  );
  return response;
}

// Handle OPTIONS requests for CORS preflight
export async function OPTIONS() {
  return corsResponse(NextResponse.json({}, { status: 200 }));
}

export async function GET(
  request: Request,
  context: { params: Promise<{ productId: string }> }
) {
  const { productId } = await context.params;
  try {
    const product = await convex.query(api.product.getProductbyId, {
      productId: productId as Id<"products">,
    });

    if (!product) {
      return corsResponse(
        NextResponse.json({ error: "Product not found" }, { status: 404 })
      );
    }

    if (!product.isActive) {
      return corsResponse(
        NextResponse.json({ error: "Product not available" }, { status: 404 })
      );
    }

    return corsResponse(NextResponse.json(product));
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return corsResponse(
      NextResponse.json({ error: "Failed to fetch product" }, { status: 500 })
    );
  }
}
