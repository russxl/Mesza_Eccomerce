// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Define protected and public routes
const protectedRoutes = ["/account", "/dashboard"];
const publicRoutes = ["/", "/sign-in", "/api", "/404", "/not-found"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  // Check if the path is a protected route
  const isProtectedRoute = protectedRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Check if the path is a public route
  const isPublicRoute = publicRoutes.some(route => 
    pathname.startsWith(route)
  );
  
  // Get the auth token from the cookies
  const authToken = request.cookies.get("__session")?.value;
  
  // If user is authenticated and trying to access a public route (except API)
  if (authToken && isPublicRoute && !pathname.startsWith("/api")) {
    return NextResponse.redirect(new URL("/dashboard", request.url));
  }
  
  // If user is not authenticated and trying to access a protected route
  if (!authToken && isProtectedRoute) {
    return NextResponse.redirect(new URL("/not-found", request.url));
  }
  
  // Allow all other requests
  return NextResponse.next();
}

export const config = {
  matcher: [
    // Skip Next.js internals and all static files
    "/((?!_next|.*\\..*).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
