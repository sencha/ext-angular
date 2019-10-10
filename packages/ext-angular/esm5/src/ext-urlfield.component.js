import * as tslib_1 from "tslib";
import { Ext_form_Url } from './Ext/form/Url';
var ExtUrlfieldMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtUrlfieldMetaData, _super);
    function ExtUrlfieldMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtUrlfieldMetaData.getAll = function () {
        ExtUrlfieldMetaData.PROPERTIES = Ext_form_Url.getProperties(ExtUrlfieldMetaData.PROPERTIES);
        ExtUrlfieldMetaData.EVENTS = Ext_form_Url.getEvents(ExtUrlfieldMetaData.EVENTS);
        ExtUrlfieldMetaData.EVENTS.forEach(function (event) {
            ExtUrlfieldMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtUrlfieldMetaData.PROPERTIES = [];
    ExtUrlfieldMetaData.EVENTS = [];
    ExtUrlfieldMetaData.EVENTNAMES = [];
    return ExtUrlfieldMetaData;
}(Ext_form_Url));
export { ExtUrlfieldMetaData };
(function () { ExtUrlfieldMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtUrlfieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtUrlfieldComponent, _super);
    function ExtUrlfieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtUrlfieldMetaData.PROPERTIES, ExtUrlfieldMetaData.EVENTS) || this;
        _this.xtype = 'urlfield';
        return _this;
    }
    ExtUrlfieldComponent_1 = ExtUrlfieldComponent;
    ExtUrlfieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtUrlfieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtUrlfieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtUrlfieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtUrlfieldComponent_1;
    ExtUrlfieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtUrlfieldComponent = ExtUrlfieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-urlfield',
            inputs: ExtUrlfieldMetaData.PROPERTIES,
            outputs: ExtUrlfieldMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtUrlfieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtUrlfieldComponent);
    return ExtUrlfieldComponent;
}(EngBase));
export { ExtUrlfieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXVybGZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LXVybGZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFlBQVksRUFBRSxNQUFNLGdCQUFnQixDQUFDO0FBQzlDO0lBQXlDLCtDQUFZO0lBQXJEOztJQVdBLENBQUM7SUFQVSwwQkFBTSxHQUFiO1FBQ0ksbUJBQW1CLENBQUMsVUFBVSxHQUFHLFlBQVksQ0FBQyxhQUFhLENBQUMsbUJBQW1CLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDNUYsbUJBQW1CLENBQUMsTUFBTSxHQUFHLFlBQVksQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDaEYsbUJBQW1CLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVU7WUFDM0MsbUJBQW1CLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDcEQsQ0FBQyxDQUFDLENBQUE7SUFDTCxDQUFDO0lBVFksOEJBQVUsR0FBYSxFQUFFLENBQUM7SUFDMUIsMEJBQU0sR0FBVSxFQUFFLENBQUM7SUFDbkIsOEJBQVUsR0FBYSxFQUFFLENBQUM7SUFRNUMsMEJBQUM7Q0FBQSxBQVhELENBQXlDLFlBQVksR0FXcEQ7U0FYWSxtQkFBbUI7QUFZaEMsQ0FBQyxjQUFhLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUVoRCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQTBDLGdEQUFPO0lBRTdDLDhCQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYixtQkFBbUIsQ0FBQyxVQUFVLEVBQzlCLG1CQUFtQixDQUFDLE1BQU0sQ0FDN0IsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsVUFBVSxDQUFBOztJQUMzQixDQUFDOzZCQWJRLG9CQUFvQjtJQWV0Qix1Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFBO0lBQ3JCLENBQUM7SUFFTSw4Q0FBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsRUFBRSxDQUFBO0lBQzVCLENBQUM7SUFFTSwwQ0FBVyxHQUFsQixVQUFtQixPQUFzQjtRQUNyQyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSwwQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBMUJTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTs7SUFKeEIsb0JBQW9CO1FBUGhDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxjQUFjO1lBQ3hCLE1BQU0sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3RDLE9BQU8sRUFBRSxtQkFBbUIsQ0FBQyxVQUFVO1lBQ3ZDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSxzQkFBb0IsRUFBcEIsQ0FBb0IsQ0FBQyxFQUFDLENBQUM7WUFDcEYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBS08sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUR6QixVQUFVO1lBQytCLE9BQU87T0FKakQsb0JBQW9CLENBOEJoQztJQUFELDJCQUFDO0NBQUEsQUE5QkQsQ0FBMEMsT0FBTyxHQThCaEQ7U0E5Qlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXh0X2Zvcm1fVXJsIH0gZnJvbSAnLi9FeHQvZm9ybS9VcmwnO1xuZXhwb3J0IGNsYXNzIEV4dFVybGZpZWxkTWV0YURhdGEgZXh0ZW5kcyBFeHRfZm9ybV9Vcmwge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgc3RhdGljIGdldEFsbCgpIHtcbiAgICAgICAgRXh0VXJsZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X2Zvcm1fVXJsLmdldFByb3BlcnRpZXMoRXh0VXJsZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTKTtcbiAgICAgICAgRXh0VXJsZmllbGRNZXRhRGF0YS5FVkVOVFMgPSBFeHRfZm9ybV9VcmwuZ2V0RXZlbnRzKEV4dFVybGZpZWxkTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0VXJsZmllbGRNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFVybGZpZWxkTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dFVybGZpZWxkTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LXVybGZpZWxkJyxcbiAgaW5wdXRzOiBFeHRVcmxmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dFVybGZpZWxkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFVybGZpZWxkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VXJsZmllbGRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0VXJsZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0VXJsZmllbGRNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3VybGZpZWxkJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19