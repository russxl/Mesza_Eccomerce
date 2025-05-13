import { formatCurrencySigns } from "@/utils/formatToCurrency";
import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// Define types for order details
interface BaseOrderDetails {
  firstName: string;
  orderId: string;
}

interface OrderItem {
  name: string;
  quantity: number;
  price: number; // Unit price
  description?: string; // e.g., "Color: White, Desktop Color: Ebony Wallnut, Size: 140 x 60 cm"
  imageUrl?: string; // Optional, for future use if available
}

interface ShippingAddress {
  name: string;
  line1: string;
  line2?: string;
  city: string;
  state: string; // Or province
  postalCode: string;
  country: string;
}

interface OrderPlacedDetails extends BaseOrderDetails {
  cart?: OrderItem[];
  subtotal?: number; // Made optional
  shippingCost?: number; // Made optional
  total: number; // Grand total
  shippingAddress?: ShippingAddress;
  contactEmail: string;
  contactPhone: string;
}

interface OrderShippedDetails extends BaseOrderDetails {
  trackingNumber: string;
  carrier: string;
  trackingUrl: string;
}

interface OrderDeliveredDetails extends BaseOrderDetails {
  deliveryDate: string;
}

// Add type for Order Cancelled
interface OrderCancelledDetails extends BaseOrderDetails {
  // Add specific fields if needed in the future, e.g., reason, refund status
}

// Add type for Ready for Pickup
interface ReadyForPickupDetails extends BaseOrderDetails {
  pickupLocation: string;
  pickupHours: string;
  pickupInstructions?: string;
}

// Define template result type
interface EmailTemplate {
  subject: string;
  html: string;
}

// Email configuration
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
});

// Verify transporter configuration
transporter.verify(function (error) {
  if (error) {
    console.error("Email configuration error:", error);
  } 
});

