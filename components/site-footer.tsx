import Link from "next/link";
import Image from "next/image";

export function SiteFooter() {
  return (
    <footer className="w-full border-t bg-background p-8 md:py-12 mt-8">
      <div className=" grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Brand & Description */}
        <div className="space-y-4">
          <div className="flex items-center gap-2 font-bold text-lg">
            <Image
              src="/images/mesza-logo.png"
              alt="Mesza Logo"
              width={28}
              height={28}
              className="h-7 w-7"
            />
            <span>Mesza</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Transform your workspace with our premium standing desks designed
            for comfort, productivity, and well-being.
          </p>
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Mesza. All rights reserved.
          </p>
        </div>
        {/* Products */}
        <div className="space-y-4">
          <h3 className="text-base font-semibold">Products</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/products/"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Desks
              </Link>
            </li>
          </ul>
        </div>

        {/* Support
        <div className="space-y-4">
          <h3 className="text-base font-semibold">Support</h3>
          <ul className="space-y-2">
            <li>
              <Link
                href="/faq"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                FAQ
              </Link>
            </li>
            <li>
              <Link
                href="/shipping"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Shipping & Returns
              </Link>
            </li>
            <li>
              <Link
                href="/warranty"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Warranty
              </Link>
            </li>
            <li>
              <Link
                href="/privacy"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                href="/terms"
                className="text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                Terms of Service
              </Link>
            </li>
          </ul>
        </div> */}
      </div>
    </footer>
  );
}
