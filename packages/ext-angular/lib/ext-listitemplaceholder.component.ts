import { Ext_dataview_ListItemPlaceholder } from './Ext/dataview/ListItemPlaceholder';
export class ExtListitemplaceholderMetaData extends Ext_dataview_ListItemPlaceholder {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtListitemplaceholderMetaData.PROPERTIES = Ext_dataview_ListItemPlaceholder.getProperties(ExtListitemplaceholderMetaData.PROPERTIES);
        ExtListitemplaceholderMetaData.EVENTS = Ext_dataview_ListItemPlaceholder.getEvents(ExtListitemplaceholderMetaData.EVENTS);
        ExtListitemplaceholderMetaData.EVENTS.forEach( (event: any) => {
            ExtListitemplaceholderMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtListitemplaceholderMetaData.getAll();})();

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
  selector: 'ext-listitemplaceholder',
  inputs: ExtListitemplaceholderMetaData.PROPERTIES,
  outputs: ExtListitemplaceholderMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtListitemplaceholderComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtListitemplaceholderComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtListitemplaceholderMetaData.PROPERTIES,
            ExtListitemplaceholderMetaData.EVENTS
        )
        this.xtype = 'listitemplaceholder'
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
