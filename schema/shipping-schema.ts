import { z } from "zod";
// Define the shipping schema with Zod
export const shippingSchema = z.object({
  cartId: z.string().optional(),
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(1, { message: "Phone number is required" }),
  address: z.string().min(1, { message: "Address is required" }),
  apartment: z.string().optional(),
  city: z.string().min(1, { message: "City is required" }),
  state: z.string().min(1, { message: "State is required" }),
  zipCode: z.string().min(1, { message: "ZIP code is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  shippingMethod: z.enum(["Pickup", "Standard"], {
    message: "Please select a shipping method",
  }),
  specialInstructions: z.string().optional(),
  trackingNumber: z.string().optional(),
});

export const cartSchema = z.object({
  productId: z.string(),
  name: z.string(),
  price: z.number().positive(),
  quantity: z.number().int().positive(),
  image: z.string().optional(),
  selectedOptions: z.record(z.string(), z.string()).optional(),
  subTotal: z.number(),
});

export type Shipping = z.infer<typeof shippingSchema>;
export type Cart = z.infer<typeof cartSchema>;
