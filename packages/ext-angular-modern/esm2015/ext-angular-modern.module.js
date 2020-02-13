import { __decorate } from "tslib";
import { NgModule } from '@angular/core';
import { ExtButtonComponent } from './src/ExtButton.js';
import { APP_INITIALIZER } from '@angular/core';
const Ext = window['Ext'];
export function extLaunchFactory() {
    var x = () => {
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
let ExtAngularModernModule = class ExtAngularModernModule {
};
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
export { ExtAngularModernModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItbW9kZXJuLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsiZXh0LWFuZ3VsYXItbW9kZXJuLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLFFBQVEsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUN6QyxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxvQkFBb0IsQ0FBQztBQUd4RCxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ2hELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUMxQixNQUFNLFVBQVUsZ0JBQWdCO0lBQzVCLElBQUksQ0FBQyxHQUFHLEdBQUcsRUFBRTtRQUNULDJDQUEyQztRQUMzQyxPQUFPLElBQUksT0FBTyxDQUFDLFVBQVUsT0FBTyxFQUFFLE1BQU07WUFDeEMsbUNBQW1DO1lBQ25DLEdBQUcsQ0FBQyxPQUFPLENBQUM7Z0JBQ1IsbUNBQW1DO2dCQUNuQyxPQUFPLEVBQUUsQ0FBQztZQUNkLENBQUMsQ0FBQyxDQUFDO1FBQ1AsQ0FBQyxDQUFDLENBQUM7SUFDUCxDQUFDLENBQUM7SUFDRixPQUFPLENBQUMsQ0FBQztBQUNiLENBQUM7QUFFRCxpQ0FBaUM7QUFDakMsMERBQTBEO0FBQzFELDBDQUEwQztBQUMxQyxrQ0FBa0M7QUFDbEMsNENBQTRDO0FBQzVDLHFCQUFxQjtBQUNyQixZQUFZO0FBQ1osUUFBUTtBQUNSLElBQUk7QUFDSixtSEFBbUg7QUFpQm5ILElBQWEsc0JBQXNCLEdBQW5DLE1BQWEsc0JBQXNCO0NBQUksQ0FBQTtBQUExQixzQkFBc0I7SUFmbEMsUUFBUSxDQUFDO1FBQ1IsT0FBTyxFQUFVLEVBQUU7UUFDbkIsWUFBWSxFQUFLO1lBQ2Ysa0JBQWtCO1NBRW5CO1FBQ0QsU0FBUyxFQUFRO1lBQ2YsRUFBRSxPQUFPLEVBQUUsZUFBZSxFQUFFLFVBQVUsRUFBRSxnQkFBZ0IsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUU7U0FDbEY7UUFDRCxlQUFlLEVBQUUsRUFBSTtRQUNyQixPQUFPLEVBQVU7WUFDZixrQkFBa0I7U0FFbkI7S0FDRixDQUFDO0dBQ1csc0JBQXNCLENBQUk7U0FBMUIsc0JBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4dEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vc3JjL0V4dEJ1dHRvbi5qcyc7XG5cblxuaW1wb3J0IHsgQVBQX0lOSVRJQUxJWkVSIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBFeHQgPSB3aW5kb3dbJ0V4dCddO1xuZXhwb3J0IGZ1bmN0aW9uIGV4dExhdW5jaEZhY3RvcnkoKXtcbiAgICB2YXIgeCA9ICgpID0+IHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnSGkgZnJvbSBleHBvcnRlZCBmdW5jdGlvbicpO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhcIkxvYWRpbmcgRXh0IEpTLi4uXCIpO1xuICAgICAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coXCJFeHQgaGFzIGxvYWRlZC4uLlwiKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICByZXR1cm4geDtcbn1cblxuLy8gdmFyIGV4dExhdW5jaEZhY3RvcnkgPSAoKSA9PiB7XG4vLyAgIHJldHVybiAoKSA9PiBuZXcgUHJvbWlzZTx2b2lkPigocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4vLyAgICAgICBjb25zb2xlLmxvZyhcIkxvYWRpbmcgRXh0IEpTLi4uXCIpO1xuLy8gICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuLy8gICAgICAgICBjb25zb2xlLmxvZyhcIkV4dCBoYXMgbG9hZGVkLi4uXCIpO1xuLy8gICAgICAgICByZXNvbHZlKCk7XG4vLyAgICAgICB9KTtcbi8vICAgfSk7XG4vLyB9XG4vL3ZhciBFeHRBcHBJbml0TGF1bmNoUHJvdmlkZXIgPSB7IHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUiwgdXNlRmFjdG9yeTogZXh0TGF1bmNoRmFjdG9yeSwgZGVwczogW10sIG11bHRpOiB0cnVlIH07XG5cbkBOZ01vZHVsZSh7XG4gIGltcG9ydHM6ICAgICAgICAgW10sXG4gIGRlY2xhcmF0aW9uczogICAgW1xuICAgIEV4dEJ1dHRvbkNvbXBvbmVudCxcblxuICBdLFxuICBwcm92aWRlcnM6ICAgICAgIFtcbiAgICB7IHByb3ZpZGU6IEFQUF9JTklUSUFMSVpFUiwgdXNlRmFjdG9yeTogZXh0TGF1bmNoRmFjdG9yeSwgZGVwczogW10sIG11bHRpOiB0cnVlIH1cbiAgXSxcbiAgZW50cnlDb21wb25lbnRzOiBbICBdLFxuICBleHBvcnRzOiAgICAgICAgIFtcbiAgICBFeHRCdXR0b25Db21wb25lbnQsXG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyTW9kZXJuTW9kdWxlIHsgfVxuIl19