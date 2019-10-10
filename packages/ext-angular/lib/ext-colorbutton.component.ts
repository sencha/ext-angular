import { Ext_ux_colorpick_Button } from './Ext/ux/colorpick/Button';
export class ExtColorbuttonMetaData extends Ext_ux_colorpick_Button {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtColorbuttonMetaData.PROPERTIES = Ext_ux_colorpick_Button.getProperties(ExtColorbuttonMetaData.PROPERTIES);
        ExtColorbuttonMetaData.EVENTS = Ext_ux_colorpick_Button.getEvents(ExtColorbuttonMetaData.EVENTS);
        ExtColorbuttonMetaData.EVENTS.forEach( (event: any) => {
            ExtColorbuttonMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtColorbuttonMetaData.getAll();})();

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
  selector: 'ext-colorbutton',
  inputs: ExtColorbuttonMetaData.PROPERTIES,
  outputs: ExtColorbuttonMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtColorbuttonComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtColorbuttonComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtColorbuttonMetaData.PROPERTIES,
            ExtColorbuttonMetaData.EVENTS
        )
        this.xtype = 'colorbutton'
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
