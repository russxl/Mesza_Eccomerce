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

interface ShippingLocation {
  id: number;
  code: string;
  nativeName: string;
  type: number;
}

interface ShippingState {
  shipping: Record<string, any>;
  shippingLocations?: ShippingLocation[];
  shippingCities?: ShippingLocation[];
  loading: boolean;
  error: string | null;
  fetchShippingLocations: () => Promise<void>;
  fetchCities: (id: number) => Promise<ShippingLocation[]>;
}
interface AreaResponse {
  data?: {
    records?: ShippingLocation[];
    current?: number;
    size?: number;
    total?: number;
  };
}


export const useShippingStore = create<ShippingState>()(
  persist(
    (set) => ({
      shipping: {},
      shippingLocations: undefined,
      shippingCities: undefined,
      loading: false,
      error: null,
      fetchShippingLocations: async () => {
        try {
          const response = await fetch(
            'https://ylofficialjw.jtexpress.ph/website/base/info/area?countryCode=PH&current=1&size=9999'
          );
          
          if (!response.ok) {
            throw new Error(`Error fetching shipping locations: ${response.status}`);
          }
          
          const data = await response.json();
          
          // Parse the response based on the actual structure
          const shippingLocations = data.data?.records || [];
          
          // Sort locations alphabetically by nativeName for better UX
          const sortedLocations = [...shippingLocations].sort((a, b) => 
            a.nativeName.localeCompare(b.nativeName)
          );
          
          set({ shippingLocations: sortedLocations });
          return shippingLocations;
        } catch (error) {
          console.error('Failed to fetch shipping locations:', error);
          throw error;
        }
      },
   
      // Then modify your fetchCities function:
      fetchCities: async (parentId: number) => {
        try {
          const response = await fetch(
            `https://ylofficialjw.jtexpress.ph/website/base/info/area?countryCode=PH&parentId=${parentId}&current=1&size=9999`
          );
          
          if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
          
          const data: AreaResponse = await response.json();
          const cities = data.data?.records || [];
          
          set({ shippingCities: cities, loading: false });
          return cities;
        } catch (error) {
          set({ 
            error: error instanceof Error ? error.message : 'Failed to fetch cities',
            loading: false 
          });
          throw error;
        }
      },
    }),
    {
      name: "shipping-storage",
    }
  )
);