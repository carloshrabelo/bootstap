var path = require('path');
// var MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  entry: './src/app.js',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  // plugins: [ new MiniCssExtractPlugin({ filename: '[name].css' })],
  module: {
    rules: [{
      test: /\.(scss)$/,
      use: [
        {
          loader: 'style-loader'
        },
        // {
        //   loader: MiniCssExtractPlugin.loader
        // },
        {
          loader: 'fast-css-loader'
        },
        {
          loader: 'group-css-media-queries-loader',
          options: {
              sourceMap: false
          }
      }, {
          loader: 'postcss-loader',
        },
        {
          loader: 'fast-sass-loader'
        }
      ]
    }]
  }
};