// Email templates
const emailTemplates = {
  orderPlaced: (orderDetails: OrderPlacedDetails): EmailTemplate => ({
    subject: `Your Mesza Order #${orderDetails.orderId} is Confirmed!`,
    html: `
      <div style="font-family: Arial, 'Helvetica Neue', Helvetica, sans-serif; max-width: 600px; margin: 20px auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px; background-color: #ffffff; color: #333333;">
        <div style="text-align: center; margin-bottom: 25px; padding-bottom: 20px; border-bottom: 1px solid #eeeeee;">
          <!-- Consider adding a logo if available: <img src="YOUR_LOGO_URL" alt="Mesza Logo" style="max-width: 150px; margin-bottom: 10px;"> -->
          <h2 style="color: #2c3e50; margin: 0; font-size: 24px;">Thank You for Your Order, ${orderDetails.firstName}!</h2>
        </div>
        
        <p style="font-size: 16px; line-height: 1.6;">We're excited to let you know that your order (<strong>${orderDetails.orderId}</strong>) has been successfully placed. We're now preparing your items with care. Here's a summary of your purchase:</p>

        <div style="background-color: #f9f9f9; padding: 20px; border-radius: 8px; margin: 25px 0;">
          <h3 style="margin-top: 0; color: #333333; border-bottom: 1px solid #dddddd; padding-bottom: 10px; font-size: 20px;">Order Summary</h3>
          
          ${(orderDetails.cart || [])
            .map(
              (item: OrderItem) => `
            <div style="padding: 15px 0; border-bottom: 1px solid #eeeeee;">
              <table style="width:100%; border-collapse: collapse;">
                <tr>
                  ${item.imageUrl ? `<td style="width: 80px; padding-right: 15px; vertical-align: top;"><img src="${item.imageUrl}" alt="${item.name}" style="width: 70px; height: auto; border-radius: 6px; border: 1px solid #dddddd;"></td>` : ""}
                  <td style="vertical-align: top;">
                    <strong style="font-size: 16px; color: #34495e;">${item.name}</strong><br>
                    ${item.description ? `<span style="font-size: 14px; color: #555555; line-height: 1.5;">${item.description.replace(/\n/g, "<br>")}</span><br>` : ""}
                    <span style="font-size: 14px; color: #7f8c8d;">Qty: ${item.quantity}</span>
                  </td>
                  <td style="vertical-align: top; text-align: right; font-size: 16px; font-weight: bold; color: #2c3e50; white-space: nowrap;">
                    ${formatCurrencySigns(item.price * item.quantity)}
                  </td>
                </tr>
              </table>
            </div>
          `
            )
            .join("")}
          
          <div style="padding-top: 15px;">
            <table style="width:100%; font-size: 15px;">
              ${
                typeof orderDetails.subtotal === "number"
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #555555;">Subtotal:</td>
                <td style="text-align: right; padding: 8px 0; color: #333333;">${formatCurrencySigns(orderDetails.subtotal)}</td>
              </tr>
              `
                  : ""
              }
              ${
                typeof orderDetails.shippingCost === "number"
                  ? `
              <tr>
                <td style="padding: 8px 0; color: #555555;">Shipping:</td>
                <td style="text-align: right; padding: 8px 0; color: #333333;">${formatCurrencySigns(orderDetails.shippingCost)}</td>
              </tr>
              `
                  : ""
              }
              <tr style="border-top: 2px solid #dddddd;">
                <td style="padding: 12px 0; font-weight: bold; font-size: 18px; color: #2c3e50;">Total:</td>
                <td style="text-align: right; padding: 12px 0; font-weight: bold; font-size: 18px; color: #2c3e50;">
                  ${formatCurrencySigns(orderDetails.total)}
                </td>
              </tr>
            </table>
          </div>
        </div>

        ${
          orderDetails.shippingAddress ||
          orderDetails.contactEmail ||
          orderDetails.contactPhone
            ? `
        <table style="width:100%; margin: 25px 0; border-collapse: collapse;">
          <tr>
            ${
              orderDetails.shippingAddress
                ? `
            <td style="vertical-align: top; padding-right: 10px; width: ${orderDetails.contactEmail || orderDetails.contactPhone ? "50%" : "100%"};">
              <h3 style="color: #333333; border-bottom: 1px solid #dddddd; padding-bottom: 10px; font-size: 18px; margin-top:0;">Shipping Address</h3>
              <p style="margin: 5px 0; line-height: 1.7; font-size: 14px; color: #555555;">
                ${orderDetails.shippingAddress.name}<br>
                ${orderDetails.shippingAddress.line1}<br>
                ${orderDetails.shippingAddress.line2 ? `${orderDetails.shippingAddress.line2}<br>` : ""}
                ${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.state} ${orderDetails.shippingAddress.postalCode}<br>
                ${orderDetails.shippingAddress.country}
              </p>
            </td>
            `
                : ""
            }
            ${
              orderDetails.contactEmail || orderDetails.contactPhone
                ? `
            <td style="vertical-align: top; padding-left: ${orderDetails.shippingAddress ? "10px" : "0"}; width: ${orderDetails.shippingAddress ? "50%" : "100%"};">
              <h3 style="color: #333333; border-bottom: 1px solid #dddddd; padding-bottom: 10px; font-size: 18px; margin-top:0;">Contact Information</h3>
              <p style="margin: 5px 0; line-height: 1.7; font-size: 14px; color: #555555;">
                ${orderDetails.contactEmail ? `Email: <a href="mailto:${orderDetails.contactEmail}" style="color: #3498db; text-decoration: none;">${orderDetails.contactEmail}</a><br>` : ""}
                ${orderDetails.contactPhone ? `Phone: ${orderDetails.contactPhone}` : ""}
              </p>
            </td>
            `
                : ""
            }
          </tr>
        </table>
        `
            : ""
        }
        
        <div style="margin-top: 25px; padding-top: 20px; border-top: 1px solid #eeeeee;">
          <h3 style="color: #333333; font-size: 18px;">What's Next?</h3>
          <ol style="padding-left: 20px; font-size: 15px; line-height: 1.7; color: #555555;">
            <li>If your payment is pending, please complete it at your earliest convenience.</li>
            <li>We'll carefully pack your items and prepare them for shipment.</li>
            <li>You'll receive another email with tracking information as soon as your order is on its way.</li>
          </ol>
        </div>

        <p style="margin-top: 30px; font-size: 15px; line-height: 1.6; color: #555555;">If you have any questions, need to make changes, or just want to say hi, please don't hesitate to contact our support team. Kindly include your order ID <strong>#${orderDetails.orderId}</strong> in any communication.</p>
        
        <div style="margin-top: 30px; padding-top: 20px; text-align: center; color: #888888; font-size: 13px; border-top: 1px solid #eeeeee;">
          <p style="margin: 5px 0;">Thank you for choosing Mesza!</p>
          <p style="margin: 5px 0;">The Mesza Team</p>
          <!-- Optional: Add website link or social media icons -->
          <!-- <p style="margin: 10px 0;"><a href="YOUR_WEBSITE_URL" style="color: #3498db; text-decoration: none;">Visit our website</a></p> -->
        </div>
      </div>
    `,
  }),

  readyForPickup: (orderDetails: ReadyForPickupDetails): EmailTemplate => ({
    subject: `Your Mesza Order #${orderDetails.orderId} is Ready for Pickup`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #4CAF50;">Your Order is Ready for Pickup!</h2>
        <p>Dear ${orderDetails.firstName},</p>
        <p>Great news! Your order <strong>#${orderDetails.orderId}</strong> is now ready for pickup.</p>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Pickup Details:</h3>
          <p><strong>Order ID:</strong> ${orderDetails.orderId}</p>
          <p><strong>Pickup Location:</strong> ${orderDetails.pickupLocation}</p>
          <p><strong>Hours:</strong> ${orderDetails.pickupHours}</p>
          ${orderDetails.pickupInstructions ? `<p><strong>Instructions:</strong> ${orderDetails.pickupInstructions}</p>` : ''}
        </div>
        <p>Please bring a valid ID when you pick up your order. Your order will be held for 5 days. If you're unable to pick up your order during this time, please contact us to make alternative arrangements.</p>
        <p>Thank you for shopping with Mesza!</p>
        <p>Best regards,<br>The Mesza Team</p>
      </div>
    `,
  }),

  orderShipped: (orderDetails: OrderShippedDetails): EmailTemplate => ({
    subject: "Your Order Has Been Shipped - Mesza",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Your Order is on the Way!</h2>
        <p>Dear ${orderDetails.firstName},</p>
        <p>Great news! Your order has been shipped and is on its way to you.</p>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Shipping Details:</h3>
          <p><strong>Order ID:</strong> ${orderDetails.orderId}</p>
          <p><strong>Tracking Number:</strong> ${orderDetails.trackingNumber}</p>
        </div>
        <p>You can track your package using the tracking number above.</p>
        <a href="${orderDetails.trackingUrl}" 
           style="display: inline-block; background: #4CAF50; color: white; padding: 12px 24px; text-decoration: none; border-radius: 5px; margin: 20px 0;">
          Track Your Package
        </a>
        <p>Best regards,<br>The Mesza Team</p>
      </div>
    `,
  }),

  orderDelivered: (orderDetails: OrderDeliveredDetails): EmailTemplate => ({
    subject: "Your Order Has Been Delivered - Mesza",
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #333;">Your Order Has Been Delivered!</h2>
        <p>Dear ${orderDetails.firstName},</p>
        <p>Your order has been successfully delivered.</p>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Delivery Details:</h3>
          <p><strong>Order ID:</strong> ${orderDetails.orderId}</p>
          <p><strong>Delivery Date:</strong> ${orderDetails.deliveryDate}</p>
        </div>
        <p>We hope you love your purchase! If you have any questions or need assistance, please don't hesitate to contact us.</p>
        <p>Best regards,<br>The Mesza Team</p>
      </div>
    `,
  }),

  orderCancelled: (orderDetails: OrderCancelledDetails): EmailTemplate => ({
    subject: `Your Mesza Order #${orderDetails.orderId} Has Been Cancelled`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 8px;">
        <h2 style="color: #c0392b;">Order Cancellation Confirmation</h2>
        <p>Dear ${orderDetails.firstName},</p>
        <p>We are writing to confirm that your order <strong>#${orderDetails.orderId}</strong> has been cancelled as requested or due to unforeseen circumstances.</p>
        <div style="background: #f9f9f9; padding: 20px; border-radius: 5px; margin: 20px 0;">
          <h3 style="margin-top: 0;">Order Details:</h3>
          <p><strong>Order ID:</strong> ${orderDetails.orderId}</p>
        </div>
        <p>If a payment was made, a refund will be processed according to our policy. Please allow 5-7 business days for the refund to reflect in your account. If you did not request this cancellation or have any questions, please contact our support team immediately.</p>
        <p>We apologize for any inconvenience this may have caused.</p>
        <p>Sincerely,<br>The Mesza Team</p>
      </div>
    `,
  }),
};

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { type, recipientEmail, orderDetails } = body;

    // Validate required fields
    if (!type || !recipientEmail || !orderDetails) {
      console.error("Missing required fields:", {
        type,
        recipientEmail,
        orderDetails,
      });
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Validate email type
    if (!emailTemplates[type as keyof typeof emailTemplates]) {
      console.error("Invalid email type:", type);
      return NextResponse.json(
        { error: "Invalid email type" },
        { status: 400 }
      );
    }

    // Validate email configuration
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error("Missing email configuration:", {
        hasGmailUser: !!process.env.GMAIL_USER,
        hasGmailAppPassword: !!process.env.GMAIL_APP_PASSWORD,
      });
      return NextResponse.json(
        { error: "Email service not configured" },
        { status: 500 }
      );
    }

    // Get the email template
    const template =
      emailTemplates[type as keyof typeof emailTemplates](orderDetails);

    // Send the email
    const info = await transporter.sendMail({
      from: process.env.SMTP_FROM_EMAIL,
      to: recipientEmail,
      subject: template.subject,
      html: template.html,
    });

   

    return NextResponse.json(
      { success: true, messageId: info.messageId },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", {
      error: error instanceof Error ? error.message : "Unknown error",
      stack: error instanceof Error ? error.stack : undefined,
      type: error instanceof Error ? error.name : typeof error,
    });

    // Return a more specific error message based on the error type
    if (error instanceof Error) {
      if (error.message.includes("Invalid login")) {
        return NextResponse.json(
          { error: "Invalid email credentials" },
          { status: 401 }
        );
      }
      if (error.message.includes("ENOTFOUND")) {
        return NextResponse.json(
          { error: "Email service not available" },
          { status: 503 }
        );
      }
    }

    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
