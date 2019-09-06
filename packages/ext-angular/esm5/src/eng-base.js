import * as tslib_1 from "tslib";
//import 'script-loader!../ext/ext..prod';
//import 'script-loader!../ext/css.prod';
//import 'script-loader!@sencha/ext-angular/ext/ext.blank.prod';
//import 'script-loader!@sencha/ext-angular/ext/css.prod';
//import Common from './Common'
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
        console.log('createRawChildren');
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
        console.log('rawChildren');
        console.log(this.currentEl.rawChildren);
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
        if (this.hasParent && this.parentEl.A == undefined) {
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
            this.parentEl == null) {
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
        if (this.parentEl != null) {
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
            childItem.childCmp = children[i].currentEl.A.ext;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2VuZy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwQ0FBMEM7QUFDMUMseUNBQXlDO0FBQ3pDLGdFQUFnRTtBQUNoRSwwREFBMEQ7QUFDMUQsK0JBQStCO0FBRS9CLE9BQU8sRUFDSCxZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBRVosTUFBTSxlQUFlLENBQUE7QUFFdEI7SUFtQ0ksaUJBQ0ksYUFBa0IsRUFDVixRQUFhLEVBQ2QsYUFBdUI7UUFIbEMsaUJBNkJDO1FBM0JXLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBVTtRQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsNENBQTRDO1FBQzVDLDZCQUE2QjtRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FB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aURBQWlEO3FCQUNwRDt5QkFDSTt3QkFDRCxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQzt3QkFDN0IsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO3FCQUN0QjthQUNSO2lCQUNJO2dCQUNELElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDdkIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN0QjtxQkFDSTtvQkFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFBO2lCQUM1QjthQUNKO1NBQ0o7UUFDRCxPQUFPLENBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsMEJBQTBCO1lBQzFCLDRCQUE0QjtZQUM1QiwyQkFBMkI7WUFDM0IsMEJBQTBCO1NBQzdCO0lBQ0wsQ0FBQztJQS9wQk0sYUFBSyxHQUFRLENBQUMsQ0FBQztJQUNmLGlCQUFTLEdBQVEsRUFBRSxDQUFDO0lBd0JrQjtRQUE1QyxZQUFZLENBQUMsVUFBVSxFQUFDLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxDQUFDOzs4Q0FBZ0I7SUFDL0I7UUFBNUIsZUFBZSxDQUFDLFVBQVUsQ0FBQzswQ0FBYSxTQUFTOytDQUFNO0lBQ1o7UUFBM0MsWUFBWSxDQUFDLFNBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsQ0FBQzs7NkNBQWU7SUFDOUI7UUFBM0IsZUFBZSxDQUFDLFNBQVMsQ0FBQzswQ0FBWSxTQUFTOzhDQUFNO0lBQzVCO1FBQXpCLGVBQWUsQ0FBQyxPQUFPLENBQUM7MENBQW1CLFNBQVM7cURBQVU7SUFtb0JuRSxjQUFDO0NBQUEsQUFqcUJELElBaXFCQztTQWpxQlksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55XG4vL2ltcG9ydCAnc2NyaXB0LWxvYWRlciEuLi9leHQvZXh0Li5wcm9kJztcbi8vaW1wb3J0ICdzY3JpcHQtbG9hZGVyIS4uL2V4dC9jc3MucHJvZCc7XG4vL2ltcG9ydCAnc2NyaXB0LWxvYWRlciFAc2VuY2hhL2V4dC1hbmd1bGFyL2V4dC9leHQuYmxhbmsucHJvZCc7XG4vL2ltcG9ydCAnc2NyaXB0LWxvYWRlciFAc2VuY2hhL2V4dC1hbmd1bGFyL2V4dC9jc3MucHJvZCc7XG4vL2ltcG9ydCBDb21tb24gZnJvbSAnLi9Db21tb24nXG5cbmltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGNsYXNzIEVuZ0Jhc2Uge1xuICAgIHN0YXRpYyBjb3VudDogYW55ID0gMDtcbiAgICBzdGF0aWMgRElSRUNUSU9OOiBhbnkgPSAnJztcblxuICAgIHB1YmxpYyBleHQ6IGFueVxuICAgIG5ld0RpdjogYW55XG5cbiAgICB4dHlwZTogYW55XG4gICAgcHJvcGVydGllczogYW55XG4gICAgcHJvcGVydGllc29iamVjdDogYW55XG4gICAgZXZlbnRzOiBhbnlcbiAgICBldmVudG5hbWVzOiBhbnlcblxuXG4gICAgQTogYW55O1xuICAgIHByaXZhdGUgbm9kZTogYW55XG4gICAgcGFyZW50Tm9kZTogYW55XG4gICAgYmFzZTogYW55XG4gICAgbm9kZU5hbWU6IGFueVxuXG4gICAgZXdjQ2hpbGRyZW46IGFueVxuICAgIHJhd0NoaWxkcmVuOiBhbnlcbiAgICBoYXNQYXJlbnQ6IGFueVxuICAgIGNoaWxkcmVuOiBhbnlcbiAgICBsYXN0OiBhbnlcblxuICAgIEBDb250ZW50Q2hpbGQoJ2V4dHJvdXRlJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRyb3V0ZTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dHJvdXRlJykgX2V4dHJvdXRlczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZCgnZXh0aXRlbScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0aXRlbTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dGl0ZW0nKSBfZXh0aXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRW5nQmFzZSkgX2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIGdldCBjaGlsZENvbXBvbmVudHMoKTogRW5nQmFzZVtdIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ29tcG9uZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIG5hdGl2ZUVsZW1lbnQ6IGFueSxcbiAgICAgICAgcHJpdmF0ZSBtZXRhRGF0YTogYW55LFxuICAgICAgICBwdWJsaWMgaG9zdENvbXBvbmVudCA6IEVuZ0Jhc2UsXG4gICAgKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IGhvc3RDb21wb25lbnQ7XG5cbiAgICAgICAgdGhpcy5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy92YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwibmV3RGl2XCIpO1xuICAgICAgICAvL3RoaXMubmV3RGl2LmFwcGVuZENoaWxkKHQpO1xuXG4gICAgICAgIHRoaXMubm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGhpcy5uZXdEaXYpO1xuICAgICAgICB0aGlzLnh0eXBlID0gbWV0YURhdGEuWFRZUEU7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG1ldGFEYXRhLlBST1BFUlRJRVM7XG4gICAgICAgIHRoaXMucHJvcGVydGllc29iamVjdCA9ICdwcm9wZXJ0aWVzb2JqZWN0JztcbiAgICAgICAgdGhpcy5ldmVudHMgPSBtZXRhRGF0YS5FVkVOVFM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcyA9IG1ldGFEYXRhLkVWRU5UTkFNRVM7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcblxuICAgICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGJhc2VPbkluaXQobWV0YURhdGEpIHsgfVxuICAgIGJhc2VBZnRlclZpZXdJbml0KG1ldGFEYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdE1lKClcbiAgICB9XG5cbi8vKioqKioqKiBiYXNlIHN0YXJ0ICovXG5pbml0TWUoKSB7XG4gICAgY29uc29sZS5sb2coJycpO1xuICAgIGNvbnNvbGUubG9nKCcqKiogaW5pdE1lIGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICB0aGlzLmNyZWF0ZVJhd0NoaWxkcmVuKCk7XG4gICAgdGhpcy5zZXRIYXNQYXJlbnQoKTtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpO1xuICAgIHRoaXMuZmlndXJlT3V0QSgpO1xuICAgIHRoaXMuY3JlYXRlUHJvcHModGhpcy5wcm9wZXJ0aWVzLCB0aGlzLnByb3BlcnRpZXNvYmplY3QsIHRoaXMuZXZlbnRzLCB0aGlzLmV2ZW50bmFtZXMpO1xuICAgIHRoaXMuY3JlYXRlRXh0Q29tcG9uZW50KCk7XG4gICAgLy90aGlzLmFzc2Vzc0NoaWxkcmVuKHRoaXMuYmFzZSwgdGhpcy54dHlwZSk7XG4gICAgLy90aGlzLmF0RW5kKCk7XG4gICAgLy9pZiAodGhpcy5sYXN0ID09IHRydWUpe1xuICAgIC8vICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSBlbmQuLi4nKVxuICAgIC8vfVxufVxuO1xuY3JlYXRlUmF3Q2hpbGRyZW4oKSB7XG4gICAgY29uc29sZS5sb2coJ2NyZWF0ZVJhd0NoaWxkcmVuJylcbiAgICBpZiAodGhpcy5jdXJyZW50RWwuaXNBbmd1bGFyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuID0gdGhpcy5jdXJyZW50RWwuY2hpbGRDb21wb25lbnRzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmN1cnJlbnRFbC5jaGlsZHJlbik7XG4gICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuID0gW107XG4gICAgICAgIHZhciBudW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW5baV0uWFRZUEUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW5bbnVtXSA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0gPSB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dLmN1cnJlbnRDb21wb25lbnQgPSB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dLm5vZGUgPSB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZygncmF3Q2hpbGRyZW4nKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuKVxufVxuc2V0SGFzUGFyZW50KCkge1xuICAgIHZhciBoYXNQYXJlbnQ7XG4gICAgaWYgKHRoaXMucGFyZW50RWwgPT0gbnVsbCkge1xuICAgICAgICB0aGlzLmhhc1BhcmVudCA9IGZhbHNlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9yZXR1cm4gaGFzUGFyZW50XG59XG5zZXREaXJlY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuYmFzZS5jb3VudCA9PSAwKSB7XG4gICAgICAgIHRoaXMuYmFzZS5jb3VudCsrO1xuICAgICAgICBpZiAodGhpcy5oYXNQYXJlbnQgPT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWxOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ0JvdHRvbVRvVG9wJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKHRoaXMuYmFzZS5ESVJFQ1RJT04pO1xufVxuZmlndXJlT3V0QSgpIHtcbiAgICBpZiAodGhpcy5oYXNQYXJlbnQgJiYgdGhpcy5wYXJlbnRFbC5BID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5wYXJlbnRFbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5jdXJyZW50RWwpO1xuICAgIH1cbn1cbmluaXQoY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50LkEgPSB7fTtcbiAgICBjb21wb25lbnQuQS5wcm9wcyA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnh0eXBlID0gY29tcG9uZW50Lnh0eXBlO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IFtdO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID0gMDtcbiAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA9IDA7XG4gICAgaWYgKHRoaXMuYmFzZS5ESVJFQ1RJT04gPT0gJ1RvcFRvQm90dG9tJykge1xuICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFMgPSB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0Q3VycmVudEVsTmFtZShjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNbaV0pLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPSBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVDtcbiAgICB9XG59XG5jcmVhdGVFeHRDb21wb25lbnQoKSB7XG4gICAgdmFyIEEgPSB0aGlzLmN1cnJlbnRFbC5BO1xuICAgIHZhciBtZUEgPSBBO1xuICAgIHZhciBtZXRoaXMgPSB0aGlzO1xuICAgIGlmIChBLnByb3BzWyd2aWV3cG9ydCddID09IHRydWUpIHtcbiAgICAgICAgdGhpcy5uZXdEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1ldGhpcy5jdXJyZW50RWwuQS5leHQgPSBFeHQuY3JlYXRlKG1lQS5wcm9wcyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMC1FeHQuYXBwbGljYXRpb246ICcgKyBtZUEucHJvcHMueHR5cGUpO1xuICAgICAgICAgICAgbWV0aGlzLmFzc2Vzc0NoaWxkcmVuKG1ldGhpcy5iYXNlLCBtZXRoaXMueHR5cGUpO1xuICAgICAgICAgICAgRXh0LmFwcGxpY2F0aW9uKHtcbiAgICAgICAgICAgICAgICBuYW1lOiAnTXlFV0NBcHAnLFxuICAgICAgICAgICAgICAgIGxhdW5jaDogZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICBFeHQuVmlld3BvcnQuYWRkKFttZXRoaXMuY3VycmVudEVsLkEuZXh0XSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbJ3JvdXRlciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ3JvdXRlciddLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZXRoaXMuYmFzZS5ESVJFQ1RJT04gKyAnIGluIGxhdW5jaCAnKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1ldGhpcy5iYXNlLkRJUkVDVElPTiA9PSAnQm90dG9tVG9Ub3AnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygndGhlIGxhc3QgdGhpbmcgdG8gZG8uLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhpcy5sYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwgfHwgdGhpcy5wYXJlbnRFbE5hbWUuc3Vic3RyaW5nKDAsIDQpICE9ICdFWFQtJykge1xuICAgICAgICBBLnByb3BzLnJlbmRlclRvID0gdGhpcy5uZXdEaXY7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxLSBFeHQuY3JlYXRlOiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUgKyAnIEhUTUwgcGFyZW50OiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIG1ldGhpcy5uZXdEaXYucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWV0aGlzLmN1cnJlbnRFbC5BLmV4dC5lbC5kb20sIG1ldGhpcy5uZXdEaXYpO1xuICAgICAgICAgICAgbWV0aGlzLmFzc2Vzc0NoaWxkcmVuKG1ldGhpcy5iYXNlLCBtZXRoaXMueHR5cGUpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FmdGVyIGFzc2Vzc0NoaWxkcmVuJyk7XG4gICAgICAgICAgICAvL3ZhciB3YyA9IG1lQS5leHQuZWwuZG9tLm5leHRTaWJsaW5nO1xuICAgICAgICAgICAgLy93Yy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHdjKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBFeHQub25SZWFkeShmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMy0gRXh0LmNyZWF0ZTogJyArIG1ldGhpcy5jdXJyZW50RWxOYW1lICsgJyAgRXh0IHBhcmVudDogJyArIG1ldGhpcy5wYXJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIG1ldGhpcy5hc3Nlc3NDaGlsZHJlbihtZXRoaXMuYmFzZSwgbWV0aGlzLnh0eXBlKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuYXNzZXNzQ2hpbGRyZW4oYmFzZSwgeHR5cGUpIHtcbiAgICBjb25zb2xlLmxvZygnYXNzZXNzQ2hpbGRyZW4gZm9yOiAnICsgeHR5cGUpO1xuICAgIHZhciBBID0gdGhpcy5jdXJyZW50RWwuQTtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRpdGVtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NldCBodG1sJyk7XG4gICAgICAgICAgICBBLmV4dC5zZXRIdG1sKHRoaXMuX2V4dGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodGhpcy5fZXh0cm91dGVzLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IHJvdXRlcicpO1xuICAgICAgICAgICAgQS5leHQuc2V0SHRtbCh0aGlzLl9leHRyb3V0ZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIC8vY2hpbGRJdGVtLmNoaWxkQ21wID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGV3YzppdGVtLmdldEF0dHJpYnV0ZSgnZXdjJyksIGVsZW1lbnQ6RXh0LmdldChpdGVtLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoaXRlbSkpfSlcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCA9PSAwICYmXG4gICAgICAgIEEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9PSAwICYmXG4gICAgICAgIEEuQ0hJTERSRU5DT01QT05FTlRTQURERUQgPT0gMCAmJlxuICAgICAgICB0aGlzLnBhcmVudEVsID09IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ1NvbG8nKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICB9XG4gICAgZWxzZSBpZiAoQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA+IDApIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2FkZENoaWxkcmVuJyk7XG4gICAgICAgIGNvbnNvbGUuZGlyKEEuQ0hJTERSRU5DT01QT05FTlRTKTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5ub2RlLkEpO1xuICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMsIEEuQ0hJTERSRU5DT01QT05FTlRTKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnc2VuZCByZWFkeSBmb3IgQ0hJTERSRU5DT01QT05FTlRTQURERUQgPiAwJyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdyZWFkeSBldmVudCBmb3IgJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgICAgIHRoaXMubm9kZS5yZW1vdmUoKTtcbiAgICB9XG4gICAgLy8gZWxzZSBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwgJiYgdGhpcy5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID09IDApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlbmQgcmVhZHkgZm9yICcgKyB0aGlzLkEueHR5cGUpO1xuICAgIC8vICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgIC8vIH1cbiAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgIGlmIChiYXNlLkRJUkVDVElPTiA9PSAnVG9wVG9Cb3R0b20nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9wVG9Cb3R0b20nKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQtLTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBhcmVudEVsKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5wYXJlbnRFbCwgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5wYXJlbnRFbE5hbWUgKyAnKHBhcmVudCknKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMucGFyZW50RWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUy5wdXNoKHRoaXMuY3VycmVudEVsKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5hZGRDaGlsZHJlbihjaGlsZCwgY2hpbGRyZW4pIHtcbiAgICAvL2NvbnNvbGUubG9nKCdhZGRDaGlsZHJlbiBmb3IgJyArIGNoaWxkLnh0eXBlICsgJyAtIG51bSBjaGlsZHJlbjogJyArIGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgLy9mb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAvLyAgICB2YXIgY2hpbGRJdGVtID0geyBwYXJlbnRDbXA6IHt9LCBjaGlsZENtcDoge30gfTtcbiAgICAvLyAgICBjaGlsZEl0ZW0ucGFyZW50Q21wID0gY2hpbGQuY3VycmVudEVsLkEuZXh0O1xuICAgIC8vICAgIGNoaWxkSXRlbS5jaGlsZENtcCA9IGNoaWxkcmVuW2ldLkEuZXh0O1xuICAgIC8vICAgIHRoaXMuYWRkVGhlQ2hpbGQoY2hpbGRJdGVtLnBhcmVudENtcCwgY2hpbGRJdGVtLmNoaWxkQ21wLCBudWxsKTtcbiAgICAvL31cbiAgICBjb25zb2xlLmRpcihjaGlsZHJlbilcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZEl0ZW0gPSB7IHBhcmVudENtcDoge30sIGNoaWxkQ21wOiB7fSB9O1xuICAgICAgICBjaGlsZEl0ZW0ucGFyZW50Q21wID0gdGhpcy5jdXJyZW50RWwuQS5leHQ7XG4gICAgICAgIGNoaWxkSXRlbS5jaGlsZENtcCA9IGNoaWxkcmVuW2ldLmN1cnJlbnRFbC5BLmV4dDtcbiAgICAgICAgdGhpcy5hZGRUaGVDaGlsZChjaGlsZEl0ZW0ucGFyZW50Q21wLCBjaGlsZEl0ZW0uY2hpbGRDbXAsIG51bGwpO1xuICAgIH1cbn1cbmFkZFRoZUNoaWxkKHBhcmVudENtcCwgY2hpbGRDbXAsIGxvY2F0aW9uKSB7XG4gICAgdmFyIHBhcmVudHh0eXBlID0gcGFyZW50Q21wLnh0eXBlO1xuICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGU7XG4gICAgLy9jb25zb2xlLmxvZygnYWRkVGhlQ2hpbGQ6ICcgKyBwYXJlbnR4dHlwZSArICcoJyArIHBhcmVudENtcC5leHQgKyAnKScgKyAnIC0gJyArIGNoaWxkeHR5cGUgKyAnKCcgKyBjaGlsZENtcC5leHQgKyAnKScpO1xuICAgIC8vaWYgKGNoaWxkeHR5cGUgPT0gJ3dpZGdldCcpXG4gICAgaWYgKHRoaXMuY3VycmVudEVsLkEuZXh0LmluaXRpYWxDb25maWcuYWxpZ24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnR4dHlwZSAhPSAndGl0bGViYXInICYmIHBhcmVudHh0eXBlICE9ICdncmlkJyAmJiBwYXJlbnR4dHlwZSAhPSAnbG9ja2VkZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbiBvbmx5IHVzZSBhbGlnbiBwcm9wZXJ0eSBpZiBwYXJlbnQgaXMgYSBUaXRsZWJhciBvciBHcmlkIG9yIEJ1dHRvbicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBkZWZhdWx0cGFyZW50ID0gZmFsc2U7XG4gICAgdmFyIGRlZmF1bHRjaGlsZCA9IGZhbHNlO1xuICAgIHN3aXRjaCAocGFyZW50eHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib29sZWFuY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY2hlY2tjb2x1bW4nOlxuICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgY2FzZSAndGVtcGxhdGVjb2x1bW4nOlxuICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgY2FzZSAndGVtcGxhdGVjb2x1bW4nOlxuICAgICAgICBjYXNlICdkYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZHJhZ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ251bWJlcmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3NlbGVjdGlvbmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICBjYXNlICd0cmVlY29sdW1uJzpcbiAgICAgICAgY2FzZSAncm93bnVtYmVyZXInOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVuZGVyZXJjZWxsJzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldENlbGwoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dyaWQnOlxuICAgICAgICBjYXNlICdsb2NrZWRncmlkJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dGNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2RhdGVjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Jvd251bWJlcmVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdudW1iZXJjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW5jb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09ICdncmlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnQ29scyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLnJlZ2lzdGVyZWRDb2x1bW5zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ0NvbHMgPSBwYXJlbnRDbXAucmVnaXN0ZXJlZENvbHVtbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09ICdncmlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0Q29sdW1uKGxvY2F0aW9uICsgcmVnQ29scywgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChsb2NhdGlvbiArIHJlZ0NvbHMsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIDtcbiAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgY2FzZSAndG9vbGJhcic6XG4gICAgICAgIGNhc2UgJ3RpdGxlYmFyJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGxvY2F0aW9uLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b29sdGlwJzpcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbHVnaW4nOlxuICAgICAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRlZmF1bHRjaGlsZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRwYXJlbnQgPT0gdHJ1ZSAmJiBkZWZhdWx0Y2hpbGQgPT0gdHJ1ZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHBhcmVudHh0eXBlICsgJy5hZGQoJyArIGNoaWxkeHR5cGUgKyAnKScpXG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgIH1cbiAgICAvLyBpZiAodGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQgPiAwKSB7XG4gICAgLy8gICAgIHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkLS1cbiAgICAvLyB9XG4gICAgLy8gLy9jb25zb2xlLmxvZygnY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZChhZnRlcikgJyAgKyB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZClcbiAgICAvLyBpZiAodGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQgPT0gMCkge1xuICAgIC8vICAgICB0aGlzLnBhcmVudE5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JlYWR5Jyx7ZGV0YWlsOntjbXA6IHRoaXMucGFyZW50Tm9kZS5leHR9fSkpXG4gICAgLy8gfVxufVxuYXRFbmQoKSB7XG4gICAgY29uc29sZS5sb2coJyoqKiBhdCBlbmQnKTtcbiAgICBjb25zb2xlLmxvZygndGhpcyAtICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgIGNvbnNvbGUuZGlyKHRoaXMuY3VycmVudEVsLkEpO1xuICAgIGlmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmVudCAtICcgKyB0aGlzLnBhcmVudEVsTmFtZSk7XG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMucGFyZW50RWwuQSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnTm8gRVhUIHBhcmVudCcpO1xuICAgIH1cbn1cbmdldCBjdXJyZW50RWwoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZ2V0Q3VycmVudEVsTmFtZShjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50Ll9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5ub2RlTmFtZTtcbiAgICB9XG59XG5nZXQgY3VycmVudEVsTmFtZSgpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTmFtZTtcbiAgICB9XG59XG5nZXQgaXNBbmd1bGFyKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZ2V0IHBhcmVudEVsKCkge1xuICAgIGlmICh0aGlzLmlzQW5ndWxhcikge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubm9kZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gICAgfVxufVxuZ2V0IHBhcmVudEVsTmFtZSgpIHtcbiAgICBpZiAodGhpcy5pc0FuZ3VsYXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGVOYW1lO1xuICAgIH1cbn1cbnNlbmRSZWFkeUV2ZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBjbXAgPSBjb21wb25lbnQuY3VycmVudEVsLkEuZXh0O1xuICAgIGlmIChjb21wb25lbnQuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnRbJ3JlYWR5J10uZW1pdCh7IGRldGFpbDogeyBjbXA6IGNtcCB9IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZWFkeScsIHsgZGV0YWlsOiB7IGNtcDogY21wIH0gfSkpO1xuICAgIH1cbn1cbi8vKioqKioqKiBiYXNlIGVuZCAqL1xuY3JlYXRlUHJvcHMocHJvcGVydGllcywgcHJvcGVydGllc29iamVjdCwgZXZlbnRzLCBldmVudG5hbWVzKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5jdXJyZW50RWwuQS5wcm9wcztcbiAgICBwcm9wcy54dHlwZSA9IHRoaXMueHR5cGU7XG4gICAgbGV0IGxpc3RlbmVyc1Byb3ZpZGVkID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgICAgICBpZiAodGhpc1twcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgICAgaWYgKChwcm9wcy54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgcHJvcHMueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PSAnbGlzdGVuZXJzJyAmJiB0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgbGlzdGVuZXJzUHJvdmlkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50Jykge1xuICAgICAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHJ1ZSA9PT0gdGhpc1snZml0VG9QYXJlbnQnXSkge1xuICAgICAgICBwcm9wcy50b3AgPSAwLFxuICAgICAgICAgICAgcHJvcHMubGVmdCA9IDAsXG4gICAgICAgICAgICBwcm9wcy53aWR0aCA9ICcxMDAlJyxcbiAgICAgICAgICAgIHByb3BzLmhlaWdodCA9ICcxMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXNbJ2NvbmZpZyddICE9PSB7fSkge1xuICAgICAgICBFeHQuYXBwbHkocHJvcHMsIHRoaXNbJ2NvbmZpZyddKTtcbiAgICB9XG4gICAgaWYgKCFsaXN0ZW5lcnNQcm92aWRlZCkge1xuICAgICAgICBwcm9wcy5saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRuYW1lID0gZXZlbnQubmFtZTtcbiAgICAgICAgICAgIGxldCBldmVudHBhcmFtZXRlcnMgPSBldmVudC5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgbWUuY3VycmVudEVsLkEucHJvcHMubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaW4gdGhlIGV2ZW50ICcgKyBldmVudG5hbWUpXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBldmVudHBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgbGV0IHBhcm1zID0gcGFyYW1ldGVycy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBsZXQgZW1pdHBhcm1zID0ge307XG4gICAgICAgICAgICAgICAgaWYgKG1lLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9kdXA/P1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50LCBuKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cblxuICAgIGJhc2VPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICAgICAgbGV0IGNoYW5nZXNNc2dzID0gW107XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGxldCB2ZXJiID0gJyc7XG4gICAgICAgICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2ZXJiID0gJ2luaXRpYWxpemVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcmIgPSAnY2hhbmdlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RWwuQSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGlyKHRoaXMuY3VycmVudEVsLkEuZXh0KVxuICAgICAgICAgICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgdmFyIHNldEZ1bmN0aW9uID0gJ3NldCcgKyBjYXBQcm9wTmFtZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNldEZ1bmN0aW9uKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BLmV4dFtzZXRGdW5jdGlvbl0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLkEuZXh0W3NldEZ1bmN0aW9uXSh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzZXRGdW5jdGlvbiArICcgbm90IGZvdW5kIGZvciAnICsgdGhpcy5jdXJyZW50RWwuQS5leHQueHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2ZXJiID09ICdjaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnY2hhbmdlIG5lZWRlZCBhbmQgZXh0IG5vdCBkZWZpbmVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VzTXNncy5wdXNoKGAkICQgdG8gXCIkXCJgKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB2YXIgY2hpbGRDbXA7XG4gICAgICAgIHZhciBwYXJlbnRDbXA7XG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMpXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjaGlsZENtcCA9IHRoaXMuY3VycmVudEVsLkEuZXh0O1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWwgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENtcCA9IHRoaXMucGFyZW50RWwuQS5leHQ7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZENtcCA9PSB1bmRlZmluZWQgfHwgcGFyZW50Q21wID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnbWVudScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi9tZW51IG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2Nhcm91c2VsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2Fyb3VzZWwgcGFyZW50IG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2dyaWQnICYmIGNoaWxkQ21wLnh0eXBlID09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdncmlkL2NvbHVtbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnc2VnbWVudGVkYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2VnbWVudGVkYnV0dG9uL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICd0b29sdGlwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL3Rvb2x0aXAgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAndGl0bGViYXInICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAndGl0bGViYXInICYmIGNoaWxkQ21wLnh0eXBlID09ICdzZWFyY2hmaWVsZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL3NlYXJjaGZpZWxkIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5yZW1vdmUoW2NoaWxkQ21wXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZENtcCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRlc3Ryb3knKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICAgIH1cbiAgICB9XG59Il19