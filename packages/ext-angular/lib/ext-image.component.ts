import { Ext_Image } from './Ext/Image';
export class ExtImageMetaData extends Ext_Image {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtImageMetaData.PROPERTIES = Ext_Image.getProperties(ExtImageMetaData.PROPERTIES);
        ExtImageMetaData.EVENTS = Ext_Image.getEvents(ExtImageMetaData.EVENTS);
        ExtImageMetaData.EVENTS.forEach( (event: any) => {
            ExtImageMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtImageMetaData.getAll();})();

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
  selector: 'ext-image',
  inputs: ExtImageMetaData.PROPERTIES,
  outputs: ExtImageMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtImageComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtImageComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtImageMetaData.PROPERTIES,
            ExtImageMetaData.EVENTS
        )
        this.xtype = 'image'
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
