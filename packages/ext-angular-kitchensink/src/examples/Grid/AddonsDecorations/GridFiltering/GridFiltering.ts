declare var Ext: any;
import { Component } from '@angular/core';
import { model } from './GridModel'
import {GridFilteringService} from './GridFiltering.service'

Ext.require([
    'Ext.grid.filters.*',
    'Ext.grid.plugin.SummaryRow',
    'Ext.data.summary.Average',
    'Ext.data.summary.Max',
    'Ext.grid.column.Boolean'
]);

@Component({
  selector: 'GridFiltering-component',
  templateUrl: './GridFiltering.html',
  styles: [``]
})
export class GridFilteringComponent {

  isPhone = Ext.os.is.Phone;
  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/BigData'
    }
  });

  constructor(gridFiletringService : GridFilteringService) { }

  nameSorter = (rec1, rec2) => {
    // Sort prioritizing surname over forename as would be expected.
    var rec1Name = rec1.get('surname') + rec1.get('forename'),
        rec2Name = rec2.get('surname') + rec2.get('forename');
     if (rec1Name > rec2Name) {
        return 1;
    }
     if (rec1Name < rec2Name) {
        return -1;
    }
     return 0;
  }

}