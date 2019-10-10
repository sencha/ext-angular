import { Ext_grid_menu_Columns } from './Ext/grid/menu/Columns';
export class ExtGridcolumnsmenuMetaData extends Ext_grid_menu_Columns {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGridcolumnsmenuMetaData.PROPERTIES = Ext_grid_menu_Columns.getProperties(ExtGridcolumnsmenuMetaData.PROPERTIES);
        ExtGridcolumnsmenuMetaData.EVENTS = Ext_grid_menu_Columns.getEvents(ExtGridcolumnsmenuMetaData.EVENTS);
        ExtGridcolumnsmenuMetaData.EVENTS.forEach( (event: any) => {
            ExtGridcolumnsmenuMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGridcolumnsmenuMetaData.getAll();})();

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
  selector: 'ext-gridcolumnsmenu',
  inputs: ExtGridcolumnsmenuMetaData.PROPERTIES,
  outputs: ExtGridcolumnsmenuMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGridcolumnsmenuComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGridcolumnsmenuComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGridcolumnsmenuMetaData.PROPERTIES,
            ExtGridcolumnsmenuMetaData.EVENTS
        )
        this.xtype = 'gridcolumnsmenu'
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
