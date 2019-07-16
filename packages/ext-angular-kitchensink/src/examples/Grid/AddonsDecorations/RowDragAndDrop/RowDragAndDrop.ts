declare var Ext: any;
import { Component } from '@angular/core';
import {model} from '../../CompanyModel';
import { BigDataService } from '../../AdvancedFeatures/BigData/BigData.service';
Ext.require(['Ext.grid.plugin.RowDragDrop']);

@Component({
  selector: 'rowdraganddrop-component',
  templateUrl: './RowDragAndDrop.html',
  styles: [``]
})

export class RowDragAndDropComponent {
  constructor(bigDataService : BigDataService) {}

  selectable = {
    checkbox: true,
  };

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: null,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/BigData',
    }
  });
}
