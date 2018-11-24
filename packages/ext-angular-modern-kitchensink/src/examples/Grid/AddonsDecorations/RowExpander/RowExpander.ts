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
      url: 'resources/data/CompanyData.json',
    }
  })


  tpl = (data) => {
    console.log("tpl.data : " + data);
    /*
    <div>
      <div>Industry: {data.industry}</div>
      <div>Last Updated: {Ext.util.Format.date(data.lastChange, "Y-m-d g:ia")}</div>
      <div style={{marginTop:'1em'}}>{data.desc}</div>
    </div>
    */
  };

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