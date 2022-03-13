/** @type {import('next').NextConfig} */
const nextConfig = {
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
}

module.exports = nextConfig
