// // File: convex/cart.ts
// import { mutation, query } from "./_generated/server";
// import { v } from "convex/values";
// import { nanoid } from "nanoid";

// // Cart Mutations - Public

// export const createCart = mutation({
//   args: {
//     customerName: v.optional(v.string()),
//     customerContact: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     // Generate a unique cart ID
//     const cartId = nanoid(12);

//     const id = await ctx.db.insert("carts", {
//       cartId,
//       status: "pending",
//       createdAt: Date.now(),
//       updatedAt: Date.now(),
//       customerName: args.customerName,
//       customerContact: args.customerContact,
//     });

//     return { id, cartId };
//   },
// });

// export const addToCart = mutation({
//   args: {
//     cartId: v.string(),
//     productId: v.id("products"),
//     variationId: v.optional(v.id("productVariations")),
//     quantity: v.number(),
//     notes: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     // Verify product exists and is active
//     const product = await ctx.db.get(args.productId);
//     if (!product || !product.isActive) {
//       throw new Error("Product not found or inactive");
//     }

//     // If variation is specified, check it exists
//     if (args.variationId) {
//       const variation = await ctx.db.get(args.variationId);
//       if (!variation || !variation.isActive) {
//         throw new Error("Product variation not found or inactive");
//       }
//     }

//     // Check if cart exists
//     const cart = await ctx.db
//       .query("carts")
//       .withIndex("by_cart_id", (q) => q.eq("cartId", args.cartId))
//       .first();

//     if (!cart) {
//       throw new Error("Cart not found");
//     }

//     // Check if product already in cart
//     const existingItem = await ctx.db
//       .query("cartItems")
//       .withIndex("by_cart", (q) => q.eq("cartId", args.cartId))
//       .filter((q) =>
//         q.eq(q.field("productId"), args.productId) &&
//         q.eq(q.field("variationId"), args.variationId || null)
//       )
//       .first();

//     if (existingItem) {
//       // Update quantity
//       return ctx.db.patch(existingItem._id, {
//         quantity: existingItem.quantity + args.quantity,
//         notes: args.notes || existingItem.notes,
//       });
//     } else {
//       // Add new item
//       return ctx.db.insert("cartItems", {
//         cartId: args.cartId,
//         productId: args.productId,
//         variationId: args.variationId,
//         quantity: args.quantity,
//         addedAt: Date.now(),
//         notes: args.notes,
//       });
//     }
//   },
// });

// export const updateCartItem = mutation({
//   args: {
//     cartItemId: v.id("cartItems"),
//     quantity: v.optional(v.number()),
//     notes: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     // Get the cart item
//     const cartItem = await ctx.db.get(args.cartItemId);
//     if (!cartItem) {
//       throw new Error("Cart item not found");
//     }

//     const updates: { quantity?: number; notes?: string } = {};
//     if (args.quantity !== undefined) {
//       updates.quantity = args.quantity;
//     }
//     if (args.notes !== undefined) {
//       updates.notes = args.notes;
//     }

//     if (Object.keys(updates).length === 0) {
//       return cartItem;
//     }

//     return ctx.db.patch(args.cartItemId, updates);
//   },
// });

// export const removeFromCart = mutation({
//   args: {
//     cartItemId: v.id("cartItems"),
//   },
//   handler: async (ctx, args) => {
//     // Get the cart item
//     const cartItem = await ctx.db.get(args.cartItemId);
//     if (!cartItem) {
//       throw new Error("Cart item not found");
//     }

//     return ctx.db.delete(args.cartItemId);
//   },
// });

// // Cart Queries - Public

// export const getCart = query({
//   args: {
//     cartId: v.string(),
//   },
//   handler: async (ctx, args) => {
//     // Get cart
//     const cart = await ctx.db
//       .query("carts")
//       .withIndex("by_cart_id", (q) => q.eq("cartId", args.cartId))
//       .first();

//     if (!cart) {
//       throw new Error("Cart not found");
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

//     // Calculate cart totals
//     const total = itemsWithDetails.reduce((sum, item) => {
//       const price = item.variation?.price ?? item?.product?.price;
//       return sum + price! * item.quantity;
//     }, 0);

//     return {
//       ...cart,
//       items: itemsWithDetails,
//       total,
//     };
//   },
// });

// export const updateCartCustomerInfo = mutation({
//   args: {
//     cartId: v.string(),
//     customerName: v.optional(v.string()),
//     customerContact: v.optional(v.string()),
//   },
//   handler: async (ctx, args) => {
//     // Get cart
//     const cart = await ctx.db
//       .query("carts")
//       .withIndex("by_cart_id", (q) => q.eq("cartId", args.cartId))
//       .first();

//     if (!cart) {
//       throw new Error("Cart not found");
//     }

//     const updates: { customerName?: string; customerContact?: string; updatedAt?: number } = {};
//     if (args.customerName !== undefined) {
//       updates.customerName = args.customerName;
//     }
//     if (args.customerContact !== undefined) {
//       updates.customerContact = args.customerContact;
//     }

//     if (Object.keys(updates).length === 0) {
//       return cart;
//     }

//     updates.updatedAt = Date.now();

//     return ctx.db.patch(cart._id, updates);
//   },
// });
