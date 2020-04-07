declare var Ext: any;
import { Component } from '@angular/core';
import { GridService } from '../../Grid.service';
import { model } from '../../CompanyModel';

Ext.require({"xtype":"renderercell"})
Ext.require([
  'Ext.grid.plugin.HeaderReorder'
]);

@Component({
  selector: 'basicgrid-component',
  templateUrl: './BasicGrid.html',
  styles: [``]
})
export class BasicGridComponent {

  // store = Ext.create('Ext.data.Store', {
  //   model,
  //   autoLoad: true,
  //   pageSize: 0,
  //   proxy: {
  //     type: 'ajax',
  //     url: '/KitchenSink/Companys'
  //   }
  // })

  store = {
    xtype: 'store',
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/Companys'
    }
  }

  // columns = [
  //   { text: 'Company', dataIndex: 'name'}
  // ]

  //renderSign = (format, value) =>  {
  renderSign = (value) =>  {
    var formattedValue = Ext.util.Format.number(value, '0.00');
    var col = ''
    if(value > 0) {col = 'green'}
    else if(value < 0 ) {col = 'red'}
    return `<span style='color:${col}'>${formattedValue}</span>`
  }

  constructor(gridService :GridService) {
    gridService.initCompanyData();
  }

}