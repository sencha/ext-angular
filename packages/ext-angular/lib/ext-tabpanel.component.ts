import { Ext_TabPanel } from './Ext/TabPanel';
export class ExtTabpanelMetaData extends Ext_TabPanel {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTabpanelMetaData.PROPERTIES = Ext_TabPanel.getProperties(ExtTabpanelMetaData.PROPERTIES);
        ExtTabpanelMetaData.EVENTS = Ext_TabPanel.getEvents(ExtTabpanelMetaData.EVENTS);
        ExtTabpanelMetaData.EVENTS.forEach( (event: any) => {
            ExtTabpanelMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTabpanelMetaData.getAll();})();

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
  selector: 'ext-tabpanel',
  inputs: ExtTabpanelMetaData.PROPERTIES,
  outputs: ExtTabpanelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTabpanelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTabpanelComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTabpanelMetaData.PROPERTIES,
            ExtTabpanelMetaData.EVENTS
        )
        this.xtype = 'tabpanel'
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
