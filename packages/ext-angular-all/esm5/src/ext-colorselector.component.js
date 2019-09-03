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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1hbGwvIiwic291cmNlcyI6WyJzcmMvZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQix5Q0FBeUM7QUFDekMsMkNBQTJDOztBQUczQyxPQUFPLEVBRUwsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBS1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBRVgsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQztJQUFBO0lBcUNBLENBQUM7SUFwQ2UsMkJBQUssR0FBVyxlQUFlLENBQUM7SUFDaEMsZ0NBQVUsR0FBYTtRQUNuQyxLQUFLO1FBQ0wsVUFBVTtRQUNWLE9BQU87UUFDUCxTQUFTO1FBQ1Qsa0JBQWtCO1FBQ2xCLG9CQUFvQjtRQUNwQixvQkFBb0I7UUFDcEIsa0JBQWtCO1FBQ2xCLE9BQU87UUFDUCxVQUFVO1FBQ1YsWUFBWTtRQUNaLFFBQVE7UUFDUixjQUFjO1FBQ2QscUJBQXFCO1FBQ3JCLG1CQUFtQjtRQUNuQixPQUFPO1FBQ1AsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsNEJBQU0sR0FBVTtRQUNoQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLGVBQWUsRUFBQztRQUMxQyxFQUFDLElBQUksRUFBQyxRQUFRLEVBQUMsVUFBVSxFQUFDLG1DQUFtQyxFQUFDO1FBQzlELEVBQUMsSUFBSSxFQUFDLElBQUksRUFBQyxVQUFVLEVBQUMscUJBQXFCLEVBQUM7UUFDNUMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDM0IsQ0FBQztJQUNjLGdDQUFVLEdBQWE7UUFDdkMsUUFBUTtRQUNSLFFBQVE7UUFDUixJQUFJO1FBQ0osT0FBTztLQUNOLENBQUM7SUFDRiw0QkFBQztDQUFBLEFBckNELElBcUNDO1NBckNZLHFCQUFxQjtBQTZDbEM7SUFBK0MscURBQU87SUFDbEQsbUNBQVksSUFBZSxFQUF5QyxhQUF1QjtRQUEzRixZQUNJLGtCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUMscUJBQXFCLEVBQUMsYUFBYSxDQUFDLFNBQ2hFO1FBRm1FLG1CQUFhLEdBQWIsYUFBYSxDQUFVOztJQUUzRixDQUFDO2tDQUhRLHlCQUF5QjtJQUszQiw0Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQzFDLENBQUM7SUFFTSxtREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxxQkFBcUIsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFJSCwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLEdBQUc7SUFFSSwrQ0FBVyxHQUFsQixVQUFtQixPQUFzQixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDOztJQW5CN0QseUJBQXlCO1FBUHJDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxtQkFBbUI7WUFDN0IsTUFBTSxFQUFFLHFCQUFxQixDQUFDLFVBQVU7WUFDeEMsT0FBTyxFQUFFLHFCQUFxQixDQUFDLFVBQVU7WUFDekMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLDJCQUF5QixFQUF6QixDQUF5QixDQUFDLEVBQUMsQ0FBQztZQUN6RixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFFZ0MsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUEzQyxVQUFVLEVBQXlELE9BQU87T0FEbEYseUJBQXlCLENBMEJyQztJQUFELGdDQUFDO0NBQUEsQUExQkQsQ0FBK0MsT0FBTyxHQTBCckQ7U0ExQlkseUJBQXlCIiwic291cmNlc0NvbnRlbnQiOlsiLy9FeHQub25SZWFkeShmdW5jdGlvbigpIHtcbi8vaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmV4cG9ydCBjbGFzcyBjb2xvcnNlbGVjdG9yTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY29sb3JzZWxlY3Rvcic7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2VuZycsXG4gICAgJ3ZpZXdwb3J0JyxcbiAgICAnYWxpZ24nLFxuICAgICdwbHVnaW5zJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVGb3JtdWxhcycsXG4gICAgJ2FscGhhRGVjaW1hbEZvcm1hdCcsXG4gICAgJ2NhbmNlbEJ1dHRvblRleHQnLFxuICAgICdjb2xvcicsXG4gICAgJ2ZpZWxkUGFkJyxcbiAgICAnZmllbGRXaWR0aCcsXG4gICAgJ2Zvcm1hdCcsXG4gICAgJ29rQnV0dG9uVGV4dCcsXG4gICAgJ3Nob3dPa0NhbmNlbEJ1dHRvbnMnLFxuICAgICdzaG93UHJldmlvdXNDb2xvcicsXG4gICAgJ3ZhbHVlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidjYW5jZWwnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3InfSxcbntuYW1lOidjaGFuZ2UnLHBhcmFtZXRlcnM6J2NvbG9yc2VsZWN0b3IsY29sb3IscHJldmlvdXNDb2xvcid9LFxue25hbWU6J29rJyxwYXJhbWV0ZXJzOidjb2xvcnNlbGVjdG9yLGNvbG9yJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ2NhbmNlbCcsXG4nY2hhbmdlJyxcbidvaycsXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNvbG9yc2VsZWN0b3InLFxuICBpbnB1dHM6IGNvbG9yc2VsZWN0b3JNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjb2xvcnNlbGVjdG9yTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzICB7XG4gICAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogRW5nQmFzZSkge1xuICAgICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY29sb3JzZWxlY3Rvck1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoY29sb3JzZWxlY3Rvck1ldGFEYXRhKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoY29sb3JzZWxlY3Rvck1ldGFEYXRhKVxuICAgIH1cblxuXG5cbiAgLy9wdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAvLyAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gIC8vfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG5cblxuICAgLy8gcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgIC8vICAgY29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3Q2hlY2tlZCcpXG4gIC8vfVxufVxuXG4iXX0=