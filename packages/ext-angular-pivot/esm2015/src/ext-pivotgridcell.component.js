var ExtPivotgridcellComponent_1;
import * as tslib_1 from "tslib";
import { EngBase } from './eng-base';
export class ExtPivotgridcellMetaData {
}
ExtPivotgridcellMetaData.PROPERTIES = [
    'align',
    'alignSelf',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'bind',
    'bodyCls',
    'bodyStyle',
    'border',
    'cellCls',
    'cls',
    'column',
    'constrainAlign',
    'controller',
    'defaultListenerScope',
    'defaultToolWeights',
    'disabled',
    'encodeHtml',
    'flex',
    'floated',
    'focusCls',
    'formatter',
    'height',
    'hidden',
    'hideMode',
    'id',
    'instanceCls',
    'itemId',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'listeners',
    'margin',
    'name',
    'nameable',
    'plugins',
    'publishes',
    'rawValue',
    'record',
    'reference',
    'relative',
    'renderer',
    'renderTo',
    'ripple',
    'scope',
    'selectable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'style',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
    'touchAction',
    'tpl',
    'translatable',
    'twoWayBindable',
    'ui',
    'userCls',
    'value',
    'viewModel',
    'width',
    'x',
    'y',
    'zeroValue',
    'platformConfig',
    'responsiveConfig',
    'fitToParent',
    'config'
];
ExtPivotgridcellMetaData.EVENTS = [
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'pivotgridcell' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'pivotgridcell,event' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'focus', parameters: 'pivotgridcell,event' },
    { name: 'focusenter', parameters: 'pivotgridcell,event' },
    { name: 'focusleave', parameters: 'pivotgridcell,event' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'pivotgridcell' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
ExtPivotgridcellMetaData.EVENTNAMES = [
    'beforedisabledchange',
    'beforeheightchange',
    'beforehiddenchange',
    'beforetofront',
    'beforewidthchange',
    'blur',
    'disabledchange',
    'focus',
    'focusenter',
    'focusleave',
    'heightchange',
    'hiddenchange',
    'tofront',
    'widthchange',
    'ready'
];
import { Host, Optional, SkipSelf, 
//Output,
//OnInit,
//AfterViewInit,
//OnChanges,
Component, ElementRef, forwardRef
//SimpleChanges
 } from '@angular/core';
let ExtPivotgridcellComponent = ExtPivotgridcellComponent_1 = class ExtPivotgridcellComponent extends EngBase {
    constructor(eRef, hostComponent) {
        super(eRef, hostComponent, ExtPivotgridcellMetaData.PROPERTIES, ExtPivotgridcellMetaData.EVENTS);
        this.xtype = 'pivotgridcell';
    }
    ngOnInit() {
        this.baseOnInit();
    }
    ngAfterViewInit() {
        this.baseAfterViewInit();
    }
    ngOnChanges(changes) {
        this.baseOnChanges(changes);
    }
    ngOnDestroy() {
        this.baseOnDestroy();
    }
};
ExtPivotgridcellComponent.ctorParameters = () => [
    { type: ElementRef },
    { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
];
ExtPivotgridcellComponent = ExtPivotgridcellComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ext-pivotgridcell',
        inputs: ExtPivotgridcellMetaData.PROPERTIES,
        outputs: ExtPivotgridcellMetaData.EVENTNAMES,
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtPivotgridcellComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef,
        EngBase])
], ExtPivotgridcellComponent);
export { ExtPivotgridcellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXBpdm90Z3JpZGNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1waXZvdC8iLCJzb3VyY2VzIjpbInNyYy9leHQtcGl2b3RncmlkY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFDQSxPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE1BQU0sT0FBTyx3QkFBd0I7O0FBRW5CLG1DQUFVLEdBQWE7SUFDekMsT0FBTztJQUNQLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLE1BQU07SUFDTixTQUFTO0lBQ1QsV0FBVztJQUNYLFFBQVE7SUFDUixTQUFTO0lBQ1QsS0FBSztJQUNMLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsWUFBWTtJQUNaLHNCQUFzQjtJQUN0QixvQkFBb0I7SUFDcEIsVUFBVTtJQUNWLFlBQVk7SUFDWixNQUFNO0lBQ04sU0FBUztJQUNULFVBQVU7SUFDVixXQUFXO0lBQ1gsUUFBUTtJQUNSLFFBQVE7SUFDUixVQUFVO0lBQ1YsSUFBSTtJQUNKLGFBQWE7SUFDYixRQUFRO0lBQ1IsUUFBUTtJQUNSLGVBQWU7SUFDZixjQUFjO0lBQ2QsV0FBVztJQUNYLFFBQVE7SUFDUixNQUFNO0lBQ04sVUFBVTtJQUNWLFNBQVM7SUFDVCxXQUFXO0lBQ1gsVUFBVTtJQUNWLFFBQVE7SUFDUixXQUFXO0lBQ1gsVUFBVTtJQUNWLFVBQVU7SUFDVixVQUFVO0lBQ1YsUUFBUTtJQUNSLE9BQU87SUFDUCxZQUFZO0lBQ1osU0FBUztJQUNULFFBQVE7SUFDUixlQUFlO0lBQ2YsTUFBTTtJQUNOLE9BQU87SUFDUCxlQUFlO0lBQ2YsY0FBYztJQUNkLE9BQU87SUFDUCxhQUFhO0lBQ2IsS0FBSztJQUNMLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsSUFBSTtJQUNKLFNBQVM7SUFD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QUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsbUJBQW1CO1FBQzdCLE1BQU0sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1FBQzNDLE9BQU8sRUFBRSx3QkFBd0IsQ0FBQyxVQUFVO1FBQzVDLFNBQVMsRUFBRSxDQUFDLEVBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxXQUFXLEVBQUUsVUFBVSxDQUFDLEdBQUcsRUFBRSxDQUFDLDJCQUF5QixDQUFDLEVBQUMsQ0FBQztRQUN6RixRQUFRLEVBQUUsNkJBQTZCO0tBQ3hDLENBQUM7SUFLTyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7NkNBRHpCLFVBQVU7UUFDK0IsT0FBTztHQUpqRCx5QkFBeUIsQ0E4QnJDO1NBOUJZLHlCQUF5QiIsInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuZXhwb3J0IGNsYXNzIEV4dFBpdm90Z3JpZGNlbGxNZXRhRGF0YSB7XG5cbiAgICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuJ2FsaWduJyxcbidhbGlnblNlbGYnLFxuJ2Fsd2F5c09uVG9wJyxcbidhcmlhQXR0cmlidXRlcycsXG4nYXJpYURlc2NyaWJlZEJ5JyxcbidhcmlhTGFiZWwnLFxuJ2FyaWFMYWJlbGxlZEJ5JyxcbidiaW5kJyxcbidib2R5Q2xzJyxcbidib2R5U3R5bGUnLFxuJ2JvcmRlcicsXG4nY2VsbENscycsXG4nY2xzJyxcbidjb2x1bW4nLFxuJ2NvbnN0cmFpbkFsaWduJyxcbidjb250cm9sbGVyJyxcbidkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4nZGVmYXVsdFRvb2xXZWlnaHRzJyxcbidkaXNhYmxlZCcsXG4nZW5jb2RlSHRtbCcsXG4nZmxleCcsXG4nZmxvYXRlZCcsXG4nZm9jdXNDbHMnLFxuJ2Zvcm1hdHRlcicsXG4naGVpZ2h0JyxcbidoaWRkZW4nLFxuJ2hpZGVNb2RlJyxcbidpZCcsXG4naW5zdGFuY2VDbHMnLFxuJ2l0ZW1JZCcsXG4na2V5TWFwJyxcbidrZXlNYXBFbmFibGVkJyxcbidrZXlNYXBUYXJnZXQnLFxuJ2xpc3RlbmVycycsXG4nbWFyZ2luJyxcbiduYW1lJyxcbiduYW1lYWJsZScsXG4ncGx1Z2lucycsXG4ncHVibGlzaGVzJyxcbidyYXdWYWx1ZScsXG4ncmVjb3JkJyxcbidyZWZlcmVuY2UnLFxuJ3JlbGF0aXZlJyxcbidyZW5kZXJlcicsXG4ncmVuZGVyVG8nLFxuJ3JpcHBsZScsXG4nc2NvcGUnLFxuJ3NlbGVjdGFibGUnLFxuJ3Nlc3Npb24nLFxuJ3NoYWRvdycsXG4nc2hhcmVhYmxlTmFtZScsXG4nc2hpbScsXG4nc3R5bGUnLFxuJ3RvRnJvbnRPblNob3cnLFxuJ3Rvb2xEZWZhdWx0cycsXG4ndG9vbHMnLFxuJ3RvdWNoQWN0aW9uJyxcbid0cGwnLFxuJ3RyYW5zbGF0YWJsZScsXG4ndHdvV2F5QmluZGFibGUnLFxuJ3VpJyxcbid1c2VyQ2xzJyxcbid2YWx1ZScsXG4ndmlld01vZGVsJyxcbid3aWR0aCcsXG4neCcsXG4neScsXG4nemVyb1ZhbHVlJyxcbidwbGF0Zm9ybUNvbmZpZycsXG4ncmVzcG9uc2l2ZUNvbmZpZycsXG4nZml0VG9QYXJlbnQnLFxuJ2NvbmZpZydcbl07XG4gICAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczoncGl2b3RncmlkY2VsbCd9LFxue25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmx1cicscGFyYW1ldGVyczoncGl2b3RncmlkY2VsbCxldmVudCd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczoncGl2b3RncmlkY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J3Bpdm90Z3JpZGNlbGwsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidwaXZvdGdyaWRjZWxsLGV2ZW50J30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J3Bpdm90Z3JpZGNlbGwnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICAgIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG4nYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuJ2JlZm9yZWhlaWdodGNoYW5nZScsXG4nYmVmb3JlaGlkZGVuY2hhbmdlJyxcbidiZWZvcmV0b2Zyb250JyxcbidiZWZvcmV3aWR0aGNoYW5nZScsXG4nYmx1cicsXG4nZGlzYWJsZWRjaGFuZ2UnLFxuJ2ZvY3VzJyxcbidmb2N1c2VudGVyJyxcbidmb2N1c2xlYXZlJyxcbidoZWlnaHRjaGFuZ2UnLFxuJ2hpZGRlbmNoYW5nZScsXG4ndG9mcm9udCcsXG4nd2lkdGhjaGFuZ2UnLFxuJ3JlYWR5J1xuXTtcbn1cblxuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICAvL091dHB1dCxcbiAgLy9PbkluaXQsXG4gIC8vQWZ0ZXJWaWV3SW5pdCxcbiAgLy9PbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxuICAvL1NpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1waXZvdGdyaWRjZWxsJyxcbiAgaW5wdXRzOiBFeHRQaXZvdGdyaWRjZWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogRXh0UGl2b3RncmlkY2VsbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRQaXZvdGdyaWRjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0UGl2b3RncmlkY2VsbENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2Uge1xuICAgIHh0eXBlOiBzdHJpbmc7XG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIGVSZWY6IEVsZW1lbnRSZWYsXG4gICAgICAgIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgaG9zdENvbXBvbmVudDogRW5nQmFzZVxuICAgICl7XG4gICAgICAgIHN1cGVyKFxuICAgICAgICAgICAgZVJlZixcbiAgICAgICAgICAgIGhvc3RDb21wb25lbnQsXG4gICAgICAgICAgICBFeHRQaXZvdGdyaWRjZWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgICAgICAgICAgIEV4dFBpdm90Z3JpZGNlbGxNZXRhRGF0YS5FVkVOVFNcbiAgICAgICAgKVxuICAgICAgICB0aGlzLnh0eXBlID0gJ3Bpdm90Z3JpZGNlbGwnXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25EZXN0cm95KClcbiAgICB9XG59XG4iXX0=