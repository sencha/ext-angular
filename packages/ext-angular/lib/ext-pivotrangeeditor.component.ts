import { Ext_pivot_plugin_rangeeditor_Panel } from './Ext/pivot/plugin/rangeeditor/Panel';
export class ExtPivotrangeeditorMetaData extends Ext_pivot_plugin_rangeeditor_Panel {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotrangeeditorMetaData.PROPERTIES = Ext_pivot_plugin_rangeeditor_Panel.getProperties(ExtPivotrangeeditorMetaData.PROPERTIES);
        ExtPivotrangeeditorMetaData.EVENTS = Ext_pivot_plugin_rangeeditor_Panel.getEvents(ExtPivotrangeeditorMetaData.EVENTS);
        ExtPivotrangeeditorMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotrangeeditorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotrangeeditorMetaData.getAll();})();

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
  selector: 'ext-pivotrangeeditor',
  inputs: ExtPivotrangeeditorMetaData.PROPERTIES,
  outputs: ExtPivotrangeeditorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotrangeeditorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotrangeeditorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotrangeeditorMetaData.PROPERTIES,
            ExtPivotrangeeditorMetaData.EVENTS
        )
        this.xtype = 'pivotrangeeditor'
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
