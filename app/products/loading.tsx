import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ProductsLoading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Skeleton className="h-12 w-[300px] mx-auto" />
                <Skeleton className="h-6 w-[600px] max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="space-y-1">
                <Skeleton className="h-8 w-[250px]" />
                <Skeleton className="h-5 w-[350px]" />
              </div>
              <div className="flex items-center gap-4">
                <Skeleton className="h-10 w-[180px]" />
              </div>
            </div>

            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array(8).fill(0).map((_, index) => (
                <div key={index} className="overflow-hidden rounded-lg border bg-card text-card-foreground shadow">
                  <Skeleton className="aspect-square w-full" />
                  <div className="p-6 space-y-2">
                    <Skeleton className="h-5 w-16" />
                    <Skeleton className="h-4 w-[90%]" />
                    <div className="flex items-center justify-between pt-2">
                      <Skeleton className="h-5 w-16" />
                      <Skeleton className="h-9 w-24" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
} 