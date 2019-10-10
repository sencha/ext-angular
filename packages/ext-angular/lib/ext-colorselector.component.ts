import { Ext_ux_colorpick_Selector } from './Ext/ux/colorpick/Selector';
export class ExtColorselectorMetaData extends Ext_ux_colorpick_Selector {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtColorselectorMetaData.PROPERTIES = Ext_ux_colorpick_Selector.getProperties(ExtColorselectorMetaData.PROPERTIES);
        ExtColorselectorMetaData.EVENTS = Ext_ux_colorpick_Selector.getEvents(ExtColorselectorMetaData.EVENTS);
        ExtColorselectorMetaData.EVENTS.forEach( (event: any) => {
            ExtColorselectorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtColorselectorMetaData.getAll();})();

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
  selector: 'ext-colorselector',
  inputs: ExtColorselectorMetaData.PROPERTIES,
  outputs: ExtColorselectorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtColorselectorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtColorselectorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtColorselectorMetaData.PROPERTIES,
            ExtColorselectorMetaData.EVENTS
        )
        this.xtype = 'colorselector'
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
