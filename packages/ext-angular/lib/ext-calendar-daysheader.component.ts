import { Ext_calendar_header_Days } from './Ext/calendar/header/Days';
export class ExtCalendar_daysheaderMetaData extends Ext_calendar_header_Days {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_daysheaderMetaData.PROPERTIES = Ext_calendar_header_Days.getProperties(ExtCalendar_daysheaderMetaData.PROPERTIES);
        ExtCalendar_daysheaderMetaData.EVENTS = Ext_calendar_header_Days.getEvents(ExtCalendar_daysheaderMetaData.EVENTS);
        ExtCalendar_daysheaderMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_daysheaderMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_daysheaderMetaData.getAll();})();

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
  selector: 'ext-calendar-daysheader',
  inputs: ExtCalendar_daysheaderMetaData.PROPERTIES,
  outputs: ExtCalendar_daysheaderMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_daysheaderComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_daysheaderComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_daysheaderMetaData.PROPERTIES,
            ExtCalendar_daysheaderMetaData.EVENTS
        )
        this.xtype = 'calendar-daysheader'
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
