import { Ext_slider_Thumb } from './Ext/slider/Thumb';
export class ExtThumbMetaData extends Ext_slider_Thumb {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtThumbMetaData.PROPERTIES = Ext_slider_Thumb.getProperties(ExtThumbMetaData.PROPERTIES);
        ExtThumbMetaData.EVENTS = Ext_slider_Thumb.getEvents(ExtThumbMetaData.EVENTS);
        ExtThumbMetaData.EVENTS.forEach( (event: any) => {
            ExtThumbMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtThumbMetaData.getAll();})();

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
  selector: 'ext-thumb',
  inputs: ExtThumbMetaData.PROPERTIES,
  outputs: ExtThumbMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtThumbComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtThumbComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtThumbMetaData.PROPERTIES,
            ExtThumbMetaData.EVENTS
        )
        this.xtype = 'thumb'
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
