var debug = process.env.NODE_ENV !== "production";
var path = require('path')

var DIST_DIR = path.resolve(__dirname, 'dist')
var SRC_DIR = path.resolve(__dirname, 'src')

var config = {
  devtool: debug ? "inline-sourcemap" : null,
  entry: SRC_DIR + '/app/index.js',
  output: {
    path: DIST_DIR + '/app',
    filename: 'bundle.js',
    publicPath: '/app'
  },
  module: {
    loaders: [
      {
        test: /\.js?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-2'],
          plugins:['react-html-attrs', 'transform-decorators-legacy','transform-class-properties']
        }
      },
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/,
        exclude: /node_modules/,
        loader: "style!css!less" }
    ]
  },
  plugins: debug ? [] : [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
  ]
}

module.exports = config;
