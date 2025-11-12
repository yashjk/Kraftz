import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [new URL("https://moonlit-nextjs.netlify.app/assets/**")],
  },
};

export default nextConfig;
