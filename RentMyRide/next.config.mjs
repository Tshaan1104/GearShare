/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "static.vecteezy.com",
        protocol: "https",
        port: "",
      },
      
    ],
  },
};

export default nextConfig;
