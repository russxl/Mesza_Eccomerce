// File: convex/orders.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./auth";

// Admin Cart/Order Mutations
function generateOrderId(prefix = "MESZA") {
  const randomNum = Math.floor(Math.random() * 1000000000); // random number
  return `${prefix}-${randomNum}`;
}
export const createOrder = mutation({
  args: {
    subTotal: v.number(),
    cart: v.array(
      v.object({
        productId: v.string(),
        name: v.string(),
        price: v.number(),
        quantity: v.number(),
        image: v.optional(v.string()),
        selectedOptions: v.optional(v.record(v.string(), v.string())),
      })
    ),
  },
  handler: async (ctx, args) => {
    // Generate a unique order ID
    const orderId = generateOrderId();
    await ctx.db.insert("orderActivity", {
      orderId,
      status: "pending",
      ...args,
      createdAt: Date.now(),
      updatedAt: Date.now(),
    });
    return orderId;
  },
});

export const getOrder = query({
  args: {
    orderId: v.string(),
  },
  handler: async (ctx, args) => {
    const order = await ctx.db
      .query("orderActivity")
      .filter((q) => q.eq(q.field("orderId"), args.orderId))
      .first();
    return order;
  },
});

export const addShippingDetails = mutation({
  args: {
    orderId: v.string(), // The user-facing order ID
    firstName: v.string(),
    lastName: v.string(),
    email: v.string(),
    phone: v.string(),
    address: v.string(),
    apartment: v.optional(v.string()),
    city: v.string(),
    state: v.string(),
    zipCode: v.string(),
    country: v.string(),
    shippingMethod: v.string(),
    specialInstructions: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // 1. Find the corresponding orderActivity document
    const orderActivity = await ctx.db
      .query("orderActivity")
      .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
      .first();

    if (!orderActivity) {
      throw new Error(`Order with ID ${args.orderId} not found.`);
    }

    // 2. Insert the shipping details
    const shippingId = await ctx.db.insert("shipping", {
      orderId: args.orderId, // Store the user-facing order ID
      firstName: args.firstName,
      lastName: args.lastName,
      email: args.email,
      phone: args.phone,
      address: args.address,
      apartment: args.apartment,
      city: args.city,
      state: args.state,
      zipCode: args.zipCode,
      country: args.country,
      shippingMethod: args.shippingMethod,
      specialInstructions: args.specialInstructions,
      createdAt: Date.now(),
      // trackingNumber is added later by admin
    });

    // 3. Update the orderActivity document with the shippingId and new status
    await ctx.db.patch(orderActivity._id, {
      shippingId: shippingId,
      message: "Shipping details added.", // Optional message update
    });

    return { success: true, shippingId: shippingId };
  },
});

export const getOrderSummaryById = query({
  args: {
    orderId: v.string(),
  },
  handler: async (ctx, args) => {
    try {
      // Get the order
      const clientOrder = await ctx.db
        .query("orderActivity")
        .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
        .first();

      if (!clientOrder) {
        return null;
      }
      // Get the shipping information if it exists
      let shipping = null;
      if (clientOrder.shippingId) {
        shipping = await ctx.db.get(clientOrder.shippingId);
      }

      const order = {
        ...clientOrder,
        shipping,
      };
      return order;
    } catch {
      return null;
    }
  },
});

export const updateOrderStatusAndTracking = mutation({
  args: {
    orderId: v.string(), // The user-facing order ID
    status: v.optional(v.string()),
    message: v.optional(v.string()),
    trackingNumber: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Ensure admin privileges if necessary (using requireAdmin or similar)
    // await requireAdmin(ctx); // Example: Uncomment and implement if auth is needed

    const { orderId, status, message, trackingNumber } = args;

    // 1. Find the orderActivity document
    const orderActivity = await ctx.db
      .query("orderActivity")
      .withIndex("by_order_id", (q) => q.eq("orderId", orderId))
      .first();

    if (!orderActivity) {
      throw new Error(`Order with ID ${orderId} not found.`);
    }

    // 2. Prepare updates for orderActivity
    const orderActivityUpdates: { status?: string; message?: string; updatedAt?: number } = {};
    if (status !== undefined) {
      orderActivityUpdates.status = status;
    }
    if (message !== undefined) {
      orderActivityUpdates.message = message;
    }
    
    // Always update the updatedAt timestamp when changes are made
    orderActivityUpdates.updatedAt = Date.now();

    if (Object.keys(orderActivityUpdates).length > 0) {
      await ctx.db.patch(orderActivity._id, orderActivityUpdates);
    }

    // 3. Update shipping tracking number if provided and shippingId exists
    if (trackingNumber !== undefined && orderActivity.shippingId) {
      const shippingDoc = await ctx.db.get(orderActivity.shippingId);
      if (shippingDoc) {
        await ctx.db.patch(orderActivity.shippingId, { trackingNumber });
      } else {
        // Optionally handle case where shippingId is present but document not found
        console.warn(`Shipping document with ID ${orderActivity.shippingId} not found for order ${orderId}`);
      }
    } else if (trackingNumber !== undefined && !orderActivity.shippingId) {
      // Optionally handle case where tracking number is provided but no shippingId
      console.warn(`Tracking number provided for order ${orderId}, but no shippingId associated.`);
    }

    return { success: true, message: "Order updated successfully." };
  },
});

export const getAllOrders = query({
  handler: async (ctx) => {
    const orders = await ctx.db.query("orderActivity").collect();
    
    // For each order, get shipping info if available
    const ordersWithShipping = await Promise.all(
      orders.map(async (order) => {
        let shipping = null;
        if (order.shippingId) {
          shipping = await ctx.db.get(order.shippingId);
        }
        return {
          ...order,
          shipping,
        };
      })
    );
    
    return ordersWithShipping;
  },
});
