"use client"

import Link from "next/link"
import { Bell, Search } from "lucide-react"

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Input } from "@/components/ui/input"
import { SidebarTrigger } from "@/components/ui/sidebar"
import { ModeToggle } from "@/components/mode-toggle"
import { usePathname } from "next/navigation"
import { useState } from "react"
import { useClerk, useUser } from "@clerk/nextjs"


export function DashboardHeader() {

  const { signOut } = useClerk()
  const { user } = useUser()

  const handleSignOut = async () => {
    try {
      await signOut();
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center border-b bg-background px-4 md:px-6">
      <div className="flex items-center gap-2 ">
        <SidebarTrigger />
      </div>

      <div className="ml-auto flex items-center gap-4">
        <ModeToggle />

        <Button variant="outline" size="icon" className="relative" aria-label="Notifications">
          <Bell className="h-5 w-5" />
          <span className="absolute right-1 top-1 flex h-2 w-2 rounded-full bg-emerald-600" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm" className="relative h-8 rounded-full overflow-hidden pl-2.5">
              <Avatar className="h-6 w-6 mr-2">
                <AvatarImage src={user?.imageUrl || "/placeholder.svg"} alt={user?.firstName || "User"} />
                <AvatarFallback>{user?.firstName?.charAt(0) || "U"}</AvatarFallback>
              </Avatar>
              <span className="text-sm font-medium">{user?.firstName || "User"}</span>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem asChild>
              <Link href="/dashboard/profile">Profile</Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <Link href="/dashboard/settings">Settings</Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleSignOut}>Sign out</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  )
}
