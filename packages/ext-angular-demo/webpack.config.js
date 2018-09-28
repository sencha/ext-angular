const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
//const CopyWebpackPlugin = require('copy-webpack-plugin')
const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
//const ScriptExtPlugin = require('script-ext-html-webpack-plugin')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const portfinder = require('portfinder')
const sourcePath = path.join(__dirname, './src')

module.exports = function (env) {
  var buildprofile = env.profile || process.env.npm_package_extbuild_defaultprofile
  var buildenvironment = env.environment || process.env.npm_package_extbuild_defaultenvironment
  var buildverbose = env.verbose || process.env.npm_package_extbuild_defaultverbose
  if (buildprofile == 'all') { buildprofile = '' }
  const isProd = buildenvironment === 'production'

  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {
    const plugins = [
      new HtmlWebpackPlugin({
        template: 'index.html',
        hash: true
      }), 
      new ExtWebpackPlugin({
        framework: 'angular',
        port: port,
        profile: buildprofile, 
        environment: buildenvironment, 
        verbose: buildverbose,
        theme: 'theme-material',
        packages: []
      }),
      // new ScriptExtPlugin({
      //   defaultAttribute: 'defer'
      // }),
      new AngularCompilerPlugin({
        "annotateForClosureCompiler": false,
        "strictMetadataEmit": true,
        "skipTemplateCodegen": true,
        "fullTemplateTypeCheck": true,
        tsConfigPath: './tsconfig.json',
        sourceMap: true
      })
    ]
    if (!isProd) {
      plugins.push(
        new webpack.HotModuleReplacementPlugin()
      )
    }
    return {
      mode: 'development',
      cache: true,
      devtool: isProd ? 'source-map' : 'cheap-module-source-map',
      context: sourcePath,
      entry: {
        'app': ['./main.ts']
      },
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
      },
      resolve: {
        extensions: ['.ts', '.js']
      },
      module: {
        rules: [
          { test: /\.ts$/, loaders: ['@ngtools/webpack'] },
          { test: /\.css$/, loader: 'raw-loader' },
          { test: /\.html$/, loader: 'raw-loader' }
        ]
      },
      plugins,
      devServer: {
        contentBase: './build',
        historyApiFallback: true,
        hot: false,
        host: '0.0.0.0',
        port: port,
        disableHostCheck: false,
        compress: isProd,
        inline: !isProd,
        stats: {
          assets: false,
          children: false,
          chunks: false,
          hash: false,
          modules: false,
          publicPath: false,
          timings: false,
          version: false,
          warnings: false,
          colors: {
            green: '\u001b[32m'
          }
        }
      }
    }
  })
}
