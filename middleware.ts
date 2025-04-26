// middleware.ts
import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

const isProtectedRoute = createRouteMatcher([
  "/account(.*)",
  // Add other protected routes here
]);

const isPublicRoute = createRouteMatcher([
  "/",
  "/sign-in(.*)",
  "/api(.*)",
  "/404(.*)",
  "/not-found(.*)", // Add not-found to public routes
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // 1. Redirect logged-in users away from auth pages
  if (
    userId &&
    isPublicRoute(req) &&
    !req.nextUrl.pathname.startsWith("/api")
  ) {
    return NextResponse.redirect(new URL("/dashboard", req.url));
  }

  // 2. Handle non-logged-in users accessing protected routes
  if (!userId && isProtectedRoute(req)) {
    return NextResponse.redirect(new URL("/not-found", req.url));
  }

  // 3. Allow all other requests
  return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
