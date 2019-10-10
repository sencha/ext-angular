import { Ext_NavigationView } from './Ext/NavigationView';
export class ExtNavigationviewMetaData extends Ext_NavigationView {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtNavigationviewMetaData.PROPERTIES = Ext_NavigationView.getProperties(ExtNavigationviewMetaData.PROPERTIES);
        ExtNavigationviewMetaData.EVENTS = Ext_NavigationView.getEvents(ExtNavigationviewMetaData.EVENTS);
        ExtNavigationviewMetaData.EVENTS.forEach( (event: any) => {
            ExtNavigationviewMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtNavigationviewMetaData.getAll();})();

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
  selector: 'ext-navigationview',
  inputs: ExtNavigationviewMetaData.PROPERTIES,
  outputs: ExtNavigationviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtNavigationviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtNavigationviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtNavigationviewMetaData.PROPERTIES,
            ExtNavigationviewMetaData.EVENTS
        )
        this.xtype = 'navigationview'
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
