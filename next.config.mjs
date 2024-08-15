/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fakestoreapi.com",
      },
      {
        protocol: "https",
        hostname: "www.rws.com",
      },
    ],
    //domains: ["fakestoreapi.com", "https://www.rws.com"],
  },
};

export default nextConfig;
