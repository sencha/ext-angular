import { Ext_pivot_plugin_configurator_Form } from './Ext/pivot/plugin/configurator/Form';
export class ExtPivotconfigformMetaData extends Ext_pivot_plugin_configurator_Form {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotconfigformMetaData.PROPERTIES = Ext_pivot_plugin_configurator_Form.getProperties(ExtPivotconfigformMetaData.PROPERTIES);
        ExtPivotconfigformMetaData.EVENTS = Ext_pivot_plugin_configurator_Form.getEvents(ExtPivotconfigformMetaData.EVENTS);
        ExtPivotconfigformMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotconfigformMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotconfigformMetaData.getAll();})();

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
  selector: 'ext-pivotconfigform',
  inputs: ExtPivotconfigformMetaData.PROPERTIES,
  outputs: ExtPivotconfigformMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotconfigformComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotconfigformComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotconfigformMetaData.PROPERTIES,
            ExtPivotconfigformMetaData.EVENTS
        )
        this.xtype = 'pivotconfigform'
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
