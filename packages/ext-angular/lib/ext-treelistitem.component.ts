import { Ext_list_TreeItem } from './Ext/list/TreeItem';
export class ExtTreelistitemMetaData extends Ext_list_TreeItem {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTreelistitemMetaData.PROPERTIES = Ext_list_TreeItem.getProperties(ExtTreelistitemMetaData.PROPERTIES);
        ExtTreelistitemMetaData.EVENTS = Ext_list_TreeItem.getEvents(ExtTreelistitemMetaData.EVENTS);
        ExtTreelistitemMetaData.EVENTS.forEach( (event: any) => {
            ExtTreelistitemMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTreelistitemMetaData.getAll();})();

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
  selector: 'ext-treelistitem',
  inputs: ExtTreelistitemMetaData.PROPERTIES,
  outputs: ExtTreelistitemMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreelistitemComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTreelistitemComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTreelistitemMetaData.PROPERTIES,
            ExtTreelistitemMetaData.EVENTS
        )
        this.xtype = 'treelistitem'
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
