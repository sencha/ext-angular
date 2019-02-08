const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin-next')
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
        treeshake: treeshake,
        watch: watchprofile,
        profile: buildprofile, 
        environment: buildenvironment, 
        verbose: buildverbose,
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
          'charts',
          'treegrid'
        ]
      }),
      new WebpackShellPlugin({
        onBuildEnd:{
          scripts: ['node extract-code.js'],
          blocking: false,
          parallel: true
        }
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
    watch: true,
    performance: { hints: false },
    mode: mode,
    devtool: (mode === 'development') ? 'inline-source-map' : false,
    context: path.join(__dirname, './src'),
    entry: {
      polyfills:  path.join(__dirname, './src/polyfills.ts'),
      main: path.join(__dirname, './src/main.ts') //"./main.ts"
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      filename: '[name].js'
    },
    module: {
      rules: [
        {test: /\.css$/, loader: ['to-string-loader', "style-loader", "css-loader"]},
        {test: /\.(png|svg|jpg|jpeg|gif)$/, use: ['file-loader']},
        {test: /\.html$/,loader: "html-loader"},
        {test: /\.ts$/,  loader: '@ngtools/webpack'},
        //{test: /\.scss$/,loader: ["raw-loader", "sass-loader?sourceMap"]}
      ]
    },
    plugins: plugins,
    node: false,
    devServer: {
      contentBase: './build',
      //contentBase: false,
      stats: false,
      compress: false,
      hot: true,
      historyApiFallback: true,
      //hot: true,
      host: '0.0.0.0',
      port: port,
      disableHostCheck: false,
      //compress: isProd,
      inline: true
      // stats: {
      //   assets: false,
      //   children: false,
      //   chunks: false,
      //   hash: false,
      //   modules: false,
      //   publicPath: false,
      //   timings: false,
      //   version: false,
      //   warnings: false,
      //   colors: {
      //     green: '\u001b[32m'
      //   }
      }
    }
  })
}