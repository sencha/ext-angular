import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'list-item',
  templateUrl: './ListItem.html',
})

export class ListItemComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    componentWillUnmount() {
        document.getElementById('message').innerHTML = 'unmounted';
    }

}
