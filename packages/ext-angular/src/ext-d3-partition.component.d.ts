import { Ext_d3_hierarchy_partition_Partition } from './Ext/d3/hierarchy/partition/Partition';
export declare class ExtD3_partitionMetaData extends Ext_d3_hierarchy_partition_Partition {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtD3_partitionComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
