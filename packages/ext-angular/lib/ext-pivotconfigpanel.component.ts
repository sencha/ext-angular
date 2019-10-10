import { Ext_pivot_plugin_configurator_Panel } from './Ext/pivot/plugin/configurator/Panel';
export class ExtPivotconfigpanelMetaData extends Ext_pivot_plugin_configurator_Panel {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotconfigpanelMetaData.PROPERTIES = Ext_pivot_plugin_configurator_Panel.getProperties(ExtPivotconfigpanelMetaData.PROPERTIES);
        ExtPivotconfigpanelMetaData.EVENTS = Ext_pivot_plugin_configurator_Panel.getEvents(ExtPivotconfigpanelMetaData.EVENTS);
        ExtPivotconfigpanelMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotconfigpanelMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotconfigpanelMetaData.getAll();})();

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
  selector: 'ext-pivotconfigpanel',
  inputs: ExtPivotconfigpanelMetaData.PROPERTIES,
  outputs: ExtPivotconfigpanelMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotconfigpanelComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotconfigpanelComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotconfigpanelMetaData.PROPERTIES,
            ExtPivotconfigpanelMetaData.EVENTS
        )
        this.xtype = 'pivotconfigpanel'
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
