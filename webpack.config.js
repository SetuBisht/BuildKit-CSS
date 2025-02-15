const path = require("path");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const webpack = require("webpack");
const generateSassVars = require("./src/generateSassVars.js");

// Import your structure config
let config = {};
try {
  config = require("./buildkit.config.js");
} catch (error) {
  console.warn("buildkit.config.js not found. Using default configuration.");
}

module.exports = {
  mode: "production", // Change to 'development' if debugging
  entry: {
    main: "./src/index.js", // Entry point for JS
    styles: "./src/styles.scss", // Entry point for SCSS
  },
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js", // Bundled JS file
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          "css-loader",
          {
            loader: "sass-loader",
            options: {
              additionalData: (content) => {
                const sassVars =
                  config && Object.keys(config).length > 0
                    ? generateSassVars(config)
                    : "";
                return sassVars + content;
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: "buildKit.css", // Compiled CSS output
    }),
    // Inject the config values into SCSS
    new webpack.DefinePlugin({
      "process.env.SASS_SPACING_VALUES": JSON.stringify(config.spacingValues),
    }),
  ],
  devServer: {
    static: path.resolve(__dirname, "dist"),
    port: 3000,
    open: true,
    hot: true,
  },
};
