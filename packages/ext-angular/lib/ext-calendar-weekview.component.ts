import { Ext_calendar_view_Week } from './Ext/calendar/view/Week';
export class ExtCalendar_weekviewMetaData extends Ext_calendar_view_Week {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_weekviewMetaData.PROPERTIES = Ext_calendar_view_Week.getProperties(ExtCalendar_weekviewMetaData.PROPERTIES);
        ExtCalendar_weekviewMetaData.EVENTS = Ext_calendar_view_Week.getEvents(ExtCalendar_weekviewMetaData.EVENTS);
        ExtCalendar_weekviewMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_weekviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_weekviewMetaData.getAll();})();

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
  selector: 'ext-calendar-weekview',
  inputs: ExtCalendar_weekviewMetaData.PROPERTIES,
  outputs: ExtCalendar_weekviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_weekviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_weekviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_weekviewMetaData.PROPERTIES,
            ExtCalendar_weekviewMetaData.EVENTS
        )
        this.xtype = 'calendar-weekview'
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
