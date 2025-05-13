import { Skeleton } from "@/components/ui/skeleton";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ContactLoading() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <Skeleton className="h-12 w-[250px] mx-auto" />
                <Skeleton className="h-6 w-[600px] max-w-full mx-auto" />
              </div>
              <Skeleton className="h-10 w-[200px]" />
            </div>
          </div>
        </section>
        
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <Skeleton className="h-10 w-[200px]" />
                  <Skeleton className="h-6 w-full" />
                  <Skeleton className="h-6 w-[90%]" />
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-6 w-6 mt-1" />
                    <div>
                      <Skeleton className="h-6 w-[100px] mb-2" />
                      <Skeleton className="h-5 w-[120px] mb-2" />
                      <Skeleton className="h-4 w-[250px]" />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-6 w-6 mt-1" />
                    <div>
                      <Skeleton className="h-6 w-[100px] mb-2" />
                      <Skeleton className="h-5 w-[120px] mb-2" />
                      <Skeleton className="h-4 w-[250px]" />
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Skeleton className="h-6 w-6 mt-1" />
                    <div>
                      <Skeleton className="h-6 w-[100px] mb-2" />
                      <Skeleton className="h-5 w-full mb-1" />
                      <Skeleton className="h-5 w-[80%] mb-2" />
                      <Skeleton className="h-4 w-[250px]" />
                    </div>
                  </div>
                </div>
              </div>
              <Skeleton className="h-[600px] rounded-lg" />
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
