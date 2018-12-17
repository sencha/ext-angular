import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'template-grid-component',
  templateUrl: './TemplateGrid.html',
})

export class TemplateGridComponent implements OnInit {

    constructor() { }
    store = Ext.create('Ext.data.Store', {
        data: [
            { first: 'Mark', last: 'Brocato' }
        ]
    });

    nameTpl = `<div #item className='item'>{first} {last}</div>`;

    ngOnInit() {
    }

}
