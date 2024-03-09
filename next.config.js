/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  pageExtensions: ['ts', 'tsx', 'js', 'jsx', 'mdx'],
  experimental: {
    mdxRs: false,
    webpackBuildWorker: true,
  },
  compiler: {
    styledComponents: {
      // Enabled by default in development, disabled in production to reduce file size,
      // setting this will override the default for all environments.
      // displayName?: boolean,
      // Enabled by default.
      ssr: true,
      // Enabled by default.
      //fileName?: boolean,
      // Empty by default.
      //topLevelImportPaths?: string[],
      // Defaults to ["index"].
      //meaninglessFileNames?: string[],
      // Enabled by default.
      //cssProp?: boolean,
      // Empty by default.
      //namespace?: string,
      // Not supported yet.
      //minify?: boolean,
      // Not supported yet.
      //transpileTemplateLiterals?: boolean,
      // Not supported yet.
      //pure?: boolean,
    },
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: ['@svgr/webpack'],
    });
    return config;
  },
};

module.exports = nextConfig;
