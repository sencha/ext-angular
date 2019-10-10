import { Ext_panel_Date } from './Ext/panel/Date';
export class ExtDatepanelMetaData extends Ext_panel_Date {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatepanelMetaData.PROPERTIES = Ext_panel_Date.getProperties(ExtDatepanelMetaData.PROPERTIES);
        ExtDatepanelMetaData.EVENTS = Ext_panel_Date.getEvents(ExtDatepanelMetaData.EVENTS);
        ExtDatepanelMetaData.EVENTS.forEach( (event: any) => {
            ExtDatepanelMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatepanelMetaData.getAll();})();

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
  selector: 'ext-datepanel',
  inputs: ExtDatepanelMetaData.PROPERTIES,
  outputs: ExtDatepanelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatepanelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatepanelComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatepanelMetaData.PROPERTIES,
            ExtDatepanelMetaData.EVENTS
        )
        this.xtype = 'datepanel'
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
