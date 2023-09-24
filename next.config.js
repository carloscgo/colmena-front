/** @type {import('next').NextConfig} */
const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  async redirects() {
    return [
      {
        source: '/list',
        destination: '/listado',
        permanent: false,
      }
    ]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '*',
      },
    ],
  },
  serverRuntimeConfig: {
    URL_API: process.env.URL_API,
  },
};

module.exports = nextConfig;
