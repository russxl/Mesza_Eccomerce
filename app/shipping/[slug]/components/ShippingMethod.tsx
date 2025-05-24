"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Shipping } from "@/schema/shipping-schema";
import { useEffect, useState } from "react";

export function ShippingMethod() {
  const { control, watch } = useFormContext<Shipping>();
  const [isMetroManilaOrRizal, setIsMetroManilaOrRizal] = useState(false);

  // Watch for state changes to determine shipping cost
  useEffect(() => {
    const subscription = watch((value) => {
      const province = value.state;
      const metroManilaProvinces = ["790000", "920000", "MM", "METRO-MANILA"];
      const isMetroManila = metroManilaProvinces.includes(province || "");
      const isRizal = province === "RIZAL";
      setIsMetroManilaOrRizal(isMetroManila || isRizal);
    });

    return () => subscription.unsubscribe();
  }, [watch]);

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Shipping Method</h2>
      <FormField
        control={control}
        name="shippingMethod"
        render={({ field }) => (
          <FormItem className="space-y-3">
            <FormControl>
              <RadioGroup
                onValueChange={field.onChange}
                defaultValue={field.value}
                className="flex flex-col gap-4"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 gap-2 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Pickup" id="Pickup" />
                    <Label htmlFor="Pickup" className="font-medium">
                      Pickup
                    </Label>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="font-medium">Free</div>
                    <div className="text-sm text-muted-foreground">
                      5-7 business days
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between rounded-lg border p-4 gap-2 sm:gap-0">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="Standard" id="Standard" />
                    <Label htmlFor="Standard" className="font-medium">
                      Standard Shipping
                    </Label>
                  </div>
                  <div className="text-left sm:text-right">
                    <div className="font-medium">
                      {isMetroManilaOrRizal ? "₱999.00" : "₱3,500.00"}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      3-7 business days
                    </div>
                  </div>
                </div>
              </RadioGroup>
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
