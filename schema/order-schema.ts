import { z } from "zod";

export const shipping = z.object({
  orderId: z.string(),
  address: z.string(),
  city: z.string(),
  state: z.string(),
  zipCode: z.string(),
  country: z.string(),
  shippingMethod: z.string(),
  trackingNumber: z.string().optional(),
});

export const orderSchema = z.object({
  orderId: z.string(),
  status: z.string(),
  subTotal: z.number(),
  cart: z.array(
    z.object({
      productId: z.string(),
      name: z.string(),
      price: z.number(),
      quantity: z.number(),
      image: z.optional(z.string()),
      selectedOptions: z.optional(z.record(z.string(), z.string())),
    })
  ),
  shipping: z.union([z.string(), z.null()]).optional(),
  message: z.string().optional(),
});
