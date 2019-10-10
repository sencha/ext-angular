import { Ext_form_FieldSet } from './Ext/form/FieldSet';
export class ExtFieldsetMetaData extends Ext_form_FieldSet {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFieldsetMetaData.PROPERTIES = Ext_form_FieldSet.getProperties(ExtFieldsetMetaData.PROPERTIES);
        ExtFieldsetMetaData.EVENTS = Ext_form_FieldSet.getEvents(ExtFieldsetMetaData.EVENTS);
        ExtFieldsetMetaData.EVENTS.forEach( (event: any) => {
            ExtFieldsetMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFieldsetMetaData.getAll();})();

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
  selector: 'ext-fieldset',
  inputs: ExtFieldsetMetaData.PROPERTIES,
  outputs: ExtFieldsetMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFieldsetComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFieldsetComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFieldsetMetaData.PROPERTIES,
            ExtFieldsetMetaData.EVENTS
        )
        this.xtype = 'fieldset'
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
