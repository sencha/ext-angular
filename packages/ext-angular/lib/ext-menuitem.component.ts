import { Ext_menu_TextItem } from './Ext/menu/TextItem';
export class ExtMenuitemMetaData extends Ext_menu_TextItem {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMenuitemMetaData.PROPERTIES = Ext_menu_TextItem.getProperties(ExtMenuitemMetaData.PROPERTIES);
        ExtMenuitemMetaData.EVENTS = Ext_menu_TextItem.getEvents(ExtMenuitemMetaData.EVENTS);
        ExtMenuitemMetaData.EVENTS.forEach( (event: any) => {
            ExtMenuitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMenuitemMetaData.getAll();})();

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
  selector: 'ext-menuitem',
  inputs: ExtMenuitemMetaData.PROPERTIES,
  outputs: ExtMenuitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMenuitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMenuitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMenuitemMetaData.PROPERTIES,
            ExtMenuitemMetaData.EVENTS
        )
        this.xtype = 'menuitem'
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
