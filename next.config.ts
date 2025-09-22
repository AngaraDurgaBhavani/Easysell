import type { NextConfig } from "next";

const nextConfig: NextConfig = {

  images: {
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: '',
      //   pathname: '/**',
      // },
      {
        protocol: 'https',
        hostname: 'saduhergmlucssvnkfqc.supabase.co',
        pathname: '/storage/v1/object/public/storage/**',
      },
    ],
  },
  

  experimental: {
    serverActions: {
      bodySizeLimit: '20mb',
    },
  },



};

export default nextConfig;



