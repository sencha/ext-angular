/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtYW5ndWxhci1ib290c3RyYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixRQUFRLEVBQ1Isd0JBQXdCLEVBRXhCLGNBQWMsRUFDYixNQUNFLGVBQWUsQ0FBQTs7QUFJcEIsTUFBTSxPQUFPLDBCQUEwQjs7Ozs7O0lBRXJDLFlBQ1ksd0JBQWtELEVBQ2xELE1BQXNCLEVBQ3RCLFFBQWtCO1FBRmxCLDZCQUF3QixHQUF4Qix3QkFBd0IsQ0FBMEI7UUFDbEQsV0FBTSxHQUFOLE1BQU0sQ0FBZ0I7UUFDdEIsYUFBUSxHQUFSLFFBQVEsQ0FBVTtJQUMzQixDQUFDOzs7O0lBQ0gseUJBQXlCO1FBQ3ZCLDZDQUE2QztRQUM5QyxJQUFHLENBQUMsSUFBSSxDQUFDLGtCQUFrQixFQUFFO1lBQ3pCLE1BQU0sSUFBSSxLQUFLLENBQUMsK0pBQStKLENBQUMsQ0FBQTtTQUNuTDs7O2NBRUssWUFBWSxHQUFHLElBQUksQ0FBQyx3QkFBd0I7YUFDL0MsdUJBQXVCLENBQUMsSUFBSSxDQUFDLGtCQUFrQixDQUFDO2FBQ2hELE1BQU0sQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDO1FBQ3hCLElBQUksQ0FBQyxNQUFNLENBQUMsVUFBVSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsQ0FBQTs7Y0FDdkMsT0FBTyxHQUFHLG1CQUFBLENBQUMsbUJBQUEsWUFBWSxDQUFDLFFBQVEsRUFBd0IsQ0FBQzthQUM1RCxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQWU7O1lBQzFCLElBQUksR0FBRyxRQUFRLENBQUMsc0JBQXNCLENBQUMsb0JBQW9CLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzQixDQUFDOzs7OztJQUNELHFCQUFxQixDQUFDLFNBQWE7UUFDakMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUE7SUFDckMsQ0FBQzs7O1lBNUJGLFVBQVUsU0FBQztnQkFDVixVQUFVLEVBQUUsTUFBTTthQUNuQjs7OztZQVBDLHdCQUF3QjtZQUV4QixjQUFjO1lBSGQsUUFBUTs7Ozs7SUFVUix3REFBdUI7Ozs7O0lBRW5CLDhEQUEwRDs7Ozs7SUFDMUQsNENBQThCOzs7OztJQUM5Qiw4Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEFwcGxpY2F0aW9uUmVmXG4gIH0gXG5mcm9tICdAYW5ndWxhci9jb3JlJ1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXh0QW5ndWxhckJvb3RzdHJhcFNlcnZpY2Uge1xuICBib290c3RyYXBDb21wb25lbnQ6IGFueVxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG4gICBhcHBlbmRDb21wb25lbnRUb1ZpZXdwb3J0KCkge1xuICAgICAvL2NvbnNvbGUubG9nKFwiSW4gYXBwZW5kQ29tcG9uZW50VG9WaWV3cG9ydFwiKVxuICAgIGlmKCF0aGlzLmJvb3RzdHJhcENvbXBvbmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAgY29tcG9uZW50IG5vdCBzZXQuIFBsZWFzZSB1c2UgZXh0QW5ndWxhclNlcnZpY2Uuc2V0Qm9vdFN0cmFwQ29tcG9uZW50KHlvdXJDb21wb25lbnQpIHRvIHNldHVwIGJvb3RzdHJhcCBjb21wb25lbnQgZnJvbSB5b3VyIHJvb3QgbW9kdWxlIGNvbnN0cnVjdG9yXCIpXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coXCJib290c3RyYXBDb21wb25lbnQgOiBcIiArIHRoaXMuYm9vdHN0cmFwQ29tcG9uZW50KVxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5ib290c3RyYXBDb21wb25lbnQpXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50XG4gICAgdmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd4LXZpZXdwb3J0LWJvZHktZWwnKVswXVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9tRWxlbSlcbiAgfVxuICBzZXRCb290U3RyYXBDb21wb25lbnQoY29tcG9uZW50OmFueSkge1xuICAgIC8vY29uc29sZS5sb2coXCJJbiBzZXRCb290U3RyYXBDb21wb25lbnRcIilcbiAgICB0aGlzLmJvb3RzdHJhcENvbXBvbmVudCA9IGNvbXBvbmVudFxuICB9XG59Il19