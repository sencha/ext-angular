import { Ext_dataview_BoundList } from './Ext/dataview/BoundList';
export class ExtBoundlistMetaData extends Ext_dataview_BoundList {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtBoundlistMetaData.PROPERTIES = Ext_dataview_BoundList.getProperties(ExtBoundlistMetaData.PROPERTIES);
        ExtBoundlistMetaData.EVENTS = Ext_dataview_BoundList.getEvents(ExtBoundlistMetaData.EVENTS);
        ExtBoundlistMetaData.EVENTS.forEach( (event: any) => {
            ExtBoundlistMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtBoundlistMetaData.getAll();})();

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
  selector: 'ext-boundlist',
  inputs: ExtBoundlistMetaData.PROPERTIES,
  outputs: ExtBoundlistMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtBoundlistComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtBoundlistComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtBoundlistMetaData.PROPERTIES,
            ExtBoundlistMetaData.EVENTS
        )
        this.xtype = 'boundlist'
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
