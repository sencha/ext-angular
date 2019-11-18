declare var Ext: any;
import { Component } from '@angular/core';
import {data} from "./data"

@Component({
  selector: 'treegrid-component',
  templateUrl: './TreeGrid.html',
  styles: [``]
})
export class TreeGridComponent {

  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null

  store = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  })

  tree:any;
  treeReady = (event) => {
    this.tree = event.cmp;
  }

}