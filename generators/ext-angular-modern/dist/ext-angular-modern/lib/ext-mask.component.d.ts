import { OnInit, AfterContentInit, OnChanges, ElementRef } from '@angular/core';
import { base } from './base';
export declare class maskMetaData {
    static XTYPE: string;
    static PROPERTIESOBJECT: any;
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
}
export declare class ExtMaskComponent extends base implements OnInit, AfterContentInit, OnChanges {
    constructor(eRef: ElementRef);
    ngOnInit(): void;
    ngAfterContentInit(): void;
}
