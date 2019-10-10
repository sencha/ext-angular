import { Ext_Map } from './Ext/Map';
export class ExtGoogle_mapMetaData extends Ext_Map {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtGoogle_mapMetaData.PROPERTIES = Ext_Map.getProperties(ExtGoogle_mapMetaData.PROPERTIES);
        ExtGoogle_mapMetaData.EVENTS = Ext_Map.getEvents(ExtGoogle_mapMetaData.EVENTS);
        ExtGoogle_mapMetaData.EVENTS.forEach( (event: any) => {
            ExtGoogle_mapMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtGoogle_mapMetaData.getAll();})();

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
  selector: 'ext-google-map',
  inputs: ExtGoogle_mapMetaData.PROPERTIES,
  outputs: ExtGoogle_mapMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtGoogle_mapComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtGoogle_mapComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtGoogle_mapMetaData.PROPERTIES,
            ExtGoogle_mapMetaData.EVENTS
        )
        this.xtype = 'google-map'
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
