/**
 *  @type { import('next').NextConfig}
 *  */

const nextConfig = {
  webpack: function (config, options) {
    config.experiments = {};
    return config;
  },
};

export default nextConfig;
