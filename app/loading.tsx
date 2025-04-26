"use client";

import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function HomeSkeleton() {
  return (
    <div className="">
      <SiteHeader />
      <main>
        {/* Hero Section Skeleton */}
        <section className="relative w-full min-h-[700px] py-12 md:py-24 lg:py-32 flex items-center justify-center overflow-hidden bg-gray-200 animate-pulse">
          <div className="absolute inset-0 bg-gray-300 z-10" />
          <div className="relative z-20 w-full px-4 md:px-6 flex flex-col items-center justify-center text-center">
            <div className="h-12 w-3/4 bg-gray-400 rounded mb-6 mx-auto"></div>
            <div className="h-6 w-1/2 bg-gray-400 rounded mb-8 mx-auto"></div>
            <div className="flex flex-col gap-3 min-[700px]:flex-row justify-center">
              <div className="h-12 w-40 bg-gray-400 rounded"></div>
              <div className="h-12 w-40 bg-gray-400 rounded"></div>
            </div>
          </div>
        </section>

        {/* Featured Products Skeleton */}
        <section className="py-16 bg-muted md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <div className="h-10 w-1/4 bg-gray-300 rounded mx-auto"></div>
              <div className="h-6 w-1/3 bg-gray-300 rounded mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="bg-white border-0 shadow-lg rounded-xl overflow-hidden animate-pulse"
                >
                  <div className="aspect-[4/3] w-full bg-gray-300"></div>
                  <div className="p-6">
                    <div className="h-6 w-3/4 bg-gray-300 rounded mb-4"></div>
                    <div className="h-4 w-full bg-gray-300 rounded mb-2"></div>
                    <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                  </div>
                  <div className="px-6 pb-6 flex items-center justify-between">
                    <div className="h-6 w-16 bg-gray-300 rounded"></div>
                    <div className="h-10 w-24 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-12">
              <div className="h-12 w-48 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* Benefits Section Skeleton */}
        <section className="w-full py-16 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-3">
                <div className="h-10 w-1/2 bg-gray-300 rounded mx-auto"></div>
                <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto"></div>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div
                  key={item}
                  className="flex flex-col items-center space-y-3 border rounded-lg p-8"
                >
                  <div className="h-14 w-14 bg-gray-300 rounded-full"></div>
                  <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
                  <div className="h-4 w-full bg-gray-300 rounded"></div>
                  <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section Skeleton */}
        <section className="w-full py-16 md:py-32 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              <div className="aspect-square w-full bg-gray-300 rounded-xl"></div>
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <div className="h-10 w-1/3 bg-gray-300 rounded"></div>
                  <div className="h-6 w-full bg-gray-300 rounded"></div>
                </div>
                <ul className="grid gap-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <li key={item} className="flex items-start gap-2">
                      <div className="h-5 w-5 bg-gray-300 rounded-full"></div>
                      <div className="flex-1">
                        <div className="h-5 w-1/2 bg-gray-300 rounded mb-1"></div>
                        <div className="h-4 w-full bg-gray-300 rounded"></div>
                      </div>
                    </li>
                  ))}
                </ul>
                <div className="h-12 w-32 bg-gray-300 rounded"></div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section Skeleton */}
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="h-10 w-1/2 bg-gray-300 rounded mx-auto"></div>
                <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto"></div>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              {[1, 2, 3].map((item) => (
                <div
                  key={item}
                  className="overflow-hidden bg-white rounded-lg shadow"
                >
                  <div className="p-6">
                    <div className="flex flex-col gap-4">
                      <div className="flex gap-4 items-center">
                        <div className="h-12 w-12 bg-gray-300 rounded-full"></div>
                        <div>
                          <div className="h-5 w-24 bg-gray-300 rounded"></div>
                          <div className="h-4 w-20 bg-gray-300 rounded mt-1"></div>
                        </div>
                      </div>
                      <div className="flex gap-1">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <div
                            key={star}
                            className="h-5 w-5 bg-gray-300 rounded"
                          ></div>
                        ))}
                      </div>
                      <div className="space-y-2">
                        <div className="h-4 w-full bg-gray-300 rounded"></div>
                        <div className="h-4 w-5/6 bg-gray-300 rounded"></div>
                        <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="h-12 w-48 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </section>

        {/* FAQ Section Skeleton */}
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <div className="h-10 w-1/2 bg-gray-300 rounded mx-auto"></div>
                <div className="h-6 w-3/4 bg-gray-300 rounded mx-auto"></div>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              {[1, 2, 3, 4, 5, 6].map((item) => (
                <div key={item} className="border rounded-lg p-4">
                  <div className="flex justify-between items-center">
                    <div className="h-6 w-3/4 bg-gray-300 rounded"></div>
                    <div className="h-6 w-6 bg-gray-300 rounded"></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-center">
              <div className="h-12 w-48 bg-gray-300 rounded-lg"></div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
