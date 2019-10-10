import { Ext_grid_menu_SortAsc } from './Ext/grid/menu/SortAsc';
export class ExtGridsortascmenuitemMetaData extends Ext_grid_menu_SortAsc {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridsortascmenuitemMetaData.PROPERTIES = Ext_grid_menu_SortAsc.getProperties(ExtGridsortascmenuitemMetaData.PROPERTIES);
        ExtGridsortascmenuitemMetaData.EVENTS = Ext_grid_menu_SortAsc.getEvents(ExtGridsortascmenuitemMetaData.EVENTS);
        ExtGridsortascmenuitemMetaData.EVENTS.forEach( (event: any) => {
            ExtGridsortascmenuitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridsortascmenuitemMetaData.getAll();})();

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
  selector: 'ext-gridsortascmenuitem',
  inputs: ExtGridsortascmenuitemMetaData.PROPERTIES,
  outputs: ExtGridsortascmenuitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridsortascmenuitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridsortascmenuitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridsortascmenuitemMetaData.PROPERTIES,
            ExtGridsortascmenuitemMetaData.EVENTS
        )
        this.xtype = 'gridsortascmenuitem'
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
