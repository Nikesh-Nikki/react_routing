const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
entry: './src/index.js',
output: {
  path: path.join(__dirname, '/dist/'),
  filename: '[name].js'
},
mode: 'development',
devtool: 'inline-source-map',
devServer: {
    static: './dist',
  },
module: {
  rules: [
    {
      test: /.(js|jsx)$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react']
        }
      }
    }
  ]
},
plugins: [
  new HtmlWebpackPlugin({
    template: './src/index.html',
    title : 'Development',
  })
],
devServer: {
  port: 3000,
  open: true,
  hot: true
},
optimization: {
    runtimeChunk: 'single',
  },
};