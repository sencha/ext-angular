import { Ext_calendar_header_Weeks } from './Ext/calendar/header/Weeks';
export class ExtCalendar_weeksheaderMetaData extends Ext_calendar_header_Weeks {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_weeksheaderMetaData.PROPERTIES = Ext_calendar_header_Weeks.getProperties(ExtCalendar_weeksheaderMetaData.PROPERTIES);
        ExtCalendar_weeksheaderMetaData.EVENTS = Ext_calendar_header_Weeks.getEvents(ExtCalendar_weeksheaderMetaData.EVENTS);
        ExtCalendar_weeksheaderMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_weeksheaderMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_weeksheaderMetaData.getAll();})();

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
  selector: 'ext-calendar-weeksheader',
  inputs: ExtCalendar_weeksheaderMetaData.PROPERTIES,
  outputs: ExtCalendar_weeksheaderMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weeksheaderComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_weeksheaderComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_weeksheaderMetaData.PROPERTIES,
            ExtCalendar_weeksheaderMetaData.EVENTS
        )
        this.xtype = 'calendar-weeksheader'
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
