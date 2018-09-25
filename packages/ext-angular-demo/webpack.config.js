const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const ScriptExtPlugin = require('script-ext-html-webpack-plugin')
const { AngularCompilerPlugin } = require('@ngtools/webpack')
const portfinder = require('portfinder')

module.exports = function (env) {
  var isProd = false
  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {
    return {
      mode: 'development',
      entry: './src/main.ts',
      output: {
        path: __dirname + '/dist',
        filename: 'app.js'
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
      plugins: [
        new CopyWebpackPlugin([
          { from: 'src/assets', to: 'assets'}
        ]),
        new HtmlWebpackPlugin({
          template: __dirname + '/src/index.html',
          output: __dirname + '/dist',
          inject: 'head'
        }),
        new ScriptExtPlugin({
          defaultAttribute: 'defer'
        }),
        new AngularCompilerPlugin({
          "skipTemplateCodegen": true,
          "strictMetadataEmit": true,
          "fullTemplateTypeCheck": true,
          tsConfigPath: './tsconfig.json',
          entryModule: './src/app/app.module#AppModule',
          sourceMap: true
        })
      ],
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
