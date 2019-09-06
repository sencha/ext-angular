const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({}),
    new ExtWebpackPlugin({
      framework: 'angular',
      toolkit: 'modern',
      theme: 'theme-kitchensink',
      emit: 'yes',
      script: './extract-code.js',
      packages: [
        'font-ext',
        'ux',
        'd3',
        'pivot-d3',
        'font-awesome',
        'exporter',
        'pivot',
        'calendar',
        'charts',
        'treegrid',
        'froala-editor'
      ],
      profile: '',
      environment: 'development',
      treeshake: 'no',
      browser: 'no',
      watch: 'yes',
      verbose: 'no'
    }),
    // new CopyWebpackPlugin([{
    //     from: './node_modules/@webcomponents/webcomponentsjs/webcomponents-bundle.js',
    //     to: './webcomponents-bundle.js'
    // }])
  ]
};