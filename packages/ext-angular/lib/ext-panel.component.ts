import { Ext_panel_Panel } from './Ext/panel/Panel';
export class ExtPanelMetaData extends Ext_panel_Panel {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPanelMetaData.PROPERTIES = Ext_panel_Panel.getProperties(ExtPanelMetaData.PROPERTIES);
        ExtPanelMetaData.EVENTS = Ext_panel_Panel.getEvents(ExtPanelMetaData.EVENTS);
        ExtPanelMetaData.EVENTS.forEach( (event: any) => {
            ExtPanelMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPanelMetaData.getAll();})();

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
  selector: 'ext-panel',
  inputs: ExtPanelMetaData.PROPERTIES,
  outputs: ExtPanelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPanelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPanelComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPanelMetaData.PROPERTIES,
            ExtPanelMetaData.EVENTS
        )
        this.xtype = 'panel'
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
