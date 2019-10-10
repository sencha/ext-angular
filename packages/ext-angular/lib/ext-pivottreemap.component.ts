import { Ext_pivot_d3_TreeMap } from './Ext/pivot/d3/TreeMap';
export class ExtPivottreemapMetaData extends Ext_pivot_d3_TreeMap {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivottreemapMetaData.PROPERTIES = Ext_pivot_d3_TreeMap.getProperties(ExtPivottreemapMetaData.PROPERTIES);
        ExtPivottreemapMetaData.EVENTS = Ext_pivot_d3_TreeMap.getEvents(ExtPivottreemapMetaData.EVENTS);
        ExtPivottreemapMetaData.EVENTS.forEach( (event: any) => {
            ExtPivottreemapMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivottreemapMetaData.getAll();})();

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
  selector: 'ext-pivottreemap',
  inputs: ExtPivottreemapMetaData.PROPERTIES,
  outputs: ExtPivottreemapMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivottreemapComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivottreemapComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivottreemapMetaData.PROPERTIES,
            ExtPivottreemapMetaData.EVENTS
        )
        this.xtype = 'pivottreemap'
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
