import { Ext_calendar_List } from './Ext/calendar/List';
export class ExtCalendar_listMetaData extends Ext_calendar_List {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_listMetaData.PROPERTIES = Ext_calendar_List.getProperties(ExtCalendar_listMetaData.PROPERTIES);
        ExtCalendar_listMetaData.EVENTS = Ext_calendar_List.getEvents(ExtCalendar_listMetaData.EVENTS);
        ExtCalendar_listMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_listMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_listMetaData.getAll();})();

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
  selector: 'ext-calendar-list',
  inputs: ExtCalendar_listMetaData.PROPERTIES,
  outputs: ExtCalendar_listMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_listComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_listComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_listMetaData.PROPERTIES,
            ExtCalendar_listMetaData.EVENTS
        )
        this.xtype = 'calendar-list'
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
