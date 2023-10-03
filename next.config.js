/** @type {import('next').NextConfig} */

const nextConfig = {
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  swcMinify: true,
  trailingSlash: true,
  output: 'export',
};

module.exports = nextConfig;