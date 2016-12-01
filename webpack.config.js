var webpack = require("webpack")
var path = require("path")

module.exports = {
  entry: {
    app: "./src/app.jsx",
  },
  output: {
    path: path.join(__dirname),
    filename: "[name].js",
  },
  plugins: [
    new webpack.DefinePlugin({
      __DEV__: true,
    }),
  ],
  resolve: {
    root: [
      path.resolve(__dirname),
      path.join(__dirname, "_common"),
    ],
    extensions: ["", ".jsx", ".js", ".styl", ".json"],
  },
  module: {
    loaders: [
      {
        test: /\.jsx$/,
        loader: "babel?cacheDirectory=true&presets[]=es2015&presets[]=stage-0&presets[]=react",
        exclude: /node_modules/,
      },
      {
        test: /\.js$/,
        loader: "babel",
        query: {
          cacheDirectory: true,
          presets: ["es2015"],
        },
        loader: "babel",
        exclude: /node_modules/,
      },
      {
        test: /\.styl$/,
        loader: "style!css!stylus",
      },
    ],
  },
}
