import { Ext_Gadget } from './Ext/Gadget';
export class ExtComponentMetaData extends Ext_Gadget {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtComponentMetaData.PROPERTIES = Ext_Gadget.getProperties(ExtComponentMetaData.PROPERTIES);
        ExtComponentMetaData.EVENTS = Ext_Gadget.getEvents(ExtComponentMetaData.EVENTS);
        ExtComponentMetaData.EVENTS.forEach( (event: any) => {
            ExtComponentMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtComponentMetaData.getAll();})();

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
  selector: 'ext-component',
  inputs: ExtComponentMetaData.PROPERTIES,
  outputs: ExtComponentMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtComponentComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtComponentComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtComponentMetaData.PROPERTIES,
            ExtComponentMetaData.EVENTS
        )
        this.xtype = 'component'
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
