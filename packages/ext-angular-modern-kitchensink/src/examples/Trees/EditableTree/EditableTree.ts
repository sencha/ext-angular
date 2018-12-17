import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Tree, TreeColumn } from '@sencha/ext-modern-treegrid';
import {store} from "./data"

declare var Ext: any;

Ext.require([
  'Ext.grid.plugin.Editable',
  'Ext.grid.plugin.CellEditing'
]);

@Component({
  selector: 'editabletree-component',
  templateUrl: './EditableTree.html',
  styles: [``]
})
export class EditableTreeComponent implements OnInit {

  constructor() { }


  ngOnInit() {
  }


}