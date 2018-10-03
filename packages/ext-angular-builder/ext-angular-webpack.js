const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')
const sourcePath = path.join(__dirname, './src')
const port = 1962
const isProd = false
console.log(sourcePath)

module.exports = {
  context: sourcePath,
  entry: {
    'app': ['./main.ts'],
    'ext': ['../build/ext-angular/ext.js']
  },
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: '[name].js'
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: 'index.html',
    //   hash: true
    // }), 
    new ExtWebpackPlugin({
      framework: 'angular',
      port: 4200,
      emit: true,
      browser: true,
      profile: '', 
      environment: 'development', 
      verbose: 'yes',
      theme: 'theme-material',
      packages: []
    })
  ],
  // devServer: {
  //   contentBase: './build',
  //   historyApiFallback: true,
  //   hot: false,
  //   host: '0.0.0.0',
  //   port: port,
  //   disableHostCheck: false,
  //   compress: isProd,
  //   inline: !isProd,
  //   stats: {
  //     assets: false,
  //     children: false,
  //     chunks: false,
  //     hash: false,
  //     modules: false,
  //     publicPath: false,
  //     timings: false,
  //     version: false,
  //     warnings: false,
  //     colors: {
  //       green: '\u001b[32m'
  //     }
  //   }
  // }
}