declare var Ext: any;
import { Component } from '@angular/core';
import {data} from './data'
@Component({
  selector: 'tree-component',
  templateUrl: './Tree.html',
  styles: [``]
})
export class TreeComponent {

  treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  })

}