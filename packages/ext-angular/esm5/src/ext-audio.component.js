import * as tslib_1 from "tslib";
import { Ext_Audio } from './Ext/Audio';
var ExtAudioMetaData = /** @class */ (function (_super) {
    tslib_1.__extends(ExtAudioMetaData, _super);
    function ExtAudioMetaData() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ExtAudioMetaData.getAll = function () {
        ExtAudioMetaData.PROPERTIES = Ext_Audio.getProperties(ExtAudioMetaData.PROPERTIES);
        ExtAudioMetaData.EVENTS = Ext_Audio.getEvents(ExtAudioMetaData.EVENTS);
        ExtAudioMetaData.EVENTS.forEach(function (event) {
            ExtAudioMetaData.EVENTNAMES.push(event.name);
        });
    };
    ExtAudioMetaData.PROPERTIES = [];
    ExtAudioMetaData.EVENTS = [];
    ExtAudioMetaData.EVENTNAMES = [];
    return ExtAudioMetaData;
}(Ext_Audio));
export { ExtAudioMetaData };
(function () { ExtAudioMetaData.getAll(); })();
import { EngBase } from './eng-base';
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtAudioComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtAudioComponent, _super);
    function ExtAudioComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtAudioMetaData.PROPERTIES, ExtAudioMetaData.EVENTS) || this;
        _this.xtype = 'audio';
        return _this;
    }
    ExtAudioComponent_1 = ExtAudioComponent;
    ExtAudioComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtAudioComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtAudioComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtAudioComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtAudioComponent_1;
    ExtAudioComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtAudioComponent = ExtAudioComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-audio',
            inputs: ExtAudioMetaData.PROPERTIES,
            outputs: ExtAudioMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtAudioComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtAudioComponent);
    return ExtAudioComponent;
}(EngBase));
export { ExtAudioComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWF1ZGlvLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWF1ZGlvLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGFBQWEsQ0FBQztBQUN4QztJQUFzQyw0Q0FBUztJQUEvQzs7SUFXQSxDQUFDO0lBUFUsdUJBQU0sR0FBYjtRQUNJLGdCQUFnQixDQUFDLFVBQVUsR0FBRyxTQUFTLENBQUMsYUFBYSxDQUFDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ25GLGdCQUFnQixDQUFDLE1BQU0sR0FBRyxTQUFTLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3ZFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVO1lBQ3hDLGdCQUFnQixDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ0wsQ0FBQztJQVRZLDJCQUFVLEdBQWEsRUFBRSxDQUFDO0lBQzFCLHVCQUFNLEdBQVUsRUFBRSxDQUFDO0lBQ25CLDJCQUFVLEdBQWEsRUFBRSxDQUFDO0lBUTVDLHVCQUFDO0NBQUEsQUFYRCxDQUFzQyxTQUFTLEdBVzlDO1NBWFksZ0JBQWdCO0FBWTdCLENBQUMsY0FBYSxnQkFBZ0IsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxDQUFBLENBQUMsQ0FBQyxFQUFFLENBQUM7QUFFN0MsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQyxPQUFPLEVBQ0wsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRO0FBQ1IsU0FBUztBQUNULFNBQVM7QUFDVCxnQkFBZ0I7QUFDaEIsWUFBWTtBQUNaLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQVN2QjtJQUF1Qyw2Q0FBTztJQUUxQywyQkFDSSxJQUFnQixFQUNnQixhQUFzQjtRQUYxRCxZQUlJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsZ0JBQWdCLENBQUMsVUFBVSxFQUMzQixnQkFBZ0IsQ0FBQyxNQUFNLENBQzFCLFNBRUo7UUFERyxLQUFJLENBQUMsS0FBSyxHQUFHLE9BQU8sQ0FBQTs7SUFDeEIsQ0FBQzswQkFiUSxpQkFBaUI7SUFlbkIsb0NBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sMkNBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sdUNBQVcsR0FBbEIsVUFBbUIsT0FBc0I7UUFDckMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sdUNBQVcsR0FBbEI7UUFDSSxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQzs7O2dCQTFCUyxVQUFVO2dCQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBSnhCLGlCQUFpQjtRQVA3QixTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsV0FBVztZQUNyQixNQUFNLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtZQUNuQyxPQUFPLEVBQUUsZ0JBQWdCLENBQUMsVUFBVTtZQUNwQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsbUJBQWlCLEVBQWpCLENBQWlCLENBQUMsRUFBQyxDQUFDO1lBQ2pGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUtPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFEekIsVUFBVTtZQUMrQixPQUFPO09BSmpELGlCQUFpQixDQThCN0I7SUFBRCx3QkFBQztDQUFBLEFBOUJELENBQXVDLE9BQU8sR0E4QjdDO1NBOUJZLGlCQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9BdWRpbyB9IGZyb20gJy4vRXh0L0F1ZGlvJztcbmV4cG9ydCBjbGFzcyBFeHRBdWRpb01ldGFEYXRhIGV4dGVuZHMgRXh0X0F1ZGlvIHtcbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW107XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuICAgIHN0YXRpYyBnZXRBbGwoKSB7XG4gICAgICAgIEV4dEF1ZGlvTWV0YURhdGEuUFJPUEVSVElFUyA9IEV4dF9BdWRpby5nZXRQcm9wZXJ0aWVzKEV4dEF1ZGlvTWV0YURhdGEuUFJPUEVSVElFUyk7XG4gICAgICAgIEV4dEF1ZGlvTWV0YURhdGEuRVZFTlRTID0gRXh0X0F1ZGlvLmdldEV2ZW50cyhFeHRBdWRpb01ldGFEYXRhLkVWRU5UUyk7XG4gICAgICAgIEV4dEF1ZGlvTWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55KSA9PiB7XG4gICAgICAgICAgICBFeHRBdWRpb01ldGFEYXRhLkVWRU5UTkFNRVMucHVzaChldmVudC5uYW1lKTtcbiAgICAgICAgfSlcbiAgICAgfVxufVxuKGZ1bmN0aW9uICgpIHtFeHRBdWRpb01ldGFEYXRhLmdldEFsbCgpO30pKCk7XG5cbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1hdWRpbycsXG4gIGlucHV0czogRXh0QXVkaW9NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHRBdWRpb01ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRBdWRpb0NvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dEF1ZGlvQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dEF1ZGlvTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dEF1ZGlvTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdhdWRpbydcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==