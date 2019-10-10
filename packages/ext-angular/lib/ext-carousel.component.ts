import { Ext_Carousel } from './Ext/Carousel';
export class ExtCarouselMetaData extends Ext_Carousel {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtCarouselMetaData.PROPERTIES = Ext_Carousel.getProperties(ExtCarouselMetaData.PROPERTIES);
        ExtCarouselMetaData.EVENTS = Ext_Carousel.getEvents(ExtCarouselMetaData.EVENTS);
        ExtCarouselMetaData.EVENTS.forEach( (event: any) => {
            ExtCarouselMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtCarouselMetaData.getAll();})();

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
  selector: 'ext-carousel',
  inputs: ExtCarouselMetaData.PROPERTIES,
  outputs: ExtCarouselMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtCarouselComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtCarouselComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtCarouselMetaData.PROPERTIES,
            ExtCarouselMetaData.EVENTS
        )
        this.xtype = 'carousel'
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
