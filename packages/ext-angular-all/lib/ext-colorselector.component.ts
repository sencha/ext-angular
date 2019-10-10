
import { EngBase } from './eng-base';
export class ExtColorselectorMetaData {

    public static PROPERTIES: string[] = [
'alphaDecimalFormat',
'cancelButtonText',
'color',
'fieldPad',
'fieldWidth',
'format',
'okButtonText',
'showOkCancelButtons',
'showPreviousColor',
'value',
'platformConfig',
'responsiveConfig',
'fitToParent',
'config'
];
    public static EVENTS: any[] = [
{name:'cancel',parameters:'colorselector'},
{name:'change',parameters:'colorselector,color,previousColor'},
{name:'ok',parameters:'colorselector,color'},
{name:'ready',parameters:''}
];
    public static EVENTNAMES: string[] = [
'cancel',
'change',
'ok',
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
  selector: 'ext-colorselector',
  inputs: ExtColorselectorMetaData.PROPERTIES,
  outputs: ExtColorselectorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtColorselectorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtColorselectorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtColorselectorMetaData.PROPERTIES,
            ExtColorselectorMetaData.EVENTS
        )
        this.xtype = 'colorselector'
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
