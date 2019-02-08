/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1hbmd1bGFyLWJvb3RzdHJhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFFBQVEsRUFDUix3QkFBd0IsRUFFeEIsY0FBYyxFQUNiLE1BQ0UsZUFBZSxDQUFBOztBQUNwQjtJQUtFLG9DQUNZLHdCQUFrRCxFQUNsRCxNQUFzQixFQUN0QixRQUFrQjtRQUZsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQzs7OztJQUNILDhEQUF5Qjs7O0lBQXpCO1FBQ0UsNkNBQTZDO1FBQzlDLElBQUcsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQywrSkFBK0osQ0FBQyxDQUFBO1NBQ25MOzs7WUFFSyxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMvQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUM7UUFDeEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLFFBQVEsQ0FBQyxDQUFBOztZQUN2QyxPQUFPLEdBQUcsbUJBQUEsQ0FBQyxtQkFBQSxZQUFZLENBQUMsUUFBUSxFQUF3QixDQUFDO2FBQzVELFNBQVMsQ0FBQyxDQUFDLENBQUMsRUFBZTs7WUFDMUIsSUFBSSxHQUFHLFFBQVEsQ0FBQyxzQkFBc0IsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sQ0FBQyxDQUFBO0lBQzNCLENBQUM7Ozs7O0lBQ0QsMERBQXFCOzs7O0lBQXJCLFVBQXNCLFNBQWE7UUFDakMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUE7SUFDckMsQ0FBQzs7Z0JBNUJGLFVBQVUsU0FBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkI7Ozs7Z0JBUEMsd0JBQXdCO2dCQUV4QixjQUFjO2dCQUhkLFFBQVE7OztxQ0FGVjtDQXFDQyxBQTdCRCxJQTZCQztTQTFCWSwwQkFBMEI7OztJQUNyQyx3REFBdUI7Ozs7O0lBRW5CLDhEQUEwRDs7Ozs7SUFDMUQsNENBQThCOzs7OztJQUM5Qiw4Q0FBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEFwcGxpY2F0aW9uUmVmXG4gIH0gXG5mcm9tICdAYW5ndWxhci9jb3JlJ1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXh0QW5ndWxhckJvb3RzdHJhcFNlcnZpY2Uge1xuICBib290c3RyYXBDb21wb25lbnQ6IGFueVxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG4gICBhcHBlbmRDb21wb25lbnRUb1ZpZXdwb3J0KCkge1xuICAgICAvL2NvbnNvbGUubG9nKFwiSW4gYXBwZW5kQ29tcG9uZW50VG9WaWV3cG9ydFwiKVxuICAgIGlmKCF0aGlzLmJvb3RzdHJhcENvbXBvbmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAgY29tcG9uZW50IG5vdCBzZXQuIFBsZWFzZSB1c2UgZXh0QW5ndWxhclNlcnZpY2Uuc2V0Qm9vdFN0cmFwQ29tcG9uZW50KHlvdXJDb21wb25lbnQpIHRvIHNldHVwIGJvb3RzdHJhcCBjb21wb25lbnQgZnJvbSB5b3VyIHJvb3QgbW9kdWxlIGNvbnN0cnVjdG9yXCIpXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coXCJib290c3RyYXBDb21wb25lbnQgOiBcIiArIHRoaXMuYm9vdHN0cmFwQ29tcG9uZW50KVxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5ib290c3RyYXBDb21wb25lbnQpXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50XG4gICAgdmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd4LXZpZXdwb3J0LWJvZHktZWwnKVswXVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9tRWxlbSlcbiAgfVxuICBzZXRCb290U3RyYXBDb21wb25lbnQoY29tcG9uZW50OmFueSkge1xuICAgIC8vY29uc29sZS5sb2coXCJJbiBzZXRCb290U3RyYXBDb21wb25lbnRcIilcbiAgICB0aGlzLmJvb3RzdHJhcENvbXBvbmVudCA9IGNvbXBvbmVudFxuICB9XG59Il19