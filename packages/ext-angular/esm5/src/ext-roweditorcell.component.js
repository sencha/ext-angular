//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
import * as tslib_1 from "tslib";
import { Injectable, Host, Optional, SkipSelf, Output, OnInit, AfterViewInit, OnChanges, Component, ElementRef, forwardRef, SimpleChanges } from '@angular/core';
import { EngBase } from './eng-base';
var roweditorcellMetaData = /** @class */ (function () {
    function roweditorcellMetaData() {
    }
    roweditorcellMetaData.XTYPE = 'roweditorcell';
    roweditorcellMetaData.PROPERTIES = [
        'eng',
        'viewport',
        'align',
        'plugins',
        'responsiveConfig',
        'responsiveFormulas',
        'alignSelf',
        'alwaysOnTop',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'axisLock',
        'bind',
        'border',
        'bottom',
        'centered',
        'cls',
        'constrainAlign',
        'contentEl',
        'controller',
        'data',
        'defaultListenerScope',
        'disabled',
        'displayed',
        'docked',
        'draggable',
        'flex',
        'floated',
        'focusCls',
        'fullscreen',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'html',
        'id',
        'instanceCls',
        'itemId',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'left',
        'listeners',
        'margin',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'relative',
        'renderTo',
        'right',
        'ripple',
        'scrollable',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'stateful',
        'statefulDefaults',
        'stateId',
        'style',
        'tabIndex',
        'toFrontOnShow',
        'tooltip',
        'top',
        'touchAction',
        'tpl',
        'tplWriteMode',
        'translatable',
        'twoWayBindable',
        'ui',
        'userCls',
        'userSelectable',
        'viewModel',
        'weight',
        'width',
        'x',
        'xtype',
        'y',
        'zIndex',
        'platformConfig',
        'responsiveConfig',
        'align',
        'fitToParent',
        'config'
    ];
    roweditorcellMetaData.EVENTS = [
        { name: 'added', parameters: 'sender,container,index' },
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
        { name: 'beforetofront', parameters: 'roweditorcell' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'roweditorcell,event' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'roweditorcell,event' },
        { name: 'focusenter', parameters: 'roweditorcell,event' },
        { name: 'focusleave', parameters: 'roweditorcell,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'tofront', parameters: 'roweditorcell' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    roweditorcellMetaData.EVENTNAMES = [
        'added',
        'beforebottomchange',
        'beforecenteredchange',
        'beforedisabledchange',
        'beforedockedchange',
        'beforeheightchange',
        'beforehiddenchange',
        'beforehide',
        'beforeleftchange',
        'beforemaxHeightchange',
        'beforemaxWidthchange',
        'beforeminHeightchange',
        'beforeminWidthchange',
        'beforeorientationchange',
        'beforerightchange',
        'beforescrollablechange',
        'beforeshow',
        'beforetofront',
        'beforetopchange',
        'beforewidthchange',
        'blur',
        'bottomchange',
        'centeredchange',
        'destroy',
        'disabledchange',
        'dockedchange',
        'erased',
        'floatingchange',
        'focus',
        'focusenter',
        'focusleave',
        'fullscreen',
        'heightchange',
        'hiddenchange',
        'hide',
        'initialize',
        'leftchange',
        'maxHeightchange',
        'maxWidthchange',
        'minHeightchange',
        'minWidthchange',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'removed',
        'resize',
        'rightchange',
        'scrollablechange',
        'show',
        'tofront',
        'topchange',
        'updatedata',
        'widthchange',
        'ready'
    ];
    return roweditorcellMetaData;
}());
export { roweditorcellMetaData };
var ExtRoweditorcellComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtRoweditorcellComponent, _super);
    function ExtRoweditorcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, roweditorcellMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    ExtRoweditorcellComponent_1 = ExtRoweditorcellComponent;
    ExtRoweditorcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit(roweditorcellMetaData);
    };
    ExtRoweditorcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit(roweditorcellMetaData);
    };
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ExtRoweditorcellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
    var ExtRoweditorcellComponent_1;
    ExtRoweditorcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRoweditorcellComponent = ExtRoweditorcellComponent_1 = tslib_1.__decorate([
        Component({
            selector: 'ext-roweditorcell',
            inputs: roweditorcellMetaData.PROPERTIES,
            outputs: roweditorcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRoweditorcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
        tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
    ], ExtRoweditorcellComponent);
    return ExtRoweditorcellComponent;
}(EngBase));
export { ExtRoweditorcellComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LXJvd2VkaXRvcmNlbGwuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci8iLCJzb3VyY2VzIjpbInNyYy9leHQtcm93ZWRpdG9yY2VsbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsMEJBQTBCO0FBQzFCLHlDQUF5QztBQUN6QywyQ0FBMkM7O0FBRzNDLE9BQU8sRUFDTCxVQUFVLEVBQ1YsSUFBSSxFQUNKLFFBQVEsRUFDUixRQUFRLEVBQ1IsTUFBTSxFQUNOLE1BQU0sRUFDTixhQUFhLEVBQ2IsU0FBUyxFQUNULFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNWLGFBQWEsRUFDZCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDO0lBQUE7SUF1TkEsQ0FBQztJQXROZSwyQkFBSyxHQUFXLGVBQWUsQ0FBQztJQUNoQyxnQ0FBVSxHQUFhO1FBQ25DLEtBQUs7UUFDTCxVQUFVO1FBQ1YsT0FBTztRQUNQLFNBQVM7UUFDVCxrQkFBa0I7UUFDbEIsb0JBQW9CO1FBQ3BCLFdBQVc7UUFDWCxhQUFhO1FBQ2IsZ0JBQWdCO1FBQ2hCLGlCQUFpQjtRQUNqQixXQUFXO1FBQ1gsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixNQUFNO1FBQ04sUUFBUTtRQUNSLFFBQVE7UUFDUixVQUFVO1FBQ1YsS0FBSztRQUNMLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsWUFBWTtRQUNaLE1BQU07UUFDTixzQkFBc0I7UUFDdEIsVUFBVTtRQUNWLFdBQVc7UUFDWCxRQUFRO1FBQ1IsV0FBVztRQUNYLE1BQU07UUFDTixTQUFTO1FBQ1QsVUFBVTtRQUNWLFlBQVk7UUFDWixRQUFRO1FBQ1IsUUFBUTtRQUNSLGVBQWU7UUFDZixVQUFVO1FBQ1YsZUFBZTtRQUNmLE1BQU07UUFDTixJQUFJO1FBQ0osYUFBYTtRQUNiLFFBQVE7UUFDUixRQUFRO1FBQ1Is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SSxJQUFJLENBQUMsaUJBQWlCLENBQUMscUJBQXFCLENBQUMsQ0FBQTtJQUNqRCxDQUFDO0lBSUgsK0JBQStCO0lBQy9CLCtCQUErQjtJQUMvQixHQUFHO0lBRUksK0NBQVcsR0FBbEIsVUFBbUIsT0FBc0IsSUFBRyxJQUFJLENBQUMsYUFBYSxDQUFDLE9BQU8sQ0FBQyxDQUFBLENBQUEsQ0FBQzs7O2dCQWxCckQsVUFBVTtnQkFBeUQsT0FBTyx1QkFBN0QsSUFBSSxZQUFJLFFBQVEsWUFBSSxRQUFROztJQURqRCx5QkFBeUI7UUFQckMsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLG1CQUFtQjtZQUM3QixNQUFNLEVBQUUscUJBQXFCLENBQUMsVUFBVTtZQUN4QyxPQUFPLEVBQUUscUJBQXFCLENBQUMsVUFBVTtZQUN6QyxTQUFTLEVBQUUsQ0FBQyxFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUUsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsMkJBQXlCLEVBQXpCLENBQXlCLENBQUMsRUFBQyxDQUFDO1lBQ3pGLFFBQVEsRUFBRSw2QkFBNkI7U0FDeEMsQ0FBQztRQUVnQyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7aURBQTNDLFVBQVUsRUFBeUQsT0FBTztPQURsRix5QkFBeUIsQ0EwQnJDO0lBQUQsZ0NBQUM7Q0FBQSxBQTFCRCxDQUErQyxPQUFPLEdBMEJyRDtTQTFCWSx5QkFBeUIiLCJzb3VyY2VzQ29udGVudCI6WyIvL0V4dC5vblJlYWR5KGZ1bmN0aW9uKCkge1xuLy9pbXBvcnQgeyBOZ1pvbmUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbi8vaW1wb3J0IHsgUm91dGVyIH0gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJztcblxuZGVjbGFyZSB2YXIgRXh0OiBhbnlcbmltcG9ydCB7XG4gIEluamVjdGFibGUsXG4gIEhvc3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyVmlld0luaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmLFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRW5nQmFzZSB9IGZyb20gJy4vZW5nLWJhc2UnO1xuZXhwb3J0IGNsYXNzIHJvd2VkaXRvcmNlbGxNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdyb3dlZGl0b3JjZWxsJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnZW5nJyxcbiAgICAndmlld3BvcnQnLFxuICAgICdhbGlnbicsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUZvcm11bGFzJyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZUFuaW1hdGlvbicsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc3RhdGVmdWwnLFxuICAgICdzdGF0ZWZ1bERlZmF1bHRzJyxcbiAgICAnc3RhdGVJZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczoncm93ZWRpdG9yY2VsbCd9LFxue25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmx1cicscGFyYW1ldGVyczoncm93ZWRpdG9yY2VsbCxldmVudCd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG57bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J3Jvd2VkaXRvcmNlbGwsZXZlbnQnfSxcbntuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidyb3dlZGl0b3JjZWxsLGV2ZW50J30sXG57bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczoncm93ZWRpdG9yY2VsbCxldmVudCd9LFxue25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxue25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcbntuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxue25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxue25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG57bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J3Jvd2VkaXRvcmNlbGwnfSxcbntuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG57bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcbidhZGRlZCcsXG4nYmVmb3JlYm90dG9tY2hhbmdlJyxcbidiZWZvcmVjZW50ZXJlZGNoYW5nZScsXG4nYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuJ2JlZm9yZWRvY2tlZGNoYW5nZScsXG4nYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuJ2JlZm9yZWhpZGUnLFxuJ2JlZm9yZWxlZnRjaGFuZ2UnLFxuJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcbidiZWZvcmVyaWdodGNoYW5nZScsXG4nYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG4nYmVmb3Jlc2hvdycsXG4nYmVmb3JldG9mcm9udCcsXG4nYmVmb3JldG9wY2hhbmdlJyxcbidiZWZvcmV3aWR0aGNoYW5nZScsXG4nYmx1cicsXG4nYm90dG9tY2hhbmdlJyxcbidjZW50ZXJlZGNoYW5nZScsXG4nZGVzdHJveScsXG4nZGlzYWJsZWRjaGFuZ2UnLFxuJ2RvY2tlZGNoYW5nZScsXG4nZXJhc2VkJyxcbidmbG9hdGluZ2NoYW5nZScsXG4nZm9jdXMnLFxuJ2ZvY3VzZW50ZXInLFxuJ2ZvY3VzbGVhdmUnLFxuJ2Z1bGxzY3JlZW4nLFxuJ2hlaWdodGNoYW5nZScsXG4naGlkZGVuY2hhbmdlJyxcbidoaWRlJyxcbidpbml0aWFsaXplJyxcbidsZWZ0Y2hhbmdlJyxcbidtYXhIZWlnaHRjaGFuZ2UnLFxuJ21heFdpZHRoY2hhbmdlJyxcbidtaW5IZWlnaHRjaGFuZ2UnLFxuJ21pbldpZHRoY2hhbmdlJyxcbidtb3ZlZCcsXG4nb3JpZW50YXRpb25jaGFuZ2UnLFxuJ3BhaW50ZWQnLFxuJ3Bvc2l0aW9uZWRjaGFuZ2UnLFxuJ3JlbW92ZWQnLFxuJ3Jlc2l6ZScsXG4ncmlnaHRjaGFuZ2UnLFxuJ3Njcm9sbGFibGVjaGFuZ2UnLFxuJ3Nob3cnLFxuJ3RvZnJvbnQnLFxuJ3RvcGNoYW5nZScsXG4ndXBkYXRlZGF0YScsXG4nd2lkdGhjaGFuZ2UnLFxuJ3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1yb3dlZGl0b3JjZWxsJyxcbiAgaW5wdXRzOiByb3dlZGl0b3JjZWxsTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogcm93ZWRpdG9yY2VsbE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBFbmdCYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRSb3dlZGl0b3JjZWxsQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZT48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0Um93ZWRpdG9yY2VsbENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UpIHtcbiAgICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LHJvd2VkaXRvcmNlbGxNZXRhRGF0YSxob3N0Q29tcG9uZW50KVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICAgICAgdGhpcy5iYXNlT25Jbml0KHJvd2VkaXRvcmNlbGxNZXRhRGF0YSlcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB0aGlzLmJhc2VBZnRlclZpZXdJbml0KHJvd2VkaXRvcmNlbGxNZXRhRGF0YSlcbiAgICB9XG5cblxuXG4gIC8vcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgLy8gIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAvL31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxuXG5cbiAgIC8vIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAvLyAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0NoZWNrZWQnKVxuICAvL31cbn1cblxuIl19