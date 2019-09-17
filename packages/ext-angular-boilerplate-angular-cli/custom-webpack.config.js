const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path');
const webpack = require('webpack');
//const environment = require('./environments/environment');
//const environment = require(path.join(__dirname, 'src/environments/environment'));

//import { environment } from './environments/environment';
//console.log(environment)

console.log(process.argv[process.argv.length-1])
var environment = 'development'
var treeshake = 'no'
var browser = 'no'
var watch = 'yes'
if (process.argv[process.argv.length-1] == '--prod') {
    environment = 'production'
    treeshake = 'yes'
    watch = 'no'
}
//console.log(process.env)
//const platform = process.env.PLATFORM || process.platform;
//const platform = process.env.PLATFORM || process.platform;


module.exports = {
  devServer: {
    contentBase: 'dist',
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
    // optimization: {
    //      splitChunks: {
    //        chunks: 'all'
    //      }
    // },
  plugins: [
    new HtmlWebpackPlugin({}),
    new ExtWebpackPlugin({
      framework: 'angular',
      toolkit: 'modern',
      theme: 'theme-material',
      emit: 'yes',
      script: '',
      packages: [],
      profile: '',
      environment: environment,
      treeshake: treeshake,
      browser: browser,
      watch: watch,
      verbose: 'no',
      inject: 'no',
      intellishake: 'no'
    }),
    new CompressionPlugin({
        //include: /\/dist\/ext/,
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        minRatio: 0.8,
        threshold: 10240
    }),
  ]
};