import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'rel-grid-column-component',
  templateUrl: './RelGridColumn.html',
})

export class RelGridColumnComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    store = Ext.create('Ext.data.Store', {
        data: [
            { first: 'Mark', last: 'Brocato', trend: [1,2,3,4,3,2,1] }
        ]
    });
}