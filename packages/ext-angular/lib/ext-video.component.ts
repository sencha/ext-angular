import { Ext_Video } from './Ext/Video';
export class ExtVideoMetaData extends Ext_Video {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtVideoMetaData.PROPERTIES = Ext_Video.getProperties(ExtVideoMetaData.PROPERTIES);
        ExtVideoMetaData.EVENTS = Ext_Video.getEvents(ExtVideoMetaData.EVENTS);
        ExtVideoMetaData.EVENTS.forEach( (event: any) => {
            ExtVideoMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtVideoMetaData.getAll();})();

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
  selector: 'ext-video',
  inputs: ExtVideoMetaData.PROPERTIES,
  outputs: ExtVideoMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtVideoComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtVideoComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtVideoMetaData.PROPERTIES,
            ExtVideoMetaData.EVENTS
        )
        this.xtype = 'video'
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
