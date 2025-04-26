import { z } from "zod";

// Schema for an existing variation reference (just an ID string)
const variationRefSchema = z.string();

// Schema for a new variation to be created
export const variationOptionSchema = z
  .object({
    type: z.string(),
    options: z.array(
      z.object({
        value: z.string().min(1, "Value is required"),
        price: z.number().optional(),
        stockCount: z.number(),
      })
    ),
    isActive: z.boolean().optional().default(true),
    imageURL: z.string().optional(),
  })
  .refine(
    (data) => {
      // If type is not empty, options must have at least one item
      return data.type === "" || (data.type !== "" && data.options.length > 0);
    },
    {
      message: "Options are required when variation type is specified",
      path: ["options"], // Shows error on the options field
    }
  );

export const specificationSchema = z.array(
  z.object({
    key: z.string().min(1, "Key is required"),
    value: z.string().min(1, "Value is required"),
  })
);

// Main product schema that allows both variation references and new variations
export const ProductSchema = z.object({
  _id: z.string().optional(),
  name: z.string().min(1, "Product name is required"),
  description: z.string().min(1, "Description is required"),
  price: z.coerce.number().min(0, "Price must be a positive number"),
  imageURLs: z.array(z.string()),
  stockCount: z.coerce.number(),
  isActive: z.boolean(),
  categories: z.array(z.string()),
  createdAt: z.number().optional(),
  updatedAt: z.number().optional(),
  variations: z
    .array(
      z.union([
        variationRefSchema, // Existing variation ID
        variationOptionSchema, // New variation to create
      ])
    )
    .optional()
    .default([]),
  specifications: specificationSchema.optional(),
  reviews: z
    .array(
      z.object({
        productId: z.string(),
        username: z.string(),
        rating: z.number(),
        comment: z.string(),
        createdAt: z.number(),
      })
    )
    .optional(),
});

export type VariationOption = z.infer<typeof variationOptionSchema>;
export type ProductData = z.infer<typeof ProductSchema>;
export type Specification = z.infer<typeof specificationSchema>;
