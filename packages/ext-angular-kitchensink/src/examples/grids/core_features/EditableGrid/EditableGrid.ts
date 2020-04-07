import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GridService } from '../../Grid.service'
import { model } from '../../CompanyModel'

declare var Ext: any;

Ext.require([
  'Ext.grid.plugin.Editable',
  'Ext.grid.plugin.CellEditing',
  'Ext.data.validator.Presence',
  'Ext.data.validator.Number',
  'Ext.data.validator.Date'
]);



@Component({
  selector: 'editablegrid-component',
  templateUrl: './EditableGrid.html',
  styles: [``]
})
export class EditableGridComponent implements OnInit {

  store = Ext.create('Ext.data.Store', {
    model,
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/Companys'
    }
  });

  isDesktop = Ext.os.is.Desktop ;
  pressType : string;
  pressEntity : string;

  constructor(gridService: GridService) {
    gridService.initCompanyData();
  }

//  renderSign = (format, value) => {
  renderSign = (value) => {
    var formattedValue = Ext.util.Format.number(value, '0.00');
    var col = '';
    if (value > 0) {
      col = 'green';
    }
    else if (value < 0) {
      col = 'red';
    }
    //return "<span style=' color:" +  col +  "'>" + formattedValue + "</span>"
    return formattedValue;
  }

  ngOnInit() {
    if(this.isDesktop) {
      this.pressType = "click";
      this.pressEntity = "company or price"
    }
    else {
      this.pressType = "tap";
      this.pressEntity = "row"
    }
  }

}
