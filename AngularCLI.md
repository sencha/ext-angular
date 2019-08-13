## Adding Sencha ExtAngular to an Angular CLI application

This document defines the steps needed to add Sencha ExtAngular to a Angular application generated with Angular CLI.  Angular CLI is described in the [Angular CLI Overview](https://cli.angular.io/)

If you don’t want to follow the below mentioned steps, then you can consume the boilerplate code with a sample ExtAngular application at [ext-angular-boilerplate-angular-cli](https://github.com/sencha/ext-angular/tree/ext-components-7.0.x/packages/ext-angular-boilerplate-angular-cli).

### Install the Angular CLI

more details at: https://angular.io/cli#installing-angular-cli

To install Angular CLI, bring up a terminal or command window and use the following command:


```sh
npm install -g @angular/cli
```

### Create an Angular CLI starter application

more details at: https://angular.io/cli/new#ng-new

To create an Angular CLI starter application, continue in the terminal or command window and 'cd' to the folder where you want to create your new application.  Then, use the following command to create your new Angular CLI application.

```sh
ng new ext-angular-boilerplate-angular-cli
```

The Angular CLI starts up and then asks a series of questions as selections - either refer to the Angular documentation noted above and you may choose on the basis of application or you may follow the steps below:

* For 'Would you like to add Angular routing?' , write 'n' and press 'enter'
* For 'Which stylesheet format would you like to use?', select 'CSS' and press 'enter'

The 'ng new' command will run and create the base angular application.

Once the 'ng new' command is finished, move to the newly created folder and run the application:

```sh
cd  ext-angular-boilerplate-angular-cli
ng serve
```

Browse to http://localhost:4200/ in your browser.  You should see the 'Welcome to ext-angular-boilerplate-angular-cli!' page in the browser.

Now, stop the 'ng serve' app from running in the terminal/command window (ctrl-c).  This prepares you for the next steps.

### Add Sencha ExtAngular to your Angular CLI starter application

To Add ExtAngular to your newly created Angular CLI starter application, bring up the created application in your favorite editor or IDE - for example, to use Visual Studio Code, cancel the currently running sample application in the terminal or command window and type 'code .' in the terminal or command window.

```sh
code .
```

For the next steps, make sure you are logged into the Sencha npm repository - for instructions, see this link: https://github.com/sencha/ext-angular/blob/ext-angular-7.0.x/README.md

#### Do 1 of the next 2 steps:

either...
Add the following to the dependencies section of package.json:

```sh
"gzip-cli": "^1.0.1",
"http-server": "^0.11.1",
"@sencha/ext-angular": "^7.0.0",
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
npm install --save @sencha/ext-angular-grid @sencha/ext @sencha/ext-modern @sencha/ext-modern-theme-material
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
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
    new HtmlWebpackPlugin({}),
    new ExtWebpackPlugin({
      framework: 'angular',
      toolkit: 'modern',
      theme: 'theme-material',
      emit: 'yes',
      script: '',
      packages: [],
      profile: '',
      environment: environment,
      treeshake: treeshake,
      browser: browser,
      watch: watch,
      verbose: 'no',
      inject: 'no',
      intellishake: 'no'
    }),
    new CompressionPlugin({
        //include: /\/dist\/ext/,
        filename: "[path].gz[query]",
        algorithm: "gzip",
        test: /\.js$|\.css$|\.html$/,
        minRatio: 0.8,
        threshold: 10240
    }),
  ]
};
```

Replace src/app/app.module.ts with the following:

```sh
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { ExtPanelComponent } from '@sencha/ext-angular/esm5/src/ext-panel.component';
import { ExtGridComponent } from '@sencha/ext-angular/esm5/src/ext-grid.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtPanelComponent,
    ExtGridComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
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

Replace src/app/app.component.html with the following:

```sh
<div>
    <panel title="panel title" layout="fit">
    </panel>
    <grid
        height="500px"
        width="700px"
        title="Sencha ExtAngular Grid"
    >
    </grid>
</div>
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

Browse to http://localhost:4200 in your browser.  You should see the Angular starter application with an ExtAngular Panel and Grid in the browser.

