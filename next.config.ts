import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  /* config options here */

  webpack: (config) => {
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    config.resolve.alias['@/components'] = path.resolve(__dirname, 'src/app/components');
    return config;
  },

  reactStrictMode: false
};

export default nextConfig;
