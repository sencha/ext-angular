import { Ext_Mask } from './Ext/Mask';
export class ExtMaskMetaData extends Ext_Mask {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMaskMetaData.PROPERTIES = Ext_Mask.getProperties(ExtMaskMetaData.PROPERTIES);
        ExtMaskMetaData.EVENTS = Ext_Mask.getEvents(ExtMaskMetaData.EVENTS);
        ExtMaskMetaData.EVENTS.forEach( (event: any) => {
            ExtMaskMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMaskMetaData.getAll();})();

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
  selector: 'ext-mask',
  inputs: ExtMaskMetaData.PROPERTIES,
  outputs: ExtMaskMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMaskComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMaskComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMaskMetaData.PROPERTIES,
            ExtMaskMetaData.EVENTS
        )
        this.xtype = 'mask'
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
