/**
 * Shared Webpack Config
 */
const path = require('path');

const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {

  entry: {
    global: './src/js/global.js',
    example: './src/js/example.js',
  },

  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist')
  },

  optimization: {
    splitChunks: { chunks: 'all' }
  },

  module: {
    rules: [
      // Scripts
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      // Styles
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: { minimize: true || { discardComments: { removeAll: true } }}
          },
          'postcss-loader',
          'sass-loader'
        ]
      }
    ]
  },

  // Plugins
  // - configure optimizations in environment-specific configs, not here
  // - define environment variables here from 'site' JSON
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(['dist']),
    new CopyWebpackPlugin([
      { from: './src/public/fonts', to: './fonts' },
      { from: './src/public/images', to: './images' }
    ])
  ]

};