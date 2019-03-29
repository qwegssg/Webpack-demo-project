const path = require('path');
const common = require('./webpack.common');
const CleanWebpackPlugin = require("clean-webpack-plugin");
const merge = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  }
});
