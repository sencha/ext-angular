import { Ext_field_DatePicker } from './Ext/field/DatePicker';
export class ExtDatepickerfieldMetaData extends Ext_field_DatePicker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatepickerfieldMetaData.PROPERTIES = Ext_field_DatePicker.getProperties(ExtDatepickerfieldMetaData.PROPERTIES);
        ExtDatepickerfieldMetaData.EVENTS = Ext_field_DatePicker.getEvents(ExtDatepickerfieldMetaData.EVENTS);
        ExtDatepickerfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtDatepickerfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatepickerfieldMetaData.getAll();})();

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
  selector: 'ext-datepickerfield',
  inputs: ExtDatepickerfieldMetaData.PROPERTIES,
  outputs: ExtDatepickerfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatepickerfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatepickerfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatepickerfieldMetaData.PROPERTIES,
            ExtDatepickerfieldMetaData.EVENTS
        )
        this.xtype = 'datepickerfield'
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
