declare var Ext: any;
import { Component } from '@angular/core';
import {data} from './data'
@Component({
  selector: 'treereorder-component',
  templateUrl: './TreeReorder.html',
  styles: [``]
})
export class TreeReorderComponent {
  toolbar:any;
  treeCmp:any;
  treeStore = Ext.create('Ext.data.TreeStore', {
    rootVisible: true,
    root: data
  });

  onTreeReady = (event) => {
    this.treeCmp = event.ext;
  }
  
  toolbarReady = (event) => {
    this.toolbar = event.ext;
  }

  onExpandAllClick = () => {
      this.treeCmp.mask({
          xtype: 'loadmask',
          message: 'Expanding tree...'
      });

      this.toolbar.disable();

      this.treeCmp.expandAll(() => {
          this.treeCmp.unmask();
          this.toolbar.enable();
      });
  }

  onCollapseAllClick = () => {
      this.toolbar.disable();

      this.treeCmp.collapseAll(() => {
          this.toolbar.enable();
      });
  }
}