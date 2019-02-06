import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {model} from '../../CompanyModel';

declare var Ext: any;

Ext.require(['Ext.grid.plugin.ViewOptions']);

@Component({
  selector: 'videooprions-component',
  templateUrl: './ViewOptions.html',
  styles: [``]
})
export class ViewOptionsComponent implements OnInit {

  toolbarHtml = `
  <div style="fontSize:'14px';fontWeight: 'normal';">Long press on a column header to customize this grid.</div>
  `

  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: 'resources/data/CompanyData.json'
    } 
  });

  constructor() { }

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

  ngOnInit() {
  }


}