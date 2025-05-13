type EmailType =
  | "orderPlaced"
  | "orderShipped"
  | "orderDelivered"
  | "orderCancelled"
  | "readyForPickup";

// Interface for items in the cart, compatible with app/api/email/route.ts's OrderItem
interface CartItem {
  name: string;
  quantity: number;
  price: number; // Unit price
  description?: string; // Optional, may not be available from all call sites
  imageUrl?: string; // Optional, may not be available from all call sites
}

// Interface for shipping address, compatible with app/api/email/route.ts's ShippingAddress
interface ShippingAddressStructure {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string;
  postalCode: string;
  country: string;
}

interface OrderDetails {
  // Common fields required for most emails
  firstName: string;
  orderId: string;

  // Fields for 'orderPlaced'
  total?: number; // Grand total
  cart?: CartItem[];
  subtotal?: number;
  shippingCost?: number;
  contactEmail?: string;
  contactPhone?: string;
  shippingAddress?: ShippingAddressStructure;

  // Fields for 'orderShipped'
  trackingNumber?: string;
  carrier?: string;
  trackingUrl?: string;

  // Fields for 'orderDelivered'
  deliveryDate?: string;
  
  // Fields for 'readyForPickup'
  pickupLocation?: string;
  pickupHours?: string;
  pickupInstructions?: string;

  // Note: Not all fields will be present for every EmailType.
  // The backend /api/email should handle the specific fields it needs for a given type.
}

export async function sendEmail(
  type: EmailType,
  recipientEmail: string,
  orderDetails: OrderDetails
) {
  try {
    const response = await fetch("/api/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        type,
        recipientEmail,
        orderDetails,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || "Failed to send email");
    }

    return data;
  } catch (error) {
    console.error("Error sending email:", error);
    throw error;
  }
}
