import { Ext_calendar_form_Edit } from './Ext/calendar/form/Edit';
export class ExtCalendar_form_editMetaData extends Ext_calendar_form_Edit {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCalendar_form_editMetaData.PROPERTIES = Ext_calendar_form_Edit.getProperties(ExtCalendar_form_editMetaData.PROPERTIES);
        ExtCalendar_form_editMetaData.EVENTS = Ext_calendar_form_Edit.getEvents(ExtCalendar_form_editMetaData.EVENTS);
        ExtCalendar_form_editMetaData.EVENTS.forEach( (event: any) => {
            ExtCalendar_form_editMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCalendar_form_editMetaData.getAll();})();

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
  selector: 'ext-calendar-form-edit',
  inputs: ExtCalendar_form_editMetaData.PROPERTIES,
  outputs: ExtCalendar_form_editMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_form_editComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_form_editComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_form_editMetaData.PROPERTIES,
            ExtCalendar_form_editMetaData.EVENTS
        )
        this.xtype = 'calendar-form-edit'
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
