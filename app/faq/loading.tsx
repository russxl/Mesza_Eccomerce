import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function FAQLoading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Skeleton className="h-12 w-[400px] mx-auto" />
                <Skeleton className="h-6 w-[600px] max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="w-full">
              <div className="flex justify-center mb-8">
                <Skeleton className="h-10 w-full max-w-md" />
              </div>

              <div className="space-y-8">
                <Skeleton className="h-8 w-[250px]" />
                <div className="w-full space-y-4">
                  {Array(5).fill(0).map((_, idx) => (
                    <div key={idx} className="rounded-md border">
                      <div className="flex justify-between p-4 items-center">
                        <Skeleton className="h-5 w-[80%]" />
                        <Skeleton className="h-5 w-5 rounded-full" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="max-w-md mx-auto space-y-6 text-center">
              <div className="space-y-2">
                <Skeleton className="h-10 w-[300px] mx-auto" />
                <Skeleton className="h-5 w-full mx-auto" />
              </div>
              <Skeleton className="h-10 w-[150px] mx-auto" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
} 