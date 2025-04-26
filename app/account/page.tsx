import Link from "next/link";
import Image from "next/image";
import {
  Package,
  User,
  CreditCard,
  Settings,
  LogOut,
  ShoppingBag,
  Heart,
  Clock,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";

export default function AccountPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between mb-8">
              <div>
                <h1 className="text-3xl font-bold tracking-tight">
                  My Account
                </h1>
                <p className="text-muted-foreground">
                  Manage your account settings and view your order history.
                </p>
              </div>
              <Button variant="outline" className="w-full md:w-auto">
                <LogOut className="mr-2 h-4 w-4" />
                Sign Out
              </Button>
            </div>

            <div className="grid gap-10 md:grid-cols-[240px_1fr]">
              <nav className="hidden md:block">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-3 rounded-lg px-3 py-2 bg-muted">
                    <User className="h-5 w-5" />
                    <span className="font-medium">Profile</span>
                  </div>
                  <Link
                    href="/account/orders"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Package className="h-5 w-5" />
                    <span>Orders</span>
                  </Link>
                  <Link
                    href="/account/addresses"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <CreditCard className="h-5 w-5" />
                    <span>Addresses</span>
                  </Link>
                  <Link
                    href="/account/wishlist"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Heart className="h-5 w-5" />
                    <span>Wishlist</span>
                  </Link>
                  <Link
                    href="/account/settings"
                    className="flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground hover:text-foreground"
                  >
                    <Settings className="h-5 w-5" />
                    <span>Settings</span>
                  </Link>
                </div>
              </nav>

              <Tabs defaultValue="profile" className="md:hidden mb-8">
                <TabsList className="grid grid-cols-4 w-full">
                  <TabsTrigger value="profile">Profile</TabsTrigger>
                  <TabsTrigger value="orders">Orders</TabsTrigger>
                  <TabsTrigger value="addresses">Addresses</TabsTrigger>
                  <TabsTrigger value="settings">Settings</TabsTrigger>
                </TabsList>
              </Tabs>

              <div className="space-y-8">
                <Card>
                  <CardHeader>
                    <CardTitle>Profile Information</CardTitle>
                    <CardDescription>
                      Update your personal information and preferences.
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-col md:flex-row gap-6 items-start">
                      <div className="relative h-24 w-24 overflow-hidden rounded-full">
                        <Image
                          src="/placeholder.svg?height=96&width=96"
                          alt="Profile Picture"
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div className="space-y-1">
                        <h3 className="text-xl font-semibold">John Doe</h3>
                        <p className="text-muted-foreground">
                          john.doe@example.com
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Member since January 2023
                        </p>
                        <Button variant="outline" size="sm" className="mt-2">
                          Change Photo
                        </Button>
                      </div>
                    </div>

                    <Separator />

                    <div className="grid gap-6 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">
                          Full Name
                        </label>
                        <input
                          id="name"
                          defaultValue="John Doe"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">
                          Email
                        </label>
                        <input
                          id="email"
                          type="email"
                          defaultValue="john.doe@example.com"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-medium">
                          Phone
                        </label>
                        <input
                          id="phone"
                          type="tel"
                          defaultValue="(123) 456-7890"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="birthday"
                          className="text-sm font-medium"
                        >
                          Birthday
                        </label>
                        <input
                          id="birthday"
                          type="date"
                          defaultValue="1990-01-01"
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                        />
                      </div>
                    </div>

                    <Separator />

                    <div className="space-y-4">
                      <h4 className="font-medium">Communication Preferences</h4>
                      <div className="space-y-2">
                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            id="marketing-emails"
                            className="mt-1 h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <div>
                            <label
                              htmlFor="marketing-emails"
                              className="font-medium"
                            >
                              Marketing Emails
                            </label>
                            <p className="text-sm text-muted-foreground">
                              Receive emails about new products, promotions, and
                              company updates.
                            </p>
                          </div>
                        </div>
                        <div className="flex items-start gap-2">
                          <input
                            type="checkbox"
                            id="order-updates"
                            className="mt-1 h-4 w-4 rounded border-gray-300"
                            defaultChecked
                          />
                          <div>
                            <label
                              htmlFor="order-updates"
                              className="font-medium"
                            >
                              Order Updates
                            </label>
                            <p className="text-sm text-muted-foreground">
                              Receive notifications about your orders, shipping,
                              and delivery.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter className="flex justify-end gap-2">
                    <Button variant="outline">Cancel</Button>
                    <Button>Save Changes</Button>
                  </CardFooter>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Recent Orders</CardTitle>
                    <CardDescription>
                      View your recent order history and track shipments.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Order #ELV12345</h4>
                              <Badge variant="outline">Processing</Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Placed on April 12, 2023
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 sm:flex-row">
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1"
                            >
                              <Package className="h-4 w-4" />
                              Track Order
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1"
                            >
                              <ShoppingBag className="h-4 w-4" />
                              View Details
                            </Button>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="flex gap-4">
                            <div className="h-16 w-16 rounded-md border bg-muted"></div>
                            <div>
                              <h5 className="font-medium">Mesza Pro</h5>
                              <p className="text-sm text-muted-foreground">
                                60&quot; × 30&quot;, Black
                              </p>
                              <p className="text-sm font-medium">$699.00</p>
                            </div>
                          </div>
                          <div className="flex gap-4">
                            <div className="h-16 w-16 rounded-md border bg-muted"></div>
                            <div>
                              <h5 className="font-medium">Monitor Arm</h5>
                              <p className="text-sm text-muted-foreground">
                                Silver
                              </p>
                              <p className="text-sm font-medium">$129.00</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="rounded-lg border p-4">
                        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                          <div>
                            <div className="flex items-center gap-2">
                              <h4 className="font-medium">Order #ELV12344</h4>
                              <Badge
                                variant="outline"
                                className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                              >
                                Delivered
                              </Badge>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              Placed on March 5, 2023
                            </p>
                          </div>
                          <div className="flex flex-col gap-2 sm:flex-row">
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1"
                            >
                              <Clock className="h-4 w-4" />
                              Buy Again
                            </Button>
                            <Button
                              variant="outline"
                              size="sm"
                              className="gap-1"
                            >
                              <ShoppingBag className="h-4 w-4" />
                              View Details
                            </Button>
                          </div>
                        </div>
                        <Separator className="my-4" />
                        <div className="grid gap-4 md:grid-cols-2">
                          <div className="flex gap-4">
                            <div className="h-16 w-16 rounded-md border bg-muted"></div>
                            <div>
                              <h5 className="font-medium">Anti-Fatigue Mat</h5>
                              <p className="text-sm text-muted-foreground">
                                Black
                              </p>
                              <p className="text-sm font-medium">$79.00</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">
                      View All Orders
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
