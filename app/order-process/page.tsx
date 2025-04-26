import Link from "next/link";
import {
  ShoppingCart,
  Truck,
  Copy,
  CreditCard,
  Package,
  Home,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { FaFacebookMessenger } from "react-icons/fa";

const steps = [
  {
    title: "Add Products to Cart",
    description:
      'Browse our collection of standing desks and accessories. When you find products you like, click "Add to Cart" to begin your order.',
    icon: (
      <ShoppingCart className="h-8 w-8 text-primary" aria-label="Add to Cart" />
    ),
    actions: [
      <Button asChild key="browse">
        <Link href="/products">Browse Products</Link>
      </Button>,
    ],
  },
  {
    title: "Complete Shipping Details",
    description:
      "Proceed to checkout and fill in your shipping information. Make sure to provide accurate details to ensure smooth delivery.",
    icon: <Truck className="h-8 w-8 text-primary" aria-label="Shipping" />,
  },
  {
    title: "Copy Your Order ID",
    description:
      "After completing your shipping details, you'll receive an order ID. Copy this ID or the order URL for reference in the next step.",
    icon: <Copy className="h-8 w-8 text-primary" aria-label="Copy Order ID" />,
  },
  {
    title: "Send to Messenger",
    description:
      "Contact us through our messenger service and send your order ID. Our customer service team will confirm your order details.",
    icon: (
      <FaFacebookMessenger
        className="h-8 w-8 text-primary"
        aria-label="Messenger"
      />
    ),
    actions: [
      <Button asChild variant="outline" key="contact">
        <Link
          href="https://m.me/368741222993370"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </Link>
      </Button>,
    ],
  },
  {
    title: "Complete Payment",
    description:
      "Our team will provide payment instructions. We accept various payment methods including credit cards, bank transfers, and digital wallets.",
    icon: <CreditCard className="h-8 w-8 text-primary" aria-label="Payment" />,
  },
  {
    title: "Order Shipment",
    description:
      "Once payment is confirmed, we'll process and ship your order. You'll receive a tracking number to monitor your shipment's progress.",
    icon: <Package className="h-8 w-8 text-primary" aria-label="Shipment" />,
  },
  {
    title: "Receive Your Mesza Desk",
    description:
      "Your Mesza will be delivered to your specified address. Follow the included assembly instructions to set up your new workspace.",
    icon: <Home className="h-8 w-8 text-primary" aria-label="Delivery" />,
  },
];

export default function OrderProcessPage() {
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className=" px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  How to Order
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Follow these simple steps to order your Mesza and transform
                  your workspace.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className=" px-4 md:px-6">
            <ol className="relative mx-auto max-w-3xl border-l border-border">
              {steps.map((step, idx) => (
                <li key={step.title} className="mb-16 ml-6 last:mb-0">
                  <span className="absolute -left-5 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                    {idx + 1}
                  </span>
                  <div className="flex flex-col gap-2 ml-8">
                    <h2 className="text-2xl font-bold">{step.title}</h2>
                    <p className="mt-2 text-muted-foreground">
                      {step.description}
                    </p>
                    <div className="mt-4 flex items-center gap-4 flex-wrap">
                      {step.icon}
                      {step.actions && step.actions.map((action) => action)}
                    </div>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-16 rounded-lg bg-muted p-8 text-center">
              <h2 className="text-2xl font-bold">Need Assistance?</h2>
              <p className="mt-2 text-muted-foreground">
                Our customer service team is available to help you with any
                questions about the ordering process.
              </p>
              <div className="mt-6 flex flex-col gap-4 sm:flex-row justify-center">
                <Button asChild>
                  <Link href="/contact">Contact Support</Link>
                </Button>
                {/* <Button variant="outline" asChild>
                  <Link href="/faq">
                    View FAQs <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button> */}
              </div>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
