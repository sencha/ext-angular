(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('ext-angular', ['exports', '@angular/core'], factory) :
    (factory((global['ext-angular'] = {}),global.ng.core));
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
                    if ((o.xtype == 'cartesian' || o.xtype == 'polar') && prop == 'layout') ;
                    else {
                        if (me[prop] != undefined &&
                            prop != 'listeners' &&
                            prop != 'config' &&
                            prop != 'fitToParent') {
                            o[prop] = me[prop];
                        }
                    }
                }
                if ('true' == me.fitToParent) {
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
                if (parentxtype == 'container' &&
                    this.allChildren.first != undefined &&
                    this.allChildren.length == 1) {
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
                    if (parentxtype == 'grid') {
                        if (childxtype == 'column' || childxtype == 'treecolumn' || childxtype == 'textcolumn' || childxtype == 'checkcolumn' || childxtype == 'datecolumn' || childxtype == 'rownumberer' || childxtype == 'numbercolumn') {
                            parentCmp.addColumn(childCmp);
                        }
                    }
                    else if (parentxtype == 'tooltip') {
                        parentCmp.setTooltip(childCmp);
                    }
                    else if (parentxtype == 'plugin') {
                        parentCmp.setPlugin(childCmp);
                    }
                    else if (parentxtype == 'button') {
                        if (childxtype == 'menu') {
                            parentCmp.setMenu(childCmp);
                        }
                        else {
                            console.log('child not added');
                        }
                    }
                    else if (childxtype == 'toolbar' && Ext.isClassic == true) {
                        parentCmp.addDockedItems(childCmp);
                    }
                    else if ((childxtype == 'toolbar' || childxtype == 'titlebar') && parentCmp.getHideHeaders != undefined) {
                        if (parentCmp.getHideHeaders() == false) {
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
    var ExtAngularModule = /** @class */ (function () {
        function ExtAngularModule() {
        }
        ExtAngularModule.decorators = [
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
        return ExtAngularModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */
    //export * from './lib/ext-angular.component';

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
     */

    exports.ExtAngularModule = ExtAngularModule;
    exports.ɵc = base;
    exports.ɵb = ExtButtonComponent;
    exports.ɵa = buttonMetaData;
    exports.ɵe = ExtGridComponent;
    exports.ɵd = gridMetaData;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXIudW1kLmpzLm1hcCIsInNvdXJjZXMiOlsibm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIm5nOi8vZXh0LWFuZ3VsYXIvbGliL2Jhc2UudHMiLCJuZzovL2V4dC1hbmd1bGFyL2xpYi9leHQtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vZXh0LWFuZ3VsYXIvbGliL2V4dC1ncmlkLmNvbXBvbmVudC50cyIsIm5nOi8vZXh0LWFuZ3VsYXIvbGliL2V4dC1hbmd1bGFyLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImRlY2xhcmUgdmFyIEV4dDogYW55O1xuaW1wb3J0IHtFbGVtZW50UmVmLEV2ZW50RW1pdHRlcixDb250ZW50Q2hpbGRyZW4sUXVlcnlMaXN0LFxuLy8gIEFmdGVyQ29udGVudENoZWNrZWQsXG4vLyAgQWZ0ZXJDb250ZW50SW5pdCxcbi8vICBBZnRlclZpZXdDaGVja2VkLFxuLy8gIEFmdGVyVmlld0luaXQsXG4vLyAgRG9DaGVjayxcbi8vICBPbkNoYW5nZXMsXG4vLyAgT25EZXN0cm95LFxuLy8gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIGJhc2Uge1xuICBwdWJsaWMgZXh0OiBhbnlcbiAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yJyk7Y29uc29sZS5sb2coZWwubmF0aXZlRWxlbWVudClcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudFxuICAgIG1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgIH0pXG4gIH1cblxuICAgIE9uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYE9uQ2hhbmdlc2ApXG4gICAgfVxuXG4gIHZlcmI6YW55ID0gJ2luaXRpYWxpemVkJ1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICBsZXQgY2hhbmdlc01zZ3M6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlXG4gICAgICBpZiAodGhpcy5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSlcbiAgICAgICAgdGhpcy5leHRbJ3NldCcrY2FwUHJvcE5hbWVdKHZhbClcbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dGhpcy52ZXJifSB0byBcIiR7dmFsfVwiYClcbiAgICB9XG4gICAgY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gICAgdGhpcy52ZXJiID0gJ2NoYW5nZWQnIC8vIG5leHQgdGltZSBpdCB3aWxsIGJlIGEgY2hhbmdlXG4gIH1cblxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nRG9DaGVjaygpIHtjb25zb2xlLmxvZyhgRG9DaGVja2ApfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyQ29udGVudENoZWNrZWRgKSB9XG4gIC8vbmdBZnRlclZpZXdJbml0KCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3SW5pdGApIH1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdDaGVja2VkYCkgfVxuICAvL25nT25EZXN0cm95KCkgeyBjb25zb2xlLmxvZyhgT25EZXN0cm95YCkgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PSAnY2FydGVzaWFuJyB8fCBvLnh0eXBlID09ICdwb2xhcicpICYmIHByb3AgPT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHsgXG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdOyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ3RydWUnID09IG1lLmZpdFRvUGFyZW50KSB7XG4gICAgICBvLnRvcD0wLCBcbiAgICAgIG8ubGVmdD0wLCBcbiAgICAgIG8ud2lkdGg9JzEwMCUnLCBcbiAgICAgIG8uaGVpZ2h0PScxMDAlJ1xuICAgIH1cbiAgICBpZiAobWUuY29uZmlnICE9PSB7fSApIHtcbiAgICAgIEV4dC5hcHBseShvLCBtZS5jb25maWcpO1xuICAgIH1cbiAgICBvLmxpc3RlbmVycyA9IHt9XG4gICAgdmFyIEVWRU5UUyA9IG1ldGFEYXRhLkVWRU5UU1xuICAgIEVWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudDogYW55LCBpbmRleDogYW55LCBhcnJheTogYW55KSB7XG4gICAgICBsZXQgZXZlbnRuYW1lOiBhbnkgPSBldmVudC5uYW1lXG4gICAgICBsZXQgZXZlbnRwYXJhbWV0ZXJzOiBhbnkgPSBldmVudC5wYXJhbWV0ZXJzXG4gICAgICBvLmxpc3RlbmVyc1tldmVudG5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJzOiBhbnkgPSBldmVudHBhcmFtZXRlcnNcbiAgICAgICAgbGV0IHBhcm1zID0gcGFyYW1ldGVycy5zcGxpdCgnLCcpXG4gICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICBsZXQgZW1pdHBhcm1zOiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBhcm1zLmxlbmd0aDsgaSA8IGo7IGkrKyApIHtcbiAgICAgICAgICBlbWl0cGFybXNbcGFybXNbaV1dID0gYXJnc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZW1pdHBhcm1zKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBvLnJlbmRlclRvID0gdGhpcy5fbmF0aXZlRWxlbWVudFxuICAgIH1cbiAgICB0aGlzLmV4dCA9IEV4dC5jcmVhdGUobylcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oYmFzZSwge2Rlc2NlbmRhbnRzOiBmYWxzZX0pIGV4dENoaWxkcmVuOiBRdWVyeUxpc3Q8YW55PlxuICBAQ29udGVudENoaWxkcmVuKCdleHQnKSBhbGxDaGlsZHJlbjogUXVlcnlMaXN0PGFueT5cbiAgYmFzZUFmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdBZnRlckNvbnRlbnRJbml0OiAke3RoaXMuZXh0Q2hpbGRyZW4uZmlyc3QuZXh0Lnh0eXBlfSAke3RoaXMuZXh0Q2hpbGRyZW4ubGVuZ3RofSAke3RoaXMuYWxsQ2hpbGRyZW4ubGVuZ3RofWApXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmFsbENoaWxkcmVuKVxuICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmV4dENoaWxkcmVuLmZpcnN0LmV4dFxuICAgIHZhciBwYXJlbnR4dHlwZSA9IHRoaXMuZXh0Q2hpbGRyZW4uZmlyc3QuZXh0Lnh0eXBlXG4gICAgaWYgKHBhcmVudHh0eXBlID09ICdjb250YWluZXInICYmXG4gICAgICAgIHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QgIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICB0aGlzLmFsbENoaWxkcmVuLmxlbmd0aCA9PSAxKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QubmF0aXZlRWxlbWVudClcbiAgICAgIHBhcmVudENtcC5zZXRIdG1sKHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QubmF0aXZlRWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgZXh0Q2hpbGRyZW5BcnJheTogYW55ID0gdGhpcy5leHRDaGlsZHJlbi50b0FycmF5KClcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBleHRDaGlsZHJlbkFycmF5Lmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykgeyAvL3N0YXJ0IGFmdGVyIGZpcnN0IG9uZVxuICAgICAgdmFyIGNoaWxkQ21wID0gZXh0Q2hpbGRyZW5BcnJheVtpXS5leHRcbiAgICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGVcbiAgICAgIC8vY29uc29sZS5sb2coYHBhcmVudDogJHtwYXJlbnR4dHlwZX0sIGNoaWxkOiAke2NoaWxkeHR5cGV9YClcbiAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PSAndG9vbHRpcCcpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09ICdwbHVnaW4nKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT0gdHJ1ZSkge1xuICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09IGZhbHNlKSB7XG4gICAgICAgICAgdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHBhcmVudENtcClcbiAgfVxuXG59IiwiaW1wb3J0IHtPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMsU2ltcGxlQ2hhbmdlcyxDb21wb25lbnQsVmlld0NoaWxkLFxuRWxlbWVudFJlZixDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXIsVmlld0NvbnRhaW5lclJlZixcbmZvcndhcmRSZWYsQ29udGVudENoaWxkcmVuLFF1ZXJ5TGlzdH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBiYXNlIH0gZnJvbSAnLi9iYXNlJztcbmV4cG9ydCBjbGFzcyBidXR0b25NZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdidXR0b24nO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhbGxvd0RlcHJlc3MnLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhcnJvdycsXG4gICAgJ2Fycm93QWxpZ24nLFxuICAgICdhdXRvRXZlbnQnLFxuICAgICdheGlzTG9jaycsXG4gICAgJ2JhZGdlVGV4dCcsXG4gICAgJ2JpbmQnLFxuICAgICdib3JkZXInLFxuICAgICdib3R0b20nLFxuICAgICdidXR0b25UeXBlJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2xsZXInLFxuICAgICdkYXRhJyxcbiAgICAnZGVmYXVsdExpc3RlbmVyU2NvcGUnLFxuICAgICdkZXN0cm95TWVudScsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzcGxheWVkJyxcbiAgICAnZG9ja2VkJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZW5hYmxlVG9nZ2xlJyxcbiAgICAnZW50ZXJBbmltYXRpb24nLFxuICAgICdldmVudEhhbmRsZXJzJyxcbiAgICAnZXhpdEFuaW1hdGlvbicsXG4gICAgJ2ZsZXgnLFxuICAgICdmbG9hdGVkJyxcbiAgICAnZm9jdXNDbHMnLFxuICAgICdmdWxsc2NyZWVuJyxcbiAgICAnaGFuZGxlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZGVPbk1hc2tUYXAnLFxuICAgICdodG1sJyxcbiAgICAnaWNvbicsXG4gICAgJ2ljb25BbGlnbicsXG4gICAgJ2ljb25DbHMnLFxuICAgICdpZCcsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAna2V5TWFwJyxcbiAgICAna2V5TWFwRW5hYmxlZCcsXG4gICAgJ2tleU1hcFRhcmdldCcsXG4gICAgJ2xlZnQnLFxuICAgICdsaXN0ZW5lcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21lbnUnLFxuICAgICdtZW51QWxpZ24nLFxuICAgICdtaW5IZWlnaHQnLFxuICAgICdtaW5XaWR0aCcsXG4gICAgJ21vZGFsJyxcbiAgICAnbW9kZWxWYWxpZGF0aW9uJyxcbiAgICAnbmFtZScsXG4gICAgJ25hbWVhYmxlJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwcmVzc2VkJyxcbiAgICAncHJlc3NlZERlbGF5JyxcbiAgICAncHVibGlzaGVzJyxcbiAgICAncmVjb3JkJyxcbiAgICAncmVmZXJlbmNlJyxcbiAgICAncmVsYXRpdmUnLFxuICAgICdyZW5kZXJUbycsXG4gICAgJ3JpZ2h0JyxcbiAgICAncmlwcGxlJyxcbiAgICAnc2NvcGUnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2VsZkFsaWduJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hvd0FuaW1hdGlvbicsXG4gICAgJ3N0cmV0Y2hNZW51JyxcbiAgICAnc3R5bGUnLFxuICAgICd0YWJJbmRleCcsXG4gICAgJ3RleHQnLFxuICAgICd0ZXh0QWxpZ24nLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9nZ2xlSGFuZGxlcicsXG4gICAgJ3Rvb2x0aXAnLFxuICAgICd0b3AnLFxuICAgICd0b3VjaEFjdGlvbicsXG4gICAgJ3RwbCcsXG4gICAgJ3RwbFdyaXRlTW9kZScsXG4gICAgJ3RyYW5zbGF0YWJsZScsXG4gICAgJ3R3b1dheUJpbmRhYmxlJyxcbiAgICAndWknLFxuICAgICd1c2VyQ2xzJyxcbiAgICAndXNlclNlbGVjdGFibGUnLFxuICAgICd2YWx1ZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dpZHRoJyxcbiAgICAneCcsXG4gICAgJ3h0eXBlJyxcbiAgICAneScsXG4gICAgJ3pJbmRleCcsXG4gICAgJ3BsYXRmb3JtQ29uZmlnJyxcbiAgICAncmVzcG9uc2l2ZUNvbmZpZycsXG4gICAgJ2ZpdFRvUGFyZW50JyxcbiAgICAnY29uZmlnJ1xuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVFM6IGFueVtdID0gW1xuXHRcdHtuYW1lOidhZGRlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXByZXNzZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlcmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonYnV0dG9uJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidibHVyJyxwYXJhbWV0ZXJzOididXR0b24sZXZlbnQnfSxcblx0XHR7bmFtZTonYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2J1dHRvbixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOididXR0b24sZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcblx0XHR7bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxuXHRcdHtuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidwcmVzc2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVsZWFzZScscGFyYW1ldGVyczonYnV0dG9uLGUnfSxcblx0XHR7bmFtZToncmVtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcixpbmRleCd9LFxuXHRcdHtuYW1lOidyZXNpemUnLHBhcmFtZXRlcnM6J2VsZW1lbnQsaW5mbyd9LFxuXHRcdHtuYW1lOidyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Njcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTondGFwJyxwYXJhbWV0ZXJzOididXR0b24sZSd9LFxuXHRcdHtuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOididXR0b24nfSxcblx0XHR7bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondXBkYXRlZGF0YScscGFyYW1ldGVyczonc2VuZGVyLG5ld0RhdGEnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlROQU1FUzogc3RyaW5nW10gPSBbXG5cdFx0J2FkZGVkJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcHJlc3NlZGNoYW5nZScsXG5cdFx0J2JlZm9yZXJpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3Jlc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J2JlZm9yZXNob3cnLFxuXHRcdCdiZWZvcmV0b2Zyb250Jyxcblx0XHQnYmVmb3JldG9wY2hhbmdlJyxcblx0XHQnYmVmb3Jld2lkdGhjaGFuZ2UnLFxuXHRcdCdibHVyJyxcblx0XHQnYm90dG9tY2hhbmdlJyxcblx0XHQnY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdkb2NrZWRjaGFuZ2UnLFxuXHRcdCdlcmFzZWQnLFxuXHRcdCdmbG9hdGluZ2NoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdmdWxsc2NyZWVuJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQnaGlkZScsXG5cdFx0J2luaXRpYWxpemUnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmVkJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3ByZXNzZWRjaGFuZ2UnLFxuXHRcdCdyZWxlYXNlJyxcblx0XHQncmVtb3ZlZCcsXG5cdFx0J3Jlc2l6ZScsXG5cdFx0J3JpZ2h0Y2hhbmdlJyxcblx0XHQnc2Nyb2xsYWJsZWNoYW5nZScsXG5cdFx0J3Nob3cnLFxuXHRcdCd0YXAnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQndG9wY2hhbmdlJyxcblx0XHQndXBkYXRlZGF0YScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWJ1dHRvbicsIFxuICBpbnB1dHM6IGJ1dHRvbk1ldGFEYXRhLlBST1BFUlRJRVMsXG4gIG91dHB1dHM6IGJ1dHRvbk1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRCdXR0b25Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRCdXR0b25Db21wb25lbnQgZXh0ZW5kcyBiYXNlIGltcGxlbWVudHMgT25Jbml0LEFmdGVyQ29udGVudEluaXQsT25DaGFuZ2VzIHtcbiAgY29uc3RydWN0b3IoZVJlZjpFbGVtZW50UmVmKSB7c3VwZXIoZVJlZixidXR0b25NZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoYnV0dG9uTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge3RoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKX1cbn0iLCJpbXBvcnQge09uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyxTaW1wbGVDaGFuZ2VzLENvbXBvbmVudCxWaWV3Q2hpbGQsXG5FbGVtZW50UmVmLENvbXBvbmVudEZhY3RvcnlSZXNvbHZlcixWaWV3Q29udGFpbmVyUmVmLFxuZm9yd2FyZFJlZixDb250ZW50Q2hpbGRyZW4sUXVlcnlMaXN0fSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGdyaWRNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdncmlkJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2FjdGl2ZUl0ZW0nLFxuICAgICdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2Fzc29jaWF0ZWREYXRhJyxcbiAgICAnYXV0b0Rlc3Ryb3knLFxuICAgICdhdXRvU2l6ZScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2J1ZmZlclNpemUnLFxuICAgICdjYXJkU3dpdGNoQW5pbWF0aW9uJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW5MaW5lcycsXG4gICAgJ2NvbHVtbk1lbnUnLFxuICAgICdjb2x1bW5SZXNpemUnLFxuICAgICdjb2x1bW5zJyxcbiAgICAnY29sdW1uc01lbnVJdGVtJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0Rm9jdXMnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRzJyxcbiAgICAnZGVmYXVsdFR5cGUnLFxuICAgICdkZWZlckVtcHR5VGV4dCcsXG4gICAgJ2Rlc2VsZWN0T25Db250YWluZXJDbGljaycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZVNlbGVjdGlvbicsXG4gICAgJ2Rpc2Nsb3N1cmVQcm9wZXJ0eScsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VtcHR5SXRlbVRleHQnLFxuICAgICdlbXB0eVN0YXRlJyxcbiAgICAnZW1wdHlUZXh0JyxcbiAgICAnZW1wdHlUZXh0RGVmYXVsdHMnLFxuICAgICdlbXB0eVRleHRQcm9wZXJ0eScsXG4gICAgJ2VuYWJsZVRleHRTZWxlY3Rpb24nLFxuICAgICdlbnRlckFuaW1hdGlvbicsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleGl0QW5pbWF0aW9uJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c2FibGVDb250YWluZXInLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdncm91cGVkJyxcbiAgICAnZ3JvdXBGb290ZXInLFxuICAgICdncm91cEhlYWRlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlSGVhZGVycycsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2hvcml6b250YWxPdmVyZmxvdycsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2luZGV4QmFyJyxcbiAgICAnaW5maW5pdGUnLFxuICAgICdpbmxpbmUnLFxuICAgICdpbm5lckNscycsXG4gICAgJ2lubmVyQ3RIZWlnaHQnLFxuICAgICdpbm5lcldpZHRoJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtQnV0dG9uTW9kZScsXG4gICAgJ2l0ZW1DbHMnLFxuICAgICdpdGVtQ29uZmlnJyxcbiAgICAnaXRlbUNvbnRlbnRDbHMnLFxuICAgICdpdGVtRGF0YU1hcCcsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1Jbm5lckNscycsXG4gICAgJ2l0ZW1SaXBwbGUnLFxuICAgICdpdGVtcycsXG4gICAgJ2l0ZW1zRm9jdXNhYmxlJyxcbiAgICAnaXRlbVRwbCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbG9hZGluZ0hlaWdodCcsXG4gICAgJ2xvYWRpbmdUZXh0JyxcbiAgICAnbWFpbnRhaW5DaGlsZE5vZGVzJyxcbiAgICAnbWFuYWdlQm9yZGVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hcmtEaXJ0eScsXG4gICAgJ21hc2tlZCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heEl0ZW1DYWNoZScsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluaW11bUJ1ZmZlckRpc3RhbmNlJyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ211bHRpQ29sdW1uU29ydCcsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdvbkl0ZW1EaXNjbG9zdXJlJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BpbkZvb3RlcnMnLFxuICAgICdwaW5IZWFkZXJzJyxcbiAgICAncGlubmVkRm9vdGVyJyxcbiAgICAncGlubmVkRm9vdGVySGVpZ2h0JyxcbiAgICAncGlubmVkSGVhZGVyJyxcbiAgICAncGlubmVkSGVhZGVySGVpZ2h0JyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3ByZXNzZWREZWxheScsXG4gICAgJ3ByZXZlbnRTZWxlY3Rpb25PbkRpc2Nsb3NlJyxcbiAgICAncHJldmVudFNlbGVjdGlvbk9uVG9vbCcsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZmVyZW5jZUhvbGRlcicsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNlcnZlU2Nyb2xsYmFyJyxcbiAgICAncmVzZXRGb2N1c1Bvc2l0aW9uJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdyb3dMaW5lcycsXG4gICAgJ3Jvd051bWJlcnMnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Nyb2xsRG9jaycsXG4gICAgJ3Njcm9sbFRvVG9wT25SZWZyZXNoJyxcbiAgICAnc2VsZWN0YWJsZScsXG4gICAgJ3NlbGVjdGlvbicsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzb3J0YWJsZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3RyaXBlZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0aXRsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG9wUmVuZGVyZWRJbmRleCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHJpZ2dlckN0RXZlbnQnLFxuICAgICd0cmlnZ2VyRXZlbnQnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndXNlU2ltcGxlSXRlbXMnLFxuICAgICd2YXJpYWJsZUhlaWdodHMnLFxuICAgICd2ZXJ0aWNhbE92ZXJmbG93JyxcbiAgICAndmlld01vZGVsJyxcbiAgICAndmlzaWJsZUhlaWdodCcsXG4gICAgJ3Zpc2libGVMZWZ0JyxcbiAgICAndmlzaWJsZVRvcCcsXG4gICAgJ3Zpc2libGVXaWR0aCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dlaWdodGVkJyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOiduZXdBY3RpdmVJdGVtLGdyaWQsb2xkQWN0aXZlSXRlbSd9LFxuXHRcdHtuYW1lOidhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonYWRkJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2VsZWN0aW9uZXh0ZW5kJyxwYXJhbWV0ZXJzOidncmlkLEFuLGV4dGVuc2lvbid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonZ3JpZCxldmVudCd9LFxuXHRcdHtuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidjZWxsc2VsZWN0aW9uJyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGlvbid9LFxuXHRcdHtuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NoaWxkZG91YmxldGFwJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkbG9uZ3ByZXNzJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkbW91c2VlbnRlcicscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZG1vdXNlbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGRzaW5nbGV0YXAnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0YXAnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0YXBob2xkJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkdG91Y2hjYW5jZWwnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0b3VjaGVuZCcscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZHRvdWNobW92ZScscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZHRvdWNoc3RhcnQnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY29sdW1uYWRkJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixpbmRleCd9LFxuXHRcdHtuYW1lOidjb2x1bW5oaWRlJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbid9LFxuXHRcdHtuYW1lOidjb2x1bW5tZW51Y3JlYXRlZCcscGFyYW1ldGVyczonZ3JpZCxjb2x1bW4sbWVudSd9LFxuXHRcdHtuYW1lOidjb2x1bW5tb3ZlJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixmcm9tSW5kZXgsdG9JbmRleCd9LFxuXHRcdHtuYW1lOidjb2x1bW5yZW1vdmUnLHBhcmFtZXRlcnM6J2dyaWQsY29sdW1uJ30sXG5cdFx0e25hbWU6J2NvbHVtbnJlc2l6ZScscGFyYW1ldGVyczonZ3JpZCxjb2x1bW4sd2lkdGgnfSxcblx0XHR7bmFtZTonY29sdW1uc2VsZWN0aW9uJyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGlvbid9LFxuXHRcdHtuYW1lOidjb2x1bW5zaG93JyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbid9LFxuXHRcdHtuYW1lOidjb2x1bW5zb3J0JyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixkaXJlY3Rpb24nfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonb2xkQWN0aXZlSXRlbSxncmlkLG5ld0FjdGl2ZUl0ZW0nfSxcblx0XHR7bmFtZTonZGVzZWxlY3QnLHBhcmFtZXRlcnM6J2dyaWQscmVjb3Jkcyd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkaXNjbG9zZScscGFyYW1ldGVyczonbGlzdCxyZWNvcmQsdGFyZ2V0LGluZGV4LGV2ZW50J30sXG5cdFx0e25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonZ3JpZCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidncmlkLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWQsZXZlbnQnfSxcblx0XHR7bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaXRlbWFjdGlvbicscGFyYW1ldGVyczonZ3JpZCxpbmRleCxyZWNvcmQsYWN0aW9uJ30sXG5cdFx0e25hbWU6J2l0ZW1kb3VibGV0YXAnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW1sb25ncHJlc3MnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW1tb3VzZWVudGVyJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtbW91c2VsZWF2ZScscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXNpbmdsZXRhcCcscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXN3aXBlJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdGFwJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdGFwaG9sZCcscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXRvdWNoY2FuY2VsJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdG91Y2hlbmQnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW10b3VjaG1vdmUnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW10b3VjaHN0YXJ0JyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOiduYXZpZ2F0ZScscGFyYW1ldGVyczonZ3JpZCx0byxmcm9tJ30sXG5cdFx0e25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcblx0XHR7bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZToncmVmcmVzaCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3JlbmRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidncmlkLGl0ZW0scmVuZGVyZWQnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcblx0XHR7bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2VsZWN0JyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGVkJ30sXG5cdFx0e25hbWU6J3NlbGVjdGlvbmV4dGVuZGVyZHJhZycscGFyYW1ldGVyczonZ3JpZCxBbixleHRlbnNpb24nfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J3N0b3JlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYWRkJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcmlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnYmVmb3Jlc2VsZWN0aW9uZXh0ZW5kJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXN0b3JlY2hhbmdlJyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXRvcGNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JvdHRvbWNoYW5nZScsXG5cdFx0J2NlbGxzZWxlY3Rpb24nLFxuXHRcdCdjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2NoaWxkZG91YmxldGFwJyxcblx0XHQnY2hpbGRsb25ncHJlc3MnLFxuXHRcdCdjaGlsZG1vdXNlZW50ZXInLFxuXHRcdCdjaGlsZG1vdXNlbGVhdmUnLFxuXHRcdCdjaGlsZHNpbmdsZXRhcCcsXG5cdFx0J2NoaWxkdGFwJyxcblx0XHQnY2hpbGR0YXBob2xkJyxcblx0XHQnY2hpbGR0b3VjaGNhbmNlbCcsXG5cdFx0J2NoaWxkdG91Y2hlbmQnLFxuXHRcdCdjaGlsZHRvdWNobW92ZScsXG5cdFx0J2NoaWxkdG91Y2hzdGFydCcsXG5cdFx0J2NvbHVtbmFkZCcsXG5cdFx0J2NvbHVtbmhpZGUnLFxuXHRcdCdjb2x1bW5tZW51Y3JlYXRlZCcsXG5cdFx0J2NvbHVtbm1vdmUnLFxuXHRcdCdjb2x1bW5yZW1vdmUnLFxuXHRcdCdjb2x1bW5yZXNpemUnLFxuXHRcdCdjb2x1bW5zZWxlY3Rpb24nLFxuXHRcdCdjb2x1bW5zaG93Jyxcblx0XHQnY29sdW1uc29ydCcsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXNlbGVjdCcsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2Rpc2Nsb3NlJyxcblx0XHQnZG9ja2VkY2hhbmdlJyxcblx0XHQnZXJhc2VkJyxcblx0XHQnZmxvYXRpbmdjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnZnVsbHNjcmVlbicsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdpbml0aWFsaXplJyxcblx0XHQnaXRlbWFjdGlvbicsXG5cdFx0J2l0ZW1kb3VibGV0YXAnLFxuXHRcdCdpdGVtbG9uZ3ByZXNzJyxcblx0XHQnaXRlbW1vdXNlZW50ZXInLFxuXHRcdCdpdGVtbW91c2VsZWF2ZScsXG5cdFx0J2l0ZW1zaW5nbGV0YXAnLFxuXHRcdCdpdGVtc3dpcGUnLFxuXHRcdCdpdGVtdGFwJyxcblx0XHQnaXRlbXRhcGhvbGQnLFxuXHRcdCdpdGVtdG91Y2hjYW5jZWwnLFxuXHRcdCdpdGVtdG91Y2hlbmQnLFxuXHRcdCdpdGVtdG91Y2htb3ZlJyxcblx0XHQnaXRlbXRvdWNoc3RhcnQnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmUnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J25hdmlnYXRlJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3JlZnJlc2gnLFxuXHRcdCdyZW1vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyZWRjaGFuZ2UnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzZWxlY3QnLFxuXHRcdCdzZWxlY3Rpb25leHRlbmRlcmRyYWcnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RvcmVjaGFuZ2UnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQndG9wY2hhbmdlJyxcblx0XHQndXBkYXRlZGF0YScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWdyaWQnLCBcbiAgaW5wdXRzOiBncmlkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZ3JpZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRHcmlkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0R3JpZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGdyaWRNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoZ3JpZE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KCl9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4dEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZXh0LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0R3JpZENvbXBvbmVudCB9IGZyb20gJy4vZXh0LWdyaWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbkV4dEJ1dHRvbkNvbXBvbmVudCxcbkV4dEdyaWRDb21wb25lbnRcblxuICBdLFxuICBleHBvcnRzOiBbXG5FeHRCdXR0b25Db21wb25lbnQsXG5FeHRHcmlkQ29tcG9uZW50XG5cbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbnRlbnRDaGlsZHJlbiIsInRzbGliXzEuX19leHRlbmRzIiwiQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsIkVsZW1lbnRSZWYiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJ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