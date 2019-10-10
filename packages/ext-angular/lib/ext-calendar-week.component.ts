import { Ext_calendar_panel_Week } from './Ext/calendar/panel/Week';
export class ExtCalendar_weekMetaData extends Ext_calendar_panel_Week {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_weekMetaData.PROPERTIES = Ext_calendar_panel_Week.getProperties(ExtCalendar_weekMetaData.PROPERTIES);
        ExtCalendar_weekMetaData.EVENTS = Ext_calendar_panel_Week.getEvents(ExtCalendar_weekMetaData.EVENTS);
        ExtCalendar_weekMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_weekMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_weekMetaData.getAll();})();

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
  selector: 'ext-calendar-week',
  inputs: ExtCalendar_weekMetaData.PROPERTIES,
  outputs: ExtCalendar_weekMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weekComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_weekComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_weekMetaData.PROPERTIES,
            ExtCalendar_weekMetaData.EVENTS
        )
        this.xtype = 'calendar-week'
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
