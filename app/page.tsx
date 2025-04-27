"use client";

import { ArrowRight, Check, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Activity, Zap, Bone, HeartPulse, Sun, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { useFilteredProducts } from "@/store/productStore";
import HomeSkeleton from "./loading";

export default function Home() {
  const { data: products = [], isLoading } = useFilteredProducts();

  if (isLoading) {
    return <HomeSkeleton />;
  }
  // Get featured products (first 3 active products)
  const featuredProducts = products
    .filter((product) => product.isActive)
    .slice(0, 3);

  return (
    <div className="">
      <SiteHeader />
      <main>
        <section className="relative w-full min-h-[700px] py-12 md:py-24 lg:py-32 flex items-center justify-center overflow-hidden">
          {/* Video Background */}
          <video
            src="https://files.edgestore.dev/h8r72zbd2e6038he/publicFiles/_public/892302fa-e976-4613-9fa0-3fb175af3c70.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="absolute inset-0 w-full h-full object-cover z-0"
          />
          {/* Optional overlay for readability */}
          <div className="absolute inset-0 bg-black/50 z-10" />
          {/* Hero Content */}
          <div className="relative z-20 w-full px-4 md:px-6 flex flex-col items-center justify-center text-center">
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-white mb-4">
              Elevate Your Workspace with Premium Standing Desks
            </h1>
            <p className="max-w-[600px] text-lg md:text-xl text-white/90 mb-8">
              Transform how you work with our ergonomic, adjustable standing
              desks designed for comfort, productivity, and well-being.
            </p>
            <div className="flex flex-col gap-3 min-[700px]:flex-row justify-center">
              <Button asChild size="lg" className="px-8">
                <Link href="/products">
                  Explore Products <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              
              <Button
                variant="secondary"
                size="lg"
                className="px-8 text-black border-white hover:bg-white/10 dark:hover:bg-white/5 dark:text-white"
              >
                <Link href="#benefits">Learn More</Link>
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-4xl font-bold tracking-tight">
                Featured Products
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Explore our handpicked selection of premium products designed
                for quality and performance.
              </p>
            </div>

            {featuredProducts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                {featuredProducts.map((product) => (
                  <Card
                    key={product._id}
                    className="overflow-hidden bg-card border-0 shadow-lg rounded-xl flex flex-col h-full"
                  >
                    <div className="aspect-[4/3] w-full overflow-hidden">
                      <Image
                        src={product.imageURLs[0] || "/placeholder.svg"}
                        width={600}
                        height={450}
                        alt={product.name}
                        className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                    <CardContent className="p-6 flex-grow">
                      <h3 className="text-2xl font-bold mb-2 line-clamp-1">
                        MESZA
                      </h3>
                      <p className="text-muted-foreground line-clamp-2 mb-4">
                        {product.name}
                      </p>
                    </CardContent>
                    <div className="px-6 pb-6 flex items-center justify-between">
                      <span className="text-2xl font-bold">
                        ₱{product.price.toFixed(2)}
                      </span>
                      <Button asChild>
                        <Link href={`/products/${product._id}`}>
                          View Details
                        </Link>
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 bg-muted/30 rounded-lg max-w-3xl mx-auto">
                <p className="text-muted-foreground text-lg">
                  No featured products available at the moment
                </p>
              </div>
            )}

            <div className="flex justify-center mt-12 ">
              <Button
                variant="default"
                size="lg"
                className="px-8 py-6 text-lg  hover:bg-muted/20 dark:hover:bg-muted/10"
                asChild
              >
                <Link href="/products" className="flex items-center">
                  View All Products <ChevronRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section id="benefits" className="w-full py-16 md:py-24 lg:py-32">
          <div className="px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
              <div className="space-y-3">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Why Choose a Standing Desk?
                </h2>
                <p className="max-w-[900px] text-muted-foreground text-lg md:text-xl/relaxed">
                  Discover the transformative benefits of incorporating a
                  standing desk into your daily routine.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-6xl items-center gap-6 py-8 md:grid-cols-2 lg:grid-cols-3">
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Activity className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Improved Health</h3>
                <p className="text-muted-foreground">
                  Reduce the risk of obesity, heart disease, and diabetes by
                  avoiding prolonged sitting.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Zap className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Increased Productivity</h3>
                <p className="text-muted-foreground">
                  Standing promotes better focus, energy levels, and overall
                  work performance.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Bone className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Reduced Back Pain</h3>
                <p className="text-muted-foreground">
                  Alleviate chronic back pain by promoting better posture and
                  reducing spinal pressure.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <HeartPulse className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Increased Energy</h3>
                <p className="text-muted-foreground">
                  Standing encourages movement and blood flow, leading to higher
                  energy levels throughout the day.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Sun className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Better Mood</h3>
                <p className="text-muted-foreground">
                  Standing desks can help reduce stress and improve mental
                  well-being during work hours.
                </p>
              </div>
              <div className="flex flex-col items-center space-y-3 border rounded-lg p-8 text-center hover:shadow-lg transition-shadow">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Longer Lifespan</h3>
                <p className="text-muted-foreground">
                  Studies suggest that reducing sitting time can lead to a
                  longer, healthier life.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section
          id="features"
          className="w-full py-16 md:py-32 lg:py-32 bg-muted" // Increased padding values
        >
          <div className="px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px] items-center">
              {" "}
              {/* Added items-center */}
              <Image
                src="/images/Mesza-photo.jpg"
                width={750}
                height={750}
                alt="Mesza Desk"
                className="mx-auto aspect-square overflow-hidden rounded-xl object-cover sm:w-full lg:max-h-[750px]" // Changed aspect-video to aspect-square and added max-height
              />
              <div className="flex flex-col justify-center space-y-4">
                <div className="space-y-2">
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">
                    Premium Features
                  </h2>
                  <p className="max-w-[600px] text-muted-foreground md:text-xl/relaxed">
                    Our standing desks are engineered with innovative features
                    designed to enhance your work experience.
                  </p>
                </div>
                <ul className="grid gap-4">
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Smooth Height Adjustment</h3>
                      <p className="text-sm text-muted-foreground">
                        Whisper-quiet motors with three-stage legs for extended
                        height range.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Memory Presets</h3>
                      <p className="text-sm text-muted-foreground">
                        Save your preferred heights with programmable memory
                        settings.
                      </p>
                    </div>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Cable Management</h3>
                      <p className="text-sm text-muted-foreground">
                        Integrated cable trays and grommets for a clean,
                        organized workspace.
                      </p>
                    </div>
                  </li>

                  <li className="flex items-start gap-2">
                    <Check className="h-5 w-5 text-primary" />
                    <div>
                      <h3 className="font-medium">Premium Materials</h3>
                      <p className="text-sm text-muted-foreground">
                        High-quality components and finishes that are built to
                        last.
                      </p>
                    </div>
                  </li>
                </ul>
                <div>
                  <Button size="lg">
                    <Link href="/products">Explore Our Desks</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  What Our Customers Say
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Don&apos;t just take our word for it. Hear from professionals who
                  have transformed their workspaces.
                </p>
              </div>
            </div>
            <div className="mx-auto grid max-w-5xl items-center gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <div>
                        <h3 className="font-bold">Melv** *****</h3>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      &quot;Salamat po ulit maam sa stand palangasasabe kona sulit
                      ang binili ko sa quality 😊&quot; &quot;Welcome po maam sobrang
                      ganda pooo ❤️&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <div>
                        <h3 className="font-bold">Mik* ******</h3>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      &quot;The build quality of my Mesza Desk is exceptional. The
                      spacious surface and smooth height adjustment make it
                      perfect for my design work.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
              <Card className="overflow-hidden">
                <CardContent className="p-6">
                  <div className="flex flex-col gap-4">
                    <div className="flex gap-4 items-center">
                      <div>
                        <h3 className="font-bold">Re* *****</h3>
                      </div>
                    </div>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                          className="h-5 w-5"
                        >
                          <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-muted-foreground">
                      &quot;Ganda ng gawa. 7months ko ng gamit yung sakin maayos na
                      maayos padin at working padin yung up and down mechanism
                      ng desk na binili ko.&quot;
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
            {/* <div className="flex justify-center">
              <Button variant="outline" size="lg">
                Read More Testimonials <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </section>
        <section id="faq" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h2>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Find answers to common questions about our standing desks,
                  shipping, warranty, and more.
                </p>
              </div>
            </div>
            <div className="mx-auto max-w-3xl space-y-4 py-12">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>
                    How long does it take to assemble a Mesza Desk?
                  </AccordionTrigger>
                  <AccordionContent>
                    Assembly typically takes 30-45 minutes with our
                    easy-to-follow instructions. All necessary tools are
                    included in the package.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                  <AccordionTrigger>
                    What is the weight capacity of your standing desks?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our standing desks have a weight capacity of 70-120
                    kilograms, depending on the model. This is more than
                    sufficient for multiple monitors, computers, and other
                    office equipment.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                  <AccordionTrigger>
                    Do your desks come with a warranty?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, all Mesza Desks come with a 1-year warranty on the
                    frame and motors, We stand behind the quality of our
                    products.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-4">
                  <AccordionTrigger>
                    What is your expected lead time for shipping?
                  </AccordionTrigger>
                  <AccordionContent>
                    We ship within 3-7 business days for most locations in the
                    Philippines. and require DownPayment to confirm your order.
                    We deliver with J&T Express for Outside Metro Manila and
                    Lalamove within Metro Manila.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-5">
                  <AccordionTrigger>
                    What desktop materials and finishes are available?
                  </AccordionTrigger>
                  <AccordionContent>
                    We offer a variety of premium materials including bamboo,
                    reclaimed wood, engineered wood, and laminate. Finishes
                    range from natural wood tones to modern colors that
                    complement any office décor.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-6">
                  <AccordionTrigger>
                    Do you offer shipping all over the Philippines?
                  </AccordionTrigger>
                  <AccordionContent>
                    Yes, we ship our products across the Philippines. Delivery
                    times may vary based on your location, but we strive to
                    deliver within 3-7 business days. We deliver with J&T
                    Express for Outside Metro Manila and Lalamove within Metro
                    Manila.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-7">
                  <AccordionTrigger>
                    What is the material used for your table tops?
                  </AccordionTrigger>
                  <AccordionContent>
                    Our table tops are made from high-quality marine laminated
                    plywood, which is durable and easy to clean. The surface is
                    designed to withstand daily wear and tear while providing a
                    smooth finish for your workspace.
                  </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-8">
                  <AccordionTrigger>Accepted payment methods?</AccordionTrigger>
                  <AccordionContent>
                    We We accept various payment methods including GoTyme, Maya,
                    GCash, and bank transfers. All transactions are secure and
                    encrypted for your safety.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
            {/* <div className="flex justify-center">
              <Button variant="outline" size="lg">
                View All FAQs <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div> */}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
