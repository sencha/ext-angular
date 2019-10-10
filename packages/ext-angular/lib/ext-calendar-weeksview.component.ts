import { Ext_calendar_view_Weeks } from './Ext/calendar/view/Weeks';
export class ExtCalendar_weeksviewMetaData extends Ext_calendar_view_Weeks {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_weeksviewMetaData.PROPERTIES = Ext_calendar_view_Weeks.getProperties(ExtCalendar_weeksviewMetaData.PROPERTIES);
        ExtCalendar_weeksviewMetaData.EVENTS = Ext_calendar_view_Weeks.getEvents(ExtCalendar_weeksviewMetaData.EVENTS);
        ExtCalendar_weeksviewMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_weeksviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_weeksviewMetaData.getAll();})();

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
  selector: 'ext-calendar-weeksview',
  inputs: ExtCalendar_weeksviewMetaData.PROPERTIES,
  outputs: ExtCalendar_weeksviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weeksviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_weeksviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_weeksviewMetaData.PROPERTIES,
            ExtCalendar_weeksviewMetaData.EVENTS
        )
        this.xtype = 'calendar-weeksview'
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
