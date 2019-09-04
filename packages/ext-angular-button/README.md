## @sencha/ext-angular-button

last run: Wed Sep 04 2019 14:37:44 GMT-0400 (Eastern Daylight Time)

This npm package contains the minimum files that are needed to provide for the @sencha/ext-angular-button package for an Angular application

## Test with an Angular CLI generated app

#### Install Angular CLI

```sh
npm install -g @angular/cli
```

should be @angular/cli@8.3.x


#### Create a new Angular CLI application

```sh
ng new ng-eng-button --minimal=true --interactive=false -g=true --skipInstall=true
```

#### Open your editor

To open Visual Studio Code, type the following:

```sh
cd ng-eng-button; code .
```

#### Add to package.json

In the dependencies section of package.json, add the following:

```sh
"@sencha/ext-angular-button": "7.0.0",
```

#### Run npm install

in a terminal window at the root of your application, run the following:

```sh
npm install
```

#### Replace src/index.html (optional)

If you want to get a look at different styling...
Open the src/index.html file in the editor and replace the contents with the following:

```sh
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>ext-angular-button example</title>
  <base href="/">

  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="icon" type="image/x-icon" href="favicon.ico">
</head>
<body>
  <app-root></app-root>
</body>
<style>
    :root {
        --base-color:black;
        --base-foreground-color:yellow;
        --color:darkblue;
        --background-color:lightgray;
        --hovered-background-color:darkgray;
    }
    body {
        padding: '10px'
    }
    * {
        font-family:'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    }
</style>
</html>
```

#### Replace src/app/app.module.js

Open the src/app/app.module.js file in the editor and replace the contents with the following:

```sh
declare var Ext: any
//import { ExtAngularButtonModule } from '@sencha/ext-angular-button'
import { ExtAngularModule } from '@sencha/ext-angular-button'

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularModule
    //ExtAngularButtonModule
  ],
  providers: [],
  entryComponents: [AppComponent]
})
export class AppModule {
    ngDoBootstrap(app) {
        Ext.onReady(function () {
            app.bootstrap(AppComponent);
        });
    }
}
```

#### Replace src/app/app.component.html

Open the src/app/app.component.html file in the editor and replace the contents with the following: 

```sh
import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<ext-grid
    [viewport]="true"
    [title]="title"
    (ready)="readyGrid($event)"
>
    <ext-column text="name" dataIndex="name"></ext-column>
    <ext-column text="email" dataIndex="email" flex="1"></ext-column>
</ext-grid>
    `,
    styles: []
})
export class AppComponent {
    title = 'the grid';
    data=[
        {name: 'Marc', email: 'marc@gmail.com'},
        {name: 'Nick', email: 'nick@gmail.com'},
        {name: 'Andy', email: 'andy@gmail.com'},
    ]
    readyGrid(event) {
        var grid = event.detail.cmp;
        grid.setData(this.data)
    }
}
```

#### Run the application

Type the following in a command/terminal window:

```sh
ng serve --open --port 4200
```

open http://localhost:4200 in a browser - the ExtAngular application will load

#### components in this package:

button

#### imports in the npm package module:
##### @sencha/ext-angular-button/ext-angular-button.module

