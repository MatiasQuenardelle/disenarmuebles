import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [80, 200],
    minimumCacheTTL: 31536000, // 1 year
  },
};

export default nextConfig;
