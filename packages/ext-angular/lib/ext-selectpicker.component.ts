import { Ext_picker_SelectPicker } from './Ext/picker/SelectPicker';
export class ExtSelectpickerMetaData extends Ext_picker_SelectPicker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSelectpickerMetaData.PROPERTIES = Ext_picker_SelectPicker.getProperties(ExtSelectpickerMetaData.PROPERTIES);
        ExtSelectpickerMetaData.EVENTS = Ext_picker_SelectPicker.getEvents(ExtSelectpickerMetaData.EVENTS);
        ExtSelectpickerMetaData.EVENTS.forEach( (event: any) => {
            ExtSelectpickerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSelectpickerMetaData.getAll();})();

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
  selector: 'ext-selectpicker',
  inputs: ExtSelectpickerMetaData.PROPERTIES,
  outputs: ExtSelectpickerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSelectpickerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSelectpickerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSelectpickerMetaData.PROPERTIES,
            ExtSelectpickerMetaData.EVENTS
        )
        this.xtype = 'selectpicker'
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
