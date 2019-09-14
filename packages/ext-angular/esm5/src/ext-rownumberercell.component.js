//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Injectable, Host, Optional, SkipSelf, Output, OnInit, AfterViewInit, OnChanges, Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
import { EngBase } from './eng-base';
var rownumberercellMetaData = /** @class */ (function () {
    function rownumberercellMetaData() {
    }
    rownumberercellMetaData.XTYPE = 'rownumberercell';
    rownumberercellMetaData.PROPERTIES = [
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
        'align',
        'fitToParent',
        'config'
    ];
    rownumberercellMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'rownumberercell' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'rownumberercell,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'rownumberercell,event' },
        { name: 'focusenter', parameters: 'rownumberercell,event' },
        { name: 'focusleave', parameters: 'rownumberercell,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'rownumberercell' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    rownumberercellMetaData.EVENTNAMES = [
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
    return rownumberercellMetaData;
}());
export { rownumberercellMetaData };
var ExtRownumberercellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRownumberercellComponent, _super);
    function ExtRownumberercellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, rownumberercellMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtRownumberercellComponent_1 = ExtRownumberercellComponent;
    ExtRownumberercellComponent.prototype.ngOnInit = function () {
        this.baseOnInit(rownumberercellMetaData);
    };
    ExtRownumberercellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(rownumberercellMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtRownumberercellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtRownumberercellComponent_1;
    ExtRownumberercellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRownumberercellComponent = ExtRownumberercellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-rownumberercell',
            inputs: rownumberercellMetaData.PROPERTIES,
            outputs: rownumberercellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRownumberercellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtRownumberercellComponent);
    return ExtRownumberercellComponent;
}(EngBase));
export { ExtRownumberercellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXJvd251bWJlcmVyY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2V4dC1yb3dudW1iZXJlcmNlbGwuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDBCQUEwQjtBQUMxQix5Q0FBeUM7QUFDekMsMkNBQTJDOztBQUczQyxPQUFPLEVBQ0wsVUFBVSxFQUNWLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLE1BQU0sRUFDTixNQUFNLEVBQ04sYUFBYSxFQUNiLFNBQVMsRUFDVCxTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixhQUFhLEVBQ2QsTUFBTSxlQUFlLENBQUM7QUFDdkIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLFlBQVksQ0FBQztBQUNyQztJQUFBO0lBa0hBLENBQUM7SUFqSGUsNkJBQUssR0FBVyxpQkFBaUIsQ0FBQztJQUNsQyxrQ0FBVSxHQUFhO1FBQ25DLEtBQUs7UUFDTCxVQUFVO1FBQ1YsT0FBTztRQUNQLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLE9BQU87UUFDUCxXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7UUFDWCxRQUFRO1FBQ1IsU0FBUztRQUNULEtBQUs7UUFDTCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVixZQUFZO1FBQ1osTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsUUFBUTtRQUNSLFFBQVE7UUFDUixRQUFRO1FBQ1IsVUFBVTtRQUNWLElBQUk7UUFDSixhQUFhO1FBQ2IsUUFBUTtRQUNSLFFBQVE7UUFDUixlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxRQUFRO1FBQ1IsTUFBTTtRQUNOLFVBQVU7UUFDVixTQUFTO1FBQ1QsV0FBVztRQUNYLFVBQVU7UUFDVixRQUFRO1FBQ1IsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1YsUUFBUTtRQUNSLFlBQVk7UUFDWixTQUFTO1FBQ1QsUUFBUTtRQUNSLGVBQWU7UUFDZixNQUFNO1FBQ04sT0FBTztRQUNQLGVBQWU7UUFDZixjQUFjO1FBQ2QsT0FBTztRQUNQLGFBQWE7UUFDYixjQUFjO1FBQ2QsZ0JBQWdCO1FBQ2hCLElBQUk7UUFDSixTQUFTO1FBQ1QsT0FBTztRQUNQLFdBQVc7UUFDWCxPQUFPO1FBQ1AsR0FBRztRQUNILEdBQUc7UUFDSCxXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLGtCQUFrQjtRQUNsQixPQUFPO1FBQ1AsYUFBYTtRQUNiLFFBQVE7S0FDWCxDQUFDO0lBQ2MsOEJBQU0sR0FBVTtRQUNoQyxFQUFDLElBQUksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUNBQWlDLEVBQUM7UUFDMUUsRUFBQyxJQUFJLEVBQUMsb0JBQW9CLEVBQUMsVUFBVSxFQUFDLGlDQUFpQyxFQUFDO1FBQ3hFLEVBQUMsSUFBSSxFQUFDLG9CQUFvQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN4RSxFQUFDLElBQUksRUFBQyxlQUFlLEVBQUMsVUFBVSxFQUFDLGlCQUFpQixFQUFDO1FBQ25ELEVBQUMsSUFBSSxFQUFDLG1CQUFtQixFQUFDLFVBQVUsRUFBQyxpQ0FBaUMsRUFBQztRQUN2RSxFQUFDLElBQUksRUFBQyxNQUFNLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ2hELEVBQUMsSUFBSSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUMxRCxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ2pELEVBQUMsSUFBSSxFQUFDLFlBQVksRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDdEQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUN0RCxFQUFDLElBQUksRUFBQyxjQUFjLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3hELEVBQUMsSUFBSSxFQUFDLGNBQWMsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDeEQsRUFBQyxJQUFJLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxpQkFBaUIsRUFBQztRQUM3QyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFDYyxrQ0FBVSxHQUFhO1FBQ3ZDLHNCQUFzQjtRQUN0QixvQkFBb0I7UUFDcEIsb0JBQW9CO1FBQ3BCLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsTUFBTTtRQUNOLGdCQUFnQjtRQUNoQixPQUFPO1FBQ1AsWUFBWTtRQUNaLFlBQVk7UUFDWixjQUFjO1FBQ2QsY0FBYztRQUNkLFNBQVM7UUFDVCxhQUFhO1FBQ2IsT0FBTztLQUNOLENBQUM7SUFDRiw4QkFBQztDQUFBLEFBbEhELElBa0hDO1NBbEhZLHVCQUF1QjtBQTBIcEM7SUFBaUQsdURBQU87SUFDcEQscUNBQVksSUFBZSxFQUF5QyxhQUF1QjtRQUEzRixZQUNJLGtCQUFNLElBQUksQ0FBQyxhQUFhLEVBQUMsdUJBQXVCLEVBQUMsYUFBYSxDQUFDLFNBQ2xFO1FBRm1FLG1CQUFhLEdBQWIsYUFBYSxDQUFVOztJQUUzRixDQUFDO29DQUhRLDJCQUEyQjtJQUs3Qiw4Q0FBUSxHQUFmO1FBQ0ksSUFBSSxDQUFDLFVBQVUsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBQzVDLENBQUM7SUFFTSxxREFBZSxHQUF0QjtRQUNJLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx1QkFBdUIsQ0FBQyxDQUFBO0lBQ25ELENBQUM7SUFJSCwrQkFBK0I7SUFDL0IsK0JBQStCO0lBQy9CLEdBQUc7SUFFSSxpREFBVyxHQUFsQixVQUFtQixPQUFzQixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDOzs7Z0JBbEJyRCxVQUFVO2dCQUF5RCxPQUFPLHVCQUE3RCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBRGpELDJCQUEyQjtRQVB2QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUscUJBQXFCO1lBQy9CLE1BQU0sRUFBRSx1QkFBdUIsQ0FBQyxVQUFVO1lBQzFDLE9BQU8sRUFBRSx1QkFBdUIsQ0FBQyxVQUFVO1lBQzNDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSw2QkFBMkIsRUFBM0IsQ0FBMkIsQ0FBQyxFQUFDLENBQUM7WUFDM0YsUUFBUSxFQUFFLDZCQUE2QjtTQUN4QyxDQUFDO1FBRWdDLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtpREFBM0MsVUFBVSxFQUF5RCxPQUFPO09BRGxGLDJCQUEyQixDQTBCdkM7SUFBRCxrQ0FBQztDQUFBLEFBMUJELENBQWlELE9BQU8sR0EwQnZEO1NBMUJZLDJCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbIi8vRXh0Lm9uUmVhZHkoZnVuY3Rpb24oKSB7XG4vL2ltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5leHBvcnQgY2xhc3Mgcm93bnVtYmVyZXJjZWxsTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAncm93bnVtYmVyZXJjZWxsJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW5nJyxcbiAgICAndmlld3BvcnQnLFxuICAgICdhbGlnbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUZvcm11bGFzJyxcbiAgICAnYWxpZ24nLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9keUNscycsXG4gICAgJ2JvZHlTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NlbGxDbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW4nLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRUb29sV2VpZ2h0cycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZW5jb2RlSHRtbCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb3JtYXQnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2lkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3Jhd1ZhbHVlJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3NlbGVjdGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzdHlsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sRGVmYXVsdHMnLFxuICAgICd0b29scycsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3knLFxuICAgICd6ZXJvVmFsdWUnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczoncm93bnVtYmVyZXJjZWxsJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidyb3dudW1iZXJlcmNlbGwsZXZlbnQnfSxcbntuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J3Jvd251bWJlcmVyY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3Jvd251bWJlcmVyY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J3Jvd251bWJlcmVyY2VsbCxldmVudCd9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidyb3dudW1iZXJlcmNlbGwnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcbidiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuJ2JlZm9yZWhpZGRlbmNoYW5nZScsXG4nYmVmb3JldG9mcm9udCcsXG4nYmVmb3Jld2lkdGhjaGFuZ2UnLFxuJ2JsdXInLFxuJ2Rpc2FibGVkY2hhbmdlJyxcbidmb2N1cycsXG4nZm9jdXNlbnRlcicsXG4nZm9jdXNsZWF2ZScsXG4naGVpZ2h0Y2hhbmdlJyxcbidoaWRkZW5jaGFuZ2UnLFxuJ3RvZnJvbnQnLFxuJ3dpZHRoY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtcm93bnVtYmVyZXJjZWxsJyxcbiAgaW5wdXRzOiByb3dudW1iZXJlcmNlbGxNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiByb3dudW1iZXJlcmNlbGxNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Um93bnVtYmVyZXJjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Um93bnVtYmVyZXJjZWxsQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSBpbXBsZW1lbnRzIE9uSW5pdCwgQWZ0ZXJWaWV3SW5pdCwgT25DaGFuZ2VzICB7XG4gICAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmLCBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIHB1YmxpYyBob3N0Q29tcG9uZW50IDogRW5nQmFzZSkge1xuICAgICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQscm93bnVtYmVyZXJjZWxsTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdChyb3dudW1iZXJlcmNlbGxNZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KHJvd251bWJlcmVyY2VsbE1ldGFEYXRhKVxuICAgIH1cblxuXG5cbiAgLy9wdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAvLyAgdGhpcy5iYXNlQWZ0ZXJDb250ZW50SW5pdCgpXG4gIC8vfVxuXG4gIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuXG5cblxuICAgLy8gcHVibGljIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgIC8vICAgY29uc29sZS5sb2coJ25nQWZ0ZXJWaWV3Q2hlY2tlZCcpXG4gIC8vfVxufVxuXG4iXX0=