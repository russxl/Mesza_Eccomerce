"use client"

import { useState } from "react"
import { useSignIn } from "@clerk/nextjs"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { AlertCircle, Loader2 } from 'lucide-react'
import { Alert, AlertDescription } from "@/components/ui/alert"
import Link from "next/link"

export function CustomLoginForm() {
  const { isLoaded, signIn, setActive } = useSignIn()
  const router = useRouter()
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const [verifying, setVerifying] = useState(false)
  const [verificationCode, setVerificationCode] = useState("")

  // Handle form submission
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (!isLoaded) return
    
    try {
      setIsLoading(true)
      setError("")

      // Start the sign in process using email and password
      const result = await signIn.create({
        identifier: email,
        password,
      })

      if (result.status === "complete") {
        // Sign in was successful, set the session as active
        await setActive({ session: result.createdSessionId })
        router.push("/dashboard")
      } else if (result.status === "needs_second_factor") {
        // 2FA is required, show verification form
        setVerifying(true)
      } else {
        // Some other status, handle accordingly
        setError("An unexpected error occurred. Please try again.")
      }
    } catch (err: any) {
      // Handle specific error messages
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message)
      } else {
        setError("An error occurred. Please check your credentials and try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  // Handle 2FA verification
  async function onVerify(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    
    if (!isLoaded) return
    
    try {
      setIsLoading(true)
      setError("")

      // Attempt to verify the code
      const result = await signIn.attemptSecondFactor({
        strategy: "phone_code",
        code: verificationCode,
      })

      if (result.status === "complete") {
        // Verification was successful
        await setActive({ session: result.createdSessionId })
        router.push("/dashboard")
      } else {
        setError("Verification failed. Please try again.")
      }
    } catch (err: any) {
      if (err.errors && err.errors.length > 0) {
        setError(err.errors[0].message)
      } else {
        setError("Verification failed. Please try again.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  // If 2FA verification is required, show the verification form
  if (verifying) {
    return (
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Two-Factor Authentication</CardTitle>
        </CardHeader>
        <form onSubmit={onVerify}>
          <CardContent className="space-y-4 pt-4">
            {error && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}
            <div className="space-y-2">
              <Label htmlFor="verificationCode">Verification Code</Label>
              <Input
                id="verificationCode"
                value={verificationCode}
                onChange={(e) => setVerificationCode(e.target.value)}
                placeholder="Enter code"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading}>
              {isLoading ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Verifying...
                </>
              ) : (
                "Verify"
              )}
            </Button>
          </CardFooter>
        </form>
      </Card>
    )
  }

  // Main login form
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Sign in to your account</CardTitle>
      </CardHeader>
      <form onSubmit={onSubmit}>
        <CardContent className="space-y-4 pt-4">
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          )}
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="admin@example.com"
              required
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <Label htmlFor="password">Password</Label>
              <Link
                href="/forgot-password"
                className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
              >
                Forgot password?
              </Link>
            </div>
            <Input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              autoComplete="current-password"
            />
          </div>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700" disabled={isLoading || !isLoaded}>
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Signing in...
              </>
            ) : (
              "Sign in"
            )}
          </Button>
          <div className="text-center text-sm">
            Don&apos;t have an account?{" "}
            <Link href="/signup" className="font-medium text-emerald-600 hover:text-emerald-500">
              Sign up
            </Link>
          </div>
        </CardFooter>
      </form>
    </Card>
  )
}
