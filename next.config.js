const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})


/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    domains: ['cdn.akamai.steamstatic.com']
  },
  async redirects() {
    return [
      {
        source: '/products',
        destination: '/',
        permanent: false,
      },
    ]
  }
})

module.exports = nextConfig
