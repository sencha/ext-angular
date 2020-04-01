declare var Ext: any;
import { Component } from '@angular/core';
import { generateData, randomDate } from '../generateSaleData';
import { model } from '../SaleModel';

@Component({
  selector: 'CompactLayout-component',
  templateUrl: './CompactLayout.html',
  styles: [``]
})
export class CompactLayoutComponent {

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

  monthLabelRenderer = value => Ext.Date.monthNames[value]

  pivotgridMatrix = {
    type: 'local',
    // change the text of the column generated for all left axis dimensions
    textRowLabels: 'Custom header',
    // change the width of the column generated for all left axis dimensions
    compactViewColumnWidth: 210,
    // Set layout type to "compact"
    viewLayoutType: 'compact',
    store: this.store,
    // Configure the aggregate dimensions. Multiple dimensions are supported.
    aggregate: [{
        dataIndex: 'value',
        header: 'Total',
        aggregator: 'sum',
        width: 120
    }],
    // Configure the left axis dimensions that will be used to generate
    // the grid rows
    leftAxis: [{
        dataIndex: 'person',
        header: 'Person'
    }, {
        dataIndex: 'company',
        header: 'Company',
        sortable: false
    }, {
        dataIndex: 'country',
        header: 'Country'
    }],
    // Configure the top axis dimensions that will be used to generate
    // the columns.
    //
    // When columns are generated the aggregate dimensions are also used.
    // If multiple aggregation dimensions are defined then each top axis
    // result will have in the end a column header with children columns
    // for each aggregate dimension defined.
    topAxis: [{
        dataIndex: 'year',
        header: 'Year'
    }, {
        dataIndex: 'month',
        header: 'Month',
        labelRenderer: this.monthLabelRenderer
    }]
  }

}