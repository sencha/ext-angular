import { Ext_menu_Menu } from './Ext/menu/Menu';
export class ExtMenuMetaData extends Ext_menu_Menu {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMenuMetaData.PROPERTIES = Ext_menu_Menu.getProperties(ExtMenuMetaData.PROPERTIES);
        ExtMenuMetaData.EVENTS = Ext_menu_Menu.getEvents(ExtMenuMetaData.EVENTS);
        ExtMenuMetaData.EVENTS.forEach( (event: any) => {
            ExtMenuMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMenuMetaData.getAll();})();

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
  selector: 'ext-menu',
  inputs: ExtMenuMetaData.PROPERTIES,
  outputs: ExtMenuMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMenuComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMenuComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMenuMetaData.PROPERTIES,
            ExtMenuMetaData.EVENTS
        )
        this.xtype = 'menu'
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
