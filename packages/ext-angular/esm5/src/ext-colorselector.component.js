//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
var colorselectorMetaData = /** @class */ (function () {
    function colorselectorMetaData() {
    }
    colorselectorMetaData.XTYPE = 'colorselector';
    colorselectorMetaData.PROPERTIES = [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
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
        'align',
        'fitToParent',
        'config'
    ];
    colorselectorMetaData.EVENTS = [
        { name: 'cancel', parameters: 'colorselector' },
        { name: 'change', parameters: 'colorselector,color,previousColor' },
        { name: 'ok', parameters: 'colorselector,color' },
        { name: 'ready', parameters: '' }
    ];
    colorselectorMetaData.EVENTNAMES = [
        'cancel',
        'change',
        'ok',
        'ready'
    ];
    return colorselectorMetaData;
}());
export { colorselectorMetaData };
var ExtColorselectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorselectorComponent, _super);
    function ExtColorselectorComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, colorselectorMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtColorselectorComponent_1 = ExtColorselectorComponent;
    ExtColorselectorComponent.prototype.ngOnInit = function () {
        this.baseOnInit(colorselectorMetaData);
    };
    ExtColorselectorComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(colorselectorMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtColorselectorComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtColorselectorComponent_1;
    ExtColorselectorComponent = ExtColorselectorComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-colorselector',
            inputs: colorselectorMetaData.PROPERTIES,
            outputs: colorselectorMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtColorselectorComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtColorselectorComponent);
    return ExtColorselectorComponent;
}(EngBase));
export { ExtColorselectorComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtY29sb3JzZWxlY3Rvci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywyQ0FBMkM7O0FBRzNDLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDO0lBQUE7SUFxQ0EsQ0FBQztJQXBDZSwyQkFBSyxHQUFXLGVBQWUsQ0FBQztJQUNoQyxnQ0FBVSxHQUFhO1FBQ25DLEtBQUs7UUFDTCxVQUFVO1FBQ1YsT0FBTztRQUNQLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLG9CQUFvQjtRQUNwQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLFVBQVU7UUFDVixZQUFZO1FBQ1osUUFBUTtRQUNSLGNBQWM7UUFDZCxxQkFBcUI7UUFDckIsbUJBQW1CO1FBQ25CLE9BQU87UUFDUCxnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxhQUFhO1FBQ2IsUUFBUTtLQUNYLENBQUM7SUFDYyw0QkFBTSxHQUFVO1FBQ2hDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsZUFBZSxFQUFDO1FBQzFDLEVBQUMsSUFBSSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsbUNBQW1DLEVBQUM7UUFDOUQsRUFBQyxJQUFJLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxxQkFBcUIsRUFBQztRQUM1QyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUMzQixDQUFDO0lBQ2MsZ0NBQVUsR0FBYTtRQUN2QyxRQUFRO1FBQ1IsUUFBUTtRQUNSLElBQUk7UUFDSixPQUFPO0tBQ04sQ0FBQztJQUNGLDRCQUFDO0NBQUEsQUFyQ0QsSUFxQ0M7U0FyQ1kscUJBQXFCO0FBNkNsQztJQUErQyxxREFBTztJQUNsRCxtQ0FBWSxJQUFlLEVBQXlDLGFBQXVCO1FBQTNGLFlBQ0ksa0JBQU0sSUFBSSxDQUFDLGFBQWEsRUFBQyxxQkFBcUIsRUFBQyxhQUFhLENBQUMsU0FDaEU7UUFGbUUsbUJBQWEsR0FBYixhQUFhLENBQVU7O0lBRTNGLENBQUM7a0NBSFEseUJBQXlCO0lBSzNCLDRDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDMUMsQ0FBQztJQUVNLG1EQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLHFCQUFxQixDQUFDLENBQUE7SUFDakQsQ0FBQztJQUlILCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsR0FBRztJQUVJLCtDQUFXLEdBQWxCLFVBQW1CLE9BQXNCLElBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQSxDQUFBLENBQUM7O0lBbkI3RCx5QkFBeUI7UUFQckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixNQUFNLEVBQUUscUJBQXFCLENBQUMsVUFBVTtZQUN4QyxPQUFPLEVBQUUscUJBQXFCLENBQUMsVUFBVTtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMkJBQXlCLEVBQXpCLENBQXlCLENBQUMsRUFBQyxDQUFDO1lBQ3pGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUVnQyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQTNDLFVBQVUsRUFBeUQsT0FBTztPQURsRix5QkFBeUIsQ0EwQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQTFCRCxDQUErQyxPQUFPLEdBMEJyRDtTQTFCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL0V4dC5vblJlYWR5KGZ1bmN0aW9uKCkge1xuLy9pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZGVjbGFyZSB2YXIgRXh0OiBhbnlcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuZXhwb3J0IGNsYXNzIGNvbG9yc2VsZWN0b3JNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjb2xvcnNlbGVjdG9yJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW5nJyxcbiAgICAndmlld3BvcnQnLFxuICAgICdhbGlnbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUZvcm11bGFzJyxcbiAgICAnYWxwaGFEZWNpbWFsRm9ybWF0JyxcbiAgICAnY2FuY2VsQnV0dG9uVGV4dCcsXG4gICAgJ2NvbG9yJyxcbiAgICAnZmllbGRQYWQnLFxuICAgICdmaWVsZFdpZHRoJyxcbiAgICAnZm9ybWF0JyxcbiAgICAnb2tCdXR0b25UZXh0JyxcbiAgICAnc2hvd09rQ2FuY2VsQnV0dG9ucycsXG4gICAgJ3Nob3dQcmV2aW91c0NvbG9yJyxcbiAgICAndmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2NhbmNlbCcscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcid9LFxue25hbWU6J2NoYW5nZScscGFyYW1ldGVyczonY29sb3JzZWxlY3Rvcixjb2xvcixwcmV2aW91c0NvbG9yJ30sXG57bmFtZTonb2snLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3InfSxcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4nY2FuY2VsJyxcbidjaGFuZ2UnLFxuJ29rJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtY29sb3JzZWxlY3RvcicsXG4gIGlucHV0czogY29sb3JzZWxlY3Rvck1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGNvbG9yc2VsZWN0b3JNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBFbmdCYXNlKSB7XG4gICAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxjb2xvcnNlbGVjdG9yTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdChjb2xvcnNlbGVjdG9yTWV0YURhdGEpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdChjb2xvcnNlbGVjdG9yTWV0YURhdGEpXG4gICAgfVxuXG5cblxuICAvL3B1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gIC8vICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgLy99XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cblxuXG4gICAvLyBwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgLy8gICBjb25zb2xlLmxvZygnbmdBZnRlclZpZXdDaGVja2VkJylcbiAgLy99XG59XG5cbiJdfQ==