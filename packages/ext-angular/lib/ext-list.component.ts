import { Ext_List } from './Ext/List';
export class ExtListMetaData extends Ext_List {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtListMetaData.PROPERTIES = Ext_List.getProperties(ExtListMetaData.PROPERTIES);
        ExtListMetaData.EVENTS = Ext_List.getEvents(ExtListMetaData.EVENTS);
        ExtListMetaData.EVENTS.forEach( (event: any) => {
            ExtListMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtListMetaData.getAll();})();

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
  selector: 'ext-list',
  inputs: ExtListMetaData.PROPERTIES,
  outputs: ExtListMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtListComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtListComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtListMetaData.PROPERTIES,
            ExtListMetaData.EVENTS
        )
        this.xtype = 'list'
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
