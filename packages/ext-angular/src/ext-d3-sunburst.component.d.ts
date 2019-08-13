import { OnInit, AfterContentInit, OnChanges, ElementRef } from '@angular/core';
import { base } from './base';
export declare class d3_sunburstMetaData {
    static XTYPE: string;
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
}
export declare class ExtD3_sunburstComponent extends base implements OnInit, AfterContentInit, OnChanges {
    hostComponent: base;
    constructor(eRef: ElementRef, hostComponent: base);
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
