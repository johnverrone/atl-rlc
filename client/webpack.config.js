var AureliaWebpackPlugin = require('aurelia-webpack-plugin');
module.exports = {
  entry: './src/main',
  output: {
    path: './dist',
    filename: 'bundle.js',
  },
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: "style!css" },
      { test: /\.json$/, loader: "json" },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
      { test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/, loader: "file-loader" }
    ]
  },
  plugins: [
    new AureliaWebpackPlugin()
  ],
  node: {
    fs: "empty"
  }
}