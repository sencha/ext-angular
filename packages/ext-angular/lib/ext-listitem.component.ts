import { Ext_dataview_component_ListItem } from './Ext/dataview/component/ListItem';
export class ExtListitemMetaData extends Ext_dataview_component_ListItem {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtListitemMetaData.PROPERTIES = Ext_dataview_component_ListItem.getProperties(ExtListitemMetaData.PROPERTIES);
        ExtListitemMetaData.EVENTS = Ext_dataview_component_ListItem.getEvents(ExtListitemMetaData.EVENTS);
        ExtListitemMetaData.EVENTS.forEach( (event: any) => {
            ExtListitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtListitemMetaData.getAll();})();

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
  selector: 'ext-listitem',
  inputs: ExtListitemMetaData.PROPERTIES,
  outputs: ExtListitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtListitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtListitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtListitemMetaData.PROPERTIES,
            ExtListitemMetaData.EVENTS
        )
        this.xtype = 'listitem'
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
