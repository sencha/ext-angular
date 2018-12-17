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

  tree:any;
  treeReady = (event) => {
    console.log("tree ready!");
    this.tree = event.ext;
    //this.tree.setColumns(this.gridColumns);
  }

  /*
  gridColumns =  [
      {
          text: "Name",
          dataIndex: "text",
          width: 200
      },{
          text: "# Items",
          dataIndex: "numItems",
          width: 150,
          align:"center",
          format:"0,0"
      }
  ]
  */


}