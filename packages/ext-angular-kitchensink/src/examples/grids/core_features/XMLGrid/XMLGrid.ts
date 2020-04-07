declare var Ext: any;
import { Component } from '@angular/core';

@Component({
  selector: 'xmlgrid-component',
  templateUrl: './XMLGrid.html',
  styles: [``]
})
export class XMLGridComponent {

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
      url: 'assets/resources/data/Grids/sheldon.xml',
      reader: {
        type: 'xml',
        record: 'Item',
        idProperty: 'ASIN',
        totalRecords: '@total'
      }
    }
  })

}
