import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,

  // Explicit webpack configuration for resolving paths
  webpack: (config) => {
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/app/components'),
      '@/app': path.resolve(__dirname, './src/app'),
    };
    return config;
  },
};

export default nextConfig;
