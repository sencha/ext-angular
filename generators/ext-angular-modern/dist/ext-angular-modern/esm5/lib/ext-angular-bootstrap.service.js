/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import * as i0 from "@angular/core";
var ExtAngularBootstrapService = /** @class */ (function () {
    function ExtAngularBootstrapService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    /**
     * @return {?}
     */
    ExtAngularBootstrapService.prototype.appendComponentToViewport = /**
     * @return {?}
     */
    function () {
        //console.log("In appendComponentToViewport")
        if (!this.bootstrapComponent) {
            throw new Error("Bootstrap component not set. Please use extAngularService.setBootStrapComponent(yourComponent) to setup bootstrap component from your root module constructor");
        }
        //console.log("bootstrapComponent : " + this.bootstrapComponent)
        /** @type {?} */
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.bootstrapComponent)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        /** @type {?} */
        var domElem = (/** @type {?} */ (((/** @type {?} */ (componentRef.hostView)))
            .rootNodes[0]));
        /** @type {?} */
        var root = document.getElementsByClassName('x-viewport-body-el')[0];
        root.appendChild(domElem);
    };
    /**
     * @param {?} component
     * @return {?}
     */
    ExtAngularBootstrapService.prototype.setBootStrapComponent = /**
     * @param {?} component
     * @return {?}
     */
    function (component) {
        //console.log("In setBootStrapComponent")
        this.bootstrapComponent = component;
    };
    ExtAngularBootstrapService.decorators = [
        { type: Injectable, args: [{
                    providedIn: 'root'
                },] }
    ];
    /** @nocollapse */
    ExtAngularBootstrapService.ctorParameters = function () { return [
        { type: ComponentFactoryResolver },
        { type: ApplicationRef },
        { type: Injector }
    ]; };
    /** @nocollapse */ ExtAngularBootstrapService.ngInjectableDef = i0.defineInjectable({ factory: function ExtAngularBootstrapService_Factory() { return new ExtAngularBootstrapService(i0.inject(i0.ComponentFactoryResolver), i0.inject(i0.ApplicationRef), i0.inject(i0.INJECTOR)); }, token: ExtAngularBootstrapService, providedIn: "root" });
    return ExtAngularBootstrapService;
}());
export { ExtAngularBootstrapService };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtYW5ndWxhci1ib290c3RyYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixRQUFRLEVBQ1Isd0JBQXdCLEVBRXhCLGNBQWMsRUFDYixNQUNFLGVBQWUsQ0FBQTs7QUFDcEI7SUFLRSxvQ0FDWSx3QkFBa0QsRUFDbEQsTUFBc0IsRUFDdEIsUUFBa0I7UUFGbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7Ozs7SUFDSCw4REFBeUI7OztJQUF6QjtRQUNFLDZDQUE2QztRQUM5QyxJQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0pBQStKLENBQUMsQ0FBQTtTQUNuTDs7O1lBRUssWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDL0MsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTs7WUFDdkMsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUM1RCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7O1lBQzFCLElBQUksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUNELDBEQUFxQjs7OztJQUFyQixVQUFzQixTQUFhO1FBQ2pDLHlDQUF5QztRQUN6QyxJQUFJLENBQUMsa0JBQWtCLEdBQUcsU0FBUyxDQUFBO0lBQ3JDLENBQUM7O2dCQTVCRixVQUFVLFNBQUM7b0JBQ1YsVUFBVSxFQUFFLE1BQU07aUJBQ25COzs7O2dCQVBDLHdCQUF3QjtnQkFFeEIsY0FBYztnQkFIZCxRQUFROzs7cUNBRlY7Q0FxQ0MsQUE3QkQsSUE2QkM7U0ExQlksMEJBQTBCOzs7SUFDckMsd0RBQXVCOzs7OztJQUVuQiw4REFBMEQ7Ozs7O0lBQzFELDRDQUE4Qjs7Ozs7SUFDOUIsOENBQTBCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSW5qZWN0b3IsXG4gIENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgRW1iZWRkZWRWaWV3UmVmLFxuICBBcHBsaWNhdGlvblJlZlxuICB9IFxuZnJvbSAnQGFuZ3VsYXIvY29yZSdcbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEV4dEFuZ3VsYXJCb290c3RyYXBTZXJ2aWNlIHtcbiAgYm9vdHN0cmFwQ29tcG9uZW50OiBhbnlcbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIGNvbXBvbmVudEZhY3RvcnlSZXNvbHZlcjogQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICAgICAgcHJpdmF0ZSBhcHBSZWY6IEFwcGxpY2F0aW9uUmVmLFxuICAgICAgcHJpdmF0ZSBpbmplY3RvcjogSW5qZWN0b3JcbiAgKSB7fVxuICAgYXBwZW5kQ29tcG9uZW50VG9WaWV3cG9ydCgpIHtcbiAgICAgLy9jb25zb2xlLmxvZyhcIkluIGFwcGVuZENvbXBvbmVudFRvVmlld3BvcnRcIilcbiAgICBpZighdGhpcy5ib290c3RyYXBDb21wb25lbnQpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQm9vdHN0cmFwIGNvbXBvbmVudCBub3Qgc2V0LiBQbGVhc2UgdXNlIGV4dEFuZ3VsYXJTZXJ2aWNlLnNldEJvb3RTdHJhcENvbXBvbmVudCh5b3VyQ29tcG9uZW50KSB0byBzZXR1cCBib290c3RyYXAgY29tcG9uZW50IGZyb20geW91ciByb290IG1vZHVsZSBjb25zdHJ1Y3RvclwiKVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKFwiYm9vdHN0cmFwQ29tcG9uZW50IDogXCIgKyB0aGlzLmJvb3RzdHJhcENvbXBvbmVudClcbiAgICBjb25zdCBjb21wb25lbnRSZWYgPSB0aGlzLmNvbXBvbmVudEZhY3RvcnlSZXNvbHZlclxuICAgICAgLnJlc29sdmVDb21wb25lbnRGYWN0b3J5KHRoaXMuYm9vdHN0cmFwQ29tcG9uZW50KVxuICAgICAgLmNyZWF0ZSh0aGlzLmluamVjdG9yKVxuICAgIHRoaXMuYXBwUmVmLmF0dGFjaFZpZXcoY29tcG9uZW50UmVmLmhvc3RWaWV3KVxuICAgIGNvbnN0IGRvbUVsZW0gPSAoY29tcG9uZW50UmVmLmhvc3RWaWV3IGFzIEVtYmVkZGVkVmlld1JlZjxhbnk+KVxuICAgICAgLnJvb3ROb2Rlc1swXSBhcyBIVE1MRWxlbWVudFxuICAgIHZhciByb290ID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgneC12aWV3cG9ydC1ib2R5LWVsJylbMF1cbiAgICByb290LmFwcGVuZENoaWxkKGRvbUVsZW0pXG4gIH1cbiAgc2V0Qm9vdFN0cmFwQ29tcG9uZW50KGNvbXBvbmVudDphbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiSW4gc2V0Qm9vdFN0cmFwQ29tcG9uZW50XCIpXG4gICAgdGhpcy5ib290c3RyYXBDb21wb25lbnQgPSBjb21wb25lbnRcbiAgfVxufSJdfQ==