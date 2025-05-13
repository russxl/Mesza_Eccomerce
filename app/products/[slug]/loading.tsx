import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ProductDetailLoading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <nav className="flex gap-2 text-sm text-muted-foreground">
                <Skeleton className="h-4 w-10" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-20" />
                <Skeleton className="h-4 w-4" />
                <Skeleton className="h-4 w-40" />
              </nav>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              {/* Product Image Gallery */}
              <div className="space-y-4">
                <Skeleton className="aspect-square w-full rounded-lg" />
                <div className="flex gap-2 overflow-auto pb-2">
                  {Array(4).fill(0).map((_, idx) => (
                    <Skeleton key={idx} className="aspect-square w-20 h-20 flex-shrink-0 rounded-md" />
                  ))}
                </div>
              </div>

              {/* Product Actions */}
              <div className="space-y-8">
                <div className="space-y-2">
                  <Skeleton className="h-8 w-[200px]" />
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {Array(5).fill(0).map((_, idx) => (
                        <Skeleton key={idx} className="h-4 w-4 mr-0.5" />
                      ))}
                    </div>
                    <Skeleton className="h-4 w-20" />
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Skeleton className="h-8 w-28" />
                    <Skeleton className="h-6 w-20" />
                  </div>

                  <Skeleton className="h-20 w-full" />
                  
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-[120px]" />
                    <div className="flex flex-wrap gap-2">
                      {Array(3).fill(0).map((_, idx) => (
                        <Skeleton key={idx} className="h-10 w-20 rounded-md" />
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Skeleton className="h-5 w-[120px]" />
                    <div className="flex flex-wrap gap-2">
                      {Array(4).fill(0).map((_, idx) => (
                        <Skeleton key={idx} className="h-10 w-16 rounded-md" />
                      ))}
                    </div>
                  </div>

                  <div className="flex items-center gap-4 mt-6">
                    <div className="flex items-center border rounded-md">
                      <Skeleton className="h-10 w-10" />
                      <Skeleton className="h-10 w-12" />
                      <Skeleton className="h-10 w-10" />
                    </div>
                    <Skeleton className="h-10 flex-1" />
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <Skeleton className="h-10 w-full mb-6" />
              <div className="space-y-4 pt-6">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-[95%]" />
                <Skeleton className="h-4 w-[90%]" />
                <Skeleton className="h-4 w-[85%]" />
                <Skeleton className="h-4 w-[80%]" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
