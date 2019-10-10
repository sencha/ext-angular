import { Ext_button_Segmented } from './Ext/button/Segmented';
export class ExtSegmentedbuttonMetaData extends Ext_button_Segmented {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSegmentedbuttonMetaData.PROPERTIES = Ext_button_Segmented.getProperties(ExtSegmentedbuttonMetaData.PROPERTIES);
        ExtSegmentedbuttonMetaData.EVENTS = Ext_button_Segmented.getEvents(ExtSegmentedbuttonMetaData.EVENTS);
        ExtSegmentedbuttonMetaData.EVENTS.forEach( (event: any) => {
            ExtSegmentedbuttonMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSegmentedbuttonMetaData.getAll();})();

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
  selector: 'ext-segmentedbutton',
  inputs: ExtSegmentedbuttonMetaData.PROPERTIES,
  outputs: ExtSegmentedbuttonMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSegmentedbuttonComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSegmentedbuttonComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSegmentedbuttonMetaData.PROPERTIES,
            ExtSegmentedbuttonMetaData.EVENTS
        )
        this.xtype = 'segmentedbutton'
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
