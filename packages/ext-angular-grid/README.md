## @sencha/ext-angular-grid

last run: Tue Oct 08 2019 12:03:49 GMT-0400 (Eastern Daylight Time)

This npm package contains the minimum files that are needed to provide for the @sencha/ext-angular-grid package for an Angular application

## Test with an Angular CLI generated app

#### Install Angular CLI

```sh
npm install -g @angular/cli
```

should be @angular/cli@8.3.x


#### Create a new Angular CLI application

```sh
ng new ng-eng-grid --minimal=true --interactive=false -g=true --skipInstall=true
```

#### Open your editor

To open Visual Studio Code, type the following:

```sh
cd ng-eng-grid; code .
```

#### Add to package.json

In the dependencies section of package.json, add the following:

```sh
"@sencha/ext-angular-grid": "7.1.0",
```

#### Run npm install

in a terminal window at the root of your application, run the following:

```sh
npm install
```

#### Replace src/styles.css (optional)

If you want to get a look at different styling...
Open the src/styles.css file in the editor and replace the contents with the following:

```sh
/* Find color names here: https://www.rapidtables.com/web/color */
:root {
    --dark-mode: false;
    --base-color: yellow !important;
    --base-highlight-color: #64b5f6;
    --base-light-color: #bbdefb;
    --base-dark-color: #1976d2;
    --base-pressed-color: #6ab8f7;
    --base-focused-color: #42a5f5;
    --base-invisible-color: rgba(33, 150, 243, 0);
    --base-foreground-color: green !important;
    --accent-color: #ff9800;
    --accent-light-color: #ffe0b2;
    --accent-dark-color: #f57c00;
    --accent-pressed-color: #ffb74d;
    --accent-invisible-color: rgba(255, 152, 0, 0);
    --accent-foreground-color: #222;
    --confirm-color: #7cb342;
    --confirm-pressed-color: #a2cc75;
    --alert-color: #c62828;
    --alert-pressed-color: #de5c5c;
    --color: blue !important;
    --reverse-color: #fff;
    --highlight-color: rgba(17, 17, 17, 0.54);
    --disabled-color: rgba(17, 17, 17, 0.38);
    --reverse-disabled-color: rgba(255, 255, 255, 0.38);
    --divider-color: #e2e2e2;
    --selected-background-color: #e0e0e0;
    --hovered-background-color: #eee;
    --header-background-color: #f5f5f5;
    --faded-color: #e1e1e1;
    --background-color: #fafafa;
    --alt-background-color: #f5f5f5;
    --reverse-background-color: #303030;
    --reverse-alt-background-color: #3a3a3a;
    --overlay-color: rgba(0, 0, 0, 0.03);
    --content-padding: 16px;
    --listitem-selected-background-color: #e0e0e0;
    --reverse-border-color: #e0e0e0;
    --reverse-alt-border-color: #e0e0e0;
}

.x-grid {
    --color: red !important;
}
```

#### Replace src/app/app.module.ts

Open the src/app/app.module.js file in the editor and replace the contents with the following:

```sh

import { ExtAngularGridModule } from '@sencha/ext-angular-grid';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularGridModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


#### Replace src/app/app.component.ts

Open the src/app/app.component.ts file in the editor and replace the contents with the following: 

```sh

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<ext-grid
    [title]="title"
    [columns]="columns"
    [data]="data"
    height="250px"
    (ready)="readyGrid($event)"
>
</ext-grid>

<ext-lockedgrid
    [title]="title"
    [columns]="lockedcolumns"
    [data]="data"
    height="250px"
    (ready)="readyGrid($event)"
>
</ext-lockedgrid>



`,
    styles: []
})
export class AppComponent {
    title = 'the grid';
    data = [
        {name: 'Marc', email: 'marc@gmail.com'},
        {name: 'Nick', email: 'nick@gmail.com'},
        {name: 'Andy', email: 'andy@gmail.com'},
    ];
    columns = [
        {text:"name", dataIndex:"name", width:200},
        {text:"email", dataIndex:"email", flex: 1}
    ];
    lockedcolumns = [
        {text:"name", locked: true, dataIndex:"name", width:200},
        {text:"email", dataIndex:"email", flex: 1}
    ];

    readyGrid = (event) => {
        console.log('in readyGrid - event.detail.cmp:');
        console.log(event.detail.cmp);
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

gridcellbase,booleancell,gridcell,checkcell,datecell,numbercell,rownumberercell,textcell,treecell,widgetcell,celleditor,booleancolumn,checkcolumn,gridcolumn,column,templatecolumn,datecolumn,dragcolumn,numbercolumn,rownumberer,selectioncolumn,textcolumn,treecolumn,grid,headercontainer,lockedgrid,lockedgridregion,gridcolumnsmenu,gridgroupbythismenuitem,gridshowingroupsmenuitem,gridsortascmenuitem,gridsortdescmenuitem,pagingtoolbar,gridrow,rowbody,roweditorbar,roweditorcell,roweditor,roweditorgap,rowheader,gridsummaryrow,tree

#### imports in the npm package module:
##### @sencha/ext-angular-grid/ext-angular-grid.module

