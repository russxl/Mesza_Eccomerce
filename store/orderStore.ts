import { create } from "zustand";
import { Cart } from "@/schema/shipping-schema";
import { createOrder } from "@/convex/orders";

interface OrderState {
  cart: Cart[];
  setCart: (cart: Cart[]) => void;
  clearCart: () => void;
  createOrder: (cart: Cart[], subTotal: number) => Promise<any>;
  getOrderById: (orderId: string) => Promise<any>;
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
        throw new Error("Failed to create order");
      }
      return await res.json();
    } catch (error) {
      console.error(error);
      throw error;
    }
  },

  getOrderById: async (orderId: string) => {
    console.log("Fetching order with ID:", orderId);
    try {
      // Call the API route that leverages Convex
      const res = await fetch(`/api/order/${orderId}`);

      if (!res.ok) {
        const errorData = await res.json().catch(() => null);
        console.error("Order fetch failed:", res.status, errorData);
        throw new Error(`Failed to fetch order: ${res.statusText}`);
      }

      const data = await res.json();

      return data;
    } catch (error) {
      console.error("Error in getOrderById:", error);
      return null; // Return null instead of throwing to avoid breaking the UI
    }
  },
}));
