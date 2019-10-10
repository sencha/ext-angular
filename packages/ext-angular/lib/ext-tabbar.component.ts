import { Ext_TabBar } from './Ext/TabBar';
export class ExtTabbarMetaData extends Ext_TabBar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTabbarMetaData.PROPERTIES = Ext_TabBar.getProperties(ExtTabbarMetaData.PROPERTIES);
        ExtTabbarMetaData.EVENTS = Ext_TabBar.getEvents(ExtTabbarMetaData.EVENTS);
        ExtTabbarMetaData.EVENTS.forEach( (event: any) => {
            ExtTabbarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTabbarMetaData.getAll();})();

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
  selector: 'ext-tabbar',
  inputs: ExtTabbarMetaData.PROPERTIES,
  outputs: ExtTabbarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTabbarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTabbarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTabbarMetaData.PROPERTIES,
            ExtTabbarMetaData.EVENTS
        )
        this.xtype = 'tabbar'
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
