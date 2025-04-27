# Mesza E-commerce (https://mesza-web.vercel.app) 

A modern e-commerce platform for premium standing desks, built with Next.js, TypeScript, and Tailwind CSS.

## Features

- **Product Catalog**: Browse and search for standing desks with detailed product pages
- **Shopping Cart**: Add products to cart with quantity selection and variation options
- **Checkout Process**: Streamlined checkout with shipping and payment options
- **User Authentication**: Secure sign-up, login, and account management
- **Admin Dashboard**: Manage products, orders, and customer data
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Dark Mode**: Toggle between light and dark themes

## Tech Stack

- **Frontend**: Next.js 15, React 19, TypeScript
- **Styling**: Tailwind CSS, shadcn/ui components
- **State Management**: Zustand, React Query
- **Authentication**: Clerk
- **Database**: Convex
- **File Storage**: EdgeStore
- **Form Handling**: React Hook Form, Zod validation

## Getting Started

### Prerequisites

- Node.js 18.17 or later
- pnpm (recommended) or npm

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/mesza-app.git
   cd mesza-app
   ```

2. Install dependencies:

   ```bash
   pnpm install
   # or
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following variables:

   ```
   NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
   CLERK_SECRET_KEY=your_clerk_secret_key
   NEXT_PUBLIC_BASE_URL=http://localhost:3000
   ```

4. Start the development server:

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

- `app/`: Next.js app router pages and layouts
- `components/`: Reusable UI components
- `store/`: Zustand state management
- `types/`: TypeScript type definitions
- `public/`: Static assets
- `schema/`: Zod validation schemas
- `lib/`: Utility functions and helpers
- `convex/`: Convex database schema and functions

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme).

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [shadcn/ui](https://ui.shadcn.com/) for the beautiful UI components
- [Clerk](https://clerk.com/) for authentication
- [Convex](https://www.convex.dev/) for the database
- [EdgeStore](https://edgestore.dev/) for file storage

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
#
