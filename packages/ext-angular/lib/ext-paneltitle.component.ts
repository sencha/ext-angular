import { Ext_panel_Title } from './Ext/panel/Title';
export class ExtPaneltitleMetaData extends Ext_panel_Title {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPaneltitleMetaData.PROPERTIES = Ext_panel_Title.getProperties(ExtPaneltitleMetaData.PROPERTIES);
        ExtPaneltitleMetaData.EVENTS = Ext_panel_Title.getEvents(ExtPaneltitleMetaData.EVENTS);
        ExtPaneltitleMetaData.EVENTS.forEach( (event: any) => {
            ExtPaneltitleMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPaneltitleMetaData.getAll();})();

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
  selector: 'ext-paneltitle',
  inputs: ExtPaneltitleMetaData.PROPERTIES,
  outputs: ExtPaneltitleMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPaneltitleComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPaneltitleComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPaneltitleMetaData.PROPERTIES,
            ExtPaneltitleMetaData.EVENTS
        )
        this.xtype = 'paneltitle'
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
