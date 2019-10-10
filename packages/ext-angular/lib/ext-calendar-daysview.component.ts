import { Ext_calendar_view_Days } from './Ext/calendar/view/Days';
export class ExtCalendar_daysviewMetaData extends Ext_calendar_view_Days {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_daysviewMetaData.PROPERTIES = Ext_calendar_view_Days.getProperties(ExtCalendar_daysviewMetaData.PROPERTIES);
        ExtCalendar_daysviewMetaData.EVENTS = Ext_calendar_view_Days.getEvents(ExtCalendar_daysviewMetaData.EVENTS);
        ExtCalendar_daysviewMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_daysviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_daysviewMetaData.getAll();})();

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
  selector: 'ext-calendar-daysview',
  inputs: ExtCalendar_daysviewMetaData.PROPERTIES,
  outputs: ExtCalendar_daysviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_daysviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_daysviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_daysviewMetaData.PROPERTIES,
            ExtCalendar_daysviewMetaData.EVENTS
        )
        this.xtype = 'calendar-daysview'
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
