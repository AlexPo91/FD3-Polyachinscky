const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devtool: 'source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'bundle.css',
    }),
    new HtmlWebpackPlugin({
      template: './index.html',
    })],
  module: {
    rules:
        [
          { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
          {
            test: /\.css$/,
            use: [
              {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: path.resolve(__dirname, 'dist'),
                },
              },
              'css-loader',
            ],
          },
        ],
  },
};
