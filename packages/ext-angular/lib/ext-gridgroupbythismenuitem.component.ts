import { Ext_grid_menu_GroupByThis } from './Ext/grid/menu/GroupByThis';
export class ExtGridgroupbythismenuitemMetaData extends Ext_grid_menu_GroupByThis {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridgroupbythismenuitemMetaData.PROPERTIES = Ext_grid_menu_GroupByThis.getProperties(ExtGridgroupbythismenuitemMetaData.PROPERTIES);
        ExtGridgroupbythismenuitemMetaData.EVENTS = Ext_grid_menu_GroupByThis.getEvents(ExtGridgroupbythismenuitemMetaData.EVENTS);
        ExtGridgroupbythismenuitemMetaData.EVENTS.forEach( (event: any) => {
            ExtGridgroupbythismenuitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridgroupbythismenuitemMetaData.getAll();})();

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
  selector: 'ext-gridgroupbythismenuitem',
  inputs: ExtGridgroupbythismenuitemMetaData.PROPERTIES,
  outputs: ExtGridgroupbythismenuitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridgroupbythismenuitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridgroupbythismenuitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridgroupbythismenuitemMetaData.PROPERTIES,
            ExtGridgroupbythismenuitemMetaData.EVENTS
        )
        this.xtype = 'gridgroupbythismenuitem'
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
