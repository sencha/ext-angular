import { Ext_dataview_component_DataItem } from './Ext/dataview/component/DataItem';
export class ExtDataitemMetaData extends Ext_dataview_component_DataItem {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDataitemMetaData.PROPERTIES = Ext_dataview_component_DataItem.getProperties(ExtDataitemMetaData.PROPERTIES);
        ExtDataitemMetaData.EVENTS = Ext_dataview_component_DataItem.getEvents(ExtDataitemMetaData.EVENTS);
        ExtDataitemMetaData.EVENTS.forEach( (event: any) => {
            ExtDataitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDataitemMetaData.getAll();})();

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
  selector: 'ext-dataitem',
  inputs: ExtDataitemMetaData.PROPERTIES,
  outputs: ExtDataitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDataitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDataitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDataitemMetaData.PROPERTIES,
            ExtDataitemMetaData.EVENTS
        )
        this.xtype = 'dataitem'
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
