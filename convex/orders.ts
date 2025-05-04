// File: convex/orders.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./auth";

// Admin Cart/Order Mutations
function generateOrderId(prefix = "ORD") {
  const timestamp = Date.now(); // current time in milliseconds
  const randomNum = Math.floor(Math.random() * 1000000); // random number
  return `${prefix}-${timestamp}-${randomNum}`;
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
    });
    return orderId;
  },
});

export const getOrder = query({
  args: {
    orderId: v.string(),
  },
  handler: async (ctx, args) => {
    console.log("Convex: Fetching order with ID:", args.orderId);
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
      status: "processing", // Update status to indicate shipping is added
      message: "Shipping details added.", // Optional message update
    });

    return { success: true, shippingId: shippingId };
  },
});

// export const updateOrderStatus = mutation({
//   args: {
//     orderId: v.string(),
//     status: v.string(),
//     notes: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     // Verify admin is authenticated
//     const admin = await requireAdmin(ctx);

//     // Get the order
//     const order = await ctx.db
//       .query("orderActivity")
//       .withIndex("by_order_id", (q) => q.eq("orderId", args.orderId))
//       .first();

//     if (!order) {
//       throw new Error("Order not found");
//     }

//     // Update cart status
//     await ctx.db.patch(cart._id, {
//       status: args.status,
//       updatedAt: Date.now(),
//       processedBy: admin._id,
//       adminNotes: args.notes || cart.adminNotes,
//     });

//     // Log the activity
//     await ctx.db.insert("orderActivity", {
//       cartId: args.cartId,
//       timestamp: Date.now(),
//       activityType: "status_update",
//       message: `Order status updated to "${args.status}"`,
//       performedBy: admin._id,
//     });

//     return { success: true };
//   },
// });
