"use client";

import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { useState, use } from "react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductActions from "./ProductActions";
import ProductImageGallery from "./ProductImageGallery";
import ProductDetailLoading from "./loading";
import { useQuery } from "@tanstack/react-query";

// Use a local interface that matches what the API returns
interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  imageURLs?: string[];
  stockCount: number;
  isActive: boolean;
  categories?: string[];
  /* eslint-disable @typescript-eslint/no-explicit-any */
  variations?: any[];
  specifications?: Specification[];
  reviews?: any[];
  /* eslint-enable @typescript-eslint/no-explicit-any */
}

// Define a type for product specifications
interface Specification {
  key: string;
  value: string;
}

// Create a fetcher function that can be used with React Query
async function getProductById(slug: string): Promise<Product | null> {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  try {
    const response = await fetch(`${baseUrl}/api/dashboard/products/${slug}`, {
      cache: "no-store",
    });
    
    if (!response.ok) {
      return null; // Return null instead of throwing error to handle 404 case
    }
    
    return response.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null; // Return null on any error
  }
}

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const [selectedVariationImage, setSelectedVariationImage] = useState<string | null>(null);
  
  // Use React Query to fetch the product data
  const { 
    data: product, 
    isLoading,
  } = useQuery({
    queryKey: ['product', slug],
    queryFn: () => getProductById(slug),
    retry: 1, // Only retry once if there's an error
    staleTime: 5 * 60 * 1000, // 5 minutes
  });

  // Handle loading state
  if (isLoading) {
    return <ProductDetailLoading />;
  }

  // Handle 404 - if product is null or undefined
  if (!product) {
    return notFound();
  }

  // Set initial variation image when product data is available
  if (product.imageURLs?.[0] && !selectedVariationImage) {
    setSelectedVariationImage(product.imageURLs[0]);
  }

  // Callback for ProductImageGallery to update the selected image
  const handleMainImageChangeByGallery = (newImage: string) => {
    setSelectedVariationImage(newImage);
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <nav className="flex gap-2 text-sm text-muted-foreground">
                <Link href="/" className="hover:text-foreground">
                  Home
                </Link>
                <ChevronRight className="h-4 w-4" />
                <Link href="/products" className="hover:text-foreground">
                  Products
                </Link>
                <ChevronRight className="h-4 w-4" />
                <span>{product.name}</span>
              </nav>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <ProductImageGallery
                initialImageURLs={product.imageURLs || []}
                productName={product.name}
                onMainImageChange={handleMainImageChangeByGallery}
                currentSelectedVariationImage={selectedVariationImage}
              />
              <ProductActions
                product={product}
                onVariationImageSelect={setSelectedVariationImage}
              />
            </div>

            <div className="mt-16">
              <Tabs defaultValue="description">
                <TabsList className="w-full justify-start border-b rounded-none">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specifications">
                    Specifications
                  </TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value="description" className="pt-6">
                  <div className="space-y-4">
                    <p>{product.description}</p>
                  </div>
                </TabsContent>
                <TabsContent value="specifications" className="pt-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    {(product.specifications || []).map(
                      (spec: Specification, idx: number) => (
                        <div key={idx}>
                          <h4 className="font-medium">{spec.key}</h4>
                          <p className="text-sm text-muted-foreground">
                            {spec.value}
                          </p>
                        </div>
                      )
                    )}
                  </div>
                </TabsContent>
                <TabsContent value="reviews" className="pt-6">
                  <div className="space-y-8">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="h-5 w-5 fill-current text-yellow-400"
                          />
                        ))}
                      </div>
                      <span className="text-lg font-medium">
                        {product.reviews?.length
                          ? `4.9 out of 5 stars (${product.reviews.length} reviews)`
                          : "No reviews yet"}
                      </span>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
