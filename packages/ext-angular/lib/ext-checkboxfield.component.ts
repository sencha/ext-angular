import { Ext_form_Checkbox } from './Ext/form/Checkbox';
export class ExtCheckboxfieldMetaData extends Ext_form_Checkbox {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCheckboxfieldMetaData.PROPERTIES = Ext_form_Checkbox.getProperties(ExtCheckboxfieldMetaData.PROPERTIES);
        ExtCheckboxfieldMetaData.EVENTS = Ext_form_Checkbox.getEvents(ExtCheckboxfieldMetaData.EVENTS);
        ExtCheckboxfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtCheckboxfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCheckboxfieldMetaData.getAll();})();

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
  selector: 'ext-checkboxfield',
  inputs: ExtCheckboxfieldMetaData.PROPERTIES,
  outputs: ExtCheckboxfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCheckboxfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCheckboxfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCheckboxfieldMetaData.PROPERTIES,
            ExtCheckboxfieldMetaData.EVENTS
        )
        this.xtype = 'checkboxfield'
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
