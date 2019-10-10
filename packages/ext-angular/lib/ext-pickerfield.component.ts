import { Ext_field_Picker } from './Ext/field/Picker';
export class ExtPickerfieldMetaData extends Ext_field_Picker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPickerfieldMetaData.PROPERTIES = Ext_field_Picker.getProperties(ExtPickerfieldMetaData.PROPERTIES);
        ExtPickerfieldMetaData.EVENTS = Ext_field_Picker.getEvents(ExtPickerfieldMetaData.EVENTS);
        ExtPickerfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtPickerfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPickerfieldMetaData.getAll();})();

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
  selector: 'ext-pickerfield',
  inputs: ExtPickerfieldMetaData.PROPERTIES,
  outputs: ExtPickerfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPickerfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPickerfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPickerfieldMetaData.PROPERTIES,
            ExtPickerfieldMetaData.EVENTS
        )
        this.xtype = 'pickerfield'
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
