declare var Ext: any;
import { Component } from '@angular/core';
import { createStore } from './createStore'

Ext.require([
  'Ext.grid.plugin.Clipboard'
])
@Component({
  selector: 'selectandcopy-component',
  templateUrl: './SelectAndCopy.html',
  styles: [``]
})
export class SelectAndCopyComponent {

  isPhone: any;

  selectable:any = {
    columns: true,
    cells: true,
    checkbox: true,
    drag: true,
    extensible: 'both'
  }
  columns:boolean= true;
  cells:boolean = true;
  checkbox:boolean = true;
  drag:boolean= true;
  extensible:string= 'both';
  rows: boolean = true;
  message:string= 'No Selection';
  store = createStore();

  toggleSelectable = field => {
    switch(field) {
      case 'checkbox' :
        this.checkbox = !this.checkbox;
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

    this.selectable = {
      columns: this.columns,
      cells: this.cells,
      checkbox: this.checkbox,
      extensible: this.extensible,
      drag: this.drag
    }
  }

  setExtensible = extensible => {
    this.extensible = extensible;
  }

  onSelectionChange = (grid, records, selecting, selection) => {
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


// [columns]="[
//   {text:'Year',dataIndex:'year',minWidth:75,flex:1},
//   {text:'Jan',dataIndex:'jan',width:75},
//   {text:'Feb',dataIndex:'feb',width:75},
//   {text:'Mar',dataIndex:'mar',width:75},
//   {text:'Apr',dataIndex:'apr',width:75},
//   {text:'May',dataIndex:'may',width:75},
//   {text:'Jun',dataIndex:'jun',width:75},
//   {text:'Jul',dataIndex:'jul',width:75},
//   {text:'Aug',dataIndex:'aug',width:75},
//   {text:'Sep',dataIndex:'sep',width:75},
//   {text:'Oct',dataIndex:'oct',width:75},
//   {text:'Nov',dataIndex:'nov',width:75},
//   {text:'Dec',dataIndex:'dec',width:75}
// ]">

// <ExtGridcolumn text="Year" dataIndex="year" minWidth="75" flex="1"></ExtGridcolumn>
// <ExtGridcolumn text="Jan" dataIndex="jan" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Feb" dataIndex="feb" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Mar" dataIndex="mar" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Apr" dataIndex="apr" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="May" dataIndex="may" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Jun" dataIndex="jun" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Jul" dataIndex="jul" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Aug" dataIndex="aug" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Sep" dataIndex="sep" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Oct" dataIndex="oct" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Nov" dataIndex="nov" width="75"></ExtGridcolumn>
// <ExtGridcolumn text="Dev" dataIndex="dec" width="75"></ExtGridcolumn>

