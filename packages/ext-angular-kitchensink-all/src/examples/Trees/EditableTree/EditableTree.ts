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
  isPhone = Ext.os.is.Phone;
  top = !this.isPhone ? '10' : null
  left = !this.isPhone ? '10' : null
  width = !this.isPhone ? '400' : null
  height = !this.isPhone ? '600' : null
  store = data;
}