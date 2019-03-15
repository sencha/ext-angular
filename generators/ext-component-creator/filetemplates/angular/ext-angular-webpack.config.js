const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const path = require('path');

module.exports = {
  context: path.join(__dirname, './'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body"
    }),
    new BaseHrefWebpackPlugin({ baseHref: '/' }),
    new ExtWebpackPlugin({
      framework: 'angular',
      port: 4200,
      emit: true,
      browser: true,
      treeshake: false,
      profile: '', 
      environment: 'development', 
      verbose: 'no',
      theme: 'theme-material',
      packages: [
      ]
    })
  ]
}