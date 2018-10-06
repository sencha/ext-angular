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
                //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
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
                //console.log('before create for ' + o.xtype)
                //Ext.onReady(function() {
                //  me.ext = Ext.create(o)
                //  console.log(me.ext)
                //})
                this.ext = Ext.create(o);
                //console.log(this.ext)
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
        buttonMetaData.PROPERTIESOBJECT = {
            "allowDepress": "Boolean",
            "alwaysOnTop": "Boolean/Number",
            "ariaAttributes": "Object",
            "ariaDescribedBy": "String",
            "ariaLabel": "String",
            "ariaLabelledBy": "String",
            "arrow": "Boolean",
            "arrowAlign": "'right'/'bottom'",
            "autoEvent": "String",
            "axisLock": "Boolean",
            "badgeText": "String",
            "bind": "Object/String",
            "border": "Boolean",
            "bottom": "Number/String",
            "buttonType": "String",
            "centered": "Boolean",
            "cls": "String/String[]",
            "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
            "contentEl": "Ext.dom.Element/HTMLElement/String",
            "controller": "String/Object/Ext.app.ViewController",
            "data": "Object",
            "defaultListenerScope": "Boolean",
            "destroyMenu": "Boolean",
            "disabled": "Boolean",
            "displayed": "Boolean",
            "docked": "String",
            "draggable": "Boolean/Object/Ext.drag.Source",
            "enableToggle": "Boolean",
            "enterAnimation": "String/Mixed",
            "eventHandlers": "Object",
            "exitAnimation": "String/Mixed",
            "flex": "Number/String/Object",
            "floated": "Boolean",
            "focusCls": "String",
            "fullscreen": "Boolean",
            "handler": "Function",
            "height": "Number/String",
            "hidden": "Boolean",
            "hideAnimation": "String/Mixed",
            "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
            "hideOnMaskTap": "Boolean",
            "html": "String",
            "icon": "String",
            "iconAlign": "'top'/'right'/'bottom'/'left'",
            "iconCls": "String",
            "id": "String",
            "instanceCls": "String/String[]",
            "itemId": "String",
            "keyMap": "Object",
            "keyMapEnabled": "Boolean",
            "keyMapTarget": "String",
            "left": "Number/String",
            "listeners": "Object",
            "margin": "Number/String",
            "maxHeight": "Number/String",
            "maxWidth": "Number/String",
            "menu": "Ext.menu.Menu/String/Object",
            "menuAlign": "String",
            "minHeight": "Number/String",
            "minWidth": "Number/String",
            "modal": "Boolean",
            "modelValidation": "Boolean",
            "name": "String",
            "nameable": "Boolean",
            "padding": "Number/String",
            "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
            "pressed": "Boolean",
            "pressedDelay": "Number/Boolean",
            "publishes": "String/String[]/Object",
            "record": "Ext.data.Model",
            "reference": "String",
            "relative": "Boolean",
            "renderTo": "Ext.dom.Element",
            "right": "Number/String",
            "ripple": "Boolean/Object/String",
            "scope": "Object",
            "scrollable": "Boolean/String/Object",
            "selfAlign": "String",
            "session": "Boolean/Object/Ext.data.Session",
            "shadow": "Boolean",
            "shareableName": "Boolean",
            "shim": "Boolean",
            "showAnimation": "String/Mixed",
            "stretchMenu": "Boolean",
            "style": "String/Object",
            "tabIndex": "Number",
            "text": "String",
            "textAlign": "'left'/'right'/'center'",
            "toFrontOnShow": "Boolean",
            "toggleHandler": "Function",
            "tooltip": "String/Object",
            "top": "Number/String",
            "touchAction": "Object",
            "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
            "tplWriteMode": "String",
            "translatable": "Object",
            "twoWayBindable": "String/String[]/Object",
            "ui": "String",
            "userCls": "String/String[]",
            "userSelectable": "Boolean/String/Object",
            "value": "String/Number",
            "viewModel": "String/Object/Ext.app.ViewModel",
            "weight": "Number",
            "width": "Number/String",
            "x": "Number",
            "xtype": "String",
            "y": "Number",
            "zIndex": "Number",
            "platformConfig": "Object",
            "responsiveConfig": "Object",
            "fitToParent": "Boolean",
            "config": "Object",
        };
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
        gridMetaData.PROPERTIESOBJECT = {
            "activeChildTabIndex": "Number",
            "activeItem": "Ext.Component/Object/String/Number",
            "allowFocusingDisabledChildren": "Boolean",
            "alwaysOnTop": "Boolean/Number",
            "ariaAttributes": "Object",
            "ariaDescribedBy": "String",
            "ariaLabel": "String",
            "ariaLabelledBy": "String",
            "associatedData": "Boolean/Object",
            "autoDestroy": "Boolean",
            "autoSize": "Boolean",
            "axisLock": "Boolean",
            "bind": "Object/String",
            "border": "Boolean",
            "bottom": "Number/String",
            "bufferSize": "Number",
            "cardSwitchAnimation": "String/Object/Boolean",
            "centered": "Boolean",
            "cls": "String/String[]",
            "columnLines": "Boolean",
            "columnMenu": "Object",
            "columnResize": "Boolean",
            "columns": "Ext.grid.column.Column[]",
            "columnsMenuItem": "Ext.grid.menu.Columns",
            "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
            "contentEl": "Ext.dom.Element/HTMLElement/String",
            "control": "Object",
            "controller": "String/Object/Ext.app.ViewController",
            "data": "Object",
            "defaultFocus": "String",
            "defaultListenerScope": "Boolean",
            "defaults": "Object",
            "defaultType": "Ext.enums.Widget",
            "deferEmptyText": "Boolean",
            "deselectOnContainerClick": "Boolean",
            "disabled": "Boolean",
            "disableSelection": "Boolean",
            "disclosureProperty": "String",
            "displayed": "Boolean",
            "docked": "String",
            "draggable": "Boolean/Object/Ext.drag.Source",
            "emptyItemText": "String",
            "emptyState": "Boolean",
            "emptyText": "String/Boolean",
            "emptyTextDefaults": "Object/Ext.Component",
            "emptyTextProperty": "String",
            "enableTextSelection": "Boolean",
            "enterAnimation": "String/Mixed",
            "eventHandlers": "Object",
            "exitAnimation": "String/Mixed",
            "flex": "Number/String/Object",
            "floated": "Boolean",
            "focusableContainer": "Boolean",
            "focusCls": "String",
            "fullscreen": "Boolean",
            "grouped": "Boolean",
            "groupFooter": "Object/Ext.dataview.ItemHeader",
            "groupHeader": "Object/Ext.dataview.ItemHeader",
            "height": "Number/String",
            "hidden": "Boolean",
            "hideAnimation": "String/Mixed",
            "hideHeaders": "Boolean",
            "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
            "hideOnMaskTap": "Boolean",
            "horizontalOverflow": "any",
            "html": "String/Ext.dom.Element/HTMLElement",
            "id": "String",
            "inactiveChildTabIndex": "Number",
            "indexBar": "Boolean/Object/Ext.dataview.IndexBar",
            "infinite": "Boolean",
            "inline": "Boolean/Object",
            "innerCls": "String",
            "innerCtHeight": "any",
            "innerWidth": "any",
            "instanceCls": "String/String[]",
            "itemButtonMode": "boolean",
            "itemCls": "String",
            "itemConfig": "Object/Ext.grid.Row",
            "itemContentCls": "String",
            "itemDataMap": "Object",
            "itemId": "String",
            "itemInnerCls": "String",
            "itemRipple": "Boolean/Object",
            "items": "Array/Object",
            "itemsFocusable": "any",
            "itemTpl": "String/String[]/Ext.XTemplate",
            "keyMap": "Object",
            "keyMapEnabled": "Boolean",
            "keyMapTarget": "String",
            "layout": "Object/String",
            "left": "Number/String",
            "listeners": "Object",
            "loadingHeight": "Number",
            "loadingText": "String/Boolean",
            "maintainChildNodes": "Boolean",
            "manageBorders": "Boolean",
            "margin": "Number/String",
            "markDirty": "Boolean",
            "masked": "Boolean/Object/Ext.Mask/Ext.LoadMask",
            "maxHeight": "Number/String",
            "maxItemCache": "Number",
            "maxWidth": "Number/String",
            "minHeight": "Number/String",
            "minimumBufferDistance": "Number",
            "minWidth": "Number/String",
            "modal": "Boolean",
            "modelValidation": "Boolean",
            "multiColumnSort": "Boolean",
            "name": "String",
            "nameable": "Boolean",
            "nameHolder": "Boolean",
            "onItemDisclosure": "Boolean/Function/String/Object",
            "padding": "Number/String",
            "pinFooters": "Boolean",
            "pinHeaders": "Boolean",
            "pinnedFooter": "Object",
            "pinnedFooterHeight": "any",
            "pinnedHeader": "Object",
            "pinnedHeaderHeight": "any",
            "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
            "pressedDelay": "Number",
            "preventSelectionOnDisclose": "Boolean",
            "preventSelectionOnTool": "Boolean",
            "publishes": "String/String[]/Object",
            "record": "Ext.data.Model",
            "reference": "String",
            "referenceHolder": "Boolean",
            "relative": "Boolean",
            "renderTo": "Ext.dom.Element",
            "reserveScrollbar": "Boolean",
            "resetFocusPosition": "Boolean",
            "right": "Number/String",
            "ripple": "Boolean/Object/String",
            "rowLines": "Boolean",
            "rowNumbers": "Boolean/Object",
            "scrollable": "Boolean/String/Object",
            "scrollDock": "'start'/'emd'",
            "scrollToTopOnRefresh": "Boolean",
            "selectable": "Object",
            "selection": "Ext.data.Model",
            "selfAlign": "String",
            "session": "Boolean/Object/Ext.data.Session",
            "shadow": "Boolean",
            "shareableName": "Boolean",
            "shim": "Boolean",
            "showAnimation": "String/Mixed",
            "sortable": "Boolean",
            "store": "Ext.data.Store/Object",
            "striped": "Boolean",
            "style": "String/Object",
            "tabIndex": "Number",
            "title": "String",
            "toFrontOnShow": "Boolean",
            "tooltip": "String/Object",
            "top": "Number/String",
            "topRenderedIndex": "any",
            "touchAction": "Object",
            "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
            "tplWriteMode": "String",
            "translatable": "Object",
            "triggerCtEvent": "'tap'/'singletap'",
            "triggerEvent": "'childtap'/'childsingletap'/'childdoubletap'/'childswipe'/'childtaphold'/'childlongpress'",
            "twoWayBindable": "String/String[]/Object",
            "ui": "String/String[]",
            "userCls": "String/String[]",
            "userSelectable": "Boolean/String/Object",
            "useSimpleItems": "Boolean",
            "variableHeights": "Boolean",
            "verticalOverflow": "Boolean",
            "viewModel": "String/Object/Ext.app.ViewModel",
            "visibleHeight": "Number",
            "visibleLeft": "any",
            "visibleTop": "Number",
            "visibleWidth": "any",
            "weight": "Number",
            "weighted": "Boolean",
            "width": "Number/String",
            "x": "Number",
            "xtype": "String",
            "y": "Number",
            "zIndex": "Number",
            "platformConfig": "Object",
            "responsiveConfig": "Object",
            "fitToParent": "Boolean",
            "config": "Object",
        };
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

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXh0LWFuZ3VsYXItbW9kZXJuLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL2V4dC1hbmd1bGFyLW1vZGVybi9saWIvYmFzZS50cyIsIm5nOi8vZXh0LWFuZ3VsYXItbW9kZXJuL2xpYi9leHQtYnV0dG9uLmNvbXBvbmVudC50cyIsIm5nOi8vZXh0LWFuZ3VsYXItbW9kZXJuL2xpYi9leHQtZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL2V4dC1hbmd1bGFyLW1vZGVybi9saWIvZXh0LWFuZ3VsYXItbW9kZXJuLm1vZHVsZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiEgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uIEFsbCByaWdodHMgcmVzZXJ2ZWQuXHJcbkxpY2Vuc2VkIHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7IHlvdSBtYXkgbm90IHVzZVxyXG50aGlzIGZpbGUgZXhjZXB0IGluIGNvbXBsaWFuY2Ugd2l0aCB0aGUgTGljZW5zZS4gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZVxyXG5MaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxyXG5cclxuVEhJUyBDT0RFIElTIFBST1ZJREVEIE9OIEFOICpBUyBJUyogQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIEFOWVxyXG5LSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgV0lUSE9VVCBMSU1JVEFUSU9OIEFOWSBJTVBMSUVEXHJcbldBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBUSVRMRSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UsXHJcbk1FUkNIQU5UQUJMSVRZIE9SIE5PTi1JTkZSSU5HRU1FTlQuXHJcblxyXG5TZWUgdGhlIEFwYWNoZSBWZXJzaW9uIDIuMCBMaWNlbnNlIGZvciBzcGVjaWZpYyBsYW5ndWFnZSBnb3Zlcm5pbmcgcGVybWlzc2lvbnNcclxuYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSAqL1xyXG5cclxudmFyIGV4dGVuZFN0YXRpY3MgPSBmdW5jdGlvbihkLCBiKSB7XHJcbiAgICBleHRlbmRTdGF0aWNzID0gT2JqZWN0LnNldFByb3RvdHlwZU9mIHx8XHJcbiAgICAgICAgKHsgX19wcm90b19fOiBbXSB9IGluc3RhbmNlb2YgQXJyYXkgJiYgZnVuY3Rpb24gKGQsIGIpIHsgZC5fX3Byb3RvX18gPSBiOyB9KSB8fFxyXG4gICAgICAgIGZ1bmN0aW9uIChkLCBiKSB7IGZvciAodmFyIHAgaW4gYikgaWYgKGIuaGFzT3duUHJvcGVydHkocCkpIGRbcF0gPSBiW3BdOyB9O1xyXG4gICAgcmV0dXJuIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19leHRlbmRzKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykgaWYgKGUuaW5kZXhPZihwW2ldKSA8IDApXHJcbiAgICAgICAgICAgIHRbcFtpXV0gPSBzW3BbaV1dO1xyXG4gICAgcmV0dXJuIHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2RlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XHJcbiAgICB2YXIgYyA9IGFyZ3VtZW50cy5sZW5ndGgsIHIgPSBjIDwgMyA/IHRhcmdldCA6IGRlc2MgPT09IG51bGwgPyBkZXNjID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0YXJnZXQsIGtleSkgOiBkZXNjLCBkO1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0LmRlY29yYXRlID09PSBcImZ1bmN0aW9uXCIpIHIgPSBSZWZsZWN0LmRlY29yYXRlKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKTtcclxuICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XHJcbiAgICByZXR1cm4gYyA+IDMgJiYgciAmJiBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHIpLCByO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19wYXJhbShwYXJhbUluZGV4LCBkZWNvcmF0b3IpIHtcclxuICAgIHJldHVybiBmdW5jdGlvbiAodGFyZ2V0LCBrZXkpIHsgZGVjb3JhdG9yKHRhcmdldCwga2V5LCBwYXJhbUluZGV4KTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xyXG4gICAgICAgIGZ1bmN0aW9uIGZ1bGZpbGxlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvci5uZXh0KHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cclxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUocmVzdWx0LnZhbHVlKTsgfSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxyXG4gICAgICAgIHN0ZXAoKGdlbmVyYXRvciA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSkubmV4dCgpKTtcclxuICAgIH0pO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19nZW5lcmF0b3IodGhpc0FyZywgYm9keSkge1xyXG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcclxuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChfKSB0cnkge1xyXG4gICAgICAgICAgICBpZiAoZiA9IDEsIHkgJiYgKHQgPSBvcFswXSAmIDIgPyB5W1wicmV0dXJuXCJdIDogb3BbMF0gPyB5W1widGhyb3dcIl0gfHwgKCh0ID0geVtcInJldHVyblwiXSkgJiYgdC5jYWxsKHkpLCAwKSA6IHkubmV4dCkgJiYgISh0ID0gdC5jYWxsKHksIG9wWzFdKSkuZG9uZSkgcmV0dXJuIHQ7XHJcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcclxuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xyXG4gICAgICAgICAgICAgICAgY2FzZSAwOiBjYXNlIDE6IHQgPSBvcDsgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xyXG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgY2FzZSA3OiBvcCA9IF8ub3BzLnBvcCgpOyBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAob3BbMF0gPT09IDMgJiYgKCF0IHx8IChvcFsxXSA+IHRbMF0gJiYgb3BbMV0gPCB0WzNdKSkpIHsgXy5sYWJlbCA9IG9wWzFdOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cclxuICAgICAgICAgICAgICAgICAgICBpZiAodFsyXSkgXy5vcHMucG9wKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBvcCA9IGJvZHkuY2FsbCh0aGlzQXJnLCBfKTtcclxuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XHJcbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XHJcbiAgICB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4cG9ydFN0YXIobSwgZXhwb3J0cykge1xyXG4gICAgZm9yICh2YXIgcCBpbiBtKSBpZiAoIWV4cG9ydHMuaGFzT3duUHJvcGVydHkocCkpIGV4cG9ydHNbcF0gPSBtW3BdO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX192YWx1ZXMobykge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdLCBpID0gMDtcclxuICAgIGlmIChtKSByZXR1cm4gbS5jYWxsKG8pO1xyXG4gICAgcmV0dXJuIHtcclxuICAgICAgICBuZXh0OiBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgIGlmIChvICYmIGkgPj0gby5sZW5ndGgpIG8gPSB2b2lkIDA7XHJcbiAgICAgICAgICAgIHJldHVybiB7IHZhbHVlOiBvICYmIG9baSsrXSwgZG9uZTogIW8gfTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZWFkKG8sIG4pIHtcclxuICAgIHZhciBtID0gdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIG9bU3ltYm9sLml0ZXJhdG9yXTtcclxuICAgIGlmICghbSkgcmV0dXJuIG87XHJcbiAgICB2YXIgaSA9IG0uY2FsbChvKSwgciwgYXIgPSBbXSwgZTtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgd2hpbGUgKChuID09PSB2b2lkIDAgfHwgbi0tID4gMCkgJiYgIShyID0gaS5uZXh0KCkpLmRvbmUpIGFyLnB1c2goci52YWx1ZSk7XHJcbiAgICB9XHJcbiAgICBjYXRjaCAoZXJyb3IpIHsgZSA9IHsgZXJyb3I6IGVycm9yIH07IH1cclxuICAgIGZpbmFsbHkge1xyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChyICYmICFyLmRvbmUgJiYgKG0gPSBpW1wicmV0dXJuXCJdKSkgbS5jYWxsKGkpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBmaW5hbGx5IHsgaWYgKGUpIHRocm93IGUuZXJyb3I7IH1cclxuICAgIH1cclxuICAgIHJldHVybiBhcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkKCkge1xyXG4gICAgZm9yICh2YXIgYXIgPSBbXSwgaSA9IDA7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgYXIgPSBhci5jb25jYXQoX19yZWFkKGFyZ3VtZW50c1tpXSkpO1xyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdCh2KSB7XHJcbiAgICByZXR1cm4gdGhpcyBpbnN0YW5jZW9mIF9fYXdhaXQgPyAodGhpcy52ID0gdiwgdGhpcykgOiBuZXcgX19hd2FpdCh2KTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNHZW5lcmF0b3IodGhpc0FyZywgX2FyZ3VtZW50cywgZ2VuZXJhdG9yKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIGcgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSksIGksIHEgPSBbXTtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpZiAoZ1tuXSkgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgfVxyXG4gICAgZnVuY3Rpb24gcmVzdW1lKG4sIHYpIHsgdHJ5IHsgc3RlcChnW25dKHYpKTsgfSBjYXRjaCAoZSkgeyBzZXR0bGUocVswXVszXSwgZSk7IH0gfVxyXG4gICAgZnVuY3Rpb24gc3RlcChyKSB7IHIudmFsdWUgaW5zdGFuY2VvZiBfX2F3YWl0ID8gUHJvbWlzZS5yZXNvbHZlKHIudmFsdWUudikudGhlbihmdWxmaWxsLCByZWplY3QpIDogc2V0dGxlKHFbMF1bMl0sIHIpOyB9XHJcbiAgICBmdW5jdGlvbiBmdWxmaWxsKHZhbHVlKSB7IHJlc3VtZShcIm5leHRcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiByZWplY3QodmFsdWUpIHsgcmVzdW1lKFwidGhyb3dcIiwgdmFsdWUpOyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUoZiwgdikgeyBpZiAoZih2KSwgcS5zaGlmdCgpLCBxLmxlbmd0aCkgcmVzdW1lKHFbMF1bMF0sIHFbMF1bMV0pOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2FzeW5jRGVsZWdhdG9yKG8pIHtcclxuICAgIHZhciBpLCBwO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiLCBmdW5jdGlvbiAoZSkgeyB0aHJvdyBlOyB9KSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobiwgZikgeyBpW25dID0gb1tuXSA/IGZ1bmN0aW9uICh2KSB7IHJldHVybiAocCA9ICFwKSA/IHsgdmFsdWU6IF9fYXdhaXQob1tuXSh2KSksIGRvbmU6IG4gPT09IFwicmV0dXJuXCIgfSA6IGYgPyBmKHYpIDogdjsgfSA6IGY7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNWYWx1ZXMobykge1xyXG4gICAgaWYgKCFTeW1ib2wuYXN5bmNJdGVyYXRvcikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN5bWJvbC5hc3luY0l0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgIHZhciBtID0gb1tTeW1ib2wuYXN5bmNJdGVyYXRvcl0sIGk7XHJcbiAgICByZXR1cm4gbSA/IG0uY2FsbChvKSA6IChvID0gdHlwZW9mIF9fdmFsdWVzID09PSBcImZ1bmN0aW9uXCIgPyBfX3ZhbHVlcyhvKSA6IG9bU3ltYm9sLml0ZXJhdG9yXSgpLCBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaSk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgaVtuXSA9IG9bbl0gJiYgZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHsgdiA9IG9bbl0odiksIHNldHRsZShyZXNvbHZlLCByZWplY3QsIHYuZG9uZSwgdi52YWx1ZSk7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzZXR0bGUocmVzb2x2ZSwgcmVqZWN0LCBkLCB2KSB7IFByb21pc2UucmVzb2x2ZSh2KS50aGVuKGZ1bmN0aW9uKHYpIHsgcmVzb2x2ZSh7IHZhbHVlOiB2LCBkb25lOiBkIH0pOyB9LCByZWplY3QpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ha2VUZW1wbGF0ZU9iamVjdChjb29rZWQsIHJhdykge1xyXG4gICAgaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoY29va2VkLCBcInJhd1wiLCB7IHZhbHVlOiByYXcgfSk7IH0gZWxzZSB7IGNvb2tlZC5yYXcgPSByYXc7IH1cclxuICAgIHJldHVybiBjb29rZWQ7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19pbXBvcnRTdGFyKG1vZCkge1xyXG4gICAgaWYgKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgcmV0dXJuIG1vZDtcclxuICAgIHZhciByZXN1bHQgPSB7fTtcclxuICAgIGlmIChtb2QgIT0gbnVsbCkgZm9yICh2YXIgayBpbiBtb2QpIGlmIChPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbChtb2QsIGspKSByZXN1bHRba10gPSBtb2Rba107XHJcbiAgICByZXN1bHQuZGVmYXVsdCA9IG1vZDtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcbiIsImRlY2xhcmUgdmFyIEV4dDogYW55O1xuaW1wb3J0IHtcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIGJhc2Uge1xuICBwdWJsaWMgZXh0OiBhbnlcbiAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yJyk7Y29uc29sZS5sb2coZWwubmF0aXZlRWxlbWVudClcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudFxuICAgIG1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgIH0pXG4gIH1cblxuICAgIE9uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYE9uQ2hhbmdlc2ApXG4gICAgfVxuXG4gIHZlcmI6YW55ID0gJ2luaXRpYWxpemVkJ1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgIGxldCBjaGFuZ2VzTXNnczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWVcbiAgICAgIGlmICh0aGlzLmV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKVxuICAgICAgICB0aGlzLmV4dFsnc2V0JytjYXBQcm9wTmFtZV0odmFsKVxuICAgICAgfVxuICAgICAgY2hhbmdlc01zZ3MucHVzaChgJHtwcm9wTmFtZX0gJHt0aGlzLnZlcmJ9IHRvIFwiJHt2YWx9XCJgKVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICAgIHRoaXMudmVyYiA9ICdjaGFuZ2VkJyAvLyBuZXh0IHRpbWUgaXQgd2lsbCBiZSBhIGNoYW5nZVxuICB9XG5cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0RvQ2hlY2soKSB7Y29uc29sZS5sb2coYERvQ2hlY2tgKX1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlckNvbnRlbnRDaGVja2VkYCkgfVxuICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0luaXRgKSB9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlclZpZXdDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3Q2hlY2tlZGApIH1cbiAgLy9uZ09uRGVzdHJveSgpIHsgY29uc29sZS5sb2coYE9uRGVzdHJveWApIH1cblxuICBiYXNlT25Jbml0KG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uSW5pdDogJHttZXRhRGF0YS5YVFlQRX1gKVxuICAgIGxldCBtZTogYW55ID0gdGhpc1xuICAgIGxldCBvOiBhbnkgPSB7fVxuICAgIG8ueHR5cGUgPSBtZXRhRGF0YS5YVFlQRVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWUubWV0YURhdGEuUFJPUEVSVElFUy5sZW5ndGg7IGkrKykgeyBcbiAgICAgIHZhciBwcm9wID0gbWUubWV0YURhdGEuUFJPUEVSVElFU1tpXTtcbiAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICBpZiAoKG8ueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IG8ueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnZml0VG9QYXJlbnQnKSB7IFxuICAgICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCd0cnVlJyA9PT0gbWUuZml0VG9QYXJlbnQpIHtcbiAgICAgIG8udG9wPTAsIFxuICAgICAgby5sZWZ0PTAsIFxuICAgICAgby53aWR0aD0nMTAwJScsIFxuICAgICAgby5oZWlnaHQ9JzEwMCUnXG4gICAgfVxuICAgIGlmIChtZS5jb25maWcgIT09IHt9ICkge1xuICAgICAgRXh0LmFwcGx5KG8sIG1lLmNvbmZpZyk7XG4gICAgfVxuICAgIG8ubGlzdGVuZXJzID0ge31cbiAgICB2YXIgRVZFTlRTID0gbWV0YURhdGEuRVZFTlRTXG4gICAgRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50OiBhbnksIGluZGV4OiBhbnksIGFycmF5OiBhbnkpIHtcbiAgICAgIGxldCBldmVudG5hbWU6IGFueSA9IGV2ZW50Lm5hbWVcbiAgICAgIGxldCBldmVudHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50LnBhcmFtZXRlcnNcbiAgICAgIG8ubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50cGFyYW1ldGVyc1xuICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJylcbiAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgIGxldCBlbWl0cGFybXM6IGFueSA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrICkge1xuICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICB9XG4gICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAodGhpcy5fbmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIG8ucmVuZGVyVG8gPSB0aGlzLl9uYXRpdmVFbGVtZW50XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ2JlZm9yZSBjcmVhdGUgZm9yICcgKyBvLnh0eXBlKVxuICAgIC8vRXh0Lm9uUmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gIG1lLmV4dCA9IEV4dC5jcmVhdGUobylcbiAgICAvLyAgY29uc29sZS5sb2cobWUuZXh0KVxuICAgIC8vfSlcbiAgICB0aGlzLmV4dCA9IEV4dC5jcmVhdGUobylcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXh0KVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihiYXNlLCB7ZGVzY2VuZGFudHM6IGZhbHNlfSkgZXh0Q2hpbGRyZW46IFF1ZXJ5TGlzdDxhbnk+XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2V4dCcpIGFsbENoaWxkcmVuOiBRdWVyeUxpc3Q8YW55PlxuICBiYXNlQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuZXh0Q2hpbGRyZW4pXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmFsbENoaWxkcmVuKVxuICAgIC8vY29uc29sZS5sb2coYG5nQWZ0ZXJDb250ZW50SW5pdDogJHt0aGlzLmV4dENoaWxkcmVuLmZpcnN0LmV4dC54dHlwZX0gJHt0aGlzLmV4dENoaWxkcmVuLmxlbmd0aH0gJHt0aGlzLmFsbENoaWxkcmVuLmxlbmd0aH1gKVxuICAgIC8vY29uc29sZS5sb2codGhpcy5hbGxDaGlsZHJlbilcbiAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRDaGlsZHJlbi5maXJzdC5leHRcbiAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzLmV4dENoaWxkcmVuLmZpcnN0LmV4dC54dHlwZVxuICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2NvbnRhaW5lcicgJiZcbiAgICAgICAgdGhpcy5hbGxDaGlsZHJlbi5maXJzdCAhPSB1bmRlZmluZWQgJiYgXG4gICAgICAgIHRoaXMuYWxsQ2hpbGRyZW4ubGVuZ3RoID09PSAxKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QubmF0aXZlRWxlbWVudClcbiAgICAgIHBhcmVudENtcC5zZXRIdG1sKHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QubmF0aXZlRWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgZXh0Q2hpbGRyZW5BcnJheTogYW55ID0gdGhpcy5leHRDaGlsZHJlbi50b0FycmF5KClcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBleHRDaGlsZHJlbkFycmF5Lmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykgeyAvL3N0YXJ0IGFmdGVyIGZpcnN0IG9uZVxuICAgICAgdmFyIGNoaWxkQ21wID0gZXh0Q2hpbGRyZW5BcnJheVtpXS5leHRcbiAgICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGVcbiAgICAgIC8vY29uc29sZS5sb2coYHBhcmVudDogJHtwYXJlbnR4dHlwZX0sIGNoaWxkOiAke2NoaWxkeHR5cGV9YClcbiAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICB2YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuICB9XG5cbn0iLCJpbXBvcnQge1xuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYnV0dG9uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnYnV0dG9uJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhbGxvd0RlcHJlc3NcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcnJvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImFycm93QWxpZ25cIjogXCIncmlnaHQnLydib3R0b20nXCIsXG4gICAgXCJhdXRvRXZlbnRcIjogXCJTdHJpbmdcIixcbiAgICBcImF4aXNMb2NrXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFkZ2VUZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm90dG9tXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiYnV0dG9uVHlwZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY2VudGVyZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbnN0cmFpbkFsaWduXCI6IFwiU3RyaW5nL0V4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIkV4dC5kb20uRWxlbWVudC9IVE1MRWxlbWVudC9TdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVzdHJveU1lbnVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc3BsYXllZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRvY2tlZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRyYWcuU291cmNlXCIsXG4gICAgXCJlbmFibGVUb2dnbGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJlbnRlckFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZXhpdEFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlci9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJmbG9hdGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZ1bGxzY3JlZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoYW5kbGVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGlkZU9uTWFza1RhcFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmdcIixcbiAgICBcImljb25cIjogXCJTdHJpbmdcIixcbiAgICBcImljb25BbGlnblwiOiBcIid0b3AnLydyaWdodCcvJ2JvdHRvbScvJ2xlZnQnXCIsXG4gICAgXCJpY29uQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsZWZ0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1lbnVcIjogXCJFeHQubWVudS5NZW51L1N0cmluZy9PYmplY3RcIixcbiAgICBcIm1lbnVBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwcmVzc2VkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicHJlc3NlZERlbGF5XCI6IFwiTnVtYmVyL0Jvb2xlYW5cIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlY29yZFwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbGF0aXZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzY29wZVwiOiBcIk9iamVjdFwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2VsZkFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93QW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJzdHJldGNoTWVudVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcInRleHRBbGlnblwiOiBcIidsZWZ0Jy8ncmlnaHQnLydjZW50ZXInXCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG9nZ2xlSGFuZGxlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZhbHVlXCI6IFwiU3RyaW5nL051bWJlclwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInhcIjogXCJOdW1iZXJcIixcbiAgICBcInh0eXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ6SW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWxsb3dEZXByZXNzJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXJyb3cnLFxuICAgICdhcnJvd0FsaWduJyxcbiAgICAnYXV0b0V2ZW50JyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiYWRnZVRleHQnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnYnV0dG9uVHlwZScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xzJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVzdHJveU1lbnUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VuYWJsZVRvZ2dsZScsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2hhbmRsZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaHRtbCcsXG4gICAgJ2ljb24nLFxuICAgICdpY29uQWxpZ24nLFxuICAgICdpY29uQ2xzJyxcbiAgICAnaWQnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtZW51JyxcbiAgICAnbWVudUFsaWduJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHJlc3NlZCcsXG4gICAgJ3ByZXNzZWREZWxheScsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njb3BlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzdHJldGNoTWVudScsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0ZXh0JyxcbiAgICAndGV4dEFsaWduJyxcbiAgICAndG9Gcm9udE9uU2hvdycsXG4gICAgJ3RvZ2dsZUhhbmRsZXInLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG91Y2hBY3Rpb24nLFxuICAgICd0cGwnLFxuICAgICd0cGxXcml0ZU1vZGUnLFxuICAgICd0cmFuc2xhdGFibGUnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndmFsdWUnLFxuICAgICd2aWV3TW9kZWwnLFxuICAgICd3ZWlnaHQnLFxuICAgICd3aWR0aCcsXG4gICAgJ3gnLFxuICAgICd4dHlwZScsXG4gICAgJ3knLFxuICAgICd6SW5kZXgnLFxuICAgICdwbGF0Zm9ybUNvbmZpZycsXG4gICAgJ3Jlc3BvbnNpdmVDb25maWcnLFxuICAgICdmaXRUb1BhcmVudCcsXG4gICAgJ2NvbmZpZydcbl07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYm90dG9tY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWRvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmVsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidiZWZvcmVwcmVzc2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2J1dHRvbid9LFxuXHRcdHtuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZGVzdHJveScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2Rpc2FibGVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZXJhc2VkJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonZmxvYXRpbmdjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG5cdFx0e25hbWU6J2ZvY3VzJyxwYXJhbWV0ZXJzOididXR0b24sZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNlbnRlcicscGFyYW1ldGVyczonYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2J1dHRvbixldmVudCd9LFxuXHRcdHtuYW1lOidmdWxsc2NyZWVuJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZGVuY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2luaXRpYWxpemUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLHRvSW5kZXgsZnJvbUluZGV4J30sXG5cdFx0e25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcblx0XHR7bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZToncHJlc3NlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlbGVhc2UnLHBhcmFtZXRlcnM6J2J1dHRvbixlJ30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcblx0XHR7bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J3RhcCcscGFyYW1ldGVyczonYnV0dG9uLGUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonYnV0dG9uJ30sXG5cdFx0e25hbWU6J3RvcGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3VwZGF0ZWRhdGEnLHBhcmFtZXRlcnM6J3NlbmRlcixuZXdEYXRhJ30sXG5cdFx0e25hbWU6J3dpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZToncmVhZHknLHBhcmFtZXRlcnM6Jyd9XG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UTkFNRVM6IHN0cmluZ1tdID0gW1xuXHRcdCdhZGRlZCcsXG5cdFx0J2JlZm9yZWJvdHRvbWNoYW5nZScsXG5cdFx0J2JlZm9yZWNlbnRlcmVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkb2NrZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRkZW5jaGFuZ2UnLFxuXHRcdCdiZWZvcmVoaWRlJyxcblx0XHQnYmVmb3JlbGVmdGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heEhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J2JlZm9yZXByZXNzZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVyaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzaG93Jyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXRvcGNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JvdHRvbWNoYW5nZScsXG5cdFx0J2NlbnRlcmVkY2hhbmdlJyxcblx0XHQnZGVzdHJveScsXG5cdFx0J2Rpc2FibGVkY2hhbmdlJyxcblx0XHQnZG9ja2VkY2hhbmdlJyxcblx0XHQnZXJhc2VkJyxcblx0XHQnZmxvYXRpbmdjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnZnVsbHNjcmVlbicsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdpbml0aWFsaXplJyxcblx0XHQnbGVmdGNoYW5nZScsXG5cdFx0J21heEhlaWdodGNoYW5nZScsXG5cdFx0J21heFdpZHRoY2hhbmdlJyxcblx0XHQnbWluSGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWluV2lkdGhjaGFuZ2UnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J29yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQncGFpbnRlZCcsXG5cdFx0J3Bvc2l0aW9uZWRjaGFuZ2UnLFxuXHRcdCdwcmVzc2VkY2hhbmdlJyxcblx0XHQncmVsZWFzZScsXG5cdFx0J3JlbW92ZWQnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndGFwJyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuXTtcbn1cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2V4dC1idXR0b24nLCBcbiAgaW5wdXRzOiBidXR0b25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBidXR0b25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QnV0dG9uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsYnV0dG9uTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGJ1dHRvbk1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KCl9XG59IiwiaW1wb3J0IHtcbiAgT25Jbml0LFxuICBBZnRlckNvbnRlbnRJbml0LFxuICBPbkNoYW5nZXMsXG4gIENvbXBvbmVudCxcbiAgRWxlbWVudFJlZixcbiAgZm9yd2FyZFJlZlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGJhc2UgfSBmcm9tICcuL2Jhc2UnO1xuZXhwb3J0IGNsYXNzIGdyaWRNZXRhRGF0YSB7XG4gIHB1YmxpYyBzdGF0aWMgWFRZUEU6IHN0cmluZyA9ICdncmlkJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhY3RpdmVDaGlsZFRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJhY3RpdmVJdGVtXCI6IFwiRXh0LkNvbXBvbmVudC9PYmplY3QvU3RyaW5nL051bWJlclwiLFxuICAgIFwiYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhc3NvY2lhdGVkRGF0YVwiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJhdXRvRGVzdHJveVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImF1dG9TaXplXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXhpc0xvY2tcIjogXCJCb29sZWFuXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm90dG9tXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiYnVmZmVyU2l6ZVwiOiBcIk51bWJlclwiLFxuICAgIFwiY2FyZFN3aXRjaEFuaW1hdGlvblwiOiBcIlN0cmluZy9PYmplY3QvQm9vbGVhblwiLFxuICAgIFwiY2VudGVyZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbHVtbkxpbmVzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29sdW1uTWVudVwiOiBcIk9iamVjdFwiLFxuICAgIFwiY29sdW1uUmVzaXplXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29sdW1uc1wiOiBcIkV4dC5ncmlkLmNvbHVtbi5Db2x1bW5bXVwiLFxuICAgIFwiY29sdW1uc01lbnVJdGVtXCI6IFwiRXh0LmdyaWQubWVudS5Db2x1bW5zXCIsXG4gICAgXCJjb25zdHJhaW5BbGlnblwiOiBcIlN0cmluZy9FeHQudXRpbC5SZWdpb24vRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJjb250ZW50RWxcIjogXCJFeHQuZG9tLkVsZW1lbnQvSFRNTEVsZW1lbnQvU3RyaW5nXCIsXG4gICAgXCJjb250cm9sXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJjb250cm9sbGVyXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdDb250cm9sbGVyXCIsXG4gICAgXCJkYXRhXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0Rm9jdXNcIjogXCJTdHJpbmdcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVmYXVsdHNcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRUeXBlXCI6IFwiRXh0LmVudW1zLldpZGdldFwiLFxuICAgIFwiZGVmZXJFbXB0eVRleHRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZXNlbGVjdE9uQ29udGFpbmVyQ2xpY2tcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVTZWxlY3Rpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNjbG9zdXJlUHJvcGVydHlcIjogXCJTdHJpbmdcIixcbiAgICBcImRpc3BsYXllZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRvY2tlZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRyYWcuU291cmNlXCIsXG4gICAgXCJlbXB0eUl0ZW1UZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJlbXB0eVN0YXRlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZW1wdHlUZXh0XCI6IFwiU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcImVtcHR5VGV4dERlZmF1bHRzXCI6IFwiT2JqZWN0L0V4dC5Db21wb25lbnRcIixcbiAgICBcImVtcHR5VGV4dFByb3BlcnR5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJlbmFibGVUZXh0U2VsZWN0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZW50ZXJBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImV4aXRBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXIvU3RyaW5nL09iamVjdFwiLFxuICAgIFwiZmxvYXRlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzYWJsZUNvbnRhaW5lclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmdWxsc2NyZWVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZ3JvdXBlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImdyb3VwRm9vdGVyXCI6IFwiT2JqZWN0L0V4dC5kYXRhdmlldy5JdGVtSGVhZGVyXCIsXG4gICAgXCJncm91cEhlYWRlclwiOiBcIk9iamVjdC9FeHQuZGF0YXZpZXcuSXRlbUhlYWRlclwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZUFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiaGlkZUhlYWRlcnNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlTW9kZVwiOiBcIidjbGlwJy8nZGlzcGxheScvJ29mZnNldHMnLydvcGFjaXR5Jy8ndmlzaWJpbGl0eSdcIixcbiAgICBcImhpZGVPbk1hc2tUYXBcIjogXCJCb29sZWFuXCIsXG4gICAgXCJob3Jpem9udGFsT3ZlcmZsb3dcIjogXCJhbnlcIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvRXh0LmRvbS5FbGVtZW50L0hUTUxFbGVtZW50XCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5hY3RpdmVDaGlsZFRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJpbmRleEJhclwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhdmlldy5JbmRleEJhclwiLFxuICAgIFwiaW5maW5pdGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJpbmxpbmVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiaW5uZXJDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImlubmVyQ3RIZWlnaHRcIjogXCJhbnlcIixcbiAgICBcImlubmVyV2lkdGhcIjogXCJhbnlcIixcbiAgICBcImluc3RhbmNlQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJpdGVtQnV0dG9uTW9kZVwiOiBcImJvb2xlYW5cIixcbiAgICBcIml0ZW1DbHNcIjogXCJTdHJpbmdcIixcbiAgICBcIml0ZW1Db25maWdcIjogXCJPYmplY3QvRXh0LmdyaWQuUm93XCIsXG4gICAgXCJpdGVtQ29udGVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbURhdGFNYXBcIjogXCJPYmplY3RcIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbUlubmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtUmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcIml0ZW1zXCI6IFwiQXJyYXkvT2JqZWN0XCIsXG4gICAgXCJpdGVtc0ZvY3VzYWJsZVwiOiBcImFueVwiLFxuICAgIFwiaXRlbVRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuWFRlbXBsYXRlXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxheW91dFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImxlZnRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcImxvYWRpbmdIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcImxvYWRpbmdUZXh0XCI6IFwiU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcIm1haW50YWluQ2hpbGROb2Rlc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1hbmFnZUJvcmRlcnNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXJrRGlydHlcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtYXNrZWRcIjogXCJCb29sZWFuL09iamVjdC9FeHQuTWFzay9FeHQuTG9hZE1hc2tcIixcbiAgICBcIm1heEhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1heEl0ZW1DYWNoZVwiOiBcIk51bWJlclwiLFxuICAgIFwibWF4V2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtaW5IZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtaW5pbXVtQnVmZmVyRGlzdGFuY2VcIjogXCJOdW1iZXJcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJtdWx0aUNvbHVtblNvcnRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVIb2xkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJvbkl0ZW1EaXNjbG9zdXJlXCI6IFwiQm9vbGVhbi9GdW5jdGlvbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGluRm9vdGVyc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInBpbkhlYWRlcnNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwaW5uZWRGb290ZXJcIjogXCJPYmplY3RcIixcbiAgICBcInBpbm5lZEZvb3RlckhlaWdodFwiOiBcImFueVwiLFxuICAgIFwicGlubmVkSGVhZGVyXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJwaW5uZWRIZWFkZXJIZWlnaHRcIjogXCJhbnlcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwcmVzc2VkRGVsYXlcIjogXCJOdW1iZXJcIixcbiAgICBcInByZXZlbnRTZWxlY3Rpb25PbkRpc2Nsb3NlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicHJldmVudFNlbGVjdGlvbk9uVG9vbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlY29yZFwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlZmVyZW5jZUhvbGRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbGF0aXZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJlc2VydmVTY3JvbGxiYXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZXNldEZvY3VzUG9zaXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJyaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInJpcHBsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwicm93TGluZXNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyb3dOdW1iZXJzXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcInNjcm9sbGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInNjcm9sbERvY2tcIjogXCInc3RhcnQnLydlbWQnXCIsXG4gICAgXCJzY3JvbGxUb1RvcE9uUmVmcmVzaFwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNlbGVjdGFibGVcIjogXCJPYmplY3RcIixcbiAgICBcInNlbGVjdGlvblwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcInNvcnRhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic3RvcmVcIjogXCJFeHQuZGF0YS5TdG9yZS9PYmplY3RcIixcbiAgICBcInN0cmlwZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzdHlsZVwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ0aXRsZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidG9Gcm9udE9uU2hvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInRvb2x0aXBcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0b3BcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJ0b3BSZW5kZXJlZEluZGV4XCI6IFwiYW55XCIsXG4gICAgXCJ0b3VjaEFjdGlvblwiOiBcIk9iamVjdFwiLFxuICAgIFwidHBsXCI6IFwiU3RyaW5nL1N0cmluZ1tdL0V4dC5UZW1wbGF0ZS9FeHQuWFRlbXBsYXRlW11cIixcbiAgICBcInRwbFdyaXRlTW9kZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidHJhbnNsYXRhYmxlXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cmlnZ2VyQ3RFdmVudFwiOiBcIid0YXAnLydzaW5nbGV0YXAnXCIsXG4gICAgXCJ0cmlnZ2VyRXZlbnRcIjogXCInY2hpbGR0YXAnLydjaGlsZHNpbmdsZXRhcCcvJ2NoaWxkZG91YmxldGFwJy8nY2hpbGRzd2lwZScvJ2NoaWxkdGFwaG9sZCcvJ2NoaWxkbG9uZ3ByZXNzJ1wiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInVzZVNpbXBsZUl0ZW1zXCI6IFwiQm9vbGVhblwiLFxuICAgIFwidmFyaWFibGVIZWlnaHRzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwidmVydGljYWxPdmVyZmxvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcInZpc2libGVIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcInZpc2libGVMZWZ0XCI6IFwiYW55XCIsXG4gICAgXCJ2aXNpYmxlVG9wXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ2aXNpYmxlV2lkdGhcIjogXCJhbnlcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2VpZ2h0ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInhcIjogXCJOdW1iZXJcIixcbiAgICBcInh0eXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ6SW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2FjdGl2ZUl0ZW0nLFxuICAgICdhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlbicsXG4gICAgJ2Fsd2F5c09uVG9wJyxcbiAgICAnYXJpYUF0dHJpYnV0ZXMnLFxuICAgICdhcmlhRGVzY3JpYmVkQnknLFxuICAgICdhcmlhTGFiZWwnLFxuICAgICdhcmlhTGFiZWxsZWRCeScsXG4gICAgJ2Fzc29jaWF0ZWREYXRhJyxcbiAgICAnYXV0b0Rlc3Ryb3knLFxuICAgICdhdXRvU2l6ZScsXG4gICAgJ2F4aXNMb2NrJyxcbiAgICAnYmluZCcsXG4gICAgJ2JvcmRlcicsXG4gICAgJ2JvdHRvbScsXG4gICAgJ2J1ZmZlclNpemUnLFxuICAgICdjYXJkU3dpdGNoQW5pbWF0aW9uJyxcbiAgICAnY2VudGVyZWQnLFxuICAgICdjbHMnLFxuICAgICdjb2x1bW5MaW5lcycsXG4gICAgJ2NvbHVtbk1lbnUnLFxuICAgICdjb2x1bW5SZXNpemUnLFxuICAgICdjb2x1bW5zJyxcbiAgICAnY29sdW1uc01lbnVJdGVtJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0Rm9jdXMnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRzJyxcbiAgICAnZGVmYXVsdFR5cGUnLFxuICAgICdkZWZlckVtcHR5VGV4dCcsXG4gICAgJ2Rlc2VsZWN0T25Db250YWluZXJDbGljaycsXG4gICAgJ2Rpc2FibGVkJyxcbiAgICAnZGlzYWJsZVNlbGVjdGlvbicsXG4gICAgJ2Rpc2Nsb3N1cmVQcm9wZXJ0eScsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VtcHR5SXRlbVRleHQnLFxuICAgICdlbXB0eVN0YXRlJyxcbiAgICAnZW1wdHlUZXh0JyxcbiAgICAnZW1wdHlUZXh0RGVmYXVsdHMnLFxuICAgICdlbXB0eVRleHRQcm9wZXJ0eScsXG4gICAgJ2VuYWJsZVRleHRTZWxlY3Rpb24nLFxuICAgICdlbnRlckFuaW1hdGlvbicsXG4gICAgJ2V2ZW50SGFuZGxlcnMnLFxuICAgICdleGl0QW5pbWF0aW9uJyxcbiAgICAnZmxleCcsXG4gICAgJ2Zsb2F0ZWQnLFxuICAgICdmb2N1c2FibGVDb250YWluZXInLFxuICAgICdmb2N1c0NscycsXG4gICAgJ2Z1bGxzY3JlZW4nLFxuICAgICdncm91cGVkJyxcbiAgICAnZ3JvdXBGb290ZXInLFxuICAgICdncm91cEhlYWRlcicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlSGVhZGVycycsXG4gICAgJ2hpZGVNb2RlJyxcbiAgICAnaGlkZU9uTWFza1RhcCcsXG4gICAgJ2hvcml6b250YWxPdmVyZmxvdycsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2luZGV4QmFyJyxcbiAgICAnaW5maW5pdGUnLFxuICAgICdpbmxpbmUnLFxuICAgICdpbm5lckNscycsXG4gICAgJ2lubmVyQ3RIZWlnaHQnLFxuICAgICdpbm5lcldpZHRoJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtQnV0dG9uTW9kZScsXG4gICAgJ2l0ZW1DbHMnLFxuICAgICdpdGVtQ29uZmlnJyxcbiAgICAnaXRlbUNvbnRlbnRDbHMnLFxuICAgICdpdGVtRGF0YU1hcCcsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1Jbm5lckNscycsXG4gICAgJ2l0ZW1SaXBwbGUnLFxuICAgICdpdGVtcycsXG4gICAgJ2l0ZW1zRm9jdXNhYmxlJyxcbiAgICAnaXRlbVRwbCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbG9hZGluZ0hlaWdodCcsXG4gICAgJ2xvYWRpbmdUZXh0JyxcbiAgICAnbWFpbnRhaW5DaGlsZE5vZGVzJyxcbiAgICAnbWFuYWdlQm9yZGVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hcmtEaXJ0eScsXG4gICAgJ21hc2tlZCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heEl0ZW1DYWNoZScsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluaW11bUJ1ZmZlckRpc3RhbmNlJyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ211bHRpQ29sdW1uU29ydCcsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdvbkl0ZW1EaXNjbG9zdXJlJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BpbkZvb3RlcnMnLFxuICAgICdwaW5IZWFkZXJzJyxcbiAgICAncGlubmVkRm9vdGVyJyxcbiAgICAncGlubmVkRm9vdGVySGVpZ2h0JyxcbiAgICAncGlubmVkSGVhZGVyJyxcbiAgICAncGlubmVkSGVhZGVySGVpZ2h0JyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3ByZXNzZWREZWxheScsXG4gICAgJ3ByZXZlbnRTZWxlY3Rpb25PbkRpc2Nsb3NlJyxcbiAgICAncHJldmVudFNlbGVjdGlvbk9uVG9vbCcsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZmVyZW5jZUhvbGRlcicsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNlcnZlU2Nyb2xsYmFyJyxcbiAgICAncmVzZXRGb2N1c1Bvc2l0aW9uJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdyb3dMaW5lcycsXG4gICAgJ3Jvd051bWJlcnMnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Nyb2xsRG9jaycsXG4gICAgJ3Njcm9sbFRvVG9wT25SZWZyZXNoJyxcbiAgICAnc2VsZWN0YWJsZScsXG4gICAgJ3NlbGVjdGlvbicsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzb3J0YWJsZScsXG4gICAgJ3N0b3JlJyxcbiAgICAnc3RyaXBlZCcsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0aXRsZScsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG9wUmVuZGVyZWRJbmRleCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHJpZ2dlckN0RXZlbnQnLFxuICAgICd0cmlnZ2VyRXZlbnQnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndXNlU2ltcGxlSXRlbXMnLFxuICAgICd2YXJpYWJsZUhlaWdodHMnLFxuICAgICd2ZXJ0aWNhbE92ZXJmbG93JyxcbiAgICAndmlld01vZGVsJyxcbiAgICAndmlzaWJsZUhlaWdodCcsXG4gICAgJ3Zpc2libGVMZWZ0JyxcbiAgICAndmlzaWJsZVRvcCcsXG4gICAgJ3Zpc2libGVXaWR0aCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dlaWdodGVkJyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOiduZXdBY3RpdmVJdGVtLGdyaWQsb2xkQWN0aXZlSXRlbSd9LFxuXHRcdHtuYW1lOidhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonYWRkJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2VsZWN0aW9uZXh0ZW5kJyxwYXJhbWV0ZXJzOidncmlkLEFuLGV4dGVuc2lvbid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonZ3JpZCxldmVudCd9LFxuXHRcdHtuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidjZWxsc2VsZWN0aW9uJyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGlvbid9LFxuXHRcdHtuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NoaWxkZG91YmxldGFwJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkbG9uZ3ByZXNzJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkbW91c2VlbnRlcicscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZG1vdXNlbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGRzaW5nbGV0YXAnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0YXAnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0YXBob2xkJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkdG91Y2hjYW5jZWwnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0b3VjaGVuZCcscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZHRvdWNobW92ZScscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZHRvdWNoc3RhcnQnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY29sdW1uYWRkJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixpbmRleCd9LFxuXHRcdHtuYW1lOidjb2x1bW5oaWRlJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbid9LFxuXHRcdHtuYW1lOidjb2x1bW5tZW51Y3JlYXRlZCcscGFyYW1ldGVyczonZ3JpZCxjb2x1bW4sbWVudSd9LFxuXHRcdHtuYW1lOidjb2x1bW5tb3ZlJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixmcm9tSW5kZXgsdG9JbmRleCd9LFxuXHRcdHtuYW1lOidjb2x1bW5yZW1vdmUnLHBhcmFtZXRlcnM6J2dyaWQsY29sdW1uJ30sXG5cdFx0e25hbWU6J2NvbHVtbnJlc2l6ZScscGFyYW1ldGVyczonZ3JpZCxjb2x1bW4sd2lkdGgnfSxcblx0XHR7bmFtZTonY29sdW1uc2VsZWN0aW9uJyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGlvbid9LFxuXHRcdHtuYW1lOidjb2x1bW5zaG93JyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbid9LFxuXHRcdHtuYW1lOidjb2x1bW5zb3J0JyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixkaXJlY3Rpb24nfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonb2xkQWN0aXZlSXRlbSxncmlkLG5ld0FjdGl2ZUl0ZW0nfSxcblx0XHR7bmFtZTonZGVzZWxlY3QnLHBhcmFtZXRlcnM6J2dyaWQscmVjb3Jkcyd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkaXNjbG9zZScscGFyYW1ldGVyczonbGlzdCxyZWNvcmQsdGFyZ2V0LGluZGV4LGV2ZW50J30sXG5cdFx0e25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonZ3JpZCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidncmlkLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWQsZXZlbnQnfSxcblx0XHR7bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaXRlbWFjdGlvbicscGFyYW1ldGVyczonZ3JpZCxpbmRleCxyZWNvcmQsYWN0aW9uJ30sXG5cdFx0e25hbWU6J2l0ZW1kb3VibGV0YXAnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW1sb25ncHJlc3MnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW1tb3VzZWVudGVyJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtbW91c2VsZWF2ZScscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXNpbmdsZXRhcCcscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXN3aXBlJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdGFwJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdGFwaG9sZCcscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXRvdWNoY2FuY2VsJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdG91Y2hlbmQnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW10b3VjaG1vdmUnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW10b3VjaHN0YXJ0JyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOiduYXZpZ2F0ZScscGFyYW1ldGVyczonZ3JpZCx0byxmcm9tJ30sXG5cdFx0e25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcblx0XHR7bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZToncmVmcmVzaCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3JlbmRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidncmlkLGl0ZW0scmVuZGVyZWQnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcblx0XHR7bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2VsZWN0JyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGVkJ30sXG5cdFx0e25hbWU6J3NlbGVjdGlvbmV4dGVuZGVyZHJhZycscGFyYW1ldGVyczonZ3JpZCxBbixleHRlbnNpb24nfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J3N0b3JlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYWRkJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcmlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnYmVmb3Jlc2VsZWN0aW9uZXh0ZW5kJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXN0b3JlY2hhbmdlJyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXRvcGNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JvdHRvbWNoYW5nZScsXG5cdFx0J2NlbGxzZWxlY3Rpb24nLFxuXHRcdCdjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2NoaWxkZG91YmxldGFwJyxcblx0XHQnY2hpbGRsb25ncHJlc3MnLFxuXHRcdCdjaGlsZG1vdXNlZW50ZXInLFxuXHRcdCdjaGlsZG1vdXNlbGVhdmUnLFxuXHRcdCdjaGlsZHNpbmdsZXRhcCcsXG5cdFx0J2NoaWxkdGFwJyxcblx0XHQnY2hpbGR0YXBob2xkJyxcblx0XHQnY2hpbGR0b3VjaGNhbmNlbCcsXG5cdFx0J2NoaWxkdG91Y2hlbmQnLFxuXHRcdCdjaGlsZHRvdWNobW92ZScsXG5cdFx0J2NoaWxkdG91Y2hzdGFydCcsXG5cdFx0J2NvbHVtbmFkZCcsXG5cdFx0J2NvbHVtbmhpZGUnLFxuXHRcdCdjb2x1bW5tZW51Y3JlYXRlZCcsXG5cdFx0J2NvbHVtbm1vdmUnLFxuXHRcdCdjb2x1bW5yZW1vdmUnLFxuXHRcdCdjb2x1bW5yZXNpemUnLFxuXHRcdCdjb2x1bW5zZWxlY3Rpb24nLFxuXHRcdCdjb2x1bW5zaG93Jyxcblx0XHQnY29sdW1uc29ydCcsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXNlbGVjdCcsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2Rpc2Nsb3NlJyxcblx0XHQnZG9ja2VkY2hhbmdlJyxcblx0XHQnZXJhc2VkJyxcblx0XHQnZmxvYXRpbmdjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnZnVsbHNjcmVlbicsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdpbml0aWFsaXplJyxcblx0XHQnaXRlbWFjdGlvbicsXG5cdFx0J2l0ZW1kb3VibGV0YXAnLFxuXHRcdCdpdGVtbG9uZ3ByZXNzJyxcblx0XHQnaXRlbW1vdXNlZW50ZXInLFxuXHRcdCdpdGVtbW91c2VsZWF2ZScsXG5cdFx0J2l0ZW1zaW5nbGV0YXAnLFxuXHRcdCdpdGVtc3dpcGUnLFxuXHRcdCdpdGVtdGFwJyxcblx0XHQnaXRlbXRhcGhvbGQnLFxuXHRcdCdpdGVtdG91Y2hjYW5jZWwnLFxuXHRcdCdpdGVtdG91Y2hlbmQnLFxuXHRcdCdpdGVtdG91Y2htb3ZlJyxcblx0XHQnaXRlbXRvdWNoc3RhcnQnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmUnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J25hdmlnYXRlJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3JlZnJlc2gnLFxuXHRcdCdyZW1vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyZWRjaGFuZ2UnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzZWxlY3QnLFxuXHRcdCdzZWxlY3Rpb25leHRlbmRlcmRyYWcnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RvcmVjaGFuZ2UnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQndG9wY2hhbmdlJyxcblx0XHQndXBkYXRlZGF0YScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZXh0LWdyaWQnLCBcbiAgaW5wdXRzOiBncmlkTWV0YURhdGEuUFJPUEVSVElFUyxcbiAgb3V0cHV0czogZ3JpZE1ldGFEYXRhLkVWRU5UTkFNRVMsXG4gIHByb3ZpZGVyczogW3twcm92aWRlOiBiYXNlLCB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBFeHRHcmlkQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0R3JpZENvbXBvbmVudCBleHRlbmRzIGJhc2UgaW1wbGVtZW50cyBPbkluaXQsQWZ0ZXJDb250ZW50SW5pdCxPbkNoYW5nZXMge1xuICBjb25zdHJ1Y3RvcihlUmVmOkVsZW1lbnRSZWYpIHtzdXBlcihlUmVmLGdyaWRNZXRhRGF0YSl9XG4gIHB1YmxpYyBuZ09uSW5pdCgpIHt0aGlzLmJhc2VPbkluaXQoZ3JpZE1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHt0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KCl9XG59IiwiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IEV4dEJ1dHRvbkNvbXBvbmVudCB9IGZyb20gJy4vZXh0LWJ1dHRvbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0R3JpZENvbXBvbmVudCB9IGZyb20gJy4vZXh0LWdyaWQuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFeHRCdXR0b25Db21wb25lbnQsXG4gICAgRXh0R3JpZENvbXBvbmVudFxuICBdLFxuICBleHBvcnRzOiBbXG4gICAgRXh0QnV0dG9uQ29tcG9uZW50LFxuICAgIEV4dEdyaWRDb21wb25lbnRcbiAgXVxufSlcbmV4cG9ydCBjbGFzcyBFeHRBbmd1bGFyTW9kZXJuTW9kdWxlIHsgfVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkNvbnRlbnRDaGlsZHJlbiIsInRzbGliXzEuX19leHRlbmRzIiwiQ29tcG9uZW50IiwiZm9yd2FyZFJlZiIsIkVsZW1lbnRSZWYiLCJOZ01vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7O0lBQUE7Ozs7Ozs7Ozs7Ozs7O0lBY0E7SUFFQSxJQUFJLGFBQWEsR0FBRyxVQUFTLENBQUMsRUFBRSxDQUFDO1FBQzdCLGFBQWEsR0FBRyxNQUFNLENBQUMsY0FBYzthQUNoQyxFQUFFLFNBQVMsRUFBRSxFQUFFLEVBQUUsWUFBWSxLQUFLLElBQUksVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLEdBQUcsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUM1RSxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUFFLElBQUksQ0FBQyxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUM7b0JBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDL0UsT0FBTyxhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQy9CLENBQUMsQ0FBQztBQUVGLHVCQUEwQixDQUFDLEVBQUUsQ0FBQztRQUMxQixhQUFhLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQ3BCLGdCQUFnQixJQUFJLENBQUMsV0FBVyxHQUFHLENBQUMsQ0FBQyxFQUFFO1FBQ3ZDLENBQUMsQ0FBQyxTQUFT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