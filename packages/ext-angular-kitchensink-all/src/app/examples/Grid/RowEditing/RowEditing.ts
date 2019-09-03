declare var Ext: any;
import { Component } from '@angular/core';
import { model } from '../PlantModel';
// import { model } from '../CompanyModel';

Ext.require([
    'Ext.grid.rowedit.Plugin'
])

@Component({
  selector: 'LockingGrid-component',
  templateUrl: './RowEditing.html',
  styles: [``]
})
export class RowEditingComponent {
    // companies = Ext.create('Ext.data.Store', {
    //     model,
    //     autoLoad: true,
    //     pageSize: 0,
    //     proxy: {
    //       type: 'ajax',
    //       url: 'resources/data/CompanyData.json'
    //     } 
    // });
    plants = Ext.create('Ext.data.Store', {
        autoLoad: true,
        model,

        proxy: {
            type: 'ajax',
            url: 'resources/data/Grids/plants.xml',
            reader: {
                type: 'xml',
                record: 'plant'
            }
        }
    })
}