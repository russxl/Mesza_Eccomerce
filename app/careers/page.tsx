import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function CareersPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                    Join Our Team
                  </h1>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl">
                    Help us transform workspaces and improve well-being through
                    innovative standing desk solutions.
                  </p>
                </div>
                <div className="flex flex-col gap-2 min-[400px]:flex-row">
                  <Button asChild size="lg">
                    <Link href="#open-positions">
                      View Open Positions{" "}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
              <Image
                src="/placeholder.svg?height=550&width=550"
                width={550}
                height={550}
                alt="Mesza Team"
                className="mx-auto aspect-video overflow-hidden rounded-xl object-cover sm:w-full lg:order-last"
              />
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Why Work With Us
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  At Mesza, we're passionate about creating products that
                  improve people's lives. Join us and be part of something
                  meaningful.
                </p>
              </div>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
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
                    <h3 className="text-xl font-bold">Meaningful Work</h3>
                    <p className="text-muted-foreground">
                      Our products help people work more comfortably and
                      healthily. Your work directly contributes to improving
                      people's well-being.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
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
                    <h3 className="text-xl font-bold">Growth & Development</h3>
                    <p className="text-muted-foreground">
                      We invest in our team's professional development with
                      training, mentorship, and opportunities to learn new
                      skills and advance your career.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
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
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                        <circle cx="9" cy="7" r="4" />
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Collaborative Culture</h3>
                    <p className="text-muted-foreground">
                      We foster a supportive, inclusive environment where
                      teamwork thrives and every voice is valued and respected.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
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
                        <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">
                      Comprehensive Benefits
                    </h3>
                    <p className="text-muted-foreground">
                      We offer competitive salaries, health insurance,
                      retirement plans, generous PTO, and of course, a free
                      standing desk.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
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
                        <rect width="18" height="18" x="3" y="3" rx="2" />
                        <path d="M9 9h6v6H9z" />
                        <path d="M9 3v6" />
                        <path d="M15 3v6" />
                        <path d="M9 15v6" />
                        <path d="M15 15v6" />
                        <path d="M3 9h6" />
                        <path d="M15 9h6" />
                        <path d="M3 15h6" />
                        <path d="M15 15h6" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Work-Life Balance</h3>
                    <p className="text-muted-foreground">
                      We believe in sustainable work practices and encourage our
                      team to maintain a healthy balance between work and
                      personal life.
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col items-center text-center space-y-4">
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
                        <path d="M12 20h9" />
                        <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold">Innovation Focus</h3>
                    <p className="text-muted-foreground">
                      We encourage creative thinking and provide opportunities
                      to contribute to product innovation and company growth.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section
          id="open-positions"
          className="w-full py-12 md:py-24 lg:py-32 bg-muted"
        >
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter">
                  Open Positions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Explore our current job openings and find the perfect role for
                  your skills and passion.
                </p>
              </div>
            </div>

            <div className="grid gap-6">
              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">Product Designer</h3>
                        <Badge>Full-time</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        San Francisco, CA or Remote
                      </p>
                      <p>
                        We're looking for a talented product designer to help
                        create innovative standing desk solutions that improve
                        our customers' work experience.
                      </p>
                    </div>
                    <Button asChild className="md:flex-shrink-0">
                      <Link href="/careers/product-designer">View Details</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">Software Engineer</h3>
                        <Badge>Full-time</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">Remote</p>
                      <p>
                        Join our engineering team to develop software for our
                        smart desk systems, focusing on user experience and
                        innovative features.
                      </p>
                    </div>
                    <Button asChild className="md:flex-shrink-0">
                      <Link href="/careers/software-engineer">
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">
                          Marketing Specialist
                        </h3>
                        <Badge>Full-time</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        San Francisco, CA
                      </p>
                      <p>
                        We're seeking a creative marketing specialist to help
                        grow our brand and connect with customers who value
                        ergonomic workspace solutions.
                      </p>
                    </div>
                    <Button asChild className="md:flex-shrink-0">
                      <Link href="/careers/marketing-specialist">
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">
                          Customer Success Manager
                        </h3>
                        <Badge>Full-time</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        San Francisco, CA or Remote
                      </p>
                      <p>
                        Help our customers get the most out of their Mesza
                        products and ensure they have an exceptional experience
                        with our brand.
                      </p>
                    </div>
                    <Button asChild className="md:flex-shrink-0">
                      <Link href="/careers/customer-success-manager">
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold">
                          Supply Chain Coordinator
                        </h3>
                        <Badge>Full-time</Badge>
                      </div>
                      <p className="text-muted-foreground mb-2">
                        San Francisco, CA
                      </p>
                      <p>
                        Manage our supply chain operations to ensure efficient
                        production and delivery of our standing desk products.
                      </p>
                    </div>
                    <Button asChild className="md:flex-shrink-0">
                      <Link href="/careers/supply-chain-coordinator">
                        View Details
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-12 text-center">
              <p className="text-muted-foreground mb-6">
                Don't see a position that matches your skills? We're always
                looking for talented individuals to join our team.
              </p>
              <Button asChild size="lg">
                <Link href="/contact">
                  Send Us Your Resume <ChevronRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 items-center">
              <div>
                <Image
                  src="/placeholder.svg?height=600&width=600"
                  alt="Mesza Office"
                  width={600}
                  height={600}
                  className="mx-auto aspect-square overflow-hidden rounded-xl object-cover"
                />
              </div>
              <div className="space-y-6">
                <h2 className="text-3xl font-bold tracking-tight">
                  Our Hiring Process
                </h2>
                <div className="space-y-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      1
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Application Review</h3>
                      <p className="text-muted-foreground">
                        Our team reviews your application and resume to assess
                        your qualifications and experience.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      2
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Initial Interview</h3>
                      <p className="text-muted-foreground">
                        A 30-minute phone or video call to discuss your
                        background, skills, and interest in the role.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      3
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Skills Assessment</h3>
                      <p className="text-muted-foreground">
                        Depending on the role, you may be asked to complete a
                        skills assessment or project.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      4
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Team Interviews</h3>
                      <p className="text-muted-foreground">
                        Meet with potential team members and stakeholders to
                        discuss the role in more detail.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                      5
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Offer & Onboarding</h3>
                      <p className="text-muted-foreground">
                        If selected, you'll receive an offer and begin our
                        comprehensive onboarding process.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
