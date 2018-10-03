const webpack = require('webpack')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin
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
        emit: false,
        profile: buildprofile, 
        environment: buildenvironment, 
        verbose: buildverbose,
        theme: 'theme-material',
        packages: []
      }),
      //new BundleAnalyzerPlugin(),
      new AngularCompilerPlugin({

        platform: 0,
        entryModule: path.join(sourcePath, 'app/app.module#AppModule'),
        skipCodeGeneration: true,

        "annotateForClosureCompiler": false,
        "strictMetadataEmit": false,
        "skipTemplateCodegen": false,
        "fullTemplateTypeCheck": false,
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
        'app': ['./main.ts'],
        'ext': ['../build/ext-angular/ext.js']
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
          {
            test: /\.ts$/,
            loader: '@ngtools/webpack',
            exclude: [/\.(spec|e2e)\.ts$/, /node_modules/],
          },
          //{ test: /\.ts$/, loaders: ['@ngtools/webpack'] },
          // {
          //   test: /\.ts$/,
          //   loaders: [{
          //       loader: 'awesome-typescript-loader',
          //       options: {
          //         transpileOnly: process.env.NODE_ENV !== 'production'
          //       }
          //     },
          //     'angular2-template-loader',
          //     'angular2-router-loader'
    
          //   ],
          //   exclude: [/\.(spec|e2e)\.ts$/],
          // },
          // {
          //   test: /\.ts$/,
          //   include: [/\.(spec|e2e)\.ts$/],
          //   loaders: ['awesome-typescript-loader', 'angular2-template-loader']
          // },


          { test: /\.css$/, loader: 'raw-loader' },
          { test: /\.html$/, loader: 'raw-loader' }
        ]
      },
      plugins,
      devServer: {
        overlay: true,
        quiet: false,
        clientLogLevel: 'none',
        // before: function(app) {
        //   console.log('before')
        // },
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
          chunks: true,
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
