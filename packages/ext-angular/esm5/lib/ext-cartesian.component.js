/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { base } from './base';
var cartesianMetaData = /** @class */ (function () {
    function cartesianMetaData() {
    }
    cartesianMetaData.XTYPE = 'cartesian';
    cartesianMetaData.PROPERTIES = [
        'activeChildTabIndex',
        'activeItem',
        'allowFocusingDisabledChildren',
        'alwaysOnTop',
        'animation',
        'ariaAttributes',
        'ariaDescribedBy',
        'ariaLabel',
        'ariaLabelledBy',
        'autoDestroy',
        'autoSize',
        'axes',
        'axisLock',
        'background',
        'bind',
        'border',
        'bottom',
        'captions',
        'cardSwitchAnimation',
        'centered',
        'cls',
        'colors',
        'constrainAlign',
        'contentEl',
        'control',
        'controller',
        'data',
        'defaultFocus',
        'defaultListenerScope',
        'defaults',
        'defaultType',
        'disabled',
        'displayed',
        'docked',
        'downloadServerUrl',
        'draggable',
        'engine',
        'enterAnimation',
        'eventHandlers',
        'exitAnimation',
        'flex',
        'flipXY',
        'floated',
        'focusableContainer',
        'focusCls',
        'fullscreen',
        'gradients',
        'height',
        'hidden',
        'hideAnimation',
        'hideMode',
        'hideOnMaskTap',
        'highlightItem',
        'html',
        'id',
        'inactiveChildTabIndex',
        'innerCls',
        'innerPadding',
        'insetPadding',
        'instanceCls',
        'interactions',
        'itemId',
        'items',
        'keyMap',
        'keyMapEnabled',
        'keyMapTarget',
        'layout',
        'left',
        'legend',
        'listeners',
        'mainRect',
        'manageBorders',
        'margin',
        'masked',
        'maxHeight',
        'maxWidth',
        'minHeight',
        'minWidth',
        'modal',
        'modelValidation',
        'name',
        'nameable',
        'nameHolder',
        'padding',
        'plugins',
        'publishes',
        'record',
        'reference',
        'referenceHolder',
        'relative',
        'renderTo',
        'resetFocusPosition',
        'resizeHandler',
        'right',
        'ripple',
        'scrollable',
        'selfAlign',
        'series',
        'session',
        'shadow',
        'shareableName',
        'shim',
        'showAnimation',
        'sprites',
        'stateful',
        'statefulDefaults',
        'stateId',
        'store',
        'style',
        'surfaceZIndexes',
        'tabIndex',
        'theme',
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
        'weighted',
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
    cartesianMetaData.EVENTS = [
        { name: 'activate', parameters: 'newActiveItem,cartesian,oldActiveItem' },
        { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
        { name: 'add', parameters: 'cartesian,item,index' },
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
        { name: 'beforerefresh', parameters: 'cartesian' },
        { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforeshow', parameters: 'sender' },
        { name: 'beforetofront', parameters: 'cartesian' },
        { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
        { name: 'blur', parameters: 'cartesian,event' },
        { name: 'bodyresize', parameters: 'size' },
        { name: 'bottomchange', parameters: 'sender,value,oldValue' },
        { name: 'centeredchange', parameters: 'sender,value,oldValue' },
        { name: 'deactivate', parameters: 'oldActiveItem,cartesian,newActiveItem' },
        { name: 'destroy', parameters: '' },
        { name: 'disabledchange', parameters: 'sender,value,oldValue' },
        { name: 'dockedchange', parameters: 'sender,value,oldValue' },
        { name: 'erased', parameters: 'sender' },
        { name: 'floatingchange', parameters: 'sender,positioned' },
        { name: 'focus', parameters: 'cartesian,event' },
        { name: 'focusenter', parameters: 'cartesian,event' },
        { name: 'focusleave', parameters: 'cartesian,event' },
        { name: 'fullscreen', parameters: 'sender' },
        { name: 'heightchange', parameters: 'sender,value,oldValue' },
        { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
        { name: 'hide', parameters: 'sender' },
        { name: 'initialize', parameters: 'sender' },
        { name: 'itemclick', parameters: 'chart,item,event' },
        { name: 'itemdblclick', parameters: 'chart,item,event' },
        { name: 'itemhighlight', parameters: 'cartesian,newItem,oldItem' },
        { name: 'itemhighlightchange', parameters: 'cartesian,newItem,oldItem' },
        { name: 'itemmousedown', parameters: 'chart,item,event' },
        { name: 'itemmousemove', parameters: 'chart,item,event' },
        { name: 'itemmouseout', parameters: 'chart,item,event' },
        { name: 'itemmouseover', parameters: 'chart,item,event' },
        { name: 'itemmouseup', parameters: 'chart,item,event' },
        { name: 'itemtap', parameters: 'chart,item,event' },
        { name: 'layout', parameters: 'cartesian' },
        { name: 'leftchange', parameters: 'sender,value,oldValue' },
        { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
        { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
        { name: 'move', parameters: 'cartesian,item,toIndex,fromIndex' },
        { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
        { name: 'orientationchange', parameters: '' },
        { name: 'painted', parameters: 'sender,element' },
        { name: 'positionedchange', parameters: 'sender,positioned' },
        { name: 'redraw', parameters: 'cartesian' },
        { name: 'refresh', parameters: 'cartesian' },
        { name: 'remove', parameters: 'cartesian,item,index' },
        { name: 'removed', parameters: 'sender,container,index' },
        { name: 'renderedchange', parameters: 'cartesian,item,rendered' },
        { name: 'resize', parameters: 'element,info' },
        { name: 'rightchange', parameters: 'sender,value,oldValue' },
        { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
        { name: 'show', parameters: 'sender' },
        { name: 'spriteclick', parameters: 'sprite,event' },
        { name: 'spritedblclick', parameters: 'sprite,event' },
        { name: 'spritemousedown', parameters: 'sprite,event' },
        { name: 'spritemousemove', parameters: 'sprite,event' },
        { name: 'spritemouseout', parameters: 'sprite,event' },
        { name: 'spritemouseover', parameters: 'sprite,event' },
        { name: 'spritemouseup', parameters: 'sprite,event' },
        { name: 'spritetap', parameters: 'sprite,event' },
        { name: 'storechange', parameters: 'chart,newStore,oldStore' },
        { name: 'tofront', parameters: 'cartesian' },
        { name: 'topchange', parameters: 'sender,value,oldValue' },
        { name: 'updatedata', parameters: 'sender,newData' },
        { name: 'widthchange', parameters: 'sender,value,oldValue' },
        { name: 'ready', parameters: '' }
    ];
    cartesianMetaData.EVENTNAMES = [
        'activate',
        'activeItemchange',
        'add',
        'added',
        'beforeactiveItemchange',
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
        'beforerefresh',
        'beforerightchange',
        'beforescrollablechange',
        'beforeshow',
        'beforetofront',
        'beforetopchange',
        'beforewidthchange',
        'blur',
        'bodyresize',
        'bottomchange',
        'centeredchange',
        'deactivate',
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
        'itemclick',
        'itemdblclick',
        'itemhighlight',
        'itemhighlightchange',
        'itemmousedown',
        'itemmousemove',
        'itemmouseout',
        'itemmouseover',
        'itemmouseup',
        'itemtap',
        'layout',
        'leftchange',
        'maxHeightchange',
        'maxWidthchange',
        'minHeightchange',
        'minWidthchange',
        'move',
        'moved',
        'orientationchange',
        'painted',
        'positionedchange',
        'redraw',
        'refresh',
        'remove',
        'removed',
        'renderedchange',
        'resize',
        'rightchange',
        'scrollablechange',
        'show',
        'spriteclick',
        'spritedblclick',
        'spritemousedown',
        'spritemousemove',
        'spritemouseout',
        'spritemouseover',
        'spritemouseup',
        'spritetap',
        'storechange',
        'tofront',
        'topchange',
        'updatedata',
        'widthchange',
        'ready'
    ];
    return cartesianMetaData;
}());
export { cartesianMetaData };
if (false) {
    /** @type {?} */
    cartesianMetaData.XTYPE;
    /** @type {?} */
    cartesianMetaData.PROPERTIES;
    /** @type {?} */
    cartesianMetaData.EVENTS;
    /** @type {?} */
    cartesianMetaData.EVENTNAMES;
}
var ExtCartesianComponent = /** @class */ (function (_super) {
    tslib_1.__extends(ExtCartesianComponent, _super);
    function ExtCartesianComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef.nativeElement, cartesianMetaData, hostComponent) || this;
        _this.hostComponent = hostComponent;
        return _this;
    }
    /**
     * @return {?}
     */
    ExtCartesianComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        this.baseOnInit(cartesianMetaData);
    };
    /**
     * @return {?}
     */
    ExtCartesianComponent.prototype.ngAfterContentInit = /**
     * @return {?}
     */
    function () {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    };
    ExtCartesianComponent.decorators = [
        { type: Component, args: [{
                    selector: 'cartesian',
                    inputs: cartesianMetaData.PROPERTIES,
                    outputs: cartesianMetaData.EVENTNAMES,
                    providers: [{ provide: base, useExisting: forwardRef((/**
                             * @return {?}
                             */
                            function () { return ExtCartesianComponent; })) }],
                    template: '<ng-template></ng-template>'
                }] }
    ];
    /** @nocollapse */
    ExtCartesianComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: base, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    return ExtCartesianComponent;
}(base));
export { ExtCartesianComponent };
if (false) {
    /** @type {?} */
    ExtCartesianComponent.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhcnRlc2lhbi5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2V4dC1jYXJ0ZXNpYW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsT0FBTyxFQUVMLElBQUksRUFDSixRQUFRLEVBQ1IsUUFBUSxFQUtSLFNBQVMsRUFDVCxVQUFVLEVBQ1YsVUFBVSxFQUNYLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBRSxJQUFJLEVBQUUsTUFBTSxRQUFRLENBQUM7QUFDOUI7SUFBQTtJQThUQSxDQUFDO0lBN1RlLHVCQUFLLEdBQVcsV0FBVyxDQUFDO0lBQzVCLDRCQUFVLEdBQWE7UUFDbkMscUJBQXFCO1FBQ3JCLFlBQVk7UUFDWiwrQkFBK0I7UUFDL0IsYUFBYTtRQUNiLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsYUFBYTtRQUNiLFVBQVU7UUFDVixNQUFNO1FBQ04sVUFBVTtRQUNWLFlBQVk7UUFDWixNQUFNO1FBQ04sUUFBUTtRQUNSLFFBQVE7UUFDUixVQUFVO1FBQ1YscUJBQXFCO1FBQ3JCLFVBQVU7UUFDVixLQUFLO1FBQ0wsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQixXQUFXO1FBQ1gsU0FBUztRQUNULFlBQVk7UUFDWixNQUFNO1FBQ04sY0FBYztRQUNkLHNCQUFzQjtRQUN0QixVQUFVO1FBQ1YsYUFBYTtRQUNiLFVBQVU7UUFDVixXQUFXO1FBQ1gsUUFBUTtRQUNSLG1CQUFtQjtRQUNuQixXQUFXO1FBQ1gsUUFBUTtRQUNSLGdCQUFnQjtRQUNoQixlQUFlO1FBQ2YsZUFBZTtRQUNmLE1BQU07UUFDTixRQUFRO1FBQ1IsU0FBUztRQUNULG9CQUFvQjtRQUNwQixVQUFVO1FBQ1YsWUFBWTtRQUNaLFdBQVc7UUFDWCxRQUFRO1FBQ1IsUUFBUTtRQUNSLGVBQWU7UUFDZixV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Qzs7OztnQkF6VUMsVUFBVTtnQkFHSCxJQUFJLHVCQXlVUyxJQUFJLFlBQUksUUFBUSxZQUFJLFFBQVE7O0lBWWxELDRCQUFDO0NBQUEsQUFyQkQsQ0FPMkMsSUFBSSxHQWM5QztTQWRZLHFCQUFxQjs7O0lBRWIsOENBQTJEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJDb250ZW50SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWZcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBjYXJ0ZXNpYW5NZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYXJ0ZXNpYW4nO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnYWN0aXZlSXRlbScsXG4gICAgJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhbmltYXRpb24nLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXV0b0Rlc3Ryb3knLFxuICAgICdhdXRvU2l6ZScsXG4gICAgJ2F4ZXMnLFxuICAgICdheGlzTG9jaycsXG4gICAgJ2JhY2tncm91bmQnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnY2FwdGlvbnMnLFxuICAgICdjYXJkU3dpdGNoQW5pbWF0aW9uJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb2xvcnMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2wnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRGb2N1cycsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVmYXVsdHMnLFxuICAgICdkZWZhdWx0VHlwZScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzcGxheWVkJyxcbiAgICAnZG9ja2VkJyxcbiAgICAnZG93bmxvYWRTZXJ2ZXJVcmwnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdlbmdpbmUnLFxuICAgICdlbnRlckFuaW1hdGlvbicsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleGl0QW5pbWF0aW9uJyxcbiAgICAnZmxleCcsXG4gICAgJ2ZsaXBYWScsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c2FibGVDb250YWluZXInLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdncmFkaWVudHMnLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaGlnaGxpZ2h0SXRlbScsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2lubmVyQ2xzJyxcbiAgICAnaW5uZXJQYWRkaW5nJyxcbiAgICAnaW5zZXRQYWRkaW5nJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpbnRlcmFjdGlvbnMnLFxuICAgICdpdGVtSWQnLFxuICAgICdpdGVtcycsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGVnZW5kJyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFpblJlY3QnLFxuICAgICdtYW5hZ2VCb3JkZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWFza2VkJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21vZGFsJyxcbiAgICAnbW9kZWxWYWxpZGF0aW9uJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAnbmFtZUhvbGRlcicsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVmZXJlbmNlSG9sZGVyJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3Jlc2V0Rm9jdXNQb3NpdGlvbicsXG4gICAgJ3Jlc2l6ZUhhbmRsZXInLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njcm9sbGFibGUnLFxuICAgICdzZWxmQWxpZ24nLFxuICAgICdzZXJpZXMnLFxuICAgICdzZXNzaW9uJyxcbiAgICAnc2hhZG93JyxcbiAgICAnc2hhcmVhYmxlTmFtZScsXG4gICAgJ3NoaW0nLFxuICAgICdzaG93QW5pbWF0aW9uJyxcbiAgICAnc3ByaXRlcycsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVmdWxEZWZhdWx0cycsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdG9yZScsXG4gICAgJ3N0eWxlJyxcbiAgICAnc3VyZmFjZVpJbmRleGVzJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0aGVtZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2VpZ2h0ZWQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd4dHlwZScsXG4gICAgJ3knLFxuICAgICd6SW5kZXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdhbGlnbicsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhY3RpdmF0ZScscGFyYW1ldGVyczonbmV3QWN0aXZlSXRlbSxjYXJ0ZXNpYW4sb2xkQWN0aXZlSXRlbSd9LFxuXHRcdHtuYW1lOidhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonYWRkJyxwYXJhbWV0ZXJzOidjYXJ0ZXNpYW4saXRlbSxpbmRleCd9LFxuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWJvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonYmVmb3JlcmVmcmVzaCcscGFyYW1ldGVyczonY2FydGVzaWFuJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2NhcnRlc2lhbid9LFxuXHRcdHtuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonY2FydGVzaWFuLGV2ZW50J30sXG5cdFx0e25hbWU6J2JvZHlyZXNpemUnLHBhcmFtZXRlcnM6J3NpemUnfSxcblx0XHR7bmFtZTonYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkZWFjdGl2YXRlJyxwYXJhbWV0ZXJzOidvbGRBY3RpdmVJdGVtLGNhcnRlc2lhbixuZXdBY3RpdmVJdGVtJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonY2FydGVzaWFuLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2NhcnRlc2lhbixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjYXJ0ZXNpYW4sZXZlbnQnfSxcblx0XHR7bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaXRlbWNsaWNrJyxwYXJhbWV0ZXJzOidjaGFydCxpdGVtLGV2ZW50J30sXG5cdFx0e25hbWU6J2l0ZW1kYmxjbGljaycscGFyYW1ldGVyczonY2hhcnQsaXRlbSxldmVudCd9LFxuXHRcdHtuYW1lOidpdGVtaGlnaGxpZ2h0JyxwYXJhbWV0ZXJzOidjYXJ0ZXNpYW4sbmV3SXRlbSxvbGRJdGVtJ30sXG5cdFx0e25hbWU6J2l0ZW1oaWdobGlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J2NhcnRlc2lhbixuZXdJdGVtLG9sZEl0ZW0nfSxcblx0XHR7bmFtZTonaXRlbW1vdXNlZG93bicscGFyYW1ldGVyczonY2hhcnQsaXRlbSxldmVudCd9LFxuXHRcdHtuYW1lOidpdGVtbW91c2Vtb3ZlJyxwYXJhbWV0ZXJzOidjaGFydCxpdGVtLGV2ZW50J30sXG5cdFx0e25hbWU6J2l0ZW1tb3VzZW91dCcscGFyYW1ldGVyczonY2hhcnQsaXRlbSxldmVudCd9LFxuXHRcdHtuYW1lOidpdGVtbW91c2VvdmVyJyxwYXJhbWV0ZXJzOidjaGFydCxpdGVtLGV2ZW50J30sXG5cdFx0e25hbWU6J2l0ZW1tb3VzZXVwJyxwYXJhbWV0ZXJzOidjaGFydCxpdGVtLGV2ZW50J30sXG5cdFx0e25hbWU6J2l0ZW10YXAnLHBhcmFtZXRlcnM6J2NoYXJ0LGl0ZW0sZXZlbnQnfSxcblx0XHR7bmFtZTonbGF5b3V0JyxwYXJhbWV0ZXJzOidjYXJ0ZXNpYW4nfSxcblx0XHR7bmFtZTonbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOidjYXJ0ZXNpYW4saXRlbSx0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOidvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG5cdFx0e25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG5cdFx0e25hbWU6J3JlZHJhdycscGFyYW1ldGVyczonY2FydGVzaWFuJ30sXG5cdFx0e25hbWU6J3JlZnJlc2gnLHBhcmFtZXRlcnM6J2NhcnRlc2lhbid9LFxuXHRcdHtuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6J2NhcnRlc2lhbixpdGVtLGluZGV4J30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZToncmVuZGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J2NhcnRlc2lhbixpdGVtLHJlbmRlcmVkJ30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG5cdFx0e25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidzcHJpdGVjbGljaycscGFyYW1ldGVyczonc3ByaXRlLGV2ZW50J30sXG5cdFx0e25hbWU6J3Nwcml0ZWRibGNsaWNrJyxwYXJhbWV0ZXJzOidzcHJpdGUsZXZlbnQnfSxcblx0XHR7bmFtZTonc3ByaXRlbW91c2Vkb3duJyxwYXJhbWV0ZXJzOidzcHJpdGUsZXZlbnQnfSxcblx0XHR7bmFtZTonc3ByaXRlbW91c2Vtb3ZlJyxwYXJhbWV0ZXJzOidzcHJpdGUsZXZlbnQnfSxcblx0XHR7bmFtZTonc3ByaXRlbW91c2VvdXQnLHBhcmFtZXRlcnM6J3Nwcml0ZSxldmVudCd9LFxuXHRcdHtuYW1lOidzcHJpdGVtb3VzZW92ZXInLHBhcmFtZXRlcnM6J3Nwcml0ZSxldmVudCd9LFxuXHRcdHtuYW1lOidzcHJpdGVtb3VzZXVwJyxwYXJhbWV0ZXJzOidzcHJpdGUsZXZlbnQnfSxcblx0XHR7bmFtZTonc3ByaXRldGFwJyxwYXJhbWV0ZXJzOidzcHJpdGUsZXZlbnQnfSxcblx0XHR7bmFtZTonc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J2NoYXJ0LG5ld1N0b3JlLG9sZFN0b3JlJ30sXG5cdFx0e25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2NhcnRlc2lhbid9LFxuXHRcdHtuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYWRkJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcmVmcmVzaCcsXG5cdFx0J2JlZm9yZXJpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3JldG9wY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnYm9keXJlc2l6ZScsXG5cdFx0J2JvdHRvbWNoYW5nZScsXG5cdFx0J2NlbnRlcmVkY2hhbmdlJyxcblx0XHQnZGVhY3RpdmF0ZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2RvY2tlZGNoYW5nZScsXG5cdFx0J2VyYXNlZCcsXG5cdFx0J2Zsb2F0aW5nY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2Z1bGxzY3JlZW4nLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCdoaWRlJyxcblx0XHQnaW5pdGlhbGl6ZScsXG5cdFx0J2l0ZW1jbGljaycsXG5cdFx0J2l0ZW1kYmxjbGljaycsXG5cdFx0J2l0ZW1oaWdobGlnaHQnLFxuXHRcdCdpdGVtaGlnaGxpZ2h0Y2hhbmdlJyxcblx0XHQnaXRlbW1vdXNlZG93bicsXG5cdFx0J2l0ZW1tb3VzZW1vdmUnLFxuXHRcdCdpdGVtbW91c2VvdXQnLFxuXHRcdCdpdGVtbW91c2VvdmVyJyxcblx0XHQnaXRlbW1vdXNldXAnLFxuXHRcdCdpdGVtdGFwJyxcblx0XHQnbGF5b3V0Jyxcblx0XHQnbGVmdGNoYW5nZScsXG5cdFx0J21heEhlaWdodGNoYW5nZScsXG5cdFx0J21heFdpZHRoY2hhbmdlJyxcblx0XHQnbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdtb3ZlJyxcblx0XHQnbW92ZWQnLFxuXHRcdCdvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J3BhaW50ZWQnLFxuXHRcdCdwb3NpdGlvbmVkY2hhbmdlJyxcblx0XHQncmVkcmF3Jyxcblx0XHQncmVmcmVzaCcsXG5cdFx0J3JlbW92ZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZW5kZXJlZGNoYW5nZScsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3JpZ2h0Y2hhbmdlJyxcblx0XHQnc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J3Nob3cnLFxuXHRcdCdzcHJpdGVjbGljaycsXG5cdFx0J3Nwcml0ZWRibGNsaWNrJyxcblx0XHQnc3ByaXRlbW91c2Vkb3duJyxcblx0XHQnc3ByaXRlbW91c2Vtb3ZlJyxcblx0XHQnc3ByaXRlbW91c2VvdXQnLFxuXHRcdCdzcHJpdGVtb3VzZW92ZXInLFxuXHRcdCdzcHJpdGVtb3VzZXVwJyxcblx0XHQnc3ByaXRldGFwJyxcblx0XHQnc3RvcmVjaGFuZ2UnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQndG9wY2hhbmdlJyxcblx0XHQndXBkYXRlZGF0YScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnY2FydGVzaWFuJywgXG4gIGlucHV0czogY2FydGVzaWFuTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FydGVzaWFuTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dENhcnRlc2lhbkNvbXBvbmVudCl9XSxcbiAgdGVtcGxhdGU6ICc8bmctdGVtcGxhdGU+PC9uZy10ZW1wbGF0ZT4nXG59KVxuZXhwb3J0IGNsYXNzIEV4dENhcnRlc2lhbkNvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihcbiAgICBlUmVmOkVsZW1lbnRSZWYsIEBIb3N0KCkgQE9wdGlvbmFsKCkgQFNraXBTZWxmKCkgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlKSB7XG4gICAgICBzdXBlcihlUmVmLm5hdGl2ZUVsZW1lbnQsY2FydGVzaWFuTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmJhc2VPbkluaXQoY2FydGVzaWFuTWV0YURhdGEpXG4gIH1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG4gIC8vcHVibGljIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHt0aGlzLmJhc2VPbkNoYW5nZXMoY2hhbmdlcyl9XG5cbn0iXX0=