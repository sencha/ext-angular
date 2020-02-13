(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@sencha/ext-web-components-modern')) :
    typeof define === 'function' && define.amd ? define('@sencha/ext-angular-modern', ['exports', '@angular/core', '@sencha/ext-web-components-modern'], factory) :
    (global = global || self, factory((global.sencha = global.sencha || {}, global.sencha['ext-angular-modern'] = {}), global.ng.core, global.EWCButton));
}(this, (function (exports, core, EWCButton) { 'use strict';

    EWCButton = EWCButton && EWCButton.hasOwnProperty('default') ? EWCButton['default'] : EWCButton;

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

    var Ext = window['Ext'];
    var EngBase = /** @class */ (function () {
        function EngBase(eRef, hostComponent, properties, events, eventnames, vc) {
            this.node = eRef.nativeElement;
            this.parentNode = hostComponent;
            this.properties = properties;
            this.eventnames = eventnames;
            //this.vc = vc;
            var me = this;
            this.eventnames.forEach(function (eventname) {
                if (eventname != "layout") {
                    me[eventname] = new core.EventEmitter();
                }
            });
            this.A = {};
            this.A.props = {};
            this.base = EngBase;
        }
        Object.defineProperty(EngBase.prototype, "childComponents", {
            //@ViewChildren(EngBase) _viewchildComponents: QueryList<EngBase>;
            get: function () {
                var _this = this;
                if (this._childComponents == undefined) {
                    return [];
                }
                return this._childComponents.filter(function (item) { return item !== _this; });
            },
            enumerable: true,
            configurable: true
        });
        EngBase.prototype.baseOnInit = function () {
            //console.log('baseOnInit')
            this.node.newDiv = document.createElement('ext-' + this.xtype);
            for (var i = 0; i < this.properties.length; i++) {
                var property = this.properties[i];
                if (this[property] !== undefined) {
                    if (property != 'fullscreen' && property != 'xtype') {
                        if (typeof this[property] == 'function') {
                            this.node.newDiv.attributeObjects[property] = this[property];
                            this.node.newDiv.setAttribute(property, 'function');
                        }
                        else if (typeof this[property] == 'object') {
                            var sPropVal = '';
                            try {
                                sPropVal = JSON.stringify(this[property]);
                                this.node.newDiv.setAttribute(property, sPropVal);
                            }
                            catch (e) {
                                this.node.newDiv.attributeObjects[property] = this[property];
                                this.node.newDiv.setAttribute(property, 'object');
                            }
                        }
                        else {
                            this.node.newDiv.setAttribute(property, this[property]);
                        }
                    }
                }
            }
            var me = this;
            this.eventnames.forEach(function (eventname) {
                me.node.newDiv.addEventListener(eventname, function (event) {
                    if (me[eventname] != false) {
                        if (eventname != 'layout') {
                            //console.log(eventname)
                            //console.log(me[eventname])
                            me[eventname].emit(event.detail);
                        }
                        //me[eventname].emit(event.detail);
                    }
                });
            });
            if (this.node.parentNode.nodeName.substring(0, 3) !== 'EXT') {
                this.node.after(this.node.newDiv);
            }
            else {
                this.node.parentNode.newDiv.appendChild(this.node.newDiv);
            }
        };
        EngBase.prototype.baseAfterViewInit = function () {
            var me = this;
            this._extitems.toArray().forEach(function (item) {
                //me.node.newDiv.appendChild(Ext.get(item.nativeElement).dom);
                me.node.newDiv.appendChild(item.nativeElement);
            });
        };
        EngBase.prototype.baseOnChanges = function (changes) {
            for (var propName in changes) {
                var val = changes[propName].currentValue;
                if (this.node.newDiv != undefined) {
                    var propertyVal = '';
                    if (typeof val == 'string') {
                        propertyVal = val;
                    }
                    else {
                        propertyVal = JSON.stringify(val);
                    }
                    this.node.newDiv.setAttribute(propName, propertyVal);
                }
            }
        };
        EngBase.prototype.baseOnDestroy = function () {
            try {
                if (this.node.parentNode != undefined) {
                    if (this.node.parentNode.newDiv != undefined) {
                        this.node.parentNode.newDiv.removeChild(this.node.newDiv);
                    }
                }
            }
            catch (e) {
                console.log(e.toString());
            }
        };
        __decorate([
            core.ContentChildren('extitem')
        ], EngBase.prototype, "_extitems", void 0);
        __decorate([
            core.ContentChildren(EngBase)
        ], EngBase.prototype, "_childComponents", void 0);
        return EngBase;
    }());

    var ExtButtonComponent = /** @class */ (function (_super) {
        __extends(ExtButtonComponent, _super);
        function ExtButtonComponent(eRef, hostComponent, vc) {
            var _this = _super.call(this, eRef, hostComponent, ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'allowDepress', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'arrow', 'arrowAlign', 'autoEvent', 'axisLock', 'badgeText', 'bind', 'border', 'bottom', 'buttonType', 'centered', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'defaultListenerScope', 'destroyMenu', 'disabled', 'displayed', 'docked', 'draggable', 'enableToggle', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'handler', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'pressed', 'pressedDelay', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'right', 'ripple', 'scope', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'stretchMenu', 'style', 'tabIndex', 'text', 'textAlign', 'toFrontOnShow', 'toggleHandler', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',], (new EWCButton()).events, ['ready', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforepressedchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'moved', 'orientationchange', 'painted', 'positionedchange', 'pressedchange', 'release', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tap', 'tofront', 'topchange', 'updatedata', 'widthchange',], vc) || this;
            _this.xtype = 'button';
            return _this;
        }
        ExtButtonComponent_1 = ExtButtonComponent;
        ExtButtonComponent.prototype.ngOnInit = function () {
            this.baseOnInit();
        };
        ExtButtonComponent.prototype.ngAfterViewInit = function () {
            this.baseAfterViewInit();
        };
        ExtButtonComponent.prototype.ngOnChanges = function (changes) {
            this.baseOnChanges(changes);
        };
        ExtButtonComponent.prototype.ngOnDestroy = function () {
            this.baseOnDestroy();
        };
        var ExtButtonComponent_1;
        ExtButtonComponent.ctorParameters = function () { return [
            { type: core.ElementRef },
            { type: EngBase, decorators: [{ type: core.Host }, { type: core.Optional }, { type: core.SkipSelf }] },
            { type: core.ViewContainerRef }
        ]; };
        ExtButtonComponent = ExtButtonComponent_1 = __decorate([
            core.Component({
                selector: 'ExtButton',
                inputs: ['aMe', 'header', 'renderer', 'label', 'fitToParent', 'tab', 'config', 'platformConfig', 'extname', 'viewport', 'align', 'plugins', 'responsiveConfig', 'responsiveFormulas', 'alignSelf', 'allowDepress', 'alwaysOnTop', 'ariaAttributes', 'ariaDescribedBy', 'ariaLabel', 'ariaLabelledBy', 'arrow', 'arrowAlign', 'autoEvent', 'axisLock', 'badgeText', 'bind', 'border', 'bottom', 'buttonType', 'centered', 'cls', 'constrainAlign', 'contentEl', 'controller', 'data', 'defaultListenerScope', 'destroyMenu', 'disabled', 'displayed', 'docked', 'draggable', 'enableToggle', 'undefined', 'undefined', 'undefined', 'flex', 'floated', 'focusCls', 'fullscreen', 'handler', 'height', 'hidden', 'hideAnimation', 'hideMode', 'hideOnMaskTap', 'html', 'icon', 'iconAlign', 'iconCls', 'id', 'instanceCls', 'itemId', 'keyMap', 'keyMapEnabled', 'keyMapTarget', 'left', 'listeners', 'margin', 'maxHeight', 'maxWidth', 'menu', 'menuAlign', 'minHeight', 'minWidth', 'modal', 'modelValidation', 'name', 'nameable', 'padding', 'plugins', 'pressed', 'pressedDelay', 'publishes', 'record', 'reference', 'relative', 'renderTo', 'right', 'ripple', 'scope', 'scrollable', 'session', 'shadow', 'shareableName', 'shim', 'showAnimation', 'stateful', 'statefulDefaults', 'stateId', 'stretchMenu', 'style', 'tabIndex', 'text', 'textAlign', 'toFrontOnShow', 'toggleHandler', 'tooltip', 'top', 'touchAction', 'tpl', 'tplWriteMode', 'translatable', 'twoWayBindable', 'ui', 'userCls', 'userSelectable', 'value', 'viewModel', 'weight', 'width', 'x', 'xtype', 'y', 'zIndex',],
                outputs: ['ready', 'added', 'beforebottomchange', 'beforecenteredchange', 'beforedisabledchange', 'beforedockedchange', 'beforeheightchange', 'beforehiddenchange', 'beforehide', 'beforeleftchange', 'beforemaxHeightchange', 'beforemaxWidthchange', 'beforeminHeightchange', 'beforeminWidthchange', 'beforeorientationchange', 'beforepressedchange', 'beforerightchange', 'beforescrollablechange', 'beforeshow', 'beforetofront', 'beforetopchange', 'beforewidthchange', 'blur', 'bottomchange', 'centeredchange', 'destroy', 'disabledchange', 'dockedchange', 'erased', 'floatingchange', 'focus', 'focusenter', 'focusleave', 'fullscreen', 'heightchange', 'hiddenchange', 'hide', 'initialize', 'leftchange', 'maxHeightchange', 'maxWidthchange', 'minHeightchange', 'minWidthchange', 'moved', 'orientationchange', 'painted', 'positionedchange', 'pressedchange', 'release', 'removed', 'resize', 'rightchange', 'scrollablechange', 'show', 'tap', 'tofront', 'topchange', 'updatedata', 'widthchange',],
                providers: [{ provide: EngBase, useExisting: core.forwardRef(function () { return ExtButtonComponent_1; }) }],
                template: '<ng-content></ng-content>'
            }),
            __param(1, core.Host()), __param(1, core.Optional()), __param(1, core.SkipSelf())
        ], ExtButtonComponent);
        return ExtButtonComponent;
    }(EngBase));
    // function toPascalCase(s) {
    //     return s.match(/[a-z]+/gi)
    //         .map(function (word) {
    //             return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase()
    //         })
    //         .join('')
    // }
    // var pascalName = toPascalCase(tagName)
    //var events = (new EWCButton()).eventnames;
    //var eventnamesall = [];
    //events.forEach( (event: any, n: any) => {
    //    eventnamesall.push(event.name)
    //})
    //const distinct = (value, index, self) => {
    //    //return true
    //    return self.indexOf(value) === index;
    //}
    //var eventnames = eventnamesall.filter(distinct);

    var Ext$1 = window['Ext'];
    function extLaunchFactory() {
        var x = function () {
            //console.log('Hi from exported function');
            return new Promise(function (resolve, reject) {
                //console.log("Loading Ext JS...");
                Ext$1.onReady(function () {
                    //console.log("Ext has loaded...");
                    resolve();
                });
            });
        };
        return x;
    }
    // var extLaunchFactory = () => {
    //   return () => new Promise<void>((resolve, reject) => {
    //       console.log("Loading Ext JS...");
    //       Ext.onReady(function () {
    //         console.log("Ext has loaded...");
    //         resolve();
    //       });
    //   });
    // }
    //var ExtAppInitLaunchProvider = { provide: APP_INITIALIZER, useFactory: extLaunchFactory, deps: [], multi: true };
    var ExtAngularModernModule = /** @class */ (function () {
        function ExtAngularModernModule() {
        }
        ExtAngularModernModule = __decorate([
            core.NgModule({
                imports: [],
                declarations: [
                    ExtButtonComponent,
                ],
                providers: [
                    { provide: core.APP_INITIALIZER, useFactory: extLaunchFactory, deps: [], multi: true }
                ],
                entryComponents: [],
                exports: [
                    ExtButtonComponent,
                ]
            })
        ], ExtAngularModernModule);
        return ExtAngularModernModule;
    }());

    exports.ExtAngularModernModule = ExtAngularModernModule;
    exports.extLaunchFactory = extLaunchFactory;
    exports.ɵa = ExtButtonComponent;
    exports.ɵb = EngBase;

    Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=sencha-ext-angular-modern.umd.js.map
