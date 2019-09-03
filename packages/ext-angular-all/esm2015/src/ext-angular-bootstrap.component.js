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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItYWxsLyIsInNvdXJjZXMiOlsic3JjL2V4dC1hbmd1bGFyLWJvb3RzdHJhcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBLE9BQU8sRUFBRSxTQUFTLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFDMUMsT0FBTyxFQUFFLHNCQUFzQixFQUFFLE1BQU0sbUNBQW1DLENBQUM7QUFDM0UsT0FBTyxFQUFFLDBCQUEwQixFQUFFLE1BQU0saUNBQWlDLENBQUM7QUFNN0UsSUFBYSw0QkFBNEIsR0FBekMsTUFBYSw0QkFBNEI7SUFFdkMsWUFBb0IsaUJBQTZDO1FBQTdDLHNCQUFpQixHQUFqQixpQkFBaUIsQ0FBNEI7UUFDL0QsbUNBQW1DO1FBQ25DLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyx5QkFBeUIsRUFBRSxDQUFBO0lBQ3BELENBQUM7Q0FFRixDQUFBO0FBUFksNEJBQTRCO0lBSnhDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxVQUFVO1FBQ3BCLFFBQVEsRUFBRSxFQUFFO0tBQ2IsQ0FBQzs2Q0FHdUMsMEJBQTBCO0dBRnRELDRCQUE0QixDQU94QztTQVBZLDRCQUE0QjtBQVN6QyxNQUFNLFVBQVUsZUFBZSxDQUFDLFNBQVM7SUFDdkMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNkLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUUsR0FBRyxFQUFFO1lBQ1gsc0JBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO2lCQUNoRCxLQUFLLENBQUMsQ0FBQyxHQUFHLEVBQUUsRUFBRTtnQkFDYixPQUFPLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1lBQ2xCLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueTtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBFeHRBbmd1bGFyQm9vdHN0cmFwU2VydmljZSB9IGZyb20gJy4vZXh0LWFuZ3VsYXItYm9vdHN0cmFwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlOiBgYCxcbn0pXG5leHBvcnQgY2xhc3MgRXh0QW5ndWxhckJvb3RzdHJhcENvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4dEFuZ3VsYXJTZXJ2aWNlOiBFeHRBbmd1bGFyQm9vdHN0cmFwU2VydmljZSkge1xuICAgIC8vY29uc29sZS5sb2coXCJJbiBBcHAgY29uc3RydWN0b3JcIilcbiAgICB0aGlzLmV4dEFuZ3VsYXJTZXJ2aWNlLmFwcGVuZENvbXBvbmVudFRvVmlld3BvcnQoKVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpIHtcbiAgRXh0LmFwcGxpY2F0aW9uKHtcbiAgICBuYW1lOiBcIiRFeHRBbmd1bGFyQXBwXCIsXG4gICAgcXVpY2tUaXBzOiB0cnVlLFxuICAgIGxhdW5jaDogKCkgPT4ge1xuICAgICAgcGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgIH1cbiAgfSlcbn0iXX0=