import { Ext_dataview_component_SimpleListItem } from './Ext/dataview/component/SimpleListItem';
export class ExtSimplelistitemMetaData extends Ext_dataview_component_SimpleListItem {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSimplelistitemMetaData.PROPERTIES = Ext_dataview_component_SimpleListItem.getProperties(ExtSimplelistitemMetaData.PROPERTIES);
        ExtSimplelistitemMetaData.EVENTS = Ext_dataview_component_SimpleListItem.getEvents(ExtSimplelistitemMetaData.EVENTS);
        ExtSimplelistitemMetaData.EVENTS.forEach( (event: any) => {
            ExtSimplelistitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSimplelistitemMetaData.getAll();})();

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
  selector: 'ext-simplelistitem',
  inputs: ExtSimplelistitemMetaData.PROPERTIES,
  outputs: ExtSimplelistitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSimplelistitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSimplelistitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSimplelistitemMetaData.PROPERTIES,
            ExtSimplelistitemMetaData.EVENTS
        )
        this.xtype = 'simplelistitem'
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
