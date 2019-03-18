const path = require('path')
const webpack = require("webpack")
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { BaseHrefWebpackPlugin } = require('base-href-webpack-plugin');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin')
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const portfinder = require('portfinder')

module.exports = function (env) {
  function get(it, val) {if(env == undefined) {return val} else if(env[it] == undefined) {return val} else {return env[it]}}

  var profile     = get('profile',     '')
  var environment = get('environment', 'development')
  var treeshake   = get('treeshake',   'no')
  var browser     = get('browser',     'yes')
  var watch       = get('watch',       'yes')
  var verbose     = get('verbose',     'no')
  const isProd = environment === 'production'
  const outputFolder = 'build'
  portfinder.basePort = (env && env.port) || 1962
  var basehref = get('basehref', '/')

  return portfinder.getPortPromise().then(port => {
    const plugins = [
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        entryModule: "src/app/app.module#AppModule",
        mainPath: "./src/main.ts",
        skipCodeGeneration: true
      }),
      new HtmlWebpackPlugin({template: "index.html",hash: true,inject: "body"}),
      new BaseHrefWebpackPlugin({ baseHref: basehref }),
      new ExtWebpackPlugin({
        framework: 'angular',
        toolkit: 'modern',
        theme: 'theme-material',
        emit: 'yes',
        script: '',
        port: port,
        packages: [
          'ux', 
          'treegrid'
        ],
        profile: profile, 
        environment: environment,
        treeshake: treeshake,
        browser: browser,
        watch: watch,
        verbose: verbose
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
      mode: environment,
      devtool: (environment === 'development') ? 'inline-source-map' : false,
      context: path.join(__dirname, './src'),
      entry: {
        polyfills: './polyfills.ts',
        main: './main.ts'
      },
      output: {
        path: path.resolve(__dirname, outputFolder),
        filename: '[name].js'
      },
      plugins: plugins,
      resolve: {
        extensions: ['.ts', '.js', '.html']
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
      performance: { hints: false },
      stats: 'none',
      optimization: { noEmitOnErrors: true },
      node: false,
      devServer: {
        contentBase: outputFolder,
        hot: !isProd,
        historyApiFallback: true,
        host: '0.0.0.0',
        port: port,
        disableHostCheck: false,
        compress: isProd,
        inline:!isProd,
        stats: 'none'
      }
    }
  })
}