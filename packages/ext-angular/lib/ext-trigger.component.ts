import { Ext_field_trigger_Trigger } from './Ext/field/trigger/Trigger';
export class ExtTriggerMetaData extends Ext_field_trigger_Trigger {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTriggerMetaData.PROPERTIES = Ext_field_trigger_Trigger.getProperties(ExtTriggerMetaData.PROPERTIES);
        ExtTriggerMetaData.EVENTS = Ext_field_trigger_Trigger.getEvents(ExtTriggerMetaData.EVENTS);
        ExtTriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtTriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTriggerMetaData.getAll();})();

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
  selector: 'ext-trigger',
  inputs: ExtTriggerMetaData.PROPERTIES,
  outputs: ExtTriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTriggerMetaData.PROPERTIES,
            ExtTriggerMetaData.EVENTS
        )
        this.xtype = 'trigger'
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
