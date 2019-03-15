//https://medium.freecodecamp.org/how-to-configure-webpack-4-with-angular-7-a-complete-guide-9a23c879f471
const AngularCompilerPlugin = require('@ngtools/webpack').AngularCompilerPlugin
const ExtWebpackPlugin = require('@sencha/ext-angular-webpack-plugin')
const WebpackShellPlugin = require('webpack-shell-plugin-next')
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require("webpack")
const FilterWarningsPlugin = require('webpack-filter-warnings-plugin')


module.exports = function (env) {
  var browserprofile = JSON.parse(env.browser) || true
  var watchprofile = env.watch || 'yes'
  var buildprofile = env.profile || process.env.npm_package_extbuild_defaultprofile
  var buildenvironment = env.environment || process.env.npm_package_extbuild_defaultenvironment
  var buildverbose = env.verbose || process.env.npm_package_extbuild_defaultverbose
  var genProdData = env.genProdData ? JSON.parse(env.genProdData) : false
  if (buildprofile == 'all') { buildprofile = '' }
  const isProd = buildenvironment === 'production'
  var mode = isProd ? 'production': 'development'

  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {
    const plugins = [
      // new CleanWebpackPlugin(
      //   helpers.root('dist'),
      //   {
      //       root: helpers.root(),
      //       verbose: true
      //   }
      // ),
      new HtmlWebpackPlugin({
        template: "index.html",
        hash: true,
        inject: "body"
      }),
      new AngularCompilerPlugin({
        tsConfigPath: './tsconfig.json',
        mainPath: "./src/main.ts",
        skipCodeGeneration: true
      }),
      new ExtWebpackPlugin({
        framework: 'angular',
        port: port,
        emit: true,
        browser: browserprofile,
        genProdData,
        watch: watchprofile,
        profile: buildprofile, 
        environment: buildenvironment, 
        verbose: buildverbose,
        prodFileReplacementConfig: [
          {
            "replace": "src/environments/environment.ts",
            "with": "src/environments/environment.prod.ts"
          }
        ],
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
      })
    ]
  return {
    mode,
    node: false,
    devtool: "source-map",
    //devtool: 'cheap-module-eval-source-map',
    context: path.join(__dirname, './src'),
    entry: {
      polyfills: "./polyfills.ts",
      main: "./main.ts"
    },
    output: {
      path: path.resolve(__dirname, 'build'),
      publicPath: '/',
      filename: '[name].bundle.js',
      chunkFilename: '[id].chunk.js'
    },
    module: {
      rules: [
        {test: /\.css$/, loader: ['to-string-loader', "style-loader", "css-loader"]},
        {test: /\.(png|svg|jpg|jpeg|gif)$/, use: ['file-loader']},
        {test: /\.html$/,loader: "html-loader"},
        {test: /\.ts$/,  loader: '@ngtools/webpack'},
        // {
        //   test: /\.ts$/,
        //   loaders: [
        //       'babel-loader',
        //       {
        //           loader: 'awesome-typescript-loader',
        //           options: {
        //               configFileName: helpers.root('tsconfig.json')
        //           }
        //       },
        //       'angular2-template-loader',
        //       'angular-router-loader'
        //   ],
        //   exclude: [/node_modules/]
        // },


        //{test: /\.scss$/,loader: ["raw-loader", "sass-loader?sourceMap"]}
      ]
    },
    plugins,
    // optimization: {
    //   noEmitOnErrors: true
    // },
    optimization: {
      noEmitOnErrors: true,
      splitChunks: {
          chunks: 'all'
      },
      runtimeChunk: 'single',
      minimizer: [
          new UglifyJsPlugin({
              cache: true,
              parallel: true
          }),
           new OptimizeCSSAssetsPlugin({
               cssProcessor: cssnano,
               cssProcessorOptions: {
                   discardComments: {
                       removeAll: true
                   }
               },
               canPrint: false
           })
      ]
    },
    devServer: {
      contentBase: './build',
      historyApiFallback: true,
      hot: false,
      host: '0.0.0.0',
      port: port,
      disableHostCheck: false,
      compress: isProd,
      inline: !isProd,
      stats: 'minimal',
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
  }
})
}
