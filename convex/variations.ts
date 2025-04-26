// File: convex/variations.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";
import { requireAdmin } from "./auth";


export const updateVariation = mutation({
  args: {
    variationId: v.id("productVariations"),
    type: v.optional(v.string()),
    value: v.optional(v.string()),
    price: v.optional(v.number()),
    stockCount: v.optional(v.number()),
    isActive: v.optional(v.boolean()),
    imageURL: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    // Verify admin is authenticated
    await requireAdmin(ctx);
    
    const { variationId, ...fieldsToUpdate } = args;
    
    // Get existing variation
    const variation = await ctx.db.get(variationId);
    if (!variation) {
      throw new Error("Variation not found");
    }
    
    // Update the variation with new values
    return ctx.db.patch(variationId, fieldsToUpdate);
  },
});

export const deleteVariation = mutation({
  args: {
    variationId: v.id("productVariations"),
  },
  handler: async (ctx, args) => {
    // Verify admin is authenticated
    await requireAdmin(ctx);
    
    // Check if variation exists
    const variation = await ctx.db.get(args.variationId);
    if (!variation) {
      throw new Error("Variation not found");
    }
    
    return ctx.db.delete(args.variationId);
  },
});

export const getAllProductVariations = query({
  handler: async (ctx) => {
    // Verify admin is authenticated    
    const variationsQuery = ctx.db.query("productVariations");
    return variationsQuery.collect();
  }
});

export const getProductVariations = query({
  args: {
    productId: v.id("products"),
    type: v.optional(v.string()),
  },
  handler: async (ctx, args) => {
    let variationsQuery = ctx.db
      .query("productVariations")
      
      
    const variations = await variationsQuery.collect();
    
    if (args.type) {
      return variations.filter(variation => variation.type === args.type);
    }
    
    return variations;
  },
});