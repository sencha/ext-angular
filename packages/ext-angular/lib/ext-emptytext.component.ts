import { Ext_dataview_EmptyText } from './Ext/dataview/EmptyText';
export class ExtEmptytextMetaData extends Ext_dataview_EmptyText {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtEmptytextMetaData.PROPERTIES = Ext_dataview_EmptyText.getProperties(ExtEmptytextMetaData.PROPERTIES);
        ExtEmptytextMetaData.EVENTS = Ext_dataview_EmptyText.getEvents(ExtEmptytextMetaData.EVENTS);
        ExtEmptytextMetaData.EVENTS.forEach( (event: any) => {
            ExtEmptytextMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtEmptytextMetaData.getAll();})();

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
  selector: 'ext-emptytext',
  inputs: ExtEmptytextMetaData.PROPERTIES,
  outputs: ExtEmptytextMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtEmptytextComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtEmptytextComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtEmptytextMetaData.PROPERTIES,
            ExtEmptytextMetaData.EVENTS
        )
        this.xtype = 'emptytext'
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
