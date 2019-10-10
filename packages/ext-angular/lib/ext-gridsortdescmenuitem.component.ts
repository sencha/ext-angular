import { Ext_grid_menu_SortDesc } from './Ext/grid/menu/SortDesc';
export class ExtGridsortdescmenuitemMetaData extends Ext_grid_menu_SortDesc {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridsortdescmenuitemMetaData.PROPERTIES = Ext_grid_menu_SortDesc.getProperties(ExtGridsortdescmenuitemMetaData.PROPERTIES);
        ExtGridsortdescmenuitemMetaData.EVENTS = Ext_grid_menu_SortDesc.getEvents(ExtGridsortdescmenuitemMetaData.EVENTS);
        ExtGridsortdescmenuitemMetaData.EVENTS.forEach( (event: any) => {
            ExtGridsortdescmenuitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridsortdescmenuitemMetaData.getAll();})();

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
  selector: 'ext-gridsortdescmenuitem',
  inputs: ExtGridsortdescmenuitemMetaData.PROPERTIES,
  outputs: ExtGridsortdescmenuitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridsortdescmenuitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridsortdescmenuitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridsortdescmenuitemMetaData.PROPERTIES,
            ExtGridsortdescmenuitemMetaData.EVENTS
        )
        this.xtype = 'gridsortdescmenuitem'
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
