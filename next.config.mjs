/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "m.media-amazon.com" },
      { protocol: "https", hostname: "www.thehimalayanorganics.in" },
      { protocol: "https", hostname: "lm25aarogyaindia.com" },
    ],
  },
};

export default nextConfig;
