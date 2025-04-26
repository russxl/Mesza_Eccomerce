import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function BlogPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Resources & Blog
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Insights, tips, and guides to help you create a healthier and
                  more productive workspace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="mb-12">
              <h2 className="text-2xl font-bold tracking-tight mb-8">
                Featured Articles
              </h2>
              <div className="grid gap-8 md:grid-cols-2">
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="The Health Benefits of Standing Desks"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          May 15, 2023
                        </span>
                        <span className="text-sm bg-muted px-2 py-1 rounded-full">
                          Health
                        </span>
                      </div>
                      <h3 className="font-bold text-xl">
                        The Health Benefits of Standing Desks: What Science Says
                      </h3>
                      <p className="text-muted-foreground">
                        A comprehensive look at the latest research on how
                        standing desks can improve your health and well-being.
                      </p>
                      <Button asChild variant="link" className="p-0">
                        <Link href="/blog/health-benefits-standing-desks">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=400&width=800"
                      alt="Designing Your Workspace"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          April 28, 2023
                        </span>
                        <span className="text-sm bg-muted px-2 py-1 rounded-full">
                          Design
                        </span>
                      </div>
                      <h3 className="font-bold text-xl">
                        Designing Your Workspace for Maximum Productivity
                      </h3>
                      <p className="text-muted-foreground">
                        Expert tips on how to arrange your desk, chair, and
                        accessories for an ergonomic and efficient workspace.
                      </p>
                      <Button asChild variant="link" className="p-0">
                        <Link href="/blog/designing-workspace-productivity">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-8">
                Recent Articles
              </h2>
              <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Standing vs Sitting"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          March 12, 2023
                        </span>
                        <span className="text-sm bg-muted px-2 py-1 rounded-full">
                          Health
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">
                        Finding the Perfect Balance: Standing vs. Sitting
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        How to determine the ideal ratio of standing to sitting
                        for your workday.
                      </p>
                      <Button asChild variant="link" className="p-0">
                        <Link href="/blog/standing-vs-sitting-balance">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Cable Management"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          February 28, 2023
                        </span>
                        <span className="text-sm bg-muted px-2 py-1 rounded-full">
                          Organization
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">
                        The Ultimate Guide to Cable Management
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Simple solutions to keep your cables organized and your
                        workspace clean.
                      </p>
                      <Button asChild variant="link" className="p-0">
                        <Link href="/blog/cable-management-guide">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Standing Desk Exercises"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          January 15, 2023
                        </span>
                        <span className="text-sm bg-muted px-2 py-1 rounded-full">
                          Fitness
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">
                        5 Simple Exercises You Can Do at Your Standing Desk
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Quick and effective movements to keep your body active
                        throughout the workday.
                      </p>
                      <Button asChild variant="link" className="p-0">
                        <Link href="/blog/standing-desk-exercises">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Choosing the Right Desk"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          December 10, 2022
                        </span>
                        <span className="text-sm bg-muted px-2 py-1 rounded-full">
                          Buying Guide
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">
                        How to Choose the Right Standing Desk for Your Needs
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        A comprehensive guide to the features, materials, and
                        options to consider before purchasing.
                      </p>
                      <Button asChild variant="link" className="p-0">
                        <Link href="/blog/choosing-right-standing-desk">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Remote Work Setup"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          November 22, 2022
                        </span>
                        <span className="text-sm bg-muted px-2 py-1 rounded-full">
                          Remote Work
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">
                        Creating the Perfect Home Office with a Standing Desk
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Tips for setting up an efficient and comfortable remote
                        work environment.
                      </p>
                      <Button asChild variant="link" className="p-0">
                        <Link href="/blog/home-office-standing-desk">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
                <Card className="overflow-hidden">
                  <div className="aspect-video relative">
                    <Image
                      src="/placeholder.svg?height=300&width=500"
                      alt="Desk Accessories"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <CardContent className="p-6">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">
                          October 18, 2022
                        </span>
                        <span className="text-sm bg-muted px-2 py-1 rounded-full">
                          Accessories
                        </span>
                      </div>
                      <h3 className="font-bold text-lg">
                        10 Must-Have Accessories for Your Standing Desk
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Enhance your standing desk experience with these
                        essential add-ons.
                      </p>
                      <Button asChild variant="link" className="p-0">
                        <Link href="/blog/standing-desk-accessories">
                          Read More <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button size="lg">Load More Articles</Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Subscribe to Our Newsletter
                </h2>
                <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                  Get the latest articles, tips, and product updates delivered
                  straight to your inbox.
                </p>
              </div>
              <div className="mx-auto w-full max-w-sm space-y-2">
                <form className="flex flex-col sm:flex-row gap-2">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  />
                  <Button type="submit">Subscribe</Button>
                </form>
                <p className="text-xs text-muted-foreground">
                  We respect your privacy. Unsubscribe at any time.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
