/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { Component } from '@angular/core';
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
export class ExtAngularLaunchComponent {
    /**
     * @param {?} AppModule
     * @return {?}
     */
    bootstrapModule(AppModule) {
        console.log('launch');
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
}
ExtAngularLaunchComponent.decorators = [
    { type: Component, args: [{ selector: 'launch', template: '' }] }
];
;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItbGF1bmNoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvZXh0LWFuZ3VsYXItbGF1bmNoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUFFLFNBQVMsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUMxQyxPQUFPLEVBQUUsc0JBQXNCLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQTtBQUcxRSxNQUFNLE9BQU8seUJBQXlCOzs7OztJQUVuQyxlQUFlLENBQUMsU0FBUztRQUN2QixPQUFPLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO1FBQ3JCLEdBQUcsQ0FBQyxXQUFXLENBQUM7WUFDZCxJQUFJLEVBQUUsZ0JBQWdCO1lBQ3RCLFNBQVMsRUFBRSxJQUFJO1lBQ2YsTUFBTSxFQUFFLEdBQUcsRUFBRTtnQkFDWCxzQkFBc0IsRUFBRSxDQUFDLGVBQWUsQ0FBQyxTQUFTLENBQUM7cUJBQ2hELEtBQUssQ0FBQyxDQUFDLEdBQUcsRUFBRSxFQUFFO29CQUNiLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUE7Z0JBQ2xCLENBQUMsQ0FBQyxDQUFBO1lBQ04sQ0FBQztTQUNGLENBQUMsQ0FBQTtJQUNKLENBQUM7OztZQWZILFNBQVMsU0FBQyxFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUMsUUFBUSxFQUFFLEVBQUUsRUFBQzs7QUFpQjNDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljIH0gZnJvbSBcIkBhbmd1bGFyL3BsYXRmb3JtLWJyb3dzZXItZHluYW1pY1wiXG5cbkBDb21wb25lbnQoe3NlbGVjdG9yOiAnbGF1bmNoJyx0ZW1wbGF0ZTogJyd9KVxuZXhwb3J0IGNsYXNzIEV4dEFuZ3VsYXJMYXVuY2hDb21wb25lbnQge1xuXG4gICBib290c3RyYXBNb2R1bGUoQXBwTW9kdWxlKSB7XG4gICAgIGNvbnNvbGUubG9nKCdsYXVuY2gnKVxuICAgICBFeHQuYXBwbGljYXRpb24oe1xuICAgICAgIG5hbWU6IFwiJEV4dEFuZ3VsYXJBcHBcIixcbiAgICAgICBxdWlja1RpcHM6IHRydWUsXG4gICAgICAgbGF1bmNoOiAoKSA9PiB7XG4gICAgICAgICBwbGF0Zm9ybUJyb3dzZXJEeW5hbWljKCkuYm9vdHN0cmFwTW9kdWxlKEFwcE1vZHVsZSlcbiAgICAgICAgICAgLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhlcnIpXG4gICAgICAgICAgIH0pXG4gICAgICAgfVxuICAgICB9KVxuICAgfVxuXG59O1xuXG4iXX0=