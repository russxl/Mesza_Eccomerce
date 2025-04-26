import Image from "next/image";
import Link from "next/link";
import { Check, X, ChevronRight, ShoppingCart } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function ComparePage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col gap-2 mb-8">
              <h1 className="text-3xl font-bold tracking-tight">
                Compare Standing Desks
              </h1>
              <p className="text-muted-foreground">
                Compare features and specifications to find the perfect standing
                desk for your needs.
              </p>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full min-w-[800px] border-collapse">
                <thead>
                  <tr>
                    <th className="w-1/4 p-4 text-left font-medium"></th>
                    <th className="w-1/4 p-4 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="h-48 w-48 relative">
                          <Image
                            src="/placeholder.svg?height=192&width=192"
                            alt="Mesza Essential"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-bold">Mesza Essential</h3>
                          <p className="text-muted-foreground">
                            Entry-level standing desk
                          </p>
                          <p className="text-xl font-bold mt-2">$499</p>
                        </div>
                      </div>
                    </th>
                    <th className="w-1/4 p-4 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="h-48 w-48 relative">
                          <Image
                            src="/placeholder.svg?height=192&width=192"
                            alt="Mesza Pro"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-bold">Mesza Pro</h3>
                          <p className="text-muted-foreground">
                            Advanced features and premium materials
                          </p>
                          <p className="text-xl font-bold mt-2">$699</p>
                        </div>
                      </div>
                    </th>
                    <th className="w-1/4 p-4 text-center">
                      <div className="flex flex-col items-center gap-4">
                        <div className="h-48 w-48 relative">
                          <Image
                            src="/placeholder.svg?height=192&width=192"
                            alt="Mesza Executive"
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-center">
                          <h3 className="text-lg font-bold">Mesza Executive</h3>
                          <p className="text-muted-foreground">
                            Premium offering with luxury finishes
                          </p>
                          <p className="text-xl font-bold mt-2">$999</p>
                        </div>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Height Range</td>
                    <td className="p-4 text-center">24" - 48"</td>
                    <td className="p-4 text-center">24" - 50"</td>
                    <td className="p-4 text-center">22" - 52"</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Desktop Size Options</td>
                    <td className="p-4 text-center">48" × 30", 60" × 30"</td>
                    <td className="p-4 text-center">
                      48" × 30", 60" × 30", 72" × 30"
                    </td>
                    <td className="p-4 text-center">
                      48" × 30", 60" × 30", 72" × 30", 80" × 30"
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Weight Capacity</td>
                    <td className="p-4 text-center">250 lbs</td>
                    <td className="p-4 text-center">300 lbs</td>
                    <td className="p-4 text-center">350 lbs</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Motor Type</td>
                    <td className="p-4 text-center">Single Motor</td>
                    <td className="p-4 text-center">Dual Motors</td>
                    <td className="p-4 text-center">Dual Motors (Enhanced)</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Memory Presets</td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 mx-auto text-red-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                      <span className="text-sm text-muted-foreground">
                        3 Presets
                      </span>
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                      <span className="text-sm text-muted-foreground">
                        4 Presets
                      </span>
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Anti-Collision System</td>
                    <td className="p-4 text-center">
                      <X className="h-5 w-5 mx-auto text-red-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    </td>
                    <td className="p-4 text-center">
                      <Check className="h-5 w-5 mx-auto text-green-500" />
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">
                      Desktop Material Options
                    </td>
                    <td className="p-4 text-center">Laminate</td>
                    <td className="p-4 text-center">Laminate, Bamboo</td>
                    <td className="p-4 text-center">
                      Laminate, Bamboo, Solid Wood
                    </td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Cable Management</td>
                    <td className="p-4 text-center">Basic</td>
                    <td className="p-4 text-center">Advanced</td>
                    <td className="p-4 text-center">Premium</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Warranty</td>
                    <td className="p-4 text-center">3 Years</td>
                    <td className="p-4 text-center">5 Years</td>
                    <td className="p-4 text-center">10 Years</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4 font-medium">Assembly Time</td>
                    <td className="p-4 text-center">30-45 minutes</td>
                    <td className="p-4 text-center">30-45 minutes</td>
                    <td className="p-4 text-center">30-45 minutes</td>
                  </tr>
                  <tr className="border-t">
                    <td className="p-4"></td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col gap-2">
                        <Button asChild>
                          <Link href="/products/essential">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/products/essential">View Details</Link>
                        </Button>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col gap-2">
                        <Button asChild>
                          <Link href="/products/pro">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/products/pro">View Details</Link>
                        </Button>
                      </div>
                    </td>
                    <td className="p-4 text-center">
                      <div className="flex flex-col gap-2">
                        <Button asChild>
                          <Link href="/products/executive">
                            <ShoppingCart className="mr-2 h-4 w-4" />
                            Add to Cart
                          </Link>
                        </Button>
                        <Button variant="outline" asChild>
                          <Link href="/products/executive">View Details</Link>
                        </Button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-12">
              <h2 className="text-2xl font-bold tracking-tight mb-6">
                Which Mesza is Right for You?
              </h2>
              <div className="grid gap-8 md:grid-cols-3">
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Mesza Essential</h3>
                  <p className="text-muted-foreground">
                    Perfect for budget-conscious buyers who need a reliable
                    standing desk with basic functionality. Ideal for home
                    offices and light use.
                  </p>
                  <p className="font-medium">Best for:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>First-time standing desk users</li>
                    <li>Budget-conscious shoppers</li>
                    <li>Light to moderate daily use</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Mesza Pro</h3>
                  <p className="text-muted-foreground">
                    Our most popular model, offering the perfect balance of
                    features, quality, and value. Ideal for professionals who
                    use their desk daily.
                  </p>
                  <p className="font-medium">Best for:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Full-time remote workers</li>
                    <li>Those who switch positions frequently</li>
                    <li>Users who need memory presets</li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h3 className="text-xl font-bold">Mesza Executive</h3>
                  <p className="text-muted-foreground">
                    Our premium offering with the highest quality materials and
                    advanced features. Perfect for executives, designers, and
                    anyone who wants the best.
                  </p>
                  <p className="font-medium">Best for:</p>
                  <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                    <li>Executives and professionals</li>
                    <li>Design-conscious users</li>
                    <li>Those who want premium materials</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild size="lg">
                <Link href="/products">
                  Browse All Products <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
