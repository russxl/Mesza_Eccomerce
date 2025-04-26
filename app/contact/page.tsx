"use client";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import { Button } from "@/components/ui/button";
import { MessageCircle, MapPin, Facebook } from "lucide-react";
import { FaFacebookMessenger } from "react-icons/fa";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    setMapLoaded(true);
  }, []);
  return (
    <div className="flex min-h-[100dvh] flex-col">
      <SiteHeader />
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center justify-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Contact Us
                </h1>
                <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed">
                  Have questions or need assistance? Our team is here to help
                  you find the perfect standing desk solution.
                </p>
              </div>
              <Button
                variant="outline"
                className="flex-1 gap-2"
                onClick={() =>
                  window.open(
                    "https://m.me/368741222993370",
                    "_blank",
                    "noopener,noreferrer"
                  )
                }
              >
                <FaFacebookMessenger className="size-6" />
                Chat with us on Messenger
              </Button>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
              <div className="space-y-8">
                <div className="space-y-6">
                  <h2 className="text-3xl font-bold tracking-tight">
                    Get In Touch
                  </h2>
                  <p className="text-muted-foreground text-lg">
                    We'd love to hear from you. Whether you have a question
                    about our products, need help with an order, or want to
                    discuss a custom solution, our team is ready to assist.
                  </p>
                </div>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MessageCircle className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Messenger</h3>
                      <p className="text-muted-foreground">Mesza</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        We are available on Messenger for quick inquiries and
                        support.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Facebook className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Facebook</h3>
                      <p className="text-muted-foreground">Mesza</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Visit our facebook page for updates and support.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="h-6 w-6 text-primary mt-1" />
                    <div>
                      <h3 className="text-lg font-bold">Address</h3>
                      <p className="text-muted-foreground">
                        Jao Plaque Awards
                        <br />
                        F. Dimanlig St, Antipolo City
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        Showroom Hours: Monday - Saturday, 10am - 7pm
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <Card className="relative overflow-hidden h-[600px]">
                {/* Map as background */}
                {mapLoaded ? (
                  <iframe
                    className="absolute top-0 left-0 w-full h-full z-0 pointer-events-auto"
                    src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=+(Jao%20plaque%20award)&amp;t=&amp;z=16&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    title="Jao plaque award location"
                    aria-label="Google Maps showing Jao plaque award location"
                    loading="lazy"
                  />
                ) : (
                  <div className="absolute top-0 left-0 w-full h-full bg-gray-200 flex items-center justify-center z-0">
                    <p>Loading map...</p>
                  </div>
                )}
              </Card>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
