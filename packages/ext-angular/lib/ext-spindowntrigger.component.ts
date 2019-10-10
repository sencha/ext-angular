import { Ext_field_trigger_SpinDown } from './Ext/field/trigger/SpinDown';
export class ExtSpindowntriggerMetaData extends Ext_field_trigger_SpinDown {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSpindowntriggerMetaData.PROPERTIES = Ext_field_trigger_SpinDown.getProperties(ExtSpindowntriggerMetaData.PROPERTIES);
        ExtSpindowntriggerMetaData.EVENTS = Ext_field_trigger_SpinDown.getEvents(ExtSpindowntriggerMetaData.EVENTS);
        ExtSpindowntriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtSpindowntriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSpindowntriggerMetaData.getAll();})();

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
  selector: 'ext-spindowntrigger',
  inputs: ExtSpindowntriggerMetaData.PROPERTIES,
  outputs: ExtSpindowntriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSpindowntriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSpindowntriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSpindowntriggerMetaData.PROPERTIES,
            ExtSpindowntriggerMetaData.EVENTS
        )
        this.xtype = 'spindowntrigger'
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
