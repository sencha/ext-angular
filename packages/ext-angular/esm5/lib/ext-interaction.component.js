import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var interactionMetaData = /** @class */ (function () {
    function interactionMetaData() {
    }
    interactionMetaData.XTYPE = 'interaction';
    interactionMetaData.PROPERTIES = [
        'chart',
        'enabled',
        'gesture',
        'listeners',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    interactionMetaData.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    interactionMetaData.EVENTNAMES = [
        'ready'
    ];
    return interactionMetaData;
}());
export { interactionMetaData };
var ExtInteractionComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtInteractionComponent, _super);
    function ExtInteractionComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, interactionMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtInteractionComponent_1 = ExtInteractionComponent;
    ExtInteractionComponent.prototype.ngOnInit = function () {
        this.baseOnInit(interactionMetaData);
    };
    ExtInteractionComponent.prototype.ngAfterContentInit = function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    var ExtInteractionComponent_1;
    ExtInteractionComponent = ExtInteractionComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'interaction',
            inputs: interactionMetaData.PROPERTIES,
            outputs: interactionMetaData.EVENTNAMES,
            providers: [{ provide: base, useExisting: forwardRef(function () { return ExtInteractionComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, base])
    ], ExtInteractionComponent);
    return ExtInteractionComponent;
}(base));
export { ExtInteractionComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWludGVyYWN0aW9uLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQW1CQSxDQUFDO0lBbEJlLHlCQUFLLEdBQVcsYUFBYSxDQUFDO0lBQzlCLDhCQUFVLEdBQWE7UUFDbkMsT0FBTztRQUNQLFNBQVM7UUFDVCxTQUFTO1FBQ1QsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsT0FBTztRQUNQLGFBQWE7UUFDYixRQUFRO0tBQ1gsQ0FBQztJQUNjLDBCQUFNLEdBQVU7UUFDaEMsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxFQUFFLEVBQUM7S0FDM0IsQ0FBQztJQUNjLDhCQUFVLEdBQWE7UUFDdkMsT0FBTztLQUNOLENBQUM7SUFDRiwwQkFBQztDQUFBLEFBbkJELElBbUJDO1NBbkJZLG1CQUFtQjtBQTJCaEM7SUFBNkMsbURBQUk7SUFDL0MsaUNBQ0UsSUFBZSxFQUF5QyxhQUFvQjtRQUQ5RSxZQUVJLGtCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUMsbUJBQW1CLEVBQUMsYUFBYSxDQUFDLFNBQzVEO1FBRnVELG1CQUFhLEdBQWIsYUFBYSxDQUFPOztJQUU1RSxDQUFDO2dDQUpRLHVCQUF1QjtJQUszQiwwQ0FBUSxHQUFmO1FBQ0UsSUFBSSxDQUFDLFVBQVUsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFBO0lBQ3RDLENBQUM7SUFDTSxvREFBa0IsR0FBekI7UUFDRSxJQUFJLENBQUMsb0JBQW9CLEVBQUUsQ0FBQTtRQUMzQiwwQkFBMEI7SUFDNUIsQ0FBQzs7SUFYVSx1QkFBdUI7UUFQbkMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsTUFBTSxFQUFFLG1CQUFtQixDQUFDLFVBQVU7WUFDdEMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFVBQVU7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHlCQUF1QixFQUF2QixDQUF1QixDQUFDLEVBQUMsQ0FBQztZQUNwRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFHb0IsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUEzQyxVQUFVLEVBQXlELElBQUk7T0FGbkUsdUJBQXVCLENBY25DO0lBQUQsOEJBQUM7Q0FBQSxBQWRELENBQTZDLElBQUksR0FjaEQ7U0FkWSx1QkFBdUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGludGVyYWN0aW9uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnaW50ZXJhY3Rpb24nO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdjaGFydCcsXG4gICAgJ2VuYWJsZWQnLFxuICAgICdnZXN0dXJlJyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW50ZXJhY3Rpb24nLCBcbiAgaW5wdXRzOiBpbnRlcmFjdGlvbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGludGVyYWN0aW9uTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEludGVyYWN0aW9uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0SW50ZXJhY3Rpb25Db21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoXG4gICAgZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZSkge1xuICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGludGVyYWN0aW9uTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoaW50ZXJhY3Rpb25NZXRhRGF0YSlcbiAgfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxufSJdfQ==