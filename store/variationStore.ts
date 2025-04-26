import { useQuery } from "@tanstack/react-query";
import { create } from "zustand";
interface Variant {
  id: string;
  name: string;
  // Add other fields as needed
}

export interface ProductVariation {
  _id: string;
  productId: string;
  type: string;
  value: string;
  price?: number;
  stockCount: number;
  isActive: boolean;
  imageURL?: string;
}

async function fetchVariants(): Promise<Variant[]> {
  const response = await fetch("/api/variants");
  if (!response.ok) {
    throw new Error("Failed to fetch variants");
  }
  return response.json();
}

async function fetchProductVariations(): Promise<ProductVariation[]> {
  const response = await fetch("/api/dashboard/variations");
  if (!response.ok) {
    throw new Error("Failed to fetch product variations");
  }
  return response.json();
}
async function fetchProductVariationById(
  id: string
): Promise<ProductVariation> {
  const response = await fetch(`/api/dashboard/variations/${id}`);
  if (!response.ok) {
    throw new Error("Failed to fetch product variation");
  }
  return response.json();
}
export const useVariantsQuery = () =>
  create(() => ({
    queryKey: ["variants"],
    queryFn: fetchVariants,
  }));

export function useProductVariations() {
  return useQuery<ProductVariation[]>({
    queryKey: ["productVariations"],
    queryFn: fetchProductVariations,
  });
}

export function useProductVariation(id: string) {
  return useQuery<ProductVariation>({
    queryKey: ["productVariation", id],
    queryFn: () => fetchProductVariationById(id),
  });
}
