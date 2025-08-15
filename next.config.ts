import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export", // enables next export
  images: {
    unoptimized: true, // needed for GitHub Pages image compatibility
  },
  basePath: "/tx-body", // important if your repo is not root
  assetPrefix: "/tx-body/",
};

export default nextConfig;
