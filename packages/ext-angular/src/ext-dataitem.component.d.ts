import { Ext_dataview_component_DataItem } from './Ext/dataview/component/DataItem';
export declare class ExtDataitemMetaData extends Ext_dataview_component_DataItem {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtDataitemComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
