import * as tslib_1 from "tslib";
import { Ext_froala_EditorField } from './Ext/froala/EditorField';
var ExtFroalaeditorfieldMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtFroalaeditorfieldMetaData, _super);
    function ExtFroalaeditorfieldMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtFroalaeditorfieldMetaData.getAll = function () {
        ExtFroalaeditorfieldMetaData.PROPERTIES = Ext_froala_EditorField.getProperties(ExtFroalaeditorfieldMetaData.PROPERTIES);
        ExtFroalaeditorfieldMetaData.EVENTS = Ext_froala_EditorField.getEvents(ExtFroalaeditorfieldMetaData.EVENTS);
        ExtFroalaeditorfieldMetaData.EVENTS.forEach(function (event) {
            ExtFroalaeditorfieldMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtFroalaeditorfieldMetaData.PROPERTIES = [];
    ExtFroalaeditorfieldMetaData.EVENTS = [];
    ExtFroalaeditorfieldMetaData.EVENTNAMES = [];
    return ExtFroalaeditorfieldMetaData;
}(Ext_froala_EditorField));
export { ExtFroalaeditorfieldMetaData };
(function () { ExtFroalaeditorfieldMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtFroalaeditorfieldComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtFroalaeditorfieldComponent, _super);
    function ExtFroalaeditorfieldComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtFroalaeditorfieldMetaData.PROPERTIES, ExtFroalaeditorfieldMetaData.EVENTS) || this;
        _this.xtype = 'froalaeditorfield';
        return _this;
    }
    ExtFroalaeditorfieldComponent_1 = ExtFroalaeditorfieldComponent;
    ExtFroalaeditorfieldComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtFroalaeditorfieldComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtFroalaeditorfieldComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtFroalaeditorfieldComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtFroalaeditorfieldComponent_1;
    ExtFroalaeditorfieldComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtFroalaeditorfieldComponent = ExtFroalaeditorfieldComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-froalaeditorfield',
            inputs: ExtFroalaeditorfieldMetaData.PROPERTIES,
            outputs: ExtFroalaeditorfieldMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtFroalaeditorfieldComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtFroalaeditorfieldComponent);
    return ExtFroalaeditorfieldComponent;
}(EngBase));
export { ExtFroalaeditorfieldComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWZyb2FsYWVkaXRvcmZpZWxkLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWZyb2FsYWVkaXRvcmZpZWxkLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sMEJBQTBCLENBQUM7QUFDbEU7SUFBa0Qsd0RBQXNCO0lBQXhFOztJQVdBLENBQUM7SUFQVSxtQ0FBTSxHQUFiO1FBQ0ksNEJBQTRCLENBQUMsVUFBVSxHQUFHLHNCQUFzQixDQUFDLGFBQWEsQ0FBQyw0QkFBNEIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN4SCw0QkFBNEIsQ0FBQyxNQUFNLEdBQUcsc0JBQXNCLENBQUMsU0FBUyxDQUFDLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVHLDRCQUE0QixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3BELDRCQUE0QixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzdELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLHVDQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLG1DQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLHVDQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLG1DQUFDO0NBQUEsQUFYRCxDQUFrRCxzQkFBc0IsR0FXdkU7U0FYWSw0QkFBNEI7QUFZekMsQ0FBQyxjQUFhLDRCQUE0QixDQUFDLE1BQU0sRUFBRSxDQUFDLENBQUEsQ0FBQyxDQUFDLEVBQUUsQ0FBQztBQUV6RCxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE9BQU8sRUFDTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVE7QUFDUixTQUFTO0FBQ1QsU0FBUztBQUNULGdCQUFnQjtBQUNoQixZQUFZO0FBQ1osU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsYUFBYSxFQUNkLE1BQU0sZUFBZSxDQUFDO0FBU3ZCO0lBQW1ELHlEQUFPO0lBRXRELHVDQUNJLElBQWdCLEVBQ2dCLGFBQXNCO1FBRjFELFlBSUksa0JBQ0ksSUFBSSxFQUNKLGFBQWEsRUFDYiw0QkFBNEIsQ0FBQyxVQUFVLEVBQ3ZDLDRCQUE0QixDQUFDLE1BQU0sQ0FDdEMsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsbUJBQW1CLENBQUE7O0lBQ3BDLENBQUM7c0NBYlEsNkJBQTZCO0lBZS9CLGdEQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLHVEQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLG1EQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLG1EQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4Qiw2QkFBNkI7UUFQekMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHVCQUF1QjtZQUNqQyxNQUFNLEVBQUUsNEJBQTRCLENBQUMsVUFBVTtZQUMvQyxPQUFPLEVBQUUsNEJBQTRCLENBQUMsVUFBVTtZQUNoRCxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsK0JBQTZCLEVBQTdCLENBQTZCLENBQUMsRUFBQyxDQUFDO1lBQzdGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELDZCQUE2QixDQThCekM7SUFBRCxvQ0FBQztDQUFBLEFBOUJELENBQW1ELE9BQU8sR0E4QnpEO1NBOUJZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9mcm9hbGFfRWRpdG9yRmllbGQgfSBmcm9tICcuL0V4dC9mcm9hbGEvRWRpdG9yRmllbGQnO1xuZXhwb3J0IGNsYXNzIEV4dEZyb2FsYWVkaXRvcmZpZWxkTWV0YURhdGEgZXh0ZW5kcyBFeHRfZnJvYWxhX0VkaXRvckZpZWxkIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dEZyb2FsYWVkaXRvcmZpZWxkTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9mcm9hbGFfRWRpdG9yRmllbGQuZ2V0UHJvcGVydGllcyhFeHRGcm9hbGFlZGl0b3JmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMpO1xuICAgICAgICBFeHRGcm9hbGFlZGl0b3JmaWVsZE1ldGFEYXRhLkVWRU5UUyA9IEV4dF9mcm9hbGFfRWRpdG9yRmllbGQuZ2V0RXZlbnRzKEV4dEZyb2FsYWVkaXRvcmZpZWxkTWV0YURhdGEuRVZFTlRTKTtcbiAgICAgICAgRXh0RnJvYWxhZWRpdG9yZmllbGRNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dEZyb2FsYWVkaXRvcmZpZWxkTWV0YURhdGEuRVZFTlROQU1FUy5wdXNoKGV2ZW50Lm5hbWUpO1xuICAgICAgICB9KVxuICAgICB9XG59XG4oZnVuY3Rpb24gKCkge0V4dEZyb2FsYWVkaXRvcmZpZWxkTWV0YURhdGEuZ2V0QWxsKCk7fSkoKTtcblxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWZyb2FsYWVkaXRvcmZpZWxkJyxcbiAgaW5wdXRzOiBFeHRGcm9hbGFlZGl0b3JmaWVsZE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IEV4dEZyb2FsYWVkaXRvcmZpZWxkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEZyb2FsYWVkaXRvcmZpZWxkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0RnJvYWxhZWRpdG9yZmllbGRDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICB4dHlwZTogc3RyaW5nO1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2VcbiAgICApe1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgRXh0RnJvYWxhZWRpdG9yZmllbGRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICAgICAgICAgICAgRXh0RnJvYWxhZWRpdG9yZmllbGRNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ2Zyb2FsYWVkaXRvcmZpZWxkJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuIl19