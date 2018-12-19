import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'replace-node-with-markup',
  templateUrl: './ReplaceNodeWithMarkup.html',
})

export class ReplaceNodeWithMarkupComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    state = {
        showChild: false
    }

    toggleChild = () => {
        this.state.showChild = !this.state.showChild ;
    }
}

