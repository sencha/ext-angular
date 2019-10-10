import { Ext_calendar_panel_Day } from './Ext/calendar/panel/Day';
export class ExtCalendar_dayMetaData extends Ext_calendar_panel_Day {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_dayMetaData.PROPERTIES = Ext_calendar_panel_Day.getProperties(ExtCalendar_dayMetaData.PROPERTIES);
        ExtCalendar_dayMetaData.EVENTS = Ext_calendar_panel_Day.getEvents(ExtCalendar_dayMetaData.EVENTS);
        ExtCalendar_dayMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_dayMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_dayMetaData.getAll();})();

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
  selector: 'ext-calendar-day',
  inputs: ExtCalendar_dayMetaData.PROPERTIES,
  outputs: ExtCalendar_dayMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_dayComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_dayComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_dayMetaData.PROPERTIES,
            ExtCalendar_dayMetaData.EVENTS
        )
        this.xtype = 'calendar-day'
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
