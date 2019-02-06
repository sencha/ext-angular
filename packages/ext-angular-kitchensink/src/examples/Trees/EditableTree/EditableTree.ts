declare var Ext: any;
import { Component } from '@angular/core';
import {data} from "./data"

Ext.require([
  'Ext.grid.plugin.Editable',
  'Ext.grid.plugin.CellEditing'
]);

@Component({
  selector: 'editabletree-component',
  templateUrl: './EditableTree.html',
  styles: [``]
})
export class EditableTreeComponent {

  store = data;

}