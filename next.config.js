/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      'localhost', 
      'files.edgestore.dev',
      'www.google.com',
      'edgestore.dev',
      'images.unsplash.com',
      'avatars.githubusercontent.com',
      'lh3.googleusercontent.com',
      'platform-lookaside.fbsbx.com',
      'picsum.photos'
    ],
  },
  // For newer Next.js versions
  serverExternalPackages: ["@clerk/backend"]
};

module.exports = nextConfig;