import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'rel-update-component',
  templateUrl: './RelUpdate.html',
})

export class RelUpdateComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    showMenu:boolean = false;

    toggleMenu = () => {
        this.showMenu = !this.showMenu;
    }

}