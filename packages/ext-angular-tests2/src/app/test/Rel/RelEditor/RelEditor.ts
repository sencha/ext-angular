import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;
Ext.require('Ext.grid.plugin.CellEditing');

@Component({
  selector: 'rel-editor-component',
  templateUrl: './RelEditor.html',
})

export class RelEditorComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    store = Ext.create('Ext.data.Store', {
        data: [
            { value: '1' }
        ]
    });

}