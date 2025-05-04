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
    orderId: v.string(), // Unique order identifier
    status: v.string(), // Order status (pending, completed, etc.)
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
    message: v.optional(v.string()), // Description of activity
    subTotal: v.number(), // Subtotal amount for the order
    shippingId: v.optional(v.id("shipping")), // Reference to the shipping details document
  }).index("by_order_id", ["orderId"]), // Add index for querying by orderId string

  // Shipping details linked to an order
  shipping: defineTable({
    orderId: v.string(), // The user-facing order ID string from orderActivity
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
    shippingMethod: v.string(), // "standard" or "express"
    specialInstructions: v.optional(v.string()),
    trackingNumber: v.optional(v.string()), // Added later by admin
    createdAt: v.number(), // Timestamp when shipping details added
  }).index("by_orderId", ["orderId"]), // Index for looking up shipping by orderId string

  // Site configuration and settings
  siteSettings: defineTable({
    key: v.string(), // Setting key
    value: v.any(), // Setting value
    updatedBy: v.id("users"), // Admin who last updated
    updatedAt: v.number(), // Last updated timestamp
  }).index("by_key", ["key"]),
});
