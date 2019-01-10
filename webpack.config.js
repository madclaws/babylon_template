var path = require('path');
module.exports = {
  entry: {
      app: './src/index.ts'
  },
  output: {
      path: path.resolve(__dirname, 'dist'),
      filename: 'game.js'
  },
  resolve: {
      extensions: ['.ts', '.tsx', '.js']
  },
  devtool: 'source-map',
  plugins: [

  ],
  module: {
      rules: [{
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/
      }]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './'),
    publicPath: '/dist/',
    host: '127.0.0.1',
    port: 8082,
    open: true
  },
  externals: {
    "oimo": true,
    "earcut": true,
    "cannon":true
  },
  mode:"development"
}