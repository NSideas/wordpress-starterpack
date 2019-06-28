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
        test: /\.js$/,
        enforce: 'pre',
        exclude: /node_modules/,
        loader: 'eslint-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.s?css$/,
        use: [
          miniCssExtract.loader,
          {
            loader: 'css-loader',
            options: { sourceMap: true }
          },
          {
            loader: 'sass-loader',
            options: { sourceMap: true }
          }
        ]
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
      proxy: 'http://starterpack.local'
    })
  ],
  optimization: {
    namedModules: true,
    minimizer: [
      new uglifyJS({
        sourceMap: true
      }),
      new optimizeCSS()
    ]
  }
};
