import * as tslib_1 from "tslib";
import { Ext_dataview_DataView } from '../../Ext/dataview/DataView';
var Ext_picker_Slot = /** @class */ (function (_super) {
    tslib_1.__extends(Ext_picker_Slot, _super);
    function Ext_picker_Slot() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Ext_picker_Slot.getProperties = function (properties) {
        properties = properties.concat(Ext_picker_Slot.PROPERTIES);
        return Ext_dataview_DataView.getProperties(properties);
    };
    Ext_picker_Slot.getEvents = function (events) {
        events = events.concat(Ext_picker_Slot.EVENTS);
        return Ext_dataview_DataView.getEvents(events);
    };
    Ext_picker_Slot.PROPERTIES = [
        'align',
        'cls',
        'displayField',
        'flex',
        'itemTpl',
        'name',
        'scrollable',
        'showTitle',
        'title',
        'triggerEvent',
        'value',
        'valueField',
        'verticallyCenterItems',
        'platformConfig',
        'responsiveConfig',
        'fitToParent',
        'config'
    ];
    Ext_picker_Slot.EVENTS = [
        { name: 'activate', parameters: 'newActiveItem,pickerslot,oldActiveItem' },
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
        { name: 'beforetofront', parameters: 'pickerslot' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'pickerslot,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'childdoubletap', parameters: 'pickerslot,location' },
        { name: 'childlongpress', parameters: 'pickerslot,location' },
        { name: 'childmouseenter', parameters: 'pickerslot,location' },
        { name: 'childmouseleave', parameters: 'pickerslot,location' },
        { name: 'childsingletap', parameters: 'pickerslot,location' },
        { name: 'childtap', parameters: 'pickerslot,location' },
        { name: 'childtaphold', parameters: 'pickerslot,location' },
        { name: 'childtouchcancel', parameters: 'pickerslot,location' },
        { name: 'childtouchend', parameters: 'pickerslot,location' },
        { name: 'childtouchmove', parameters: 'pickerslot,location' },
        { name: 'childtouchstart', parameters: 'pickerslot,location' },
        { name: 'deactivate', parameters: 'oldActiveItem,pickerslot,newActiveItem' },
        { name: 'deselect', parameters: 'pickerslot,records' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'pickerslot,event' },
        { name: 'focusenter', parameters: 'pickerslot,event' },
        { name: 'focusleave', parameters: 'pickerslot,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'itemdoubletap', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemlongpress', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemmouseenter', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemmouseleave', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemsingletap', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemswipe', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtap', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtaphold', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtouchcancel', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtouchend', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtouchmove', parameters: 'pickerslot,index,target,record,e' },
        { name: 'itemtouchstart', parameters: 'pickerslot,index,target,record,e' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'move', parameters: '' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'navigate', parameters: 'pickerslot,to,from' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'refresh', parameters: 'pickerslot' },
        { name: 'remove', parameters: '' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'renderedchange', parameters: 'pickerslot,item,rendered' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'rowselection', parameters: 'view,selection' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'select', parameters: 'pickerslot,selected' },
        { name: 'selectionchange', parameters: 'view,records,selected,selection' },
        { name: 'show', parameters: 'sender' },
        { name: 'slotpick', parameters: 'pickerslot,value,node' },
        { name: 'storechange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'pickerslot' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    return Ext_picker_Slot;
}(Ext_dataview_DataView));
export { Ext_picker_Slot };
//public static PROPERTIESOBJECT: any = {[object Object]};
//static METHODS: any[] = [];
//public static MJGEVENTNAMES: string[] = [];
//static getEventNames(eventnames) {
//    eventnames = eventnames.concat(Ext_picker_Slot.EVENTNAMES);
//    return Ext_dataview_DataView.getEventNames(eventnames);
//}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU2xvdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvRXh0L3BpY2tlci9TbG90LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUscUJBQXFCLEVBQUUsTUFBTSw2QkFBNkIsQ0FBQztBQUVwRTtJQUFxQywyQ0FBcUI7SUFBMUQ7O0lBNkhBLENBQUM7SUFSVSw2QkFBYSxHQUFwQixVQUFxQixVQUFVO1FBQzNCLFVBQVUsR0FBRyxVQUFVLENBQUMsTUFBTSxDQUFDLGVBQWUsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUMzRCxPQUFPLHFCQUFxQixDQUFDLGFBQWEsQ0FBQyxVQUFVLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ00seUJBQVMsR0FBaEIsVUFBaUIsTUFBTTtRQUNuQixNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxlQUFlLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsT0FBTyxxQkFBcUIsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDbkQsQ0FBQztJQTNIYSwwQkFBVSxHQUFhO1FBQ3pDLE9BQU87UUFDUCxLQUFLO1FBQ0wsY0FBYztRQUNkLE1BQU07UUFDTixTQUFTO1FBQ1QsTUFBTTtRQUNOLFlBQVk7UUFDWixXQUFXO1FBQ1gsT0FBTztRQUNQLGNBQWM7UUFDZCxPQUFPO1FBQ1AsWUFBWTtRQUNaLHVCQUF1QjtRQUN2QixnQkFBZ0I7UUFDaEIsa0JBQWtCO1FBQ2xCLGFBQWE7UUFDYixRQUFRO0tBQ1AsQ0FBQztJQUNnQixzQkFBTSxHQUFVO1FBQ2xDLEVBQUMsSUFBSSxFQUFDLFVBQVUsRUFBQyxVQUFVLEVBQUMsd0NBQXdDLEVBQUM7UUFDckUsRUFBQyxJQUFJLEVBQUMsa0JBQWtCLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQzVELEVBQUMsSUFBSSxFQUFDLEtBQUssRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO1FBQzFCLEVB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UUFDckUsRUFBQyxJQUFJLEVBQUMsTUFBTSxFQUFDLFVBQVUsRUFBQyxRQUFRLEVBQUM7UUFDakMsRUFBQyxJQUFJLEVBQUMsVUFBVSxFQUFDLFVBQVUsRUFBQyx1QkFBdUIsRUFBQztRQUNwRCxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLFNBQVMsRUFBQyxVQUFVLEVBQUMsWUFBWSxFQUFDO1FBQ3hDLEVBQUMsSUFBSSxFQUFDLFdBQVcsRUFBQyxVQUFVLEVBQUMsdUJBQXVCLEVBQUM7UUFDckQsRUFBQyxJQUFJLEVBQUMsWUFBWSxFQUFDLFVBQVUsRUFBQyxnQkFBZ0IsRUFBQztRQUMvQyxFQUFDLElBQUksRUFBQyxhQUFhLEVBQUMsVUFBVSxFQUFDLHVCQUF1QixFQUFDO1FBQ3ZELEVBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxVQUFVLEVBQUMsRUFBRSxFQUFDO0tBQzNCLENBQUM7SUFTRixzQkFBQztDQUFBLEFBN0hELENBQXFDLHFCQUFxQixHQTZIekQ7U0E3SFksZUFBZTtBQWdJeEIsMERBQTBEO0FBQzFELDZCQUE2QjtBQUM3Qiw2Q0FBNkM7QUFDekMsb0NBQW9DO0FBQ3hDLGlFQUFpRTtBQUNqRSw2REFBNkQ7QUFDN0QsR0FBRyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEV4dF9kYXRhdmlld19EYXRhVmlldyB9IGZyb20gJy4uLy4uL0V4dC9kYXRhdmlldy9EYXRhVmlldyc7XG5cbmV4cG9ydCBjbGFzcyBFeHRfcGlja2VyX1Nsb3QgZXh0ZW5kcyBFeHRfZGF0YXZpZXdfRGF0YVZpZXcge1xuICAgIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4nYWxpZ24nLFxuJ2NscycsXG4nZGlzcGxheUZpZWxkJyxcbidmbGV4JyxcbidpdGVtVHBsJyxcbiduYW1lJyxcbidzY3JvbGxhYmxlJyxcbidzaG93VGl0bGUnLFxuJ3RpdGxlJyxcbid0cmlnZ2VyRXZlbnQnLFxuJ3ZhbHVlJyxcbid2YWx1ZUZpZWxkJyxcbid2ZXJ0aWNhbGx5Q2VudGVySXRlbXMnLFxuJ3BsYXRmb3JtQ29uZmlnJyxcbidyZXNwb25zaXZlQ29uZmlnJyxcbidmaXRUb1BhcmVudCcsXG4nY29uZmlnJ1xuXTtcbiAgICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J25ld0FjdGl2ZUl0ZW0scGlja2Vyc2xvdCxvbGRBY3RpdmVJdGVtJ30sXG57bmFtZTonYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonYWRkJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J2JlZm9yZWFjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3Jlc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90J30sXG57bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGV2ZW50J30sXG57bmFtZTonYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2hpbGRkb3VibGV0YXAnLHBhcmFtZXRlcnM6J3BpY2tlcnNsb3QsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZGxvbmdwcmVzcycscGFyYW1ldGVyczoncGlja2Vyc2xvdCxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkbW91c2VlbnRlcicscGFyYW1ldGVyczoncGlja2Vyc2xvdCxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkbW91c2VsZWF2ZScscGFyYW1ldGVyczoncGlja2Vyc2xvdCxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkc2luZ2xldGFwJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGR0YXAnLHBhcmFtZXRlcnM6J3BpY2tlcnNsb3QsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZHRhcGhvbGQnLHBhcmFtZXRlcnM6J3BpY2tlcnNsb3QsbG9jYXRpb24nfSxcbntuYW1lOidjaGlsZHRvdWNoY2FuY2VsJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGR0b3VjaGVuZCcscGFyYW1ldGVyczoncGlja2Vyc2xvdCxsb2NhdGlvbid9LFxue25hbWU6J2NoaWxkdG91Y2htb3ZlJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGxvY2F0aW9uJ30sXG57bmFtZTonY2hpbGR0b3VjaHN0YXJ0JyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGxvY2F0aW9uJ30sXG57bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonb2xkQWN0aXZlSXRlbSxwaWNrZXJzbG90LG5ld0FjdGl2ZUl0ZW0nfSxcbntuYW1lOidkZXNlbGVjdCcscGFyYW1ldGVyczoncGlja2Vyc2xvdCxyZWNvcmRzJ30sXG57bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczoncGlja2Vyc2xvdCxldmVudCd9LFxue25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3BpY2tlcnNsb3QsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGV2ZW50J30sXG57bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2l0ZW1kb3VibGV0YXAnLHBhcmFtZXRlcnM6J3BpY2tlcnNsb3QsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbWxvbmdwcmVzcycscGFyYW1ldGVyczoncGlja2Vyc2xvdCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtbW91c2VlbnRlcicscGFyYW1ldGVyczoncGlja2Vyc2xvdCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtbW91c2VsZWF2ZScscGFyYW1ldGVyczoncGlja2Vyc2xvdCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtc2luZ2xldGFwJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW1zd2lwZScscGFyYW1ldGVyczoncGlja2Vyc2xvdCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdGFwJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10YXBob2xkJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxue25hbWU6J2l0ZW10b3VjaGNhbmNlbCcscGFyYW1ldGVyczoncGlja2Vyc2xvdCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdG91Y2hlbmQnLHBhcmFtZXRlcnM6J3BpY2tlcnNsb3QsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG57bmFtZTonaXRlbXRvdWNobW92ZScscGFyYW1ldGVyczoncGlja2Vyc2xvdCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidpdGVtdG91Y2hzdGFydCcscGFyYW1ldGVyczoncGlja2Vyc2xvdCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcbntuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J25hdmlnYXRlJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LHRvLGZyb20nfSxcbntuYW1lOidvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcbntuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J3JlZnJlc2gnLHBhcmFtZXRlcnM6J3BpY2tlcnNsb3QnfSxcbntuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidyZW5kZXJlZGNoYW5nZScscGFyYW1ldGVyczoncGlja2Vyc2xvdCxpdGVtLHJlbmRlcmVkJ30sXG57bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcbntuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncm93c2VsZWN0aW9uJyxwYXJhbWV0ZXJzOid2aWV3LHNlbGVjdGlvbid9LFxue25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3NlbGVjdCcscGFyYW1ldGVyczoncGlja2Vyc2xvdCxzZWxlY3RlZCd9LFxue25hbWU6J3NlbGVjdGlvbmNoYW5nZScscGFyYW1ldGVyczondmlldyxyZWNvcmRzLHNlbGVjdGVkLHNlbGVjdGlvbid9LFxue25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J3Nsb3RwaWNrJyxwYXJhbWV0ZXJzOidwaWNrZXJzbG90LHZhbHVlLG5vZGUnfSxcbntuYW1lOidzdG9yZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczoncGlja2Vyc2xvdCd9LFxue25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondXBkYXRlZGF0YScscGFyYW1ldGVyczonc2VuZGVyLG5ld0RhdGEnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHN0YXRpYyBnZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpIHtcbiAgICAgICAgcHJvcGVydGllcyA9IHByb3BlcnRpZXMuY29uY2F0KEV4dF9waWNrZXJfU2xvdC5QUk9QRVJUSUVTKTtcbiAgICAgICAgcmV0dXJuIEV4dF9kYXRhdmlld19EYXRhVmlldy5nZXRQcm9wZXJ0aWVzKHByb3BlcnRpZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgZ2V0RXZlbnRzKGV2ZW50cykge1xuICAgICAgICBldmVudHMgPSBldmVudHMuY29uY2F0KEV4dF9waWNrZXJfU2xvdC5FVkVOVFMpO1xuICAgICAgICByZXR1cm4gRXh0X2RhdGF2aWV3X0RhdGFWaWV3LmdldEV2ZW50cyhldmVudHMpO1xuICAgIH1cbn1cblxuXG4gICAgLy9wdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtbb2JqZWN0IE9iamVjdF19O1xuICAgIC8vc3RhdGljIE1FVEhPRFM6IGFueVtdID0gW107XG4gICAgLy9wdWJsaWMgc3RhdGljIE1KR0VWRU5UTkFNRVM6IHN0cmluZ1tdID0gW107XG4gICAgICAgIC8vc3RhdGljIGdldEV2ZW50TmFtZXMoZXZlbnRuYW1lcykge1xuICAgIC8vICAgIGV2ZW50bmFtZXMgPSBldmVudG5hbWVzLmNvbmNhdChFeHRfcGlja2VyX1Nsb3QuRVZFTlROQU1FUyk7XG4gICAgLy8gICAgcmV0dXJuIEV4dF9kYXRhdmlld19EYXRhVmlldy5nZXRFdmVudE5hbWVzKGV2ZW50bmFtZXMpO1xuICAgIC8vfVxuIl19