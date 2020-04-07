declare var Ext: any;
import { Component } from '@angular/core';
import { model } from '../../PlantModel';
// import { model } from '../CompanyModel';

Ext.require([
    'Ext.grid.rowedit.Plugin'
])

@Component({
  selector: 'EditibleRow-component',
  templateUrl: './EditableRow.html',
  styles: [``]
})
export class EditableRowComponent {
    // companies = Ext.create('Ext.data.Store', {
    //     model,
    //     autoLoad: true,
    //     pageSize: 0,
    //     proxy: {
    //       type: 'ajax',
    //       url: 'assets/resources/data/CompanyData.json'
    //     }
    // });
    plants = Ext.create('Ext.data.Store', {
        autoLoad: true,
        model,

        proxy: {
            type: 'ajax',
            url: 'assets/resources/data/Grids/plants.xml',
            reader: {
                type: 'xml',
                record: 'plant'
            }
        }
    })
}