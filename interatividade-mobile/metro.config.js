const { getDefaultConfig } = require('@expo/metro-config');

const config = getDefaultConfig(__dirname);

config.server = {
  enhanceMiddleware: (middleware) => {
    return (req, res, next) => {
      // força o host para o IP do tailscale
      if (req.url.startsWith('/')) {
        req.headers.host = '100.115.95.116:19000'; // coloque o seu IP Tailscale
      }
      return middleware(req, res, next);
    };
  },
};

module.exports = config;
