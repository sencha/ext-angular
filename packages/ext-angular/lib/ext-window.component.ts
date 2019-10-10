import { Ext_window_Window } from './Ext/window/Window';
export class ExtWindowMetaData extends Ext_window_Window {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtWindowMetaData.PROPERTIES = Ext_window_Window.getProperties(ExtWindowMetaData.PROPERTIES);
        ExtWindowMetaData.EVENTS = Ext_window_Window.getEvents(ExtWindowMetaData.EVENTS);
        ExtWindowMetaData.EVENTS.forEach( (event: any) => {
            ExtWindowMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtWindowMetaData.getAll();})();

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
  selector: 'ext-window',
  inputs: ExtWindowMetaData.PROPERTIES,
  outputs: ExtWindowMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtWindowComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtWindowComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtWindowMetaData.PROPERTIES,
            ExtWindowMetaData.EVENTS
        )
        this.xtype = 'window'
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
