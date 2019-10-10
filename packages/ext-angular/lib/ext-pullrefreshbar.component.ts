import { Ext_dataview_pullrefresh_Bar } from './Ext/dataview/pullrefresh/Bar';
export class ExtPullrefreshbarMetaData extends Ext_dataview_pullrefresh_Bar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPullrefreshbarMetaData.PROPERTIES = Ext_dataview_pullrefresh_Bar.getProperties(ExtPullrefreshbarMetaData.PROPERTIES);
        ExtPullrefreshbarMetaData.EVENTS = Ext_dataview_pullrefresh_Bar.getEvents(ExtPullrefreshbarMetaData.EVENTS);
        ExtPullrefreshbarMetaData.EVENTS.forEach( (event: any) => {
            ExtPullrefreshbarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPullrefreshbarMetaData.getAll();})();

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
  selector: 'ext-pullrefreshbar',
  inputs: ExtPullrefreshbarMetaData.PROPERTIES,
  outputs: ExtPullrefreshbarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPullrefreshbarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPullrefreshbarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPullrefreshbarMetaData.PROPERTIES,
            ExtPullrefreshbarMetaData.EVENTS
        )
        this.xtype = 'pullrefreshbar'
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
