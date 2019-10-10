import { Ext_DataView } from './Ext/DataView';
export class ExtDataviewMetaData extends Ext_DataView {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDataviewMetaData.PROPERTIES = Ext_DataView.getProperties(ExtDataviewMetaData.PROPERTIES);
        ExtDataviewMetaData.EVENTS = Ext_DataView.getEvents(ExtDataviewMetaData.EVENTS);
        ExtDataviewMetaData.EVENTS.forEach( (event: any) => {
            ExtDataviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDataviewMetaData.getAll();})();

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
  selector: 'ext-dataview',
  inputs: ExtDataviewMetaData.PROPERTIES,
  outputs: ExtDataviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDataviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDataviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDataviewMetaData.PROPERTIES,
            ExtDataviewMetaData.EVENTS
        )
        this.xtype = 'dataview'
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
