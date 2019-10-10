import { Ext_NestedList } from './Ext/NestedList';
export class ExtNestedlistMetaData extends Ext_NestedList {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtNestedlistMetaData.PROPERTIES = Ext_NestedList.getProperties(ExtNestedlistMetaData.PROPERTIES);
        ExtNestedlistMetaData.EVENTS = Ext_NestedList.getEvents(ExtNestedlistMetaData.EVENTS);
        ExtNestedlistMetaData.EVENTS.forEach( (event: any) => {
            ExtNestedlistMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtNestedlistMetaData.getAll();})();

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
  selector: 'ext-nestedlist',
  inputs: ExtNestedlistMetaData.PROPERTIES,
  outputs: ExtNestedlistMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtNestedlistComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtNestedlistComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtNestedlistMetaData.PROPERTIES,
            ExtNestedlistMetaData.EVENTS
        )
        this.xtype = 'nestedlist'
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
