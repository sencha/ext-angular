import { Ext_grid_HeaderContainer } from './Ext/grid/HeaderContainer';
export class ExtHeadercontainerMetaData extends Ext_grid_HeaderContainer {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtHeadercontainerMetaData.PROPERTIES = Ext_grid_HeaderContainer.getProperties(ExtHeadercontainerMetaData.PROPERTIES);
        ExtHeadercontainerMetaData.EVENTS = Ext_grid_HeaderContainer.getEvents(ExtHeadercontainerMetaData.EVENTS);
        ExtHeadercontainerMetaData.EVENTS.forEach( (event: any) => {
            ExtHeadercontainerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtHeadercontainerMetaData.getAll();})();

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
  selector: 'ext-headercontainer',
  inputs: ExtHeadercontainerMetaData.PROPERTIES,
  outputs: ExtHeadercontainerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtHeadercontainerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtHeadercontainerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtHeadercontainerMetaData.PROPERTIES,
            ExtHeadercontainerMetaData.EVENTS
        )
        this.xtype = 'headercontainer'
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
