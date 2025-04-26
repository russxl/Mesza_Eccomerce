import Link from "next/link";
import { ChevronRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function FAQPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Frequently Asked Questions
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Find answers to common questions about our standing desks,
                  shipping, warranty, and more.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <Tabs defaultValue="products" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-full max-w-md grid-cols-4">
                  <TabsTrigger value="products">Products</TabsTrigger>
                  <TabsTrigger value="shipping">Shipping</TabsTrigger>
                  <TabsTrigger value="warranty">Warranty</TabsTrigger>
                  <TabsTrigger value="support">Support</TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="products" className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Product Information
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What is the weight capacity of your standing desks?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Our standing desks have different weight capacities
                        depending on the model:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Mesza Essential: 250 lbs (113 kg)</li>
                        <li>Mesza Pro: 300 lbs (136 kg)</li>
                        <li>Mesza Executive: 350 lbs (159 kg)</li>
                      </ul>
                      <p className="mt-2">
                        These weight capacities are more than sufficient for
                        multiple monitors, computers, and other office
                        equipment.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      What desktop materials and finishes are available?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        We offer a variety of premium materials for our desktop
                        surfaces:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>
                          Laminate: Available in black, white, maple, walnut,
                          and oak finishes
                        </li>
                        <li>Bamboo: Natural and carbonized finishes</li>
                        <li>
                          Solid Wood (Executive model only): Walnut, maple, and
                          oak
                        </li>
                      </ul>
                      <p className="mt-2">
                        All our desktop surfaces are treated with a durable
                        finish to resist scratches, stains, and water damage.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How stable are your standing desks at maximum height?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Our desks feature a sturdy steel frame with
                        cross-support beams that ensure stability even at
                        maximum height. The anti-wobble technology minimizes
                        movement during typing or other desk activities.
                      </p>
                      <p className="mt-2">
                        The Pro and Executive models include enhanced stability
                        features, including a reinforced crossbar and wider feet
                        for even greater stability at all heights.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      How loud are the motors when adjusting the desk height?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Our motors are designed to be whisper-quiet during
                        operation. The noise level is typically below 50
                        decibels, which is quieter than normal conversation.
                        This ensures that you can adjust your desk without
                        disturbing colleagues or family members.
                      </p>
                      <p className="mt-2">
                        The Pro and Executive models feature our premium motors,
                        which are even quieter and smoother during operation.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-5">
                    <AccordionTrigger>
                      Can I use my own desktop with your standing desk frame?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, we offer frame-only options for customers who want
                        to use their own desktop. Our frames are compatible with
                        most desktop surfaces, provided they meet the minimum
                        size and thickness requirements.
                      </p>
                      <p className="mt-2">
                        For optimal results, we recommend using a desktop that
                        is:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>At least 1" (25mm) thick</li>
                        <li>Between 48" and 80" wide</li>
                        <li>Between 24" and 30" deep</li>
                      </ul>
                      <p className="mt-2">
                        Please note that using your own desktop may affect the
                        warranty coverage for the desktop portion of the desk.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="shipping" className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Shipping & Delivery
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How long will it take to receive my order?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Standard shipping within the continental United States
                        typically takes 5-7 business days from the time your
                        order ships. Most orders ship within 1-2 business days
                        after being placed.
                      </p>
                      <p className="mt-2">
                        We also offer express shipping options at checkout:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Express (2-3 business days): $25</li>
                        <li>Priority (1-2 business days): $50</li>
                      </ul>
                      <p className="mt-2">
                        Please note that shipping times may be longer for
                        Alaska, Hawaii, and international destinations.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      Do you offer international shipping?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, we ship to most countries worldwide. International
                        shipping rates and delivery times vary by location.
                        Please note that customers are responsible for any
                        import duties, taxes, or customs fees that may apply.
                      </p>
                      <p className="mt-2">
                        International shipping typically takes 10-20 business
                        days, depending on the destination and customs
                        processing times.
                      </p>
                      <p className="mt-2">
                        For specific shipping rates to your country, please add
                        items to your cart and enter your shipping address at
                        checkout.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How are your desks packaged for shipping?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Our desks are carefully packaged to ensure they arrive
                        in perfect condition. The desktop and frame components
                        are packaged separately in heavy-duty cardboard boxes
                        with custom foam inserts to prevent damage during
                        transit.
                      </p>
                      <p className="mt-2">
                        The typical package dimensions are:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Desktop box: 62" × 32" × 4" (for 60" desktop)</li>
                        <li>Frame box: 42" × 12" × 8"</li>
                      </ul>
                      <p className="mt-2">
                        We use eco-friendly packaging materials whenever
                        possible, and our packaging is 100% recyclable.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Do you offer white glove delivery or assembly services?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, we offer white glove delivery and assembly services
                        in select areas for an additional fee. This service
                        includes:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Delivery to your room of choice</li>
                        <li>Unpacking and assembly of your desk</li>
                        <li>
                          Removal and recycling of all packaging materials
                        </li>
                        <li>Basic setup and testing of desk functionality</li>
                      </ul>
                      <p className="mt-2">
                        White glove service is available for $149 in most major
                        metropolitan areas. To check availability in your area,
                        please contact our customer service team.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="warranty" className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Warranty & Returns
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      What warranty do your desks come with?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>Our warranty coverage varies by model:</p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>
                          Mesza Essential: 3-year warranty on frame, motors, and
                          electronics
                        </li>
                        <li>
                          Mesza Pro: 5-year warranty on frame and motors, 3-year
                          warranty on electronics
                        </li>
                        <li>
                          Mesza Executive: 10-year warranty on frame, 7-year
                          warranty on motors, 5-year warranty on electronics
                        </li>
                      </ul>
                      <p className="mt-2">
                        All desktop surfaces are covered by a 1-year warranty
                        against manufacturing defects.
                      </p>
                      <p className="mt-2">
                        Our warranty covers defects in materials and workmanship
                        under normal use. It does not cover damage caused by
                        misuse, accidents, or modifications.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      What is your return policy?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        We offer a 30-day return policy on all our products. If
                        you're not completely satisfied with your purchase, you
                        can return it within 30 days of delivery for a full
                        refund of the product price (shipping fees are
                        non-refundable).
                      </p>
                      <p className="mt-2">
                        To be eligible for a return, your item must be in the
                        same condition that you received it, unused, and in its
                        original packaging. You'll also need the receipt or
                        proof of purchase.
                      </p>
                      <p className="mt-2">
                        Please note that custom-configured desks or desktops
                        with custom finishes may not be eligible for return
                        unless there is a manufacturing defect.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      How do I make a warranty claim?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        If you experience an issue with your desk that you
                        believe is covered by warranty, please follow these
                        steps:
                      </p>
                      <ol className="list-decimal list-inside mt-2 space-y-1">
                        <li>
                          Contact our customer support team via email at
                          support@Mesza.com or call 1-800-ELEVATE
                        </li>
                        <li>
                          Provide your order number, product information, and a
                          detailed description of the issue
                        </li>
                        <li>
                          Include photos or videos that clearly show the problem
                        </li>
                      </ol>
                      <p className="mt-2">
                        Our team will review your claim and respond within 1-2
                        business days. If your claim is approved, we'll arrange
                        for repair, replacement parts, or a replacement product
                        at our discretion.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Can I extend my warranty coverage?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, we offer extended warranty options that can be
                        purchased at the time of your original order:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>
                          +2 Years: $49 for Essential, $69 for Pro, $99 for
                          Executive
                        </li>
                        <li>
                          +5 Years: $99 for Essential, $129 for Pro, $179 for
                          Executive
                        </li>
                      </ul>
                      <p className="mt-2">
                        Extended warranties cover the same components and
                        conditions as the original warranty, just for a longer
                        period. They must be purchased at the same time as your
                        desk and cannot be added later.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>

              <TabsContent value="support" className="space-y-8">
                <h2 className="text-2xl font-bold tracking-tight">
                  Customer Support
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>
                      How long does it take to assemble an Mesza?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Assembly typically takes 30-45 minutes with our
                        easy-to-follow instructions. All necessary tools are
                        included in the package, and we also offer assembly
                        videos on our website.
                      </p>
                      <p className="mt-2">
                        The assembly process involves attaching the legs to the
                        frame, connecting the crossbars, mounting the control
                        box and keypad, and finally attaching the desktop. No
                        special skills or tools are required.
                      </p>
                      <p className="mt-2">
                        If you prefer not to assemble the desk yourself, we
                        offer assembly services in select areas for an
                        additional fee.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-2">
                    <AccordionTrigger>
                      How can I contact customer support?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Our customer support team is available through multiple
                        channels:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>
                          Phone: 1-800-ELEVATE (1-800-353-8283), Monday-Friday,
                          9am-6pm EST
                        </li>
                        <li>Email: support@Mesza.com</li>
                        <li>
                          Live Chat: Available on our website during business
                          hours
                        </li>
                        <li>Contact Form: On our Contact page</li>
                      </ul>
                      <p className="mt-2">
                        We strive to respond to all inquiries within 24 hours
                        during business days.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-3">
                    <AccordionTrigger>
                      Do you offer troubleshooting assistance?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, we provide comprehensive troubleshooting assistance
                        for all our products. If you're experiencing issues with
                        your desk, you can:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>
                          Check our online troubleshooting guides and videos
                        </li>
                        <li>
                          Contact our technical support team for personalized
                          assistance
                        </li>
                        <li>
                          Schedule a video call with a technician for complex
                          issues
                        </li>
                      </ul>
                      <p className="mt-2">
                        Most common issues can be resolved quickly without the
                        need for replacement parts or service visits.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="item-4">
                    <AccordionTrigger>
                      Can I order replacement parts?
                    </AccordionTrigger>
                    <AccordionContent>
                      <p>
                        Yes, we offer replacement parts for all our desk models.
                        Common replacement parts include:
                      </p>
                      <ul className="list-disc list-inside mt-2 space-y-1">
                        <li>Control keypads</li>
                        <li>Power adapters</li>
                        <li>Control boxes</li>
                        <li>Motors</li>
                        <li>Cable management components</li>
                      </ul>
                      <p className="mt-2">
                        To order replacement parts, please contact our customer
                        support team with your order number and the specific
                        part you need. If your desk is under warranty,
                        replacement parts for covered components will be
                        provided at no cost.
                      </p>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>

            <div className="mt-16 bg-muted rounded-lg p-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold">Still Have Questions?</h2>
                <p className="text-muted-foreground max-w-2xl mx-auto">
                  Our customer support team is ready to help you with any
                  questions or concerns you may have about our products or
                  services.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
                  <Button asChild size="lg">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                  <Button variant="outline" size="lg">
                    <Link href="/support">
                      View Support Resources{" "}
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
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
