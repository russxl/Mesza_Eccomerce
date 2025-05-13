"use client"

import { useToast } from "@/components/hooks/use-toast"
import { useEffect, useState } from "react"
import { AlertCircle, CheckCircle, Info, X } from "lucide-react"

export function Toaster() {
  const { toasts, dismiss } = useToast()
  const [mounted, setMounted] = useState(false)

  // Only render on client
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="fixed top-4 right-4 z-50 flex flex-col gap-3 max-w-md">
      {toasts.map((toast) => {
        // Determine icon based on variant
        const Icon = toast.variant === "destructive" 
          ? AlertCircle 
          : toast.variant === "success" 
            ? CheckCircle 
            : Info;
            
        return (
          <div
            key={toast.id}
            className={`
              rounded-lg px-4 py-3 shadow-lg 
              border-l-4
              flex items-start gap-3
              transform transition-all duration-300 
              animate-in fade-in slide-in-from-top-2
              ${
                toast.variant === "destructive" 
                  ? "bg-white dark:bg-gray-800 border-red-500 text-gray-900 dark:text-gray-100" 
                  : toast.variant === "success"
                    ? "bg-white dark:bg-gray-800 border-green-500 text-gray-900 dark:text-gray-100"
                    : "bg-white dark:bg-gray-800 border-blue-500 text-gray-900 dark:text-gray-100"
              }
            `}
          >
            <Icon 
              className={`h-5 w-5 mt-0.5 flex-shrink-0 ${
                toast.variant === "destructive" 
                  ? "text-red-500" 
                  : toast.variant === "success"
                    ? "text-green-500"
                    : "text-blue-500"
              }`} 
            />
            
            <div className="flex-1 min-w-0">
              {toast.title && (
                <h3 className="font-medium text-sm mb-1 pr-6">{toast.title}</h3>
              )}
              {toast.description && (
                <div className="text-xs text-gray-600 dark:text-gray-300">{toast.description}</div>
              )}
            </div>
            
            <button 
              onClick={() => dismiss(toast.id)}
              className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              aria-label="Close notification"
            >
              <X className="h-4 w-4 text-gray-500" />
            </button>
          </div>
        );
      })}
    </div>
  )
} 