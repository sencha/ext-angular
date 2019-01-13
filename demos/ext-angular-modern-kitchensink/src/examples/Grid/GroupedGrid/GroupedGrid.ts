import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GridService } from '../Grid.service'

declare var Ext: any;

Ext.require([
  'Ext.grid.cell.Number',
  'Ext.grid.cell.Widget',
  'Ext.grid.SummaryRow',
  'Ext.ux.rating.Picker'
]);

@Component({
  selector: 'groupedgrid-component',
  templateUrl: './GroupedGrid.html',
  styles: [``]
})
export class GroupedGridComponent implements OnInit {

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



  ngOnInit() {
  }


}
