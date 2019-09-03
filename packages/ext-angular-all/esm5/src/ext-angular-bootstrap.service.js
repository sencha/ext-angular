import * as tslib_1 from "tslib";
import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import * as i0 from "@angular/core";
var ExtAngularBootstrapService = /** @class */ (function () {
    function ExtAngularBootstrapService(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    ExtAngularBootstrapService.prototype.appendComponentToViewport = function () {
        //console.log("In appendComponentToViewport")
        if (!this.bootstrapComponent) {
            throw new Error("Bootstrap component not set. Please use extAngularService.setBootStrapComponent(yourComponent) to setup bootstrap component from your root module constructor");
        }
        //console.log("bootstrapComponent : " + this.bootstrapComponent)
        var componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.bootstrapComponent)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        var domElem = componentRef.hostView
            .rootNodes[0];
        var root = document.getElementsByClassName('x-viewport-body-el')[0];
        root.appendChild(domElem);
    };
    ExtAngularBootstrapService.prototype.setBootStrapComponent = function (component) {
        //console.log("In setBootStrapComponent")
        this.bootstrapComponent = component;
    };
    ExtAngularBootstrapService.ngInjectableDef = i0.ɵɵdefineInjectable({ factory: function ExtAngularBootstrapService_Factory() { return new ExtAngularBootstrapService(i0.ɵɵinject(i0.ComponentFactoryResolver), i0.ɵɵinject(i0.ApplicationRef), i0.ɵɵinject(i0.INJECTOR)); }, token: ExtAngularBootstrapService, providedIn: "root" });
    ExtAngularBootstrapService = tslib_1.__decorate([
        Injectable({
            providedIn: 'root'
        }),
        tslib_1.__metadata("design:paramtypes", [ComponentFactoryResolver,
            ApplicationRef,
            Injector])
    ], ExtAngularBootstrapService);
    return ExtAngularBootstrapService;
}());
export { ExtAngularBootstrapService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWFsbC8iLCJzb3VyY2VzIjpbInNyYy9leHQtYW5ndWxhci1ib290c3RyYXAuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNMLFVBQVUsRUFDVixRQUFRLEVBQ1Isd0JBQXdCLEVBRXhCLGNBQWMsRUFDYixNQUNFLGVBQWUsQ0FBQTs7QUFJcEI7SUFFRSxvQ0FDWSx3QkFBa0QsRUFDbEQsTUFBc0IsRUFDdEIsUUFBa0I7UUFGbEIsNkJBQXdCLEdBQXhCLHdCQUF3QixDQUEwQjtRQUNsRCxXQUFNLEdBQU4sTUFBTSxDQUFnQjtRQUN0QixhQUFRLEdBQVIsUUFBUSxDQUFVO0lBQzNCLENBQUM7SUFDSCw4REFBeUIsR0FBekI7UUFDRSw2Q0FBNkM7UUFDOUMsSUFBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLCtKQUErSixDQUFDLENBQUE7U0FDbkw7UUFDRCxnRUFBZ0U7UUFDaEUsSUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMvQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDN0MsSUFBTSxPQUFPLEdBQUksWUFBWSxDQUFDLFFBQWlDO2FBQzVELFNBQVMsQ0FBQyxDQUFDLENBQWdCLENBQUE7UUFDOUIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBQ0QsMERBQXFCLEdBQXJCLFVBQXNCLFNBQWE7UUFDakMseUNBQXlDO1FBQ3pDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxTQUFTLENBQUE7SUFDckMsQ0FBQzs7SUF6QlUsMEJBQTBCO1FBSHRDLFVBQVUsQ0FBQztZQUNWLFVBQVUsRUFBRSxNQUFNO1NBQ25CLENBQUM7aURBSXNDLHdCQUF3QjtZQUMxQyxjQUFjO1lBQ1osUUFBUTtPQUxuQiwwQkFBMEIsQ0EwQnRDO3FDQXJDRDtDQXFDQyxBQTFCRCxJQTBCQztTQTFCWSwwQkFBMEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBJbmplY3RvcixcbiAgQ29tcG9uZW50RmFjdG9yeVJlc29sdmVyLFxuICBFbWJlZGRlZFZpZXdSZWYsXG4gIEFwcGxpY2F0aW9uUmVmXG4gIH0gXG5mcm9tICdAYW5ndWxhci9jb3JlJ1xuQEluamVjdGFibGUoe1xuICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgRXh0QW5ndWxhckJvb3RzdHJhcFNlcnZpY2Uge1xuICBib290c3RyYXBDb21wb25lbnQ6IGFueVxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHByaXZhdGUgY29tcG9uZW50RmFjdG9yeVJlc29sdmVyOiBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gICAgICBwcml2YXRlIGFwcFJlZjogQXBwbGljYXRpb25SZWYsXG4gICAgICBwcml2YXRlIGluamVjdG9yOiBJbmplY3RvclxuICApIHt9XG4gICBhcHBlbmRDb21wb25lbnRUb1ZpZXdwb3J0KCkge1xuICAgICAvL2NvbnNvbGUubG9nKFwiSW4gYXBwZW5kQ29tcG9uZW50VG9WaWV3cG9ydFwiKVxuICAgIGlmKCF0aGlzLmJvb3RzdHJhcENvbXBvbmVudCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJCb290c3RyYXAgY29tcG9uZW50IG5vdCBzZXQuIFBsZWFzZSB1c2UgZXh0QW5ndWxhclNlcnZpY2Uuc2V0Qm9vdFN0cmFwQ29tcG9uZW50KHlvdXJDb21wb25lbnQpIHRvIHNldHVwIGJvb3RzdHJhcCBjb21wb25lbnQgZnJvbSB5b3VyIHJvb3QgbW9kdWxlIGNvbnN0cnVjdG9yXCIpXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coXCJib290c3RyYXBDb21wb25lbnQgOiBcIiArIHRoaXMuYm9vdHN0cmFwQ29tcG9uZW50KVxuICAgIGNvbnN0IGNvbXBvbmVudFJlZiA9IHRoaXMuY29tcG9uZW50RmFjdG9yeVJlc29sdmVyXG4gICAgICAucmVzb2x2ZUNvbXBvbmVudEZhY3RvcnkodGhpcy5ib290c3RyYXBDb21wb25lbnQpXG4gICAgICAuY3JlYXRlKHRoaXMuaW5qZWN0b3IpXG4gICAgdGhpcy5hcHBSZWYuYXR0YWNoVmlldyhjb21wb25lbnRSZWYuaG9zdFZpZXcpXG4gICAgY29uc3QgZG9tRWxlbSA9IChjb21wb25lbnRSZWYuaG9zdFZpZXcgYXMgRW1iZWRkZWRWaWV3UmVmPGFueT4pXG4gICAgICAucm9vdE5vZGVzWzBdIGFzIEhUTUxFbGVtZW50XG4gICAgdmFyIHJvb3QgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd4LXZpZXdwb3J0LWJvZHktZWwnKVswXVxuICAgIHJvb3QuYXBwZW5kQ2hpbGQoZG9tRWxlbSlcbiAgfVxuICBzZXRCb290U3RyYXBDb21wb25lbnQoY29tcG9uZW50OmFueSkge1xuICAgIC8vY29uc29sZS5sb2coXCJJbiBzZXRCb290U3RyYXBDb21wb25lbnRcIilcbiAgICB0aGlzLmJvb3RzdHJhcENvbXBvbmVudCA9IGNvbXBvbmVudFxuICB9XG59Il19