import { Ext_dataview_listswiper_Item } from './Ext/dataview/listswiper/Item';
export class ExtListswiperitemMetaData extends Ext_dataview_listswiper_Item {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtListswiperitemMetaData.PROPERTIES = Ext_dataview_listswiper_Item.getProperties(ExtListswiperitemMetaData.PROPERTIES);
        ExtListswiperitemMetaData.EVENTS = Ext_dataview_listswiper_Item.getEvents(ExtListswiperitemMetaData.EVENTS);
        ExtListswiperitemMetaData.EVENTS.forEach( (event: any) => {
            ExtListswiperitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtListswiperitemMetaData.getAll();})();

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
  selector: 'ext-listswiperitem',
  inputs: ExtListswiperitemMetaData.PROPERTIES,
  outputs: ExtListswiperitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtListswiperitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtListswiperitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtListswiperitemMetaData.PROPERTIES,
            ExtListswiperitemMetaData.EVENTS
        )
        this.xtype = 'listswiperitem'
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
