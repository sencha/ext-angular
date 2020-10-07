## Using ext-webpack-plugin for @sencha/ext-angular-classic

## Adding Sencha ext-webpack-plugin to an Angular CLI application

This document defines the steps needed to add Sencha ext-webpack-plugin to a Angular application generated with Angular CLI.
Angular CLI is described in the [Angular CLI Overview](https://cli.angular.io/)

Also see packages/ext-angular-kitchensink for an example of an application with ext-webpack-plugin.

### Follow the steps in Getting Started to creat an Angular CLI application with ExtAngular

[For ext-angular-classic](https://github.com/sencha/ext-angular/blob/ext-angular-7.3.0/packages/ext-angular-classic/GETTING_STARTED.md)

For the next steps, make sure you are logged into the Sencha npm repository - for instructions, see this link: https://github.com/sencha/ext-angular/blob/ext-angular-7.3.0/README.md

#### Do these steps:

Add the following to the dependencies section of package.json:

```sh
"@sencha/ext-classic-runtime": "~7.3.0",
"@sencha/ext-angular-classic": "~7.3.0",
"@sencha/ext": "~7.3.0",
"@sencha/ext-classic": "~7.3.0",
"@sencha/ext-classic-theme-material": "~7.3.0",
"@sencha/ext-webpack-plugin": "~7.3.0",
"@angular-builders/custom-webpack": "^9.1.0",
"@angular-builders/dev-server": "^7.3.1",
"@angular-devkit/build-angular": "~0.901.0",
```

To install the npm dependencies, in the terminal or command window run the following:

```sh
npm install
```
#### Edit scripts section pf package.json

Add the following to the scripts section of package.json:

```sh
"buildprod": "env basehref=/ ng build --prod",
```

#### Edit angular.json, index.html, app.module.ts, app component files, and Add custom-webpack.config.js

To introduce custom webpack configuration, we first need to make changes inside angular.json file.

For **ng build** command, configure the architect/build object in the angular.json file and update the builder from *@angular-devkit/build-angular:browser* to *@angular-builders/custom-webpack:browser* and add the customWebpackConfig key inside options like:

 ```sh
"builder": "@angular-builders/custom-webpack:browser",
"options": {
  "customWebpackConfig": {
    "path": "./custom-webpack.config.js",
    "replaceDuplicatePlugins": false,
    "mergeStrategies":{"externals":"replace"}
  },
   ... other options
```

For **ng serve** command, update the serve/builder in the angular.json file:

 ```sh
 "serve": {
   "builder": "@angular-builders/custom-webpack:dev-server",
... other options
```

To configure the ext-webpack-plugin for webpack in Angular, create a file named **custom-webpack.config.js** at the root directory (where the package.json is), and add the following:
```sh
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
```

#### Run the application

In the terminal or command window, run the application:

```sh
ng serve
```

or

```sh
npm start
```

for production build:

```sh
npm run buildprod
```

Browse to http://localhost:4200 in your browser.  You should see the Angular starter application with an ExtAngular Panel and Grid in the browser.
