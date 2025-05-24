"use client";

import { useEffect, useState } from "react";
import { useRouter, useParams } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import { sendEmail } from "@/lib/email"; // Import the sendEmail function
import { useForm } from "react-hook-form";
import { z } from "zod";
import { ArrowLeft, Truck, X, Save, Send, Loader2 } from "lucide-react";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { getOrderStatusBadge, orderStatusOptions } from "../utils";
import { OrderStatusOptionType } from "../types";
import { useToast } from "@/components/hooks/use-toast";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useOrderStore, OrderWithShipping } from "@/store/orderStore";
import { formatCurrencySigns } from "@/utils/formatToCurrency";

// Form schema for status update
const statusSchema = z.object({
  status: z.string().min(1, "Status is required"),
  message: z.string().optional(),
});

// Form schema for tracking update
const trackingSchema = z.object({
  trackingNumber: z.string().min(1, "Tracking number is required"),
  message: z.string().optional(),
});

export default function OrderDetailsPage() {
  const router = useRouter();
  const params = useParams();
  const { toast } = useToast();
  const orderId = typeof params.id === "string" ? params.id : "";

  const { getOrderById, updateOrderDetails } = useOrderStore();

  const [order, setOrder] = useState<OrderWithShipping | null>(null);
  const [isLoadingOrder, setIsLoadingOrder] = useState(true);
  const [isUpdatingStatus, setIsUpdatingStatus] = useState(false);
  const [isUpdatingTracking, setIsUpdatingTracking] = useState(false);
  const [isCancelDialogOpen, setIsCancelDialogOpen] = useState(false);
  const [fetchError, setFetchError] = useState<string | null>(null);

  // Form for updating status
  const statusForm = useForm<z.infer<typeof statusSchema>>({
    resolver: zodResolver(statusSchema),
    defaultValues: {
      status: "",
      message: "",
    },
  });

  // Form for updating tracking
  const trackingForm = useForm<z.infer<typeof trackingSchema>>({
    resolver: zodResolver(trackingSchema),
    defaultValues: {
      trackingNumber: "",
      message: "",
    },
  });

  useEffect(() => {
    if (orderId) {
      const fetchOrder = async () => {
        setIsLoadingOrder(true);
        setFetchError(null);
        try {
          const fetchedOrder = await getOrderById(orderId);
          if (fetchedOrder) {
            setOrder(fetchedOrder);
            // Set form defaults once order is fetched
            statusForm.reset({
              status: fetchedOrder.status || "",
              message: fetchedOrder.message || "",
            });
            trackingForm.reset({
              trackingNumber: fetchedOrder.shipping?.trackingNumber || "",
              message: "",
            });
          } else {
            setFetchError("Order not found.");
            setOrder(null);
          }
        } catch (error) {
          console.error("Failed to fetch order:", error);
          setFetchError("Failed to load order details.");
        } finally {
          setIsLoadingOrder(false);
        }
      };
      fetchOrder();
    } else {
      setFetchError("Order ID is missing.");
      setIsLoadingOrder(false);
    }
  }, [orderId, getOrderById, statusForm, trackingForm]);

  // Update status handler
  const onStatusSubmit = async (values: z.infer<typeof statusSchema>) => {
    if (!order) return;
    setIsUpdatingStatus(true);
    try {
      // First update the order status
      const result = await updateOrderDetails(order.orderId, {
        status: values.status,
        message: values.message,
      });

      if (result.success && result.data) {
        // Send email notification based on status change
        let emailType: "orderPlaced" | "readyForPickup" | "orderShipped" | "orderDelivered" | "orderCancelled" | undefined;
        
        if (values.status === "delivered") emailType = "orderDelivered";
        if (values.status === "cancelled") emailType = "orderCancelled";
        if (values.status === "readyforpickup") emailType = "readyForPickup";
        
        // For "shipped" status, always send email if there's tracking info
        if (values.status === "shipped") {
          emailType = "orderShipped";
        }

        if (emailType && order.shipping?.email) {
          
          
          // Prepare email details based on status type
          const emailDetails: any = {
            firstName: order.shipping.firstName || "Customer",
            orderId: order.orderId,
          };
          
          // Add specific fields based on emailType
          if (emailType === "orderDelivered") {
            emailDetails.deliveryDate = new Date().toLocaleDateString();
          } else if (emailType === "orderShipped") {
            // For shipping emails, use existing tracking number or a placeholder if needed
            const trackingNumber = order.shipping.trackingNumber || "TRK" + order.orderId;
            emailDetails.trackingNumber = trackingNumber;
            emailDetails.carrier = "Standard Shipping";
            emailDetails.trackingUrl = `${trackingNumber}`;
          } else if (emailType === "readyForPickup") {
            emailDetails.pickupLocation = "Lot 9-1-C F. Dimanlag St., Antipolo City or (Jao Plaque Awards on Google Maps)";
            emailDetails.pickupHours = "Mon-Fri: 9AM-6PM, Sat-Sun: 10AM-4PM";
            emailDetails.pickupInstructions = "Please bring your ID and order number.";
          }
          
          // Send email with appropriate details
          try {
            await sendEmail(emailType, order.shipping.email, emailDetails);
          } catch (emailError) {
            console.error("Failed to send email notification:", emailError);
            // Continue with order update even if email fails
          }
        } 

        // Update local state optimistically or re-fetch
        setOrder((prevOrder) =>
          prevOrder
            ? {
                ...prevOrder,
                status: values.status,
                message: result.data.message || values.message,
              }
            : null
        );
        // Also update the form's default value for status to prevent it from reverting on next render
        statusForm.reset({ status: values.status, message: values.message });

        toast({
          title: "Status updated",
          description: `Order status has been updated to ${values.status}.`,
          variant: "success",
        });
      } else {
        throw new Error(result.error || "Failed to update status");
      }
    } catch (error) {
      console.error("Error updating status:", error);
      toast({
        title: "Update failed",
        description:
          error instanceof Error
            ? error.message
            : "Could not update order status.",
        variant: "destructive",
      });
    } finally {
      setIsUpdatingStatus(false);
    }
  };

  // Update tracking handler
  const onTrackingSubmit = async (values: z.infer<typeof trackingSchema>) => {
    if (!order || !order.shipping) return;
    setIsUpdatingTracking(true);
    try {
      // Always update status to shipped when tracking is updated
      const newStatus = "shipped";
      
      const result = await updateOrderDetails(order.orderId, {
        trackingNumber: values.trackingNumber,
        status: newStatus, // Always update to shipped
        message: values.message || `Tracking updated: ${values.trackingNumber}`,
      });

      if (result.success && result.data) {
        // Update local state
        setOrder((prevOrder) => {
          if (!prevOrder || !prevOrder.shipping) return prevOrder;
          return {
            ...prevOrder,
            shipping: {
              ...prevOrder.shipping,
              trackingNumber: values.trackingNumber,
            },
            status: newStatus, // Always set to shipped
            message: result.data.message || values.message,
          };
        });

        // Send shipping email when tracking is updated
        if (order.shipping.email) {
          
          
          try {
            const emailDetails = {
              firstName: order.shipping.firstName || "Customer",
              orderId: order.orderId,
              trackingNumber: values.trackingNumber,
              carrier: "Standard Shipping",
              trackingUrl: `${values.trackingNumber}`,
            };
            
            await sendEmail("orderShipped", order.shipping.email, emailDetails);
          } catch (emailError) {
            console.error("Failed to send shipping email:", emailError);
            // Continue with order update even if email fails
          }
        }

        // Reset tracking form and update status form
        trackingForm.reset({
          trackingNumber: values.trackingNumber,
          message: values.message,
        });
        
        // Always update status form to shipped
        statusForm.setValue("status", newStatus);
        
        toast({
          title: "Tracking updated",
          description: order.status !== newStatus 
            ? `Tracking information has been updated and order status set to shipped.`
            : "Tracking information has been updated.",
          variant: "success",
        });
      } else {
        throw new Error(result.error || "Failed to update tracking");
      }
    } catch (error) {
      console.error("Error updating tracking:", error);
      toast({
        title: "Update failed",
        description:
          error instanceof Error
            ? error.message
            : "Could not update tracking information.",
        variant: "destructive",
      });
    } finally {
      setIsUpdatingTracking(false);
    }
  };

  // Cancel order handler
  const handleCancelOrder = async () => {
    if (!order || !order.shipping?.email) {
      toast({
        title: "Error",
        description: "Cannot cancel order: missing order information or email address.",
        variant: "destructive",
      });
      setIsCancelDialogOpen(false);
      return;
    }

    try {
      // Update order status to cancelled
      const result = await updateOrderDetails(order.orderId, {
        status: "cancelled",
        message: "Order cancelled by administrator.",
      });

      if (result.success && result.data) {
        // Send cancellation email
        try {
          await sendEmail("orderCancelled", order.shipping.email, {
            firstName: order.shipping.firstName || "Customer",
            orderId: order.orderId,
          });
        } catch (emailError) {
          console.error("Failed to send cancellation email:", emailError);
          // Continue with order cancellation even if email fails
        }

        // Update local state
        setOrder((prevOrder) => 
          prevOrder ? {
            ...prevOrder,
            status: "cancelled",
            message: "Order cancelled by administrator."
          } : null
        );

        // Update form
        statusForm.reset({
          status: "cancelled",
          message: "Order cancelled by administrator.",
        });
        
        toast({
          title: "Order cancelled",
          description: "The order has been cancelled and the customer has been notified.",
          variant: "success",
        });
      } else {
        throw new Error(result.error || "Failed to cancel order");
      }
    } catch (error) {
      console.error("Error cancelling order:", error);
      toast({
        title: "Cancellation failed",
        description: error instanceof Error ? error.message : "Could not cancel the order.",
        variant: "destructive",
      });
    }
    
    setIsCancelDialogOpen(false);
  };

  if (isLoadingOrder) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loader2 className="h-12 w-12 animate-spin text-primary" />
        <p className="ml-4 text-lg">Loading order details...</p>
      </div>
    );
  }

  if (fetchError) {
    return (
      <div className="p-6 md:p-8 text-center">
        <h1 className="text-xl font-semibold text-destructive">{fetchError}</h1>
        <Button
          onClick={() => router.push("/dashboard/orders")}
          className="mt-4"
        >
          Back to Orders
        </Button>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="p-6 md:p-8 text-center">
        <h1 className="text-xl font-semibold">Order not found.</h1>
        <Button
          onClick={() => router.push("/dashboard/orders")}
          className="mt-4"
        >
          Back to Orders
        </Button>
      </div>
    );
  }

  // Calculate dates
  const formattedOrderDate = new Date(
    order.createdAt || order.updatedAt || "N/A"
  ).toLocaleString();

  return (
    <div className="p-6 md:p-8 space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Button
            variant="outline"
            size="icon"
            onClick={() => router.push("/dashboard/orders")}
          >
            <ArrowLeft className="h-4 w-4" />
          </Button>
          <div>
            <h1 className="text-2xl font-bold">Order {order.orderId}</h1>
            <p className="text-sm text-muted-foreground">
              Placed on {formattedOrderDate}
            </p>
          </div>
        </div>
        <div className="flex gap-2">
          <AlertDialog
            open={isCancelDialogOpen}
            onOpenChange={setIsCancelDialogOpen}
          >
            <AlertDialogTrigger asChild>
              <Button
                variant="outline"
                disabled={
                  order.status === "delivered" || order.status === "cancelled"
                }
              >
                <X className="mr-2 h-4 w-4" />
                Cancel Order
              </Button>
            </AlertDialogTrigger>
            <AlertDialogContent>
              <AlertDialogHeader>
                <AlertDialogTitle>
                  Are you sure you want to cancel this order?
                </AlertDialogTitle>
                <AlertDialogDescription>
                  This action cannot be undone. The customer will be notified
                  and any payment may need to be refunded manually.
                </AlertDialogDescription>
              </AlertDialogHeader>
              <AlertDialogFooter>
                <AlertDialogCancel>No, keep order</AlertDialogCancel>
                <AlertDialogAction
                  onClick={handleCancelOrder}
                  className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
                >
                  Yes, cancel order
                </AlertDialogAction>
              </AlertDialogFooter>
            </AlertDialogContent>
          </AlertDialog>

          <Button
            onClick={() =>
              toast({
                title: "Coming soon!",
                description: "Print shipping label feature.",
              })
            }
          >
            <Truck className="mr-2 h-4 w-4" />
            Print Shipping Label
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="md:col-span-2 space-y-6">
          <Card>
            <CardHeader className="pb-3">
              <CardTitle className="flex items-center justify-between">
                <div>Order Status</div>
                <div>{getOrderStatusBadge(order.status || "unknown")}</div>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Form {...statusForm}>
                <form
                  onSubmit={statusForm.handleSubmit(onStatusSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={statusForm.control}
                    name="status"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Update Status</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          value={field.value}
                          disabled={
                            order.status === "cancelled" || isUpdatingStatus
                          }
                        >
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select status" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {orderStatusOptions.map(
                              (option: OrderStatusOptionType) => (
                                <SelectItem
                                  key={option.value}
                                  value={option.value}
                                >
                                  {option.label}
                                </SelectItem>
                              )
                            )}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={statusForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message/Note (Optional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Add a message about this status change (e.g., reason for delay)"
                            className="resize-none"
                            disabled={isUpdatingStatus}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <div className="flex justify-end">
                    <Button
                      type="submit"
                      disabled={
                        isUpdatingStatus || order.status === "cancelled"
                      }
                    >
                      {isUpdatingStatus ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <Save className="mr-2 h-4 w-4" />
                          Update Status
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Tracking Information</CardTitle>
              <CardDescription>
                Add or update the tracking number for this shipment
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Form {...trackingForm}>
                <form
                  onSubmit={trackingForm.handleSubmit(onTrackingSubmit)}
                  className="space-y-4"
                >
                  <FormField
                    control={trackingForm.control}
                    name="trackingNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Tracking Number</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Enter tracking number"
                            disabled={
                              order.status === "cancelled" ||
                              isUpdatingTracking ||
                              !order.shipping
                            }
                            {...field}
                          />
                        </FormControl>
                        {!order.shipping && (
                          <p className="text-sm text-destructive-foreground bg-destructive p-2 rounded-md mt-1">
                            Shipping details not yet added for this order.
                          </p>
                        )}
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={trackingForm.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>
                          Note for Tracking Update (Optional)
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="e.g., Shipped via Express"
                            className="resize-none"
                            disabled={isUpdatingTracking || !order.shipping}
                            {...field}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-end gap-2">
                    <Button
                      type="submit"
                      disabled={
                        isUpdatingTracking ||
                        order.status === "cancelled" ||
                        !order.shipping
                      }
                      className="gap-2"
                    >
                      {isUpdatingTracking ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Updating...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4" />
                          {order.shipping?.trackingNumber
                            ? "Update Tracking"
                            : "Add Tracking"}
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Order Items</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y">
                {order.cart.map((item, index) => (
                  <div
                    key={item.productId + index}
                    className="flex items-center gap-4 p-4"
                  >
                    <div className="h-16 w-16 rounded bg-muted flex-shrink-0 overflow-hidden relative">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        sizes="64px"
                        className="object-cover"
                      />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="font-medium truncate">{item.name}</p>
                      {item.selectedOptions &&
                        Object.entries(item.selectedOptions).map(
                          ([key, value]) => (
                            <p
                              key={key}
                              className="text-sm text-muted-foreground"
                            >
                              {key}: {value}
                            </p>
                          )
                        )}
                      <div className="flex items-center text-sm text-muted-foreground mt-1">
                        <span>
                          {formatCurrencySigns(item.price)} × {item.quantity}
                        </span>
                      </div>
                    </div>
                    <div className="text-right font-medium">
                      {formatCurrencySigns(item.price * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
            <CardFooter className="flex flex-col gap-2 items-end pt-4">
              <div className="flex justify-between w-full md:w-60 text-sm">
                <span>Subtotal:</span>
                <span>{formatCurrencySigns(order.subTotal)}</span>
              </div>
              {order.shipping && (
                <div className="flex justify-between w-full md:w-60 text-sm">
                  <span>Shipping Cost:</span>
                  <span>Included</span>
                </div>
              )}
              <Separator className="w-full md:w-60 my-1" />
              <div className="flex justify-between w-full md:w-60 font-medium">
                <span>Total:</span>
                <span>{formatCurrencySigns(order.subTotal)}</span>
              </div>
            </CardFooter>
          </Card>
        </div>

        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Customer & Shipping Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {order.shipping ? (
                <>
                  <div>
                    <h4 className="text-sm font-medium">Contact Details</h4>
                    <p className="mt-1">
                      {order.shipping.firstName} {order.shipping.lastName}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.shipping.email}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {order.shipping.phone}
                    </p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Shipping Address</h4>
                    <p className="mt-1">{order.shipping.address}</p>
                    {order.shipping.apartment && (
                      <p>{order.shipping.apartment}</p>
                    )}
                    <p>
                      {order.shipping.city}, {order.shipping.state}{" "}
                      {order.shipping.zipCode}
                    </p>
                    <p>{order.shipping.country}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium">Shipping Method</h4>
                    <p className="text-sm text-muted-foreground">
                      {order.shipping.shippingMethod}
                    </p>
                  </div>
                  {order.shipping.specialInstructions && (
                    <div>
                      <h4 className="text-sm font-medium">
                        Special Instructions
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {order.shipping.specialInstructions}
                      </p>
                    </div>
                  )}
                </>
              ) : (
                <p>Shipping details have not been added for this order yet.</p>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Order Timeline / Messages</CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="px-6 py-4">
                <div className="relative pl-6 pb-2">
                  <div className="absolute left-0 top-2 h-4 w-4 rounded-full border-2 border-background bg-primary" />
                  <div>
                    <p className="font-medium flex items-center gap-1">
                      Current Status:{" "}
                      <span className="capitalize">
                        {order.status || "N/A"}
                      </span>
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {new Date(
                        order.updatedAt || order.createdAt || "N/A"
                      ).toLocaleString()}
                    </p>
                    {order.message && (
                      <p className="text-sm mt-1 break-all">
                        Last update: {order.message}
                      </p>
                    )}
                    {!order.message && order.status && (
                      <p className="text-sm mt-1">
                        No specific message for current status.
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
