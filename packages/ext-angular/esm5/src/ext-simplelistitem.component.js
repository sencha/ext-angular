import * as tslib_1 from "tslib";
import { Ext_dataview_component_SimpleListItem } from './Ext/dataview/component/SimpleListItem';
var ExtSimplelistitemMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSimplelistitemMetaData, _super);
    function ExtSimplelistitemMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtSimplelistitemMetaData.getAll = function () {
        ExtSimplelistitemMetaData.PROPERTIES = Ext_dataview_component_SimpleListItem.getProperties(ExtSimplelistitemMetaData.PROPERTIES);
        ExtSimplelistitemMetaData.EVENTS = Ext_dataview_component_SimpleListItem.getEvents(ExtSimplelistitemMetaData.EVENTS);
        ExtSimplelistitemMetaData.EVENTS.forEach(function (event) {
            ExtSimplelistitemMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtSimplelistitemMetaData.PROPERTIES = [];
    ExtSimplelistitemMetaData.EVENTS = [];
    ExtSimplelistitemMetaData.EVENTNAMES = [];
    return ExtSimplelistitemMetaData;
}(Ext_dataview_component_SimpleListItem));
export { ExtSimplelistitemMetaData };
(function () { ExtSimplelistitemMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtSimplelistitemComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtSimplelistitemComponent, _super);
    function ExtSimplelistitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtSimplelistitemMetaData.PROPERTIES, ExtSimplelistitemMetaData.EVENTS) || this;
        _this.xtype = 'simplelistitem';
        return _this;
    }
    ExtSimplelistitemComponent_1 = ExtSimplelistitemComponent;
    ExtSimplelistitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSimplelistitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSimplelistitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSimplelistitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSimplelistitemComponent_1;
    ExtSimplelistitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtSimplelistitemComponent = ExtSimplelistitemComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-simplelistitem',
            inputs: ExtSimplelistitemMetaData.PROPERTIES,
            outputs: ExtSimplelistitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSimplelistitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtSimplelistitemComponent);
    return ExtSimplelistitemComponent;
}(EngBase));
export { ExtSimplelistitemComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXNpbXBsZWxpc3RpdGVtLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXNpbXBsZWxpc3RpdGVtLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHFDQUFxQyxFQUFFLE1BQU0seUNBQXlDLENBQUM7QUFDaEc7SUFBK0MscURBQXFDO0lBQXBGOztJQVdBLENBQUM7SUFQVSxnQ0FBTSxHQUFiO1FBQ0kseUJBQXlCLENBQUMsVUFBVSxHQUFHLHFDQUFxQyxDQUFDLGFBQWEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqSSx5QkFBeUIsQ0FBQyxNQUFNLEdBQUcscUNBQXFDLENBQUMsU0FBUyxDQUFDLHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JILHlCQUF5QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ2pELHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzFELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLG9DQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLGdDQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLG9DQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLGdDQUFDO0NBQUEsQUFYRCxDQUErQyxxQ0FBcUMsR0FXbkY7U0FYWSx5QkFBeUI7QUFZdEMsQ0FBQyxjQUFhLHlCQUF5QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUV0RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQWdELHNEQUFPO0lBRW5ELG9DQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYix5QkFBeUIsQ0FBQyxVQUFVLEVBQ3BDLHlCQUF5QixDQUFDLE1BQU0sQ0FDbkMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsZ0JBQWdCLENBQUE7O0lBQ2pDLENBQUM7bUNBYlEsMEJBQTBCO0lBZTVCLDZDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLG9EQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLGdEQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLGdEQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QiwwQkFBMEI7UUFQdEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG9CQUFvQjtZQUM5QixNQUFNLEVBQUUseUJBQXlCLENBQUMsVUFBVTtZQUM1QyxPQUFPLEVBQUUseUJBQXlCLENBQUMsVUFBVTtZQUM3QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsNEJBQTBCLEVBQTFCLENBQTBCLENBQUMsRUFBQyxDQUFDO1lBQzFGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELDBCQUEwQixDQThCdEM7SUFBRCxpQ0FBQztDQUFBLEFBOUJELENBQWdELE9BQU8sR0E4QnREO1NBOUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9kYXRhdmlld19jb21wb25lbnRfU2ltcGxlTGlzdEl0ZW0gfSBmcm9tICcuL0V4dC9kYXRhdmlldy9jb21wb25lbnQvU2ltcGxlTGlzdEl0ZW0nO1xuZXhwb3J0IGNsYXNzIEV4dFNpbXBsZWxpc3RpdGVtTWV0YURhdGEgZXh0ZW5kcyBFeHRfZGF0YXZpZXdfY29tcG9uZW50X1NpbXBsZUxpc3RJdGVtIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFNpbXBsZWxpc3RpdGVtTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9kYXRhdmlld19jb21wb25lbnRfU2ltcGxlTGlzdEl0ZW0uZ2V0UHJvcGVydGllcyhFeHRTaW1wbGVsaXN0aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRTaW1wbGVsaXN0aXRlbU1ldGFEYXRhLkVWRU5UUyA9IEV4dF9kYXRhdmlld19jb21wb25lbnRfU2ltcGxlTGlzdEl0ZW0uZ2V0RXZlbnRzKEV4dFNpbXBsZWxpc3RpdGVtTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0U2ltcGxlbGlzdGl0ZW1NZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFNpbXBsZWxpc3RpdGVtTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFNpbXBsZWxpc3RpdGVtTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXNpbXBsZWxpc3RpdGVtJyxcbiAgaW5wdXRzOiBFeHRTaW1wbGVsaXN0aXRlbU1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFNpbXBsZWxpc3RpdGVtTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNpbXBsZWxpc3RpdGVtQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0U2ltcGxlbGlzdGl0ZW1Db21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0U2ltcGxlbGlzdGl0ZW1NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0U2ltcGxlbGlzdGl0ZW1NZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3NpbXBsZWxpc3RpdGVtJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19