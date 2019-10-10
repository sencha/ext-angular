import { Ext_pivot_plugin_configurator_Column } from './Ext/pivot/plugin/configurator/Column';
export class ExtPivotconfigfieldMetaData extends Ext_pivot_plugin_configurator_Column {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotconfigfieldMetaData.PROPERTIES = Ext_pivot_plugin_configurator_Column.getProperties(ExtPivotconfigfieldMetaData.PROPERTIES);
        ExtPivotconfigfieldMetaData.EVENTS = Ext_pivot_plugin_configurator_Column.getEvents(ExtPivotconfigfieldMetaData.EVENTS);
        ExtPivotconfigfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotconfigfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotconfigfieldMetaData.getAll();})();

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
  selector: 'ext-pivotconfigfield',
  inputs: ExtPivotconfigfieldMetaData.PROPERTIES,
  outputs: ExtPivotconfigfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotconfigfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotconfigfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotconfigfieldMetaData.PROPERTIES,
            ExtPivotconfigfieldMetaData.EVENTS
        )
        this.xtype = 'pivotconfigfield'
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
