import * as tslib_1 from "tslib";
import { Ext_Toolbar } from './Ext/Toolbar';
var ExtToolbarMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtToolbarMetaData, _super);
    function ExtToolbarMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtToolbarMetaData.getAll = function () {
        ExtToolbarMetaData.PROPERTIES = Ext_Toolbar.getProperties(ExtToolbarMetaData.PROPERTIES);
        ExtToolbarMetaData.EVENTS = Ext_Toolbar.getEvents(ExtToolbarMetaData.EVENTS);
        ExtToolbarMetaData.EVENTS.forEach(function (event) {
            ExtToolbarMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtToolbarMetaData.PROPERTIES = [];
    ExtToolbarMetaData.EVENTS = [];
    ExtToolbarMetaData.EVENTNAMES = [];
    return ExtToolbarMetaData;
}(Ext_Toolbar));
export { ExtToolbarMetaData };
(function () { ExtToolbarMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtToolbarComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtToolbarComponent, _super);
    function ExtToolbarComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtToolbarMetaData.PROPERTIES, ExtToolbarMetaData.EVENTS) || this;
        _this.xtype = 'toolbar';
        return _this;
    }
    ExtToolbarComponent_1 = ExtToolbarComponent;
    ExtToolbarComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtToolbarComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtToolbarComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtToolbarComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtToolbarComponent_1;
    ExtToolbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtToolbarComponent = ExtToolbarComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-toolbar',
            inputs: ExtToolbarMetaData.PROPERTIES,
            outputs: ExtToolbarMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtToolbarComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtToolbarComponent);
    return ExtToolbarComponent;
}(EngBase));
export { ExtToolbarComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXRvb2xiYXIuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtdG9vbGJhci5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxXQUFXLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDNUM7SUFBd0MsOENBQVc7SUFBbkQ7O0lBV0EsQ0FBQztJQVBVLHlCQUFNLEdBQWI7UUFDSSxrQkFBa0IsQ0FBQyxVQUFVLEdBQUcsV0FBVyxDQUFDLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN6RixrQkFBa0IsQ0FBQyxNQUFNLEdBQUcsV0FBVyxDQUFDLFNBQVMsQ0FBQyxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3RSxrQkFBa0IsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVTtZQUMxQyxrQkFBa0IsQ0FBQyxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUNuRCxDQUFDLENBQUMsQ0FBQTtJQUNMLENBQUM7SUFUWSw2QkFBVSxHQUFhLEVBQUUsQ0FBQztJQUMxQix5QkFBTSxHQUFVLEVBQUUsQ0FBQztJQUNuQiw2QkFBVSxHQUFhLEVBQUUsQ0FBQztJQVE1Qyx5QkFBQztDQUFBLEFBWEQsQ0FBd0MsV0FBVyxHQVdsRDtTQVhZLGtCQUFrQjtBQVkvQixDQUFDLGNBQWEsa0JBQWtCLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQSxDQUFDLENBQUMsRUFBRSxDQUFDO0FBRS9DLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckMsT0FBTyxFQUNMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUTtBQUNSLFNBQVM7QUFDVCxTQUFTO0FBQ1QsZ0JBQWdCO0FBQ2hCLFlBQVk7QUFDWixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFTdkI7SUFBeUMsK0NBQU87SUFFNUMsNkJBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0I7UUFGMUQsWUFJSSxrQkFDSSxJQUFJLEVBQ0osYUFBYSxFQUNiLGtCQUFrQixDQUFDLFVBQVUsRUFDN0Isa0JBQWtCLENBQUMsTUFBTSxDQUM1QixTQUVKO1FBREcsS0FBSSxDQUFDLEtBQUssR0FBRyxTQUFTLENBQUE7O0lBQzFCLENBQUM7NEJBYlEsbUJBQW1CO0lBZXJCLHNDQUFRLEdBQWY7UUFDSSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLDZDQUFlLEdBQXRCO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLHlDQUFXLEdBQWxCLFVBQW1CLE9BQXNCO1FBQ3JDLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLHlDQUFXLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFBO0lBQ3hCLENBQUM7OztnQkExQlMsVUFBVTtnQkFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQUp4QixtQkFBbUI7UUFQL0IsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGFBQWE7WUFDdkIsTUFBTSxFQUFFLGtCQUFrQixDQUFDLFVBQVU7WUFDckMsT0FBTyxFQUFFLGtCQUFrQixDQUFDLFVBQVU7WUFDdEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHFCQUFtQixFQUFuQixDQUFtQixDQUFDLEVBQUMsQ0FBQztZQUNuRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxtQkFBbUIsQ0E4Qi9CO0lBQUQsMEJBQUM7Q0FBQSxBQTlCRCxDQUF5QyxPQUFPLEdBOEIvQztTQTlCWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFeHRfVG9vbGJhciB9IGZyb20gJy4vRXh0L1Rvb2xiYXInO1xuZXhwb3J0IGNsYXNzIEV4dFRvb2xiYXJNZXRhRGF0YSBleHRlbmRzIEV4dF9Ub29sYmFyIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dFRvb2xiYXJNZXRhRGF0YS5QUk9QRVJUSUVTID0gRXh0X1Rvb2xiYXIuZ2V0UHJvcGVydGllcyhFeHRUb29sYmFyTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dFRvb2xiYXJNZXRhRGF0YS5FVkVOVFMgPSBFeHRfVG9vbGJhci5nZXRFdmVudHMoRXh0VG9vbGJhck1ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dFRvb2xiYXJNZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnkpID0+IHtcbiAgICAgICAgICAgIEV4dFRvb2xiYXJNZXRhRGF0YS5FVkVOVE5BTUVTLnB1c2goZXZlbnQubmFtZSk7XG4gICAgICAgIH0pXG4gICAgIH1cbn1cbihmdW5jdGlvbiAoKSB7RXh0VG9vbGJhck1ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC10b29sYmFyJyxcbiAgaW5wdXRzOiBFeHRUb29sYmFyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0VG9vbGJhck1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRUb29sYmFyQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0VG9vbGJhckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRUb29sYmFyTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFRvb2xiYXJNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3Rvb2xiYXInXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=