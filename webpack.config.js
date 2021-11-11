const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const CopyWebpackPlugin = require("copy-webpack-plugin");

module.exports = {
  entry: "./dist/js/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build/app"),
    clean: true,
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      hash: true,
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./dist/css",
          to: "css",
        },
        {
          from: "./assets",
          to: "assets",
        },
        {
          from: "./data",
          to: "data",
        },
      ],
    }),
  ],
};
