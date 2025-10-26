import withPWAInit from "@ducanh2912/next-pwa";
import type { NextConfig } from "next";

const withPWA = withPWAInit({
  dest: "public", // where the service worker and other PWA assets will be generated
});

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["m.media-amazon.com"], // allow loading images from this domain
  },
};

export default withPWA({
  ...nextConfig,
});
