/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ["three"],
  experimental: {
    inlineCss: true,
  },
  typescript:{
    ignoreBuildErrors:true
  }
};

module.exports = nextConfig;
