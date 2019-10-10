import { Ext_field_trigger_Date } from './Ext/field/trigger/Date';
export class ExtDatetriggerMetaData extends Ext_field_trigger_Date {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatetriggerMetaData.PROPERTIES = Ext_field_trigger_Date.getProperties(ExtDatetriggerMetaData.PROPERTIES);
        ExtDatetriggerMetaData.EVENTS = Ext_field_trigger_Date.getEvents(ExtDatetriggerMetaData.EVENTS);
        ExtDatetriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtDatetriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatetriggerMetaData.getAll();})();

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
  selector: 'ext-datetrigger',
  inputs: ExtDatetriggerMetaData.PROPERTIES,
  outputs: ExtDatetriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatetriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatetriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatetriggerMetaData.PROPERTIES,
            ExtDatetriggerMetaData.EVENTS
        )
        this.xtype = 'datetrigger'
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
