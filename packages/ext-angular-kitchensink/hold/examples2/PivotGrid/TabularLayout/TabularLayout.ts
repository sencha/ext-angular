declare var Ext: any;
import { Component } from '@angular/core';
import { generateData, randomDate } from '../generateSaleData';
import { model } from '../SaleModel';

@Component({
  selector: 'TabularLayout-component',
  templateUrl: './TabularLayout.html',
  styles: [``]
})
export class TabularLayoutComponent {

   isPhone = Ext.os.is.Phone;
   store = Ext.create('Ext.data.Store', {
    model: model,
    data: generateData()
  })

  pivotgrid:any;

  onPivotGridRead = function(event) {
    this.pivotgrid = event.cmp;
  }

  expandAll = () => { this.pivotgrid.expandAll() }
  collapseAll = () => { this.pivotgrid.collapseAll() }

  pivotgridMatrix = {
    type: 'local',
    store: this.store,
    // Set layout type to "tabular"
    viewLayoutType: 'tabular',
    // Configure the aggregate dimensions. Multiple dimensions are supported.
    aggregate: [{
        dataIndex: 'value',
        header: 'Total',
        aggregator: 'sum',
        width: 110
    }],
    // Configure the left axis dimensions that will be used to generate
    // the grid rows
    leftAxis: [{
        dataIndex: 'person',
        header: 'Person',
        width: 150
    }, {
        dataIndex: 'company',
        header: 'Company',
        sortable: false,
        width: 150
    }, {
        dataIndex: 'country',
        header: 'Country',
        width: 150
    }],
    /**
    * Configure the top axis dimensions that will be used to generate
    * the columns.
    *
    * When columns are generated the aggregate dimensions are also used.
    * If multiple aggregation dimensions are defined then each top axis
    * result will have in the end a column header with children columns
    * for each aggregate dimension defined.
    */
    topAxis: [{
        dataIndex: 'year',
        header: 'Year'
    }]
  };

}