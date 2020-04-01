declare var Ext: any;
import { Component } from '@angular/core';
import { generateData, randomDate } from '../generateSaleData';
import { model } from '../SaleModel';

@Component({
  selector: 'OutlineLayout-component',
  templateUrl: './OutlineLayout.html',
  styles: [``]
})
export class OutlineLayoutComponent {

   isPhone = Ext.os.is.Phone;

   store = Ext.create('Ext.data.Store', {
    model: model,
    data: generateData()
  });

  pivotgrid:any;

  onPivotGridRead = function(event) {
    this.pivotgrid = event.cmp;
  }

  expandAll = () => { this.pivotgrid.expandAll() }
  collapseAll = () => { this.pivotgrid.collapseAll() }

  pivotgridMatrix = {
    type: 'local',
    store: this.store,
    viewLayoutType: 'outline',
    aggregate: [{
        dataIndex: 'value',
        header: 'Total',
        aggregator: 'sum',
        width: 110
    }],
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
    topAxis: [{
        dataIndex: 'year',
        header: 'Year'
    }]
  };




}