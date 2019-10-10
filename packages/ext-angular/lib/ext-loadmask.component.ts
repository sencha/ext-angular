import { Ext_LoadMask } from './Ext/LoadMask';
export class ExtLoadmaskMetaData extends Ext_LoadMask {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtLoadmaskMetaData.PROPERTIES = Ext_LoadMask.getProperties(ExtLoadmaskMetaData.PROPERTIES);
        ExtLoadmaskMetaData.EVENTS = Ext_LoadMask.getEvents(ExtLoadmaskMetaData.EVENTS);
        ExtLoadmaskMetaData.EVENTS.forEach( (event: any) => {
            ExtLoadmaskMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtLoadmaskMetaData.getAll();})();

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
  selector: 'ext-loadmask',
  inputs: ExtLoadmaskMetaData.PROPERTIES,
  outputs: ExtLoadmaskMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtLoadmaskComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtLoadmaskComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtLoadmaskMetaData.PROPERTIES,
            ExtLoadmaskMetaData.EVENTS
        )
        this.xtype = 'loadmask'
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
