/* eslint-disable @typescript-eslint/no-unused-vars */
module.exports = {
  webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
    config.plugins.push(new webpack.IgnorePlugin(/\/__tests__\//));
    return config;
  },
};
