declare var Ext: any;
import { Component } from '@angular/core';

Ext.require([
  'Ext.data.TreeStore',
  'Ext.grid.plugin.TreeDragDrop'
]);

@Component({
  selector: 'treereorder-component',
  templateUrl: './TreeReorder.html',
  styles: [``]
})
export class TreeReorderComponent {
  toolbar:any;
  treeCmp:any;

  treeStore = Ext.create('Ext.data.TreeStore', {
      type: 'tree',
      rootVisible: true,
      sorters: [{
          property: 'text',
          direction: 'ASC'
      }],
      root: {
          text: 'Products',
          expanded: true
      },
      proxy: {
          type: 'ajax',
          url: 'assets/resources/data/tree/cars.json'
      },
  });

  onTreeReady = (event) => {
    this.treeCmp = event.cmp;
  }

  toolbarReady = (event) => {
    this.toolbar = event.cmp;
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

  onResetClick = () => {
      this.treeStore.reload();
  }
}
