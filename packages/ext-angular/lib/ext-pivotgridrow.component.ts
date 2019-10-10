import { Ext_pivot_Row } from './Ext/pivot/Row';
export class ExtPivotgridrowMetaData extends Ext_pivot_Row {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtPivotgridrowMetaData.PROPERTIES = Ext_pivot_Row.getProperties(ExtPivotgridrowMetaData.PROPERTIES);
        ExtPivotgridrowMetaData.EVENTS = Ext_pivot_Row.getEvents(ExtPivotgridrowMetaData.EVENTS);
        ExtPivotgridrowMetaData.EVENTS.forEach( (event: any) => {
            ExtPivotgridrowMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtPivotgridrowMetaData.getAll();})();

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
  selector: 'ext-pivotgridrow',
  inputs: ExtPivotgridrowMetaData.PROPERTIES,
  outputs: ExtPivotgridrowMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtPivotgridrowComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtPivotgridrowComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtPivotgridrowMetaData.PROPERTIES,
            ExtPivotgridrowMetaData.EVENTS
        )
        this.xtype = 'pivotgridrow'
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
