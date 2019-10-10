import { Ext_field_trigger_SpinUp } from './Ext/field/trigger/SpinUp';
export class ExtSpinuptriggerMetaData extends Ext_field_trigger_SpinUp {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSpinuptriggerMetaData.PROPERTIES = Ext_field_trigger_SpinUp.getProperties(ExtSpinuptriggerMetaData.PROPERTIES);
        ExtSpinuptriggerMetaData.EVENTS = Ext_field_trigger_SpinUp.getEvents(ExtSpinuptriggerMetaData.EVENTS);
        ExtSpinuptriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtSpinuptriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSpinuptriggerMetaData.getAll();})();

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
  selector: 'ext-spinuptrigger',
  inputs: ExtSpinuptriggerMetaData.PROPERTIES,
  outputs: ExtSpinuptriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSpinuptriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSpinuptriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSpinuptriggerMetaData.PROPERTIES,
            ExtSpinuptriggerMetaData.EVENTS
        )
        this.xtype = 'spinuptrigger'
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
