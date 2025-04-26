"use client"

import type React from "react"

import { createContext, useContext, useEffect, useState } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: string
  name: string
  email: string
  role: "admin"
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  signup: (name: string, email: string, password: string) => Promise<void>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    // Check if user is logged in
    const checkAuth = async () => {
      try {
        // In a real app, you would verify the session/token with your backend
        const hasAuth = document.cookie.includes("admin-auth")

        if (hasAuth) {
          // Mock user data
          setUser({
            id: "1",
            name: "Admin User",
            email: "admin@example.com",
            role: "admin",
          })
        }
      } catch (error) {
        console.error("Auth check failed:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [])

  const login = async (email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, you would call your API to authenticate
      // For demo purposes
      if (email.includes("admin")) {
        // Set a cookie to simulate authentication
        document.cookie = "admin-auth=true; path=/; max-age=86400"

        setUser({
          id: "1",
          name: "Admin User",
          email,
          role: "admin",
        })

        router.push("/dashboard")
      } else {
        throw new Error("Invalid credentials")
      }
    } catch (error) {
      console.error("Login failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  const logout = () => {
    // Clear the auth cookie
    document.cookie = "admin-auth=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT"
    setUser(null)
    router.push("/login")
  }

  const signup = async (name: string, email: string, password: string) => {
    setIsLoading(true)
    try {
      // In a real app, you would call your API to register the user
      // For demo purposes, we'll just simulate a successful signup
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // In a real app, you might automatically log the user in or redirect to login
      return
    } catch (error) {
      console.error("Signup failed:", error)
      throw error
    } finally {
      setIsLoading(false)
    }
  }

  return <AuthContext.Provider value={{ user, isLoading, login, logout, signup }}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}
