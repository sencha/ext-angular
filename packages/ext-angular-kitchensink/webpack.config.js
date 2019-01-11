const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')
const portfinder = require('portfinder')
var isProd = false

module.exports = function (env) {
portfinder.basePort = (env && env.port) || 1962
return portfinder.getPortPromise().then(port => {
  const plugins = [
    new AngularCompilerPlugin({
      tsConfigPath: './tsconfig.json',
      mainPath: "./src/main.ts",
      skipCodeGeneration: true
    }),
    new ExtWebpackPlugin({
      framework: 'angular',
      port: port,
      emit: true,
      browser: true,
      profile: '', 
      environment: 'development', 
      verbose: 'no',
      theme: 'theme-material',
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
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: "body"
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
      polyfills: "./src/polyfills.ts",
      main: "./src/main.ts"
    },
    context: path.join(__dirname, './'),
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: "[name].js"
    },
    module: {
      rules: [
        //{test: /\.ts$/,loader: "awesome-typescript-loader"},
        {test: /\.(png|svg|jpg|jpeg|gif)$/, use: ['file-loader']},
        {test: /\.css$/, loaders: ['to-string-loader', 'css-loader']},
        //{test: /\.css$/, loader: ["style-loader", "css-loader"]},
        {test: /\.ts$/,  loader: '@ngtools/webpack'},
        {test: /\.html$/,loader: "html-loader"},
//        {test: /\.scss$/,use: [{ loader: "to-string-loader"}]},
//        {test: /\.scss$/,loader: ["raw-loader", "sass-loader?sourceMap"]}
      ]
    },
    plugins,
    node: false,
    devtool: "source-map",
    devServer: {
      contentBase: './',
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
