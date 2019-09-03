declare var Ext: any
import 'script-loader!@sencha/ext-angular-all/ext/ext.all.prod';
import 'script-loader!@sencha/ext-angular-all/ext/css.prod';
//import Common from './Common'

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
    A: any;
    private node: any
    parentNode: any
    xtype: any
    base: any

    ewcChildren: any
    rawChildren: any
    children: any

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
        public hostComponent : EngBase,
    ) {
        this.node = nativeElement;
        this.parentNode = hostComponent;

        this.newDiv = document.createElement('div');
        this.node.insertAdjacentElement('beforebegin', this.newDiv);
        this.xtype = metaData.XTYPE;
        this.base = EngBase;

        metaData.EVENTNAMES.forEach( (event: any, n: any) => {
            if (event != 'fullscreen') {
                (<any>this.getNode())[event] = new EventEmitter()
            }
            else {
                (<any>this.getNode())[event + 'event'] = new EventEmitter()
            }
        })
    }
    baseOnInit(metaData) { }
    baseAfterViewInit(metaData) {
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

    figureOutA() {
        console.log('figureOutA')
        var hasParent;
        if (this.getParentNode() == null) {
            hasParent = false;
        }
        else {
            if (this.getParentNode().nodeName.substring(0, 4) == 'EXT-') {
                hasParent = true
            }
            else {
                hasParent = false
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
        console.log(this.base.DIRECTION)

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
    }

    init(component, node) {
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
    }
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
    createPropsForENG(properties, events, eventnames) {
        var props = this.getNode().A.props;
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
                me.getNode().A.props.listeners[eventname] = function () {
                    console.log('in the event ' + eventname)
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

    createExtComponent() {
        var A =this.getNode().A
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
    }
    assessChildren(base, xtype) {
        var A =this.getNode().A
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
    }
    addChildren(child, children) {
        //console.log('addChildren for ' + child.xtype + ' - num children: ' + children.length);
        for (var i = children.length - 1; i > -1; i--) {
            var childItem = { parentCmp: {}, childCmp: {} };
            childItem.parentCmp = child.getNode().A.ext;
            childItem.childCmp = children[i].A.ext;
            this.addTheChild(childItem.parentCmp, childItem.childCmp, null);
        }
    }
    addTheChild(parentCmp, childCmp, location) {
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
    }

    getNode() {
        if (this._extitems != undefined) {
            return this.node
        }
        else {
            return this
        }
    }
    getParentNode() {
        if (this._extitems != undefined) {
            if (this.parentNode == null) {
                return null
            }
            return this.parentNode.node;
        }
        else {
            return this.parentNode;
        }
    }
    getNodeName(component) {
        if (this._extitems != undefined) {
            return component.node.nodeName
        }
        else {
            return component.nodeName
        }
    }
    sendReadyEvent(component) {
        var cmp = component.getNode().A.ext
        if (component._extitems != undefined) {
            component['ready'].emit({ detail: { cmp: cmp } });
        }
        else {
            component.dispatchEvent(new CustomEvent('ready', { detail: { cmp: cmp } }));
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
            changesMsgs.push(`$ $ to "$"`);
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    }

    ngOnDestroy() {
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
    }
}