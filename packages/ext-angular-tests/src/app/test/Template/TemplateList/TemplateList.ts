import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'template-list-component',
  templateUrl: './TemplateList.html',
})

export class TemplateListComponent implements OnInit {

    constructor() { }
    store = Ext.create('Ext.data.Store', {
        data: [
            { first: 'Mark', last: 'Brocato' }
        ]
    });

    itemTpl =
        `<div>
            <span #item className="text">{first} {last}</span>
            <button #item itemId="button" text="Button"></button>
        </div>`;

    ngOnInit() {
    }

}
