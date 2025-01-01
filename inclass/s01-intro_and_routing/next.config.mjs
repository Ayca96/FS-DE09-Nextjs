/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        hostname: "clarusway.com",
      },
    ],
  },
};

export default nextConfig;
