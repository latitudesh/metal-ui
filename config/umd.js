"use strict";

const Webpack = require("webpack");
const { join, resolve } = require("path");

module.exports = {
  entry: join(__dirname, "..", "src", "index.js"),

  mode: "production",

  optimization: { minimizer: [] },

  output: {
    filename: "index.js",
    library: "metal-ui",
    libraryTarget: "umd",
    globalObject: "(typeof window !== 'undefined' ? window : this)",
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
    "@emotion/react": {
      root: "@emotion/react",
      commonjs2: "@emotion/react",
      commonjs: "@emotion/react",
      amd: "@emotion/react"
    },
    "@emotion/styled": {
      root: "@emotion/styled",
      commonjs2: "@emotion/styled",
      commonjs: "@emotion/styled",
      amd: "@emotion/styled"
    }
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        include: join(__dirname, "..", "src"),
        use: {
          loader: "babel-loader",
        },
      },
    ],
  },

  resolve: {
    alias: {
      react: require.resolve("react"),
    },
    modules: [resolve("node_modules"), "node_modules"],
    extensions: [".js", ".jsx"],
  },
};
