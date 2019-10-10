import { Ext_form_Password } from './Ext/form/Password';
export class ExtPasswordfieldMetaData extends Ext_form_Password {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPasswordfieldMetaData.PROPERTIES = Ext_form_Password.getProperties(ExtPasswordfieldMetaData.PROPERTIES);
        ExtPasswordfieldMetaData.EVENTS = Ext_form_Password.getEvents(ExtPasswordfieldMetaData.EVENTS);
        ExtPasswordfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtPasswordfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPasswordfieldMetaData.getAll();})();

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
  selector: 'ext-passwordfield',
  inputs: ExtPasswordfieldMetaData.PROPERTIES,
  outputs: ExtPasswordfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPasswordfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPasswordfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPasswordfieldMetaData.PROPERTIES,
            ExtPasswordfieldMetaData.EVENTS
        )
        this.xtype = 'passwordfield'
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
