## @sencha/ext-angular-pivot

last run: Tue Oct 08 2019 12:22:50 GMT-0400 (Eastern Daylight Time)

This npm package contains the minimum files that are needed to provide for the @sencha/ext-angular-pivot package for an Angular application

## Test with an Angular CLI generated app

#### Install Angular CLI

```sh
npm install -g @angular/cli
```

should be @angular/cli@8.3.x


#### Create a new Angular CLI application

```sh
ng new ng-eng-pivot --minimal=true --interactive=false -g=true --skipInstall=true
```

#### Open your editor

To open Visual Studio Code, type the following:

```sh
cd ng-eng-pivot; code .
```

#### Add to package.json

In the dependencies section of package.json, add the following:

```sh
"@sencha/ext-angular-pivot": "7.1.0",
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

import { ExtAngularPivotModule } from '@sencha/ext-angular-pivot';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ExtAngularPivotModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

```


#### Replace src/app/app.component.ts

Open the src/app/app.component.ts file in the editor and replace the contents with the following: 

```sh

declare var Ext: any;

const regions = {
    "Belgium": 'Europe',
    "Netherlands": 'Europe',
    "United Kingdom": 'Europe',
    "Canada": 'North America',
    "United States": 'North America',
    "Australia": 'Australia'
};

const model = Ext.define(null, {
  extend: 'Ext.data.Model',
  fields: [
    {name: 'id',        type: 'int'},
    {name: 'company',   type: 'string'},
    {name: 'country',   type: 'string'},
    {name: 'person',    type: 'string'},
    {name: 'date',      type: 'date', dateFormat: 'c'},
    {name: 'value',     type: 'float'},
    {name: 'quantity',  type: 'float'},
    {
      name: 'year',
      calculate: function(data){
        return parseInt(Ext.Date.format(data.date, "Y"), 10);
      }
    },
    {
      name: 'month',
      calculate: function(data){
        return parseInt(Ext.Date.format(data.date, "m"), 10) - 1;
      }
    },
    {
      name: 'continent',
      calculate: function(data){
        return regions[data.country];
      }
    }
  ]
})

let rand = 37;
const companies = ['Google', 'Apple', 'Dell', 'Microsoft', 'Adobe'],
      countries = ['Belgium', 'Netherlands', 'United Kingdom', 'Canada', 'United States', 'Australia'],
      persons = ['John', 'Michael', 'Mary', 'Anne', 'Robert'];

const randomItem =  function (data) {
  const k = rand % data.length;
  rand = rand * 1664525 + 1013904223;
  rand &= 0x7FFFFFFF;
  return data[k];
};

const randomDate = function (start, end) {
  return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime() ));
}

const generateData = function generateData(items=500) {
  const data = [];
  for(let i=0; i<items; i++) {
    data.push({
      company:    randomItem(companies),
      country:    randomItem(countries),
      person:     randomItem(persons),
      date:       randomDate(new Date(2012, 0, 1), new Date()),
      value:      Math.random() * 1000 + 1,
      quantity:   Math.floor(Math.random() * 30 + 1)
    });
  }
  return data;
}

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<ext-pivotgrid
    (ready)="onPivotGridRead($event)"
    shadow="true"
    [selectable]="{ cells: true }"
    [startRowGroupsCollapsed]="false"
    [startColGroupsCollapsed]="false"
    [matrix]="pivotgridMatrix"
>
</ext-pivotgrid>
`,
    styles: []
})
export class AppComponent {

    store = Ext.create('Ext.data.Store', {
        model: model,
        data: generateData()
    });

    pivotgrid: any;

    onPivotGridRead = function(event) {
        this.pivotgrid = event.detail.cmp;
    }

    expandAll = () => { this.pivotgrid.expandAll() }
    collapseAll = () => { this.pivotgrid.collapseAll() }

    pivotgridMatrix = {
        type: 'local',
        store: this.store,
        viewLayoutType: 'outline',
        aggregate: [{
            dataIndex: 'value',
            header: 'Total',
            aggregator: 'sum',
            width: 110
        }],
        leftAxis: [{
            dataIndex: 'person',
            header: 'Person',
            width: 150
        }, {
            dataIndex: 'company',
            header: 'Company',
            sortable: false,
            width: 150
        }, {
            dataIndex: 'country',
            header: 'Country',
            width: 150
        }],
        topAxis: [{
            dataIndex: 'year',
            header: 'Year'
        }]
    };

}

```

#### Run the application

Type the following in a command/terminal window:

```sh
ng serve --open --port 4200
```

open http://localhost:4200 in a browser - the ExtAngular application will load

#### components in this package:

pivotgridcell,pivotgridgroupcell,pivotd3container,pivotheatmap,pivottreemap,pivotgrid,pivotconfigfield,pivotconfigcontainer,pivotconfigform,pivotconfigpanel,pivotsettings,pivotrangeeditor,pivotgridrow

#### imports in the npm package module:
##### @sencha/ext-angular-pivot/ext-angular-pivot.module

