import * as tslib_1 from "tslib";
import { EngBase } from './eng-base';
var ExtDatecellMetaData = /** @class */ (function () {
    function ExtDatecellMetaData() {
    }
    ExtDatecellMetaData.PROPERTIES = [
        'align',
        'alignSelf',
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'bind',
        'bodyCls',
        'bodyStyle',
        'border',
        'cellCls',
        'cls',
        'column',
        'constrainAlign',
        'controller',
        'defaultListenerScope',
        'defaultToolWeights',
        'disabled',
        'encodeHtml',
        'flex',
        'floated',
        'focusCls',
        'format',
        'height',
        'hidden',
        'hideMode',
        'id',
        'instanceCls',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'listeners',
        'margin',
        'name',
        'nameable',
        'plugins',
        'publishes',
        'rawValue',
        'record',
        'reference',
        'relative',
        'renderTo',
        'ripple',
        'selectable',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'style',
        'toFrontOnShow',
        'toolDefaults',
        'tools',
        'touchAction',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'value',
        'viewModel',
        'width',
        'x',
        'y',
        'zeroValue',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    ExtDatecellMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'datecell' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'datecell,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'datecell,event' },
        { name: 'focusenter', parameters: 'datecell,event' },
        { name: 'focusleave', parameters: 'datecell,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'datecell' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    ExtDatecellMetaData.EVENTNAMES = [
        'beforedisabledchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforetofront',
        'beforewidthchange',
        'blur',
        'disabledchange',
        'focus',
        'focusenter',
        'focusleave',
        'heightchange',
        'hiddenchange',
        'tofront',
        'widthchange',
        'ready'
    ];
    return ExtDatecellMetaData;
}());
export { ExtDatecellMetaData };
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
var ExtDatecellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtDatecellComponent, _super);
    function ExtDatecellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDatecellMetaData.PROPERTIES, ExtDatecellMetaData.EVENTS) || this;
        _this.xtype = 'datecell';
        return _this;
    }
    ExtDatecellComponent_1 = ExtDatecellComponent;
    ExtDatecellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatecellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatecellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatecellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatecellComponent_1;
    ExtDatecellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDatecellComponent = ExtDatecellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-datecell',
            inputs: ExtDatecellMetaData.PROPERTIES,
            outputs: ExtDatecellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatecellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDatecellComponent);
    return ExtDatecellComponent;
}(EngBase));
export { ExtDatecellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWRhdGVjZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItYWxsLyIsInNvdXJjZXMiOlsic3JjL2V4dC1kYXRlY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckM7SUFBQTtJQTJHQSxDQUFDO0lBekdpQiw4QkFBVSxHQUFhO1FBQ3pDLE9BQU87UUFDUCxXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7UUFDWCxRQUFRO1FBQ1IsU0FBUztRQUNULEtBQUs7UUFDTCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVixZQUFZO1FBQ1osTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsVUFBVTtRQUNWLElBQUk7UUFDSixhQUFhO1FBQ2IsUUFBUTtRQUNSLFFBQVE7UUFDUixlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxRQUFRO1FBQ1IsTUFBTTtRQUNOLFVBQVU7UUFDVixTQUFTO1FBQ1QsV0FBVztRQUNYLFVBQVU7UUFDVixRQUFRO1FBQ1IsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsUUFBUTtRQUNSLFlBQVk7UUFDWixTQUFTO1FBQ1QsUUFBUTtRQUNSLGVBQWU7UUFDZixNQUFNO1FBQ04sT0FBTztRQUNQLGVBQWU7UUFDZixjQUFjO1FBQ2QsT0FBTztRQUNQLGFBQWE7UUFDYixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLElBQUk7UUFDSixTQUFTO1FBQ1QsT0FBTztRQUNQLFdBQVc7UUFDWCxPQUFPO1FBQ1AsR0FBRztRQUNILEdB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UUFQaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsTUFBTSxFQUFFLG1CQUFtQixDQUFDLFVBQVU7WUFDdEMsT0FBTyxFQUFFLG1CQUFtQixDQUFDLFVBQVU7WUFDdkMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFvQixFQUFwQixDQUFvQixDQUFDLEVBQUMsQ0FBQztZQUNwRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBRHpCLFVBQVU7WUFDK0IsT0FBTztPQUpqRCxvQkFBb0IsQ0E4QmhDO0lBQUQsMkJBQUM7Q0FBQSxBQTlCRCxDQUEwQyxPQUFPLEdBOEJoRDtTQTlCWSxvQkFBb0IiLCJzb3VyY2VzQ29udGVudCI6WyJcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmV4cG9ydCBjbGFzcyBFeHREYXRlY2VsbE1ldGFEYXRhIHtcblxuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nYWxpZ24nLFxuJ2FsaWduU2VsZicsXG4nYWx3YXlzT25Ub3AnLFxuJ2FyaWFBdHRyaWJ1dGVzJyxcbidhcmlhRGVzY3JpYmVkQnknLFxuJ2FyaWFMYWJlbCcsXG4nYXJpYUxhYmVsbGVkQnknLFxuJ2JpbmQnLFxuJ2JvZHlDbHMnLFxuJ2JvZHlTdHlsZScsXG4nYm9yZGVyJyxcbidjZWxsQ2xzJyxcbidjbHMnLFxuJ2NvbHVtbicsXG4nY29uc3RyYWluQWxpZ24nLFxuJ2NvbnRyb2xsZXInLFxuJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbidkZWZhdWx0VG9vbFdlaWdodHMnLFxuJ2Rpc2FibGVkJyxcbidlbmNvZGVIdG1sJyxcbidmbGV4JyxcbidmbG9hdGVkJyxcbidmb2N1c0NscycsXG4nZm9ybWF0JyxcbidoZWlnaHQnLFxuJ2hpZGRlbicsXG4naGlkZU1vZGUnLFxuJ2lkJyxcbidpbnN0YW5jZUNscycsXG4naXRlbUlkJyxcbidrZXlNYXAnLFxuJ2tleU1hcEVuYWJsZWQnLFxuJ2tleU1hcFRhcmdldCcsXG4nbGlzdGVuZXJzJyxcbidtYXJnaW4nLFxuJ25hbWUnLFxuJ25hbWVhYmxlJyxcbidwbHVnaW5zJyxcbidwdWJsaXNoZXMnLFxuJ3Jhd1ZhbHVlJyxcbidyZWNvcmQnLFxuJ3JlZmVyZW5jZScsXG4ncmVsYXRpdmUnLFxuJ3JlbmRlclRvJyxcbidyaXBwbGUnLFxuJ3NlbGVjdGFibGUnLFxuJ3Nlc3Npb24nLFxuJ3NoYWRvdycsXG4nc2hhcmVhYmxlTmFtZScsXG4nc2hpbScsXG4nc3R5bGUnLFxuJ3RvRnJvbnRPblNob3cnLFxuJ3Rvb2xEZWZhdWx0cycsXG4ndG9vbHMnLFxuJ3RvdWNoQWN0aW9uJyxcbid0cmFuc2xhdGFibGUnLFxuJ3R3b1dheUJpbmRhYmxlJyxcbid1aScsXG4ndXNlckNscycsXG4ndmFsdWUnLFxuJ3ZpZXdNb2RlbCcsXG4nd2lkdGgnLFxuJ3gnLFxuJ3knLFxuJ3plcm9WYWx1ZScsXG4ncGxhdGZvcm1Db25maWcnLFxuJ3Jlc3BvbnNpdmVDb25maWcnLFxuJ2ZpdFRvUGFyZW50Jyxcbidjb25maWcnXG5dO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2RhdGVjZWxsJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidkYXRlY2VsbCxldmVudCd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczonZGF0ZWNlbGwsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidkYXRlY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2RhdGVjZWxsLGV2ZW50J30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2RhdGVjZWxsJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcbidiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZWhpZGRlbmNoYW5nZScsXG4nYmVmb3JldG9mcm9udCcsXG4nYmVmb3Jld2lkdGhjaGFuZ2UnLFxuJ2JsdXInLFxuJ2Rpc2FibGVkY2hhbmdlJyxcbidmb2N1cycsXG4nZm9jdXNlbnRlcicsXG4nZm9jdXNsZWF2ZScsXG4naGVpZ2h0Y2hhbmdlJyxcbidoaWRkZW5jaGFuZ2UnLFxuJ3RvZnJvbnQnLFxuJ3dpZHRoY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5cbmltcG9ydCB7XG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgLy9PdXRwdXQsXG4gIC8vT25Jbml0LFxuICAvL0FmdGVyVmlld0luaXQsXG4gIC8vT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1kYXRlY2VsbCcsXG4gIGlucHV0czogRXh0RGF0ZWNlbGxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBFeHREYXRlY2VsbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHREYXRlY2VsbENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dERhdGVjZWxsQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgeHR5cGU6IHN0cmluZztcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlXG4gICAgKXtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIEV4dERhdGVjZWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dERhdGVjZWxsTWV0YURhdGEuRVZFTlRTXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdkYXRlY2VsbCdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cbiJdfQ==