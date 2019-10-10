import { Ext_panel_Tool } from './Ext/panel/Tool';
export class ExtPaneltoolMetaData extends Ext_panel_Tool {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPaneltoolMetaData.PROPERTIES = Ext_panel_Tool.getProperties(ExtPaneltoolMetaData.PROPERTIES);
        ExtPaneltoolMetaData.EVENTS = Ext_panel_Tool.getEvents(ExtPaneltoolMetaData.EVENTS);
        ExtPaneltoolMetaData.EVENTS.forEach( (event: any) => {
            ExtPaneltoolMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPaneltoolMetaData.getAll();})();

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
  selector: 'ext-paneltool',
  inputs: ExtPaneltoolMetaData.PROPERTIES,
  outputs: ExtPaneltoolMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPaneltoolComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPaneltoolComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPaneltoolMetaData.PROPERTIES,
            ExtPaneltoolMetaData.EVENTS
        )
        this.xtype = 'paneltool'
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
