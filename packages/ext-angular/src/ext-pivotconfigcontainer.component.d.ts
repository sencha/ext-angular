import { Ext_pivot_plugin_configurator_Container } from './Ext/pivot/plugin/configurator/Container';
export declare class ExtPivotconfigcontainerMetaData extends Ext_pivot_plugin_configurator_Container {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtPivotconfigcontainerComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
