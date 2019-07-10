import * as tslib_1 from "tslib";
import { Injectable, Injector, ComponentFactoryResolver, ApplicationRef } from '@angular/core';
import * as i0 from "@angular/core";
let ExtAngularBootstrapService = class ExtAngularBootstrapService {
    constructor(componentFactoryResolver, appRef, injector) {
        this.componentFactoryResolver = componentFactoryResolver;
        this.appRef = appRef;
        this.injector = injector;
    }
    appendComponentToViewport() {
        //console.log("In appendComponentToViewport")
        if (!this.bootstrapComponent) {
            throw new Error("Bootstrap component not set. Please use extAngularService.setBootStrapComponent(yourComponent) to setup bootstrap component from your root module constructor");
        }
        //console.log("bootstrapComponent : " + this.bootstrapComponent)
        const componentRef = this.componentFactoryResolver
            .resolveComponentFactory(this.bootstrapComponent)
            .create(this.injector);
        this.appRef.attachView(componentRef.hostView);
        const domElem = componentRef.hostView
            .rootNodes[0];
        var root = document.getElementsByClassName('x-viewport-body-el')[0];
        root.appendChild(domElem);
    }
    setBootStrapComponent(component) {
        //console.log("In setBootStrapComponent")
        this.bootstrapComponent = component;
    }
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
export { ExtAngularBootstrapService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLnNlcnZpY2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1hbmd1bGFyLWJvb3RzdHJhcC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsVUFBVSxFQUNWLFFBQVEsRUFDUix3QkFBd0IsRUFFeEIsY0FBYyxFQUNiLE1BQ0UsZUFBZSxDQUFBOztBQUlwQixJQUFhLDBCQUEwQixHQUF2QyxNQUFhLDBCQUEwQjtJQUVyQyxZQUNZLHdCQUFrRCxFQUNsRCxNQUFzQixFQUN0QixRQUFrQjtRQUZsQiw2QkFBd0IsR0FBeEIsd0JBQXdCLENBQTBCO1FBQ2xELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQ3RCLGFBQVEsR0FBUixRQUFRLENBQVU7SUFDM0IsQ0FBQztJQUNILHlCQUF5QjtRQUN2Qiw2Q0FBNkM7UUFDOUMsSUFBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsRUFBRTtZQUN6QixNQUFNLElBQUksS0FBSyxDQUFDLCtKQUErSixDQUFDLENBQUE7U0FDbkw7UUFDRCxnRUFBZ0U7UUFDaEUsTUFBTSxZQUFZLEdBQUcsSUFBSSxDQUFDLHdCQUF3QjthQUMvQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsa0JBQWtCLENBQUM7YUFDaEQsTUFBTSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQTtRQUN4QixJQUFJLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxZQUFZLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDN0MsTUFBTSxPQUFPLEdBQUksWUFBWSxDQUFDLFFBQWlDO2FBQzVELFNBQVMsQ0FBQyxDQUFDLENBQWdCLENBQUE7UUFDOUIsSUFBSSxJQUFJLEdBQUcsUUFBUSxDQUFDLHNCQUFzQixDQUFDLG9CQUFvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDbkUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLENBQUMsQ0FBQTtJQUMzQixDQUFDO0lBQ0QscUJBQXFCLENBQUMsU0FBYTtRQUNqQyx5Q0FBeUM7UUFDekMsSUFBSSxDQUFDLGtCQUFrQixHQUFHLFNBQVMsQ0FBQTtJQUNyQyxDQUFDO0NBQ0YsQ0FBQTs7QUExQlksMEJBQTBCO0lBSHRDLFVBQVUsQ0FBQztRQUNWLFVBQVUsRUFBRSxNQUFNO0tBQ25CLENBQUM7NkNBSXNDLHdCQUF3QjtRQUMxQyxjQUFjO1FBQ1osUUFBUTtHQUxuQiwwQkFBMEIsQ0EwQnRDO1NBMUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEluamVjdG9yLFxuICBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsXG4gIEVtYmVkZGVkVmlld1JlZixcbiAgQXBwbGljYXRpb25SZWZcbiAgfSBcbmZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5ASW5qZWN0YWJsZSh7XG4gIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyQm9vdHN0cmFwU2VydmljZSB7XG4gIGJvb3RzdHJhcENvbXBvbmVudDogYW55XG4gIGNvbnN0cnVjdG9yKFxuICAgICAgcHJpdmF0ZSBjb21wb25lbnRGYWN0b3J5UmVzb2x2ZXI6IENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixcbiAgICAgIHByaXZhdGUgYXBwUmVmOiBBcHBsaWNhdGlvblJlZixcbiAgICAgIHByaXZhdGUgaW5qZWN0b3I6IEluamVjdG9yXG4gICkge31cbiAgIGFwcGVuZENvbXBvbmVudFRvVmlld3BvcnQoKSB7XG4gICAgIC8vY29uc29sZS5sb2coXCJJbiBhcHBlbmRDb21wb25lbnRUb1ZpZXdwb3J0XCIpXG4gICAgaWYoIXRoaXMuYm9vdHN0cmFwQ29tcG9uZW50KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIkJvb3RzdHJhcCBjb21wb25lbnQgbm90IHNldC4gUGxlYXNlIHVzZSBleHRBbmd1bGFyU2VydmljZS5zZXRCb290U3RyYXBDb21wb25lbnQoeW91ckNvbXBvbmVudCkgdG8gc2V0dXAgYm9vdHN0cmFwIGNvbXBvbmVudCBmcm9tIHlvdXIgcm9vdCBtb2R1bGUgY29uc3RydWN0b3JcIilcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhcImJvb3RzdHJhcENvbXBvbmVudCA6IFwiICsgdGhpcy5ib290c3RyYXBDb21wb25lbnQpXG4gICAgY29uc3QgY29tcG9uZW50UmVmID0gdGhpcy5jb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJcbiAgICAgIC5yZXNvbHZlQ29tcG9uZW50RmFjdG9yeSh0aGlzLmJvb3RzdHJhcENvbXBvbmVudClcbiAgICAgIC5jcmVhdGUodGhpcy5pbmplY3RvcilcbiAgICB0aGlzLmFwcFJlZi5hdHRhY2hWaWV3KGNvbXBvbmVudFJlZi5ob3N0VmlldylcbiAgICBjb25zdCBkb21FbGVtID0gKGNvbXBvbmVudFJlZi5ob3N0VmlldyBhcyBFbWJlZGRlZFZpZXdSZWY8YW55PilcbiAgICAgIC5yb290Tm9kZXNbMF0gYXMgSFRNTEVsZW1lbnRcbiAgICB2YXIgcm9vdCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3gtdmlld3BvcnQtYm9keS1lbCcpWzBdXG4gICAgcm9vdC5hcHBlbmRDaGlsZChkb21FbGVtKVxuICB9XG4gIHNldEJvb3RTdHJhcENvbXBvbmVudChjb21wb25lbnQ6YW55KSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkluIHNldEJvb3RTdHJhcENvbXBvbmVudFwiKVxuICAgIHRoaXMuYm9vdHN0cmFwQ29tcG9uZW50ID0gY29tcG9uZW50XG4gIH1cbn0iXX0=