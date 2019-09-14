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
        //console.log(this.base.DIRECTION);
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
    }
    assessChildren(base, xtype) {
        //console.log('assessChildren for: ' + xtype);
        var A = this.currentEl.A;
        if (this._extitems != undefined) {
            if (this._extitems.length == 1) {
                //console.log('set html');
                //A.ext.setHtml(this._extitem.nativeElement);
                //console.log(this._extitem)
                var el = Ext.get(this._extitem.nativeElement);
                //var w = Ext.create({xtype:'widget', element: this._extitem});
                var w = Ext.create({ xtype: 'widget', element: el });
                //console.log(w)
                //A.ext.add(w);
                this.addTheChild(A.ext, w, null);
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
        if (!this.hasParent) {
            if (base.DIRECTION == 'BottomToTop') {
                //console.log('5- ready event for ' + this.currentElName);
                this.sendReadyEvent(this);
            }
        }
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
    }
    addChildren(child, children) {
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
    }
    addTheChild(parentCmp, childCmp, location) {
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
    }
    atEnd() {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2VuZy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFHQSxPQUFPLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsU0FBUyxFQUVaLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE1BQU0sT0FBTyxPQUFPO0lBbUNoQixZQUNJLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQXVCO1FBRHRCLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBVTtRQUU5QixJQUFJLENBQUMsSUFBSSxHQUFHLGFBQWEsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUVoQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDNUMsNENBQTRDO1FBQzVDLDZCQUE2QjtRQUU3QixJQUFJLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLGFBQWEsRUFBRSxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDO1FBQzVCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUN0QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsa0JBQWtCLENBQUM7UUFDM0MsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDO1FBQzlCLElBQUksQ0FBQyxVQUFVLEdBQUcsUUFBUSxDQUFDLFVBQVUsQ0FBQztRQUV0QyxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUVwQixJQUFJLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQVUsRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUM1QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7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Q0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzdCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztxQkFDdEI7YUFDUjtpQkFDSTtnQkFDRCxJQUFJLFFBQVEsSUFBSSxTQUFTLEVBQUU7b0JBQ3ZCLFFBQVEsQ0FBQyxPQUFPLEVBQUUsQ0FBQztpQkFDdEI7cUJBQ0k7b0JBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQTtpQkFDNUI7YUFDSjtTQUNKO1FBQ0QsT0FBTyxDQUFDLEVBQUU7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2pCLDBCQUEwQjtZQUMxQiw0QkFBNEI7WUFDNUIsMkJBQTJCO1lBQzNCLDBCQUEwQjtTQUM3QjtJQUNMLENBQUM7O0FBaHRCTSxhQUFLLEdBQVEsQ0FBQyxDQUFDO0FBQ2YsaUJBQVMsR0FBUSxFQUFFLENBQUM7QUF3QmtCO0lBQTVDLFlBQVksQ0FBQyxVQUFVLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7OzBDQUFnQjtBQUMvQjtJQUE1QixlQUFlLENBQUMsVUFBVSxDQUFDO3NDQUFhLFNBQVM7MkNBQU07QUFDWjtJQUEzQyxZQUFZLENBQUMsU0FBUyxFQUFDLEVBQUUsTUFBTSxFQUFHLEtBQUssRUFBRSxDQUFDOzt5Q0FBZTtBQUM5QjtJQUEzQixlQUFlLENBQUMsU0FBUyxDQUFDO3NDQUFZLFNBQVM7MENBQU07QUFDNUI7SUFBekIsZUFBZSxDQUFDLE9BQU8sQ0FBQztzQ0FBbUIsU0FBUztpREFBVSIsInNvdXJjZXNDb250ZW50IjpbIi8vU2F0IFNlcCAxNCAyMDE5IDExOjM5OjE4IEdNVC0wNDAwIChFRFQpXG5kZWNsYXJlIHZhciBFeHQ6IGFueVxuXG5pbXBvcnQge1xuICAgIEV2ZW50RW1pdHRlcixcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBFbmdCYXNlIHtcbiAgICBzdGF0aWMgY291bnQ6IGFueSA9IDA7XG4gICAgc3RhdGljIERJUkVDVElPTjogYW55ID0gJyc7XG5cbiAgICBwdWJsaWMgZXh0OiBhbnlcbiAgICBuZXdEaXY6IGFueVxuXG4gICAgeHR5cGU6IGFueVxuICAgIHByb3BlcnRpZXM6IGFueVxuICAgIHByb3BlcnRpZXNvYmplY3Q6IGFueVxuICAgIGV2ZW50czogYW55XG4gICAgZXZlbnRuYW1lczogYW55XG5cblxuICAgIEE6IGFueTtcbiAgICBwcml2YXRlIG5vZGU6IGFueVxuICAgIHBhcmVudE5vZGU6IGFueVxuICAgIGJhc2U6IGFueVxuICAgIG5vZGVOYW1lOiBhbnlcblxuICAgIGV3Y0NoaWxkcmVuOiBhbnlcbiAgICByYXdDaGlsZHJlbjogYW55XG4gICAgaGFzUGFyZW50OiBhbnlcbiAgICBjaGlsZHJlbjogYW55XG4gICAgbGFzdDogYW55XG5cbiAgICBAQ29udGVudENoaWxkKCdleHRyb3V0ZScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0cm91dGU6IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRyb3V0ZScpIF9leHRyb3V0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkcmVuKEVuZ0Jhc2UpIF9jaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBnZXQgY2hpbGRDb21wb25lbnRzKCk6IEVuZ0Jhc2VbXSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZENvbXBvbmVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBuYXRpdmVFbGVtZW50OiBhbnksXG4gICAgICAgIHByaXZhdGUgbWV0YURhdGE6IGFueSxcbiAgICAgICAgcHVibGljIGhvc3RDb21wb25lbnQgOiBFbmdCYXNlXG4gICAgKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IG5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IGhvc3RDb21wb25lbnQ7XG5cbiAgICAgICAgdGhpcy5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgLy92YXIgdCA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKFwibmV3RGl2XCIpO1xuICAgICAgICAvL3RoaXMubmV3RGl2LmFwcGVuZENoaWxkKHQpO1xuXG4gICAgICAgIHRoaXMubm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGhpcy5uZXdEaXYpO1xuICAgICAgICB0aGlzLnh0eXBlID0gbWV0YURhdGEuWFRZUEU7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IG1ldGFEYXRhLlBST1BFUlRJRVM7XG4gICAgICAgIHRoaXMucHJvcGVydGllc29iamVjdCA9ICdwcm9wZXJ0aWVzb2JqZWN0JztcbiAgICAgICAgdGhpcy5ldmVudHMgPSBtZXRhRGF0YS5FVkVOVFM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcyA9IG1ldGFEYXRhLkVWRU5UTkFNRVM7XG5cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcblxuICAgICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICg8YW55PnRoaXMuY3VycmVudEVsKVtldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGJhc2VPbkluaXQobWV0YURhdGEpIHsgfVxuICAgIGJhc2VBZnRlclZpZXdJbml0KG1ldGFEYXRhKSB7XG4gICAgICAgIHRoaXMuaW5pdE1lKClcbiAgICB9XG5cbi8vKioqKioqKiBiYXNlIHN0YXJ0ICovXG5pbml0TWUoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnJyk7XG4gICAgLy9jb25zb2xlLmxvZygnKioqIGluaXRNZSBmb3IgJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgdGhpcy5jcmVhdGVSYXdDaGlsZHJlbigpO1xuICAgIHRoaXMuc2V0SGFzUGFyZW50KCk7XG4gICAgdGhpcy5zZXREaXJlY3Rpb24oKTtcbiAgICB0aGlzLmZpZ3VyZU91dEEoKTtcbiAgICB0aGlzLmNyZWF0ZVByb3BzKHRoaXMucHJvcGVydGllcywgdGhpcy5wcm9wZXJ0aWVzb2JqZWN0LCB0aGlzLmV2ZW50cywgdGhpcy5ldmVudG5hbWVzKTtcbiAgICB0aGlzLmNyZWF0ZUV4dENvbXBvbmVudCgpO1xuICAgIC8vdGhpcy5hc3Nlc3NDaGlsZHJlbih0aGlzLmJhc2UsIHRoaXMueHR5cGUpO1xuICAgIC8vdGhpcy5hdEVuZCgpO1xuICAgIC8vaWYgKHRoaXMubGFzdCA9PSB0cnVlKXtcbiAgICAvLyAgICBjb25zb2xlLmxvZygndGhpcyBpcyB0aGUgZW5kLi4uJylcbiAgICAvL31cbn1cbjtcbmNyZWF0ZVJhd0NoaWxkcmVuKCkge1xuICAgIC8vY29uc29sZS5sb2coJ2NyZWF0ZVJhd0NoaWxkcmVuJylcbiAgICBpZiAodGhpcy5jdXJyZW50RWwuaXNBbmd1bGFyKSB7XG4gICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuID0gdGhpcy5jdXJyZW50RWwuY2hpbGRDb21wb25lbnRzO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW4gPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbCh0aGlzLmN1cnJlbnRFbC5jaGlsZHJlbik7XG4gICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuID0gW107XG4gICAgICAgIHZhciBudW0gPSAwO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW5baV0uWFRZUEUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW5bbnVtXSA9IHt9O1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0gPSB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dLmN1cnJlbnRDb21wb25lbnQgPSB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dLm5vZGUgPSB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXTtcbiAgICAgICAgICAgICAgICBudW0rKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKCdyYXdDaGlsZHJlbicpXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbilcbn1cbnNldEhhc1BhcmVudCgpIHtcbiAgICB2YXIgaGFzUGFyZW50O1xuICAgIGlmICh0aGlzLnBhcmVudEVsID09IG51bGwpIHtcbiAgICAgICAgdGhpcy5oYXNQYXJlbnQgPSBmYWxzZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nKSB7XG4gICAgICAgICAgICB0aGlzLmhhc1BhcmVudCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmhhc1BhcmVudCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vcmV0dXJuIGhhc1BhcmVudFxufVxuc2V0RGlyZWN0aW9uKCkge1xuICAgIGlmICh0aGlzLmJhc2UuY291bnQgPT0gMCkge1xuICAgICAgICB0aGlzLmJhc2UuY291bnQrKztcbiAgICAgICAgaWYgKHRoaXMuaGFzUGFyZW50ID09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ1RvcFRvQm90dG9tJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLkRJUkVDVElPTiA9ICdCb3R0b21Ub1RvcCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJhc2UuRElSRUNUSU9OID0gJ1RvcFRvQm90dG9tJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuYmFzZS5ESVJFQ1RJT04pO1xufVxuZmlndXJlT3V0QSgpIHtcbiAgICAvL2lmICh0aGlzLmhhc1BhcmVudCAmJiB0aGlzLnBhcmVudEVsLkEgPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKHRoaXMuaGFzUGFyZW50ICYmXG4gICAgICAgIHRoaXMucGFyZW50RWwuQSA9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgdGhpcy5wYXJlbnRFbC5ub2RlTmFtZS5zdWJzdHJpbmcoMCwgNCkgPT0gJ0VYVC0nXG4gICAgICAgICkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5wYXJlbnRFbCk7XG4gICAgfVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BID09IHVuZGVmaW5lZCkge1xuICAgICAgICB0aGlzLmluaXQodGhpcy5jdXJyZW50RWwpO1xuICAgIH1cbn1cbmluaXQoY29tcG9uZW50KSB7XG4gICAgY29tcG9uZW50LkEgPSB7fTtcbiAgICBjb21wb25lbnQuQS5wcm9wcyA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnh0eXBlID0gY29tcG9uZW50Lnh0eXBlO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IFtdO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID0gMDtcbiAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA9IDA7XG4gICAgaWYgKHRoaXMuYmFzZS5ESVJFQ1RJT04gPT0gJ1RvcFRvQm90dG9tJykge1xuICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFMgPSB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbjtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnQuZ2V0Q3VycmVudEVsTmFtZShjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNbaV0pLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULScpIHtcbiAgICAgICAgICAgICAgICBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPSBjb21wb25lbnQuQS5DSElMRFJFTkNPTVBPTkVOVFNDT1VOVDtcbiAgICB9XG59XG5jcmVhdGVFeHRDb21wb25lbnQoKSB7XG4gICAgdmFyIEEgPSB0aGlzLmN1cnJlbnRFbC5BO1xuICAgIHZhciBtZUEgPSBBO1xuICAgIHZhciBtZXRoaXMgPSB0aGlzO1xuICAgIGlmIChBLnByb3BzWyd2aWV3cG9ydCddID09IHRydWUpIHtcbiAgICAgICAgdGhpcy5uZXdEaXYucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIG1ldGhpcy5jdXJyZW50RWwuQS5leHQgPSBFeHQuY3JlYXRlKG1lQS5wcm9wcyk7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCcwLUV4dC5hcHBsaWNhdGlvbjogJyArIG1lQS5wcm9wcy54dHlwZSk7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICBFeHQuYXBwbGljYXRpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNeUVXQ0FwcCcsXG4gICAgICAgICAgICAgICAgbGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIEV4dC5WaWV3cG9ydC5hZGQoW21ldGhpcy5jdXJyZW50RWwuQS5leHRdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1sncm91dGVyJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1sncm91dGVyJ10uaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWV0aGlzLmJhc2UuRElSRUNUSU9OICsgJyBpbiBsYXVuY2ggJyk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtZXRoaXMuYmFzZS5ESVJFQ1RJT04gPT0gJ0JvdHRvbVRvVG9wJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGhlIGxhc3QgdGhpbmcgdG8gZG8uLi4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhpcy5sYXN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ldGhpcy5zZW5kUmVhZHlFdmVudChtZXRoaXMpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCB8fCB0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgIT0gJ0VYVC0nKSB7XG4gICAgICAgIEEucHJvcHMucmVuZGVyVG8gPSB0aGlzLm5ld0RpdjtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnMS0gRXh0LmNyZWF0ZTogJyArIG1ldGhpcy5jdXJyZW50RWxOYW1lICsgJyBIVE1MIHBhcmVudDogJyArIG1ldGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgICAgIC8vY29uc29sZS5kaXIobWVBLnByb3BzKVxuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIG1ldGhpcy5uZXdEaXYucGFyZW50Tm9kZS5yZXBsYWNlQ2hpbGQobWV0aGlzLmN1cnJlbnRFbC5BLmV4dC5lbC5kb20sIG1ldGhpcy5uZXdEaXYpO1xuICAgICAgICAgICAgbWV0aGlzLmFzc2Vzc0NoaWxkcmVuKG1ldGhpcy5iYXNlLCBtZXRoaXMueHR5cGUpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYWZ0ZXIgYXNzZXNzQ2hpbGRyZW4nKTtcbiAgICAgICAgICAgIC8vdmFyIHdjID0gbWVBLmV4dC5lbC5kb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAvL3djLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzMtIEV4dC5jcmVhdGU6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSArICcgIEV4dCBwYXJlbnQ6ICcgKyBtZXRoaXMucGFyZW50RWxOYW1lKTtcbiAgICAgICAgICAgIG1ldGhpcy5jdXJyZW50RWwuQS5leHQgPSBFeHQuY3JlYXRlKG1lQS5wcm9wcyk7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmFzc2Vzc0NoaWxkcmVuKGJhc2UsIHh0eXBlKSB7XG4gICAgLy9jb25zb2xlLmxvZygnYXNzZXNzQ2hpbGRyZW4gZm9yOiAnICsgeHR5cGUpO1xuICAgIHZhciBBID0gdGhpcy5jdXJyZW50RWwuQTtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRpdGVtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2V0IGh0bWwnKTtcbiAgICAgICAgICAgIC8vQS5leHQuc2V0SHRtbCh0aGlzLl9leHRpdGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9leHRpdGVtKVxuICAgICAgICAgICAgdmFyIGVsID0gRXh0LmdldCh0aGlzLl9leHRpdGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgLy92YXIgdyA9IEV4dC5jcmVhdGUoe3h0eXBlOid3aWRnZXQnLCBlbGVtZW50OiB0aGlzLl9leHRpdGVtfSk7XG4gICAgICAgICAgICB2YXIgdyA9IEV4dC5jcmVhdGUoe3h0eXBlOid3aWRnZXQnLCBlbGVtZW50OiBlbH0pO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyh3KVxuICAgICAgICAgICAgLy9BLmV4dC5hZGQodyk7XG4gICAgICAgICAgICB0aGlzLmFkZFRoZUNoaWxkKEEuZXh0LCB3LCBudWxsKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRyb3V0ZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NldCByb3V0ZXInKTtcbiAgICAgICAgICAgIEEuZXh0LnNldEh0bWwodGhpcy5fZXh0cm91dGUubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICAvL2NoaWxkSXRlbS5jaGlsZENtcCA9IEV4dC5jcmVhdGUoe3h0eXBlOid3aWRnZXQnLCBld2M6aXRlbS5nZXRBdHRyaWJ1dGUoJ2V3YycpLCBlbGVtZW50OkV4dC5nZXQoaXRlbS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGl0ZW0pKX0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKEEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPT0gMCAmJlxuICAgICAgICBBLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPT0gMCAmJlxuICAgICAgICBBLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID09IDAgJiZcbiAgICAgICAgIXRoaXMuaGFzUGFyZW50KSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ1NvbG8nKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnMS0gcmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID4gMCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdhZGRDaGlsZHJlbicpO1xuICAgICAgICAvL2NvbnNvbGUuZGlyKEEuQ0hJTERSRU5DT01QT05FTlRTKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLm5vZGUuQSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcywgQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdzZW5kIHJlYWR5IGZvciBDSElMRFJFTkNPTVBPTkVOVFNBRERFRCA+IDAnKTtcbiAgICAgICAgLy9jb25zb2xlLmxvZygncmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuXG5cblxuXG4gICAgICAgIC8vdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAgICAgLy90aGlzLm5vZGUucmVtb3ZlKCk7ID8/IGlzIHRoaXMgbmVlZGVkPz9cblxuXG5cbiAgICB9XG4gICAgLy8gZWxzZSBpZiAodGhpcy5wYXJlbnROb2RlICE9IG51bGwgJiYgdGhpcy5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID09IDApIHtcbiAgICAvLyAgICAgY29uc29sZS5sb2coJ3NlbmQgcmVhZHkgZm9yICcgKyB0aGlzLkEueHR5cGUpO1xuICAgIC8vICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgIC8vIH1cbiAgICAvL2lmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcblxuICAgIC8vIGlmICh0aGlzLmhhc1BhcmVudCAmJlxuICAgIC8vICAgICB0aGlzLnBhcmVudEVsLm5vZGVOYW1lLnN1YnN0cmluZygwLCA0KSA9PSAnRVhULSdcbiAgICAvLyAgICAgKSB7XG5cbiAgICBpZiAoIXRoaXMuaGFzUGFyZW50KSB7XG4gICAgICAgIGlmIChiYXNlLkRJUkVDVElPTiA9PSAnQm90dG9tVG9Ub3AnKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKCc1LSByZWFkeSBldmVudCBmb3IgJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgICAgICB9XG4gICAgfVxuXG5cblxuXG4gICAgaWYgKHRoaXMuaGFzUGFyZW50KSB7XG5cbiAgICAgICAgaWYgKGJhc2UuRElSRUNUSU9OID09ICdUb3BUb0JvdHRvbScpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ1RvcFRvQm90dG9tJyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTLnB1c2godGhpcyk7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTQURERUQrKztcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZULS07XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0xFRlQgPT0gMCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2codGhpcy5wYXJlbnRFbClcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENoaWxkcmVuKHRoaXMucGFyZW50RWwsIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJzMtIHJlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5wYXJlbnRFbE5hbWUgKyAnKHBhcmVudCknKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMucGFyZW50RWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUy5wdXNoKHRoaXMuY3VycmVudEVsKTtcbiAgICAgICAgICAgIHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCsrO1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnNC0gcmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmFkZENoaWxkcmVuKGNoaWxkLCBjaGlsZHJlbikge1xuICAgIC8vY29uc29sZS5sb2coJ2FkZENoaWxkcmVuIGZvciAnICsgY2hpbGQueHR5cGUgKyAnIC0gbnVtIGNoaWxkcmVuOiAnICsgY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAvL2ZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgIC8vICAgIHZhciBjaGlsZEl0ZW0gPSB7IHBhcmVudENtcDoge30sIGNoaWxkQ21wOiB7fSB9O1xuICAgIC8vICAgIGNoaWxkSXRlbS5wYXJlbnRDbXAgPSBjaGlsZC5jdXJyZW50RWwuQS5leHQ7XG4gICAgLy8gICAgY2hpbGRJdGVtLmNoaWxkQ21wID0gY2hpbGRyZW5baV0uQS5leHQ7XG4gICAgLy8gICAgdGhpcy5hZGRUaGVDaGlsZChjaGlsZEl0ZW0ucGFyZW50Q21wLCBjaGlsZEl0ZW0uY2hpbGRDbXAsIG51bGwpO1xuICAgIC8vfVxuICAgIC8vY29uc29sZS5kaXIoY2hpbGRyZW4pXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjaGlsZHJlbi5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgY2hpbGRJdGVtID0geyBwYXJlbnRDbXA6IHt9LCBjaGlsZENtcDoge30gfTtcbiAgICAgICAgY2hpbGRJdGVtLnBhcmVudENtcCA9IHRoaXMuY3VycmVudEVsLkEuZXh0O1xuXG4gICAgICAgIHZhciBBMlxuICAgICAgICBpZiAoY2hpbGRyZW5baV0uX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgQTIgPSBjaGlsZHJlbltpXS5ub2RlLkE7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBMiA9IGNoaWxkcmVuW2ldLkE7XG4gICAgICAgIH1cbiAgICAgICAgY2hpbGRJdGVtLmNoaWxkQ21wID0gQTIuZXh0O1xuICAgICAgICAvL2NoaWxkSXRlbS5jaGlsZENtcCA9IGNoaWxkcmVuW2ldLmN1cnJlbnRFbC5BLmV4dDtcblxuICAgICAgICB0aGlzLmFkZFRoZUNoaWxkKGNoaWxkSXRlbS5wYXJlbnRDbXAsIGNoaWxkSXRlbS5jaGlsZENtcCwgbnVsbCk7XG4gICAgfVxufVxuYWRkVGhlQ2hpbGQocGFyZW50Q21wLCBjaGlsZENtcCwgbG9jYXRpb24pIHtcbiAgICB2YXIgcGFyZW50eHR5cGUgPSBwYXJlbnRDbXAueHR5cGU7XG4gICAgdmFyIGNoaWxkeHR5cGUgPSBjaGlsZENtcC54dHlwZTtcbiAgICAvL2NvbnNvbGUubG9nKCdhZGRUaGVDaGlsZDogJyArIHBhcmVudHh0eXBlICsgJygnICsgcGFyZW50Q21wLmV4dCArICcpJyArICcgLSAnICsgY2hpbGR4dHlwZSArICcoJyArIGNoaWxkQ21wLmV4dCArICcpJyk7XG4gICAgLy9pZiAoY2hpbGR4dHlwZSA9PSAnd2lkZ2V0JylcbiAgICBpZiAodGhpcy5jdXJyZW50RWwuQS5leHQuaW5pdGlhbENvbmZpZy5hbGlnbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHBhcmVudHh0eXBlICE9ICd0b29sdGlwJyAmJiBwYXJlbnR4dHlwZSAhPSAndGl0bGViYXInICYmIHBhcmVudHh0eXBlICE9ICdncmlkJyAmJiBwYXJlbnR4dHlwZSAhPSAnbG9ja2VkZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbiBvbmx5IHVzZSBhbGlnbiBwcm9wZXJ0eSBpZiBwYXJlbnQgaXMgYSBUaXRsZWJhciBvciBHcmlkIG9yIEJ1dHRvbicpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIHZhciBkZWZhdWx0cGFyZW50ID0gZmFsc2U7XG4gICAgdmFyIGRlZmF1bHRjaGlsZCA9IGZhbHNlO1xuICAgIHN3aXRjaCAocGFyZW50eHR5cGUpIHtcbiAgICAgICAgY2FzZSAnYnV0dG9uJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ21lbnUnOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdib29sZWFuY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY2hlY2tjb2x1bW4nOlxuICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgY2FzZSAndGVtcGxhdGVjb2x1bW4nOlxuICAgICAgICBjYXNlICdncmlkY29sdW1uJzpcbiAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgY2FzZSAndGVtcGxhdGVjb2x1bW4nOlxuICAgICAgICBjYXNlICdkYXRlY29sdW1uJzpcbiAgICAgICAgY2FzZSAnZHJhZ2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ251bWJlcmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3NlbGVjdGlvbmNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RleHRjb2x1bW4nOlxuICAgICAgICBjYXNlICd0cmVlY29sdW1uJzpcbiAgICAgICAgY2FzZSAncm93bnVtYmVyZXInOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAncmVuZGVyZXJjZWxsJzpcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldENlbGwoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2dyaWQnOlxuICAgICAgICBjYXNlICdsb2NrZWRncmlkJzpcbiAgICAgICAgICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAndHJlZWNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAndGV4dGNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnY2hlY2tjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2RhdGVjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ3Jvd251bWJlcmVyJzpcbiAgICAgICAgICAgICAgICBjYXNlICdudW1iZXJjb2x1bW4nOlxuICAgICAgICAgICAgICAgIGNhc2UgJ2Jvb2xlYW5jb2x1bW4nOlxuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09ICdncmlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVnQ29scyA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLnJlZ2lzdGVyZWRDb2x1bW5zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlZ0NvbHMgPSBwYXJlbnRDbXAucmVnaXN0ZXJlZENvbHVtbnMubGVuZ3RoO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09ICdncmlkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0Q29sdW1uKGxvY2F0aW9uICsgcmVnQ29scywgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChsb2NhdGlvbiArIHJlZ0NvbHMsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgfVxuICAgIDtcbiAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgY2FzZSAndG9vbGJhcic6XG4gICAgICAgIGNhc2UgJ3RpdGxlYmFyJzpcbiAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAobG9jYXRpb24gPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGxvY2F0aW9uLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICd0b29sdGlwJzpcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlICdwbHVnaW4nOlxuICAgICAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcCk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIGRlZmF1bHRjaGlsZCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgaWYgKGRlZmF1bHRwYXJlbnQgPT0gdHJ1ZSAmJiBkZWZhdWx0Y2hpbGQgPT0gdHJ1ZSkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKHBhcmVudHh0eXBlICsgJy5hZGQoJyArIGNoaWxkeHR5cGUgKyAnKScpXG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgIH1cbiAgICAvLyBpZiAodGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQgPiAwKSB7XG4gICAgLy8gICAgIHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkLS1cbiAgICAvLyB9XG4gICAgLy8gLy9jb25zb2xlLmxvZygnY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZChhZnRlcikgJyAgKyB0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZClcbiAgICAvLyBpZiAodGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQgPT0gMCkge1xuICAgIC8vICAgICB0aGlzLnBhcmVudE5vZGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JlYWR5Jyx7ZGV0YWlsOntjbXA6IHRoaXMucGFyZW50Tm9kZS5leHR9fSkpXG4gICAgLy8gfVxufVxuYXRFbmQoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnKioqIGF0IGVuZCcpO1xuICAgIC8vY29uc29sZS5sb2coJ3RoaXMgLSAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAvL2NvbnNvbGUuZGlyKHRoaXMuY3VycmVudEVsLkEpO1xuICAgIGlmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50IC0gJyArIHRoaXMucGFyZW50RWxOYW1lKTtcbiAgICAgICAgLy9jb25zb2xlLmRpcih0aGlzLnBhcmVudEVsLkEpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZygnTm8gRVhUIHBhcmVudCcpO1xuICAgIH1cbn1cbmdldCBjdXJyZW50RWwoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfVxufVxuZ2V0Q3VycmVudEVsTmFtZShjb21wb25lbnQpIHtcbiAgICBpZiAoY29tcG9uZW50Ll9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5ub2RlLm5vZGVOYW1lO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGNvbXBvbmVudC5ub2RlTmFtZTtcbiAgICB9XG59XG5nZXQgY3VycmVudEVsTmFtZSgpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5ub2RlTmFtZTtcbiAgICB9XG59XG5nZXQgaXNBbmd1bGFyKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuZ2V0IHBhcmVudEVsKCkge1xuICAgIGlmICh0aGlzLmlzQW5ndWxhcikge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubm9kZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGU7XG4gICAgfVxufVxuZ2V0IHBhcmVudEVsTmFtZSgpIHtcbiAgICBpZiAodGhpcy5pc0FuZ3VsYXIpIHtcbiAgICAgICAgaWYgKHRoaXMucGFyZW50Tm9kZSA9PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcy5wYXJlbnROb2RlLm5vZGVOYW1lO1xuICAgIH1cbn1cbnNlbmRSZWFkeUV2ZW50KGNvbXBvbmVudCkge1xuICAgIHZhciBjbXAgPSBjb21wb25lbnQuY3VycmVudEVsLkEuZXh0O1xuICAgIGlmIChjb21wb25lbnQuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBjb21wb25lbnRbJ3JlYWR5J10uZW1pdCh7IGRldGFpbDogeyBjbXA6IGNtcCB9IH0pO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgY29tcG9uZW50LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdyZWFkeScsIHsgZGV0YWlsOiB7IGNtcDogY21wIH0gfSkpO1xuICAgIH1cbn1cbi8vKioqKioqKiBiYXNlIGVuZCAqL1xuY3JlYXRlUHJvcHMocHJvcGVydGllcywgcHJvcGVydGllc29iamVjdCwgZXZlbnRzLCBldmVudG5hbWVzKSB7XG4gICAgdmFyIHByb3BzID0gdGhpcy5jdXJyZW50RWwuQS5wcm9wcztcbiAgICBwcm9wcy54dHlwZSA9IHRoaXMueHR5cGU7XG4gICAgbGV0IGxpc3RlbmVyc1Byb3ZpZGVkID0gZmFsc2U7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wID0gcHJvcGVydGllc1tpXTtcbiAgICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgICAgICBpZiAodGhpc1twcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgICAgaWYgKChwcm9wcy54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgcHJvcHMueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocHJvcCA9PSAnbGlzdGVuZXJzJyAmJiB0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgbGlzdGVuZXJzUHJvdmlkZWQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgaWYgKHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50Jykge1xuICAgICAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodHJ1ZSA9PT0gdGhpc1snZml0VG9QYXJlbnQnXSkge1xuICAgICAgICBwcm9wcy50b3AgPSAwLFxuICAgICAgICAgICAgcHJvcHMubGVmdCA9IDAsXG4gICAgICAgICAgICBwcm9wcy53aWR0aCA9ICcxMDAlJyxcbiAgICAgICAgICAgIHByb3BzLmhlaWdodCA9ICcxMDAlJztcbiAgICB9XG4gICAgaWYgKHRoaXNbJ2NvbmZpZyddICE9PSB7fSkge1xuICAgICAgICBFeHQuYXBwbHkocHJvcHMsIHRoaXNbJ2NvbmZpZyddKTtcbiAgICB9XG4gICAgaWYgKCFsaXN0ZW5lcnNQcm92aWRlZCkge1xuICAgICAgICBwcm9wcy5saXN0ZW5lcnMgPSB7fTtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICBsZXQgZXZlbnRuYW1lID0gZXZlbnQubmFtZTtcbiAgICAgICAgICAgIGxldCBldmVudHBhcmFtZXRlcnMgPSBldmVudC5wYXJhbWV0ZXJzO1xuICAgICAgICAgICAgbWUuY3VycmVudEVsLkEucHJvcHMubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaW4gdGhlIGV2ZW50ICcgKyBldmVudG5hbWUpXG4gICAgICAgICAgICAgICAgbGV0IHBhcmFtZXRlcnMgPSBldmVudHBhcmFtZXRlcnM7XG4gICAgICAgICAgICAgICAgbGV0IHBhcm1zID0gcGFyYW1ldGVycy5zcGxpdCgnLCcpO1xuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKTtcbiAgICAgICAgICAgICAgICBsZXQgZW1pdHBhcm1zID0ge307XG4gICAgICAgICAgICAgICAgaWYgKG1lLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy9kdXA/P1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgZXZlbnRzLmZvckVhY2goKGV2ZW50LCBuKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgdGhpc1tldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuXG5cblxuICAgIGJhc2VPbkNoYW5nZXMoY2hhbmdlcykge1xuICAgICAgICAvL2NvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICAgICAgbGV0IGNoYW5nZXNNc2dzID0gW107XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGxldCB2ZXJiID0gJyc7XG4gICAgICAgICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICB2ZXJiID0gJ2luaXRpYWxpemVkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHZlcmIgPSAnY2hhbmdlZCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuXG4gICAgICAgICAgICBpZiAodGhpcy5jdXJyZW50RWwuQSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUuZGlyKHRoaXMuY3VycmVudEVsLkEuZXh0KVxuICAgICAgICAgICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgdmFyIHNldEZ1bmN0aW9uID0gJ3NldCcgKyBjYXBQcm9wTmFtZTtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHNldEZ1bmN0aW9uKVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BLmV4dFtzZXRGdW5jdGlvbl0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLkEuZXh0W3NldEZ1bmN0aW9uXSh2YWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihzZXRGdW5jdGlvbiArICcgbm90IGZvdW5kIGZvciAnICsgdGhpcy5jdXJyZW50RWwuQS5leHQueHR5cGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICh2ZXJiID09ICdjaGFuZ2VkJykge1xuICAgICAgICAgICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZygnY2hhbmdlIG5lZWRlZCBhbmQgZXh0IG5vdCBkZWZpbmVkJylcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjaGFuZ2VzTXNncy5wdXNoKGAkICQgdG8gXCIkXCJgKTtcbiAgICAgICAgfVxuICAgICAgICAvL2NvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICAgIH1cblxuICAgIG5nT25EZXN0cm95KCkge1xuICAgICAgICB2YXIgY2hpbGRDbXA7XG4gICAgICAgIHZhciBwYXJlbnRDbXA7XG4gICAgICAgIGlmIChjaGlsZENtcCA9PSB1bmRlZmluZWQgfHwgcGFyZW50Q21wID09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkQ21wID0gdGhpcy5jdXJyZW50RWwuQS5leHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wID0gdGhpcy5wYXJlbnRFbC5BLmV4dDtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAgICAgICAgIGlmIChjaGlsZENtcCA9PSB1bmRlZmluZWQgfHwgcGFyZW50Q21wID09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnbWVudScpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi9tZW51IG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2Nhcm91c2VsJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnY2Fyb3VzZWwgcGFyZW50IG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2dyaWQnICYmIGNoaWxkQ21wLnh0eXBlID09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdncmlkL2NvbHVtbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnc2VnbWVudGVkYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnc2VnbWVudGVkYnV0dG9uL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICd0b29sdGlwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL3Rvb2x0aXAgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAndGl0bGViYXInICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAndGl0bGViYXInICYmIGNoaWxkQ21wLnh0eXBlID09ICdzZWFyY2hmaWVsZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL3NlYXJjaGZpZWxkIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5yZW1vdmUoW2NoaWxkQ21wXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChjaGlsZENtcCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ25vIGRlc3Ryb3knKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXRjaCAoZSkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlKTtcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAvL21qZyBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICAgIH1cbiAgICB9XG59Il19