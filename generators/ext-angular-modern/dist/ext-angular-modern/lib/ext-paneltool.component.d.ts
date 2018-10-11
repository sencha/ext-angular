import { OnInit, AfterContentInit, OnChanges, ElementRef } from '@angular/core';
import { base } from './base';
export declare class paneltoolMetaData {
    static XTYPE: string;
    static PROPERTIESOBJECT: any;
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
}
export declare class ExtPaneltoolComponent extends base implements OnInit, AfterContentInit, OnChanges {
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
