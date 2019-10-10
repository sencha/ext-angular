export class Ext_Base {
    static getProperties(properties) {
        return properties.concat(Ext_Base.PROPERTIES);
    }
    static getEvents(events) {
        return events.concat(Ext_Base.EVENTS);
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0L0Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBRUEsTUFBTSxPQUFPLFFBQVE7SUFpQmpCLE1BQU0sQ0FBQyxhQUFhLENBQUMsVUFBVTtRQUMzQixPQUFPLFVBQVUsQ0FBQyxNQUFNLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxDQUFBO0lBQ2pELENBQUM7SUFDRCxNQUFNLENBQUMsU0FBUyxDQUFDLE1BQU07UUFDbkIsT0FBTyxNQUFNLENBQUMsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQTtJQUN6QyxDQUFDOztBQXJCYSxtQkFBVSxHQUFhO0lBQ3pDLEtBQUs7SUFDTCxVQUFVO0lBQ1YsT0FBTztJQUNQLFNBQVM7SUFDVCxrQkFBa0I7SUFDbEIsb0JBQW9CO0lBRXBCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFFBQVE7Q0FDUCxDQUFDO0FBQ2dCLGVBQU0sR0FBVTtJQUNsQyxFQUFDLElBQUksRUFBQyxPQUFPLEVBQUMsVUFBVSxFQUFDLEVBQUUsRUFBQztDQUMzQixDQUFDO0FBYUEsbUNBQW1DO0FBQ3JDLHlDQUF5QztBQUN6QyxpQkFBaUI7QUFDakIsb0JBQW9CO0FBQ3BCLG9CQUFvQjtBQUNwQix5QkFBeUI7QUFDekIsd0VBQXdFO0FBQ3hFLGlDQUFpQztBQUNqQyxJQUFJO0FBQ0osNkJBQTZCO0FBRTdCLDBDQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuLi9lbmctYmFzZSc7XG5cbmV4cG9ydCBjbGFzcyBFeHRfQmFzZSB7XG4gICAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbidlbmcnLFxuJ3ZpZXdwb3J0JyxcbidhbGlnbicsXG4ncGx1Z2lucycsXG4ncmVzcG9uc2l2ZUNvbmZpZycsXG4ncmVzcG9uc2l2ZUZvcm11bGFzJyxcblxuJ3BsYXRmb3JtQ29uZmlnJyxcbidyZXNwb25zaXZlQ29uZmlnJyxcbidmaXRUb1BhcmVudCcsXG4nY29uZmlnJ1xuXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcmV0dXJuIHByb3BlcnRpZXMuY29uY2F0KEV4dF9CYXNlLlBST1BFUlRJRVMpXG4gICAgfVxuICAgIHN0YXRpYyBnZXRFdmVudHMoZXZlbnRzKSB7XG4gICAgICAgIHJldHVybiBldmVudHMuY29uY2F0KEV4dF9CYXNlLkVWRU5UUylcbiAgICB9XG59XG5cblxuXG5cblxuICAvL3B1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICcnO1xuLy9wdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbi8vW29iamVjdCBPYmplY3RdXG4vL1wiZXh0XCI6IFtcInN0cmluZ1wiXSxcbi8vXCJld2NcIjogW1wic3RyaW5nXCJdLFxuLy9cInZpZXdwb3J0XCI6W1wiYm9vbGVhblwiXSxcbi8vXCJwbHVnaW5zXCI6W1wiQXJyYXlcIixcIkV4dC5lbnVtcy5QbHVnaW5cIixcIk9iamVjdFwiLFwiRXh0LnBsdWdpbi5BYnN0cmFjdFwiXSxcbi8vXCJyZXNwb25zaXZlRm9ybXVsYXNcIjpbXCJPYmplY3RcIl1cbi8vfTtcbi8vc3RhdGljIE1FVEhPRFM6IGFueVtdID0gW107XG5cbi8vcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtdO1xuXG4iXX0=