import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {model} from '../../CompanyModel'

declare var Ext: any;


Ext.require([
    'Ext.grid.filters.*',
    'Ext.grid.plugin.SummaryRow',
    'Ext.data.summary.Average',
    'Ext.data.summary.Max',
]);

@Component({
  selector: 'GridFiltering-component',
  templateUrl: './GridFiltering.html',
  styles: [``]
})
export class GridFilteringComponent implements OnInit {

  constructor() { }



  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: 'build/resources/data/CompanyData.json'
    } 
  });

  renderSign = (format, value) =>  {
    return Ext.util.Format.number(value, format);
  }


 summarizeCompanies = (grid, context) => context.records.length + ' Companies';



  ngOnInit() {
  }

   isPhone = Ext.os.is.Phone;

}