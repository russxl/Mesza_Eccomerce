import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ShippingLoading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <Skeleton className="h-10 w-[200px]" />
              <Skeleton className="h-5 w-[350px]" />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
              {/* Form Section */}
              <div className="rounded-lg border shadow-sm">
                <div className="p-6">
                  <div className="space-y-6">
                    {/* Contact Information */}
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-[200px]" />
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Skeleton className="h-5 w-24" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                        <div className="space-y-2">
                          <Skeleton className="h-5 w-24" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-12" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </div>

                    {/* Shipping Address */}
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-[200px]" />
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-32" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="space-y-2">
                          <Skeleton className="h-5 w-12" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                        <div className="space-y-2">
                          <Skeleton className="h-5 w-16" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                        <div className="space-y-2">
                          <Skeleton className="h-5 w-20" />
                          <Skeleton className="h-10 w-full" />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-10 w-full" />
                      </div>
                    </div>

                    {/* Shipping Method */}
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-[200px]" />
                      <div className="space-y-4">
                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <Skeleton className="h-5 w-5 rounded-full" />
                            <Skeleton className="h-5 w-[120px]" />
                          </div>
                          <div className="text-right">
                            <Skeleton className="h-5 w-16" />
                            <Skeleton className="h-4 w-24 mt-1" />
                          </div>
                        </div>
                        <div className="flex items-center justify-between rounded-lg border p-4">
                          <div className="flex items-center gap-3">
                            <Skeleton className="h-5 w-5 rounded-full" />
                            <Skeleton className="h-5 w-[120px]" />
                          </div>
                          <div className="text-right">
                            <Skeleton className="h-5 w-16" />
                            <Skeleton className="h-4 w-24 mt-1" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Special Instructions */}
                    <div className="space-y-4">
                      <Skeleton className="h-8 w-[200px]" />
                      <Skeleton className="h-20 w-full" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row gap-2 justify-between p-4 sm:p-6 pt-0 border-t">
                  <Skeleton className="h-10 w-full sm:w-[200px]" />
                </div>
              </div>

              {/* Order Summary Section */}
              <div className="rounded-lg border shadow-sm">
                <div className="p-6">
                  <Skeleton className="h-8 w-[150px] mb-4" />
                  <div className="space-y-4">
                    {Array(2).fill(0).map((_, idx) => (
                      <div key={idx} className="flex items-center justify-between border-b pb-4">
                        <div className="flex items-center gap-4">
                          <Skeleton className="h-16 w-16 rounded-md" />
                          <div className="space-y-1">
                            <Skeleton className="h-5 w-28" />
                            <Skeleton className="h-4 w-16" />
                          </div>
                        </div>
                        <Skeleton className="h-5 w-16" />
                      </div>
                    ))}
                    <div className="space-y-3 pt-4">
                      <div className="flex justify-between">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton className="h-6 w-20 font-bold" />
                        <Skeleton className="h-6 w-20 font-bold" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
} 