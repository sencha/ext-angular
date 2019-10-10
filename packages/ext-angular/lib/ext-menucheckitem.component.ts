import { Ext_menu_CheckItem } from './Ext/menu/CheckItem';
export class ExtMenucheckitemMetaData extends Ext_menu_CheckItem {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMenucheckitemMetaData.PROPERTIES = Ext_menu_CheckItem.getProperties(ExtMenucheckitemMetaData.PROPERTIES);
        ExtMenucheckitemMetaData.EVENTS = Ext_menu_CheckItem.getEvents(ExtMenucheckitemMetaData.EVENTS);
        ExtMenucheckitemMetaData.EVENTS.forEach( (event: any) => {
            ExtMenucheckitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMenucheckitemMetaData.getAll();})();

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
  selector: 'ext-menucheckitem',
  inputs: ExtMenucheckitemMetaData.PROPERTIES,
  outputs: ExtMenucheckitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMenucheckitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMenucheckitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMenucheckitemMetaData.PROPERTIES,
            ExtMenucheckitemMetaData.EVENTS
        )
        this.xtype = 'menucheckitem'
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
