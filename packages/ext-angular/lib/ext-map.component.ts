import { Ext_Map } from './Ext/Map';
export class ExtMapMetaData extends Ext_Map {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMapMetaData.PROPERTIES = Ext_Map.getProperties(ExtMapMetaData.PROPERTIES);
        ExtMapMetaData.EVENTS = Ext_Map.getEvents(ExtMapMetaData.EVENTS);
        ExtMapMetaData.EVENTS.forEach( (event: any) => {
            ExtMapMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMapMetaData.getAll();})();

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
  selector: 'ext-map',
  inputs: ExtMapMetaData.PROPERTIES,
  outputs: ExtMapMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMapComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMapComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMapMetaData.PROPERTIES,
            ExtMapMetaData.EVENTS
        )
        this.xtype = 'map'
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
