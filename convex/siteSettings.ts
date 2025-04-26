// File: convex/siteSettings.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { requireAdmin } from "./auth";

// Site Settings - Admin Only

export const getSiteSettings = query({
  handler: async (ctx) => {
    const settings = await ctx.db.query("siteSettings").collect();
    
    // Convert array to object
    const settingsObject = settings.reduce<Record<string, any>>((acc, setting) => {
      acc[setting.key] = setting.value;
      return acc;
    }, {});
    
    return settingsObject;
  },
});

export const getSetting = query({
  args: {
    key: v.string(),
  },
  handler: async (ctx, args) => {
    const setting = await ctx.db
      .query("siteSettings")
      .withIndex("by_key", (q) => q.eq("key", args.key))
      .first();
    
    return setting ? setting.value : null;
  },
});

export const updateSiteSetting = mutation({
  args: {
    key: v.string(),
    value: v.any(),
  },
  handler: async (ctx, args) => {
    // Verify admin is authenticated
    const admin = await requireAdmin(ctx);
    
    // Check if setting exists
    const existingSetting = await ctx.db
      .query("siteSettings")
      .withIndex("by_key", (q) => q.eq("key", args.key))
      .first();
    
    if (existingSetting) {
      // Update existing setting
      return ctx.db.patch(existingSetting._id, {
        value: args.value,
        updatedBy: admin._id,
        updatedAt: Date.now(),
      });
    } else {
      // Create new setting
      return ctx.db.insert("siteSettings", {
        key: args.key,
        value: args.value,
        updatedBy: admin._id,
        updatedAt: Date.now(),
      });
    }
  },
});

export const deleteSetting = mutation({
  args: {
    key: v.string(),
  },
  handler: async (ctx, args) => {
    // Verify admin is authenticated
    await requireAdmin(ctx);
    
    // Check if setting exists
    const setting = await ctx.db
      .query("siteSettings")
      .withIndex("by_key", (q) => q.eq("key", args.key))
      .first();
    
    if (!setting) {
      throw new Error("Setting not found");
    }
    
    return ctx.db.delete(setting._id);
  },
});