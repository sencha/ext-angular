import { Ext_field_DatePicker } from './Ext/field/DatePicker';
export class ExtDatefieldMetaData extends Ext_field_DatePicker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatefieldMetaData.PROPERTIES = Ext_field_DatePicker.getProperties(ExtDatefieldMetaData.PROPERTIES);
        ExtDatefieldMetaData.EVENTS = Ext_field_DatePicker.getEvents(ExtDatefieldMetaData.EVENTS);
        ExtDatefieldMetaData.EVENTS.forEach( (event: any) => {
            ExtDatefieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatefieldMetaData.getAll();})();

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
  selector: 'ext-datefield',
  inputs: ExtDatefieldMetaData.PROPERTIES,
  outputs: ExtDatefieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatefieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatefieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatefieldMetaData.PROPERTIES,
            ExtDatefieldMetaData.EVENTS
        )
        this.xtype = 'datefield'
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
