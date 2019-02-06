declare var Ext: any;
import { Component } from '@angular/core';
import {data} from "./data";

@Component({
  selector: 'treelist-component',
  templateUrl: './TreeList.html',
  styles: [``]
})
export class TreeListComponent {

  store = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  });
  nav = true;
  micro = false;
  width = undefined;
  isPhone = Ext.os.is.Phone;

  toggleNav = function(event) {
    this.nav = event.value;
  }

  toggleMicro = function(event) {
    this.micro = event.value;
    this.nav = this.micro || this.nav;
    this.width = this.micro ? 56 : undefined; 
  }

}