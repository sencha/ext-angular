import { Ext_field_trigger_Clear } from './Ext/field/trigger/Clear';
export class ExtCleartriggerMetaData extends Ext_field_trigger_Clear {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCleartriggerMetaData.PROPERTIES = Ext_field_trigger_Clear.getProperties(ExtCleartriggerMetaData.PROPERTIES);
        ExtCleartriggerMetaData.EVENTS = Ext_field_trigger_Clear.getEvents(ExtCleartriggerMetaData.EVENTS);
        ExtCleartriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtCleartriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCleartriggerMetaData.getAll();})();

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
  selector: 'ext-cleartrigger',
  inputs: ExtCleartriggerMetaData.PROPERTIES,
  outputs: ExtCleartriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCleartriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCleartriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCleartriggerMetaData.PROPERTIES,
            ExtCleartriggerMetaData.EVENTS
        )
        this.xtype = 'cleartrigger'
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
