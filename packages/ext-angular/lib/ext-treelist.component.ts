import { Ext_list_Tree } from './Ext/list/Tree';
export class ExtTreelistMetaData extends Ext_list_Tree {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTreelistMetaData.PROPERTIES = Ext_list_Tree.getProperties(ExtTreelistMetaData.PROPERTIES);
        ExtTreelistMetaData.EVENTS = Ext_list_Tree.getEvents(ExtTreelistMetaData.EVENTS);
        ExtTreelistMetaData.EVENTS.forEach( (event: any) => {
            ExtTreelistMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTreelistMetaData.getAll();})();

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
  selector: 'ext-treelist',
  inputs: ExtTreelistMetaData.PROPERTIES,
  outputs: ExtTreelistMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreelistComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTreelistComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTreelistMetaData.PROPERTIES,
            ExtTreelistMetaData.EVENTS
        )
        this.xtype = 'treelist'
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
