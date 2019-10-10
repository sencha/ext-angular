import { Ext_pivot_plugin_configurator_Container } from './Ext/pivot/plugin/configurator/Container';
export class ExtPivotconfigcontainerMetaData extends Ext_pivot_plugin_configurator_Container {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotconfigcontainerMetaData.PROPERTIES = Ext_pivot_plugin_configurator_Container.getProperties(ExtPivotconfigcontainerMetaData.PROPERTIES);
        ExtPivotconfigcontainerMetaData.EVENTS = Ext_pivot_plugin_configurator_Container.getEvents(ExtPivotconfigcontainerMetaData.EVENTS);
        ExtPivotconfigcontainerMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotconfigcontainerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotconfigcontainerMetaData.getAll();})();

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
  selector: 'ext-pivotconfigcontainer',
  inputs: ExtPivotconfigcontainerMetaData.PROPERTIES,
  outputs: ExtPivotconfigcontainerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotconfigcontainerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotconfigcontainerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotconfigcontainerMetaData.PROPERTIES,
            ExtPivotconfigcontainerMetaData.EVENTS
        )
        this.xtype = 'pivotconfigcontainer'
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
