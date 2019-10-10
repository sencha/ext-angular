import { Ext_MessageBox } from './Ext/MessageBox';
export class ExtMessageboxMetaData extends Ext_MessageBox {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMessageboxMetaData.PROPERTIES = Ext_MessageBox.getProperties(ExtMessageboxMetaData.PROPERTIES);
        ExtMessageboxMetaData.EVENTS = Ext_MessageBox.getEvents(ExtMessageboxMetaData.EVENTS);
        ExtMessageboxMetaData.EVENTS.forEach( (event: any) => {
            ExtMessageboxMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMessageboxMetaData.getAll();})();

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
  selector: 'ext-messagebox',
  inputs: ExtMessageboxMetaData.PROPERTIES,
  outputs: ExtMessageboxMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMessageboxComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMessageboxComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMessageboxMetaData.PROPERTIES,
            ExtMessageboxMetaData.EVENTS
        )
        this.xtype = 'messagebox'
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
