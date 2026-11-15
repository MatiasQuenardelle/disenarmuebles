import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Serve images as-is instead of through Vercel's Image Optimization. The Hobby plan's
    // monthly transformation quota ran out (each image × width × format counts), and once it
    // does, every uncached /_next/image request returns 402 and the image doesn't show.
    // Local photos are pre-sized to 1600px by scripts/optimize-images.sh.
    unoptimized: true,
  },
};

export default nextConfig;
