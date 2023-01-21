const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {
  app.use(
    createProxyMiddleware("/payment/token", {
      target: "https://payment.yamuzin.net",
      changeOrigin: true,
    })
  );
  app.use(
    createProxyMiddleware("/payment/find", {
      target: "https://payment.yamuzin.net",
      changeOrigin: true,
    })
  );
};
