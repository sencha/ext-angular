import { Ext_form_DatePickerNative } from './Ext/form/DatePickerNative';
export class ExtDatepickernativefieldMetaData extends Ext_form_DatePickerNative {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatepickernativefieldMetaData.PROPERTIES = Ext_form_DatePickerNative.getProperties(ExtDatepickernativefieldMetaData.PROPERTIES);
        ExtDatepickernativefieldMetaData.EVENTS = Ext_form_DatePickerNative.getEvents(ExtDatepickernativefieldMetaData.EVENTS);
        ExtDatepickernativefieldMetaData.EVENTS.forEach( (event: any) => {
            ExtDatepickernativefieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatepickernativefieldMetaData.getAll();})();

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
  selector: 'ext-datepickernativefield',
  inputs: ExtDatepickernativefieldMetaData.PROPERTIES,
  outputs: ExtDatepickernativefieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatepickernativefieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatepickernativefieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatepickernativefieldMetaData.PROPERTIES,
            ExtDatepickernativefieldMetaData.EVENTS
        )
        this.xtype = 'datepickernativefield'
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
