"use client";

import { create } from "zustand";
import { useQuery } from "@tanstack/react-query";
import { queryClient } from "@/lib/query-client";
import { ProductData, ProductSchema } from "@/schema/product";

// Define a proper empty product that matches the schema
const emptyProduct: ProductData = {
  name: "",
  description: "",
  price: 0,
  imageURLs: [""],
  stockCount: 0,
  isActive: true,
  categories: [""],
  variations: [],
  specifications: [],
};

interface ProductState {
  selectedProductId: string | null;
  isCreatingProduct: boolean;
  filters: {
    showInactive: boolean;
    searchTerm: string;
    sortBy: "name" | "price" | "stockCount" | "createdAt";
    sortOrder: "asc" | "desc";
  };
  // Product form state
  product: ProductData;
  setProduct: (product: ProductData) => void;
  resetProduct: () => void;

  // Actions
  selectProduct: (id: string | null) => void;
  setCreatingProduct: (creating: boolean) => void;
  toggleShowInactive: () => void;
  setSearchTerm: (term: string) => void;
  setSorting: (
    field: ProductState["filters"]["sortBy"],
    order: ProductState["filters"]["sortOrder"]
  ) => void;

  // API interactions
  fetchProducts: () => Promise<ProductData[]>;
  fetchProductById: (id: string) => Promise<ProductData>;
  createProduct: (data: ProductData) => Promise<ProductData>;
  updateProduct: (id: string, data: ProductData) => Promise<ProductData>;
  deleteProduct: (id: string) => Promise<void>;
  invalidateProducts: () => Promise<void>;
}

type CartItem = {
  productId: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
  selectedOptions: Record<string, string>;
};

type Store = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  // ...other actions
};

const getInitialCart = () => {
  if (typeof window !== "undefined") {
    const stored = localStorage.getItem("cart");
    return stored ? JSON.parse(stored) : [];
  }
  return [];
};

export const useProductStore = create<ProductState & Store>((set, get) => ({
  selectedProductId: null,
  isCreatingProduct: false,
  filters: {
    showInactive: false,
    searchTerm: "",
    sortBy: "createdAt",
    sortOrder: "desc",
  },
  product: emptyProduct,

  setProduct: (product) => set({ product }),
  resetProduct: () => set({ product: emptyProduct }),

  // Actions
  selectProduct: (id) => set({ selectedProductId: id }),
  setCreatingProduct: (creating) => set({ isCreatingProduct: creating }),
  toggleShowInactive: () =>
    set((state) => ({
      filters: {
        ...state.filters,
        showInactive: !state.filters.showInactive,
      },
    })),
  setSearchTerm: (term) =>
    set((state) => ({
      filters: {
        ...state.filters,
        searchTerm: term,
      },
    })),
  setSorting: (field, order) =>
    set((state) => ({
      filters: {
        ...state.filters,
        sortBy: field,
        sortOrder: order,
      },
    })),

  // API interactions
  fetchProducts: async () => {
    const res = await fetch("/api/dashboard/products", {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) {
      const error = await res
        .json()
        .catch(() => ({ message: "Failed to fetch products" }));
      throw new Error(error.message || "Failed to fetch products");
    }
    return res.json();
  },

  fetchProductById: async (id) => {
    const res = await fetch(`/api/products/${id}`, {
      headers: { Accept: "application/json" },
      cache: "no-store",
    });
    if (!res.ok) {
      const error = await res
        .json()
        .catch(() => ({ message: "Failed to fetch product" }));
      throw new Error(error.message || "Failed to fetch product");
    }
    return res.json();
  },

  createProduct: async (data) => {
    // Validate with the schema before sending
    try {
      const validData = ProductSchema.parse(data);

      const res = await fetch("/api/dashboard/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(validData),
      });

      if (!res.ok) {
        const error = await res
          .json()
          .catch(() => ({ message: "Failed to create product" }));
        throw new Error(error.message || "Failed to create product");
      }

      const newProduct = await res.json();
      await get().invalidateProducts();
      return newProduct;
    } catch (error) {
      console.error("Validation error:", error);
      throw error;
    }
  },

  updateProduct: async (id, data) => {
    // Validate with the schema before sending
    try {
      const validData = ProductSchema.parse(data);

      const res = await fetch(`/api/dashboard/products/${id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(validData),
      });

      if (!res.ok) {
        const error = await res
          .json()
          .catch(() => ({ message: "Failed to update product" }));
        throw new Error(error.message || "Failed to update product");
      }

      const updatedProduct = await res.json();
      await get().invalidateProducts();
      return updatedProduct;
    } catch (error) {
      console.error("Validation error:", error);
      throw error;
    }
  },

  deleteProduct: async (id) => {
    const res = await fetch(`/api/dashboard/products/${id}`, {
      method: "DELETE",
    });

    if (!res.ok) {
      const error = await res
        .json()
        .catch(() => ({ message: "Failed to delete product" }));
      throw new Error(error.message || "Failed to delete product");
    }

    await get().invalidateProducts();
  },

  invalidateProducts: async () => {
    await queryClient.invalidateQueries({ queryKey: ["products"] });
  },

  cart: getInitialCart(),
  addToCart: (item) => {
    const updatedCart = [...get().cart, item];
    set({ cart: updatedCart });
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  },
  // ...other actions
}));

// Custom hook for accessing filtered products
export function useFilteredProducts() {
  const { showInactive, searchTerm, sortBy, sortOrder } = useProductStore(
    (state) => state.filters
  );
  const fetchProducts = useProductStore((state) => state.fetchProducts);

  return useQuery<ProductData[]>({
    queryKey: ["products", { showInactive, searchTerm, sortBy, sortOrder }],
    queryFn: fetchProducts,
    select: (data) => {
      let filtered = data;

      // Filter by active status if needed
      if (!showInactive) {
        filtered = filtered.filter((product) => product.isActive);
      }

      // Filter by search term if provided
      if (searchTerm) {
        const term = searchTerm.toLowerCase();
        filtered = filtered.filter(
          (product) =>
            product.name?.toLowerCase().includes(term) ||
            product.description?.toLowerCase().includes(term)
        );
      }

      // Sort the data with null safety
      filtered = [...filtered].sort((a, b) => {
        const valueA = a[sortBy] ?? "";
        const valueB = b[sortBy] ?? "";

        // Handle string comparison
        if (typeof valueA === "string" && typeof valueB === "string") {
          return sortOrder === "asc"
            ? valueA.localeCompare(valueB)
            : valueB.localeCompare(valueA);
        }

        // Handle number comparison
        return sortOrder === "asc"
          ? Number(valueA) - Number(valueB)
          : Number(valueB) - Number(valueA);
      });

      return filtered;
    },
  });
}

// Custom hook for accessing a single product by ID
export function useProduct(id: string | null) {
  const fetchProductById = useProductStore((state) => state.fetchProductById);

  return useQuery<ProductData>({
    queryKey: ["product", id],
    queryFn: () => fetchProductById(id as string),
    enabled: !!id, // Only run the query if an ID is provided
  });
}
