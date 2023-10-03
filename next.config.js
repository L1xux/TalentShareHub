/** @type {import('next').NextConfig} */

const nextConfig = {
  trailingSlash: true,
  experimental: {
    appDir: true,
    serverActions: true,
  },
  images: {
    loader: "akamai",
    path: "/",
  },
  swcMinify: true,
  trailingSlash: true,
  output: "export",
};

module.exports = nextConfig;
