"use client";

import type React from "react";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Shipping } from "@/schema/shipping-schema";
import { useShippingStore } from "@/store/globalStore";
import { Input } from "@/components/ui/input";

// Helper function to clean up names (kept local for now)
function formatName(name: string) {
  return name.replace(/-/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
}

export function ShippingAddress() {
  const { control, watch, setValue } = useFormContext<Shipping>();
  const {
    shippingLocations,
    shippingCities,
    fetchShippingLocations,
    fetchCities,
    loading,
  } = useShippingStore();

  const selectedProvinceCode = watch("state");

  // Fetch provinces on mount
  useEffect(() => {
    if (!shippingLocations && !loading) {
      fetchShippingLocations();
    }
  }, [fetchShippingLocations, loading, shippingLocations]); // Added dependencies

  // Fetch cities when province changes
  useEffect(() => {
    if (selectedProvinceCode) {
      const selectedProvince = shippingLocations?.find(
        (p) => p.code === selectedProvinceCode
      );

      if (selectedProvince?.id) {
        setValue("city", ""); // Reset city selection when province changes
        fetchCities(selectedProvince.id);
      }
    }
  }, [selectedProvinceCode, shippingLocations, setValue, fetchCities]);

  return (
    <div className="grid gap-4">
      <h2 className="text-xl font-semibold mb-4">Shipping Address</h2>

      <FormField
        control={control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Street Address</FormLabel>
            <FormControl>
              <Input {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name="address"
        render={({ field }) => (
          <FormItem>
            <FormLabel>Address Line 2</FormLabel>
            <FormControl>
              <Input placeholder="" {...field} />
            </FormControl>
            <FormMessage />
          </FormItem>
        )}
      />

      <div className="flex flex-col md:flex-row gap-4">
        <FormField
          control={control}
          name="state"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Province</FormLabel>
              <Select
                onValueChange={(value) => {
                  // Make sure we're setting the code value to the form
                  field.onChange(value);
                }}
                value={field.value}
                disabled={loading}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        loading ? "Loading provinces..." : "Select province"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {loading && !shippingLocations?.length ? (
                    <SelectItem value="loading" disabled>
                      Loading provinces...
                    </SelectItem>
                  ) : (
                    shippingLocations?.map((province) => (
                      <SelectItem key={province.id} value={province.nativeName}>
                        {formatName(province.nativeName)}
                      </SelectItem>
                    ))
                  )}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={control}
          name="city"
          render={({ field }) => (
            <FormItem>
              <FormLabel>City/Municipality</FormLabel>
              <Select
                onValueChange={(value) => {
                  // Make sure we're setting the code value to the form
                  field.onChange(value);
                }}
                value={field.value}
                disabled={!selectedProvinceCode || loading}
              >
                <FormControl>
                  <SelectTrigger>
                    <SelectValue
                      placeholder={
                        !selectedProvinceCode
                          ? "Select province first"
                          : loading
                            ? "Loading cities..."
                            : "Select city"
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {/* Added check for shippingCities before mapping */}
                  {shippingCities?.map((city) => (
                    <SelectItem key={city.id} value={city.nativeName}>
                      {formatName(city.nativeName)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="zipCode"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ZIP/Postal Code</FormLabel>
              <FormControl>
                <Input placeholder="12345" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
}
