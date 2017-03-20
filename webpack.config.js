const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const dist = path.join(__dirname, 'dist');

module.exports = {
  context: path.join(__dirname, 'src'),
  entry: {
    app: './app.js',
    worker: './worker.js'
  },
  output: {
    path: dist,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ]
  },
  devServer: {
    contentBase: dist,
    compress: true,
    port: 5000
  },
  watch: true,
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.ejs',
      title: 'Nginx Log Parser',
      chunks: ['app']
    })
  ],
  resolve : {
    extensions: ['.js', '.jsx']
  }
};
