declare var Ext: any;
import { Component } from '@angular/core';
import {model} from '../../CompanyModel';

Ext.require([
  'Ext.grid.plugin.SummaryRow',
  'Ext.data.summary.Average',
  'Ext.data.summary.Max',
]);

@Component({
  selector: 'summaryrow-component',
  templateUrl: './SummaryRow.html',
  styles: [``]
})
export class SummaryRowComponent {

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: 'resources/data/CompanyData.json'
    } 
  });

  renderSign = (format, value) => {
    var formattedValue = Ext.util.Format.number(value, format);
    var color = "";
    if(value > 0) {
      color = "green";
    }
    else {
      color = "red";
    }
    return formattedValue;
  } ;

summarizeCompanies = (grid, context) => context.records.length + ' Companies';

}