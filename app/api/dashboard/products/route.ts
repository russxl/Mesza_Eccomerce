import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { NextResponse } from "next/server";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function GET() {
  try {
    console.log("Fetching products..."); // Debug log
    const products = await convex.query(api.product.getProducts, {
      onlyActive: false
    });
    
    return NextResponse.json(products, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("Failed to fetch products:", error);
    return NextResponse.json(
      { error: "Failed to fetch products" },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
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
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("Failed to create product:", error);
    return NextResponse.json(
      { error: "Failed to create product" },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}

