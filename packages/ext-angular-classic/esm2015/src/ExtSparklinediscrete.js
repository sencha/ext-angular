var ExtSparklinediscreteComponent_1;
import { __decorate, __param } from "tslib";
//import EWCSparklinediscrete from '../dist/ext-sparklinediscrete.component.js';
//inputs: (new EWCSparklinediscrete()).properties,
//import EWCSparklinediscrete from '@sencha/ext-web-components-classic/dist/ext-sparklinediscrete.component.js';
import { EWCSparklinediscrete } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
let ExtSparklinediscreteComponent = ExtSparklinediscreteComponent_1 = class ExtSparklinediscreteComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'chartRangeClip', 'chartRangeMax', 'chartRangeMin', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'disableTooltips', 'undefined', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightColor', 'highlightLighten', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lineColor', 'lineHeight', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'thresholdColor', 'thresholdValue', 'tipTpl', 'tooltipPrefix', 'tooltipSkipNull', 'tooltipSuffix', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'values', 'viewModel', 'width',], (new EWCSparklinediscrete()).events, ['ready', 'created', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'widthchange',], vc);
        this.xtype = 'sparklinediscrete';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtSparklinediscreteComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtSparklinediscreteComponent = ExtSparklinediscreteComponent_1 = __decorate([
    Component({
        selector: 'ExtSparklinediscrete',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'chartRangeClip', 'chartRangeMax', 'chartRangeMin', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'disableTooltips', 'undefined', 'focusCls', 'height', 'hidden', 'hideMode', 'highlightColor', 'highlightLighten', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'lineColor', 'lineHeight', 'listeners', 'margin', 'name', 'nameable', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'session', 'shareableName', 'style', 'thresholdColor', 'thresholdValue', 'tipTpl', 'tooltipPrefix', 'tooltipSkipNull', 'tooltipSuffix', 'touchAction', 'twoWayBindable', 'ui', 'userCls', 'values', 'viewModel', 'width',],
        outputs: ['ready', 'created', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtSparklinediscreteComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtSparklinediscreteComponent);
export { ExtSparklinediscreteComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCSparklinediscrete()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0U3BhcmtsaW5lZGlzY3JldGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvRXh0U3BhcmtsaW5lZGlzY3JldGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBZ0Y7QUFDaEYsa0RBQWtEO0FBQ2xELGdIQUFnSDtBQUNoSCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMxRSxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVNoRCxJQUFhLDZCQUE2QixxQ0FBMUMsTUFBYSw2QkFBOEIsU0FBUSxPQUFPO0lBQ3RELFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLGdCQUFnQixFQUFDLGlCQUFpQixFQUFDLFdBQVcsRUFBQyxnQkFBZ0IsRUFBQyxNQUFNLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLGVBQWUsRUFBQyxlQUFlLEVBQUMsS0FBSyxFQUFDLFlBQVksRUFBQyxzQkFBc0IsRUFBQyxVQUFVLEVBQUMsaUJBQWlCLEVBQUMsV0FBVyxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQyxrQkFBa0IsRUFBQyxhQUFhLEVB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RUFBQyxjQUFjLEVBQUMsYUFBYSxFQUFFO1FBQ3hOLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLCtCQUE2QixDQUFDLEVBQUMsQ0FBQztRQUM3RixRQUFRLEVBQUUsMkJBQTJCO0tBQ3hDLENBQUM7SUFJTyxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FIMUIsNkJBQTZCLENBZ0N6QztTQWhDWSw2QkFBNkI7QUFtQzFDLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsdURBQXVEO0FBQ3ZELHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDU3BhcmtsaW5lZGlzY3JldGUgZnJvbSAnLi4vZGlzdC9leHQtc3BhcmtsaW5lZGlzY3JldGUuY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ1NwYXJrbGluZWRpc2NyZXRlKCkpLnByb3BlcnRpZXMsXG4vL2ltcG9ydCBFV0NTcGFya2xpbmVkaXNjcmV0ZSBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljL2Rpc3QvZXh0LXNwYXJrbGluZWRpc2NyZXRlLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQgeyBFV0NTcGFya2xpbmVkaXNjcmV0ZSB9IGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLWNsYXNzaWMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vcnVudGltZS9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0U3BhcmtsaW5lZGlzY3JldGUnLFxuICAgIGlucHV0czogWydhTWUnLCAnaGVhZGVyJywgJ3JlbmRlcmVyJywgJ2xhYmVsJywnZml0VG9QYXJlbnQnLCd0YWInLCdjb25maWcnLCdwbGF0Zm9ybUNvbmZpZycsJ2V4dG5hbWUnLCd2aWV3cG9ydCcsJ2FsaWduJywncGx1Z2lucycsJ3Jlc3BvbnNpdmVDb25maWcnLCdyZXNwb25zaXZlRm9ybXVsYXMnLCdhcmlhQXR0cmlidXRlcycsJ2FyaWFEZXNjcmliZWRCeScsJ2FyaWFMYWJlbCcsJ2FyaWFMYWJlbGxlZEJ5JywnYmluZCcsJ2JvcmRlcicsJ2NoYXJ0UmFuZ2VDbGlwJywnY2hhcnRSYW5nZU1heCcsJ2NoYXJ0UmFuZ2VNaW4nLCdjbHMnLCdjb250cm9sbGVyJywnZGVmYXVsdExpc3RlbmVyU2NvcGUnLCdkaXNhYmxlZCcsJ2Rpc2FibGVUb29sdGlwcycsJ3VuZGVmaW5lZCcsJ2ZvY3VzQ2xzJywnaGVpZ2h0JywnaGlkZGVuJywnaGlkZU1vZGUnLCdoaWdobGlnaHRDb2xvcicsJ2hpZ2hsaWdodExpZ2h0ZW4nLCdpbnN0YW5jZUNscycsJ2tleU1hcCcsJ2tleU1hcEVuYWJsZWQnLCdrZXlNYXBUYXJnZXQnLCdsaW5lQ29sb3InLCdsaW5lSGVpZ2h0JywnbGlzdGVuZXJzJywnbWFyZ2luJywnbmFtZScsJ25hbWVhYmxlJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlbmRlclRvJywncmlwcGxlJywnc2Vzc2lvbicsJ3NoYXJlYWJsZU5hbWUnLCdzdHlsZScsJ3RocmVzaG9sZENvbG9yJywndGhyZXNob2xkVmFsdWUnLCd0aXBUcGwnLCd0b29sdGlwUHJlZml4JywndG9vbHRpcFNraXBOdWxsJywndG9vbHRpcFN1ZmZpeCcsJ3RvdWNoQWN0aW9uJywndHdvV2F5QmluZGFibGUnLCd1aScsJ3VzZXJDbHMnLCd2YWx1ZXMnLCd2aWV3TW9kZWwnLCd3aWR0aCcsXSxcbiAgICBvdXRwdXRzOiBbJ3JlYWR5JywnY3JlYXRlZCcsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnZGlzYWJsZWRjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFNwYXJrbGluZWRpc2NyZXRlQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0U3BhcmtsaW5lZGlzY3JldGVDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYXJpYUF0dHJpYnV0ZXMnLCdhcmlhRGVzY3JpYmVkQnknLCdhcmlhTGFiZWwnLCdhcmlhTGFiZWxsZWRCeScsJ2JpbmQnLCdib3JkZXInLCdjaGFydFJhbmdlQ2xpcCcsJ2NoYXJ0UmFuZ2VNYXgnLCdjaGFydFJhbmdlTWluJywnY2xzJywnY29udHJvbGxlcicsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlzYWJsZWQnLCdkaXNhYmxlVG9vbHRpcHMnLCd1bmRlZmluZWQnLCdmb2N1c0NscycsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaGlnaGxpZ2h0Q29sb3InLCdoaWdobGlnaHRMaWdodGVuJywnaW5zdGFuY2VDbHMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGluZUNvbG9yJywnbGluZUhlaWdodCcsJ2xpc3RlbmVycycsJ21hcmdpbicsJ25hbWUnLCduYW1lYWJsZScsJ3BsdWdpbnMnLCdwdWJsaXNoZXMnLCdyZWZlcmVuY2UnLCdyZW5kZXJUbycsJ3JpcHBsZScsJ3Nlc3Npb24nLCdzaGFyZWFibGVOYW1lJywnc3R5bGUnLCd0aHJlc2hvbGRDb2xvcicsJ3RocmVzaG9sZFZhbHVlJywndGlwVHBsJywndG9vbHRpcFByZWZpeCcsJ3Rvb2x0aXBTa2lwTnVsbCcsJ3Rvb2x0aXBTdWZmaXgnLCd0b3VjaEFjdGlvbicsJ3R3b1dheUJpbmRhYmxlJywndWknLCd1c2VyQ2xzJywndmFsdWVzJywndmlld01vZGVsJywnd2lkdGgnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ1NwYXJrbGluZWRpc2NyZXRlKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdjcmVhdGVkJywnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLCdiZWZvcmVoZWlnaHRjaGFuZ2UnLCdiZWZvcmVoaWRkZW5jaGFuZ2UnLCdiZWZvcmV3aWR0aGNoYW5nZScsJ2JsdXInLCdkaXNhYmxlZGNoYW5nZScsJ2ZvY3VzJywnZm9jdXNlbnRlcicsJ2ZvY3VzbGVhdmUnLCdoZWlnaHRjaGFuZ2UnLCdoaWRkZW5jaGFuZ2UnLCd3aWR0aGNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdzcGFya2xpbmVkaXNjcmV0ZSdcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdCgpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgdGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25EZXN0cm95KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkRlc3Ryb3koKVxuICAgIH1cbn1cblxuXG4vLyBmdW5jdGlvbiB0b1Bhc2NhbENhc2Uocykge1xuLy8gICAgIHJldHVybiBzLm1hdGNoKC9bYS16XSsvZ2kpXG4vLyAgICAgICAgIC5tYXAoZnVuY3Rpb24gKHdvcmQpIHtcbi8vICAgICAgICAgICAgIHJldHVybiB3b3JkLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgd29yZC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKVxuLy8gICAgICAgICB9KVxuLy8gICAgICAgICAuam9pbignJylcbi8vIH1cbi8vIHZhciBwYXNjYWxOYW1lID0gdG9QYXNjYWxDYXNlKHRhZ05hbWUpXG5cbi8vdmFyIGV2ZW50cyA9IChuZXcgRVdDU3BhcmtsaW5lZGlzY3JldGUoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==