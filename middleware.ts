import { NextRequest, NextResponse } from "next/server";
import { getAuth } from "@clerk/nextjs/server";

export default async function middleware(req: NextRequest) {
  const { userId } = await getAuth(req);
  const path = req.nextUrl.pathname;
  
  // Redirect from public routes if logged in
  if (userId && (
    path === "/" || 
    path.startsWith("/sign-in") || 
    path.startsWith("/404") || 
    path.startsWith("/not-found")
  ) && !path.startsWith("/api")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  
  // Redirect from protected routes if not logged in
  if (!userId && path.startsWith("/accounts")) {
    return NextResponse.redirect(new URL("/not-found", req.url));
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};