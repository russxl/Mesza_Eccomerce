"use client";

import type React from "react";
import { useFormContext } from "react-hook-form";
import { Textarea } from "@/components/ui/textarea";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Shipping } from "@/schema/shipping-schema";

export function SpecialInstructions() {
  const { control } = useFormContext<Shipping>();

  return (
    <div className="w-full">
      <h2 className="text-xl font-semibold mb-4">
        Special Instructions (Optional)
      </h2>
      <FormField
        control={control}
        name="specialInstructions"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Delivery instructions, gate codes, etc.</FormLabel>
            <FormControl>
              <Textarea
                placeholder="Leave package at the front door, gate code: 1234, etc."
                className="min-h-[100px] w-full"
                {...field}
              />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
    </div>
  );
}
