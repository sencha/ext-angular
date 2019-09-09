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
        console.log(this.base.DIRECTION);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2VuZy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFBO0FBRXRCO0lBbUNJLGlCQUNJLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQXVCO1FBSGxDLGlCQTZCQztRQTNCVyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQVU7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLDRDQUE0QztRQUM1Qyw2QkFBNkI7UUFFN0IsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFFcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVLEVBQUUsQ0FBTTtZQUN4QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ2pCLEtBQUks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U0FBUztxREFBVTtJQXlwQm5FLGNBQUM7Q0FBQSxBQXZyQkQsSUF1ckJDO1NBdnJCWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiLy9Nb24gU2VwIDA5IDIwMTkgMDg6MDI6MjYgR01ULTA0MDAgKEVhc3Rlcm4gRGF5bGlnaHQgVGltZSlcbmRlY2xhcmUgdmFyIEV4dDogYW55XG5cbmltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGNsYXNzIEVuZ0Jhc2Uge1xuICAgIHN0YXRpYyBjb3VudDogYW55ID0gMDtcbiAgICBzdGF0aWMgRElSRUNUSU9OOiBhbnkgPSAnJztcblxuICAgIHB1YmxpYyBleHQ6IGFueVxuICAgIG5ld0RpdjogYW55XG5cbiAgICB4dHlwZTogYW55XG4gICAgcHJvcGVydGllczogYW55XG4gICAgcHJvcGVydGllc29iamVjdDogYW55XG4gICAgZXZlbnRzOiBhbnlcbiAgICBldmVudG5hbWVzOiBhbnlcblxuXG4gICAgQTogYW55O1xuICAgIHByaXZhdGUgbm9kZTogYW55XG4gICAgcGFyZW50Tm9kZTogYW55XG4gICAgYmFzZTogYW55XG4gICAgbm9kZU5hbWU6IGFueVxuXG4gICAgZXdjQ2hpbGRyZW46IGFueVxuICAgIHJhd0NoaWxkcmVuOiBhbnlcbiAgICBoYXNQYXJlbnQ6IGFueVxuICAgIGNoaWxkcmVuOiBhbnlcbiAgICBsYXN0OiBhbnlcblxuICAgIEBDb250ZW50Q2hpbGQoJ2V4dHJvdXRlJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRyb3V0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dHJvdXRlJykgX2V4dHJvdXRlczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZCgnZXh0aXRlbScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0aXRlbTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dGl0ZW0nKSBfZXh0aXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRW5nQmFzZSkgX2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIGdldCBjaGlsZENvbXBvbmVudHMoKTogRW5nQmFzZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ29tcG9uZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQ6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBtZXRhRGF0YTogYW55LFxuICAgICAgICBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IGhvc3RDb21wb25lbnQ7XG5cbiAgICAgICAgdGhpcy5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy92YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwibmV3RGl2XCIpO1xuICAgICAgICAvL3RoaXMubmV3RGl2LmFwcGVuZENoaWxkKHQpO1xuXG4gICAgICAgIHRoaXMubm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGhpcy5uZXdEaXYpO1xuICAgICAgICB0aGlzLnh0eXBlID0gbWV0YURhdGEuWFRZUEU7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG1ldGFEYXRhLlBST1BFUlRJRVM7XG4gICAgICAgIHRoaXMucHJvcGVydGllc29iamVjdCA9ICdwcm9wZXJ0aWVzb2JqZWN0JztcbiAgICAgICAgdGhpcy5ldmVudHMgPSBtZXRhRGF0YS5FVkVOVFM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcyA9IG1ldGFEYXRhLkVWRU5UTkFNRVM7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcblxuICAgICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGJhc2VPbkluaXQobWV0YURhdGEpIHsgfVxuICAgIGJhc2VBZnRlclZpZXdJbml0KG1ldGFEYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdE1lKClcbiAgICB9XG5cbi8vKioqKioqKiBiYXNlIHN0YXJ0ICovXG5pbml0TWUoKSB7XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCcqKiogaW5pdE1lIGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICB0aGlzLmNyZWF0ZVJhd0NoaWxkcmVuKCk7XG4gICAgdGhpcy5zZXRIYXNQYXJlbnQoKTtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMuZmlndXJlT3V0QSgpO1xuICAgIHRoaXMuY3JlYXRlUHJvcHModGhpcy5wcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXNvYmplY3QsIHRoaXMuZXZlbnRzLCB0aGlzLmV2ZW50bmFtZXMpO1xuICAgIHRoaXMuY3JlYXRlRXh0Q29tcG9uZW50KCk7XG4gICAgLy90aGlzLmFzc2Vzc0NoaWxkcmVuKHRoaXMuYmFzZSwgdGhpcy54dHlwZSk7XG4gICAgLy90aGlzLmF0RW5kKCk7XG4gICAgLy9pZiAodGhpcy5sYXN0ID09IHRydWUpe1xuICAgIC8vICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSBlbmQuLi4nKVxuICAgIC8vfVxufVxuO1xuY3JlYXRlUmF3Q2hpbGRyZW4oKSB7XG4gICAgLy9jb25zb2xlLmxvZygnY3JlYXRlUmF3Q2hpbGRyZW4nKVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5pc0FuZ3VsYXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSB0aGlzLmN1cnJlbnRFbC5jaGlsZENvbXBvbmVudHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuY3VycmVudEVsLmNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdmFyIG51bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXS5YVFlQRSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW5bbnVtXSA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0uY3VycmVudENvbXBvbmVudCA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0ubm9kZSA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIG51bSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coJ3Jhd0NoaWxkcmVuJylcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuKVxufVxuc2V0SGFzUGFyZW50KCkge1xuICAgIHZhciBoYXNQYXJlbnQ7XG4gICAgaWYgKHRoaXMucGFyZW50RWwgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhhc1BhcmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9yZXR1cm4gaGFzUGFyZW50XG59XG5zZXREaXJlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYmFzZS5jb3VudCA9PSAwKSB7XG4gICAgICAgIHRoaXMuYmFzZS5jb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5oYXNQYXJlbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ0JvdHRvbVRvVG9wJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFzZS5ESVJFQ1RJT04pO1xufVxuZmlndXJlT3V0QSgpIHtcbiAgICAvL2lmICh0aGlzLmhhc1BhcmVudCAmJiB0aGlzLnBhcmVudEVsLkEgPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuaGFzUGFyZW50ICYmXG4gICAgICAgIHRoaXMucGFyZW50RWwuQSA9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5ub2RlTmFtZS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nXG4gICAgICAgICkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5wYXJlbnRFbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5jdXJyZW50RWwpO1xuICAgIH1cbn1cbmluaXQoY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50LkEgPSB7fTtcbiAgICBjb21wb25lbnQuQS5wcm9wcyA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnh0eXBlID0gY29tcG9uZW50Lnh0eXBlO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IFtdO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID0gMDtcbiAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA9IDA7XG4gICAgaWYgKHRoaXMuYmFzZS5ESVJFQ1RJT04gPT0gJ1RvcFRvQm90dG9tJykge1xuICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFMgPSB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0Q3VycmVudEVsTmFtZShjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNbaV0pLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPSBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVDtcbiAgICB9XG59XG5jcmVhdGVFeHRDb21wb25lbnQoKSB7XG4gICAgdmFyIEEgPSB0aGlzLmN1cnJlbnRFbC5BO1xuICAgIHZhciBtZUEgPSBBO1xuICAgIHZhciBtZXRoaXMgPSB0aGlzO1xuICAgIGlmIChBLnByb3BzWyd2aWV3cG9ydCddID09IHRydWUpIHtcbiAgICAgICAgdGhpcy5uZXdEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1ldGhpcy5jdXJyZW50RWwuQS5leHQgPSBFeHQuY3JlYXRlKG1lQS5wcm9wcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMC1FeHQuYXBwbGljYXRpb246ICcgKyBtZUEucHJvcHMueHR5cGUpO1xuICAgICAgICAgICAgbWV0aGlzLmFzc2Vzc0NoaWxkcmVuKG1ldGhpcy5iYXNlLCBtZXRoaXMueHR5cGUpO1xuICAgICAgICAgICAgRXh0LmFwcGxpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTXlFV0NBcHAnLFxuICAgICAgICAgICAgICAgIGxhdW5jaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBFeHQuVmlld3BvcnQuYWRkKFttZXRoaXMuY3VycmVudEVsLkEuZXh0XSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbJ3JvdXRlciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ3JvdXRlciddLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXRoaXMuYmFzZS5ESVJFQ1RJT04gKyAnIGluIGxhdW5jaCAnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhpcy5iYXNlLkRJUkVDVElPTiA9PSAnQm90dG9tVG9Ub3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGxhc3QgdGhpbmcgdG8gZG8uLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhpcy5sYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwgfHwgdGhpcy5wYXJlbnRFbE5hbWUuc3Vic3RyaW5nKDAsIDQpICE9ICdFWFQtJykge1xuICAgICAgICBBLnByb3BzLnJlbmRlclRvID0gdGhpcy5uZXdEaXY7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxLSBFeHQuY3JlYXRlOiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUgKyAnIEhUTUwgcGFyZW50OiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgY29uc29sZS5kaXIobWVBLnByb3BzKVxuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIG1ldGhpcy5uZXdEaXYucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWV0aGlzLmN1cnJlbnRFbC5BLmV4dC5lbC5kb20sIG1ldGhpcy5uZXdEaXYpO1xuICAgICAgICAgICAgbWV0aGlzLmFzc2Vzc0NoaWxkcmVuKG1ldGhpcy5iYXNlLCBtZXRoaXMueHR5cGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGFzc2Vzc0NoaWxkcmVuJyk7XG4gICAgICAgICAgICAvL3ZhciB3YyA9IG1lQS5leHQuZWwuZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgLy93Yy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHdjKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBFeHQub25SZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMy0gRXh0LmNyZWF0ZTogJyArIG1ldGhpcy5jdXJyZW50RWxOYW1lICsgJyAgRXh0IHBhcmVudDogJyArIG1ldGhpcy5wYXJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIG1ldGhpcy5hc3Nlc3NDaGlsZHJlbihtZXRoaXMuYmFzZSwgbWV0aGlzLnh0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuYXNzZXNzQ2hpbGRyZW4oYmFzZSwgeHR5cGUpIHtcbiAgICBjb25zb2xlLmxvZygnYXNzZXNzQ2hpbGRyZW4gZm9yOiAnICsgeHR5cGUpO1xuICAgIHZhciBBID0gdGhpcy5jdXJyZW50RWwuQTtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRpdGVtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCBodG1sJyk7XG4gICAgICAgICAgICBBLmV4dC5zZXRIdG1sKHRoaXMuX2V4dGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodGhpcy5fZXh0cm91dGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IHJvdXRlcicpO1xuICAgICAgICAgICAgQS5leHQuc2V0SHRtbCh0aGlzLl9leHRyb3V0ZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIC8vY2hpbGRJdGVtLmNoaWxkQ21wID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGV3YzppdGVtLmdldEF0dHJpYnV0ZSgnZXdjJyksIGVsZW1lbnQ6RXh0LmdldChpdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbSkpfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCA9PSAwICYmXG4gICAgICAgIEEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9PSAwICYmXG4gICAgICAgIEEuQ0hJTERSRU5DT01QT05FTlRTQURERUQgPT0gMCAmJlxuICAgICAgICAhdGhpcy5oYXNQYXJlbnQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbG8nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZENoaWxkcmVuJyk7XG4gICAgICAgIGNvbnNvbGUuZGlyKEEuQ0hJTERSRU5DT01QT05FTlRTKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ub2RlLkEpO1xuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMsIEEuQ0hJTERSRU5DT01QT05FTlRTKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc2VuZCByZWFkeSBmb3IgQ0hJTERSRU5DT01QT05FTlRTQURERUQgPiAwJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFkeSBldmVudCBmb3IgJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG4gICAgLy8gZWxzZSBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwgJiYgdGhpcy5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID09IDApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlbmQgcmVhZHkgZm9yICcgKyB0aGlzLkEueHR5cGUpO1xuICAgIC8vICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgIC8vIH1cbiAgICAvL2lmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcblxuICAgIC8vIGlmICh0aGlzLmhhc1BhcmVudCAmJlxuICAgIC8vICAgICB0aGlzLnBhcmVudEVsLm5vZGVOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULSdcbiAgICAvLyAgICAgKSB7XG5cbiAgICBpZiAodGhpcy5oYXNQYXJlbnQpIHtcblxuICAgICAgICBpZiAoYmFzZS5ESVJFQ1RJT04gPT0gJ1RvcFRvQm90dG9tJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RvcFRvQm90dG9tJyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTLnB1c2godGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTQURERUQrKztcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZULS07XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wYXJlbnRFbClcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMucGFyZW50RWwsIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWFkeSBldmVudCBmb3IgJyArIHRoaXMucGFyZW50RWxOYW1lICsgJyhwYXJlbnQpJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzLnBhcmVudEVsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFMucHVzaCh0aGlzLmN1cnJlbnRFbCk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTQURERUQrKztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdyZWFkeSBldmVudCBmb3IgJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuYWRkQ2hpbGRyZW4oY2hpbGQsIGNoaWxkcmVuKSB7XG4gICAgLy9jb25zb2xlLmxvZygnYWRkQ2hpbGRyZW4gZm9yICcgKyBjaGlsZC54dHlwZSArICcgLSBudW0gY2hpbGRyZW46ICcgKyBjaGlsZHJlbi5sZW5ndGgpO1xuICAgIC8vZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgLy8gICAgdmFyIGNoaWxkSXRlbSA9IHsgcGFyZW50Q21wOiB7fSwgY2hpbGRDbXA6IHt9IH07XG4gICAgLy8gICAgY2hpbGRJdGVtLnBhcmVudENtcCA9IGNoaWxkLmN1cnJlbnRFbC5BLmV4dDtcbiAgICAvLyAgICBjaGlsZEl0ZW0uY2hpbGRDbXAgPSBjaGlsZHJlbltpXS5BLmV4dDtcbiAgICAvLyAgICB0aGlzLmFkZFRoZUNoaWxkKGNoaWxkSXRlbS5wYXJlbnRDbXAsIGNoaWxkSXRlbS5jaGlsZENtcCwgbnVsbCk7XG4gICAgLy99XG4gICAgY29uc29sZS5kaXIoY2hpbGRyZW4pXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGRJdGVtID0geyBwYXJlbnRDbXA6IHt9LCBjaGlsZENtcDoge30gfTtcbiAgICAgICAgY2hpbGRJdGVtLnBhcmVudENtcCA9IHRoaXMuY3VycmVudEVsLkEuZXh0O1xuXG4gICAgICAgIHZhciBBMlxuICAgICAgICBpZiAoY2hpbGRyZW5baV0uX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgQTIgPSBjaGlsZHJlbltpXS5ub2RlLkE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBMiA9IGNoaWxkcmVuW2ldLkE7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRJdGVtLmNoaWxkQ21wID0gQTIuZXh0O1xuICAgICAgICAvL2NoaWxkSXRlbS5jaGlsZENtcCA9IGNoaWxkcmVuW2ldLmN1cnJlbnRFbC5BLmV4dDtcblxuICAgICAgICB0aGlzLmFkZFRoZUNoaWxkKGNoaWxkSXRlbS5wYXJlbnRDbXAsIGNoaWxkSXRlbS5jaGlsZENtcCwgbnVsbCk7XG4gICAgfVxufVxuYWRkVGhlQ2hpbGQocGFyZW50Q21wLCBjaGlsZENtcCwgbG9jYXRpb24pIHtcbiAgICB2YXIgcGFyZW50eHR5cGUgPSBwYXJlbnRDbXAueHR5cGU7XG4gICAgdmFyIGNoaWxkeHR5cGUgPSBjaGlsZENtcC54dHlwZTtcbiAgICAvL2NvbnNvbGUubG9nKCdhZGRUaGVDaGlsZDogJyArIHBhcmVudHh0eXBlICsgJygnICsgcGFyZW50Q21wLmV4dCArICcpJyArICcgLSAnICsgY2hpbGR4dHlwZSArICcoJyArIGNoaWxkQ21wLmV4dCArICcpJyk7XG4gICAgLy9pZiAoY2hpbGR4dHlwZSA9PSAnd2lkZ2V0JylcbiAgICBpZiAodGhpcy5jdXJyZW50RWwuQS5leHQuaW5pdGlhbENvbmZpZy5hbGlnbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHBhcmVudHh0eXBlICE9ICd0aXRsZWJhcicgJiYgcGFyZW50eHR5cGUgIT0gJ2dyaWQnICYmIHBhcmVudHh0eXBlICE9ICdsb2NrZWRncmlkJyAmJiBwYXJlbnR4dHlwZSAhPSAnYnV0dG9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FuIG9ubHkgdXNlIGFsaWduIHByb3BlcnR5IGlmIHBhcmVudCBpcyBhIFRpdGxlYmFyIG9yIEdyaWQgb3IgQnV0dG9uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGRlZmF1bHRwYXJlbnQgPSBmYWxzZTtcbiAgICB2YXIgZGVmYXVsdGNoaWxkID0gZmFsc2U7XG4gICAgc3dpdGNoIChwYXJlbnR4dHlwZSkge1xuICAgICAgICBjYXNlICdidXR0b24nOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW5jb2x1bW4nOlxuICAgICAgICBjYXNlICdjaGVja2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICBjYXNlICd0ZW1wbGF0ZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICBjYXNlICd0ZW1wbGF0ZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2RhdGVjb2x1bW4nOlxuICAgICAgICBjYXNlICdkcmFnY29sdW1uJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyY29sdW1uJzpcbiAgICAgICAgY2FzZSAnc2VsZWN0aW9uY29sdW1uJzpcbiAgICAgICAgY2FzZSAndGV4dGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RyZWVjb2x1bW4nOlxuICAgICAgICBjYXNlICdyb3dudW1iZXJlcic6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZW5kZXJlcmNlbGwnOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0Q2VsbChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ3JpZCc6XG4gICAgICAgIGNhc2UgJ2xvY2tlZGdyaWQnOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0cmVlY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0Y29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2NvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF0ZWNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAncm93bnVtYmVyZXInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcmNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbmNvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdDb2xzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAucmVnaXN0ZXJlZENvbHVtbnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnQ29scyA9IHBhcmVudENtcC5yZWdpc3RlcmVkQ29sdW1ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnRDb2x1bW4obG9jYXRpb24gKyByZWdDb2xzLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGxvY2F0aW9uICsgcmVnQ29scywgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgO1xuICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICBjYXNlICd0b29sYmFyJzpcbiAgICAgICAgY2FzZSAndGl0bGViYXInOlxuICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQobG9jYXRpb24sIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Rvb2x0aXAnOlxuICAgICAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BsdWdpbic6XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZGVmYXVsdGNoaWxkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdHBhcmVudCA9PSB0cnVlICYmIGRlZmF1bHRjaGlsZCA9PSB0cnVlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyZW50eHR5cGUgKyAnLmFkZCgnICsgY2hpbGR4dHlwZSArICcpJylcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgfVxuICAgIC8vIGlmICh0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZCA+IDApIHtcbiAgICAvLyAgICAgdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQtLVxuICAgIC8vIH1cbiAgICAvLyAvL2NvbnNvbGUubG9nKCdjaGlsZHJlbllldFRvQmVEZWZpbmVkKGFmdGVyKSAnICArIHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkKVxuICAgIC8vIGlmICh0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZCA9PSAwKSB7XG4gICAgLy8gICAgIHRoaXMucGFyZW50Tm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVhZHknLHtkZXRhaWw6e2NtcDogdGhpcy5wYXJlbnROb2RlLmV4dH19KSlcbiAgICAvLyB9XG59XG5hdEVuZCgpIHtcbiAgICBjb25zb2xlLmxvZygnKioqIGF0IGVuZCcpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIC0gJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgY29uc29sZS5kaXIodGhpcy5jdXJyZW50RWwuQSk7XG4gICAgaWYgKHRoaXMucGFyZW50RWwgIT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGFyZW50IC0gJyArIHRoaXMucGFyZW50RWxOYW1lKTtcbiAgICAgICAgY29uc29sZS5kaXIodGhpcy5wYXJlbnRFbC5BKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBFWFQgcGFyZW50Jyk7XG4gICAgfVxufVxuZ2V0IGN1cnJlbnRFbCgpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5nZXRDdXJyZW50RWxOYW1lKGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm5vZGVOYW1lO1xuICAgIH1cbn1cbmdldCBjdXJyZW50RWxOYW1lKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5ub2RlTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVOYW1lO1xuICAgIH1cbn1cbmdldCBpc0FuZ3VsYXIoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5nZXQgcGFyZW50RWwoKSB7XG4gICAgaWYgKHRoaXMuaXNBbmd1bGFyKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgICB9XG59XG5nZXQgcGFyZW50RWxOYW1lKCkge1xuICAgIGlmICh0aGlzLmlzQW5ndWxhcikge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubm9kZS5ub2RlTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubm9kZU5hbWU7XG4gICAgfVxufVxuc2VuZFJlYWR5RXZlbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIGNtcCA9IGNvbXBvbmVudC5jdXJyZW50RWwuQS5leHQ7XG4gICAgaWYgKGNvbXBvbmVudC5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudFsncmVhZHknXS5lbWl0KHsgZGV0YWlsOiB7IGNtcDogY21wIH0gfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JlYWR5JywgeyBkZXRhaWw6IHsgY21wOiBjbXAgfSB9KSk7XG4gICAgfVxufVxuLy8qKioqKioqIGJhc2UgZW5kICovXG5jcmVhdGVQcm9wcyhwcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzb2JqZWN0LCBldmVudHMsIGV2ZW50bmFtZXMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLmN1cnJlbnRFbC5BLnByb3BzO1xuICAgIHByb3BzLnh0eXBlID0gdGhpcy54dHlwZTtcbiAgICBsZXQgbGlzdGVuZXJzUHJvdmlkZWQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3AgPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICBpZiAocHJvcCA9PSAnaGFuZGxlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL25lZWQgdG8gaGFuZGxlIGxpc3RlbmVycyBjb21pbmcgaW4gaGVyZVxuICAgICAgICBpZiAoKHByb3BzLnh0eXBlID09PSAnY2FydGVzaWFuJyB8fCBwcm9wcy54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09ICdsaXN0ZW5lcnMnICYmIHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICBsaXN0ZW5lcnNQcm92aWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpc1twcm9wXSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdsaXN0ZW5lcnMnICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnY29uZmlnJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2hhbmRsZXInICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnZml0VG9QYXJlbnQnKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0cnVlID09PSB0aGlzWydmaXRUb1BhcmVudCddKSB7XG4gICAgICAgIHByb3BzLnRvcCA9IDAsXG4gICAgICAgICAgICBwcm9wcy5sZWZ0ID0gMCxcbiAgICAgICAgICAgIHByb3BzLndpZHRoID0gJzEwMCUnLFxuICAgICAgICAgICAgcHJvcHMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbiAgICBpZiAodGhpc1snY29uZmlnJ10gIT09IHt9KSB7XG4gICAgICAgIEV4dC5hcHBseShwcm9wcywgdGhpc1snY29uZmlnJ10pO1xuICAgIH1cbiAgICBpZiAoIWxpc3RlbmVyc1Byb3ZpZGVkKSB7XG4gICAgICAgIHByb3BzLmxpc3RlbmVycyA9IHt9O1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBldmVudG5hbWUgPSBldmVudC5uYW1lO1xuICAgICAgICAgICAgbGV0IGV2ZW50cGFyYW1ldGVycyA9IGV2ZW50LnBhcmFtZXRlcnM7XG4gICAgICAgICAgICBtZS5jdXJyZW50RWwuQS5wcm9wcy5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpbiB0aGUgZXZlbnQgJyArIGV2ZW50bmFtZSlcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IGV2ZW50cGFyYW1ldGVycztcbiAgICAgICAgICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGxldCBlbWl0cGFybXMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAobWUuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBhcm1zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL2R1cD8/XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQsIG4pID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCAhPSAnZnVsbHNjcmVlbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnQgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuXG4gICAgYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKVxuICAgICAgICBsZXQgY2hhbmdlc01zZ3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgbGV0IHZlcmIgPSAnJztcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIodGhpcy5jdXJyZW50RWwuQS5leHQpXG4gICAgICAgICAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB2YXIgc2V0RnVuY3Rpb24gPSAnc2V0JyArIGNhcFByb3BOYW1lO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coc2V0RnVuY3Rpb24pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsLkEuZXh0W3NldEZ1bmN0aW9uXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwuQS5leHRbc2V0RnVuY3Rpb25dKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHNldEZ1bmN0aW9uICsgJyBub3QgZm91bmQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbC5BLmV4dC54dHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCdjaGFuZ2UgbmVlZGVkIGFuZCBleHQgbm90IGRlZmluZWQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCQgJCB0byBcIiRcImApO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBjaGlsZENtcDtcbiAgICAgICAgdmFyIHBhcmVudENtcDtcbiAgICAgICAgY29uc29sZS5kaXIodGhpcylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkQ21wID0gdGhpcy5jdXJyZW50RWwuQS5leHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wID0gdGhpcy5wYXJlbnRFbC5BLmV4dDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ21wID09IHVuZGVmaW5lZCB8fCBwYXJlbnRDbXAgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL21lbnUgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnY2Fyb3VzZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjYXJvdXNlbCBwYXJlbnQgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnZ3JpZCcgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dyaWQvY29sdW1uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdzZWdtZW50ZWRidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzZWdtZW50ZWRidXR0b24vYnV0dG9uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vdG9vbHRpcCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3NlYXJjaGZpZWxkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGl0bGViYXIvc2VhcmNoZmllbGQgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnJlbW92ZShbY2hpbGRDbXBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ21wICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGVzdHJveScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=