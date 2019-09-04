declare var Ext: any;
import { Component } from '@angular/core';
import { GridService } from '../Grid.service'

Ext.require([
  'Ext.grid.cell.Number',
  'Ext.grid.cell.Widget',
  'Ext.grid.SummaryRow',
  'Ext.ux.rating.Picker',
  'Ext.grid.filters.Plugin'
]);

@Component({
  selector: 'groupedgrid-component',
  templateUrl: './GroupedGrid.html',
  styles: [``]
})
export class GroupedGridComponent {

  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/KitchenSink/Restaurants'
    },
    sorters: ['cuisine', 'name'],
    groupField: 'cuisine'
});

grouped= true;

onToggleGrouping = on => { this.grouped = on;}

  constructor(gridService: GridService) {
    gridService.initResturantData();
   }


}
