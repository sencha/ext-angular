import { Ext_form_Display } from './Ext/form/Display';
export class ExtDisplayfieldMetaData extends Ext_form_Display {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDisplayfieldMetaData.PROPERTIES = Ext_form_Display.getProperties(ExtDisplayfieldMetaData.PROPERTIES);
        ExtDisplayfieldMetaData.EVENTS = Ext_form_Display.getEvents(ExtDisplayfieldMetaData.EVENTS);
        ExtDisplayfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtDisplayfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDisplayfieldMetaData.getAll();})();

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
  selector: 'ext-displayfield',
  inputs: ExtDisplayfieldMetaData.PROPERTIES,
  outputs: ExtDisplayfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDisplayfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDisplayfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDisplayfieldMetaData.PROPERTIES,
            ExtDisplayfieldMetaData.EVENTS
        )
        this.xtype = 'displayfield'
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
