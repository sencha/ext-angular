var ExtColorselectorComponent_1;
import * as tslib_1 from "tslib";
//import EWCColorselector from '../dist/ext-colorselector.component.js';
//inputs: (new EWCColorselector()).properties,
import EWCColorselector from '@sencha/ext-web-components-modern/dist/ext-colorselector.component.js';
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef, ViewContainerRef } from '@angular/core';
import { EngBase } from './angularbase';
let ExtColorselectorComponent = ExtColorselectorComponent_1 = class ExtColorselectorComponent extends EngBase {
    constructor(eRef, hostComponent, vc) {
        super(eRef, hostComponent, ['header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alphaDecimalFormat', 'cancelButtonText', 'color', 'fieldPad', 'fieldWidth', 'format', 'okButtonText', 'showOkCancelButtons', 'showPreviousColor', 'value',], (new EWCColorselector()).events, ['ready', 'cancel', 'change', 'ok',], vc);
        this.xtype = 'colorselector';
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
ExtColorselectorComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] },
    { type: ViewContainerRef }
];
ExtColorselectorComponent = ExtColorselectorComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ExtColorselector',
        inputs: ['header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alphaDecimalFormat', 'cancelButtonText', 'color', 'fieldPad', 'fieldWidth', 'format', 'okButtonText', 'showOkCancelButtons', 'showPreviousColor', 'value',],
        outputs: ['ready', 'cancel', 'change', 'ok',],
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtColorselectorComponent_1) }],
        template: '<ng-content></ng-content>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf())
], ExtColorselectorComponent);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiRXh0Q29sb3JzZWxlY3Rvci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsic3JjL0V4dENvbG9yc2VsZWN0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSx3RUFBd0U7QUFDeEUsOENBQThDO0FBQzlDLE9BQU8sZ0JBQWdCLE1BQU0sdUVBQXVFLENBQUM7QUFDckcsT0FBTyxFQUNILElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUNSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGdCQUFnQixFQUNqQixNQUFNLGVBQWUsQ0FBQztBQUN6QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBU3hDLElBQWEseUJBQXlCLGlDQUF0QyxNQUFhLHlCQUEwQixTQUFRLE9BQU87SUFDbEQsWUFDSSxJQUFnQixFQUNnQixhQUFzQixFQUN0RCxFQUFvQjtRQUVwQixLQUFLLENBQ0QsSUFBSSxFQUNKLGFBQWEsRUFDYixDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxrQkFBa0IsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLHFCQUFxQixFQUFDLG1CQUFtQixFQUFDLE9BQU8sRUFBRSxFQUMvUyxDQUFDLElBQUksZ0JBQWdCLEVBQUUsQ0FBQyxDQUFDLE1BQU0sRUFDL0IsQ0FBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUUsRUFDakMsRUFBRSxDQUNMLENBQUE7UUFDRCxJQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQTtJQUNoQyxDQUFDO0lBRU0sUUFBUTtRQUNYLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQTtJQUNyQixDQUFDO0lBRU0sZUFBZTtRQUNsQixJQUFJLENBQUMsaUJBQWlCLEVBQUUsQ0FBQTtJQUM1QixDQUFDO0lBRU0sV0FBVyxDQUFDLE9BQU87UUFDdEIsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMvQixDQUFDO0lBRU0sV0FBVztRQUNkLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQTtJQUN4QixDQUFDO0NBQ0osQ0FBQTs7WUE5QmEsVUFBVTtZQUMrQixPQUFPLHVCQUFyRCxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7WUFDekIsZ0JBQWdCOztBQUpmLHlCQUF5QjtJQVByQyxTQUFTLENBQUM7UUFDUCxRQUFRLEVBQUUsa0JBQWtCO1FBQzVCLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFDLGFBQWEsRUFBQyxLQUFLLEVBQUMsUUFBUSxFQUFDLGdCQUFnQixFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsT0FBTyxFQUFDLFNBQVMsRUFBQyxrQkFBa0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxrQkFBa0IsRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLFlBQVksRUFBQyxRQUFRLEVBQUMsY0FBYyxFQUFDLHFCQUFxQixFQUFDLG1CQUFtQixFQUFDLE9BQU8sRUFBRTtRQUN2VCxPQUFPLEVBQUUsQ0FBQyxPQUFPLEVBQUMsUUFBUSxFQUFDLFFBQVEsRUFBQyxJQUFJLEVBQUU7UUFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsMkJBQXlCLENBQUMsRUFBQyxDQUFDO1FBQ3pGLFFBQVEsRUFBRSwyQkFBMkI7S0FDeEMsQ0FBQztJQUlPLG1CQUFBLElBQUksRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQTtHQUgxQix5QkFBeUIsQ0FnQ3JDO1NBaENZLHlCQUF5QjtBQW1DdEMsNkJBQTZCO0FBQzdCLGlDQUFpQztBQUNqQyxpQ0FBaUM7QUFDakMsaUZBQWlGO0FBQ2pGLGFBQWE7QUFDYixvQkFBb0I7QUFDcEIsSUFBSTtBQUNKLHlDQUF5QztBQUV6QyxtREFBbUQ7QUFDbkQseUJBQXlCO0FBQ3pCLDJDQUEyQztBQUMzQyxvQ0FBb0M7QUFDcEMsSUFBSTtBQUNKLDRDQUE0QztBQUM1QyxtQkFBbUI7QUFDbkIsMkNBQTJDO0FBQzNDLEdBQUc7QUFDSCxrREFBa0QiLCJzb3VyY2VzQ29udGVudCI6WyIvL2ltcG9ydCBFV0NDb2xvcnNlbGVjdG9yIGZyb20gJy4uL2Rpc3QvZXh0LWNvbG9yc2VsZWN0b3IuY29tcG9uZW50LmpzJztcbi8vaW5wdXRzOiAobmV3IEVXQ0NvbG9yc2VsZWN0b3IoKSkucHJvcGVydGllcyxcbmltcG9ydCBFV0NDb2xvcnNlbGVjdG9yIGZyb20gJ0BzZW5jaGEvZXh0LXdlYi1jb21wb25lbnRzLW1vZGVybi9kaXN0L2V4dC1jb2xvcnNlbGVjdG9yLmNvbXBvbmVudC5qcyc7XG5pbXBvcnQge1xuICAgIEhvc3QsXG4gICAgT3B0aW9uYWwsXG4gICAgU2tpcFNlbGYsXG4gICAgQ29tcG9uZW50LFxuICAgIEVsZW1lbnRSZWYsXG4gICAgZm9yd2FyZFJlZixcbiAgICBWaWV3Q29udGFpbmVyUmVmXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9hbmd1bGFyYmFzZSc7XG5cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiAnRXh0Q29sb3JzZWxlY3RvcicsXG4gICAgaW5wdXRzOiBbJ2hlYWRlcicsICdyZW5kZXJlcicsICdsYWJlbCcsJ2ZpdFRvUGFyZW50JywndGFiJywnY29uZmlnJywncGxhdGZvcm1Db25maWcnLCdleHRuYW1lJywndmlld3BvcnQnLCdhbGlnbicsJ3BsdWdpbnMnLCdyZXNwb25zaXZlQ29uZmlnJywncmVzcG9uc2l2ZUZvcm11bGFzJywnYWxwaGFEZWNpbWFsRm9ybWF0JywnY2FuY2VsQnV0dG9uVGV4dCcsJ2NvbG9yJywnZmllbGRQYWQnLCdmaWVsZFdpZHRoJywnZm9ybWF0Jywnb2tCdXR0b25UZXh0Jywnc2hvd09rQ2FuY2VsQnV0dG9ucycsJ3Nob3dQcmV2aW91c0NvbG9yJywndmFsdWUnLF0sXG4gICAgb3V0cHV0czogWydyZWFkeScsJ2NhbmNlbCcsJ2NoYW5nZScsJ29rJyxdLFxuICAgIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRDb2xvcnNlbGVjdG9yQ29tcG9uZW50KX1dLFxuICAgIHRlbXBsYXRlOiAnPG5nLWNvbnRlbnQ+PC9uZy1jb250ZW50Pidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Q29sb3JzZWxlY3RvckNvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBlUmVmOiBFbGVtZW50UmVmLFxuICAgICAgICBASG9zdCgpIEBPcHRpb25hbCgpIEBTa2lwU2VsZigpIGhvc3RDb21wb25lbnQ6IEVuZ0Jhc2UsXG4gICAgICAgIHZjOiBWaWV3Q29udGFpbmVyUmVmXG4gICAgICAgICkge1xuICAgICAgICBzdXBlcihcbiAgICAgICAgICAgIGVSZWYsXG4gICAgICAgICAgICBob3N0Q29tcG9uZW50LFxuICAgICAgICAgICAgWydoZWFkZXInLCAncmVuZGVyZXInLCAnbGFiZWwnLCdmaXRUb1BhcmVudCcsJ3RhYicsJ2NvbmZpZycsJ3BsYXRmb3JtQ29uZmlnJywnZXh0bmFtZScsJ3ZpZXdwb3J0JywnYWxpZ24nLCdwbHVnaW5zJywncmVzcG9uc2l2ZUNvbmZpZycsJ3Jlc3BvbnNpdmVGb3JtdWxhcycsJ2FscGhhRGVjaW1hbEZvcm1hdCcsJ2NhbmNlbEJ1dHRvblRleHQnLCdjb2xvcicsJ2ZpZWxkUGFkJywnZmllbGRXaWR0aCcsJ2Zvcm1hdCcsJ29rQnV0dG9uVGV4dCcsJ3Nob3dPa0NhbmNlbEJ1dHRvbnMnLCdzaG93UHJldmlvdXNDb2xvcicsJ3ZhbHVlJyxdLFxuICAgICAgICAgICAgKG5ldyBFV0NDb2xvcnNlbGVjdG9yKCkpLmV2ZW50cyxcbiAgICAgICAgICAgIFsncmVhZHknLCdjYW5jZWwnLCdjaGFuZ2UnLCdvaycsXSxcbiAgICAgICAgICAgIHZjXG4gICAgICAgIClcbiAgICAgICAgdGhpcy54dHlwZSA9ICdjb2xvcnNlbGVjdG9yJ1xuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICB0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcylcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uRGVzdHJveSgpXG4gICAgfVxufVxuXG5cbi8vIGZ1bmN0aW9uIHRvUGFzY2FsQ2FzZShzKSB7XG4vLyAgICAgcmV0dXJuIHMubWF0Y2goL1thLXpdKy9naSlcbi8vICAgICAgICAgLm1hcChmdW5jdGlvbiAod29yZCkge1xuLy8gICAgICAgICAgICAgcmV0dXJuIHdvcmQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB3b3JkLnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpXG4vLyAgICAgICAgIH0pXG4vLyAgICAgICAgIC5qb2luKCcnKVxuLy8gfVxuLy8gdmFyIHBhc2NhbE5hbWUgPSB0b1Bhc2NhbENhc2UodGFnTmFtZSlcblxuLy92YXIgZXZlbnRzID0gKG5ldyBFV0NDb2xvcnNlbGVjdG9yKCkpLmV2ZW50bmFtZXM7XG4vL3ZhciBldmVudG5hbWVzYWxsID0gW107XG4vL2V2ZW50cy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4vLyAgICBldmVudG5hbWVzYWxsLnB1c2goZXZlbnQubmFtZSlcbi8vfSlcbi8vY29uc3QgZGlzdGluY3QgPSAodmFsdWUsIGluZGV4LCBzZWxmKSA9PiB7XG4vLyAgICAvL3JldHVybiB0cnVlXG4vLyAgICByZXR1cm4gc2VsZi5pbmRleE9mKHZhbHVlKSA9PT0gaW5kZXg7XG4vL31cbi8vdmFyIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzYWxsLmZpbHRlcihkaXN0aW5jdCk7XG4iXX0=