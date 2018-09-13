/**
 * Development Webpack Config
 */

const merge = require('webpack-merge');
const common = require('./webpack.common.js');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  plugins: [
    new BrowserSyncPlugin({
      open: false,
      proxy: 'http://localhost:8888'
    })
  ]
});