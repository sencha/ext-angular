(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core')) :
    typeof define === 'function' && define.amd ? define('@sencha/ext-angular-modern-prod', ['exports', '@angular/core'], factory) :
    (factory((global.sencha = global.sencha || {}, global.sencha['ext-angular-modern-prod'] = {}),global.ng.core));
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var base = /** @class */ (function () {
        function base(el, metaData) {
            var _this = this;
            this.metaData = metaData;
            //console.log('constructor');console.log(el.nativeElement)
            this._nativeElement = el.nativeElement;
            metaData.EVENTS.forEach(function (event, n) {
                if (event.name != 'fullscreen') {
                    (( /** @type {?} */(_this)))[event.name] = new core.EventEmitter();
                }
                else {
                    (( /** @type {?} */(_this)))[event.name + 'event'] = new core.EventEmitter();
                }
            });
        }
        /**
         * @param {?} changes
         * @return {?}
         */
        base.prototype.ngOnChanges = /**
         * @param {?} changes
         * @return {?}
         */
            function (changes) {
                for (var propName in changes) {
                    /** @type {?} */
                    var verb = '';
                    if (changes[propName].firstChange == true) {
                        verb = 'initialized';
                    }
                    else {
                        verb = 'changed';
                    }
                    /** @type {?} */
                    var val = changes[propName].currentValue;
                    if (this.ext != undefined) {
                        /** @type {?} */
                        var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                        this.ext['set' + capPropName](val);
                    }
                    else {
                        if (verb == 'changed') {
                            console.log('change needed and ext not defined');
                        }
                    }
                }
                //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
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
        base.prototype.baseOnInit =
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
            function (metaData) {
                //console.log(`ngOnInit: ${metaData.XTYPE}`)
                /** @type {?} */
                var me = this;
                /** @type {?} */
                var o = {};
                o.xtype = metaData.XTYPE;
                for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
                    /** @type {?} */
                    var prop = me.metaData.PROPERTIES[i];
                    if (prop == 'handler') {
                        if (me[prop] != undefined) {
                            o[prop] = me[prop];
                        }
                    }
                    //need to handle listeners coming in here
                    if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') ;
                    else {
                        if (me[prop] != undefined &&
                            prop != 'listeners' &&
                            prop != 'config' &&
                            prop != 'handler' &&
                            prop != 'fitToParent') {
                            o[prop] = me[prop];
                        }
                    }
                }
                if (true === me.fitToParent) {
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
                //console.log('\nbaseAfterContentInit')
                if (this.items.length < 2) {
                    //console.log('1 item')
                    return;
                }
                //console.log(this.items.length + ' items')
                /** @type {?} */
                var anyItems = [];
                /** @type {?} */
                var elRefItems = [];
                this.items.forEach(function (item) {
                    anyItems.push(item);
                });
                this.items2.forEach(function (item) {
                    elRefItems.push(item);
                });
                for (var i in anyItems) {
                    /** @type {?} */
                    var item = anyItems[i];
                    /** @type {?} */
                    var elRefItem = elRefItems[i];
                    if (item != this) {
                        if (item.ext != undefined) {
                            //console.log('parent: ' + this.ext.xtype + ', child: ' + item.ext.xtype)
                            /** @type {?} */
                            var parentxtype = this['ext'].xtype;
                            /** @type {?} */
                            var childxtype = item['ext'].xtype;
                            /** @type {?} */
                            var parentCmp = this['ext'];
                            /** @type {?} */
                            var childCmp = item['ext'];
                            if (parentxtype === 'grid') {
                                if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
                                    parentCmp.addColumn(childCmp);
                                }
                                else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                                    if (parentCmp.getHideHeaders() === false) {
                                        //var j = parentCmp.items.items.length;
                                        parentCmp.insert(1, childCmp);
                                    }
                                    else {
                                        parentCmp.add(childCmp);
                                    }
                                }
                            }
                            else if (childxtype === 'tooltip') {
                                parentCmp.setTooltip(childCmp);
                            }
                            else if (childxtype === 'plugin') {
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
                                    //var j: any = parentCmp.items.items.length
                                    //parentCmp.insert(j - 1, childCmp)
                                    parentCmp.insert(1, childCmp);
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
                        else if (item.nativeElement != undefined) {
                            //console.log('native')
                            this.ext.add({ xtype: 'container', html: item.nativeElement });
                        }
                        else {
                            //console.log('component')
                            //console.log(elRefItem)
                            this.ext.add({ xtype: 'container', html: elRefItem.nativeElement });
                        }
                    }
                    // else {
                    //   console.log('same item')
                    // }
                }
                //this['ready'].emit(parentCmp)
                this['ready'].emit(this);
            };
        /**
         * @return {?}
         */
        base.prototype.baseAfterContentInit2 = /**
         * @return {?}
         */
            function () {
                var _this = this;
                if (this.itemsa.length < 2) {
                    return;
                }
                this.itemsa.forEach(function (item) {
                    if (item.nativeElement == _this._nativeElement) {
                        return;
                    }
                    if (item.nativeElement != undefined) {
                        //console.log('parent: ' + this.ext.xtype + ', child: ' + 'container')
                        _this.ext.add({ xtype: 'container', html: item.nativeElement });
                    }
                    else {
                        if (item['ext'] != undefined) {
                            //console.log('parent: ' + this.ext.xtype + ', child: ' + item.ext.xtype)
                            /** @type {?} */
                            var parentxtype = _this.ext.xtype;
                            /** @type {?} */
                            var childxtype = item['ext'].xtype;
                            /** @type {?} */
                            var parentCmp = _this.ext;
                            /** @type {?} */
                            var childCmp = item['ext'];
                            if (parentxtype === 'grid') {
                                if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
                                    parentCmp.addColumn(childCmp);
                                }
                                else if (parentCmp.add != undefined) {
                                    parentCmp.add(childCmp);
                                }
                            }
                            else if (childxtype === 'tooltip') {
                                parentCmp.setTooltip(childCmp);
                            }
                            else if (childxtype === 'plugin') {
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
                        else {
                            console.log('child not handled');
                        }
                    }
                });
                //this['ready'].emit(parentCmp)
                this['ready'].emit(this);
            };
        base.propDecorators = {
            items: [{ type: core.ContentChildren, args: ['item',] }],
            items2: [{ type: core.ContentChildren, args: ['item', { read: core.ElementRef },] }],
            itemsa: [{ type: core.ContentChildren, args: ['item', { read: core.ElementRef },] }]
        };
        return base;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            "stateful": "Boolean/Object/String[]",
            "statefulDefaults": "Object/String[]",
            "stateId": "String",
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
            'stateful',
            'statefulDefaults',
            'stateId',
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
        //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
        //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
        /**
         * @return {?}
         */
        ExtButtonComponent.prototype.ngAfterContentInit =
            //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
            /**
             * @return {?}
             */
            function () {
                this.baseAfterContentInit();
                this['ready'].emit(this);
            };
        ExtButtonComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'button',
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
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
            "hideScrollbar": "Boolean",
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
            "masked": "Boolean/String/Object/Ext.Mask/Ext.LoadMask",
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
            "selectable": "Ext.grid.selection.Model",
            "selection": "Ext.data.Model",
            "selfAlign": "String",
            "session": "Boolean/Object/Ext.data.Session",
            "shadow": "Boolean",
            "shareableName": "Boolean",
            "shim": "Boolean",
            "showAnimation": "String/Mixed",
            "sortable": "Boolean",
            "stateful": "Boolean/Object/String[]",
            "statefulDefaults": "Object/String[]",
            "stateId": "String",
            "store": "Ext.data.Store/Object",
            "striped": "Boolean",
            "style": "String/Object",
            "tabIndex": "Number",
            "title": "String",
            "titleBar": "Object",
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
            'hideScrollbar',
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
            'stateful',
            'statefulDefaults',
            'stateId',
            'store',
            'striped',
            'style',
            'tabIndex',
            'title',
            'titleBar',
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
        //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
        //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
        /**
         * @return {?}
         */
        ExtGridComponent.prototype.ngAfterContentInit =
            //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
            /**
             * @return {?}
             */
            function () {
                this.baseAfterContentInit();
                this['ready'].emit(this);
            };
        ExtGridComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'grid',
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
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var transitionMetaData = /** @class */ (function () {
        function transitionMetaData() {
        }
        transitionMetaData.XTYPE = 'transition';
        transitionMetaData.PROPERTIESOBJECT = {
            "type": "slide/reveal/cover/fade/pop",
            "duration": "Number",
            "easing": "String",
            "direction": "String",
            "bindDirectionToLocation": "Boolean",
            "activeChildTabIndex": "Number",
            "activeItem": "Ext.Component/Object/String/Number",
            "allowFocusingDisabledChildren": "Boolean",
            "alwaysOnTop": "Boolean/Number",
            "ariaAttributes": "Object",
            "ariaDescribedBy": "String",
            "ariaLabel": "String",
            "ariaLabelledBy": "String",
            "autoDestroy": "Boolean",
            "autoSize": "Boolean",
            "axisLock": "Boolean",
            "bind": "Object/String",
            "border": "Boolean",
            "bottom": "Number/String",
            "cardSwitchAnimation": "String/Object/Boolean",
            "centered": "Boolean",
            "cls": "String/String[]",
            "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
            "contentEl": "Ext.dom.Element/HTMLElement/String",
            "control": "Object",
            "controller": "String/Object/Ext.app.ViewController",
            "data": "Object",
            "defaultFocus": "String",
            "defaultListenerScope": "Boolean",
            "defaults": "Object",
            "defaultType": "String",
            "disabled": "Boolean",
            "displayed": "Boolean",
            "docked": "String",
            "draggable": "Boolean/Object/Ext.drag.Source",
            "enterAnimation": "String/Mixed",
            "eventHandlers": "Object",
            "exitAnimation": "String/Mixed",
            "flex": "Number/String/Object",
            "floated": "Boolean",
            "focusableContainer": "Boolean",
            "focusCls": "String",
            "fullscreen": "Boolean",
            "height": "Number/String",
            "hidden": "Boolean",
            "hideAnimation": "String/Mixed",
            "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
            "hideOnMaskTap": "Boolean",
            "html": "String/Ext.dom.Element/HTMLElement",
            "id": "String",
            "inactiveChildTabIndex": "Number",
            "innerCls": "String",
            "instanceCls": "String/String[]",
            "itemId": "String",
            "items": "Array/Object",
            "keyMap": "Object",
            "keyMapEnabled": "Boolean",
            "keyMapTarget": "String",
            "layout": "Object/String",
            "left": "Number/String",
            "listeners": "Object",
            "manageBorders": "Boolean",
            "margin": "Number/String",
            "masked": "Boolean/Object/Ext.Mask/Ext.LoadMask",
            "maxHeight": "Number/String",
            "maxWidth": "Number/String",
            "minHeight": "Number/String",
            "minWidth": "Number/String",
            "modal": "Boolean",
            "modelValidation": "Boolean",
            "name": "String",
            "nameable": "Boolean",
            "nameHolder": "Boolean",
            "padding": "Number/String",
            "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
            "publishes": "String/String[]/Object",
            "record": "Ext.data.Model",
            "reference": "String",
            "referenceHolder": "Boolean",
            "relative": "Boolean",
            "renderTo": "Ext.dom.Element",
            "resetFocusPosition": "Boolean",
            "right": "Number/String",
            "ripple": "Boolean/Object/String",
            "scrollable": "Boolean/String/Object",
            "selfAlign": "String",
            "session": "Boolean/Object/Ext.data.Session",
            "shadow": "Boolean",
            "shareableName": "Boolean",
            "shim": "Boolean",
            "showAnimation": "String/Mixed",
            "style": "String/Object",
            "tabIndex": "Number",
            "toFrontOnShow": "Boolean",
            "tooltip": "String/Object",
            "top": "Number/String",
            "touchAction": "Object",
            "tpl": "String/String[]/Ext.Template/Ext.XTemplate[]",
            "tplWriteMode": "String",
            "translatable": "Object",
            "twoWayBindable": "String/String[]/Object",
            "ui": "String/String[]",
            "userCls": "String/String[]",
            "userSelectable": "Boolean/String/Object",
            "viewModel": "String/Object/Ext.app.ViewModel",
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
        transitionMetaData.PROPERTIES = [
            'type',
            'duration',
            'easing',
            'direction',
            'bindDirectionToLocation',
            'activeChildTabIndex',
            'activeItem',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoDestroy',
            'autoSize',
            'axisLock',
            'bind',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'centered',
            'cls',
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
            'draggable',
            'enterAnimation',
            'eventHandlers',
            'exitAnimation',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'html',
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
            'left',
            'listeners',
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
            'right',
            'ripple',
            'scrollable',
            'selfAlign',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
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
        transitionMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,container,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'container,item,index' },
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
            { name: 'beforetofront', parameters: 'container' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'container,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,container,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'container,event' },
            { name: 'focusenter', parameters: 'container,event' },
            { name: 'focusleave', parameters: 'container,event' },
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
            { name: 'move', parameters: 'container,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'container,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'container,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'container' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        transitionMetaData.EVENTNAMES = [
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
            'beforeshow',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
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
            'rightchange',
            'scrollablechange',
            'show',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return transitionMetaData;
    }());
    var ExtTransitionComponent = /** @class */ (function (_super) {
        __extends(ExtTransitionComponent, _super);
        function ExtTransitionComponent(eRef) {
            return _super.call(this, eRef, transitionMetaData) || this;
        }
        /**
         * @return {?}
         */
        ExtTransitionComponent.prototype.ngOnInit = /**
         * @return {?}
         */
            function () { this.baseOnInit(transitionMetaData); };
        //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
        //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
        /**
         * @return {?}
         */
        ExtTransitionComponent.prototype.ngAfterContentInit =
            //public ngOnChanges(changes: SimpleChanges) {this.baseOnChanges(changes)}
            /**
             * @return {?}
             */
            function () { this.baseAfterContentInit(); };
        ExtTransitionComponent.decorators = [
            { type: core.Component, args: [{
                        selector: 'transition',
                        inputs: transitionMetaData.PROPERTIES,
                        outputs: transitionMetaData.EVENTNAMES,
                        providers: [{ provide: base, useExisting: core.forwardRef(function () { return ExtTransitionComponent; }) }],
                        template: '<ng-template #dynamic></ng-template>'
                    }] }
        ];
        /** @nocollapse */
        ExtTransitionComponent.ctorParameters = function () {
            return [
                { type: core.ElementRef }
            ];
        };
        return ExtTransitionComponent;
    }(base));

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */
    var ExtAngularModernModule = /** @class */ (function () {
        function ExtAngularModernModule() {
        }
        ExtAngularModernModule.decorators = [
            { type: core.NgModule, args: [{
                        imports: [],
                        declarations: [
                            ExtButtonComponent,
                            ExtGridComponent,
                            ExtTransitionComponent
                        ],
                        exports: [
                            ExtButtonComponent,
                            ExtGridComponent,
                            ExtTransitionComponent
                        ]
                    },] }
        ];
        return ExtAngularModernModule;
    }());

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    /**
     * @fileoverview added by tsickle
     * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
     */

    exports.ExtAngularModernModule = ExtAngularModernModule;
    exports.ɵc = base;
    exports.ɵb = ExtButtonComponent;
    exports.ɵa = buttonMetaData;
    exports.ɵe = ExtGridComponent;
    exports.ɵd = gridMetaData;
    exports.ɵg = ExtTransitionComponent;
    exports.ɵf = transitionMetaData;

    Object.defineProperty(exports, '__esModule', { value: true });

})));

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VuY2hhLWV4dC1hbmd1bGFyLW1vZGVybi1wcm9kLnVtZC5qcy5tYXAiLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy90c2xpYi90c2xpYi5lczYuanMiLCJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLXByb2QvbGliL2Jhc2UudHMiLCJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLXByb2QvbGliL2V4dC1idXR0b24uY29tcG9uZW50LnRzIiwibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi1wcm9kL2xpYi9leHQtZ3JpZC5jb21wb25lbnQudHMiLCJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLXByb2QvbGliL2V4dC10cmFuc2l0aW9uLmNvbXBvbmVudC50cyIsIm5nOi8vQHNlbmNoYS9leHQtYW5ndWxhci1tb2Rlcm4tcHJvZC9saWIvZXh0LWFuZ3VsYXItbW9kZXJuLXByb2QubW9kdWxlLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qISAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxyXG5Db3B5cmlnaHQgKGMpIE1pY3Jvc29mdCBDb3Jwb3JhdGlvbi4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cclxuTGljZW5zZWQgdW5kZXIgdGhlIEFwYWNoZSBMaWNlbnNlLCBWZXJzaW9uIDIuMCAodGhlIFwiTGljZW5zZVwiKTsgeW91IG1heSBub3QgdXNlXHJcbnRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgdGhlXHJcbkxpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXHJcblxyXG5USElTIENPREUgSVMgUFJPVklERUQgT04gQU4gKkFTIElTKiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIENPTkRJVElPTlMgT0YgQU5ZXHJcbktJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBXSVRIT1VUIExJTUlUQVRJT04gQU5ZIElNUExJRURcclxuV0FSUkFOVElFUyBPUiBDT05ESVRJT05TIE9GIFRJVExFLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSxcclxuTUVSQ0hBTlRBQkxJVFkgT1IgTk9OLUlORlJJTkdFTUVOVC5cclxuXHJcblNlZSB0aGUgQXBhY2hlIFZlcnNpb24gMi4wIExpY2Vuc2UgZm9yIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9uc1xyXG5hbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXHJcbioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqICovXHJcbi8qIGdsb2JhbCBSZWZsZWN0LCBQcm9taXNlICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoYi5oYXNPd25Qcm9wZXJ0eShwKSkgZFtwXSA9IGJbcF07IH07XHJcbiAgICByZXR1cm4gZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2V4dGVuZHMoZCwgYikge1xyXG4gICAgZXh0ZW5kU3RhdGljcyhkLCBiKTtcclxuICAgIGZ1bmN0aW9uIF9fKCkgeyB0aGlzLmNvbnN0cnVjdG9yID0gZDsgfVxyXG4gICAgZC5wcm90b3R5cGUgPSBiID09PSBudWxsID8gT2JqZWN0LmNyZWF0ZShiKSA6IChfXy5wcm90b3R5cGUgPSBiLnByb3RvdHlwZSwgbmV3IF9fKCkpO1xyXG59XHJcblxyXG5leHBvcnQgdmFyIF9fYXNzaWduID0gZnVuY3Rpb24oKSB7XHJcbiAgICBfX2Fzc2lnbiA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gX19hc3NpZ24odCkge1xyXG4gICAgICAgIGZvciAodmFyIHMsIGkgPSAxLCBuID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IG47IGkrKykge1xyXG4gICAgICAgICAgICBzID0gYXJndW1lbnRzW2ldO1xyXG4gICAgICAgICAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkpIHRbcF0gPSBzW3BdO1xyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gdDtcclxuICAgIH1cclxuICAgIHJldHVybiBfX2Fzc2lnbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19yZXN0KHMsIGUpIHtcclxuICAgIHZhciB0ID0ge307XHJcbiAgICBmb3IgKHZhciBwIGluIHMpIGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocywgcCkgJiYgZS5pbmRleE9mKHApIDwgMClcclxuICAgICAgICB0W3BdID0gc1twXTtcclxuICAgIGlmIChzICE9IG51bGwgJiYgdHlwZW9mIE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMgPT09IFwiZnVuY3Rpb25cIilcclxuICAgICAgICBmb3IgKHZhciBpID0gMCwgcCA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMocyk7IGkgPCBwLmxlbmd0aDsgaSsrKSBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMClcclxuICAgICAgICAgICAgdFtwW2ldXSA9IHNbcFtpXV07XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX21ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKSB7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QubWV0YWRhdGEgPT09IFwiZnVuY3Rpb25cIikgcmV0dXJuIFJlZmxlY3QubWV0YWRhdGEobWV0YWRhdGFLZXksIG1ldGFkYXRhVmFsdWUpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hd2FpdGVyKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogbmV3IFAoZnVuY3Rpb24gKHJlc29sdmUpIHsgcmVzb2x2ZShyZXN1bHQudmFsdWUpOyB9KS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xyXG4gICAgcmV0dXJuIGcgPSB7IG5leHQ6IHZlcmIoMCksIFwidGhyb3dcIjogdmVyYigxKSwgXCJyZXR1cm5cIjogdmVyYigyKSB9LCB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgKGdbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gdGhpczsgfSksIGc7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcclxuICAgICAgICBpZiAoZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkdlbmVyYXRvciBpcyBhbHJlYWR5IGV4ZWN1dGluZy5cIik7XHJcbiAgICAgICAgd2hpbGUgKF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBleHBvcnRzKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmICghZXhwb3J0cy5oYXNPd25Qcm9wZXJ0eShwKSkgZXhwb3J0c1twXSA9IG1bcF07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl0sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICAgIG5leHQ6IGZ1bmN0aW9uICgpIHtcclxuICAgICAgICAgICAgaWYgKG8gJiYgaSA+PSBvLmxlbmd0aCkgbyA9IHZvaWQgMDtcclxuICAgICAgICAgICAgcmV0dXJuIHsgdmFsdWU6IG8gJiYgb1tpKytdLCBkb25lOiAhbyB9O1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3JlYWQobywgbikge1xyXG4gICAgdmFyIG0gPSB0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgb1tTeW1ib2wuaXRlcmF0b3JdO1xyXG4gICAgaWYgKCFtKSByZXR1cm4gbztcclxuICAgIHZhciBpID0gbS5jYWxsKG8pLCByLCBhciA9IFtdLCBlO1xyXG4gICAgdHJ5IHtcclxuICAgICAgICB3aGlsZSAoKG4gPT09IHZvaWQgMCB8fCBuLS0gPiAwKSAmJiAhKHIgPSBpLm5leHQoKSkuZG9uZSkgYXIucHVzaChyLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGNhdGNoIChlcnJvcikgeyBlID0geyBlcnJvcjogZXJyb3IgfTsgfVxyXG4gICAgZmluYWxseSB7XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgaWYgKHIgJiYgIXIuZG9uZSAmJiAobSA9IGlbXCJyZXR1cm5cIl0pKSBtLmNhbGwoaSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZpbmFsbHkgeyBpZiAoZSkgdGhyb3cgZS5lcnJvcjsgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGFyO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IGlmIChnW25dKSBpW25dID0gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChhLCBiKSB7IHEucHVzaChbbiwgdiwgYSwgYl0pID4gMSB8fCByZXN1bWUobiwgdik7IH0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiByZXN1bWUobiwgdikgeyB0cnkgeyBzdGVwKGdbbl0odikpOyB9IGNhdGNoIChlKSB7IHNldHRsZShxWzBdWzNdLCBlKTsgfSB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKHIpIHsgci52YWx1ZSBpbnN0YW5jZW9mIF9fYXdhaXQgPyBQcm9taXNlLnJlc29sdmUoci52YWx1ZS52KS50aGVuKGZ1bGZpbGwsIHJlamVjdCkgOiBzZXR0bGUocVswXVsyXSwgcik7IH1cclxuICAgIGZ1bmN0aW9uIGZ1bGZpbGwodmFsdWUpIHsgcmVzdW1lKFwibmV4dFwiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHJlamVjdCh2YWx1ZSkgeyByZXN1bWUoXCJ0aHJvd1wiLCB2YWx1ZSk7IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShmLCB2KSB7IGlmIChmKHYpLCBxLnNoaWZ0KCksIHEubGVuZ3RoKSByZXN1bWUocVswXVswXSwgcVswXVsxXSk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXN5bmNEZWxlZ2F0b3Iobykge1xyXG4gICAgdmFyIGksIHA7XHJcbiAgICByZXR1cm4gaSA9IHt9LCB2ZXJiKFwibmV4dFwiKSwgdmVyYihcInRocm93XCIsIGZ1bmN0aW9uIChlKSB7IHRocm93IGU7IH0pLCB2ZXJiKFwicmV0dXJuXCIpLCBpW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuLCBmKSB7IGlbbl0gPSBvW25dID8gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIChwID0gIXApID8geyB2YWx1ZTogX19hd2FpdChvW25dKHYpKSwgZG9uZTogbiA9PT0gXCJyZXR1cm5cIiB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydFN0YXIobW9kKSB7XHJcbiAgICBpZiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSByZXR1cm4gbW9kO1xyXG4gICAgdmFyIHJlc3VsdCA9IHt9O1xyXG4gICAgaWYgKG1vZCAhPSBudWxsKSBmb3IgKHZhciBrIGluIG1vZCkgaWYgKE9iamVjdC5oYXNPd25Qcm9wZXJ0eS5jYWxsKG1vZCwgaykpIHJlc3VsdFtrXSA9IG1vZFtrXTtcclxuICAgIHJlc3VsdC5kZWZhdWx0ID0gbW9kO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0RGVmYXVsdChtb2QpIHtcclxuICAgIHJldHVybiAobW9kICYmIG1vZC5fX2VzTW9kdWxlKSA/IG1vZCA6IHsgZGVmYXVsdDogbW9kIH07XHJcbn1cclxuIiwiZGVjbGFyZSB2YXIgRXh0OiBhbnk7XG5pbXBvcnQge1xuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcicpO2NvbnNvbGUubG9nKGVsLm5hdGl2ZUVsZW1lbnQpXG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnRcbiAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZSArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKVxuICAgIGxldCBjaGFuZ2VzTXNnczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGxldCB2ZXJiID0gJydcbiAgICAgIGlmIChjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSA9PSB0cnVlKSB7XG4gICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJ1xuICAgICAgfVxuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHRoaXMuZXh0WydzZXQnK2NhcFByb3BOYW1lXSh2YWwpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gIH1cblxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nRG9DaGVjaygpIHtjb25zb2xlLmxvZyhgRG9DaGVja2ApfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyQ29udGVudENoZWNrZWRgKSB9XG4gIC8vbmdBZnRlclZpZXdJbml0KCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3SW5pdGApIH1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdDaGVja2VkYCkgfVxuICAvL25nT25EZXN0cm95KCkgeyBjb25zb2xlLmxvZyhgT25EZXN0cm95YCkgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgby54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50JykgeyBcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0cnVlID09PSBtZS5maXRUb1BhcmVudCkge1xuICAgICAgby50b3A9MCwgXG4gICAgICBvLmxlZnQ9MCwgXG4gICAgICBvLndpZHRoPScxMDAlJywgXG4gICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICB9XG4gICAgaWYgKG1lLmNvbmZpZyAhPT0ge30gKSB7XG4gICAgICBFeHQuYXBwbHkobywgbWUuY29uZmlnKTtcbiAgICB9XG4gICAgby5saXN0ZW5lcnMgPSB7fVxuICAgIHZhciBFVkVOVFMgPSBtZXRhRGF0YS5FVkVOVFNcbiAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgbGV0IGV2ZW50bmFtZTogYW55ID0gZXZlbnQubmFtZVxuICAgICAgbGV0IGV2ZW50cGFyYW1ldGVyczogYW55ID0gZXZlbnQucGFyYW1ldGVyc1xuICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0gZXZlbnRwYXJhbWV0ZXJzXG4gICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKVxuICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgbGV0IGVtaXRwYXJtczogYW55ID0ge31cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG4gICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgIH1cbiAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcylcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgby5yZW5kZXJUbyA9IHRoaXMuX25hdGl2ZUVsZW1lbnRcbiAgICB9XG4gICAgdGhpcy5leHQgPSBFeHQuY3JlYXRlKG8pXG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKCdpdGVtJykgaXRlbXM6IFF1ZXJ5TGlzdDxhbnk+XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2l0ZW0nLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaXRlbXMyOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj5cbiAgYmFzZUFmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnXFxuYmFzZUFmdGVyQ29udGVudEluaXQnKVxuXG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoIDwgMikge1xuICAgICAgLy9jb25zb2xlLmxvZygnMSBpdGVtJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuaXRlbXMubGVuZ3RoICsgJyBpdGVtcycpXG5cbiAgICB2YXIgYW55SXRlbXMgPSBbXVxuICAgIHZhciBlbFJlZkl0ZW1zID0gW11cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBhbnlJdGVtcy5wdXNoKGl0ZW0pXG4gICAgfSlcbiAgICB0aGlzLml0ZW1zMi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgZWxSZWZJdGVtcy5wdXNoKGl0ZW0pXG4gICAgfSlcblxuICAgIGZvciAodmFyIGkgaW4gYW55SXRlbXMpIHtcbiAgICAgIHZhciBpdGVtID0gYW55SXRlbXNbaV1cbiAgICAgIHZhciBlbFJlZkl0ZW0gPSBlbFJlZkl0ZW1zW2ldXG4gICAgICBpZiAoaXRlbSAhPSB0aGlzKSB7XG4gICAgICAgIGlmIChpdGVtLmV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLmV4dC54dHlwZSArICcsIGNoaWxkOiAnICsgaXRlbS5leHQueHR5cGUpXG4gICAgICAgICAgdmFyIHBhcmVudHh0eXBlID0gdGhpc1snZXh0J10ueHR5cGVcbiAgICAgICAgICB2YXIgY2hpbGR4dHlwZSA9IGl0ZW1bJ2V4dCddLnh0eXBlXG4gICAgICAgICAgdmFyIHBhcmVudENtcCA9IHRoaXNbJ2V4dCddXG4gICAgICAgICAgdmFyIGNoaWxkQ21wID0gaXRlbVsnZXh0J11cblxuICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vdmFyIGogPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy92YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAvL3BhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ25hdGl2ZScpXG4gICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjb21wb25lbnQnKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coZWxSZWZJdGVtKVxuICAgICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGVsUmVmSXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdzYW1lIGl0ZW0nKVxuICAgICAgLy8gfVxuICAgIH1cbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdChwYXJlbnRDbXApXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cblxuXG5cbiAgQENvbnRlbnRDaGlsZHJlbignaXRlbScsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpdGVtc2E6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPlxuICBiYXNlQWZ0ZXJDb250ZW50SW5pdDIoKSB7XG4gICAgaWYgKHRoaXMuaXRlbXNhLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLml0ZW1zYS5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCA9PSB0aGlzLl9uYXRpdmVFbGVtZW50KSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50OiAnICsgdGhpcy5leHQueHR5cGUgKyAnLCBjaGlsZDogJyArICdjb250YWluZXInKVxuICAgICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBpdGVtLm5hdGl2ZUVsZW1lbnR9KVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChpdGVtWydleHQnXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLmV4dC54dHlwZSArICcsIGNoaWxkOiAnICsgaXRlbS5leHQueHR5cGUpXG4gICAgICAgICAgdmFyIHBhcmVudHh0eXBlID0gdGhpcy5leHQueHR5cGVcbiAgICAgICAgICB2YXIgY2hpbGR4dHlwZSA9IGl0ZW1bJ2V4dCddLnh0eXBlXG4gICAgICAgICAgdmFyIHBhcmVudENtcCA9IHRoaXMuZXh0XG4gICAgICAgICAgdmFyIGNoaWxkQ21wID0gaXRlbVsnZXh0J11cblxuICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sdGlwJykge1xuICAgICAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB2YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgaGFuZGxlZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHBhcmVudENtcClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuXG59IiwiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgYnV0dG9uTWV0YURhdGEge1xuICBwdWJsaWMgc3RhdGljIFhUWVBFOiBzdHJpbmcgPSAnYnV0dG9uJztcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTT0JKRUNUOiBhbnkgPSB7XG4gICAgXCJhbGxvd0RlcHJlc3NcIjogXCJCb29sZWFuXCIsXG4gICAgXCJhbHdheXNPblRvcFwiOiBcIkJvb2xlYW4vTnVtYmVyXCIsXG4gICAgXCJhcmlhQXR0cmlidXRlc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiYXJpYURlc2NyaWJlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcmlhTGFiZWxcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbGxlZEJ5XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJhcnJvd1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImFycm93QWxpZ25cIjogXCIncmlnaHQnLydib3R0b20nXCIsXG4gICAgXCJhdXRvRXZlbnRcIjogXCJTdHJpbmdcIixcbiAgICBcImF4aXNMb2NrXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYmFkZ2VUZXh0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJiaW5kXCI6IFwiT2JqZWN0L1N0cmluZ1wiLFxuICAgIFwiYm9yZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYm90dG9tXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiYnV0dG9uVHlwZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiY2VudGVyZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcImNvbnN0cmFpbkFsaWduXCI6IFwiU3RyaW5nL0V4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIkV4dC5kb20uRWxlbWVudC9IVE1MRWxlbWVudC9TdHJpbmdcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRMaXN0ZW5lclNjb3BlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGVzdHJveU1lbnVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNhYmxlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc3BsYXllZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRvY2tlZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZHJhZ2dhYmxlXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRyYWcuU291cmNlXCIsXG4gICAgXCJlbmFibGVUb2dnbGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJlbnRlckFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZXhpdEFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlci9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJmbG9hdGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZ1bGxzY3JlZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoYW5kbGVyXCI6IFwiRnVuY3Rpb25cIixcbiAgICBcImhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcImhpZGRlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGlkZU9uTWFza1RhcFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmdcIixcbiAgICBcImljb25cIjogXCJTdHJpbmdcIixcbiAgICBcImljb25BbGlnblwiOiBcIid0b3AnLydyaWdodCcvJ2JvdHRvbScvJ2xlZnQnXCIsXG4gICAgXCJpY29uQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5zdGFuY2VDbHNcIjogXCJTdHJpbmcvU3RyaW5nW11cIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsZWZ0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1lbnVcIjogXCJFeHQubWVudS5NZW51L1N0cmluZy9PYmplY3RcIixcbiAgICBcIm1lbnVBbGlnblwiOiBcIlN0cmluZ1wiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluV2lkdGhcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtb2RhbFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1vZGVsVmFsaWRhdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVcIjogXCJTdHJpbmdcIixcbiAgICBcIm5hbWVhYmxlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBsdWdpbnNcIjogXCJBcnJheS9FeHQuZW51bXMuUGx1Z2luL09iamVjdC9FeHQucGx1Z2luLkFic3RyYWN0XCIsXG4gICAgXCJwcmVzc2VkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicHJlc3NlZERlbGF5XCI6IFwiTnVtYmVyL0Jvb2xlYW5cIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlY29yZFwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlbGF0aXZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzY29wZVwiOiBcIk9iamVjdFwiLFxuICAgIFwic2Nyb2xsYWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwic2VsZkFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93QW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJzdGF0ZWZ1bFwiOiBcIkJvb2xlYW4vT2JqZWN0L1N0cmluZ1tdXCIsXG4gICAgXCJzdGF0ZWZ1bERlZmF1bHRzXCI6IFwiT2JqZWN0L1N0cmluZ1tdXCIsXG4gICAgXCJzdGF0ZUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzdHJldGNoTWVudVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcInRleHRBbGlnblwiOiBcIidsZWZ0Jy8ncmlnaHQnLydjZW50ZXInXCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG9nZ2xlSGFuZGxlclwiOiBcIkZ1bmN0aW9uXCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZ1wiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZhbHVlXCI6IFwiU3RyaW5nL051bWJlclwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInhcIjogXCJOdW1iZXJcIixcbiAgICBcInh0eXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ6SW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxufTtcbiAgcHVibGljIHN0YXRpYyBQUk9QRVJUSUVTOiBzdHJpbmdbXSA9IFtcbiAgICAnYWxsb3dEZXByZXNzJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXJyb3cnLFxuICAgICdhcnJvd0FsaWduJyxcbiAgICAnYXV0b0V2ZW50JyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiYWRnZVRleHQnLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnYnV0dG9uVHlwZScsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xzJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVzdHJveU1lbnUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VuYWJsZVRvZ2dsZScsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2hhbmRsZXInLFxuICAgICdoZWlnaHQnLFxuICAgICdoaWRkZW4nLFxuICAgICdoaWRlQW5pbWF0aW9uJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaHRtbCcsXG4gICAgJ2ljb24nLFxuICAgICdpY29uQWxpZ24nLFxuICAgICdpY29uQ2xzJyxcbiAgICAnaWQnLFxuICAgICdpbnN0YW5jZUNscycsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbWFyZ2luJyxcbiAgICAnbWF4SGVpZ2h0JyxcbiAgICAnbWF4V2lkdGgnLFxuICAgICdtZW51JyxcbiAgICAnbWVudUFsaWduJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ3BhZGRpbmcnLFxuICAgICdwbHVnaW5zJyxcbiAgICAncHJlc3NlZCcsXG4gICAgJ3ByZXNzZWREZWxheScsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyaWdodCcsXG4gICAgJ3JpcHBsZScsXG4gICAgJ3Njb3BlJyxcbiAgICAnc2Nyb2xsYWJsZScsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzdGF0ZWZ1bCcsXG4gICAgJ3N0YXRlZnVsRGVmYXVsdHMnLFxuICAgICdzdGF0ZUlkJyxcbiAgICAnc3RyZXRjaE1lbnUnLFxuICAgICdzdHlsZScsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndGV4dCcsXG4gICAgJ3RleHRBbGlnbicsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b2dnbGVIYW5kbGVyJyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZhbHVlJyxcbiAgICAndmlld01vZGVsJyxcbiAgICAnd2VpZ2h0JyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FkZGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J2JlZm9yZWJvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3JlbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonYmVmb3JlcHJlc3NlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVyaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidiZWZvcmV0b2Zyb250JyxwYXJhbWV0ZXJzOididXR0b24nfSxcblx0XHR7bmFtZTonYmVmb3JldG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JsdXInLHBhcmFtZXRlcnM6J2J1dHRvbixldmVudCd9LFxuXHRcdHtuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2Rlc3Ryb3knLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidkaXNhYmxlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonYnV0dG9uLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzZW50ZXInLHBhcmFtZXRlcnM6J2J1dHRvbixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2xlYXZlJyxwYXJhbWV0ZXJzOididXR0b24sZXZlbnQnfSxcblx0XHR7bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonbGVmdGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21heEhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWluSGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWluV2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOidvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J3BhaW50ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixlbGVtZW50J30sXG5cdFx0e25hbWU6J3Bvc2l0aW9uZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcixwb3NpdGlvbmVkJ30sXG5cdFx0e25hbWU6J3ByZXNzZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWxlYXNlJyxwYXJhbWV0ZXJzOididXR0b24sZSd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG5cdFx0e25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOid0YXAnLHBhcmFtZXRlcnM6J2J1dHRvbixlJ30sXG5cdFx0e25hbWU6J3RvZnJvbnQnLHBhcmFtZXRlcnM6J2J1dHRvbid9LFxuXHRcdHtuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWRkZWQnLFxuXHRcdCdiZWZvcmVib3R0b21jaGFuZ2UnLFxuXHRcdCdiZWZvcmVjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRpc2FibGVkY2hhbmdlJyxcblx0XHQnYmVmb3JlZG9ja2VkY2hhbmdlJyxcblx0XHQnYmVmb3JlaGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlaGlkZGVuY2hhbmdlJyxcblx0XHQnYmVmb3JlaGlkZScsXG5cdFx0J2JlZm9yZWxlZnRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtYXhIZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtYXhXaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW1pbkhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZW1pbldpZHRoY2hhbmdlJyxcblx0XHQnYmVmb3Jlb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdiZWZvcmVwcmVzc2VkY2hhbmdlJyxcblx0XHQnYmVmb3JlcmlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXRvZnJvbnQnLFxuXHRcdCdiZWZvcmV0b3BjaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdib3R0b21jaGFuZ2UnLFxuXHRcdCdjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2RvY2tlZGNoYW5nZScsXG5cdFx0J2VyYXNlZCcsXG5cdFx0J2Zsb2F0aW5nY2hhbmdlJyxcblx0XHQnZm9jdXMnLFxuXHRcdCdmb2N1c2VudGVyJyxcblx0XHQnZm9jdXNsZWF2ZScsXG5cdFx0J2Z1bGxzY3JlZW4nLFxuXHRcdCdoZWlnaHRjaGFuZ2UnLFxuXHRcdCdoaWRkZW5jaGFuZ2UnLFxuXHRcdCdoaWRlJyxcblx0XHQnaW5pdGlhbGl6ZScsXG5cdFx0J2xlZnRjaGFuZ2UnLFxuXHRcdCdtYXhIZWlnaHRjaGFuZ2UnLFxuXHRcdCdtYXhXaWR0aGNoYW5nZScsXG5cdFx0J21pbkhlaWdodGNoYW5nZScsXG5cdFx0J21pbldpZHRoY2hhbmdlJyxcblx0XHQnbW92ZWQnLFxuXHRcdCdvcmllbnRhdGlvbmNoYW5nZScsXG5cdFx0J3BhaW50ZWQnLFxuXHRcdCdwb3NpdGlvbmVkY2hhbmdlJyxcblx0XHQncHJlc3NlZGNoYW5nZScsXG5cdFx0J3JlbGVhc2UnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVzaXplJyxcblx0XHQncmlnaHRjaGFuZ2UnLFxuXHRcdCdzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnc2hvdycsXG5cdFx0J3RhcCcsXG5cdFx0J3RvZnJvbnQnLFxuXHRcdCd0b3BjaGFuZ2UnLFxuXHRcdCd1cGRhdGVkYXRhJyxcblx0XHQnd2lkdGhjaGFuZ2UnLFxuXHRcdCdyZWFkeSdcbl07XG59XG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdidXR0b24nLCBcbiAgaW5wdXRzOiBidXR0b25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBidXR0b25NZXRhRGF0YS5FVkVOVE5BTUVTLFxuICBwcm92aWRlcnM6IFt7cHJvdmlkZTogYmFzZSwgdXNlRXhpc3Rpbmc6IGZvcndhcmRSZWYoKCkgPT4gRXh0QnV0dG9uQ29tcG9uZW50KX1dLFxuICB0ZW1wbGF0ZTogJzxuZy10ZW1wbGF0ZSAjZHluYW1pYz48L25nLXRlbXBsYXRlPidcbn0pXG5leHBvcnQgY2xhc3MgRXh0QnV0dG9uQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsYnV0dG9uTWV0YURhdGEpfVxuICBwdWJsaWMgbmdPbkluaXQoKSB7dGhpcy5iYXNlT25Jbml0KGJ1dHRvbk1ldGFEYXRhKX1cbiAgLy9wdWJsaWMgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge3RoaXMuYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKX1cbiAgcHVibGljIG5nQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICB0aGlzLmJhc2VBZnRlckNvbnRlbnRJbml0KClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgICB9XG59IiwiaW1wb3J0IHtcbiAgT3V0cHV0LFxuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgZ3JpZE1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ2dyaWQnO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcImFjdGl2ZUNoaWxkVGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcImFjdGl2ZUl0ZW1cIjogXCJFeHQuQ29tcG9uZW50L09iamVjdC9TdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFzc29jaWF0ZWREYXRhXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcImF1dG9EZXN0cm95XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXV0b1NpemVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJheGlzTG9ja1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJib3R0b21cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJidWZmZXJTaXplXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJjYXJkU3dpdGNoQW5pbWF0aW9uXCI6IFwiU3RyaW5nL09iamVjdC9Cb29sZWFuXCIsXG4gICAgXCJjZW50ZXJlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29sdW1uTGluZXNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb2x1bW5NZW51XCI6IFwiT2JqZWN0XCIsXG4gICAgXCJjb2x1bW5SZXNpemVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJjb2x1bW5zXCI6IFwiRXh0LmdyaWQuY29sdW1uLkNvbHVtbltdXCIsXG4gICAgXCJjb2x1bW5zTWVudUl0ZW1cIjogXCJFeHQuZ3JpZC5tZW51LkNvbHVtbnNcIixcbiAgICBcImNvbnN0cmFpbkFsaWduXCI6IFwiU3RyaW5nL0V4dC51dGlsLlJlZ2lvbi9FeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcImNvbnRlbnRFbFwiOiBcIkV4dC5kb20uRWxlbWVudC9IVE1MRWxlbWVudC9TdHJpbmdcIixcbiAgICBcImNvbnRyb2xcIjogXCJPYmplY3RcIixcbiAgICBcImNvbnRyb2xsZXJcIjogXCJTdHJpbmcvT2JqZWN0L0V4dC5hcHAuVmlld0NvbnRyb2xsZXJcIixcbiAgICBcImRhdGFcIjogXCJPYmplY3RcIixcbiAgICBcImRlZmF1bHRGb2N1c1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGVmYXVsdExpc3RlbmVyU2NvcGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkZWZhdWx0c1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdFR5cGVcIjogXCJFeHQuZW51bXMuV2lkZ2V0XCIsXG4gICAgXCJkZWZlckVtcHR5VGV4dFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRlc2VsZWN0T25Db250YWluZXJDbGlja1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2FibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZGlzYWJsZVNlbGVjdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRpc2Nsb3N1cmVQcm9wZXJ0eVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGlzcGxheWVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZG9ja2VkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkcmFnZ2FibGVcIjogXCJCb29sZWFuL09iamVjdC9FeHQuZHJhZy5Tb3VyY2VcIixcbiAgICBcImVtcHR5SXRlbVRleHRcIjogXCJTdHJpbmdcIixcbiAgICBcImVtcHR5U3RhdGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJlbXB0eVRleHRcIjogXCJTdHJpbmcvQm9vbGVhblwiLFxuICAgIFwiZW1wdHlUZXh0RGVmYXVsdHNcIjogXCJPYmplY3QvRXh0LkNvbXBvbmVudFwiLFxuICAgIFwiZW1wdHlUZXh0UHJvcGVydHlcIjogXCJTdHJpbmdcIixcbiAgICBcImVuYWJsZVRleHRTZWxlY3Rpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJlbnRlckFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiZXZlbnRIYW5kbGVyc1wiOiBcIk9iamVjdFwiLFxuICAgIFwiZXhpdEFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiZmxleFwiOiBcIk51bWJlci9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJmbG9hdGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNhYmxlQ29udGFpbmVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZm9jdXNDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImZ1bGxzY3JlZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJncm91cGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiZ3JvdXBGb290ZXJcIjogXCJPYmplY3QvRXh0LmRhdGF2aWV3Lkl0ZW1IZWFkZXJcIixcbiAgICBcImdyb3VwSGVhZGVyXCI6IFwiT2JqZWN0L0V4dC5kYXRhdmlldy5JdGVtSGVhZGVyXCIsXG4gICAgXCJoZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJoaWRkZW5cIjogXCJCb29sZWFuXCIsXG4gICAgXCJoaWRlQW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJoaWRlSGVhZGVyc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVNb2RlXCI6IFwiJ2NsaXAnLydkaXNwbGF5Jy8nb2Zmc2V0cycvJ29wYWNpdHknLyd2aXNpYmlsaXR5J1wiLFxuICAgIFwiaGlkZU9uTWFza1RhcFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImhpZGVTY3JvbGxiYXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJob3Jpem9udGFsT3ZlcmZsb3dcIjogXCJhbnlcIixcbiAgICBcImh0bWxcIjogXCJTdHJpbmcvRXh0LmRvbS5FbGVtZW50L0hUTUxFbGVtZW50XCIsXG4gICAgXCJpZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaW5hY3RpdmVDaGlsZFRhYkluZGV4XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJpbmRleEJhclwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kYXRhdmlldy5JbmRleEJhclwiLFxuICAgIFwiaW5maW5pdGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJpbmxpbmVcIjogXCJCb29sZWFuL09iamVjdFwiLFxuICAgIFwiaW5uZXJDbHNcIjogXCJTdHJpbmdcIixcbiAgICBcImlubmVyQ3RIZWlnaHRcIjogXCJhbnlcIixcbiAgICBcImlubmVyV2lkdGhcIjogXCJhbnlcIixcbiAgICBcImluc3RhbmNlQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJpdGVtQnV0dG9uTW9kZVwiOiBcImJvb2xlYW5cIixcbiAgICBcIml0ZW1DbHNcIjogXCJTdHJpbmdcIixcbiAgICBcIml0ZW1Db25maWdcIjogXCJPYmplY3QvRXh0LmdyaWQuUm93XCIsXG4gICAgXCJpdGVtQ29udGVudENsc1wiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbURhdGFNYXBcIjogXCJPYmplY3RcIixcbiAgICBcIml0ZW1JZFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiaXRlbUlubmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtUmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3RcIixcbiAgICBcIml0ZW1zXCI6IFwiQXJyYXkvT2JqZWN0XCIsXG4gICAgXCJpdGVtc0ZvY3VzYWJsZVwiOiBcImFueVwiLFxuICAgIFwiaXRlbVRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuWFRlbXBsYXRlXCIsXG4gICAgXCJrZXlNYXBcIjogXCJPYmplY3RcIixcbiAgICBcImtleU1hcEVuYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJrZXlNYXBUYXJnZXRcIjogXCJTdHJpbmdcIixcbiAgICBcImxheW91dFwiOiBcIk9iamVjdC9TdHJpbmdcIixcbiAgICBcImxlZnRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJsaXN0ZW5lcnNcIjogXCJPYmplY3RcIixcbiAgICBcImxvYWRpbmdIZWlnaHRcIjogXCJOdW1iZXJcIixcbiAgICBcImxvYWRpbmdUZXh0XCI6IFwiU3RyaW5nL0Jvb2xlYW5cIixcbiAgICBcIm1haW50YWluQ2hpbGROb2Rlc1wiOiBcIkJvb2xlYW5cIixcbiAgICBcIm1hbmFnZUJvcmRlcnNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtYXJnaW5cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXJrRGlydHlcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtYXNrZWRcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3QvRXh0Lk1hc2svRXh0LkxvYWRNYXNrXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhJdGVtQ2FjaGVcIjogXCJOdW1iZXJcIixcbiAgICBcIm1heFdpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluSGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWluaW11bUJ1ZmZlckRpc3RhbmNlXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJtaW5XaWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1vZGFsXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibW9kZWxWYWxpZGF0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibXVsdGlDb2x1bW5Tb3J0XCI6IFwiQm9vbGVhblwiLFxuICAgIFwibmFtZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwibmFtZWFibGVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lSG9sZGVyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwib25JdGVtRGlzY2xvc3VyZVwiOiBcIkJvb2xlYW4vRnVuY3Rpb24vU3RyaW5nL09iamVjdFwiLFxuICAgIFwicGFkZGluZ1wiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInBpbkZvb3RlcnNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwaW5IZWFkZXJzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicGlubmVkRm9vdGVyXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJwaW5uZWRGb290ZXJIZWlnaHRcIjogXCJhbnlcIixcbiAgICBcInBpbm5lZEhlYWRlclwiOiBcIk9iamVjdFwiLFxuICAgIFwicGlubmVkSGVhZGVySGVpZ2h0XCI6IFwiYW55XCIsXG4gICAgXCJwbHVnaW5zXCI6IFwiQXJyYXkvRXh0LmVudW1zLlBsdWdpbi9PYmplY3QvRXh0LnBsdWdpbi5BYnN0cmFjdFwiLFxuICAgIFwicHJlc3NlZERlbGF5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJwcmV2ZW50U2VsZWN0aW9uT25EaXNjbG9zZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInByZXZlbnRTZWxlY3Rpb25PblRvb2xcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwdWJsaXNoZXNcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJyZWNvcmRcIjogXCJFeHQuZGF0YS5Nb2RlbFwiLFxuICAgIFwicmVmZXJlbmNlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJyZWZlcmVuY2VIb2xkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJyZWxhdGl2ZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbmRlclRvXCI6IFwiRXh0LmRvbS5FbGVtZW50XCIsXG4gICAgXCJyZXNlcnZlU2Nyb2xsYmFyXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVzZXRGb2N1c1Bvc2l0aW9uXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJyaXBwbGVcIjogXCJCb29sZWFuL09iamVjdC9TdHJpbmdcIixcbiAgICBcInJvd0xpbmVzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicm93TnVtYmVyc1wiOiBcIkJvb2xlYW4vT2JqZWN0XCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzY3JvbGxEb2NrXCI6IFwiJ3N0YXJ0Jy8nZW1kJ1wiLFxuICAgIFwic2Nyb2xsVG9Ub3BPblJlZnJlc2hcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzZWxlY3RhYmxlXCI6IFwiRXh0LmdyaWQuc2VsZWN0aW9uLk1vZGVsXCIsXG4gICAgXCJzZWxlY3Rpb25cIjogXCJFeHQuZGF0YS5Nb2RlbFwiLFxuICAgIFwic2VsZkFsaWduXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJzZXNzaW9uXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0LmRhdGEuU2Vzc2lvblwiLFxuICAgIFwic2hhZG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hhcmVhYmxlTmFtZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNoaW1cIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaG93QW5pbWF0aW9uXCI6IFwiU3RyaW5nL01peGVkXCIsXG4gICAgXCJzb3J0YWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInN0YXRlZnVsXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlZnVsRGVmYXVsdHNcIjogXCJPYmplY3QvU3RyaW5nW11cIixcbiAgICBcInN0YXRlSWRcIjogXCJTdHJpbmdcIixcbiAgICBcInN0b3JlXCI6IFwiRXh0LmRhdGEuU3RvcmUvT2JqZWN0XCIsXG4gICAgXCJzdHJpcGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic3R5bGVcIjogXCJTdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJ0YWJJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwidGl0bGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRpdGxlQmFyXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0b0Zyb250T25TaG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidG9vbHRpcFwiOiBcIlN0cmluZy9PYmplY3RcIixcbiAgICBcInRvcFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInRvcFJlbmRlcmVkSW5kZXhcIjogXCJhbnlcIixcbiAgICBcInRvdWNoQWN0aW9uXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJ0cGxcIjogXCJTdHJpbmcvU3RyaW5nW10vRXh0LlRlbXBsYXRlL0V4dC5YVGVtcGxhdGVbXVwiLFxuICAgIFwidHBsV3JpdGVNb2RlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ0cmFuc2xhdGFibGVcIjogXCJPYmplY3RcIixcbiAgICBcInRyaWdnZXJDdEV2ZW50XCI6IFwiJ3RhcCcvJ3NpbmdsZXRhcCdcIixcbiAgICBcInRyaWdnZXJFdmVudFwiOiBcIidjaGlsZHRhcCcvJ2NoaWxkc2luZ2xldGFwJy8nY2hpbGRkb3VibGV0YXAnLydjaGlsZHN3aXBlJy8nY2hpbGR0YXBob2xkJy8nY2hpbGRsb25ncHJlc3MnXCIsXG4gICAgXCJ0d29XYXlCaW5kYWJsZVwiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInVpXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyQ2xzXCI6IFwiU3RyaW5nL1N0cmluZ1tdXCIsXG4gICAgXCJ1c2VyU2VsZWN0YWJsZVwiOiBcIkJvb2xlYW4vU3RyaW5nL09iamVjdFwiLFxuICAgIFwidXNlU2ltcGxlSXRlbXNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ2YXJpYWJsZUhlaWdodHNcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ2ZXJ0aWNhbE92ZXJmbG93XCI6IFwiQm9vbGVhblwiLFxuICAgIFwidmlld01vZGVsXCI6IFwiU3RyaW5nL09iamVjdC9FeHQuYXBwLlZpZXdNb2RlbFwiLFxuICAgIFwidmlzaWJsZUhlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwidmlzaWJsZUxlZnRcIjogXCJhbnlcIixcbiAgICBcInZpc2libGVUb3BcIjogXCJOdW1iZXJcIixcbiAgICBcInZpc2libGVXaWR0aFwiOiBcImFueVwiLFxuICAgIFwid2VpZ2h0XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ3ZWlnaHRlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcIndpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwieFwiOiBcIk51bWJlclwiLFxuICAgIFwieHR5cGVcIjogXCJTdHJpbmdcIixcbiAgICBcInlcIjogXCJOdW1iZXJcIixcbiAgICBcInpJbmRleFwiOiBcIk51bWJlclwiLFxuICAgIFwicGxhdGZvcm1Db25maWdcIjogXCJPYmplY3RcIixcbiAgICBcInJlc3BvbnNpdmVDb25maWdcIjogXCJPYmplY3RcIixcbiAgICBcImZpdFRvUGFyZW50XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiY29uZmlnXCI6IFwiT2JqZWN0XCIsXG59O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICdhY3RpdmVDaGlsZFRhYkluZGV4JyxcbiAgICAnYWN0aXZlSXRlbScsXG4gICAgJ2FsbG93Rm9jdXNpbmdEaXNhYmxlZENoaWxkcmVuJyxcbiAgICAnYWx3YXlzT25Ub3AnLFxuICAgICdhcmlhQXR0cmlidXRlcycsXG4gICAgJ2FyaWFEZXNjcmliZWRCeScsXG4gICAgJ2FyaWFMYWJlbCcsXG4gICAgJ2FyaWFMYWJlbGxlZEJ5JyxcbiAgICAnYXNzb2NpYXRlZERhdGEnLFxuICAgICdhdXRvRGVzdHJveScsXG4gICAgJ2F1dG9TaXplJyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnYnVmZmVyU2l6ZScsXG4gICAgJ2NhcmRTd2l0Y2hBbmltYXRpb24nLFxuICAgICdjZW50ZXJlZCcsXG4gICAgJ2NscycsXG4gICAgJ2NvbHVtbkxpbmVzJyxcbiAgICAnY29sdW1uTWVudScsXG4gICAgJ2NvbHVtblJlc2l6ZScsXG4gICAgJ2NvbHVtbnMnLFxuICAgICdjb2x1bW5zTWVudUl0ZW0nLFxuICAgICdjb25zdHJhaW5BbGlnbicsXG4gICAgJ2NvbnRlbnRFbCcsXG4gICAgJ2NvbnRyb2wnLFxuICAgICdjb250cm9sbGVyJyxcbiAgICAnZGF0YScsXG4gICAgJ2RlZmF1bHRGb2N1cycsXG4gICAgJ2RlZmF1bHRMaXN0ZW5lclNjb3BlJyxcbiAgICAnZGVmYXVsdHMnLFxuICAgICdkZWZhdWx0VHlwZScsXG4gICAgJ2RlZmVyRW1wdHlUZXh0JyxcbiAgICAnZGVzZWxlY3RPbkNvbnRhaW5lckNsaWNrJyxcbiAgICAnZGlzYWJsZWQnLFxuICAgICdkaXNhYmxlU2VsZWN0aW9uJyxcbiAgICAnZGlzY2xvc3VyZVByb3BlcnR5JyxcbiAgICAnZGlzcGxheWVkJyxcbiAgICAnZG9ja2VkJyxcbiAgICAnZHJhZ2dhYmxlJyxcbiAgICAnZW1wdHlJdGVtVGV4dCcsXG4gICAgJ2VtcHR5U3RhdGUnLFxuICAgICdlbXB0eVRleHQnLFxuICAgICdlbXB0eVRleHREZWZhdWx0cycsXG4gICAgJ2VtcHR5VGV4dFByb3BlcnR5JyxcbiAgICAnZW5hYmxlVGV4dFNlbGVjdGlvbicsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzYWJsZUNvbnRhaW5lcicsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2dyb3VwZWQnLFxuICAgICdncm91cEZvb3RlcicsXG4gICAgJ2dyb3VwSGVhZGVyJyxcbiAgICAnaGVpZ2h0JyxcbiAgICAnaGlkZGVuJyxcbiAgICAnaGlkZUFuaW1hdGlvbicsXG4gICAgJ2hpZGVIZWFkZXJzJyxcbiAgICAnaGlkZU1vZGUnLFxuICAgICdoaWRlT25NYXNrVGFwJyxcbiAgICAnaGlkZVNjcm9sbGJhcicsXG4gICAgJ2hvcml6b250YWxPdmVyZmxvdycsXG4gICAgJ2h0bWwnLFxuICAgICdpZCcsXG4gICAgJ2luYWN0aXZlQ2hpbGRUYWJJbmRleCcsXG4gICAgJ2luZGV4QmFyJyxcbiAgICAnaW5maW5pdGUnLFxuICAgICdpbmxpbmUnLFxuICAgICdpbm5lckNscycsXG4gICAgJ2lubmVyQ3RIZWlnaHQnLFxuICAgICdpbm5lcldpZHRoJyxcbiAgICAnaW5zdGFuY2VDbHMnLFxuICAgICdpdGVtQnV0dG9uTW9kZScsXG4gICAgJ2l0ZW1DbHMnLFxuICAgICdpdGVtQ29uZmlnJyxcbiAgICAnaXRlbUNvbnRlbnRDbHMnLFxuICAgICdpdGVtRGF0YU1hcCcsXG4gICAgJ2l0ZW1JZCcsXG4gICAgJ2l0ZW1Jbm5lckNscycsXG4gICAgJ2l0ZW1SaXBwbGUnLFxuICAgICdpdGVtcycsXG4gICAgJ2l0ZW1zRm9jdXNhYmxlJyxcbiAgICAnaXRlbVRwbCcsXG4gICAgJ2tleU1hcCcsXG4gICAgJ2tleU1hcEVuYWJsZWQnLFxuICAgICdrZXlNYXBUYXJnZXQnLFxuICAgICdsYXlvdXQnLFxuICAgICdsZWZ0JyxcbiAgICAnbGlzdGVuZXJzJyxcbiAgICAnbG9hZGluZ0hlaWdodCcsXG4gICAgJ2xvYWRpbmdUZXh0JyxcbiAgICAnbWFpbnRhaW5DaGlsZE5vZGVzJyxcbiAgICAnbWFuYWdlQm9yZGVycycsXG4gICAgJ21hcmdpbicsXG4gICAgJ21hcmtEaXJ0eScsXG4gICAgJ21hc2tlZCcsXG4gICAgJ21heEhlaWdodCcsXG4gICAgJ21heEl0ZW1DYWNoZScsXG4gICAgJ21heFdpZHRoJyxcbiAgICAnbWluSGVpZ2h0JyxcbiAgICAnbWluaW11bUJ1ZmZlckRpc3RhbmNlJyxcbiAgICAnbWluV2lkdGgnLFxuICAgICdtb2RhbCcsXG4gICAgJ21vZGVsVmFsaWRhdGlvbicsXG4gICAgJ211bHRpQ29sdW1uU29ydCcsXG4gICAgJ25hbWUnLFxuICAgICduYW1lYWJsZScsXG4gICAgJ25hbWVIb2xkZXInLFxuICAgICdvbkl0ZW1EaXNjbG9zdXJlJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BpbkZvb3RlcnMnLFxuICAgICdwaW5IZWFkZXJzJyxcbiAgICAncGlubmVkRm9vdGVyJyxcbiAgICAncGlubmVkRm9vdGVySGVpZ2h0JyxcbiAgICAncGlubmVkSGVhZGVyJyxcbiAgICAncGlubmVkSGVhZGVySGVpZ2h0JyxcbiAgICAncGx1Z2lucycsXG4gICAgJ3ByZXNzZWREZWxheScsXG4gICAgJ3ByZXZlbnRTZWxlY3Rpb25PbkRpc2Nsb3NlJyxcbiAgICAncHJldmVudFNlbGVjdGlvbk9uVG9vbCcsXG4gICAgJ3B1Ymxpc2hlcycsXG4gICAgJ3JlY29yZCcsXG4gICAgJ3JlZmVyZW5jZScsXG4gICAgJ3JlZmVyZW5jZUhvbGRlcicsXG4gICAgJ3JlbGF0aXZlJyxcbiAgICAncmVuZGVyVG8nLFxuICAgICdyZXNlcnZlU2Nyb2xsYmFyJyxcbiAgICAncmVzZXRGb2N1c1Bvc2l0aW9uJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdyb3dMaW5lcycsXG4gICAgJ3Jvd051bWJlcnMnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2Nyb2xsRG9jaycsXG4gICAgJ3Njcm9sbFRvVG9wT25SZWZyZXNoJyxcbiAgICAnc2VsZWN0YWJsZScsXG4gICAgJ3NlbGVjdGlvbicsXG4gICAgJ3NlbGZBbGlnbicsXG4gICAgJ3Nlc3Npb24nLFxuICAgICdzaGFkb3cnLFxuICAgICdzaGFyZWFibGVOYW1lJyxcbiAgICAnc2hpbScsXG4gICAgJ3Nob3dBbmltYXRpb24nLFxuICAgICdzb3J0YWJsZScsXG4gICAgJ3N0YXRlZnVsJyxcbiAgICAnc3RhdGVmdWxEZWZhdWx0cycsXG4gICAgJ3N0YXRlSWQnLFxuICAgICdzdG9yZScsXG4gICAgJ3N0cmlwZWQnLFxuICAgICdzdHlsZScsXG4gICAgJ3RhYkluZGV4JyxcbiAgICAndGl0bGUnLFxuICAgICd0aXRsZUJhcicsXG4gICAgJ3RvRnJvbnRPblNob3cnLFxuICAgICd0b29sdGlwJyxcbiAgICAndG9wJyxcbiAgICAndG9wUmVuZGVyZWRJbmRleCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHJpZ2dlckN0RXZlbnQnLFxuICAgICd0cmlnZ2VyRXZlbnQnLFxuICAgICd0d29XYXlCaW5kYWJsZScsXG4gICAgJ3VpJyxcbiAgICAndXNlckNscycsXG4gICAgJ3VzZXJTZWxlY3RhYmxlJyxcbiAgICAndXNlU2ltcGxlSXRlbXMnLFxuICAgICd2YXJpYWJsZUhlaWdodHMnLFxuICAgICd2ZXJ0aWNhbE92ZXJmbG93JyxcbiAgICAndmlld01vZGVsJyxcbiAgICAndmlzaWJsZUhlaWdodCcsXG4gICAgJ3Zpc2libGVMZWZ0JyxcbiAgICAndmlzaWJsZVRvcCcsXG4gICAgJ3Zpc2libGVXaWR0aCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dlaWdodGVkJyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5dO1xuICBwdWJsaWMgc3RhdGljIEVWRU5UUzogYW55W10gPSBbXG5cdFx0e25hbWU6J2FjdGl2YXRlJyxwYXJhbWV0ZXJzOiduZXdBY3RpdmVJdGVtLGdyaWQsb2xkQWN0aXZlSXRlbSd9LFxuXHRcdHtuYW1lOidhY3RpdmVJdGVtY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonYWRkJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2VsZWN0aW9uZXh0ZW5kJyxwYXJhbWV0ZXJzOidncmlkLEFuLGV4dGVuc2lvbid9LFxuXHRcdHtuYW1lOidiZWZvcmVzaG93JyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonYmVmb3Jlc3RvcmVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JldG9mcm9udCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonZ3JpZCxldmVudCd9LFxuXHRcdHtuYW1lOidib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidjZWxsc2VsZWN0aW9uJyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGlvbid9LFxuXHRcdHtuYW1lOidjZW50ZXJlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NoaWxkZG91YmxldGFwJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkbG9uZ3ByZXNzJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkbW91c2VlbnRlcicscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZG1vdXNlbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGRzaW5nbGV0YXAnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0YXAnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0YXBob2xkJyxwYXJhbWV0ZXJzOidncmlkLGxvY2F0aW9uJ30sXG5cdFx0e25hbWU6J2NoaWxkdG91Y2hjYW5jZWwnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY2hpbGR0b3VjaGVuZCcscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZHRvdWNobW92ZScscGFyYW1ldGVyczonZ3JpZCxsb2NhdGlvbid9LFxuXHRcdHtuYW1lOidjaGlsZHRvdWNoc3RhcnQnLHBhcmFtZXRlcnM6J2dyaWQsbG9jYXRpb24nfSxcblx0XHR7bmFtZTonY29sdW1uYWRkJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixpbmRleCd9LFxuXHRcdHtuYW1lOidjb2x1bW5oaWRlJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbid9LFxuXHRcdHtuYW1lOidjb2x1bW5tZW51Y3JlYXRlZCcscGFyYW1ldGVyczonZ3JpZCxjb2x1bW4sbWVudSd9LFxuXHRcdHtuYW1lOidjb2x1bW5tb3ZlJyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixmcm9tSW5kZXgsdG9JbmRleCd9LFxuXHRcdHtuYW1lOidjb2x1bW5yZW1vdmUnLHBhcmFtZXRlcnM6J2dyaWQsY29sdW1uJ30sXG5cdFx0e25hbWU6J2NvbHVtbnJlc2l6ZScscGFyYW1ldGVyczonZ3JpZCxjb2x1bW4sd2lkdGgnfSxcblx0XHR7bmFtZTonY29sdW1uc2VsZWN0aW9uJyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGlvbid9LFxuXHRcdHtuYW1lOidjb2x1bW5zaG93JyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbid9LFxuXHRcdHtuYW1lOidjb2x1bW5zb3J0JyxwYXJhbWV0ZXJzOidncmlkLGNvbHVtbixkaXJlY3Rpb24nfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonb2xkQWN0aXZlSXRlbSxncmlkLG5ld0FjdGl2ZUl0ZW0nfSxcblx0XHR7bmFtZTonZGVzZWxlY3QnLHBhcmFtZXRlcnM6J2dyaWQscmVjb3Jkcyd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkaXNjbG9zZScscGFyYW1ldGVyczonbGlzdCxyZWNvcmQsdGFyZ2V0LGluZGV4LGV2ZW50J30sXG5cdFx0e25hbWU6J2RvY2tlZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2VyYXNlZCcscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2Zsb2F0aW5nY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidmb2N1cycscGFyYW1ldGVyczonZ3JpZCxldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidncmlkLGV2ZW50J30sXG5cdFx0e25hbWU6J2ZvY3VzbGVhdmUnLHBhcmFtZXRlcnM6J2dyaWQsZXZlbnQnfSxcblx0XHR7bmFtZTonZnVsbHNjcmVlbicscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2hlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGRlbmNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2hpZGUnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidpbml0aWFsaXplJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaXRlbWFjdGlvbicscGFyYW1ldGVyczonZ3JpZCxpbmRleCxyZWNvcmQsYWN0aW9uJ30sXG5cdFx0e25hbWU6J2l0ZW1kb3VibGV0YXAnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW1sb25ncHJlc3MnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW1tb3VzZWVudGVyJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtbW91c2VsZWF2ZScscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXNpbmdsZXRhcCcscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXN3aXBlJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdGFwJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdGFwaG9sZCcscGFyYW1ldGVyczonZ3JpZCxpbmRleCx0YXJnZXQscmVjb3JkLGUnfSxcblx0XHR7bmFtZTonaXRlbXRvdWNoY2FuY2VsJyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidpdGVtdG91Y2hlbmQnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW10b3VjaG1vdmUnLHBhcmFtZXRlcnM6J2dyaWQsaW5kZXgsdGFyZ2V0LHJlY29yZCxlJ30sXG5cdFx0e25hbWU6J2l0ZW10b3VjaHN0YXJ0JyxwYXJhbWV0ZXJzOidncmlkLGluZGV4LHRhcmdldCxyZWNvcmQsZSd9LFxuXHRcdHtuYW1lOidsZWZ0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbWF4V2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5IZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21vdmUnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidtb3ZlZCcscGFyYW1ldGVyczonc2VuZGVyLGNvbnRhaW5lcix0b0luZGV4LGZyb21JbmRleCd9LFxuXHRcdHtuYW1lOiduYXZpZ2F0ZScscGFyYW1ldGVyczonZ3JpZCx0byxmcm9tJ30sXG5cdFx0e25hbWU6J29yaWVudGF0aW9uY2hhbmdlJyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZToncGFpbnRlZCcscGFyYW1ldGVyczonc2VuZGVyLGVsZW1lbnQnfSxcblx0XHR7bmFtZToncG9zaXRpb25lZGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZToncmVmcmVzaCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidyZW1vdmVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsY29udGFpbmVyLGluZGV4J30sXG5cdFx0e25hbWU6J3JlbmRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidncmlkLGl0ZW0scmVuZGVyZWQnfSxcblx0XHR7bmFtZToncmVzaXplJyxwYXJhbWV0ZXJzOidlbGVtZW50LGluZm8nfSxcblx0XHR7bmFtZToncmlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidzY3JvbGxhYmxlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2VsZWN0JyxwYXJhbWV0ZXJzOidncmlkLHNlbGVjdGVkJ30sXG5cdFx0e25hbWU6J3NlbGVjdGlvbmV4dGVuZGVyZHJhZycscGFyYW1ldGVyczonZ3JpZCxBbixleHRlbnNpb24nfSxcblx0XHR7bmFtZTonc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J3N0b3JlY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondG9mcm9udCcscGFyYW1ldGVyczonZ3JpZCd9LFxuXHRcdHtuYW1lOid0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOid1cGRhdGVkYXRhJyxwYXJhbWV0ZXJzOidzZW5kZXIsbmV3RGF0YSd9LFxuXHRcdHtuYW1lOid3aWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3JlYWR5JyxwYXJhbWV0ZXJzOicnfVxuXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYWRkJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcmlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnYmVmb3Jlc2VsZWN0aW9uZXh0ZW5kJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXN0b3JlY2hhbmdlJyxcblx0XHQnYmVmb3JldG9mcm9udCcsXG5cdFx0J2JlZm9yZXRvcGNoYW5nZScsXG5cdFx0J2JlZm9yZXdpZHRoY2hhbmdlJyxcblx0XHQnYmx1cicsXG5cdFx0J2JvdHRvbWNoYW5nZScsXG5cdFx0J2NlbGxzZWxlY3Rpb24nLFxuXHRcdCdjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2NoaWxkZG91YmxldGFwJyxcblx0XHQnY2hpbGRsb25ncHJlc3MnLFxuXHRcdCdjaGlsZG1vdXNlZW50ZXInLFxuXHRcdCdjaGlsZG1vdXNlbGVhdmUnLFxuXHRcdCdjaGlsZHNpbmdsZXRhcCcsXG5cdFx0J2NoaWxkdGFwJyxcblx0XHQnY2hpbGR0YXBob2xkJyxcblx0XHQnY2hpbGR0b3VjaGNhbmNlbCcsXG5cdFx0J2NoaWxkdG91Y2hlbmQnLFxuXHRcdCdjaGlsZHRvdWNobW92ZScsXG5cdFx0J2NoaWxkdG91Y2hzdGFydCcsXG5cdFx0J2NvbHVtbmFkZCcsXG5cdFx0J2NvbHVtbmhpZGUnLFxuXHRcdCdjb2x1bW5tZW51Y3JlYXRlZCcsXG5cdFx0J2NvbHVtbm1vdmUnLFxuXHRcdCdjb2x1bW5yZW1vdmUnLFxuXHRcdCdjb2x1bW5yZXNpemUnLFxuXHRcdCdjb2x1bW5zZWxlY3Rpb24nLFxuXHRcdCdjb2x1bW5zaG93Jyxcblx0XHQnY29sdW1uc29ydCcsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXNlbGVjdCcsXG5cdFx0J2Rlc3Ryb3knLFxuXHRcdCdkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2Rpc2Nsb3NlJyxcblx0XHQnZG9ja2VkY2hhbmdlJyxcblx0XHQnZXJhc2VkJyxcblx0XHQnZmxvYXRpbmdjaGFuZ2UnLFxuXHRcdCdmb2N1cycsXG5cdFx0J2ZvY3VzZW50ZXInLFxuXHRcdCdmb2N1c2xlYXZlJyxcblx0XHQnZnVsbHNjcmVlbicsXG5cdFx0J2hlaWdodGNoYW5nZScsXG5cdFx0J2hpZGRlbmNoYW5nZScsXG5cdFx0J2hpZGUnLFxuXHRcdCdpbml0aWFsaXplJyxcblx0XHQnaXRlbWFjdGlvbicsXG5cdFx0J2l0ZW1kb3VibGV0YXAnLFxuXHRcdCdpdGVtbG9uZ3ByZXNzJyxcblx0XHQnaXRlbW1vdXNlZW50ZXInLFxuXHRcdCdpdGVtbW91c2VsZWF2ZScsXG5cdFx0J2l0ZW1zaW5nbGV0YXAnLFxuXHRcdCdpdGVtc3dpcGUnLFxuXHRcdCdpdGVtdGFwJyxcblx0XHQnaXRlbXRhcGhvbGQnLFxuXHRcdCdpdGVtdG91Y2hjYW5jZWwnLFxuXHRcdCdpdGVtdG91Y2hlbmQnLFxuXHRcdCdpdGVtdG91Y2htb3ZlJyxcblx0XHQnaXRlbXRvdWNoc3RhcnQnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmUnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J25hdmlnYXRlJyxcblx0XHQnb3JpZW50YXRpb25jaGFuZ2UnLFxuXHRcdCdwYWludGVkJyxcblx0XHQncG9zaXRpb25lZGNoYW5nZScsXG5cdFx0J3JlZnJlc2gnLFxuXHRcdCdyZW1vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyZWRjaGFuZ2UnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzZWxlY3QnLFxuXHRcdCdzZWxlY3Rpb25leHRlbmRlcmRyYWcnLFxuXHRcdCdzaG93Jyxcblx0XHQnc3RvcmVjaGFuZ2UnLFxuXHRcdCd0b2Zyb250Jyxcblx0XHQndG9wY2hhbmdlJyxcblx0XHQndXBkYXRlZGF0YScsXG5cdFx0J3dpZHRoY2hhbmdlJyxcblx0XHQncmVhZHknXG5dO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnZ3JpZCcsIFxuICBpbnB1dHM6IGdyaWRNZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiBncmlkTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dEdyaWRDb21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRHcmlkQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsZ3JpZE1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdChncmlkTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIHRoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICAgIH1cbn0iLCJpbXBvcnQge1xuICBPbkluaXQsXG4gIEFmdGVyQ29udGVudEluaXQsXG4gIE9uQ2hhbmdlcyxcbiAgQ29tcG9uZW50LFxuICBFbGVtZW50UmVmLFxuICBmb3J3YXJkUmVmXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgYmFzZSB9IGZyb20gJy4vYmFzZSc7XG5leHBvcnQgY2xhc3MgdHJhbnNpdGlvbk1ldGFEYXRhIHtcbiAgcHVibGljIHN0YXRpYyBYVFlQRTogc3RyaW5nID0gJ3RyYW5zaXRpb24nO1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVNPQkpFQ1Q6IGFueSA9IHtcbiAgICBcInR5cGVcIjogXCJzbGlkZS9yZXZlYWwvY292ZXIvZmFkZS9wb3BcIixcbiAgICBcImR1cmF0aW9uXCI6IFwiTnVtYmVyXCIsXG4gICAgXCJlYXNpbmdcIjogXCJTdHJpbmdcIixcbiAgICBcImRpcmVjdGlvblwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYmluZERpcmVjdGlvblRvTG9jYXRpb25cIjogXCJCb29sZWFuXCIsXG5cbiAgICBcImFjdGl2ZUNoaWxkVGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcImFjdGl2ZUl0ZW1cIjogXCJFeHQuQ29tcG9uZW50L09iamVjdC9TdHJpbmcvTnVtYmVyXCIsXG4gICAgXCJhbGxvd0ZvY3VzaW5nRGlzYWJsZWRDaGlsZHJlblwiOiBcIkJvb2xlYW5cIixcbiAgICBcImFsd2F5c09uVG9wXCI6IFwiQm9vbGVhbi9OdW1iZXJcIixcbiAgICBcImFyaWFBdHRyaWJ1dGVzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJhcmlhRGVzY3JpYmVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImFyaWFMYWJlbFwiOiBcIlN0cmluZ1wiLFxuICAgIFwiYXJpYUxhYmVsbGVkQnlcIjogXCJTdHJpbmdcIixcbiAgICBcImF1dG9EZXN0cm95XCI6IFwiQm9vbGVhblwiLFxuICAgIFwiYXV0b1NpemVcIjogXCJCb29sZWFuXCIsXG4gICAgXCJheGlzTG9ja1wiOiBcIkJvb2xlYW5cIixcbiAgICBcImJpbmRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJib3JkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJib3R0b21cIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJjYXJkU3dpdGNoQW5pbWF0aW9uXCI6IFwiU3RyaW5nL09iamVjdC9Cb29sZWFuXCIsXG4gICAgXCJjZW50ZXJlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiY29uc3RyYWluQWxpZ25cIjogXCJTdHJpbmcvRXh0LnV0aWwuUmVnaW9uL0V4dC5kb20uRWxlbWVudFwiLFxuICAgIFwiY29udGVudEVsXCI6IFwiRXh0LmRvbS5FbGVtZW50L0hUTUxFbGVtZW50L1N0cmluZ1wiLFxuICAgIFwiY29udHJvbFwiOiBcIk9iamVjdFwiLFxuICAgIFwiY29udHJvbGxlclwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3Q29udHJvbGxlclwiLFxuICAgIFwiZGF0YVwiOiBcIk9iamVjdFwiLFxuICAgIFwiZGVmYXVsdEZvY3VzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJkZWZhdWx0TGlzdGVuZXJTY29wZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcImRlZmF1bHRzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJkZWZhdWx0VHlwZVwiOiBcIlN0cmluZ1wiLFxuICAgIFwiZGlzYWJsZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkaXNwbGF5ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJkb2NrZWRcIjogXCJTdHJpbmdcIixcbiAgICBcImRyYWdnYWJsZVwiOiBcIkJvb2xlYW4vT2JqZWN0L0V4dC5kcmFnLlNvdXJjZVwiLFxuICAgIFwiZW50ZXJBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImV2ZW50SGFuZGxlcnNcIjogXCJPYmplY3RcIixcbiAgICBcImV4aXRBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcImZsZXhcIjogXCJOdW1iZXIvU3RyaW5nL09iamVjdFwiLFxuICAgIFwiZmxvYXRlZFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzYWJsZUNvbnRhaW5lclwiOiBcIkJvb2xlYW5cIixcbiAgICBcImZvY3VzQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJmdWxsc2NyZWVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGVpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwiaGlkZGVuXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaGlkZUFuaW1hdGlvblwiOiBcIlN0cmluZy9NaXhlZFwiLFxuICAgIFwiaGlkZU1vZGVcIjogXCInY2xpcCcvJ2Rpc3BsYXknLydvZmZzZXRzJy8nb3BhY2l0eScvJ3Zpc2liaWxpdHknXCIsXG4gICAgXCJoaWRlT25NYXNrVGFwXCI6IFwiQm9vbGVhblwiLFxuICAgIFwiaHRtbFwiOiBcIlN0cmluZy9FeHQuZG9tLkVsZW1lbnQvSFRNTEVsZW1lbnRcIixcbiAgICBcImlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbmFjdGl2ZUNoaWxkVGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcImlubmVyQ2xzXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpbnN0YW5jZUNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwiaXRlbUlkXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJpdGVtc1wiOiBcIkFycmF5L09iamVjdFwiLFxuICAgIFwia2V5TWFwXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJrZXlNYXBFbmFibGVkXCI6IFwiQm9vbGVhblwiLFxuICAgIFwia2V5TWFwVGFyZ2V0XCI6IFwiU3RyaW5nXCIsXG4gICAgXCJsYXlvdXRcIjogXCJPYmplY3QvU3RyaW5nXCIsXG4gICAgXCJsZWZ0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibGlzdGVuZXJzXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJtYW5hZ2VCb3JkZXJzXCI6IFwiQm9vbGVhblwiLFxuICAgIFwibWFyZ2luXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibWFza2VkXCI6IFwiQm9vbGVhbi9PYmplY3QvRXh0Lk1hc2svRXh0LkxvYWRNYXNrXCIsXG4gICAgXCJtYXhIZWlnaHRcIjogXCJOdW1iZXIvU3RyaW5nXCIsXG4gICAgXCJtYXhXaWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1pbkhlaWdodFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcIm1pbldpZHRoXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwibW9kYWxcIjogXCJCb29sZWFuXCIsXG4gICAgXCJtb2RlbFZhbGlkYXRpb25cIjogXCJCb29sZWFuXCIsXG4gICAgXCJuYW1lXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJuYW1lYWJsZVwiOiBcIkJvb2xlYW5cIixcbiAgICBcIm5hbWVIb2xkZXJcIjogXCJCb29sZWFuXCIsXG4gICAgXCJwYWRkaW5nXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicGx1Z2luc1wiOiBcIkFycmF5L0V4dC5lbnVtcy5QbHVnaW4vT2JqZWN0L0V4dC5wbHVnaW4uQWJzdHJhY3RcIixcbiAgICBcInB1Ymxpc2hlc1wiOiBcIlN0cmluZy9TdHJpbmdbXS9PYmplY3RcIixcbiAgICBcInJlY29yZFwiOiBcIkV4dC5kYXRhLk1vZGVsXCIsXG4gICAgXCJyZWZlcmVuY2VcIjogXCJTdHJpbmdcIixcbiAgICBcInJlZmVyZW5jZUhvbGRlclwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJlbGF0aXZlXCI6IFwiQm9vbGVhblwiLFxuICAgIFwicmVuZGVyVG9cIjogXCJFeHQuZG9tLkVsZW1lbnRcIixcbiAgICBcInJlc2V0Rm9jdXNQb3NpdGlvblwiOiBcIkJvb2xlYW5cIixcbiAgICBcInJpZ2h0XCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwicmlwcGxlXCI6IFwiQm9vbGVhbi9PYmplY3QvU3RyaW5nXCIsXG4gICAgXCJzY3JvbGxhYmxlXCI6IFwiQm9vbGVhbi9TdHJpbmcvT2JqZWN0XCIsXG4gICAgXCJzZWxmQWxpZ25cIjogXCJTdHJpbmdcIixcbiAgICBcInNlc3Npb25cIjogXCJCb29sZWFuL09iamVjdC9FeHQuZGF0YS5TZXNzaW9uXCIsXG4gICAgXCJzaGFkb3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJzaGFyZWFibGVOYW1lXCI6IFwiQm9vbGVhblwiLFxuICAgIFwic2hpbVwiOiBcIkJvb2xlYW5cIixcbiAgICBcInNob3dBbmltYXRpb25cIjogXCJTdHJpbmcvTWl4ZWRcIixcbiAgICBcInN0eWxlXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidGFiSW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInRvRnJvbnRPblNob3dcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ0b29sdGlwXCI6IFwiU3RyaW5nL09iamVjdFwiLFxuICAgIFwidG9wXCI6IFwiTnVtYmVyL1N0cmluZ1wiLFxuICAgIFwidG91Y2hBY3Rpb25cIjogXCJPYmplY3RcIixcbiAgICBcInRwbFwiOiBcIlN0cmluZy9TdHJpbmdbXS9FeHQuVGVtcGxhdGUvRXh0LlhUZW1wbGF0ZVtdXCIsXG4gICAgXCJ0cGxXcml0ZU1vZGVcIjogXCJTdHJpbmdcIixcbiAgICBcInRyYW5zbGF0YWJsZVwiOiBcIk9iamVjdFwiLFxuICAgIFwidHdvV2F5QmluZGFibGVcIjogXCJTdHJpbmcvU3RyaW5nW10vT2JqZWN0XCIsXG4gICAgXCJ1aVwiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlckNsc1wiOiBcIlN0cmluZy9TdHJpbmdbXVwiLFxuICAgIFwidXNlclNlbGVjdGFibGVcIjogXCJCb29sZWFuL1N0cmluZy9PYmplY3RcIixcbiAgICBcInZpZXdNb2RlbFwiOiBcIlN0cmluZy9PYmplY3QvRXh0LmFwcC5WaWV3TW9kZWxcIixcbiAgICBcIndlaWdodFwiOiBcIk51bWJlclwiLFxuICAgIFwid2VpZ2h0ZWRcIjogXCJCb29sZWFuXCIsXG4gICAgXCJ3aWR0aFwiOiBcIk51bWJlci9TdHJpbmdcIixcbiAgICBcInhcIjogXCJOdW1iZXJcIixcbiAgICBcInh0eXBlXCI6IFwiU3RyaW5nXCIsXG4gICAgXCJ5XCI6IFwiTnVtYmVyXCIsXG4gICAgXCJ6SW5kZXhcIjogXCJOdW1iZXJcIixcbiAgICBcInBsYXRmb3JtQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJyZXNwb25zaXZlQ29uZmlnXCI6IFwiT2JqZWN0XCIsXG4gICAgXCJmaXRUb1BhcmVudFwiOiBcIkJvb2xlYW5cIixcbiAgICBcImNvbmZpZ1wiOiBcIk9iamVjdFwiLFxuXG5cblxuICB9O1xuICBwdWJsaWMgc3RhdGljIFBST1BFUlRJRVM6IHN0cmluZ1tdID0gW1xuICAgICd0eXBlJyxcbiAgICAnZHVyYXRpb24nLFxuICAgICdlYXNpbmcnLFxuICAgICdkaXJlY3Rpb24nLFxuICAgICdiaW5kRGlyZWN0aW9uVG9Mb2NhdGlvbicsXG5cbiAgICAgICAgJ2FjdGl2ZUNoaWxkVGFiSW5kZXgnLFxuICAgICdhY3RpdmVJdGVtJyxcbiAgICAnYWxsb3dGb2N1c2luZ0Rpc2FibGVkQ2hpbGRyZW4nLFxuICAgICdhbHdheXNPblRvcCcsXG4gICAgJ2FyaWFBdHRyaWJ1dGVzJyxcbiAgICAnYXJpYURlc2NyaWJlZEJ5JyxcbiAgICAnYXJpYUxhYmVsJyxcbiAgICAnYXJpYUxhYmVsbGVkQnknLFxuICAgICdhdXRvRGVzdHJveScsXG4gICAgJ2F1dG9TaXplJyxcbiAgICAnYXhpc0xvY2snLFxuICAgICdiaW5kJyxcbiAgICAnYm9yZGVyJyxcbiAgICAnYm90dG9tJyxcbiAgICAnY2FyZFN3aXRjaEFuaW1hdGlvbicsXG4gICAgJ2NlbnRlcmVkJyxcbiAgICAnY2xzJyxcbiAgICAnY29uc3RyYWluQWxpZ24nLFxuICAgICdjb250ZW50RWwnLFxuICAgICdjb250cm9sJyxcbiAgICAnY29udHJvbGxlcicsXG4gICAgJ2RhdGEnLFxuICAgICdkZWZhdWx0Rm9jdXMnLFxuICAgICdkZWZhdWx0TGlzdGVuZXJTY29wZScsXG4gICAgJ2RlZmF1bHRzJyxcbiAgICAnZGVmYXVsdFR5cGUnLFxuICAgICdkaXNhYmxlZCcsXG4gICAgJ2Rpc3BsYXllZCcsXG4gICAgJ2RvY2tlZCcsXG4gICAgJ2RyYWdnYWJsZScsXG4gICAgJ2VudGVyQW5pbWF0aW9uJyxcbiAgICAnZXZlbnRIYW5kbGVycycsXG4gICAgJ2V4aXRBbmltYXRpb24nLFxuICAgICdmbGV4JyxcbiAgICAnZmxvYXRlZCcsXG4gICAgJ2ZvY3VzYWJsZUNvbnRhaW5lcicsXG4gICAgJ2ZvY3VzQ2xzJyxcbiAgICAnZnVsbHNjcmVlbicsXG4gICAgJ2hlaWdodCcsXG4gICAgJ2hpZGRlbicsXG4gICAgJ2hpZGVBbmltYXRpb24nLFxuICAgICdoaWRlTW9kZScsXG4gICAgJ2hpZGVPbk1hc2tUYXAnLFxuICAgICdodG1sJyxcbiAgICAnaWQnLFxuICAgICdpbmFjdGl2ZUNoaWxkVGFiSW5kZXgnLFxuICAgICdpbm5lckNscycsXG4gICAgJ2luc3RhbmNlQ2xzJyxcbiAgICAnaXRlbUlkJyxcbiAgICAnaXRlbXMnLFxuICAgICdrZXlNYXAnLFxuICAgICdrZXlNYXBFbmFibGVkJyxcbiAgICAna2V5TWFwVGFyZ2V0JyxcbiAgICAnbGF5b3V0JyxcbiAgICAnbGVmdCcsXG4gICAgJ2xpc3RlbmVycycsXG4gICAgJ21hbmFnZUJvcmRlcnMnLFxuICAgICdtYXJnaW4nLFxuICAgICdtYXNrZWQnLFxuICAgICdtYXhIZWlnaHQnLFxuICAgICdtYXhXaWR0aCcsXG4gICAgJ21pbkhlaWdodCcsXG4gICAgJ21pbldpZHRoJyxcbiAgICAnbW9kYWwnLFxuICAgICdtb2RlbFZhbGlkYXRpb24nLFxuICAgICduYW1lJyxcbiAgICAnbmFtZWFibGUnLFxuICAgICduYW1lSG9sZGVyJyxcbiAgICAncGFkZGluZycsXG4gICAgJ3BsdWdpbnMnLFxuICAgICdwdWJsaXNoZXMnLFxuICAgICdyZWNvcmQnLFxuICAgICdyZWZlcmVuY2UnLFxuICAgICdyZWZlcmVuY2VIb2xkZXInLFxuICAgICdyZWxhdGl2ZScsXG4gICAgJ3JlbmRlclRvJyxcbiAgICAncmVzZXRGb2N1c1Bvc2l0aW9uJyxcbiAgICAncmlnaHQnLFxuICAgICdyaXBwbGUnLFxuICAgICdzY3JvbGxhYmxlJyxcbiAgICAnc2VsZkFsaWduJyxcbiAgICAnc2Vzc2lvbicsXG4gICAgJ3NoYWRvdycsXG4gICAgJ3NoYXJlYWJsZU5hbWUnLFxuICAgICdzaGltJyxcbiAgICAnc2hvd0FuaW1hdGlvbicsXG4gICAgJ3N0eWxlJyxcbiAgICAndGFiSW5kZXgnLFxuICAgICd0b0Zyb250T25TaG93JyxcbiAgICAndG9vbHRpcCcsXG4gICAgJ3RvcCcsXG4gICAgJ3RvdWNoQWN0aW9uJyxcbiAgICAndHBsJyxcbiAgICAndHBsV3JpdGVNb2RlJyxcbiAgICAndHJhbnNsYXRhYmxlJyxcbiAgICAndHdvV2F5QmluZGFibGUnLFxuICAgICd1aScsXG4gICAgJ3VzZXJDbHMnLFxuICAgICd1c2VyU2VsZWN0YWJsZScsXG4gICAgJ3ZpZXdNb2RlbCcsXG4gICAgJ3dlaWdodCcsXG4gICAgJ3dlaWdodGVkJyxcbiAgICAnd2lkdGgnLFxuICAgICd4JyxcbiAgICAneHR5cGUnLFxuICAgICd5JyxcbiAgICAnekluZGV4JyxcbiAgICAncGxhdGZvcm1Db25maWcnLFxuICAgICdyZXNwb25zaXZlQ29uZmlnJyxcbiAgICAnZml0VG9QYXJlbnQnLFxuICAgICdjb25maWcnXG5cblxuXG4gIF07XG4gIHB1YmxpYyBzdGF0aWMgRVZFTlRTOiBhbnlbXSA9IFtcblx0XHR7bmFtZTonYWN0aXZhdGUnLHBhcmFtZXRlcnM6J25ld0FjdGl2ZUl0ZW0sY29udGFpbmVyLG9sZEFjdGl2ZUl0ZW0nfSxcblx0XHR7bmFtZTonYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2FkZCcscGFyYW1ldGVyczonY29udGFpbmVyLGl0ZW0saW5kZXgnfSxcblx0XHR7bmFtZTonYWRkZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZTonYmVmb3JlYWN0aXZlSXRlbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVib3R0b21jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlY2VudGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlZG9ja2VkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZWhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlaGlkZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZWxlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1heFdpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZW1pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVtaW5XaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlLHVuZGVmaW5lZCd9LFxuXHRcdHtuYW1lOidiZWZvcmVvcmllbnRhdGlvbmNoYW5nZScscGFyYW1ldGVyczonJ30sXG5cdFx0e25hbWU6J2JlZm9yZXJpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUsdW5kZWZpbmVkJ30sXG5cdFx0e25hbWU6J2JlZm9yZXNjcm9sbGFibGVjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jlc2hvdycscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2JlZm9yZXRvZnJvbnQnLHBhcmFtZXRlcnM6J2NvbnRhaW5lcid9LFxuXHRcdHtuYW1lOidiZWZvcmV0b3BjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmVmb3Jld2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSx1bmRlZmluZWQnfSxcblx0XHR7bmFtZTonYmx1cicscGFyYW1ldGVyczonY29udGFpbmVyLGV2ZW50J30sXG5cdFx0e25hbWU6J2JvdHRvbWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J2NlbnRlcmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonZGVhY3RpdmF0ZScscGFyYW1ldGVyczonb2xkQWN0aXZlSXRlbSxjb250YWluZXIsbmV3QWN0aXZlSXRlbSd9LFxuXHRcdHtuYW1lOidkZXN0cm95JyxwYXJhbWV0ZXJzOicnfSxcblx0XHR7bmFtZTonZGlzYWJsZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidkb2NrZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidlcmFzZWQnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidmbG9hdGluZ2NoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHBvc2l0aW9uZWQnfSxcblx0XHR7bmFtZTonZm9jdXMnLHBhcmFtZXRlcnM6J2NvbnRhaW5lcixldmVudCd9LFxuXHRcdHtuYW1lOidmb2N1c2VudGVyJyxwYXJhbWV0ZXJzOidjb250YWluZXIsZXZlbnQnfSxcblx0XHR7bmFtZTonZm9jdXNsZWF2ZScscGFyYW1ldGVyczonY29udGFpbmVyLGV2ZW50J30sXG5cdFx0e25hbWU6J2Z1bGxzY3JlZW4nLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOidoZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRkZW5jaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidoaWRlJyxwYXJhbWV0ZXJzOidzZW5kZXInfSxcblx0XHR7bmFtZTonaW5pdGlhbGl6ZScscGFyYW1ldGVyczonc2VuZGVyJ30sXG5cdFx0e25hbWU6J2xlZnRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhIZWlnaHRjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidtYXhXaWR0aGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbkhlaWdodGNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J21pbldpZHRoY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonbW92ZScscGFyYW1ldGVyczonY29udGFpbmVyLGl0ZW0sdG9JbmRleCxmcm9tSW5kZXgnfSxcblx0XHR7bmFtZTonbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsdG9JbmRleCxmcm9tSW5kZXgnfSxcblx0XHR7bmFtZTonb3JpZW50YXRpb25jaGFuZ2UnLHBhcmFtZXRlcnM6Jyd9LFxuXHRcdHtuYW1lOidwYWludGVkJyxwYXJhbWV0ZXJzOidzZW5kZXIsZWxlbWVudCd9LFxuXHRcdHtuYW1lOidwb3NpdGlvbmVkY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIscG9zaXRpb25lZCd9LFxuXHRcdHtuYW1lOidyZW1vdmUnLHBhcmFtZXRlcnM6J2NvbnRhaW5lcixpdGVtLGluZGV4J30sXG5cdFx0e25hbWU6J3JlbW92ZWQnLHBhcmFtZXRlcnM6J3NlbmRlcixjb250YWluZXIsaW5kZXgnfSxcblx0XHR7bmFtZToncmVuZGVyZWRjaGFuZ2UnLHBhcmFtZXRlcnM6J2NvbnRhaW5lcixpdGVtLHJlbmRlcmVkJ30sXG5cdFx0e25hbWU6J3Jlc2l6ZScscGFyYW1ldGVyczonZWxlbWVudCxpbmZvJ30sXG5cdFx0e25hbWU6J3JpZ2h0Y2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTonc2Nyb2xsYWJsZWNoYW5nZScscGFyYW1ldGVyczonc2VuZGVyLHZhbHVlLG9sZFZhbHVlJ30sXG5cdFx0e25hbWU6J3Nob3cnLHBhcmFtZXRlcnM6J3NlbmRlcid9LFxuXHRcdHtuYW1lOid0b2Zyb250JyxwYXJhbWV0ZXJzOidjb250YWluZXInfSxcblx0XHR7bmFtZTondG9wY2hhbmdlJyxwYXJhbWV0ZXJzOidzZW5kZXIsdmFsdWUsb2xkVmFsdWUnfSxcblx0XHR7bmFtZTondXBkYXRlZGF0YScscGFyYW1ldGVyczonc2VuZGVyLG5ld0RhdGEnfSxcblx0XHR7bmFtZTond2lkdGhjaGFuZ2UnLHBhcmFtZXRlcnM6J3NlbmRlcix2YWx1ZSxvbGRWYWx1ZSd9LFxuXHRcdHtuYW1lOidyZWFkeScscGFyYW1ldGVyczonJ31cbiAgXTtcbiAgcHVibGljIHN0YXRpYyBFVkVOVE5BTUVTOiBzdHJpbmdbXSA9IFtcblx0XHQnYWN0aXZhdGUnLFxuXHRcdCdhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYWRkJyxcblx0XHQnYWRkZWQnLFxuXHRcdCdiZWZvcmVhY3RpdmVJdGVtY2hhbmdlJyxcblx0XHQnYmVmb3JlYm90dG9tY2hhbmdlJyxcblx0XHQnYmVmb3JlY2VudGVyZWRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVkaXNhYmxlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWRvY2tlZGNoYW5nZScsXG5cdFx0J2JlZm9yZWhlaWdodGNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGRlbmNoYW5nZScsXG5cdFx0J2JlZm9yZWhpZGUnLFxuXHRcdCdiZWZvcmVsZWZ0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnYmVmb3JlbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVtaW5XaWR0aGNoYW5nZScsXG5cdFx0J2JlZm9yZW9yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQnYmVmb3JlcmlnaHRjaGFuZ2UnLFxuXHRcdCdiZWZvcmVzY3JvbGxhYmxlY2hhbmdlJyxcblx0XHQnYmVmb3Jlc2hvdycsXG5cdFx0J2JlZm9yZXRvZnJvbnQnLFxuXHRcdCdiZWZvcmV0b3BjaGFuZ2UnLFxuXHRcdCdiZWZvcmV3aWR0aGNoYW5nZScsXG5cdFx0J2JsdXInLFxuXHRcdCdib3R0b21jaGFuZ2UnLFxuXHRcdCdjZW50ZXJlZGNoYW5nZScsXG5cdFx0J2RlYWN0aXZhdGUnLFxuXHRcdCdkZXN0cm95Jyxcblx0XHQnZGlzYWJsZWRjaGFuZ2UnLFxuXHRcdCdkb2NrZWRjaGFuZ2UnLFxuXHRcdCdlcmFzZWQnLFxuXHRcdCdmbG9hdGluZ2NoYW5nZScsXG5cdFx0J2ZvY3VzJyxcblx0XHQnZm9jdXNlbnRlcicsXG5cdFx0J2ZvY3VzbGVhdmUnLFxuXHRcdCdmdWxsc2NyZWVuJyxcblx0XHQnaGVpZ2h0Y2hhbmdlJyxcblx0XHQnaGlkZGVuY2hhbmdlJyxcblx0XHQnaGlkZScsXG5cdFx0J2luaXRpYWxpemUnLFxuXHRcdCdsZWZ0Y2hhbmdlJyxcblx0XHQnbWF4SGVpZ2h0Y2hhbmdlJyxcblx0XHQnbWF4V2lkdGhjaGFuZ2UnLFxuXHRcdCdtaW5IZWlnaHRjaGFuZ2UnLFxuXHRcdCdtaW5XaWR0aGNoYW5nZScsXG5cdFx0J21vdmUnLFxuXHRcdCdtb3ZlZCcsXG5cdFx0J29yaWVudGF0aW9uY2hhbmdlJyxcblx0XHQncGFpbnRlZCcsXG5cdFx0J3Bvc2l0aW9uZWRjaGFuZ2UnLFxuXHRcdCdyZW1vdmUnLFxuXHRcdCdyZW1vdmVkJyxcblx0XHQncmVuZGVyZWRjaGFuZ2UnLFxuXHRcdCdyZXNpemUnLFxuXHRcdCdyaWdodGNoYW5nZScsXG5cdFx0J3Njcm9sbGFibGVjaGFuZ2UnLFxuXHRcdCdzaG93Jyxcblx0XHQndG9mcm9udCcsXG5cdFx0J3RvcGNoYW5nZScsXG5cdFx0J3VwZGF0ZWRhdGEnLFxuXHRcdCd3aWR0aGNoYW5nZScsXG5cdFx0J3JlYWR5J1xuICBdO1xufVxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAndHJhbnNpdGlvbicsIFxuICBpbnB1dHM6IHRyYW5zaXRpb25NZXRhRGF0YS5QUk9QRVJUSUVTLFxuICBvdXRwdXRzOiB0cmFuc2l0aW9uTWV0YURhdGEuRVZFTlROQU1FUyxcbiAgcHJvdmlkZXJzOiBbe3Byb3ZpZGU6IGJhc2UsIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IEV4dFRyYW5zaXRpb25Db21wb25lbnQpfV0sXG4gIHRlbXBsYXRlOiAnPG5nLXRlbXBsYXRlICNkeW5hbWljPjwvbmctdGVtcGxhdGU+J1xufSlcbmV4cG9ydCBjbGFzcyBFeHRUcmFuc2l0aW9uQ29tcG9uZW50IGV4dGVuZHMgYmFzZSBpbXBsZW1lbnRzIE9uSW5pdCxBZnRlckNvbnRlbnRJbml0LE9uQ2hhbmdlcyB7XG4gIGNvbnN0cnVjdG9yKGVSZWY6RWxlbWVudFJlZikge3N1cGVyKGVSZWYsdHJhbnNpdGlvbk1ldGFEYXRhKX1cbiAgcHVibGljIG5nT25Jbml0KCkge3RoaXMuYmFzZU9uSW5pdCh0cmFuc2l0aW9uTWV0YURhdGEpfVxuICAvL3B1YmxpYyBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7dGhpcy5iYXNlT25DaGFuZ2VzKGNoYW5nZXMpfVxuICBwdWJsaWMgbmdBZnRlckNvbnRlbnRJbml0KCkge3RoaXMuYmFzZUFmdGVyQ29udGVudEluaXQoKX1cbn0iLCJpbXBvcnQgeyBOZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgRXh0QnV0dG9uQ29tcG9uZW50IH0gZnJvbSAnLi9leHQtYnV0dG9uLmNvbXBvbmVudCc7XG5pbXBvcnQgeyBFeHRHcmlkQ29tcG9uZW50IH0gZnJvbSAnLi9leHQtZ3JpZC5jb21wb25lbnQnO1xuaW1wb3J0IHsgRXh0VHJhbnNpdGlvbkNvbXBvbmVudCB9IGZyb20gJy4vZXh0LXRyYW5zaXRpb24uY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgaW1wb3J0czogW1xuICBdLFxuICBkZWNsYXJhdGlvbnM6IFtcbiAgICBFeHRCdXR0b25Db21wb25lbnQsXG4gICAgRXh0R3JpZENvbXBvbmVudCxcbiAgICBFeHRUcmFuc2l0aW9uQ29tcG9uZW50XG4gIF0sXG4gIGV4cG9ydHM6IFtcbiAgICBFeHRCdXR0b25Db21wb25lbnQsXG4gICAgRXh0R3JpZENvbXBvbmVudCxcbiAgICBFeHRUcmFuc2l0aW9uQ29tcG9uZW50XG4gIF1cbn0pXG5leHBvcnQgY2xhc3MgRXh0QW5ndWxhck1vZGVybk1vZHVsZSB7IH1cbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJDb250ZW50Q2hpbGRyZW4iLCJFbGVtZW50UmVmIiwidHNsaWJfMS5fX2V4dGVuZHMiLCJDb21wb25lbnQiLCJmb3J3YXJkUmVmIiwiTmdNb2R1bGUiXSwibWFwcGluZ3MiOiI7Ozs7OztJQUFBOzs7Ozs7Ozs7Ozs7OztJQWNBO0lBRUEsSUFBSSxhQUFhLEdBQUcsVUFBUyxDQUFDLEVBQUUsQ0FBQztRQUM3QixhQUFhLEdBQUcsTUFBTSxDQUFDLGNBQWM7YUFDaEMsRUFBRSxTQUFTLEVBQUUsRUFBRSxFQUFFLFlBQVksS0FBSyxJQUFJLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxHQUFHLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDNUUsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLEtBQUssSUFBSSxD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