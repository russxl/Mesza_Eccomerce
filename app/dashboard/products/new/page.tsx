"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Trash2, Plus, ArrowLeft, Loader2, X } from "lucide-react";
import { Button } from "@/components/ui/button";
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

// Import product schema and store
import {
  ProductData,
  ProductSchema,
  VariationOption,
  Specification,
} from "@/schema/product";
import { useProductStore } from "@/store/productStore";
import { useProductVariations } from "@/store/variationStore";
import { MultiImageDropzoneUsage } from "@/components/multiImageUpload";
import { Plus as PlusIcon, Trash2 as TrashIcon } from "lucide-react";

// For tracking product variations internally in the form
interface FormVariation {
  id?: string; // For existing variations
  type: string;
  options: {
    id?: string;
    value: string;
    price?: number;
    stockCount: number;
    isActive?: boolean;
    imageURL?: string;
  }[];
}

interface SpecificationData {
  key: string;
  value: string;
}

// Form-specific data structure
interface ProductFormData extends Omit<ProductData, "variations"> {
  variationTypes?: string[];
  newVariationType?: string;
  formVariations?: FormVariation[];
}

export default function NewProductPage() {
  const router = useRouter();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isVariationDialogOpen, setIsVariationDialogOpen] = useState(false);
  const [formVariations, setFormVariations] = useState<FormVariation[]>([]);

  // Use product store
  const { product, setProduct, resetProduct, createProduct } =
    useProductStore();

  // Initialize the form with product from store or default
  const form = useForm<ProductFormData>({
    resolver: zodResolver(ProductSchema.omit({ variations: true })),
    defaultValues: {
      ...product,
      imageURLs: product?.imageURLs?.length ? product.imageURLs : [""],
      categories: product?.categories?.length ? product.categories : [""],
      specifications: [],
      newVariationType: "",
      formVariations: [],
    },
    mode: "onChange",
  });

  // Keep store in sync with form
  useEffect(() => {
    const subscription = form.watch((values) => {
      setProduct({
        ...values,
        variations: [], // We'll handle variations separately on submit
      } as ProductData);
    });
    return () => subscription.unsubscribe();
  }, [form, setProduct]);
  const prepareSpecificationsForSubmit = () => {
    const specs = form.getValues("specifications") || [];
    return specs
      .map((spec) => ({
        key: spec.key?.trim() ?? "",
        value: spec.value?.trim() ?? "",
      }))
      .filter((spec) => spec.key && spec.value);
  };
  // Update the prepareVariationsForSubmit function
  const prepareVariationsForSubmit = (): (string | VariationOption)[] => {
    return formVariations
      .map((variation) => {
        if (variation.id) {
          return variation.id;
        }
        // Filter out options with empty value
        const filteredOptions = variation.options.filter(
          (option) => option.value && option.value.trim() !== ""
        );
        return {
          type: variation.type,
          options: filteredOptions.map((option) => ({
            value: option.value,
            price: option.price,
            stockCount: option.stockCount,
          })),
          isActive: filteredOptions.every((opt) => opt.isActive !== false),
          imageURL: filteredOptions[0]?.imageURL,
        };
      })
      .filter(
        (variation) =>
          typeof variation === "string" ||
          (variation.options && variation.options.length > 0)
      );
  };

  // Update the onSubmit handler
  const onSubmit = async (data: ProductFormData) => {
    try {
      setIsSubmitting(true);

      // Clean and prepare the data
      const submissionData: ProductData = {
        name: data.name.trim(),
        description: data.description.trim(),
        price: Number(data.price),
        isActive: data.isActive,
        stockCount: Number(data.stockCount),
        // Filter empty strings from arrays
        imageURLs: data.imageURLs.filter((url) => url.trim() !== ""),
        categories: data.categories.filter((cat) => cat.trim() !== ""),
        variations: prepareVariationsForSubmit(),
        specifications: prepareSpecificationsForSubmit(),
      };

      // Call createProduct from the store
      await createProduct(submissionData);

      toast({
        title: "Product created",
        description: `${data.name} has been created successfully.`,
        variant: "success",
      });

      resetProduct();
      form.reset(); // Reset the form
      router.push("/dashboard/products");
    } catch (error) {
      console.error("Error creating product:", error);
      toast({
        title: "Error",
        description:
          error instanceof Error
            ? error.message
            : "Failed to create product. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const { data: storedVariants, isLoading: variantsLoading } =
    useProductVariations();

  // Handlers for dynamic fields (imageURLs and categories)
  const addImageURL = () => {
    const currentURLs = form.getValues("imageURLs");
    form.setValue("imageURLs", [...currentURLs, ""]);
  };

  const removeImageURL = (index: number) => {
    const currentURLs = form.getValues("imageURLs");
    if (currentURLs.length > 1) {
      form.setValue(
        "imageURLs",
        currentURLs.filter((_, i) => i !== index)
      );
    }
  };

  const addCategory = () => {
    const currentCategories = form.getValues("categories");
    form.setValue("categories", [...currentCategories, ""]);
  };

  const removeCategory = (index: number) => {
    const currentCategories = form.getValues("categories");
    if (currentCategories.length > 1) {
      form.setValue(
        "categories",
        currentCategories.filter((_, i) => i !== index)
      );
    }
  };

  // Handlers for variations
  const addVariationType = (type: string) => {
    if (!type.trim()) return;

    // Check if variation type already exists
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

    // Add new variation type
    setFormVariations([
      ...formVariations,
      {
        type,
        options: [{ value: "", stockCount: 0 }],
      },
    ]);

    // Clear the input
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
    field: keyof VariationOption | "id" | "value" | "price" | "stockCount",
    value: VariationOption[keyof VariationOption] | string | number | undefined
  ) => {
    const updatedVariations = [...formVariations];
    updatedVariations[variationIndex].options[optionIndex] = {
      ...updatedVariations[variationIndex].options[optionIndex],
      [field]: value,
    };
    setFormVariations(updatedVariations);
  };

  // Common variation types for quick selection
  const commonVariationTypes = ["Size", "Color", "Material", "Style", "Weight"];

  // Apply a variation set to the product
  const applyVariationSet = (set: any) => {
    // Convert the variation set to the format expected by our form
    const newFormVariations = set.variations.map((variation: any) => ({
      type: variation.name,
      options: variation.options.map((option: any) => ({
        value: option.value,
        price: option.priceAdjustment
          ? form.getValues("price") + option.priceAdjustment
          : undefined,
        stockCount: option.stockCount || 0,
        isActive: true,
      })),
    }));

    // Update the form variations
    setFormVariations(newFormVariations);

    // Close the dialog
    setIsVariationDialogOpen(false);

    // Show success toast
    toast({
      title: "Variation set applied",
      description: `${set.name} has been applied to this product.`,
      variant: "success",
    });
  };

  // Handlers for specifications
  const addSpecification = () => {
    const currentSpecs = form.getValues("specifications") || [];
    form.setValue("specifications", [...currentSpecs, { key: "", value: "" }]);
  };

  const removeSpecification = (index: number) => {
    const currentSpecs = form.getValues("specifications") || [];
    if (currentSpecs.length > 1) {
      form.setValue(
        "specifications",
        currentSpecs.filter((_, i) => i !== index)
      );
    }
  };

  return (
    <div className="p-6 md:p-8">
      <div className="flex items-center gap-4 mb-6">
        <Button variant="outline" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-2xl font-bold">Add New Product</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {/* Basic Information */}
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>
                  Enter the basic details about your product.
                </CardDescription>
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
                            onChange={(e) => {
                              // Ensure we're working with numbers, not strings
                              field.onChange(parseFloat(e.target.value) || 0);
                            }}
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
                          Make this product visible to customers
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
                    Add image URLs for your product. The first image will be
                    used as the main image.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <MultiImageDropzoneUsage
                    onUpload={(url: string) => {
                      // Add the new URL to the form's imageURLs array
                      const current = form.getValues("imageURLs") || [];
                      form.setValue("imageURLs", [
                        ...current.filter(Boolean),
                        url,
                      ]);
                    }}
                  />
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Categories</CardTitle>
                  <CardDescription>
                    Assign categories to help customers find your product.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(form.watch("categories") || [""]).map((cat, index) => (
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
                        disabled={(form.watch("categories")?.length || 0) <= 1}
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
                    <Plus className="mr-2 h-4 w-4" />
                    Add Category
                  </Button>
                </CardContent>
              </Card>
            </div>

            {/* Specifications Card */}
            <Card>
              <CardHeader>
                <CardTitle>Specifications</CardTitle>
                <CardDescription>
                  Add key-value specifications for your product (e.g., Material,
                  Dimensions).
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {(form.watch("specifications") || [{ key: "", value: "" }]).map(
                  (spec, index) => (
                    <div key={index} className="flex items-end gap-2">
                      <FormField
                        control={form.control}
                        name={`specifications.${index}.key`}
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
                        name={`specifications.${index}.value`}
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
                          (form.watch("specifications")?.length || 1) <= 1
                        }
                      >
                        <TrashIcon className="h-4 w-4" />
                      </Button>
                    </div>
                  )
                )}
                <Button
                  type="button"
                  variant="outline"
                  size="sm"
                  className="mt-2"
                  onClick={addSpecification}
                >
                  <PlusIcon className="mr-2 h-4 w-4" />
                  Add Specification
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Product Variations */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0">
              <div>
                <CardTitle>Product Variations</CardTitle>
                <CardDescription>
                  Add variations like size, color, or material to your product.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Add new variation type */}
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
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Input
                              placeholder="e.g., Size, Color, Material"
                              {...field}
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
                    <Plus className="mr-2 h-4 w-4" />
                    Add
                  </Button>
                </div>
              </div>

              {/* Existing variations */}
              {formVariations.length > 0 ? (
                <div className="space-y-6">
                  {formVariations.map((variation, variationIndex) => (
                    <div
                      key={variationIndex}
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
                          <X className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                      <div className="space-y-3">
                        {variation.options.map((option, optionIndex) => (
                          <div
                            key={optionIndex}
                            className="grid grid-cols-1 md:grid-cols-3 gap-3 items-end"
                          >
                            <div className="flex-1">
                              <FormLabel
                                className={
                                  optionIndex !== 0 ? "sr-only" : undefined
                                }
                              >
                                Option Value
                              </FormLabel>
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
                            <div className="flex-1">
                              <FormLabel
                                className={
                                  optionIndex !== 0 ? "sr-only" : undefined
                                }
                              >
                                Price Adjustment ($)
                              </FormLabel>
                              <Input
                                type="number"
                                step="0.01"
                                placeholder="0.00"
                                value={option.price ?? 0}
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
                            <div className="flex gap-2">
                              <div className="flex-1">
                                <FormLabel
                                  className={
                                    optionIndex !== 0 ? "sr-only" : undefined
                                  }
                                >
                                  Stock
                                </FormLabel>
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
                              <Button
                                type="button"
                                variant="outline"
                                size="icon"
                                className="self-end"
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
                        <Plus className="mr-2 h-4 w-4" />
                        Add Option
                      </Button>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="text-center py-6 border border-dashed rounded-lg">
                  <p className="text-muted-foreground">
                    No variations added yet. Add a variation type to get
                    started.
                  </p>
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Creating...
                </>
              ) : (
                "Create Product"
              )}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
