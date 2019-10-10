import { Ext_calendar_form_Add } from './Ext/calendar/form/Add';
export class ExtCalendar_form_addMetaData extends Ext_calendar_form_Add {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_form_addMetaData.PROPERTIES = Ext_calendar_form_Add.getProperties(ExtCalendar_form_addMetaData.PROPERTIES);
        ExtCalendar_form_addMetaData.EVENTS = Ext_calendar_form_Add.getEvents(ExtCalendar_form_addMetaData.EVENTS);
        ExtCalendar_form_addMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_form_addMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_form_addMetaData.getAll();})();

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
  selector: 'ext-calendar-form-add',
  inputs: ExtCalendar_form_addMetaData.PROPERTIES,
  outputs: ExtCalendar_form_addMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_form_addComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_form_addComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_form_addMetaData.PROPERTIES,
            ExtCalendar_form_addMetaData.EVENTS
        )
        this.xtype = 'calendar-form-add'
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
