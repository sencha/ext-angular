import { Ext_form_Number } from './Ext/form/Number';
export class ExtNumberfieldMetaData extends Ext_form_Number {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtNumberfieldMetaData.PROPERTIES = Ext_form_Number.getProperties(ExtNumberfieldMetaData.PROPERTIES);
        ExtNumberfieldMetaData.EVENTS = Ext_form_Number.getEvents(ExtNumberfieldMetaData.EVENTS);
        ExtNumberfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtNumberfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtNumberfieldMetaData.getAll();})();

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
  selector: 'ext-numberfield',
  inputs: ExtNumberfieldMetaData.PROPERTIES,
  outputs: ExtNumberfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtNumberfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtNumberfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtNumberfieldMetaData.PROPERTIES,
            ExtNumberfieldMetaData.EVENTS
        )
        this.xtype = 'numberfield'
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
