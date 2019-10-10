var ExtPivotd3containerComponent_1;
import * as tslib_1 from "tslib";
import { EngBase } from './eng-base';
export class ExtPivotd3containerMetaData {
}
ExtPivotd3containerMetaData.PROPERTIES = [
    'configurator',
    'drawing',
    'matrix',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
ExtPivotd3containerMetaData.EVENTS = [
    { name: 'ready', parameters: '' }
];
ExtPivotd3containerMetaData.EVENTNAMES = [
    'ready'
];
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
let ExtPivotd3containerComponent = ExtPivotd3containerComponent_1 = class ExtPivotd3containerComponent extends EngBase {
    constructor(eRef, hostComponent) {
        super(eRef, hostComponent, ExtPivotd3containerMetaData.PROPERTIES, ExtPivotd3containerMetaData.EVENTS);
        this.xtype = 'pivotd3container';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtPivotd3containerComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
ExtPivotd3containerComponent = ExtPivotd3containerComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ext-pivotd3container',
        inputs: ExtPivotd3containerMetaData.PROPERTIES,
        outputs: ExtPivotd3containerMetaData.EVENTNAMES,
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtPivotd3containerComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        EngBase])
], ExtPivotd3containerComponent);
export { ExtPivotd3containerComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1hbGwvIiwic291cmNlcyI6WyJzcmMvZXh0LXBpdm90ZDNjb250YWluZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQ0EsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxNQUFNLE9BQU8sMkJBQTJCOztBQUV0QixzQ0FBVSxHQUFhO0lBQ3pDLGNBQWM7SUFDZCxTQUFTO0lBQ1QsUUFBUTtJQUNSLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDUCxDQUFDO0FBQ2dCLGtDQUFNLEdBQVU7SUFDbEMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7Q0FDM0IsQ0FBQztBQUNnQixzQ0FBVSxHQUFhO0lBQ3pDLE9BQU87Q0FDTixDQUFDO0FBR0YsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkIsSUFBYSw0QkFBNEIsb0NBQXpDLE1BQWEsNEJBQTZCLFNBQVEsT0FBTztJQUVyRCxZQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRXRELEtBQUssQ0FDRCxJQUFJLEVBQ0osYUFBYSxFQUNiLDJCQUEyQixDQUFDLFVBQVUsRUFDdEMsMkJBQTJCLENBQUMsTUFBTSxDQUNyQyxDQUFBO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxrQkFBa0IsQ0FBQTtJQUNuQyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sZUFBZTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sV0FBVyxDQUFDLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztDQUNKLENBQUE7O1lBM0JhLFVBQVU7WUFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztBQUp4Qiw0QkFBNEI7SUFQeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLHNCQUFzQjtRQUNoQyxNQUFNLEVBQUUsMkJBQTJCLENBQUMsVUFBVTtRQUM5QyxPQUFPLEVBQUUsMkJBQTJCLENBQUMsVUFBVTtRQUMvQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxHQUFHLEVBQUUsQ0FBQyw4QkFBNEIsQ0FBQyxFQUFDLENBQUM7UUFDNUYsUUFBUSxFQUFFLDZCQUE2QjtLQUN4QyxDQUFDO0lBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBOzZDQUR6QixVQUFVO1FBQytCLE9BQU87R0FKakQsNEJBQTRCLENBOEJ4QztTQTlCWSw0QkFBNEIiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmV4cG9ydCBjbGFzcyBFeHRQaXZvdGQzY29udGFpbmVyTWV0YURhdGEge1xuXG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbidjb25maWd1cmF0b3InLFxuJ2RyYXdpbmcnLFxuJ21hdHJpeCcsXG4ncGxhdGZvcm1Db25maWcnLFxuJ3Jlc3BvbnNpdmVDb25maWcnLFxuJ2ZpdFRvUGFyZW50Jyxcbidjb25maWcnXG5dO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidyZWFkeSdcbl07XG59XG5cbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1waXZvdGQzY29udGFpbmVyJyxcbiAgaW5wdXRzOiBFeHRQaXZvdGQzY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0UGl2b3RkM2NvbnRhaW5lck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaXZvdGQzY29udGFpbmVyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGl2b3RkM2NvbnRhaW5lckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRQaXZvdGQzY29udGFpbmVyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFBpdm90ZDNjb250YWluZXJNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3Bpdm90ZDNjb250YWluZXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=