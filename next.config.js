/** @type {import('next').NextConfig} */

const SERVICE_KEY = process.env.SERVICE_KEY;
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["gocamping.or.kr", "localhost"],
  },
};

module.exports = nextConfig;
