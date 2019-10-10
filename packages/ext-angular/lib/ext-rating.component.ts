import { Ext_ux_rating_Picker } from './Ext/ux/rating/Picker';
export class ExtRatingMetaData extends Ext_ux_rating_Picker {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtRatingMetaData.PROPERTIES = Ext_ux_rating_Picker.getProperties(ExtRatingMetaData.PROPERTIES);
        ExtRatingMetaData.EVENTS = Ext_ux_rating_Picker.getEvents(ExtRatingMetaData.EVENTS);
        ExtRatingMetaData.EVENTS.forEach( (event: any) => {
            ExtRatingMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtRatingMetaData.getAll();})();

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
  selector: 'ext-rating',
  inputs: ExtRatingMetaData.PROPERTIES,
  outputs: ExtRatingMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtRatingComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtRatingComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtRatingMetaData.PROPERTIES,
            ExtRatingMetaData.EVENTS
        )
        this.xtype = 'rating'
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
