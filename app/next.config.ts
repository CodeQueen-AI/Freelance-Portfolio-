import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
  // Suppress Framer Motion / third-party ESM warnings during build
  serverExternalPackages: [],
};

export default nextConfig;
