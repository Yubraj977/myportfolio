/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
      remotePatterns: [
        {
          protocol: 'https',
          hostname: 'assets.aceternity.com',
        },
      ],
      domains:["api.microlink.io","images.unsplash.com","res.cloudinary.com","www.youtube.com","encrypted-tbn0.gstatic.com"]
    },
  };
  
  module.exports = nextConfig;