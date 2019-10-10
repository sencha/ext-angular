import { Ext_picker_Slot } from './Ext/picker/Slot';
export class ExtPickerslotMetaData extends Ext_picker_Slot {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPickerslotMetaData.PROPERTIES = Ext_picker_Slot.getProperties(ExtPickerslotMetaData.PROPERTIES);
        ExtPickerslotMetaData.EVENTS = Ext_picker_Slot.getEvents(ExtPickerslotMetaData.EVENTS);
        ExtPickerslotMetaData.EVENTS.forEach( (event: any) => {
            ExtPickerslotMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPickerslotMetaData.getAll();})();

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
  selector: 'ext-pickerslot',
  inputs: ExtPickerslotMetaData.PROPERTIES,
  outputs: ExtPickerslotMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPickerslotComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPickerslotComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPickerslotMetaData.PROPERTIES,
            ExtPickerslotMetaData.EVENTS
        )
        this.xtype = 'pickerslot'
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
