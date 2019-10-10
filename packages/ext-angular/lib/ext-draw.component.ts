import { Ext_draw_Component } from './Ext/draw/Component';
export class ExtDrawMetaData extends Ext_draw_Component {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDrawMetaData.PROPERTIES = Ext_draw_Component.getProperties(ExtDrawMetaData.PROPERTIES);
        ExtDrawMetaData.EVENTS = Ext_draw_Component.getEvents(ExtDrawMetaData.EVENTS);
        ExtDrawMetaData.EVENTS.forEach( (event: any) => {
            ExtDrawMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDrawMetaData.getAll();})();

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
  selector: 'ext-draw',
  inputs: ExtDrawMetaData.PROPERTIES,
  outputs: ExtDrawMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDrawComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDrawComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDrawMetaData.PROPERTIES,
            ExtDrawMetaData.EVENTS
        )
        this.xtype = 'draw'
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
