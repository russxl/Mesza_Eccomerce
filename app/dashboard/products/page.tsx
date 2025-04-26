"use client";

import type React from "react";

import { useState } from "react";
import Link from "next/link";
import { Plus, Pencil, Package, Search, ArrowUpDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { DeleteProductButton } from "./delete-product-button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProductStore, useFilteredProducts } from "@/store/productStore";
import { useRouter } from "next/navigation";

export default function ProductsPage() {
  // Use Zustand store for actions and filters
  const {
    toggleShowInactive,

    setSearchTerm,
    setSorting,
    filters: { showInactive, sortBy, sortOrder },
  } = useProductStore();

  const router = useRouter();

  // Fetch filtered products from backend
  const { data: products = [], isLoading, isError } = useFilteredProducts();

  // Local state for search input (debounced before updating store)
  const [searchInput, setSearchInput] = useState("");

  // Handle search with debounce
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchInput(value);

    // Debounce search term updates
    setTimeout(() => {
      setSearchTerm(value);
    }, 300);
  };

  // Handle column sorting
  const handleSort = (column: string) => {
    if (sortBy === column) {
      setSorting(column, sortOrder === "asc" ? "desc" : "asc");
    }
  };

  // Helper to render sort indicator
  const getSortIndicator = (column: string) => {
    if (sortBy !== column) return null;
    return (
      <ArrowUpDown
        className={`ml-1 h-4 w-4 inline ${sortOrder === "asc" ? "rotate-0" : "rotate-180"}`}
      />
    );
  };

  if (isLoading)
    return (
      <div className="p-6 md:p-8 flex items-center justify-center h-64">
        <div className="flex flex-col items-center gap-2">
          <div className="h-8 w-8 animate-spin rounded-full border-4 border-emerald-200 border-t-emerald-600"></div>
          <p className="text-muted-foreground">Loading products...</p>
        </div>
      </div>
    );

  if (isError)
    return (
      <div className="p-6 md:p-8">
        <Card className="border-destructive">
          <CardHeader>
            <CardTitle className="text-destructive">Error</CardTitle>
            <CardDescription>Failed to load products</CardDescription>
          </CardHeader>
          <CardContent>
            <p>
              There was an error loading your products. Please try again later
              or contact support.
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </CardContent>
        </Card>
      </div>
    );

  if (!products.length && !searchInput) {
    return (
      <div className="p-6 md:p-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Products</h1>
          <Button onClick={() => router.push("/dashboard/products/new")}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>

        <Card className="border-dashed">
          <CardContent className="p-8 flex flex-col items-center justify-center">
            <Package className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-lg font-medium mb-2">No products found</h3>
            <p className="text-muted-foreground mb-6 text-center max-w-md">
              Get started by creating your first product to display in your
              store.
            </p>
            <Button onClick={() => router.push("/dashboard/products/new")}>
              <Plus className="mr-2 h-4 w-4" />
              Add Product
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center w-full sm:w-auto">
          <div className="flex items-center gap-2">
            <Switch
              checked={showInactive}
              onCheckedChange={toggleShowInactive}
              id="show-inactive"
            />
            <label htmlFor="show-inactive" className="text-sm cursor-pointer">
              Show inactive
            </label>
          </div>

          <Button onClick={() => router.push("/dashboard/products/new")}>
            <Plus className="mr-2 h-4 w-4" />
            Add Product
          </Button>
        </div>
      </div>

      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search products..."
            className="pl-10"
            value={searchInput}
            onChange={handleSearchChange}
          />
        </div>
      </div>

      {products.length > 0 ? (
        <div className="rounded-md border bg-card">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead
                  className="cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => handleSort("name")}
                >
                  <div className="flex items-center">
                    Name {getSortIndicator("name")}
                  </div>
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => handleSort("price")}
                >
                  <div className="flex items-center">
                    Price {getSortIndicator("price")}
                  </div>
                </TableHead>
                <TableHead
                  className="cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => handleSort("stockCount")}
                >
                  <div className="flex items-center">
                    Stock {getSortIndicator("stockCount")}
                  </div>
                </TableHead>
                <TableHead>Status</TableHead>
                <TableHead
                  className="cursor-pointer hover:text-foreground transition-colors"
                  onClick={() => handleSort("createdAt")}
                >
                  <div className="flex items-center">
                    Created {getSortIndicator("createdAt")}
                  </div>
                </TableHead>
                <TableHead className="text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {products.map((product) => (
                <TableRow key={product._id}>
                  <TableCell className="font-medium">{product.name}</TableCell>
                  <TableCell>${product.price.toFixed(2)}</TableCell>
                  <TableCell>{product.stockCount}</TableCell>
                  <TableCell>
                    <Badge
                      variant={product.isActive ? "success" : "destructive"}
                    >
                      {product.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {product.createdAt
                      ? new Date(product.createdAt).toLocaleDateString()
                      : "N/A"}
                  </TableCell>
                  <TableCell className="text-right">
                    <div className="flex justify-end gap-2">
                      <Link href={`/dashboard/products/${product._id}`}>
                        <Button size="sm" variant="outline">
                          <Pencil className="h-4 w-4" />
                          <span className="sr-only">Edit</span>
                        </Button>
                      </Link>
                      {product._id && (
                        <DeleteProductButton productId={product._id} />
                      )}
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      ) : (
        <Card>
          <CardContent className="p-6">
            <div className="text-center">
              <p className="text-muted-foreground">
                No products match your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4"
                onClick={() => setSearchTerm("")}
              >
                Clear Search
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
