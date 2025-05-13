import Link from "next/link"
import { ArrowLeft } from "lucide-react"

interface NotFoundProps {
  message?: string
}

export default function NotFound({ message }: NotFoundProps) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 py-12 bg-white">
      <div className="w-full max-w-md">
        {/* Minimal table illustration */}
        <div className="mb-12 mx-auto w-16 h-12">
          <div className="w-full h-1 bg-stone-900"></div>
          <div className="flex justify-between">
            <div className="w-1 h-10 bg-stone-900"></div>
            <div className="w-1 h-10 bg-stone-900"></div>
          </div>
          <div className="flex justify-between">
            <div className="w-3 h-1 bg-stone-900"></div>
            <div className="w-3 h-1 bg-stone-900"></div>
          </div>
        </div>

        <h1 className="text-4xl font-light text-stone-900 mb-6">404</h1>

        <h2 className="text-xl font-normal text-stone-700 mb-6">Page not found</h2>

        {message && <p className="text-stone-500 mb-8">{message}</p>}

        <p className="text-stone-500 mb-10">The page you're looking for doesn't exist or has been moved.</p>

        <Link href="/" className="inline-flex items-center text-stone-900 hover:text-stone-700 transition-colors">
          <ArrowLeft className="mr-2 h-4 w-4" />
          <span className="border-b border-stone-200 pb-1">Return to home</span>
        </Link>
      </div>
    </div>
  )
}
