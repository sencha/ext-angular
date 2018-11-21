import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {data} from "./data"

declare var Ext: any;

@Component({
  selector: 'treegrid-component',
  templateUrl: './TreeGrid.html',
  styles: [``]
})
export class TreeGridComponent implements OnInit {

  constructor() { }

  store = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
})


  ngOnInit() {
  }


}