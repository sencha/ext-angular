import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'rel-array-delete-component',
  templateUrl: './RelArrayDelete.html',
})

export class RelArrayDeleteComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    store = Ext.create('Ext.data.Store', {
        data: [
            { first: 'Mark', last: 'Brocato' }
        ]
    });

    showLastName:boolean = true;

    toggleLastName = () => {
        this.showLastName = !this.showLastName;
    }

}