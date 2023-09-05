/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    appDir: true,
    mdxRs: false,
  },
  reactStrictMode: true,
};

module.exports = nextConfig;
