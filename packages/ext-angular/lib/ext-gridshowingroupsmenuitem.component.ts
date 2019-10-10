import { Ext_grid_menu_ShowInGroups } from './Ext/grid/menu/ShowInGroups';
export class ExtGridshowingroupsmenuitemMetaData extends Ext_grid_menu_ShowInGroups {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridshowingroupsmenuitemMetaData.PROPERTIES = Ext_grid_menu_ShowInGroups.getProperties(ExtGridshowingroupsmenuitemMetaData.PROPERTIES);
        ExtGridshowingroupsmenuitemMetaData.EVENTS = Ext_grid_menu_ShowInGroups.getEvents(ExtGridshowingroupsmenuitemMetaData.EVENTS);
        ExtGridshowingroupsmenuitemMetaData.EVENTS.forEach( (event: any) => {
            ExtGridshowingroupsmenuitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridshowingroupsmenuitemMetaData.getAll();})();

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
  selector: 'ext-gridshowingroupsmenuitem',
  inputs: ExtGridshowingroupsmenuitemMetaData.PROPERTIES,
  outputs: ExtGridshowingroupsmenuitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridshowingroupsmenuitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridshowingroupsmenuitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridshowingroupsmenuitemMetaData.PROPERTIES,
            ExtGridshowingroupsmenuitemMetaData.EVENTS
        )
        this.xtype = 'gridshowingroupsmenuitem'
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
