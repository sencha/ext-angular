import { Ext_form_Email } from './Ext/form/Email';
export class ExtEmailfieldMetaData extends Ext_form_Email {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtEmailfieldMetaData.PROPERTIES = Ext_form_Email.getProperties(ExtEmailfieldMetaData.PROPERTIES);
        ExtEmailfieldMetaData.EVENTS = Ext_form_Email.getEvents(ExtEmailfieldMetaData.EVENTS);
        ExtEmailfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtEmailfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtEmailfieldMetaData.getAll();})();

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
  selector: 'ext-emailfield',
  inputs: ExtEmailfieldMetaData.PROPERTIES,
  outputs: ExtEmailfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtEmailfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtEmailfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtEmailfieldMetaData.PROPERTIES,
            ExtEmailfieldMetaData.EVENTS
        )
        this.xtype = 'emailfield'
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
