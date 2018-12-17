import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {model} from '../../CompanyModel';


declare var Ext: any;

Ext.require(['Ext.grid.plugin.RowExpander'])

@Component({
  selector: 'rowexpander-component',
  templateUrl: './RowExpander.html',
  styles: [``]
})
export class RowExpanderComponent implements OnInit {

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: null,
    proxy: {
      type: 'ajax',
      url: 'build/resources/data/CompanyData.json',
    }
  })


  tplVal = 
    `
    <div>
      <div>Industry: {industry}</div>
      <div>Last Updated: {lastChange} </div>
      <div style="{marginTop:'1em'}">{desc}</div>
    </div>
    `;

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