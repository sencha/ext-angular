import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

Ext.define('Ext.plugin.Foo', {
    extend: 'Ext.plugin.Abstract',
    alias: 'plugin.foo'
});


@Component({
  selector: 'responsive-component',
  templateUrl: './Responsive.html',
})

export class ResponsiveComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }
}

