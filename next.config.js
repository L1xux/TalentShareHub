/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  images: {
    loader: "akamai",
    path: "./src/app/_lib/loader/imageLoader.ts",
  },
  swcMinify: true,
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
