import * as tslib_1 from "tslib";
import { EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
export class EngBase {
    constructor(nativeElement, metaData, hostComponent) {
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
    //******* base start */
    initMe() {
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
    }
    ;
    createRawChildren() {
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
    }
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
        //if (this.hasParent && this.parentEl.A == undefined) {
        if (this.hasParent &&
            this.parentEl.A == undefined &&
            this.parentEl.nodeName.substring(0, 4) == 'EXT-') {
            this.init(this.parentEl);
        }
        if (this.currentEl.A == undefined) {
            this.init(this.currentEl);
        }
    }
    init(component) {
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
    }
    createExtComponent() {
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
    }
    assessChildren(base, xtype) {
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
    }
    addChildren(child, children) {
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
    sendReadyEvent(component) {
        var cmp = component.currentEl.A.ext;
        if (component._extitems != undefined) {
            component['ready'].emit({ detail: { cmp: cmp } });
        }
        else {
            component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
        }
    }
    //******* base end */
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2VuZy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE1BQU0sT0FBTyxPQUFPO0lBbUNoQixZQUNJLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQXVCO1FBRHRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBVTtRQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsNENBQTRDO1FBQzVDLDZCQUE2QjtRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQVUsRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUM1QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7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LENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUM3QixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7cUJBQ3RCO2FBQ1I7aUJBQ0k7Z0JBQ0QsSUFBSSxRQUFRLElBQUksU0FBUyxFQUFFO29CQUN2QixRQUFRLENBQUMsT0FBTyxFQUFFLENBQUM7aUJBQ3RCO3FCQUNJO29CQUNELE9BQU8sQ0FBQyxHQUFHLENBQUMsWUFBWSxDQUFDLENBQUE7aUJBQzVCO2FBQ0o7U0FDSjtRQUNELE9BQU8sQ0FBQyxFQUFFO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNqQiwwQkFBMEI7WUFDMUIsNEJBQTRCO1lBQzVCLDJCQUEyQjtZQUMzQiwwQkFBMEI7U0FDN0I7SUFDTCxDQUFDOztBQXJyQk0sYUFBSyxHQUFRLENBQUMsQ0FBQztBQUNmLGlCQUFTLEdBQVEsRUFBRSxDQUFDO0FBd0JrQjtJQUE1QyxZQUFZLENBQUMsVUFBVSxFQUFDLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxDQUFDOzswQ0FBZ0I7QUFDL0I7SUFBNUIsZUFBZSxDQUFDLFVBQVUsQ0FBQztzQ0FBYSxTQUFTOzJDQUFNO0FBQ1o7SUFBM0MsWUFBWSxDQUFDLFNBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsQ0FBQzs7eUNBQWU7QUFDOUI7SUFBM0IsZUFBZSxDQUFDLFNBQVMsQ0FBQztzQ0FBWSxTQUFTOzBDQUFNO0FBQzVCO0lBQXpCLGVBQWUsQ0FBQyxPQUFPLENBQUM7c0NBQW1CLFNBQVM7aURBQVUiLCJzb3VyY2VzQ29udGVudCI6WyIvL01vbiBTZXAgMDkgMjAxOSAwODowMjoyNiBHTVQtMDQwMCAoRWFzdGVybiBEYXlsaWdodCBUaW1lKVxuZGVjbGFyZSB2YXIgRXh0OiBhbnlcblxuaW1wb3J0IHtcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgRW5nQmFzZSB7XG4gICAgc3RhdGljIGNvdW50OiBhbnkgPSAwO1xuICAgIHN0YXRpYyBESVJFQ1RJT046IGFueSA9ICcnO1xuXG4gICAgcHVibGljIGV4dDogYW55XG4gICAgbmV3RGl2OiBhbnlcblxuICAgIHh0eXBlOiBhbnlcbiAgICBwcm9wZXJ0aWVzOiBhbnlcbiAgICBwcm9wZXJ0aWVzb2JqZWN0OiBhbnlcbiAgICBldmVudHM6IGFueVxuICAgIGV2ZW50bmFtZXM6IGFueVxuXG5cbiAgICBBOiBhbnk7XG4gICAgcHJpdmF0ZSBub2RlOiBhbnlcbiAgICBwYXJlbnROb2RlOiBhbnlcbiAgICBiYXNlOiBhbnlcbiAgICBub2RlTmFtZTogYW55XG5cbiAgICBld2NDaGlsZHJlbjogYW55XG4gICAgcmF3Q2hpbGRyZW46IGFueVxuICAgIGhhc1BhcmVudDogYW55XG4gICAgY2hpbGRyZW46IGFueVxuICAgIGxhc3Q6IGFueVxuXG4gICAgQENvbnRlbnRDaGlsZCgnZXh0cm91dGUnLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dHJvdXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZHJlbignZXh0cm91dGUnKSBfZXh0cm91dGVzOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkKCdleHRpdGVtJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRpdGVtOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZHJlbignZXh0aXRlbScpIF9leHRpdGVtczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZHJlbihFbmdCYXNlKSBfY2hpbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW5nQmFzZT47XG4gICAgZ2V0IGNoaWxkQ29tcG9uZW50cygpOiBFbmdCYXNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRDb21wb25lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgbmF0aXZlRWxlbWVudDogYW55LFxuICAgICAgICBwcml2YXRlIG1ldGFEYXRhOiBhbnksXG4gICAgICAgIHB1YmxpYyBob3N0Q29tcG9uZW50IDogRW5nQmFzZSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gaG9zdENvbXBvbmVudDtcblxuICAgICAgICB0aGlzLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL3ZhciB0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJuZXdEaXZcIik7XG4gICAgICAgIC8vdGhpcy5uZXdEaXYuYXBwZW5kQ2hpbGQodCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCB0aGlzLm5ld0Rpdik7XG4gICAgICAgIHRoaXMueHR5cGUgPSBtZXRhRGF0YS5YVFlQRTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbWV0YURhdGEuUFJPUEVSVElFUztcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzb2JqZWN0ID0gJ3Byb3BlcnRpZXNvYmplY3QnO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG1ldGFEYXRhLkVWRU5UUztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzID0gbWV0YURhdGEuRVZFTlROQU1FUztcblxuICAgICAgICB0aGlzLmJhc2UgPSBFbmdCYXNlO1xuXG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5jdXJyZW50RWwpW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5jdXJyZW50RWwpW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgYmFzZU9uSW5pdChtZXRhRGF0YSkgeyB9XG4gICAgYmFzZUFmdGVyVmlld0luaXQobWV0YURhdGEpIHtcbiAgICAgICAgdGhpcy5pbml0TWUoKVxuICAgIH1cblxuLy8qKioqKioqIGJhc2Ugc3RhcnQgKi9cbmluaXRNZSgpIHtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coJyoqKiBpbml0TWUgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgIHRoaXMuY3JlYXRlUmF3Q2hpbGRyZW4oKTtcbiAgICB0aGlzLnNldEhhc1BhcmVudCgpO1xuICAgIHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5maWd1cmVPdXRBKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9wcyh0aGlzLnByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllc29iamVjdCwgdGhpcy5ldmVudHMsIHRoaXMuZXZlbnRuYW1lcyk7XG4gICAgdGhpcy5jcmVhdGVFeHRDb21wb25lbnQoKTtcbiAgICAvL3RoaXMuYXNzZXNzQ2hpbGRyZW4odGhpcy5iYXNlLCB0aGlzLnh0eXBlKTtcbiAgICAvL3RoaXMuYXRFbmQoKTtcbiAgICAvL2lmICh0aGlzLmxhc3QgPT0gdHJ1ZSl7XG4gICAgLy8gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIGVuZC4uLicpXG4gICAgLy99XG59XG47XG5jcmVhdGVSYXdDaGlsZHJlbigpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjcmVhdGVSYXdDaGlsZHJlbicpXG4gICAgaWYgKHRoaXMuY3VycmVudEVsLmlzQW5ndWxhcikge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbiA9IHRoaXMuY3VycmVudEVsLmNoaWxkQ29tcG9uZW50cztcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5jdXJyZW50RWwuY2hpbGRyZW4pO1xuICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbiA9IFtdO1xuICAgICAgICB2YXIgbnVtID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldLlhUWVBFICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0gPSB7fTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dID0gdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW5bbnVtXS5jdXJyZW50Q29tcG9uZW50ID0gdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW5bbnVtXS5ub2RlID0gdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbnVtKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygncmF3Q2hpbGRyZW4nKVxuICAgIC8vY29uc29sZS5sb2codGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4pXG59XG5zZXRIYXNQYXJlbnQoKSB7XG4gICAgdmFyIGhhc1BhcmVudDtcbiAgICBpZiAodGhpcy5wYXJlbnRFbCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaGFzUGFyZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRFbE5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgdGhpcy5oYXNQYXJlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNQYXJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3JldHVybiBoYXNQYXJlbnRcbn1cbnNldERpcmVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5iYXNlLmNvdW50ID09IDApIHtcbiAgICAgICAgdGhpcy5iYXNlLmNvdW50Kys7XG4gICAgICAgIGlmICh0aGlzLmhhc1BhcmVudCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlLkRJUkVDVElPTiA9ICdUb3BUb0JvdHRvbSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbE5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnQm90dG9tVG9Ub3AnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLkRJUkVDVElPTiA9ICdUb3BUb0JvdHRvbSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5iYXNlLkRJUkVDVElPTik7XG59XG5maWd1cmVPdXRBKCkge1xuICAgIC8vaWYgKHRoaXMuaGFzUGFyZW50ICYmIHRoaXMucGFyZW50RWwuQSA9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodGhpcy5oYXNQYXJlbnQgJiZcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5BID09IHVuZGVmaW5lZCAmJlxuICAgICAgICB0aGlzLnBhcmVudEVsLm5vZGVOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULSdcbiAgICAgICAgKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnBhcmVudEVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEVsLkEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmN1cnJlbnRFbCk7XG4gICAgfVxufVxuaW5pdChjb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQuQSA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnByb3BzID0ge307XG4gICAgY29tcG9uZW50LkEueHR5cGUgPSBjb21wb25lbnQueHR5cGU7XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTID0gW107XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPSAwO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID0gMDtcbiAgICBpZiAodGhpcy5iYXNlLkRJUkVDVElPTiA9PSAnVG9wVG9Cb3R0b20nKSB7XG4gICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRDdXJyZW50RWxOYW1lKGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU1tpXSkuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UO1xuICAgIH1cbn1cbmNyZWF0ZUV4dENvbXBvbmVudCgpIHtcbiAgICB2YXIgQSA9IHRoaXMuY3VycmVudEVsLkE7XG4gICAgdmFyIG1lQSA9IEE7XG4gICAgdmFyIG1ldGhpcyA9IHRoaXM7XG4gICAgaWYgKEEucHJvcHNbJ3ZpZXdwb3J0J10gPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcwLUV4dC5hcHBsaWNhdGlvbjogJyArIG1lQS5wcm9wcy54dHlwZSk7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICBFeHQuYXBwbGljYXRpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNeUVXQ0FwcCcsXG4gICAgICAgICAgICAgICAgbGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIEV4dC5WaWV3cG9ydC5hZGQoW21ldGhpcy5jdXJyZW50RWwuQS5leHRdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1sncm91dGVyJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1sncm91dGVyJ10uaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1ldGhpcy5iYXNlLkRJUkVDVElPTiArICcgaW4gbGF1bmNoICcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWV0aGlzLmJhc2UuRElSRUNUSU9OID09ICdCb3R0b21Ub1RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgbGFzdCB0aGluZyB0byBkby4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aGlzLmxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCB8fCB0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgIT0gJ0VYVC0nKSB7XG4gICAgICAgIEEucHJvcHMucmVuZGVyVG8gPSB0aGlzLm5ld0RpdjtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzEtIEV4dC5jcmVhdGU6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSArICcgSFRNTCBwYXJlbnQ6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgICAgICBjb25zb2xlLmRpcihtZUEucHJvcHMpXG4gICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgbWV0aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtZXRoaXMuY3VycmVudEVsLkEuZXh0LmVsLmRvbSwgbWV0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgYXNzZXNzQ2hpbGRyZW4nKTtcbiAgICAgICAgICAgIC8vdmFyIHdjID0gbWVBLmV4dC5lbC5kb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAvL3djLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCczLSBFeHQuY3JlYXRlOiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUgKyAnICBFeHQgcGFyZW50OiAnICsgbWV0aGlzLnBhcmVudEVsTmFtZSk7XG4gICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgbWV0aGlzLmFzc2Vzc0NoaWxkcmVuKG1ldGhpcy5iYXNlLCBtZXRoaXMueHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5hc3Nlc3NDaGlsZHJlbihiYXNlLCB4dHlwZSkge1xuICAgIGNvbnNvbGUubG9nKCdhc3Nlc3NDaGlsZHJlbiBmb3I6ICcgKyB4dHlwZSk7XG4gICAgdmFyIEEgPSB0aGlzLmN1cnJlbnRFbC5BO1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGh0bWwnKTtcbiAgICAgICAgICAgIEEuZXh0LnNldEh0bWwodGhpcy5fZXh0aXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRyb3V0ZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgcm91dGVyJyk7XG4gICAgICAgICAgICBBLmV4dC5zZXRIdG1sKHRoaXMuX2V4dHJvdXRlLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgLy9jaGlsZEl0ZW0uY2hpbGRDbXAgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZXdjOml0ZW0uZ2V0QXR0cmlidXRlKCdld2MnKSwgZWxlbWVudDpFeHQuZ2V0KGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtKSl9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID09IDAgJiZcbiAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZUID09IDAgJiZcbiAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA9PSAwICYmXG4gICAgICAgICF0aGlzLmhhc1BhcmVudCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU29sbycpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkQ2hpbGRyZW4nKTtcbiAgICAgICAgY29uc29sZS5kaXIoQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUuQSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcywgQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdzZW5kIHJlYWR5IGZvciBDSElMRFJFTkNPTVBPTkVOVFNBRERFRCA+IDAnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgICAvLyBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCAmJiB0aGlzLkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPT0gMCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VuZCByZWFkeSBmb3IgJyArIHRoaXMuQS54dHlwZSk7XG4gICAgLy8gICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgLy8gfVxuICAgIC8vaWYgKHRoaXMucGFyZW50RWwgIT0gbnVsbCkge1xuXG4gICAgLy8gaWYgKHRoaXMuaGFzUGFyZW50ICYmXG4gICAgLy8gICAgIHRoaXMucGFyZW50RWwubm9kZU5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJ1xuICAgIC8vICAgICApIHtcblxuICAgIGlmICh0aGlzLmhhc1BhcmVudCkge1xuXG4gICAgICAgIGlmIChiYXNlLkRJUkVDVElPTiA9PSAnVG9wVG9Cb3R0b20nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnVG9wVG9Cb3R0b20nKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFMucHVzaCh0aGlzKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQtLTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnBhcmVudEVsKVxuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcy5wYXJlbnRFbCwgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUyk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5wYXJlbnRFbE5hbWUgKyAnKHBhcmVudCknKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMucGFyZW50RWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUy5wdXNoKHRoaXMuY3VycmVudEVsKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgICAgIH1cbiAgICB9XG59XG5hZGRDaGlsZHJlbihjaGlsZCwgY2hpbGRyZW4pIHtcbiAgICAvL2NvbnNvbGUubG9nKCdhZGRDaGlsZHJlbiBmb3IgJyArIGNoaWxkLnh0eXBlICsgJyAtIG51bSBjaGlsZHJlbjogJyArIGNoaWxkcmVuLmxlbmd0aCk7XG4gICAgLy9mb3IgKHZhciBpID0gY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+IC0xOyBpLS0pIHtcbiAgICAvLyAgICB2YXIgY2hpbGRJdGVtID0geyBwYXJlbnRDbXA6IHt9LCBjaGlsZENtcDoge30gfTtcbiAgICAvLyAgICBjaGlsZEl0ZW0ucGFyZW50Q21wID0gY2hpbGQuY3VycmVudEVsLkEuZXh0O1xuICAgIC8vICAgIGNoaWxkSXRlbS5jaGlsZENtcCA9IGNoaWxkcmVuW2ldLkEuZXh0O1xuICAgIC8vICAgIHRoaXMuYWRkVGhlQ2hpbGQoY2hpbGRJdGVtLnBhcmVudENtcCwgY2hpbGRJdGVtLmNoaWxkQ21wLCBudWxsKTtcbiAgICAvL31cbiAgICBjb25zb2xlLmRpcihjaGlsZHJlbilcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBjaGlsZEl0ZW0gPSB7IHBhcmVudENtcDoge30sIGNoaWxkQ21wOiB7fSB9O1xuICAgICAgICBjaGlsZEl0ZW0ucGFyZW50Q21wID0gdGhpcy5jdXJyZW50RWwuQS5leHQ7XG5cbiAgICAgICAgdmFyIEEyXG4gICAgICAgIGlmIChjaGlsZHJlbltpXS5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBBMiA9IGNoaWxkcmVuW2ldLm5vZGUuQTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEEyID0gY2hpbGRyZW5baV0uQTtcbiAgICAgICAgfVxuICAgICAgICBjaGlsZEl0ZW0uY2hpbGRDbXAgPSBBMi5leHQ7XG4gICAgICAgIC8vY2hpbGRJdGVtLmNoaWxkQ21wID0gY2hpbGRyZW5baV0uY3VycmVudEVsLkEuZXh0O1xuXG4gICAgICAgIHRoaXMuYWRkVGhlQ2hpbGQoY2hpbGRJdGVtLnBhcmVudENtcCwgY2hpbGRJdGVtLmNoaWxkQ21wLCBudWxsKTtcbiAgICB9XG59XG5hZGRUaGVDaGlsZChwYXJlbnRDbXAsIGNoaWxkQ21wLCBsb2NhdGlvbikge1xuICAgIHZhciBwYXJlbnR4dHlwZSA9IHBhcmVudENtcC54dHlwZTtcbiAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlO1xuICAgIC8vY29uc29sZS5sb2coJ2FkZFRoZUNoaWxkOiAnICsgcGFyZW50eHR5cGUgKyAnKCcgKyBwYXJlbnRDbXAuZXh0ICsgJyknICsgJyAtICcgKyBjaGlsZHh0eXBlICsgJygnICsgY2hpbGRDbXAuZXh0ICsgJyknKTtcbiAgICAvL2lmIChjaGlsZHh0eXBlID09ICd3aWRnZXQnKVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BLmV4dC5pbml0aWFsQ29uZmlnLmFsaWduICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyZW50eHR5cGUgIT0gJ3RpdGxlYmFyJyAmJiBwYXJlbnR4dHlwZSAhPSAnZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2xvY2tlZGdyaWQnICYmIHBhcmVudHh0eXBlICE9ICdidXR0b24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKCdDYW4gb25seSB1c2UgYWxpZ24gcHJvcGVydHkgaWYgcGFyZW50IGlzIGEgVGl0bGViYXIgb3IgR3JpZCBvciBCdXR0b24nKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICB2YXIgZGVmYXVsdHBhcmVudCA9IGZhbHNlO1xuICAgIHZhciBkZWZhdWx0Y2hpbGQgPSBmYWxzZTtcbiAgICBzd2l0Y2ggKHBhcmVudHh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ2J1dHRvbic6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdtZW51JzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnYm9vbGVhbmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RlbXBsYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZGF0ZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2RyYWdjb2x1bW4nOlxuICAgICAgICBjYXNlICdudW1iZXJjb2x1bW4nOlxuICAgICAgICBjYXNlICdzZWxlY3Rpb25jb2x1bW4nOlxuICAgICAgICBjYXNlICd0ZXh0Y29sdW1uJzpcbiAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3Jvd251bWJlcmVyJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ3JlbmRlcmVyY2VsbCc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5zZXRDZWxsKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdncmlkJzpcbiAgICAgICAgY2FzZSAnbG9ja2VkZ3JpZCc6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RyZWVjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NoZWNrY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdkYXRlY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdyb3dudW1iZXJlcic6XG4gICAgICAgICAgICAgICAgY2FzZSAnbnVtYmVyY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdib29sZWFuY29sdW1uJzpcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlZ0NvbHMgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5yZWdpc3RlcmVkQ29sdW1ucyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWdDb2xzID0gcGFyZW50Q21wLnJlZ2lzdGVyZWRDb2x1bW5zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydENvbHVtbihsb2NhdGlvbiArIHJlZ0NvbHMsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQobG9jYXRpb24gKyByZWdDb2xzLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICA7XG4gICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgIGNhc2UgJ3Rvb2xiYXInOlxuICAgICAgICBjYXNlICd0aXRsZWJhcic6XG4gICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxvY2F0aW9uID09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChsb2NhdGlvbiwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAndG9vbHRpcCc6XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAncGx1Z2luJzpcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBkZWZhdWx0Y2hpbGQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIGlmIChkZWZhdWx0cGFyZW50ID09IHRydWUgJiYgZGVmYXVsdGNoaWxkID09IHRydWUpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnR4dHlwZSArICcuYWRkKCcgKyBjaGlsZHh0eXBlICsgJyknKVxuICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICB9XG4gICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID4gMCkge1xuICAgIC8vICAgICB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZC0tXG4gICAgLy8gfVxuICAgIC8vIC8vY29uc29sZS5sb2coJ2NoaWxkcmVuWWV0VG9CZURlZmluZWQoYWZ0ZXIpICcgICsgdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQpXG4gICAgLy8gaWYgKHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkID09IDApIHtcbiAgICAvLyAgICAgdGhpcy5wYXJlbnROb2RlLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZWFkeScse2RldGFpbDp7Y21wOiB0aGlzLnBhcmVudE5vZGUuZXh0fX0pKVxuICAgIC8vIH1cbn1cbmF0RW5kKCkge1xuICAgIGNvbnNvbGUubG9nKCcqKiogYXQgZW5kJyk7XG4gICAgY29uc29sZS5sb2coJ3RoaXMgLSAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICBjb25zb2xlLmRpcih0aGlzLmN1cnJlbnRFbC5BKTtcbiAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQgLSAnICsgdGhpcy5wYXJlbnRFbE5hbWUpO1xuICAgICAgICBjb25zb2xlLmRpcih0aGlzLnBhcmVudEVsLkEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ05vIEVYVCBwYXJlbnQnKTtcbiAgICB9XG59XG5nZXQgY3VycmVudEVsKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgIH1cbn1cbmdldEN1cnJlbnRFbE5hbWUoY29tcG9uZW50KSB7XG4gICAgaWYgKGNvbXBvbmVudC5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubm9kZS5ub2RlTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBjb21wb25lbnQubm9kZU5hbWU7XG4gICAgfVxufVxuZ2V0IGN1cnJlbnRFbE5hbWUoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZU5hbWU7XG4gICAgfVxufVxuZ2V0IGlzQW5ndWxhcigpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmdldCBwYXJlbnRFbCgpIHtcbiAgICBpZiAodGhpcy5pc0FuZ3VsYXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlO1xuICAgIH1cbn1cbmdldCBwYXJlbnRFbE5hbWUoKSB7XG4gICAgaWYgKHRoaXMuaXNBbmd1bGFyKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlTmFtZTtcbiAgICB9XG59XG5zZW5kUmVhZHlFdmVudChjb21wb25lbnQpIHtcbiAgICB2YXIgY21wID0gY29tcG9uZW50LmN1cnJlbnRFbC5BLmV4dDtcbiAgICBpZiAoY29tcG9uZW50Ll9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29tcG9uZW50WydyZWFkeSddLmVtaXQoeyBkZXRhaWw6IHsgY21wOiBjbXAgfSB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbXBvbmVudC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVhZHknLCB7IGRldGFpbDogeyBjbXA6IGNtcCB9IH0pKTtcbiAgICB9XG59XG4vLyoqKioqKiogYmFzZSBlbmQgKi9cbmNyZWF0ZVByb3BzKHByb3BlcnRpZXMsIHByb3BlcnRpZXNvYmplY3QsIGV2ZW50cywgZXZlbnRuYW1lcykge1xuICAgIHZhciBwcm9wcyA9IHRoaXMuY3VycmVudEVsLkEucHJvcHM7XG4gICAgcHJvcHMueHR5cGUgPSB0aGlzLnh0eXBlO1xuICAgIGxldCBsaXN0ZW5lcnNQcm92aWRlZCA9IGZhbHNlO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcCA9IHByb3BlcnRpZXNbaV07XG4gICAgICAgIGlmIChwcm9wID09ICdoYW5kbGVyJykge1xuICAgICAgICAgICAgaWYgKHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICAgIGlmICgocHJvcHMueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IHByb3BzLnh0eXBlID09PSAncG9sYXInKSAmJiBwcm9wID09PSAnbGF5b3V0Jykge1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHByb3AgPT0gJ2xpc3RlbmVycycgJiYgdGhpc1twcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIGxpc3RlbmVyc1Byb3ZpZGVkID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnaGFuZGxlcicgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRydWUgPT09IHRoaXNbJ2ZpdFRvUGFyZW50J10pIHtcbiAgICAgICAgcHJvcHMudG9wID0gMCxcbiAgICAgICAgICAgIHByb3BzLmxlZnQgPSAwLFxuICAgICAgICAgICAgcHJvcHMud2lkdGggPSAnMTAwJScsXG4gICAgICAgICAgICBwcm9wcy5oZWlnaHQgPSAnMTAwJSc7XG4gICAgfVxuICAgIGlmICh0aGlzWydjb25maWcnXSAhPT0ge30pIHtcbiAgICAgICAgRXh0LmFwcGx5KHByb3BzLCB0aGlzWydjb25maWcnXSk7XG4gICAgfVxuICAgIGlmICghbGlzdGVuZXJzUHJvdmlkZWQpIHtcbiAgICAgICAgcHJvcHMubGlzdGVuZXJzID0ge307XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgbGV0IGV2ZW50bmFtZSA9IGV2ZW50Lm5hbWU7XG4gICAgICAgICAgICBsZXQgZXZlbnRwYXJhbWV0ZXJzID0gZXZlbnQucGFyYW1ldGVycztcbiAgICAgICAgICAgIG1lLmN1cnJlbnRFbC5BLnByb3BzLmxpc3RlbmVyc1tldmVudG5hbWVdID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2luIHRoZSBldmVudCAnICsgZXZlbnRuYW1lKVxuICAgICAgICAgICAgICAgIGxldCBwYXJhbWV0ZXJzID0gZXZlbnRwYXJhbWV0ZXJzO1xuICAgICAgICAgICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKTtcbiAgICAgICAgICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cyk7XG4gICAgICAgICAgICAgICAgbGV0IGVtaXRwYXJtcyA9IHt9O1xuICAgICAgICAgICAgICAgIGlmIChtZS5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbWl0cGFybXNbcGFybXNbaV1dID0gYXJnc1tpXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZW1pdHBhcm1zKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vZHVwPz9cbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGV2ZW50cy5mb3JFYWNoKChldmVudCwgbikgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnRdID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cblxuXG5cbiAgICBiYXNlT25DaGFuZ2VzKGNoYW5nZXMpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoYW5nZXMpXG4gICAgICAgIGxldCBjaGFuZ2VzTXNncyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBsZXQgdmVyYiA9ICcnO1xuICAgICAgICAgICAgaWYgKGNoYW5nZXNbcHJvcE5hbWVdLmZpcnN0Q2hhbmdlID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgdmVyYiA9ICdpbml0aWFsaXplZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB2ZXJiID0gJ2NoYW5nZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsLkEgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmRpcih0aGlzLmN1cnJlbnRFbC5BLmV4dClcbiAgICAgICAgICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpO1xuICAgICAgICAgICAgICAgIHZhciBzZXRGdW5jdGlvbiA9ICdzZXQnICsgY2FwUHJvcE5hbWU7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhzZXRGdW5jdGlvbilcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RWwuQS5leHRbc2V0RnVuY3Rpb25dICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5BLmV4dFtzZXRGdW5jdGlvbl0odmFsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc2V0RnVuY3Rpb24gKyAnIG5vdCBmb3VuZCBmb3IgJyArIHRoaXMuY3VycmVudEVsLkEuZXh0Lnh0eXBlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAodmVyYiA9PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2hhbmdlc01zZ3MucHVzaChgJCAkIHRvIFwiJFwiYCk7XG4gICAgICAgIH1cbiAgICAgICAgLy9jb25zb2xlLmxvZyhgT25DaGFuZ2VzOiAke2NoYW5nZXNNc2dzLmpvaW4oJzsgJyl9YClcbiAgICB9XG5cbiAgICBuZ09uRGVzdHJveSgpIHtcbiAgICAgICAgdmFyIGNoaWxkQ21wO1xuICAgICAgICB2YXIgcGFyZW50Q21wO1xuICAgICAgICBjb25zb2xlLmRpcih0aGlzKVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hpbGRDbXAgPSB0aGlzLmN1cnJlbnRFbC5BLmV4dDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAgPSB0aGlzLnBhcmVudEVsLkEuZXh0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDbXAgPT0gdW5kZWZpbmVkIHx8IHBhcmVudENtcCA9PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vbWVudSBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdjYXJvdXNlbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Nhcm91c2VsIHBhcmVudCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdncmlkJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnY29sdW1uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnZ3JpZC9jb2x1bW4gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3NlZ21lbnRlZGJ1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NlZ21lbnRlZGJ1dHRvbi9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi90b29sdGlwIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3RpdGxlYmFyJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGl0bGViYXIvYnV0dG9uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3RpdGxlYmFyJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnc2VhcmNoZmllbGQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9zZWFyY2hmaWVsZCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAucmVtb3ZlKFtjaGlsZENtcF0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2hpbGRDbXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkZXN0cm95JylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgICB9XG4gICAgfVxufSJdfQ==