"use client";

import { useState, useEffect } from "react";
import { useRouter, useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Trash2, Plus, ArrowLeft, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/hooks/use-toast";
import { Badge } from "@/components/ui/badge";

import { z } from "zod";
// Import product schema and store
import {
  ProductData,
  ProductSchema, // Original schema
  specificationSchema, // Correct camelCase import
} from "@/schema/product";
import { useProductStore } from "@/store/productStore";
import { MultiImageDropzoneUsage } from "@/components/multiImageUpload";
import { Plus as PlusIcon, Trash2 as TrashIcon } from "lucide-react";
import { api } from "@/convex/_generated/api";
import { useQuery, useMutation } from "convex/react";
import { Id } from "@/convex/_generated/dataModel";


// For tracking product variations internally in the form
interface FormVariation {
  id?: Id<"productVariations">;
  type: string;
  options: {
    id?: string;
    value: string;
    price: number;
    stockCount: number;
    isActive: boolean;
    imageURL: string;
  }[];
}


// Define a Zod schema for the form structure, including form-specific fields
const ProductFormValidationSchema = ProductSchema.omit({
  variations: true, // variations are handled by formVariations state
  // _id: true, _creationTime: true // if these are part of ProductSchema and not editable
}).extend({
  newVariationType: z.string().optional(),
  // formVariations are not part of Zod validation directly, managed in component state
  specifications: specificationSchema.optional(), // Use the imported schema directly
});

// Infer ProductFormData type from the new Zod schema
type ProductFormData = z.infer<typeof ProductFormValidationSchema> & {
  // formVariations is not part of Zod schema, but used in component state
  formVariations?: FormVariation[];
};

export default function EditProductPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoadingProduct, setIsLoadingProduct] = useState(true);
  const [formVariations, setFormVariations] = useState<FormVariation[]>([]);

  const productId = params.id as Id<"products">;

  const productData = useQuery(api.product.getProductbyId, { productId });
  const updateProductMutation = useMutation(api.product.updateProduct);

  const { setProduct, resetProduct } = useProductStore();

  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductFormValidationSchema), // Use the new form-specific schema
    defaultValues: {
      name: "",
      description: "",
      price: 0,
      isActive: true,
      stockCount: 0,
      imageURLs: [],
      categories: [],
      specifications: [], // Default for Array<{key: string, value: string}> is an empty array
      newVariationType: "",
      formVariations: [],
    },
    mode: "onChange",
  });

  useEffect(() => {
    if (productData) {
      form.reset({
        name: productData.name,
        description: productData.description,
        price: productData.price,
        isActive: productData.isActive,
        stockCount: productData.stockCount,
        imageURLs: productData.imageURLs || [],
        categories: productData.categories || [],
        specifications: productData.specifications || [], // This is Array<{key: string, value: string}>
      });

      /* eslint-disable @typescript-eslint/no-explicit-any */
      // Using any type to bypass complex type issues with variations
      const transformedVariations = (productData.variations || [])
        .filter(Boolean)
        .map((v: any) => ({
          id: v._id as Id<"productVariations">,
          type: v.type || "",
          options: (v.options || []).map((opt: any) => ({
            id: opt.id,
            value: opt.value || "",
            price: opt.price || 0,
            stockCount: opt.stockCount || 0,
            isActive: opt.isActive === undefined ? true : opt.isActive,
            imageURL: opt.imageURL || "",
          })),
        }));
      /* eslint-enable @typescript-eslint/no-explicit-any */
      
      setFormVariations(transformedVariations);
      setIsLoadingProduct(false);
    }
  }, [productData, form]);

  useEffect(() => {
    const subscription = form.watch((values) => {
      const currentValues = values as ProductFormData;
      setProduct({
        // Map to ProductData, ensuring all fields are correct
        name: currentValues.name || "",
        description: currentValues.description || "",
        price: currentValues.price || 0,
        imageURLs: currentValues.imageURLs || [],
        stockCount: currentValues.stockCount || 0,
        categories: currentValues.categories || [],
        isActive:
          currentValues.isActive === undefined ? true : currentValues.isActive,
        specifications: currentValues.specifications || [], // This is Specification[]
        variations: [], // Handled by formVariations
      } as ProductData); // Cast to ProductData, ensure it's compatible
    });
    return () => subscription.unsubscribe();
  }, [form, setProduct]);

  const prepareSpecificationsForSubmit = (): Array<{
    key: string;
    value: string;
  }> => {
    // productData.specifications is Array<{key: string, value: string}>
    // form.getValues("specifications") should also be this type.
    const specsFromForm: Array<{ key: string; value: string }> | undefined =
      form.getValues("specifications");
    return (specsFromForm || [])
      .map((spec) => ({
        key: spec.key?.trim() ?? "",
        value: spec.value?.trim() ?? "",
      }))
      .filter(
        (spec) =>
          spec.key &&
          spec.key.trim() !== "" &&
          spec.value &&
          spec.value.trim() !== ""
      );
  };

  // Type for what the mutation expects for a single variation
  // Type for what the Convex mutation expects for a single variation
  type ConvexVariationInput = {
    id?: Id<"productVariations">; // Optional: ID if updating an existing variation
    type: string;
    options: Array<{
      id?: string; // Optional: ID if updating an existing option
      value: string;
      price?: number;
      stockCount: number;
      isActive?: boolean;
      imageURL?: string;
    }>;
    isActive: boolean;
    imageURL?: string;
  };

  const prepareVariationsForSubmit = (): ConvexVariationInput[] => {
    return formVariations
      .map((variation): ConvexVariationInput | null => {
        const filteredOptions = variation.options.filter(
          (option) => option.value && option.value.trim() !== ""
        );

        if (filteredOptions.length === 0 && !variation.id) {
          // Don't submit new empty variations
          return null;
        }

        return {
          id: variation.id,
          type: variation.type,
          options: filteredOptions.map((option) => ({
            id: option.id,
            value: option.value,
            price: option.price,
            stockCount: option.stockCount,
            isActive: option.isActive, // Pass through the value
            imageURL: option.imageURL,
          })),
          isActive: variation.options.some((opt) => opt.isActive),
          imageURL:
            variation.options.find((opt) => opt.imageURL)?.imageURL ||
            variation.options[0]?.imageURL,
        };
      })
      .filter((v): v is ConvexVariationInput => v !== null);
  };

  const onSubmit = async (data: ProductFormData) => {
    if (!productId) {
      toast({
        title: "Error",
        description: "Product ID is missing.",
        variant: "destructive",
      });
      return;
    }

    try {
      setIsSubmitting(true);

      const preparedVariations = prepareVariationsForSubmit();
      const preparedSpecifications = prepareSpecificationsForSubmit();

      // Explicitly type submissionData to match Convex mutation arguments
      type UpdateProductMutationArgs = Parameters<
        typeof updateProductMutation
      >[0];

      const submissionData: UpdateProductMutationArgs = {
        productId: productId,
        name: data.name?.trim() ?? "",
        description: data.description?.trim() ?? "",
        price: Number(data.price) || 0,
        isActive: data.isActive === undefined ? true : data.isActive, // Ensure boolean
        stockCount: Number(data.stockCount) || 0,
        imageURLs: (data.imageURLs || []).filter(
          (url) => url && url.trim() !== ""
        ),
        categories: (data.categories || []).filter(
          (cat) => cat && cat.trim() !== ""
        ),
        variations: preparedVariations, // This is ConvexVariationInput[]
        specifications: preparedSpecifications, // This is Specification[]
      };

      await updateProductMutation(submissionData);

      toast({
        title: "Product updated",
        description: `${data.name} has been updated successfully.`,
        variant: "success",
      });

      resetProduct(); // Reset store state
      router.push("/dashboard/products");
    } catch (error) {
      console.error("Error updating product:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to update product. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const addCategory = () => {
    const currentCategories = form.getValues("categories") || [];
    form.setValue("categories", [...currentCategories, ""]);
  };

  const removeCategory = (index: number) => {
    const currentCategories = form.getValues("categories") || [];
    if (currentCategories.length > 0) {
      // Allow removing till 0, or keep 1 if required
      form.setValue(
        "categories",
        currentCategories.filter((_, i) => i !== index)
      );
    }
  };

  const addVariationType = (type: string) => {
    if (!type.trim()) return;
    const existingType = formVariations.find(
      (v) => v.type.toLowerCase() === type.toLowerCase()
    );
    if (existingType) {
      toast({
        title: "Variation already exists",
        description: `A variation named "${type}" already exists.`,
        variant: "destructive",
      });
      return;
    }
    setFormVariations([
      ...formVariations,
      {
        type,
        options: [
          { value: "", stockCount: 0, price: 0, isActive: true, imageURL: "" }, // price:0, imageURL:""
        ],
      },
    ]);
    form.setValue("newVariationType", "");
  };

  const removeVariationType = (index: number) => {
    setFormVariations(formVariations.filter((_, i) => i !== index));
  };

  const addVariationOption = (variationIndex: number) => {
    const updatedVariations = [...formVariations];
    updatedVariations[variationIndex].options.push({
      value: "",
      stockCount: 0,
      price: 0, // price:0
      isActive: true,
      imageURL: "", // imageURL:""
    });
    setFormVariations(updatedVariations);
  };

  const removeVariationOption = (
    variationIndex: number,
    optionIndex: number
  ) => {
    const updatedVariations = [...formVariations];
    if (updatedVariations[variationIndex].options.length > 1) {
      updatedVariations[variationIndex].options = updatedVariations[
        variationIndex
      ].options.filter((_, i) => i !== optionIndex);
      setFormVariations(updatedVariations);
    }
  };

  const updateVariationOption = (
    variationIndex: number,
    optionIndex: number,
    field: keyof FormVariation["options"][0],
    value: string | number | boolean
  ) => {
    setFormVariations((currentVariations) =>
      currentVariations.map((variation, vIndex) => {
        if (vIndex === variationIndex) {
          const updatedOptions = variation.options.map((option, oIndex) => {
            if (oIndex === optionIndex) {
              return { ...option, [field]: value };
            }
            return option;
          });
          return { ...variation, options: updatedOptions };
        }
        return variation;
      })
    );
  };

  const commonVariationTypes = ["Size", "Color", "Material", "Style", "Weight"];

  const addSpecification = () => {
    const currentSpecs: Array<{ key: string; value: string }> =
      form.getValues("specifications") || [];
    form.setValue("specifications", [...currentSpecs, { key: "", value: "" }]);
  };

  const removeSpecification = (index: number) => {
    const currentSpecs: Array<{ key: string; value: string }> =
      form.getValues("specifications") || [];
    if (currentSpecs.length > 0) {
      form.setValue(
        "specifications",
        currentSpecs.filter((_, i) => i !== index)
      );
    }
  };

  const handleImageUpload = (url: string) => {
    const currentImageURLs = form.getValues("imageURLs") || [];
    form.setValue("imageURLs", [...currentImageURLs.filter(Boolean), url]);
  };

  const handleImageDelete = (urlToDelete: string) => {
    const currentImageURLs = form.getValues("imageURLs") || [];
    form.setValue(
      "imageURLs",
      currentImageURLs.filter((url) => url !== urlToDelete)
    );
    // Potentially call an API to delete the image from storage if needed
  };

  if (isLoadingProduct) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
        <p className="ml-2">Loading product details...</p>
      </div>
    );
  }

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">Edit Product</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Product Name</FormLabel>
                      <FormControl>
                        <Input placeholder="Enter product name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter product description"
                          className="min-h-32"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <div className="grid grid-cols-2 gap-4">
                  <FormField
                    control={form.control}
                    name="price"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Price ($)</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            step="0.01"
                            placeholder="0.00"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseFloat(e.target.value) || 0)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="stockCount"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Stock Count</FormLabel>
                        <FormControl>
                          <Input
                            type="number"
                            min="0"
                            step="1"
                            placeholder="0"
                            {...field}
                            onChange={(e) =>
                              field.onChange(parseInt(e.target.value, 10) || 0)
                            }
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="isActive"
                  render={({ field }) => (
                    <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
                      <div className="space-y-0.5">
                        <FormLabel className="text-base">
                          Active Status
                        </FormLabel>
                        <FormDescription>
                          Make this product visible
                        </FormDescription>
                      </div>
                      <FormControl>
                        <Switch
                          checked={field.value}
                          onCheckedChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </CardContent>
            </Card>

            {/* Images and Categories */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    Manage images for your product.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MultiImageDropzoneUsage onUpload={handleImageUpload} />
                  <div className="mt-4 space-y-2">
                    <FormLabel>Current Images</FormLabel>
                    {form.watch("imageURLs") &&
                    form.watch("imageURLs").length > 0 ? (
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                        {form.watch("imageURLs").map(
                          (url, index) =>
                            url && ( // Ensure URL is not an empty string or null
                              <div key={index} className="relative group">
                                <Image
                                  src={url}
                                  alt={`Product image ${index + 1}`}
                                  className="w-full h-32 object-cover rounded-md border"
                                  width={100}
                                  height={100}
                                />
                                <Button
                                  type="button"
                                  variant="destructive"
                                  size="icon"
                                  className="absolute top-1 right-1 h-6 w-6 opacity-0 group-hover:opacity-100 transition-opacity"
                                  onClick={() => handleImageDelete(url)}
                                >
                                  <Trash2 className="h-3 w-3" />
                                </Button>
                              </div>
                            )
                        )}
                      </div>
                    ) : (
                      <p className="text-sm text-muted-foreground">
                        No images uploaded yet.
                      </p>
                    )}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(form.watch("categories") || []).map((cat, index) => (
                    <div key={index} className="flex items-end gap-2">
                      <FormField
                        control={form.control}
                        name={`categories.${index}`}
                        render={({ field }) => (
                          <FormItem className="flex-1">
                            <FormLabel
                              className={index !== 0 ? "sr-only" : undefined}
                            >
                              Category
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Enter category" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button
                        type="button"
                        variant="outline"
                        size="icon"
                        onClick={() => removeCategory(index)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  ))}
                  <Button
                    type="button"
                    variant="outline"
                    size="sm"
                    className="mt-2"
                    onClick={addCategory}
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add Category
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Specifications Card */}
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {(form.watch("specifications") || []).map((specItem, index) => (
                  <div key={index} className="flex items-end gap-2">
                    <FormField
                      control={form.control}
                      name={`specifications.${index}.key` as const}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel
                            className={index !== 0 ? "sr-only" : undefined}
                          >
                            Key
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Material" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name={`specifications.${index}.value` as const}
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormLabel
                            className={index !== 0 ? "sr-only" : undefined}
                          >
                            Value
                          </FormLabel>
                          <FormControl>
                            <Input placeholder="e.g., Bamboo" {...field} />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeSpecification(index)}
                      disabled={
                        (form.watch("specifications") || []).length <= 0 &&
                        index === 0
                      } // Or simply allow removing all
                    >
                      <TrashIcon className="h-4 w-4" />
                    </Button>
                  </div>
                ))}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={addSpecification}
                >
                  <PlusIcon className="mr-2 h-4 w-4" /> Add Specification
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Product Variations */}
          <Card>
            <CardHeader>
              <CardTitle>Product Variations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex flex-wrap gap-2 mb-2">
                  {commonVariationTypes.map((type) => (
                    <Badge
                      key={type}
                      variant="outline"
                      className="cursor-pointer hover:bg-accent"
                      onClick={() => addVariationType(type)}
                    >
                      {type}
                    </Badge>
                  ))}
                </div>
                <div className="flex items-end gap-2">
                  <div className="flex-1">
                    <FormLabel>New Variation Type</FormLabel>
                    <FormField
                      control={form.control}
                      name="newVariationType"
                      defaultValue=""
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input 
                              placeholder="e.g., Size, Color" 
                              {...field} 
                              value={field.value || ""}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() =>
                      addVariationType(form.watch("newVariationType") || "")
                    }
                    disabled={!form.watch("newVariationType")?.trim()}
                  >
                    <Plus className="mr-2 h-4 w-4" /> Add
                  </Button>
                </div>
              </div>

              {formVariations.length > 0 ? (
                <div className="space-y-6">
                  {formVariations.map((variation, variationIndex) => (
                    <div
                      key={variation.id || variationIndex}
                      className="border rounded-lg p-4 space-y-4"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-lg font-medium">
                          {variation.type}
                        </h3>
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={() => removeVariationType(variationIndex)}
                          className="h-8 px-2 text-destructive hover:bg-destructive/10 hover:text-destructive"
                        >
                          <X className="h-4 w-4 mr-1" /> Remove Type
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {variation.options.map((option, optionIndex) => (
                          <div
                            key={option.id || optionIndex}
                            className="p-3 border rounded-md space-y-3"
                          >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 items-end">
                              <div>
                                <FormLabel>Option Value</FormLabel>
                                <Input
                                  placeholder={`Enter ${variation.type}`}
                                  value={option.value}
                                  onChange={(e) =>
                                    updateVariationOption(
                                      variationIndex,
                                      optionIndex,
                                      "value",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <FormLabel>Price Adjustment ($)</FormLabel>
                                <Input
                                  type="number"
                                  step="0.01"
                                  placeholder="0.00"
                                  value={option.price} // No ?? 0 needed as price is now number
                                  onChange={(e) =>
                                    updateVariationOption(
                                      variationIndex,
                                      optionIndex,
                                      "price",
                                      parseFloat(e.target.value) || 0
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <FormLabel>Stock Count</FormLabel>
                                <Input
                                  type="number"
                                  min="0"
                                  step="1"
                                  placeholder="0"
                                  value={option.stockCount}
                                  onChange={(e) =>
                                    updateVariationOption(
                                      variationIndex,
                                      optionIndex,
                                      "stockCount",
                                      parseInt(e.target.value, 10) || 0
                                    )
                                  }
                                />
                              </div>
                              <div>
                                <FormLabel>Image URL (Optional)</FormLabel>
                                <Input
                                  placeholder="https://example.com/image.png"
                                  value={option.imageURL} // No ?? "" needed as imageURL is now string
                                  onChange={(e) =>
                                    updateVariationOption(
                                      variationIndex,
                                      optionIndex,
                                      "imageURL",
                                      e.target.value
                                    )
                                  }
                                />
                              </div>
                            </div>
                            <div className="flex items-center justify-between">
                              <FormItem className="flex flex-row items-center space-x-2">
                                <FormControl>
                                  <Switch
                                    checked={option.isActive}
                                    onCheckedChange={(checked) =>
                                      updateVariationOption(
                                        variationIndex,
                                        optionIndex,
                                        "isActive",
                                        checked
                                      )
                                    }
                                  />
                                </FormControl>
                                <FormLabel className="text-sm font-normal">
                                  Option Active
                                </FormLabel>
                              </FormItem>
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                onClick={() =>
                                  removeVariationOption(
                                    variationIndex,
                                    optionIndex
                                  )
                                }
                                disabled={variation.options.length <= 1}
                              >
                                <Trash2 className="h-4 w-4" />
                              </Button>
                            </div>
                          </div>
                        ))}
                      </div>
                      <Button
                        type="button"
                        variant="outline"
                        size="sm"
                        onClick={() => addVariationOption(variationIndex)}
                      >
                        <Plus className="mr-2 h-4 w-4" /> Add Option
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 border border-dashed rounded-lg">
                  <p className="text-muted-foreground">No variations added.</p>
                </div>
              )}
            </CardContent>
          </Card>

          <Separator />

          <div className="flex justify-end gap-4">
            <Button
              type="button"
              variant="outline"
              onClick={() => router.push("/dashboard/products")}
              disabled={isSubmitting}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting || isLoadingProduct}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Updating...
                </>
              ) : (
                "Update Product"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
