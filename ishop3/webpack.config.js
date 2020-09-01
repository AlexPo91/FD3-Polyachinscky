const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");

module.exports = {
  entry: "./index.js",
  output: {
    path: __dirname,
    filename: "bundle.js",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css",
    }),
  ],
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: "babel-loader" },

      {
        test: /\.scss$/,
        use: [
          // { loader: "style-loader" },
          { loader: MiniCssExtractPlugin.loader },
          { loader: "css-loader" },
          { loader: "sass-loader" },
        ],
      },
    ],
  },
};
