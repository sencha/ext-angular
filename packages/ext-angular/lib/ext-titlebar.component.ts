import { Ext_TitleBar } from './Ext/TitleBar';
export class ExtTitlebarMetaData extends Ext_TitleBar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTitlebarMetaData.PROPERTIES = Ext_TitleBar.getProperties(ExtTitlebarMetaData.PROPERTIES);
        ExtTitlebarMetaData.EVENTS = Ext_TitleBar.getEvents(ExtTitlebarMetaData.EVENTS);
        ExtTitlebarMetaData.EVENTS.forEach( (event: any) => {
            ExtTitlebarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTitlebarMetaData.getAll();})();

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
  selector: 'ext-titlebar',
  inputs: ExtTitlebarMetaData.PROPERTIES,
  outputs: ExtTitlebarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTitlebarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTitlebarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTitlebarMetaData.PROPERTIES,
            ExtTitlebarMetaData.EVENTS
        )
        this.xtype = 'titlebar'
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
