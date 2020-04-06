const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');

module.exports = function(config, options) {
  config.plugins.push(
    new ExtWebpackPlugin({
      framework: 'angular',
      toolkit: 'modern',
      theme: 'theme-material',
      packages: [],
      script: '',
      emit: 'no',
      port: '1962',
      profile: '',
      environment: 'development',
      treeshake: 'no',
      browser: 'no',
      watch: 'no',
      verbose: 'no',
      inject: 'yes',
      intellishake: 'no'
    })
  )
  return config;
}
