/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import * as i0 from "@angular/core";
export class ExtAngularBootstrapService {
    /**
     * @param {?} componentFactoryResolver
     * @param {?} appRef
     * @param {?} injector
     */
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    appendComponentToViewport() {
        //console.log("In appendComponentToViewport")
        if (!this.bootstrapComponent) {
            throw new Error("Bootstrap component not set. Please use extAngularService.setBootStrapComponent(yourComponent) to setup bootstrap component from your root module constructor");
        }
        //console.log("bootstrapComponent : " + this.bootstrapComponent)
        /** @type {?} */
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.bootstrapComponent)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        const domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        /** @type {?} */
        var root = document.getElementsByClassName('x-viewport-body-el')[0];
        root.appendChild(domElem);
    }
    /**
     * @param {?} component
     * @return {?}
     */
    setBootStrapComponent(component) {
        //console.log("In setBootStrapComponent")
        this.bootstrapComponent = component;
    }
}
ExtAngularBootstrapService.decorators = [
    { type: Injectable, args: [{
                providedIn: 'root'
            },] }
];
/** @nocollapse */
ExtAngularBootstrapService.ctorParameters = () => [
    { type: ComponentFactoryResolver },
    { type: ApplicationRef },
    { type: Injector }
];
/** @nocollapse */ ExtAngularBootstrapService.ngInjectableDef = i0.defineInjectable({ factory: function ExtAngularBootstrapService_Factory() { return new ExtAngularBootstrapService(i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR)); }, token: ExtAngularBootstrapService, providedIn: "root" });
if (false) {
    /** @type {?} */
    ExtAngularBootstrapService.prototype.bootstrapComponent;
    /**
     * @type {?}
     * @private
     */
    ExtAngularBootstrapService.prototype.componentFactoryResolver;
    /**
     * @type {?}
     * @private
     */
    ExtAngularBootstrapService.prototype.appRef;
    /**
     * @type {?}
     * @private
     */
    ExtAngularBootstrapService.prototype.injector;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1hbmd1bGFyLWJvb3RzdHJhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFFBQVEsRUFDUix3QkFBd0IsRUFFeEIsY0FBYyxFQUNiLE1BQ0UsZUFBZSxDQUFBOztBQUlwQixNQUFNLE9BQU8sMEJBQTBCOzs7Ozs7SUFFckMsWUFDWSx3QkFBa0QsRUFDbEQsTUFBc0IsRUFDdEIsUUFBa0I7UUFGbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7Ozs7SUFDSCx5QkFBeUI7UUFDdkIsNkNBQTZDO1FBQzlDLElBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQywrSkFBK0osQ0FBQyxDQUFBO1NBQ25MOzs7Y0FFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMvQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBOztjQUN2QyxPQUFPLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDO2FBQzVELFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTs7WUFDMUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzNCLENBQUM7Ozs7O0lBQ0QscUJBQXFCLENBQUMsU0FBYTtRQUNqQyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQTtJQUNyQyxDQUFDOzs7WUE1QkYsVUFBVSxTQUFDO2dCQUNWLFVBQVUsRUFBRSxNQUFNO2FBQ25COzs7O1lBUEMsd0JBQXdCO1lBRXhCLGNBQWM7WUFIZCxRQUFROzs7OztJQVVSLHdEQUF1Qjs7Ozs7SUFFbkIsOERBQTBEOzs7OztJQUMxRCw0Q0FBOEI7Ozs7O0lBQzlCLDhDQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWZcbiAgfSBcbmZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyQm9vdHN0cmFwU2VydmljZSB7XG4gIGJvb3RzdHJhcENvbXBvbmVudDogYW55XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cbiAgIGFwcGVuZENvbXBvbmVudFRvVmlld3BvcnQoKSB7XG4gICAgIC8vY29uc29sZS5sb2coXCJJbiBhcHBlbmRDb21wb25lbnRUb1ZpZXdwb3J0XCIpXG4gICAgaWYoIXRoaXMuYm9vdHN0cmFwQ29tcG9uZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCBjb21wb25lbnQgbm90IHNldC4gUGxlYXNlIHVzZSBleHRBbmd1bGFyU2VydmljZS5zZXRCb290U3RyYXBDb21wb25lbnQoeW91ckNvbXBvbmVudCkgdG8gc2V0dXAgYm9vdHN0cmFwIGNvbXBvbmVudCBmcm9tIHlvdXIgcm9vdCBtb2R1bGUgY29uc3RydWN0b3JcIilcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhcImJvb3RzdHJhcENvbXBvbmVudCA6IFwiICsgdGhpcy5ib290c3RyYXBDb21wb25lbnQpXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmJvb3RzdHJhcENvbXBvbmVudClcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3RvcilcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0VmlldylcbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnRcbiAgICB2YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3gtdmlld3BvcnQtYm9keS1lbCcpWzBdXG4gICAgcm9vdC5hcHBlbmRDaGlsZChkb21FbGVtKVxuICB9XG4gIHNldEJvb3RTdHJhcENvbXBvbmVudChjb21wb25lbnQ6YW55KSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkluIHNldEJvb3RTdHJhcENvbXBvbmVudFwiKVxuICAgIHRoaXMuYm9vdHN0cmFwQ29tcG9uZW50ID0gY29tcG9uZW50XG4gIH1cbn0iXX0=