/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['rickandmortyapi.com']
  },
  async redirects(){
    return [
      {
        source: '/',
        destination: '/episodes',
        permanent: true,
      },
      {
        source: '/episodes/:slug(\\D{1,})',
        destination: '/episodes',
        permanent: true,
      },
    ]
  }
}

module.exports = nextConfig
