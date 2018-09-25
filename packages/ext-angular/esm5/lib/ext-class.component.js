/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
var ExtClassComponent = /** @class */ (function () {
    function ExtClassComponent(classname, extend, defineConfig, createConfig) {
        if (!Ext.ClassManager.isCreated(classname)) {
            Ext.apply(defineConfig, { extend: extend });
            Ext.define(classname, defineConfig);
        }
        this.classname = classname;
        this.extend = extend;
        this.defineConfig = defineConfig;
        this.createConfig = createConfig;
        this.ext = Ext.create(classname, createConfig);
    }
    return ExtClassComponent;
}());
export { ExtClassComponent };
if (false) {
    /** @type {?} */
    ExtClassComponent.prototype.classname;
    /** @type {?} */
    ExtClassComponent.prototype.extend;
    /** @type {?} */
    ExtClassComponent.prototype.defineConfig;
    /** @type {?} */
    ExtClassComponent.prototype.createConfig;
    /** @type {?} */
    ExtClassComponent.prototype.ext;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNsYXNzLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9leHQtY2xhc3MuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxJQUFBO0lBTUUsMkJBQWEsU0FBYyxFQUFFLE1BQWMsRUFBRSxZQUFpQixFQUFFLFlBQWlCO1FBQy9FLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUMxQyxHQUFHLENBQUMsS0FBSyxDQUFDLFlBQVksRUFBRSxFQUFFLE1BQU0sRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFBO1lBQzNDLEdBQUcsQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLFlBQVksQ0FBQyxDQUFBO1NBQ3BDO1FBQ0QsSUFBSSxDQUFDLFNBQVMsR0FBRyxTQUFTLENBQUE7UUFDMUIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUE7UUFDcEIsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7UUFDaEMsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUE7UUFDaEMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxZQUFZLENBQUMsQ0FBQTtLQUMvQzs0QkFqQkg7SUFrQkMsQ0FBQTtBQWpCRCw2QkFpQkMiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueVxuZXhwb3J0IGNsYXNzIEV4dENsYXNzQ29tcG9uZW50IHtcbiAgcHVibGljIGNsYXNzbmFtZTogYW55XG4gIHB1YmxpYyBleHRlbmQ6IGFueVxuICBwdWJsaWMgZGVmaW5lQ29uZmlnOiBhbnlcbiAgcHVibGljIGNyZWF0ZUNvbmZpZzogYW55XG4gIHB1YmxpYyBleHQ6IGFueVxuICBjb25zdHJ1Y3RvciAoY2xhc3NuYW1lOiBhbnksIGV4dGVuZDogc3RyaW5nLCBkZWZpbmVDb25maWc6IGFueSwgY3JlYXRlQ29uZmlnOiBhbnkpIHtcbiAgICBpZiAoIUV4dC5DbGFzc01hbmFnZXIuaXNDcmVhdGVkKGNsYXNzbmFtZSkpIHtcbiAgICAgIEV4dC5hcHBseShkZWZpbmVDb25maWcsIHsgZXh0ZW5kOiBleHRlbmQgfSlcbiAgICAgIEV4dC5kZWZpbmUoY2xhc3NuYW1lLCBkZWZpbmVDb25maWcpXG4gICAgfVxuICAgIHRoaXMuY2xhc3NuYW1lID0gY2xhc3NuYW1lXG4gICAgdGhpcy5leHRlbmQgPSBleHRlbmRcbiAgICB0aGlzLmRlZmluZUNvbmZpZyA9IGRlZmluZUNvbmZpZ1xuICAgIHRoaXMuY3JlYXRlQ29uZmlnID0gY3JlYXRlQ29uZmlnXG4gICAgdGhpcy5leHQgPSBFeHQuY3JlYXRlKGNsYXNzbmFtZSwgY3JlYXRlQ29uZmlnKVxuICB9XG59XG4iXX0=