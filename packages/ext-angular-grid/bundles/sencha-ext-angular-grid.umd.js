(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('script-loader!@sencha/ext-angular-grid/ext/ext.grid.prod'), require('script-loader!@sencha/ext-angular-grid/ext/css.prod')) :
    typeof define === 'function' && define.amd ? define('@sencha/ext-angular-grid', ['exports', '@angular/core', 'script-loader!@sencha/ext-angular-grid/ext/ext.grid.prod', 'script-loader!@sencha/ext-angular-grid/ext/css.prod'], factory) :
    (global = global || self, factory((global.sencha = global.sencha || {}, global.sencha['ext-angular-grid'] = {}), global.ng.core));
}(this, function (exports, core) { 'use strict';

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

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    };

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    var EngBase = /** @class */ (function () {
        function EngBase(nativeElement, metaData, hostComponent) {
            var _this = this;
            this.metaData = metaData;
            this.hostComponent = hostComponent;
            this.node = nativeElement;
            this.parentNode = hostComponent;
            this.newDiv = document.createElement('div');
            this.node.insertAdjacentElement('beforebegin', this.newDiv);
            this.xtype = metaData.XTYPE;
            this.properties = metaData.PROPERTIES;
            this.propertiesobject = 'propertiesobject';
            this.events = metaData.EVENTS;
            this.eventnames = metaData.EVENTNAMES;
            this.base = EngBase;
            this.eventnames.forEach(function (event, n) {
                if (event != 'fullscreen') {
                    _this.currentEl[event] = new core.EventEmitter();
                }
                else {
                    _this.currentEl[event + 'event'] = new core.EventEmitter();
                }
            });
        }
        Object.defineProperty(EngBase.prototype, "childComponents", {
            get: function () {
                var _this = this;
                return this._childComponents.filter(function (item) { return item !== _this; });
            },
            enumerable: true,
            configurable: true
        });
        EngBase.prototype.baseOnInit = function (metaData) { };
        EngBase.prototype.baseAfterViewInit = function (metaData) {
            this.initMe();
        };
        EngBase.prototype.createRawChildren = function () {
            if (this.isAngular) {
                this.rawChildren = this.childComponents;
            }
            else {
                this.ewcChildren = Array.prototype.slice.call(this.children);
                this.rawChildren = [];
                var num = 0;
                for (var i = 0; i < this.ewcChildren.length; i++) {
                    if (this.ewcChildren[i].XTYPE != undefined) {
                        this.rawChildren[num] = {};
                        this.rawChildren[num] = this.ewcChildren[i];
                        this.rawChildren[num].currentComponent = this.ewcChildren[i];
                        this.rawChildren[num].node = this.ewcChildren[i];
                        num++;
                    }
                }
            }
        };
        EngBase.prototype.atEnd = function () {
            console.log('*** at end');
            console.log('this - ' + this.currentElName);
            console.dir(this.currentEl.A);
            if (this.parentEl != null) {
                console.log('parent - ' + this.parentElName);
                console.dir(this.parentEl.A);
            }
            else {
                console.log('No EXT parent');
            }
        };
        EngBase.prototype.initMe = function () {
            console.log('');
            console.log('*** initMe for ' + this.currentElName);
            this.createRawChildren();
            this.setHasParent();
            this.setDirection();
            this.figureOutA();
            this.createProps(this.properties, this.propertiesobject, this.events, this.eventnames);
            this.createExtComponent();
            this.assessChildren(this.base, this.xtype);
            this.atEnd();
            if (this.last == true) {
                console.log('this is the end...');
            }
        };
        ;
        EngBase.prototype.setHasParent = function () {
            var hasParent;
            if (this.parentEl == null) {
                this.hasParent = false;
            }
            else {
                if (this.parentElName.substring(0, 4) == 'EXT-') {
                    this.hasParent = true;
                }
                else {
                    this.hasParent = false;
                }
            }
            //return hasParent
        };
        EngBase.prototype.setDirection = function () {
            if (this.base.count == 0) {
                this.base.count++;
                if (this.hasParent == false) {
                    this.base.DIRECTION = 'TopToBottom';
                }
                else {
                    if (this.parentElName.substring(0, 4) == 'EXT-') {
                        this.base.DIRECTION = 'BottomToTop';
                    }
                    else {
                        this.base.DIRECTION = 'TopToBottom';
                    }
                }
            }
            console.log(this.base.DIRECTION);
        };
        EngBase.prototype.figureOutA = function () {
            if (this.hasParent && this.parentEl.A == undefined) {
                this.init(this.parentEl, this.parentNode);
            }
            if (this.currentEl.A == undefined) {
                this.init(this.currentEl, this);
            }
            // if (hasParent) {
            //     if (this.parentEl.A == undefined) {
            //         //console.log('parent not created');
            //         this.init(this.parentEl, this.parentNode);
            //     }
            //     else {
            //         //console.log('parent A IS created');
            //     }
            // }
            // if (this.currentEl.A == undefined) {
            //     //console.log('no A');
            //     this.init(this.currentEl, this);
            // }
            // else {
            //     console.log('have A');
            // }
        };
        EngBase.prototype.init = function (component, node) {
            component.A = {};
            component.A.props = {};
            component.A.xtype = node.xtype;
            //component.A.ACURRENT = node.xtype;
            component.A.CHILDRENCOMPONENTS = [];
            component.A.CHILDRENCOMPONENTSCOUNT = 0;
            component.A.CHILDRENCOMPONENTSADDED = 0;
            if (this.base.DIRECTION == 'TopToBottom') {
                component.A.CHILDRENCOMPONENTS = node.rawChildren;
                for (var i = 0; i < component.A.CHILDRENCOMPONENTS.length; i++) {
                    if (this.getCurrentElName(component.A.CHILDRENCOMPONENTS[i]).substring(0, 4) == 'EXT-') {
                        component.A.CHILDRENCOMPONENTSCOUNT++;
                    }
                }
                component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
            }
        };
        EngBase.prototype.createExtComponent = function () {
            var A = this.currentEl.A;
            if (A.props['viewport'] == true) {
                //A.APARENT = '';
                //this.newDiv.remove()
                A.ext = Ext.create(A.props);
                console.log('0-Ext.application: ' + A.props.xtype);
                var me = this;
                Ext.application({
                    name: 'MyEWCApp',
                    launch: function () {
                        Ext.Viewport.add([me.currentEl.A.ext]);
                        if (window['router']) {
                            window['router'].init();
                        }
                        console.log(me.base.DIRECTION + ' in launch ');
                        if (me.base.DIRECTION == 'BottomToTop') {
                            console.log('the last thing to do...');
                            me.last = true;
                        }
                    }
                });
            }
            else if (this.parentNode == null) {
                //A.APARENT = '';
                console.log('1- Ext.create: ' + this.currentElName + ' HTML parent: ' + this.currentElName);
                A.props.renderTo = this.newDiv;
                A.ext = Ext.create(A.props);
                //this.parentEl.replaceChild(A.ext.el.dom, this.newDiv)
                //console.log('replace newDiv')
            }
            else {
                if (this.parentElName.substring(0, 4) != 'EXT-') {
                    console.log('2- Ext.create: ' + this.currentElName + '  HTML parent: ' + this.parentElName);
                    A.props.renderTo = this.newDiv; //this.A.newDiv; //me.shadowRoot;
                    this.currentEl.A.ext = Ext.create(A.props);
                    //this.parentEl.replaceChild(A.ext.el.dom, this.newDiv)
                }
                else {
                    console.log('3- Ext.create: ' + this.currentElName + '  Ext parent: ' + this.parentElName);
                    A.ext = Ext.create(A.props);
                }
            }
        };
        EngBase.prototype.assessChildren = function (base, xtype) {
            var A = this.currentEl.A;
            console.log('assessChildren for: ' + xtype);
            if (this._extitems != undefined) {
                if (this._extitems.length == 1) {
                    console.log('set html');
                    A.ext.setHtml(this._extitem.nativeElement);
                }
            }
            if (this._extitems != undefined) {
                if (this._extroutes.length == 1) {
                    console.log('set router');
                    A.ext.setHtml(this._extroute.nativeElement);
                    //childItem.childCmp = Ext.create({xtype:'widget', ewc:item.getAttribute('ewc'), element:Ext.get(item.parentNode.removeChild(item))})
                }
            }
            if (A.CHILDRENCOMPONENTSCOUNT == 0 &&
                A.CHILDRENCOMPONENTSLEFT == 0 &&
                A.CHILDRENCOMPONENTSADDED == 0 &&
                this.parentEl == null) {
                console.log('Solo');
                console.log('ready event for ' + this.currentElName);
                this.sendReadyEvent(this);
            }
            else if (A.CHILDRENCOMPONENTSADDED > 0) {
                console.log('addChildren');
                console.dir(A.CHILDRENCOMPONENTS);
                this.addChildren(this, A.CHILDRENCOMPONENTS);
                //console.log('send ready for CHILDRENCOMPONENTSADDED > 0');
                console.log('ready event for ' + this.currentElName);
                this.sendReadyEvent(this);
                this.node.remove();
            }
            // else if (this.parentNode != null && this.A.CHILDRENCOMPONENTSCOUNT == 0) {
            //     console.log('send ready for ' + this.A.xtype);
            //     this.sendReadyEvent(this);
            // }
            if (this.parentEl != null) {
                if (base.DIRECTION == 'TopToBottom') {
                    console.log('TopToBottom');
                    this.parentEl.A.CHILDRENCOMPONENTS.push(this);
                    this.parentEl.A.CHILDRENCOMPONENTSADDED++;
                    this.parentEl.A.CHILDRENCOMPONENTSLEFT--;
                    if (this.parentEl.A.CHILDRENCOMPONENTSLEFT == 0) {
                        this.addChildren(this.parentEl, this.parentEl.A.CHILDRENCOMPONENTS);
                        console.log('ready event for ' + this.parentElName + '(parent)');
                        this.sendReadyEvent(this.parentEl);
                    }
                }
                else {
                    this.parentEl.A.CHILDRENCOMPONENTS.push(this.currentEl);
                    this.parentEl.A.CHILDRENCOMPONENTSADDED++;
                    console.log('ready event for ' + this.currentElName);
                    this.sendReadyEvent(this);
                }
            }
        };
        EngBase.prototype.addChildren = function (child, children) {
            //console.log('addChildren for ' + child.xtype + ' - num children: ' + children.length);
            //for (var i = children.length - 1; i > -1; i--) {
            //    var childItem = { parentCmp: {}, childCmp: {} };
            //    childItem.parentCmp = child.currentEl.A.ext;
            //    childItem.childCmp = children[i].A.ext;
            //    this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
            //}
            for (var i = 0; i < children.length; i++) {
                var childItem = { parentCmp: {}, childCmp: {} };
                childItem.parentCmp = child.currentEl.A.ext;
                childItem.childCmp = children[i].A.ext;
                this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
            }
        };
        EngBase.prototype.addTheChild = function (parentCmp, childCmp, location) {
            var parentxtype = parentCmp.xtype;
            var childxtype = childCmp.xtype;
            //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
            //if (childxtype == 'widget')
            if (this.currentEl.A.ext.initialConfig.align != undefined) {
                if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
                    console.error('Can only use align property if parent is a Titlebar or Grid or Button');
                    return;
                }
            }
            var defaultparent = false;
            var defaultchild = false;
            switch (parentxtype) {
                case 'button':
                    switch (childxtype) {
                        case 'menu':
                            parentCmp.setMenu(childCmp);
                            break;
                        default:
                            defaultparent = true;
                            break;
                    }
                    break;
                case 'booleancolumn':
                case 'checkcolumn':
                case 'gridcolumn':
                case 'column':
                case 'templatecolumn':
                case 'gridcolumn':
                case 'column':
                case 'templatecolumn':
                case 'datecolumn':
                case 'dragcolumn':
                case 'numbercolumn':
                case 'selectioncolumn':
                case 'textcolumn':
                case 'treecolumn':
                case 'rownumberer':
                    switch (childxtype) {
                        case 'renderercell':
                            parentCmp.setCell(childCmp);
                            break;
                        case 'column':
                        case 'gridcolumn':
                            parentCmp.add(childCmp);
                            break;
                        default:
                            defaultparent = true;
                            break;
                    }
                    break;
                case 'grid':
                case 'lockedgrid':
                    switch (childxtype) {
                        case 'gridcolumn':
                        case 'column':
                        case 'treecolumn':
                        case 'textcolumn':
                        case 'checkcolumn':
                        case 'datecolumn':
                        case 'rownumberer':
                        case 'numbercolumn':
                        case 'booleancolumn':
                            if (location == null) {
                                if (parentxtype == 'grid') {
                                    parentCmp.addColumn(childCmp);
                                }
                                else {
                                    parentCmp.add(childCmp);
                                }
                            }
                            else {
                                var regCols = 0;
                                if (parentCmp.registeredColumns != undefined) {
                                    regCols = parentCmp.registeredColumns.length;
                                }
                                if (parentxtype == 'grid') {
                                    //mjg console.log(parentCmp)
                                    parentCmp.insertColumn(location + regCols, childCmp);
                                }
                                else {
                                    parentCmp.insert(location + regCols, childCmp);
                                }
                            }
                            break;
                        default:
                            defaultparent = true;
                            break;
                    }
                    break;
                default:
                    defaultparent = true;
                    break;
            }
            ;
            switch (childxtype) {
                case 'toolbar':
                case 'titlebar':
                    if (parentCmp.getHideHeaders != undefined) {
                        if (parentCmp.getHideHeaders() === false) {
                            parentCmp.insert(1, childCmp);
                        }
                        else {
                            parentCmp.add(childCmp);
                        }
                    }
                    else {
                        if (parentCmp.add != undefined) {
                            if (location == null) {
                                parentCmp.add(childCmp);
                            }
                            else {
                                parentCmp.insert(location, childCmp);
                            }
                        }
                        else {
                            parentCmp.add(childCmp);
                        }
                    }
                    break;
                case 'tooltip':
                    parentCmp.setTooltip(childCmp);
                    break;
                case 'plugin':
                    parentCmp.setPlugin(childCmp);
                    break;
                default:
                    defaultchild = true;
                    break;
            }
            if (defaultparent == true && defaultchild == true) {
                //console.log(parentxtype + '.add(' + childxtype + ')')
                parentCmp.add(childCmp);
            }
            // if (this.parentNode.childrenYetToBeDefined > 0) {
            //     this.parentNode.childrenYetToBeDefined--
            // }
            // //console.log('childrenYetToBeDefined(after) '  + this.parentNode.childrenYetToBeDefined)
            // if (this.parentNode.childrenYetToBeDefined == 0) {
            //     this.parentNode.dispatchEvent(new CustomEvent('ready',{detail:{cmp: this.parentNode.ext}}))
            // }
        };
        Object.defineProperty(EngBase.prototype, "currentEl", {
            // currentEl {
            //     if (this._extitems != undefined) {
            //         return this.node
            //     }
            //     else {
            //         return this
            //     }
            // }
            get: function () {
                if (this._extitems != undefined) {
                    return this.node;
                }
                else {
                    return this;
                }
            },
            enumerable: true,
            configurable: true
        });
        EngBase.prototype.getCurrentElName = function (component) {
            if (component._extitems != undefined) {
                return component.node.nodeName;
            }
            else {
                return component.nodeName;
            }
        };
        Object.defineProperty(EngBase.prototype, "currentElName", {
            get: function () {
                if (this._extitems != undefined) {
                    return this.node.nodeName;
                }
                else {
                    return this.nodeName;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EngBase.prototype, "isAngular", {
            get: function () {
                if (this._extitems != undefined) {
                    return true;
                }
                else {
                    return false;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EngBase.prototype, "parentEl", {
            get: function () {
                if (this.isAngular) {
                    if (this.parentNode == null) {
                        return null;
                    }
                    return this.parentNode.node;
                }
                else {
                    return this.parentNode;
                }
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(EngBase.prototype, "parentElName", {
            get: function () {
                if (this.isAngular) {
                    if (this.parentNode == null) {
                        return null;
                    }
                    return this.parentNode.node.nodeName;
                }
                else {
                    return this.parentNode.nodeName;
                }
            },
            enumerable: true,
            configurable: true
        });
        // parentEl {
        //     if (this._extitems != undefined) {
        //         if (this.parentNode == null) {
        //             return null
        //         }
        //         return this.parentNode.node;
        //     }
        //     else {
        //         return this.parentNode;
        //     }
        // }
        // getNodeName(component) {
        //     if (this._extitems != undefined) {
        //         return component.node.nodeName
        //     }
        //     else {
        //         return component.nodeName
        //     }
        // }
        EngBase.prototype.sendReadyEvent = function (component) {
            var cmp = component.currentEl.A.ext;
            if (component._extitems != undefined) {
                component['ready'].emit({ detail: { cmp: cmp } });
            }
            else {
                component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
            }
        };
        EngBase.prototype.createProps = function (properties, propertiesobject, events, eventnames) {
            var _this = this;
            var props = this.currentEl.A.props;
            props.xtype = this.xtype;
            var listenersProvided = false;
            for (var i = 0; i < properties.length; i++) {
                var prop = properties[i];
                if (prop == 'handler') {
                    if (this[prop] != undefined) {
                        props[prop] = this[prop];
                    }
                }
                //need to handle listeners coming in here
                if ((props.xtype === 'cartesian' || props.xtype === 'polar') && prop === 'layout') {
                }
                else if (prop == 'listeners' && this[prop] != undefined) {
                    props[prop] = this[prop];
                    listenersProvided = true;
                }
                else {
                    if (this[prop] != undefined &&
                        prop != 'listeners' &&
                        prop != 'config' &&
                        prop != 'handler' &&
                        prop != 'fitToParent') {
                        props[prop] = this[prop];
                    }
                }
            }
            if (true === this['fitToParent']) {
                props.top = 0,
                    props.left = 0,
                    props.width = '100%',
                    props.height = '100%';
            }
            if (this['config'] !== {}) {
                Ext.apply(props, this['config']);
            }
            if (!listenersProvided) {
                props.listeners = {};
                var me = this;
                events.forEach(function (event) {
                    var eventname = event.name;
                    var eventparameters = event.parameters;
                    me.currentEl.A.props.listeners[eventname] = function () {
                        //console.log('in the event ' + eventname)
                        var parameters = eventparameters;
                        var parms = parameters.split(',');
                        var args = Array.prototype.slice.call(arguments);
                        var emitparms = {};
                        if (me._extitems != undefined) {
                            for (var i_1 = 0, j = parms.length; i_1 < j; i_1++) {
                                emitparms[parms[i_1]] = args[i_1];
                            }
                            me[eventname].emit(emitparms);
                        }
                        else {
                        }
                    };
                });
            }
            //dup??
            if (this._extitems != undefined) {
                events.forEach(function (event, n) {
                    if (event != 'fullscreen') {
                        _this[event] = new core.EventEmitter();
                    }
                    else {
                        _this[event + 'event'] = new core.EventEmitter();
                    }
                });
            }
        };
        EngBase.prototype.baseOnChanges = function (changes) {
            //console.log(`ngOnChanges`)
            //console.log(changes)
            var changesMsgs = [];
            for (var propName in changes) {
                var verb = '';
                if (changes[propName].firstChange === true) {
                    verb = 'initialized';
                }
                else {
                    verb = 'changed';
                }
                var val = changes[propName].currentValue;
                if (this.currentEl.A != undefined) {
                    //console.dir(this.currentEl.A.ext)
                    var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                    var setFunction = 'set' + capPropName;
                    //console.log(setFunction)
                    if (this.currentEl.A.ext[setFunction] != undefined) {
                        this.currentEl.A.ext[setFunction](val);
                    }
                    else {
                        console.error(setFunction + ' not found for ' + this.currentEl.A.ext.xtype);
                    }
                }
                else {
                    if (verb == 'changed') {
                        //mjg console.log('change needed and ext not defined')
                    }
                }
                changesMsgs.push("$ $ to \"$\"");
            }
            //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
        };
        EngBase.prototype.ngOnDestroy = function () {
            var childCmp;
            var parentCmp;
            console.dir(this);
            try {
                childCmp = this.currentEl.A.ext;
                if (this.parentEl != null) {
                    parentCmp = this.parentEl.A.ext;
                    console.log(childCmp);
                    console.log(parentCmp);
                    if (childCmp == undefined || parentCmp == undefined)
                        if (parentCmp.xtype == 'button' && childCmp.xtype == 'menu') {
                            //console.log('button/menu not deleted')
                        }
                        else if (parentCmp.xtype == 'carousel') {
                            //console.log('carousel parent not deleted')
                        }
                        else if (parentCmp.xtype == 'grid' && childCmp.xtype == 'column') {
                            //console.log('grid/column not deleted')
                            //console.log(childCmp)
                        }
                        else if (parentCmp.xtype == 'segmentedbutton' && childCmp.xtype == 'button') {
                            //console.log('segmentedbutton/button not deleted')
                        }
                        else if (parentCmp.xtype == 'button' && childCmp.xtype == 'tooltip') {
                            //console.log('button/tooltip not deleted')
                        }
                        else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'button') {
                            //console.log('titlebar/button not deleted')
                        }
                        else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'searchfield') {
                            //console.log('titlebar/searchfield not deleted')
                        }
                        else {
                            parentCmp.remove([childCmp]);
                            childCmp.destroy();
                        }
                }
                else {
                    if (childCmp != undefined) {
                        childCmp.destroy();
                    }
                    else {
                        console.log('no destroy');
                    }
                }
            }
            catch (e) {
                console.error(e);
                //mjg console.log('*****')
                //mjg console.log(parentCmp)
                //mjg console.log(childCmp)
                //mjg console.log('*****')
            }
        };
        EngBase.count = 0;
        EngBase.DIRECTION = '';
        __decorate([
            core.ContentChild('extroute', { static: false }),
            __metadata("design:type", Object)
        ], EngBase.prototype, "_extroute", void 0);
        __decorate([
            core.ContentChildren('extroute'),
            __metadata("design:type", core.QueryList)
        ], EngBase.prototype, "_extroutes", void 0);
        __decorate([
            core.ContentChild('extitem', { static: false }),
            __metadata("design:type", Object)
        ], EngBase.prototype, "_extitem", void 0);
        __decorate([
            core.ContentChildren('extitem'),
            __metadata("design:type", core.QueryList)
        ], EngBase.prototype, "_extitems", void 0);
        __decorate([
            core.ContentChildren(EngBase),
            __metadata("design:type", core.QueryList)
        ], EngBase.prototype, "_childComponents", void 0);
        return EngBase;
    }());

    //Ext.onReady(function() {
    var gridcellbaseMetaData = /** @class */ (function () {
        function gridcellbaseMetaData() {
        }
        gridcellbaseMetaData.XTYPE = 'gridcellbase';
        gridcellbaseMetaData.PROPERTIES = [
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
        gridcellbaseMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'gridcellbase' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridcellbase,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'gridcellbase,event' },
            { name: 'focusenter', parameters: 'gridcellbase,event' },
            { name: 'focusleave', parameters: 'gridcellbase,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'gridcellbase' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridcellbaseMetaData.EVENTNAMES = [
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
        return gridcellbaseMetaData;
    }());
    var ExtGridcellbaseComponent = /** @class */ (function (_super) {
        __extends(ExtGridcellbaseComponent, _super);
        function ExtGridcellbaseComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridcellbaseMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridcellbaseComponent_1 = ExtGridcellbaseComponent;
        ExtGridcellbaseComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridcellbaseMetaData);
        };
        ExtGridcellbaseComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridcellbaseMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridcellbaseComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridcellbaseComponent_1;
        ExtGridcellbaseComponent = ExtGridcellbaseComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridcellbase',
                inputs: gridcellbaseMetaData.PROPERTIES,
                outputs: gridcellbaseMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridcellbaseComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridcellbaseComponent);
        return ExtGridcellbaseComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var booleancellMetaData = /** @class */ (function () {
        function booleancellMetaData() {
        }
        booleancellMetaData.XTYPE = 'booleancell';
        booleancellMetaData.PROPERTIES = [
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
            'falseText',
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
            'rawValue',
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
            'trueText',
            'twoWayBindable',
            'ui',
            'undefinedText',
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
        booleancellMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'booleancell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'booleancell,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'booleancell,event' },
            { name: 'focusenter', parameters: 'booleancell,event' },
            { name: 'focusleave', parameters: 'booleancell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'booleancell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        booleancellMetaData.EVENTNAMES = [
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
        return booleancellMetaData;
    }());
    var ExtBooleancellComponent = /** @class */ (function (_super) {
        __extends(ExtBooleancellComponent, _super);
        function ExtBooleancellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, booleancellMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtBooleancellComponent_1 = ExtBooleancellComponent;
        ExtBooleancellComponent.prototype.ngOnInit = function () {
            this.baseOnInit(booleancellMetaData);
        };
        ExtBooleancellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(booleancellMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtBooleancellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtBooleancellComponent_1;
        ExtBooleancellComponent = ExtBooleancellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-booleancell',
                inputs: booleancellMetaData.PROPERTIES,
                outputs: booleancellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtBooleancellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtBooleancellComponent);
        return ExtBooleancellComponent;
    }(EngBase));

    //Ext.onReady(function() {
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
    var ExtGridcellComponent = /** @class */ (function (_super) {
        __extends(ExtGridcellComponent, _super);
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
        ExtGridcellComponent = ExtGridcellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridcell',
                inputs: gridcellMetaData.PROPERTIES,
                outputs: gridcellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridcellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridcellComponent);
        return ExtGridcellComponent;
    }(EngBase));

    //Ext.onReady(function() {
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
    var ExtCheckcellComponent = /** @class */ (function (_super) {
        __extends(ExtCheckcellComponent, _super);
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
        ExtCheckcellComponent = ExtCheckcellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-checkcell',
                inputs: checkcellMetaData.PROPERTIES,
                outputs: checkcellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtCheckcellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtCheckcellComponent);
        return ExtCheckcellComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var datecellMetaData = /** @class */ (function () {
        function datecellMetaData() {
        }
        datecellMetaData.XTYPE = 'datecell';
        datecellMetaData.PROPERTIES = [
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
            'format',
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
            'zeroValue',
            'platformConfig',
            'responsiveConfig',
            'align',
            'fitToParent',
            'config'
        ];
        datecellMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'datecell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'datecell,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'datecell,event' },
            { name: 'focusenter', parameters: 'datecell,event' },
            { name: 'focusleave', parameters: 'datecell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'datecell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        datecellMetaData.EVENTNAMES = [
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
        return datecellMetaData;
    }());
    var ExtDatecellComponent = /** @class */ (function (_super) {
        __extends(ExtDatecellComponent, _super);
        function ExtDatecellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, datecellMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtDatecellComponent_1 = ExtDatecellComponent;
        ExtDatecellComponent.prototype.ngOnInit = function () {
            this.baseOnInit(datecellMetaData);
        };
        ExtDatecellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(datecellMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtDatecellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtDatecellComponent_1;
        ExtDatecellComponent = ExtDatecellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-datecell',
                inputs: datecellMetaData.PROPERTIES,
                outputs: datecellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtDatecellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtDatecellComponent);
        return ExtDatecellComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var numbercellMetaData = /** @class */ (function () {
        function numbercellMetaData() {
        }
        numbercellMetaData.XTYPE = 'numbercell';
        numbercellMetaData.PROPERTIES = [
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
            'format',
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
            'zeroValue',
            'platformConfig',
            'responsiveConfig',
            'align',
            'fitToParent',
            'config'
        ];
        numbercellMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'numbercell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'numbercell,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'numbercell,event' },
            { name: 'focusenter', parameters: 'numbercell,event' },
            { name: 'focusleave', parameters: 'numbercell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'numbercell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        numbercellMetaData.EVENTNAMES = [
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
        return numbercellMetaData;
    }());
    var ExtNumbercellComponent = /** @class */ (function (_super) {
        __extends(ExtNumbercellComponent, _super);
        function ExtNumbercellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, numbercellMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtNumbercellComponent_1 = ExtNumbercellComponent;
        ExtNumbercellComponent.prototype.ngOnInit = function () {
            this.baseOnInit(numbercellMetaData);
        };
        ExtNumbercellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(numbercellMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtNumbercellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtNumbercellComponent_1;
        ExtNumbercellComponent = ExtNumbercellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-numbercell',
                inputs: numbercellMetaData.PROPERTIES,
                outputs: numbercellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtNumbercellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtNumbercellComponent);
        return ExtNumbercellComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var rownumberercellMetaData = /** @class */ (function () {
        function rownumberercellMetaData() {
        }
        rownumberercellMetaData.XTYPE = 'rownumberercell';
        rownumberercellMetaData.PROPERTIES = [
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
            'format',
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
            'zeroValue',
            'platformConfig',
            'responsiveConfig',
            'align',
            'fitToParent',
            'config'
        ];
        rownumberercellMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'rownumberercell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'rownumberercell,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'rownumberercell,event' },
            { name: 'focusenter', parameters: 'rownumberercell,event' },
            { name: 'focusleave', parameters: 'rownumberercell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'rownumberercell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        rownumberercellMetaData.EVENTNAMES = [
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
        return rownumberercellMetaData;
    }());
    var ExtRownumberercellComponent = /** @class */ (function (_super) {
        __extends(ExtRownumberercellComponent, _super);
        function ExtRownumberercellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, rownumberercellMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtRownumberercellComponent_1 = ExtRownumberercellComponent;
        ExtRownumberercellComponent.prototype.ngOnInit = function () {
            this.baseOnInit(rownumberercellMetaData);
        };
        ExtRownumberercellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(rownumberercellMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtRownumberercellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtRownumberercellComponent_1;
        ExtRownumberercellComponent = ExtRownumberercellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-rownumberercell',
                inputs: rownumberercellMetaData.PROPERTIES,
                outputs: rownumberercellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtRownumberercellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtRownumberercellComponent);
        return ExtRownumberercellComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var textcellMetaData = /** @class */ (function () {
        function textcellMetaData() {
        }
        textcellMetaData.XTYPE = 'textcell';
        textcellMetaData.PROPERTIES = [
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
            'zeroValue',
            'platformConfig',
            'responsiveConfig',
            'align',
            'fitToParent',
            'config'
        ];
        textcellMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'textcell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'textcell,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'textcell,event' },
            { name: 'focusenter', parameters: 'textcell,event' },
            { name: 'focusleave', parameters: 'textcell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'textcell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        textcellMetaData.EVENTNAMES = [
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
        return textcellMetaData;
    }());
    var ExtTextcellComponent = /** @class */ (function (_super) {
        __extends(ExtTextcellComponent, _super);
        function ExtTextcellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, textcellMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtTextcellComponent_1 = ExtTextcellComponent;
        ExtTextcellComponent.prototype.ngOnInit = function () {
            this.baseOnInit(textcellMetaData);
        };
        ExtTextcellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(textcellMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtTextcellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtTextcellComponent_1;
        ExtTextcellComponent = ExtTextcellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-textcell',
                inputs: textcellMetaData.PROPERTIES,
                outputs: textcellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtTextcellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtTextcellComponent);
        return ExtTextcellComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var treecellMetaData = /** @class */ (function () {
        function treecellMetaData() {
        }
        treecellMetaData.XTYPE = 'treecell';
        treecellMetaData.PROPERTIES = [
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
            'autoCheckChildren',
            'bind',
            'bodyCls',
            'bodyStyle',
            'border',
            'cellCls',
            'checkable',
            'checkableField',
            'checkedField',
            'checkOnTriTap',
            'cls',
            'column',
            'constrainAlign',
            'controller',
            'defaultListenerScope',
            'defaultToolWeights',
            'disabled',
            'enableTri',
            'encodeHtml',
            'flex',
            'floated',
            'focusCls',
            'formatter',
            'height',
            'hidden',
            'hideMode',
            'iconCls',
            'iconClsProperty',
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
            'text',
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
        treecellMetaData.EVENTS = [
            { name: 'beforecheckchange', parameters: 'treecell,checked,current,record,e' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'treecell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'treecell,event' },
            { name: 'checkchange', parameters: 'treecell,checked,record,e' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'treecell,event' },
            { name: 'focusenter', parameters: 'treecell,event' },
            { name: 'focusleave', parameters: 'treecell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'treecell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        treecellMetaData.EVENTNAMES = [
            'beforecheckchange',
            'beforedisabledchange',
            'beforeheightchange',
            'beforehiddenchange',
            'beforetofront',
            'beforewidthchange',
            'blur',
            'checkchange',
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
        return treecellMetaData;
    }());
    var ExtTreecellComponent = /** @class */ (function (_super) {
        __extends(ExtTreecellComponent, _super);
        function ExtTreecellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, treecellMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtTreecellComponent_1 = ExtTreecellComponent;
        ExtTreecellComponent.prototype.ngOnInit = function () {
            this.baseOnInit(treecellMetaData);
        };
        ExtTreecellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(treecellMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtTreecellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtTreecellComponent_1;
        ExtTreecellComponent = ExtTreecellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-treecell',
                inputs: treecellMetaData.PROPERTIES,
                outputs: treecellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtTreecellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtTreecellComponent);
        return ExtTreecellComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var widgetcellMetaData = /** @class */ (function () {
        function widgetcellMetaData() {
        }
        widgetcellMetaData.XTYPE = 'widgetcell';
        widgetcellMetaData.PROPERTIES = [
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
            'forceWidth',
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
            'widget',
            'width',
            'x',
            'y',
            'platformConfig',
            'responsiveConfig',
            'align',
            'fitToParent',
            'config'
        ];
        widgetcellMetaData.EVENTS = [
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'widgetcell' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'widgetcell,event' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'focus', parameters: 'widgetcell,event' },
            { name: 'focusenter', parameters: 'widgetcell,event' },
            { name: 'focusleave', parameters: 'widgetcell,event' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'widgetcell' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        widgetcellMetaData.EVENTNAMES = [
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
        return widgetcellMetaData;
    }());
    var ExtWidgetcellComponent = /** @class */ (function (_super) {
        __extends(ExtWidgetcellComponent, _super);
        function ExtWidgetcellComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, widgetcellMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtWidgetcellComponent_1 = ExtWidgetcellComponent;
        ExtWidgetcellComponent.prototype.ngOnInit = function () {
            this.baseOnInit(widgetcellMetaData);
        };
        ExtWidgetcellComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(widgetcellMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtWidgetcellComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtWidgetcellComponent_1;
        ExtWidgetcellComponent = ExtWidgetcellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-widgetcell',
                inputs: widgetcellMetaData.PROPERTIES,
                outputs: widgetcellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtWidgetcellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtWidgetcellComponent);
        return ExtWidgetcellComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var celleditorMetaData = /** @class */ (function () {
        function celleditorMetaData() {
        }
        celleditorMetaData.XTYPE = 'celleditor';
        celleditorMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignment',
            'alignSelf',
            'allowBlur',
            'allowFocusingDisabledChildren',
            'alwaysOnTop',
            'ariaAttributes',
            'ariaDescribedBy',
            'ariaLabel',
            'ariaLabelledBy',
            'autoDestroy',
            'autoPin',
            'autoSize',
            'axisLock',
            'bind',
            'bodyCls',
            'border',
            'bottom',
            'cancelOnClear',
            'cancelOnEsc',
            'cardSwitchAnimation',
            'centered',
            'cls',
            'completeOnEnter',
            'constrain',
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
            'field',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'height',
            'hidden',
            'hideAnimation',
            'hideEl',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'id',
            'ignoreNoChange',
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
            'matchFont',
            'maxHeight',
            'maxWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'nameHolder',
            'offset',
            'padding',
            'parentEl',
            'plugins',
            'publishes',
            'record',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'revertInvalid',
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
            'swallowKeys',
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
            'updateEl',
            'userCls',
            'userSelectable',
            'value',
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
        celleditorMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,celleditor,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'celleditor,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecomplete', parameters: 'celleditor,value,startValue' },
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
            { name: 'beforestartedit', parameters: 'celleditor,boundEl,value' },
            { name: 'beforetofront', parameters: 'celleditor' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'celleditor,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'canceledit', parameters: 'celleditor,value,startValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'complete', parameters: 'celleditor,value,startValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,celleditor,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'celleditor,event' },
            { name: 'focusenter', parameters: 'celleditor,event' },
            { name: 'focusleave', parameters: 'celleditor,event' },
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
            { name: 'move', parameters: 'celleditor,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'celleditor,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'celleditor,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'specialkey', parameters: 'celleditor,field,event' },
            { name: 'startedit', parameters: 'celleditor,boundEl,value' },
            { name: 'tofront', parameters: 'celleditor' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        celleditorMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecomplete',
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
            'beforestartedit',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'canceledit',
            'centeredchange',
            'complete',
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
            'specialkey',
            'startedit',
            'tofront',
            'topchange',
            'updatedata',
            'widthchange',
            'ready'
        ];
        return celleditorMetaData;
    }());
    var ExtCelleditorComponent = /** @class */ (function (_super) {
        __extends(ExtCelleditorComponent, _super);
        function ExtCelleditorComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, celleditorMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtCelleditorComponent_1 = ExtCelleditorComponent;
        ExtCelleditorComponent.prototype.ngOnInit = function () {
            this.baseOnInit(celleditorMetaData);
        };
        ExtCelleditorComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(celleditorMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtCelleditorComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtCelleditorComponent_1;
        ExtCelleditorComponent = ExtCelleditorComponent_1 = __decorate([
            core.Component({
                selector: 'ext-celleditor',
                inputs: celleditorMetaData.PROPERTIES,
                outputs: celleditorMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtCelleditorComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtCelleditorComponent);
        return ExtCelleditorComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var booleancolumnMetaData = /** @class */ (function () {
        function booleancolumnMetaData() {
        }
        booleancolumnMetaData.XTYPE = 'booleancolumn';
        booleancolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'falseText',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
            'toFrontOnShow',
            'toolDefaults',
            'tools',
            'tooltip',
            'top',
            'touchAction',
            'tpl',
            'tplWriteMode',
            'translatable',
            'trueText',
            'twoWayBindable',
            'ui',
            'undefinedText',
            'userCls',
            'userSelectable',
            'verticalOverflow',
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
        booleancolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,booleancolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'booleancolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'booleancolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'booleancolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,booleancolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'booleancolumn,event' },
            { name: 'focusenter', parameters: 'booleancolumn,event' },
            { name: 'focusleave', parameters: 'booleancolumn,event' },
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
            { name: 'move', parameters: 'booleancolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'booleancolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'booleancolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'booleancolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        booleancolumnMetaData.EVENTNAMES = [
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
        return booleancolumnMetaData;
    }());
    var ExtBooleancolumnComponent = /** @class */ (function (_super) {
        __extends(ExtBooleancolumnComponent, _super);
        function ExtBooleancolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, booleancolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtBooleancolumnComponent_1 = ExtBooleancolumnComponent;
        ExtBooleancolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(booleancolumnMetaData);
        };
        ExtBooleancolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(booleancolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtBooleancolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtBooleancolumnComponent_1;
        ExtBooleancolumnComponent = ExtBooleancolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-booleancolumn',
                inputs: booleancolumnMetaData.PROPERTIES,
                outputs: booleancolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtBooleancolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtBooleancolumnComponent);
        return ExtBooleancolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var checkcolumnMetaData = /** @class */ (function () {
        function checkcolumnMetaData() {
        }
        checkcolumnMetaData.XTYPE = 'checkcolumn';
        checkcolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'headerCheckbox',
            'headerCheckboxAlign',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'stopSelection',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        checkcolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,checkcolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'checkcolumn,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecheckchange', parameters: 'checkcolumn,rowIndex,checked,record,e' },
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
            { name: 'beforetofront', parameters: 'checkcolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'checkcolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'checkchange', parameters: 'checkcolumn,rowIndex,checked,record,e' },
            { name: 'deactivate', parameters: 'oldActiveItem,checkcolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'checkcolumn,event' },
            { name: 'focusenter', parameters: 'checkcolumn,event' },
            { name: 'focusleave', parameters: 'checkcolumn,event' },
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
            { name: 'move', parameters: 'checkcolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'checkcolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'checkcolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'checkcolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        checkcolumnMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecheckchange',
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
            'checkchange',
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
        return checkcolumnMetaData;
    }());
    var ExtCheckcolumnComponent = /** @class */ (function (_super) {
        __extends(ExtCheckcolumnComponent, _super);
        function ExtCheckcolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, checkcolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtCheckcolumnComponent_1 = ExtCheckcolumnComponent;
        ExtCheckcolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(checkcolumnMetaData);
        };
        ExtCheckcolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(checkcolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtCheckcolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtCheckcolumnComponent_1;
        ExtCheckcolumnComponent = ExtCheckcolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-checkcolumn',
                inputs: checkcolumnMetaData.PROPERTIES,
                outputs: checkcolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtCheckcolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtCheckcolumnComponent);
        return ExtCheckcolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridcolumnMetaData = /** @class */ (function () {
        function gridcolumnMetaData() {
        }
        gridcolumnMetaData.XTYPE = 'gridcolumn';
        gridcolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        gridcolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,gridcolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'gridcolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'gridcolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridcolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,gridcolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridcolumn,event' },
            { name: 'focusenter', parameters: 'gridcolumn,event' },
            { name: 'focusleave', parameters: 'gridcolumn,event' },
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
            { name: 'move', parameters: 'gridcolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'gridcolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'gridcolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'gridcolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridcolumnMetaData.EVENTNAMES = [
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
        return gridcolumnMetaData;
    }());
    var ExtGridcolumnComponent = /** @class */ (function (_super) {
        __extends(ExtGridcolumnComponent, _super);
        function ExtGridcolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridcolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridcolumnComponent_1 = ExtGridcolumnComponent;
        ExtGridcolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridcolumnMetaData);
        };
        ExtGridcolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridcolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridcolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridcolumnComponent_1;
        ExtGridcolumnComponent = ExtGridcolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridcolumn',
                inputs: gridcolumnMetaData.PROPERTIES,
                outputs: gridcolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridcolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridcolumnComponent);
        return ExtGridcolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var columnMetaData = /** @class */ (function () {
        function columnMetaData() {
        }
        columnMetaData.XTYPE = 'column';
        columnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        columnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,gridcolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'gridcolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'gridcolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridcolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,gridcolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridcolumn,event' },
            { name: 'focusenter', parameters: 'gridcolumn,event' },
            { name: 'focusleave', parameters: 'gridcolumn,event' },
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
            { name: 'move', parameters: 'gridcolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'gridcolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'gridcolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'gridcolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        columnMetaData.EVENTNAMES = [
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
        return columnMetaData;
    }());
    var ExtColumnComponent = /** @class */ (function (_super) {
        __extends(ExtColumnComponent, _super);
        function ExtColumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, columnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtColumnComponent_1 = ExtColumnComponent;
        ExtColumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(columnMetaData);
        };
        ExtColumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(columnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtColumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtColumnComponent_1;
        ExtColumnComponent = ExtColumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-column',
                inputs: columnMetaData.PROPERTIES,
                outputs: columnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtColumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtColumnComponent);
        return ExtColumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var templatecolumnMetaData = /** @class */ (function () {
        function templatecolumnMetaData() {
        }
        templatecolumnMetaData.XTYPE = 'templatecolumn';
        templatecolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        templatecolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,gridcolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'gridcolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'gridcolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridcolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,gridcolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridcolumn,event' },
            { name: 'focusenter', parameters: 'gridcolumn,event' },
            { name: 'focusleave', parameters: 'gridcolumn,event' },
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
            { name: 'move', parameters: 'gridcolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'gridcolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'gridcolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'gridcolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        templatecolumnMetaData.EVENTNAMES = [
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
        return templatecolumnMetaData;
    }());
    var ExtTemplatecolumnComponent = /** @class */ (function (_super) {
        __extends(ExtTemplatecolumnComponent, _super);
        function ExtTemplatecolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, templatecolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtTemplatecolumnComponent_1 = ExtTemplatecolumnComponent;
        ExtTemplatecolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(templatecolumnMetaData);
        };
        ExtTemplatecolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(templatecolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtTemplatecolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtTemplatecolumnComponent_1;
        ExtTemplatecolumnComponent = ExtTemplatecolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-templatecolumn',
                inputs: templatecolumnMetaData.PROPERTIES,
                outputs: templatecolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtTemplatecolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtTemplatecolumnComponent);
        return ExtTemplatecolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var datecolumnMetaData = /** @class */ (function () {
        function datecolumnMetaData() {
        }
        datecolumnMetaData.XTYPE = 'datecolumn';
        datecolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'format',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        datecolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,datecolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'datecolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'datecolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'datecolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,datecolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'datecolumn,event' },
            { name: 'focusenter', parameters: 'datecolumn,event' },
            { name: 'focusleave', parameters: 'datecolumn,event' },
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
            { name: 'move', parameters: 'datecolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'datecolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'datecolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'datecolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        datecolumnMetaData.EVENTNAMES = [
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
        return datecolumnMetaData;
    }());
    var ExtDatecolumnComponent = /** @class */ (function (_super) {
        __extends(ExtDatecolumnComponent, _super);
        function ExtDatecolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, datecolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtDatecolumnComponent_1 = ExtDatecolumnComponent;
        ExtDatecolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(datecolumnMetaData);
        };
        ExtDatecolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(datecolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtDatecolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtDatecolumnComponent_1;
        ExtDatecolumnComponent = ExtDatecolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-datecolumn',
                inputs: datecolumnMetaData.PROPERTIES,
                outputs: datecolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtDatecolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtDatecolumnComponent);
        return ExtDatecolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var dragcolumnMetaData = /** @class */ (function () {
        function dragcolumnMetaData() {
        }
        dragcolumnMetaData.XTYPE = 'dragcolumn';
        dragcolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        dragcolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,dragcolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'dragcolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'dragcolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'dragcolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,dragcolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'dragcolumn,event' },
            { name: 'focusenter', parameters: 'dragcolumn,event' },
            { name: 'focusleave', parameters: 'dragcolumn,event' },
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
            { name: 'move', parameters: 'dragcolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'dragcolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'dragcolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'dragcolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        dragcolumnMetaData.EVENTNAMES = [
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
        return dragcolumnMetaData;
    }());
    var ExtDragcolumnComponent = /** @class */ (function (_super) {
        __extends(ExtDragcolumnComponent, _super);
        function ExtDragcolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, dragcolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtDragcolumnComponent_1 = ExtDragcolumnComponent;
        ExtDragcolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(dragcolumnMetaData);
        };
        ExtDragcolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(dragcolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtDragcolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtDragcolumnComponent_1;
        ExtDragcolumnComponent = ExtDragcolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-dragcolumn',
                inputs: dragcolumnMetaData.PROPERTIES,
                outputs: dragcolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtDragcolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtDragcolumnComponent);
        return ExtDragcolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var numbercolumnMetaData = /** @class */ (function () {
        function numbercolumnMetaData() {
        }
        numbercolumnMetaData.XTYPE = 'numbercolumn';
        numbercolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'format',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        numbercolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,numbercolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'numbercolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'numbercolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'numbercolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,numbercolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'numbercolumn,event' },
            { name: 'focusenter', parameters: 'numbercolumn,event' },
            { name: 'focusleave', parameters: 'numbercolumn,event' },
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
            { name: 'move', parameters: 'numbercolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'numbercolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'numbercolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'numbercolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        numbercolumnMetaData.EVENTNAMES = [
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
        return numbercolumnMetaData;
    }());
    var ExtNumbercolumnComponent = /** @class */ (function (_super) {
        __extends(ExtNumbercolumnComponent, _super);
        function ExtNumbercolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, numbercolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtNumbercolumnComponent_1 = ExtNumbercolumnComponent;
        ExtNumbercolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(numbercolumnMetaData);
        };
        ExtNumbercolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(numbercolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtNumbercolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtNumbercolumnComponent_1;
        ExtNumbercolumnComponent = ExtNumbercolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-numbercolumn',
                inputs: numbercolumnMetaData.PROPERTIES,
                outputs: numbercolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtNumbercolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtNumbercolumnComponent);
        return ExtNumbercolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var rownumbererMetaData = /** @class */ (function () {
        function rownumbererMetaData() {
        }
        rownumbererMetaData.XTYPE = 'rownumberer';
        rownumbererMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'format',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        rownumbererMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,rownumberer,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'rownumberer,item,index' },
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
            { name: 'beforetofront', parameters: 'rownumberer' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'rownumberer,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,rownumberer,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'rownumberer,event' },
            { name: 'focusenter', parameters: 'rownumberer,event' },
            { name: 'focusleave', parameters: 'rownumberer,event' },
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
            { name: 'move', parameters: 'rownumberer,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'rownumberer,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'rownumberer,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'rownumberer' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        rownumbererMetaData.EVENTNAMES = [
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
        return rownumbererMetaData;
    }());
    var ExtRownumbererComponent = /** @class */ (function (_super) {
        __extends(ExtRownumbererComponent, _super);
        function ExtRownumbererComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, rownumbererMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtRownumbererComponent_1 = ExtRownumbererComponent;
        ExtRownumbererComponent.prototype.ngOnInit = function () {
            this.baseOnInit(rownumbererMetaData);
        };
        ExtRownumbererComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(rownumbererMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtRownumbererComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtRownumbererComponent_1;
        ExtRownumbererComponent = ExtRownumbererComponent_1 = __decorate([
            core.Component({
                selector: 'ext-rownumberer',
                inputs: rownumbererMetaData.PROPERTIES,
                outputs: rownumbererMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtRownumbererComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtRownumbererComponent);
        return ExtRownumbererComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var selectioncolumnMetaData = /** @class */ (function () {
        function selectioncolumnMetaData() {
        }
        selectioncolumnMetaData.XTYPE = 'selectioncolumn';
        selectioncolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'headerCheckbox',
            'headerCheckboxAlign',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'stopSelection',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        selectioncolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,selectioncolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'selectioncolumn,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecheckchange', parameters: 'selectioncolumn,rowIndex,checked,record,e' },
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
            { name: 'beforetofront', parameters: 'selectioncolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'selectioncolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'checkchange', parameters: 'selectioncolumn,rowIndex,checked,record,e' },
            { name: 'deactivate', parameters: 'oldActiveItem,selectioncolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'selectioncolumn,event' },
            { name: 'focusenter', parameters: 'selectioncolumn,event' },
            { name: 'focusleave', parameters: 'selectioncolumn,event' },
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
            { name: 'move', parameters: 'selectioncolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'selectioncolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'selectioncolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'selectioncolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        selectioncolumnMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecheckchange',
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
            'checkchange',
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
        return selectioncolumnMetaData;
    }());
    var ExtSelectioncolumnComponent = /** @class */ (function (_super) {
        __extends(ExtSelectioncolumnComponent, _super);
        function ExtSelectioncolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, selectioncolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtSelectioncolumnComponent_1 = ExtSelectioncolumnComponent;
        ExtSelectioncolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(selectioncolumnMetaData);
        };
        ExtSelectioncolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(selectioncolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtSelectioncolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtSelectioncolumnComponent_1;
        ExtSelectioncolumnComponent = ExtSelectioncolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-selectioncolumn',
                inputs: selectioncolumnMetaData.PROPERTIES,
                outputs: selectioncolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtSelectioncolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtSelectioncolumnComponent);
        return ExtSelectioncolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var textcolumnMetaData = /** @class */ (function () {
        function textcolumnMetaData() {
        }
        textcolumnMetaData.XTYPE = 'textcolumn';
        textcolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        textcolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,textcolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'textcolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'textcolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'textcolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,textcolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'textcolumn,event' },
            { name: 'focusenter', parameters: 'textcolumn,event' },
            { name: 'focusleave', parameters: 'textcolumn,event' },
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
            { name: 'move', parameters: 'textcolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'textcolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'textcolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'textcolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        textcolumnMetaData.EVENTNAMES = [
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
        return textcolumnMetaData;
    }());
    var ExtTextcolumnComponent = /** @class */ (function (_super) {
        __extends(ExtTextcolumnComponent, _super);
        function ExtTextcolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, textcolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtTextcolumnComponent_1 = ExtTextcolumnComponent;
        ExtTextcolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(textcolumnMetaData);
        };
        ExtTextcolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(textcolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtTextcolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtTextcolumnComponent_1;
        ExtTextcolumnComponent = ExtTextcolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-textcolumn',
                inputs: textcolumnMetaData.PROPERTIES,
                outputs: textcolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtTextcolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtTextcolumnComponent);
        return ExtTextcolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var treecolumnMetaData = /** @class */ (function () {
        function treecolumnMetaData() {
        }
        treecolumnMetaData.XTYPE = 'treecolumn';
        treecolumnMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'align',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'cell',
            'centered',
            'cls',
            'columns',
            'computedWidth',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataIndex',
            'defaultColumnUI',
            'defaultEditor',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'defaultWidth',
            'depends',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'editable',
            'editor',
            'editorDefaults',
            'exportRenderer',
            'exportStyle',
            'exportSummaryRenderer',
            'filter',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'formatter',
            'fullscreen',
            'groupable',
            'grouper',
            'groupHeaderTpl',
            'height',
            'hidden',
            'hideable',
            'hideAnimation',
            'hideMode',
            'hideOnMaskTap',
            'hideShowMenuItem',
            'html',
            'id',
            'ignore',
            'ignoreExport',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menu',
            'menuDisabled',
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
            'renderer',
            'renderTo',
            'reserveScrollbar',
            'resetFocusPosition',
            'resizable',
            'right',
            'ripple',
            'scope',
            'scratchCell',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
            'sorter',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summary',
            'summaryCell',
            'summaryDataIndex',
            'summaryFormatter',
            'summaryRenderer',
            'tabIndex',
            'text',
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
            'verticalOverflow',
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
        treecolumnMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,treecolumn,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'treecolumn,item,index' },
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
            { name: 'beforetofront', parameters: 'treecolumn' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'treecolumn,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,treecolumn,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'treecolumn,event' },
            { name: 'focusenter', parameters: 'treecolumn,event' },
            { name: 'focusleave', parameters: 'treecolumn,event' },
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
            { name: 'move', parameters: 'treecolumn,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'treecolumn,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'treecolumn,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'treecolumn' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        treecolumnMetaData.EVENTNAMES = [
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
        return treecolumnMetaData;
    }());
    var ExtTreecolumnComponent = /** @class */ (function (_super) {
        __extends(ExtTreecolumnComponent, _super);
        function ExtTreecolumnComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, treecolumnMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtTreecolumnComponent_1 = ExtTreecolumnComponent;
        ExtTreecolumnComponent.prototype.ngOnInit = function () {
            this.baseOnInit(treecolumnMetaData);
        };
        ExtTreecolumnComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(treecolumnMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtTreecolumnComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtTreecolumnComponent_1;
        ExtTreecolumnComponent = ExtTreecolumnComponent_1 = __decorate([
            core.Component({
                selector: 'ext-treecolumn',
                inputs: treecolumnMetaData.PROPERTIES,
                outputs: treecolumnMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtTreecolumnComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtTreecolumnComponent);
        return ExtTreecolumnComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridMetaData = /** @class */ (function () {
        function gridMetaData() {
        }
        gridMetaData.XTYPE = 'grid';
        gridMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'bufferSize',
            'cardSwitchAnimation',
            'centered',
            'cls',
            'collapseDefaults',
            'collapsible',
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
            'enableColumnMove',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'grouped',
            'groupFooter',
            'groupHeader',
            'grouping',
            'groupPlaceholder',
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
            'align',
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
            { name: 'beforecomplete', parameters: 'editor,value,startValue,The' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeedit', parameters: 'sender,location' },
            { name: 'beforegroupcollapse', parameters: 'grid,group' },
            { name: 'beforegroupexpand', parameters: 'grid,group' },
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
            { name: 'beforestartedit', parameters: 'editor,boundEl,value,The' },
            { name: 'beforestorechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'grid' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'grid,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'canceledit', parameters: 'editor,value,startValue' },
            { name: 'canceledit', parameters: 'sender,location' },
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
            { name: 'complete', parameters: 'editor,value,startValue,The' },
            { name: 'deactivate', parameters: 'oldActiveItem,grid,newActiveItem' },
            { name: 'deselect', parameters: 'grid,records' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'disclose', parameters: 'list,record,target,index,event' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'edit', parameters: 'sender,location' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'grid,event' },
            { name: 'focusenter', parameters: 'grid,event' },
            { name: 'focusleave', parameters: 'grid,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'groupcollapse', parameters: 'grid,group' },
            { name: 'groupexpand', parameters: 'grid,group' },
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
            { name: 'specialkey', parameters: 'editor,field,event' },
            { name: 'startedit', parameters: 'editor,boundEl,value,The' },
            { name: 'storechange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'grid' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'validateedit', parameters: 'sender,location' },
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
            'beforecomplete',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeedit',
            'beforegroupcollapse',
            'beforegroupexpand',
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
            'beforestartedit',
            'beforestorechange',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'canceledit',
            'canceledit',
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
            'complete',
            'deactivate',
            'deselect',
            'destroy',
            'disabledchange',
            'disclose',
            'dockedchange',
            'edit',
            'erased',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'groupcollapse',
            'groupexpand',
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
            'specialkey',
            'startedit',
            'storechange',
            'tofront',
            'topchange',
            'updatedata',
            'validateedit',
            'widthchange',
            'ready'
        ];
        return gridMetaData;
    }());
    var ExtGridComponent = /** @class */ (function (_super) {
        __extends(ExtGridComponent, _super);
        function ExtGridComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridComponent_1 = ExtGridComponent;
        ExtGridComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridMetaData);
        };
        ExtGridComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridComponent_1;
        ExtGridComponent = ExtGridComponent_1 = __decorate([
            core.Component({
                selector: 'ext-grid',
                inputs: gridMetaData.PROPERTIES,
                outputs: gridMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridComponent);
        return ExtGridComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var headercontainerMetaData = /** @class */ (function () {
        function headercontainerMetaData() {
        }
        headercontainerMetaData.XTYPE = 'headercontainer';
        headercontainerMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'cardSwitchAnimation',
            'centered',
            'cls',
            'columns',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultColumnUI',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
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
            'reserveScrollbar',
            'resetFocusPosition',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sortable',
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
            'verticalOverflow',
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
        headercontainerMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,headercontainer,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'headercontainer,item,index' },
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
            { name: 'beforetofront', parameters: 'headercontainer' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'headercontainer,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,headercontainer,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'headercontainer,event' },
            { name: 'focusenter', parameters: 'headercontainer,event' },
            { name: 'focusleave', parameters: 'headercontainer,event' },
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
            { name: 'move', parameters: 'headercontainer,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'headercontainer,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'headercontainer,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'headercontainer' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        headercontainerMetaData.EVENTNAMES = [
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
        return headercontainerMetaData;
    }());
    var ExtHeadercontainerComponent = /** @class */ (function (_super) {
        __extends(ExtHeadercontainerComponent, _super);
        function ExtHeadercontainerComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, headercontainerMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtHeadercontainerComponent_1 = ExtHeadercontainerComponent;
        ExtHeadercontainerComponent.prototype.ngOnInit = function () {
            this.baseOnInit(headercontainerMetaData);
        };
        ExtHeadercontainerComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(headercontainerMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtHeadercontainerComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtHeadercontainerComponent_1;
        ExtHeadercontainerComponent = ExtHeadercontainerComponent_1 = __decorate([
            core.Component({
                selector: 'ext-headercontainer',
                inputs: headercontainerMetaData.PROPERTIES,
                outputs: headercontainerMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtHeadercontainerComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtHeadercontainerComponent);
        return ExtHeadercontainerComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var lockedgridMetaData = /** @class */ (function () {
        function lockedgridMetaData() {
        }
        lockedgridMetaData.XTYPE = 'lockedgrid';
        lockedgridMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
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
            'columnMenu',
            'columns',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaultLockedRegion',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'enableColumnMove',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'gridDefaults',
            'grouped',
            'header',
            'headerPosition',
            'height',
            'hidden',
            'hideAnimation',
            'hideHeaders',
            'hideMode',
            'hideOnMaskTap',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'inactiveChildTabIndex',
            'innerCls',
            'instanceCls',
            'itemConfig',
            'itemId',
            'items',
            'keyMap',
            'keyMapEnabled',
            'keyMapTarget',
            'layout',
            'lbar',
            'left',
            'leftGridDefaults',
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
            'padding',
            'plugins',
            'publishes',
            'rbar',
            'record',
            'reference',
            'referenceHolder',
            'regions',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'resizable',
            'right',
            'rightGridDefaults',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'standardButtons',
            'stateful',
            'statefulDefaults',
            'stateId',
            'store',
            'style',
            'tabIndex',
            'tbar',
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
            'variableHeights',
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
        lockedgridMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,lockedgrid,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'lockedgrid,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecollapse', parameters: 'lockedgrid' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeexpand', parameters: 'lockedgrid' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforeresizedragstart', parameters: 'lockedgrid,context' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'lockedgrid' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'lockedgrid,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'collapse', parameters: 'lockedgrid' },
            { name: 'deactivate', parameters: 'oldActiveItem,lockedgrid,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'drawerhide', parameters: 'lockedgrid' },
            { name: 'drawershow', parameters: 'lockedgrid' },
            { name: 'erased', parameters: 'sender' },
            { name: 'expand', parameters: 'lockedgrid' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'lockedgrid,event' },
            { name: 'focusenter', parameters: 'lockedgrid,event' },
            { name: 'focusleave', parameters: 'lockedgrid,event' },
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
            { name: 'move', parameters: 'lockedgrid,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'lockedgrid,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'lockedgrid,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'resizedrag', parameters: 'lockedgrid,context' },
            { name: 'resizedragcancel', parameters: 'lockedgrid,context' },
            { name: 'resizedragend', parameters: 'lockedgrid,context' },
            { name: 'resizedragstart', parameters: 'lockedgrid,context' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'lockedgrid' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        lockedgridMetaData.EVENTNAMES = [
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
            'widthchange',
            'ready'
        ];
        return lockedgridMetaData;
    }());
    var ExtLockedgridComponent = /** @class */ (function (_super) {
        __extends(ExtLockedgridComponent, _super);
        function ExtLockedgridComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, lockedgridMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtLockedgridComponent_1 = ExtLockedgridComponent;
        ExtLockedgridComponent.prototype.ngOnInit = function () {
            this.baseOnInit(lockedgridMetaData);
        };
        ExtLockedgridComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(lockedgridMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtLockedgridComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtLockedgridComponent_1;
        ExtLockedgridComponent = ExtLockedgridComponent_1 = __decorate([
            core.Component({
                selector: 'ext-lockedgrid',
                inputs: lockedgridMetaData.PROPERTIES,
                outputs: lockedgridMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtLockedgridComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtLockedgridComponent);
        return ExtLockedgridComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var lockedgridregionMetaData = /** @class */ (function () {
        function lockedgridregionMetaData() {
        }
        lockedgridregionMetaData.XTYPE = 'lockedgridregion';
        lockedgridregionMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
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
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'grid',
            'header',
            'headerPosition',
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
            'locked',
            'manageBorders',
            'margin',
            'masked',
            'maxHeight',
            'maxWidth',
            'menuItem',
            'minButtonWidth',
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
            'rbar',
            'record',
            'reference',
            'referenceHolder',
            'regionKey',
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
            'standardButtons',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'tabIndex',
            'tbar',
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
        lockedgridregionMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,lockedgridregion,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'lockedgridregion,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecollapse', parameters: 'lockedgridregion' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeexpand', parameters: 'lockedgridregion' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforeresizedragstart', parameters: 'lockedgridregion,context' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'lockedgridregion' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'lockedgridregion,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'collapse', parameters: 'lockedgridregion' },
            { name: 'deactivate', parameters: 'oldActiveItem,lockedgridregion,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'drawerhide', parameters: 'lockedgridregion' },
            { name: 'drawershow', parameters: 'lockedgridregion' },
            { name: 'erased', parameters: 'sender' },
            { name: 'expand', parameters: 'lockedgridregion' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'lockedgridregion,event' },
            { name: 'focusenter', parameters: 'lockedgridregion,event' },
            { name: 'focusleave', parameters: 'lockedgridregion,event' },
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
            { name: 'move', parameters: 'lockedgridregion,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'lockedgridregion,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'lockedgridregion,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'resizedrag', parameters: 'lockedgridregion,context' },
            { name: 'resizedragcancel', parameters: 'lockedgridregion,context' },
            { name: 'resizedragend', parameters: 'lockedgridregion,context' },
            { name: 'resizedragstart', parameters: 'lockedgridregion,context' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'lockedgridregion' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        lockedgridregionMetaData.EVENTNAMES = [
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
            'widthchange',
            'ready'
        ];
        return lockedgridregionMetaData;
    }());
    var ExtLockedgridregionComponent = /** @class */ (function (_super) {
        __extends(ExtLockedgridregionComponent, _super);
        function ExtLockedgridregionComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, lockedgridregionMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtLockedgridregionComponent_1 = ExtLockedgridregionComponent;
        ExtLockedgridregionComponent.prototype.ngOnInit = function () {
            this.baseOnInit(lockedgridregionMetaData);
        };
        ExtLockedgridregionComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(lockedgridregionMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtLockedgridregionComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtLockedgridregionComponent_1;
        ExtLockedgridregionComponent = ExtLockedgridregionComponent_1 = __decorate([
            core.Component({
                selector: 'ext-lockedgridregion',
                inputs: lockedgridregionMetaData.PROPERTIES,
                outputs: lockedgridregionMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtLockedgridregionComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtLockedgridregionComponent);
        return ExtLockedgridregionComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridcolumnsmenuMetaData = /** @class */ (function () {
        function gridcolumnsmenuMetaData() {
        }
        gridcolumnsmenuMetaData.XTYPE = 'gridcolumnsmenu';
        gridcolumnsmenuMetaData.PROPERTIES = [
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
            'clickHideDelay',
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
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'handler',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnClick',
            'hideOnMaskTap',
            'href',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'indented',
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
            'menuExpandDelay',
            'menuHideDelay',
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
            'scope',
            'scrollable',
            'separator',
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
            'target',
            'text',
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
        gridcolumnsmenuMetaData.EVENTS = [
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
            { name: 'beforetofront', parameters: 'gridcolumnsmenu' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridcolumnsmenu,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridcolumnsmenu,event' },
            { name: 'focusenter', parameters: 'gridcolumnsmenu,event' },
            { name: 'focusleave', parameters: 'gridcolumnsmenu,event' },
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
            { name: 'tofront', parameters: 'gridcolumnsmenu' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridcolumnsmenuMetaData.EVENTNAMES = [
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
        return gridcolumnsmenuMetaData;
    }());
    var ExtGridcolumnsmenuComponent = /** @class */ (function (_super) {
        __extends(ExtGridcolumnsmenuComponent, _super);
        function ExtGridcolumnsmenuComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridcolumnsmenuMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridcolumnsmenuComponent_1 = ExtGridcolumnsmenuComponent;
        ExtGridcolumnsmenuComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridcolumnsmenuMetaData);
        };
        ExtGridcolumnsmenuComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridcolumnsmenuMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridcolumnsmenuComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridcolumnsmenuComponent_1;
        ExtGridcolumnsmenuComponent = ExtGridcolumnsmenuComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridcolumnsmenu',
                inputs: gridcolumnsmenuMetaData.PROPERTIES,
                outputs: gridcolumnsmenuMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridcolumnsmenuComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridcolumnsmenuComponent);
        return ExtGridcolumnsmenuComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridgroupbythismenuitemMetaData = /** @class */ (function () {
        function gridgroupbythismenuitemMetaData() {
        }
        gridgroupbythismenuitemMetaData.XTYPE = 'gridgroupbythismenuitem';
        gridgroupbythismenuitemMetaData.PROPERTIES = [
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
            'clickHideDelay',
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
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'handler',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnClick',
            'hideOnMaskTap',
            'href',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'indented',
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
            'menuExpandDelay',
            'menuHideDelay',
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
            'scope',
            'scrollable',
            'separator',
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
            'target',
            'text',
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
        gridgroupbythismenuitemMetaData.EVENTS = [
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
            { name: 'beforetofront', parameters: 'gridgroupbythismenuitem' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridgroupbythismenuitem,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridgroupbythismenuitem,event' },
            { name: 'focusenter', parameters: 'gridgroupbythismenuitem,event' },
            { name: 'focusleave', parameters: 'gridgroupbythismenuitem,event' },
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
            { name: 'tofront', parameters: 'gridgroupbythismenuitem' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridgroupbythismenuitemMetaData.EVENTNAMES = [
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
        return gridgroupbythismenuitemMetaData;
    }());
    var ExtGridgroupbythismenuitemComponent = /** @class */ (function (_super) {
        __extends(ExtGridgroupbythismenuitemComponent, _super);
        function ExtGridgroupbythismenuitemComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridgroupbythismenuitemMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridgroupbythismenuitemComponent_1 = ExtGridgroupbythismenuitemComponent;
        ExtGridgroupbythismenuitemComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridgroupbythismenuitemMetaData);
        };
        ExtGridgroupbythismenuitemComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridgroupbythismenuitemMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridgroupbythismenuitemComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridgroupbythismenuitemComponent_1;
        ExtGridgroupbythismenuitemComponent = ExtGridgroupbythismenuitemComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridgroupbythismenuitem',
                inputs: gridgroupbythismenuitemMetaData.PROPERTIES,
                outputs: gridgroupbythismenuitemMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridgroupbythismenuitemComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridgroupbythismenuitemComponent);
        return ExtGridgroupbythismenuitemComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridshowingroupsmenuitemMetaData = /** @class */ (function () {
        function gridshowingroupsmenuitemMetaData() {
        }
        gridshowingroupsmenuitemMetaData.XTYPE = 'gridshowingroupsmenuitem';
        gridshowingroupsmenuitemMetaData.PROPERTIES = [
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
            'checkChangeDisabled',
            'checked',
            'checkHandler',
            'clickHideDelay',
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
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'handler',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnClick',
            'hideOnMaskTap',
            'href',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'indented',
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
            'menuExpandDelay',
            'menuHideDelay',
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
            'scope',
            'scrollable',
            'separator',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'submenuText',
            'tabIndex',
            'target',
            'text',
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
            'align',
            'fitToParent',
            'config'
        ];
        gridshowingroupsmenuitemMetaData.EVENTS = [
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecheckchange', parameters: 'gridshowingroupsmenuitem,checked' },
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
            { name: 'beforetofront', parameters: 'gridshowingroupsmenuitem' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridshowingroupsmenuitem,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'checkchange', parameters: 'gridshowingroupsmenuitem,checked' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridshowingroupsmenuitem,event' },
            { name: 'focusenter', parameters: 'gridshowingroupsmenuitem,event' },
            { name: 'focusleave', parameters: 'gridshowingroupsmenuitem,event' },
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
            { name: 'tofront', parameters: 'gridshowingroupsmenuitem' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridshowingroupsmenuitemMetaData.EVENTNAMES = [
            'added',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecheckchange',
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
            'checkchange',
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
        return gridshowingroupsmenuitemMetaData;
    }());
    var ExtGridshowingroupsmenuitemComponent = /** @class */ (function (_super) {
        __extends(ExtGridshowingroupsmenuitemComponent, _super);
        function ExtGridshowingroupsmenuitemComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridshowingroupsmenuitemMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridshowingroupsmenuitemComponent_1 = ExtGridshowingroupsmenuitemComponent;
        ExtGridshowingroupsmenuitemComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridshowingroupsmenuitemMetaData);
        };
        ExtGridshowingroupsmenuitemComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridshowingroupsmenuitemMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridshowingroupsmenuitemComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridshowingroupsmenuitemComponent_1;
        ExtGridshowingroupsmenuitemComponent = ExtGridshowingroupsmenuitemComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridshowingroupsmenuitem',
                inputs: gridshowingroupsmenuitemMetaData.PROPERTIES,
                outputs: gridshowingroupsmenuitemMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridshowingroupsmenuitemComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridshowingroupsmenuitemComponent);
        return ExtGridshowingroupsmenuitemComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridsortascmenuitemMetaData = /** @class */ (function () {
        function gridsortascmenuitemMetaData() {
        }
        gridsortascmenuitemMetaData.XTYPE = 'gridsortascmenuitem';
        gridsortascmenuitemMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'alignSelf',
            'allowUncheck',
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
            'checkChangeDisabled',
            'checked',
            'checkHandler',
            'clickHideDelay',
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
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'group',
            'handler',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnClick',
            'hideOnMaskTap',
            'href',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'indented',
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
            'menuExpandDelay',
            'menuHideDelay',
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
            'scope',
            'scrollable',
            'separator',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'submenuText',
            'tabIndex',
            'target',
            'text',
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
            'align',
            'fitToParent',
            'config'
        ];
        gridsortascmenuitemMetaData.EVENTS = [
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecheckchange', parameters: 'gridsortascmenuitem,checked' },
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
            { name: 'beforetofront', parameters: 'gridsortascmenuitem' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridsortascmenuitem,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'checkchange', parameters: 'gridsortascmenuitem,checked' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridsortascmenuitem,event' },
            { name: 'focusenter', parameters: 'gridsortascmenuitem,event' },
            { name: 'focusleave', parameters: 'gridsortascmenuitem,event' },
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
            { name: 'tofront', parameters: 'gridsortascmenuitem' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridsortascmenuitemMetaData.EVENTNAMES = [
            'added',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecheckchange',
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
            'checkchange',
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
        return gridsortascmenuitemMetaData;
    }());
    var ExtGridsortascmenuitemComponent = /** @class */ (function (_super) {
        __extends(ExtGridsortascmenuitemComponent, _super);
        function ExtGridsortascmenuitemComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridsortascmenuitemMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridsortascmenuitemComponent_1 = ExtGridsortascmenuitemComponent;
        ExtGridsortascmenuitemComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridsortascmenuitemMetaData);
        };
        ExtGridsortascmenuitemComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridsortascmenuitemMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridsortascmenuitemComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridsortascmenuitemComponent_1;
        ExtGridsortascmenuitemComponent = ExtGridsortascmenuitemComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridsortascmenuitem',
                inputs: gridsortascmenuitemMetaData.PROPERTIES,
                outputs: gridsortascmenuitemMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridsortascmenuitemComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridsortascmenuitemComponent);
        return ExtGridsortascmenuitemComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridsortdescmenuitemMetaData = /** @class */ (function () {
        function gridsortdescmenuitemMetaData() {
        }
        gridsortdescmenuitemMetaData.XTYPE = 'gridsortdescmenuitem';
        gridsortdescmenuitemMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'alignSelf',
            'allowUncheck',
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
            'checkChangeDisabled',
            'checked',
            'checkHandler',
            'clickHideDelay',
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
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'group',
            'handler',
            'height',
            'hidden',
            'hideAnimation',
            'hideMode',
            'hideOnClick',
            'hideOnMaskTap',
            'href',
            'html',
            'icon',
            'iconAlign',
            'iconCls',
            'id',
            'indented',
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
            'menuExpandDelay',
            'menuHideDelay',
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
            'scope',
            'scrollable',
            'separator',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'submenuText',
            'tabIndex',
            'target',
            'text',
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
            'align',
            'fitToParent',
            'config'
        ];
        gridsortdescmenuitemMetaData.EVENTS = [
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecheckchange', parameters: 'gridsortdescmenuitem,checked' },
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
            { name: 'beforetofront', parameters: 'gridsortdescmenuitem' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridsortdescmenuitem,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'checkchange', parameters: 'gridsortdescmenuitem,checked' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridsortdescmenuitem,event' },
            { name: 'focusenter', parameters: 'gridsortdescmenuitem,event' },
            { name: 'focusleave', parameters: 'gridsortdescmenuitem,event' },
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
            { name: 'tofront', parameters: 'gridsortdescmenuitem' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridsortdescmenuitemMetaData.EVENTNAMES = [
            'added',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecheckchange',
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
            'checkchange',
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
        return gridsortdescmenuitemMetaData;
    }());
    var ExtGridsortdescmenuitemComponent = /** @class */ (function (_super) {
        __extends(ExtGridsortdescmenuitemComponent, _super);
        function ExtGridsortdescmenuitemComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridsortdescmenuitemMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridsortdescmenuitemComponent_1 = ExtGridsortdescmenuitemComponent;
        ExtGridsortdescmenuitemComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridsortdescmenuitemMetaData);
        };
        ExtGridsortdescmenuitemComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridsortdescmenuitemMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridsortdescmenuitemComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridsortdescmenuitemComponent_1;
        ExtGridsortdescmenuitemComponent = ExtGridsortdescmenuitemComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridsortdescmenuitem',
                inputs: gridsortdescmenuitemMetaData.PROPERTIES,
                outputs: gridsortdescmenuitemMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridsortdescmenuitemComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridsortdescmenuitemComponent);
        return ExtGridsortdescmenuitemComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var pagingtoolbarMetaData = /** @class */ (function () {
        function pagingtoolbarMetaData() {
        }
        pagingtoolbarMetaData.XTYPE = 'pagingtoolbar';
        pagingtoolbarMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
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
            'bodyCls',
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
            'defaultButtonUI',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
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
            'nextButton',
            'padding',
            'plugins',
            'prevButton',
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
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sliderField',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'summaryComponent',
            'tabIndex',
            'title',
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
        pagingtoolbarMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,pagingtoolbar,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'pagingtoolbar,item,index' },
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
            { name: 'beforetofront', parameters: 'pagingtoolbar' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'pagingtoolbar,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,pagingtoolbar,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'pagingtoolbar,event' },
            { name: 'focusenter', parameters: 'pagingtoolbar,event' },
            { name: 'focusleave', parameters: 'pagingtoolbar,event' },
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
            { name: 'move', parameters: 'pagingtoolbar,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'pagingtoolbar,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'pagingtoolbar,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'pagingtoolbar' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        pagingtoolbarMetaData.EVENTNAMES = [
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
        return pagingtoolbarMetaData;
    }());
    var ExtPagingtoolbarComponent = /** @class */ (function (_super) {
        __extends(ExtPagingtoolbarComponent, _super);
        function ExtPagingtoolbarComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, pagingtoolbarMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtPagingtoolbarComponent_1 = ExtPagingtoolbarComponent;
        ExtPagingtoolbarComponent.prototype.ngOnInit = function () {
            this.baseOnInit(pagingtoolbarMetaData);
        };
        ExtPagingtoolbarComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(pagingtoolbarMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtPagingtoolbarComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtPagingtoolbarComponent_1;
        ExtPagingtoolbarComponent = ExtPagingtoolbarComponent_1 = __decorate([
            core.Component({
                selector: 'ext-pagingtoolbar',
                inputs: pagingtoolbarMetaData.PROPERTIES,
                outputs: pagingtoolbarMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtPagingtoolbarComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtPagingtoolbarComponent);
        return ExtPagingtoolbarComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridrowMetaData = /** @class */ (function () {
        function gridrowMetaData() {
        }
        gridrowMetaData.XTYPE = 'gridrow';
        gridrowMetaData.PROPERTIES = [
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
            'body',
            'border',
            'bottom',
            'centered',
            'cls',
            'constrainAlign',
            'contentEl',
            'controller',
            'data',
            'defaultCellUI',
            'defaultListenerScope',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'expandedField',
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
            'pinned',
            'plugins',
            'publishes',
            'record',
            'recordIndex',
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
            'stickyVisibility',
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
        gridrowMetaData.EVENTS = [
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
            { name: 'beforetofront', parameters: 'gridrow' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridrow,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridrow,event' },
            { name: 'focusenter', parameters: 'gridrow,event' },
            { name: 'focusleave', parameters: 'gridrow,event' },
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
            { name: 'tofront', parameters: 'gridrow' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridrowMetaData.EVENTNAMES = [
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
        return gridrowMetaData;
    }());
    var ExtGridrowComponent = /** @class */ (function (_super) {
        __extends(ExtGridrowComponent, _super);
        function ExtGridrowComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridrowMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridrowComponent_1 = ExtGridrowComponent;
        ExtGridrowComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridrowMetaData);
        };
        ExtGridrowComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridrowMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridrowComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridrowComponent_1;
        ExtGridrowComponent = ExtGridrowComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridrow',
                inputs: gridrowMetaData.PROPERTIES,
                outputs: gridrowMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridrowComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridrowComponent);
        return ExtGridrowComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var rowbodyMetaData = /** @class */ (function () {
        function rowbodyMetaData() {
        }
        rowbodyMetaData.XTYPE = 'rowbody';
        rowbodyMetaData.PROPERTIES = [
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
        rowbodyMetaData.EVENTS = [
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
            { name: 'beforetofront', parameters: 'rowbody' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'rowbody,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'rowbody,event' },
            { name: 'focusenter', parameters: 'rowbody,event' },
            { name: 'focusleave', parameters: 'rowbody,event' },
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
            { name: 'tofront', parameters: 'rowbody' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        rowbodyMetaData.EVENTNAMES = [
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
        return rowbodyMetaData;
    }());
    var ExtRowbodyComponent = /** @class */ (function (_super) {
        __extends(ExtRowbodyComponent, _super);
        function ExtRowbodyComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, rowbodyMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtRowbodyComponent_1 = ExtRowbodyComponent;
        ExtRowbodyComponent.prototype.ngOnInit = function () {
            this.baseOnInit(rowbodyMetaData);
        };
        ExtRowbodyComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(rowbodyMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtRowbodyComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtRowbodyComponent_1;
        ExtRowbodyComponent = ExtRowbodyComponent_1 = __decorate([
            core.Component({
                selector: 'ext-rowbody',
                inputs: rowbodyMetaData.PROPERTIES,
                outputs: rowbodyMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtRowbodyComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtRowbodyComponent);
        return ExtRowbodyComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var roweditorbarMetaData = /** @class */ (function () {
        function roweditorbarMetaData() {
        }
        roweditorbarMetaData.XTYPE = 'roweditorbar';
        roweditorbarMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
            'allowFocusingDisabledChildren',
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
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'fullscreen',
            'header',
            'headerPosition',
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
            'standardButtons',
            'stateful',
            'statefulDefaults',
            'stateId',
            'style',
            'tabIndex',
            'tbar',
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
        roweditorbarMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,roweditorbar,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'roweditorbar,item,index' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecollapse', parameters: 'roweditorbar' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeexpand', parameters: 'roweditorbar' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforeresizedragstart', parameters: 'roweditorbar,context' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforetofront', parameters: 'roweditorbar' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'roweditorbar,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'collapse', parameters: 'roweditorbar' },
            { name: 'deactivate', parameters: 'oldActiveItem,roweditorbar,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'drawerhide', parameters: 'roweditorbar' },
            { name: 'drawershow', parameters: 'roweditorbar' },
            { name: 'erased', parameters: 'sender' },
            { name: 'expand', parameters: 'roweditorbar' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'roweditorbar,event' },
            { name: 'focusenter', parameters: 'roweditorbar,event' },
            { name: 'focusleave', parameters: 'roweditorbar,event' },
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
            { name: 'move', parameters: 'roweditorbar,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'roweditorbar,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'roweditorbar,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'resizedrag', parameters: 'roweditorbar,context' },
            { name: 'resizedragcancel', parameters: 'roweditorbar,context' },
            { name: 'resizedragend', parameters: 'roweditorbar,context' },
            { name: 'resizedragstart', parameters: 'roweditorbar,context' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'roweditorbar' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        roweditorbarMetaData.EVENTNAMES = [
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
            'widthchange',
            'ready'
        ];
        return roweditorbarMetaData;
    }());
    var ExtRoweditorbarComponent = /** @class */ (function (_super) {
        __extends(ExtRoweditorbarComponent, _super);
        function ExtRoweditorbarComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, roweditorbarMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtRoweditorbarComponent_1 = ExtRoweditorbarComponent;
        ExtRoweditorbarComponent.prototype.ngOnInit = function () {
            this.baseOnInit(roweditorbarMetaData);
        };
        ExtRoweditorbarComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(roweditorbarMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtRoweditorbarComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtRoweditorbarComponent_1;
        ExtRoweditorbarComponent = ExtRoweditorbarComponent_1 = __decorate([
            core.Component({
                selector: 'ext-roweditorbar',
                inputs: roweditorbarMetaData.PROPERTIES,
                outputs: roweditorbarMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtRoweditorbarComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtRoweditorbarComponent);
        return ExtRoweditorbarComponent;
    }(EngBase));

    //Ext.onReady(function() {
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
    var ExtRoweditorcellComponent = /** @class */ (function (_super) {
        __extends(ExtRoweditorcellComponent, _super);
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
        ExtRoweditorcellComponent = ExtRoweditorcellComponent_1 = __decorate([
            core.Component({
                selector: 'ext-roweditorcell',
                inputs: roweditorcellMetaData.PROPERTIES,
                outputs: roweditorcellMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtRoweditorcellComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtRoweditorcellComponent);
        return ExtRoweditorcellComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var roweditorMetaData = /** @class */ (function () {
        function roweditorMetaData() {
        }
        roweditorMetaData.XTYPE = 'roweditor';
        roweditorMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'buttonAlign',
            'cardSwitchAnimation',
            'centered',
            'cls',
            'constrainAlign',
            'contentEl',
            'control',
            'controller',
            'data',
            'dataMap',
            'defaultFocus',
            'defaultListenerScope',
            'defaults',
            'defaultToolWeights',
            'defaultType',
            'disabled',
            'displayed',
            'docked',
            'draggable',
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
            'itemCls',
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
            'minButtonWidth',
            'minHeight',
            'minWidth',
            'modal',
            'modelValidation',
            'name',
            'nameable',
            'nameHolder',
            'owner',
            'ownerListeners',
            'padding',
            'pinned',
            'plugins',
            'publishes',
            'record',
            'recordIndex',
            'reference',
            'referenceHolder',
            'relative',
            'renderTo',
            'resetFocusPosition',
            'right',
            'ripple',
            'scrollable',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'sourceListeners',
            'standardButtons',
            'stateful',
            'statefulDefaults',
            'stateId',
            'storeListeners',
            'style',
            'tabIndex',
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
        roweditorMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,roweditor,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: 'roweditor,item,index' },
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
            { name: 'beforetofront', parameters: 'roweditor' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'roweditor,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'deactivate', parameters: 'oldActiveItem,roweditor,newActiveItem' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'roweditor,event' },
            { name: 'focusenter', parameters: 'roweditor,event' },
            { name: 'focusleave', parameters: 'roweditor,event' },
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
            { name: 'move', parameters: 'roweditor,item,toIndex,fromIndex' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'remove', parameters: 'roweditor,item,index' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'roweditor,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'show', parameters: 'sender' },
            { name: 'tofront', parameters: 'roweditor' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'dataItem,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        roweditorMetaData.EVENTNAMES = [
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
        return roweditorMetaData;
    }());
    var ExtRoweditorComponent = /** @class */ (function (_super) {
        __extends(ExtRoweditorComponent, _super);
        function ExtRoweditorComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, roweditorMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtRoweditorComponent_1 = ExtRoweditorComponent;
        ExtRoweditorComponent.prototype.ngOnInit = function () {
            this.baseOnInit(roweditorMetaData);
        };
        ExtRoweditorComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(roweditorMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtRoweditorComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtRoweditorComponent_1;
        ExtRoweditorComponent = ExtRoweditorComponent_1 = __decorate([
            core.Component({
                selector: 'ext-roweditor',
                inputs: roweditorMetaData.PROPERTIES,
                outputs: roweditorMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtRoweditorComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtRoweditorComponent);
        return ExtRoweditorComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var roweditorgapMetaData = /** @class */ (function () {
        function roweditorgapMetaData() {
        }
        roweditorgapMetaData.XTYPE = 'roweditorgap';
        roweditorgapMetaData.PROPERTIES = [
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
        roweditorgapMetaData.EVENTS = [
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
            { name: 'beforetofront', parameters: 'roweditorgap' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'roweditorgap,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'roweditorgap,event' },
            { name: 'focusenter', parameters: 'roweditorgap,event' },
            { name: 'focusleave', parameters: 'roweditorgap,event' },
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
            { name: 'tofront', parameters: 'roweditorgap' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        roweditorgapMetaData.EVENTNAMES = [
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
        return roweditorgapMetaData;
    }());
    var ExtRoweditorgapComponent = /** @class */ (function (_super) {
        __extends(ExtRoweditorgapComponent, _super);
        function ExtRoweditorgapComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, roweditorgapMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtRoweditorgapComponent_1 = ExtRoweditorgapComponent;
        ExtRoweditorgapComponent.prototype.ngOnInit = function () {
            this.baseOnInit(roweditorgapMetaData);
        };
        ExtRoweditorgapComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(roweditorgapMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtRoweditorgapComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtRoweditorgapComponent_1;
        ExtRoweditorgapComponent = ExtRoweditorgapComponent_1 = __decorate([
            core.Component({
                selector: 'ext-roweditorgap',
                inputs: roweditorgapMetaData.PROPERTIES,
                outputs: roweditorgapMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtRoweditorgapComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtRoweditorgapComponent);
        return ExtRoweditorgapComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var rowheaderMetaData = /** @class */ (function () {
        function rowheaderMetaData() {
        }
        rowheaderMetaData.XTYPE = 'rowheader';
        rowheaderMetaData.PROPERTIES = [
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
            'defaultToolWeights',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'flex',
            'floated',
            'focusCls',
            'fullscreen',
            'group',
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
            'pinned',
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
        rowheaderMetaData.EVENTS = [
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
            { name: 'beforetofront', parameters: 'rowheader' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'rowheader,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'rowheader,event' },
            { name: 'focusenter', parameters: 'rowheader,event' },
            { name: 'focusleave', parameters: 'rowheader,event' },
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
            { name: 'tofront', parameters: 'rowheader' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        rowheaderMetaData.EVENTNAMES = [
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
        return rowheaderMetaData;
    }());
    var ExtRowheaderComponent = /** @class */ (function (_super) {
        __extends(ExtRowheaderComponent, _super);
        function ExtRowheaderComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, rowheaderMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtRowheaderComponent_1 = ExtRowheaderComponent;
        ExtRowheaderComponent.prototype.ngOnInit = function () {
            this.baseOnInit(rowheaderMetaData);
        };
        ExtRowheaderComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(rowheaderMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtRowheaderComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtRowheaderComponent_1;
        ExtRowheaderComponent = ExtRowheaderComponent_1 = __decorate([
            core.Component({
                selector: 'ext-rowheader',
                inputs: rowheaderMetaData.PROPERTIES,
                outputs: rowheaderMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtRowheaderComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtRowheaderComponent);
        return ExtRowheaderComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var gridsummaryrowMetaData = /** @class */ (function () {
        function gridsummaryrowMetaData() {
        }
        gridsummaryrowMetaData.XTYPE = 'gridsummaryrow';
        gridsummaryrowMetaData.PROPERTIES = [
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
            'body',
            'border',
            'bottom',
            'centered',
            'cls',
            'constrainAlign',
            'contentEl',
            'controller',
            'data',
            'defaultCellUI',
            'defaultListenerScope',
            'disabled',
            'displayed',
            'docked',
            'draggable',
            'expandedField',
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
            'pinned',
            'plugins',
            'publishes',
            'record',
            'recordIndex',
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
            'stickyVisibility',
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
        gridsummaryrowMetaData.EVENTS = [
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
            { name: 'beforetofront', parameters: 'gridsummaryrow' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'gridsummaryrow,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'gridsummaryrow,event' },
            { name: 'focusenter', parameters: 'gridsummaryrow,event' },
            { name: 'focusleave', parameters: 'gridsummaryrow,event' },
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
            { name: 'tofront', parameters: 'gridsummaryrow' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        gridsummaryrowMetaData.EVENTNAMES = [
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
        return gridsummaryrowMetaData;
    }());
    var ExtGridsummaryrowComponent = /** @class */ (function (_super) {
        __extends(ExtGridsummaryrowComponent, _super);
        function ExtGridsummaryrowComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, gridsummaryrowMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtGridsummaryrowComponent_1 = ExtGridsummaryrowComponent;
        ExtGridsummaryrowComponent.prototype.ngOnInit = function () {
            this.baseOnInit(gridsummaryrowMetaData);
        };
        ExtGridsummaryrowComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(gridsummaryrowMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtGridsummaryrowComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtGridsummaryrowComponent_1;
        ExtGridsummaryrowComponent = ExtGridsummaryrowComponent_1 = __decorate([
            core.Component({
                selector: 'ext-gridsummaryrow',
                inputs: gridsummaryrowMetaData.PROPERTIES,
                outputs: gridsummaryrowMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtGridsummaryrowComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtGridsummaryrowComponent);
        return ExtGridsummaryrowComponent;
    }(EngBase));

    //Ext.onReady(function() {
    var treeMetaData = /** @class */ (function () {
        function treeMetaData() {
        }
        treeMetaData.XTYPE = 'tree';
        treeMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'activeChildTabIndex',
            'activeItem',
            'alignSelf',
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
            'bodyCls',
            'border',
            'bottom',
            'bufferSize',
            'cardSwitchAnimation',
            'centered',
            'cls',
            'collapseDefaults',
            'collapsible',
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
            'enableColumnMove',
            'expanderFirst',
            'expanderOnly',
            'flex',
            'floated',
            'focusableContainer',
            'focusCls',
            'folderSort',
            'fullscreen',
            'grouped',
            'groupFooter',
            'groupHeader',
            'grouping',
            'groupPlaceholder',
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
            'selectOnExpander',
            'session',
            'shadow',
            'shareableName',
            'shim',
            'showAnimation',
            'singleExpand',
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
            'align',
            'fitToParent',
            'config'
        ];
        treeMetaData.EVENTS = [
            { name: 'activate', parameters: 'newActiveItem,tree,oldActiveItem' },
            { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
            { name: 'add', parameters: '' },
            { name: 'added', parameters: 'sender,container,index' },
            { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforecheckchange', parameters: 'tree,checked,current,record,e' },
            { name: 'beforecomplete', parameters: 'editor,value,startValue,The' },
            { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeedit', parameters: 'sender,location' },
            { name: 'beforegroupcollapse', parameters: 'tree,group' },
            { name: 'beforegroupexpand', parameters: 'tree,group' },
            { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforehide', parameters: 'sender' },
            { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeload', parameters: 'store,operation' },
            { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforenodecollapse', parameters: 'node,record' },
            { name: 'beforenodeexpand', parameters: 'row,record' },
            { name: 'beforeorientationchange', parameters: '' },
            { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforeselectionextend', parameters: 'grid,An,extension' },
            { name: 'beforeshow', parameters: 'sender' },
            { name: 'beforestartedit', parameters: 'editor,boundEl,value,The' },
            { name: 'beforestorechange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforetofront', parameters: 'tree' },
            { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
            { name: 'blur', parameters: 'tree,event' },
            { name: 'bottomchange', parameters: 'sender,value,oldValue' },
            { name: 'canceledit', parameters: 'editor,value,startValue' },
            { name: 'cellselection', parameters: 'grid,selection' },
            { name: 'centeredchange', parameters: 'sender,value,oldValue' },
            { name: 'checkchange', parameters: 'cell,checked,record,e' },
            { name: 'childdoubletap', parameters: 'tree,location' },
            { name: 'childlongpress', parameters: 'tree,location' },
            { name: 'childmouseenter', parameters: 'tree,location' },
            { name: 'childmouseleave', parameters: 'tree,location' },
            { name: 'childsingletap', parameters: 'tree,location' },
            { name: 'childtap', parameters: 'tree,location' },
            { name: 'childtaphold', parameters: 'tree,location' },
            { name: 'childtouchcancel', parameters: 'tree,location' },
            { name: 'childtouchend', parameters: 'tree,location' },
            { name: 'childtouchmove', parameters: 'tree,location' },
            { name: 'childtouchstart', parameters: 'tree,location' },
            { name: 'columnadd', parameters: 'tree,column,index' },
            { name: 'columnhide', parameters: 'tree,column' },
            { name: 'columnmenucreated', parameters: 'grid,column,menu' },
            { name: 'columnmove', parameters: 'tree,column,fromIndex,toIndex' },
            { name: 'columnremove', parameters: 'tree,column' },
            { name: 'columnresize', parameters: 'tree,column,width' },
            { name: 'columnselection', parameters: 'grid,selection' },
            { name: 'columnshow', parameters: 'tree,column' },
            { name: 'columnsort', parameters: 'tree,column,direction' },
            { name: 'complete', parameters: 'editor,value,startValue,The' },
            { name: 'deactivate', parameters: 'oldActiveItem,tree,newActiveItem' },
            { name: 'deselect', parameters: 'tree,records' },
            { name: 'destroy', parameters: '' },
            { name: 'disabledchange', parameters: 'sender,value,oldValue' },
            { name: 'disclose', parameters: 'list,record,target,index,event' },
            { name: 'dockedchange', parameters: 'sender,value,oldValue' },
            { name: 'edit', parameters: 'sender,location' },
            { name: 'erased', parameters: 'sender' },
            { name: 'floatingchange', parameters: 'sender,positioned' },
            { name: 'focus', parameters: 'tree,event' },
            { name: 'focusenter', parameters: 'tree,event' },
            { name: 'focusleave', parameters: 'tree,event' },
            { name: 'fullscreen', parameters: 'sender' },
            { name: 'groupcollapse', parameters: 'tree,group' },
            { name: 'groupexpand', parameters: 'tree,group' },
            { name: 'heightchange', parameters: 'sender,value,oldValue' },
            { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
            { name: 'hide', parameters: 'sender' },
            { name: 'initialize', parameters: 'sender' },
            { name: 'itemaction', parameters: 'tree,index,record,action' },
            { name: 'itemdoubletap', parameters: 'tree,index,target,record,e' },
            { name: 'itemlongpress', parameters: 'tree,index,target,record,e' },
            { name: 'itemmouseenter', parameters: 'tree,index,target,record,e' },
            { name: 'itemmouseleave', parameters: 'tree,index,target,record,e' },
            { name: 'itemsingletap', parameters: 'tree,index,target,record,e' },
            { name: 'itemswipe', parameters: 'tree,index,target,record,e' },
            { name: 'itemtap', parameters: 'tree,index,target,record,e' },
            { name: 'itemtaphold', parameters: 'tree,index,target,record,e' },
            { name: 'itemtouchcancel', parameters: 'tree,index,target,record,e' },
            { name: 'itemtouchend', parameters: 'tree,index,target,record,e' },
            { name: 'itemtouchmove', parameters: 'tree,index,target,record,e' },
            { name: 'itemtouchstart', parameters: 'tree,index,target,record,e' },
            { name: 'leftchange', parameters: 'sender,value,oldValue' },
            { name: 'load', parameters: 'tree,records,successful,operation,node' },
            { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
            { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
            { name: 'move', parameters: '' },
            { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
            { name: 'navigate', parameters: 'tree,to,from' },
            { name: 'nodecollapse', parameters: 'node,record' },
            { name: 'nodeexpand', parameters: 'row,record' },
            { name: 'orientationchange', parameters: '' },
            { name: 'painted', parameters: 'sender,element' },
            { name: 'positionedchange', parameters: 'sender,positioned' },
            { name: 'refresh', parameters: 'tree' },
            { name: 'remove', parameters: '' },
            { name: 'removed', parameters: 'sender,container,index' },
            { name: 'renderedchange', parameters: 'tree,item,rendered' },
            { name: 'resize', parameters: 'element,info' },
            { name: 'rightchange', parameters: 'sender,value,oldValue' },
            { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
            { name: 'select', parameters: 'tree,selected' },
            { name: 'selectionextenderdrag', parameters: 'grid,An,extension' },
            { name: 'show', parameters: 'sender' },
            { name: 'specialkey', parameters: 'editor,field,event' },
            { name: 'startedit', parameters: 'editor,boundEl,value,The' },
            { name: 'storechange', parameters: 'sender,value,oldValue' },
            { name: 'tofront', parameters: 'tree' },
            { name: 'topchange', parameters: 'sender,value,oldValue' },
            { name: 'updatedata', parameters: 'sender,newData' },
            { name: 'validateedit', parameters: 'sender,location' },
            { name: 'widthchange', parameters: 'sender,value,oldValue' },
            { name: 'ready', parameters: '' }
        ];
        treeMetaData.EVENTNAMES = [
            'activate',
            'activeItemchange',
            'add',
            'added',
            'beforeactiveItemchange',
            'beforebottomchange',
            'beforecenteredchange',
            'beforecheckchange',
            'beforecomplete',
            'beforedisabledchange',
            'beforedockedchange',
            'beforeedit',
            'beforegroupcollapse',
            'beforegroupexpand',
            'beforeheightchange',
            'beforehiddenchange',
            'beforehide',
            'beforeleftchange',
            'beforeload',
            'beforemaxHeightchange',
            'beforemaxWidthchange',
            'beforeminHeightchange',
            'beforeminWidthchange',
            'beforenodecollapse',
            'beforenodeexpand',
            'beforeorientationchange',
            'beforerightchange',
            'beforescrollablechange',
            'beforeselectionextend',
            'beforeshow',
            'beforestartedit',
            'beforestorechange',
            'beforetofront',
            'beforetopchange',
            'beforewidthchange',
            'blur',
            'bottomchange',
            'canceledit',
            'cellselection',
            'centeredchange',
            'checkchange',
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
            'complete',
            'deactivate',
            'deselect',
            'destroy',
            'disabledchange',
            'disclose',
            'dockedchange',
            'edit',
            'erased',
            'floatingchange',
            'focus',
            'focusenter',
            'focusleave',
            'fullscreen',
            'groupcollapse',
            'groupexpand',
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
            'load',
            'maxHeightchange',
            'maxWidthchange',
            'minHeightchange',
            'minWidthchange',
            'move',
            'moved',
            'navigate',
            'nodecollapse',
            'nodeexpand',
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
            'specialkey',
            'startedit',
            'storechange',
            'tofront',
            'topchange',
            'updatedata',
            'validateedit',
            'widthchange',
            'ready'
        ];
        return treeMetaData;
    }());
    var ExtTreeComponent = /** @class */ (function (_super) {
        __extends(ExtTreeComponent, _super);
        function ExtTreeComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, treeMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtTreeComponent_1 = ExtTreeComponent;
        ExtTreeComponent.prototype.ngOnInit = function () {
            this.baseOnInit(treeMetaData);
        };
        ExtTreeComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(treeMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtTreeComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtTreeComponent_1;
        ExtTreeComponent = ExtTreeComponent_1 = __decorate([
            core.Component({
                selector: 'ext-tree',
                inputs: treeMetaData.PROPERTIES,
                outputs: treeMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtTreeComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtTreeComponent);
        return ExtTreeComponent;
    }(EngBase));

    var ExtAngularModule = /** @class */ (function () {
        function ExtAngularModule() {
        }
        ExtAngularModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [
                    ExtGridcellbaseComponent,
                    ExtBooleancellComponent,
                    ExtGridcellComponent,
                    ExtCheckcellComponent,
                    ExtDatecellComponent,
                    ExtNumbercellComponent,
                    ExtRownumberercellComponent,
                    ExtTextcellComponent,
                    ExtTreecellComponent,
                    ExtWidgetcellComponent,
                    ExtCelleditorComponent,
                    ExtBooleancolumnComponent,
                    ExtCheckcolumnComponent,
                    ExtGridcolumnComponent,
                    ExtColumnComponent,
                    ExtTemplatecolumnComponent,
                    ExtDatecolumnComponent,
                    ExtDragcolumnComponent,
                    ExtNumbercolumnComponent,
                    ExtRownumbererComponent,
                    ExtSelectioncolumnComponent,
                    ExtTextcolumnComponent,
                    ExtTreecolumnComponent,
                    ExtGridComponent,
                    ExtHeadercontainerComponent,
                    ExtLockedgridComponent,
                    ExtLockedgridregionComponent,
                    ExtGridcolumnsmenuComponent,
                    ExtGridgroupbythismenuitemComponent,
                    ExtGridshowingroupsmenuitemComponent,
                    ExtGridsortascmenuitemComponent,
                    ExtGridsortdescmenuitemComponent,
                    ExtPagingtoolbarComponent,
                    ExtGridrowComponent,
                    ExtRowbodyComponent,
                    ExtRoweditorbarComponent,
                    ExtRoweditorcellComponent,
                    ExtRoweditorComponent,
                    ExtRoweditorgapComponent,
                    ExtRowheaderComponent,
                    ExtGridsummaryrowComponent,
                    ExtTreeComponent,
                ],
                providers: [],
                entryComponents: [],
                exports: [
                    ExtGridcellbaseComponent,
                    ExtBooleancellComponent,
                    ExtGridcellComponent,
                    ExtCheckcellComponent,
                    ExtDatecellComponent,
                    ExtNumbercellComponent,
                    ExtRownumberercellComponent,
                    ExtTextcellComponent,
                    ExtTreecellComponent,
                    ExtWidgetcellComponent,
                    ExtCelleditorComponent,
                    ExtBooleancolumnComponent,
                    ExtCheckcolumnComponent,
                    ExtGridcolumnComponent,
                    ExtColumnComponent,
                    ExtTemplatecolumnComponent,
                    ExtDatecolumnComponent,
                    ExtDragcolumnComponent,
                    ExtNumbercolumnComponent,
                    ExtRownumbererComponent,
                    ExtSelectioncolumnComponent,
                    ExtTextcolumnComponent,
                    ExtTreecolumnComponent,
                    ExtGridComponent,
                    ExtHeadercontainerComponent,
                    ExtLockedgridComponent,
                    ExtLockedgridregionComponent,
                    ExtGridcolumnsmenuComponent,
                    ExtGridgroupbythismenuitemComponent,
                    ExtGridshowingroupsmenuitemComponent,
                    ExtGridsortascmenuitemComponent,
                    ExtGridsortdescmenuitemComponent,
                    ExtPagingtoolbarComponent,
                    ExtGridrowComponent,
                    ExtRowbodyComponent,
                    ExtRoweditorbarComponent,
                    ExtRoweditorcellComponent,
                    ExtRoweditorComponent,
                    ExtRoweditorgapComponent,
                    ExtRowheaderComponent,
                    ExtGridsummaryrowComponent,
                    ExtTreeComponent,
                ]
            })
        ], ExtAngularModule);
        return ExtAngularModule;
    }());

    exports.ExtAngularModule = ExtAngularModule;
    exports.ɵa = gridcellbaseMetaData;
    exports.ɵb = ExtGridcellbaseComponent;
    exports.ɵba = ExtCheckcolumnComponent;
    exports.ɵbb = gridcolumnMetaData;
    exports.ɵbc = ExtGridcolumnComponent;
    exports.ɵbd = columnMetaData;
    exports.ɵbe = ExtColumnComponent;
    exports.ɵbf = templatecolumnMetaData;
    exports.ɵbg = ExtTemplatecolumnComponent;
    exports.ɵbh = datecolumnMetaData;
    exports.ɵbi = ExtDatecolumnComponent;
    exports.ɵbj = dragcolumnMetaData;
    exports.ɵbk = ExtDragcolumnComponent;
    exports.ɵbl = numbercolumnMetaData;
    exports.ɵbm = ExtNumbercolumnComponent;
    exports.ɵbn = rownumbererMetaData;
    exports.ɵbo = ExtRownumbererComponent;
    exports.ɵbp = selectioncolumnMetaData;
    exports.ɵbq = ExtSelectioncolumnComponent;
    exports.ɵbr = textcolumnMetaData;
    exports.ɵbs = ExtTextcolumnComponent;
    exports.ɵbt = treecolumnMetaData;
    exports.ɵbu = ExtTreecolumnComponent;
    exports.ɵbv = gridMetaData;
    exports.ɵbw = ExtGridComponent;
    exports.ɵbx = headercontainerMetaData;
    exports.ɵby = ExtHeadercontainerComponent;
    exports.ɵbz = lockedgridMetaData;
    exports.ɵc = EngBase;
    exports.ɵca = ExtLockedgridComponent;
    exports.ɵcb = lockedgridregionMetaData;
    exports.ɵcc = ExtLockedgridregionComponent;
    exports.ɵcd = gridcolumnsmenuMetaData;
    exports.ɵce = ExtGridcolumnsmenuComponent;
    exports.ɵcf = gridgroupbythismenuitemMetaData;
    exports.ɵcg = ExtGridgroupbythismenuitemComponent;
    exports.ɵch = gridshowingroupsmenuitemMetaData;
    exports.ɵci = ExtGridshowingroupsmenuitemComponent;
    exports.ɵcj = gridsortascmenuitemMetaData;
    exports.ɵck = ExtGridsortascmenuitemComponent;
    exports.ɵcl = gridsortdescmenuitemMetaData;
    exports.ɵcm = ExtGridsortdescmenuitemComponent;
    exports.ɵcn = pagingtoolbarMetaData;
    exports.ɵco = ExtPagingtoolbarComponent;
    exports.ɵcp = gridrowMetaData;
    exports.ɵcq = ExtGridrowComponent;
    exports.ɵcr = rowbodyMetaData;
    exports.ɵcs = ExtRowbodyComponent;
    exports.ɵct = roweditorbarMetaData;
    exports.ɵcu = ExtRoweditorbarComponent;
    exports.ɵcv = roweditorcellMetaData;
    exports.ɵcw = ExtRoweditorcellComponent;
    exports.ɵcx = roweditorMetaData;
    exports.ɵcy = ExtRoweditorComponent;
    exports.ɵcz = roweditorgapMetaData;
    exports.ɵd = booleancellMetaData;
    exports.ɵda = ExtRoweditorgapComponent;
    exports.ɵdb = rowheaderMetaData;
    exports.ɵdc = ExtRowheaderComponent;
    exports.ɵdd = gridsummaryrowMetaData;
    exports.ɵde = ExtGridsummaryrowComponent;
    exports.ɵdf = treeMetaData;
    exports.ɵdg = ExtTreeComponent;
    exports.ɵe = ExtBooleancellComponent;
    exports.ɵf = gridcellMetaData;
    exports.ɵg = ExtGridcellComponent;
    exports.ɵh = checkcellMetaData;
    exports.ɵi = ExtCheckcellComponent;
    exports.ɵj = datecellMetaData;
    exports.ɵk = ExtDatecellComponent;
    exports.ɵl = numbercellMetaData;
    exports.ɵm = ExtNumbercellComponent;
    exports.ɵn = rownumberercellMetaData;
    exports.ɵo = ExtRownumberercellComponent;
    exports.ɵp = textcellMetaData;
    exports.ɵq = ExtTextcellComponent;
    exports.ɵr = treecellMetaData;
    exports.ɵs = ExtTreecellComponent;
    exports.ɵt = widgetcellMetaData;
    exports.ɵu = ExtWidgetcellComponent;
    exports.ɵv = celleditorMetaData;
    exports.ɵw = ExtCelleditorComponent;
    exports.ɵx = booleancolumnMetaData;
    exports.ɵy = ExtBooleancolumnComponent;
    exports.ɵz = checkcolumnMetaData;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sencha-ext-angular-grid.umd.js.map
