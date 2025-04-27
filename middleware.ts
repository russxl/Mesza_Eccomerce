import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/account(.*)",
  // Add other protected routes
]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/api(.*)",
  "/404(.*)",
  "/not-found(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // 1. Redirect logged-in users away from public pages
  if (userId && isPublicRoute(req) && !req.nextUrl.pathname.startsWith("/api")) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // 2. Redirect unauthenticated users trying to access protected routes
  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/not-found", req.url));
  }

  // 3. Allow other requests
  return NextResponse.next();
});

export const config = {
  matcher: [
    "/((?!_next|.*\\..*).*)",
    "/(api|trpc)(.*)",
  ],
};
