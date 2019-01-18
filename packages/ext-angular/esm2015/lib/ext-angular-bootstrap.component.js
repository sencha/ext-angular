/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service';
export class ExtAngularBootstrapComponent {
    /**
     * @param {?} extAngularService
     */
    constructor(extAngularService) {
        this.extAngularService = extAngularService;
        //console.log("In App constructor")
        this.extAngularService.appendComponentToViewport();
    }
}
ExtAngularBootstrapComponent.decorators = [
    { type: Component, args: [{
                selector: 'app-root',
                template: ``
            }] }
];
/** @nocollapse */
ExtAngularBootstrapComponent.ctorParameters = () => [
    { type: ExtAngularBootstrapService }
];
if (false) {
    /**
     * @type {?}
     * @private
     */
    ExtAngularBootstrapComponent.prototype.extAngularService;
}
/**
 * @param {?} AppModule
 * @return {?}
 */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQU03RSxNQUFNLE9BQU8sNEJBQTRCOzs7O0lBRXZDLFlBQW9CLGlCQUE2QztRQUE3QyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQTRCO1FBQy9ELG1DQUFtQztRQUNuQyxJQUFJLENBQUMsaUJBQWlCLENBQUMseUJBQXlCLEVBQUUsQ0FBQTtJQUNwRCxDQUFDOzs7WUFURixTQUFTLFNBQUM7Z0JBQ1QsUUFBUSxFQUFFLFVBQVU7Z0JBQ3BCLFFBQVEsRUFBRSxFQUFFO2FBQ2I7Ozs7WUFMUSwwQkFBMEI7Ozs7Ozs7SUFRckIseURBQXFEOzs7Ozs7QUFPbkUsTUFBTSxVQUFVLGVBQWUsQ0FBQyxTQUFTO0lBQ3ZDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDZCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsTUFBTSxFQUFFLEdBQUcsRUFBRTtZQUNYLHNCQUFzQixFQUFFLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQztpQkFDaEQsS0FBSyxDQUFDLENBQUMsR0FBRyxFQUFFLEVBQUU7Z0JBQ2IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixDQUFDLENBQUMsQ0FBQTtRQUNOLENBQUM7S0FDRixDQUFDLENBQUE7QUFDSixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgRXh0OiBhbnk7XG5pbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IHBsYXRmb3JtQnJvd3NlckR5bmFtaWMgfSBmcm9tICdAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWMnO1xuaW1wb3J0IHsgRXh0QW5ndWxhckJvb3RzdHJhcFNlcnZpY2UgfSBmcm9tICcuL2V4dC1hbmd1bGFyLWJvb3RzdHJhcC5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXJvb3QnLFxuICB0ZW1wbGF0ZTogYGAsXG59KVxuZXhwb3J0IGNsYXNzIEV4dEFuZ3VsYXJCb290c3RyYXBDb21wb25lbnQge1xuICBcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBleHRBbmd1bGFyU2VydmljZTogRXh0QW5ndWxhckJvb3RzdHJhcFNlcnZpY2UpIHtcbiAgICAvL2NvbnNvbGUubG9nKFwiSW4gQXBwIGNvbnN0cnVjdG9yXCIpXG4gICAgdGhpcy5leHRBbmd1bGFyU2VydmljZS5hcHBlbmRDb21wb25lbnRUb1ZpZXdwb3J0KClcbiAgfVxuXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKSB7XG4gIEV4dC5hcHBsaWNhdGlvbih7XG4gICAgbmFtZTogXCIkRXh0QW5ndWxhckFwcFwiLFxuICAgIHF1aWNrVGlwczogdHJ1ZSxcbiAgICBsYXVuY2g6ICgpID0+IHtcbiAgICAgIHBsYXRmb3JtQnJvd3NlckR5bmFtaWMoKS5ib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKVxuICAgICAgICAuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGVycilcbiAgICAgICAgfSlcbiAgICB9XG4gIH0pXG59Il19