var ExtAxis3dComponent_1;
import { __decorate, __param } from "tslib";
//import EWCAxis3d from '../dist/ext-axis3d.component.js';
//inputs: (new EWCAxis3d()).properties,
//import EWCAxis3d from '@sencha/ext-web-components-classic/dist/ext-axis3d.component.js';
import { EWCAxis3d } from '@sencha/ext-web-components-classic';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtAxis3dComponent = ExtAxis3dComponent_1 = class ExtAxis3dComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'adjustByMajorUnit', 'background', 'center', 'chart', 'depth', 'expandRangeBy', 'fields', 'floating', 'grid', 'hidden', 'id', 'label', 'layout', 'length', 'limits', 'linkedTo', 'listeners', 'majorTickSteps', 'margin', 'maximum', 'maxZoom', 'minimum', 'minorTickSteps', 'minZoom', 'needHighPrecision', 'position', 'radius', 'reconcileRange', 'renderer', 'rotation', 'segmenter', 'style', 'title', 'titleMargin', 'totalAngle', 'visibleRange',], (new EWCAxis3d()).events, ['ready', 'rangechange', 'visiblerangechange',], vc);
        this.xtype = 'axis3d';
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
ExtAxis3dComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtAxis3dComponent = ExtAxis3dComponent_1 = __decorate([
    Component({
        selector: 'ExtAxis3d',
        inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'adjustByMajorUnit', 'background', 'center', 'chart', 'depth', 'expandRangeBy', 'fields', 'floating', 'grid', 'hidden', 'id', 'label', 'layout', 'length', 'limits', 'linkedTo', 'listeners', 'majorTickSteps', 'margin', 'maximum', 'maxZoom', 'minimum', 'minorTickSteps', 'minZoom', 'needHighPrecision', 'position', 'radius', 'reconcileRange', 'renderer', 'rotation', 'segmenter', 'style', 'title', 'titleMargin', 'totalAngle', 'visibleRange',],
        outputs: ['ready', 'rangechange', 'visiblerangechange',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtAxis3dComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf())
], ExtAxis3dComponent);
export { ExtAxis3dComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCAxis3d()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0QXhpczNkLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1jbGFzc2ljLyIsInNvdXJjZXMiOlsic3JjL0V4dEF4aXMzZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDBEQUEwRDtBQUMxRCx1Q0FBdUM7QUFDdkMsMEZBQTBGO0FBQzFGLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxvQ0FBb0MsQ0FBQztBQUMvRCxPQUFPLEVBQ0gsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsU0FBUyxFQUNULFVBQVUsRUFDVixVQUFVLEVBQ1YsZ0JBQWdCLEVBQ2pCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxPQUFPLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFTeEMsSUFBYSxrQkFBa0IsMEJBQS9CLE1BQWEsa0JBQW1CLFNBQVEsT0FBTztJQUMzQyxZQUNJLElBQWdCLEVBQ2dCLGFBQXNCLEVBQ3RELEVBQW9CO1FBRXBCLEtBQUssQ0FDRCxJQUFJLEVBQ0osYUFBYSxFQUNiLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxtQkFBbUIsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUUsRUFDempCLENBQUMsSUFBSSxTQUFTLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFDeEIsQ0FBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLG9CQUFvQixFQUFFLEVBQzdDLEVBQUUsQ0FDTCxDQUFBO1FBQ0QsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUE7SUFDekIsQ0FBQztJQUVNLFFBQVE7UUFDWCxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7SUFDckIsQ0FBQztJQUVNLGVBQWU7UUFDbEIsSUFBSSxDQUFDLGlCQUFpQixFQUFFLENBQUE7SUFDNUIsQ0FBQztJQUVNLFdBQVcsQ0FBQyxPQUFPO1FBQ3RCLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUE7SUFDL0IsQ0FBQztJQUVNLFdBQVc7UUFDZCxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUE7SUFDeEIsQ0FBQztDQUNKLENBQUE7O1lBOUJhLFVBQVU7WUFDK0IsT0FBTyx1QkFBckQsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFRO1lBQ3pCLGdCQUFnQjs7QUFKZixrQkFBa0I7SUFQOUIsU0FBUyxDQUFDO1FBQ1AsUUFBUSxFQUFFLFdBQVc7UUFDckIsTUFBTSxFQUFFLENBQUMsS0FBSyxFQUFFLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxtQkFBbUIsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsZUFBZSxFQUFDLFFBQVEsRUFBQyxVQUFVLEVBQUMsTUFBTSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLFVBQVUsRUFBQyxXQUFXLEVBQUMsZ0JBQWdCLEVBQUMsUUFBUSxFQUFDLFNBQVMsRUFBQyxTQUFTLEVBQUMsU0FBUyxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxtQkFBbUIsRUFBQyxVQUFVLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsV0FBVyxFQUFDLE9BQU8sRUFBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLFlBQVksRUFBQyxjQUFjLEVBQUU7UUFDamtCLE9BQU8sRUFBRSxDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsb0JBQW9CLEVBQUU7UUFDdEQsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsb0JBQWtCLENBQUMsRUFBQyxDQUFDO1FBQ2xGLFFBQVEsRUFBRSwyQkFBMkI7S0FDeEMsQ0FBQztJQUlPLFdBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxXQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsV0FBQSxRQUFRLEVBQUUsQ0FBQTtHQUgxQixrQkFBa0IsQ0FnQzlCO1NBaENZLGtCQUFrQjtBQW1DL0IsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHlDQUF5QztBQUV6Qyw0Q0FBNEM7QUFDNUMseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NBeGlzM2QgZnJvbSAnLi4vZGlzdC9leHQtYXhpczNkLmNvbXBvbmVudC5qcyc7XG4vL2lucHV0czogKG5ldyBFV0NBeGlzM2QoKSkucHJvcGVydGllcyxcbi8vaW1wb3J0IEVXQ0F4aXMzZCBmcm9tICdAc2VuY2hhL2V4dC13ZWItY29tcG9uZW50cy1jbGFzc2ljL2Rpc3QvZXh0LWF4aXMzZC5jb21wb25lbnQuanMnO1xuaW1wb3J0IHsgRVdDQXhpczNkIH0gZnJvbSAnQHNlbmNoYS9leHQtd2ViLWNvbXBvbmVudHMtY2xhc3NpYyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0QXhpczNkJyxcbiAgICBpbnB1dHM6IFsnYU1lJywgJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWRqdXN0QnlNYWpvclVuaXQnLCdiYWNrZ3JvdW5kJywnY2VudGVyJywnY2hhcnQnLCdkZXB0aCcsJ2V4cGFuZFJhbmdlQnknLCdmaWVsZHMnLCdmbG9hdGluZycsJ2dyaWQnLCdoaWRkZW4nLCdpZCcsJ2xhYmVsJywnbGF5b3V0JywnbGVuZ3RoJywnbGltaXRzJywnbGlua2VkVG8nLCdsaXN0ZW5lcnMnLCdtYWpvclRpY2tTdGVwcycsJ21hcmdpbicsJ21heGltdW0nLCdtYXhab29tJywnbWluaW11bScsJ21pbm9yVGlja1N0ZXBzJywnbWluWm9vbScsJ25lZWRIaWdoUHJlY2lzaW9uJywncG9zaXRpb24nLCdyYWRpdXMnLCdyZWNvbmNpbGVSYW5nZScsJ3JlbmRlcmVyJywncm90YXRpb24nLCdzZWdtZW50ZXInLCdzdHlsZScsJ3RpdGxlJywndGl0bGVNYXJnaW4nLCd0b3RhbEFuZ2xlJywndmlzaWJsZVJhbmdlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdyYW5nZWNoYW5nZScsJ3Zpc2libGVyYW5nZWNoYW5nZScsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QXhpczNkQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QXhpczNkQ29tcG9uZW50IGV4dGVuZHMgRW5nQmFzZSB7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZSxcbiAgICAgICAgdmM6IFZpZXdDb250YWluZXJSZWZcbiAgICAgICAgKSB7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBbJ2FNZScsICdoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FkanVzdEJ5TWFqb3JVbml0JywnYmFja2dyb3VuZCcsJ2NlbnRlcicsJ2NoYXJ0JywnZGVwdGgnLCdleHBhbmRSYW5nZUJ5JywnZmllbGRzJywnZmxvYXRpbmcnLCdncmlkJywnaGlkZGVuJywnaWQnLCdsYWJlbCcsJ2xheW91dCcsJ2xlbmd0aCcsJ2xpbWl0cycsJ2xpbmtlZFRvJywnbGlzdGVuZXJzJywnbWFqb3JUaWNrU3RlcHMnLCdtYXJnaW4nLCdtYXhpbXVtJywnbWF4Wm9vbScsJ21pbmltdW0nLCdtaW5vclRpY2tTdGVwcycsJ21pblpvb20nLCduZWVkSGlnaFByZWNpc2lvbicsJ3Bvc2l0aW9uJywncmFkaXVzJywncmVjb25jaWxlUmFuZ2UnLCdyZW5kZXJlcicsJ3JvdGF0aW9uJywnc2VnbWVudGVyJywnc3R5bGUnLCd0aXRsZScsJ3RpdGxlTWFyZ2luJywndG90YWxBbmdsZScsJ3Zpc2libGVSYW5nZScsXSxcbiAgICAgICAgICAgIChuZXcgRVdDQXhpczNkKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdyYW5nZWNoYW5nZScsJ3Zpc2libGVyYW5nZWNoYW5nZScsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdheGlzM2QnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG5cblxuLy8gZnVuY3Rpb24gdG9QYXNjYWxDYXNlKHMpIHtcbi8vICAgICByZXR1cm4gcy5tYXRjaCgvW2Etel0rL2dpKVxuLy8gICAgICAgICAubWFwKGZ1bmN0aW9uICh3b3JkKSB7XG4vLyAgICAgICAgICAgICByZXR1cm4gd29yZC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHdvcmQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKClcbi8vICAgICAgICAgfSlcbi8vICAgICAgICAgLmpvaW4oJycpXG4vLyB9XG4vLyB2YXIgcGFzY2FsTmFtZSA9IHRvUGFzY2FsQ2FzZSh0YWdOYW1lKVxuXG4vL3ZhciBldmVudHMgPSAobmV3IEVXQ0F4aXMzZCgpKS5ldmVudG5hbWVzO1xuLy92YXIgZXZlbnRuYW1lc2FsbCA9IFtdO1xuLy9ldmVudHMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgZXZlbnRuYW1lc2FsbC5wdXNoKGV2ZW50Lm5hbWUpXG4vL30pXG4vL2NvbnN0IGRpc3RpbmN0ID0gKHZhbHVlLCBpbmRleCwgc2VsZikgPT4ge1xuLy8gICAgLy9yZXR1cm4gdHJ1ZVxuLy8gICAgcmV0dXJuIHNlbGYuaW5kZXhPZih2YWx1ZSkgPT09IGluZGV4O1xuLy99XG4vL3ZhciBldmVudG5hbWVzID0gZXZlbnRuYW1lc2FsbC5maWx0ZXIoZGlzdGluY3QpO1xuIl19