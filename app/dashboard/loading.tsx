import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardLoading() {
  return (
    <div className="flex flex-col h-full">
      <div className="p-6 space-y-8">
        <div className="flex items-center justify-between mb-6">
          <Skeleton className="h-8 w-[200px]" />
          <Skeleton className="h-10 w-[120px]" />
        </div>

        {/* Stats cards */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {Array(4).fill(0).map((_, idx) => (
            <div key={idx} className="rounded-lg border p-4">
              <div className="flex justify-between items-start">
                <div>
                  <Skeleton className="h-5 w-24 mb-1" />
                  <Skeleton className="h-8 w-20" />
                </div>
                <Skeleton className="h-10 w-10 rounded-full" />
              </div>
            </div>
          ))}
        </div>
        
        {/* Recent Orders */}
        <div className="rounded-lg border p-6">
          <Skeleton className="h-8 w-[150px] mb-6" />
          <div className="space-y-4">
            {Array(5).fill(0).map((_, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 rounded-lg border">
                <div className="flex gap-4 items-center">
                  <Skeleton className="h-12 w-12 rounded-full" />
                  <div>
                    <Skeleton className="h-5 w-28 mb-1" />
                    <Skeleton className="h-4 w-40" />
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <Skeleton className="h-8 w-20" />
                  <Skeleton className="h-6 w-6 rounded-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Recent Activity */}
        <div className="grid gap-4 md:grid-cols-2">
          <div className="rounded-lg border p-6">
            <Skeleton className="h-8 w-[180px] mb-6" />
            <div className="space-y-4">
              {Array(4).fill(0).map((_, idx) => (
                <div key={idx} className="flex gap-4 items-start">
                  <Skeleton className="h-10 w-10 rounded-full" />
                  <div className="flex-1">
                    <Skeleton className="h-5 w-[90%] mb-1" />
                    <Skeleton className="h-4 w-24" />
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="rounded-lg border p-6">
            <Skeleton className="h-8 w-[150px] mb-6" />
            <div className="h-[200px]">
              <Skeleton className="h-full w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 