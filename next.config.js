/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    domains: ['cdni.iconscout.com']
  },
  // Ensure components are properly resolved
  webpack: (config) => {
    // Enhance module resolution with absolute paths
    config.resolve.modules.push(path.resolve('./src'));
    
    // Make webpack resolve these extensions
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', ...config.resolve.extensions];
    
    // Add alias for @ to point to src directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    // Force process.env to be available
    config.resolve.fallback = {
      ...config.resolve.fallback,
      fs: false,
      path: false,
      process: false
    };
    
    return config;
  },
  reactStrictMode: true,
  // Important: Ensure these packages are transpiled correctly
  transpilePackages: ['cmdk'],
  // Using correct experimental options for Next.js 15.x
  experimental: {
    typedRoutes: true
  }
};

module.exports = nextConfig;
