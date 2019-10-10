import { Ext_calendar_form_CalendarPicker } from './Ext/calendar/form/CalendarPicker';
export declare class ExtCalendar_calendar_pickerMetaData extends Ext_calendar_form_CalendarPicker {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtCalendar_calendar_pickerComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
