## Getting started with @sencha/ext-angular-modern


This npm package contains the files that are needed to add the @sencha/ext-angular-modern package to an Angular application

### Login to the Sencha npm repo

* Note, you must be signed into the Sencha npm registry to access packages.

production:

```sh
npm login --registry=https://npm.sencha.com/ --scope=@sencha
```

early adopter:

```sh
npm login --registry=https://sencha.myget.org/F/early-adopter/npm/ --scope=@sencha
```

## Create an Angular application with Angular CLI

#### Install Angular CLI

```sh
npm install -g @angular/cli
```

should be @angular/cli@9.1.x


#### Create a new Angular CLI application

- Run 'ng new':

```sh
ng new ext-angular-modern-demo --minimal=true --interactive=false -g=true --skipInstall=false
```

- Add ExtAngularModern to your application by running the following:

```sh
cd ext-angular-modern-demo
npm install @sencha/ext-modern-runtime --save
npm install @sencha/ext-angular-modern --save
```

- Open your editor

To open Visual Studio Code, type the following:

```sh
code .
```

(You can use any editor)

#### Add ExtAngular to your project

<!--
- Replace ./src/main.ts with:

```sh
import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

const Ext = window['Ext'];
Ext.onReady(function () {
  platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
});

```
-->

- Add to ./src/styles.css:

```sh
:root {
  --base-color: #024059;
  --base-foreground-color: white;
  --background-color: white;
  --color: black;
}
```

- Replace ./src/app/app.module.ts with:

```sh
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularModernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```

- Replace ./src/app/app.component.ts with:

```sh


import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<ExtPanel viewport="true" title="panel" layout="fit">
    <ExtToolbar docked="top">
        <ExtButton text="a button" shadow="true"></ExtButton>
    </ExtToolbar>
    <ExtGrid
        [title]="title"
        (ready)="readyGrid($event)"
    >
        <ExtColumn text="name" dataIndex="name"></ExtColumn>
        <ExtColumn text="email" dataIndex="email" flex="1"></ExtColumn>
    </ExtGrid>
</ExtPanel>
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
        var grid = event.cmp;
        grid.setData(this.data)
    }
}


```

- to change theme, modify angular.json (add one of the commented out themes):

```sh
            "styles": [
              "src/styles.css",
              "ext-runtime-modern/material/material-all.css"
              //"ext-runtime-modern/triton/triton-all.css"
            ],
```

- Type the following in a command/terminal window:

```sh
ng serve --open --port 4201
```

open http://localhost:4201 in a browser - the ExtAngular application will load

- To generate a theme for Sencha Themer:

```sh
npm install @sencha/cmd --save
node_modules/.bin/ext-angular generate theme -b theme-material -n test-ext-angular
```
