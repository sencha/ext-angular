declare var Ext: any;
import { Component } from '@angular/core';
import {data} from './data'
@Component({
  selector: 'tree-component',
  templateUrl: './Tree.html',
  styles: [``]
})
export class TreeComponent {

  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  
  treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  })

}