const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')

const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const webpack = require("webpack")
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const portfinder = require('portfinder')

module.exports = function (env) {
  var browserprofile
  var watchprofile
  var buildenvironment = env.environment || process.env.npm_package_extbuild_defaultenvironment
  if (buildenvironment == 'production') {
    browserprofile = false
    watchprofile = 'no'
  }
  else {
    if (env.browser == undefined) {env.browser = true}
    browserprofile = JSON.parse(env.browser) || true
    watchprofile = env.watch || 'yes'
  }
  const isProd = buildenvironment === 'production'
  var buildprofile = env.profile || process.env.npm_package_extbuild_defaultprofile
  var buildenvironment = env.environment || process.env.npm_package_extbuild_defaultenvironment
  var buildverbose = env.verbose || process.env.npm_package_extbuild_defaultverbose
  if (buildprofile == 'all') { buildprofile = '' }
  if (env.treeshake == undefined) {env.treeshake = false}
  var treeshake = env.treeshake ? JSON.parse(env.treeshake) : false
  var basehref = env.basehref || '/'
  var mode = isProd ? 'production': 'development'
  var outputFolder = 'build'
  
  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {
    const plugins = [
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: "src/app/app.module#AppModule",
        mainPath: "./src/main.ts",
        skipCodeGeneration: true
      }),
      new HtmlWebpackPlugin({
        template: "index.html",
        hash: true,
        inject: "body"
      }),
      new BaseHrefWebpackPlugin({ baseHref: basehref }),
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
        treeshake: treeshake,
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
      }),
      new webpack.HotModuleReplacementPlugin()
    ]
    return {
      performance: { hints: false },
      mode: mode,
      devtool: (mode === 'development') ? 'inline-source-map' : false,
      context: path.join(__dirname, './src'),
      entry: {
        vendor:  './vendor.ts',
        polyfills: "./polyfills.ts",
        main: "./main.ts"
      },
      output: {
        path: path.resolve(__dirname, outputFolder),
        filename: "[name].js"
      },
      resolve: {
        extensions: ['.ts', '.js', '.html']
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
      optimization: {
        noEmitOnErrors: true
      },
      plugins: plugins,
      node: false,
      devServer: {
        contentBase: outputFolder,
        hot: true,
        historyApiFallback: true,
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

        // stats:
        // { 
        //   colors: true,
        //   hash: false,
        //   timings: false,
        //   chunks: true,
        //   chunkModules: false,
        //   children: false,
        //   modules: false,
        //   reasons: false,
        //   warnings: true,
        //   errors: true,
        //   assets: true,
        //   version: false,
        //   errorDetails: false,
        //   moduleTrace: false 
        // } ,
     

      }
    }
  })
}
