import { Ext_field_RadioGroup } from './Ext/field/RadioGroup';
export class ExtRadiogroupMetaData extends Ext_field_RadioGroup {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRadiogroupMetaData.PROPERTIES = Ext_field_RadioGroup.getProperties(ExtRadiogroupMetaData.PROPERTIES);
        ExtRadiogroupMetaData.EVENTS = Ext_field_RadioGroup.getEvents(ExtRadiogroupMetaData.EVENTS);
        ExtRadiogroupMetaData.EVENTS.forEach( (event: any) => {
            ExtRadiogroupMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRadiogroupMetaData.getAll();})();

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
  selector: 'ext-radiogroup',
  inputs: ExtRadiogroupMetaData.PROPERTIES,
  outputs: ExtRadiogroupMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRadiogroupComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRadiogroupComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRadiogroupMetaData.PROPERTIES,
            ExtRadiogroupMetaData.EVENTS
        )
        this.xtype = 'radiogroup'
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
