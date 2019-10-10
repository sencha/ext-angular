import { Ext_Toolbar } from './Ext/Toolbar';
export class ExtToolbarMetaData extends Ext_Toolbar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtToolbarMetaData.PROPERTIES = Ext_Toolbar.getProperties(ExtToolbarMetaData.PROPERTIES);
        ExtToolbarMetaData.EVENTS = Ext_Toolbar.getEvents(ExtToolbarMetaData.EVENTS);
        ExtToolbarMetaData.EVENTS.forEach( (event: any) => {
            ExtToolbarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtToolbarMetaData.getAll();})();

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
  selector: 'ext-toolbar',
  inputs: ExtToolbarMetaData.PROPERTIES,
  outputs: ExtToolbarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtToolbarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtToolbarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtToolbarMetaData.PROPERTIES,
            ExtToolbarMetaData.EVENTS
        )
        this.xtype = 'toolbar'
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
