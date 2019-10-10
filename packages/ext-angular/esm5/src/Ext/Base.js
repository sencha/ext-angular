var Ext_Base = /** @class */ (function () {
    function Ext_Base() {
    }
    Ext_Base.getProperties = function (properties) {
        return properties.concat(Ext_Base.PROPERTIES);
    };
    Ext_Base.getEvents = function (events) {
        return events.concat(Ext_Base.EVENTS);
    };
    Ext_Base.PROPERTIES = [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_Base.EVENTS = [
        { name: 'ready', parameters: '' }
    ];
    return Ext_Base;
}());
export { Ext_Base };
//public static XTYPE: string = '';
//public static PROPERTIESOBJECT: any = {
//[object Object]
//"ext": ["string"],
//"ewc": ["string"],
//"viewport":["boolean"],
//"plugins":["Array","Ext.enums.Plugin","Object","Ext.plugin.Abstract"],
//"responsiveFormulas":["Object"]
//};
//static METHODS: any[] = [];
//public static EVENTNAMES: string[] = [];
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0L0Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUE7SUFBQTtJQXVCQSxDQUFDO0lBTlUsc0JBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFDTSxrQkFBUyxHQUFoQixVQUFpQixNQUFNO1FBQ25CLE9BQU8sTUFBTSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUE7SUFDekMsQ0FBQztJQXJCYSxtQkFBVSxHQUFhO1FBQ3pDLEtBQUs7UUFDTCxVQUFVO1FBQ1YsT0FBTztRQUNQLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBRXBCLGdCQUFnQjtRQUNoQixrQkFBa0I7UUFDbEIsYUFBYTtRQUNiLFFBQVE7S0FDUCxDQUFDO0lBQ2dCLGVBQU0sR0FBVTtRQUNsQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztLQUMzQixDQUFDO0lBT0YsZUFBQztDQUFBLEFBdkJELElBdUJDO1NBdkJZLFFBQVE7QUE2Qm5CLG1DQUFtQztBQUNyQyx5Q0FBeUM7QUFDekMsaUJBQWlCO0FBQ2pCLG9CQUFvQjtBQUNwQixvQkFBb0I7QUFDcEIseUJBQXlCO0FBQ3pCLHdFQUF3RTtBQUN4RSxpQ0FBaUM7QUFDakMsSUFBSTtBQUNKLDZCQUE2QjtBQUU3QiwwQ0FBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi4vZW5nLWJhc2UnO1xuXG5leHBvcnQgY2xhc3MgRXh0X0Jhc2Uge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nZW5nJyxcbid2aWV3cG9ydCcsXG4nYWxpZ24nLFxuJ3BsdWdpbnMnLFxuJ3Jlc3BvbnNpdmVDb25maWcnLFxuJ3Jlc3BvbnNpdmVGb3JtdWxhcycsXG5cbidwbGF0Zm9ybUNvbmZpZycsXG4ncmVzcG9uc2l2ZUNvbmZpZycsXG4nZml0VG9QYXJlbnQnLFxuJ2NvbmZpZydcbl07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgICBzdGF0aWMgZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHJldHVybiBwcm9wZXJ0aWVzLmNvbmNhdChFeHRfQmFzZS5QUk9QRVJUSUVTKVxuICAgIH1cbiAgICBzdGF0aWMgZ2V0RXZlbnRzKGV2ZW50cykge1xuICAgICAgICByZXR1cm4gZXZlbnRzLmNvbmNhdChFeHRfQmFzZS5FVkVOVFMpXG4gICAgfVxufVxuXG5cblxuXG5cbiAgLy9wdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnJztcbi8vcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4vL1tvYmplY3QgT2JqZWN0XVxuLy9cImV4dFwiOiBbXCJzdHJpbmdcIl0sXG4vL1wiZXdjXCI6IFtcInN0cmluZ1wiXSxcbi8vXCJ2aWV3cG9ydFwiOltcImJvb2xlYW5cIl0sXG4vL1wicGx1Z2luc1wiOltcIkFycmF5XCIsXCJFeHQuZW51bXMuUGx1Z2luXCIsXCJPYmplY3RcIixcIkV4dC5wbHVnaW4uQWJzdHJhY3RcIl0sXG4vL1wicmVzcG9uc2l2ZUZvcm11bGFzXCI6W1wiT2JqZWN0XCJdXG4vL307XG4vL3N0YXRpYyBNRVRIT0RTOiBhbnlbXSA9IFtdO1xuXG4vL3B1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXTtcblxuIl19