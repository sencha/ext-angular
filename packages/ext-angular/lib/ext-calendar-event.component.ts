import { Ext_calendar_Event } from './Ext/calendar/Event';
export class ExtCalendar_eventMetaData extends Ext_calendar_Event {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_eventMetaData.PROPERTIES = Ext_calendar_Event.getProperties(ExtCalendar_eventMetaData.PROPERTIES);
        ExtCalendar_eventMetaData.EVENTS = Ext_calendar_Event.getEvents(ExtCalendar_eventMetaData.EVENTS);
        ExtCalendar_eventMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_eventMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_eventMetaData.getAll();})();

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
  selector: 'ext-calendar-event',
  inputs: ExtCalendar_eventMetaData.PROPERTIES,
  outputs: ExtCalendar_eventMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_eventComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_eventComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_eventMetaData.PROPERTIES,
            ExtCalendar_eventMetaData.EVENTS
        )
        this.xtype = 'calendar-event'
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
