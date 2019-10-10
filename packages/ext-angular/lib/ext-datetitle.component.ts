import { Ext_panel_DateTitle } from './Ext/panel/DateTitle';
export class ExtDatetitleMetaData extends Ext_panel_DateTitle {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtDatetitleMetaData.PROPERTIES = Ext_panel_DateTitle.getProperties(ExtDatetitleMetaData.PROPERTIES);
        ExtDatetitleMetaData.EVENTS = Ext_panel_DateTitle.getEvents(ExtDatetitleMetaData.EVENTS);
        ExtDatetitleMetaData.EVENTS.forEach( (event: any) => {
            ExtDatetitleMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtDatetitleMetaData.getAll();})();

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
  selector: 'ext-datetitle',
  inputs: ExtDatetitleMetaData.PROPERTIES,
  outputs: ExtDatetitleMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtDatetitleComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtDatetitleComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtDatetitleMetaData.PROPERTIES,
            ExtDatetitleMetaData.EVENTS
        )
        this.xtype = 'datetitle'
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
