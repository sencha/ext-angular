import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {model} from '../../CompanyModel';

declare var Ext: any;


@Component({
  selector: 'rowbody-component',
  templateUrl: './RowBody.html',
  styles: [``]
})
export class RowBodyComponent implements OnInit {

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
      pageSize: 0,
      proxy: {
          type: 'ajax',
          url: 'build/resources/data/CompanyData.json'
      } 
  });   



  tpl = 
    `
    <div>
      <div>Industry: {industry}</div>
      <div>Last Updated: {lastChange} </div>
      <div style="{marginTop:'1em'}">{desc}</div>
    </div>
    `;

  gridItemConfig = {
    body:{
        tpl: this.tpl
    }
  };

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
  }

  constructor() { }



  ngOnInit() {
  }


}