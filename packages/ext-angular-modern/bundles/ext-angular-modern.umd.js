(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ext-angular-modern', ['exports', '@angular/core'], factory) :
    (factory((global['ext-angular-modern'] = {}),global.ng.core));
}(this, (function (exports,core) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b)
                if (b.hasOwnProperty(p))
                    d[p] = b[p]; };
        return extendStatics(d, b);
    };
    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var base = /** @class */ (function () {
        function base(el, metaData) {
            var _this = this;
            this.metaData = metaData;
            this.verb = 'initialized';
            //console.log('constructor');console.log(el.nativeElement)
            this._nativeElement = el.nativeElement;
            metaData.EVENTS.forEach(function (event, n) {
                ( /** @type {?} */(_this))[event.name] = new core.EventEmitter();
            });
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        base.prototype.OnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                console.log("OnChanges");
            };
        /**
         * @param {?} changes
         * @return {?}
         */
        base.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                console.log("ngOnChanges");
                /** @type {?} */
                var changesMsgs = [];
                for (var propName in changes) {
                    /** @type {?} */
                    var val = changes[propName].currentValue;
                    if (this.ext != undefined) {
                        /** @type {?} */
                        var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                        this.ext['set' + capPropName](val);
                    }
                    changesMsgs.push(propName + " " + this.verb + " to \"" + val + "\"");
                }
                console.log("OnChanges: " + changesMsgs.join('; '));
                this.verb = 'changed'; // next time it will be a change
            };
        // Beware! Called frequently!
        // Called in every change detection cycle anywhere on the page
        //ngDoCheck() {console.log(`DoCheck`)}
        // Beware! Called frequently!
        // Called in every change detection cycle anywhere on the page
        //ngAfterContentChecked() { console.log(`AfterContentChecked`) }
        //ngAfterViewInit() { console.log(`AfterViewInit`) }
        // Beware! Called frequently!
        // Called in every change detection cycle anywhere on the page
        //ngAfterViewChecked() { console.log(`AfterViewChecked`) }
        //ngOnDestroy() { console.log(`OnDestroy`) }
        /**
         * @param {?} metaData
         * @return {?}
         */
        base.prototype.baseOnInit = /**
         * @param {?} metaData
         * @return {?}
         */
            function (metaData) {
                /** @type {?} */
                var me = this;
                /** @type {?} */
                var o = {};
                o.xtype = metaData.XTYPE;
                for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
                    /** @type {?} */
                    var prop = me.metaData.PROPERTIES[i];
                    //need to handle listeners coming in here
                    if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') ;
                    else {
                        if (me[prop] != undefined &&
                            prop != 'listeners' &&
                            prop != 'config' &&
                            prop != 'fitToParent') {
                            o[prop] = me[prop];
                        }
                    }
                }
                if ('true' === me.fitToParent) {
                    o.top = 0,
                        o.left = 0,
                        o.width = '100%',
                        o.height = '100%';
                }
                if (me.config !== {}) {
                    Ext.apply(o, me.config);
                }
                o.listeners = {};
                /** @type {?} */
                var EVENTS = metaData.EVENTS;
                EVENTS.forEach(function (event, index, array) {
                    /** @type {?} */
                    var eventname = event.name;
                    /** @type {?} */
                    var eventparameters = event.parameters;
                    o.listeners[eventname] = function () {
                        /** @type {?} */
                        var parameters = eventparameters;
                        /** @type {?} */
                        var parms = parameters.split(',');
                        /** @type {?} */
                        var args = Array.prototype.slice.call(arguments);
                        /** @type {?} */
                        var emitparms = {};
                        for (var i_1 = 0, j = parms.length; i_1 < j; i_1++) {
                            emitparms[parms[i_1]] = args[i_1];
                        }
                        me[eventname].emit(emitparms);
                    };
                });
                if (this._nativeElement.parentElement != null) {
                    o.renderTo = this._nativeElement;
                }
                this.ext = Ext.create(o);
            };
        /**
         * @return {?}
         */
        base.prototype.baseAfterContentInit = /**
         * @return {?}
         */
            function () {
                /** @type {?} */
                var parentCmp = this.extChildren.first.ext;
                /** @type {?} */
                var parentxtype = this.extChildren.first.ext.xtype;
                if (parentxtype === 'container' &&
                    this.allChildren.first != undefined &&
                    this.allChildren.length === 1) {
                    //console.log(this.allChildren.first.nativeElement)
                    parentCmp.setHtml(this.allChildren.first.nativeElement);
                    return;
                }
                /** @type {?} */
                var extChildrenArray = this.extChildren.toArray();
                /** @type {?} */
                var arrayLength = extChildrenArray.length;
                for (var i = 1; i < arrayLength; i++) { //start after first one
                    /** @type {?} */
                    var childCmp = extChildrenArray[i].ext;
                    /** @type {?} */
                    var childxtype = childCmp.xtype;
                    //console.log(`parent: ${parentxtype}, child: ${childxtype}`)
                    if (parentxtype === 'grid') {
                        if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
                            parentCmp.addColumn(childCmp);
                        }
                    }
                    else if (parentxtype === 'tooltip') {
                        parentCmp.setTooltip(childCmp);
                    }
                    else if (parentxtype === 'plugin') {
                        parentCmp.setPlugin(childCmp);
                    }
                    else if (parentxtype === 'button') {
                        if (childxtype === 'menu') {
                            parentCmp.setMenu(childCmp);
                        }
                        else {
                            console.log('child not added');
                        }
                    }
                    else if (childxtype === 'toolbar' && Ext.isClassic === true) {
                        parentCmp.addDockedItems(childCmp);
                    }
                    else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                        if (parentCmp.getHideHeaders() === false) {
                            /** @type {?} */
                            var j = parentCmp.items.items.length;
                            parentCmp.insert(j - 1, childCmp);
                        }
                        else {
                            parentCmp.add(childCmp);
                        }
                    }
                    else if (parentCmp.add != undefined) {
                        parentCmp.add(childCmp);
                    }
                    else {
                        console.log('child not added');
                    }
                }
                this['ready'].emit(parentCmp);
            };
        base.propDecorators = {
            extChildren: [{ type: core.ContentChildren, args: [base, { descendants: false },] }],
            allChildren: [{ type: core.ContentChildren, args: ['ext',] }]
        };
        return base;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var buttonMetaData = /** @class */ (function () {
        function buttonMetaData() {
        }
        buttonMetaData.XTYPE = 'button';
        buttonMetaData.PROPERTIES = [
            'allowDepress',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'arrow',
            'arrowAlign',
            'autoEvent',
            'axisLock',
            'badgeText',
            'bind',
            'border',
            'bottom',
            'buttonType',
            'centered',
            'cls',
            'constrainAlign',
            'contentEl',
            'controller',
            'data',
            'defaultListenerScope',
            'destroyMenu',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'enableToggle',
            'enterAnimation',
            'eventHandlers',
            'exitAnimation',
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'handler',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
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
            'menu',
            'menuAlign',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'padding',
            'plugins',
            'pressed',
            'pressedDelay',
            'publishes',
            'record',
            'reference',
            'relative',
            'renderTo',
            'right',
            'ripple',
            'scope',
            'scrollable',
            'selfAlign',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'stretchMenu',
            'style',
            'tabIndex',
            'text',
            'textAlign',
            'toFrontOnShow',
            'toggleHandler',
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
            'viewModel',
            'weight',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        buttonMetaData.EVENTS = [
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
            { name: 'beforepressedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'button' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'button,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'button,event' },
            { name: 'focusenter', parameters: 'button,event' },
            { name: 'focusleave', parameters: 'button,event' },
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
            { name: 'pressedchange', parameters: 'sender,value,oldValue' },
            { name: 'release', parameters: 'button,e' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tap', parameters: 'button,e' },
            { name: 'tofront', parameters: 'button' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        buttonMetaData.EVENTNAMES = [
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
            'beforepressedchange',
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
            'pressedchange',
            'release',
            'removed',
            'resize',
            'rightchange',
            'scrollablechange',
            'show',
            'tap',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return buttonMetaData;
    }());
    var ExtButtonComponent = /** @class */ (function (_super) {
        __extends(ExtButtonComponent, _super);
        function ExtButtonComponent(eRef) {
            return _super.call(this, eRef, buttonMetaData) || this;
        }
        /**
         * @return {?}
         */
        ExtButtonComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { this.baseOnInit(buttonMetaData); };
        /**
         * @return {?}
         */
        ExtButtonComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () { this.baseAfterContentInit(); };
        ExtButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ext-button',
                        inputs: buttonMetaData.PROPERTIES,
                        outputs: buttonMetaData.EVENTNAMES,
                        providers: [{ provide: base, useExisting: core.forwardRef(function () { return ExtButtonComponent; }) }],
                        template: '<ng-template #dynamic></ng-template>'
                    }] }
        ];
        /** @nocollapse */
        ExtButtonComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return ExtButtonComponent;
    }(base));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var gridMetaData = /** @class */ (function () {
        function gridMetaData() {
        }
        gridMetaData.XTYPE = 'grid';
        gridMetaData.PROPERTIES = [
            'activeChildTabIndex',
            'activeItem',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'associatedData',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'bind',
            'border',
            'bottom',
            'bufferSize',
            'cardSwitchAnimation',
            'centered',
            'cls',
            'columnLines',
            'columnMenu',
            'columnResize',
            'columns',
            'columnsMenuItem',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultType',
            'deferEmptyText',
            'deselectOnContainerClick',
            'disabled',
            'disableSelection',
            'disclosureProperty',
            'displayed',
            'docked',
            'draggable',
            'emptyItemText',
            'emptyState',
            'emptyText',
            'emptyTextDefaults',
            'emptyTextProperty',
            'enableTextSelection',
            'enterAnimation',
            'eventHandlers',
            'exitAnimation',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'grouped',
            'groupFooter',
            'groupHeader',
            'height',
            'hidden',
            'hideAnimation',
            'hideHeaders',
            'hideMode',
            'hideOnMaskTap',
            'horizontalOverflow',
            'html',
            'id',
            'inactiveChildTabIndex',
            'indexBar',
            'infinite',
            'inline',
            'innerCls',
            'innerCtHeight',
            'innerWidth',
            'instanceCls',
            'itemButtonMode',
            'itemCls',
            'itemConfig',
            'itemContentCls',
            'itemDataMap',
            'itemId',
            'itemInnerCls',
            'itemRipple',
            'items',
            'itemsFocusable',
            'itemTpl',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'left',
            'listeners',
            'loadingHeight',
            'loadingText',
            'maintainChildNodes',
            'manageBorders',
            'margin',
            'markDirty',
            'masked',
            'maxHeight',
            'maxItemCache',
            'maxWidth',
            'minHeight',
            'minimumBufferDistance',
            'minWidth',
            'modal',
            'modelValidation',
            'multiColumnSort',
            'name',
            'nameable',
            'nameHolder',
            'onItemDisclosure',
            'padding',
            'pinFooters',
            'pinHeaders',
            'pinnedFooter',
            'pinnedFooterHeight',
            'pinnedHeader',
            'pinnedHeaderHeight',
            'plugins',
            'pressedDelay',
            'preventSelectionOnDisclose',
            'preventSelectionOnTool',
            'publishes',
            'record',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'right',
            'ripple',
            'rowLines',
            'rowNumbers',
            'scrollable',
            'scrollDock',
            'scrollToTopOnRefresh',
            'selectable',
            'selection',
            'selfAlign',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'store',
            'striped',
            'style',
            'tabIndex',
            'title',
            'toFrontOnShow',
            'tooltip',
            'top',
            'topRenderedIndex',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'translatable',
            'triggerCtEvent',
            'triggerEvent',
            'twoWayBindable',
            'ui',
            'userCls',
            'userSelectable',
            'useSimpleItems',
            'variableHeights',
            'verticalOverflow',
            'viewModel',
            'visibleHeight',
            'visibleLeft',
            'visibleTop',
            'visibleWidth',
            'weight',
            'weighted',
            'width',
            'x',
            'xtype',
            'y',
            'zIndex',
            'platformConfig',
            'responsiveConfig',
            'fitToParent',
            'config'
        ];
        gridMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,grid,oldActiveItem' },
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
            { name: 'beforeselectionextend', parameters: 'grid,An,extension' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforestorechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'grid' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'grid,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'cellselection', parameters: 'grid,selection' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'childdoubletap', parameters: 'grid,location' },
            { name: 'childlongpress', parameters: 'grid,location' },
            { name: 'childmouseenter', parameters: 'grid,location' },
            { name: 'childmouseleave', parameters: 'grid,location' },
            { name: 'childsingletap', parameters: 'grid,location' },
            { name: 'childtap', parameters: 'grid,location' },
            { name: 'childtaphold', parameters: 'grid,location' },
            { name: 'childtouchcancel', parameters: 'grid,location' },
            { name: 'childtouchend', parameters: 'grid,location' },
            { name: 'childtouchmove', parameters: 'grid,location' },
            { name: 'childtouchstart', parameters: 'grid,location' },
            { name: 'columnadd', parameters: 'grid,column,index' },
            { name: 'columnhide', parameters: 'grid,column' },
            { name: 'columnmenucreated', parameters: 'grid,column,menu' },
            { name: 'columnmove', parameters: 'grid,column,fromIndex,toIndex' },
            { name: 'columnremove', parameters: 'grid,column' },
            { name: 'columnresize', parameters: 'grid,column,width' },
            { name: 'columnselection', parameters: 'grid,selection' },
            { name: 'columnshow', parameters: 'grid,column' },
            { name: 'columnsort', parameters: 'grid,column,direction' },
            { name: 'deactivate', parameters: 'oldActiveItem,grid,newActiveItem' },
            { name: 'deselect', parameters: 'grid,records' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'disclose', parameters: 'list,record,target,index,event' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'grid,event' },
            { name: 'focusenter', parameters: 'grid,event' },
            { name: 'focusleave', parameters: 'grid,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'itemaction', parameters: 'grid,index,record,action' },
            { name: 'itemdoubletap', parameters: 'grid,index,target,record,e' },
            { name: 'itemlongpress', parameters: 'grid,index,target,record,e' },
            { name: 'itemmouseenter', parameters: 'grid,index,target,record,e' },
            { name: 'itemmouseleave', parameters: 'grid,index,target,record,e' },
            { name: 'itemsingletap', parameters: 'grid,index,target,record,e' },
            { name: 'itemswipe', parameters: 'grid,index,target,record,e' },
            { name: 'itemtap', parameters: 'grid,index,target,record,e' },
            { name: 'itemtaphold', parameters: 'grid,index,target,record,e' },
            { name: 'itemtouchcancel', parameters: 'grid,index,target,record,e' },
            { name: 'itemtouchend', parameters: 'grid,index,target,record,e' },
            { name: 'itemtouchmove', parameters: 'grid,index,target,record,e' },
            { name: 'itemtouchstart', parameters: 'grid,index,target,record,e' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: '' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'navigate', parameters: 'grid,to,from' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'refresh', parameters: 'grid' },
            { name: 'remove', parameters: '' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'grid,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'select', parameters: 'grid,selected' },
            { name: 'selectionextenderdrag', parameters: 'grid,An,extension' },
            { name: 'show', parameters: 'sender' },
            { name: 'storechange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'grid' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridMetaData.EVENTNAMES = [
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
            'beforerightchange',
            'beforescrollablechange',
            'beforeselectionextend',
            'beforeshow',
            'beforestorechange',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'cellselection',
            'centeredchange',
            'childdoubletap',
            'childlongpress',
            'childmouseenter',
            'childmouseleave',
            'childsingletap',
            'childtap',
            'childtaphold',
            'childtouchcancel',
            'childtouchend',
            'childtouchmove',
            'childtouchstart',
            'columnadd',
            'columnhide',
            'columnmenucreated',
            'columnmove',
            'columnremove',
            'columnresize',
            'columnselection',
            'columnshow',
            'columnsort',
            'deactivate',
            'deselect',
            'destroy',
            'disabledchange',
            'disclose',
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
            'itemaction',
            'itemdoubletap',
            'itemlongpress',
            'itemmouseenter',
            'itemmouseleave',
            'itemsingletap',
            'itemswipe',
            'itemtap',
            'itemtaphold',
            'itemtouchcancel',
            'itemtouchend',
            'itemtouchmove',
            'itemtouchstart',
            'leftchange',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'navigate',
            'orientationchange',
            'painted',
            'positionedchange',
            'refresh',
            'remove',
            'removed',
            'renderedchange',
            'resize',
            'rightchange',
            'scrollablechange',
            'select',
            'selectionextenderdrag',
            'show',
            'storechange',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return gridMetaData;
    }());
    var ExtGridComponent = /** @class */ (function (_super) {
        __extends(ExtGridComponent, _super);
        function ExtGridComponent(eRef) {
            return _super.call(this, eRef, gridMetaData) || this;
        }
        /**
         * @return {?}
         */
        ExtGridComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { this.baseOnInit(gridMetaData); };
        /**
         * @return {?}
         */
        ExtGridComponent.prototype.ngAfterContentInit = /**
         * @return {?}
         */
            function () { this.baseAfterContentInit(); };
        ExtGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'ext-grid',
                        inputs: gridMetaData.PROPERTIES,
                        outputs: gridMetaData.EVENTNAMES,
                        providers: [{ provide: base, useExisting: core.forwardRef(function () { return ExtGridComponent; }) }],
                        template: '<ng-template #dynamic></ng-template>'
                    }] }
        ];
        /** @nocollapse */
        ExtGridComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return ExtGridComponent;
    }(base));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    var ExtAngularModernModule = /** @class */ (function () {
        function ExtAngularModernModule() {
        }
        ExtAngularModernModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [
                            ExtButtonComponent,
                            ExtGridComponent
                        ],
                        exports: [
                            ExtButtonComponent,
                            ExtGridComponent
                        ]
                    },] }
        ];
        return ExtAngularModernModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ExtAngularModernModule = ExtAngularModernModule;
    exports.ɵc = base;
    exports.ɵb = ExtButtonComponent;
    exports.ɵa = buttonMetaData;
    exports.ɵe = ExtGridComponent;
    exports.ɵd = gridMetaData;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItbW9kZXJuLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL2V4dC1hbmd1bGFyLW1vZGVybi9saWIvYmFzZS50cyIsIm5nOi8vZXh0LWFuZ3VsYXItbW9kZXJuL2xpYi9leHQtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vZXh0LWFuZ3VsYXItbW9kZXJuL2xpYi9leHQtZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL2V4dC1hbmd1bGFyLW1vZGVybi9saWIvZXh0LWFuZ3VsYXItbW9kZXJuLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImRlY2xhcmUgdmFyIEV4dDogYW55O1xuaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIGJhc2Uge1xuICBwdWJsaWMgZXh0OiBhbnlcbiAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yJyk7Y29uc29sZS5sb2coZWwubmF0aXZlRWxlbWVudClcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudFxuICAgIG1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgIH0pXG4gIH1cblxuICAgIE9uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYE9uQ2hhbmdlc2ApXG4gICAgfVxuXG4gIHZlcmI6YW55ID0gJ2luaXRpYWxpemVkJ1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICBsZXQgY2hhbmdlc01zZ3M6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlXG4gICAgICBpZiAodGhpcy5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSlcbiAgICAgICAgdGhpcy5leHRbJ3NldCcrY2FwUHJvcE5hbWVdKHZhbClcbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dGhpcy52ZXJifSB0byBcIiR7dmFsfVwiYClcbiAgICB9XG4gICAgY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gICAgdGhpcy52ZXJiID0gJ2NoYW5nZWQnIC8vIG5leHQgdGltZSBpdCB3aWxsIGJlIGEgY2hhbmdlXG4gIH1cblxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nRG9DaGVjaygpIHtjb25zb2xlLmxvZyhgRG9DaGVja2ApfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyQ29udGVudENoZWNrZWRgKSB9XG4gIC8vbmdBZnRlclZpZXdJbml0KCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3SW5pdGApIH1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdDaGVja2VkYCkgfVxuICAvL25nT25EZXN0cm95KCkgeyBjb25zb2xlLmxvZyhgT25EZXN0cm95YCkgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgby54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHsgXG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdOyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ3RydWUnID09PSBtZS5maXRUb1BhcmVudCkge1xuICAgICAgby50b3A9MCwgXG4gICAgICBvLmxlZnQ9MCwgXG4gICAgICBvLndpZHRoPScxMDAlJywgXG4gICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICB9XG4gICAgaWYgKG1lLmNvbmZpZyAhPT0ge30gKSB7XG4gICAgICBFeHQuYXBwbHkobywgbWUuY29uZmlnKTtcbiAgICB9XG4gICAgby5saXN0ZW5lcnMgPSB7fVxuICAgIHZhciBFVkVOVFMgPSBtZXRhRGF0YS5FVkVOVFNcbiAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgbGV0IGV2ZW50bmFtZTogYW55ID0gZXZlbnQubmFtZVxuICAgICAgbGV0IGV2ZW50cGFyYW1ldGVyczogYW55ID0gZXZlbnQucGFyYW1ldGVyc1xuICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0gZXZlbnRwYXJhbWV0ZXJzXG4gICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKVxuICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgbGV0IGVtaXRwYXJtczogYW55ID0ge31cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG4gICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgIH1cbiAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcylcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgby5yZW5kZXJUbyA9IHRoaXMuX25hdGl2ZUVsZW1lbnRcbiAgICB9XG4gICAgdGhpcy5leHQgPSBFeHQuY3JlYXRlKG8pXG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKGJhc2UsIHtkZXNjZW5kYW50czogZmFsc2V9KSBleHRDaGlsZHJlbjogUXVlcnlMaXN0PGFueT5cbiAgQENvbnRlbnRDaGlsZHJlbignZXh0JykgYWxsQ2hpbGRyZW46IFF1ZXJ5TGlzdDxhbnk+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vY29uc29sZS5sb2coYG5nQWZ0ZXJDb250ZW50SW5pdDogJHt0aGlzLmV4dENoaWxkcmVuLmZpcnN0LmV4dC54dHlwZX0gJHt0aGlzLmV4dENoaWxkcmVuLmxlbmd0aH0gJHt0aGlzLmFsbENoaWxkcmVuLmxlbmd0aH1gKVxuICAgIC8vY29uc29sZS5sb2codGhpcy5hbGxDaGlsZHJlbilcbiAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRDaGlsZHJlbi5maXJzdC5leHRcbiAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzLmV4dENoaWxkcmVuLmZpcnN0LmV4dC54dHlwZVxuICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2NvbnRhaW5lcicgJiZcbiAgICAgICAgdGhpcy5hbGxDaGlsZHJlbi5maXJzdCAhPSB1bmRlZmluZWQgJiYgXG4gICAgICAgIHRoaXMuYWxsQ2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QubmF0aXZlRWxlbWVudClcbiAgICAgIHBhcmVudENtcC5zZXRIdG1sKHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QubmF0aXZlRWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgZXh0Q2hpbGRyZW5BcnJheTogYW55ID0gdGhpcy5leHRDaGlsZHJlbi50b0FycmF5KClcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBleHRDaGlsZHJlbkFycmF5Lmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykgeyAvL3N0YXJ0IGFmdGVyIGZpcnN0IG9uZVxuICAgICAgdmFyIGNoaWxkQ21wID0gZXh0Q2hpbGRyZW5BcnJheVtpXS5leHRcbiAgICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGVcbiAgICAgIC8vY29uc29sZS5sb2coYHBhcmVudDogJHtwYXJlbnR4dHlwZX0sIGNoaWxkOiAke2NoaWxkeHR5cGV9YClcbiAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB2YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuICB9XG5cbn0iLCJpbXBvcnQge1xuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYnV0dG9uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnYnV0dG9uJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWxsb3dEZXByZXNzJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXJyb3cnLFxuICAgICdhcnJvd0FsaWduJyxcbiAgICAnYXV0b0V2ZW50JyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiYWRnZVRleHQnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnYnV0dG9uVHlwZScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xzJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVzdHJveU1lbnUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VuYWJsZVRvZ2dsZScsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2hhbmRsZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaHRtbCcsXG4gICAgJ2ljb24nLFxuICAgICdpY29uQWxpZ24nLFxuICAgICdpY29uQ2xzJyxcbiAgICAnaWQnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtZW51JyxcbiAgICAnbWVudUFsaWduJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHJlc3NlZCcsXG4gICAgJ3ByZXNzZWREZWxheScsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njb3BlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzdHJldGNoTWVudScsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0ZXh0JyxcbiAgICAndGV4dEFsaWduJyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3RvZ2dsZUhhbmRsZXInLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd4dHlwZScsXG4gICAgJ3knLFxuICAgICd6SW5kZXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidiZWZvcmVwcmVzc2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2J1dHRvbid9LFxuXHRcdHtuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOididXR0b24sZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2J1dHRvbixldmVudCd9LFxuXHRcdHtuYW1lOidmdWxsc2NyZWVuJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLHRvSW5kZXgsZnJvbUluZGV4J30sXG5cdFx0e25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcblx0XHR7bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZToncHJlc3NlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlbGVhc2UnLHBhcmFtZXRlcnM6J2J1dHRvbixlJ30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcblx0XHR7bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J3RhcCcscGFyYW1ldGVyczonYnV0dG9uLGUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonYnV0dG9uJ30sXG5cdFx0e25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhZGRlZCcsXG5cdFx0J2JlZm9yZWJvdHRvbWNoYW5nZScsXG5cdFx0J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlbGVmdGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J2JlZm9yZXByZXNzZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVyaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXRvcGNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JvdHRvbWNoYW5nZScsXG5cdFx0J2NlbnRlcmVkY2hhbmdlJyxcblx0XHQnZGVzdHJveScsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZG9ja2VkY2hhbmdlJyxcblx0XHQnZXJhc2VkJyxcblx0XHQnZmxvYXRpbmdjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnZnVsbHNjcmVlbicsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdpbml0aWFsaXplJyxcblx0XHQnbGVmdGNoYW5nZScsXG5cdFx0J21heEhlaWdodGNoYW5nZScsXG5cdFx0J21heFdpZHRoY2hhbmdlJyxcblx0XHQnbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J29yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQncGFpbnRlZCcsXG5cdFx0J3Bvc2l0aW9uZWRjaGFuZ2UnLFxuXHRcdCdwcmVzc2VkY2hhbmdlJyxcblx0XHQncmVsZWFzZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndGFwJyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1idXR0b24nLCBcbiAgaW5wdXRzOiBidXR0b25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBidXR0b25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QnV0dG9uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsYnV0dG9uTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGJ1dHRvbk1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KCl9XG59IiwiaW1wb3J0IHtcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGdyaWRNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdncmlkJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2FjdGl2ZUl0ZW0nLFxuICAgICdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2Fzc29jaWF0ZWREYXRhJyxcbiAgICAnYXV0b0Rlc3Ryb3knLFxuICAgICdhdXRvU2l6ZScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2J1ZmZlclNpemUnLFxuICAgICdjYXJkU3dpdGNoQW5pbWF0aW9uJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW5MaW5lcycsXG4gICAgJ2NvbHVtbk1lbnUnLFxuICAgICdjb2x1bW5SZXNpemUnLFxuICAgICdjb2x1bW5zJyxcbiAgICAnY29sdW1uc01lbnVJdGVtJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0Rm9jdXMnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRzJyxcbiAgICAnZGVmYXVsdFR5cGUnLFxuICAgICdkZWZlckVtcHR5VGV4dCcsXG4gICAgJ2Rlc2VsZWN0T25Db250YWluZXJDbGljaycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZVNlbGVjdGlvbicsXG4gICAgJ2Rpc2Nsb3N1cmVQcm9wZXJ0eScsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VtcHR5SXRlbVRleHQnLFxuICAgICdlbXB0eVN0YXRlJyxcbiAgICAnZW1wdHlUZXh0JyxcbiAgICAnZW1wdHlUZXh0RGVmYXVsdHMnLFxuICAgICdlbXB0eVRleHRQcm9wZXJ0eScsXG4gICAgJ2VuYWJsZVRleHRTZWxlY3Rpb24nLFxuICAgICdlbnRlckFuaW1hdGlvbicsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleGl0QW5pbWF0aW9uJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c2FibGVDb250YWluZXInLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdncm91cGVkJyxcbiAgICAnZ3JvdXBGb290ZXInLFxuICAgICdncm91cEhlYWRlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlSGVhZGVycycsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2hvcml6b250YWxPdmVyZmxvdycsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2luZGV4QmFyJyxcbiAgICAnaW5maW5pdGUnLFxuICAgICdpbmxpbmUnLFxuICAgICdpbm5lckNscycsXG4gICAgJ2lubmVyQ3RIZWlnaHQnLFxuICAgICdpbm5lcldpZHRoJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtQnV0dG9uTW9kZScsXG4gICAgJ2l0ZW1DbHMnLFxuICAgICdpdGVtQ29uZmlnJyxcbiAgICAnaXRlbUNvbnRlbnRDbHMnLFxuICAgICdpdGVtRGF0YU1hcCcsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1Jbm5lckNscycsXG4gICAgJ2l0ZW1SaXBwbGUnLFxuICAgICdpdGVtcycsXG4gICAgJ2l0ZW1zRm9jdXNhYmxlJyxcbiAgICAnaXRlbVRwbCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbG9hZGluZ0hlaWdodCcsXG4gICAgJ2xvYWRpbmdUZXh0JyxcbiAgICAnbWFpbnRhaW5DaGlsZE5vZGVzJyxcbiAgICAnbWFuYWdlQm9yZGVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hcmtEaXJ0eScsXG4gICAgJ21hc2tlZCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heEl0ZW1DYWNoZScsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluaW11bUJ1ZmZlckRpc3RhbmNlJyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ211bHRpQ29sdW1uU29ydCcsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdvbkl0ZW1EaXNjbG9zdXJlJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BpbkZvb3RlcnMnLFxuICAgICdwaW5IZWFkZXJzJyxcbiAgICAncGlubmVkRm9vdGVyJyxcbiAgICAncGlubmVkRm9vdGVySGVpZ2h0JyxcbiAgICAncGlubmVkSGVhZGVyJyxcbiAgICAncGlubmVkSGVhZGVySGVpZ2h0JyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3ByZXNzZWREZWxheScsXG4gICAgJ3ByZXZlbnRTZWxlY3Rpb25PbkRpc2Nsb3NlJyxcbiAgICAncHJldmVudFNlbGVjdGlvbk9uVG9vbCcsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZmVyZW5jZUhvbGRlcicsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNlcnZlU2Nyb2xsYmFyJyxcbiAgICAncmVzZXRGb2N1c1Bvc2l0aW9uJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdyb3dMaW5lcycsXG4gICAgJ3Jvd051bWJlcnMnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Nyb2xsRG9jaycsXG4gICAgJ3Njcm9sbFRvVG9wT25SZWZyZXNoJyxcbiAgICAnc2VsZWN0YWJsZScsXG4gICAgJ3NlbGVjdGlvbicsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzb3J0YWJsZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3RyaXBlZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0aXRsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG9wUmVuZGVyZWRJbmRleCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHJpZ2dlckN0RXZlbnQnLFxuICAgICd0cmlnZ2VyRXZlbnQnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndXNlU2ltcGxlSXRlbXMnLFxuICAgICd2YXJpYWJsZUhlaWdodHMnLFxuICAgICd2ZXJ0aWNhbE92ZXJmbG93JyxcbiAgICAndmlld01vZGVsJyxcbiAgICAndmlzaWJsZUhlaWdodCcsXG4gICAgJ3Zpc2libGVMZWZ0JyxcbiAgICAndmlzaWJsZVRvcCcsXG4gICAgJ3Zpc2libGVXaWR0aCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dlaWdodGVkJyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOiduZXdBY3RpdmVJdGVtLGdyaWQsb2xkQWN0aXZlSXRlbSd9LFxuXHRcdHtuYW1lOidhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonYWRkJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2VsZWN0aW9uZXh0ZW5kJyxwYXJhbWV0ZXJzOidncmlkLEFuLGV4dGVuc2lvbid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonZ3JpZCxldmVudCd9LFxuXHRcdHtuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidjZWxsc2VsZWN0aW9uJyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGlvbid9LFxuXHRcdHtuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NoaWxkZG91YmxldGFwJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkbG9uZ3ByZXNzJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkbW91c2VlbnRlcicscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZG1vdXNlbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGRzaW5nbGV0YXAnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0YXAnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0YXBob2xkJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkdG91Y2hjYW5jZWwnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0b3VjaGVuZCcscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZHRvdWNobW92ZScscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZHRvdWNoc3RhcnQnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY29sdW1uYWRkJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixpbmRleCd9LFxuXHRcdHtuYW1lOidjb2x1bW5oaWRlJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbid9LFxuXHRcdHtuYW1lOidjb2x1bW5tZW51Y3JlYXRlZCcscGFyYW1ldGVyczonZ3JpZCxjb2x1bW4sbWVudSd9LFxuXHRcdHtuYW1lOidjb2x1bW5tb3ZlJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixmcm9tSW5kZXgsdG9JbmRleCd9LFxuXHRcdHtuYW1lOidjb2x1bW5yZW1vdmUnLHBhcmFtZXRlcnM6J2dyaWQsY29sdW1uJ30sXG5cdFx0e25hbWU6J2NvbHVtbnJlc2l6ZScscGFyYW1ldGVyczonZ3JpZCxjb2x1bW4sd2lkdGgnfSxcblx0XHR7bmFtZTonY29sdW1uc2VsZWN0aW9uJyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGlvbid9LFxuXHRcdHtuYW1lOidjb2x1bW5zaG93JyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbid9LFxuXHRcdHtuYW1lOidjb2x1bW5zb3J0JyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixkaXJlY3Rpb24nfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonb2xkQWN0aXZlSXRlbSxncmlkLG5ld0FjdGl2ZUl0ZW0nfSxcblx0XHR7bmFtZTonZGVzZWxlY3QnLHBhcmFtZXRlcnM6J2dyaWQscmVjb3Jkcyd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkaXNjbG9zZScscGFyYW1ldGVyczonbGlzdCxyZWNvcmQsdGFyZ2V0LGluZGV4LGV2ZW50J30sXG5cdFx0e25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonZ3JpZCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidncmlkLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWQsZXZlbnQnfSxcblx0XHR7bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaXRlbWFjdGlvbicscGFyYW1ldGVyczonZ3JpZCxpbmRleCxyZWNvcmQsYWN0aW9uJ30sXG5cdFx0e25hbWU6J2l0ZW1kb3VibGV0YXAnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW1sb25ncHJlc3MnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW1tb3VzZWVudGVyJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtbW91c2VsZWF2ZScscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXNpbmdsZXRhcCcscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXN3aXBlJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdGFwJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdGFwaG9sZCcscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXRvdWNoY2FuY2VsJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdG91Y2hlbmQnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW10b3VjaG1vdmUnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW10b3VjaHN0YXJ0JyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOiduYXZpZ2F0ZScscGFyYW1ldGVyczonZ3JpZCx0byxmcm9tJ30sXG5cdFx0e25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcblx0XHR7bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZToncmVmcmVzaCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3JlbmRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidncmlkLGl0ZW0scmVuZGVyZWQnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcblx0XHR7bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2VsZWN0JyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGVkJ30sXG5cdFx0e25hbWU6J3NlbGVjdGlvbmV4dGVuZGVyZHJhZycscGFyYW1ldGVyczonZ3JpZCxBbixleHRlbnNpb24nfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J3N0b3JlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYWRkJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcmlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnYmVmb3Jlc2VsZWN0aW9uZXh0ZW5kJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXN0b3JlY2hhbmdlJyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXRvcGNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JvdHRvbWNoYW5nZScsXG5cdFx0J2NlbGxzZWxlY3Rpb24nLFxuXHRcdCdjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2NoaWxkZG91YmxldGFwJyxcblx0XHQnY2hpbGRsb25ncHJlc3MnLFxuXHRcdCdjaGlsZG1vdXNlZW50ZXInLFxuXHRcdCdjaGlsZG1vdXNlbGVhdmUnLFxuXHRcdCdjaGlsZHNpbmdsZXRhcCcsXG5cdFx0J2NoaWxkdGFwJyxcblx0XHQnY2hpbGR0YXBob2xkJyxcblx0XHQnY2hpbGR0b3VjaGNhbmNlbCcsXG5cdFx0J2NoaWxkdG91Y2hlbmQnLFxuXHRcdCdjaGlsZHRvdWNobW92ZScsXG5cdFx0J2NoaWxkdG91Y2hzdGFydCcsXG5cdFx0J2NvbHVtbmFkZCcsXG5cdFx0J2NvbHVtbmhpZGUnLFxuXHRcdCdjb2x1bW5tZW51Y3JlYXRlZCcsXG5cdFx0J2NvbHVtbm1vdmUnLFxuXHRcdCdjb2x1bW5yZW1vdmUnLFxuXHRcdCdjb2x1bW5yZXNpemUnLFxuXHRcdCdjb2x1bW5zZWxlY3Rpb24nLFxuXHRcdCdjb2x1bW5zaG93Jyxcblx0XHQnY29sdW1uc29ydCcsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXNlbGVjdCcsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2Rpc2Nsb3NlJyxcblx0XHQnZG9ja2VkY2hhbmdlJyxcblx0XHQnZXJhc2VkJyxcblx0XHQnZmxvYXRpbmdjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnZnVsbHNjcmVlbicsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdpbml0aWFsaXplJyxcblx0XHQnaXRlbWFjdGlvbicsXG5cdFx0J2l0ZW1kb3VibGV0YXAnLFxuXHRcdCdpdGVtbG9uZ3ByZXNzJyxcblx0XHQnaXRlbW1vdXNlZW50ZXInLFxuXHRcdCdpdGVtbW91c2VsZWF2ZScsXG5cdFx0J2l0ZW1zaW5nbGV0YXAnLFxuXHRcdCdpdGVtc3dpcGUnLFxuXHRcdCdpdGVtdGFwJyxcblx0XHQnaXRlbXRhcGhvbGQnLFxuXHRcdCdpdGVtdG91Y2hjYW5jZWwnLFxuXHRcdCdpdGVtdG91Y2hlbmQnLFxuXHRcdCdpdGVtdG91Y2htb3ZlJyxcblx0XHQnaXRlbXRvdWNoc3RhcnQnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmUnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J25hdmlnYXRlJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3JlZnJlc2gnLFxuXHRcdCdyZW1vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyZWRjaGFuZ2UnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzZWxlY3QnLFxuXHRcdCdzZWxlY3Rpb25leHRlbmRlcmRyYWcnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RvcmVjaGFuZ2UnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQndG9wY2hhbmdlJyxcblx0XHQndXBkYXRlZGF0YScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWdyaWQnLCBcbiAgaW5wdXRzOiBncmlkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZ3JpZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRHcmlkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0R3JpZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGdyaWRNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoZ3JpZE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KCl9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4dEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZXh0LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0R3JpZENvbXBvbmVudCB9IGZyb20gJy4vZXh0LWdyaWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFeHRCdXR0b25Db21wb25lbnQsXG4gICAgRXh0R3JpZENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRXh0QnV0dG9uQ29tcG9uZW50LFxuICAgIEV4dEdyaWRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyTW9kZXJuTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbnRlbnRDaGlsZHJlbiIsInRzbGliXzEuX19leHRlbmRzIiwiQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsIkVsZW1lbnRSZWYiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxLQUFLLElBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLFNBQVMsRUFBRSxJQUFJLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDekYsQ0FBQzs7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