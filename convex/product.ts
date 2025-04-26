// File: convex/products.ts
import { mutation, query } from "./_generated/server";
import { v } from "convex/values";
import { Id } from "./_generated/dataModel";
import { get } from "http";

// Product Mutations - Admin Only
export const sampleRoute = query({
  handler: async (ctx) => {
    // Sample route to demonstrate the structure
    return "Hello, this is a sample route!";
  },
});
export const createProduct = mutation({
  args: {
    name: v.string(),
    description: v.string(),
    price: v.number(),
    imageURLs: v.array(v.string()),
    stockCount: v.number(),
    categories: v.array(v.string()),
    isActive: v.boolean(),
    // Accept variations as an array of either existing IDs or new variation objects
    variations: v.optional(
      v.array(
        v.union(
          v.object({
            type: v.string(),
            options: v.array(
              v.object({
                value: v.string(),
                price: v.optional(v.number()),
                stockCount: v.number(),
              })
            ),
            isActive: v.boolean(),
            imageURL: v.optional(v.string()),
          }),
          v.id("productVariations")
        )
      )
    ),
    specifications: v.optional(
      v.array(
        v.object({
          key: v.string(),
          value: v.string(),
        })
      )
    ),
  },
  handler: async (ctx, args) => {
    // Create the product first (without variations)
    const productId = await ctx.db.insert("products", {
      name: args.name,
      description: args.description,
      price: args.price,
      imageURLs: args.imageURLs,
      stockCount: args.stockCount,
      categories: args.categories,
      isActive: args.isActive,
      createdAt: Date.now(),
      updatedAt: Date.now(),
      specificationId: [], // will update after inserting specifications
      variationId: [], // will update after inserting variations
      // DO NOT include variations here
    });

    // Prepare array to collect all variation IDs
    let variationIds: Id<"productVariations">[] = [];

    if (args.variations && args.variations.length > 0) {
      for (const variation of args.variations) {
        if (typeof variation === "string") {
          // Existing variation ID
          variationIds.push(variation as Id<"productVariations">);
        } else {
          // New variation object: insert and collect its ID
          const newVarId = await ctx.db.insert("productVariations", {
            type: variation.type,
            options: variation.options, // Store the array of option objects directly
            isActive: variation.isActive,
            imageURL: variation.imageURL,
          });

          variationIds.push(newVarId);
        }
      }
    }

    let specifications: Id<"specifications">[] = [];
    if (args.specifications && args.specifications.length > 0) {
      for (const spec of args.specifications) {
        const newSpecId = await ctx.db.insert("specifications", {
          productId: productId,
          specs: [spec],
        });
        specifications.push(newSpecId);
      }
    }

    // Update the product with the variation IDs
    await ctx.db.patch(productId, {
      variationId: variationIds,
      updatedAt: Date.now(),
    });

    return productId;
  },
});

export const updateProduct = mutation({
  args: {
    productId: v.id("products"),
    name: v.optional(v.string()),
    description: v.optional(v.string()),
    price: v.optional(v.number()),
    imageURLs: v.optional(v.array(v.string())),
    stockCount: v.optional(v.number()),
    categories: v.optional(v.array(v.string())),
    isActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    // Verify admin is authenticated

    const { productId, ...fieldsToUpdate } = args;

    // Get existing product
    const product = await ctx.db.get(productId);
    if (!product) {
      throw new Error("Product not found");
    }

    // Update the product with new values
    return ctx.db.patch(productId, {
      ...fieldsToUpdate,
      updatedAt: Date.now(),
    });
  },
});

export const deleteProduct = mutation({
  args: {
    productId: v.id("products"),
  },
  handler: async (ctx, args) => {
    // Verify admin is authenticated

    // Get existing product
    const product = await ctx.db.get(args.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    // Delete the product
    await ctx.db.delete(args.productId);

    return true;
  },
});

// Product Queries - Public

export const getProducts = query({
  args: {
    category: v.optional(v.string()),
    onlyActive: v.optional(v.boolean()),
  },
  handler: async (ctx, args) => {
    let productsQuery = ctx.db.query("products");

    if (args.category) {
      productsQuery
        .withIndex("by_category")
        .filter((q) => q.eq("categories", args.category));
    }

    if (args.onlyActive) {
      productsQuery.withIndex("by_active", (q) => q.eq("isActive", true));
    }

    const products = await productsQuery.collect();
    return products;
  },
});

export const getProductbyId = query({
  args: {
    productId: v.id("products"),
  },
  handler: async (ctx, args) => {
    const product = await ctx.db.get(args.productId);
    if (!product) {
      throw new Error("Product not found");
    }

    // Get reviews for the product directly
    const reviews = await ctx.db
      .query("reviews")
      .withIndex("by_product", (q) => q.eq("productId", args.productId))
      .collect();

    // Get variations for this product
    const specifications = await ctx.db
      .query("specifications")
      .withIndex("by_product", (q) => q.eq("productId", args.productId))
      .collect();

    const variations =
      product.variationId && product.variationId.length > 0
        ? await Promise.all(
            product.variationId.map((id: Id<"productVariations">) =>
              ctx.db.get(id)
            )
          )
        : [];

    return {
      ...product,
      variations,
      specifications: specifications.map((spec) => spec.specs).flat(),
      reviews,
    };
  },
});

export const addReview = mutation({
  args: {
    productId: v.id("products"),
    username: v.string(),
    rating: v.number(),
    comment: v.string(),
  },
  handler: async (ctx, args) => {
    // Verify user is authenticated
    // Get existing product
    const product = await ctx.db.get(args.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    // Insert review
    const reviewId = await ctx.db.insert("reviews", {
      productId: args.productId,
      username: args.username,
      rating: args.rating,
      comment: args.comment,
      createdAt: Date.now(),
    });
    return reviewId;
  },
});
export const getReviews = query({
  args: {
    productId: v.id("products"),
  },
  handler: async (ctx, args) => {
    // Get existing product
    const product = await ctx.db.get(args.productId);
    if (!product) {
      throw new Error("Product not found");
    }
    // Get reviews for the product
    const reviews = await ctx.db
      .query("reviews")
      .withIndex("by_product", (q) => q.eq("productId", args.productId))
      .collect();
    return reviews;
  },
});
