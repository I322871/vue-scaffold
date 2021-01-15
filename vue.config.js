module.exports = {
  devServer: {
    disableHostCheck: true,
    proxy: {
      "/api": {
        target: "http://localhost:3000",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": "http://localhost:3000"
        }
      },
    }
  },
  transpileDependencies: ["vuetify"],
  configureWebpack: {
    devtool: "source-map"
  }
};
