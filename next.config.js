/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "assets.aceternity.com" },
    ],
    domains: [
      "api.microlink.io",
      "images.unsplash.com",
      "res.cloudinary.com",
      "www.youtube.com",
      "encrypted-tbn0.gstatic.com",
    ],
  },
};

module.exports = nextConfig;