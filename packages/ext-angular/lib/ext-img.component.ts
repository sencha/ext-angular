import { Ext_Image } from './Ext/Image';
export class ExtImgMetaData extends Ext_Image {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtImgMetaData.PROPERTIES = Ext_Image.getProperties(ExtImgMetaData.PROPERTIES);
        ExtImgMetaData.EVENTS = Ext_Image.getEvents(ExtImgMetaData.EVENTS);
        ExtImgMetaData.EVENTS.forEach( (event: any) => {
            ExtImgMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtImgMetaData.getAll();})();

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
  selector: 'ext-img',
  inputs: ExtImgMetaData.PROPERTIES,
  outputs: ExtImgMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtImgComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtImgComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtImgMetaData.PROPERTIES,
            ExtImgMetaData.EVENTS
        )
        this.xtype = 'img'
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
