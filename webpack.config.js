const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  mode: 'development',
  output: {
    filename: 'main.[contentHash].js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/template.html'
    })
],
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "style-loader", // 3. creates style nodes from JS strings
          "css-loader", // 2. translates CSS into CommonJS
          "sass-loader" // 1. compiles Sass to CSS, using Node Sass by default
      ]
      },
    ]
  }
};
