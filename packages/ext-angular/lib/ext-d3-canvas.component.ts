import { Ext_d3_canvas_Canvas } from './Ext/d3/canvas/Canvas';
export class ExtD3_canvasMetaData extends Ext_d3_canvas_Canvas {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtD3_canvasMetaData.PROPERTIES = Ext_d3_canvas_Canvas.getProperties(ExtD3_canvasMetaData.PROPERTIES);
        ExtD3_canvasMetaData.EVENTS = Ext_d3_canvas_Canvas.getEvents(ExtD3_canvasMetaData.EVENTS);
        ExtD3_canvasMetaData.EVENTS.forEach( (event: any) => {
            ExtD3_canvasMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtD3_canvasMetaData.getAll();})();

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
  selector: 'ext-d3-canvas',
  inputs: ExtD3_canvasMetaData.PROPERTIES,
  outputs: ExtD3_canvasMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtD3_canvasComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtD3_canvasComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtD3_canvasMetaData.PROPERTIES,
            ExtD3_canvasMetaData.EVENTS
        )
        this.xtype = 'd3-canvas'
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
