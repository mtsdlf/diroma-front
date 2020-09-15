module.exports = {
  devServer: {
    proxy: {
      "/": {
        target: "http://104.248.7.235:3000",
        ws: true,
        changeOrigin: true
      }
    }
  }
};
