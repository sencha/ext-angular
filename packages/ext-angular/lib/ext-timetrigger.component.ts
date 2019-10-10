import { Ext_field_trigger_Time } from './Ext/field/trigger/Time';
export class ExtTimetriggerMetaData extends Ext_field_trigger_Time {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTimetriggerMetaData.PROPERTIES = Ext_field_trigger_Time.getProperties(ExtTimetriggerMetaData.PROPERTIES);
        ExtTimetriggerMetaData.EVENTS = Ext_field_trigger_Time.getEvents(ExtTimetriggerMetaData.EVENTS);
        ExtTimetriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtTimetriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTimetriggerMetaData.getAll();})();

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
  selector: 'ext-timetrigger',
  inputs: ExtTimetriggerMetaData.PROPERTIES,
  outputs: ExtTimetriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTimetriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTimetriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTimetriggerMetaData.PROPERTIES,
            ExtTimetriggerMetaData.EVENTS
        )
        this.xtype = 'timetrigger'
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
