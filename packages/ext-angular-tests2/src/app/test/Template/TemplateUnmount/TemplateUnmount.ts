import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'template-unmount-component',
  templateUrl: './TemplateUnmount.html',
})

export class TemplateUnmountComponent implements OnInit {

    constructor() { }

    showList:boolean = true;
    store = new Ext.data.Store({
        data: [{ value: 'Test' }]
    });

    itemTpl = `<list-item value={value}></list-item>`;

    toggleList() {
        this.showList = !this.showList;
    }

    ngOnInit() {
    }

}