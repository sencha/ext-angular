declare var Ext: any
import { Component } from '@angular/core';

// Ext.require([
//   'Ext.layout.Fit'
// ]);
@Component({
  selector: 'ext-angular-root',
  styles: [``],
  template: `
  <panel [fullscreen]="true" title="Ext Angular Test App">

  <button text="floating menu">
    <menu [floated]="true">
      <menucheckitem
        [checked]="true"
        [separator]="true"
        text="Check item with handler">
        <menu>
          <menuitem text="Subitem 1 of Checked item"></menuitem>
          <menuitem text="Subitem 2 of Checked item"></menuitem>
        </menu>

      </menucheckitem>
      <menuseparator></menuseparator>
      <menuitem text="menu2">
        <menu>
          <menuitem text="menu4"></menuitem>
        </menu>
      </menuitem>
      <menuitem text="menu3"></menuitem>
    </menu>
  </button>


    <menu [floated]="false" [docked]="'left'">
      <menuitem 
        [checked]="true"
        [separator]="true"
        text="menu1">
      </menuitem>
      <menuitem text="menu2">
        <menu>
          <menuitem text="menu4"></menuitem>
        </menu>
      </menuitem>
      <menuitem text="menu3"></menuitem>
    </menu>


  </panel>




  `
})
export class AppComponent {



  // {
  //   xtype: 'button',
  //   text: 'Floating Menu',
  //   menu: {
  //       bind: {
  //           groups: '{menuGroups}'
  //       },
  //       items: [{
  //           text: 'Item One',
  //           handler: 'onItemOneClick'
  //       }, {
  //           text: 'Disabled, therefore immutable',
  //           checked: true,
  //           disabled: true
  //       }, {
  //           text: 'Simple check item',
  //           checked: false,
  //           separator: true,
  //           listeners: {
  //               checkchange: 'onSimpleCheckChange'
  //           }
  //       }, {
  //           text: 'Check item with handler',
  //           checked: false,
  //           separator: true,
  //           handler: 'onCheckItemClick',
  //           listeners: {
  //               checkchange: 'onCheckItemCheckChange'
  //           },
  //           menu: [{
  //               text: 'Subitem one of Check item',
  //               handler: 'onSubItem1Click'
  //           }, {
  //               text: 'Subitem two of Check item',
  //               handler: 'onSubItem2Click'
  //           }]
  //       }, {



}
