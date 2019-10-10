import { Ext_form_Select } from './Ext/form/Select';
export class ExtSelectfieldMetaData extends Ext_form_Select {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSelectfieldMetaData.PROPERTIES = Ext_form_Select.getProperties(ExtSelectfieldMetaData.PROPERTIES);
        ExtSelectfieldMetaData.EVENTS = Ext_form_Select.getEvents(ExtSelectfieldMetaData.EVENTS);
        ExtSelectfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtSelectfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSelectfieldMetaData.getAll();})();

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
  selector: 'ext-selectfield',
  inputs: ExtSelectfieldMetaData.PROPERTIES,
  outputs: ExtSelectfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSelectfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSelectfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSelectfieldMetaData.PROPERTIES,
            ExtSelectfieldMetaData.EVENTS
        )
        this.xtype = 'selectfield'
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
