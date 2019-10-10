import { Ext_panel_Time } from './Ext/panel/Time';
export class ExtTimepanelMetaData extends Ext_panel_Time {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTimepanelMetaData.PROPERTIES = Ext_panel_Time.getProperties(ExtTimepanelMetaData.PROPERTIES);
        ExtTimepanelMetaData.EVENTS = Ext_panel_Time.getEvents(ExtTimepanelMetaData.EVENTS);
        ExtTimepanelMetaData.EVENTS.forEach( (event: any) => {
            ExtTimepanelMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTimepanelMetaData.getAll();})();

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
  selector: 'ext-timepanel',
  inputs: ExtTimepanelMetaData.PROPERTIES,
  outputs: ExtTimepanelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTimepanelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTimepanelComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTimepanelMetaData.PROPERTIES,
            ExtTimepanelMetaData.EVENTS
        )
        this.xtype = 'timepanel'
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
