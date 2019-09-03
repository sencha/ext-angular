import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service';
var ExtAngularBootstrapComponent = /** @class */ (function () {
    function ExtAngularBootstrapComponent(extAngularService) {
        this.extAngularService = extAngularService;
        //console.log("In App constructor")
        this.extAngularService.appendComponentToViewport();
    }
    ExtAngularBootstrapComponent = tslib_1.__decorate([
        Component({
            selector: 'app-root',
            template: ""
        }),
        tslib_1.__metadata("design:paramtypes", [ExtAngularBootstrapService])
    ], ExtAngularBootstrapComponent);
    return ExtAngularBootstrapComponent;
}());
export { ExtAngularBootstrapComponent };
export function bootstrapModule(AppModule) {
    Ext.application({
        name: "$ExtAngularApp",
        quickTips: true,
        launch: function () {
            platformBrowserDynamic().bootstrapModule(AppModule)
                .catch(function (err) {
                console.log(err);
            });
        }
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItYWxsLyIsInNvdXJjZXMiOlsic3JjL2V4dC1hbmd1bGFyLWJvb3RzdHJhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNN0U7SUFFRSxzQ0FBb0IsaUJBQTZDO1FBQTdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFDL0QsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxDQUFBO0lBQ3BELENBQUM7SUFMVSw0QkFBNEI7UUFKeEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLFVBQVU7WUFDcEIsUUFBUSxFQUFFLEVBQUU7U0FDYixDQUFDO2lEQUd1QywwQkFBMEI7T0FGdEQsNEJBQTRCLENBT3hDO0lBQUQsbUNBQUM7Q0FBQSxBQVBELElBT0M7U0FQWSw0QkFBNEI7QUFTekMsTUFBTSxVQUFVLGVBQWUsQ0FBQyxTQUFTO0lBQ3ZDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDZCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsTUFBTSxFQUFFO1lBQ04sc0JBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO2lCQUNoRCxLQUFLLENBQUMsVUFBQyxHQUFHO2dCQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55O1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IEV4dEFuZ3VsYXJCb290c3RyYXBTZXJ2aWNlIH0gZnJvbSAnLi9leHQtYW5ndWxhci1ib290c3RyYXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGU6IGBgLFxufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyQm9vdHN0cmFwQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXh0QW5ndWxhclNlcnZpY2U6IEV4dEFuZ3VsYXJCb290c3RyYXBTZXJ2aWNlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkluIEFwcCBjb25zdHJ1Y3RvclwiKVxuICAgIHRoaXMuZXh0QW5ndWxhclNlcnZpY2UuYXBwZW5kQ29tcG9uZW50VG9WaWV3cG9ydCgpXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSkge1xuICBFeHQuYXBwbGljYXRpb24oe1xuICAgIG5hbWU6IFwiJEV4dEFuZ3VsYXJBcHBcIixcbiAgICBxdWlja1RpcHM6IHRydWUsXG4gICAgbGF1bmNoOiAoKSA9PiB7XG4gICAgICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuICB9KVxufSJdfQ==