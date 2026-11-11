import type { NextConfig } from "next";
import path from "path";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath: "/beatside",
  images: { unoptimized: true },
  turbopack: {
    root: path.resolve(__dirname),
  },
};

export default nextConfig;