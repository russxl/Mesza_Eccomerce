import { Skeleton } from "@/components/ui/skeleton";

export default function SignInLoading() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <Skeleton className="h-10 w-32 mx-auto mb-2" />
          <Skeleton className="h-5 w-28 mx-auto" />
        </div>

        {/* Login Card */}
        <div className="bg-gray-800 rounded-lg shadow-xl p-8">
          <div className="text-center mb-8">
            <Skeleton className="h-8 w-40 mx-auto mb-2" />
            <Skeleton className="h-5 w-64 mx-auto" />
          </div>

          {/* Google Sign-in Button */}
          <Skeleton className="w-full h-12 rounded-lg" />

          {/* Additional Info */}
          <div className="mt-6 text-center">
            <Skeleton className="h-4 w-full mx-auto" />
            <Skeleton className="h-4 w-3/4 mx-auto mt-1" />
          </div>
        </div>

        {/* Footer */}
        <div className="mt-8 text-center">
          <Skeleton className="h-4 w-48 mx-auto" />
        </div>
      </div>
    </div>
  );
} 