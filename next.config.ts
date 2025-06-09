import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  experimental: {
    turboMode: false, // Turbopack を無効化
  },
  reactStrictMode: true, // React Strict Mode を有効にする（推奨）
};

export default nextConfig;
