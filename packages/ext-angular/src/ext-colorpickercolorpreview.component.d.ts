import { OnInit, AfterContentInit, OnChanges, ElementRef } from '@angular/core';
import { base } from './base';
export declare class colorpickercolorpreviewMetaData {
    static XTYPE: string;
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
}
export declare class ExtColorpickercolorpreviewComponent extends base implements OnInit, AfterContentInit, OnChanges {
    hostComponent: base;
    constructor(eRef: ElementRef, hostComponent: base);
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
