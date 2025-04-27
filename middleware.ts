import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default async function middleware(req: NextRequest) {
  // Check for authentication using cookies instead of Clerk's functions
  const authCookie = req.cookies.get("__session");
  const isAuthenticated = !!authCookie?.value;
  const path = req.nextUrl.pathname;
  
  // Public routes that redirect to dashboard if logged in
  const publicRoutes = ["/", "/sign-in", "/404", "/not-found"];
  const isPublicRoute = publicRoutes.some(route => 
    path === route || (route !== "/" && path.startsWith(route))
  );
  
  // Protected routes that require authentication
  const isProtectedRoute = path.startsWith("/accounts");
  
  // Redirect logic
  if (isAuthenticated && isPublicRoute && !path.startsWith("/api")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }
  
  if (!isAuthenticated && isProtectedRoute) {
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