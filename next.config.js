module.exports = {
    reactStrictMode: true,
    webpack5: true,
    webpack: (config) => {
      config.resolve.fallback = {
        crypto: false,
        fs: false,
        os : false,
        http: false,
        https: false,
        stream: false,
        constants: false,
        path: false,
      };
  
      return config;
    },
  };
  