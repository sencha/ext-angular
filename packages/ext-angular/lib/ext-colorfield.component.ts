import { Ext_ux_colorpick_Field } from './Ext/ux/colorpick/Field';
export class ExtColorfieldMetaData extends Ext_ux_colorpick_Field {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtColorfieldMetaData.PROPERTIES = Ext_ux_colorpick_Field.getProperties(ExtColorfieldMetaData.PROPERTIES);
        ExtColorfieldMetaData.EVENTS = Ext_ux_colorpick_Field.getEvents(ExtColorfieldMetaData.EVENTS);
        ExtColorfieldMetaData.EVENTS.forEach( (event: any) => {
            ExtColorfieldMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtColorfieldMetaData.getAll();})();

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
  selector: 'ext-colorfield',
  inputs: ExtColorfieldMetaData.PROPERTIES,
  outputs: ExtColorfieldMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtColorfieldComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtColorfieldComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtColorfieldMetaData.PROPERTIES,
            ExtColorfieldMetaData.EVENTS
        )
        this.xtype = 'colorfield'
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
