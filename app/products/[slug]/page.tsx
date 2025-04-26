import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Star } from "lucide-react";
import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ProductActions from "./ProductActions";

// Define a type for product specifications
interface Specification {
  key: string;
  value: string;
}

// Define a type for product reviews
interface Review {
  id: string;
  rating: number;
  comment: string;
  author: string;
  date: string;
}


async function getProductById(slug: string) {
  const baseUrl =
    process.env.NEXT_PUBLIC_BASE_URL ||
    (process.env.VERCEL_URL && `https://${process.env.VERCEL_URL}`) ||
    "http://localhost:3000";
  try {
    const response = await fetch(`${baseUrl}/api/dashboard/products/${slug}`, {
      cache: "no-store",
    });
    if (!response.ok) return null;
    return response.json();
  } catch (error) {
    console.error("Failed to fetch product:", error);
    return null;
  }
}

export default async function ProductDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const { slug } = await params;
  const product = await getProductById(slug);
  if (!product) return notFound();

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            {/* Breadcrumb navigation */}
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
              {/* Product Image Section */}
              <div className="space-y-6">
                <div className="aspect-square relative overflow-hidden rounded-xl border">
                  <Image
                    src={
                      product.imageURLs?.[0] ||
                      "/placeholder.svg?height=800&width=800"
                    }
                    alt={product.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="grid grid-cols-4 gap-4">
                  {(product.imageURLs || [])
                    .slice(0, 4)
                    .map((url: string, idx: number) => (
                      <div
                        key={idx}
                        className="aspect-square relative overflow-hidden rounded-md border cursor-pointer"
                      >
                        <Image
                          src={url}
                          alt={`${product.name} Thumbnail ${idx + 1}`}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ))}
                </div>
              </div>
              {/* All product details and actions */}
              <ProductActions product={product} />
            </div>

            {/* Product Tabs Section */}
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
