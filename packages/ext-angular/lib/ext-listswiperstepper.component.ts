import { Ext_dataview_listswiper_Stepper } from './Ext/dataview/listswiper/Stepper';
export class ExtListswiperstepperMetaData extends Ext_dataview_listswiper_Stepper {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtListswiperstepperMetaData.PROPERTIES = Ext_dataview_listswiper_Stepper.getProperties(ExtListswiperstepperMetaData.PROPERTIES);
        ExtListswiperstepperMetaData.EVENTS = Ext_dataview_listswiper_Stepper.getEvents(ExtListswiperstepperMetaData.EVENTS);
        ExtListswiperstepperMetaData.EVENTS.forEach( (event: any) => {
            ExtListswiperstepperMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtListswiperstepperMetaData.getAll();})();

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
  selector: 'ext-listswiperstepper',
  inputs: ExtListswiperstepperMetaData.PROPERTIES,
  outputs: ExtListswiperstepperMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtListswiperstepperComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtListswiperstepperComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtListswiperstepperMetaData.PROPERTIES,
            ExtListswiperstepperMetaData.EVENTS
        )
        this.xtype = 'listswiperstepper'
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
