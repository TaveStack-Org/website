/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  // Ensure components are properly resolved
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
  transpilePackages: [],
  reactStrictMode: true,
  // Important for resolving @/ paths in deployment
  experimental: {
    typedRoutes: true,
    serverComponentsExternalPackages: []
  }
};

module.exports = nextConfig;
