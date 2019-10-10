import { __decorate, __metadata, __extends, __param } from 'tslib';
import { EventEmitter, ContentChild, ContentChildren, QueryList, ElementRef, Host, Optional, SkipSelf, Component, forwardRef, NgModule } from '@angular/core';
import 'script-loader!node_modules/@sencha/ext-angular-grid/ext/ext.grid';
import 'script-loader!node_modules/@sencha/ext-angular-grid/ext/css.grid';

var EngBase = /** @class */ (function () {
    function EngBase(eRef, hostComponent, properties, events) {
        var _this = this;
        this.node = eRef.nativeElement;
        this.parentNode = hostComponent;
        this.properties = properties;
        this.events = events;
        this.events.forEach(function (event, n) {
            if (event.name != 'fullscreen') {
                _this[event.name] = new EventEmitter();
            }
            else {
                _this[event.name + 'event'] = new EventEmitter();
            }
        });
        this.newDiv = document.createElement('div');
        //var t = document.createTextNode("newDiv");
        //this.newDiv.appendChild(t);
        this.node.insertAdjacentElement('beforebegin', this.newDiv);
        this.base = EngBase;
    }
    Object.defineProperty(EngBase.prototype, "childComponents", {
        get: function () {
            var _this = this;
            return this._childComponents.filter(function (item) { return item !== _this; });
        },
        enumerable: true,
        configurable: true
    });
    EngBase.prototype.baseOnInit = function () { };
    EngBase.prototype.baseAfterViewInit = function () {
        this.initMe();
    };
    //******* base start */
    EngBase.prototype.initMe = function () {
        //console.log('');console.log('*** initMe for ' + this.currentElName);
        this.createRawChildren();
        this.setParentType();
        this.setDirection();
        this.figureOutA();
        this.createProps(this.properties, this.events);
        this.createExtComponent();
    };
    EngBase.prototype.createRawChildren = function () {
        if (this.currentEl.isAngular) {
            this.currentEl.rawChildren = this.currentEl.childComponents;
        }
        else {
            this.currentEl.ewcChildren = Array.from(this.currentEl.children);
            this.currentEl.rawChildren = [];
            var num = 0;
            for (var i = 0; i < this.currentEl.ewcChildren.length; i++) {
                if (this.currentEl.ewcChildren[i].xtype != undefined) {
                    this.currentEl.rawChildren[num] = this.currentEl.ewcChildren[i];
                    num++;
                }
                else {
                    //do something with div (add an Ext.widget...)
                }
            }
        }
    };
    EngBase.prototype.setParentType = function () {
        // if (this.parentEl == null) {
        //     this.hasParent = false;
        // }
        // else {
        //     if (this.parentElName.substring(0, 4) == 'EXT-') {
        //         this.hasParent = true;
        //     }
        //     else {
        //         this.hasParent = false;
        //     }
        // }
        if (this.parentNode == null) {
            this.parentType = 'html';
        }
        else {
            if (this.parentElName.substring(0, 4) == 'EXT-') {
                this.parentType = 'ext';
            }
            else {
                this.parentType = 'html';
            }
        }
    };
    EngBase.prototype.setDirection = function () {
        if (this.base.count == 0) {
            this.base.count++;
            //        if (this.hasParent == false) {
            if (this.parentType != 'ext') {
                this.base.DIRECTION = 'TopToBottom';
            }
            else {
                //if (this.parentElName.substring(0, 4) == 'EXT-') {
                this.base.DIRECTION = 'BottomToTop';
                //}
                //else {
                //    this.base.DIRECTION = 'TopToBottom';
                //}
            }
        }
        //console.log(this.base.DIRECTION);
    };
    EngBase.prototype.figureOutA = function () {
        if (this.parentType == 'ext' &&
            this.parentEl.A == undefined &&
            this.parentEl.nodeName.substring(0, 4) == 'EXT-') {
            this.init(this.parentEl);
        }
        if (this.currentEl.A == undefined) {
            this.init(this.currentEl);
        }
    };
    EngBase.prototype.init = function (component) {
        component.A = {};
        component.A.props = {};
        component.A.xtype = component.xtype;
        component.A.CHILDRENCOMPONENTS = Array.from(this.currentEl.rawChildren);
        component.A.CHILDRENCOMPONENTSCOUNT = this.currentEl.rawChildren.length;
        component.A.CHILDRENCOMPONENTSADDED = component.A.CHILDRENCOMPONENTSCOUNT;
        component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
    };
    EngBase.prototype.createExtComponent = function () {
        var A = this.currentEl.A;
        //console.dir(A)
        var meA = A;
        var methis = this;
        if (methis.base.DIRECTION == 'BottomToTop') {
            if (A.props['viewport'] == true) {
                //this.newDiv.parentNode.removeChild(this.newDiv);
                if (this.parentType == 'html') {
                    Ext.onReady(function () {
                        methis.currentEl.A.ext = Ext.create(meA.props);
                        //console.log('0-Ext.application: ' + meA.props.xtype);
                        methis.assessChildren(methis.base, methis.xtype);
                        Ext.application({
                            name: 'MyEWCApp',
                            launch: function () {
                                Ext.Viewport.add([methis.currentEl.A.ext]);
                                if (window['router']) {
                                    window['router'].init();
                                }
                                methis.sendReadyEvent(methis);
                            }
                        });
                    });
                }
                else {
                    console.error('error: viewport not allowed on this element');
                }
            }
            else {
                if (this.parentType == 'html') {
                    meA.props.renderTo = this.newDiv;
                }
                Ext.onReady(function () {
                    //console.log(methis.parentType + ' - Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
                    methis.currentEl.A.ext = Ext.create(meA.props);
                    methis.assessChildren(methis.base, methis.xtype);
                });
            }
        }
        else {
            //console.log('TopToBottom')
            if (A.props['viewport'] == true) {
                //this.newDiv.parentNode.removeChild(this.newDiv);
                if (this.parentType == 'html') {
                    Ext.onReady(function () {
                        methis.currentEl.A.ext = Ext.create(meA.props);
                        //console.log('0-Ext.application: ' + meA.props.xtype);
                        methis.assessChildren(methis.base, methis.xtype);
                        Ext.application({
                            name: 'MyEWCApp',
                            launch: function () {
                                Ext.Viewport.add([methis.currentEl.A.ext]);
                                if (window['router']) {
                                    window['router'].init();
                                }
                                methis.sendReadyEvent(methis);
                            }
                        });
                    });
                }
                else {
                    console.error('error: viewport not allowed on this element');
                }
            }
            else {
                if (this.parentType == 'html') {
                    meA.props.renderTo = this.newDiv;
                }
                Ext.onReady(function () {
                    //console.log(methis.parentType + ' - Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
                    methis.currentEl.A.ext = Ext.create(meA.props);
                    methis.assessChildren(methis.base, methis.xtype);
                });
            }
        }
    };
    EngBase.prototype.assessAngularChildren = function (base, xtype, A) {
        if (this._extitems != undefined) {
            if (this._extitems.length == 1) {
                var el = Ext.get(this._extitem.nativeElement);
                var w = Ext.create({ xtype: 'widget', element: el });
                this.addTheChild(A.ext, w, null);
            }
        }
        // if (this._extitems != undefined) {
        //     if (this._extroutes.length == 1) {
        //         A.ext.setHtml(this._extroute.nativeElement);
        //     }
        // }
    };
    EngBase.prototype.assessChildren = function (base, xtype) {
        //console.log('assessChildren for: ' + xtype);
        var A = this.currentEl.A;
        this.assessAngularChildren(base, xtype, A);
        if (base.DIRECTION == 'BottomToTop') {
            if (A.CHILDRENCOMPONENTSCOUNT == 0 &&
                A.CHILDRENCOMPONENTS.length == 0 &&
                this.parentType == 'html') {
                //console.log('Solo');
                //console.log('1- ready event for ' + this.currentElName);
                this.sendReadyEvent(this);
            }
            else if (A.CHILDRENCOMPONENTSADDED > 0) {
                this.addChildren(this, A.CHILDRENCOMPONENTS);
                //this.node.remove(); ?? is this needed??
            }
            if (this.parentType != 'ext') {
                if (base.DIRECTION == 'BottomToTop') {
                    //console.log('5- ready event for ' + this.currentElName);
                    this.sendReadyEvent(this);
                }
            }
            if (this.parentType == 'ext') {
                if (base.DIRECTION == 'BottomToTop') {
                    this.parentEl.A.CHILDRENCOMPONENTS.push(this.currentEl);
                    this.parentEl.A.CHILDRENCOMPONENTSADDED++;
                    //console.log('4- ready event for ' + this.currentElName);
                    this.sendReadyEvent(this);
                }
                else {
                    this.parentEl.A.CHILDRENCOMPONENTSLEFT--;
                    if (this.parentEl.A.CHILDRENCOMPONENTSLEFT == 0) {
                        this.addChildren(this.parentEl, this.parentEl.A.CHILDRENCOMPONENTS);
                        //console.log('3- ready event for ' + this.parentElName + '(parent)');
                        this.sendReadyEvent(this.parentEl);
                    }
                }
            }
        }
        else { //base.DIRECTION == 'TopToBottom'
            if (this.parentType == 'ext') {
                //console.log('this: ' + A.xtype + ' ' + A.props.title + ' parent: ' + this.parentEl.A.xtype)
                //console.log('length=0, send ready for ' + this.xtype)
                this.sendReadyEvent(this);
            }
            // else {
            //     //console.log(A.props)
            //     //console.log('this: ' + A.xtype + ' ' + A.props.title + ' root: ')
            // }
            if (A.CHILDRENCOMPONENTS.length == 0) {
                this.checkParent(this.parentEl, base, this);
            }
            // else {
            //     //base.COMPONENTCOUNT = base.COMPONENTCOUNT + A.CHILDRENCOMPONENTS.length;
            // }
        }
    };
    EngBase.prototype.checkParent = function (component, base, me) {
        if (component == null || component.localName.substring(0, 4) != 'EXT-') {
            me.sendReadyEvent(me);
        }
        else {
            component.A.CHILDRENCOMPONENTSLEFT--;
            //base.COMPONENTLEFTCOUNT = base.COMPONENTLEFTCOUNT + 1;
            if (component.A.CHILDRENCOMPONENTSLEFT == 0) {
                this.addChildren(component, component.A.CHILDRENCOMPONENTS);
                this.checkParent(component.parentEl, base, component);
            }
        }
    };
    EngBase.prototype.addChildren = function (child, children) {
        for (var i = 0; i < children.length; i++) {
            //why is this created as an object??
            var childItem = { parentCmp: {}, childCmp: {} };
            childItem.parentCmp = child.currentEl.A.ext;
            var A2;
            if (children[i]._extitems != undefined) {
                A2 = children[i].node.A;
            }
            else {
                A2 = children[i].A;
            }
            childItem.childCmp = A2.ext;
            this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
        }
    };
    EngBase.prototype.addTheChild = function (parentCmp, childCmp, location) {
        var parentxtype = parentCmp.xtype;
        var childxtype = childCmp.xtype;
        //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
        //if (childxtype == 'widget')
        if (this.currentEl.A.ext.initialConfig.align != undefined) {
            if (parentxtype != 'tooltip' && parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'lockedgrid' && parentxtype != 'button') {
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
    EngBase.prototype.atEnd = function () {
        //console.log('*** at end');
        //console.log('this - ' + this.currentElName);
        //console.dir(this.currentEl.A);
        if (this.parentEl != null) {
            //console.log('parent - ' + this.parentElName);
            //console.dir(this.parentEl.A);
        }
        else {
            //console.log('No EXT parent');
        }
    };
    Object.defineProperty(EngBase.prototype, "currentEl", {
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
    EngBase.prototype.sendReadyEvent = function (component) {
        var cmp = component.currentEl.A.ext;
        if (component._extitems != undefined) {
            component['ready'].emit({ detail: { cmp: cmp } });
        }
        else {
            component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
        }
    };
    //******* base end */
    //******* props start */
    //createProps(properties, propertiesobject, events, eventnames) {
    EngBase.prototype.createProps = function (properties, events) {
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
                    _this[event] = new EventEmitter();
                }
                else {
                    _this[event + 'event'] = new EventEmitter();
                }
            });
        }
    };
    //******* props end */
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
    EngBase.prototype.baseOnDestroy = function () {
        var childCmp;
        var parentCmp;
        if (childCmp == undefined || parentCmp == undefined) {
            return;
        }
        try {
            childCmp = this.currentEl.A.ext;
            if (this.parentEl != null) {
                parentCmp = this.parentEl.A.ext;
                //console.log(childCmp)
                //console.log(parentCmp)
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
        ContentChild('extroute', { static: false }),
        __metadata("design:type", Object)
    ], EngBase.prototype, "_extroute", void 0);
    __decorate([
        ContentChildren('extroute'),
        __metadata("design:type", QueryList)
    ], EngBase.prototype, "_extroutes", void 0);
    __decorate([
        ContentChild('extitem', { static: false }),
        __metadata("design:type", Object)
    ], EngBase.prototype, "_extitem", void 0);
    __decorate([
        ContentChildren('extitem'),
        __metadata("design:type", QueryList)
    ], EngBase.prototype, "_extitems", void 0);
    __decorate([
        ContentChildren(EngBase),
        __metadata("design:type", QueryList)
    ], EngBase.prototype, "_childComponents", void 0);
    return EngBase;
}());

var ExtGridcellbaseMetaData = /** @class */ (function () {
    function ExtGridcellbaseMetaData() {
    }
    ExtGridcellbaseMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridcellbaseMetaData.EVENTS = [
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
    ExtGridcellbaseMetaData.EVENTNAMES = [
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
    return ExtGridcellbaseMetaData;
}());
var ExtGridcellbaseComponent = /** @class */ (function (_super) {
    __extends(ExtGridcellbaseComponent, _super);
    function ExtGridcellbaseComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridcellbaseMetaData.PROPERTIES, ExtGridcellbaseMetaData.EVENTS) || this;
        _this.xtype = 'gridcellbase';
        return _this;
    }
    ExtGridcellbaseComponent_1 = ExtGridcellbaseComponent;
    ExtGridcellbaseComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridcellbaseComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridcellbaseComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridcellbaseComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridcellbaseComponent_1;
    ExtGridcellbaseComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridcellbaseComponent = ExtGridcellbaseComponent_1 = __decorate([
        Component({
            selector: 'ext-gridcellbase',
            inputs: ExtGridcellbaseMetaData.PROPERTIES,
            outputs: ExtGridcellbaseMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridcellbaseComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridcellbaseComponent);
    return ExtGridcellbaseComponent;
}(EngBase));

var ExtBooleancellMetaData = /** @class */ (function () {
    function ExtBooleancellMetaData() {
    }
    ExtBooleancellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtBooleancellMetaData.EVENTS = [
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
    ExtBooleancellMetaData.EVENTNAMES = [
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
    return ExtBooleancellMetaData;
}());
var ExtBooleancellComponent = /** @class */ (function (_super) {
    __extends(ExtBooleancellComponent, _super);
    function ExtBooleancellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtBooleancellMetaData.PROPERTIES, ExtBooleancellMetaData.EVENTS) || this;
        _this.xtype = 'booleancell';
        return _this;
    }
    ExtBooleancellComponent_1 = ExtBooleancellComponent;
    ExtBooleancellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtBooleancellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtBooleancellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtBooleancellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtBooleancellComponent_1;
    ExtBooleancellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtBooleancellComponent = ExtBooleancellComponent_1 = __decorate([
        Component({
            selector: 'ext-booleancell',
            inputs: ExtBooleancellMetaData.PROPERTIES,
            outputs: ExtBooleancellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtBooleancellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtBooleancellComponent);
    return ExtBooleancellComponent;
}(EngBase));

var ExtGridcellMetaData = /** @class */ (function () {
    function ExtGridcellMetaData() {
    }
    ExtGridcellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridcellMetaData.EVENTS = [
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
    ExtGridcellMetaData.EVENTNAMES = [
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
    return ExtGridcellMetaData;
}());
var ExtGridcellComponent = /** @class */ (function (_super) {
    __extends(ExtGridcellComponent, _super);
    function ExtGridcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridcellMetaData.PROPERTIES, ExtGridcellMetaData.EVENTS) || this;
        _this.xtype = 'gridcell';
        return _this;
    }
    ExtGridcellComponent_1 = ExtGridcellComponent;
    ExtGridcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridcellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridcellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridcellComponent_1;
    ExtGridcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridcellComponent = ExtGridcellComponent_1 = __decorate([
        Component({
            selector: 'ext-gridcell',
            inputs: ExtGridcellMetaData.PROPERTIES,
            outputs: ExtGridcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridcellComponent);
    return ExtGridcellComponent;
}(EngBase));

var ExtCheckcellMetaData = /** @class */ (function () {
    function ExtCheckcellMetaData() {
    }
    ExtCheckcellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtCheckcellMetaData.EVENTS = [
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
    ExtCheckcellMetaData.EVENTNAMES = [
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
    return ExtCheckcellMetaData;
}());
var ExtCheckcellComponent = /** @class */ (function (_super) {
    __extends(ExtCheckcellComponent, _super);
    function ExtCheckcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCheckcellMetaData.PROPERTIES, ExtCheckcellMetaData.EVENTS) || this;
        _this.xtype = 'checkcell';
        return _this;
    }
    ExtCheckcellComponent_1 = ExtCheckcellComponent;
    ExtCheckcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCheckcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCheckcellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCheckcellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCheckcellComponent_1;
    ExtCheckcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCheckcellComponent = ExtCheckcellComponent_1 = __decorate([
        Component({
            selector: 'ext-checkcell',
            inputs: ExtCheckcellMetaData.PROPERTIES,
            outputs: ExtCheckcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCheckcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCheckcellComponent);
    return ExtCheckcellComponent;
}(EngBase));

var ExtDatecellMetaData = /** @class */ (function () {
    function ExtDatecellMetaData() {
    }
    ExtDatecellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtDatecellMetaData.EVENTS = [
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
    ExtDatecellMetaData.EVENTNAMES = [
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
    return ExtDatecellMetaData;
}());
var ExtDatecellComponent = /** @class */ (function (_super) {
    __extends(ExtDatecellComponent, _super);
    function ExtDatecellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDatecellMetaData.PROPERTIES, ExtDatecellMetaData.EVENTS) || this;
        _this.xtype = 'datecell';
        return _this;
    }
    ExtDatecellComponent_1 = ExtDatecellComponent;
    ExtDatecellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatecellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatecellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatecellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatecellComponent_1;
    ExtDatecellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDatecellComponent = ExtDatecellComponent_1 = __decorate([
        Component({
            selector: 'ext-datecell',
            inputs: ExtDatecellMetaData.PROPERTIES,
            outputs: ExtDatecellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatecellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDatecellComponent);
    return ExtDatecellComponent;
}(EngBase));

var ExtNumbercellMetaData = /** @class */ (function () {
    function ExtNumbercellMetaData() {
    }
    ExtNumbercellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtNumbercellMetaData.EVENTS = [
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
    ExtNumbercellMetaData.EVENTNAMES = [
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
    return ExtNumbercellMetaData;
}());
var ExtNumbercellComponent = /** @class */ (function (_super) {
    __extends(ExtNumbercellComponent, _super);
    function ExtNumbercellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtNumbercellMetaData.PROPERTIES, ExtNumbercellMetaData.EVENTS) || this;
        _this.xtype = 'numbercell';
        return _this;
    }
    ExtNumbercellComponent_1 = ExtNumbercellComponent;
    ExtNumbercellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtNumbercellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtNumbercellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtNumbercellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtNumbercellComponent_1;
    ExtNumbercellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtNumbercellComponent = ExtNumbercellComponent_1 = __decorate([
        Component({
            selector: 'ext-numbercell',
            inputs: ExtNumbercellMetaData.PROPERTIES,
            outputs: ExtNumbercellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtNumbercellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtNumbercellComponent);
    return ExtNumbercellComponent;
}(EngBase));

var ExtRownumberercellMetaData = /** @class */ (function () {
    function ExtRownumberercellMetaData() {
    }
    ExtRownumberercellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtRownumberercellMetaData.EVENTS = [
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
    ExtRownumberercellMetaData.EVENTNAMES = [
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
    return ExtRownumberercellMetaData;
}());
var ExtRownumberercellComponent = /** @class */ (function (_super) {
    __extends(ExtRownumberercellComponent, _super);
    function ExtRownumberercellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRownumberercellMetaData.PROPERTIES, ExtRownumberercellMetaData.EVENTS) || this;
        _this.xtype = 'rownumberercell';
        return _this;
    }
    ExtRownumberercellComponent_1 = ExtRownumberercellComponent;
    ExtRownumberercellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRownumberercellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRownumberercellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRownumberercellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRownumberercellComponent_1;
    ExtRownumberercellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRownumberercellComponent = ExtRownumberercellComponent_1 = __decorate([
        Component({
            selector: 'ext-rownumberercell',
            inputs: ExtRownumberercellMetaData.PROPERTIES,
            outputs: ExtRownumberercellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRownumberercellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRownumberercellComponent);
    return ExtRownumberercellComponent;
}(EngBase));

var ExtTextcellMetaData = /** @class */ (function () {
    function ExtTextcellMetaData() {
    }
    ExtTextcellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtTextcellMetaData.EVENTS = [
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
    ExtTextcellMetaData.EVENTNAMES = [
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
    return ExtTextcellMetaData;
}());
var ExtTextcellComponent = /** @class */ (function (_super) {
    __extends(ExtTextcellComponent, _super);
    function ExtTextcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTextcellMetaData.PROPERTIES, ExtTextcellMetaData.EVENTS) || this;
        _this.xtype = 'textcell';
        return _this;
    }
    ExtTextcellComponent_1 = ExtTextcellComponent;
    ExtTextcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTextcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTextcellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTextcellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTextcellComponent_1;
    ExtTextcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTextcellComponent = ExtTextcellComponent_1 = __decorate([
        Component({
            selector: 'ext-textcell',
            inputs: ExtTextcellMetaData.PROPERTIES,
            outputs: ExtTextcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTextcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTextcellComponent);
    return ExtTextcellComponent;
}(EngBase));

var ExtTreecellMetaData = /** @class */ (function () {
    function ExtTreecellMetaData() {
    }
    ExtTreecellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtTreecellMetaData.EVENTS = [
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
    ExtTreecellMetaData.EVENTNAMES = [
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
    return ExtTreecellMetaData;
}());
var ExtTreecellComponent = /** @class */ (function (_super) {
    __extends(ExtTreecellComponent, _super);
    function ExtTreecellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTreecellMetaData.PROPERTIES, ExtTreecellMetaData.EVENTS) || this;
        _this.xtype = 'treecell';
        return _this;
    }
    ExtTreecellComponent_1 = ExtTreecellComponent;
    ExtTreecellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTreecellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTreecellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTreecellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTreecellComponent_1;
    ExtTreecellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTreecellComponent = ExtTreecellComponent_1 = __decorate([
        Component({
            selector: 'ext-treecell',
            inputs: ExtTreecellMetaData.PROPERTIES,
            outputs: ExtTreecellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTreecellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTreecellComponent);
    return ExtTreecellComponent;
}(EngBase));

var ExtWidgetcellMetaData = /** @class */ (function () {
    function ExtWidgetcellMetaData() {
    }
    ExtWidgetcellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtWidgetcellMetaData.EVENTS = [
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
    ExtWidgetcellMetaData.EVENTNAMES = [
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
    return ExtWidgetcellMetaData;
}());
var ExtWidgetcellComponent = /** @class */ (function (_super) {
    __extends(ExtWidgetcellComponent, _super);
    function ExtWidgetcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtWidgetcellMetaData.PROPERTIES, ExtWidgetcellMetaData.EVENTS) || this;
        _this.xtype = 'widgetcell';
        return _this;
    }
    ExtWidgetcellComponent_1 = ExtWidgetcellComponent;
    ExtWidgetcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtWidgetcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtWidgetcellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtWidgetcellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtWidgetcellComponent_1;
    ExtWidgetcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtWidgetcellComponent = ExtWidgetcellComponent_1 = __decorate([
        Component({
            selector: 'ext-widgetcell',
            inputs: ExtWidgetcellMetaData.PROPERTIES,
            outputs: ExtWidgetcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtWidgetcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtWidgetcellComponent);
    return ExtWidgetcellComponent;
}(EngBase));

var ExtCelleditorMetaData = /** @class */ (function () {
    function ExtCelleditorMetaData() {
    }
    ExtCelleditorMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtCelleditorMetaData.EVENTS = [
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
    ExtCelleditorMetaData.EVENTNAMES = [
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
    return ExtCelleditorMetaData;
}());
var ExtCelleditorComponent = /** @class */ (function (_super) {
    __extends(ExtCelleditorComponent, _super);
    function ExtCelleditorComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCelleditorMetaData.PROPERTIES, ExtCelleditorMetaData.EVENTS) || this;
        _this.xtype = 'celleditor';
        return _this;
    }
    ExtCelleditorComponent_1 = ExtCelleditorComponent;
    ExtCelleditorComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCelleditorComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCelleditorComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCelleditorComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCelleditorComponent_1;
    ExtCelleditorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCelleditorComponent = ExtCelleditorComponent_1 = __decorate([
        Component({
            selector: 'ext-celleditor',
            inputs: ExtCelleditorMetaData.PROPERTIES,
            outputs: ExtCelleditorMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCelleditorComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCelleditorComponent);
    return ExtCelleditorComponent;
}(EngBase));

var ExtBooleancolumnMetaData = /** @class */ (function () {
    function ExtBooleancolumnMetaData() {
    }
    ExtBooleancolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtBooleancolumnMetaData.EVENTS = [
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
    ExtBooleancolumnMetaData.EVENTNAMES = [
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
    return ExtBooleancolumnMetaData;
}());
var ExtBooleancolumnComponent = /** @class */ (function (_super) {
    __extends(ExtBooleancolumnComponent, _super);
    function ExtBooleancolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtBooleancolumnMetaData.PROPERTIES, ExtBooleancolumnMetaData.EVENTS) || this;
        _this.xtype = 'booleancolumn';
        return _this;
    }
    ExtBooleancolumnComponent_1 = ExtBooleancolumnComponent;
    ExtBooleancolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtBooleancolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtBooleancolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtBooleancolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtBooleancolumnComponent_1;
    ExtBooleancolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtBooleancolumnComponent = ExtBooleancolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-booleancolumn',
            inputs: ExtBooleancolumnMetaData.PROPERTIES,
            outputs: ExtBooleancolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtBooleancolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtBooleancolumnComponent);
    return ExtBooleancolumnComponent;
}(EngBase));

var ExtCheckcolumnMetaData = /** @class */ (function () {
    function ExtCheckcolumnMetaData() {
    }
    ExtCheckcolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtCheckcolumnMetaData.EVENTS = [
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
    ExtCheckcolumnMetaData.EVENTNAMES = [
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
    return ExtCheckcolumnMetaData;
}());
var ExtCheckcolumnComponent = /** @class */ (function (_super) {
    __extends(ExtCheckcolumnComponent, _super);
    function ExtCheckcolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtCheckcolumnMetaData.PROPERTIES, ExtCheckcolumnMetaData.EVENTS) || this;
        _this.xtype = 'checkcolumn';
        return _this;
    }
    ExtCheckcolumnComponent_1 = ExtCheckcolumnComponent;
    ExtCheckcolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtCheckcolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtCheckcolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtCheckcolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtCheckcolumnComponent_1;
    ExtCheckcolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtCheckcolumnComponent = ExtCheckcolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-checkcolumn',
            inputs: ExtCheckcolumnMetaData.PROPERTIES,
            outputs: ExtCheckcolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtCheckcolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtCheckcolumnComponent);
    return ExtCheckcolumnComponent;
}(EngBase));

var ExtGridcolumnMetaData = /** @class */ (function () {
    function ExtGridcolumnMetaData() {
    }
    ExtGridcolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridcolumnMetaData.EVENTS = [
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
    ExtGridcolumnMetaData.EVENTNAMES = [
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
    return ExtGridcolumnMetaData;
}());
var ExtGridcolumnComponent = /** @class */ (function (_super) {
    __extends(ExtGridcolumnComponent, _super);
    function ExtGridcolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridcolumnMetaData.PROPERTIES, ExtGridcolumnMetaData.EVENTS) || this;
        _this.xtype = 'gridcolumn';
        return _this;
    }
    ExtGridcolumnComponent_1 = ExtGridcolumnComponent;
    ExtGridcolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridcolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridcolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridcolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridcolumnComponent_1;
    ExtGridcolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridcolumnComponent = ExtGridcolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-gridcolumn',
            inputs: ExtGridcolumnMetaData.PROPERTIES,
            outputs: ExtGridcolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridcolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridcolumnComponent);
    return ExtGridcolumnComponent;
}(EngBase));

var ExtDatecolumnMetaData = /** @class */ (function () {
    function ExtDatecolumnMetaData() {
    }
    ExtDatecolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtDatecolumnMetaData.EVENTS = [
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
    ExtDatecolumnMetaData.EVENTNAMES = [
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
    return ExtDatecolumnMetaData;
}());
var ExtDatecolumnComponent = /** @class */ (function (_super) {
    __extends(ExtDatecolumnComponent, _super);
    function ExtDatecolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDatecolumnMetaData.PROPERTIES, ExtDatecolumnMetaData.EVENTS) || this;
        _this.xtype = 'datecolumn';
        return _this;
    }
    ExtDatecolumnComponent_1 = ExtDatecolumnComponent;
    ExtDatecolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDatecolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDatecolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDatecolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDatecolumnComponent_1;
    ExtDatecolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDatecolumnComponent = ExtDatecolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-datecolumn',
            inputs: ExtDatecolumnMetaData.PROPERTIES,
            outputs: ExtDatecolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDatecolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDatecolumnComponent);
    return ExtDatecolumnComponent;
}(EngBase));

var ExtDragcolumnMetaData = /** @class */ (function () {
    function ExtDragcolumnMetaData() {
    }
    ExtDragcolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtDragcolumnMetaData.EVENTS = [
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
    ExtDragcolumnMetaData.EVENTNAMES = [
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
    return ExtDragcolumnMetaData;
}());
var ExtDragcolumnComponent = /** @class */ (function (_super) {
    __extends(ExtDragcolumnComponent, _super);
    function ExtDragcolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtDragcolumnMetaData.PROPERTIES, ExtDragcolumnMetaData.EVENTS) || this;
        _this.xtype = 'dragcolumn';
        return _this;
    }
    ExtDragcolumnComponent_1 = ExtDragcolumnComponent;
    ExtDragcolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtDragcolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtDragcolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtDragcolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtDragcolumnComponent_1;
    ExtDragcolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtDragcolumnComponent = ExtDragcolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-dragcolumn',
            inputs: ExtDragcolumnMetaData.PROPERTIES,
            outputs: ExtDragcolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtDragcolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtDragcolumnComponent);
    return ExtDragcolumnComponent;
}(EngBase));

var ExtNumbercolumnMetaData = /** @class */ (function () {
    function ExtNumbercolumnMetaData() {
    }
    ExtNumbercolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtNumbercolumnMetaData.EVENTS = [
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
    ExtNumbercolumnMetaData.EVENTNAMES = [
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
    return ExtNumbercolumnMetaData;
}());
var ExtNumbercolumnComponent = /** @class */ (function (_super) {
    __extends(ExtNumbercolumnComponent, _super);
    function ExtNumbercolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtNumbercolumnMetaData.PROPERTIES, ExtNumbercolumnMetaData.EVENTS) || this;
        _this.xtype = 'numbercolumn';
        return _this;
    }
    ExtNumbercolumnComponent_1 = ExtNumbercolumnComponent;
    ExtNumbercolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtNumbercolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtNumbercolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtNumbercolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtNumbercolumnComponent_1;
    ExtNumbercolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtNumbercolumnComponent = ExtNumbercolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-numbercolumn',
            inputs: ExtNumbercolumnMetaData.PROPERTIES,
            outputs: ExtNumbercolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtNumbercolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtNumbercolumnComponent);
    return ExtNumbercolumnComponent;
}(EngBase));

var ExtRownumbererMetaData = /** @class */ (function () {
    function ExtRownumbererMetaData() {
    }
    ExtRownumbererMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtRownumbererMetaData.EVENTS = [
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
    ExtRownumbererMetaData.EVENTNAMES = [
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
    return ExtRownumbererMetaData;
}());
var ExtRownumbererComponent = /** @class */ (function (_super) {
    __extends(ExtRownumbererComponent, _super);
    function ExtRownumbererComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRownumbererMetaData.PROPERTIES, ExtRownumbererMetaData.EVENTS) || this;
        _this.xtype = 'rownumberer';
        return _this;
    }
    ExtRownumbererComponent_1 = ExtRownumbererComponent;
    ExtRownumbererComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRownumbererComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRownumbererComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRownumbererComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRownumbererComponent_1;
    ExtRownumbererComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRownumbererComponent = ExtRownumbererComponent_1 = __decorate([
        Component({
            selector: 'ext-rownumberer',
            inputs: ExtRownumbererMetaData.PROPERTIES,
            outputs: ExtRownumbererMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRownumbererComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRownumbererComponent);
    return ExtRownumbererComponent;
}(EngBase));

var ExtSelectioncolumnMetaData = /** @class */ (function () {
    function ExtSelectioncolumnMetaData() {
    }
    ExtSelectioncolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtSelectioncolumnMetaData.EVENTS = [
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
    ExtSelectioncolumnMetaData.EVENTNAMES = [
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
    return ExtSelectioncolumnMetaData;
}());
var ExtSelectioncolumnComponent = /** @class */ (function (_super) {
    __extends(ExtSelectioncolumnComponent, _super);
    function ExtSelectioncolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtSelectioncolumnMetaData.PROPERTIES, ExtSelectioncolumnMetaData.EVENTS) || this;
        _this.xtype = 'selectioncolumn';
        return _this;
    }
    ExtSelectioncolumnComponent_1 = ExtSelectioncolumnComponent;
    ExtSelectioncolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtSelectioncolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtSelectioncolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtSelectioncolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtSelectioncolumnComponent_1;
    ExtSelectioncolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtSelectioncolumnComponent = ExtSelectioncolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-selectioncolumn',
            inputs: ExtSelectioncolumnMetaData.PROPERTIES,
            outputs: ExtSelectioncolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtSelectioncolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtSelectioncolumnComponent);
    return ExtSelectioncolumnComponent;
}(EngBase));

var ExtTextcolumnMetaData = /** @class */ (function () {
    function ExtTextcolumnMetaData() {
    }
    ExtTextcolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtTextcolumnMetaData.EVENTS = [
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
    ExtTextcolumnMetaData.EVENTNAMES = [
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
    return ExtTextcolumnMetaData;
}());
var ExtTextcolumnComponent = /** @class */ (function (_super) {
    __extends(ExtTextcolumnComponent, _super);
    function ExtTextcolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTextcolumnMetaData.PROPERTIES, ExtTextcolumnMetaData.EVENTS) || this;
        _this.xtype = 'textcolumn';
        return _this;
    }
    ExtTextcolumnComponent_1 = ExtTextcolumnComponent;
    ExtTextcolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTextcolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTextcolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTextcolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTextcolumnComponent_1;
    ExtTextcolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTextcolumnComponent = ExtTextcolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-textcolumn',
            inputs: ExtTextcolumnMetaData.PROPERTIES,
            outputs: ExtTextcolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTextcolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTextcolumnComponent);
    return ExtTextcolumnComponent;
}(EngBase));

var ExtTreecolumnMetaData = /** @class */ (function () {
    function ExtTreecolumnMetaData() {
    }
    ExtTreecolumnMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtTreecolumnMetaData.EVENTS = [
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
    ExtTreecolumnMetaData.EVENTNAMES = [
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
    return ExtTreecolumnMetaData;
}());
var ExtTreecolumnComponent = /** @class */ (function (_super) {
    __extends(ExtTreecolumnComponent, _super);
    function ExtTreecolumnComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTreecolumnMetaData.PROPERTIES, ExtTreecolumnMetaData.EVENTS) || this;
        _this.xtype = 'treecolumn';
        return _this;
    }
    ExtTreecolumnComponent_1 = ExtTreecolumnComponent;
    ExtTreecolumnComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTreecolumnComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTreecolumnComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTreecolumnComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTreecolumnComponent_1;
    ExtTreecolumnComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTreecolumnComponent = ExtTreecolumnComponent_1 = __decorate([
        Component({
            selector: 'ext-treecolumn',
            inputs: ExtTreecolumnMetaData.PROPERTIES,
            outputs: ExtTreecolumnMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTreecolumnComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTreecolumnComponent);
    return ExtTreecolumnComponent;
}(EngBase));

var ExtGridMetaData = /** @class */ (function () {
    function ExtGridMetaData() {
    }
    ExtGridMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridMetaData.EVENTS = [
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
    ExtGridMetaData.EVENTNAMES = [
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
    return ExtGridMetaData;
}());
var ExtGridComponent = /** @class */ (function (_super) {
    __extends(ExtGridComponent, _super);
    function ExtGridComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridMetaData.PROPERTIES, ExtGridMetaData.EVENTS) || this;
        _this.xtype = 'grid';
        return _this;
    }
    ExtGridComponent_1 = ExtGridComponent;
    ExtGridComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridComponent_1;
    ExtGridComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridComponent = ExtGridComponent_1 = __decorate([
        Component({
            selector: 'ext-grid',
            inputs: ExtGridMetaData.PROPERTIES,
            outputs: ExtGridMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridComponent);
    return ExtGridComponent;
}(EngBase));

var ExtHeadercontainerMetaData = /** @class */ (function () {
    function ExtHeadercontainerMetaData() {
    }
    ExtHeadercontainerMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtHeadercontainerMetaData.EVENTS = [
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
    ExtHeadercontainerMetaData.EVENTNAMES = [
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
    return ExtHeadercontainerMetaData;
}());
var ExtHeadercontainerComponent = /** @class */ (function (_super) {
    __extends(ExtHeadercontainerComponent, _super);
    function ExtHeadercontainerComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtHeadercontainerMetaData.PROPERTIES, ExtHeadercontainerMetaData.EVENTS) || this;
        _this.xtype = 'headercontainer';
        return _this;
    }
    ExtHeadercontainerComponent_1 = ExtHeadercontainerComponent;
    ExtHeadercontainerComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtHeadercontainerComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtHeadercontainerComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtHeadercontainerComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtHeadercontainerComponent_1;
    ExtHeadercontainerComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtHeadercontainerComponent = ExtHeadercontainerComponent_1 = __decorate([
        Component({
            selector: 'ext-headercontainer',
            inputs: ExtHeadercontainerMetaData.PROPERTIES,
            outputs: ExtHeadercontainerMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtHeadercontainerComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtHeadercontainerComponent);
    return ExtHeadercontainerComponent;
}(EngBase));

var ExtLockedgridMetaData = /** @class */ (function () {
    function ExtLockedgridMetaData() {
    }
    ExtLockedgridMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtLockedgridMetaData.EVENTS = [
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
    ExtLockedgridMetaData.EVENTNAMES = [
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
    return ExtLockedgridMetaData;
}());
var ExtLockedgridComponent = /** @class */ (function (_super) {
    __extends(ExtLockedgridComponent, _super);
    function ExtLockedgridComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtLockedgridMetaData.PROPERTIES, ExtLockedgridMetaData.EVENTS) || this;
        _this.xtype = 'lockedgrid';
        return _this;
    }
    ExtLockedgridComponent_1 = ExtLockedgridComponent;
    ExtLockedgridComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtLockedgridComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtLockedgridComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtLockedgridComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtLockedgridComponent_1;
    ExtLockedgridComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtLockedgridComponent = ExtLockedgridComponent_1 = __decorate([
        Component({
            selector: 'ext-lockedgrid',
            inputs: ExtLockedgridMetaData.PROPERTIES,
            outputs: ExtLockedgridMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtLockedgridComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtLockedgridComponent);
    return ExtLockedgridComponent;
}(EngBase));

var ExtLockedgridregionMetaData = /** @class */ (function () {
    function ExtLockedgridregionMetaData() {
    }
    ExtLockedgridregionMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtLockedgridregionMetaData.EVENTS = [
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
    ExtLockedgridregionMetaData.EVENTNAMES = [
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
    return ExtLockedgridregionMetaData;
}());
var ExtLockedgridregionComponent = /** @class */ (function (_super) {
    __extends(ExtLockedgridregionComponent, _super);
    function ExtLockedgridregionComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtLockedgridregionMetaData.PROPERTIES, ExtLockedgridregionMetaData.EVENTS) || this;
        _this.xtype = 'lockedgridregion';
        return _this;
    }
    ExtLockedgridregionComponent_1 = ExtLockedgridregionComponent;
    ExtLockedgridregionComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtLockedgridregionComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtLockedgridregionComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtLockedgridregionComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtLockedgridregionComponent_1;
    ExtLockedgridregionComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtLockedgridregionComponent = ExtLockedgridregionComponent_1 = __decorate([
        Component({
            selector: 'ext-lockedgridregion',
            inputs: ExtLockedgridregionMetaData.PROPERTIES,
            outputs: ExtLockedgridregionMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtLockedgridregionComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtLockedgridregionComponent);
    return ExtLockedgridregionComponent;
}(EngBase));

var ExtGridcolumnsmenuMetaData = /** @class */ (function () {
    function ExtGridcolumnsmenuMetaData() {
    }
    ExtGridcolumnsmenuMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridcolumnsmenuMetaData.EVENTS = [
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
    ExtGridcolumnsmenuMetaData.EVENTNAMES = [
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
    return ExtGridcolumnsmenuMetaData;
}());
var ExtGridcolumnsmenuComponent = /** @class */ (function (_super) {
    __extends(ExtGridcolumnsmenuComponent, _super);
    function ExtGridcolumnsmenuComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridcolumnsmenuMetaData.PROPERTIES, ExtGridcolumnsmenuMetaData.EVENTS) || this;
        _this.xtype = 'gridcolumnsmenu';
        return _this;
    }
    ExtGridcolumnsmenuComponent_1 = ExtGridcolumnsmenuComponent;
    ExtGridcolumnsmenuComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridcolumnsmenuComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridcolumnsmenuComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridcolumnsmenuComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridcolumnsmenuComponent_1;
    ExtGridcolumnsmenuComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridcolumnsmenuComponent = ExtGridcolumnsmenuComponent_1 = __decorate([
        Component({
            selector: 'ext-gridcolumnsmenu',
            inputs: ExtGridcolumnsmenuMetaData.PROPERTIES,
            outputs: ExtGridcolumnsmenuMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridcolumnsmenuComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridcolumnsmenuComponent);
    return ExtGridcolumnsmenuComponent;
}(EngBase));

var ExtGridgroupbythismenuitemMetaData = /** @class */ (function () {
    function ExtGridgroupbythismenuitemMetaData() {
    }
    ExtGridgroupbythismenuitemMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridgroupbythismenuitemMetaData.EVENTS = [
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
    ExtGridgroupbythismenuitemMetaData.EVENTNAMES = [
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
    return ExtGridgroupbythismenuitemMetaData;
}());
var ExtGridgroupbythismenuitemComponent = /** @class */ (function (_super) {
    __extends(ExtGridgroupbythismenuitemComponent, _super);
    function ExtGridgroupbythismenuitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridgroupbythismenuitemMetaData.PROPERTIES, ExtGridgroupbythismenuitemMetaData.EVENTS) || this;
        _this.xtype = 'gridgroupbythismenuitem';
        return _this;
    }
    ExtGridgroupbythismenuitemComponent_1 = ExtGridgroupbythismenuitemComponent;
    ExtGridgroupbythismenuitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridgroupbythismenuitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridgroupbythismenuitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridgroupbythismenuitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridgroupbythismenuitemComponent_1;
    ExtGridgroupbythismenuitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridgroupbythismenuitemComponent = ExtGridgroupbythismenuitemComponent_1 = __decorate([
        Component({
            selector: 'ext-gridgroupbythismenuitem',
            inputs: ExtGridgroupbythismenuitemMetaData.PROPERTIES,
            outputs: ExtGridgroupbythismenuitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridgroupbythismenuitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridgroupbythismenuitemComponent);
    return ExtGridgroupbythismenuitemComponent;
}(EngBase));

var ExtGridshowingroupsmenuitemMetaData = /** @class */ (function () {
    function ExtGridshowingroupsmenuitemMetaData() {
    }
    ExtGridshowingroupsmenuitemMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridshowingroupsmenuitemMetaData.EVENTS = [
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
    ExtGridshowingroupsmenuitemMetaData.EVENTNAMES = [
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
    return ExtGridshowingroupsmenuitemMetaData;
}());
var ExtGridshowingroupsmenuitemComponent = /** @class */ (function (_super) {
    __extends(ExtGridshowingroupsmenuitemComponent, _super);
    function ExtGridshowingroupsmenuitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridshowingroupsmenuitemMetaData.PROPERTIES, ExtGridshowingroupsmenuitemMetaData.EVENTS) || this;
        _this.xtype = 'gridshowingroupsmenuitem';
        return _this;
    }
    ExtGridshowingroupsmenuitemComponent_1 = ExtGridshowingroupsmenuitemComponent;
    ExtGridshowingroupsmenuitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridshowingroupsmenuitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridshowingroupsmenuitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridshowingroupsmenuitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridshowingroupsmenuitemComponent_1;
    ExtGridshowingroupsmenuitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridshowingroupsmenuitemComponent = ExtGridshowingroupsmenuitemComponent_1 = __decorate([
        Component({
            selector: 'ext-gridshowingroupsmenuitem',
            inputs: ExtGridshowingroupsmenuitemMetaData.PROPERTIES,
            outputs: ExtGridshowingroupsmenuitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridshowingroupsmenuitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridshowingroupsmenuitemComponent);
    return ExtGridshowingroupsmenuitemComponent;
}(EngBase));

var ExtGridsortascmenuitemMetaData = /** @class */ (function () {
    function ExtGridsortascmenuitemMetaData() {
    }
    ExtGridsortascmenuitemMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridsortascmenuitemMetaData.EVENTS = [
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
    ExtGridsortascmenuitemMetaData.EVENTNAMES = [
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
    return ExtGridsortascmenuitemMetaData;
}());
var ExtGridsortascmenuitemComponent = /** @class */ (function (_super) {
    __extends(ExtGridsortascmenuitemComponent, _super);
    function ExtGridsortascmenuitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridsortascmenuitemMetaData.PROPERTIES, ExtGridsortascmenuitemMetaData.EVENTS) || this;
        _this.xtype = 'gridsortascmenuitem';
        return _this;
    }
    ExtGridsortascmenuitemComponent_1 = ExtGridsortascmenuitemComponent;
    ExtGridsortascmenuitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridsortascmenuitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridsortascmenuitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridsortascmenuitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridsortascmenuitemComponent_1;
    ExtGridsortascmenuitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridsortascmenuitemComponent = ExtGridsortascmenuitemComponent_1 = __decorate([
        Component({
            selector: 'ext-gridsortascmenuitem',
            inputs: ExtGridsortascmenuitemMetaData.PROPERTIES,
            outputs: ExtGridsortascmenuitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridsortascmenuitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridsortascmenuitemComponent);
    return ExtGridsortascmenuitemComponent;
}(EngBase));

var ExtGridsortdescmenuitemMetaData = /** @class */ (function () {
    function ExtGridsortdescmenuitemMetaData() {
    }
    ExtGridsortdescmenuitemMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridsortdescmenuitemMetaData.EVENTS = [
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
    ExtGridsortdescmenuitemMetaData.EVENTNAMES = [
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
    return ExtGridsortdescmenuitemMetaData;
}());
var ExtGridsortdescmenuitemComponent = /** @class */ (function (_super) {
    __extends(ExtGridsortdescmenuitemComponent, _super);
    function ExtGridsortdescmenuitemComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridsortdescmenuitemMetaData.PROPERTIES, ExtGridsortdescmenuitemMetaData.EVENTS) || this;
        _this.xtype = 'gridsortdescmenuitem';
        return _this;
    }
    ExtGridsortdescmenuitemComponent_1 = ExtGridsortdescmenuitemComponent;
    ExtGridsortdescmenuitemComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridsortdescmenuitemComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridsortdescmenuitemComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridsortdescmenuitemComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridsortdescmenuitemComponent_1;
    ExtGridsortdescmenuitemComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridsortdescmenuitemComponent = ExtGridsortdescmenuitemComponent_1 = __decorate([
        Component({
            selector: 'ext-gridsortdescmenuitem',
            inputs: ExtGridsortdescmenuitemMetaData.PROPERTIES,
            outputs: ExtGridsortdescmenuitemMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridsortdescmenuitemComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridsortdescmenuitemComponent);
    return ExtGridsortdescmenuitemComponent;
}(EngBase));

var ExtPagingtoolbarMetaData = /** @class */ (function () {
    function ExtPagingtoolbarMetaData() {
    }
    ExtPagingtoolbarMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtPagingtoolbarMetaData.EVENTS = [
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
    ExtPagingtoolbarMetaData.EVENTNAMES = [
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
    return ExtPagingtoolbarMetaData;
}());
var ExtPagingtoolbarComponent = /** @class */ (function (_super) {
    __extends(ExtPagingtoolbarComponent, _super);
    function ExtPagingtoolbarComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtPagingtoolbarMetaData.PROPERTIES, ExtPagingtoolbarMetaData.EVENTS) || this;
        _this.xtype = 'pagingtoolbar';
        return _this;
    }
    ExtPagingtoolbarComponent_1 = ExtPagingtoolbarComponent;
    ExtPagingtoolbarComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtPagingtoolbarComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtPagingtoolbarComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtPagingtoolbarComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtPagingtoolbarComponent_1;
    ExtPagingtoolbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtPagingtoolbarComponent = ExtPagingtoolbarComponent_1 = __decorate([
        Component({
            selector: 'ext-pagingtoolbar',
            inputs: ExtPagingtoolbarMetaData.PROPERTIES,
            outputs: ExtPagingtoolbarMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtPagingtoolbarComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtPagingtoolbarComponent);
    return ExtPagingtoolbarComponent;
}(EngBase));

var ExtGridrowMetaData = /** @class */ (function () {
    function ExtGridrowMetaData() {
    }
    ExtGridrowMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridrowMetaData.EVENTS = [
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
    ExtGridrowMetaData.EVENTNAMES = [
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
    return ExtGridrowMetaData;
}());
var ExtGridrowComponent = /** @class */ (function (_super) {
    __extends(ExtGridrowComponent, _super);
    function ExtGridrowComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridrowMetaData.PROPERTIES, ExtGridrowMetaData.EVENTS) || this;
        _this.xtype = 'gridrow';
        return _this;
    }
    ExtGridrowComponent_1 = ExtGridrowComponent;
    ExtGridrowComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridrowComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridrowComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridrowComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridrowComponent_1;
    ExtGridrowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridrowComponent = ExtGridrowComponent_1 = __decorate([
        Component({
            selector: 'ext-gridrow',
            inputs: ExtGridrowMetaData.PROPERTIES,
            outputs: ExtGridrowMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridrowComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridrowComponent);
    return ExtGridrowComponent;
}(EngBase));

var ExtRowbodyMetaData = /** @class */ (function () {
    function ExtRowbodyMetaData() {
    }
    ExtRowbodyMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtRowbodyMetaData.EVENTS = [
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
    ExtRowbodyMetaData.EVENTNAMES = [
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
    return ExtRowbodyMetaData;
}());
var ExtRowbodyComponent = /** @class */ (function (_super) {
    __extends(ExtRowbodyComponent, _super);
    function ExtRowbodyComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRowbodyMetaData.PROPERTIES, ExtRowbodyMetaData.EVENTS) || this;
        _this.xtype = 'rowbody';
        return _this;
    }
    ExtRowbodyComponent_1 = ExtRowbodyComponent;
    ExtRowbodyComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRowbodyComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRowbodyComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRowbodyComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRowbodyComponent_1;
    ExtRowbodyComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRowbodyComponent = ExtRowbodyComponent_1 = __decorate([
        Component({
            selector: 'ext-rowbody',
            inputs: ExtRowbodyMetaData.PROPERTIES,
            outputs: ExtRowbodyMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRowbodyComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRowbodyComponent);
    return ExtRowbodyComponent;
}(EngBase));

var ExtRoweditorbarMetaData = /** @class */ (function () {
    function ExtRoweditorbarMetaData() {
    }
    ExtRoweditorbarMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtRoweditorbarMetaData.EVENTS = [
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
    ExtRoweditorbarMetaData.EVENTNAMES = [
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
    return ExtRoweditorbarMetaData;
}());
var ExtRoweditorbarComponent = /** @class */ (function (_super) {
    __extends(ExtRoweditorbarComponent, _super);
    function ExtRoweditorbarComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRoweditorbarMetaData.PROPERTIES, ExtRoweditorbarMetaData.EVENTS) || this;
        _this.xtype = 'roweditorbar';
        return _this;
    }
    ExtRoweditorbarComponent_1 = ExtRoweditorbarComponent;
    ExtRoweditorbarComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRoweditorbarComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRoweditorbarComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRoweditorbarComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRoweditorbarComponent_1;
    ExtRoweditorbarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRoweditorbarComponent = ExtRoweditorbarComponent_1 = __decorate([
        Component({
            selector: 'ext-roweditorbar',
            inputs: ExtRoweditorbarMetaData.PROPERTIES,
            outputs: ExtRoweditorbarMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRoweditorbarComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRoweditorbarComponent);
    return ExtRoweditorbarComponent;
}(EngBase));

var ExtRoweditorcellMetaData = /** @class */ (function () {
    function ExtRoweditorcellMetaData() {
    }
    ExtRoweditorcellMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtRoweditorcellMetaData.EVENTS = [
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
    ExtRoweditorcellMetaData.EVENTNAMES = [
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
    return ExtRoweditorcellMetaData;
}());
var ExtRoweditorcellComponent = /** @class */ (function (_super) {
    __extends(ExtRoweditorcellComponent, _super);
    function ExtRoweditorcellComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRoweditorcellMetaData.PROPERTIES, ExtRoweditorcellMetaData.EVENTS) || this;
        _this.xtype = 'roweditorcell';
        return _this;
    }
    ExtRoweditorcellComponent_1 = ExtRoweditorcellComponent;
    ExtRoweditorcellComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRoweditorcellComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRoweditorcellComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRoweditorcellComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRoweditorcellComponent_1;
    ExtRoweditorcellComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRoweditorcellComponent = ExtRoweditorcellComponent_1 = __decorate([
        Component({
            selector: 'ext-roweditorcell',
            inputs: ExtRoweditorcellMetaData.PROPERTIES,
            outputs: ExtRoweditorcellMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRoweditorcellComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRoweditorcellComponent);
    return ExtRoweditorcellComponent;
}(EngBase));

var ExtRoweditorMetaData = /** @class */ (function () {
    function ExtRoweditorMetaData() {
    }
    ExtRoweditorMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtRoweditorMetaData.EVENTS = [
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
    ExtRoweditorMetaData.EVENTNAMES = [
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
    return ExtRoweditorMetaData;
}());
var ExtRoweditorComponent = /** @class */ (function (_super) {
    __extends(ExtRoweditorComponent, _super);
    function ExtRoweditorComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRoweditorMetaData.PROPERTIES, ExtRoweditorMetaData.EVENTS) || this;
        _this.xtype = 'roweditor';
        return _this;
    }
    ExtRoweditorComponent_1 = ExtRoweditorComponent;
    ExtRoweditorComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRoweditorComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRoweditorComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRoweditorComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRoweditorComponent_1;
    ExtRoweditorComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRoweditorComponent = ExtRoweditorComponent_1 = __decorate([
        Component({
            selector: 'ext-roweditor',
            inputs: ExtRoweditorMetaData.PROPERTIES,
            outputs: ExtRoweditorMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRoweditorComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRoweditorComponent);
    return ExtRoweditorComponent;
}(EngBase));

var ExtRoweditorgapMetaData = /** @class */ (function () {
    function ExtRoweditorgapMetaData() {
    }
    ExtRoweditorgapMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtRoweditorgapMetaData.EVENTS = [
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
    ExtRoweditorgapMetaData.EVENTNAMES = [
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
    return ExtRoweditorgapMetaData;
}());
var ExtRoweditorgapComponent = /** @class */ (function (_super) {
    __extends(ExtRoweditorgapComponent, _super);
    function ExtRoweditorgapComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRoweditorgapMetaData.PROPERTIES, ExtRoweditorgapMetaData.EVENTS) || this;
        _this.xtype = 'roweditorgap';
        return _this;
    }
    ExtRoweditorgapComponent_1 = ExtRoweditorgapComponent;
    ExtRoweditorgapComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRoweditorgapComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRoweditorgapComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRoweditorgapComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRoweditorgapComponent_1;
    ExtRoweditorgapComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRoweditorgapComponent = ExtRoweditorgapComponent_1 = __decorate([
        Component({
            selector: 'ext-roweditorgap',
            inputs: ExtRoweditorgapMetaData.PROPERTIES,
            outputs: ExtRoweditorgapMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRoweditorgapComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRoweditorgapComponent);
    return ExtRoweditorgapComponent;
}(EngBase));

var ExtRowheaderMetaData = /** @class */ (function () {
    function ExtRowheaderMetaData() {
    }
    ExtRowheaderMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtRowheaderMetaData.EVENTS = [
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
    ExtRowheaderMetaData.EVENTNAMES = [
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
    return ExtRowheaderMetaData;
}());
var ExtRowheaderComponent = /** @class */ (function (_super) {
    __extends(ExtRowheaderComponent, _super);
    function ExtRowheaderComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtRowheaderMetaData.PROPERTIES, ExtRowheaderMetaData.EVENTS) || this;
        _this.xtype = 'rowheader';
        return _this;
    }
    ExtRowheaderComponent_1 = ExtRowheaderComponent;
    ExtRowheaderComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtRowheaderComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtRowheaderComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtRowheaderComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtRowheaderComponent_1;
    ExtRowheaderComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtRowheaderComponent = ExtRowheaderComponent_1 = __decorate([
        Component({
            selector: 'ext-rowheader',
            inputs: ExtRowheaderMetaData.PROPERTIES,
            outputs: ExtRowheaderMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtRowheaderComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtRowheaderComponent);
    return ExtRowheaderComponent;
}(EngBase));

var ExtGridsummaryrowMetaData = /** @class */ (function () {
    function ExtGridsummaryrowMetaData() {
    }
    ExtGridsummaryrowMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtGridsummaryrowMetaData.EVENTS = [
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
    ExtGridsummaryrowMetaData.EVENTNAMES = [
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
    return ExtGridsummaryrowMetaData;
}());
var ExtGridsummaryrowComponent = /** @class */ (function (_super) {
    __extends(ExtGridsummaryrowComponent, _super);
    function ExtGridsummaryrowComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtGridsummaryrowMetaData.PROPERTIES, ExtGridsummaryrowMetaData.EVENTS) || this;
        _this.xtype = 'gridsummaryrow';
        return _this;
    }
    ExtGridsummaryrowComponent_1 = ExtGridsummaryrowComponent;
    ExtGridsummaryrowComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtGridsummaryrowComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtGridsummaryrowComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtGridsummaryrowComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtGridsummaryrowComponent_1;
    ExtGridsummaryrowComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtGridsummaryrowComponent = ExtGridsummaryrowComponent_1 = __decorate([
        Component({
            selector: 'ext-gridsummaryrow',
            inputs: ExtGridsummaryrowMetaData.PROPERTIES,
            outputs: ExtGridsummaryrowMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtGridsummaryrowComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtGridsummaryrowComponent);
    return ExtGridsummaryrowComponent;
}(EngBase));

var ExtTreeMetaData = /** @class */ (function () {
    function ExtTreeMetaData() {
    }
    ExtTreeMetaData.PROPERTIES = [
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
        'fitToParent',
        'config'
    ];
    ExtTreeMetaData.EVENTS = [
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
    ExtTreeMetaData.EVENTNAMES = [
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
    return ExtTreeMetaData;
}());
var ExtTreeComponent = /** @class */ (function (_super) {
    __extends(ExtTreeComponent, _super);
    function ExtTreeComponent(eRef, hostComponent) {
        var _this = _super.call(this, eRef, hostComponent, ExtTreeMetaData.PROPERTIES, ExtTreeMetaData.EVENTS) || this;
        _this.xtype = 'tree';
        return _this;
    }
    ExtTreeComponent_1 = ExtTreeComponent;
    ExtTreeComponent.prototype.ngOnInit = function () {
        this.baseOnInit();
    };
    ExtTreeComponent.prototype.ngAfterViewInit = function () {
        this.baseAfterViewInit();
    };
    ExtTreeComponent.prototype.ngOnChanges = function (changes) {
        this.baseOnChanges(changes);
    };
    ExtTreeComponent.prototype.ngOnDestroy = function () {
        this.baseOnDestroy();
    };
    var ExtTreeComponent_1;
    ExtTreeComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: EngBase, decorators: [{ type: Host }, { type: Optional }, { type: SkipSelf }] }
    ]; };
    ExtTreeComponent = ExtTreeComponent_1 = __decorate([
        Component({
            selector: 'ext-tree',
            inputs: ExtTreeMetaData.PROPERTIES,
            outputs: ExtTreeMetaData.EVENTNAMES,
            providers: [{ provide: EngBase, useExisting: forwardRef(function () { return ExtTreeComponent_1; }) }],
            template: '<ng-template></ng-template>'
        }),
        __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
        __metadata("design:paramtypes", [ElementRef,
            EngBase])
    ], ExtTreeComponent);
    return ExtTreeComponent;
}(EngBase));

var ExtAngularGridModule = /** @class */ (function () {
    function ExtAngularGridModule() {
    }
    ExtAngularGridModule = __decorate([
        NgModule({
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
    ], ExtAngularGridModule);
    return ExtAngularGridModule;
}());

/*
 * Public API Surface of ext-angular
 */

/**
 * Generated bundle index. Do not edit.
 */

export { ExtAngularGridModule, ExtGridcellbaseMetaData as ɵa, ExtGridcellbaseComponent as ɵb, ExtCheckcolumnComponent as ɵba, ExtGridcolumnMetaData as ɵbb, ExtGridcolumnComponent as ɵbc, ExtDatecolumnMetaData as ɵbd, ExtDatecolumnComponent as ɵbe, ExtDragcolumnMetaData as ɵbf, ExtDragcolumnComponent as ɵbg, ExtNumbercolumnMetaData as ɵbh, ExtNumbercolumnComponent as ɵbi, ExtRownumbererMetaData as ɵbj, ExtRownumbererComponent as ɵbk, ExtSelectioncolumnMetaData as ɵbl, ExtSelectioncolumnComponent as ɵbm, ExtTextcolumnMetaData as ɵbn, ExtTextcolumnComponent as ɵbo, ExtTreecolumnMetaData as ɵbp, ExtTreecolumnComponent as ɵbq, ExtGridMetaData as ɵbr, ExtGridComponent as ɵbs, ExtHeadercontainerMetaData as ɵbt, ExtHeadercontainerComponent as ɵbu, ExtLockedgridMetaData as ɵbv, ExtLockedgridComponent as ɵbw, ExtLockedgridregionMetaData as ɵbx, ExtLockedgridregionComponent as ɵby, ExtGridcolumnsmenuMetaData as ɵbz, EngBase as ɵc, ExtGridcolumnsmenuComponent as ɵca, ExtGridgroupbythismenuitemMetaData as ɵcb, ExtGridgroupbythismenuitemComponent as ɵcc, ExtGridshowingroupsmenuitemMetaData as ɵcd, ExtGridshowingroupsmenuitemComponent as ɵce, ExtGridsortascmenuitemMetaData as ɵcf, ExtGridsortascmenuitemComponent as ɵcg, ExtGridsortdescmenuitemMetaData as ɵch, ExtGridsortdescmenuitemComponent as ɵci, ExtPagingtoolbarMetaData as ɵcj, ExtPagingtoolbarComponent as ɵck, ExtGridrowMetaData as ɵcl, ExtGridrowComponent as ɵcm, ExtRowbodyMetaData as ɵcn, ExtRowbodyComponent as ɵco, ExtRoweditorbarMetaData as ɵcp, ExtRoweditorbarComponent as ɵcq, ExtRoweditorcellMetaData as ɵcr, ExtRoweditorcellComponent as ɵcs, ExtRoweditorMetaData as ɵct, ExtRoweditorComponent as ɵcu, ExtRoweditorgapMetaData as ɵcv, ExtRoweditorgapComponent as ɵcw, ExtRowheaderMetaData as ɵcx, ExtRowheaderComponent as ɵcy, ExtGridsummaryrowMetaData as ɵcz, ExtBooleancellMetaData as ɵd, ExtGridsummaryrowComponent as ɵda, ExtTreeMetaData as ɵdb, ExtTreeComponent as ɵdc, ExtBooleancellComponent as ɵe, ExtGridcellMetaData as ɵf, ExtGridcellComponent as ɵg, ExtCheckcellMetaData as ɵh, ExtCheckcellComponent as ɵi, ExtDatecellMetaData as ɵj, ExtDatecellComponent as ɵk, ExtNumbercellMetaData as ɵl, ExtNumbercellComponent as ɵm, ExtRownumberercellMetaData as ɵn, ExtRownumberercellComponent as ɵo, ExtTextcellMetaData as ɵp, ExtTextcellComponent as ɵq, ExtTreecellMetaData as ɵr, ExtTreecellComponent as ɵs, ExtWidgetcellMetaData as ɵt, ExtWidgetcellComponent as ɵu, ExtCelleditorMetaData as ɵv, ExtCelleditorComponent as ɵw, ExtBooleancolumnMetaData as ɵx, ExtBooleancolumnComponent as ɵy, ExtCheckcolumnMetaData as ɵz };
//# sourceMappingURL=sencha-ext-angular-grid.js.map
