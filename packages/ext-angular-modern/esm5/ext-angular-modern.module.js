import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ExtButtonComponent } from './src/ExtButton.js';
import { APP_INITIALIZER } from '@angular/core';
var Ext = window['Ext'];
export function extLaunchFactory() {
    var x = function () {
        //console.log('Hi from exported function');
        return new Promise(function (resolve, reject) {
            //console.log("Loading Ext JS...");
            Ext.onReady(function () {
                //console.log("Ext has loaded...");
                resolve();
            });
        });
    };
    return x;
}
// var extLaunchFactory = () => {
//   return () => new Promise<void>((resolve, reject) => {
//       console.log("Loading Ext JS...");
//       Ext.onReady(function () {
//         console.log("Ext has loaded...");
//         resolve();
//       });
//   });
// }
//var ExtAppInitLaunchProvider = { provide: APP_INITIALIZER, useFactory: extLaunchFactory, deps: [], multi: true };
var ExtAngularModernModule = /** @class */ (function () {
    function ExtAngularModernModule() {
    }
    ExtAngularModernModule = __decorate([
        NgModule({
            imports: [],
            declarations: [
                ExtButtonComponent,
            ],
            providers: [
                { provide: APP_INITIALIZER, useFactory: extLaunchFactory, deps: [], multi: true }
            ],
            entryComponents: [],
            exports: [
                ExtButtonComponent,
            ]
        })
    ], ExtAngularModernModule);
    return ExtAngularModernModule;
}());
export { ExtAngularModernModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItbW9kZXJuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsiZXh0LWFuZ3VsYXItbW9kZXJuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixNQUFNLFVBQVUsZ0JBQWdCO0lBQzVCLElBQUksQ0FBQyxHQUFHO1FBQ0osMkNBQTJDO1FBQzNDLE9BQU8sSUFBSSxPQUFPLENBQUMsVUFBVSxPQUFPLEVBQUUsTUFBTTtZQUN4QyxtQ0FBbUM7WUFDbkMsR0FBRyxDQUFDLE9BQU8sQ0FBQztnQkFDUixtQ0FBbUM7Z0JBQ25DLE9BQU8sRUFBRSxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUM7UUFDUCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUMsQ0FBQztJQUNGLE9BQU8sQ0FBQyxDQUFDO0FBQ2IsQ0FBQztBQUVELGlDQUFpQztBQUNqQywwREFBMEQ7QUFDMUQsMENBQTBDO0FBQzFDLGtDQUFrQztBQUNsQyw0Q0FBNEM7QUFDNUMscUJBQXFCO0FBQ3JCLFlBQVk7QUFDWixRQUFRO0FBQ1IsSUFBSTtBQUNKLG1IQUFtSDtBQWlCbkg7SUFBQTtJQUFzQyxDQUFDO0lBQTFCLHNCQUFzQjtRQWZsQyxRQUFRLENBQUM7WUFDUixPQUFPLEVBQVUsRUFBRTtZQUNuQixZQUFZLEVBQUs7Z0JBQ2Ysa0JBQWtCO2FBRW5CO1lBQ0QsU0FBUyxFQUFRO2dCQUNmLEVBQUUsT0FBTyxFQUFFLGVBQWUsRUFBRSxVQUFVLEVBQUUsZ0JBQWdCLEVBQUUsSUFBSSxFQUFFLEVBQUUsRUFBRSxLQUFLLEVBQUUsSUFBSSxFQUFFO2FBQ2xGO1lBQ0QsZUFBZSxFQUFFLEVBQUk7WUFDckIsT0FBTyxFQUFVO2dCQUNmLGtCQUFrQjthQUVuQjtTQUNGLENBQUM7T0FDVyxzQkFBc0IsQ0FBSTtJQUFELDZCQUFDO0NBQUEsQUFBdkMsSUFBdUM7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4dEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3JjL0V4dEJ1dHRvbi5qcyc7XG5cblxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBFeHQgPSB3aW5kb3dbJ0V4dCddO1xuZXhwb3J0IGZ1bmN0aW9uIGV4dExhdW5jaEZhY3RvcnkoKXtcbiAgICB2YXIgeCA9ICgpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnSGkgZnJvbSBleHBvcnRlZCBmdW5jdGlvbicpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxvYWRpbmcgRXh0IEpTLi4uXCIpO1xuICAgICAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJFeHQgaGFzIGxvYWRlZC4uLlwiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4geDtcbn1cblxuLy8gdmFyIGV4dExhdW5jaEZhY3RvcnkgPSAoKSA9PiB7XG4vLyAgIHJldHVybiAoKSA9PiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgRXh0IEpTLi4uXCIpO1xuLy8gICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkV4dCBoYXMgbG9hZGVkLi4uXCIpO1xuLy8gICAgICAgICByZXNvbHZlKCk7XG4vLyAgICAgICB9KTtcbi8vICAgfSk7XG4vLyB9XG4vL3ZhciBFeHRBcHBJbml0TGF1bmNoUHJvdmlkZXIgPSB7IHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUiwgdXNlRmFjdG9yeTogZXh0TGF1bmNoRmFjdG9yeSwgZGVwczogW10sIG11bHRpOiB0cnVlIH07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgICAgW10sXG4gIGRlY2xhcmF0aW9uczogICAgW1xuICAgIEV4dEJ1dHRvbkNvbXBvbmVudCxcblxuICBdLFxuICBwcm92aWRlcnM6ICAgICAgIFtcbiAgICB7IHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUiwgdXNlRmFjdG9yeTogZXh0TGF1bmNoRmFjdG9yeSwgZGVwczogW10sIG11bHRpOiB0cnVlIH1cbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbICBdLFxuICBleHBvcnRzOiAgICAgICAgIFtcbiAgICBFeHRCdXR0b25Db21wb25lbnQsXG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyTW9kZXJuTW9kdWxlIHsgfVxuIl19