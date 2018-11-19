const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './'),
  output: {
    path: path.resolve(__dirname, 'src/build'),
    filename: '[name].js'
    
  },
  plugins: [
    // new HtmlWebpackPlugin({
    //   template: './src/index.html',
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
      theme: 'theme-conference-app',
      packages: [
      ]
    })
  ]
}