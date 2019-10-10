import { Ext_grid_PagingToolbar } from './Ext/grid/PagingToolbar';
export class ExtPagingtoolbarMetaData extends Ext_grid_PagingToolbar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPagingtoolbarMetaData.PROPERTIES = Ext_grid_PagingToolbar.getProperties(ExtPagingtoolbarMetaData.PROPERTIES);
        ExtPagingtoolbarMetaData.EVENTS = Ext_grid_PagingToolbar.getEvents(ExtPagingtoolbarMetaData.EVENTS);
        ExtPagingtoolbarMetaData.EVENTS.forEach( (event: any) => {
            ExtPagingtoolbarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPagingtoolbarMetaData.getAll();})();

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
  selector: 'ext-pagingtoolbar',
  inputs: ExtPagingtoolbarMetaData.PROPERTIES,
  outputs: ExtPagingtoolbarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPagingtoolbarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPagingtoolbarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPagingtoolbarMetaData.PROPERTIES,
            ExtPagingtoolbarMetaData.EVENTS
        )
        this.xtype = 'pagingtoolbar'
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
