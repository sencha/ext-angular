import { Ext_pivot_plugin_configurator_Panel } from './Ext/pivot/plugin/configurator/Panel';
export declare class ExtPivotconfigpanelMetaData extends Ext_pivot_plugin_configurator_Panel {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtPivotconfigpanelComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
