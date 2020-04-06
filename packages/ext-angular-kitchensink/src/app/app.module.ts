declare var Ext: any;
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { ExtAngularModernModule } from '@sencha/ext-angular-modern'
import { AppComponent } from './app.component';

import { ButtonComponent }          from "../examples/components/buttons/Button/Button";
import { SplitButtonComponent }     from "../examples/components/buttons/SplitButton/SplitButton";
import { SegmentedButtonComponent } from "../examples/components/buttons/SegmentedButton/SegmentedButton";
import { CarouselComponent }        from '../examples/components/Carousel/Carousel';
import { ColorPickerComponent }     from '../examples/components/ColorPicker/ColorPicker';

var declarations: any = [
  AppComponent,
  ButtonComponent,
  SplitButtonComponent,
  SegmentedButtonComponent,
  CarouselComponent,
  ColorPickerComponent,
]

var treeRoot = {
  id: '/',
  text: 'All',
  children: [
    { text: 'Components', navIcon: 'icon-buttons', children: [
      { text: 'Buttons', navIcon: 'icon-buttons', children: [
        { text: 'Button', component: ButtonComponent, layout: 'center', navIcon: 'icon-buttons' },
        { text: 'SplitButton', component: SplitButtonComponent, layout: 'center', navIcon: 'icon-buttons' },
        { text: 'SegmentedButton', component: SegmentedButtonComponent, layout: 'center', navIcon: 'icon-segmented-buttons' },
      ]},
      { text: 'Carousel', component: CarouselComponent, navIcon: 'icon-carousel' },
      { text: 'ColorPicker', component: ColorPickerComponent, layout: 'center', navIcon: 'icon-color-picker' },
    ]}
  ]
}

var theroutes =[
    { path: 'frame-index.html', redirectTo: '/', pathMatch: 'full' },
    { path: '', redirectTo: '/', pathMatch: 'full' },
    { path: 'components/buttons/button', component: ButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/buttons/splitbutton', component: SplitButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/buttons/segmentedbutton', component: SegmentedButtonComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/carousel', component: CarouselComponent, text: 'Button', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
    { path: 'components/colorpicker', component: ColorPickerComponent, text: 'Color Picker', iconCls: 'x-fa fa-calendar', xtype: 'homeview', leaf: true },
  ];

  
  function transform(node, parentUrl) {
    node.leaf = !node.hasOwnProperty('children');
    node.iconCls = node.navIcon;

    if (node.text && !node.id) {
        node.id = (parentUrl === '/' ? '' : parentUrl) + '/' + node.text.toLowerCase().replace(/\s/g, '_').replace(/[^\w]/g, '');
    }

    node.name = node.text;

    if (node.children) {
        node.children = node.children.filter(node => !node.hidden);
        node.children.forEach(child => transform(child, node.id))
    }
  }
  transform(treeRoot, null);
  //console.log(treeRoot)
  window['treeroot'] = treeRoot
  //console.log(window['treeroot'])

interface ExtAngularRoute extends Route {
  text?: string;
  iconCls?: string;
  xtype?: string;
  leaf?: boolean;
}
const routes : ExtAngularRoute[] = theroutes

@NgModule({
  declarations: declarations,
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    ExtAngularModernModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
