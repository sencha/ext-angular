import { Ext_calendar_form_CalendarPicker } from './Ext/calendar/form/CalendarPicker';
export class ExtCalendar_calendar_pickerMetaData extends Ext_calendar_form_CalendarPicker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_calendar_pickerMetaData.PROPERTIES = Ext_calendar_form_CalendarPicker.getProperties(ExtCalendar_calendar_pickerMetaData.PROPERTIES);
        ExtCalendar_calendar_pickerMetaData.EVENTS = Ext_calendar_form_CalendarPicker.getEvents(ExtCalendar_calendar_pickerMetaData.EVENTS);
        ExtCalendar_calendar_pickerMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_calendar_pickerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_calendar_pickerMetaData.getAll();})();

import { EngBase } from './eng-base';
import {
  Host,
  Optional,
  SkipSelf,
  //Output,
  //OnInit,
  //AfterViewInit,
  //OnChanges,
  Component,
  ElementRef,
  forwardRef,
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ext-calendar-calendar-picker',
  inputs: ExtCalendar_calendar_pickerMetaData.PROPERTIES,
  outputs: ExtCalendar_calendar_pickerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_calendar_pickerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_calendar_pickerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_calendar_pickerMetaData.PROPERTIES,
            ExtCalendar_calendar_pickerMetaData.EVENTS
        )
        this.xtype = 'calendar-calendar-picker'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes: SimpleChanges) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}
