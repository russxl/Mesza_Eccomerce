import { create } from "zustand";
import { Cart, Shipping } from "@/schema/shipping-schema"; // Assuming Shipping type is defined here or import appropriately
import { Doc } from "@/convex/_generated/dataModel"; // Import Doc type

// Define the combined type for Order + Shipping details
export type OrderWithShipping = Doc<"orderActivity"> & {
  shipping: Doc<"shipping"> | null;
};

interface OrderState {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
  clearCart: () => void;
  createOrder: (cart: Cart[], subTotal: number) => Promise<string | null>; // Return orderId or null on error
  getOrderById: (orderId: string) => Promise<OrderWithShipping | null>; // Use the combined type
  updateOrderDetails: (
    orderId: string,
    updates: Partial<{ status: string; message: string; trackingNumber: string }>
  ) => Promise<{ success: boolean; data?: any; error?: string }>;
  getAllOrders: () => Promise<OrderWithShipping[]>; // New function to get all orders
}

export const useOrderStore = create<OrderState>((set) => ({
  cart: [],
  setCart: (cart) => set({ cart }),
  clearCart: () => set({ cart: [] }),

  createOrder: async (cart, subTotal) => {
    try {
      const res = await fetch("/api/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ cart, subTotal }),
      });
      if (!res.ok) {
        console.error("Failed to create order:", await res.text());
        return null; // Return null on failure
      }
      const data = await res.json();
      return data.orderId; // Assuming the API returns { orderId: "..." }
    } catch (error) {
      console.error("Error creating order:", error);
      return null; // Return null on error
    }
  },

  getOrderById: async (orderId: string) => {
    try {
      const res = await fetch(`/api/order/${orderId}`);
      if (res.status === 404) {
        return null;
      }
      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        console.error("Order fetch failed:", res.status, errorData);
        throw new Error(`Failed to fetch order: ${res.statusText}`);
      }
      const data: OrderWithShipping = await res.json();
      return data;
    } catch (error) {
      // Only log unexpected errors, not 404s
      if (!(error instanceof Error && error.message.includes("404"))) {
        console.error("Error in getOrderById:", error);
      }
      return null;
    }
  },

  updateOrderDetails: async (orderId: string, updates: Partial<{ status: string; message: string; trackingNumber: string }>) => {
    try {
      const res = await fetch(`/api/order/${orderId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updates),
      });

      if (!res.ok) {
        const errorData = await res.json().catch(() => ({ message: "Failed to update order, unknown error" }));
        console.error("Order update failed:", res.status, errorData);
        throw new Error(errorData.message || `Failed to update order: ${res.statusText}`);
      }

      const data = await res.json();
      return { success: true, data }; // Or whatever response structure you expect
    } catch (error) {
      console.error("Error in updateOrderDetails:", error);
      // Ensure the error is an Error instance
      if (error instanceof Error) {
        return { success: false, error: error.message };
      }
      return { success: false, error: "An unknown error occurred during order update." };
    }
  },

  // Function to get all orders for the orders listing page
  getAllOrders: async () => {
    try {
      const res = await fetch('/api/orders');
      
      if (!res.ok) {
        console.error("Failed to fetch orders:", res.status, res.statusText);
        return [];
      }
      
      const data: OrderWithShipping[] = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching all orders:", error);
      return [];
    }
  },
}));

// Helper function to ensure Shipping type is available (adjust path if needed)
// If Shipping is not in shipping-schema.ts, define it here or import from correct location
// Example definition if not imported:
// export interface Shipping {
//   _id: string;
//   orderId: string;
//   firstName: string;
//   lastName: string;
//   email: string;
//   phone: string;
//   address: string;
//   apartment?: string;
//   city: string;
//   state: string;
//   zipCode: string;
//   country: string;
//   shippingMethod: string;
//   specialInstructions?: string;
//   createdAt: number;
//   trackingNumber?: string;
// }
