import { Ext_d3_hierarchy_tree_HorizontalTree } from './Ext/d3/hierarchy/tree/HorizontalTree';
export declare class ExtD3_treeMetaData extends Ext_d3_hierarchy_tree_HorizontalTree {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtD3_treeComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
