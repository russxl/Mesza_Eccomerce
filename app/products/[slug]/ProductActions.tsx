"use client";

import { useState, useEffect } from "react";
import { Minus, Plus, ShoppingCart, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import useCartStore from "@/store/globalStore";
import { useToast } from "@/components/hooks/use-toast";
import { formatCurrencySigns } from "@/utils/formatToCurrency";

interface VariationOption {
  value: string;
  price?: number;
  stockCount?: number;
  isActive?: boolean;
  imageURL?: string; // << ADDED
}

interface Variation {
  _id?: string;
  type: string;
  options: VariationOption[];
  imageURL?: string; // Image for the variation type itself (e.g. general color swatch)
  isActive?: boolean; // Is this variation type (e.g. "Color") active?
}

interface Product {
  _id: string;
  name: string;
  description: string;
  price: number;
  variations?: Variation[];
  imageURLs?: string[];
  categories?: string[];
  specifications?: Array<{ key: string; value: string }>;
  reviews?: Array<{ rating: number; comment: string; author: string }>;
}

interface ProductActionsProps {
  product: Product;
  onVariationImageSelect: (imageURL: string | null) => void; // Callback to inform parent of selected variation image
}

export default function ProductActions({
  product,
  onVariationImageSelect,
}: ProductActionsProps) {
  const [selectedOptions, setSelectedOptions] = useState<{
    [type: string]: string;
  }>({});
  const [selectedPrice, setSelectedPrice] = useState(product.price);
  const [quantity, setQuantity] = useState<number>(1);
  const { toast } = useToast();

  // Effect to set initial price and potentially initial variation image if one is pre-selected or default
  useEffect(() => {
    setSelectedPrice(product.price);
    // If there's a default or pre-selected variation that has an image, notify parent.
    // For now, this is simplified; complex pre-selection logic would go here.
    // onVariationImageSelect(product.imageURLs?.[0] || null); // Initialize with main product image or null
  }, [product]);

  const handleOptionChange = (variationType: string, value: string) => {
    setSelectedOptions((prevSelected) => {
      const updatedSelectedOptions = {
        ...prevSelected,
        [variationType]: value,
      };

      let newPrice = product.price;
      /* eslint-disable @typescript-eslint/no-unused-vars */
      let selectedOptionImage: string | null = null;
      /* eslint-enable @typescript-eslint/no-unused-vars */

      if (Array.isArray(product.variations)) {
        product.variations.forEach((variation) => {
          const selectedValueForType = updatedSelectedOptions[variation.type];
          if (selectedValueForType) {
            const option = variation.options.find(
              (o) => o.value === selectedValueForType
            );
            if (option) {
              if (option.price) {
                newPrice += option.price;
              }
              if (option.imageURL && option.imageURL.trim() !== "") {
                selectedOptionImage = option.imageURL;
              }
            }
          }
        });
      }
      setSelectedPrice(newPrice);
      return updatedSelectedOptions;
    });
  };

  // Add effect to handle image selection
  useEffect(() => {
    let selectedOptionImage: string | null = null;
    
    if (Array.isArray(product.variations)) {
      product.variations.forEach((variation) => {
        const selectedValueForType = selectedOptions[variation.type];
        if (selectedValueForType) {
          const option = variation.options.find(
            (o) => o.value === selectedValueForType
          );
          if (option?.imageURL && option.imageURL.trim() !== "") {
            selectedOptionImage = option.imageURL;
          }
        }
      });
    }
    
    onVariationImageSelect(selectedOptionImage);
  }, [selectedOptions, product.variations, onVariationImageSelect]);

  // Add a handler for quantity changes
  const handleQuantityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value === '' ? 1 : Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    // Get visible variations
    const visibleVariations = getVisibleVariations();
    
    // Check if all visible variations have been selected
    const unselectedVariations = visibleVariations.filter(
      variation => !selectedOptions[variation.type]
    );
    
    if (unselectedVariations.length > 0) {
      // Create a message listing all unselected options
      const unselectedNames = unselectedVariations.map(v => v.type).join(", ");
      
      toast({
        title: "Selection required",
        description: `Please select options for: ${unselectedNames}`,
        variant: "destructive",
      });
      return;
    }

    // First increment the cart counter in globalStore
    useCartStore.getState().incrementByQuantity(quantity);

    // Create cart item
    const cartItem = {
      productId: product._id,
      name: product.name,
      price: selectedPrice,
      image: product.imageURLs?.[0] || "",
      quantity: quantity,
      selectedOptions: selectedOptions,
    };

    // Add the item to local storage
    const existingCart = localStorage.getItem("cart");
    const cartItems = existingCart ? JSON.parse(existingCart) : [];
    cartItems.push(cartItem);
    localStorage.setItem("cart", JSON.stringify(cartItems));

    // Show success notification
    toast({
      title: "Added to cart",
      description: `Added ${quantity} ${product.name} to cart`,
      variant: "success",
    });
  };

  // Determine which variations should be visible
  const getVisibleVariations = () => {
    if (!Array.isArray(product.variations) || product.variations.length === 0) {
      return [];
    }

    const result: Variation[] = [];
    // Always show the first variation
    if (product.variations.length > 0) {
      result.push(product.variations[0]);
    }

    // For subsequent variations, apply visibility rules
    for (let i = 1; i < product.variations.length; i++) {
      const previousVariation = product.variations[i-1];
      const currentVariation = product.variations[i];
      
      // Check if previous variation has a selected option
      const previousType = previousVariation.type;
      const previousSelection = selectedOptions[previousType];
      
      // If no previous selection, don't show this variation
      if (!previousSelection) {
        break;
      }
      
      // If previous selection is "No Table Top", don't show more variations
      if (previousSelection === "No Table Top") {
        break;
      }
      
      // Otherwise, show this variation
      result.push(currentVariation);
    }
    
    return result;
  };

  // Reset hidden variant values
  useEffect(() => {
    if (!Array.isArray(product.variations)) return;
    
    // Get visible variations
    const visibleVariations = getVisibleVariations();
    const visibleVariationTypes = visibleVariations.map(v => v.type);
    
    // Find which variations are hidden
    const hiddenVariationTypes = product.variations
      .filter(v => !visibleVariationTypes.includes(v.type))
      .map(v => v.type);
    
    // If there are hidden variations with values, reset them
    if (hiddenVariationTypes.length > 0) {
      const hasHiddenSelected = hiddenVariationTypes.some(type => selectedOptions[type]);
      
      if (hasHiddenSelected) {
        setSelectedOptions(prev => {
          const updated = { ...prev };
          hiddenVariationTypes.forEach(type => {
            delete updated[type];
          });
          return updated;
        });
        
        // Show toast about reset values
        toast({
          title: "Options updated",
          description: "Some options have been reset due to your selections",
          variant: "default",
        });
      }
    }
  },  [selectedOptions, product.variations]);

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
            {formatCurrencySigns(selectedPrice)}
          </span>
        </div>
        <p className="text-muted-foreground">{product.description}</p>
      </div>
      {/* Variation selectors - only show visible variations */}
      {getVisibleVariations().map((variation, idx) => (
        <div className="space-y-2" key={variation._id || idx}>
          <label className="text-sm font-medium leading-none">
            {variation.type}
          </label>
          <div className="flex gap-2">
            {variation.options.map((option, optIdx) => (
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
      <div className="space-y-2">
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
            onChange={handleQuantityChange}
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
      </div>
      {/* Action buttons */}
      <div className="flex flex-col gap-4 sm:flex-row">
        <Button
          onClick={handleAddToCart}
          className="flex items-center justify-center gap-2"
        >
          <ShoppingCart className="h-4 w-4" />
          Add to Cart
        </Button>
      </div>
    </div>
  );
}
