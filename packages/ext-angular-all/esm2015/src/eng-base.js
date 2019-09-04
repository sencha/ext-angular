import * as tslib_1 from "tslib";
import 'script-loader!@sencha/ext-angular-all/ext/ext.all.prod';
import 'script-loader!@sencha/ext-angular-all/ext/css.prod';
//import Common from './Common'
import { EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
export class EngBase {
    constructor(nativeElement, metaData, hostComponent) {
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
        this.eventnames.forEach((event, n) => {
            if (event != 'fullscreen') {
                this.currentEl[event] = new EventEmitter();
            }
            else {
                this.currentEl[event + 'event'] = new EventEmitter();
            }
        });
    }
    get childComponents() {
        return this._childComponents.filter(item => item !== this);
    }
    baseOnInit(metaData) { }
    baseAfterViewInit(metaData) {
        this.initMe();
    }
    createRawChildren() {
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
    }
    atEnd() {
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
    }
    initMe() {
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
    }
    ;
    setHasParent() {
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
    }
    setDirection() {
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
    }
    figureOutA() {
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
    }
    init(component, node) {
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
    }
    createExtComponent() {
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
    }
    assessChildren(base, xtype) {
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
    }
    addChildren(child, children) {
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
    }
    addTheChild(parentCmp, childCmp, location) {
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
    }
    // currentEl {
    //     if (this._extitems != undefined) {
    //         return this.node
    //     }
    //     else {
    //         return this
    //     }
    // }
    get currentEl() {
        if (this._extitems != undefined) {
            return this.node;
        }
        else {
            return this;
        }
    }
    getCurrentElName(component) {
        if (component._extitems != undefined) {
            return component.node.nodeName;
        }
        else {
            return component.nodeName;
        }
    }
    get currentElName() {
        if (this._extitems != undefined) {
            return this.node.nodeName;
        }
        else {
            return this.nodeName;
        }
    }
    get isAngular() {
        if (this._extitems != undefined) {
            return true;
        }
        else {
            return false;
        }
    }
    get parentEl() {
        if (this.isAngular) {
            if (this.parentNode == null) {
                return null;
            }
            return this.parentNode.node;
        }
        else {
            return this.parentNode;
        }
    }
    get parentElName() {
        if (this.isAngular) {
            if (this.parentNode == null) {
                return null;
            }
            return this.parentNode.node.nodeName;
        }
        else {
            return this.parentNode.nodeName;
        }
    }
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
    sendReadyEvent(component) {
        var cmp = component.currentEl.A.ext;
        if (component._extitems != undefined) {
            component['ready'].emit({ detail: { cmp: cmp } });
        }
        else {
            component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
        }
    }
    createProps(properties, propertiesobject, events, eventnames) {
        var props = this.currentEl.A.props;
        props.xtype = this.xtype;
        let listenersProvided = false;
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
                let eventname = event.name;
                let eventparameters = event.parameters;
                me.currentEl.A.props.listeners[eventname] = function () {
                    //console.log('in the event ' + eventname)
                    let parameters = eventparameters;
                    let parms = parameters.split(',');
                    let args = Array.prototype.slice.call(arguments);
                    let emitparms = {};
                    if (me._extitems != undefined) {
                        for (let i = 0, j = parms.length; i < j; i++) {
                            emitparms[parms[i]] = args[i];
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
            events.forEach((event, n) => {
                if (event != 'fullscreen') {
                    this[event] = new EventEmitter();
                }
                else {
                    this[event + 'event'] = new EventEmitter();
                }
            });
        }
    }
    baseOnChanges(changes) {
        //console.log(`ngOnChanges`)
        //console.log(changes)
        let changesMsgs = [];
        for (let propName in changes) {
            let verb = '';
            if (changes[propName].firstChange === true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            let val = changes[propName].currentValue;
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
            changesMsgs.push(`$ $ to "$"`);
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    }
    ngOnDestroy() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWFsbC8iLCJzb3VyY2VzIjpbInNyYy9lbmctYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyx3REFBd0QsQ0FBQztBQUNoRSxPQUFPLG9EQUFvRCxDQUFDO0FBQzVELCtCQUErQjtBQUUvQixPQUFPLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE1BQU0sT0FBTyxPQUFPO0lBbUNoQixZQUNJLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQXVCO1FBRHRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBVTtRQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxhQUFhLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzVELElBQUksQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQztRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFDdEMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQztRQUM5QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQyxVQUFVLENBQUM7UUFFdEMsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7UUFFcEIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFVLEVBQUUsQ0FBTSxFQUFF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R0FBUSxDQUFDLENBQUM7QUFDZixpQkFBUyxHQUFRLEVBQUUsQ0FBQztBQXdCa0I7SUFBNUMsWUFBWSxDQUFDLFVBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsQ0FBQzs7MENBQWdCO0FBQy9CO0lBQTVCLGVBQWUsQ0FBQyxVQUFVLENBQUM7c0NBQWEsU0FBUzsyQ0FBTTtBQUNaO0lBQTNDLFlBQVksQ0FBQyxTQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7O3lDQUFlO0FBQzlCO0lBQTNCLGVBQWUsQ0FBQyxTQUFTLENBQUM7c0NBQVksU0FBUzswQ0FBTTtBQUM1QjtJQUF6QixlQUFlLENBQUMsT0FBTyxDQUFDO3NDQUFtQixTQUFTO2lEQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgRXh0OiBhbnlcbmltcG9ydCAnc2NyaXB0LWxvYWRlciFAc2VuY2hhL2V4dC1hbmd1bGFyLWFsbC9leHQvZXh0LmFsbC5wcm9kJztcbmltcG9ydCAnc2NyaXB0LWxvYWRlciFAc2VuY2hhL2V4dC1hbmd1bGFyLWFsbC9leHQvY3NzLnByb2QnO1xuLy9pbXBvcnQgQ29tbW9uIGZyb20gJy4vQ29tbW9uJ1xuXG5pbXBvcnQge1xuICAgIEV2ZW50RW1pdHRlcixcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBFbmdCYXNlIHtcbiAgICBzdGF0aWMgY291bnQ6IGFueSA9IDA7XG4gICAgc3RhdGljIERJUkVDVElPTjogYW55ID0gJyc7XG5cbiAgICBwdWJsaWMgZXh0OiBhbnlcbiAgICBuZXdEaXY6IGFueVxuXG4gICAgeHR5cGU6IGFueVxuICAgIHByb3BlcnRpZXM6IGFueVxuICAgIHByb3BlcnRpZXNvYmplY3Q6IGFueVxuICAgIGV2ZW50czogYW55XG4gICAgZXZlbnRuYW1lczogYW55XG5cblxuICAgIEE6IGFueTtcbiAgICBwcml2YXRlIG5vZGU6IGFueVxuICAgIHBhcmVudE5vZGU6IGFueVxuICAgIGJhc2U6IGFueVxuICAgIG5vZGVOYW1lOiBhbnlcblxuICAgIGV3Y0NoaWxkcmVuOiBhbnlcbiAgICByYXdDaGlsZHJlbjogYW55XG4gICAgaGFzUGFyZW50OiBhbnlcbiAgICBjaGlsZHJlbjogYW55XG4gICAgbGFzdDogYW55XG5cbiAgICBAQ29udGVudENoaWxkKCdleHRyb3V0ZScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0cm91dGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRyb3V0ZScpIF9leHRyb3V0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkcmVuKEVuZ0Jhc2UpIF9jaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBnZXQgY2hpbGRDb21wb25lbnRzKCk6IEVuZ0Jhc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZENvbXBvbmVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBuYXRpdmVFbGVtZW50OiBhbnksXG4gICAgICAgIHByaXZhdGUgbWV0YURhdGE6IGFueSxcbiAgICAgICAgcHVibGljIGhvc3RDb21wb25lbnQgOiBFbmdCYXNlLFxuICAgICkge1xuICAgICAgICB0aGlzLm5vZGUgPSBuYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBob3N0Q29tcG9uZW50O1xuXG4gICAgICAgIHRoaXMubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRoaXMubm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGhpcy5uZXdEaXYpO1xuICAgICAgICB0aGlzLnh0eXBlID0gbWV0YURhdGEuWFRZUEU7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG1ldGFEYXRhLlBST1BFUlRJRVM7XG4gICAgICAgIHRoaXMucHJvcGVydGllc29iamVjdCA9ICdwcm9wZXJ0aWVzb2JqZWN0JztcbiAgICAgICAgdGhpcy5ldmVudHMgPSBtZXRhRGF0YS5FVkVOVFM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcyA9IG1ldGFEYXRhLkVWRU5UTkFNRVM7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcblxuICAgICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGJhc2VPbkluaXQobWV0YURhdGEpIHsgfVxuICAgIGJhc2VBZnRlclZpZXdJbml0KG1ldGFEYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdE1lKClcbiAgICB9XG5cblxuXG5jcmVhdGVSYXdDaGlsZHJlbigpIHtcbiAgICBpZiAodGhpcy5pc0FuZ3VsYXIpIHtcbiAgICAgICAgdGhpcy5yYXdDaGlsZHJlbiA9IHRoaXMuY2hpbGRDb21wb25lbnRzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5ld2NDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuY2hpbGRyZW4pO1xuICAgICAgICB0aGlzLnJhd0NoaWxkcmVuID0gW107XG4gICAgICAgIHZhciBudW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuZXdjQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmV3Y0NoaWxkcmVuW2ldLlhUWVBFICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMucmF3Q2hpbGRyZW5bbnVtXSA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMucmF3Q2hpbGRyZW5bbnVtXSA9IHRoaXMuZXdjQ2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgdGhpcy5yYXdDaGlsZHJlbltudW1dLmN1cnJlbnRDb21wb25lbnQgPSB0aGlzLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMucmF3Q2hpbGRyZW5bbnVtXS5ub2RlID0gdGhpcy5ld2NDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cblxuYXRFbmQoKSB7XG4gICAgY29uc29sZS5sb2coJyoqKiBhdCBlbmQnKTtcbiAgICBjb25zb2xlLmxvZygndGhpcyAtICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpXG4gICAgY29uc29sZS5kaXIodGhpcy5jdXJyZW50RWwuQSk7XG4gICAgaWYgKHRoaXMucGFyZW50RWwgIT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGFyZW50IC0gJyArIHRoaXMucGFyZW50RWxOYW1lKVxuICAgICAgICBjb25zb2xlLmRpcih0aGlzLnBhcmVudEVsLkEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIEVYVCBwYXJlbnQnKTtcbiAgICB9XG59XG5cbmluaXRNZSgpIHtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coJyoqKiBpbml0TWUgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuXG4gICAgdGhpcy5jcmVhdGVSYXdDaGlsZHJlbigpXG4gICAgdGhpcy5zZXRIYXNQYXJlbnQoKTtcbiAgICB0aGlzLnNldERpcmVjdGlvbigpXG4gICAgdGhpcy5maWd1cmVPdXRBKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9wcyh0aGlzLnByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllc29iamVjdCwgdGhpcy5ldmVudHMsIHRoaXMuZXZlbnRuYW1lcyk7XG4gICAgdGhpcy5jcmVhdGVFeHRDb21wb25lbnQoKTtcbiAgICB0aGlzLmFzc2Vzc0NoaWxkcmVuKHRoaXMuYmFzZSwgdGhpcy54dHlwZSk7XG4gICAgdGhpcy5hdEVuZCgpO1xuICAgIGlmICh0aGlzLmxhc3QgPT0gdHJ1ZSl7XG4gICAgICAgIGNvbnNvbGUubG9nKCd0aGlzIGlzIHRoZSBlbmQuLi4nKVxuICAgIH1cbn07XG5cbnNldEhhc1BhcmVudCgpIHtcbiAgICB2YXIgaGFzUGFyZW50O1xuICAgIGlmICh0aGlzLnBhcmVudEVsID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5oYXNQYXJlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1BhcmVudCA9IHRydWVcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFzUGFyZW50ID0gZmFsc2VcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3JldHVybiBoYXNQYXJlbnRcbn1cblxuc2V0RGlyZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmJhc2UuY291bnQgPT0gMCkge1xuICAgICAgICB0aGlzLmJhc2UuY291bnQrKztcbiAgICAgICAgaWYgKHRoaXMuaGFzUGFyZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ1RvcFRvQm90dG9tJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLkRJUkVDVElPTiA9ICdCb3R0b21Ub1RvcCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ1RvcFRvQm90dG9tJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyh0aGlzLmJhc2UuRElSRUNUSU9OKVxufVxuXG5maWd1cmVPdXRBKCkge1xuXG4gICAgaWYgKHRoaXMuaGFzUGFyZW50ICYmIHRoaXMucGFyZW50RWwuQSA9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgdGhpcy5pbml0KHRoaXMucGFyZW50RWwsIHRoaXMucGFyZW50Tm9kZSk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5jdXJyZW50RWwsIHRoaXMpO1xuICAgIH1cblxuICAgIC8vIGlmIChoYXNQYXJlbnQpIHtcbiAgICAvLyAgICAgaWYgKHRoaXMucGFyZW50RWwuQSA9PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCBub3QgY3JlYXRlZCcpO1xuICAgIC8vICAgICAgICAgdGhpcy5pbml0KHRoaXMucGFyZW50RWwsIHRoaXMucGFyZW50Tm9kZSk7XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZWxzZSB7XG4gICAgLy8gICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQgQSBJUyBjcmVhdGVkJyk7XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG5cbiAgICAvLyBpZiAodGhpcy5jdXJyZW50RWwuQSA9PSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZygnbm8gQScpO1xuICAgIC8vICAgICB0aGlzLmluaXQodGhpcy5jdXJyZW50RWwsIHRoaXMpO1xuICAgIC8vIH1cbiAgICAvLyBlbHNlIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ2hhdmUgQScpO1xuICAgIC8vIH1cbn1cbmluaXQoY29tcG9uZW50LCBub2RlKSB7XG4gICAgY29tcG9uZW50LkEgPSB7fTtcbiAgICBjb21wb25lbnQuQS5wcm9wcyA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnh0eXBlID0gbm9kZS54dHlwZTtcbiAgICAvL2NvbXBvbmVudC5BLkFDVVJSRU5UID0gbm9kZS54dHlwZTtcbiAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFMgPSBbXTtcbiAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCA9IDA7XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTQURERUQgPSAwO1xuICAgIGlmICh0aGlzLmJhc2UuRElSRUNUSU9OID09ICdUb3BUb0JvdHRvbScpIHtcbiAgICAgICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTID0gY29tcG9uZW50LnJhd0NoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuZ2V0Q3VycmVudEVsTmFtZShjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNbaV0pLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPSBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVDtcbiAgICB9XG59XG5jcmVhdGVFeHRDb21wb25lbnQoKSB7XG4gICAgdmFyIEEgPXRoaXMuY3VycmVudEVsLkFcbiAgICBpZiAoQS5wcm9wc1sndmlld3BvcnQnXSA9PSB0cnVlKSB7XG4gICAgICAgIC8vQS5BUEFSRU5UID0gJyc7XG4gICAgICAgIC8vdGhpcy5uZXdEaXYucmVtb3ZlKClcbiAgICAgICAgQS5leHQgPSBFeHQuY3JlYXRlKEEucHJvcHMpO1xuICAgICAgICBjb25zb2xlLmxvZygnMC1FeHQuYXBwbGljYXRpb246ICcgKyBBLnByb3BzLnh0eXBlKTtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgRXh0LmFwcGxpY2F0aW9uKHtcbiAgICAgICAgICAgIG5hbWU6ICdNeUVXQ0FwcCcsXG4gICAgICAgICAgICBsYXVuY2g6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBFeHQuVmlld3BvcnQuYWRkKFttZS5jdXJyZW50RWwuQS5leHRdKTtcbiAgICAgICAgICAgICAgICBpZiAod2luZG93Wydyb3V0ZXInXSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3dbJ3JvdXRlciddLmluaXQoKTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhtZS5iYXNlLkRJUkVDVElPTiArICcgaW4gbGF1bmNoICcpXG4gICAgICAgICAgICAgICAgaWYgKG1lLmJhc2UuRElSRUNUSU9OID09ICdCb3R0b21Ub1RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3RoZSBsYXN0IHRoaW5nIHRvIGRvLi4uJylcbiAgICAgICAgICAgICAgICAgICAgbWUubGFzdCA9IHRydWVcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgIC8vQS5BUEFSRU5UID0gJyc7XG4gICAgICAgIGNvbnNvbGUubG9nKCcxLSBFeHQuY3JlYXRlOiAnICsgdGhpcy5jdXJyZW50RWxOYW1lICsgJyBIVE1MIHBhcmVudDogJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgIEEucHJvcHMucmVuZGVyVG8gPSB0aGlzLm5ld0RpdjtcbiAgICAgICAgQS5leHQgPSBFeHQuY3JlYXRlKEEucHJvcHMpO1xuICAgICAgICAvL3RoaXMucGFyZW50RWwucmVwbGFjZUNoaWxkKEEuZXh0LmVsLmRvbSwgdGhpcy5uZXdEaXYpXG4gICAgICAgIC8vY29uc29sZS5sb2coJ3JlcGxhY2UgbmV3RGl2JylcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgIT0gJ0VYVC0nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnMi0gRXh0LmNyZWF0ZTogJyArIHRoaXMuY3VycmVudEVsTmFtZSArICcgIEhUTUwgcGFyZW50OiAnICsgdGhpcy5wYXJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgQS5wcm9wcy5yZW5kZXJUbyA9IHRoaXMubmV3RGl2OyAvL3RoaXMuQS5uZXdEaXY7IC8vbWUuc2hhZG93Um9vdDtcbiAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShBLnByb3BzKTtcbiAgICAgICAgICAgIC8vdGhpcy5wYXJlbnRFbC5yZXBsYWNlQ2hpbGQoQS5leHQuZWwuZG9tLCB0aGlzLm5ld0RpdilcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCczLSBFeHQuY3JlYXRlOiAnICsgdGhpcy5jdXJyZW50RWxOYW1lICsgJyAgRXh0IHBhcmVudDogJyArIHRoaXMucGFyZW50RWxOYW1lKTtcbiAgICAgICAgICAgIEEuZXh0ID0gRXh0LmNyZWF0ZShBLnByb3BzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmFzc2Vzc0NoaWxkcmVuKGJhc2UsIHh0eXBlKSB7XG4gICAgdmFyIEEgPXRoaXMuY3VycmVudEVsLkFcbiAgICBjb25zb2xlLmxvZygnYXNzZXNzQ2hpbGRyZW4gZm9yOiAnICsgeHR5cGUpO1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGh0bWwnKTtcbiAgICAgICAgICAgIEEuZXh0LnNldEh0bWwodGhpcy5fZXh0aXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRyb3V0ZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgcm91dGVyJyk7XG4gICAgICAgICAgICBBLmV4dC5zZXRIdG1sKHRoaXMuX2V4dHJvdXRlLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgLy9jaGlsZEl0ZW0uY2hpbGRDbXAgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZXdjOml0ZW0uZ2V0QXR0cmlidXRlKCdld2MnKSwgZWxlbWVudDpFeHQuZ2V0KGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtKSl9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID09IDAgJiZcbiAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZUID09IDAgJiZcbiAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA9PSAwICYmXG4gICAgICAgIHRoaXMucGFyZW50RWwgPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU29sbycpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpXG4gICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgfVxuICAgIGVsc2UgaWYgKEEuQ0hJTERSRU5DT01QT05FTlRTQURERUQgPiAwKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdhZGRDaGlsZHJlbicpO1xuICAgICAgICBjb25zb2xlLmRpcihBLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcywgQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdzZW5kIHJlYWR5IGZvciBDSElMRFJFTkNPTVBPTkVOVFNBRERFRCA+IDAnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKVxuICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICB0aGlzLm5vZGUucmVtb3ZlKCk7XG4gICAgfVxuICAgIC8vIGVsc2UgaWYgKHRoaXMucGFyZW50Tm9kZSAhPSBudWxsICYmIHRoaXMuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCA9PSAwKSB7XG4gICAgLy8gICAgIGNvbnNvbGUubG9nKCdzZW5kIHJlYWR5IGZvciAnICsgdGhpcy5BLnh0eXBlKTtcbiAgICAvLyAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAvLyB9XG4gICAgaWYgKHRoaXMucGFyZW50RWwgIT0gbnVsbCkge1xuICAgICAgICBpZiAoYmFzZS5ESVJFQ1RJT04gPT0gJ1RvcFRvQm90dG9tJykge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ1RvcFRvQm90dG9tJyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTLnB1c2godGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTQURERUQrKztcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZULS07XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPT0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5wYXJlbnRFbCwgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5wYXJlbnRFbE5hbWUgKyAnKHBhcmVudCknKVxuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcy5wYXJlbnRFbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTLnB1c2godGhpcy5jdXJyZW50RWwpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpXG4gICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxufVxuYWRkQ2hpbGRyZW4oY2hpbGQsIGNoaWxkcmVuKSB7XG4gICAgLy9jb25zb2xlLmxvZygnYWRkQ2hpbGRyZW4gZm9yICcgKyBjaGlsZC54dHlwZSArICcgLSBudW0gY2hpbGRyZW46ICcgKyBjaGlsZHJlbi5sZW5ndGgpO1xuICAgIC8vZm9yICh2YXIgaSA9IGNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPiAtMTsgaS0tKSB7XG4gICAgLy8gICAgdmFyIGNoaWxkSXRlbSA9IHsgcGFyZW50Q21wOiB7fSwgY2hpbGRDbXA6IHt9IH07XG4gICAgLy8gICAgY2hpbGRJdGVtLnBhcmVudENtcCA9IGNoaWxkLmN1cnJlbnRFbC5BLmV4dDtcbiAgICAvLyAgICBjaGlsZEl0ZW0uY2hpbGRDbXAgPSBjaGlsZHJlbltpXS5BLmV4dDtcbiAgICAvLyAgICB0aGlzLmFkZFRoZUNoaWxkKGNoaWxkSXRlbS5wYXJlbnRDbXAsIGNoaWxkSXRlbS5jaGlsZENtcCwgbnVsbCk7XG4gICAgLy99XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGRJdGVtID0geyBwYXJlbnRDbXA6IHt9LCBjaGlsZENtcDoge30gfTtcbiAgICAgICAgY2hpbGRJdGVtLnBhcmVudENtcCA9IGNoaWxkLmN1cnJlbnRFbC5BLmV4dDtcbiAgICAgICAgY2hpbGRJdGVtLmNoaWxkQ21wID0gY2hpbGRyZW5baV0uQS5leHQ7XG4gICAgICAgIHRoaXMuYWRkVGhlQ2hpbGQoY2hpbGRJdGVtLnBhcmVudENtcCwgY2hpbGRJdGVtLmNoaWxkQ21wLCBudWxsKTtcbiAgICB9XG59XG5hZGRUaGVDaGlsZChwYXJlbnRDbXAsIGNoaWxkQ21wLCBsb2NhdGlvbikge1xuICAgIHZhciBwYXJlbnR4dHlwZSA9IHBhcmVudENtcC54dHlwZTtcbiAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlO1xuICAgIC8vY29uc29sZS5sb2coJ2FkZFRoZUNoaWxkOiAnICsgcGFyZW50eHR5cGUgKyAnKCcgKyBwYXJlbnRDbXAuZXh0ICsgJyknICsgJyAtICcgKyBjaGlsZHh0eXBlICsgJygnICsgY2hpbGRDbXAuZXh0ICsgJyknKTtcbiAgICAvL2lmIChjaGlsZHh0eXBlID09ICd3aWRnZXQnKVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BLmV4dC5pbml0aWFsQ29uZmlnLmFsaWduICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyZW50eHR5cGUgIT0gJ3RpdGxlYmFyJyAmJiBwYXJlbnR4dHlwZSAhPSAnZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2xvY2tlZGdyaWQnICYmIHBhcmVudHh0eXBlICE9ICdidXR0b24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW4gb25seSB1c2UgYWxpZ24gcHJvcGVydHkgaWYgcGFyZW50IGlzIGEgVGl0bGViYXIgb3IgR3JpZCBvciBCdXR0b24nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZGVmYXVsdHBhcmVudCA9IGZhbHNlO1xuICAgIHZhciBkZWZhdWx0Y2hpbGQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHBhcmVudHh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZGF0ZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2RyYWdjb2x1bW4nOlxuICAgICAgICBjYXNlICdudW1iZXJjb2x1bW4nOlxuICAgICAgICBjYXNlICdzZWxlY3Rpb25jb2x1bW4nOlxuICAgICAgICBjYXNlICd0ZXh0Y29sdW1uJzpcbiAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3Jvd251bWJlcmVyJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbmRlcmVyY2VsbCc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5zZXRDZWxsKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgY2FzZSAnbG9ja2VkZ3JpZCc6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyZWVjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRlY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdyb3dudW1iZXJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdib29sZWFuY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ0NvbHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5yZWdpc3RlcmVkQ29sdW1ucyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdDb2xzID0gcGFyZW50Q21wLnJlZ2lzdGVyZWRDb2x1bW5zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydENvbHVtbihsb2NhdGlvbiArIHJlZ0NvbHMsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQobG9jYXRpb24gKyByZWdDb2xzLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICA7XG4gICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Rvb2xiYXInOlxuICAgICAgICBjYXNlICd0aXRsZWJhcic6XG4gICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChsb2NhdGlvbiwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9vbHRpcCc6XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGx1Z2luJzpcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWZhdWx0Y2hpbGQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChkZWZhdWx0cGFyZW50ID09IHRydWUgJiYgZGVmYXVsdGNoaWxkID09IHRydWUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnR4dHlwZSArICcuYWRkKCcgKyBjaGlsZHh0eXBlICsgJyknKVxuICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID4gMCkge1xuICAgIC8vICAgICB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZC0tXG4gICAgLy8gfVxuICAgIC8vIC8vY29uc29sZS5sb2coJ2NoaWxkcmVuWWV0VG9CZURlZmluZWQoYWZ0ZXIpICcgICsgdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQpXG4gICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID09IDApIHtcbiAgICAvLyAgICAgdGhpcy5wYXJlbnROb2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZWFkeScse2RldGFpbDp7Y21wOiB0aGlzLnBhcmVudE5vZGUuZXh0fX0pKVxuICAgIC8vIH1cbn1cbi8vIGN1cnJlbnRFbCB7XG4vLyAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuLy8gICAgICAgICByZXR1cm4gdGhpcy5ub2RlXG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gdGhpc1xuLy8gICAgIH1cbi8vIH1cblxuZ2V0IGN1cnJlbnRFbCgpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzXG4gICAgfVxufVxuXG5nZXRDdXJyZW50RWxOYW1lKGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm5vZGUubm9kZU5hbWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubm9kZU5hbWVcbiAgICB9XG59XG5cblxuXG5nZXQgY3VycmVudEVsTmFtZSgpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUubm9kZU5hbWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVOYW1lXG4gICAgfVxufVxuXG5nZXQgaXNBbmd1bGFyKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWVcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cbn1cblxuZ2V0IHBhcmVudEVsKCkge1xuICAgIGlmICh0aGlzLmlzQW5ndWxhcikge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgICB9XG59XG5cbmdldCBwYXJlbnRFbE5hbWUoKSB7XG4gICAgaWYgKHRoaXMuaXNBbmd1bGFyKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGxcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGVOYW1lO1xuICAgIH1cbn1cblxuXG4vLyBwYXJlbnRFbCB7XG4vLyAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuLy8gICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwpIHtcbi8vICAgICAgICAgICAgIHJldHVybiBudWxsXG4vLyAgICAgICAgIH1cbi8vICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlO1xuLy8gICAgIH1cbi8vICAgICBlbHNlIHtcbi8vICAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbi8vICAgICB9XG4vLyB9XG5cbi8vIGdldE5vZGVOYW1lKGNvbXBvbmVudCkge1xuLy8gICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbi8vICAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5ub2RlLm5vZGVOYW1lXG4vLyAgICAgfVxuLy8gICAgIGVsc2Uge1xuLy8gICAgICAgICByZXR1cm4gY29tcG9uZW50Lm5vZGVOYW1lXG4vLyAgICAgfVxuLy8gfVxuXG5zZW5kUmVhZHlFdmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgY21wID0gY29tcG9uZW50LmN1cnJlbnRFbC5BLmV4dFxuICAgIGlmIChjb21wb25lbnQuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnRbJ3JlYWR5J10uZW1pdCh7IGRldGFpbDogeyBjbXA6IGNtcCB9IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZWFkeScsIHsgZGV0YWlsOiB7IGNtcDogY21wIH0gfSkpO1xuICAgIH1cbn1cblxuXG5jcmVhdGVQcm9wcyhwcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzb2JqZWN0LCBldmVudHMsIGV2ZW50bmFtZXMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLmN1cnJlbnRFbC5BLnByb3BzO1xuICAgIHByb3BzLnh0eXBlID0gdGhpcy54dHlwZTtcbiAgICBsZXQgbGlzdGVuZXJzUHJvdmlkZWQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3AgPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICBpZiAocHJvcCA9PSAnaGFuZGxlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL25lZWQgdG8gaGFuZGxlIGxpc3RlbmVycyBjb21pbmcgaW4gaGVyZVxuICAgICAgICBpZiAoKHByb3BzLnh0eXBlID09PSAnY2FydGVzaWFuJyB8fCBwcm9wcy54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09ICdsaXN0ZW5lcnMnICYmIHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICBsaXN0ZW5lcnNQcm92aWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpc1twcm9wXSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdsaXN0ZW5lcnMnICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnY29uZmlnJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2hhbmRsZXInICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnZml0VG9QYXJlbnQnKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0cnVlID09PSB0aGlzWydmaXRUb1BhcmVudCddKSB7XG4gICAgICAgIHByb3BzLnRvcCA9IDAsXG4gICAgICAgICAgICBwcm9wcy5sZWZ0ID0gMCxcbiAgICAgICAgICAgIHByb3BzLndpZHRoID0gJzEwMCUnLFxuICAgICAgICAgICAgcHJvcHMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbiAgICBpZiAodGhpc1snY29uZmlnJ10gIT09IHt9KSB7XG4gICAgICAgIEV4dC5hcHBseShwcm9wcywgdGhpc1snY29uZmlnJ10pO1xuICAgIH1cbiAgICBpZiAoIWxpc3RlbmVyc1Byb3ZpZGVkKSB7XG4gICAgICAgIHByb3BzLmxpc3RlbmVycyA9IHt9O1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBldmVudG5hbWUgPSBldmVudC5uYW1lO1xuICAgICAgICAgICAgbGV0IGV2ZW50cGFyYW1ldGVycyA9IGV2ZW50LnBhcmFtZXRlcnM7XG4gICAgICAgICAgICBtZS5jdXJyZW50RWwuQS5wcm9wcy5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpbiB0aGUgZXZlbnQgJyArIGV2ZW50bmFtZSlcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IGV2ZW50cGFyYW1ldGVycztcbiAgICAgICAgICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGxldCBlbWl0cGFybXMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAobWUuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBhcm1zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL2R1cD8/XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQsIG4pID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCAhPSAnZnVsbHNjcmVlbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnQgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuXG4gICAgYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKVxuICAgICAgICBsZXQgY2hhbmdlc01zZ3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgbGV0IHZlcmIgPSAnJztcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIodGhpcy5jdXJyZW50RWwuQS5leHQpXG4gICAgICAgICAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB2YXIgc2V0RnVuY3Rpb24gPSAnc2V0JyArIGNhcFByb3BOYW1lO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coc2V0RnVuY3Rpb24pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsLkEuZXh0W3NldEZ1bmN0aW9uXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwuQS5leHRbc2V0RnVuY3Rpb25dKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHNldEZ1bmN0aW9uICsgJyBub3QgZm91bmQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbC5BLmV4dC54dHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCdjaGFuZ2UgbmVlZGVkIGFuZCBleHQgbm90IGRlZmluZWQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCQgJCB0byBcIiRcImApO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBjaGlsZENtcDtcbiAgICAgICAgdmFyIHBhcmVudENtcDtcbiAgICAgICAgY29uc29sZS5kaXIodGhpcylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkQ21wID0gdGhpcy5jdXJyZW50RWwuQS5leHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wID0gdGhpcy5wYXJlbnRFbC5BLmV4dDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ21wID09IHVuZGVmaW5lZCB8fCBwYXJlbnRDbXAgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL21lbnUgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnY2Fyb3VzZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjYXJvdXNlbCBwYXJlbnQgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnZ3JpZCcgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dyaWQvY29sdW1uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdzZWdtZW50ZWRidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzZWdtZW50ZWRidXR0b24vYnV0dG9uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vdG9vbHRpcCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3NlYXJjaGZpZWxkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGl0bGViYXIvc2VhcmNoZmllbGQgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnJlbW92ZShbY2hpbGRDbXBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ21wICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGVzdHJveScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=