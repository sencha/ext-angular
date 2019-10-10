import { Ext_field_CheckboxGroup } from './Ext/field/CheckboxGroup';
export class ExtCheckboxgroupMetaData extends Ext_field_CheckboxGroup {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCheckboxgroupMetaData.PROPERTIES = Ext_field_CheckboxGroup.getProperties(ExtCheckboxgroupMetaData.PROPERTIES);
        ExtCheckboxgroupMetaData.EVENTS = Ext_field_CheckboxGroup.getEvents(ExtCheckboxgroupMetaData.EVENTS);
        ExtCheckboxgroupMetaData.EVENTS.forEach( (event: any) => {
            ExtCheckboxgroupMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCheckboxgroupMetaData.getAll();})();

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
  selector: 'ext-checkboxgroup',
  inputs: ExtCheckboxgroupMetaData.PROPERTIES,
  outputs: ExtCheckboxgroupMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCheckboxgroupComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCheckboxgroupComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCheckboxgroupMetaData.PROPERTIES,
            ExtCheckboxgroupMetaData.EVENTS
        )
        this.xtype = 'checkboxgroup'
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
