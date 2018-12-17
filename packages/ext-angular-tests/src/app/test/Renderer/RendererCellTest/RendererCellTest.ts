import { Component, OnInit, ViewChild, ElementRef, RendererCell } from '@angular/core';
// import { CellComponent } from './Cell/Cell';

declare var Ext: any;

@Component({
  selector: 'renderer-cell',
  templateUrl: './RendererCellTest.html',
})

export class RendererCellTestComponent implements OnInit {

  constructor() { }

  showGrid:boolean = true;

  store = Ext.create('Ext.data.Store', {
    data: [
        { first: 'Mark', last: 'Brocato' }
    ]
  });

  renderComponentCell(itemId, value, record) { 
    `<cell-component #item firstName={record.get('first')} lastName={record.get('last')} itemId={itemId}></cell-component`;
  }


  renderStringCell(value, record) {
    record.get('first') ? `record.get('first') record.get('last')` : 'summary';
  }

  destroyGrid = () => this.showGrid = false;

  ngOnInit() {
  }

}