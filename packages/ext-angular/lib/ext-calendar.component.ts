import { Ext_calendar_panel_Panel } from './Ext/calendar/panel/Panel';
export class ExtCalendarMetaData extends Ext_calendar_panel_Panel {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendarMetaData.PROPERTIES = Ext_calendar_panel_Panel.getProperties(ExtCalendarMetaData.PROPERTIES);
        ExtCalendarMetaData.EVENTS = Ext_calendar_panel_Panel.getEvents(ExtCalendarMetaData.EVENTS);
        ExtCalendarMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendarMetaData.getAll();})();

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
  selector: 'ext-calendar',
  inputs: ExtCalendarMetaData.PROPERTIES,
  outputs: ExtCalendarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendarMetaData.PROPERTIES,
            ExtCalendarMetaData.EVENTS
        )
        this.xtype = 'calendar'
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
