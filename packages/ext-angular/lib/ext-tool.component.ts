import { Ext_panel_Tool } from './Ext/panel/Tool';
export class ExtToolMetaData extends Ext_panel_Tool {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtToolMetaData.PROPERTIES = Ext_panel_Tool.getProperties(ExtToolMetaData.PROPERTIES);
        ExtToolMetaData.EVENTS = Ext_panel_Tool.getEvents(ExtToolMetaData.EVENTS);
        ExtToolMetaData.EVENTS.forEach( (event: any) => {
            ExtToolMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtToolMetaData.getAll();})();

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
  selector: 'ext-tool',
  inputs: ExtToolMetaData.PROPERTIES,
  outputs: ExtToolMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtToolComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtToolComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtToolMetaData.PROPERTIES,
            ExtToolMetaData.EVENTS
        )
        this.xtype = 'tool'
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
