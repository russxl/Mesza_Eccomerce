import { type Doc } from "@/convex/_generated/dataModel"; // Adjusted import path

export type DashboardStats = {
  totalRevenue: number;
  totalRevenueFormatted: string;
  deliveredOrders: number; // Changed from totalOrders
  conversionRate: number;
  conversionRateFormatted: string;
  // totalActiveUsers has been removed
};

// Re-exporting or re-defining for client-side usage clarity
// This type should match the one in convex/dashboard.ts
export type RecentOrder = Doc<"orderActivity"> & {
  customerName?: string; // Example: if you plan to join customer data
  // You might want to select specific fields for the dashboard display
  // e.g., orderId, status, subTotal, createdAt, customerName
};

// Example of a more specific type for recent orders display if needed
export type DisplayRecentOrder = {
  _id: string; // or Doc<"orderActivity">["_id"]
  orderId: string;
  status: string;
  subTotal: number;
  createdAt?: number; // or string if formatted
  customerName?: string; // Or customer email, etc.
  imageURL?: string;
  // any other fields you want to display from the order
};
