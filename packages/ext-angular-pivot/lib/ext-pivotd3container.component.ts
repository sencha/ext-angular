
import { EngBase } from './eng-base';
export class ExtPivotd3containerMetaData {

    public static PROPERTIES: string[] = [
'configurator',
'drawing',
'matrix',
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
  forwardRef
  //SimpleChanges
} from '@angular/core';

@Component({
  selector: 'ext-pivotd3container',
  inputs: ExtPivotd3containerMetaData.PROPERTIES,
  outputs: ExtPivotd3containerMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotd3containerComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotd3containerComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotd3containerMetaData.PROPERTIES,
            ExtPivotd3containerMetaData.EVENTS
        )
        this.xtype = 'pivotd3container'
    }

    public ngOnInit() {
        this.baseOnInit()
    }

    public ngAfterViewInit() {
        this.baseAfterViewInit()
    }

    public ngOnChanges(changes) {
        this.baseOnChanges(changes)
    }

    public ngOnDestroy() {
        this.baseOnDestroy()
    }
}
