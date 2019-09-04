(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('script-loader!../ext/ext..prod'), require('script-loader!../ext/css.prod')) :
    typeof define === 'function' && define.amd ? define('@sencha/ext-angular', ['exports', '@angular/core', 'script-loader!../ext/ext..prod', 'script-loader!../ext/css.prod'], factory) :
    (global = global || self, factory((global.sencha = global.sencha || {}, global.sencha['ext-angular'] = {}), global.ng.core));
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
                component.A.CHILDRENCOMPONENTS = component.rawChildren;
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
    var buttonMetaData = /** @class */ (function () {
        function buttonMetaData() {
        }
        buttonMetaData.XTYPE = 'button';
        buttonMetaData.PROPERTIES = [
            'eng',
            'viewport',
            'align',
            'plugins',
            'responsiveConfig',
            'responsiveFormulas',
            'alignSelf',
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
            'align',
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
        function ExtButtonComponent(eRef, hostComponent) {
            var _this = _super.call(this, eRef.nativeElement, buttonMetaData, hostComponent) || this;
            _this.hostComponent = hostComponent;
            return _this;
        }
        ExtButtonComponent_1 = ExtButtonComponent;
        ExtButtonComponent.prototype.ngOnInit = function () {
            this.baseOnInit(buttonMetaData);
        };
        ExtButtonComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit(buttonMetaData);
        };
        //public ngAfterContentInit() {
        //  this.baseAfterContentInit()
        //}
        ExtButtonComponent.prototype.ngOnChanges = function (changes) { this.baseOnChanges(changes); };
        var ExtButtonComponent_1;
        ExtButtonComponent = ExtButtonComponent_1 = __decorate([
            core.Component({
                selector: 'ext-button',
                inputs: buttonMetaData.PROPERTIES,
                outputs: buttonMetaData.EVENTNAMES,
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtButtonComponent_1; }) }],
                template: '<ng-template></ng-template>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf()),
            __metadata("design:paramtypes", [core.ElementRef, EngBase])
        ], ExtButtonComponent);
        return ExtButtonComponent;
    }(EngBase));

    var ExtAngularModule = /** @class */ (function () {
        function ExtAngularModule() {
        }
        ExtAngularModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [
                    ExtButtonComponent,
                ],
                providers: [],
                entryComponents: [],
                exports: [
                    ExtButtonComponent,
                ]
            })
        ], ExtAngularModule);
        return ExtAngularModule;
    }());

    exports.ExtAngularModule = ExtAngularModule;
    exports.ɵa = buttonMetaData;
    exports.ɵb = ExtButtonComponent;
    exports.ɵc = EngBase;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=sencha-ext-angular.umd.js.map
