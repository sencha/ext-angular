import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {data} from "./data";

declare var Ext: any;

@Component({
  selector: 'treelist-component',
  templateUrl: './TreeList.html',
  styles: [``]
})
export class TreeListComponent implements OnInit {

    store = Ext.create('Ext.data.TreeStore', {
        rootVisible: true,
        root: data
    });

    nav = true;
    micro = false;
    width = undefined;
    isPhone = Ext.os.is.Phone;


  constructor() { }

  toggleNav = function(event) {
      console.log("toggleNav : ");
      console.log(event);
      this.nav = event.value;
  }

  toggleMicro = function(event) {
      console.log("toggleNav : ");
      console.log(event);
      this.micro = event.value;
      this.nav = this.micro || this.nav;
      this.width = this.micro ? 56 : undefined; 
  }


  ngOnInit() {
  }


}