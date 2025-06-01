/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true
  },
  // Ensure components are properly resolved
  webpack: (config) => {
    // Enhance module resolution with absolute paths
    config.resolve.modules.push(path.resolve('./src'));
    
    // Make webpack resolve these extensions
    config.resolve.extensions = ['.js', '.jsx', '.ts', '.tsx', ...config.resolve.extensions];
    
    // Add alias for @ to point to src directory
    config.resolve.alias['@'] = path.resolve(__dirname, 'src');
    
    return config;
  },
  reactStrictMode: true,
  // Using correct experimental options for Next.js 15.x
  experimental: {
    typedRoutes: true
  }
};

module.exports = nextConfig;
