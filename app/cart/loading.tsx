import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function CartLoading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <Skeleton className="h-10 w-[150px]" />
              <Skeleton className="h-5 w-[300px]" />
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_auto] gap-6 text-sm text-muted-foreground font-medium py-2 border-b">
                    <Skeleton className="h-5 w-20" />
                    <Skeleton className="h-5 w-10" />
                    <Skeleton className="h-5 w-16" />
                  </div>
                  {Array(3).fill(0).map((_, idx) => (
                    <div
                      key={idx}
                      className="grid md:grid-cols-[2fr_1fr_1fr_auto] gap-4 md:gap-6 py-4 border-b"
                    >
                      <div className="flex gap-4 items-center">
                        <Skeleton className="w-20 h-20 rounded-md flex-shrink-0" />
                        <div>
                          <Skeleton className="h-6 w-[120px] mb-2" />
                          <Skeleton className="h-4 w-[80px]" />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Skeleton className="h-6 w-16" />
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <Skeleton className="h-8 w-28" />
                        </div>
                      </div>
                      <div className="flex items-center">
                        <Skeleton className="h-8 w-8" />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <Skeleton className="h-10 w-[150px]" />
                  <Skeleton className="h-10 w-[100px]" />
                </div>
              </div>

              <div>
                <div className="rounded-lg border shadow-sm">
                  <div className="p-6">
                    <Skeleton className="h-6 w-[150px] mb-4" />
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <Skeleton className="h-5 w-20" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton className="h-5 w-16" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                      <div className="flex justify-between">
                        <Skeleton className="h-5 w-24" />
                        <Skeleton className="h-5 w-16" />
                      </div>
                    </div>
                    <div className="mt-6 space-y-3">
                      <Skeleton className="h-11 w-full" />
                      <Skeleton className="h-11 w-full" />
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