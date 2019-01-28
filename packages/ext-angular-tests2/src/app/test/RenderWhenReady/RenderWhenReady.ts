import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

declare var Ext: any;

@Component({
  selector: 'render-when-ready-component',
  templateUrl: './RenderWhenReady.html',
})

export class RenderWhenReadyComponent implements OnInit {

    constructor() { }

    ngOnInit() {
    }

    ngAfterViewInit() {

    }

}
