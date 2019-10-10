import { EngBase } from './eng-base';
export declare class ExtInputfieldMetaData {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
}
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtInputfieldComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
