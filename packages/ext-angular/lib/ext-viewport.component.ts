import { Ext_viewport_Default } from './Ext/viewport/Default';
export class ExtViewportMetaData extends Ext_viewport_Default {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtViewportMetaData.PROPERTIES = Ext_viewport_Default.getProperties(ExtViewportMetaData.PROPERTIES);
        ExtViewportMetaData.EVENTS = Ext_viewport_Default.getEvents(ExtViewportMetaData.EVENTS);
        ExtViewportMetaData.EVENTS.forEach( (event: any) => {
            ExtViewportMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtViewportMetaData.getAll();})();

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
  selector: 'ext-viewport',
  inputs: ExtViewportMetaData.PROPERTIES,
  outputs: ExtViewportMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtViewportComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtViewportComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtViewportMetaData.PROPERTIES,
            ExtViewportMetaData.EVENTS
        )
        this.xtype = 'viewport'
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
