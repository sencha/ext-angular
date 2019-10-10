import { Ext_dataview_Component } from './Ext/dataview/Component';
export class ExtComponentdataviewMetaData extends Ext_dataview_Component {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtComponentdataviewMetaData.PROPERTIES = Ext_dataview_Component.getProperties(ExtComponentdataviewMetaData.PROPERTIES);
        ExtComponentdataviewMetaData.EVENTS = Ext_dataview_Component.getEvents(ExtComponentdataviewMetaData.EVENTS);
        ExtComponentdataviewMetaData.EVENTS.forEach( (event: any) => {
            ExtComponentdataviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtComponentdataviewMetaData.getAll();})();

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
  selector: 'ext-componentdataview',
  inputs: ExtComponentdataviewMetaData.PROPERTIES,
  outputs: ExtComponentdataviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtComponentdataviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtComponentdataviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtComponentdataviewMetaData.PROPERTIES,
            ExtComponentdataviewMetaData.EVENTS
        )
        this.xtype = 'componentdataview'
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
