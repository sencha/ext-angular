# Getting Started with ExtAngular and Angular CLI

## Overview

This guide will show you how to install and configure ExtAngular with Angular CLI in your development environment.

## Requirements

ExtAngular requires the following to be installed before proceeding:

* [Node 8.11+](#getting_started_-_installing_node_and_npm)
* [NPM 6+](#getting_started_-_installing_node_and_npm)
* [Java 8](#getting_started_-_installing_java)

## Creating Your First ExtAngular Application with Angular CLI

### Step 1: Authenticate to Sencha's NPM Registry

ExtAngular and all related packages are hosted on Sencha's private NPM registry. 

To gain access to this registry, [sign up for a trial of ExtAngular](https://www.sencha.com/products/extangular/evaluate).  

Once you have received your credentials, you can authenticate by running the following command:

```bash

npm login --registry=http://npm.sencha.com --scope=@sencha

```

This command configures npm to download packages in the `@sencha` scope from Sencha's registry.

### Step 2: Create a New Angular CLI Application

If you are new to Angular, or do not have an existing application, we recommend using Angular CLI to create a new ExtAngular app:

```
npm install -g @angular/cli
ng new ext-angular-cli-boilerplate --style scss --minimal --skip-tests --inline-style --inline-template
cd ext-angular-cli-boilerplate
npm start
```

If everything is working you should have the Angular Welcome page appear in the browser at http://localhost:4200/


### Step 3: Add ExtAngular to the Angular CLI Application

in ./angular.json

change

      "architect": {
        "build": {
          "builder": "@angular-devkit/build-angular:browser",
          "options": {

to

      "architect": {
        "build": {
          "builder": "@angular-builders/custom-webpack:browser",
          "options": {
            "customWebpackConfig": {"path": "./ext-angular-webpack.config.js"},

in ./angular.json

change

        "serve": {
          "builder": "@angular-devkit/build-angular:dev-server",

to

        "serve": {
          "builder": "@angular-builders/dev-server:generic",

in the terminal window 

from https://github.com/sencha/ext-angular, copy 
```
generators/ext-component-creator/filetemplates/angular/ext-angular-webpack.config.js 
```
to
```
 ./ext-angular-webpack.config.js 
```
copy 
```
generators/ext-component-creator/filetemplates/angular/ext-angular.service.ts
```
to
```
./src/ext-angular.service.ts
```

in ./package.json, add
```
  "dependencies": {
    "@sencha/ext-angular": "~7.0.0",
    "@sencha/ext": "~6.7.0",
    "@sencha/ext-modern": "~6.7.0",
    "@sencha/ext-modern-treegrid": "~6.7.0",
    "@sencha/ext-modern-theme-material": "~6.7.0",

  "devDependencies": {
    "@angular-builders/custom-webpack": "~7.4.3",
    "@angular-builders/dev-server":"~7.3.1",
    "@sencha/ext-angular-webpack-plugin": "~6.7.0",
    "html-webpack-plugin": "^3.2.0",
    "base-href-webpack-plugin": "~2.0.0",
```
in ./tsconfig.json, add
```
     "paths": {
      "@angular/*": ["./node_modules/@angular/*"]
     },
```
replace contents of ./src/app/app.module.ts with this:

```javascript
import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { ExtAngularModule } from '@sencha/ext-angular';
import { ExtAngularBootstrapService } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.service';
import { ExtAngularBootstrapComponent } from '@sencha/ext-angular/esm5/lib/ext-angular-bootstrap.component';

import { AppComponent } from './app.component'

@NgModule({
  imports: [BrowserModule, ExtAngularModule],
  declarations: [ExtAngularBootstrapComponent, AppComponent,],
  providers: [ExtAngularBootstrapService],
  entryComponents: [AppComponent],
  bootstrap: [ExtAngularBootstrapComponent]
})
export class AppModule {
  constructor(extAngularService : ExtAngularBootstrapService) {
    extAngularService.setBootStrapComponent(AppComponent)
  }
}
```

replace the contents of ./src/index.html with this:

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ExtAngularCliBoilerplate</title>
  <base href="/">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
  <link href="ext-angular/ext.css" rel="stylesheet">
  <script type="text/javascript" src="ext-angular/ext.js"></script>
</head>
<body>
  <app-root></app-root>
</body>
</html>
```

replace the contents of ./src/app.component.ts with this:

```javascript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
<panel #item [title]=title [layout]="'hbox'" [fitToParent]="true">
  <button #item [text]="'click'" ></button>
</panel>
  `,
  styles: []
})
export class AppComponent {
  title = 'ext-angular-cli-boilerplate'
}
```


### Step 4: Re-Run install and start your ExtAngular application

Run the following in a terminal window to install and start the app 
```
npm install
npm start
```

Open a browser at http://localhost:4200


The resulting app uses webpack-dev-server and hot-loading. Any changes you make will be immediately reflected in the browser.

## Example Applications

The [ext-angular repo on GitHub](https://github.com/sencha/ext-angular) contains several example apps that you can use to learn more about ExtAngular.  Each has a readme that contains instructions for downloading and running:

* [ext-angular-kitchensink](https://github.com/sencha/ext-angular/tree/master/packages/ext-angular-kitchensink) - Shows how to use every ExtAngular component. See it running [here](https://examples.sencha.com/ExtAngular/6.7.0/kitchensink/).

## Appendix

### Installing Node and NPM

You can check the version of node you have installed by running:

```
node --version
```

 To install node on Mac OS and Linux, we recommend using [nvm](https://github.com/creationix/nvm#installation).  If you already have nvm installed, you can install the latest stable version of Node and NPM using:

 ```
 nvm install stable
 ```

 On Windows you can use the [official installer](https://nodejs.org/en/download/).  There is also a version of [nvm for Windows](https://github.com/coreybutler/nvm-windows)

### Installing Java

In order to install ExtReact's webpack plugin on Linux, Java 8 must first be installed. 

You can check which version of Java you have installed by running:

```
java -version
```

On Debian-based platforms, you can install OpenJDK using:

```
sudo apt-get install openjdk-8-jdk

```

... or you can install Oracle's JDK using:

```
sudo add-apt-repository ppa:webupd8team/java -y
sudo apt-get update
sudo apt-get install oracle-java8-installer
```
