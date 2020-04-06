//const CopyWebpackPlugin = require('copy-webpack-plugin');
const webpack = require("webpack")
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
//const HtmlWebpackPlugin = require('html-webpack-plugin');

//console.log(process.env.build_v)
var build_v = process.env.build_v

var environment = 'development'
process.argv.forEach(argv => {
  if (argv == '--prod') {
    environment = 'production'
  }
})

//const isProd = environment === 'production'

// function get(it, val) {if(env == undefined) {return val} else if(env[it] == undefined) {return val} else {return env[it]}}

// var sdkTarget     = get('sdktarget', 'SDK_EMPTY')
// √      = get('basehref',      '/mjg/')
// var build_v       = get('build_v',       '7.2.0.0');

//var basehref = process.env["basehref"]
//console.log(basehref)

module.exports = function(config, options) {
  var env = process.env
  function get(it, val) {if(env == undefined) {return val} else if(env[it] == undefined) {return val} else {return env[it]}}

  var framework     = get('framework',     'angular')
  var toolkit       = get('toolkit',       'modern')
  var theme         = get('theme',         'theme-kitchensink')
  var packages      = get('packages',
  [
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
  ])
  var script        = get('script',        './extract-code.js')
  var emit          = get('emit',          'yes')
  var profile       = get('profile',       '')
  //var environment   = get('environment',   'development')
  var treeshake     = get('treeshake',     'no')
  var browser       = get('browser',       'no')
  var watch         = get('watch',         'no')
  var verbose       = get('verbose',       'no')
  var basehref      = get('basehref',      '/')
  //var build_v       = get('build_v',       '7.2.0.0');

  var port = 1962

  // const indexHtmlPlugins = config.plugins.filter(
  //   p => p.constructor.name === 'IndexHtmlWebpackPlugin',
  // );

  config.plugins.push(
    // new HtmlWebpackPlugin({
    //   //title: "hi",
    //   //template: "./src/index.html",
    //   //baseUrl: process.env["basehref"],
    //   //hash: true,
    //   //inject: "body"
    // }),
    new ExtWebpackPlugin({
      framework: framework,
      toolkit: toolkit,
      theme: theme,
      packages: packages,
      script: '',
      emit: 'no',
      port: port,
      profile: profile,
      environment: environment,
      treeshake: treeshake,
      browser: browser,
      watch: watch,
      verbose: verbose,
      inject: 'yes',
      intellishake: 'no'
    }),
    // new CopyWebpackPlugin([{
    //   from: './resources/code.js',
    //   to: './src/app/assets/resources/code.js'
    // }]),
    new webpack.DefinePlugin({
      BUILD_VERSION: JSON.stringify(build_v)
    })
  )
  return config;
}
