const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const path = require('path')

module.exports = {
  context: path.join(__dirname, './'),
  output: {
    path: path.resolve(__dirname, 'src/build'),
    filename: '[name].js'
  },
  plugins: [
    new ExtWebpackPlugin({
      framework: 'angular',
      port: 4200,
      emit: true,
      browser: true,
      profile: '', 
      environment: 'development', 
      verbose: 'no',
      theme: 'theme-material',
      packages: [
      ]
    })
  ]
}