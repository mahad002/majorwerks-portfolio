/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['images.pexels.com'],
  },
  // Enable static exports
  output: 'export',
  // Disable server-side features since we're using static export
  trailingSlash: true,
  // Configure base path if needed
  basePath: '',
  // Configure asset prefix if needed
  assetPrefix: '',
}

module.exports = nextConfig 