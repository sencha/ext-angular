declare var Ext: any;
import { Component } from '@angular/core';
import './InfiniteGridData';

Ext.require([
    'Ext.grid.filters.Plugin'
]);

@Component({
  selector: 'InfiniteGrid-component',
  templateUrl: './InfiniteGrid.html',
  styles: [``]
})
export class InfiniteGridComponent {

}