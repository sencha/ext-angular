import { Ext_BreadcrumbBar } from './Ext/BreadcrumbBar';
export class ExtBreadcrumbbarMetaData extends Ext_BreadcrumbBar {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtBreadcrumbbarMetaData.PROPERTIES = Ext_BreadcrumbBar.getProperties(ExtBreadcrumbbarMetaData.PROPERTIES);
        ExtBreadcrumbbarMetaData.EVENTS = Ext_BreadcrumbBar.getEvents(ExtBreadcrumbbarMetaData.EVENTS);
        ExtBreadcrumbbarMetaData.EVENTS.forEach( (event: any) => {
            ExtBreadcrumbbarMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtBreadcrumbbarMetaData.getAll();})();

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
  selector: 'ext-breadcrumbbar',
  inputs: ExtBreadcrumbbarMetaData.PROPERTIES,
  outputs: ExtBreadcrumbbarMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtBreadcrumbbarComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtBreadcrumbbarComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtBreadcrumbbarMetaData.PROPERTIES,
            ExtBreadcrumbbarMetaData.EVENTS
        )
        this.xtype = 'breadcrumbbar'
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
