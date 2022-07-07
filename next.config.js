/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
    async redirects() {
    return [
      {
        source: '/docs',
        destination: 'https://docs.ergonation.org/',
        permanent: false
      }
    ];
  },
}

module.exports = nextConfig
