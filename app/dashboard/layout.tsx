import type { ReactNode } from "react"
import type { Metadata } from "next"
import { auth } from "@clerk/nextjs/server"
import { DashboardSidebar } from "@/components/dashboard/dashboard-sidebar"
import { DashboardHeader } from "@/components/dashboard/dashboard-header"
import { redirect } from "next/navigation"
import { SidebarProvider } from "@/components/ui/sidebar"

export const metadata: Metadata = {
  title: "Dashboard | Standing Desk Admin",
  description: "Admin dashboard for the standing desk website",
}

export default async function DashboardLayout({
  children,
}: {
  children: ReactNode
}) {
  const { userId } = await auth()

  // If the user is not authenticated, redirect to the login page
  if (!userId) {
    redirect("/sign-in")
  }

  return (
    <SidebarProvider defaultOpen={false}>
      <div className="flex min-h-screen w-full flex-col">
        <DashboardHeader />
        <div className="flex flex-1">
          <DashboardSidebar />
          <main className="flex-1 overflow-y-auto p-6">
            {children}
          </main>
        </div>
      </div>
    </SidebarProvider>
  )
}