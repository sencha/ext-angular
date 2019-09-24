//Mon Sep 23 2019 15:48:20 GMT-0400 (Eastern Daylight Time)
declare var Ext: any

import {
    EventEmitter,
    ContentChild,
    ContentChildren,
    QueryList,
    SimpleChanges
} from '@angular/core'

export class EngBase {
    static count: any = 0;
    static DIRECTION: any = '';

    public ext: any
    newDiv: any

    xtype: any
    properties: any
    propertiesobject: any
    events: any
    eventnames: any

    A: any;
    private node: any
    parentNode: any
    base: any
    nodeName: any

    ewcChildren: any
    rawChildren: any
    hasParent: any
    parentType: any
    children: any
    last: any

    @ContentChild('extroute',{ static : false }) _extroute: any;
    @ContentChildren('extroute') _extroutes: QueryList<any>;
    @ContentChild('extitem',{ static : false }) _extitem: any;
    @ContentChildren('extitem') _extitems: QueryList<any>;
    @ContentChildren(EngBase) _childComponents: QueryList<EngBase>;
    get childComponents(): EngBase[] {
        return this._childComponents.filter(item => item !== this);
    }

    constructor (
        nativeElement: any,
        private metaData: any,
        public hostComponent : EngBase
    ) {
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

        this.eventnames.forEach( (event: any, n: any) => {
            if (event != 'fullscreen') {
                (<any>this.currentEl)[event] = new EventEmitter()
            }
            else {
                (<any>this.currentEl)[event + 'event'] = new EventEmitter()
            }
        })
    }
    baseOnInit(metaData) { }
    baseAfterViewInit(metaData) {
        this.initMe()
    }

//******* base start */
initMe() {
    //console.log('');console.log('*** initMe for ' + this.currentElName);
    this.createRawChildren();
    this.setParentType();
    this.setDirection();
    this.figureOutA();
    this.createProps(this.properties, this.propertiesobject, this.events, this.eventnames);
    this.createExtComponent();
}
createRawChildren() {
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
}
setParentType() {
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
        this.parentType = 'html'
    }
    else {
        if (this.parentElName.substring(0, 4) == 'EXT-') {
            this.parentType = 'ext'
        }
        else {
            this.parentType = 'html'
        }
    }
}
setDirection() {
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
}
figureOutA() {
    if (this.parentType == 'ext' &&
        this.parentEl.A == undefined &&
        this.parentEl.nodeName.substring(0, 4) == 'EXT-'
        ) {
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
    component.A.CHILDRENCOMPONENTS = Array.from(this.currentEl.rawChildren);
    component.A.CHILDRENCOMPONENTSCOUNT = this.currentEl.rawChildren.length;
    component.A.CHILDRENCOMPONENTSADDED = component.A.CHILDRENCOMPONENTSCOUNT;
    component.A.CHILDRENCOMPONENTSLEFT = component.A.CHILDRENCOMPONENTSCOUNT;
}
createExtComponent() {
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
                            if (window['router']) {window['router'].init();}
                            methis.sendReadyEvent(methis);
                        }
                    });
                });
            }
            else {
                console.error('error: viewport not allowed on this element')
            }
        }
        else {
            if (this.parentType == 'html') {
                meA.props.renderTo = this.newDiv;
            }
            Ext.onReady(function () {
                //console.log(this.parentType + ' - Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
                methis.currentEl.A.ext = Ext.create(meA.props);
                methis.assessChildren(methis.base, methis.xtype);
            });
        }
    }
    else {
        console.log('TopToBottom')
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
                            if (window['router']) {window['router'].init();}
                            methis.sendReadyEvent(methis);
                        }
                    });
                });
            }
            else {
                console.error('error: viewport not allowed on this element')
            }
        }
        else {
            if (this.parentType == 'html') {
                meA.props.renderTo = this.newDiv;
            }
            Ext.onReady(function () {
                //console.log(this.parentType + ' - Ext.create: ' + methis.currentElName + ' HTML parent: ' + methis.currentElName);
                methis.currentEl.A.ext = Ext.create(meA.props);
                methis.assessChildren(methis.base, methis.xtype);
            });
        }
    }
}

assessAngularChildren(base, xtype, A) {
    if (this._extitems != undefined) {
        if (this._extitems.length == 1) {
            var el = Ext.get(this._extitem.nativeElement);
            var w = Ext.create({xtype:'widget', element: el});
            this.addTheChild(A.ext, w, null);
        }
    }
    // if (this._extitems != undefined) {
    //     if (this._extroutes.length == 1) {
    //         A.ext.setHtml(this._extroute.nativeElement);
    //     }
    // }
}



assessChildren(base, xtype) {
    //console.log('assessChildren for: ' + xtype);
    var A = this.currentEl.A;
    this.assessAngularChildren(base, xtype, A)

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
            this.checkParent(this.parentEl, base, this)
        }
        // else {
        //     //base.COMPONENTCOUNT = base.COMPONENTCOUNT + A.CHILDRENCOMPONENTS.length;
        // }
    }
}

checkParent(component, base, me) {
    if (component.A == null) {
        me.sendReadyEvent(me)
    }
    else {
        component.A.CHILDRENCOMPONENTSLEFT--
        //base.COMPONENTLEFTCOUNT = base.COMPONENTLEFTCOUNT + 1;
        if (component.A.CHILDRENCOMPONENTSLEFT == 0) {
            this.addChildren(component, component.A.CHILDRENCOMPONENTS)
            this.checkParent(component.parentEl, base, component)
        }
    }
}

addChildren(child, children) {
    for (var i = 0; i < children.length; i++) {
        //why is this created as an object??
        var childItem = { parentCmp: {}, childCmp: {} };
        childItem.parentCmp = child.currentEl.A.ext;
        var A2
        if (children[i]._extitems != undefined) {
            A2 = children[i].node.A;
        }
        else {
            A2 = children[i].A;
        }
        childItem.childCmp = A2.ext;
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
//******* props start */
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
//******* props end */


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
            return
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
                    console.log('no destroy')
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