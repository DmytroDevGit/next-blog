import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: '',
        pathname: '/public/**/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
