import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function OrderProcessLoading() {
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
          <div className="px-8 md:px-12">
            <ol className="relative mx-auto max-w-3xl border-l border-border">
              {Array(7).fill(0).map((_, idx) => (
                <li key={idx} className="mb-16 ml-6 last:mb-0">
                  <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Skeleton className="h-6 w-6 rounded-full" />
                  </span>
                  <div className="flex flex-col gap-2 ml-8">
                    <Skeleton className="h-8 w-[200px]" />
                    <Skeleton className="h-4 w-full max-w-[500px]" />
                    <Skeleton className="h-4 w-full max-w-[450px]" />
                    <div className="mt-4 flex items-center gap-4 flex-wrap">
                      <Skeleton className="h-8 w-8 rounded-full" />
                      <Skeleton className="h-10 w-[120px] rounded-md" />
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-16 rounded-lg bg-muted p-8 text-center">
              <Skeleton className="h-8 w-[250px] mx-auto" />
              <Skeleton className="h-4 w-[400px] max-w-full mx-auto mt-2" />
              <Skeleton className="h-4 w-[350px] max-w-full mx-auto mt-1" />
              <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center">
                <Skeleton className="h-10 w-[150px] mx-auto sm:mx-2" />
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
