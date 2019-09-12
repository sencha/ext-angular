import * as tslib_1 from "tslib";
import { EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
var EngBase = /** @class */ (function () {
    function EngBase(nativeElement, metaData, hostComponent) {
        var _this = this;
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this.node = nativeElement;
        this.parentNode = hostComponent;
        this.newDiv = document.createElement('div');
        //var t = document.createTextNode("newDiv");
        //this.newDiv.appendChild(t);
        this.node.insertAdjacentElement('beforebegin', this.newDiv);
        this.xtype = metaData.XTYPE;
        this.properties = metaData.PROPERTIES;
        this.propertiesobject = 'propertiesobject';
        this.events = metaData.EVENTS;
        this.eventnames = metaData.EVENTNAMES;
        this.base = EngBase;
        this.eventnames.forEach(function (event, n) {
            if (event != 'fullscreen') {
                _this.currentEl[event] = new EventEmitter();
            }
            else {
                _this.currentEl[event + 'event'] = new EventEmitter();
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
    //******* base start */
    EngBase.prototype.initMe = function () {
        //console.log('');
        //console.log('*** initMe for ' + this.currentElName);
        this.createRawChildren();
        this.setHasParent();
        this.setDirection();
        this.figureOutA();
        this.createProps(this.properties, this.propertiesobject, this.events, this.eventnames);
        this.createExtComponent();
        //this.assessChildren(this.base, this.xtype);
        //this.atEnd();
        //if (this.last == true){
        //    console.log('this is the end...')
        //}
    };
    ;
    EngBase.prototype.createRawChildren = function () {
        //console.log('createRawChildren')
        if (this.currentEl.isAngular) {
            this.currentEl.rawChildren = this.currentEl.childComponents;
        }
        else {
            this.currentEl.ewcChildren = Array.prototype.slice.call(this.currentEl.children);
            this.currentEl.rawChildren = [];
            var num = 0;
            for (var i = 0; i < this.currentEl.ewcChildren.length; i++) {
                if (this.currentEl.ewcChildren[i].XTYPE != undefined) {
                    this.currentEl.rawChildren[num] = {};
                    this.currentEl.rawChildren[num] = this.currentEl.ewcChildren[i];
                    this.currentEl.rawChildren[num].currentComponent = this.currentEl.ewcChildren[i];
                    this.currentEl.rawChildren[num].node = this.currentEl.ewcChildren[i];
                    num++;
                }
            }
        }
        //console.log('rawChildren')
        //console.log(this.currentEl.rawChildren)
    };
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
        //console.log(this.base.DIRECTION);
    };
    EngBase.prototype.figureOutA = function () {
        //if (this.hasParent && this.parentEl.A == undefined) {
        if (this.hasParent &&
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
        component.A.CHILDRENCOMPONENTS = [];
        component.A.CHILDRENCOMPONENTSCOUNT = 0;
        component.A.CHILDRENCOMPONENTSADDED = 0;
        if (this.base.DIRECTION == 'TopToBottom') {
            component.A.CHILDRENCOMPONENTS = this.currentEl.rawChildren;
            for (var i = 0; i < component.A.CHILDRENCOMPONENTS.length; i++) {
                if (component.getCurrentElName(component.A.CHILDRENCOMPONENTS[i]).substring(0, 4) == 'EXT-') {
                    component.A.CHILDRENCOMPONENTSCOUNT++;
                }
            }
            component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
        }
    };
    EngBase.prototype.createExtComponent = function () {
        var A = this.currentEl.A;
        var meA = A;
        var methis = this;
        if (A.props['viewport'] == true) {
            this.newDiv.parentNode.removeChild(this.newDiv);
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
                        //console.log(methis.base.DIRECTION + ' in launch ');
                        if (methis.base.DIRECTION == 'BottomToTop') {
                            //console.log('the last thing to do...');
                            methis.last = true;
                            methis.sendReadyEvent(methis);
                        }
                    }
                });
            });
        }
        else if (this.parentNode == null || this.parentElName.substring(0, 4) != 'EXT-') {
            A.props.renderTo = this.newDiv;
            Ext.onReady(function () {
                //console.log('1- Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
                //console.dir(meA.props)
                methis.currentEl.A.ext = Ext.create(meA.props);
                methis.newDiv.parentNode.replaceChild(methis.currentEl.A.ext.el.dom, methis.newDiv);
                methis.assessChildren(methis.base, methis.xtype);
                //console.log('after assessChildren');
                //var wc = meA.ext.el.dom.nextSibling;
                //wc.parentNode.removeChild(wc);
            });
        }
        else {
            Ext.onReady(function () {
                //console.log('3- Ext.create: ' + methis.currentElName + '  Ext parent: ' + methis.parentElName);
                methis.currentEl.A.ext = Ext.create(meA.props);
                methis.assessChildren(methis.base, methis.xtype);
            });
        }
    };
    EngBase.prototype.assessChildren = function (base, xtype) {
        //console.log('assessChildren for: ' + xtype);
        var A = this.currentEl.A;
        if (this._extitems != undefined) {
            if (this._extitems.length == 1) {
                //console.log('set html');
                A.ext.setHtml(this._extitem.nativeElement);
            }
        }
        if (this._extitems != undefined) {
            if (this._extroutes.length == 1) {
                //console.log('set router');
                A.ext.setHtml(this._extroute.nativeElement);
                //childItem.childCmp = Ext.create({xtype:'widget', ewc:item.getAttribute('ewc'), element:Ext.get(item.parentNode.removeChild(item))})
            }
        }
        if (A.CHILDRENCOMPONENTSCOUNT == 0 &&
            A.CHILDRENCOMPONENTSLEFT == 0 &&
            A.CHILDRENCOMPONENTSADDED == 0 &&
            !this.hasParent) {
            //console.log('Solo');
            //console.log('1- ready event for ' + this.currentElName);
            this.sendReadyEvent(this);
        }
        else if (A.CHILDRENCOMPONENTSADDED > 0) {
            //console.log('addChildren');
            //console.dir(A.CHILDRENCOMPONENTS);
            //console.log(this.node.A);
            this.addChildren(this, A.CHILDRENCOMPONENTS);
            //console.log('send ready for CHILDRENCOMPONENTSADDED > 0');
            //console.log('ready event for ' + this.currentElName);
            //this.sendReadyEvent(this);
            //this.node.remove(); ?? is this needed??
        }
        // else if (this.parentNode != null && this.A.CHILDRENCOMPONENTSCOUNT == 0) {
        //     console.log('send ready for ' + this.A.xtype);
        //     this.sendReadyEvent(this);
        // }
        //if (this.parentEl != null) {
        // if (this.hasParent &&
        //     this.parentEl.nodeName.substring(0, 4) == 'EXT-'
        //     ) {
        if (this.hasParent) {
            if (base.DIRECTION == 'TopToBottom') {
                //console.log('TopToBottom');
                this.parentEl.A.CHILDRENCOMPONENTS.push(this);
                this.parentEl.A.CHILDRENCOMPONENTSADDED++;
                this.parentEl.A.CHILDRENCOMPONENTSLEFT--;
                if (this.parentEl.A.CHILDRENCOMPONENTSLEFT == 0) {
                    //console.log(this.parentEl)
                    this.addChildren(this.parentEl, this.parentEl.A.CHILDRENCOMPONENTS);
                    //console.log('3- ready event for ' + this.parentElName + '(parent)');
                    this.sendReadyEvent(this.parentEl);
                }
            }
            else {
                this.parentEl.A.CHILDRENCOMPONENTS.push(this.currentEl);
                this.parentEl.A.CHILDRENCOMPONENTSADDED++;
                //console.log('4- ready event for ' + this.currentElName);
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
        //console.dir(children)
        for (var i = 0; i < children.length; i++) {
            var childItem = { parentCmp: {}, childCmp: {} };
            childItem.parentCmp = this.currentEl.A.ext;
            var A2;
            if (children[i]._extitems != undefined) {
                A2 = children[i].node.A;
            }
            else {
                A2 = children[i].A;
            }
            childItem.childCmp = A2.ext;
            //childItem.childCmp = children[i].currentEl.A.ext;
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
                    _this[event] = new EventEmitter();
                }
                else {
                    _this[event + 'event'] = new EventEmitter();
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
    tslib_1.__decorate([
        ContentChild('extroute', { static: false }),
        tslib_1.__metadata("design:type", Object)
    ], EngBase.prototype, "_extroute", void 0);
    tslib_1.__decorate([
        ContentChildren('extroute'),
        tslib_1.__metadata("design:type", QueryList)
    ], EngBase.prototype, "_extroutes", void 0);
    tslib_1.__decorate([
        ContentChild('extitem', { static: false }),
        tslib_1.__metadata("design:type", Object)
    ], EngBase.prototype, "_extitem", void 0);
    tslib_1.__decorate([
        ContentChildren('extitem'),
        tslib_1.__metadata("design:type", QueryList)
    ], EngBase.prototype, "_extitems", void 0);
    tslib_1.__decorate([
        ContentChildren(EngBase),
        tslib_1.__metadata("design:type", QueryList)
    ], EngBase.prototype, "_childComponents", void 0);
    return EngBase;
}());
export { EngBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2VuZy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFBO0FBRXRCO0lBbUNJLGlCQUNJLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQXVCO1FBSGxDLGlCQTZCQztRQTNCVyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQVU7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLDRDQUE0QztRQUM1Qyw2QkFBNkI7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFFcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVLEVBQUUsQ0FBTTtZQUN4QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ2pCLEtBQUks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LENBQUMsWUFBWSxDQUFDLENBQUE7aUJBQzVCO2FBQ0o7U0FDSjtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQiwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLDJCQUEyQjtZQUMzQiwwQkFBMEI7U0FDN0I7SUFDTCxDQUFDO0lBL3JCTSxhQUFLLEdBQVEsQ0FBQyxDQUFDO0lBQ2YsaUJBQVMsR0FBUSxFQUFFLENBQUM7SUF3QmtCO1FBQTVDLFlBQVksQ0FBQyxVQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7OzhDQUFnQjtJQUMvQjtRQUE1QixlQUFlLENBQUMsVUFBVSxDQUFDOzBDQUFhLFNBQVM7K0NBQU07SUFDWjtRQUEzQyxZQUFZLENBQUMsU0FBUyxFQUFDLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxDQUFDOzs2Q0FBZTtJQUM5QjtRQUEzQixlQUFlLENBQUMsU0FBUyxDQUFDOzBDQUFZLFNBQVM7OENBQU07SUFDNUI7UUFBekIsZUFBZSxDQUFDLE9BQU8sQ0FBQzswQ0FBbUIsU0FBUztxREFBVTtJQW1xQm5FLGNBQUM7Q0FBQSxBQWpzQkQsSUFpc0JDO1NBanNCWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLy9UaHUgU2VwIDEyIDIwMTkgMDk6Mzc6MjEgR01ULTA0MDAgKEVhc3Rlcm4gRGF5bGlnaHQgVGltZSlcbmRlY2xhcmUgdmFyIEV4dDogYW55XG5cbmltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGNsYXNzIEVuZ0Jhc2Uge1xuICAgIHN0YXRpYyBjb3VudDogYW55ID0gMDtcbiAgICBzdGF0aWMgRElSRUNUSU9OOiBhbnkgPSAnJztcblxuICAgIHB1YmxpYyBleHQ6IGFueVxuICAgIG5ld0RpdjogYW55XG5cbiAgICB4dHlwZTogYW55XG4gICAgcHJvcGVydGllczogYW55XG4gICAgcHJvcGVydGllc29iamVjdDogYW55XG4gICAgZXZlbnRzOiBhbnlcbiAgICBldmVudG5hbWVzOiBhbnlcblxuXG4gICAgQTogYW55O1xuICAgIHByaXZhdGUgbm9kZTogYW55XG4gICAgcGFyZW50Tm9kZTogYW55XG4gICAgYmFzZTogYW55XG4gICAgbm9kZU5hbWU6IGFueVxuXG4gICAgZXdjQ2hpbGRyZW46IGFueVxuICAgIHJhd0NoaWxkcmVuOiBhbnlcbiAgICBoYXNQYXJlbnQ6IGFueVxuICAgIGNoaWxkcmVuOiBhbnlcbiAgICBsYXN0OiBhbnlcblxuICAgIEBDb250ZW50Q2hpbGQoJ2V4dHJvdXRlJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRyb3V0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dHJvdXRlJykgX2V4dHJvdXRlczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZCgnZXh0aXRlbScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0aXRlbTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dGl0ZW0nKSBfZXh0aXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRW5nQmFzZSkgX2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIGdldCBjaGlsZENvbXBvbmVudHMoKTogRW5nQmFzZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ29tcG9uZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQ6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBtZXRhRGF0YTogYW55LFxuICAgICAgICBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2VcbiAgICApIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gaG9zdENvbXBvbmVudDtcblxuICAgICAgICB0aGlzLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL3ZhciB0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJuZXdEaXZcIik7XG4gICAgICAgIC8vdGhpcy5uZXdEaXYuYXBwZW5kQ2hpbGQodCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCB0aGlzLm5ld0Rpdik7XG4gICAgICAgIHRoaXMueHR5cGUgPSBtZXRhRGF0YS5YVFlQRTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbWV0YURhdGEuUFJPUEVSVElFUztcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzb2JqZWN0ID0gJ3Byb3BlcnRpZXNvYmplY3QnO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG1ldGFEYXRhLkVWRU5UUztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzID0gbWV0YURhdGEuRVZFTlROQU1FUztcblxuICAgICAgICB0aGlzLmJhc2UgPSBFbmdCYXNlO1xuXG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5jdXJyZW50RWwpW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5jdXJyZW50RWwpW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgYmFzZU9uSW5pdChtZXRhRGF0YSkgeyB9XG4gICAgYmFzZUFmdGVyVmlld0luaXQobWV0YURhdGEpIHtcbiAgICAgICAgdGhpcy5pbml0TWUoKVxuICAgIH1cblxuLy8qKioqKioqIGJhc2Ugc3RhcnQgKi9cbmluaXRNZSgpIHtcbiAgICAvL2NvbnNvbGUubG9nKCcnKTtcbiAgICAvL2NvbnNvbGUubG9nKCcqKiogaW5pdE1lIGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICB0aGlzLmNyZWF0ZVJhd0NoaWxkcmVuKCk7XG4gICAgdGhpcy5zZXRIYXNQYXJlbnQoKTtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMuZmlndXJlT3V0QSgpO1xuICAgIHRoaXMuY3JlYXRlUHJvcHModGhpcy5wcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXNvYmplY3QsIHRoaXMuZXZlbnRzLCB0aGlzLmV2ZW50bmFtZXMpO1xuICAgIHRoaXMuY3JlYXRlRXh0Q29tcG9uZW50KCk7XG4gICAgLy90aGlzLmFzc2Vzc0NoaWxkcmVuKHRoaXMuYmFzZSwgdGhpcy54dHlwZSk7XG4gICAgLy90aGlzLmF0RW5kKCk7XG4gICAgLy9pZiAodGhpcy5sYXN0ID09IHRydWUpe1xuICAgIC8vICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSBlbmQuLi4nKVxuICAgIC8vfVxufVxuO1xuY3JlYXRlUmF3Q2hpbGRyZW4oKSB7XG4gICAgLy9jb25zb2xlLmxvZygnY3JlYXRlUmF3Q2hpbGRyZW4nKVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5pc0FuZ3VsYXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSB0aGlzLmN1cnJlbnRFbC5jaGlsZENvbXBvbmVudHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuY3VycmVudEVsLmNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdmFyIG51bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXS5YVFlQRSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW5bbnVtXSA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0uY3VycmVudENvbXBvbmVudCA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0ubm9kZSA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIG51bSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ3Jhd0NoaWxkcmVuJylcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuKVxufVxuc2V0SGFzUGFyZW50KCkge1xuICAgIHZhciBoYXNQYXJlbnQ7XG4gICAgaWYgKHRoaXMucGFyZW50RWwgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhhc1BhcmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9yZXR1cm4gaGFzUGFyZW50XG59XG5zZXREaXJlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYmFzZS5jb3VudCA9PSAwKSB7XG4gICAgICAgIHRoaXMuYmFzZS5jb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5oYXNQYXJlbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ0JvdHRvbVRvVG9wJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2codGhpcy5iYXNlLkRJUkVDVElPTik7XG59XG5maWd1cmVPdXRBKCkge1xuICAgIC8vaWYgKHRoaXMuaGFzUGFyZW50ICYmIHRoaXMucGFyZW50RWwuQSA9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5oYXNQYXJlbnQgJiZcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5BID09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0aGlzLnBhcmVudEVsLm5vZGVOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULSdcbiAgICAgICAgKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnBhcmVudEVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEVsLkEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmN1cnJlbnRFbCk7XG4gICAgfVxufVxuaW5pdChjb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQuQSA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnByb3BzID0ge307XG4gICAgY29tcG9uZW50LkEueHR5cGUgPSBjb21wb25lbnQueHR5cGU7XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTID0gW107XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPSAwO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID0gMDtcbiAgICBpZiAodGhpcy5iYXNlLkRJUkVDVElPTiA9PSAnVG9wVG9Cb3R0b20nKSB7XG4gICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRDdXJyZW50RWxOYW1lKGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU1tpXSkuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UO1xuICAgIH1cbn1cbmNyZWF0ZUV4dENvbXBvbmVudCgpIHtcbiAgICB2YXIgQSA9IHRoaXMuY3VycmVudEVsLkE7XG4gICAgdmFyIG1lQSA9IEE7XG4gICAgdmFyIG1ldGhpcyA9IHRoaXM7XG4gICAgaWYgKEEucHJvcHNbJ3ZpZXdwb3J0J10gPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzAtRXh0LmFwcGxpY2F0aW9uOiAnICsgbWVBLnByb3BzLnh0eXBlKTtcbiAgICAgICAgICAgIG1ldGhpcy5hc3Nlc3NDaGlsZHJlbihtZXRoaXMuYmFzZSwgbWV0aGlzLnh0eXBlKTtcbiAgICAgICAgICAgIEV4dC5hcHBsaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogJ015RVdDQXBwJyxcbiAgICAgICAgICAgICAgICBsYXVuY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgRXh0LlZpZXdwb3J0LmFkZChbbWV0aGlzLmN1cnJlbnRFbC5BLmV4dF0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAod2luZG93Wydyb3V0ZXInXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93Wydyb3V0ZXInXS5pbml0KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtZXRoaXMuYmFzZS5ESVJFQ1RJT04gKyAnIGluIGxhdW5jaCAnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhpcy5iYXNlLkRJUkVDVElPTiA9PSAnQm90dG9tVG9Ub3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aGUgbGFzdCB0aGluZyB0byBkby4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aGlzLmxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aGlzLnNlbmRSZWFkeUV2ZW50KG1ldGhpcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsIHx8IHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSAhPSAnRVhULScpIHtcbiAgICAgICAgQS5wcm9wcy5yZW5kZXJUbyA9IHRoaXMubmV3RGl2O1xuICAgICAgICBFeHQub25SZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcxLSBFeHQuY3JlYXRlOiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUgKyAnIEhUTUwgcGFyZW50OiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmRpcihtZUEucHJvcHMpXG4gICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgbWV0aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtZXRoaXMuY3VycmVudEVsLkEuZXh0LmVsLmRvbSwgbWV0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdhZnRlciBhc3Nlc3NDaGlsZHJlbicpO1xuICAgICAgICAgICAgLy92YXIgd2MgPSBtZUEuZXh0LmVsLmRvbS5uZXh0U2libGluZztcbiAgICAgICAgICAgIC8vd2MucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh3Yyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMy0gRXh0LmNyZWF0ZTogJyArIG1ldGhpcy5jdXJyZW50RWxOYW1lICsgJyAgRXh0IHBhcmVudDogJyArIG1ldGhpcy5wYXJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIG1ldGhpcy5hc3Nlc3NDaGlsZHJlbihtZXRoaXMuYmFzZSwgbWV0aGlzLnh0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuYXNzZXNzQ2hpbGRyZW4oYmFzZSwgeHR5cGUpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdhc3Nlc3NDaGlsZHJlbiBmb3I6ICcgKyB4dHlwZSk7XG4gICAgdmFyIEEgPSB0aGlzLmN1cnJlbnRFbC5BO1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzZXQgaHRtbCcpO1xuICAgICAgICAgICAgQS5leHQuc2V0SHRtbCh0aGlzLl9leHRpdGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dHJvdXRlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2V0IHJvdXRlcicpO1xuICAgICAgICAgICAgQS5leHQuc2V0SHRtbCh0aGlzLl9leHRyb3V0ZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIC8vY2hpbGRJdGVtLmNoaWxkQ21wID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGV3YzppdGVtLmdldEF0dHJpYnV0ZSgnZXdjJyksIGVsZW1lbnQ6RXh0LmdldChpdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbSkpfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCA9PSAwICYmXG4gICAgICAgIEEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9PSAwICYmXG4gICAgICAgIEEuQ0hJTERSRU5DT01QT05FTlRTQURERUQgPT0gMCAmJlxuICAgICAgICAhdGhpcy5oYXNQYXJlbnQpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnU29sbycpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCcxLSByZWFkeSBldmVudCBmb3IgJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEEuQ0hJTERSRU5DT01QT05FTlRTQURERUQgPiAwKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ2FkZENoaWxkcmVuJyk7XG4gICAgICAgIC8vY29uc29sZS5kaXIoQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMubm9kZS5BKTtcbiAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLCBBLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3NlbmQgcmVhZHkgZm9yIENISUxEUkVOQ09NUE9ORU5UU0FEREVEID4gMCcpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdyZWFkeSBldmVudCBmb3IgJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG5cblxuXG5cbiAgICAgICAgLy90aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICAvL3RoaXMubm9kZS5yZW1vdmUoKTsgPz8gaXMgdGhpcyBuZWVkZWQ/P1xuXG5cblxuICAgIH1cbiAgICAvLyBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCAmJiB0aGlzLkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPT0gMCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VuZCByZWFkeSBmb3IgJyArIHRoaXMuQS54dHlwZSk7XG4gICAgLy8gICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgLy8gfVxuICAgIC8vaWYgKHRoaXMucGFyZW50RWwgIT0gbnVsbCkge1xuXG4gICAgLy8gaWYgKHRoaXMuaGFzUGFyZW50ICYmXG4gICAgLy8gICAgIHRoaXMucGFyZW50RWwubm9kZU5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJ1xuICAgIC8vICAgICApIHtcblxuICAgIGlmICh0aGlzLmhhc1BhcmVudCkge1xuXG4gICAgICAgIGlmIChiYXNlLkRJUkVDVElPTiA9PSAnVG9wVG9Cb3R0b20nKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdUb3BUb0JvdHRvbScpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEKys7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVC0tO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZUID09IDApIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGFyZW50RWwpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLnBhcmVudEVsLCB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTKTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCczLSByZWFkeSBldmVudCBmb3IgJyArIHRoaXMucGFyZW50RWxOYW1lICsgJyhwYXJlbnQpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzLnBhcmVudEVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFMucHVzaCh0aGlzLmN1cnJlbnRFbCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTQURERUQrKztcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzQtIHJlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5hZGRDaGlsZHJlbihjaGlsZCwgY2hpbGRyZW4pIHtcbiAgICAvL2NvbnNvbGUubG9nKCdhZGRDaGlsZHJlbiBmb3IgJyArIGNoaWxkLnh0eXBlICsgJyAtIG51bSBjaGlsZHJlbjogJyArIGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgLy9mb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAvLyAgICB2YXIgY2hpbGRJdGVtID0geyBwYXJlbnRDbXA6IHt9LCBjaGlsZENtcDoge30gfTtcbiAgICAvLyAgICBjaGlsZEl0ZW0ucGFyZW50Q21wID0gY2hpbGQuY3VycmVudEVsLkEuZXh0O1xuICAgIC8vICAgIGNoaWxkSXRlbS5jaGlsZENtcCA9IGNoaWxkcmVuW2ldLkEuZXh0O1xuICAgIC8vICAgIHRoaXMuYWRkVGhlQ2hpbGQoY2hpbGRJdGVtLnBhcmVudENtcCwgY2hpbGRJdGVtLmNoaWxkQ21wLCBudWxsKTtcbiAgICAvL31cbiAgICAvL2NvbnNvbGUuZGlyKGNoaWxkcmVuKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkSXRlbSA9IHsgcGFyZW50Q21wOiB7fSwgY2hpbGRDbXA6IHt9IH07XG4gICAgICAgIGNoaWxkSXRlbS5wYXJlbnRDbXAgPSB0aGlzLmN1cnJlbnRFbC5BLmV4dDtcblxuICAgICAgICB2YXIgQTJcbiAgICAgICAgaWYgKGNoaWxkcmVuW2ldLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIEEyID0gY2hpbGRyZW5baV0ubm9kZS5BO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQTIgPSBjaGlsZHJlbltpXS5BO1xuICAgICAgICB9XG4gICAgICAgIGNoaWxkSXRlbS5jaGlsZENtcCA9IEEyLmV4dDtcbiAgICAgICAgLy9jaGlsZEl0ZW0uY2hpbGRDbXAgPSBjaGlsZHJlbltpXS5jdXJyZW50RWwuQS5leHQ7XG5cbiAgICAgICAgdGhpcy5hZGRUaGVDaGlsZChjaGlsZEl0ZW0ucGFyZW50Q21wLCBjaGlsZEl0ZW0uY2hpbGRDbXAsIG51bGwpO1xuICAgIH1cbn1cbmFkZFRoZUNoaWxkKHBhcmVudENtcCwgY2hpbGRDbXAsIGxvY2F0aW9uKSB7XG4gICAgdmFyIHBhcmVudHh0eXBlID0gcGFyZW50Q21wLnh0eXBlO1xuICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGU7XG4gICAgLy9jb25zb2xlLmxvZygnYWRkVGhlQ2hpbGQ6ICcgKyBwYXJlbnR4dHlwZSArICcoJyArIHBhcmVudENtcC5leHQgKyAnKScgKyAnIC0gJyArIGNoaWxkeHR5cGUgKyAnKCcgKyBjaGlsZENtcC5leHQgKyAnKScpO1xuICAgIC8vaWYgKGNoaWxkeHR5cGUgPT0gJ3dpZGdldCcpXG4gICAgaWYgKHRoaXMuY3VycmVudEVsLkEuZXh0LmluaXRpYWxDb25maWcuYWxpZ24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnR4dHlwZSAhPSAndGl0bGViYXInICYmIHBhcmVudHh0eXBlICE9ICdncmlkJyAmJiBwYXJlbnR4dHlwZSAhPSAnbG9ja2VkZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbiBvbmx5IHVzZSBhbGlnbiBwcm9wZXJ0eSBpZiBwYXJlbnQgaXMgYSBUaXRsZWJhciBvciBHcmlkIG9yIEJ1dHRvbicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBkZWZhdWx0cGFyZW50ID0gZmFsc2U7XG4gICAgdmFyIGRlZmF1bHRjaGlsZCA9IGZhbHNlO1xuICAgIHN3aXRjaCAocGFyZW50eHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib29sZWFuY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY2hlY2tjb2x1bW4nOlxuICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgY2FzZSAndGVtcGxhdGVjb2x1bW4nOlxuICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgY2FzZSAndGVtcGxhdGVjb2x1bW4nOlxuICAgICAgICBjYXNlICdkYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZHJhZ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ251bWJlcmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3NlbGVjdGlvbmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICBjYXNlICd0cmVlY29sdW1uJzpcbiAgICAgICAgY2FzZSAncm93bnVtYmVyZXInOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVuZGVyZXJjZWxsJzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldENlbGwoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dyaWQnOlxuICAgICAgICBjYXNlICdsb2NrZWRncmlkJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dGNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2RhdGVjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Jvd251bWJlcmVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdudW1iZXJjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW5jb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09ICdncmlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnQ29scyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLnJlZ2lzdGVyZWRDb2x1bW5zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ0NvbHMgPSBwYXJlbnRDbXAucmVnaXN0ZXJlZENvbHVtbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09ICdncmlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0Q29sdW1uKGxvY2F0aW9uICsgcmVnQ29scywgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChsb2NhdGlvbiArIHJlZ0NvbHMsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIDtcbiAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgY2FzZSAndG9vbGJhcic6XG4gICAgICAgIGNhc2UgJ3RpdGxlYmFyJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGxvY2F0aW9uLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b29sdGlwJzpcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbHVnaW4nOlxuICAgICAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRlZmF1bHRjaGlsZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRwYXJlbnQgPT0gdHJ1ZSAmJiBkZWZhdWx0Y2hpbGQgPT0gdHJ1ZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHBhcmVudHh0eXBlICsgJy5hZGQoJyArIGNoaWxkeHR5cGUgKyAnKScpXG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgIH1cbiAgICAvLyBpZiAodGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQgPiAwKSB7XG4gICAgLy8gICAgIHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkLS1cbiAgICAvLyB9XG4gICAgLy8gLy9jb25zb2xlLmxvZygnY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZChhZnRlcikgJyAgKyB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZClcbiAgICAvLyBpZiAodGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQgPT0gMCkge1xuICAgIC8vICAgICB0aGlzLnBhcmVudE5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JlYWR5Jyx7ZGV0YWlsOntjbXA6IHRoaXMucGFyZW50Tm9kZS5leHR9fSkpXG4gICAgLy8gfVxufVxuYXRFbmQoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnKioqIGF0IGVuZCcpO1xuICAgIC8vY29uc29sZS5sb2coJ3RoaXMgLSAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAvL2NvbnNvbGUuZGlyKHRoaXMuY3VycmVudEVsLkEpO1xuICAgIGlmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50IC0gJyArIHRoaXMucGFyZW50RWxOYW1lKTtcbiAgICAgICAgLy9jb25zb2xlLmRpcih0aGlzLnBhcmVudEVsLkEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTm8gRVhUIHBhcmVudCcpO1xuICAgIH1cbn1cbmdldCBjdXJyZW50RWwoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZ2V0Q3VycmVudEVsTmFtZShjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50Ll9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5ub2RlTmFtZTtcbiAgICB9XG59XG5nZXQgY3VycmVudEVsTmFtZSgpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTmFtZTtcbiAgICB9XG59XG5nZXQgaXNBbmd1bGFyKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZ2V0IHBhcmVudEVsKCkge1xuICAgIGlmICh0aGlzLmlzQW5ndWxhcikge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubm9kZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gICAgfVxufVxuZ2V0IHBhcmVudEVsTmFtZSgpIHtcbiAgICBpZiAodGhpcy5pc0FuZ3VsYXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGVOYW1lO1xuICAgIH1cbn1cbnNlbmRSZWFkeUV2ZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBjbXAgPSBjb21wb25lbnQuY3VycmVudEVsLkEuZXh0O1xuICAgIGlmIChjb21wb25lbnQuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnRbJ3JlYWR5J10uZW1pdCh7IGRldGFpbDogeyBjbXA6IGNtcCB9IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZWFkeScsIHsgZGV0YWlsOiB7IGNtcDogY21wIH0gfSkpO1xuICAgIH1cbn1cbi8vKioqKioqKiBiYXNlIGVuZCAqL1xuY3JlYXRlUHJvcHMocHJvcGVydGllcywgcHJvcGVydGllc29iamVjdCwgZXZlbnRzLCBldmVudG5hbWVzKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5jdXJyZW50RWwuQS5wcm9wcztcbiAgICBwcm9wcy54dHlwZSA9IHRoaXMueHR5cGU7XG4gICAgbGV0IGxpc3RlbmVyc1Byb3ZpZGVkID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgICAgICBpZiAodGhpc1twcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgICAgaWYgKChwcm9wcy54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgcHJvcHMueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PSAnbGlzdGVuZXJzJyAmJiB0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgbGlzdGVuZXJzUHJvdmlkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50Jykge1xuICAgICAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHJ1ZSA9PT0gdGhpc1snZml0VG9QYXJlbnQnXSkge1xuICAgICAgICBwcm9wcy50b3AgPSAwLFxuICAgICAgICAgICAgcHJvcHMubGVmdCA9IDAsXG4gICAgICAgICAgICBwcm9wcy53aWR0aCA9ICcxMDAlJyxcbiAgICAgICAgICAgIHByb3BzLmhlaWdodCA9ICcxMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXNbJ2NvbmZpZyddICE9PSB7fSkge1xuICAgICAgICBFeHQuYXBwbHkocHJvcHMsIHRoaXNbJ2NvbmZpZyddKTtcbiAgICB9XG4gICAgaWYgKCFsaXN0ZW5lcnNQcm92aWRlZCkge1xuICAgICAgICBwcm9wcy5saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRuYW1lID0gZXZlbnQubmFtZTtcbiAgICAgICAgICAgIGxldCBldmVudHBhcmFtZXRlcnMgPSBldmVudC5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgbWUuY3VycmVudEVsLkEucHJvcHMubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaW4gdGhlIGV2ZW50ICcgKyBldmVudG5hbWUpXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBldmVudHBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgbGV0IHBhcm1zID0gcGFyYW1ldGVycy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBsZXQgZW1pdHBhcm1zID0ge307XG4gICAgICAgICAgICAgICAgaWYgKG1lLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9kdXA/P1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50LCBuKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cblxuICAgIGJhc2VPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICAgICAgbGV0IGNoYW5nZXNNc2dzID0gW107XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGxldCB2ZXJiID0gJyc7XG4gICAgICAgICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2ZXJiID0gJ2luaXRpYWxpemVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcmIgPSAnY2hhbmdlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RWwuQSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGlyKHRoaXMuY3VycmVudEVsLkEuZXh0KVxuICAgICAgICAgICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgdmFyIHNldEZ1bmN0aW9uID0gJ3NldCcgKyBjYXBQcm9wTmFtZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNldEZ1bmN0aW9uKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BLmV4dFtzZXRGdW5jdGlvbl0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLkEuZXh0W3NldEZ1bmN0aW9uXSh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzZXRGdW5jdGlvbiArICcgbm90IGZvdW5kIGZvciAnICsgdGhpcy5jdXJyZW50RWwuQS5leHQueHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2ZXJiID09ICdjaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnY2hhbmdlIG5lZWRlZCBhbmQgZXh0IG5vdCBkZWZpbmVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VzTXNncy5wdXNoKGAkICQgdG8gXCIkXCJgKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB2YXIgY2hpbGRDbXA7XG4gICAgICAgIHZhciBwYXJlbnRDbXA7XG4gICAgICAgIGlmIChjaGlsZENtcCA9PSB1bmRlZmluZWQgfHwgcGFyZW50Q21wID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkQ21wID0gdGhpcy5jdXJyZW50RWwuQS5leHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wID0gdGhpcy5wYXJlbnRFbC5BLmV4dDtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZENtcCA9PSB1bmRlZmluZWQgfHwgcGFyZW50Q21wID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnbWVudScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi9tZW51IG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2Nhcm91c2VsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2Fyb3VzZWwgcGFyZW50IG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2dyaWQnICYmIGNoaWxkQ21wLnh0eXBlID09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdncmlkL2NvbHVtbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnc2VnbWVudGVkYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2VnbWVudGVkYnV0dG9uL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICd0b29sdGlwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL3Rvb2x0aXAgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAndGl0bGViYXInICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAndGl0bGViYXInICYmIGNoaWxkQ21wLnh0eXBlID09ICdzZWFyY2hmaWVsZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL3NlYXJjaGZpZWxkIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5yZW1vdmUoW2NoaWxkQ21wXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZENtcCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRlc3Ryb3knKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICAgIH1cbiAgICB9XG59Il19