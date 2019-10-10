import { Ext_field_Time } from './Ext/field/Time';
export class ExtTimefieldMetaData extends Ext_field_Time {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTimefieldMetaData.PROPERTIES = Ext_field_Time.getProperties(ExtTimefieldMetaData.PROPERTIES);
        ExtTimefieldMetaData.EVENTS = Ext_field_Time.getEvents(ExtTimefieldMetaData.EVENTS);
        ExtTimefieldMetaData.EVENTS.forEach( (event: any) => {
            ExtTimefieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTimefieldMetaData.getAll();})();

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
  selector: 'ext-timefield',
  inputs: ExtTimefieldMetaData.PROPERTIES,
  outputs: ExtTimefieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTimefieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTimefieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTimefieldMetaData.PROPERTIES,
            ExtTimefieldMetaData.EVENTS
        )
        this.xtype = 'timefield'
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
