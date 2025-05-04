"use client";
import Image from "next/image";
import Link from "next/link";
import { Filter } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useProductStore, useFilteredProducts } from "@/store/productStore";

export default function ProductsPage() {
  const { filters, setSorting } = useProductStore();

  // Get filtered products using the custom hook
  const { data: products = [], isLoading } = useFilteredProducts();
  
 




  const handleSortChange = (value: string) => {
    // Map UI sort values to store sort fields and order
    switch (value) {
      case "price-low":
        setSorting("price", "asc");
        break;
      case "price-high":
        setSorting("price", "desc");
        break;
      case "newest":
        setSorting("createdAt", "desc");
        break;
      case "featured":
      default:
        setSorting("createdAt", "desc");
        break;
    }
  };

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Our Products
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Explore our complete range of premium standing desks and
                  accessories.
                </p>
                {/* <input
                  type="text"
                  placeholder="Search products..."
                  className="mt-4 w-full max-w-md rounded-md border px-4 py-2 text-base"
                  value={filters.searchTerm}
                  onChange={handleSearchChange}
                /> */}
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
              <div className="space-y-1">
                <h2 className="text-2xl font-bold tracking-tight">
                  Standing Desks and Accessories
                </h2>
                <p className="text-muted-foreground">
                  Browse our collection of ergonomic standing desks designed for
                  comfort and productivity.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <Filter className="h-4 w-4" />
                  <span className="text-sm font-medium">Filter by:</span>
                </div>
                {/* <Select
                  // value={categoryFilter} // Uncomment and implement if you add category filtering
                  onValueChange={handleCategoryChange}
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Products</SelectItem>
                    <SelectItem value="essential">Essential Series</SelectItem>
                    <SelectItem value="pro">Pro Series</SelectItem>
                    <SelectItem value="executive">Executive Series</SelectItem>
                  </SelectContent>
                </Select> */}
                <Select
                  onValueChange={handleSortChange}
                  value={
                    filters.sortBy === "price"
                      ? filters.sortOrder === "asc"
                        ? "price-low"
                        : "price-high"
                      : filters.sortBy === "createdAt"
                        ? "newest"
                        : "featured"
                  }
                >
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="featured">Featured</SelectItem>
                    <SelectItem value="price-low">
                      Price: Low to High
                    </SelectItem>
                    <SelectItem value="price-high">
                      Price: High to Low
                    </SelectItem>
                    <SelectItem value="newest">Newest</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {isLoading ? (
              <div className="text-center py-12">Loading products...</div>
            ) : (
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {products.map((product) => (
                  <Card className="overflow-hidden" key={product._id}>
                    <div className="aspect-square relative">
                      <Image
                        src={
                          product.imageURLs?.[0] ||
                          "/placeholder.svg?height=400&width=400"
                        }
                        alt={product.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h3 className="font-bold text-lg">MESZA</h3>
                        <p className="text-sm text-muted-foreground">
                          {product.name}
                        </p>
                        <div className="flex items-center justify-between pt-2">
                          <span className="font-bold">
                            ₱{product.price.toFixed(2)}
                          </span>
                          <Button asChild size="sm">
                            <Link href={`/products/${product._id}`}>
                              View Details
                            </Link>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
