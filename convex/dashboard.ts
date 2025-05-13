import { query } from "./_generated/server";
import { v } from "convex/values";
import { Doc } from "./_generated/dataModel";

// Helper function to format currency (optional, can also be done on client-side)
const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};

export const getDashboardStats = query({
  handler: async (
    ctx
  ): Promise<{
    totalRevenue: number;
    totalRevenueFormatted: string;
    deliveredOrders: number;
    conversionRate: number;
    conversionRateFormatted: string;
  }> => {
    const allOrders = await ctx.db.query("orderActivity").collect();

    const totalRevenue = allOrders.reduce(
      (sum, order) => sum + (order.subTotal || 0),
      0
    );

    const deliveredOrdersList = allOrders.filter(
      (order) => order.status?.toLowerCase() === "delivered"
    );
    const deliveredOrdersCount = deliveredOrdersList.length;

    const eligibleForConversionOrders = allOrders.filter(
      (order) =>
        order.status?.toLowerCase() !== "pending" &&
        order.status?.toLowerCase() !== "processing" &&
        order.status?.toLowerCase() !== "cancelled"
    );

    let conversionRate = 0;
    if (eligibleForConversionOrders.length > 0) {
      // Assuming "delivered" is the primary success status for conversion
      const successfullyConvertedOrders = deliveredOrdersList.length;
      conversionRate =
        (successfullyConvertedOrders / eligibleForConversionOrders.length) *
        100;
    }

    return {
      totalRevenue,
      totalRevenueFormatted: formatCurrency(totalRevenue),
      deliveredOrders: deliveredOrdersCount,
      conversionRate: parseFloat(conversionRate.toFixed(1)), // e.g., 3.2
      conversionRateFormatted: `${conversionRate.toFixed(1)}%`, // e.g., "3.2%"
    };
  },
});

export type RecentOrder = Doc<"orderActivity"> & {
  customerName?: string; // Assuming we might want to display a customer name
};

export const getRecentOrders = query({
  args: {
    limit: v.optional(v.number()),
  },
  handler: async (ctx, args): Promise<RecentOrder[]> => {
    const orderLimit = args.limit || 5;
    const orders = await ctx.db
      .query("orderActivity")
      .order("desc") // Assuming you want the latest first, based on _creationTime
      .take(orderLimit);

    // Potentially enrich with customer names if available and needed
    // For now, returning orders as is.
    // If customer info is in a separate table linked by userId or similar,
    // you would fetch and join that here.
    // For simplicity, we'll assume order details are sufficient or customer name is part of order.
    return orders.map((order) => ({
      ...order,
      // Example: customerName: order.customerDetails?.name || "N/A"
    }));
  },
});
