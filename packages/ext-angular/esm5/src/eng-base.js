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
        console.log('');
        console.log('*** initMe for ' + this.currentElName);
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
                console.log('0-Ext.application: ' + meA.props.xtype);
                methis.assessChildren(methis.base, methis.xtype);
                Ext.application({
                    name: 'MyEWCApp',
                    launch: function () {
                        Ext.Viewport.add([methis.currentEl.A.ext]);
                        if (window['router']) {
                            window['router'].init();
                        }
                        console.log(methis.base.DIRECTION + ' in launch ');
                        if (methis.base.DIRECTION == 'BottomToTop') {
                            console.log('the last thing to do...');
                            methis.last = true;
                        }
                    }
                });
            });
        }
        else if (this.parentNode == null || this.parentElName.substring(0, 4) != 'EXT-') {
            A.props.renderTo = this.newDiv;
            Ext.onReady(function () {
                console.log('1- Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
                console.dir(meA.props);
                methis.currentEl.A.ext = Ext.create(meA.props);
                methis.newDiv.parentNode.replaceChild(methis.currentEl.A.ext.el.dom, methis.newDiv);
                methis.assessChildren(methis.base, methis.xtype);
                console.log('after assessChildren');
                //var wc = meA.ext.el.dom.nextSibling;
                //wc.parentNode.removeChild(wc);
            });
        }
        else {
            Ext.onReady(function () {
                console.log('3- Ext.create: ' + methis.currentElName + '  Ext parent: ' + methis.parentElName);
                methis.currentEl.A.ext = Ext.create(meA.props);
                methis.assessChildren(methis.base, methis.xtype);
            });
        }
    };
    EngBase.prototype.assessChildren = function (base, xtype) {
        console.log('assessChildren for: ' + xtype);
        var A = this.currentEl.A;
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
            !this.hasParent) {
            console.log('Solo');
            console.log('ready event for ' + this.currentElName);
            this.sendReadyEvent(this);
        }
        else if (A.CHILDRENCOMPONENTSADDED > 0) {
            console.log('addChildren');
            console.dir(A.CHILDRENCOMPONENTS);
            console.log(this.node.A);
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
        //if (this.parentEl != null) {
        // if (this.hasParent &&
        //     this.parentEl.nodeName.substring(0, 4) == 'EXT-'
        //     ) {
        if (this.hasParent) {
            if (base.DIRECTION == 'TopToBottom') {
                console.log('TopToBottom');
                this.parentEl.A.CHILDRENCOMPONENTS.push(this);
                this.parentEl.A.CHILDRENCOMPONENTSADDED++;
                this.parentEl.A.CHILDRENCOMPONENTSLEFT--;
                if (this.parentEl.A.CHILDRENCOMPONENTSLEFT == 0) {
                    //console.log(this.parentEl)
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
        console.dir(children);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2VuZy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFBO0FBRXRCO0lBbUNJLGlCQUNJLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQXVCO1FBSGxDLGlCQTZCQztRQTNCVyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQVU7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLDRDQUE0QztRQUM1Qyw2QkFBNkI7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFFcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVLEVBQUUsQ0FBTTtZQUN4QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ2pCLEtBQUks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WSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLy9Nb24gU2VwIDA5IDIwMTkgMTM6Mzk6MDEgR01ULTA0MDAgKEVhc3Rlcm4gRGF5bGlnaHQgVGltZSlcbmRlY2xhcmUgdmFyIEV4dDogYW55XG5cbmltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGNsYXNzIEVuZ0Jhc2Uge1xuICAgIHN0YXRpYyBjb3VudDogYW55ID0gMDtcbiAgICBzdGF0aWMgRElSRUNUSU9OOiBhbnkgPSAnJztcblxuICAgIHB1YmxpYyBleHQ6IGFueVxuICAgIG5ld0RpdjogYW55XG5cbiAgICB4dHlwZTogYW55XG4gICAgcHJvcGVydGllczogYW55XG4gICAgcHJvcGVydGllc29iamVjdDogYW55XG4gICAgZXZlbnRzOiBhbnlcbiAgICBldmVudG5hbWVzOiBhbnlcblxuXG4gICAgQTogYW55O1xuICAgIHByaXZhdGUgbm9kZTogYW55XG4gICAgcGFyZW50Tm9kZTogYW55XG4gICAgYmFzZTogYW55XG4gICAgbm9kZU5hbWU6IGFueVxuXG4gICAgZXdjQ2hpbGRyZW46IGFueVxuICAgIHJhd0NoaWxkcmVuOiBhbnlcbiAgICBoYXNQYXJlbnQ6IGFueVxuICAgIGNoaWxkcmVuOiBhbnlcbiAgICBsYXN0OiBhbnlcblxuICAgIEBDb250ZW50Q2hpbGQoJ2V4dHJvdXRlJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRyb3V0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dHJvdXRlJykgX2V4dHJvdXRlczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZCgnZXh0aXRlbScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0aXRlbTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dGl0ZW0nKSBfZXh0aXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRW5nQmFzZSkgX2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIGdldCBjaGlsZENvbXBvbmVudHMoKTogRW5nQmFzZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ29tcG9uZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQ6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBtZXRhRGF0YTogYW55LFxuICAgICAgICBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IGhvc3RDb21wb25lbnQ7XG5cbiAgICAgICAgdGhpcy5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy92YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwibmV3RGl2XCIpO1xuICAgICAgICAvL3RoaXMubmV3RGl2LmFwcGVuZENoaWxkKHQpO1xuXG4gICAgICAgIHRoaXMubm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGhpcy5uZXdEaXYpO1xuICAgICAgICB0aGlzLnh0eXBlID0gbWV0YURhdGEuWFRZUEU7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG1ldGFEYXRhLlBST1BFUlRJRVM7XG4gICAgICAgIHRoaXMucHJvcGVydGllc29iamVjdCA9ICdwcm9wZXJ0aWVzb2JqZWN0JztcbiAgICAgICAgdGhpcy5ldmVudHMgPSBtZXRhRGF0YS5FVkVOVFM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcyA9IG1ldGFEYXRhLkVWRU5UTkFNRVM7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcblxuICAgICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGJhc2VPbkluaXQobWV0YURhdGEpIHsgfVxuICAgIGJhc2VBZnRlclZpZXdJbml0KG1ldGFEYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdE1lKClcbiAgICB9XG5cbi8vKioqKioqKiBiYXNlIHN0YXJ0ICovXG5pbml0TWUoKSB7XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCcqKiogaW5pdE1lIGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICB0aGlzLmNyZWF0ZVJhd0NoaWxkcmVuKCk7XG4gICAgdGhpcy5zZXRIYXNQYXJlbnQoKTtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMuZmlndXJlT3V0QSgpO1xuICAgIHRoaXMuY3JlYXRlUHJvcHModGhpcy5wcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXNvYmplY3QsIHRoaXMuZXZlbnRzLCB0aGlzLmV2ZW50bmFtZXMpO1xuICAgIHRoaXMuY3JlYXRlRXh0Q29tcG9uZW50KCk7XG4gICAgLy90aGlzLmFzc2Vzc0NoaWxkcmVuKHRoaXMuYmFzZSwgdGhpcy54dHlwZSk7XG4gICAgLy90aGlzLmF0RW5kKCk7XG4gICAgLy9pZiAodGhpcy5sYXN0ID09IHRydWUpe1xuICAgIC8vICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSBlbmQuLi4nKVxuICAgIC8vfVxufVxuO1xuY3JlYXRlUmF3Q2hpbGRyZW4oKSB7XG4gICAgLy9jb25zb2xlLmxvZygnY3JlYXRlUmF3Q2hpbGRyZW4nKVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5pc0FuZ3VsYXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSB0aGlzLmN1cnJlbnRFbC5jaGlsZENvbXBvbmVudHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuY3VycmVudEVsLmNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdmFyIG51bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXS5YVFlQRSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW5bbnVtXSA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0uY3VycmVudENvbXBvbmVudCA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0ubm9kZSA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIG51bSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ3Jhd0NoaWxkcmVuJylcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuKVxufVxuc2V0SGFzUGFyZW50KCkge1xuICAgIHZhciBoYXNQYXJlbnQ7XG4gICAgaWYgKHRoaXMucGFyZW50RWwgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhhc1BhcmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9yZXR1cm4gaGFzUGFyZW50XG59XG5zZXREaXJlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYmFzZS5jb3VudCA9PSAwKSB7XG4gICAgICAgIHRoaXMuYmFzZS5jb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5oYXNQYXJlbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ0JvdHRvbVRvVG9wJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2codGhpcy5iYXNlLkRJUkVDVElPTik7XG59XG5maWd1cmVPdXRBKCkge1xuICAgIC8vaWYgKHRoaXMuaGFzUGFyZW50ICYmIHRoaXMucGFyZW50RWwuQSA9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5oYXNQYXJlbnQgJiZcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5BID09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0aGlzLnBhcmVudEVsLm5vZGVOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULSdcbiAgICAgICAgKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnBhcmVudEVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEVsLkEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmN1cnJlbnRFbCk7XG4gICAgfVxufVxuaW5pdChjb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQuQSA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnByb3BzID0ge307XG4gICAgY29tcG9uZW50LkEueHR5cGUgPSBjb21wb25lbnQueHR5cGU7XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTID0gW107XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPSAwO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID0gMDtcbiAgICBpZiAodGhpcy5iYXNlLkRJUkVDVElPTiA9PSAnVG9wVG9Cb3R0b20nKSB7XG4gICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRDdXJyZW50RWxOYW1lKGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU1tpXSkuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UO1xuICAgIH1cbn1cbmNyZWF0ZUV4dENvbXBvbmVudCgpIHtcbiAgICB2YXIgQSA9IHRoaXMuY3VycmVudEVsLkE7XG4gICAgdmFyIG1lQSA9IEE7XG4gICAgdmFyIG1ldGhpcyA9IHRoaXM7XG4gICAgaWYgKEEucHJvcHNbJ3ZpZXdwb3J0J10gPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcwLUV4dC5hcHBsaWNhdGlvbjogJyArIG1lQS5wcm9wcy54dHlwZSk7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICBFeHQuYXBwbGljYXRpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNeUVXQ0FwcCcsXG4gICAgICAgICAgICAgICAgbGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIEV4dC5WaWV3cG9ydC5hZGQoW21ldGhpcy5jdXJyZW50RWwuQS5leHRdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1sncm91dGVyJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1sncm91dGVyJ10uaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1ldGhpcy5iYXNlLkRJUkVDVElPTiArICcgaW4gbGF1bmNoICcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWV0aGlzLmJhc2UuRElSRUNUSU9OID09ICdCb3R0b21Ub1RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgbGFzdCB0aGluZyB0byBkby4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aGlzLmxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCB8fCB0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgIT0gJ0VYVC0nKSB7XG4gICAgICAgIEEucHJvcHMucmVuZGVyVG8gPSB0aGlzLm5ld0RpdjtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzEtIEV4dC5jcmVhdGU6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSArICcgSFRNTCBwYXJlbnQ6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihtZUEucHJvcHMpXG4gICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgbWV0aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtZXRoaXMuY3VycmVudEVsLkEuZXh0LmVsLmRvbSwgbWV0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgYXNzZXNzQ2hpbGRyZW4nKTtcbiAgICAgICAgICAgIC8vdmFyIHdjID0gbWVBLmV4dC5lbC5kb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAvL3djLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCczLSBFeHQuY3JlYXRlOiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUgKyAnICBFeHQgcGFyZW50OiAnICsgbWV0aGlzLnBhcmVudEVsTmFtZSk7XG4gICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgbWV0aGlzLmFzc2Vzc0NoaWxkcmVuKG1ldGhpcy5iYXNlLCBtZXRoaXMueHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5hc3Nlc3NDaGlsZHJlbihiYXNlLCB4dHlwZSkge1xuICAgIGNvbnNvbGUubG9nKCdhc3Nlc3NDaGlsZHJlbiBmb3I6ICcgKyB4dHlwZSk7XG4gICAgdmFyIEEgPSB0aGlzLmN1cnJlbnRFbC5BO1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGh0bWwnKTtcbiAgICAgICAgICAgIEEuZXh0LnNldEh0bWwodGhpcy5fZXh0aXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRyb3V0ZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgcm91dGVyJyk7XG4gICAgICAgICAgICBBLmV4dC5zZXRIdG1sKHRoaXMuX2V4dHJvdXRlLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgLy9jaGlsZEl0ZW0uY2hpbGRDbXAgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZXdjOml0ZW0uZ2V0QXR0cmlidXRlKCdld2MnKSwgZWxlbWVudDpFeHQuZ2V0KGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtKSl9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID09IDAgJiZcbiAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZUID09IDAgJiZcbiAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA9PSAwICYmXG4gICAgICAgICF0aGlzLmhhc1BhcmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU29sbycpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkQ2hpbGRyZW4nKTtcbiAgICAgICAgY29uc29sZS5kaXIoQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUuQSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcywgQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdzZW5kIHJlYWR5IGZvciBDSElMRFJFTkNPTVBPTkVOVFNBRERFRCA+IDAnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgICAvLyBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCAmJiB0aGlzLkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPT0gMCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VuZCByZWFkeSBmb3IgJyArIHRoaXMuQS54dHlwZSk7XG4gICAgLy8gICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgLy8gfVxuICAgIC8vaWYgKHRoaXMucGFyZW50RWwgIT0gbnVsbCkge1xuXG4gICAgLy8gaWYgKHRoaXMuaGFzUGFyZW50ICYmXG4gICAgLy8gICAgIHRoaXMucGFyZW50RWwubm9kZU5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJ1xuICAgIC8vICAgICApIHtcblxuICAgIGlmICh0aGlzLmhhc1BhcmVudCkge1xuXG4gICAgICAgIGlmIChiYXNlLkRJUkVDVElPTiA9PSAnVG9wVG9Cb3R0b20nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9wVG9Cb3R0b20nKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQtLTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBhcmVudEVsKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5wYXJlbnRFbCwgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5wYXJlbnRFbE5hbWUgKyAnKHBhcmVudCknKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMucGFyZW50RWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUy5wdXNoKHRoaXMuY3VycmVudEVsKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5hZGRDaGlsZHJlbihjaGlsZCwgY2hpbGRyZW4pIHtcbiAgICAvL2NvbnNvbGUubG9nKCdhZGRDaGlsZHJlbiBmb3IgJyArIGNoaWxkLnh0eXBlICsgJyAtIG51bSBjaGlsZHJlbjogJyArIGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgLy9mb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAvLyAgICB2YXIgY2hpbGRJdGVtID0geyBwYXJlbnRDbXA6IHt9LCBjaGlsZENtcDoge30gfTtcbiAgICAvLyAgICBjaGlsZEl0ZW0ucGFyZW50Q21wID0gY2hpbGQuY3VycmVudEVsLkEuZXh0O1xuICAgIC8vICAgIGNoaWxkSXRlbS5jaGlsZENtcCA9IGNoaWxkcmVuW2ldLkEuZXh0O1xuICAgIC8vICAgIHRoaXMuYWRkVGhlQ2hpbGQoY2hpbGRJdGVtLnBhcmVudENtcCwgY2hpbGRJdGVtLmNoaWxkQ21wLCBudWxsKTtcbiAgICAvL31cbiAgICBjb25zb2xlLmRpcihjaGlsZHJlbilcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZEl0ZW0gPSB7IHBhcmVudENtcDoge30sIGNoaWxkQ21wOiB7fSB9O1xuICAgICAgICBjaGlsZEl0ZW0ucGFyZW50Q21wID0gdGhpcy5jdXJyZW50RWwuQS5leHQ7XG5cbiAgICAgICAgdmFyIEEyXG4gICAgICAgIGlmIChjaGlsZHJlbltpXS5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBBMiA9IGNoaWxkcmVuW2ldLm5vZGUuQTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEEyID0gY2hpbGRyZW5baV0uQTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZEl0ZW0uY2hpbGRDbXAgPSBBMi5leHQ7XG4gICAgICAgIC8vY2hpbGRJdGVtLmNoaWxkQ21wID0gY2hpbGRyZW5baV0uY3VycmVudEVsLkEuZXh0O1xuXG4gICAgICAgIHRoaXMuYWRkVGhlQ2hpbGQoY2hpbGRJdGVtLnBhcmVudENtcCwgY2hpbGRJdGVtLmNoaWxkQ21wLCBudWxsKTtcbiAgICB9XG59XG5hZGRUaGVDaGlsZChwYXJlbnRDbXAsIGNoaWxkQ21wLCBsb2NhdGlvbikge1xuICAgIHZhciBwYXJlbnR4dHlwZSA9IHBhcmVudENtcC54dHlwZTtcbiAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlO1xuICAgIC8vY29uc29sZS5sb2coJ2FkZFRoZUNoaWxkOiAnICsgcGFyZW50eHR5cGUgKyAnKCcgKyBwYXJlbnRDbXAuZXh0ICsgJyknICsgJyAtICcgKyBjaGlsZHh0eXBlICsgJygnICsgY2hpbGRDbXAuZXh0ICsgJyknKTtcbiAgICAvL2lmIChjaGlsZHh0eXBlID09ICd3aWRnZXQnKVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BLmV4dC5pbml0aWFsQ29uZmlnLmFsaWduICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyZW50eHR5cGUgIT0gJ3RpdGxlYmFyJyAmJiBwYXJlbnR4dHlwZSAhPSAnZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2xvY2tlZGdyaWQnICYmIHBhcmVudHh0eXBlICE9ICdidXR0b24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW4gb25seSB1c2UgYWxpZ24gcHJvcGVydHkgaWYgcGFyZW50IGlzIGEgVGl0bGViYXIgb3IgR3JpZCBvciBCdXR0b24nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZGVmYXVsdHBhcmVudCA9IGZhbHNlO1xuICAgIHZhciBkZWZhdWx0Y2hpbGQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHBhcmVudHh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZGF0ZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2RyYWdjb2x1bW4nOlxuICAgICAgICBjYXNlICdudW1iZXJjb2x1bW4nOlxuICAgICAgICBjYXNlICdzZWxlY3Rpb25jb2x1bW4nOlxuICAgICAgICBjYXNlICd0ZXh0Y29sdW1uJzpcbiAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3Jvd251bWJlcmVyJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbmRlcmVyY2VsbCc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5zZXRDZWxsKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgY2FzZSAnbG9ja2VkZ3JpZCc6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyZWVjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRlY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdyb3dudW1iZXJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdib29sZWFuY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ0NvbHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5yZWdpc3RlcmVkQ29sdW1ucyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdDb2xzID0gcGFyZW50Q21wLnJlZ2lzdGVyZWRDb2x1bW5zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydENvbHVtbihsb2NhdGlvbiArIHJlZ0NvbHMsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQobG9jYXRpb24gKyByZWdDb2xzLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICA7XG4gICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Rvb2xiYXInOlxuICAgICAgICBjYXNlICd0aXRsZWJhcic6XG4gICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChsb2NhdGlvbiwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9vbHRpcCc6XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGx1Z2luJzpcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWZhdWx0Y2hpbGQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChkZWZhdWx0cGFyZW50ID09IHRydWUgJiYgZGVmYXVsdGNoaWxkID09IHRydWUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnR4dHlwZSArICcuYWRkKCcgKyBjaGlsZHh0eXBlICsgJyknKVxuICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID4gMCkge1xuICAgIC8vICAgICB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZC0tXG4gICAgLy8gfVxuICAgIC8vIC8vY29uc29sZS5sb2coJ2NoaWxkcmVuWWV0VG9CZURlZmluZWQoYWZ0ZXIpICcgICsgdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQpXG4gICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID09IDApIHtcbiAgICAvLyAgICAgdGhpcy5wYXJlbnROb2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZWFkeScse2RldGFpbDp7Y21wOiB0aGlzLnBhcmVudE5vZGUuZXh0fX0pKVxuICAgIC8vIH1cbn1cbmF0RW5kKCkge1xuICAgIGNvbnNvbGUubG9nKCcqKiogYXQgZW5kJyk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgLSAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICBjb25zb2xlLmRpcih0aGlzLmN1cnJlbnRFbC5BKTtcbiAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQgLSAnICsgdGhpcy5wYXJlbnRFbE5hbWUpO1xuICAgICAgICBjb25zb2xlLmRpcih0aGlzLnBhcmVudEVsLkEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIEVYVCBwYXJlbnQnKTtcbiAgICB9XG59XG5nZXQgY3VycmVudEVsKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmdldEN1cnJlbnRFbE5hbWUoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubm9kZS5ub2RlTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubm9kZU5hbWU7XG4gICAgfVxufVxuZ2V0IGN1cnJlbnRFbE5hbWUoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZU5hbWU7XG4gICAgfVxufVxuZ2V0IGlzQW5ndWxhcigpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmdldCBwYXJlbnRFbCgpIHtcbiAgICBpZiAodGhpcy5pc0FuZ3VsYXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICAgIH1cbn1cbmdldCBwYXJlbnRFbE5hbWUoKSB7XG4gICAgaWYgKHRoaXMuaXNBbmd1bGFyKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlTmFtZTtcbiAgICB9XG59XG5zZW5kUmVhZHlFdmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgY21wID0gY29tcG9uZW50LmN1cnJlbnRFbC5BLmV4dDtcbiAgICBpZiAoY29tcG9uZW50Ll9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50WydyZWFkeSddLmVtaXQoeyBkZXRhaWw6IHsgY21wOiBjbXAgfSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVhZHknLCB7IGRldGFpbDogeyBjbXA6IGNtcCB9IH0pKTtcbiAgICB9XG59XG4vLyoqKioqKiogYmFzZSBlbmQgKi9cbmNyZWF0ZVByb3BzKHByb3BlcnRpZXMsIHByb3BlcnRpZXNvYmplY3QsIGV2ZW50cywgZXZlbnRuYW1lcykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuY3VycmVudEVsLkEucHJvcHM7XG4gICAgcHJvcHMueHR5cGUgPSB0aGlzLnh0eXBlO1xuICAgIGxldCBsaXN0ZW5lcnNQcm92aWRlZCA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgIGlmIChwcm9wID09ICdoYW5kbGVyJykge1xuICAgICAgICAgICAgaWYgKHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICAgIGlmICgocHJvcHMueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IHByb3BzLnh0eXBlID09PSAncG9sYXInKSAmJiBwcm9wID09PSAnbGF5b3V0Jykge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT0gJ2xpc3RlbmVycycgJiYgdGhpc1twcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIGxpc3RlbmVyc1Byb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnaGFuZGxlcicgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRydWUgPT09IHRoaXNbJ2ZpdFRvUGFyZW50J10pIHtcbiAgICAgICAgcHJvcHMudG9wID0gMCxcbiAgICAgICAgICAgIHByb3BzLmxlZnQgPSAwLFxuICAgICAgICAgICAgcHJvcHMud2lkdGggPSAnMTAwJScsXG4gICAgICAgICAgICBwcm9wcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgfVxuICAgIGlmICh0aGlzWydjb25maWcnXSAhPT0ge30pIHtcbiAgICAgICAgRXh0LmFwcGx5KHByb3BzLCB0aGlzWydjb25maWcnXSk7XG4gICAgfVxuICAgIGlmICghbGlzdGVuZXJzUHJvdmlkZWQpIHtcbiAgICAgICAgcHJvcHMubGlzdGVuZXJzID0ge307XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgbGV0IGV2ZW50bmFtZSA9IGV2ZW50Lm5hbWU7XG4gICAgICAgICAgICBsZXQgZXZlbnRwYXJhbWV0ZXJzID0gZXZlbnQucGFyYW1ldGVycztcbiAgICAgICAgICAgIG1lLmN1cnJlbnRFbC5BLnByb3BzLmxpc3RlbmVyc1tldmVudG5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2luIHRoZSBldmVudCAnICsgZXZlbnRuYW1lKVxuICAgICAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gZXZlbnRwYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgbGV0IGVtaXRwYXJtcyA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChtZS5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0cGFybXNbcGFybXNbaV1dID0gYXJnc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZW1pdHBhcm1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vZHVwPz9cbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgbikgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRdID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG5cbiAgICBiYXNlT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoYW5nZXMpXG4gICAgICAgIGxldCBjaGFuZ2VzTXNncyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBsZXQgdmVyYiA9ICcnO1xuICAgICAgICAgICAgaWYgKGNoYW5nZXNbcHJvcE5hbWVdLmZpcnN0Q2hhbmdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmVyYiA9ICdpbml0aWFsaXplZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ZXJiID0gJ2NoYW5nZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsLkEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmRpcih0aGlzLmN1cnJlbnRFbC5BLmV4dClcbiAgICAgICAgICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHZhciBzZXRGdW5jdGlvbiA9ICdzZXQnICsgY2FwUHJvcE5hbWU7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzZXRGdW5jdGlvbilcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RWwuQS5leHRbc2V0RnVuY3Rpb25dICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5BLmV4dFtzZXRGdW5jdGlvbl0odmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc2V0RnVuY3Rpb24gKyAnIG5vdCBmb3VuZCBmb3IgJyArIHRoaXMuY3VycmVudEVsLkEuZXh0Lnh0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmVyYiA9PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhbmdlc01zZ3MucHVzaChgJCAkIHRvIFwiJFwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhgT25DaGFuZ2VzOiAke2NoYW5nZXNNc2dzLmpvaW4oJzsgJyl9YClcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdmFyIGNoaWxkQ21wO1xuICAgICAgICB2YXIgcGFyZW50Q21wO1xuICAgICAgICBjb25zb2xlLmRpcih0aGlzKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGRDbXAgPSB0aGlzLmN1cnJlbnRFbC5BLmV4dDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAgPSB0aGlzLnBhcmVudEVsLkEuZXh0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDbXAgPT0gdW5kZWZpbmVkIHx8IHBhcmVudENtcCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vbWVudSBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdjYXJvdXNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Nhcm91c2VsIHBhcmVudCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdncmlkJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnY29sdW1uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ3JpZC9jb2x1bW4gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3NlZ21lbnRlZGJ1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NlZ21lbnRlZGJ1dHRvbi9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi90b29sdGlwIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3RpdGxlYmFyJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGl0bGViYXIvYnV0dG9uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3RpdGxlYmFyJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnc2VhcmNoZmllbGQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9zZWFyY2hmaWVsZCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAucmVtb3ZlKFtjaGlsZENtcF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDbXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkZXN0cm95JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==