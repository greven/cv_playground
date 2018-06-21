var path = require('path')

module.exports = {
  configureWebpack: {
    output: {
      path: path.resolve(__dirname, './dist'),
      publicPath: '/cv_playground/'
    },
    devtool: 'sourcemap'
  }
}
