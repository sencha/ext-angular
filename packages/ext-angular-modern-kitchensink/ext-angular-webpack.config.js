const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin-next')
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
      theme: 'theme-kitchensink',
      packages: [
        'transition',
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
    }),
    new WebpackShellPlugin({
      onBuildEnd:{
        scripts: ['node extract-code.js'],
        blocking: false,
        parallel: true
      }
    })
  ]
}