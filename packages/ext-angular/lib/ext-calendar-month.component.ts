import { Ext_calendar_panel_Month } from './Ext/calendar/panel/Month';
export class ExtCalendar_monthMetaData extends Ext_calendar_panel_Month {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_monthMetaData.PROPERTIES = Ext_calendar_panel_Month.getProperties(ExtCalendar_monthMetaData.PROPERTIES);
        ExtCalendar_monthMetaData.EVENTS = Ext_calendar_panel_Month.getEvents(ExtCalendar_monthMetaData.EVENTS);
        ExtCalendar_monthMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_monthMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_monthMetaData.getAll();})();

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
  selector: 'ext-calendar-month',
  inputs: ExtCalendar_monthMetaData.PROPERTIES,
  outputs: ExtCalendar_monthMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_monthComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_monthComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_monthMetaData.PROPERTIES,
            ExtCalendar_monthMetaData.EVENTS
        )
        this.xtype = 'calendar-month'
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
