import { Ext_calendar_panel_Weeks } from './Ext/calendar/panel/Weeks';
export class ExtCalendar_weeksMetaData extends Ext_calendar_panel_Weeks {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_weeksMetaData.PROPERTIES = Ext_calendar_panel_Weeks.getProperties(ExtCalendar_weeksMetaData.PROPERTIES);
        ExtCalendar_weeksMetaData.EVENTS = Ext_calendar_panel_Weeks.getEvents(ExtCalendar_weeksMetaData.EVENTS);
        ExtCalendar_weeksMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_weeksMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_weeksMetaData.getAll();})();

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
  selector: 'ext-calendar-weeks',
  inputs: ExtCalendar_weeksMetaData.PROPERTIES,
  outputs: ExtCalendar_weeksMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weeksComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_weeksComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_weeksMetaData.PROPERTIES,
            ExtCalendar_weeksMetaData.EVENTS
        )
        this.xtype = 'calendar-weeks'
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
