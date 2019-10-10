import * as tslib_1 from "tslib";
import { Ext_Container } from '../../Ext/Container';
var Ext_dataview_Abstract = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_dataview_Abstract, _super);
    function Ext_dataview_Abstract() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_dataview_Abstract.getProperties = function (properties) {
        properties = properties.concat(Ext_dataview_Abstract.PROPERTIES);
        return Ext_Container.getProperties(properties);
    };
    Ext_dataview_Abstract.getEvents = function (events) {
        events = events.concat(Ext_dataview_Abstract.EVENTS);
        return Ext_Container.getEvents(events);
    };
    Ext_dataview_Abstract.PROPERTIES = [
        'associatedData',
        'autoSize',
        'data',
        'deferEmptyText',
        'deselectOnContainerClick',
        'disableSelection',
        'emptyItemText',
        'emptyState',
        'emptyText',
        'emptyTextDefaults',
        'emptyTextProperty',
        'inline',
        'itemButtonMode',
        'itemCls',
        'itemsFocusable',
        'itemTpl',
        'loadingHeight',
        'loadingText',
        'markDirty',
        'pressedDelay',
        'publishes',
        'scrollable',
        'scrollDock',
        'scrollToTopOnRefresh',
        'selectable',
        'selection',
        'store',
        'tabIndex',
        'triggerCtEvent',
        'triggerEvent',
        'twoWayBindable',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_dataview_Abstract.EVENTS = [
        { name: 'activate', parameters: 'newActiveItem,undefined,oldActiveItem' },
        { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
        { name: 'add', parameters: '' },
        { name: 'added', parameters: 'sender,container,index' },
        { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehide', parameters: 'sender' },
        { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeorientationchange', parameters: '' },
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforestorechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'undefined' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'undefined,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'deactivate', parameters: 'oldActiveItem,undefined,newActiveItem' },
        { name: 'deselect', parameters: 'undefined,records' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'undefined,event' },
        { name: 'focusenter', parameters: 'undefined,event' },
        { name: 'focusleave', parameters: 'undefined,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'itemdoubletap', parameters: 'undefined,index,target,record,e' },
        { name: 'itemlongpress', parameters: 'undefined,index,target,record,e' },
        { name: 'itemmouseenter', parameters: 'undefined,index,target,record,e' },
        { name: 'itemmouseleave', parameters: 'undefined,index,target,record,e' },
        { name: 'itemsingletap', parameters: 'undefined,index,target,record,e' },
        { name: 'itemswipe', parameters: 'undefined,index,target,record,e' },
        { name: 'itemtap', parameters: 'undefined,index,target,record,e' },
        { name: 'itemtaphold', parameters: 'undefined,index,target,record,e' },
        { name: 'itemtouchcancel', parameters: 'undefined,index,target,record,e' },
        { name: 'itemtouchend', parameters: 'undefined,index,target,record,e' },
        { name: 'itemtouchmove', parameters: 'undefined,index,target,record,e' },
        { name: 'itemtouchstart', parameters: 'undefined,index,target,record,e' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'move', parameters: '' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'navigate', parameters: 'undefined,to,from' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'refresh', parameters: 'undefined' },
        { name: 'remove', parameters: '' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'renderedchange', parameters: 'undefined,item,rendered' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'select', parameters: 'undefined,selected' },
        { name: 'show', parameters: 'sender' },
        { name: 'storechange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'undefined' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_dataview_Abstract;
}(Ext_Container));
export { Ext_dataview_Abstract };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_dataview_Abstract.EVENTNAMES);
//    return Ext_Container.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQWJzdHJhY3QuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL0V4dC9kYXRhdmlldy9BYnN0cmFjdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLHFCQUFxQixDQUFDO0FBRXBEO0lBQTJDLGlEQUFhO0lBQXhEOztJQWlJQSxDQUFDO0lBUlUsbUNBQWEsR0FBcEIsVUFBcUIsVUFBVTtRQUMzQixVQUFVLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQyxxQkFBcUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNqRSxPQUFPLGFBQWEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQUNNLCtCQUFTLEdBQWhCLFVBQWlCLE1BQU07UUFDbkIsTUFBTSxHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDckQsT0FBTyxhQUFhLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUEvSGEsZ0NBQVUsR0FBYTtRQUN6QyxnQkFBZ0I7UUFDaEIsVUFBVTtRQUNWLE1BQU07UUFDTixnQkFBZ0I7UUFDaEIsMEJBQTBCO1FBQzFCLGtCQUFrQjtRQUNsQixlQUFlO1FBQ2YsWUFBWTtRQUNaLFdBQVc7UUFDWCxtQkFBbUI7UUFDbkIsbUJBQW1CO1FBQ25CLFFBQVE7UUFDUixnQkFBZ0I7UUFDaEIsU0FBUztRQUNULGdCQUFnQjtRQUNoQixTQUFTO1FBQ1QsZUFBZTtRQUNmLGFBQWE7UUFDYixXQUFXO1FBQ1gsY0FBYztRQUNkLFdBQVc7UUFDWCxZQUFZO1FBQ1osWUFBWTtRQUNaLHNCQUFzQjtRQUN0QixZQUFZO1FBQ1osV0FBVztRQUNYLE9BQU87UUFDUCxVQUFVO1FBQ1YsZ0JBQWdCO1FBQ2hCLGNBQWM7UUFDZCxnQkFBZ0I7UUFDaEIsZ0JBQWdCO1FBQ2hCLGtCQUFr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QUF1RTtBQUN2RSxxREFBcUQ7QUFDckQsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9Db250YWluZXIgfSBmcm9tICcuLi8uLi9FeHQvQ29udGFpbmVyJztcblxuZXhwb3J0IGNsYXNzIEV4dF9kYXRhdmlld19BYnN0cmFjdCBleHRlbmRzIEV4dF9Db250YWluZXIge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nYXNzb2NpYXRlZERhdGEnLFxuJ2F1dG9TaXplJyxcbidkYXRhJyxcbidkZWZlckVtcHR5VGV4dCcsXG4nZGVzZWxlY3RPbkNvbnRhaW5lckNsaWNrJyxcbidkaXNhYmxlU2VsZWN0aW9uJyxcbidlbXB0eUl0ZW1UZXh0JyxcbidlbXB0eVN0YXRlJyxcbidlbXB0eVRleHQnLFxuJ2VtcHR5VGV4dERlZmF1bHRzJyxcbidlbXB0eVRleHRQcm9wZXJ0eScsXG4naW5saW5lJyxcbidpdGVtQnV0dG9uTW9kZScsXG4naXRlbUNscycsXG4naXRlbXNGb2N1c2FibGUnLFxuJ2l0ZW1UcGwnLFxuJ2xvYWRpbmdIZWlnaHQnLFxuJ2xvYWRpbmdUZXh0JyxcbidtYXJrRGlydHknLFxuJ3ByZXNzZWREZWxheScsXG4ncHVibGlzaGVzJyxcbidzY3JvbGxhYmxlJyxcbidzY3JvbGxEb2NrJyxcbidzY3JvbGxUb1RvcE9uUmVmcmVzaCcsXG4nc2VsZWN0YWJsZScsXG4nc2VsZWN0aW9uJyxcbidzdG9yZScsXG4ndGFiSW5kZXgnLFxuJ3RyaWdnZXJDdEV2ZW50Jyxcbid0cmlnZ2VyRXZlbnQnLFxuJ3R3b1dheUJpbmRhYmxlJyxcbidwbGF0Zm9ybUNvbmZpZycsXG4ncmVzcG9uc2l2ZUNvbmZpZycsXG4nZml0VG9QYXJlbnQnLFxuJ2NvbmZpZydcbl07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOiduZXdBY3RpdmVJdGVtLHVuZGVmaW5lZCxvbGRBY3RpdmVJdGVtJ30sXG57bmFtZTonYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonYWRkJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3Jlc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOid1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J3VuZGVmaW5lZCxldmVudCd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J29sZEFjdGl2ZUl0ZW0sdW5kZWZpbmVkLG5ld0FjdGl2ZUl0ZW0nfSxcbntuYW1lOidkZXNlbGVjdCcscGFyYW1ldGVyczondW5kZWZpbmVkLHJlY29yZHMnfSxcbntuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOid1bmRlZmluZWQsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOid1bmRlZmluZWQsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOid1bmRlZmluZWQsZXZlbnQnfSxcbntuYW1lOidmdWxsc2NyZWVuJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaXRlbWRvdWJsZXRhcCcscGFyYW1ldGVyczondW5kZWZpbmVkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW1sb25ncHJlc3MnLHBhcmFtZXRlcnM6J3VuZGVmaW5lZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtbW91c2VlbnRlcicscGFyYW1ldGVyczondW5kZWZpbmVkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW1tb3VzZWxlYXZlJyxwYXJhbWV0ZXJzOid1bmRlZmluZWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbXNpbmdsZXRhcCcscGFyYW1ldGVyczondW5kZWZpbmVkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW1zd2lwZScscGFyYW1ldGVyczondW5kZWZpbmVkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10YXAnLHBhcmFtZXRlcnM6J3VuZGVmaW5lZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdGFwaG9sZCcscGFyYW1ldGVyczondW5kZWZpbmVkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10b3VjaGNhbmNlbCcscGFyYW1ldGVyczondW5kZWZpbmVkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10b3VjaGVuZCcscGFyYW1ldGVyczondW5kZWZpbmVkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10b3VjaG1vdmUnLHBhcmFtZXRlcnM6J3VuZGVmaW5lZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdG91Y2hzdGFydCcscGFyYW1ldGVyczondW5kZWZpbmVkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21vdmUnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J21vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLHRvSW5kZXgsZnJvbUluZGV4J30sXG57bmFtZTonbmF2aWdhdGUnLHBhcmFtZXRlcnM6J3VuZGVmaW5lZCx0byxmcm9tJ30sXG57bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG57bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidyZWZyZXNoJyxwYXJhbWV0ZXJzOid1bmRlZmluZWQnfSxcbntuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidyZW5kZXJlZGNoYW5nZScscGFyYW1ldGVyczondW5kZWZpbmVkLGl0ZW0scmVuZGVyZWQnfSxcbntuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2VsZW1lbnQsaW5mbyd9LFxue25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidzZWxlY3QnLHBhcmFtZXRlcnM6J3VuZGVmaW5lZCxzZWxlY3RlZCd9LFxue25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J3N0b3JlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOid1bmRlZmluZWQnfSxcbntuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgICBzdGF0aWMgZ2V0UHJvcGVydGllcyhwcm9wZXJ0aWVzKSB7XG4gICAgICAgIHByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzLmNvbmNhdChFeHRfZGF0YXZpZXdfQWJzdHJhY3QuUFJPUEVSVElFUyk7XG4gICAgICAgIHJldHVybiBFeHRfQ29udGFpbmVyLmdldFByb3BlcnRpZXMocHJvcGVydGllcyk7XG4gICAgfVxuICAgIHN0YXRpYyBnZXRFdmVudHMoZXZlbnRzKSB7XG4gICAgICAgIGV2ZW50cyA9IGV2ZW50cy5jb25jYXQoRXh0X2RhdGF2aWV3X0Fic3RyYWN0LkVWRU5UUyk7XG4gICAgICAgIHJldHVybiBFeHRfQ29udGFpbmVyLmdldEV2ZW50cyhldmVudHMpO1xuICAgIH1cbn1cblxuXG4gICAgLy9wdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtbb2JqZWN0IE9iamVjdF19O1xuICAgIC8vc3RhdGljIE1FVEhPRFM6IGFueVtdID0gW107XG4gICAgLy9wdWJsaWMgc3RhdGljIE1KR0VWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vc3RhdGljIGdldEV2ZW50TmFtZXMoZXZlbnRuYW1lcykge1xuICAgIC8vICAgIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzLmNvbmNhdChFeHRfZGF0YXZpZXdfQWJzdHJhY3QuRVZFTlROQU1FUyk7XG4gICAgLy8gICAgcmV0dXJuIEV4dF9Db250YWluZXIuZ2V0RXZlbnROYW1lcyhldmVudG5hbWVzKTtcbiAgICAvL31cbiJdfQ==