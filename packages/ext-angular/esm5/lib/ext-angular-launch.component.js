/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
var ExtAngularLaunchComponent = /** @class */ (function () {
    function ExtAngularLaunchComponent() {
    }
    /**
     * @param {?} AppModule
     * @return {?}
     */
    ExtAngularLaunchComponent.prototype.bootstrapModule = /**
     * @param {?} AppModule
     * @return {?}
     */
    function (AppModule) {
        console.log('launch');
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
    };
    ExtAngularLaunchComponent.decorators = [
        { type: Component, args: [{ selector: 'launch', template: '' }] }
    ];
    return ExtAngularLaunchComponent;
}());
export { ExtAngularLaunchComponent };
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItbGF1bmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWFuZ3VsYXItbGF1bmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQTtBQUUxRTtJQUFBO0lBaUJBLENBQUM7Ozs7O0lBZEUsbURBQWU7Ozs7SUFBZixVQUFnQixTQUFTO1FBQ3ZCLE9BQU8sQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7UUFDckIsR0FBRyxDQUFDLFdBQVcsQ0FBQztZQUNkLElBQUksRUFBRSxnQkFBZ0I7WUFDdEIsU0FBUyxFQUFFLElBQUk7WUFDZixNQUFNLEVBQUU7Z0JBQ04sc0JBQXNCLEVBQUUsQ0FBQyxlQUFlLENBQUMsU0FBUyxDQUFDO3FCQUNoRCxLQUFLLENBQUMsVUFBQyxHQUFHO29CQUNULE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7O2dCQWZILFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQzs7SUFpQjVDLGdDQUFDO0NBQUEsQUFqQkQsSUFpQkM7U0FoQlkseUJBQXlCO0FBZ0JyQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgRXh0OiBhbnlcbmltcG9ydCB7IENvbXBvbmVudCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgcGxhdGZvcm1Ccm93c2VyRHluYW1pYyB9IGZyb20gXCJAYW5ndWxhci9wbGF0Zm9ybS1icm93c2VyLWR5bmFtaWNcIlxuXG5AQ29tcG9uZW50KHtzZWxlY3RvcjogJ2xhdW5jaCcsdGVtcGxhdGU6ICcnfSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyTGF1bmNoQ29tcG9uZW50IHtcblxuICAgYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSkge1xuICAgICBjb25zb2xlLmxvZygnbGF1bmNoJylcbiAgICAgRXh0LmFwcGxpY2F0aW9uKHtcbiAgICAgICBuYW1lOiBcIiRFeHRBbmd1bGFyQXBwXCIsXG4gICAgICAgcXVpY2tUaXBzOiB0cnVlLFxuICAgICAgIGxhdW5jaDogKCkgPT4ge1xuICAgICAgICAgcGxhdGZvcm1Ccm93c2VyRHluYW1pYygpLmJvb3RzdHJhcE1vZHVsZShBcHBNb2R1bGUpXG4gICAgICAgICAgIC5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICAgY29uc29sZS5sb2coZXJyKVxuICAgICAgICAgICB9KVxuICAgICAgIH1cbiAgICAgfSlcbiAgIH1cblxufTtcblxuIl19