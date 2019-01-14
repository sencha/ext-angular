const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const portfinder = require('portfinder')

module.exports = function (env) {
  var browserprofile = JSON.parse(env.browser) || true
  var watchprofile = env.watch || 'yes'
  var buildprofile = env.profile || process.env.npm_package_extbuild_defaultprofile
  var buildenvironment = env.environment || process.env.npm_package_extbuild_defaultenvironment
  var buildverbose = env.verbose || process.env.npm_package_extbuild_defaultverbose
  if (buildprofile == 'all') { buildprofile = '' }
  const isProd = buildenvironment === 'production'

  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {
    const plugins = [
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        mainPath: "./src/main.ts",
        skipCodeGeneration: true
      }),
      new HtmlWebpackPlugin({
        template: "index.html",
        inject: "body"
      }),
      new ExtWebpackPlugin({
        framework: 'angular',
        port: port,
        emit: true,
        browser: browserprofile,
        watch: watchprofile,
        profile: buildprofile, 
        environment: buildenvironment, 
        verbose: buildverbose,
        theme: 'theme-material',
        packages: [
          'ux',
          'treegrid'
        ]
      }),
      new webpack.ContextReplacementPlugin(
          /\@angular(\\|\/)core(\\|\/)fesm5/,
          path.resolve(__dirname, 'src'),{}
      ),
      new FilterWarningsPlugin({
          exclude: /System.import/
      })
    ]
    return {
      mode: 'development',
      entry: {
        polyfills: "./polyfills.ts",
        main: "./main.ts"
      },
      context: path.join(__dirname, './src'),
      output: {
        path: path.resolve(__dirname, 'build'),
        filename: "[name].js"
      },
      module: {
        rules: [
          {test: /\.(png|svg|jpg|jpeg|gif)$/, use: ['file-loader']},
          {test: /\.css$/, loader: ["style-loader", "css-loader"]},
          {test: /\.ts$/,  loader: '@ngtools/webpack'},
          {test: /\.html$/,loader: "html-loader"},
          //{test: /\.scss$/,loader: ["raw-loader", "sass-loader?sourceMap"]}
        ]
      },
      plugins,
      node: false,
      devtool: "source-map",
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
