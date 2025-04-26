import Image from "next/image";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";

export default function AboutPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 ">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  About Mesza
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Our mission is to transform workspaces and improve well-being
                  through innovative standing desk solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Values
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  The principles that guide everything we do at Mesza.
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                    <path d="m9 12 2 2 4-4" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Quality</h3>
                <p className="text-muted-foreground">
                  We never compromise on materials or craftsmanship. Every desk
                  we produce is built to last and backed by our comprehensive
                  warranty.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously push the boundaries of what&apos;s possible in desk
                  design, incorporating new technologies and features to enhance
                  the user experience.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-4 rounded-lg border p-8 text-center">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-8 w-8 text-primary"
                  >
                    <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                    <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                    <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                    <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold">Sustainability</h3>
                <p className="text-muted-foreground">
                  We&apos;re committed to environmentally responsible manufacturing
                  practices, from sourcing sustainable materials to minimizing
                  waste in our production process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Meet the passionate individuals behind Mesza.
                </p>
              </div>
            </div>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Sarah Johnson"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Sarah Johnson</h3>
                  <p className="text-muted-foreground">Co-Founder & CEO</p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Michael Chen"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Michael Chen</h3>
                  <p className="text-muted-foreground">
                    Co-Founder & Head of Design
                  </p>
                </div>
              </div>
              <div className="flex flex-col items-center space-y-4">
                <Image
                  src="/placeholder.svg?height=200&width=200"
                  alt="Emily Rodriguez"
                  width={200}
                  height={200}
                  className="rounded-full"
                />
                <div className="text-center">
                  <h3 className="text-xl font-bold">Emily Rodriguez</h3>
                  <p className="text-muted-foreground">Head of Engineering</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Join Our Team
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  We&apos;re always looking for talented individuals who are
                  passionate about creating exceptional products.
                </p>
              </div>
              <Button asChild size="lg" className="mt-4">
                <Link href="/careers">View Open Positions</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
