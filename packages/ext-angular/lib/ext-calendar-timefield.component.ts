import { Ext_calendar_form_TimeField } from './Ext/calendar/form/TimeField';
export class ExtCalendar_timefieldMetaData extends Ext_calendar_form_TimeField {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_timefieldMetaData.PROPERTIES = Ext_calendar_form_TimeField.getProperties(ExtCalendar_timefieldMetaData.PROPERTIES);
        ExtCalendar_timefieldMetaData.EVENTS = Ext_calendar_form_TimeField.getEvents(ExtCalendar_timefieldMetaData.EVENTS);
        ExtCalendar_timefieldMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_timefieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_timefieldMetaData.getAll();})();

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
  selector: 'ext-calendar-timefield',
  inputs: ExtCalendar_timefieldMetaData.PROPERTIES,
  outputs: ExtCalendar_timefieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_timefieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_timefieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_timefieldMetaData.PROPERTIES,
            ExtCalendar_timefieldMetaData.EVENTS
        )
        this.xtype = 'calendar-timefield'
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
