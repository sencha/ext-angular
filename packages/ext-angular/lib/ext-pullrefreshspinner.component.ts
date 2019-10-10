import { Ext_dataview_pullrefresh_Spinner } from './Ext/dataview/pullrefresh/Spinner';
export class ExtPullrefreshspinnerMetaData extends Ext_dataview_pullrefresh_Spinner {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPullrefreshspinnerMetaData.PROPERTIES = Ext_dataview_pullrefresh_Spinner.getProperties(ExtPullrefreshspinnerMetaData.PROPERTIES);
        ExtPullrefreshspinnerMetaData.EVENTS = Ext_dataview_pullrefresh_Spinner.getEvents(ExtPullrefreshspinnerMetaData.EVENTS);
        ExtPullrefreshspinnerMetaData.EVENTS.forEach( (event: any) => {
            ExtPullrefreshspinnerMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPullrefreshspinnerMetaData.getAll();})();

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
  selector: 'ext-pullrefreshspinner',
  inputs: ExtPullrefreshspinnerMetaData.PROPERTIES,
  outputs: ExtPullrefreshspinnerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPullrefreshspinnerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPullrefreshspinnerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPullrefreshspinnerMetaData.PROPERTIES,
            ExtPullrefreshspinnerMetaData.EVENTS
        )
        this.xtype = 'pullrefreshspinner'
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
