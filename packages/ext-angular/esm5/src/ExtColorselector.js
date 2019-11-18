import * as tslib_1 from "tslib";
//import EWCColorselector from '../dist/ext-colorselector.component.js';
//inputs: (new EWCColorselector()).properties,
import EWCColorselector from '@sencha/ext-web-components/dist/ext-colorselector.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
var ExtColorselectorComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtColorselectorComponent, _super);
    function ExtColorselectorComponent(eRef, hostComponent, vc) {
        var _this = _super.call(this, eRef, hostComponent, ['label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alphaDecimalFormat', 'cancelButtonText', 'color', 'fieldPad', 'fieldWidth', 'format', 'okButtonText', 'showOkCancelButtons', 'showPreviousColor', 'value',], (new EWCColorselector()).events, ['ready', 'cancel', 'change', 'ok',], vc) || this;
        _this.xtype = 'colorselector';
        return _this;
    }
    ExtColorselectorComponent_1 = ExtColorselectorComponent;
    ExtColorselectorComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtColorselectorComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtColorselectorComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtColorselectorComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtColorselectorComponent_1;
    ExtColorselectorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
        { type: ViewContainerRef }
    ]; };
    ExtColorselectorComponent = ExtColorselectorComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ExtColorselector',
            inputs: ['label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alphaDecimalFormat', 'cancelButtonText', 'color', 'fieldPad', 'fieldWidth', 'format', 'okButtonText', 'showOkCancelButtons', 'showPreviousColor', 'value',],
            outputs: ['ready', 'cancel', 'change', 'ok',],
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtColorselectorComponent_1; }) }],
            template: '<ng-content></ng-content>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
    ], ExtColorselectorComponent);
    return ExtColorselectorComponent;
}(EngBase));
export { ExtColorselectorComponent };
// function toPascalCase(s) {
//     return s.match(/[a-z]+/gi)
//         .map(function (word) {
//             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
//         })
//         .join('')
// }
// var pascalName = toPascalCase(tagName)
//var events = (new EWCColorselector()).eventnames;
//var eventnamesall = [];
//events.forEach( (event: any, n: any) => {
//    eventnamesall.push(event.name)
//})
//const distinct = (value, index, self) => {
//    //return true
//    return self.indexOf(value) === index;
//}
//var eventnames = eventnamesall.filter(distinct);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q29sb3JzZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0Q29sb3JzZWxlY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsd0VBQXdFO0FBQ3hFLDhDQUE4QztBQUM5QyxPQUFPLGdCQUFnQixNQUFNLGdFQUFnRSxDQUFDO0FBQzlGLE9BQU8sRUFDSCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFDUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFDVixnQkFBZ0IsRUFDakIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQVN4QztJQUErQyxxREFBTztJQUNsRCxtQ0FDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUh4QixZQUtJLGtCQUNJLElBQUksRUFDSixhQUFhLEVBQ2IsQ0FBQyxPQUFPLEVBQUMsYUFBYSxFQUFDLEtBQUssRUFBQyxRQUFRLEVBQUMsZ0JBQWdCLEVBQUMsU0FBUyxFQUFDLFVBQVUsRUFBQyxPQUFPLEVBQUMsU0FBUyxFQUFDLGtCQUFrQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLGtCQUFrQixFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDLFFBQVEsRUFBQyxjQUFjLEVBQUMscUJBQXFCLEVBQUMsbUJBQW1CLEVBQUMsT0FBTyxFQUFFLEVBQ3pSLENBQUMsSUFBSSxnQkFBZ0IsRUFBRSxDQUFDLENBQUMsTUFBTSxFQUMvQixDQUFDLE9BQU8sRUFBQyxRQUFRLEVBQUMsUUFBUSxFQUFDLElBQUksRUFBRSxFQUNqQyxFQUFFLENBQ0wsU0FFSjtRQURHLEtBQUksQ0FBQyxLQUFLLEdBQUcsZUFBZSxDQUFBOztJQUNoQyxDQUFDO2tDQWZRLHlCQUF5QjtJQWlCM0IsNENBQVEsR0FBZjtRQUNJLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sbURBQWUsR0FBdEI7UUFDSSxJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sK0NBQVcsR0FBbEIsVUFBbUIsT0FBTztRQUN0QixJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQy9CLENBQUM7SUFFTSwrQ0FBVyxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDOzs7Z0JBN0JTLFVBQVU7Z0JBQytCLE9BQU8sdUJBQXJELElBQUksWUFBSSxRQUFRLFlBQUksUUFBUTtnQkFDekIsZ0JBQWdCOztJQUpmLHlCQUF5QjtRQVByQyxTQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsa0JBQWtCO1lBQzVCLE1BQU0sRUFBRSxDQUFDLE9BQU8sRUFBQyxhQUFhLEVBQUMsS0FBSyxFQUFDLFFBQVEsRUFBQyxnQkFBZ0IsRUFBQyxTQUFTLEVBQUMsVUFBVSxFQUFDLE9BQU8sRUFBQyxTQUFTLEVBQUMsa0JBQWtCLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsa0JBQWtCLEVBQUMsT0FBTyxFQUFDLFVBQVUsRUFBQyxZQUFZLEVBQUMsUUFBUSxFQUFDLGNBQWMsRUFBQyxxQkFBcUIsRUFBQyxtQkFBbUIsRUFBQyxPQUFPLEVBQUU7WUFDalMsT0FBTyxFQUFFLENBQUMsT0FBTyxFQUFDLFFBQVEsRUFBQyxRQUFRLEVBQUMsSUFBSSxFQUFFO1lBQzFDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLGNBQU0sT0FBQSwyQkFBeUIsRUFBekIsQ0FBeUIsQ0FBQyxFQUFDLENBQUM7WUFDekYsUUFBUSxFQUFFLDJCQUEyQjtTQUN4QyxDQUFDO1FBSU8sbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO09BSDFCLHlCQUF5QixDQWdDckM7SUFBRCxnQ0FBQztDQUFBLEFBaENELENBQStDLE9BQU8sR0FnQ3JEO1NBaENZLHlCQUF5QjtBQW1DdEMsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHlDQUF5QztBQUV6QyxtREFBbUQ7QUFDbkQseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NDb2xvcnNlbGVjdG9yIGZyb20gJy4uL2Rpc3QvZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0NvbG9yc2VsZWN0b3IoKSkucHJvcGVydGllcyxcbmltcG9ydCBFV0NDb2xvcnNlbGVjdG9yIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzL2Rpc3QvZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzJztcbmltcG9ydCB7XG4gICAgSG9zdCxcbiAgICBPcHRpb25hbCxcbiAgICBTa2lwU2VsZixcbiAgICBDb21wb25lbnQsXG4gICAgRWxlbWVudFJlZixcbiAgICBmb3J3YXJkUmVmLFxuICAgIFZpZXdDb250YWluZXJSZWZcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2FuZ3VsYXJiYXNlJztcblxuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6ICdFeHRDb2xvcnNlbGVjdG9yJyxcbiAgICBpbnB1dHM6IFsnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FscGhhRGVjaW1hbEZvcm1hdCcsJ2NhbmNlbEJ1dHRvblRleHQnLCdjb2xvcicsJ2ZpZWxkUGFkJywnZmllbGRXaWR0aCcsJ2Zvcm1hdCcsJ29rQnV0dG9uVGV4dCcsJ3Nob3dPa0NhbmNlbEJ1dHRvbnMnLCdzaG93UHJldmlvdXNDb2xvcicsJ3ZhbHVlJyxdLFxuICAgIG91dHB1dHM6IFsncmVhZHknLCdjYW5jZWwnLCdjaGFuZ2UnLCdvaycsXSxcbiAgICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCl9XSxcbiAgICB0ZW1wbGF0ZTogJzxuZy1jb250ZW50PjwvbmctY29udGVudD4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENvbG9yc2VsZWN0b3JDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIHtcbiAgICBjb25zdHJ1Y3RvcihcbiAgICAgICAgZVJlZjogRWxlbWVudFJlZixcbiAgICAgICAgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBob3N0Q29tcG9uZW50OiBFbmdCYXNlLFxuICAgICAgICB2YzogVmlld0NvbnRhaW5lclJlZlxuICAgICAgICApIHtcbiAgICAgICAgc3VwZXIoXG4gICAgICAgICAgICBlUmVmLFxuICAgICAgICAgICAgaG9zdENvbXBvbmVudCxcbiAgICAgICAgICAgIFsnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FscGhhRGVjaW1hbEZvcm1hdCcsJ2NhbmNlbEJ1dHRvblRleHQnLCdjb2xvcicsJ2ZpZWxkUGFkJywnZmllbGRXaWR0aCcsJ2Zvcm1hdCcsJ29rQnV0dG9uVGV4dCcsJ3Nob3dPa0NhbmNlbEJ1dHRvbnMnLCdzaG93UHJldmlvdXNDb2xvcicsJ3ZhbHVlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NDb2xvcnNlbGVjdG9yKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdjYW5jZWwnLCdjaGFuZ2UnLCdvaycsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjb2xvcnNlbGVjdG9yJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NDb2xvcnNlbGVjdG9yKCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=