import { Ext_field_trigger_Reveal } from './Ext/field/trigger/Reveal';
export class ExtRevealtriggerMetaData extends Ext_field_trigger_Reveal {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRevealtriggerMetaData.PROPERTIES = Ext_field_trigger_Reveal.getProperties(ExtRevealtriggerMetaData.PROPERTIES);
        ExtRevealtriggerMetaData.EVENTS = Ext_field_trigger_Reveal.getEvents(ExtRevealtriggerMetaData.EVENTS);
        ExtRevealtriggerMetaData.EVENTS.forEach( (event: any) => {
            ExtRevealtriggerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRevealtriggerMetaData.getAll();})();

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
  selector: 'ext-revealtrigger',
  inputs: ExtRevealtriggerMetaData.PROPERTIES,
  outputs: ExtRevealtriggerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRevealtriggerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRevealtriggerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRevealtriggerMetaData.PROPERTIES,
            ExtRevealtriggerMetaData.EVENTS
        )
        this.xtype = 'revealtrigger'
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
