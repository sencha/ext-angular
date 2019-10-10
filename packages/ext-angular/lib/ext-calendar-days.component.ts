import { Ext_calendar_panel_Days } from './Ext/calendar/panel/Days';
export class ExtCalendar_daysMetaData extends Ext_calendar_panel_Days {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_daysMetaData.PROPERTIES = Ext_calendar_panel_Days.getProperties(ExtCalendar_daysMetaData.PROPERTIES);
        ExtCalendar_daysMetaData.EVENTS = Ext_calendar_panel_Days.getEvents(ExtCalendar_daysMetaData.EVENTS);
        ExtCalendar_daysMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_daysMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_daysMetaData.getAll();})();

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
  selector: 'ext-calendar-days',
  inputs: ExtCalendar_daysMetaData.PROPERTIES,
  outputs: ExtCalendar_daysMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_daysComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_daysComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_daysMetaData.PROPERTIES,
            ExtCalendar_daysMetaData.EVENTS
        )
        this.xtype = 'calendar-days'
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
