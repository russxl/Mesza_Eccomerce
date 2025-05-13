"use client"; // Required for Convex hooks

import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  DollarSign,
  ShoppingCart,
} from "lucide-react";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import type {
  RecentOrder,
  DisplayRecentOrder,
} from "@/types/dashboard"; // Ensure this path is correct
import { Skeleton } from "@/components/ui/skeleton"; // For loading states

// Helper to format currency, can be moved to a utils file
const formatCurrency = (amount: number | undefined) => {
  if (typeof amount !== "number") return "$0.00";
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

// Helper to format date, can be moved to a utils file
const formatDate = (timestamp: number | undefined) => {
  if (!timestamp) return "N/A";
  return new Date(timestamp).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export default function DashboardPage() {
  const dashboardStats = useQuery(api.dashboard.getDashboardStats);
  const recentOrdersData = useQuery(api.dashboard.getRecentOrders, {
    limit: 5,
  });
  const isLoadingStats = dashboardStats === undefined;
  const isLoadingRecentOrders = recentOrdersData === undefined;

  // Prepare recent orders for display
  const recentOrders: DisplayRecentOrder[] = (recentOrdersData || []).map(
    (order: RecentOrder): DisplayRecentOrder => ({
      // Explicitly type 'order' and the return type of map
      _id: order._id,
      orderId: order.orderId,
      status: order.status,
      subTotal: order.subTotal,
      createdAt: order._creationTime, // Using Convex's _creationTime
      imageURL: order.cart?.[0]?.image || undefined,
      // customerName: order.customerName || "N/A", // If you add customerName to RecentOrder type in convex/dashboard.ts
    })
  );

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Welcome to your standing desk admin dashboard
        </p>
      </div>

      <Tabs defaultValue="overview" className="space-y-4">
        <TabsList>
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="reports">Reports</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Revenue
                </CardTitle>
                <DollarSign className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoadingStats ? (
                  <Skeleton className="h-8 w-3/4" />
                ) : (
                  <div className="text-2xl font-bold">
                    {dashboardStats?.totalRevenueFormatted || "$0.00"}
                  </div>
                )}
                {/* Percentage change from last month - requires more complex logic/data */}
                <p className="text-xs text-muted-foreground">
                  Current total revenue
                </p>
              </CardContent>
            </Card>
            {/* Active Users Card Removed */}
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Delivered Orders
                </CardTitle>{" "}
                {/* Changed Title */}
                <ShoppingCart className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoadingStats ? (
                  <Skeleton className="h-8 w-1/2" />
                ) : (
                  <div className="text-2xl font-bold">
                    +{dashboardStats?.deliveredOrders || 0}
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  Total orders marked as delivered
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Conversion Rate
                </CardTitle>
                <BarChart3 className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                {isLoadingStats ? (
                  <Skeleton className="h-8 w-1/4" />
                ) : (
                  <div className="text-2xl font-bold">
                    {dashboardStats?.conversionRateFormatted || "0.0%"}
                  </div>
                )}
                <p className="text-xs text-muted-foreground">
                  Of eligible orders
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
            <Card className="col-span-4">
              <CardHeader>
                <CardTitle>Sales Overview</CardTitle>
                <CardDescription>
                  Monthly sales performance (Placeholder)
                </CardDescription>
              </CardHeader>
              <CardContent className="pl-2">
                <div className="h-[240px] w-full bg-gray-100 rounded-md flex items-center justify-center">
                  <p className="text-muted-foreground">
                    Sales chart will appear here
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="col-span-3">
              <CardHeader>
                <CardTitle>Recent Orders</CardTitle>
                <CardDescription>
                  Latest {recentOrders.length > 0 ? recentOrders.length : "0"}{" "}
                  orders
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isLoadingRecentOrders ? (
                  <div className="space-y-4">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="flex items-center gap-4">
                        <Skeleton className="w-12 h-12 rounded-md" />
                        <div className="flex-1 space-y-2">
                          <Skeleton className="h-4 w-3/4" />
                          <Skeleton className="h-3 w-1/2" />
                        </div>
                        <Skeleton className="h-4 w-1/4" />
                      </div>
                    ))}
                  </div>
                ) : recentOrders.length > 0 ? (
                  <div className="space-y-4">
                    {recentOrders.map((order) => (
                      <div key={order._id} className="flex items-center gap-4">
                        {order.imageURL ? (
                          <Image
                            src={order.imageURL}
                            alt="Product Image"
                            width={48}
                            height={48}
                            className="rounded-md"
                          />
                        ) : (
                          <div className="w-12 h-12 rounded-md bg-gray-100 flex items-center justify-center">
                            <ShoppingCart className="h-6 w-6 text-gray-400" />
                          </div>
                        )}
                        <div className="flex-1 space-y-1">
                          <p className="text-sm font-medium">
                            Order #{order.orderId}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            Created: {formatDate(order.createdAt)}
                          </p>
                        </div>
                        <div className="text-sm font-medium">
                          {formatCurrency(order.subTotal)}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-muted-foreground text-sm">
                    No recent orders found.
                  </p>
                )}
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        <TabsContent
          value="analytics"
          className="h-[400px] flex items-center justify-center bg-gray-100 rounded-md"
        >
          <p className="text-muted-foreground">
            Analytics content will appear here
          </p>
        </TabsContent>
        <TabsContent
          value="reports"
          className="h-[400px] flex items-center justify-center bg-gray-100 rounded-md"
        >
          <p className="text-muted-foreground">
            Reports content will appear here
          </p>
        </TabsContent>
      </Tabs>
    </div>
  );
}
