## @sencha/ext-angular-blank

last run: Sun Sep 15 2019 17:06:03 GMT-0400 (EDT)

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

#### Replace src/styles.css (optional)

If you want to get a look at different styling...
Open the src/styles.css file in the editor and replace the contents with the following:

```sh
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

import { ExtAngularAllModule } from '@sencha/ext-angular-all'
//import '@sencha/ext-web-components/ext-web-components.module';
// import '@sencha/ext-web-components-all/lib/ext-panel.component';
// import '@sencha/ext-web-components-all/lib/ext-toolbar.component';
// import '@sencha/ext-web-components-all/lib/ext-button.component';
// import '@sencha/ext-web-components-all/lib/ext-grid.component';
// import '@sencha/ext-web-components-all/lib/ext-column.component';
{imports}

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [{declarationsx}
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [ ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}

```


#### Replace src/app/app.component.ts

Open the src/app/app.component.ts file in the editor and replace the contents with the following: 

```sh

import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
<ext-panel viewport="true" title="panel" layout="fit">
    <ext-toolbar docked="top">
        <ext-button text="toolbar button"></ext-button>
    </ext-toolbar>
    <ext-grid
        [title]="title"
        (ready)="readyGrid($event)"
    >
        <ext-column text="name" dataIndex="name"></ext-column>
        <ext-column text="email" dataIndex="email" flex="1"></ext-column>
    </ext-grid>
</ext-panel>
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
        var grid = event.target.ext;
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

