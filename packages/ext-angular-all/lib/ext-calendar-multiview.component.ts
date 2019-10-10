
import { EngBase } from './eng-base';
export class ExtCalendar_multiviewMetaData {

    public static PROPERTIES: string[] = [
'compact',
'compactOptions',
'defaultView',
'layout',
'store',
'timezoneOffset',
'value',
'views',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'ready',parameters:''}
];
    public static EVENTNAMES: string[] = [
'ready'
];
}

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
  selector: 'ext-calendar-multiview',
  inputs: ExtCalendar_multiviewMetaData.PROPERTIES,
  outputs: ExtCalendar_multiviewMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCalendar_multiviewComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCalendar_multiviewComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCalendar_multiviewMetaData.PROPERTIES,
            ExtCalendar_multiviewMetaData.EVENTS
        )
        this.xtype = 'calendar-multiview'
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
