import { Ext_draw_Surface } from './Ext/draw/Surface';
export class ExtSurfaceMetaData extends Ext_draw_Surface {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSurfaceMetaData.PROPERTIES = Ext_draw_Surface.getProperties(ExtSurfaceMetaData.PROPERTIES);
        ExtSurfaceMetaData.EVENTS = Ext_draw_Surface.getEvents(ExtSurfaceMetaData.EVENTS);
        ExtSurfaceMetaData.EVENTS.forEach( (event: any) => {
            ExtSurfaceMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSurfaceMetaData.getAll();})();

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
  selector: 'ext-surface',
  inputs: ExtSurfaceMetaData.PROPERTIES,
  outputs: ExtSurfaceMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSurfaceComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSurfaceComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSurfaceMetaData.PROPERTIES,
            ExtSurfaceMetaData.EVENTS
        )
        this.xtype = 'surface'
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
