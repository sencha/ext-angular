import { Ext_dataview_ItemHeader } from './Ext/dataview/ItemHeader';
export class ExtItemheaderMetaData extends Ext_dataview_ItemHeader {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtItemheaderMetaData.PROPERTIES = Ext_dataview_ItemHeader.getProperties(ExtItemheaderMetaData.PROPERTIES);
        ExtItemheaderMetaData.EVENTS = Ext_dataview_ItemHeader.getEvents(ExtItemheaderMetaData.EVENTS);
        ExtItemheaderMetaData.EVENTS.forEach( (event: any) => {
            ExtItemheaderMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtItemheaderMetaData.getAll();})();

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
  selector: 'ext-itemheader',
  inputs: ExtItemheaderMetaData.PROPERTIES,
  outputs: ExtItemheaderMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtItemheaderComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtItemheaderComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtItemheaderMetaData.PROPERTIES,
            ExtItemheaderMetaData.EVENTS
        )
        this.xtype = 'itemheader'
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
