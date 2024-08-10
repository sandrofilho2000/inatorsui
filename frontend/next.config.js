/** @type {import('next').NextConfig} */
const nextConfig = {
  // images: {
  //   domains: [
  //     "images.unsplash.com",
  //     "cdn.pixabay.com",
  //     "images.pexel.com",
  //     "source.unsplash.com",
  //   ],
  // },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
      },
    ],
    domains: ['localhost'],
  },
};

module.exports = nextConfig;
