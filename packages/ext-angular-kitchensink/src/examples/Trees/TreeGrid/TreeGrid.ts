declare var Ext: any;
import { Component } from '@angular/core';
import {data} from "./data"

@Component({
  selector: 'treegrid-component',
  templateUrl: './TreeGrid.html',
  styles: [``]
})
export class TreeGridComponent {

  store = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  })

  tree:any;
  treeReady = (event) => {
    this.tree = event.ext;
  }

}