import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutLoading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Skeleton className="h-12 w-[200px] mx-auto" />
                <Skeleton className="h-6 w-[600px] max-w-full mx-auto" />
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Skeleton className="h-10 w-[180px] mx-auto" />
                <Skeleton className="h-6 w-[400px] mx-auto" />
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array(3).fill(0).map((_, index) => (
                <div key={index} className="flex flex-col items-center space-y-4 rounded-lg border p-8 text-center">
                  <Skeleton className="h-16 w-16 rounded-full" />
                  <Skeleton className="h-6 w-28" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-[90%]" />
                  <Skeleton className="h-4 w-[80%]" />
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <Skeleton className="h-10 w-[150px] mx-auto" />
                <Skeleton className="h-6 w-[350px] mx-auto" />
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {Array(3).fill(0).map((_, index) => (
                <div key={index} className="flex flex-col items-center space-y-4">
                  <Skeleton className="h-[200px] w-[200px] rounded-full" />
                  <div className="text-center">
                    <Skeleton className="h-6 w-40 mx-auto" />
                    <Skeleton className="h-4 w-32 mx-auto mt-2" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Skeleton className="h-10 w-[200px] mx-auto" />
                <Skeleton className="h-6 w-[500px] max-w-full mx-auto" />
              </div>
              <Skeleton className="h-10 w-[180px] mt-4" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
} 