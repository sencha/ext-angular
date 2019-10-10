import { Ext_d3_hierarchy_partition_Sunburst } from './Ext/d3/hierarchy/partition/Sunburst';
export declare class ExtD3_sunburstMetaData extends Ext_d3_hierarchy_partition_Sunburst {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtD3_sunburstComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
