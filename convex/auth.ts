// File: convex/auth.ts
import { mutation, query } from "./_generated/server";
import {ConvexError} from "convex/values";
import { v } from "convex/values";
import { DatabaseReader, MutationCtx, QueryCtx } from "./_generated/server";

// Authentication helper
export const requireAdmin = async (
    ctx: { auth: QueryCtx["auth"] | MutationCtx["auth"], db: DatabaseReader }
  ) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      throw new ConvexError("Unauthorized: Please log in");
    }
  
  const user = await ctx.db
    .query("users")
    .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
    .first();
  
  if (!user) {
    throw new ConvexError("Unauthorized: User not found");
  }
  
  if (!user.isActive) {
    throw new ConvexError("Unauthorized: User account is inactive");
  }
  
  return user;
};

export const createOrUpdateUser = mutation({
  args: {
    clerkId: v.string(),
    email: v.string(),
    name: v.string(),
  },
  handler: async (ctx, args) => {
    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", args.clerkId))
      .first();
    
    if (existingUser) {
      // Update existing user
      return ctx.db.patch(existingUser._id, {
        email: args.email,
        name: args.name,
        lastLogin: Date.now(),
      });
    } else {
      // Create new user
      return ctx.db.insert("users", {
        clerkId: args.clerkId,
        email: args.email,
        name: args.name,
        role: "admin", // Default role
        lastLogin: Date.now(),
        isActive: true,
      });
    }
  },
});

export const getMe = query({
  handler: async (ctx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (!identity) {
      return null;
    }
    
    const user = await ctx.db
      .query("users")
      .withIndex("by_clerk_id", (q) => q.eq("clerkId", identity.subject))
      .first();
    
    return user;
  },
});