//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
var checkcellMetaData = /** @class */ (function () {
    function checkcellMetaData() {
    }
    checkcellMetaData.XTYPE = 'checkcell';
    checkcellMetaData.PROPERTIES = [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
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
        'flex',
        'floated',
        'focusCls',
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
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    checkcellMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'checkcell' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'checkcell,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'checkcell,event' },
        { name: 'focusenter', parameters: 'checkcell,event' },
        { name: 'focusleave', parameters: 'checkcell,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'checkcell' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    checkcellMetaData.EVENTNAMES = [
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
    return checkcellMetaData;
}());
export { checkcellMetaData };
var ExtCheckcellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCheckcellComponent, _super);
    function ExtCheckcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, checkcellMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtCheckcellComponent_1 = ExtCheckcellComponent;
    ExtCheckcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit(checkcellMetaData);
    };
    ExtCheckcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(checkcellMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtCheckcellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtCheckcellComponent_1;
    ExtCheckcellComponent = ExtCheckcellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-checkcell',
            inputs: checkcellMetaData.PROPERTIES,
            outputs: checkcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCheckcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtCheckcellComponent);
    return ExtCheckcellComponent;
}(EngBase));
export { ExtCheckcellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoZWNrY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWFsbC8iLCJzb3VyY2VzIjpbInNyYy9leHQtY2hlY2tjZWxsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLDJDQUEyQzs7QUFHM0MsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUVYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxZQUFZLENBQUM7QUFDckM7SUFBQTtJQThHQSxDQUFDO0lBN0dlLHVCQUFLLEdBQVcsV0FBVyxDQUFDO0lBQzVCLDRCQUFVLEdBQWE7UUFDbkMsS0FBSztRQUNMLFVBQVU7UUFDVixPQUFPO1FBQ1AsU0FBUztRQUNULGtCQUFrQjtRQUNsQixvQkFBb0I7UUFDcEIsT0FBTztRQUNQLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLE1BQU07UUFDTixTQUFTO1FBQ1QsV0FBVztRQUNYLFFBQVE7UUFDUixTQUFTO1FBQ1QsS0FBSztRQUNMLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsVUFBVTtRQUNWLE1BQU07UUFDTixTQUFTO1FBQ1QsVUFBVTtRQUNWLFFBQVE7UUFDUixRQUFRO1FBQ1IsVUFBVTtRQUNWLElBQUk7UUFDSixhQUFhO1FBQ2IsUUFBUTtRQUNSLFFBQVE7UUFDUixlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxRQUFRO1FBQ1IsTUFBTTtRQUNOLFVBQVU7UUFDVixTQUFTO1FBQ1QsV0FBVztRQUNYLFFBQVE7UUFDUixXQUFXO1FBQ1gsVUFBVTtRQUNWLFVBQVU7UUFDVixR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LE1BQU0sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3BDLE9BQU8sRUFBRSxpQkFBaUIsQ0FBQyxVQUFVO1lBQ3JDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSx1QkFBcUIsRUFBckIsQ0FBcUIsQ0FBQyxFQUFDLENBQUM7WUFDckYsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBRWdDLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFBM0MsVUFBVSxFQUF5RCxPQUFPO09BRGxGLHFCQUFxQixDQTBCakM7SUFBRCw0QkFBQztDQUFBLEFBMUJELENBQTJDLE9BQU8sR0EwQmpEO1NBMUJZLHFCQUFxQiIsInNvdXJjZXNDb250ZW50IjpbIi8vRXh0Lm9uUmVhZHkoZnVuY3Rpb24oKSB7XG4vL2ltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5leHBvcnQgY2xhc3MgY2hlY2tjZWxsTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnY2hlY2tjZWxsJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW5nJyxcbiAgICAndmlld3BvcnQnLFxuICAgICdhbGlnbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUZvcm11bGFzJyxcbiAgICAnYWxpZ24nLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9keUNscycsXG4gICAgJ2JvZHlTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NlbGxDbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW4nLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRUb29sV2VpZ2h0cycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaWQnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3NlbGVjdGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzdHlsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3knLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonY2hlY2tjZWxsJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidjaGVja2NlbGwsZXZlbnQnfSxcbntuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NoZWNrY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2NoZWNrY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2NoZWNrY2VsbCxldmVudCd9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidjaGVja2NlbGwnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcbidiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZWhpZGRlbmNoYW5nZScsXG4nYmVmb3JldG9mcm9udCcsXG4nYmVmb3Jld2lkdGhjaGFuZ2UnLFxuJ2JsdXInLFxuJ2Rpc2FibGVkY2hhbmdlJyxcbidmb2N1cycsXG4nZm9jdXNlbnRlcicsXG4nZm9jdXNsZWF2ZScsXG4naGVpZ2h0Y2hhbmdlJyxcbidoaWRkZW5jaGFuZ2UnLFxuJ3RvZnJvbnQnLFxuJ3dpZHRoY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtY2hlY2tjZWxsJyxcbiAgaW5wdXRzOiBjaGVja2NlbGxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBjaGVja2NlbGxNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2hlY2tjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q2hlY2tjZWxsQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzICB7XG4gICAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogRW5nQmFzZSkge1xuICAgICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY2hlY2tjZWxsTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdChjaGVja2NlbGxNZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KGNoZWNrY2VsbE1ldGFEYXRhKVxuICAgIH1cblxuXG5cbiAgLy9wdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAvLyAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gIC8vfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG5cblxuICAgLy8gcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgIC8vICAgY29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3Q2hlY2tlZCcpXG4gIC8vfVxufVxuXG4iXX0=