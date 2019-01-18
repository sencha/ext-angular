/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
export class ExtAngularLaunchComponent {
    /**
     * @param {?} AppModule
     * @return {?}
     */
    bootstrapModule(AppModule) {
        console.log('launch');
        Ext.application({
            name: "$ExtAngularApp",
            quickTips: true,
            launch: () => {
                platformBrowserDynamic().bootstrapModule(AppModule)
                    .catch((err) => {
                    console.log(err);
                });
            }
        });
    }
}
ExtAngularLaunchComponent.decorators = [
    { type: Component, args: [{ selector: 'launch', template: '' }] }
];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItbGF1bmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWFuZ3VsYXItbGF1bmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQTtBQUcxRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUVuQyxlQUFlLENBQUMsU0FBUztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDZCxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDWCxzQkFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7cUJBQ2hELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7OztZQWZILFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tIFwiQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljXCJcblxuQENvbXBvbmVudCh7c2VsZWN0b3I6ICdsYXVuY2gnLHRlbXBsYXRlOiAnJ30pXG5leHBvcnQgY2xhc3MgRXh0QW5ndWxhckxhdW5jaENvbXBvbmVudCB7XG5cbiAgIGJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpIHtcbiAgICAgY29uc29sZS5sb2coJ2xhdW5jaCcpXG4gICAgIEV4dC5hcHBsaWNhdGlvbih7XG4gICAgICAgbmFtZTogXCIkRXh0QW5ndWxhckFwcFwiLFxuICAgICAgIHF1aWNrVGlwczogdHJ1ZSxcbiAgICAgICBsYXVuY2g6ICgpID0+IHtcbiAgICAgICAgIHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxuICAgICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgICAgfSlcbiAgICAgICB9XG4gICAgIH0pXG4gICB9XG5cbn0iXX0=