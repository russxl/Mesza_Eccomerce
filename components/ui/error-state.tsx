import { AlertCircle } from "lucide-react"
import { Button } from "./button"

interface ErrorStateProps {
  message: string
  retry?: () => void
}

export function ErrorState({ message, retry }: ErrorStateProps) {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
      </div>

      <div className="text-center py-12">
        <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-red-50 flex items-center justify-center">
          <AlertCircle className="w-10 h-10 text-red-500" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-1">Failed to load products</h3>
        <p className="text-gray-500 mb-6">{message}</p>
        {retry && (
          <Button onClick={retry}>
            Try Again
          </Button>
        )}
      </div>
    </div>
  )
}