import { Ext_calendar_view_Day } from './Ext/calendar/view/Day';
export class ExtCalendar_dayviewMetaData extends Ext_calendar_view_Day {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_dayviewMetaData.PROPERTIES = Ext_calendar_view_Day.getProperties(ExtCalendar_dayviewMetaData.PROPERTIES);
        ExtCalendar_dayviewMetaData.EVENTS = Ext_calendar_view_Day.getEvents(ExtCalendar_dayviewMetaData.EVENTS);
        ExtCalendar_dayviewMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_dayviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_dayviewMetaData.getAll();})();

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
  selector: 'ext-calendar-dayview',
  inputs: ExtCalendar_dayviewMetaData.PROPERTIES,
  outputs: ExtCalendar_dayviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_dayviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_dayviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_dayviewMetaData.PROPERTIES,
            ExtCalendar_dayviewMetaData.EVENTS
        )
        this.xtype = 'calendar-dayview'
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
