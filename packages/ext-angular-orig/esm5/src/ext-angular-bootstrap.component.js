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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU03RTtJQUVFLHNDQUFvQixpQkFBNkM7UUFBN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QjtRQUMvRCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLENBQUE7SUFDcEQsQ0FBQztJQUxVLDRCQUE0QjtRQUp4QyxTQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsRUFBRTtTQUNiLENBQUM7aURBR3VDLDBCQUEwQjtPQUZ0RCw0QkFBNEIsQ0FPeEM7SUFBRCxtQ0FBQztDQUFBLEFBUEQsSUFPQztTQVBZLDRCQUE0QjtBQVN6QyxNQUFNLFVBQVUsZUFBZSxDQUFDLFNBQVM7SUFDdkMsR0FBRyxDQUFDLFdBQVcsQ0FBQztRQUNkLElBQUksRUFBRSxnQkFBZ0I7UUFDdEIsU0FBUyxFQUFFLElBQUk7UUFDZixNQUFNLEVBQUU7WUFDTixzQkFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7aUJBQ2hELEtBQUssQ0FBQyxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgRXh0OiBhbnk7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgRXh0QW5ndWxhckJvb3RzdHJhcFNlcnZpY2UgfSBmcm9tICcuL2V4dC1hbmd1bGFyLWJvb3RzdHJhcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIEV4dEFuZ3VsYXJCb290c3RyYXBDb21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBleHRBbmd1bGFyU2VydmljZTogRXh0QW5ndWxhckJvb3RzdHJhcFNlcnZpY2UpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiSW4gQXBwIGNvbnN0cnVjdG9yXCIpXG4gICAgdGhpcy5leHRBbmd1bGFyU2VydmljZS5hcHBlbmRDb21wb25lbnRUb1ZpZXdwb3J0KClcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKSB7XG4gIEV4dC5hcHBsaWNhdGlvbih7XG4gICAgbmFtZTogXCIkRXh0QW5ndWxhckFwcFwiLFxuICAgIHF1aWNrVGlwczogdHJ1ZSxcbiAgICBsYXVuY2g6ICgpID0+IHtcbiAgICAgIHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gIH0pXG59Il19