import * as tslib_1 from "tslib";
//import 'script-loader!../ext/ext..prod';
//import 'script-loader!../ext/css.prod';
//import 'script-loader!@sencha/ext-angular/ext/ext.blank.prod';
//import 'script-loader!@sencha/ext-angular/ext/css.prod';
//import Common from './Common'
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
        if (this.hasParent && this.parentEl.A == undefined) {
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
            childItem.childCmp = children[i].currentEl.A.ext;
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW5nLWJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2VuZy1iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSwwQ0FBMEM7QUFDMUMseUNBQXlDO0FBQ3pDLGdFQUFnRTtBQUNoRSwwREFBMEQ7QUFDMUQsK0JBQStCO0FBRS9CLE9BQU8sRUFDSCxZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBRVosTUFBTSxlQUFlLENBQUE7QUFFdEIsTUFBTSxPQUFPLE9BQU87SUFtQ2hCLFlBQ0ksYUFBa0IsRUFDVixRQUFhLEVBQ2QsYUFBdUI7UUFEdEIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFVO1FBRTlCLElBQUksQ0FBQyxJQUFJLEdBQUcsYUFBYSxDQUFDO1FBQzFCLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO1FBRWhDLElBQUksQ0FBQyxNQUFNLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUM1Qyw0Q0FBNEM7UUFDNUMsNkJBQTZCO1FBRTdCLElBQUksQ0FBQyxJQUFJLENBQUMscUJBQXFCLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM1RCxJQUFJLENBQUMsS0FBSyxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUM7UUFDNUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBQ3RDLElBQUksQ0FBQyxnQkFBZ0IsR0FBRyxrQkFBa0IsQ0FBQztRQUMzQyxJQUFJLENBQUMsTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUM7UUFDOUIsSUFBSSxDQUFDLFVBQVUsR0FBRyxRQUFRLENBQUMsVUFBVSxDQUFDO1FBRXRDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBRXBCLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxD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Q0FBQyxDQUFBO2lCQUM1QjthQUNKO1NBQ0o7UUFDRCxPQUFPLENBQUMsRUFBRTtZQUNOLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsMEJBQTBCO1lBQzFCLDRCQUE0QjtZQUM1QiwyQkFBMkI7WUFDM0IsMEJBQTBCO1NBQzdCO0lBQ0wsQ0FBQzs7QUEvcEJNLGFBQUssR0FBUSxDQUFDLENBQUM7QUFDZixpQkFBUyxHQUFRLEVBQUUsQ0FBQztBQXdCa0I7SUFBNUMsWUFBWSxDQUFDLFVBQVUsRUFBQyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsQ0FBQzs7MENBQWdCO0FBQy9CO0lBQTVCLGVBQWUsQ0FBQyxVQUFVLENBQUM7c0NBQWEsU0FBUzsyQ0FBTTtBQUNaO0lBQTNDLFlBQVksQ0FBQyxTQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7O3lDQUFlO0FBQzlCO0lBQTNCLGVBQWUsQ0FBQyxTQUFTLENBQUM7c0NBQVksU0FBUzswQ0FBTTtBQUM1QjtJQUF6QixlQUFlLENBQUMsT0FBTyxDQUFDO3NDQUFtQixTQUFTO2lEQUFVIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgRXh0OiBhbnlcbi8vaW1wb3J0ICdzY3JpcHQtbG9hZGVyIS4uL2V4dC9leHQuLnByb2QnO1xuLy9pbXBvcnQgJ3NjcmlwdC1sb2FkZXIhLi4vZXh0L2Nzcy5wcm9kJztcbi8vaW1wb3J0ICdzY3JpcHQtbG9hZGVyIUBzZW5jaGEvZXh0LWFuZ3VsYXIvZXh0L2V4dC5ibGFuay5wcm9kJztcbi8vaW1wb3J0ICdzY3JpcHQtbG9hZGVyIUBzZW5jaGEvZXh0LWFuZ3VsYXIvZXh0L2Nzcy5wcm9kJztcbi8vaW1wb3J0IENvbW1vbiBmcm9tICcuL0NvbW1vbidcblxuaW1wb3J0IHtcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgRW5nQmFzZSB7XG4gICAgc3RhdGljIGNvdW50OiBhbnkgPSAwO1xuICAgIHN0YXRpYyBESVJFQ1RJT046IGFueSA9ICcnO1xuXG4gICAgcHVibGljIGV4dDogYW55XG4gICAgbmV3RGl2OiBhbnlcblxuICAgIHh0eXBlOiBhbnlcbiAgICBwcm9wZXJ0aWVzOiBhbnlcbiAgICBwcm9wZXJ0aWVzb2JqZWN0OiBhbnlcbiAgICBldmVudHM6IGFueVxuICAgIGV2ZW50bmFtZXM6IGFueVxuXG5cbiAgICBBOiBhbnk7XG4gICAgcHJpdmF0ZSBub2RlOiBhbnlcbiAgICBwYXJlbnROb2RlOiBhbnlcbiAgICBiYXNlOiBhbnlcbiAgICBub2RlTmFtZTogYW55XG5cbiAgICBld2NDaGlsZHJlbjogYW55XG4gICAgcmF3Q2hpbGRyZW46IGFueVxuICAgIGhhc1BhcmVudDogYW55XG4gICAgY2hpbGRyZW46IGFueVxuICAgIGxhc3Q6IGFueVxuXG4gICAgQENvbnRlbnRDaGlsZCgnZXh0cm91dGUnLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dHJvdXRlOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZHJlbignZXh0cm91dGUnKSBfZXh0cm91dGVzOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkKCdleHRpdGVtJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRpdGVtOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZHJlbignZXh0aXRlbScpIF9leHRpdGVtczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZHJlbihFbmdCYXNlKSBfY2hpbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW5nQmFzZT47XG4gICAgZ2V0IGNoaWxkQ29tcG9uZW50cygpOiBFbmdCYXNlW10ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRDb21wb25lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgbmF0aXZlRWxlbWVudDogYW55LFxuICAgICAgICBwcml2YXRlIG1ldGFEYXRhOiBhbnksXG4gICAgICAgIHB1YmxpYyBob3N0Q29tcG9uZW50IDogRW5nQmFzZSxcbiAgICApIHtcbiAgICAgICAgdGhpcy5ub2RlID0gbmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gaG9zdENvbXBvbmVudDtcblxuICAgICAgICB0aGlzLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICAvL3ZhciB0ID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoXCJuZXdEaXZcIik7XG4gICAgICAgIC8vdGhpcy5uZXdEaXYuYXBwZW5kQ2hpbGQodCk7XG5cbiAgICAgICAgdGhpcy5ub2RlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCB0aGlzLm5ld0Rpdik7XG4gICAgICAgIHRoaXMueHR5cGUgPSBtZXRhRGF0YS5YVFlQRTtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gbWV0YURhdGEuUFJPUEVSVElFUztcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzb2JqZWN0ID0gJ3Byb3BlcnRpZXNvYmplY3QnO1xuICAgICAgICB0aGlzLmV2ZW50cyA9IG1ldGFEYXRhLkVWRU5UUztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzID0gbWV0YURhdGEuRVZFTlROQU1FUztcblxuICAgICAgICB0aGlzLmJhc2UgPSBFbmdCYXNlO1xuXG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICAgICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5jdXJyZW50RWwpW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgKDxhbnk+dGhpcy5jdXJyZW50RWwpW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgYmFzZU9uSW5pdChtZXRhRGF0YSkgeyB9XG4gICAgYmFzZUFmdGVyVmlld0luaXQobWV0YURhdGEpIHtcbiAgICAgICAgdGhpcy5pbml0TWUoKVxuICAgIH1cblxuLy8qKioqKioqIGJhc2Ugc3RhcnQgKi9cbmluaXRNZSgpIHtcbiAgICBjb25zb2xlLmxvZygnJyk7XG4gICAgY29uc29sZS5sb2coJyoqKiBpbml0TWUgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgIHRoaXMuY3JlYXRlUmF3Q2hpbGRyZW4oKTtcbiAgICB0aGlzLnNldEhhc1BhcmVudCgpO1xuICAgIHRoaXMuc2V0RGlyZWN0aW9uKCk7XG4gICAgdGhpcy5maWd1cmVPdXRBKCk7XG4gICAgdGhpcy5jcmVhdGVQcm9wcyh0aGlzLnByb3BlcnRpZXMsIHRoaXMucHJvcGVydGllc29iamVjdCwgdGhpcy5ldmVudHMsIHRoaXMuZXZlbnRuYW1lcyk7XG4gICAgdGhpcy5jcmVhdGVFeHRDb21wb25lbnQoKTtcbiAgICAvL3RoaXMuYXNzZXNzQ2hpbGRyZW4odGhpcy5iYXNlLCB0aGlzLnh0eXBlKTtcbiAgICAvL3RoaXMuYXRFbmQoKTtcbiAgICAvL2lmICh0aGlzLmxhc3QgPT0gdHJ1ZSl7XG4gICAgLy8gICAgY29uc29sZS5sb2coJ3RoaXMgaXMgdGhlIGVuZC4uLicpXG4gICAgLy99XG59XG47XG5jcmVhdGVSYXdDaGlsZHJlbigpIHtcbiAgICBjb25zb2xlLmxvZygnY3JlYXRlUmF3Q2hpbGRyZW4nKVxuICAgIGlmICh0aGlzLmN1cnJlbnRFbC5pc0FuZ3VsYXIpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSB0aGlzLmN1cnJlbnRFbC5jaGlsZENvbXBvbmVudHM7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbiA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuY3VycmVudEVsLmNoaWxkcmVuKTtcbiAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4gPSBbXTtcbiAgICAgICAgdmFyIG51bSA9IDA7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5jdXJyZW50RWwuZXdjQ2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5ld2NDaGlsZHJlbltpXS5YVFlQRSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmN1cnJlbnRFbC5yYXdDaGlsZHJlbltudW1dID0ge307XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW5bbnVtXSA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0uY3VycmVudENvbXBvbmVudCA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuW251bV0ubm9kZSA9IHRoaXMuY3VycmVudEVsLmV3Y0NoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIG51bSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdyYXdDaGlsZHJlbicpXG4gICAgY29uc29sZS5sb2codGhpcy5jdXJyZW50RWwucmF3Q2hpbGRyZW4pXG59XG5zZXRIYXNQYXJlbnQoKSB7XG4gICAgdmFyIGhhc1BhcmVudDtcbiAgICBpZiAodGhpcy5wYXJlbnRFbCA9PSBudWxsKSB7XG4gICAgICAgIHRoaXMuaGFzUGFyZW50ID0gZmFsc2U7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnRFbE5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgdGhpcy5oYXNQYXJlbnQgPSB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5oYXNQYXJlbnQgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL3JldHVybiBoYXNQYXJlbnRcbn1cbnNldERpcmVjdGlvbigpIHtcbiAgICBpZiAodGhpcy5iYXNlLmNvdW50ID09IDApIHtcbiAgICAgICAgdGhpcy5iYXNlLmNvdW50Kys7XG4gICAgICAgIGlmICh0aGlzLmhhc1BhcmVudCA9PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5iYXNlLkRJUkVDVElPTiA9ICdUb3BUb0JvdHRvbSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbE5hbWUuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFzZS5ESVJFQ1RJT04gPSAnQm90dG9tVG9Ub3AnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXNlLkRJUkVDVElPTiA9ICdUb3BUb0JvdHRvbSc7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc29sZS5sb2codGhpcy5iYXNlLkRJUkVDVElPTik7XG59XG5maWd1cmVPdXRBKCkge1xuICAgIGlmICh0aGlzLmhhc1BhcmVudCAmJiB0aGlzLnBhcmVudEVsLkEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLnBhcmVudEVsKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuY3VycmVudEVsLkEgPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHRoaXMuaW5pdCh0aGlzLmN1cnJlbnRFbCk7XG4gICAgfVxufVxuaW5pdChjb21wb25lbnQpIHtcbiAgICBjb21wb25lbnQuQSA9IHt9O1xuICAgIGNvbXBvbmVudC5BLnByb3BzID0ge307XG4gICAgY29tcG9uZW50LkEueHR5cGUgPSBjb21wb25lbnQueHR5cGU7XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTID0gW107XG4gICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPSAwO1xuICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID0gMDtcbiAgICBpZiAodGhpcy5iYXNlLkRJUkVDVElPTiA9PSAnVG9wVG9Cb3R0b20nKSB7XG4gICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUyA9IHRoaXMuY3VycmVudEVsLnJhd0NoaWxkcmVuO1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UUy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudC5nZXRDdXJyZW50RWxOYW1lKGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU1tpXSkuc3Vic3RyaW5nKDAsIDQpID09ICdFWFQtJykge1xuICAgICAgICAgICAgICAgIGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UKys7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29tcG9uZW50LkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVCA9IGNvbXBvbmVudC5BLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UO1xuICAgIH1cbn1cbmNyZWF0ZUV4dENvbXBvbmVudCgpIHtcbiAgICB2YXIgQSA9IHRoaXMuY3VycmVudEVsLkE7XG4gICAgdmFyIG1lQSA9IEE7XG4gICAgdmFyIG1ldGhpcyA9IHRoaXM7XG4gICAgaWYgKEEucHJvcHNbJ3ZpZXdwb3J0J10gPT0gdHJ1ZSkge1xuICAgICAgICB0aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgbWV0aGlzLmN1cnJlbnRFbC5BLmV4dCA9IEV4dC5jcmVhdGUobWVBLnByb3BzKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCcwLUV4dC5hcHBsaWNhdGlvbjogJyArIG1lQS5wcm9wcy54dHlwZSk7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICBFeHQuYXBwbGljYXRpb24oe1xuICAgICAgICAgICAgICAgIG5hbWU6ICdNeUVXQ0FwcCcsXG4gICAgICAgICAgICAgICAgbGF1bmNoOiBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIEV4dC5WaWV3cG9ydC5hZGQoW21ldGhpcy5jdXJyZW50RWwuQS5leHRdKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHdpbmRvd1sncm91dGVyJ10pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvd1sncm91dGVyJ10uaW5pdCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKG1ldGhpcy5iYXNlLkRJUkVDVElPTiArICcgaW4gbGF1bmNoICcpO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWV0aGlzLmJhc2UuRElSRUNUSU9OID09ICdCb3R0b21Ub1RvcCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCd0aGUgbGFzdCB0aGluZyB0byBkby4uLicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWV0aGlzLmxhc3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCB8fCB0aGlzLnBhcmVudEVsTmFtZS5zdWJzdHJpbmcoMCwgNCkgIT0gJ0VYVC0nKSB7XG4gICAgICAgIEEucHJvcHMucmVuZGVyVG8gPSB0aGlzLm5ld0RpdjtcbiAgICAgICAgRXh0Lm9uUmVhZHkoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJzEtIEV4dC5jcmVhdGU6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSArICcgSFRNTCBwYXJlbnQ6ICcgKyBtZXRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgbWV0aGlzLm5ld0Rpdi5wYXJlbnROb2RlLnJlcGxhY2VDaGlsZChtZXRoaXMuY3VycmVudEVsLkEuZXh0LmVsLmRvbSwgbWV0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgICBtZXRoaXMuYXNzZXNzQ2hpbGRyZW4obWV0aGlzLmJhc2UsIG1ldGhpcy54dHlwZSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWZ0ZXIgYXNzZXNzQ2hpbGRyZW4nKTtcbiAgICAgICAgICAgIC8vdmFyIHdjID0gbWVBLmV4dC5lbC5kb20ubmV4dFNpYmxpbmc7XG4gICAgICAgICAgICAvL3djLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQod2MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCczLSBFeHQuY3JlYXRlOiAnICsgbWV0aGlzLmN1cnJlbnRFbE5hbWUgKyAnICBFeHQgcGFyZW50OiAnICsgbWV0aGlzLnBhcmVudEVsTmFtZSk7XG4gICAgICAgICAgICBtZXRoaXMuY3VycmVudEVsLkEuZXh0ID0gRXh0LmNyZWF0ZShtZUEucHJvcHMpO1xuICAgICAgICAgICAgbWV0aGlzLmFzc2Vzc0NoaWxkcmVuKG1ldGhpcy5iYXNlLCBtZXRoaXMueHR5cGUpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5hc3Nlc3NDaGlsZHJlbihiYXNlLCB4dHlwZSkge1xuICAgIGNvbnNvbGUubG9nKCdhc3Nlc3NDaGlsZHJlbiBmb3I6ICcgKyB4dHlwZSk7XG4gICAgdmFyIEEgPSB0aGlzLmN1cnJlbnRFbC5BO1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnc2V0IGh0bWwnKTtcbiAgICAgICAgICAgIEEuZXh0LnNldEh0bWwodGhpcy5fZXh0aXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aGlzLl9leHRyb3V0ZXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdzZXQgcm91dGVyJyk7XG4gICAgICAgICAgICBBLmV4dC5zZXRIdG1sKHRoaXMuX2V4dHJvdXRlLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgLy9jaGlsZEl0ZW0uY2hpbGRDbXAgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZXdjOml0ZW0uZ2V0QXR0cmlidXRlKCdld2MnKSwgZWxlbWVudDpFeHQuZ2V0KGl0ZW0ucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChpdGVtKSl9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0NPVU5UID09IDAgJiZcbiAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZUID09IDAgJiZcbiAgICAgICAgQS5DSElMRFJFTkNPTVBPTkVOVFNBRERFRCA9PSAwICYmXG4gICAgICAgIHRoaXMucGFyZW50RWwgPT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygnU29sbycpO1xuICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICB0aGlzLnNlbmRSZWFkeUV2ZW50KHRoaXMpO1xuICAgIH1cbiAgICBlbHNlIGlmIChBLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEID4gMCkge1xuICAgICAgICBjb25zb2xlLmxvZygnYWRkQ2hpbGRyZW4nKTtcbiAgICAgICAgY29uc29sZS5kaXIoQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5vZGUuQSk7XG4gICAgICAgIHRoaXMuYWRkQ2hpbGRyZW4odGhpcywgQS5DSElMRFJFTkNPTVBPTkVOVFMpO1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdzZW5kIHJlYWR5IGZvciBDSElMRFJFTkNPTVBPTkVOVFNBRERFRCA+IDAnKTtcbiAgICAgICAgY29uc29sZS5sb2coJ3JlYWR5IGV2ZW50IGZvciAnICsgdGhpcy5jdXJyZW50RWxOYW1lKTtcbiAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAgICAgdGhpcy5ub2RlLnJlbW92ZSgpO1xuICAgIH1cbiAgICAvLyBlbHNlIGlmICh0aGlzLnBhcmVudE5vZGUgIT0gbnVsbCAmJiB0aGlzLkEuQ0hJTERSRU5DT01QT05FTlRTQ09VTlQgPT0gMCkge1xuICAgIC8vICAgICBjb25zb2xlLmxvZygnc2VuZCByZWFkeSBmb3IgJyArIHRoaXMuQS54dHlwZSk7XG4gICAgLy8gICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcyk7XG4gICAgLy8gfVxuICAgIGlmICh0aGlzLnBhcmVudEVsICE9IG51bGwpIHtcbiAgICAgICAgaWYgKGJhc2UuRElSRUNUSU9OID09ICdUb3BUb0JvdHRvbScpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdUb3BUb0JvdHRvbScpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UUy5wdXNoKHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEKys7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTTEVGVC0tO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFyZW50RWwuQS5DSElMRFJFTkNPTVBPTkVOVFNMRUZUID09IDApIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMucGFyZW50RWwpXG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDaGlsZHJlbih0aGlzLnBhcmVudEVsLCB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTKTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLnBhcmVudEVsTmFtZSArICcocGFyZW50KScpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2VuZFJlYWR5RXZlbnQodGhpcy5wYXJlbnRFbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsLkEuQ0hJTERSRU5DT01QT05FTlRTLnB1c2godGhpcy5jdXJyZW50RWwpO1xuICAgICAgICAgICAgdGhpcy5wYXJlbnRFbC5BLkNISUxEUkVOQ09NUE9ORU5UU0FEREVEKys7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncmVhZHkgZXZlbnQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbE5hbWUpO1xuICAgICAgICAgICAgdGhpcy5zZW5kUmVhZHlFdmVudCh0aGlzKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbmFkZENoaWxkcmVuKGNoaWxkLCBjaGlsZHJlbikge1xuICAgIC8vY29uc29sZS5sb2coJ2FkZENoaWxkcmVuIGZvciAnICsgY2hpbGQueHR5cGUgKyAnIC0gbnVtIGNoaWxkcmVuOiAnICsgY2hpbGRyZW4ubGVuZ3RoKTtcbiAgICAvL2ZvciAodmFyIGkgPSBjaGlsZHJlbi5sZW5ndGggLSAxOyBpID4gLTE7IGktLSkge1xuICAgIC8vICAgIHZhciBjaGlsZEl0ZW0gPSB7IHBhcmVudENtcDoge30sIGNoaWxkQ21wOiB7fSB9O1xuICAgIC8vICAgIGNoaWxkSXRlbS5wYXJlbnRDbXAgPSBjaGlsZC5jdXJyZW50RWwuQS5leHQ7XG4gICAgLy8gICAgY2hpbGRJdGVtLmNoaWxkQ21wID0gY2hpbGRyZW5baV0uQS5leHQ7XG4gICAgLy8gICAgdGhpcy5hZGRUaGVDaGlsZChjaGlsZEl0ZW0ucGFyZW50Q21wLCBjaGlsZEl0ZW0uY2hpbGRDbXAsIG51bGwpO1xuICAgIC8vfVxuICAgIGNvbnNvbGUuZGlyKGNoaWxkcmVuKVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIGNoaWxkSXRlbSA9IHsgcGFyZW50Q21wOiB7fSwgY2hpbGRDbXA6IHt9IH07XG4gICAgICAgIGNoaWxkSXRlbS5wYXJlbnRDbXAgPSB0aGlzLmN1cnJlbnRFbC5BLmV4dDtcbiAgICAgICAgY2hpbGRJdGVtLmNoaWxkQ21wID0gY2hpbGRyZW5baV0uY3VycmVudEVsLkEuZXh0O1xuICAgICAgICB0aGlzLmFkZFRoZUNoaWxkKGNoaWxkSXRlbS5wYXJlbnRDbXAsIGNoaWxkSXRlbS5jaGlsZENtcCwgbnVsbCk7XG4gICAgfVxufVxuYWRkVGhlQ2hpbGQocGFyZW50Q21wLCBjaGlsZENtcCwgbG9jYXRpb24pIHtcbiAgICB2YXIgcGFyZW50eHR5cGUgPSBwYXJlbnRDbXAueHR5cGU7XG4gICAgdmFyIGNoaWxkeHR5cGUgPSBjaGlsZENtcC54dHlwZTtcbiAgICAvL2NvbnNvbGUubG9nKCdhZGRUaGVDaGlsZDogJyArIHBhcmVudHh0eXBlICsgJygnICsgcGFyZW50Q21wLmV4dCArICcpJyArICcgLSAnICsgY2hpbGR4dHlwZSArICcoJyArIGNoaWxkQ21wLmV4dCArICcpJyk7XG4gICAgLy9pZiAoY2hpbGR4dHlwZSA9PSAnd2lkZ2V0JylcbiAgICBpZiAodGhpcy5jdXJyZW50RWwuQS5leHQuaW5pdGlhbENvbmZpZy5hbGlnbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHBhcmVudHh0eXBlICE9ICd0aXRsZWJhcicgJiYgcGFyZW50eHR5cGUgIT0gJ2dyaWQnICYmIHBhcmVudHh0eXBlICE9ICdsb2NrZWRncmlkJyAmJiBwYXJlbnR4dHlwZSAhPSAnYnV0dG9uJykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcignQ2FuIG9ubHkgdXNlIGFsaWduIHByb3BlcnR5IGlmIHBhcmVudCBpcyBhIFRpdGxlYmFyIG9yIEdyaWQgb3IgQnV0dG9uJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICB9XG4gICAgdmFyIGRlZmF1bHRwYXJlbnQgPSBmYWxzZTtcbiAgICB2YXIgZGVmYXVsdGNoaWxkID0gZmFsc2U7XG4gICAgc3dpdGNoIChwYXJlbnR4dHlwZSkge1xuICAgICAgICBjYXNlICdidXR0b24nOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnbWVudSc6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ2Jvb2xlYW5jb2x1bW4nOlxuICAgICAgICBjYXNlICdjaGVja2NvbHVtbic6XG4gICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICBjYXNlICd0ZW1wbGF0ZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2dyaWRjb2x1bW4nOlxuICAgICAgICBjYXNlICdjb2x1bW4nOlxuICAgICAgICBjYXNlICd0ZW1wbGF0ZWNvbHVtbic6XG4gICAgICAgIGNhc2UgJ2RhdGVjb2x1bW4nOlxuICAgICAgICBjYXNlICdkcmFnY29sdW1uJzpcbiAgICAgICAgY2FzZSAnbnVtYmVyY29sdW1uJzpcbiAgICAgICAgY2FzZSAnc2VsZWN0aW9uY29sdW1uJzpcbiAgICAgICAgY2FzZSAndGV4dGNvbHVtbic6XG4gICAgICAgIGNhc2UgJ3RyZWVjb2x1bW4nOlxuICAgICAgICBjYXNlICdyb3dudW1iZXJlcic6XG4gICAgICAgICAgICBzd2l0Y2ggKGNoaWxkeHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlICdyZW5kZXJlcmNlbGwnOlxuICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0Q2VsbChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2NvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0cGFyZW50ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnZ3JpZCc6XG4gICAgICAgIGNhc2UgJ2xvY2tlZGdyaWQnOlxuICAgICAgICAgICAgc3dpdGNoIChjaGlsZHh0eXBlKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAnZ3JpZGNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0cmVlY29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICd0ZXh0Y29sdW1uJzpcbiAgICAgICAgICAgICAgICBjYXNlICdjaGVja2NvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnZGF0ZWNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAncm93bnVtYmVyZXInOlxuICAgICAgICAgICAgICAgIGNhc2UgJ251bWJlcmNvbHVtbic6XG4gICAgICAgICAgICAgICAgY2FzZSAnYm9vbGVhbmNvbHVtbic6XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWdDb2xzID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAucmVnaXN0ZXJlZENvbHVtbnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVnQ29scyA9IHBhcmVudENtcC5yZWdpc3RlcmVkQ29sdW1ucy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnRDb2x1bW4obG9jYXRpb24gKyByZWdDb2xzLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGxvY2F0aW9uICsgcmVnQ29scywgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHRwYXJlbnQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZGVmYXVsdHBhcmVudCA9IHRydWU7XG4gICAgICAgICAgICBicmVhaztcbiAgICB9XG4gICAgO1xuICAgIHN3aXRjaCAoY2hpbGR4dHlwZSkge1xuICAgICAgICBjYXNlICd0b29sYmFyJzpcbiAgICAgICAgY2FzZSAndGl0bGViYXInOlxuICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChsb2NhdGlvbiA9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQobG9jYXRpb24sIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3Rvb2x0aXAnOlxuICAgICAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ3BsdWdpbic6XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgZGVmYXVsdGNoaWxkID0gdHJ1ZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgIH1cbiAgICBpZiAoZGVmYXVsdHBhcmVudCA9PSB0cnVlICYmIGRlZmF1bHRjaGlsZCA9PSB0cnVlKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyZW50eHR5cGUgKyAnLmFkZCgnICsgY2hpbGR4dHlwZSArICcpJylcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgfVxuICAgIC8vIGlmICh0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZCA+IDApIHtcbiAgICAvLyAgICAgdGhpcy5wYXJlbnROb2RlLmNoaWxkcmVuWWV0VG9CZURlZmluZWQtLVxuICAgIC8vIH1cbiAgICAvLyAvL2NvbnNvbGUubG9nKCdjaGlsZHJlbllldFRvQmVEZWZpbmVkKGFmdGVyKSAnICArIHRoaXMucGFyZW50Tm9kZS5jaGlsZHJlbllldFRvQmVEZWZpbmVkKVxuICAgIC8vIGlmICh0aGlzLnBhcmVudE5vZGUuY2hpbGRyZW5ZZXRUb0JlRGVmaW5lZCA9PSAwKSB7XG4gICAgLy8gICAgIHRoaXMucGFyZW50Tm9kZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgncmVhZHknLHtkZXRhaWw6e2NtcDogdGhpcy5wYXJlbnROb2RlLmV4dH19KSlcbiAgICAvLyB9XG59XG5hdEVuZCgpIHtcbiAgICBjb25zb2xlLmxvZygnKioqIGF0IGVuZCcpO1xuICAgIGNvbnNvbGUubG9nKCd0aGlzIC0gJyArIHRoaXMuY3VycmVudEVsTmFtZSk7XG4gICAgY29uc29sZS5kaXIodGhpcy5jdXJyZW50RWwuQSk7XG4gICAgaWYgKHRoaXMucGFyZW50RWwgIT0gbnVsbCkge1xuICAgICAgICBjb25zb2xlLmxvZygncGFyZW50IC0gJyArIHRoaXMucGFyZW50RWxOYW1lKTtcbiAgICAgICAgY29uc29sZS5kaXIodGhpcy5wYXJlbnRFbC5BKTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdObyBFWFQgcGFyZW50Jyk7XG4gICAgfVxufVxuZ2V0IGN1cnJlbnRFbCgpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gdGhpcztcbiAgICB9XG59XG5nZXRDdXJyZW50RWxOYW1lKGNvbXBvbmVudCkge1xuICAgIGlmIChjb21wb25lbnQuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm5vZGUubm9kZU5hbWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICByZXR1cm4gY29tcG9uZW50Lm5vZGVOYW1lO1xuICAgIH1cbn1cbmdldCBjdXJyZW50RWxOYW1lKCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMubm9kZS5ub2RlTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5vZGVOYW1lO1xuICAgIH1cbn1cbmdldCBpc0FuZ3VsYXIoKSB7XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5nZXQgcGFyZW50RWwoKSB7XG4gICAgaWYgKHRoaXMuaXNBbmd1bGFyKSB7XG4gICAgICAgIGlmICh0aGlzLnBhcmVudE5vZGUgPT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZS5ub2RlO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucGFyZW50Tm9kZTtcbiAgICB9XG59XG5nZXQgcGFyZW50RWxOYW1lKCkge1xuICAgIGlmICh0aGlzLmlzQW5ndWxhcikge1xuICAgICAgICBpZiAodGhpcy5wYXJlbnROb2RlID09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubm9kZS5ub2RlTmFtZTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIHJldHVybiB0aGlzLnBhcmVudE5vZGUubm9kZU5hbWU7XG4gICAgfVxufVxuc2VuZFJlYWR5RXZlbnQoY29tcG9uZW50KSB7XG4gICAgdmFyIGNtcCA9IGNvbXBvbmVudC5jdXJyZW50RWwuQS5leHQ7XG4gICAgaWYgKGNvbXBvbmVudC5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGNvbXBvbmVudFsncmVhZHknXS5lbWl0KHsgZGV0YWlsOiB7IGNtcDogY21wIH0gfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBjb21wb25lbnQuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3JlYWR5JywgeyBkZXRhaWw6IHsgY21wOiBjbXAgfSB9KSk7XG4gICAgfVxufVxuLy8qKioqKioqIGJhc2UgZW5kICovXG5jcmVhdGVQcm9wcyhwcm9wZXJ0aWVzLCBwcm9wZXJ0aWVzb2JqZWN0LCBldmVudHMsIGV2ZW50bmFtZXMpIHtcbiAgICB2YXIgcHJvcHMgPSB0aGlzLmN1cnJlbnRFbC5BLnByb3BzO1xuICAgIHByb3BzLnh0eXBlID0gdGhpcy54dHlwZTtcbiAgICBsZXQgbGlzdGVuZXJzUHJvdmlkZWQgPSBmYWxzZTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3AgPSBwcm9wZXJ0aWVzW2ldO1xuICAgICAgICBpZiAocHJvcCA9PSAnaGFuZGxlcicpIHtcbiAgICAgICAgICAgIGlmICh0aGlzW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHByb3BzW3Byb3BdID0gdGhpc1twcm9wXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvL25lZWQgdG8gaGFuZGxlIGxpc3RlbmVycyBjb21pbmcgaW4gaGVyZVxuICAgICAgICBpZiAoKHByb3BzLnh0eXBlID09PSAnY2FydGVzaWFuJyB8fCBwcm9wcy54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwcm9wID09ICdsaXN0ZW5lcnMnICYmIHRoaXNbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwcm9wc1twcm9wXSA9IHRoaXNbcHJvcF07XG4gICAgICAgICAgICBsaXN0ZW5lcnNQcm92aWRlZCA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBpZiAodGhpc1twcm9wXSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBwcm9wICE9ICdsaXN0ZW5lcnMnICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnY29uZmlnJyAmJlxuICAgICAgICAgICAgICAgIHByb3AgIT0gJ2hhbmRsZXInICYmXG4gICAgICAgICAgICAgICAgcHJvcCAhPSAnZml0VG9QYXJlbnQnKSB7XG4gICAgICAgICAgICAgICAgcHJvcHNbcHJvcF0gPSB0aGlzW3Byb3BdO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0cnVlID09PSB0aGlzWydmaXRUb1BhcmVudCddKSB7XG4gICAgICAgIHByb3BzLnRvcCA9IDAsXG4gICAgICAgICAgICBwcm9wcy5sZWZ0ID0gMCxcbiAgICAgICAgICAgIHByb3BzLndpZHRoID0gJzEwMCUnLFxuICAgICAgICAgICAgcHJvcHMuaGVpZ2h0ID0gJzEwMCUnO1xuICAgIH1cbiAgICBpZiAodGhpc1snY29uZmlnJ10gIT09IHt9KSB7XG4gICAgICAgIEV4dC5hcHBseShwcm9wcywgdGhpc1snY29uZmlnJ10pO1xuICAgIH1cbiAgICBpZiAoIWxpc3RlbmVyc1Byb3ZpZGVkKSB7XG4gICAgICAgIHByb3BzLmxpc3RlbmVycyA9IHt9O1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICBldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgIGxldCBldmVudG5hbWUgPSBldmVudC5uYW1lO1xuICAgICAgICAgICAgbGV0IGV2ZW50cGFyYW1ldGVycyA9IGV2ZW50LnBhcmFtZXRlcnM7XG4gICAgICAgICAgICBtZS5jdXJyZW50RWwuQS5wcm9wcy5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdpbiB0aGUgZXZlbnQgJyArIGV2ZW50bmFtZSlcbiAgICAgICAgICAgICAgICBsZXQgcGFyYW1ldGVycyA9IGV2ZW50cGFyYW1ldGVycztcbiAgICAgICAgICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJyk7XG4gICAgICAgICAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICAgICAgICAgICAgICAgIGxldCBlbWl0cGFybXMgPSB7fTtcbiAgICAgICAgICAgICAgICBpZiAobWUuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBhcm1zLmxlbmd0aDsgaSA8IGo7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvL2R1cD8/XG4gICAgaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBldmVudHMuZm9yRWFjaCgoZXZlbnQsIG4pID0+IHtcbiAgICAgICAgICAgIGlmIChldmVudCAhPSAnZnVsbHNjcmVlbicpIHtcbiAgICAgICAgICAgICAgICB0aGlzW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXNbZXZlbnQgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5cblxuXG4gICAgYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICAgICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKVxuICAgICAgICBsZXQgY2hhbmdlc01zZ3MgPSBbXTtcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgbGV0IHZlcmIgPSAnJztcbiAgICAgICAgICAgIGlmIChjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmN1cnJlbnRFbC5BICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5kaXIodGhpcy5jdXJyZW50RWwuQS5leHQpXG4gICAgICAgICAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICB2YXIgc2V0RnVuY3Rpb24gPSAnc2V0JyArIGNhcFByb3BOYW1lO1xuICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coc2V0RnVuY3Rpb24pXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VycmVudEVsLkEuZXh0W3NldEZ1bmN0aW9uXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jdXJyZW50RWwuQS5leHRbc2V0RnVuY3Rpb25dKHZhbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKHNldEZ1bmN0aW9uICsgJyBub3QgZm91bmQgZm9yICcgKyB0aGlzLmN1cnJlbnRFbC5BLmV4dC54dHlwZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKCdjaGFuZ2UgbmVlZGVkIGFuZCBleHQgbm90IGRlZmluZWQnKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCQgJCB0byBcIiRcImApO1xuICAgICAgICB9XG4gICAgICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gICAgfVxuXG4gICAgbmdPbkRlc3Ryb3koKSB7XG4gICAgICAgIHZhciBjaGlsZENtcDtcbiAgICAgICAgdmFyIHBhcmVudENtcDtcbiAgICAgICAgY29uc29sZS5kaXIodGhpcylcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNoaWxkQ21wID0gdGhpcy5jdXJyZW50RWwuQS5leHQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXJlbnRFbCAhPSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wID0gdGhpcy5wYXJlbnRFbC5BLmV4dDtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ21wID09IHVuZGVmaW5lZCB8fCBwYXJlbnRDbXAgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL21lbnUgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnY2Fyb3VzZWwnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjYXJvdXNlbCBwYXJlbnQgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnZ3JpZCcgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dyaWQvY29sdW1uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdzZWdtZW50ZWRidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdzZWdtZW50ZWRidXR0b24vYnV0dG9uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vdG9vbHRpcCBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3NlYXJjaGZpZWxkJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygndGl0bGViYXIvc2VhcmNoZmllbGQgbm90IGRlbGV0ZWQnKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50Q21wLnJlbW92ZShbY2hpbGRDbXBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgaWYgKGNoaWxkQ21wICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICBjaGlsZENtcC5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZygnbm8gZGVzdHJveScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGUpO1xuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgICAgICAgIC8vbWpnIGNvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICAgICAgLy9tamcgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgICAgfVxuICAgIH1cbn0iXX0=