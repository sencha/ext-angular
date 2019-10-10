import { Ext_slider_Toggle } from './Ext/slider/Toggle';
export class ExtTogglesliderMetaData extends Ext_slider_Toggle {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTogglesliderMetaData.PROPERTIES = Ext_slider_Toggle.getProperties(ExtTogglesliderMetaData.PROPERTIES);
        ExtTogglesliderMetaData.EVENTS = Ext_slider_Toggle.getEvents(ExtTogglesliderMetaData.EVENTS);
        ExtTogglesliderMetaData.EVENTS.forEach( (event: any) => {
            ExtTogglesliderMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTogglesliderMetaData.getAll();})();

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
  selector: 'ext-toggleslider',
  inputs: ExtTogglesliderMetaData.PROPERTIES,
  outputs: ExtTogglesliderMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTogglesliderComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTogglesliderComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTogglesliderMetaData.PROPERTIES,
            ExtTogglesliderMetaData.EVENTS
        )
        this.xtype = 'toggleslider'
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
