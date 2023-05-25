var path = require('path');

module.exports = {
  mode: 'development',
  devServer: {
    static: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [
        "style-loader",
        "fast-css-loader",
        { loader: "group-css-media-queries-loader", options: { sourceMap: false } },
        "fast-sass-loader"
      ]
    }]
  }
};