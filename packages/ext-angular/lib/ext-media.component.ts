import { Ext_Media } from './Ext/Media';
export class ExtMediaMetaData extends Ext_Media {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMediaMetaData.PROPERTIES = Ext_Media.getProperties(ExtMediaMetaData.PROPERTIES);
        ExtMediaMetaData.EVENTS = Ext_Media.getEvents(ExtMediaMetaData.EVENTS);
        ExtMediaMetaData.EVENTS.forEach( (event: any) => {
            ExtMediaMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMediaMetaData.getAll();})();

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
  selector: 'ext-media',
  inputs: ExtMediaMetaData.PROPERTIES,
  outputs: ExtMediaMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMediaComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMediaComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMediaMetaData.PROPERTIES,
            ExtMediaMetaData.EVENTS
        )
        this.xtype = 'media'
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
