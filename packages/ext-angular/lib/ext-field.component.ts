import { Ext_form_Field } from './Ext/form/Field';
export class ExtFieldMetaData extends Ext_form_Field {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtFieldMetaData.PROPERTIES = Ext_form_Field.getProperties(ExtFieldMetaData.PROPERTIES);
        ExtFieldMetaData.EVENTS = Ext_form_Field.getEvents(ExtFieldMetaData.EVENTS);
        ExtFieldMetaData.EVENTS.forEach( (event: any) => {
            ExtFieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtFieldMetaData.getAll();})();

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
  selector: 'ext-field',
  inputs: ExtFieldMetaData.PROPERTIES,
  outputs: ExtFieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtFieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtFieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtFieldMetaData.PROPERTIES,
            ExtFieldMetaData.EVENTS
        )
        this.xtype = 'field'
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
