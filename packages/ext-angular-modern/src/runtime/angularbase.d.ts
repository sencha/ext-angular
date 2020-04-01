import { QueryList, SimpleChanges } from '@angular/core';
export declare class EngBase {
    xtype: any;
    properties: any;
    A: any;
    node: any;
    parentNode: any;
    base: any;
    eventnames: any;
    _extitems: QueryList<any>;
    _childComponents: QueryList<EngBase>;
    get childComponents(): EngBase[];
    constructor(eRef: any, hostComponent: any, properties: any, events: any, eventnames: any, vc?: any);
    baseOnInit(): void;
    baseAfterViewInit(): void;
    baseOnChanges(changes: SimpleChanges): void;
    baseOnDestroy(): void;
}
