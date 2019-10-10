import { Ext_field_Input } from './Ext/field/Input';
export class ExtInputfieldMetaData extends Ext_field_Input {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtInputfieldMetaData.PROPERTIES = Ext_field_Input.getProperties(ExtInputfieldMetaData.PROPERTIES);
        ExtInputfieldMetaData.EVENTS = Ext_field_Input.getEvents(ExtInputfieldMetaData.EVENTS);
        ExtInputfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtInputfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtInputfieldMetaData.getAll();})();

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
  selector: 'ext-inputfield',
  inputs: ExtInputfieldMetaData.PROPERTIES,
  outputs: ExtInputfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtInputfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtInputfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtInputfieldMetaData.PROPERTIES,
            ExtInputfieldMetaData.EVENTS
        )
        this.xtype = 'inputfield'
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
