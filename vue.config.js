const ENV = process.env.NODE_ENV;
module.exports = {
  publicPath: ENV === "development" ? "" : "/tour/",
  css: {
    loaderOptions: {
      stylus: {
        'resolve url': true,
        'import': []
      }
    }
  },
  pluginOptions: {
    'cube-ui': {
      postCompile: false,
      theme: false
    }
  }
}
