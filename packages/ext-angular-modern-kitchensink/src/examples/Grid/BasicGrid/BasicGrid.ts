import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

import {GridService} from '../Grid.service'
import {model} from '../CompanyModel'

declare var Ext: any;

Ext.require({"xtype":"renderercell"})

@Component({
  selector: 'basicgrid-component',
  templateUrl: './BasicGrid.html',
  styles: [``]
})
export class BasicGridComponent implements OnInit {

    store = Ext.create('Ext.data.Store', {
        model,
        autoLoad: true,
        pageSize: 0,
        proxy: {
          type: 'ajax',
          url: '/KitchenSink/Companys'
        } 
      });

      renderSign = (format, value) =>  {
        //console.log("In renderSign. format: " + format + " value : " + value);
        var formattedValue = Ext.util.Format.number(value, format);
        var col = '';
        if(value > 0) {
            col = 'green';
        }
        else if(value < 0 ) {
            col = 'red';
        }
        
        // var value: any = `<span>hi</span>`
        // var s: any = Ext.String.htmlDecode(value);
        // return s;

        //return Ext.decode(`<span style=' color:  ${col} > ${formattedValue}' </span>`);
        return formattedValue;
      }
    

  constructor(gridService :GridService) {
    gridService.initCompanyData();
   }



  ngOnInit() {
    //console.log("Store : ")
    //console.log(this.store);
  }


}