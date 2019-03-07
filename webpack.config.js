const path = require('path');
const miniCssExtract = require('mini-css-extract-plugin');
const uglifyJS = require('uglifyjs-webpack-plugin');
const optimizeCSS = require('optimize-css-assets-webpack-plugin');
const browserSync = require('browser-sync-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js'
  },
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        enforce: 'pre',
        exclude: /node_modules/,
        test: /\.jsx$/,
        loader: 'eslint-loader'
      },
      {
        test: /\.jsx?$/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [miniCssExtract.loader, 'css-loader', 'sass-loader']
      },
      {
        test: /\.(jpe?g|png|gif)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              outputPath: 'images/',
              name: '[name].[ext]'
            }
          },
          'img-loader'
        ]
      }
    ]
  },
  plugins: [
    new miniCssExtract({ filename: '../style.css' }),
    new browserSync({
      files: '**/*.php',
      injectChanges: true,
      proxy: 'http://localhost:8888'
    })
  ],
  optimization: {
    minimizer: [new uglifyJS(), new optimizeCSS()]
  }
};
