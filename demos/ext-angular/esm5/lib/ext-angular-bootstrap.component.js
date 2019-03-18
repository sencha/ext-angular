/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { ExtAngularBootstrapService } from './ext-angular-bootstrap.service';
var ExtAngularBootstrapComponent = /** @class */ (function () {
    function ExtAngularBootstrapComponent(extAngularService) {
        this.extAngularService = extAngularService;
        //console.log("In App constructor")
        this.extAngularService.appendComponentToViewport();
    }
    ExtAngularBootstrapComponent.decorators = [
        { type: Component, args: [{
                    selector: 'app-root',
                    template: ""
                }] }
    ];
    /** @nocollapse */
    ExtAngularBootstrapComponent.ctorParameters = function () { return [
        { type: ExtAngularBootstrapService }
    ]; };
    return ExtAngularBootstrapComponent;
}());
export { ExtAngularBootstrapComponent };
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
        launch: (/**
         * @return {?}
         */
        function () {
            platformBrowserDynamic().bootstrapModule(AppModule)
                .catch((/**
             * @param {?} err
             * @return {?}
             */
            function (err) {
                console.log(err);
            }));
        })
    });
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWFuZ3VsYXItYm9vdHN0cmFwLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUMzRSxPQUFPLEVBQUUsMEJBQTBCLEVBQUUsTUFBTSxpQ0FBaUMsQ0FBQztBQUU3RTtJQU1FLHNDQUFvQixpQkFBNkM7UUFBN0Msc0JBQWlCLEdBQWpCLGlCQUFpQixDQUE0QjtRQUMvRCxtQ0FBbUM7UUFDbkMsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHlCQUF5QixFQUFFLENBQUE7SUFDcEQsQ0FBQzs7Z0JBVEYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxVQUFVO29CQUNwQixRQUFRLEVBQUUsRUFBRTtpQkFDYjs7OztnQkFMUSwwQkFBMEI7O0lBYW5DLG1DQUFDO0NBQUEsQUFYRCxJQVdDO1NBUFksNEJBQTRCOzs7Ozs7SUFFM0IseURBQXFEOzs7Ozs7QUFPbkUsTUFBTSxVQUFVLGVBQWUsQ0FBQyxTQUFTO0lBQ3ZDLEdBQUcsQ0FBQyxXQUFXLENBQUM7UUFDZCxJQUFJLEVBQUUsZ0JBQWdCO1FBQ3RCLFNBQVMsRUFBRSxJQUFJO1FBQ2YsTUFBTTs7O1FBQUU7WUFDTixzQkFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7aUJBQ2hELEtBQUs7Ozs7WUFBQyxVQUFDLEdBQUc7Z0JBQ1QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNsQixDQUFDLEVBQUMsQ0FBQTtRQUNOLENBQUMsQ0FBQTtLQUNGLENBQUMsQ0FBQTtBQUNKLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueTtcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gJ0Bhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pYyc7XG5pbXBvcnQgeyBFeHRBbmd1bGFyQm9vdHN0cmFwU2VydmljZSB9IGZyb20gJy4vZXh0LWFuZ3VsYXItYm9vdHN0cmFwLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtcm9vdCcsXG4gIHRlbXBsYXRlOiBgYCxcbn0pXG5leHBvcnQgY2xhc3MgRXh0QW5ndWxhckJvb3RzdHJhcENvbXBvbmVudCB7XG4gIFxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGV4dEFuZ3VsYXJTZXJ2aWNlOiBFeHRBbmd1bGFyQm9vdHN0cmFwU2VydmljZSkge1xuICAgIC8vY29uc29sZS5sb2coXCJJbiBBcHAgY29uc3RydWN0b3JcIilcbiAgICB0aGlzLmV4dEFuZ3VsYXJTZXJ2aWNlLmFwcGVuZENvbXBvbmVudFRvVmlld3BvcnQoKVxuICB9XG5cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpIHtcbiAgRXh0LmFwcGxpY2F0aW9uKHtcbiAgICBuYW1lOiBcIiRFeHRBbmd1bGFyQXBwXCIsXG4gICAgcXVpY2tUaXBzOiB0cnVlLFxuICAgIGxhdW5jaDogKCkgPT4ge1xuICAgICAgcGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXG4gICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICB9KVxuICAgIH1cbiAgfSlcbn0iXX0=