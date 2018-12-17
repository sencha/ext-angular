import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'rel-dialog-component',
  templateUrl: './RelDialog.html',
})

export class RelDialogComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    displayed:boolean = true;

    close = () => {
        this.displayed = false;
    }

}