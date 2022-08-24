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
        source: '/episodes/:slug([*^d*])',
        destination: '/episodes',
        permanent: true,
      },

      //  TODO: ...OTHER ROUTES REDIRECTION IMPLEMENTATION
    ]
  }
}

module.exports = nextConfig
