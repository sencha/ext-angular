var ExtRatingComponent_1;
import { __decorate, __param } from "tslib";
//import EWCRating from '../dist/ext-rating.component.js';
//inputs: (new EWCRating()).properties,
//import EWCRating from '@sencha/ext-web-components-classic/dist/ext-rating.component.js';
import { EWCRating } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './runtime/angularbase';
let ExtRatingComponent = ExtRatingComponent_1 = class ExtRatingComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'animate', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'undefined', 'family', 'focusCls', 'glyphs', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'limit', 'listeners', 'margin', 'minimum', 'name', 'nameable', 'overStyle', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'rounding', 'scale', 'selectedStyle', 'session', 'shareableName', 'style', 'tip', 'tooltipText', 'touchAction', 'trackingValue', 'trackOver', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width',], (new EWCRating()).events, ['ready', 'created', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'widthchange',], vc);
        this.xtype = 'rating';
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
ExtRatingComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtRatingComponent = ExtRatingComponent_1 = __decorate([
    Component({
        selector: 'ExtRating',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'animate', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'bind', 'border', 'cls', 'controller', 'defaultListenerScope', 'disabled', 'undefined', 'family', 'focusCls', 'glyphs', 'height', 'hidden', 'hideMode', 'instanceCls', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'limit', 'listeners', 'margin', 'minimum', 'name', 'nameable', 'overStyle', 'plugins', 'publishes', 'reference', 'renderTo', 'ripple', 'rounding', 'scale', 'selectedStyle', 'session', 'shareableName', 'style', 'tip', 'tooltipText', 'touchAction', 'trackingValue', 'trackOver', 'twoWayBindable', 'ui', 'userCls', 'value', 'viewModel', 'width',],
        outputs: ['ready', 'created', 'beforedisabledchange', 'beforeheightchange', 'beforehiddenchange', 'beforewidthchange', 'blur', 'disabledchange', 'focus', 'focusenter', 'focusleave', 'heightchange', 'hiddenchange', 'widthchange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtRatingComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtRatingComponent);
export { ExtRatingComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCRating()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0UmF0aW5nLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dFJhdGluZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsMEZBQTBGO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSx1QkFBdUIsQ0FBQztBQVNoRCxJQUFhLGtCQUFrQiwwQkFBL0IsTUFBYSxrQkFBbUIsU0FBUSxPQUFPO0lBQzNDLFlBQ0ksSUFBZ0IsRUFDZ0IsYUFBc0IsRUFDdEQsRUFBb0I7UUFFcEIsS0FBSyxDQUNELElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxLQUFLLEVBQUUsUUFBUSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLFNBQVMsRUFBQyxnQkFBZ0IsRUFBQyxpQkFBaUIsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxLQUFLLEVBQUMsWUFBWSxFQUFDLHNCQUFzQixFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsYUFBYSxFQUFDLFFBQVEsRUFBQyxlQUFlLEVBQUMsY0FBYyxFQUFDLE9BQU8sRUFBQyxXQUFXLEVBQUMsUUFBUSxFQUFD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QUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLG9CQUFrQixDQUFDLEVBQUMsQ0FBQztRQUNsRixRQUFRLEVBQUUsMkJBQTJCO0tBQ3hDLENBQUM7SUFJTyxXQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLFdBQUEsUUFBUSxFQUFFLENBQUE7R0FIMUIsa0JBQWtCLENBZ0M5QjtTQWhDWSxrQkFBa0I7QUFtQy9CLDZCQUE2QjtBQUM3QixpQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLGlGQUFpRjtBQUNqRixhQUFhO0FBQ2Isb0JBQW9CO0FBQ3BCLElBQUk7QUFDSix5Q0FBeUM7QUFFekMsNENBQTRDO0FBQzVDLHlCQUF5QjtBQUN6QiwyQ0FBMkM7QUFDM0Msb0NBQW9DO0FBQ3BDLElBQUk7QUFDSiw0Q0FBNEM7QUFDNUMsbUJBQW1CO0FBQ25CLDJDQUEyQztBQUMzQyxHQUFHO0FBQ0gsa0RBQWtEIiwic291cmNlc0NvbnRlbnQiOlsiLy9pbXBvcnQgRVdDUmF0aW5nIGZyb20gJy4uL2Rpc3QvZXh0LXJhdGluZy5jb21wb25lbnQuanMnO1xuLy9pbnB1dHM6IChuZXcgRVdDUmF0aW5nKCkpLnByb3BlcnRpZXMsXG4vL2ltcG9ydCBFV0NSYXRpbmcgZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYy9kaXN0L2V4dC1yYXRpbmcuY29tcG9uZW50LmpzJztcbmltcG9ydCB7IEVXQ1JhdGluZyB9IGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLWNsYXNzaWMnO1xuaW1wb3J0IHtcbiAgICBIb3N0LFxuICAgIE9wdGlvbmFsLFxuICAgIFNraXBTZWxmLFxuICAgIENvbXBvbmVudCxcbiAgICBFbGVtZW50UmVmLFxuICAgIGZvcndhcmRSZWYsXG4gICAgVmlld0NvbnRhaW5lclJlZlxuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vcnVudGltZS9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0UmF0aW5nJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYW5pbWF0ZScsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdiaW5kJywnYm9yZGVyJywnY2xzJywnY29udHJvbGxlcicsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlzYWJsZWQnLCd1bmRlZmluZWQnLCdmYW1pbHknLCdmb2N1c0NscycsJ2dseXBocycsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaW5zdGFuY2VDbHMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGltaXQnLCdsaXN0ZW5lcnMnLCdtYXJnaW4nLCdtaW5pbXVtJywnbmFtZScsJ25hbWVhYmxlJywnb3ZlclN0eWxlJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlbmRlclRvJywncmlwcGxlJywncm91bmRpbmcnLCdzY2FsZScsJ3NlbGVjdGVkU3R5bGUnLCdzZXNzaW9uJywnc2hhcmVhYmxlTmFtZScsJ3N0eWxlJywndGlwJywndG9vbHRpcFRleHQnLCd0b3VjaEFjdGlvbicsJ3RyYWNraW5nVmFsdWUnLCd0cmFja092ZXInLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3ZhbHVlJywndmlld01vZGVsJywnd2lkdGgnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2NyZWF0ZWQnLCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsJ2JlZm9yZWhlaWdodGNoYW5nZScsJ2JlZm9yZWhpZGRlbmNoYW5nZScsJ2JlZm9yZXdpZHRoY2hhbmdlJywnYmx1cicsJ2Rpc2FibGVkY2hhbmdlJywnZm9jdXMnLCdmb2N1c2VudGVyJywnZm9jdXNsZWF2ZScsJ2hlaWdodGNoYW5nZScsJ2hpZGRlbmNoYW5nZScsJ3dpZHRoY2hhbmdlJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRSYXRpbmdDb21wb25lbnQpfV0sXG4gICAgdGVtcGxhdGU6ICc8bmctY29udGVudD48L25nLWNvbnRlbnQ+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRSYXRpbmdDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYW5pbWF0ZScsJ2FyaWFBdHRyaWJ1dGVzJywnYXJpYURlc2NyaWJlZEJ5JywnYXJpYUxhYmVsJywnYXJpYUxhYmVsbGVkQnknLCdiaW5kJywnYm9yZGVyJywnY2xzJywnY29udHJvbGxlcicsJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJywnZGlzYWJsZWQnLCd1bmRlZmluZWQnLCdmYW1pbHknLCdmb2N1c0NscycsJ2dseXBocycsJ2hlaWdodCcsJ2hpZGRlbicsJ2hpZGVNb2RlJywnaW5zdGFuY2VDbHMnLCdrZXlNYXAnLCdrZXlNYXBFbmFibGVkJywna2V5TWFwVGFyZ2V0JywnbGltaXQnLCdsaXN0ZW5lcnMnLCdtYXJnaW4nLCdtaW5pbXVtJywnbmFtZScsJ25hbWVhYmxlJywnb3ZlclN0eWxlJywncGx1Z2lucycsJ3B1Ymxpc2hlcycsJ3JlZmVyZW5jZScsJ3JlbmRlclRvJywncmlwcGxlJywncm91bmRpbmcnLCdzY2FsZScsJ3NlbGVjdGVkU3R5bGUnLCdzZXNzaW9uJywnc2hhcmVhYmxlTmFtZScsJ3N0eWxlJywndGlwJywndG9vbHRpcFRleHQnLCd0b3VjaEFjdGlvbicsJ3RyYWNraW5nVmFsdWUnLCd0cmFja092ZXInLCd0d29XYXlCaW5kYWJsZScsJ3VpJywndXNlckNscycsJ3ZhbHVlJywndmlld01vZGVsJywnd2lkdGgnLF0sXG4gICAgICAgICAgICAobmV3IEVXQ1JhdGluZygpKS5ldmVudHMsXG4gICAgICAgICAgICBbJ3JlYWR5JywnY3JlYXRlZCcsJ2JlZm9yZWRpc2FibGVkY2hhbmdlJywnYmVmb3JlaGVpZ2h0Y2hhbmdlJywnYmVmb3JlaGlkZGVuY2hhbmdlJywnYmVmb3Jld2lkdGhjaGFuZ2UnLCdibHVyJywnZGlzYWJsZWRjaGFuZ2UnLCdmb2N1cycsJ2ZvY3VzZW50ZXInLCdmb2N1c2xlYXZlJywnaGVpZ2h0Y2hhbmdlJywnaGlkZGVuY2hhbmdlJywnd2lkdGhjaGFuZ2UnLF0sXG4gICAgICAgICAgICB2Y1xuICAgICAgICApXG4gICAgICAgIHRoaXMueHR5cGUgPSAncmF0aW5nJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NSYXRpbmcoKSkuZXZlbnRuYW1lcztcbi8vdmFyIGV2ZW50bmFtZXNhbGwgPSBbXTtcbi8vZXZlbnRzLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgIGV2ZW50bmFtZXNhbGwucHVzaChldmVudC5uYW1lKVxuLy99KVxuLy9jb25zdCBkaXN0aW5jdCA9ICh2YWx1ZSwgaW5kZXgsIHNlbGYpID0+IHtcbi8vICAgIC8vcmV0dXJuIHRydWVcbi8vICAgIHJldHVybiBzZWxmLmluZGV4T2YodmFsdWUpID09PSBpbmRleDtcbi8vfVxuLy92YXIgZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXNhbGwuZmlsdGVyKGRpc3RpbmN0KTtcbiJdfQ==