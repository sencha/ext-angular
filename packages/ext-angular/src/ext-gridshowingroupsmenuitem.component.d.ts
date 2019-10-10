import { Ext_grid_menu_ShowInGroups } from './Ext/grid/menu/ShowInGroups';
export declare class ExtGridshowingroupsmenuitemMetaData extends Ext_grid_menu_ShowInGroups {
    static PROPERTIES: string[];
    static EVENTS: any[];
    static EVENTNAMES: string[];
    static getAll(): void;
}
import { EngBase } from './eng-base';
import { ElementRef, SimpleChanges } from '@angular/core';
export declare class ExtGridshowingroupsmenuitemComponent extends EngBase {
    xtype: string;
    constructor(eRef: ElementRef, hostComponent: EngBase);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
}
