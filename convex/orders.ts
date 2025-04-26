// // File: convex/orders.ts
// import { mutation, query } from "./_generated/server";
// import { v } from "convex/values";
// import { requireAdmin } from "./auth";

// // Admin Cart/Order Mutations

// export const createOrder = mutation({
//   args: {
//     productId: v.string(),
//     name: v.string(),
//     price: v.number(),
//     quantity: v.number(),
//     image: v.optional(v.string()),
//     selectedOptions: v.optional(v.record(v.string(), v.string())),
//   },
//   handler: async (ctx, args) => {
//     // Additional validation
//     if (args.price <= 0) throw new Error("Price must be positive");
//     if (args.quantity <= 0 || !Number.isInteger(args.quantity)) {
//       throw new Error("Quantity must be a positive integer");
//     }

//     const subTotal = args.price * args.quantity;

//     await ctx.db.insert("orderActivity", {
//       ...args,
//       subTotal,
//       createdAt: Date.now(),});
//   },
// });

// export const updateOrderStatus = mutation({
//   args: {
//     cartId: v.string(),
//     status: v.string(),
//     notes: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     // Verify admin is authenticated
//     const admin = await requireAdmin(ctx);

//     // Get the cart
//     const cart = await ctx.db
//       .query("carts")
//       .withIndex("by_cart_id", (q) => q.eq("cartId", args.cartId))
//       .first();

//     if (!cart) {
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

// export const addOrderNote = mutation({
//   args: {
//     cartId: v.string(),
//     note: v.string(),
//   },
//   handler: async (ctx, args) => {
//     // Verify admin is authenticated
//     const admin = await requireAdmin(ctx);

//     // Get the cart
//     const cart = await ctx.db
//       .query("carts")
//       .withIndex("by_cart_id", (q) => q.eq("cartId", args.cartId))
//       .first();

//     if (!cart) {
//       throw new Error("Order not found");
//     }

//     // Update admin notes
//     await ctx.db.patch(cart._id, {
//       adminNotes: args.note,
//       updatedAt: Date.now(),
//     });

//     // Log the activity
//     await ctx.db.insert("orderActivity", {
//       cartId: args.cartId,
//       timestamp: Date.now(),
//       activityType: "note_added",
//       message: `Admin note added: "${args.note.substring(0, 30)}${args.note.length > 30 ? "..." : ""}"`,
//       performedBy: admin._id,
//     });

//     return { success: true };
//   },
// });

// // Admin Order Queries

// export const getOrders = query({
//   args: {
//     status: v.optional(v.string()),
//     limit: v.optional(v.number()),
//     cursor: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     // Verify admin is authenticated
//     await requireAdmin(ctx);

//     let ordersQuery = ctx.db.query("carts");

//     if (args.status) {
//       ordersQuery
//         .withIndex("by_status")
//         .filter((q) => q.eq("status", args.status));
//     }

//     // Sort by updatedAt in descending order
//     ordersQuery.order("desc");

//     // Apply pagination
//     const limit = args.limit || 10;

//     // Get orders
//     const orders = await ordersQuery.take(limit);

//     // Get summary information for each order
//     const ordersWithSummary = await Promise.all(
//       orders.map(async (order) => {
//         const itemCount = (
//           await ctx.db
//             .query("cartItems")
//             .withIndex("by_cart", (q) => q.eq("cartId", order.cartId))
//             .collect()
//         ).length;

//         // Get the last activity for this order
//         const lastActivity = await ctx.db
//           .query("orderActivity")
//           .withIndex("by_cart", (q) => q.eq("cartId", order.cartId))
//           .order("desc")
//           .first();

//         return {
//           ...order,
//           itemCount,
//           lastActivity,
//         };
//       })
//     );

//     return ordersWithSummary;
//   },
// });

// export const getOrderDetails = query({
//   args: {
//     cartId: v.string(),
//   },
//   handler: async (ctx, args) => {
//     // Verify admin is authenticated
//     await requireAdmin(ctx);

//     // Get cart
//     const cart = await ctx.db
//       .query("carts")
//       .withIndex("by_cart_id", (q) => q.eq("cartId", args.cartId))
//       .first();

//     if (!cart) {
//       throw new Error("Order not found");
//     }

//     // Get admin who processed the order
//     let processedBy = null;
//     if (cart.processedBy) {
//       processedBy = await ctx.db.get(cart.processedBy);
//     }

//     // Get cart items with product details
//     const cartItems = await ctx.db
//       .query("cartItems")
//       .withIndex("by_cart", (q) => q.eq("cartId", args.cartId))
//       .collect();

//     // Get product details for each item
//     const itemsWithDetails = await Promise.all(
//       cartItems.map(async (item) => {
//         const product = await ctx.db.get(item.productId);
//         let variation = null;
//         if (item.variationId) {
//           variation = await ctx.db.get(item.variationId);
//         }

//         return {
//           ...item,
//           product,
//           variation,
//         };
//       })
//     );

//     // Get order activity history
//     const activityHistory = await ctx.db
//       .query("orderActivity")
//       .withIndex("by_cart", (q) => q.eq("cartId", args.cartId))
//       .order("desc")
//       .collect();

//     // Get admin details for each activity
//     const activityWithAdminDetails = await Promise.all(
//       activityHistory.map(async (activity) => {
//         let admin = null;
//         if (activity.performedBy) {
//           admin = await ctx.db.get(activity.performedBy);
//         }

//         return {
//           ...activity,
//           admin: admin ? { name: admin.name, email: admin.email } : null,
//         };
//       })
//     );

//     // Calculate order totals
//     const total = itemsWithDetails.reduce((sum, item) => {
//       const price = item.variation?.price ?? item?.product?.price;
//       return sum + price! * item.quantity;
//     }, 0);

//     return {
//       ...cart,
//       processedBy: processedBy
//         ? { name: processedBy.name, email: processedBy.email }
//         : null,
//       items: itemsWithDetails,
//       activity: activityWithAdminDetails,
//       total,
//     };
//   },
// });

// export const getOrderActivity = query({
//   args: {
//     cartId: v.string(),
//   },
//   handler: async (ctx, args) => {
//     // Verify admin is authenticated
//     await requireAdmin(ctx);

//     // Get order activity history
//     const activityHistory = await ctx.db
//       .query("orderActivity")
//       .withIndex("by_cart", (q) => q.eq("cartId", args.cartId))
//       .order("desc")
//       .collect();

//     // Get admin details for each activity
//     const activityWithAdminDetails = await Promise.all(
//       activityHistory.map(async (activity) => {
//         let admin = null;
//         if (activity.performedBy) {
//           admin = await ctx.db.get(activity.performedBy);
//         }

//         return {
//           ...activity,
//           admin: admin ? { name: admin.name, email: admin.email } : null,
//         };
//       })
//     );

//     return activityWithAdminDetails;
//   },
// });
