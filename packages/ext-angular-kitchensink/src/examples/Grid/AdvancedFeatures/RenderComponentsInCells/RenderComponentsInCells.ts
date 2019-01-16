import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { GridService } from '../../Grid.service'
import { ActionCellsComponent } from './ActionCells'

declare var Ext: any;

@Component({
  selector: 'rendercomponentsincell-component',
  templateUrl: './RenderComponentsInCells.html',
  styles: [``]
})
export class RenderComponentsInCellsComponent implements OnInit {

  constructor(gridService: GridService) {
    gridService.initCompanyData();
  }

  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: '/KitchenSink/Companys'
    }
  });





  ngOnInit() {
  }

  buyHandler = (button) => {
    let gridrow = button.up('gridrow'),
      record = gridrow.getRecord();
    Ext.toast(`Buy ${record.get('name')}`)
  }
  sellHandler = (button) => {
    let gridrow = button.up('gridrow'),
      record = gridrow.getRecord();
    Ext.toast(`Sell ${record.get('name')}`)
  }
  watchHandler = (button) => {
    let gridrow = button.up('gridrow'),
      record = gridrow.getRecord();
    Ext.toast(`Watch ${record.get('name')}`)
  }

  gridItems = [
    {
      text: 'Buy',
      handler : this.buyHandler
    }, 
    {
      text: 'Sell',
      handler : this.sellHandler
    }, 
    {
      text: 'Watch',
      handler : this.watchHandler
      }
    ];

  
  renderActionsCell = (value, record) => {
    return `
        <action-cell 
            [buyHandler]=this.buyHandler.bind(this, record)" 
            [sellHandler]="this.sellHandler.bind(this, record)" 
            [watchHandler]="this.watchHandler.bind(this, record)" 
        ></action-cell>
    `
}

renderNumberCell(format, value) {
  var formattedValue = Ext.util.Format.number(value, format);
  var color = "";
  if(value > 0) {
    color = "green"
  }
  else if (value < 0) {
    color = "red";
  }
    return `
        <span  [style]="{ color: ${color}}">
            ${formattedValue}
        </span>
    `
}



}