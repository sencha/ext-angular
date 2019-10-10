import { Ext_calendar_view_Multi } from './Ext/calendar/view/Multi';
export class ExtCalendar_multiviewMetaData extends Ext_calendar_view_Multi {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_multiviewMetaData.PROPERTIES = Ext_calendar_view_Multi.getProperties(ExtCalendar_multiviewMetaData.PROPERTIES);
        ExtCalendar_multiviewMetaData.EVENTS = Ext_calendar_view_Multi.getEvents(ExtCalendar_multiviewMetaData.EVENTS);
        ExtCalendar_multiviewMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_multiviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_multiviewMetaData.getAll();})();

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
  selector: 'ext-calendar-multiview',
  inputs: ExtCalendar_multiviewMetaData.PROPERTIES,
  outputs: ExtCalendar_multiviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_multiviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_multiviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_multiviewMetaData.PROPERTIES,
            ExtCalendar_multiviewMetaData.EVENTS
        )
        this.xtype = 'calendar-multiview'
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
