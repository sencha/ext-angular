//Ext.onReady(function() {
//import { NgZone } from '@angular/core';
//import { Router } from '@angular/router';
var ExtCalendar_monthComponent_1;
import * as tslib_1 from "tslib";
import { Host, Optional, SkipSelf, Component, ElementRef, forwardRef } from '@angular/core';
import { EngBase } from './eng-base';
export class calendar_monthMetaData {
}
calendar_monthMetaData.XTYPE = 'calendar-month';
calendar_monthMetaData.PROPERTIES = [
    'eng',
    'viewport',
    'align',
    'plugins',
    'responsiveConfig',
    'responsiveFormulas',
    'activeChildTabIndex',
    'activeItem',
    'addForm',
    'addOnSelect',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'allowSelection',
    'alwaysOnTop',
    'anchor',
    'anchorPosition',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bbar',
    'bind',
    'bodyBorder',
    'bodyCls',
    'bodyPadding',
    'bodyStyle',
    'border',
    'bottom',
    'buttonAlign',
    'buttons',
    'buttonToolbar',
    'cardSwitchAnimation',
    'centered',
    'closable',
    'closeAction',
    'closeToolText',
    'cls',
    'collapsed',
    'collapsible',
    'compact',
    'compactOptions',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'controlStoreRange',
    'data',
    'dayFormat',
    'dayHeader',
    'dayHeaderFormat',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultToolWeights',
    'defaultType',
    'disabled',
    'displayed',
    'docked',
    'draggable',
    'droppable',
    'editForm',
    'eventDefaults',
    'eventRelayers',
    'firstDayOfWeek',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'gestureNavigation',
    'header',
    'headerPosition',
    'height',
    'hidden',
    'hideAnimation',
    'hideMode',
    'hideOnMaskTap',
    'highlightToday',
    'html',
    'icon',
    'iconAlign',
    'iconCls',
    'id',
    'inactiveChildTabIndex',
    'innerCls',
    'instanceCls',
    'itemId',
    'items',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'lbar',
    'left',
    'listeners',
    'manageBorders',
    'margin',
    'masked',
    'maxHeight',
    'maxWidth',
    'minButtonWidth',
    'minHeight',
    'minWidth',
    'modal',
    'modelValidation',
    'name',
    'nameable',
    'nameHolder',
    'overflowText',
    'padding',
    'plugins',
    'publishes',
    'rbar',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'resetFocusPosition',
    'resizable',
    'right',
    'ripple',
    'scrollable',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'showOverflow',
    'standardButtons',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'style',
    'tabIndex',
    'tbar',
    'timezoneOffset',
    'title',
    'titleAlign',
    'titleCollapse',
    'toFrontOnShow',
    'toolDefaults',
    'tools',
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
    'value',
    'view',
    'viewModel',
    'visibleDays',
    'visibleWeeks',
    'weekendDays',
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
calendar_monthMetaData.EVENTS = [
    { name: 'activate', parameters: 'newActiveItem,calendar-month,oldActiveItem' },
    { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
    { name: 'add', parameters: 'calendar-month,item,index' },
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecollapse', parameters: 'calendar-month' },
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeeventadd', parameters: 'calendar-month,context' },
    { name: 'beforeeventdragstart', parameters: 'calendar-month,context' },
    { name: 'beforeeventedit', parameters: 'calendar-month,context' },
    { name: 'beforeexpand', parameters: 'calendar-month' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehide', parameters: 'sender' },
    { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforeresizedragstart', parameters: 'calendar-month,context' },
    { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeshow', parameters: 'sender' },
    { name: 'beforetofront', parameters: 'calendar-month' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'calendar-month,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'collapse', parameters: 'calendar-month' },
    { name: 'deactivate', parameters: 'oldActiveItem,calendar-month,newActiveItem' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'drawerhide', parameters: 'calendar-month' },
    { name: 'drawershow', parameters: 'calendar-month' },
    { name: 'erased', parameters: 'sender' },
    { name: 'eventadd', parameters: 'calendar-month,context' },
    { name: 'eventdrop', parameters: 'calendar-month,context' },
    { name: 'eventedit', parameters: 'calendar-month,context' },
    { name: 'eventtap', parameters: 'calendar-month,context' },
    { name: 'expand', parameters: 'calendar-month' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'calendar-month,event' },
    { name: 'focusenter', parameters: 'calendar-month,event' },
    { name: 'focusleave', parameters: 'calendar-month,event' },
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
    { name: 'move', parameters: 'calendar-month,item,toIndex,fromIndex' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'remove', parameters: 'calendar-month,item,index' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'renderedchange', parameters: 'calendar-month,item,rendered' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'resizedrag', parameters: 'calendar-month,context' },
    { name: 'resizedragcancel', parameters: 'calendar-month,context' },
    { name: 'resizedragend', parameters: 'calendar-month,context' },
    { name: 'resizedragstart', parameters: 'calendar-month,context' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'show', parameters: 'sender' },
    { name: 'tofront', parameters: 'calendar-month' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'validateeventadd', parameters: 'calendar-month,context' },
    { name: 'validateeventdrop', parameters: 'calendar-month,context' },
    { name: 'validateeventedit', parameters: 'calendar-month,context' },
    { name: 'valuechange', parameters: 'calendar-month,context' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
calendar_monthMetaData.EVENTNAMES = [
    'activate',
    'activeItemchange',
    'add',
    'added',
    'beforeactiveItemchange',
    'beforebottomchange',
    'beforecenteredchange',
    'beforecollapse',
    'beforedisabledchange',
    'beforedockedchange',
    'beforeeventadd',
    'beforeeventdragstart',
    'beforeeventedit',
    'beforeexpand',
    'beforeheightchange',
    'beforehiddenchange',
    'beforehide',
    'beforeleftchange',
    'beforemaxHeightchange',
    'beforemaxWidthchange',
    'beforeminHeightchange',
    'beforeminWidthchange',
    'beforeorientationchange',
    'beforeresizedragstart',
    'beforerightchange',
    'beforescrollablechange',
    'beforeshow',
    'beforetofront',
    'beforetopchange',
    'beforewidthchange',
    'blur',
    'bottomchange',
    'centeredchange',
    'collapse',
    'deactivate',
    'destroy',
    'disabledchange',
    'dockedchange',
    'drawerhide',
    'drawershow',
    'erased',
    'eventadd',
    'eventdrop',
    'eventedit',
    'eventtap',
    'expand',
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
    'move',
    'moved',
    'orientationchange',
    'painted',
    'positionedchange',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'resizedrag',
    'resizedragcancel',
    'resizedragend',
    'resizedragstart',
    'rightchange',
    'scrollablechange',
    'show',
    'tofront',
    'topchange',
    'updatedata',
    'validateeventadd',
    'validateeventdrop',
    'validateeventedit',
    'valuechange',
    'widthchange',
    'ready'
];
let ExtCalendar_monthComponent = ExtCalendar_monthComponent_1 = class ExtCalendar_monthComponent extends EngBase {
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, calendar_monthMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    ngOnInit() {
        this.baseOnInit(calendar_monthMetaData);
    }
    ngAfterViewInit() {
        this.baseAfterViewInit(calendar_monthMetaData);
    }
    //public ngAfterContentInit() {
    //  this.baseAfterContentInit()
    //}
    ngOnChanges(changes) { this.baseOnChanges(changes); }
};
ExtCalendar_monthComponent = ExtCalendar_monthComponent_1 = tslib_1.__decorate([
    Component({
        selector: 'ext-calendar-month',
        inputs: calendar_monthMetaData.PROPERTIES,
        outputs: calendar_monthMetaData.EVENTNAMES,
        providers: [{ provide: EngBase, useExisting: forwardRef(() => ExtCalendar_monthComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    tslib_1.__param(1, Host()), tslib_1.__param(1, Optional()), tslib_1.__param(1, SkipSelf()),
    tslib_1.__metadata("design:paramtypes", [ElementRef, EngBase])
], ExtCalendar_monthComponent);
export { ExtCalendar_monthComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWNhbGVuZGFyLW1vbnRoLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvZXh0LWNhbGVuZGFyLW1vbnRoLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSwwQkFBMEI7QUFDMUIseUNBQXlDO0FBQ3pDLDJDQUEyQzs7O0FBRzNDLE9BQU8sRUFFTCxJQUFJLEVBQ0osUUFBUSxFQUNSLFFBQVEsRUFLUixTQUFTLEVBQ1QsVUFBVSxFQUNWLFVBQVUsRUFFWCxNQUFNLGVBQWUsQ0FBQztBQUN2QixPQUFPLEVBQUUsT0FBTyxFQUFFLE1BQU0sWUFBWSxDQUFDO0FBQ3JDLE1BQU0sT0FBTyxzQkFBc0I7O0FBQ25CLDRCQUFLLEdBQVcsZ0JBQWdCLENBQUM7QUFDakMsaUNBQVUsR0FBYTtJQUNuQyxLQUFLO0lBQ0wsVUFBVTtJQUNWLE9BQU87SUFDUCxTQUFTO0lBQ1Qsa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixxQkFBcUI7SUFDckIsWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLCtCQUErQjtJQUMvQixnQkFBZ0I7SUFDaEIsYUFBYTtJQUNiLFFBQVE7SUFDUixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixVQUFVO0lBQ1YsVUFBVTtJQUNWLE1BQU07SUFDTixNQUFNO0lBQ04sWUFBWTtJQUNaLFNBQVM7SUFDVCxhQUFhO0lBQ2IsV0FBVztJQUNYLFFBQVE7SUFDUixRQUFRO0lBQ1IsYUFBYTtJQUNiLFNBQVM7SUFDVCxlQUFlO0lBQ2YscUJBQXFCO0lBQ3JCLFVBQVU7SUFDVixVQUFVO0lBQ1YsYUFBYTtJQUNiLGVBQWU7SUFDZixLQUFLO0lBQ0wsV0FBVztJQUNYLGFBQWE7SUFDYixTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLGdCQUFnQjtJQUNo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bEIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLHNCQUFzQixDQUFDLENBQUE7SUFDbEQsQ0FBQztJQUlILCtCQUErQjtJQUMvQiwrQkFBK0I7SUFDL0IsR0FBRztJQUVJLFdBQVcsQ0FBQyxPQUFzQixJQUFHLElBQUksQ0FBQyxhQUFhLENBQUMsT0FBTyxDQUFDLENBQUEsQ0FBQSxDQUFDO0NBT3pFLENBQUE7QUExQlksMEJBQTBCO0lBUHRDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxvQkFBb0I7UUFDOUIsTUFBTSxFQUFFLHNCQUFzQixDQUFDLFVBQVU7UUFDekMsT0FBTyxFQUFFLHNCQUFzQixDQUFDLFVBQVU7UUFDMUMsU0FBUyxFQUFFLENBQUMsRUFBQyxPQUFPLEVBQUUsT0FBTyxFQUFFLFdBQVcsRUFBRSxVQUFVLENBQUMsR0FBRyxFQUFFLENBQUMsNEJBQTBCLENBQUMsRUFBQyxDQUFDO1FBQzFGLFFBQVEsRUFBRSw2QkFBNkI7S0FDeEMsQ0FBQztJQUVnQyxtQkFBQSxJQUFJLEVBQUUsQ0FBQSxFQUFFLG1CQUFBLFFBQVEsRUFBRSxDQUFBLEVBQUUsbUJBQUEsUUFBUSxFQUFFLENBQUE7NkNBQTNDLFVBQVUsRUFBeUQsT0FBTztHQURsRiwwQkFBMEIsQ0EwQnRDO1NBMUJZLDBCQUEwQiIsInNvdXJjZXNDb250ZW50IjpbIi8vRXh0Lm9uUmVhZHkoZnVuY3Rpb24oKSB7XG4vL2ltcG9ydCB7IE5nWm9uZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuLy9pbXBvcnQgeyBSb3V0ZXIgfSBmcm9tICdAYW5ndWxhci9yb3V0ZXInO1xuXG5kZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHtcbiAgSW5qZWN0YWJsZSxcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBPdXRwdXQsXG4gIE9uSW5pdCxcbiAgQWZ0ZXJWaWV3SW5pdCxcbiAgT25DaGFuZ2VzLFxuICBDb21wb25lbnQsXG4gIEVsZW1lbnRSZWYsXG4gIGZvcndhcmRSZWYsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBFbmdCYXNlIH0gZnJvbSAnLi9lbmctYmFzZSc7XG5leHBvcnQgY2xhc3MgY2FsZW5kYXJfbW9udGhNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdjYWxlbmRhci1tb250aCc7XG4gIHB1YmxpYyBzdGF0aWMgUFJPUEVSVElFUzogc3RyaW5nW10gPSBbXG4gICAgJ2VuZycsXG4gICAgJ3ZpZXdwb3J0JyxcbiAgICAnYWxpZ24nLFxuICAgICdwbHVnaW5zJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVGb3JtdWxhcycsXG4gICAgJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLFxuICAgICdhY3RpdmVJdGVtJyxcbiAgICAnYWRkRm9ybScsXG4gICAgJ2FkZE9uU2VsZWN0JyxcbiAgICAnYWxpZ25TZWxmJyxcbiAgICAnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLFxuICAgICdhbGxvd1NlbGVjdGlvbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYW5jaG9yJyxcbiAgICAnYW5jaG9yUG9zaXRpb24nLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXV0b0Rlc3Ryb3knLFxuICAgICdhdXRvU2l6ZScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmJhcicsXG4gICAgJ2JpbmQnLFxuICAgICdib2R5Qm9yZGVyJyxcbiAgICAnYm9keUNscycsXG4gICAgJ2JvZHlQYWRkaW5nJyxcbiAgICAnYm9keVN0eWxlJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnYnV0dG9uQWxpZ24nLFxuICAgICdidXR0b25zJyxcbiAgICAnYnV0dG9uVG9vbGJhcicsXG4gICAgJ2NhcmRTd2l0Y2hBbmltYXRpb24nLFxuICAgICdjZW50ZXJlZCcsXG4gICAgJ2Nsb3NhYmxlJyxcbiAgICAnY2xvc2VBY3Rpb24nLFxuICAgICdjbG9zZVRvb2xUZXh0JyxcbiAgICAnY2xzJyxcbiAgICAnY29sbGFwc2VkJyxcbiAgICAnY29sbGFwc2libGUnLFxuICAgICdjb21wYWN0JyxcbiAgICAnY29tcGFjdE9wdGlvbnMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2wnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnY29udHJvbFN0b3JlUmFuZ2UnLFxuICAgICdkYXRhJyxcbiAgICAnZGF5Rm9ybWF0JyxcbiAgICAnZGF5SGVhZGVyJyxcbiAgICAnZGF5SGVhZGVyRm9ybWF0JyxcbiAgICAnZGVmYXVsdEZvY3VzJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZWZhdWx0cycsXG4gICAgJ2RlZmF1bHRUb29sV2VpZ2h0cycsXG4gICAgJ2RlZmF1bHRUeXBlJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNwbGF5ZWQnLFxuICAgICdkb2NrZWQnLFxuICAgICdkcmFnZ2FibGUnLFxuICAgICdkcm9wcGFibGUnLFxuICAgICdlZGl0Rm9ybScsXG4gICAgJ2V2ZW50RGVmYXVsdHMnLFxuICAgICdldmVudFJlbGF5ZXJzJyxcbiAgICAnZmlyc3REYXlPZldlZWsnLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzYWJsZUNvbnRhaW5lcicsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2dlc3R1cmVOYXZpZ2F0aW9uJyxcbiAgICAnaGVhZGVyJyxcbiAgICAnaGVhZGVyUG9zaXRpb24nLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaGlnaGxpZ2h0VG9kYXknLFxuICAgICdodG1sJyxcbiAgICAnaWNvbicsXG4gICAgJ2ljb25BbGlnbicsXG4gICAgJ2ljb25DbHMnLFxuICAgICdpZCcsXG4gICAgJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2lubmVyQ2xzJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtSWQnLFxuICAgICdpdGVtcycsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsYXlvdXQnLFxuICAgICdsYmFyJyxcbiAgICAnbGVmdCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ21hbmFnZUJvcmRlcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrZWQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkJ1dHRvbldpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdvdmVyZmxvd1RleHQnLFxuICAgICdwYWRkaW5nJyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JiYXInLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWZlcmVuY2VIb2xkZXInLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVzZXRGb2N1c1Bvc2l0aW9uJyxcbiAgICAncmVzaXphYmxlJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hvd0FuaW1hdGlvbicsXG4gICAgJ3Nob3dPdmVyZmxvdycsXG4gICAgJ3N0YW5kYXJkQnV0dG9ucycsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVmdWxEZWZhdWx0cycsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdG9yZScsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0YmFyJyxcbiAgICAndGltZXpvbmVPZmZzZXQnLFxuICAgICd0aXRsZScsXG4gICAgJ3RpdGxlQWxpZ24nLFxuICAgICd0aXRsZUNvbGxhcHNlJyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3Rvb2xEZWZhdWx0cycsXG4gICAgJ3Rvb2xzJyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmlldycsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3Zpc2libGVEYXlzJyxcbiAgICAndmlzaWJsZVdlZWtzJyxcbiAgICAnd2Vla2VuZERheXMnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3ZWlnaHRlZCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2FsaWduJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG57bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J25ld0FjdGl2ZUl0ZW0sY2FsZW5kYXItbW9udGgsb2xkQWN0aXZlSXRlbSd9LFxue25hbWU6J2FjdGl2ZUl0ZW1jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2FkZCcscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgsaXRlbSxpbmRleCd9LFxue25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG57bmFtZTonYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWJvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3JlY29sbGFwc2UnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoJ30sXG57bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVldmVudGFkZCcscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgsY29udGV4dCd9LFxue25hbWU6J2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxjb250ZXh0J30sXG57bmFtZTonYmVmb3JlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxjb250ZXh0J30sXG57bmFtZTonYmVmb3JlZXhwYW5kJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCd9LFxue25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2JlZm9yZXJlc2l6ZWRyYWdzdGFydCcscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgsY29udGV4dCd9LFxue25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxue25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoJ30sXG57bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG57bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcbntuYW1lOidibHVyJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxldmVudCd9LFxue25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2NvbGxhcHNlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCd9LFxue25hbWU6J2RlYWN0aXZhdGUnLHBhcmFtZXRlcnM6J29sZEFjdGl2ZUl0ZW0sY2FsZW5kYXItbW9udGgsbmV3QWN0aXZlSXRlbSd9LFxue25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxue25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J2RyYXdlcmhpZGUnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoJ30sXG57bmFtZTonZHJhd2Vyc2hvdycscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgnfSxcbntuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2V2ZW50YWRkJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxjb250ZXh0J30sXG57bmFtZTonZXZlbnRkcm9wJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxjb250ZXh0J30sXG57bmFtZTonZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxjb250ZXh0J30sXG57bmFtZTonZXZlbnR0YXAnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoLGNvbnRleHQnfSxcbntuYW1lOidleHBhbmQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoJ30sXG57bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG57bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoLGV2ZW50J30sXG57bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgsZXZlbnQnfSxcbntuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxldmVudCd9LFxue25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcbntuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOidtb3ZlJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxpdGVtLHRvSW5kZXgsZnJvbUluZGV4J30sXG57bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcbntuYW1lOidvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG57bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcbntuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxue25hbWU6J3JlbW92ZScscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgsaXRlbSxpbmRleCd9LFxue25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcbntuYW1lOidyZW5kZXJlZGNoYW5nZScscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgsaXRlbSxyZW5kZXJlZCd9LFxue25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG57bmFtZToncmVzaXplZHJhZycscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgsY29udGV4dCd9LFxue25hbWU6J3Jlc2l6ZWRyYWdjYW5jZWwnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoLGNvbnRleHQnfSxcbntuYW1lOidyZXNpemVkcmFnZW5kJyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxjb250ZXh0J30sXG57bmFtZToncmVzaXplZHJhZ3N0YXJ0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxjb250ZXh0J30sXG57bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxue25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxue25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoJ30sXG57bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcbntuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxue25hbWU6J3ZhbGlkYXRlZXZlbnRhZGQnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoLGNvbnRleHQnfSxcbntuYW1lOid2YWxpZGF0ZWV2ZW50ZHJvcCcscGFyYW1ldGVyczonY2FsZW5kYXItbW9udGgsY29udGV4dCd9LFxue25hbWU6J3ZhbGlkYXRlZXZlbnRlZGl0JyxwYXJhbWV0ZXJzOidjYWxlbmRhci1tb250aCxjb250ZXh0J30sXG57bmFtZTondmFsdWVjaGFuZ2UnLHBhcmFtZXRlcnM6J2NhbGVuZGFyLW1vbnRoLGNvbnRleHQnfSxcbntuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG57bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuJ2FjdGl2YXRlJyxcbidhY3RpdmVJdGVtY2hhbmdlJyxcbidhZGQnLFxuJ2FkZGVkJyxcbidiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcbidiZWZvcmVib3R0b21jaGFuZ2UnLFxuJ2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcbidiZWZvcmVjb2xsYXBzZScsXG4nYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuJ2JlZm9yZWRvY2tlZGNoYW5nZScsXG4nYmVmb3JlZXZlbnRhZGQnLFxuJ2JlZm9yZWV2ZW50ZHJhZ3N0YXJ0JyxcbidiZWZvcmVldmVudGVkaXQnLFxuJ2JlZm9yZWV4cGFuZCcsXG4nYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcbidiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuJ2JlZm9yZWhpZGUnLFxuJ2JlZm9yZWxlZnRjaGFuZ2UnLFxuJ2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW1pbkhlaWdodGNoYW5nZScsXG4nYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuJ2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcbidiZWZvcmVyZXNpemVkcmFnc3RhcnQnLFxuJ2JlZm9yZXJpZ2h0Y2hhbmdlJyxcbidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcbidiZWZvcmVzaG93JyxcbidiZWZvcmV0b2Zyb250JyxcbidiZWZvcmV0b3BjaGFuZ2UnLFxuJ2JlZm9yZXdpZHRoY2hhbmdlJyxcbidibHVyJyxcbidib3R0b21jaGFuZ2UnLFxuJ2NlbnRlcmVkY2hhbmdlJyxcbidjb2xsYXBzZScsXG4nZGVhY3RpdmF0ZScsXG4nZGVzdHJveScsXG4nZGlzYWJsZWRjaGFuZ2UnLFxuJ2RvY2tlZGNoYW5nZScsXG4nZHJhd2VyaGlkZScsXG4nZHJhd2Vyc2hvdycsXG4nZXJhc2VkJyxcbidldmVudGFkZCcsXG4nZXZlbnRkcm9wJyxcbidldmVudGVkaXQnLFxuJ2V2ZW50dGFwJyxcbidleHBhbmQnLFxuJ2Zsb2F0aW5nY2hhbmdlJyxcbidmb2N1cycsXG4nZm9jdXNlbnRlcicsXG4nZm9jdXNsZWF2ZScsXG4nZnVsbHNjcmVlbicsXG4naGVpZ2h0Y2hhbmdlJyxcbidoaWRkZW5jaGFuZ2UnLFxuJ2hpZGUnLFxuJ2luaXRpYWxpemUnLFxuJ2xlZnRjaGFuZ2UnLFxuJ21heEhlaWdodGNoYW5nZScsXG4nbWF4V2lkdGhjaGFuZ2UnLFxuJ21pbkhlaWdodGNoYW5nZScsXG4nbWluV2lkdGhjaGFuZ2UnLFxuJ21vdmUnLFxuJ21vdmVkJyxcbidvcmllbnRhdGlvbmNoYW5nZScsXG4ncGFpbnRlZCcsXG4ncG9zaXRpb25lZGNoYW5nZScsXG4ncmVtb3ZlJyxcbidyZW1vdmVkJyxcbidyZW5kZXJlZGNoYW5nZScsXG4ncmVzaXplJyxcbidyZXNpemVkcmFnJyxcbidyZXNpemVkcmFnY2FuY2VsJyxcbidyZXNpemVkcmFnZW5kJyxcbidyZXNpemVkcmFnc3RhcnQnLFxuJ3JpZ2h0Y2hhbmdlJyxcbidzY3JvbGxhYmxlY2hhbmdlJyxcbidzaG93Jyxcbid0b2Zyb250Jyxcbid0b3BjaGFuZ2UnLFxuJ3VwZGF0ZWRhdGEnLFxuJ3ZhbGlkYXRlZXZlbnRhZGQnLFxuJ3ZhbGlkYXRlZXZlbnRkcm9wJyxcbid2YWxpZGF0ZWV2ZW50ZWRpdCcsXG4ndmFsdWVjaGFuZ2UnLFxuJ3dpZHRoY2hhbmdlJyxcbidyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdleHQtY2FsZW5kYXItbW9udGgnLFxuICBpbnB1dHM6IGNhbGVuZGFyX21vbnRoTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogY2FsZW5kYXJfbW9udGhNZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogRW5nQmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0Q2FsZW5kYXJfbW9udGhDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRDYWxlbmRhcl9tb250aENvbXBvbmVudCBleHRlbmRzIEVuZ0Jhc2UgaW1wbGVtZW50cyBPbkluaXQsIEFmdGVyVmlld0luaXQsIE9uQ2hhbmdlcyAge1xuICAgIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZiwgQEhvc3QoKSBAT3B0aW9uYWwoKSBAU2tpcFNlbGYoKSBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UpIHtcbiAgICAgICAgc3VwZXIoZVJlZi5uYXRpdmVFbGVtZW50LGNhbGVuZGFyX21vbnRoTWV0YURhdGEsaG9zdENvbXBvbmVudClcbiAgICB9XG5cbiAgICBwdWJsaWMgbmdPbkluaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZU9uSW5pdChjYWxlbmRhcl9tb250aE1ldGFEYXRhKVxuICAgIH1cblxuICAgIHB1YmxpYyBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuYmFzZUFmdGVyVmlld0luaXQoY2FsZW5kYXJfbW9udGhNZXRhRGF0YSlcbiAgICB9XG5cblxuXG4gIC8vcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgLy8gIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAvL31cblxuICBwdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cblxuXG5cbiAgIC8vIHB1YmxpYyBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAvLyAgIGNvbnNvbGUubG9nKCduZ0FmdGVyVmlld0NoZWNrZWQnKVxuICAvL31cbn1cblxuIl19