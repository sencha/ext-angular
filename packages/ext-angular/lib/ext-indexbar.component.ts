import { Ext_IndexBar } from './Ext/IndexBar';
export class ExtIndexbarMetaData extends Ext_IndexBar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtIndexbarMetaData.PROPERTIES = Ext_IndexBar.getProperties(ExtIndexbarMetaData.PROPERTIES);
        ExtIndexbarMetaData.EVENTS = Ext_IndexBar.getEvents(ExtIndexbarMetaData.EVENTS);
        ExtIndexbarMetaData.EVENTS.forEach( (event: any) => {
            ExtIndexbarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtIndexbarMetaData.getAll();})();

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
  selector: 'ext-indexbar',
  inputs: ExtIndexbarMetaData.PROPERTIES,
  outputs: ExtIndexbarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtIndexbarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtIndexbarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtIndexbarMetaData.PROPERTIES,
            ExtIndexbarMetaData.EVENTS
        )
        this.xtype = 'indexbar'
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
