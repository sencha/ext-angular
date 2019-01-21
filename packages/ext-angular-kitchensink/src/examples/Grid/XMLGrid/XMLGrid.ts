import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'xmlgrid-component',
  templateUrl: './XMLGrid.html',
  styles: [``]
})
export class XMLGridComponent implements OnInit {

  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields:[
      {name: 'Author', mapping: '@author.name'},
      'Title', 
      'Manufacturer', 
      'ProductGroup'
    ],
    proxy:{
      type: 'ajax',
      url: 'resources/data/Grids/sheldon.xml',
      reader: {
        type: 'xml',
        record: 'Item',
        idProperty: 'ASIN',
        totalRecords: '@total'
      }
    }
  })        

  constructor() { }



  ngOnInit() {
  }


}
