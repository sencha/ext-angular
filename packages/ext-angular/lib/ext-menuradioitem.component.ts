import { Ext_menu_RadioItem } from './Ext/menu/RadioItem';
export class ExtMenuradioitemMetaData extends Ext_menu_RadioItem {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMenuradioitemMetaData.PROPERTIES = Ext_menu_RadioItem.getProperties(ExtMenuradioitemMetaData.PROPERTIES);
        ExtMenuradioitemMetaData.EVENTS = Ext_menu_RadioItem.getEvents(ExtMenuradioitemMetaData.EVENTS);
        ExtMenuradioitemMetaData.EVENTS.forEach( (event: any) => {
            ExtMenuradioitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMenuradioitemMetaData.getAll();})();

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
  selector: 'ext-menuradioitem',
  inputs: ExtMenuradioitemMetaData.PROPERTIES,
  outputs: ExtMenuradioitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMenuradioitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMenuradioitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMenuradioitemMetaData.PROPERTIES,
            ExtMenuradioitemMetaData.EVENTS
        )
        this.xtype = 'menuradioitem'
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
