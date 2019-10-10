import { Ext_dataview_pullrefresh_Spinner } from './Ext/dataview/pullrefresh/Spinner';
export declare class ExtPullrefreshspinnerMetaData extends Ext_dataview_pullrefresh_Spinner {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtPullrefreshspinnerComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
