import { Ext_grid_rowedit_Bar } from './Ext/grid/rowedit/Bar';
export class ExtRoweditorbarMetaData extends Ext_grid_rowedit_Bar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRoweditorbarMetaData.PROPERTIES = Ext_grid_rowedit_Bar.getProperties(ExtRoweditorbarMetaData.PROPERTIES);
        ExtRoweditorbarMetaData.EVENTS = Ext_grid_rowedit_Bar.getEvents(ExtRoweditorbarMetaData.EVENTS);
        ExtRoweditorbarMetaData.EVENTS.forEach( (event: any) => {
            ExtRoweditorbarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRoweditorbarMetaData.getAll();})();

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
  selector: 'ext-roweditorbar',
  inputs: ExtRoweditorbarMetaData.PROPERTIES,
  outputs: ExtRoweditorbarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRoweditorbarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRoweditorbarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRoweditorbarMetaData.PROPERTIES,
            ExtRoweditorbarMetaData.EVENTS
        )
        this.xtype = 'roweditorbar'
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
