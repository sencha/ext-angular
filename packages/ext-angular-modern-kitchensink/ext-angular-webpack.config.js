const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const path = require('path')
//const sourcePath = path.join(__dirname, './src')

module.exports = {
  context: path.join(__dirname, './src'),
  output: {
    path: path.resolve(__dirname, 'build'),
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
      theme: 'theme-kitchensink',
      packages: [
        'font-ext', 
        'ux', 
        'd3',
        'pivot-d3',
        'font-awesome', 
        'exporter',
        'pivot', 
        'calendar', 
        'charts'
      ]
    })
  ]
}