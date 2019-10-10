import { Ext_calendar_view_Month } from './Ext/calendar/view/Month';
export class ExtCalendar_monthviewMetaData extends Ext_calendar_view_Month {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_monthviewMetaData.PROPERTIES = Ext_calendar_view_Month.getProperties(ExtCalendar_monthviewMetaData.PROPERTIES);
        ExtCalendar_monthviewMetaData.EVENTS = Ext_calendar_view_Month.getEvents(ExtCalendar_monthviewMetaData.EVENTS);
        ExtCalendar_monthviewMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_monthviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_monthviewMetaData.getAll();})();

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
  selector: 'ext-calendar-monthview',
  inputs: ExtCalendar_monthviewMetaData.PROPERTIES,
  outputs: ExtCalendar_monthviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_monthviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_monthviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_monthviewMetaData.PROPERTIES,
            ExtCalendar_monthviewMetaData.EVENTS
        )
        this.xtype = 'calendar-monthview'
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
