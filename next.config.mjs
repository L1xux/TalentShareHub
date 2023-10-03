/**
* @type {import('next').NextConfig}
*/
const nextConfig = {
  images: {
    loader: 'akamai',
    path: '',
  },
  compiler: {
    styledComponents: true,
  },
  experimental: {
    appDir: true,
  },
  assetPrefix: './',
  swcMinify: true,

};

export default nextConfig;