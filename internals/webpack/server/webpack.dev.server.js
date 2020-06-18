const path = require("path");
const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");

const alias = require("./../alias");
const rules = require("./rules");

const nodeConf = {
      target: "node",
      entry: "./server.js",
      output: {
            path: path.resolve("build"),
            filename: "server.js",
            library: "app",
            libraryTarget: "commonjs2",
            publicPath: "/",
      },
      module: {
            rules,
      },
      plugins: [new CopyWebpackPlugin([{ from: "app/static/**", to: "." }])],
      resolve: {
            alias,
            modules: [
                  path.resolve("./app"),
                  path.resolve(process.cwd(), "node_modules"),
            ],
            extensions: [".js", ".jsx", ".react.js"],
            mainFields: ["browser", "jsnext:main", "main"],
      },
};

const browserConf = require("../client/webpack.dev.babel");

module.exports = [browserConf, nodeConf];
