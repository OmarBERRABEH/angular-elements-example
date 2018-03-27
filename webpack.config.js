/* global module */
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin;
const CompressionPlugin = require("compression-webpack-plugin");
const path = require('path');

module.exports = {
  entry: './src/main.ts',
  resolve: {
    mainFields: ['es2015', 'browser', 'module', 'main']
  },
  module: {
    rules: [
        { test: /\.ts$/, 
          loader: '@ngtools/webpack'
        },
        { test: /\.html$/, 
          loader: 'raw-loader'
        }
      ]
  },
  plugins: [
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      entryModule: path.resolve(__dirname, './src/widget.module#WidgetModule' )
    }),
    new CompressionPlugin({
      asset: "[path].gz[query]",
      algorithm: "gzip",
      test: /\.js$|\.css$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'main.bundle.js'
  },
  mode: 'production'
};
