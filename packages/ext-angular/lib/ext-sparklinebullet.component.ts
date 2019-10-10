import { Ext_sparkline_Bullet } from './Ext/sparkline/Bullet';
export class ExtSparklinebulletMetaData extends Ext_sparkline_Bullet {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtSparklinebulletMetaData.PROPERTIES = Ext_sparkline_Bullet.getProperties(ExtSparklinebulletMetaData.PROPERTIES);
        ExtSparklinebulletMetaData.EVENTS = Ext_sparkline_Bullet.getEvents(ExtSparklinebulletMetaData.EVENTS);
        ExtSparklinebulletMetaData.EVENTS.forEach( (event: any) => {
            ExtSparklinebulletMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtSparklinebulletMetaData.getAll();})();

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
  selector: 'ext-sparklinebullet',
  inputs: ExtSparklinebulletMetaData.PROPERTIES,
  outputs: ExtSparklinebulletMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtSparklinebulletComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtSparklinebulletComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtSparklinebulletMetaData.PROPERTIES,
            ExtSparklinebulletMetaData.EVENTS
        )
        this.xtype = 'sparklinebullet'
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
