import { ElementRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './common/angularbase';
export declare class ExtDashboard_panelComponent extends EngBase {
    constructor(eRef: ElementRef, hostComponent: EngBase, vc: ViewContainerRef);
    ngOnInit(): void;
    ngAfterViewInit(): void;
    ngOnChanges(changes: any): void;
    ngOnDestroy(): void;
}
