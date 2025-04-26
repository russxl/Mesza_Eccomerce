import { create } from "zustand";
import { persist } from "zustand/middleware";

type CartState = {
  cartCount: number;
  incrementCart: () => void;
  decrementCart: () => void;
  incrementByQuantity: (quantity: number) => void;
  decrementByQuantity: (quantity: number) => void;
  resetCart: () => void;
  dispatch: (action: {
    type: "increment" | "decrement" | "reset" | "incrementBy" | "decrementBy";
    quantity?: number;
  }) => void;
};

const useCartStore = create<CartState>()(
  persist(
    (set) => ({
      cartCount: 0,

      // Basic increment/decrement
      incrementCart: () => set((state) => ({ cartCount: state.cartCount + 1 })),
      decrementCart: () =>
        set((state) => ({ cartCount: Math.max(0, state.cartCount - 1) })),

      // Quantity-based methods
      incrementByQuantity: (quantity: number) =>
        set((state) => ({
          cartCount: state.cartCount + Math.max(0, quantity),
        })),
      decrementByQuantity: (quantity: number) =>
        set((state) => ({
          cartCount: Math.max(0, state.cartCount - Math.max(0, quantity)),
        })),

      resetCart: () => set({ cartCount: 0 }),

      // Unified dispatch method
      dispatch: (action) =>
        set((state) => {
          switch (action.type) {
            case "increment":
              return { cartCount: state.cartCount + 1 };
            case "decrement":
              return { cartCount: Math.max(0, state.cartCount - 1) };
            case "incrementBy":
              return {
                cartCount: state.cartCount + Math.max(0, action.quantity || 1),
              };
            case "decrementBy":
              return {
                cartCount: Math.max(
                  0,
                  state.cartCount - Math.max(0, action.quantity || 1)
                ),
              };
            case "reset":
              return { cartCount: 0 };
            default:
              return state;
          }
        }),
    }),
    {
      name: "cart-storage",
      partialize: (state) => ({ cartCount: state.cartCount }),
    }
  )
);

export default useCartStore;
