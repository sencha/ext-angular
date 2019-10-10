import { Ext_tree_Tree } from './Ext/tree/Tree';
export class ExtTreeMetaData extends Ext_tree_Tree {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTreeMetaData.PROPERTIES = Ext_tree_Tree.getProperties(ExtTreeMetaData.PROPERTIES);
        ExtTreeMetaData.EVENTS = Ext_tree_Tree.getEvents(ExtTreeMetaData.EVENTS);
        ExtTreeMetaData.EVENTS.forEach( (event: any) => {
            ExtTreeMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTreeMetaData.getAll();})();

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
  selector: 'ext-tree',
  inputs: ExtTreeMetaData.PROPERTIES,
  outputs: ExtTreeMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTreeComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTreeComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTreeMetaData.PROPERTIES,
            ExtTreeMetaData.EVENTS
        )
        this.xtype = 'tree'
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
