/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'images.pexels.com'],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
      {
        protocol: 'https',
        hostname: 'images.pexels.com',
      },
    ],
  },
  experimental: {
    serverActions: true,
  },
  env: {
  NEXT_PUBLIC_SANITY_PROJECT_ID: process.env.SANITY_PROJECT_ID,
  NEXT_PUBLIC_SANITY_DATASET: process.env.SANITY_DATASET,
  NEXT_PUBLIC_SANITY_API_VERSION: process.env.SANITY_API_VERSION,
  },
}

module.exports = nextConfig
