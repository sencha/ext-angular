import { Ext_field_trigger_Expand } from './Ext/field/trigger/Expand';
export class ExtExpandtriggerMetaData extends Ext_field_trigger_Expand {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtExpandtriggerMetaData.PROPERTIES = Ext_field_trigger_Expand.getProperties(ExtExpandtriggerMetaData.PROPERTIES);
        ExtExpandtriggerMetaData.EVENTS = Ext_field_trigger_Expand.getEvents(ExtExpandtriggerMetaData.EVENTS);
        ExtExpandtriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtExpandtriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtExpandtriggerMetaData.getAll();})();

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
  selector: 'ext-expandtrigger',
  inputs: ExtExpandtriggerMetaData.PROPERTIES,
  outputs: ExtExpandtriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtExpandtriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtExpandtriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtExpandtriggerMetaData.PROPERTIES,
            ExtExpandtriggerMetaData.EVENTS
        )
        this.xtype = 'expandtrigger'
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
