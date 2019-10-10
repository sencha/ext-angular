import { Ext_Picker } from './Ext/Picker';
export class ExtPickerMetaData extends Ext_Picker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPickerMetaData.PROPERTIES = Ext_Picker.getProperties(ExtPickerMetaData.PROPERTIES);
        ExtPickerMetaData.EVENTS = Ext_Picker.getEvents(ExtPickerMetaData.EVENTS);
        ExtPickerMetaData.EVENTS.forEach( (event: any) => {
            ExtPickerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPickerMetaData.getAll();})();

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
  selector: 'ext-picker',
  inputs: ExtPickerMetaData.PROPERTIES,
  outputs: ExtPickerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPickerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPickerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPickerMetaData.PROPERTIES,
            ExtPickerMetaData.EVENTS
        )
        this.xtype = 'picker'
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
