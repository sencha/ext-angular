import { Ext_Title } from './Ext/Title';
export class ExtTitleMetaData extends Ext_Title {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtTitleMetaData.PROPERTIES = Ext_Title.getProperties(ExtTitleMetaData.PROPERTIES);
        ExtTitleMetaData.EVENTS = Ext_Title.getEvents(ExtTitleMetaData.EVENTS);
        ExtTitleMetaData.EVENTS.forEach( (event: any) => {
            ExtTitleMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtTitleMetaData.getAll();})();

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
  selector: 'ext-title',
  inputs: ExtTitleMetaData.PROPERTIES,
  outputs: ExtTitleMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtTitleComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtTitleComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtTitleMetaData.PROPERTIES,
            ExtTitleMetaData.EVENTS
        )
        this.xtype = 'title'
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
