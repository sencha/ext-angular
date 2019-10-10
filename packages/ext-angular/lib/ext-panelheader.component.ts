import { Ext_panel_Header } from './Ext/panel/Header';
export class ExtPanelheaderMetaData extends Ext_panel_Header {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPanelheaderMetaData.PROPERTIES = Ext_panel_Header.getProperties(ExtPanelheaderMetaData.PROPERTIES);
        ExtPanelheaderMetaData.EVENTS = Ext_panel_Header.getEvents(ExtPanelheaderMetaData.EVENTS);
        ExtPanelheaderMetaData.EVENTS.forEach( (event: any) => {
            ExtPanelheaderMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPanelheaderMetaData.getAll();})();

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
  selector: 'ext-panelheader',
  inputs: ExtPanelheaderMetaData.PROPERTIES,
  outputs: ExtPanelheaderMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPanelheaderComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPanelheaderComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPanelheaderMetaData.PROPERTIES,
            ExtPanelheaderMetaData.EVENTS
        )
        this.xtype = 'panelheader'
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
