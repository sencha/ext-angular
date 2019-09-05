## @sencha/ext-angular-blank

last run: Thu Sep 05 2019 07:39:57 GMT-0400 (Eastern Daylight Time)

This npm package contains the minimum files that are needed to provide for the @sencha/ext-angular package for an Angular application

## Test with an Angular CLI generated app

#### Install Angular CLI

```sh
npm install -g @angular/cli
```

should be @angular/cli@8.3.x


#### Create a new Angular CLI application

```sh
ng new ng-eng --minimal=true --interactive=false -g=true --skipInstall=true
```

#### Open your editor

To open Visual Studio Code, type the following:

```sh
cd ng-eng; code .
```

#### Add to package.json

In the dependencies section of package.json, add the following:

```sh
"@sencha/ext-angular": "7.0.0",
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
  <title>ext-angular example</title>
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
//import { ExtAngularModule } from '@sencha/ext-angular'
import { ExtAngularModule } from '@sencha/ext-angular'

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
    //ExtAngularModule
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

actionsheet,audio,breadcrumbbar,button,calendar-event,calendar-form-add,calendar-calendar-picker,calendar-form-edit,calendar-timefield,calendar-daysheader,calendar-weeksheader,calendar-list,calendar-day,calendar-days,calendar-month,calendar,calendar-week,calendar-weeks,calendar-dayview,calendar-daysview,calendar-monthview,calendar-multiview,calendar-weekview,calendar-weeksview,carousel,cartesian,chart,legend,chartnavigator,polar,spacefilling,chip,component,container,d3-canvas,d3-heatmap,d3-pack,d3-partition,d3-sunburst,d3-tree,d3-horizontal-tree,d3-treemap,d3-svg,d3,boundlist,chipview,componentdataview,dataitem,dataview,emptytext,indexbar,itemheader,list,listitem,listitemplaceholder,listswiperitem,listswiperstepper,nestedlist,pullrefreshbar,pullrefreshspinner,simplelistitem,dialog,window,draw,surface,editor,checkbox,checkboxfield,checkboxgroup,combobox,comboboxfield,containerfield,fieldcontainer,datefield,datepickerfield,datepickernativefield,displayfield,emailfield,field,groupcontainer,filefield,filebutton,hiddenfield,inputfield,numberfield,fieldpanel,passwordfield,pickerfield,radio,radiofield,radiogroup,searchfield,selectfield,singlesliderfield,sliderfield,spinnerfield,textfield,textareafield,timefield,togglefield,cleartrigger,datetrigger,expandtrigger,menutrigger,revealtrigger,spindowntrigger,spinuptrigger,timetrigger,trigger,urlfield,fieldset,formpanel,froalaeditor,froalaeditorfield,gridcellbase,booleancell,gridcell,checkcell,datecell,numbercell,rownumberercell,textcell,treecell,widgetcell,celleditor,booleancolumn,checkcolumn,gridcolumn,column,templatecolumn,datecolumn,dragcolumn,numbercolumn,rownumberer,selectioncolumn,textcolumn,treecolumn,grid,headercontainer,lockedgrid,lockedgridregion,gridcolumnsmenu,gridgroupbythismenuitem,gridshowingroupsmenuitem,gridsortascmenuitem,gridsortdescmenuitem,pagingtoolbar,gridrow,rowbody,roweditorbar,roweditorcell,roweditor,roweditorgap,rowheader,gridsummaryrow,tree,image,img,indicator,label,treelist,treelistitem,loadmask,mask,media,menucheckitem,menuitem,menu,menuradioitem,menuseparator,messagebox,navigationview,panel,accordion,datepanel,datetitle,panelheader,timepanel,paneltitle,yearpicker,datepicker,picker,selectpicker,pickerslot,tabletpicker,pivotgridcell,pivotgridgroupcell,pivotd3container,pivotheatmap,pivottreemap,pivotgrid,pivotconfigfield,pivotconfigcontainer,pivotconfigform,pivotconfigpanel,pivotsettings,pivotrangeeditor,pivotgridrow,progress,progressbarwidget,segmentedbutton,sheet,slider,thumb,toggleslider,spacer,sparklinebar,sparkline,sparklinebox,sparklinebullet,sparklinediscrete,sparklineline,sparklinepie,sparklinetristate,splitbutton,tabbar,tabpanel,tab,tooltip,title,titlebar,tool,paneltool,toolbar,colorbutton,colorpickercolorpreview,colorfield,colorselector,gauge,map,google-map,rating,video,viewport,widget

#### imports in the npm package module:
##### @sencha/ext-angular/ext-angular.module

