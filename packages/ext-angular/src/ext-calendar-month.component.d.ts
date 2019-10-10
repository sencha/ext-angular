import { Ext_calendar_panel_Month } from './Ext/calendar/panel/Month';
export declare class ExtCalendar_monthMetaData extends Ext_calendar_panel_Month {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtCalendar_monthComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
