const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const GoogleFontsPlugin = require("@beyonk/google-fonts-webpack-plugin");

module.exports = {
  mode: "development",
  devtool: "inline-source-map",
  entry: "./src/index.js",
  output: {
    filename: "[name]-[chunkhash].js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  devServer: {
    contentBase: "./dist",
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          "vue-style-loader",
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              esModule: false,
            },
          },
          // "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
            },
          },
          "resolve-url-loader",
          {
            loader: "sass-loader",
            options: {
              sourceMap: true,
            },
          },
        ],
      },
      {
        test: /\.vue$/,
        use: ["vue-loader"],
      },
      {
        test: /\.js/,
        use: ["babel-loader"],
        exclude: (file) => /node_modules/.test(file) && !/\.vue\.js/.test(file),
      },
      {
        test: /\.ejs$/,
        use: [
          "html-loader", // loader for html files goes here
          "ejs-plain-loader",
        ],
      },
      {
        test: /\.(png|svg|jpe?g|gif)$/,
        type: "asset/resource",
        generator: {
          filename: "./assets/images/[name]-[contenthash].[ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.ejs",
      filename: "index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/demo/index.ejs",
      filename: "pages/demo/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/news/index.ejs",
      filename: "pages/news/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/news/1/index.ejs",
      filename: "pages/news/1/index.html",
      inject: "body",
    }),
    new HtmlWebpackPlugin({
      template: "./src/pages/museum/index.ejs",
      filename: "pages/museum/index.html",
      inject: "body",
    }),
    new VueLoaderPlugin(),
    new MiniCssExtractPlugin({
      filename: "style.css",
    }),
    new GoogleFontsPlugin({
      fonts: [
        { family: "Source Sans Pro" },
        { family: "Roboto", variants: ["400", "700"] },
      ],
      /* ...options */
    }),
  ],
  // ES5(IE11等)向けの指定（webpack 5以上で必要）
  target: ["web", "es5"],
};