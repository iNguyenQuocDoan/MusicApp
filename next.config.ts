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

  // Cấu hình cho hình ảnh từ domain bên ngoài
  images: {
    domains: [
      'backend.daca.vn',
      'i.ytimg.com',
      'www.samplelib.com',
      'tse1.mm.bing.net',
      'tse2.mm.bing.net',
      'tse4.mm.bing.net',
      'th.bing.com',
      'static.tuoitre.vn',
      'nguoinoitieng.tv',
      'kenh14cdn.com',
      'musicshow.vn'
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

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
