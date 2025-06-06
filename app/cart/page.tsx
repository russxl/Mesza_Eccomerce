"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Minus, Plus, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Separator } from "@/components/ui/separator";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import useCartStore from "@/store/globalStore";
import { Cart } from "@/schema/shipping-schema";
import { useOrderStore } from "@/store/orderStore";
import { useRouter } from "next/navigation";
import CartLoading from "./loading";
import { formatCurrencySigns } from "@/utils/formatToCurrency";

export default function CartPage() {
  const [cart, setCart] = useState<Cart[]>([]);
  const decrementByQuantity = useCartStore((state) => state.decrementByQuantity);
  const dispatch = useCartStore((state) => state.dispatch);
  const { createOrder } = useOrderStore();
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    try {
      const stored = localStorage.getItem("cart");
      const items = stored ? JSON.parse(stored) : [];
      // Deduplicate: combine quantities for same productId and selectedOptions (order-insensitive)
      const deduped: Cart[] = [];
      const serializeOptions = (opts: Record<string, string> | undefined) =>
        JSON.stringify(
          Object.keys(opts || {})
            .sort()
            .reduce(
              (acc, key) => {
                acc[key] = opts![key];
                return acc;
              },
              {} as Record<string, string>
            )
        );
      items.forEach((item: Cart) => {
        const existing = deduped.find(
          (d) =>
            d.productId === item.productId &&
            serializeOptions(d.selectedOptions) ===
              serializeOptions(item.selectedOptions)
        );
        if (existing) {
          existing.quantity += item.quantity;
        } else {
          deduped.push({ ...item });
        }
      });
      setCart(deduped);
      localStorage.setItem("cart", JSON.stringify(deduped));
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Separate increase and decrease functions
  const increaseQuantity = (idx: number) => {
    dispatch({ type: "increment" });
    const updated = [...cart];
    updated[idx].quantity += 1;
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const decreaseQuantity = (idx: number) => {
    dispatch({ type: "decrement" });
    const updated = [...cart];
    updated[idx].quantity -= 1;

    // Remove item if quantity becomes less than 1
    if (updated[idx].quantity < 1) {
      handleRemove(idx);
      return;
    }

    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Direct quantity change via input
  const handleQuantityChange = (idx: number, value: number) => {
    // Remove item if quantity is less than 1
    if (value < 1) {
      handleRemove(idx);
      return;
    }

    const updated = [...cart];
    updated[idx].quantity = value;
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleRemove = (idx: number, quantity?: number) => {
    const updated = cart.filter((_, i) => i !== idx);
    dispatch({ type: "decrement" });
    if (quantity) {
      decrementByQuantity(quantity);
    }
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const handleClearCart = () => {
    setCart([]);
    dispatch({ type: "reset" });
    localStorage.removeItem("cart");
  };

  const subtotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleCheckout = async () => {
    setIsSubmitting(true);
    try {
      const orderId = await createOrder(cart, subtotal);
      if (orderId) {
        handleClearCart();
        router.push(`/shipping/${orderId}`);
      } else {
        console.error("Order creation failed.");
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      setIsSubmitting(false);
    }
  };

  // Return null during loading to let Next.js use the loading.tsx component
  if (isLoading) {
    return <CartLoading />;
  }

  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">Your Cart</h1>
              <p className="text-muted-foreground">
                Review and manage your items before checkout.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[1fr_400px]">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="hidden md:grid grid-cols-[2fr_1fr_1fr_auto] gap-6 text-sm text-muted-foreground font-medium py-2 border-b">
                    <div>Product</div>
                    <div>Price</div>
                    <div>Quantity</div>
                  </div>
                  {cart.length === 0 && (
                    <div className="py-8 text-center text-muted-foreground">
                      Your cart is empty.
                    </div>
                  )}
                  {cart.map((item, idx) => (
                    <div
                      key={idx}
                      className="grid md:grid-cols-[2fr_1fr_1fr_auto] gap-4 md:gap-6 py-4 border-b"
                    >
                      <div className="flex gap-4 items-center">
                        <div className="w-20 h-20 relative rounded-md overflow-hidden flex-shrink-0">
                          <Image
                            src={
                              item.image ||
                              "/placeholder.svg?height=80&width=80"
                            }
                            alt={item.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div>
                          <h3 className="font-medium">{item.name}</h3>
                          {item.selectedOptions &&
                            Object.entries(item.selectedOptions).map(
                              ([key, value]) => (
                                <p key={key}>
                                  <span className="text-sm text-muted-foreground">
                                    {key}: {String(value)}
                                  </span>
                                </p>
                              )
                            )}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <span className="font-medium">
                          {formatCurrencySigns(item.price)}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="flex items-center">
                          <button
                            className="flex h-8 w-8 items-center justify-center rounded-l-md border"
                            onClick={() => decreaseQuantity(idx)}
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <input
                            type="number"
                            min="1"
                            value={item.quantity}
                            onChange={(e) =>
                              handleQuantityChange(
                                idx,
                                Number.parseInt(e.target.value) || 1
                              )
                            }
                            className="h-8 w-12 border-y text-center text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                          />
                          <button
                            className="flex h-8 w-8 items-center justify-center rounded-r-md border"
                            onClick={() => increaseQuantity(idx)}
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <button
                          className="ml-2 text-muted-foreground hover:text-destructive"
                          onClick={() => handleRemove(idx, item.quantity)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove item</span>
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col gap-2 sm:flex-row sm:justify-between">
                  <Button variant="outline" asChild>
                    <Link href="/products">Continue Shopping</Link>
                  </Button>
                  <Button
                    variant="ghost"
                    className="gap-2"
                    onClick={handleClearCart}
                  >
                    <Trash2 className="h-4 w-4" />
                    Clear Cart
                  </Button>
                </div>
              </div>

              <div>
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold mb-4">
                      Order Summary
                    </h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Subtotal</span>
                        <span>{formatCurrencySigns(subtotal)}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Shipping</span>
                        <span >
                          -
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between font-medium">
                        <span>Total</span>
                        <span>
                          {formatCurrencySigns(subtotal )}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="px-6 pb-6 pt-0">
                    <Button
                      className="w-full"
                      size="lg"
                      disabled={cart.length === 0 || isSubmitting}
                      onClick={handleCheckout}
                    >
                      {isSubmitting ? (
                        <div className="flex items-center gap-2">
                          <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                          Processing...
                        </div>
                      ) : (
                        "Proceed to Checkout"
                      )}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
