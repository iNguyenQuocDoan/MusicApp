import type { NextConfig } from "next";
import path from "path";

/**
 * Cấu hình Next.js theo hướng dẫn của Vercel để tránh lỗi module not found
 * 
 * @see https://nextjs.org/docs/messages/module-not-found
 */
const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: false,

  // Explicit webpack configuration for resolving paths
  webpack: (config) => {
    // Lưu trữ aliases hiện tại
    const aliases = config.resolve.alias || {};

    // Cập nhật aliases
    config.resolve.alias = {
      ...aliases,
      '@': path.resolve(__dirname, 'src'),
      '@/components': path.resolve(__dirname, 'src/app/components'),
      '@/app': path.resolve(__dirname, 'src/app'),
    };

    return config;
  },
};

export default nextConfig;
