'use strict';
const CleanWebpackPlugin   = require('clean-webpack-plugin');
const HtmlWebpackPlugin    = require('html-webpack-plugin');
const ExtWebpackPlugin     = require('@sencha/ext-angular-webpack-plugin')
const WebpackShellPlugin   = require('webpack-shell-plugin-next')
const portfinder = require('portfinder')

const helpers              = require('./helpers');
const isDev                = process.env.NODE_ENV !== 'production';

module.exports = function (env) {
  portfinder.basePort = (env && env.port) || 1962
  return portfinder.getPortPromise().then(port => {
  return {
    context: path.join(__dirname, './src'),
    entry: {
//        vendor: './src/vendor.ts',
        polyfills: './src/polyfills.ts',
        main: isDev ? './src/main.ts' : './src/main.aot.ts'
    },

    resolve: {
        extensions: ['.ts', '.js']
    },

    module: {
        rules: [
            {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
                test: /\.(scss|sass)$/,
                use: [
                    'to-string-loader',
                    { loader: 'css-loader', options: { sourceMap: true } },
                    { loader: 'sass-loader', options: { sourceMap: true } }
                ],
                include: helpers.root('src', 'app')
            }
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
      stats: 'minimal'
  },


    plugins: [
        new CleanWebpackPlugin(
            helpers.root('dist'), { root: helpers.root(), verbose: true }),

        new HtmlWebpackPlugin({
            template: 'src/index.html'
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
        })
  
    ]
  }
})
};