import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {createStore} from './createStore'

declare var Ext: any;

Ext.require([
  'Ext.grid.plugin.Clipboard'
])

@Component({
  selector: 'selectandcopy-component',
  templateUrl: './SelectAndCopy.html',
  styles: [``]
})
export class SelectAndCopyComponent implements OnInit {

  constructor() { }

  store = createStore();

  rows: boolean = true;
  cells:boolean = true;
  columns:boolean= true;
  drag:boolean= true;

  extensible:string= 'both';
  message:string= 'No Selection';


  ngOnInit() {
  }

  toggleSelectable = field => {
    console.log("field : " + field);
    switch(field) {
      case 'rows' : 
        this.rows = !this.rows;
      break;
      case 'cells' : 
        this.cells = !this.cells;
       break;
      case 'columns' : 
        this.columns = !this.columns;
       break;
      case 'drag' : 
        this.drag = !this.drag;
       break;

    }
  }

setExtensible = extensible => {
  console.log("extensible:  " + extensible);
    this.extensible = extensible;
}

/**
 * Does not work
 */
onSelectionChange = (grid, records, selecting, selection) => {
  console.log("selection chanegd. grid : " + grid);
    let message = '??',
        firstRowIndex,
        firstColumnIndex,
        lastRowIndex,
        lastColumnIndex;

    if (!selection) {
        message = 'No selection';
    }

    else if (selection.isCells) {
        firstRowIndex = selection.getFirstRowIndex();
        firstColumnIndex = selection.getFirstColumnIndex();
        lastRowIndex = selection.getLastRowIndex();
        lastColumnIndex = selection.getLastColumnIndex();

        message = 'Selected cells: ' + (lastColumnIndex - firstColumnIndex + 1) + 'x' + (lastRowIndex - firstRowIndex + 1) +
            ' at (' + firstColumnIndex + ',' + firstRowIndex + ')';
    }
    else if (selection.isRows) {
        message = 'Selected rows: ' + selection.getCount();
    }
    else if (selection.isColumns) {
        message = 'Selected columns: ' + selection.getCount();
    }

    this.message = message;
}


}