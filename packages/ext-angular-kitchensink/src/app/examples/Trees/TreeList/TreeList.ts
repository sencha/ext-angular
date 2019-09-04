declare var Ext: any;
import { Component } from '@angular/core';
import {data} from "./data";

@Component({
  selector: 'treelist-component',
  templateUrl: './TreeList.html',
  styles: [``]
})
export class TreeListComponent {

  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null

  store = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  });
  nav = true;
  micro = false;
  //width = undefined;
  //isPhone = Ext.os.is.Phone;

  toggleNav = function(event) {
    this.nav = event.value;
  }

  toggleMicro = function(event) {
    this.micro = event.value;
    this.nav = this.micro || this.nav;
    //this.width = this.micro ? 56 : undefined; 
  }

}