import { ConvexHttpClient } from "convex/browser";
import { api } from "@/convex/_generated/api";
import { NextResponse } from "next/server";

const convex = new ConvexHttpClient(process.env.NEXT_PUBLIC_CONVEX_URL!);

export async function GET() {
  try {
    console.log("Fetching variations..."); // Debug log
    const variations = await convex.query(api.variations.getAllProductVariations, {
    });
    
    return NextResponse.json(variations, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error("Failed to fetch variations:", error);
    return NextResponse.json(
      { error: "Failed to fetch variations" },
      { 
        status: 500,
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
  }
}