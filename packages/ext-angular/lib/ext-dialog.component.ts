import { Ext_window_Window } from './Ext/window/Window';
export class ExtDialogMetaData extends Ext_window_Window {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDialogMetaData.PROPERTIES = Ext_window_Window.getProperties(ExtDialogMetaData.PROPERTIES);
        ExtDialogMetaData.EVENTS = Ext_window_Window.getEvents(ExtDialogMetaData.EVENTS);
        ExtDialogMetaData.EVENTS.forEach( (event: any) => {
            ExtDialogMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDialogMetaData.getAll();})();

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
  selector: 'ext-dialog',
  inputs: ExtDialogMetaData.PROPERTIES,
  outputs: ExtDialogMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDialogComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDialogComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDialogMetaData.PROPERTIES,
            ExtDialogMetaData.EVENTS
        )
        this.xtype = 'dialog'
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
