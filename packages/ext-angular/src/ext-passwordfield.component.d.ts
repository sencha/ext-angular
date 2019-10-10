import { Ext_form_Password } from './Ext/form/Password';
export declare class ExtPasswordfieldMetaData extends Ext_form_Password {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtPasswordfieldComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
