import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { tree, TreeColumn } from '@sencha/ext-modern-treegrid';

declare var Ext: any;

import {data} from './data'

@Component({
  selector: 'tree-component',
  templateUrl: './Tree.html',
  styles: [``]
})
export class TreeComponent implements OnInit {

  constructor() { }

  treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  })
 

  ngOnInit() {
    console.log("treestore : ");
      console.log(this.treeStore);
  }


}