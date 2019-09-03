//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
var gridcellMetaData = /** @class */ (function () {
    function gridcellMetaData() {
    }
    gridcellMetaData.XTYPE = 'gridcell';
    gridcellMetaData.PROPERTIES = [
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
        'align',
        'fitToParent',
        'config'
    ];
    gridcellMetaData.EVENTS = [
        { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforetofront', parameters: 'gridcell' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'gridcell,event' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'focus', parameters: 'gridcell,event' },
        { name: 'focusenter', parameters: 'gridcell,event' },
        { name: 'focusleave', parameters: 'gridcell,event' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'tofront', parameters: 'gridcell' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    gridcellMetaData.EVENTNAMES = [
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
    return gridcellMetaData;
}());
export { gridcellMetaData };
var ExtGridcellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtGridcellComponent, _super);
    function ExtGridcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, gridcellMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtGridcellComponent_1 = ExtGridcellComponent;
    ExtGridcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit(gridcellMetaData);
    };
    ExtGridcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(gridcellMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtGridcellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtGridcellComponent_1;
    ExtGridcellComponent = ExtGridcellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-gridcell',
            inputs: gridcellMetaData.PROPERTIES,
            outputs: gridcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtGridcellComponent);
    return ExtGridcellComponent;
}(EngBase));
export { ExtGridcellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWdyaWRjZWxsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItYWxsLyIsInNvdXJjZXMiOlsic3JjL2V4dC1ncmlkY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywyQ0FBMkM7O0FBRzNDLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDO0lBQUE7SUFxSEEsQ0FBQztJQXBIZSxzQkFBSyxHQUFXLFVBQVUsQ0FBQztJQUMzQiwyQkFBVSxHQUFhO1FBQ25DLEtBQUs7UUFDTCxVQUFVO1FBQ1YsT0FBTztRQUNQLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLE9BQU87UUFDUCxXQUFXO1FBQ1gsYUFBYTtRQUNiLGdCQUFnQjtRQUNoQixpQkFBaUI7UUFDakIsV0FBVztRQUNYLGdCQUFnQjtRQUNoQixNQUFNO1FBQ04sU0FBUztRQUNULFdBQVc7UUFDWCxRQUFRO1FBQ1IsU0FBUztRQUNULEtBQUs7UUFDTCxRQUFRO1FBQ1IsZ0JBQWdCO1FBQ2hCLFlBQVk7UUFDWixzQkFBc0I7UUFDdEIsb0JBQW9CO1FBQ3BCLFVBQVU7UUFDVixZQUFZO1FBQ1osTUFBTTtRQUNOLFNBQVM7UUFDVCxVQUFVO1FBQ1YsV0FBVztRQUNYLFFBQVE7UUFDUixRQUFRO1FBQ1IsVUFBVTtRQUNWLElBQUk7UUFDSixhQUFhO1FBQ2IsUUFBUTtRQUNSLFFBQVE7UUFDUixlQUFlO1FBQ2YsY0FBYztRQUNkLFdBQVc7UUFDWCxRQUFRO1FBQ1IsTUFBTTtRQUNOLFVBQVU7UUFDVixTQUFTO1FBQ1QsV0FBVztRQUNYLFVBQVU7UUFDVixRQUFRO1FBQ1IsV0FB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QSxDQUFBLENBQUM7O0lBbkI3RCxvQkFBb0I7UUFQaEMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLGNBQWM7WUFDeEIsTUFBTSxFQUFFLGdCQUFnQixDQUFDLFVBQVU7WUFDbkMsT0FBTyxFQUFFLGdCQUFnQixDQUFDLFVBQVU7WUFDcEMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsY0FBTSxPQUFBLHNCQUFvQixFQUFwQixDQUFvQixDQUFDLEVBQUMsQ0FBQztZQUNwRixRQUFRLEVBQUUsNkJBQTZCO1NBQ3hDLENBQUM7UUFFZ0MsbUJBQUEsSUFBSSxFQUFFLENBQUEsRUFBRSxtQkFBQSxRQUFRLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBO2lEQUEzQyxVQUFVLEVBQXlELE9BQU87T0FEbEYsb0JBQW9CLENBMEJoQztJQUFELDJCQUFDO0NBQUEsQUExQkQsQ0FBMEMsT0FBTyxHQTBCaEQ7U0ExQlksb0JBQW9CIiwic291cmNlc0NvbnRlbnQiOlsiLy9FeHQub25SZWFkeShmdW5jdGlvbigpIHtcbi8vaW1wb3J0IHsgTmdab25lIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4vL2ltcG9ydCB7IFJvdXRlciB9IGZyb20gJ0Bhbmd1bGFyL3JvdXRlcic7XG5cbmRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBJbmplY3RhYmxlLFxuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIE91dHB1dCxcbiAgT25Jbml0LFxuICBBZnRlclZpZXdJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZixcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEVuZ0Jhc2UgfSBmcm9tICcuL2VuZy1iYXNlJztcbmV4cG9ydCBjbGFzcyBncmlkY2VsbE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2dyaWRjZWxsJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW5nJyxcbiAgICAndmlld3BvcnQnLFxuICAgICdhbGlnbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUZvcm11bGFzJyxcbiAgICAnYWxpZ24nLFxuICAgICdhbGlnblNlbGYnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdiaW5kJyxcbiAgICAnYm9keUNscycsXG4gICAgJ2JvZHlTdHlsZScsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2NlbGxDbHMnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW4nLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRUb29sV2VpZ2h0cycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZW5jb2RlSHRtbCcsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmb3JtYXR0ZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2lkJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3Jhd1ZhbHVlJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJlcicsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2NvcGUnLFxuICAgICdzZWxlY3RhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc3R5bGUnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbERlZmF1bHRzJyxcbiAgICAndG9vbHMnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd5JyxcbiAgICAnemVyb1ZhbHVlJyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnYWxpZ24nLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcbntuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2dyaWRjZWxsJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidncmlkY2VsbCxldmVudCd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidmb2N1cycscGFyYW1ldGVyczonZ3JpZGNlbGwsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidncmlkY2VsbCxldmVudCd9LFxue25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWRjZWxsLGV2ZW50J30sXG57bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2dyaWRjZWxsJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG4nYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuJ2JlZm9yZXRvZnJvbnQnLFxuJ2JlZm9yZXdpZHRoY2hhbmdlJyxcbidibHVyJyxcbidkaXNhYmxlZGNoYW5nZScsXG4nZm9jdXMnLFxuJ2ZvY3VzZW50ZXInLFxuJ2ZvY3VzbGVhdmUnLFxuJ2hlaWdodGNoYW5nZScsXG4naGlkZGVuY2hhbmdlJyxcbid0b2Zyb250Jyxcbid3aWR0aGNoYW5nZScsXG4ncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWdyaWRjZWxsJyxcbiAgaW5wdXRzOiBncmlkY2VsbE1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGdyaWRjZWxsTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IEVuZ0Jhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEdyaWRjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0R3JpZGNlbGxDb21wb25lbnQgZXh0ZW5kcyBFbmdCYXNlIGltcGxlbWVudHMgT25Jbml0LCBBZnRlclZpZXdJbml0LCBPbkNoYW5nZXMgIHtcbiAgICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBFbmdCYXNlKSB7XG4gICAgICAgIHN1cGVyKGVSZWYubmF0aXZlRWxlbWVudCxncmlkY2VsbE1ldGFEYXRhLGhvc3RDb21wb25lbnQpXG4gICAgfVxuXG4gICAgcHVibGljIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VPbkluaXQoZ3JpZGNlbGxNZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KGdyaWRjZWxsTWV0YURhdGEpXG4gICAgfVxuXG5cblxuICAvL3B1YmxpYyBuZ0FmdGVyQ29udGVudEluaXQoKSB7XG4gIC8vICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgLy99XG5cbiAgcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cblxuXG4gICAvLyBwdWJsaWMgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgLy8gICBjb25zb2xlLmxvZygnbmdBZnRlclZpZXdDaGVja2VkJylcbiAgLy99XG59XG5cbiJdfQ==