//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
var checkcellMetaData = /** @class */ (function () {
    function checkcellMetaData() {
    }
    checkcellMetaData.XTYPE = 'checkcell';
    checkcellMetaData.PROPERTIES = [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
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
        'flex',
        'floated',
        'focusCls',
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
        'record',
        'reference',
        'relative',
        'renderTo',
        'ripple',
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
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'value',
        'viewModel',
        'width',
        'x',
        'y',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    checkcellMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'checkcell' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'checkcell,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'checkcell,event' },
        { name: 'focusenter', parameters: 'checkcell,event' },
        { name: 'focusleave', parameters: 'checkcell,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'checkcell' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    checkcellMetaData.EVENTNAMES = [
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
    return checkcellMetaData;
}());
export { checkcellMetaData };
var ExtCheckcellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCheckcellComponent, _super);
    function ExtCheckcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, checkcellMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtCheckcellComponent_1 = ExtCheckcellComponent;
    ExtCheckcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit(checkcellMetaData);
    };
    ExtCheckcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(checkcellMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtCheckcellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtCheckcellComponent_1;
    ExtCheckcellComponent = ExtCheckcellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-checkcell',
            inputs: checkcellMetaData.PROPERTIES,
            outputs: checkcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCheckcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtCheckcellComponent);
    return ExtCheckcellComponent;
}(EngBase));
export { ExtCheckcellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNoZWNrY2VsbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWdyaWQvIiwic291cmNlcyI6WyJzcmMvZXh0LWNoZWNrY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywyQ0FBMkM7O0FBRzNDLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDO0lBQUE7SUE4R0EsQ0FBQztJQTdHZSx1QkFBSyxHQUFXLFdBQVcsQ0FBQztJQUM1Qiw0QkFBVSxHQUFhO1FBQ25DLEtBQUs7UUFDTCxVQUFVO1FBQ1YsT0FBTztRQUNQLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLE9BQU87UUFDUCxXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7UUFDWCxRQUFRO1FBQ1IsU0FBUztRQUNULEtBQUs7UUFDTCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVixNQUFNO1FBQ04sU0FBUztRQUNULFVBQVU7UUFDVixRQUFRO1FBQ1IsUUFBUTtRQUNSLFVBQVU7UUFDVixJQUFJO1FBQ0osYUFBYTtRQUNiLFFBQVE7UUFDUixRQUFRO1FBQ1IsZUFBZTtRQUNmLGNBQWM7UUFDZCxXQUFXO1FBQ1gsUUFBUTtRQUNSLE1BQU07UUFDTixVQUFVO1FBQ1YsU0FBUztRQUNULFdBQVc7UUFDWCxRQUFRO1FBQ1IsV0FBVztRQUNYLFVBQVU7UUFDVixVQUFVO1FBQ1Ys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QixNQUFNLEVBQUUsaUJBQWlCLENBQUMsVUFBVTtZQUNwQyxPQUFPLEVBQUUsaUJBQWlCLENBQUMsVUFBVTtZQUNyQyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsdUJBQXFCLEVBQXJCLENBQXFCLENBQUMsRUFBQyxDQUFDO1lBQ3JGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUVnQyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQTNDLFVBQVUsRUFBeUQsT0FBTztPQURsRixxQkFBcUIsQ0EwQmpDO0lBQUQsNEJBQUM7Q0FBQSxBQTFCRCxDQUEyQyxPQUFPLEdBMEJqRDtTQTFCWSxxQkFBcUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL0V4dC5vblJlYWR5KGZ1bmN0aW9uKCkge1xuLy9pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZGVjbGFyZSB2YXIgRXh0OiBhbnlcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuZXhwb3J0IGNsYXNzIGNoZWNrY2VsbE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2NoZWNrY2VsbCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2VuZycsXG4gICAgJ3ZpZXdwb3J0JyxcbiAgICAnYWxpZ24nLFxuICAgICdwbHVnaW5zJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVGb3JtdWxhcycsXG4gICAgJ2FsaWduJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYmluZCcsXG4gICAgJ2JvZHlDbHMnLFxuICAgICdib2R5U3R5bGUnLFxuICAgICdib3JkZXInLFxuICAgICdjZWxsQ2xzJyxcbiAgICAnY2xzJyxcbiAgICAnY29sdW1uJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZWZhdWx0VG9vbFdlaWdodHMnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2lkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaXBwbGUnLFxuICAgICdzZWxlY3RhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc3R5bGUnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbERlZmF1bHRzJyxcbiAgICAndG9vbHMnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd5JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2NoZWNrY2VsbCd9LFxue25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmx1cicscGFyYW1ldGVyczonY2hlY2tjZWxsLGV2ZW50J30sXG57bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOidjaGVja2NlbGwsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidjaGVja2NlbGwsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjaGVja2NlbGwsZXZlbnQnfSxcbntuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonY2hlY2tjZWxsJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG4nYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuJ2JlZm9yZXRvZnJvbnQnLFxuJ2JlZm9yZXdpZHRoY2hhbmdlJyxcbidibHVyJyxcbidkaXNhYmxlZGNoYW5nZScsXG4nZm9jdXMnLFxuJ2ZvY3VzZW50ZXInLFxuJ2ZvY3VzbGVhdmUnLFxuJ2hlaWdodGNoYW5nZScsXG4naGlkZGVuY2hhbmdlJyxcbid0b2Zyb250Jyxcbid3aWR0aGNoYW5nZScsXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWNoZWNrY2VsbCcsXG4gIGlucHV0czogY2hlY2tjZWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2hlY2tjZWxsTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENoZWNrY2VsbENvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENoZWNrY2VsbENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UpIHtcbiAgICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGNoZWNrY2VsbE1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoY2hlY2tjZWxsTWV0YURhdGEpXG4gICAgfVxuXG4gICAgcHVibGljIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlQWZ0ZXJWaWV3SW5pdChjaGVja2NlbGxNZXRhRGF0YSlcbiAgICB9XG5cblxuXG4gIC8vcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgLy8gIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAvL31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxuXG5cbiAgIC8vIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAvLyAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0NoZWNrZWQnKVxuICAvL31cbn1cblxuIl19