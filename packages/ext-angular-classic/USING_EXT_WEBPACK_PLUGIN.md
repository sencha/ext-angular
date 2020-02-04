## Using ext-webpack-plugin for @sencha/ext-angular-classic

last run: Mon Feb 03 2020 14:14:43 GMT-0500 (Eastern Standard Time)

## Adding Sencha ext-webpack-plugin to an Angular CLI application

This document defines the steps needed to add Sencha ext-webpack-plugin to a Angular application generated with Angular CLI.  Angular CLI is described in the [Angular CLI Overview](https://cli.angular.io/)

### Follow the steps in Getting Started to creat an Angular CLI application with ExtAngular

[For ext-angular-classic](https://github.com/sencha/ext-angular/blob/ext-angular-7.1.1/packages/ext-angular-classic/GETTING_STARTED.md)

For the next steps, make sure you are logged into the Sencha npm repository - for instructions, see this link: https://github.com/sencha/ext-angular/blob/ext-angular-7.0.x/README.md

#### Do 1 of the next 2 steps:

either...
Add the following to the dependencies section of package.json:

```sh
"gzip-cli": "^1.0.1",
"http-server": "^0.11.1",
"@sencha/ext-angular-classic": "~7.1.1",
"@sencha/ext": "^7.0.0",
"@sencha/ext-modern": "^7.0.0",
"@sencha/ext-modern-theme-material": "^7.0.0",
"@sencha/ext-webpack-plugin": "^7.0.0",
"@angular-builders/custom-webpack": "^8.1.0",
"@angular-builders/dev-server": "^7.3.1",
"compression-webpack-plugin": "^3.0.0",
```

To install the npm dependencies, in the terminal or command window run the following:

```sh
npm install
```

or...
Run the following commands in the terminal/command window:

```sh
npm install --save @sencha/ext-angularclassic @sencha/ext @sencha/ext-classic @sencha/ext-classic-theme-material
npm install --save @sencha/ext-webpack-plugin
npm install --save @angular-builders/custom-webpack
npm install --save @angular-builders/dev-server
```

#### Edit scripts section pf package.json

Add the following to the scripts section of package.json:

```sh
"buildprod": "ng build && npm run gzipext && npm run http",
"gzipext": "npx gzip dist/ext/*.js",
"http": "npx http-server dist -g -o",
```

#### Edit angular.json, index.html, app.module.ts, app component files, and Add custom-webpack.config.js

To introduce custom webpack configuration, we first need to make changes inside angular.json file.

For **ng build** command, configure the architect/build object in the angular.json file and update the builder from *@angular-devkit/build-angular:browser* to *@angular-builders/custom-webpack:browser* and add the customWebpackConfig key inside options like:

 ```sh
 "builder": "@angular-builders/custom-webpack:browser",
 "options": {
   "customWebpackConfig": {
     "path": "./custom-webpack.config.js",
     "replaceDuplicatePlugins": true
   },
   "outputPath": "dist",
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
const CopyWebpackPlugin = require('copy-webpack-plugin');
const ExtWebpackPlugin = require('@sencha/ext-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin')
const path = require('path');

module.exports = {
  devServer: {
    contentBase: 'dist',
  },
  output: {
    path: path.join(__dirname, 'dist'),
  },
  plugins: [
    new ExtWebpackPlugin({
      framework: 'angular',
      toolkit: 'modern',
      theme: 'theme-material',
      emit: 'yes',
      script: '',
      packages: [],
      profile: '',
      environment: 'development',
      treeshake: 'no',
      browser: 'no',
      watch: 'no',
      verbose: 'no',
      inject: 'no',
      intellishake: 'no'
    }),
    new CompressionPlugin({
        //include: //dist/ext/,
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /.js$|.css$|.html$/,
        minRatio: 0.8,
        threshold: 10240
    }),
  ]
};
```


Add Ext.js and Ext.css inside index.html

```sh
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ExtAngularBoilerplateAngularCli</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link rel="stylesheet" href="ext/ext.css">
</head>
<body>
  <script src="ext/ext.js"></script>
  <app-root></app-root>
</body>
</html>
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
