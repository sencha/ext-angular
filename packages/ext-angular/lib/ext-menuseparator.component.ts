import { Ext_menu_Separator } from './Ext/menu/Separator';
export class ExtMenuseparatorMetaData extends Ext_menu_Separator {
    public static PROPERTIES: string[] = [];
    public static EVENTS: any[] = [];
    public static EVENTNAMES: string[] = [];
    static getAll() {
        ExtMenuseparatorMetaData.PROPERTIES = Ext_menu_Separator.getProperties(ExtMenuseparatorMetaData.PROPERTIES);
        ExtMenuseparatorMetaData.EVENTS = Ext_menu_Separator.getEvents(ExtMenuseparatorMetaData.EVENTS);
        ExtMenuseparatorMetaData.EVENTS.forEach( (event: any) => {
            ExtMenuseparatorMetaData.EVENTNAMES.push(event.name);
        })
     }
}
(function () {ExtMenuseparatorMetaData.getAll();})();

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
  selector: 'ext-menuseparator',
  inputs: ExtMenuseparatorMetaData.PROPERTIES,
  outputs: ExtMenuseparatorMetaData.EVENTNAMES,
  providers: [{provide: EngBase, useExisting: forwardRef(() => ExtMenuseparatorComponent)}],
  template: '<ng-template></ng-template>'
})
export class ExtMenuseparatorComponent extends EngBase {
    xtype: string;
    constructor(
        eRef: ElementRef,
        @Host() @Optional() @SkipSelf() hostComponent: EngBase
    ){
        super(
            eRef,
            hostComponent,
            ExtMenuseparatorMetaData.PROPERTIES,
            ExtMenuseparatorMetaData.EVENTS
        )
        this.xtype = 'menuseparator'
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
