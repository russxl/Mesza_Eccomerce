"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

interface ProductImageGalleryProps {
  initialImageURLs: string[];
  productName: string;
  onMainImageChange: (newImage: string) => void; // To notify ProductActions if needed, or for other uses
  currentSelectedVariationImage?: string | null; // Image from currently selected variation option
}

export default function ProductImageGallery({
  initialImageURLs,
  productName,
  onMainImageChange,
  currentSelectedVariationImage,
}: ProductImageGalleryProps) {
  const [mainImage, setMainImage] = useState(
    initialImageURLs?.[0] || "/placeholder.svg?height=800&width=800"
  );

  useEffect(() => {
    // Prioritize variation image if available, otherwise use first initial image
    const newImage =
      currentSelectedVariationImage ||
      initialImageURLs?.[0] ||
      "/placeholder.svg?height=800&width=800";
    if (newImage !== mainImage) {
      setMainImage(newImage);
      onMainImageChange(newImage); // Notify parent/sibling if the main image changes
    }
  }, [
    currentSelectedVariationImage,
    initialImageURLs,
    mainImage,
    onMainImageChange,
  ]);

  const handleThumbnailClick = (url: string) => {
    setMainImage(url);
    onMainImageChange(url); // Notify parent/sibling
  };

  return (
    <div className="space-y-6">
      <div className="aspect-square relative overflow-hidden rounded-xl border">
        <Image
          src={mainImage}
          alt={productName}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          quality={100}
          className="object-contain"
          priority // Prioritize loading the main image
        />
      </div>
      <div className="grid grid-cols-4 gap-4">
        {(initialImageURLs || [])
          .slice(0, 4) // Show up to 4 thumbnails from the main product images
          .map((url: string, idx: number) => (
            <div
              key={idx}
              className={`aspect-square relative overflow-hidden rounded-md border cursor-pointer ${
                url === mainImage ? "ring-2 ring-primary ring-offset-2" : ""
              }`}
              onClick={() => handleThumbnailClick(url)}
            >
              <Image
                src={url}
                alt={`${productName} Thumbnail ${idx + 1}`}
                fill
                sizes="(max-width: 768px) 25vw, 12vw"
                quality={80}
                className="object-contain"
              />
            </div>
          ))}
      </div>
    </div>
  );
}
