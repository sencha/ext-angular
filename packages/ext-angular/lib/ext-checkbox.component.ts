import { Ext_form_Checkbox } from './Ext/form/Checkbox';
export class ExtCheckboxMetaData extends Ext_form_Checkbox {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCheckboxMetaData.PROPERTIES = Ext_form_Checkbox.getProperties(ExtCheckboxMetaData.PROPERTIES);
        ExtCheckboxMetaData.EVENTS = Ext_form_Checkbox.getEvents(ExtCheckboxMetaData.EVENTS);
        ExtCheckboxMetaData.EVENTS.forEach( (event: any) => {
            ExtCheckboxMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCheckboxMetaData.getAll();})();

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
  selector: 'ext-checkbox',
  inputs: ExtCheckboxMetaData.PROPERTIES,
  outputs: ExtCheckboxMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCheckboxComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCheckboxComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCheckboxMetaData.PROPERTIES,
            ExtCheckboxMetaData.EVENTS
        )
        this.xtype = 'checkbox'
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
