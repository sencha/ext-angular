import { Ext_ux_colorpick_ColorPreview } from './Ext/ux/colorpick/ColorPreview';
export class ExtColorpickercolorpreviewMetaData extends Ext_ux_colorpick_ColorPreview {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtColorpickercolorpreviewMetaData.PROPERTIES = Ext_ux_colorpick_ColorPreview.getProperties(ExtColorpickercolorpreviewMetaData.PROPERTIES);
        ExtColorpickercolorpreviewMetaData.EVENTS = Ext_ux_colorpick_ColorPreview.getEvents(ExtColorpickercolorpreviewMetaData.EVENTS);
        ExtColorpickercolorpreviewMetaData.EVENTS.forEach( (event: any) => {
            ExtColorpickercolorpreviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtColorpickercolorpreviewMetaData.getAll();})();

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
  selector: 'ext-colorpickercolorpreview',
  inputs: ExtColorpickercolorpreviewMetaData.PROPERTIES,
  outputs: ExtColorpickercolorpreviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtColorpickercolorpreviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtColorpickercolorpreviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtColorpickercolorpreviewMetaData.PROPERTIES,
            ExtColorpickercolorpreviewMetaData.EVENTS
        )
        this.xtype = 'colorpickercolorpreview'
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
