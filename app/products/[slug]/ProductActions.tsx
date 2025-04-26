"use client";

import { useState } from "react";
import {  Star } from "lucide-react";


export default function ProductActions({ product }: { product: any }) {

  // Track selected options for each variation
  const [selectedOptions, setSelectedOptions] = useState<{
    [type: string]: string;
  }>({});
  const [selectedPrice, setSelectedPrice] = useState(product.price);


  // Update price when a variation is selected
  const handleOptionChange = (variationType: string, value: string) => {
    setSelectedOptions((prev) => {
      const updated = { ...prev, [variationType]: value };

      // Calculate total price: base price + sum of all selected variation prices
      let total = product.price;
      if (Array.isArray(product.variations)) {
        product.variations.forEach((variation: any) => {
          const selectedValue = updated[variation.type];
          if (selectedValue) {
            const option = variation.options.find(
              (o: any) => o.value === selectedValue
            );
            if (option && option.price) {
              total += option.price;
            }
          }
        });
      }
      setSelectedPrice(total);

      return updated;
    });
  };

  return (
    <div className="space-y-8">
      <div className="space-y-4">
        <h1 className="text-3xl font-bold tracking-tight md:text-4xl">
          {product.name}
        </h1>
        <div className="flex items-center gap-4">
          <div className="flex items-center">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-5 w-5 fill-current text-yellow-400" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            ({product.reviews?.length || 0} reviews)
          </span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">
            ₱{selectedPrice.toFixed(2)}
          </span>
        </div>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
      {/* Variation selectors */}
      {Array.isArray(product.variations) &&
        product.variations.map((variation: any, idx: number) => (
          <div className="space-y-2" key={variation._id || idx}>
            <label className="text-sm font-medium leading-none">
              {variation.type}
            </label>
            <div className="flex gap-2">
              {variation.options.map((option: any, optIdx: number) => (
                <button
                  key={optIdx}
                  type="button"
                  className={`px-3 py-1 rounded border ${
                    selectedOptions[variation.type] === option.value
                      ? "border-primary bg-primary/10"
                      : "border-gray-300"
                  }`}
                  onClick={() =>
                    handleOptionChange(variation.type, option.value)
                  }
                >
                  {option.value}
                </button>
              ))}
            </div>
          </div>
        ))}
      {/* Quantity selector */}
      {/* <div className="space-y-2">
        <label htmlFor="quantity" className="text-sm font-medium leading-none">
          Quantity
        </label>
        <div className="flex items-center">
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-l-md border"
            onClick={() => setQuantity(Math.max(1, quantity - 1))}
          >
            <Minus className="h-4 w-4" />
          </button>
          <input
            type="number"
            id="quantity"
            min="1"
            value={quantity}
            onChange={(e) =>
              setQuantity(Math.max(1, parseInt(e.target.value) || 1))
            }
            className="h-10 w-16 border-y text-center text-sm [appearance:textfield] [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
          />
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-r-md border"
            onClick={() => setQuantity(quantity + 1)}
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
      </div> */}
      {/* Action buttons */}
      {/* <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div> */}
    </div>
  );
}
