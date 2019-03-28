const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist')
  },
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
