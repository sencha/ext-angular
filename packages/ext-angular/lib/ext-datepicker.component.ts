import { Ext_DatePicker } from './Ext/DatePicker';
export class ExtDatepickerMetaData extends Ext_DatePicker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatepickerMetaData.PROPERTIES = Ext_DatePicker.getProperties(ExtDatepickerMetaData.PROPERTIES);
        ExtDatepickerMetaData.EVENTS = Ext_DatePicker.getEvents(ExtDatepickerMetaData.EVENTS);
        ExtDatepickerMetaData.EVENTS.forEach( (event: any) => {
            ExtDatepickerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatepickerMetaData.getAll();})();

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
  selector: 'ext-datepicker',
  inputs: ExtDatepickerMetaData.PROPERTIES,
  outputs: ExtDatepickerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatepickerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatepickerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatepickerMetaData.PROPERTIES,
            ExtDatepickerMetaData.EVENTS
        )
        this.xtype = 'datepicker'
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
