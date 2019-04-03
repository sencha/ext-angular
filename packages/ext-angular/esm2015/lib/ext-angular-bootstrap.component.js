import * as tslib_1 from "tslib";
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service';
let ExtAngularBootstrapComponent = class ExtAngularBootstrapComponent {
    constructor(extAngularService) {
        this.extAngularService = extAngularService;
        //console.log("In App constructor")
        this.extAngularService.appendComponentToViewport();
    }
};
ExtAngularBootstrapComponent = tslib_1.__decorate([
    Component({
        selector: 'app-root',
        template: ``
    }),
    tslib_1.__metadata("design:paramtypes", [ExtAngularBootstrapService])
], ExtAngularBootstrapComponent);
export { ExtAngularBootstrapComponent };
export function bootstrapModule(AppModule) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU03RSxJQUFhLDRCQUE0QixHQUF6QyxNQUFhLDRCQUE0QjtJQUV2QyxZQUFvQixpQkFBNkM7UUFBN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QjtRQUMvRCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLENBQUE7SUFDcEQsQ0FBQztDQUVGLENBQUE7QUFQWSw0QkFBNEI7SUFKeEMsU0FBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFVBQVU7UUFDcEIsUUFBUSxFQUFFLEVBQUU7S0FDYixDQUFDOzZDQUd1QywwQkFBMEI7R0FGdEQsNEJBQTRCLENBT3hDO1NBUFksNEJBQTRCO0FBU3pDLE1BQU0sVUFBVSxlQUFlLENBQUMsU0FBUztJQUN2QyxHQUFHLENBQUMsV0FBVyxDQUFDO1FBQ2QsSUFBSSxFQUFFLGdCQUFnQjtRQUN0QixTQUFTLEVBQUUsSUFBSTtRQUNmLE1BQU0sRUFBRSxHQUFHLEVBQUU7WUFDWCxzQkFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7aUJBQ2hELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO2dCQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7WUFDbEIsQ0FBQyxDQUFDLENBQUE7UUFDTixDQUFDO0tBQ0YsQ0FBQyxDQUFBO0FBQ0osQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55O1xuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSAnQGFuZ3VsYXIvcGxhdGZvcm0tYnJvd3Nlci1keW5hbWljJztcbmltcG9ydCB7IEV4dEFuZ3VsYXJCb290c3RyYXBTZXJ2aWNlIH0gZnJvbSAnLi9leHQtYW5ndWxhci1ib290c3RyYXAuc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1yb290JyxcbiAgdGVtcGxhdGU6IGBgLFxufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyQm9vdHN0cmFwQ29tcG9uZW50IHtcbiAgXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZXh0QW5ndWxhclNlcnZpY2U6IEV4dEFuZ3VsYXJCb290c3RyYXBTZXJ2aWNlKSB7XG4gICAgLy9jb25zb2xlLmxvZyhcIkluIEFwcCBjb25zdHJ1Y3RvclwiKVxuICAgIHRoaXMuZXh0QW5ndWxhclNlcnZpY2UuYXBwZW5kQ29tcG9uZW50VG9WaWV3cG9ydCgpXG4gIH1cblxufVxuXG5leHBvcnQgZnVuY3Rpb24gYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSkge1xuICBFeHQuYXBwbGljYXRpb24oe1xuICAgIG5hbWU6IFwiJEV4dEFuZ3VsYXJBcHBcIixcbiAgICBxdWlja1RpcHM6IHRydWUsXG4gICAgbGF1bmNoOiAoKSA9PiB7XG4gICAgICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcbiAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgIH0pXG4gICAgfVxuICB9KVxufSJdfQ==