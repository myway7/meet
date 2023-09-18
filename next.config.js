/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: false,
  productionBrowserSourceMaps: true,
  webpack: (config, { buildId, dev, isServer, defaultLoaders, nextRuntime, webpack }) => {
    // Important: return the modified config
    config.module.rules = [
      ...config.module.rules,
      {
        test: /\.mjs$/,
        enforce: 'pre',
        use: ['source-map-loader'],
      },
    ];
    return config;
  },
  generateBuildId: async () => {
    // You can, for example, get the latest git commit hash here
    return 'v1'
  },
output: 'export',
distDir: 'dist',
};

module.exports = nextConfig;
