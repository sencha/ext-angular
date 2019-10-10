import { Ext_d3_hierarchy_Pack } from './Ext/d3/hierarchy/Pack';
export class ExtD3_packMetaData extends Ext_d3_hierarchy_Pack {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_packMetaData.PROPERTIES = Ext_d3_hierarchy_Pack.getProperties(ExtD3_packMetaData.PROPERTIES);
        ExtD3_packMetaData.EVENTS = Ext_d3_hierarchy_Pack.getEvents(ExtD3_packMetaData.EVENTS);
        ExtD3_packMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_packMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_packMetaData.getAll();})();

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
  selector: 'ext-d3-pack',
  inputs: ExtD3_packMetaData.PROPERTIES,
  outputs: ExtD3_packMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_packComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_packComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_packMetaData.PROPERTIES,
            ExtD3_packMetaData.EVENTS
        )
        this.xtype = 'd3-pack'
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
