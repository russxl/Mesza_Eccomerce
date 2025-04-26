import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  // Product-related tables
  products: defineTable({
    name: v.string(),
    description: v.string(),
    price: v.number(),
    imageURLs: v.array(v.string()), // Support multiple product images
    stockCount: v.number(), // Inventory tracking
    isActive: v.boolean(), // Product visibility toggle
    createdAt: v.number(), // Timestamp
    updatedAt: v.number(),
    variationId: v.optional(v.array(v.id("productVariations"))), // Last updated timestamp
    specificationId: v.optional(v.array(v.id("specifications"))), // Reference to product specifications
    categories: v.array(v.string()), // Product categories
  })
    .index("by_category", ["categories"])
    .index("by_active", ["isActive"])
    .index("by_name", ["name"]),

  // Product variations (sizes, colors, etc.)
  productVariations: defineTable({
    type: v.string(), // e.g., "size", "color"
    options: v.array(
      v.object({
        value: v.string(), // e.g., "Small", "Red"
        price: v.optional(v.number()), // Optional variation-specific price
        stockCount: v.number(),
      })
    ), // Variation-specific inventory
    isActive: v.boolean(), // Variation availability
    imageURL: v.optional(v.string()), // Optional variation-specific image
  }),
  reviews: defineTable({
    productId: v.id("products"), // Reference to product
    username: v.string(), // User ID (could be anonymous)
    rating: v.number(), // Rating (1-5)
    comment: v.string(), // Review comment
    createdAt: v.number(), // Timestamp
  }).index("by_product", ["productId"]),

  specifications: defineTable({
    productId: v.id("products"),
    specs: v.array(
      v.object({
        key: v.string(), // Specification key (e.g., "Weight")
        value: v.string(), // Specification value (e.g., "1.5 kg")
      })
    ), // Reference to product
  }).index("by_product", ["productId"]),

  // Admin users (authenticated with Clerk)
  users: defineTable({
    clerkId: v.string(), // Clerk ID for authentication
    email: v.string(), // Admin email
    name: v.string(), // Admin name
    role: v.string(), // Role (e.g., "admin", "super-admin")
    lastLogin: v.number(), // Last login timestamp
    isActive: v.boolean(), // Account status
  }).index("by_clerk_id", ["clerkId"]),

  // Customer cart items (no authentication needed)
  cartItems: defineTable({
    cartId: v.string(), // Unique cart identifier for URL sharing
    productId: v.id("products"), // Reference to product
    variationId: v.optional(v.id("productVariations")), // Optional reference to variation
    quantity: v.number(), // Quantity of item
    addedAt: v.number(), // Timestamp when item added
    notes: v.optional(v.string()), // Customer notes for the item
  }).index("by_cart", ["cartId"]),

  // Carts (main  for cart items)
  carts: defineTable({
    cartId: v.string(), // Unique identifier for cart URL
    status: v.string(), // "pending", "approved", "completed", "cancelled"
    createdAt: v.number(), // Timestamp when cart created
    updatedAt: v.number(), // Last updated timestamp
    customerName: v.optional(v.string()), // Optional customer identifier
    customerContact: v.optional(v.string()), // Optional contact info
    adminNotes: v.optional(v.string()), // Admin notes about the order
    processedBy: v.optional(v.id("users")), // Admin who processed the order
  })
    .index("by_cart_id", ["cartId"])
    .index("by_status", ["status"])
    .index("by_updatedAt", ["updatedAt"]),

  // Order history/activity log

  orderActivity: defineTable({
    status: v.string(), // Order status (pending, completed, etc.)
    activityType: v.string(), // Type of activity (status change, note added, etc.)
    orders: v.object({
      productId: v.id("products"), // Reference to product
      variationId: v.optional(v.array(v.id("productVariations"))), // Optional reference to variation
      quantity: v.number(), // Quantity of item
      price: v.number(), // Price of item
      imageURL: v.optional(v.string()), // Product image URL
    }),
    message: v.string(), // Description of activity
    subTotal: v.number(), // Subtotal amount for the order
    shipping: v.optional(v.id("shipping")), // Shipping address (if applicable)
  }),

  shipping: defineTable({
    orderId: v.id("orderActivity"), // Reference to cart
    address: v.string(), // Shipping address
    city: v.string(), // City
    state: v.string(), // State
    zipCode: v.string(), // Zip code
    country: v.string(), // Country
    shippingMethod: v.string(), // e.g., "Standard", "Express"
    trackingNumber: v.optional(v.string()), // Optional tracking number
  }).index("by_order", ["orderId"]),

  // Site configuration and settings
  siteSettings: defineTable({
    key: v.string(), // Setting key
    value: v.any(), // Setting value
    updatedBy: v.id("users"), // Admin who last updated
    updatedAt: v.number(), // Last updated timestamp
  }).index("by_key", ["key"]),
});
