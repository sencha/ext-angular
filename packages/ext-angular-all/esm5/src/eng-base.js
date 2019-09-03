import * as tslib_1 from "tslib";
import 'script-loader!@sencha/ext-angular-all/ext/ext.all.prod';
import 'script-loader!@sencha/ext-angular-all/ext/css.prod';
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
        this.node.insertAdjacentElement('beforebegin', this.newDiv);
        this.xtype = metaData.XTYPE;
        this.base = EngBase;
        metaData.EVENTNAMES.forEach(function (event, n) {
            if (event != 'fullscreen') {
                _this.getNode()[event] = new EventEmitter();
            }
            else {
                _this.getNode()[event + 'event'] = new EventEmitter();
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
        console.log('');
        console.log('*** baseAfterViewInit for ' + this.xtype);
        if (this._extitems != undefined) {
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
        this.figureOutA();
        this.createPropsForENG(metaData.PROPERTIES, metaData.EVENTS, metaData.EVENTNAMES);
        //this.createPropsForEWC(this.PROPERTIESOBJECT, this.EVENTS);
        this.createExtComponent();
        this.assessChildren(this.base, this.xtype);
        console.log('*** at end');
        console.dir(this.getNode().A);
        if (this.getParentNode() != null) {
            console.dir(this.getParentNode().A);
        }
        else {
            console.log('No EXT parent');
        }
    };
    ;
    EngBase.prototype.figureOutA = function () {
        console.log('figureOutA');
        var hasParent;
        if (this.getParentNode() == null) {
            hasParent = false;
        }
        else {
            if (this.getParentNode().nodeName.substring(0, 4) == 'EXT-') {
                hasParent = true;
            }
            else {
                hasParent = false;
            }
        }
        if (this.base.count == 0) {
            this.base.count++;
            if (hasParent == false) {
                this.base.DIRECTION = 'TopToBottom';
            }
            else {
                if (this.getParentNode().nodeName.substring(0, 4) == 'EXT-') {
                    this.base.DIRECTION = 'BottomToTop';
                }
                else {
                    this.base.DIRECTION = 'TopToBottom';
                }
            }
        }
        console.log(this.base.DIRECTION);
        if (hasParent) {
            if (this.getParentNode().A == undefined) {
                //console.log('parent not created');
                this.init(this.getParentNode(), this.parentNode);
            }
            else {
                //console.log('parent A IS created');
            }
        }
        if (this.getNode().A == undefined) {
            //console.log('no A');
            this.init(this.getNode(), this);
        }
        else {
            console.log('have A');
        }
    };
    EngBase.prototype.init = function (component, node) {
        component.A = {};
        component.A.props = {};
        component.A.xtype = node.xtype;
        component.A.ACURRENT = node.xtype;
        component.A.CHILDRENCOMPONENTS = [];
        component.A.CHILDRENCOMPONENTSCOUNT = 0;
        component.A.CHILDRENCOMPONENTSADDED = 0;
        if (this.base.DIRECTION == 'TopToBottom') {
            component.A.CHILDRENCOMPONENTS = component.rawChildren;
            for (var i = 0; i < component.A.CHILDRENCOMPONENTS.length; i++) {
                if (this.getNodeName(component.A.CHILDRENCOMPONENTS[i]).substring(0, 4) == 'EXT-') {
                    component.A.CHILDRENCOMPONENTSCOUNT++;
                }
            }
            component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
        }
    };
    /*
    createPropsForEWC(properties, events) {
        var o = {};
        o.xtype = this.xtype;
        if (o.xtype == 'column' ||
            o.xtype == 'gridcolumn') {
            var renderer = this.getAttribute('renderer')
            if (renderer != undefined) {
                o.cell = this.cell || {}
                o.cell.xtype = 'renderercell'
                //console.log(renderer)
                o.cell.renderer = renderer
            }
        }
        //mjg fitToParent not working??
        if (true === this.fitToParent) {
            o.top=0,
            o.left=0,
            o.width='100%',
            o.height='100%'
        }
        for (var property in properties) { //this.PROPERTIESOBJECT
            if (this.getAttribute(property) !== null) {
                if (property == 'handler') {
                    var functionString = this.getAttribute(property);
                    //error check for only 1 dot
                    var r = functionString.split('.');
                    var obj = r[0];
                    var func = r[1];
                    o[property] = window[obj][func];
                }
                else {
                    o[property] = this.filterProperty(this.getAttribute(property));
                }
            }
        }
        o.listeners = {}

        // this would only add events to the ones that are
        // being used for this instance
        // for (var i = 0; i < this.attributes.length; i++) {
        //     var attr = this.attributes.item(i).nodeName;

        //     if (/^on/.test(attr)) {
        //     //if (/^on/.test(attr) && attr!='onitemdisclosure') {
        //         var name = attr.slice(2);
        //         var result = this.EVENTS.filter(obj => {return obj.name === name});
        //         this.setEvent(result[0],o,this)
        //     }
        // }

        //this.EVENTS
        var me2 = this
        events.forEach(function (eventparameter, index, array) {
            me2.setEvent(eventparameter,o,me2)
        })

        props = o
        //return o;
    }
    */
    EngBase.prototype.createPropsForENG = function (properties, events, eventnames) {
        var _this = this;
        var props = this.getNode().A.props;
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
                me.getNode().A.props.listeners[eventname] = function () {
                    console.log('in the event ' + eventname);
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
    EngBase.prototype.createExtComponent = function () {
        var A = this.getNode().A;
        if (A.props['viewport'] == true) {
            A.APARENT = '';
            //this.newDiv.remove()
            A.ext = Ext.create(A.props);
            console.log('0-Ext.application: ' + A.props.xtype);
            var me = this;
            Ext.application({
                name: 'MyEWCApp',
                launch: function () {
                    Ext.Viewport.add([me.getNode().A.ext]);
                    if (window['router']) {
                        window['router'].init();
                    }
                }
            });
        }
        else if (this.parentNode == null) {
            A.APARENT = '';
            console.log('1- Ext.create: ' + this.node.nodeName + ' parent: ' + this.node.nodeName);
            A.props.renderTo = this.newDiv;
            A.ext = Ext.create(A.props);
            //me.currentComponent.node.parentNode.replaceChild(me.currentComponent.node.ext.el.dom, this.A.newDiv)
            //console.log('replace newDiv')
        }
        else {
            if (this.getParentNode().nodeName.substring(0, 4) != 'EXT-') {
                console.log('2- Ext.create: ' + this.node.nodeName + '  parent: ' + this.parentNode.nodeName);
                A.props.renderTo = this.newDiv; //this.A.newDiv; //me.shadowRoot;
                this.getNode().A.ext = Ext.create(A.props);
                //me.currentComponent.node.parentNode.replaceChild(me.currentComponent.node.ext.el.dom, this.A.newDiv)
            }
            else {
                console.log('3- Ext.create: ' + this.node.nodeName + '  Ext parent: ' + this.parentNode.nodeName);
                A.ext = Ext.create(A.props);
            }
        }
    };
    EngBase.prototype.assessChildren = function (base, xtype) {
        var A = this.getNode().A;
        console.log('assessChildren for: ' + xtype);
        if (this._extitems != undefined) {
            if (this._extitems.length == 1) {
                //mjg console.log('item')
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
            this.getParentNode() == null) {
            console.log('Solo');
            this.sendReadyEvent(this);
        }
        else if (A.CHILDRENCOMPONENTSADDED > 0) {
            console.log('addChildren');
            console.dir(A.CHILDRENCOMPONENTS);
            this.addChildren(this, A.CHILDRENCOMPONENTS);
            console.log('send ready for CHILDRENCOMPONENTSADDED > 0');
            this.sendReadyEvent(this);
            this.node.remove();
        }
        // else if (this.parentNode != null && this.A.CHILDRENCOMPONENTSCOUNT == 0) {
        //     console.log('send ready for ' + this.A.xtype);
        //     this.sendReadyEvent(this);
        // }
        if (this.getParentNode() != null) {
            if (base.DIRECTION == 'TopToBottom') {
                console.log('TopToBottom');
                this.getParentNode().A.CHILDRENCOMPONENTS.push(this);
                this.getParentNode().A.CHILDRENCOMPONENTSADDED++;
                this.getParentNode().A.CHILDRENCOMPONENTSLEFT--;
                if (this.getParentNode().A.CHILDRENCOMPONENTSLEFT == 0) {
                    this.addChildren(this.getParentNode(), this.getParentNode().A.CHILDRENCOMPONENTS);
                    console.log('send ready to parent');
                    this.sendReadyEvent(this.getParentNode());
                }
            }
            else {
                this.getParentNode().A.CHILDRENCOMPONENTS.push(this.getNode());
                this.getParentNode().A.CHILDRENCOMPONENTSADDED++;
                this.sendReadyEvent(this);
            }
        }
    };
    EngBase.prototype.addChildren = function (child, children) {
        //console.log('addChildren for ' + child.xtype + ' - num children: ' + children.length);
        for (var i = children.length - 1; i > -1; i--) {
            var childItem = { parentCmp: {}, childCmp: {} };
            childItem.parentCmp = child.getNode().A.ext;
            childItem.childCmp = children[i].A.ext;
            this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
        }
    };
    EngBase.prototype.addTheChild = function (parentCmp, childCmp, location) {
        var parentxtype = parentCmp.xtype;
        var childxtype = childCmp.xtype;
        //console.log('addTheChild: ' + parentxtype + '(' + parentCmp.ext + ')' + ' - ' + childxtype + '(' + childCmp.ext + ')');
        //if (childxtype == 'widget')
        if (this.getNode().A.ext.initialConfig.align != undefined) {
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
    EngBase.prototype.getNode = function () {
        if (this._extitems != undefined) {
            return this.node;
        }
        else {
            return this;
        }
    };
    EngBase.prototype.getParentNode = function () {
        if (this._extitems != undefined) {
            if (this.parentNode == null) {
                return null;
            }
            return this.parentNode.node;
        }
        else {
            return this.parentNode;
        }
    };
    EngBase.prototype.getNodeName = function (component) {
        if (this._extitems != undefined) {
            return component.node.nodeName;
        }
        else {
            return component.nodeName;
        }
    };
    EngBase.prototype.sendReadyEvent = function (component) {
        var cmp = component.getNode().A.ext;
        if (component._extitems != undefined) {
            component['ready'].emit({ detail: { cmp: cmp } });
        }
        else {
            component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
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
            if (this.getNode().A != undefined) {
                //console.dir(this.getNode().A.ext)
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                var setFunction = 'set' + capPropName;
                //console.log(setFunction)
                if (this.getNode().A.ext[setFunction] != undefined) {
                    this.getNode().A.ext[setFunction](val);
                }
                else {
                    console.error(setFunction + ' not found for ' + this.getNode().A.ext.xtype);
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
        try {
            childCmp = this.getNode().A.ext;
            if (this.getParentNode() != null) {
                parentCmp = this.getParentNode().A.ext;
                //mjg console.log(childCmp)
                //mjg console.log(parentCmp)
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
                    //mjg console.log('no destroy')
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWFsbC8iLCJzb3VyY2VzIjpbInNyYy9lbmctYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyx3REFBd0QsQ0FBQztBQUNoRSxPQUFPLG9EQUFvRCxDQUFDO0FBQzVELCtCQUErQjtBQUUvQixPQUFPLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFBO0FBRXRCO0lBeUJJLGlCQUNJLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQXVCO1FBSGxDLGlCQXFCQztRQW5CVyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQVU7UUFFOUIsSUFBSSxDQUFDLElBQUksR0FBRyxhQUFhLENBQUM7UUFDMUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFFaEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFFcEIsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVLEVBQUUsQ0FBTTtZQUM1QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ2pCLEtBQUksQ0FBQyxPQUFPLEVBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQ3BEO2lCQUNJO2dCQUNLLEtBQUksQ0FBQyxPQUFPLEVBQUcsQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FB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RUFBRSxDQUFDO3FCQUN0QjthQUNSO2lCQUNJO2dCQUNELElBQUksUUFBUSxJQUFJLFNBQVMsRUFBRTtvQkFDdkIsUUFBUSxDQUFDLE9BQU8sRUFBRSxDQUFDO2lCQUN0QjtxQkFDSTtvQkFDRCwrQkFBK0I7aUJBQ2xDO2FBQ0o7U0FDSjtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQiwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLDJCQUEyQjtZQUMzQiwwQkFBMEI7U0FDN0I7SUFDTCxDQUFDO0lBaHBCTSxhQUFLLEdBQVEsQ0FBQyxDQUFDO0lBQ2YsaUJBQVMsR0FBUSxFQUFFLENBQUM7SUFja0I7UUFBNUMsWUFBWSxDQUFDLFVBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsQ0FBQzs7OENBQWdCO0lBQy9CO1FBQTVCLGVBQWUsQ0FBQyxVQUFVLENBQUM7MENBQWEsU0FBUzsrQ0FBTTtJQUNaO1FBQTNDLFlBQVksQ0FBQyxTQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7OzZDQUFlO0lBQzlCO1FBQTNCLGVBQWUsQ0FBQyxTQUFTLENBQUM7MENBQVksU0FBUzs4Q0FBTTtJQUM1QjtRQUF6QixlQUFlLENBQUMsT0FBTyxDQUFDOzBDQUFtQixTQUFTO3FEQUFVO0lBOG5CbkUsY0FBQztDQUFBLEFBbHBCRCxJQWtwQkM7U0FscEJZLE9BQU8iLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0ICdzY3JpcHQtbG9hZGVyIUBzZW5jaGEvZXh0LWFuZ3VsYXItYWxsL2V4dC9leHQuYWxsLnByb2QnO1xuaW1wb3J0ICdzY3JpcHQtbG9hZGVyIUBzZW5jaGEvZXh0LWFuZ3VsYXItYWxsL2V4dC9jc3MucHJvZCc7XG4vL2ltcG9ydCBDb21tb24gZnJvbSAnLi9Db21tb24nXG5cbmltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGNsYXNzIEVuZ0Jhc2Uge1xuICAgIHN0YXRpYyBjb3VudDogYW55ID0gMDtcbiAgICBzdGF0aWMgRElSRUNUSU9OOiBhbnkgPSAnJztcblxuICAgIHB1YmxpYyBleHQ6IGFueVxuICAgIG5ld0RpdjogYW55XG4gICAgQTogYW55O1xuICAgIHByaXZhdGUgbm9kZTogYW55XG4gICAgcGFyZW50Tm9kZTogYW55XG4gICAgeHR5cGU6IGFueVxuICAgIGJhc2U6IGFueVxuXG4gICAgZXdjQ2hpbGRyZW46IGFueVxuICAgIHJhd0NoaWxkcmVuOiBhbnlcbiAgICBjaGlsZHJlbjogYW55XG5cbiAgICBAQ29udGVudENoaWxkKCdleHRyb3V0ZScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0cm91dGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRyb3V0ZScpIF9leHRyb3V0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkcmVuKEVuZ0Jhc2UpIF9jaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBnZXQgY2hpbGRDb21wb25lbnRzKCk6IEVuZ0Jhc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZENvbXBvbmVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBuYXRpdmVFbGVtZW50OiBhbnksXG4gICAgICAgIHByaXZhdGUgbWV0YURhdGE6IGFueSxcbiAgICAgICAgcHVibGljIGhvc3RDb21wb25lbnQgOiBFbmdCYXNlLFxuICAgICkge1xuICAgICAgICB0aGlzLm5vZGUgPSBuYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBob3N0Q29tcG9uZW50O1xuXG4gICAgICAgIHRoaXMubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGhpcy5uZXdEaXYpO1xuICAgICAgICB0aGlzLnh0eXBlID0gbWV0YURhdGEuWFRZUEU7XG4gICAgICAgIHRoaXMuYmFzZSA9IEVuZ0Jhc2U7XG5cbiAgICAgICAgbWV0YURhdGEuRVZFTlROQU1FUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5nZXROb2RlKCkpW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5nZXROb2RlKCkpW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgYmFzZU9uSW5pdChtZXRhRGF0YSkgeyB9XG4gICAgYmFzZUFmdGVyVmlld0luaXQobWV0YURhdGEpIHtcbiAgICAgICAgY29uc29sZS5sb2coJycpO1xuICAgICAgICBjb25zb2xlLmxvZygnKioqIGJhc2VBZnRlclZpZXdJbml0IGZvciAnICsgdGhpcy54dHlwZSk7XG4gICAgICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMucmF3Q2hpbGRyZW4gPSB0aGlzLmNoaWxkQ29tcG9uZW50cztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZXdjQ2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmNoaWxkcmVuKTtcbiAgICAgICAgICAgIHRoaXMucmF3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgICAgIHZhciBudW0gPSAwO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmV3Y0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZXdjQ2hpbGRyZW5baV0uWFRZUEUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmF3Q2hpbGRyZW5bbnVtXSA9IHt9O1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhd0NoaWxkcmVuW251bV0gPSB0aGlzLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnJhd0NoaWxkcmVuW251bV0uY3VycmVudENvbXBvbmVudCA9IHRoaXMuZXdjQ2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmF3Q2hpbGRyZW5bbnVtXS5ub2RlID0gdGhpcy5ld2NDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5maWd1cmVPdXRBKCk7XG4gICAgICAgIHRoaXMuY3JlYXRlUHJvcHNGb3JFTkcobWV0YURhdGEuUFJPUEVSVElFUywgbWV0YURhdGEuRVZFTlRTLCBtZXRhRGF0YS5FVkVOVE5BTUVTKTtcbiAgICAgICAgLy90aGlzLmNyZWF0ZVByb3BzRm9yRVdDKHRoaXMuUFJPUEVSVElFU09CSkVDVCwgdGhpcy5FVkVOVFMpO1xuICAgICAgICB0aGlzLmNyZWF0ZUV4dENvbXBvbmVudCgpO1xuICAgICAgICB0aGlzLmFzc2Vzc0NoaWxkcmVuKHRoaXMuYmFzZSwgdGhpcy54dHlwZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKCcqKiogYXQgZW5kJyk7XG4gICAgICAgIGNvbnNvbGUuZGlyKHRoaXMuZ2V0Tm9kZSgpLkEpO1xuICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnROb2RlKCkgIT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5kaXIodGhpcy5nZXRQYXJlbnROb2RlKCkuQSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnTm8gRVhUIHBhcmVudCcpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIGZpZ3VyZU91dEEoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmaWd1cmVPdXRBJylcbiAgICAgICAgdmFyIGhhc1BhcmVudDtcbiAgICAgICAgaWYgKHRoaXMuZ2V0UGFyZW50Tm9kZSgpID09IG51bGwpIHtcbiAgICAgICAgICAgIGhhc1BhcmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0UGFyZW50Tm9kZSgpLm5vZGVOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICBoYXNQYXJlbnQgPSB0cnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYXNQYXJlbnQgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmJhc2UuY291bnQgPT0gMCkge1xuICAgICAgICAgICAgdGhpcy5iYXNlLmNvdW50Kys7XG4gICAgICAgICAgICBpZiAoaGFzUGFyZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLkRJUkVDVElPTiA9ICdUb3BUb0JvdHRvbSc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnROb2RlKCkubm9kZU5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ0JvdHRvbVRvVG9wJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnVG9wVG9Cb3R0b20nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmJhc2UuRElSRUNUSU9OKVxuXG4gICAgICAgIGlmIChoYXNQYXJlbnQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmdldFBhcmVudE5vZGUoKS5BID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCBub3QgY3JlYXRlZCcpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdCh0aGlzLmdldFBhcmVudE5vZGUoKSwgdGhpcy5wYXJlbnROb2RlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCBBIElTIGNyZWF0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh0aGlzLmdldE5vZGUoKS5BID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnbm8gQScpO1xuICAgICAgICAgICAgdGhpcy5pbml0KHRoaXMuZ2V0Tm9kZSgpLCB0aGlzKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdoYXZlIEEnKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGluaXQoY29tcG9uZW50LCBub2RlKSB7XG4gICAgICAgIGNvbXBvbmVudC5BID0ge307XG4gICAgICAgIGNvbXBvbmVudC5BLnByb3BzID0ge307XG4gICAgICAgIGNvbXBvbmVudC5BLnh0eXBlID0gbm9kZS54dHlwZTtcbiAgICAgICAgY29tcG9uZW50LkEuQUNVUlJFTlQgPSBub2RlLnh0eXBlO1xuICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFMgPSBbXTtcbiAgICAgICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPSAwO1xuICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA9IDA7XG4gICAgICAgIGlmICh0aGlzLmJhc2UuRElSRUNUSU9OID09ICdUb3BUb0JvdHRvbScpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IGNvbXBvbmVudC5yYXdDaGlsZHJlbjtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Tm9kZU5hbWUoY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTW2ldKS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UKys7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qXG4gICAgY3JlYXRlUHJvcHNGb3JFV0MocHJvcGVydGllcywgZXZlbnRzKSB7XG4gICAgICAgIHZhciBvID0ge307XG4gICAgICAgIG8ueHR5cGUgPSB0aGlzLnh0eXBlO1xuICAgICAgICBpZiAoby54dHlwZSA9PSAnY29sdW1uJyB8fFxuICAgICAgICAgICAgby54dHlwZSA9PSAnZ3JpZGNvbHVtbicpIHtcbiAgICAgICAgICAgIHZhciByZW5kZXJlciA9IHRoaXMuZ2V0QXR0cmlidXRlKCdyZW5kZXJlcicpXG4gICAgICAgICAgICBpZiAocmVuZGVyZXIgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgby5jZWxsID0gdGhpcy5jZWxsIHx8IHt9XG4gICAgICAgICAgICAgICAgby5jZWxsLnh0eXBlID0gJ3JlbmRlcmVyY2VsbCdcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHJlbmRlcmVyKVxuICAgICAgICAgICAgICAgIG8uY2VsbC5yZW5kZXJlciA9IHJlbmRlcmVyXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9tamcgZml0VG9QYXJlbnQgbm90IHdvcmtpbmc/P1xuICAgICAgICBpZiAodHJ1ZSA9PT0gdGhpcy5maXRUb1BhcmVudCkge1xuICAgICAgICAgICAgby50b3A9MCxcbiAgICAgICAgICAgIG8ubGVmdD0wLFxuICAgICAgICAgICAgby53aWR0aD0nMTAwJScsXG4gICAgICAgICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICAgICAgfVxuICAgICAgICBmb3IgKHZhciBwcm9wZXJ0eSBpbiBwcm9wZXJ0aWVzKSB7IC8vdGhpcy5QUk9QRVJUSUVTT0JKRUNUXG4gICAgICAgICAgICBpZiAodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09ICdoYW5kbGVyJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZnVuY3Rpb25TdHJpbmcgPSB0aGlzLmdldEF0dHJpYnV0ZShwcm9wZXJ0eSk7XG4gICAgICAgICAgICAgICAgICAgIC8vZXJyb3IgY2hlY2sgZm9yIG9ubHkgMSBkb3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIgPSBmdW5jdGlvblN0cmluZy5zcGxpdCgnLicpO1xuICAgICAgICAgICAgICAgICAgICB2YXIgb2JqID0gclswXTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGZ1bmMgPSByWzFdO1xuICAgICAgICAgICAgICAgICAgICBvW3Byb3BlcnR5XSA9IHdpbmRvd1tvYmpdW2Z1bmNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzLmZpbHRlclByb3BlcnR5KHRoaXMuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG8ubGlzdGVuZXJzID0ge31cblxuICAgICAgICAvLyB0aGlzIHdvdWxkIG9ubHkgYWRkIGV2ZW50cyB0byB0aGUgb25lcyB0aGF0IGFyZVxuICAgICAgICAvLyBiZWluZyB1c2VkIGZvciB0aGlzIGluc3RhbmNlXG4gICAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5hdHRyaWJ1dGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vICAgICB2YXIgYXR0ciA9IHRoaXMuYXR0cmlidXRlcy5pdGVtKGkpLm5vZGVOYW1lO1xuXG4gICAgICAgIC8vICAgICBpZiAoL15vbi8udGVzdChhdHRyKSkge1xuICAgICAgICAvLyAgICAgLy9pZiAoL15vbi8udGVzdChhdHRyKSAmJiBhdHRyIT0nb25pdGVtZGlzY2xvc3VyZScpIHtcbiAgICAgICAgLy8gICAgICAgICB2YXIgbmFtZSA9IGF0dHIuc2xpY2UoMik7XG4gICAgICAgIC8vICAgICAgICAgdmFyIHJlc3VsdCA9IHRoaXMuRVZFTlRTLmZpbHRlcihvYmogPT4ge3JldHVybiBvYmoubmFtZSA9PT0gbmFtZX0pO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMuc2V0RXZlbnQocmVzdWx0WzBdLG8sdGhpcylcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgICAgIC8vdGhpcy5FVkVOVFNcbiAgICAgICAgdmFyIG1lMiA9IHRoaXNcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50cGFyYW1ldGVyLCBpbmRleCwgYXJyYXkpIHtcbiAgICAgICAgICAgIG1lMi5zZXRFdmVudChldmVudHBhcmFtZXRlcixvLG1lMilcbiAgICAgICAgfSlcblxuICAgICAgICBwcm9wcyA9IG9cbiAgICAgICAgLy9yZXR1cm4gbztcbiAgICB9XG4gICAgKi9cbiAgICBjcmVhdGVQcm9wc0ZvckVORyhwcm9wZXJ0aWVzLCBldmVudHMsIGV2ZW50bmFtZXMpIHtcbiAgICAgICAgdmFyIHByb3BzID0gdGhpcy5nZXROb2RlKCkuQS5wcm9wcztcbiAgICAgICAgcHJvcHMueHR5cGUgPSB0aGlzLnh0eXBlO1xuICAgICAgICBsZXQgbGlzdGVuZXJzUHJvdmlkZWQgPSBmYWxzZTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcHJvcCA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgICAgICBpZiAocHJvcCA9PSAnaGFuZGxlcicpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpc1twcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICAgICAgICBpZiAoKHByb3BzLnh0eXBlID09PSAnY2FydGVzaWFuJyB8fCBwcm9wcy54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHByb3AgPT0gJ2xpc3RlbmVycycgJiYgdGhpc1twcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICAgICAgbGlzdGVuZXJzUHJvdmlkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiZcbiAgICAgICAgICAgICAgICAgICAgcHJvcCAhPSAnY29uZmlnJyAmJlxuICAgICAgICAgICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJlxuICAgICAgICAgICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodHJ1ZSA9PT0gdGhpc1snZml0VG9QYXJlbnQnXSkge1xuICAgICAgICAgICAgcHJvcHMudG9wID0gMCxcbiAgICAgICAgICAgICAgICBwcm9wcy5sZWZ0ID0gMCxcbiAgICAgICAgICAgICAgICBwcm9wcy53aWR0aCA9ICcxMDAlJyxcbiAgICAgICAgICAgICAgICBwcm9wcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXNbJ2NvbmZpZyddICE9PSB7fSkge1xuICAgICAgICAgICAgRXh0LmFwcGx5KHByb3BzLCB0aGlzWydjb25maWcnXSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFsaXN0ZW5lcnNQcm92aWRlZCkge1xuICAgICAgICAgICAgcHJvcHMubGlzdGVuZXJzID0ge307XG4gICAgICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50bmFtZSA9IGV2ZW50Lm5hbWU7XG4gICAgICAgICAgICAgICAgbGV0IGV2ZW50cGFyYW1ldGVycyA9IGV2ZW50LnBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgbWUuZ2V0Tm9kZSgpLkEucHJvcHMubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpbiB0aGUgZXZlbnQgJyArIGV2ZW50bmFtZSlcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBldmVudHBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgZW1pdHBhcm1zID0ge307XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZS5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBhcm1zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy9kdXA/P1xuICAgICAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQsIG4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRdID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpc1tldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3JlYXRlRXh0Q29tcG9uZW50KCkge1xuICAgICAgICB2YXIgQSA9dGhpcy5nZXROb2RlKCkuQVxuICAgICAgICBpZiAoQS5wcm9wc1sndmlld3BvcnQnXSA9PSB0cnVlKSB7XG4gICAgICAgICAgICBBLkFQQVJFTlQgPSAnJztcbiAgICAgICAgICAgIC8vdGhpcy5uZXdEaXYucmVtb3ZlKClcbiAgICAgICAgICAgIEEuZXh0ID0gRXh0LmNyZWF0ZShBLnByb3BzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcwLUV4dC5hcHBsaWNhdGlvbjogJyArIEEucHJvcHMueHR5cGUpO1xuICAgICAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgICAgIEV4dC5hcHBsaWNhdGlvbih7XG4gICAgICAgICAgICAgICAgbmFtZTogJ015RVdDQXBwJyxcbiAgICAgICAgICAgICAgICBsYXVuY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgRXh0LlZpZXdwb3J0LmFkZChbbWUuZ2V0Tm9kZSgpLkEuZXh0XSk7XG4gICAgICAgICAgICAgICAgICAgIGlmICh3aW5kb3dbJ3JvdXRlciddKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ3JvdXRlciddLmluaXQoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICBBLkFQQVJFTlQgPSAnJztcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcxLSBFeHQuY3JlYXRlOiAnICsgdGhpcy5ub2RlLm5vZGVOYW1lICsgJyBwYXJlbnQ6ICcgKyB0aGlzLm5vZGUubm9kZU5hbWUpO1xuICAgICAgICAgICAgQS5wcm9wcy5yZW5kZXJUbyA9IHRoaXMubmV3RGl2O1xuICAgICAgICAgICAgQS5leHQgPSBFeHQuY3JlYXRlKEEucHJvcHMpO1xuICAgICAgICAgICAgLy9tZS5jdXJyZW50Q29tcG9uZW50Lm5vZGUucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWUuY3VycmVudENvbXBvbmVudC5ub2RlLmV4dC5lbC5kb20sIHRoaXMuQS5uZXdEaXYpXG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdyZXBsYWNlIG5ld0RpdicpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnROb2RlKCkubm9kZU5hbWUuc3Vic3RyaW5nKDAsIDQpICE9ICdFWFQtJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCcyLSBFeHQuY3JlYXRlOiAnICsgdGhpcy5ub2RlLm5vZGVOYW1lICsgJyAgcGFyZW50OiAnICsgdGhpcy5wYXJlbnROb2RlLm5vZGVOYW1lKTtcbiAgICAgICAgICAgICAgICBBLnByb3BzLnJlbmRlclRvID0gdGhpcy5uZXdEaXY7IC8vdGhpcy5BLm5ld0RpdjsgLy9tZS5zaGFkb3dSb290O1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0Tm9kZSgpLkEuZXh0ID0gRXh0LmNyZWF0ZShBLnByb3BzKTtcbiAgICAgICAgICAgICAgICAvL21lLmN1cnJlbnRDb21wb25lbnQubm9kZS5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtZS5jdXJyZW50Q29tcG9uZW50Lm5vZGUuZXh0LmVsLmRvbSwgdGhpcy5BLm5ld0RpdilcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCczLSBFeHQuY3JlYXRlOiAnICsgdGhpcy5ub2RlLm5vZGVOYW1lICsgJyAgRXh0IHBhcmVudDogJyArIHRoaXMucGFyZW50Tm9kZS5ub2RlTmFtZSk7XG4gICAgICAgICAgICAgICAgQS5leHQgPSBFeHQuY3JlYXRlKEEucHJvcHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGFzc2Vzc0NoaWxkcmVuKGJhc2UsIHh0eXBlKSB7XG4gICAgICAgIHZhciBBID10aGlzLmdldE5vZGUoKS5BXG4gICAgICAgIGNvbnNvbGUubG9nKCdhc3Nlc3NDaGlsZHJlbiBmb3I6ICcgKyB4dHlwZSk7XG4gICAgICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLl9leHRpdGVtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCdpdGVtJylcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGh0bWwnKTtcbiAgICAgICAgICAgICAgICBBLmV4dC5zZXRIdG1sKHRoaXMuX2V4dGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2V4dHJvdXRlcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgcm91dGVyJyk7XG4gICAgICAgICAgICAgICAgQS5leHQuc2V0SHRtbCh0aGlzLl9leHRyb3V0ZS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgICAgICAvL2NoaWxkSXRlbS5jaGlsZENtcCA9IEV4dC5jcmVhdGUoe3h0eXBlOid3aWRnZXQnLCBld2M6aXRlbS5nZXRBdHRyaWJ1dGUoJ2V3YycpLCBlbGVtZW50OkV4dC5nZXQoaXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW0pKX0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPT0gMCAmJlxuICAgICAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZUID09IDAgJiZcbiAgICAgICAgICAgIEEuQ0hJTERSRU5DT01QT05FTlRTQURERUQgPT0gMCAmJlxuICAgICAgICAgICAgdGhpcy5nZXRQYXJlbnROb2RlKCkgPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1NvbG8nKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA+IDApIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGRDaGlsZHJlbicpO1xuICAgICAgICAgICAgY29uc29sZS5kaXIoQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLCBBLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2VuZCByZWFkeSBmb3IgQ0hJTERSRU5DT01QT05FTlRTQURERUQgPiAwJyk7XG4gICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIC8vIGVsc2UgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsICYmIHRoaXMuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCA9PSAwKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VuZCByZWFkeSBmb3IgJyArIHRoaXMuQS54dHlwZSk7XG4gICAgICAgIC8vICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICAvLyB9XG4gICAgICAgIGlmICh0aGlzLmdldFBhcmVudE5vZGUoKSAhPSBudWxsKSB7XG4gICAgICAgICAgICBpZiAoYmFzZS5ESVJFQ1RJT04gPT0gJ1RvcFRvQm90dG9tJykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb3BUb0JvdHRvbScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFyZW50Tm9kZSgpLkEuQ0hJTERSRU5DT01QT05FTlRTLnB1c2godGhpcyk7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRQYXJlbnROb2RlKCkuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgICAgIHRoaXMuZ2V0UGFyZW50Tm9kZSgpLkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVC0tO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdldFBhcmVudE5vZGUoKS5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMuZ2V0UGFyZW50Tm9kZSgpLCB0aGlzLmdldFBhcmVudE5vZGUoKS5BLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZW5kIHJlYWR5IHRvIHBhcmVudCcpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMuZ2V0UGFyZW50Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhcmVudE5vZGUoKS5BLkNISUxEUkVOQ09NUE9ORU5UUy5wdXNoKHRoaXMuZ2V0Tm9kZSgpKTtcbiAgICAgICAgICAgICAgICB0aGlzLmdldFBhcmVudE5vZGUoKS5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEKys7XG4gICAgICAgICAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBhZGRDaGlsZHJlbihjaGlsZCwgY2hpbGRyZW4pIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYWRkQ2hpbGRyZW4gZm9yICcgKyBjaGlsZC54dHlwZSArICcgLSBudW0gY2hpbGRyZW46ICcgKyBjaGlsZHJlbi5sZW5ndGgpO1xuICAgICAgICBmb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBjaGlsZEl0ZW0gPSB7IHBhcmVudENtcDoge30sIGNoaWxkQ21wOiB7fSB9O1xuICAgICAgICAgICAgY2hpbGRJdGVtLnBhcmVudENtcCA9IGNoaWxkLmdldE5vZGUoKS5BLmV4dDtcbiAgICAgICAgICAgIGNoaWxkSXRlbS5jaGlsZENtcCA9IGNoaWxkcmVuW2ldLkEuZXh0O1xuICAgICAgICAgICAgdGhpcy5hZGRUaGVDaGlsZChjaGlsZEl0ZW0ucGFyZW50Q21wLCBjaGlsZEl0ZW0uY2hpbGRDbXAsIG51bGwpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGFkZFRoZUNoaWxkKHBhcmVudENtcCwgY2hpbGRDbXAsIGxvY2F0aW9uKSB7XG4gICAgICAgIHZhciBwYXJlbnR4dHlwZSA9IHBhcmVudENtcC54dHlwZTtcbiAgICAgICAgdmFyIGNoaWxkeHR5cGUgPSBjaGlsZENtcC54dHlwZTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnYWRkVGhlQ2hpbGQ6ICcgKyBwYXJlbnR4dHlwZSArICcoJyArIHBhcmVudENtcC5leHQgKyAnKScgKyAnIC0gJyArIGNoaWxkeHR5cGUgKyAnKCcgKyBjaGlsZENtcC5leHQgKyAnKScpO1xuICAgICAgICAvL2lmIChjaGlsZHh0eXBlID09ICd3aWRnZXQnKVxuICAgICAgICBpZiAodGhpcy5nZXROb2RlKCkuQS5leHQuaW5pdGlhbENvbmZpZy5hbGlnbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSAhPSAndGl0bGViYXInICYmIHBhcmVudHh0eXBlICE9ICdncmlkJyAmJiBwYXJlbnR4dHlwZSAhPSAnbG9ja2VkZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW4gb25seSB1c2UgYWxpZ24gcHJvcGVydHkgaWYgcGFyZW50IGlzIGEgVGl0bGViYXIgb3IgR3JpZCBvciBCdXR0b24nKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdmFyIGRlZmF1bHRwYXJlbnQgPSBmYWxzZTtcbiAgICAgICAgdmFyIGRlZmF1bHRjaGlsZCA9IGZhbHNlO1xuICAgICAgICBzd2l0Y2ggKHBhcmVudHh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlICdidXR0b24nOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdib29sZWFuY29sdW1uJzpcbiAgICAgICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgICAgIGNhc2UgJ2RhdGVjb2x1bW4nOlxuICAgICAgICAgICAgY2FzZSAnZHJhZ2NvbHVtbic6XG4gICAgICAgICAgICBjYXNlICdudW1iZXJjb2x1bW4nOlxuICAgICAgICAgICAgY2FzZSAnc2VsZWN0aW9uY29sdW1uJzpcbiAgICAgICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgICAgICBjYXNlICdyb3dudW1iZXJlcic6XG4gICAgICAgICAgICAgICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3JlbmRlcmVyY2VsbCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0Q2VsbChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgICAgIGNhc2UgJ2xvY2tlZGdyaWQnOlxuICAgICAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdjaGVja2NvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2RhdGVjb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICBjYXNlICdyb3dudW1iZXJlcic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcmNvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW5jb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ0NvbHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAucmVnaXN0ZXJlZENvbHVtbnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ0NvbHMgPSBwYXJlbnRDbXAucmVnaXN0ZXJlZENvbHVtbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydENvbHVtbihsb2NhdGlvbiArIHJlZ0NvbHMsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQobG9jYXRpb24gKyByZWdDb2xzLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgO1xuICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgIGNhc2UgJ3Rvb2xiYXInOlxuICAgICAgICAgICAgY2FzZSAndGl0bGViYXInOlxuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQobG9jYXRpb24sIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAndG9vbHRpcCc6XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAncGx1Z2luJzpcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgZGVmYXVsdGNoaWxkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICBpZiAoZGVmYXVsdHBhcmVudCA9PSB0cnVlICYmIGRlZmF1bHRjaGlsZCA9PSB0cnVlKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKHBhcmVudHh0eXBlICsgJy5hZGQoJyArIGNoaWxkeHR5cGUgKyAnKScpXG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgfVxuICAgICAgICAvLyBpZiAodGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQgPiAwKSB7XG4gICAgICAgIC8vICAgICB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZC0tXG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZygnY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZChhZnRlcikgJyAgKyB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZClcbiAgICAgICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID09IDApIHtcbiAgICAgICAgLy8gICAgIHRoaXMucGFyZW50Tm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVhZHknLHtkZXRhaWw6e2NtcDogdGhpcy5wYXJlbnROb2RlLmV4dH19KSlcbiAgICAgICAgLy8gfVxuICAgIH1cblxuICAgIGdldE5vZGUoKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLm5vZGVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzXG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0UGFyZW50Tm9kZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubm9kZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0Tm9kZU5hbWUoY29tcG9uZW50KSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiBjb21wb25lbnQubm9kZS5ub2RlTmFtZVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5ub2RlTmFtZVxuICAgICAgICB9XG4gICAgfVxuICAgIHNlbmRSZWFkeUV2ZW50KGNvbXBvbmVudCkge1xuICAgICAgICB2YXIgY21wID0gY29tcG9uZW50LmdldE5vZGUoKS5BLmV4dFxuICAgICAgICBpZiAoY29tcG9uZW50Ll9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGNvbXBvbmVudFsncmVhZHknXS5lbWl0KHsgZGV0YWlsOiB7IGNtcDogY21wIH0gfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjb21wb25lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JlYWR5JywgeyBkZXRhaWw6IHsgY21wOiBjbXAgfSB9KSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKVxuICAgICAgICBsZXQgY2hhbmdlc01zZ3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgbGV0IHZlcmIgPSAnJztcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmdldE5vZGUoKS5BICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIodGhpcy5nZXROb2RlKCkuQS5leHQpXG4gICAgICAgICAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB2YXIgc2V0RnVuY3Rpb24gPSAnc2V0JyArIGNhcFByb3BOYW1lO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coc2V0RnVuY3Rpb24pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Tm9kZSgpLkEuZXh0W3NldEZ1bmN0aW9uXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXROb2RlKCkuQS5leHRbc2V0RnVuY3Rpb25dKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHNldEZ1bmN0aW9uICsgJyBub3QgZm91bmQgZm9yICcgKyB0aGlzLmdldE5vZGUoKS5BLmV4dC54dHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCdjaGFuZ2UgbmVlZGVkIGFuZCBleHQgbm90IGRlZmluZWQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCQgJCB0byBcIiRcImApO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBjaGlsZENtcDtcbiAgICAgICAgdmFyIHBhcmVudENtcDtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkQ21wID0gdGhpcy5nZXROb2RlKCkuQS5leHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5nZXRQYXJlbnROb2RlKCkgIT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENtcCA9IHRoaXMuZ2V0UGFyZW50Tm9kZSgpLkEuZXh0O1xuICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDbXAgPT0gdW5kZWZpbmVkIHx8IHBhcmVudENtcCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vbWVudSBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdjYXJvdXNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Nhcm91c2VsIHBhcmVudCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdncmlkJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnY29sdW1uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ3JpZC9jb2x1bW4gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3NlZ21lbnRlZGJ1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NlZ21lbnRlZGJ1dHRvbi9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi90b29sdGlwIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3RpdGxlYmFyJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGl0bGViYXIvYnV0dG9uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3RpdGxlYmFyJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnc2VhcmNoZmllbGQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9zZWFyY2hmaWVsZCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAucmVtb3ZlKFtjaGlsZENtcF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDbXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCdubyBkZXN0cm95JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==