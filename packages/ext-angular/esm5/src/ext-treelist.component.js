import * as tslib_1 from "tslib";
import { Ext_list_Tree } from './Ext/list/Tree';
var ExtTreelistMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTreelistMetaData, _super);
    function ExtTreelistMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtTreelistMetaData.getAll = function () {
        ExtTreelistMetaData.PROPERTIES = Ext_list_Tree.getProperties(ExtTreelistMetaData.PROPERTIES);
        ExtTreelistMetaData.EVENTS = Ext_list_Tree.getEvents(ExtTreelistMetaData.EVENTS);
        ExtTreelistMetaData.EVENTS.forEach(function (event) {
            ExtTreelistMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtTreelistMetaData.PROPERTIES = [];
    ExtTreelistMetaData.EVENTS = [];
    ExtTreelistMetaData.EVENTNAMES = [];
    return ExtTreelistMetaData;
}(Ext_list_Tree));
export { ExtTreelistMetaData };
(function () { ExtTreelistMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtTreelistComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtTreelistComponent, _super);
    function ExtTreelistComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTreelistMetaData.PROPERTIES, ExtTreelistMetaData.EVENTS) || this;
        _this.xtype = 'treelist';
        return _this;
    }
    ExtTreelistComponent_1 = ExtTreelistComponent;
    ExtTreelistComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTreelistComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTreelistComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTreelistComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTreelistComponent_1;
    ExtTreelistComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTreelistComponent = ExtTreelistComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-treelist',
            inputs: ExtTreelistMetaData.PROPERTIES,
            outputs: ExtTreelistMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTreelistComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTreelistComponent);
    return ExtTreelistComponent;
}(EngBase));
export { ExtTreelistComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRyZWVsaXN0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXRyZWVsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLGlCQUFpQixDQUFDO0FBQ2hEO0lBQXlDLCtDQUFhO0lBQXREOztJQVdBLENBQUM7SUFQVSwwQkFBTSxHQUFiO1FBQ0ksbUJBQW1CLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDN0YsbUJBQW1CLENBQUMsTUFBTSxHQUFHLGFBQWEsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDakYsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDM0MsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksOEJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsMEJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsOEJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsMEJBQUM7Q0FBQSxBQVhELENBQXlDLGFBQWEsR0FXckQ7U0FYWSxtQkFBbUI7QUFZaEMsQ0FBQyxjQUFhLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTBDLGdEQUFPO0lBRTdDLDhCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixtQkFBbUIsQ0FBQyxVQUFVLEVBQzlCLG1CQUFtQixDQUFDLE1BQU0sQ0FDN0IsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFBOztJQUMzQixDQUFDOzZCQWJRLG9CQUFvQjtJQWV0Qix1Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSw4Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsb0JBQW9CO1FBUGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFDLENBQUM7WUFDcEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsb0JBQW9CLENBOEJoQztJQUFELDJCQUFDO0NBQUEsQUE5QkQsQ0FBMEMsT0FBTyxHQThCaEQ7U0E5Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2xpc3RfVHJlZSB9IGZyb20gJy4vRXh0L2xpc3QvVHJlZSc7XG5leHBvcnQgY2xhc3MgRXh0VHJlZWxpc3RNZXRhRGF0YSBleHRlbmRzIEV4dF9saXN0X1RyZWUge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0VHJlZWxpc3RNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2xpc3RfVHJlZS5nZXRQcm9wZXJ0aWVzKEV4dFRyZWVsaXN0TWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFRyZWVsaXN0TWV0YURhdGEuRVZFTlRTID0gRXh0X2xpc3RfVHJlZS5nZXRFdmVudHMoRXh0VHJlZWxpc3RNZXRhRGF0YS5FVkVOVFMpO1xuICAgICAgICBFeHRUcmVlbGlzdE1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSkgPT4ge1xuICAgICAgICAgICAgRXh0VHJlZWxpc3RNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0VHJlZWxpc3RNZXRhRGF0YS5nZXRBbGwoKTt9KSgpO1xuXG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIC8vT3V0cHV0LFxuICAvL09uSW5pdCxcbiAgLy9BZnRlclZpZXdJbml0LFxuICAvL09uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtdHJlZWxpc3QnLFxuICBpbnB1dHM6IEV4dFRyZWVsaXN0TWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0VHJlZWxpc3RNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0VHJlZWxpc3RDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRUcmVlbGlzdENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRUcmVlbGlzdE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gICAgICAgICAgICBFeHRUcmVlbGlzdE1ldGFEYXRhLkVWRU5UU1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAndHJlZWxpc3QnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=