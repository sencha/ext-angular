declare var Ext: any;
import { Component } from '@angular/core';
import { generateData, randomDate } from '../generateSaleData';
import { model } from '../SaleModel';

@Component({
  selector: 'Collapsible-component',
  templateUrl: './Collapsible.html',
  styles: [``]
})
export class CollapsibleComponent {

  isPhone = Ext.os.is.Phone;

  constructor() {
    this.loadData();
   }

  store = Ext.create('Ext.data.Store', {
    model: model
  })

  loadData = () => {
    const data = generateData(20);
    for(let i=0; i<data.length; i++) {
      data[i].company = 'Dell';
      data[i].date = randomDate(new Date(2016, 0, 1), new Date(2016, 0, 31));
    }
    this.store.loadData(data);
  }

  monthLabelRenderer = value => Ext.Date.monthNames[value]

  collapsibleRows:boolean= false;
  collapsibleColumns:boolean= false;

  pivotgrid:any;
  onReady = function(event) {
    this.pivotgrid = event.cmp;
  }

  pivotgridMatrix = {
    type: 'local',
    collapsibleRows: this.collapsibleRows,
    rowSubTotalsPosition: 'none',
    collapsibleColumns : this.collapsibleColumns,
    colSubTotalsPosition: 'none',
    viewLayoutType: 'tabular',
    store: this.store,
    aggregate: [{
      dataIndex: 'value',
      header: 'Total',
      aggregator: 'sum',
      width: 90
    }],
    leftAxis: [
      {
        dataIndex: 'person',
        header: 'Person'
      },
      {
        dataIndex: 'company',
        header: 'Company'
      },
      {
        dataIndex: 'year',
        header: 'Year'
      }
    ],
    topAxis: [
      {
        dataIndex: 'country',
        header: 'Country'
      },
      {
        dataIndex: 'month',
        labelRenderer: this.monthLabelRenderer,
        header: 'Month'
      }
    ]
  };

   onCollapsibleChange = (item) => {
    var collapsibleColumns = false
    var collapsibleRows = false
    switch(item._text) {
      case 'None':
        collapsibleColumns = false
        collapsibleRows = false
        break;
      case 'Rows Only':
        collapsibleColumns = false
        collapsibleRows = true
        break;
      case 'Columns Only':
        collapsibleColumns = true
        collapsibleRows = false
        break;
      case 'Rows & Columns':
        collapsibleColumns = true
        collapsibleRows = true
        break;
      default:
        collapsibleColumns = false
        collapsibleRows = false
    }

    this.collapsibleColumns = collapsibleColumns;
    this.collapsibleRows = collapsibleRows;
    this.pivotgridMatrix.collapsibleColumns = this.collapsibleColumns ;
    this.pivotgridMatrix.collapsibleRows = this.collapsibleRows ;
    this.pivotgrid.setMatrix(this.pivotgridMatrix);
  }

}