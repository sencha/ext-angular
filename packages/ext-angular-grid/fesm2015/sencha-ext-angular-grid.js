import { __decorate, __metadata, __param } from 'tslib';
import { EventEmitter, ContentChild, ContentChildren, QueryList, Component, forwardRef, Host, Optional, SkipSelf, ElementRef, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

class base {
    constructor(nativeElement, metaData, hostComponent) {
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this._extChildren = false;
        this.q = null;
        this._nativeElement = nativeElement;
        this._hostComponent = hostComponent;
        metaData.EVENTNAMES.forEach((event, n) => {
            if (event != 'fullscreen') {
                this[event] = new EventEmitter();
            }
            else {
                this[event + 'event'] = new EventEmitter();
            }
        });
    }
    baseOnInit(metaData) {
        //console.log(`ngOnInit: ${metaData.XTYPE}`)
        let me = this;
        let o = {};
        o.xtype = metaData.XTYPE;
        let listenersProvided = false;
        for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
            var prop = me.metaData.PROPERTIES[i];
            if (prop == 'handler') {
                if (me[prop] != undefined) {
                    o[prop] = me[prop];
                }
            }
            //need to handle listeners coming in here
            if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') ;
            else if (prop == 'listeners' && me[prop] != undefined) {
                o[prop] = me[prop];
                listenersProvided = true;
            }
            else {
                if (me[prop] != undefined &&
                    prop != 'listeners' &&
                    prop != 'config' &&
                    prop != 'handler' &&
                    prop != 'fitToParent') {
                    o[prop] = me[prop];
                }
            }
        }
        if (true === me.fitToParent) {
            o.top = 0,
                o.left = 0,
                o.width = '100%',
                o.height = '100%';
        }
        if (me.config !== {}) {
            Ext.apply(o, me.config);
        }
        if (!listenersProvided) {
            o.listeners = {};
            var EVENTS = metaData.EVENTS;
            EVENTS.forEach(function (event, index, array) {
                let eventname = event.name;
                let eventparameters = event.parameters;
                o.listeners[eventname] = function () {
                    let parameters = eventparameters;
                    let parms = parameters.split(',');
                    let args = Array.prototype.slice.call(arguments);
                    let emitparms = {};
                    for (let i = 0, j = parms.length; i < j; i++) {
                        emitparms[parms[i]] = args[i];
                    }
                    me[eventname].emit(emitparms);
                };
            });
        }
        if (this._nativeElement.parentElement != null) {
            o.renderTo = this._nativeElement;
        }
        if (o.xtype == 'dialog') {
            o.renderTo = undefined;
        }
        Ext.onReady(function () {
            me.ext = Ext.create(o);
        });
    }
    baseAfterContentInit() {
        if (this._extitems.length == 1) {
            if (this._hostComponent != null) {
                this.ext.setHtml(this._extitem.nativeElement);
            }
        }
        if (this._extroutes.length == 1) {
            this.ext.setHtml(this._extroute.nativeElement);
        }
        if (this._hostComponent != null) {
            var parentCmp = this._hostComponent.ext;
            var childCmp = this.ext;
            this.addTheChild(parentCmp, childCmp);
        }
        this['ready'].emit(this);
    }
    addTheChild(parentCmp, childCmp) {
        var parentxtype = parentCmp.xtype;
        var childxtype = childCmp.xtype;
        if (this.ext.initialConfig.align != undefined) {
            if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'button') {
                console.error('Can only use align property if parent is a Titlebar or Grid or Button');
                return;
            }
        }
        if (parentxtype === 'grid' || parentxtype === 'lockedgrid') {
            if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn' || childxtype === 'booleancolumn') {
                parentCmp.addColumn(childCmp);
                return;
            }
            else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                if (parentCmp.getHideHeaders() === false) {
                    //var j = parentCmp.items.items.length;
                    parentCmp.insert(1, childCmp);
                    return;
                }
                else {
                    parentCmp.add(childCmp);
                    return;
                }
            }
            else {
                console.log('unhandled else in addTheChild');
                console.log(parentxtype);
                console.log(childxtype);
            }
        }
        if (childxtype === 'tooltip') {
            parentCmp.setTooltip(childCmp);
            return;
        }
        if (childxtype === 'plugin') {
            parentCmp.setPlugin(childCmp);
            return;
        }
        else if (parentxtype === 'button' ||
            parentxtype === 'menuitem' ||
            parentxtype === 'menucheckitem') {
            if (childxtype === 'menu') {
                parentCmp.setMenu(childCmp);
                return;
            }
            else {
                console.log('child not added');
            }
        }
        if (childxtype === 'toolbar' && Ext.isClassic === true) {
            parentCmp.addDockedItems(childCmp);
            return;
        }
        else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
            if (parentCmp.getHideHeaders() === false) {
                //var j: any = parentCmp.items.items.length
                //parentCmp.insert(j - 1, childCmp)
                parentCmp.insert(1, childCmp);
                return;
            }
            else {
                parentCmp.add(childCmp);
                return;
            }
        }
        if (parentCmp.add != undefined) {
            parentCmp.add(childCmp);
            return;
        }
        console.log('child not added');
    }
    ngOnChanges(changes) {
        for (let propName in changes) {
            let verb = '';
            if (changes[propName].firstChange === true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            let val = changes[propName].currentValue;
            if (this.ext != undefined) {
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                var setFunction = 'set' + capPropName;
                if (this.ext[setFunction] != undefined) {
                    this.ext[setFunction](val);
                }
                else {
                    console.error(setFunction + ' not found for ' + this.ext.xtype);
                }
            }
            else {
                if (verb == 'changed') {
                    console.log('change needed and ext not defined');
                }
            }
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    }
    ngOnDestroy() {
        var childCmp;
        var parentCmp;
        try {
            childCmp = this.ext;
            if (this._hostComponent != null) {
                parentCmp = this._hostComponent.ext;
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
            console.log('*****');
            console.log(parentCmp);
            console.log(childCmp);
            console.log('*****');
        }
    }
}
__decorate([
    ContentChild('extroute', { static: false }),
    __metadata("design:type", Object)
], base.prototype, "_extroute", void 0);
__decorate([
    ContentChildren('extroute'),
    __metadata("design:type", QueryList)
], base.prototype, "_extroutes", void 0);
__decorate([
    ContentChild('extitem', { static: false }),
    __metadata("design:type", Object)
], base.prototype, "_extitem", void 0);
__decorate([
    ContentChildren('extitem'),
    __metadata("design:type", QueryList)
], base.prototype, "_extitems", void 0);

var ExtGridComponent_1;
class gridMetaData {
}
gridMetaData.XTYPE = 'grid';
gridMetaData.PROPERTIES = [
    'activeChildTabIndex',
    'activeItem',
    'alignSelf',
    'allowFocusingDisabledChildren',
    'alwaysOnTop',
    'ariaAttributes',
    'ariaDescribedBy',
    'ariaLabel',
    'ariaLabelledBy',
    'associatedData',
    'autoDestroy',
    'autoSize',
    'axisLock',
    'bind',
    'bodyCls',
    'border',
    'bottom',
    'bufferSize',
    'cardSwitchAnimation',
    'centered',
    'cls',
    'collapseDefaults',
    'collapsible',
    'columnLines',
    'columnMenu',
    'columnResize',
    'columns',
    'columnsMenuItem',
    'constrainAlign',
    'contentEl',
    'control',
    'controller',
    'data',
    'defaultFocus',
    'defaultListenerScope',
    'defaults',
    'defaultType',
    'deferEmptyText',
    'deselectOnContainerClick',
    'disabled',
    'disableSelection',
    'disclosureProperty',
    'displayed',
    'docked',
    'draggable',
    'emptyItemText',
    'emptyState',
    'emptyText',
    'emptyTextDefaults',
    'emptyTextProperty',
    'enableColumnMove',
    'flex',
    'floated',
    'focusableContainer',
    'focusCls',
    'fullscreen',
    'grouped',
    'groupFooter',
    'groupHeader',
    'grouping',
    'groupPlaceholder',
    'height',
    'hidden',
    'hideAnimation',
    'hideHeaders',
    'hideMode',
    'hideOnMaskTap',
    'hideScrollbar',
    'horizontalOverflow',
    'html',
    'id',
    'inactiveChildTabIndex',
    'indexBar',
    'infinite',
    'inline',
    'innerCls',
    'innerCtHeight',
    'innerWidth',
    'instanceCls',
    'itemButtonMode',
    'itemCls',
    'itemConfig',
    'itemContentCls',
    'itemDataMap',
    'itemId',
    'itemInnerCls',
    'itemRipple',
    'items',
    'itemsFocusable',
    'itemTpl',
    'keyMap',
    'keyMapEnabled',
    'keyMapTarget',
    'layout',
    'left',
    'listeners',
    'loadingHeight',
    'loadingText',
    'maintainChildNodes',
    'manageBorders',
    'margin',
    'markDirty',
    'masked',
    'maxHeight',
    'maxItemCache',
    'maxWidth',
    'minHeight',
    'minimumBufferDistance',
    'minWidth',
    'modal',
    'modelValidation',
    'multiColumnSort',
    'name',
    'nameable',
    'nameHolder',
    'onItemDisclosure',
    'padding',
    'pinFooters',
    'pinHeaders',
    'pinnedFooter',
    'pinnedFooterHeight',
    'pinnedHeader',
    'pinnedHeaderHeight',
    'plugins',
    'pressedDelay',
    'preventSelectionOnDisclose',
    'preventSelectionOnTool',
    'publishes',
    'record',
    'reference',
    'referenceHolder',
    'relative',
    'renderTo',
    'reserveScrollbar',
    'resetFocusPosition',
    'right',
    'ripple',
    'rowLines',
    'rowNumbers',
    'scrollable',
    'scrollDock',
    'scrollToTopOnRefresh',
    'selectable',
    'selection',
    'session',
    'shadow',
    'shareableName',
    'shim',
    'showAnimation',
    'sortable',
    'stateful',
    'statefulDefaults',
    'stateId',
    'store',
    'striped',
    'style',
    'tabIndex',
    'title',
    'titleBar',
    'toFrontOnShow',
    'tooltip',
    'top',
    'topRenderedIndex',
    'touchAction',
    'tpl',
    'tplWriteMode',
    'translatable',
    'triggerCtEvent',
    'triggerEvent',
    'twoWayBindable',
    'ui',
    'userCls',
    'userSelectable',
    'variableHeights',
    'verticalOverflow',
    'viewModel',
    'visibleHeight',
    'visibleLeft',
    'visibleTop',
    'visibleWidth',
    'weight',
    'weighted',
    'width',
    'x',
    'xtype',
    'y',
    'zIndex',
    'platformConfig',
    'responsiveConfig',
    'align',
    'fitToParent',
    'config'
];
gridMetaData.EVENTS = [
    { name: 'activate', parameters: 'newActiveItem,grid,oldActiveItem' },
    { name: 'activeItemchange', parameters: 'sender,value,oldValue' },
    { name: 'add', parameters: '' },
    { name: 'added', parameters: 'sender,container,index' },
    { name: 'beforeactiveItemchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforebottomchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecenteredchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforecomplete', parameters: 'editor,value,startValue,The' },
    { name: 'beforedisabledchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforedockedchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeedit', parameters: 'sender,location' },
    { name: 'beforegroupcollapse', parameters: 'grid,group' },
    { name: 'beforegroupexpand', parameters: 'grid,group' },
    { name: 'beforeheightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehiddenchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforehide', parameters: 'sender' },
    { name: 'beforeleftchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforemaxWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminHeightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeminWidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeorientationchange', parameters: '' },
    { name: 'beforerightchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforescrollablechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforeselectionextend', parameters: 'grid,An,extension' },
    { name: 'beforeshow', parameters: 'sender' },
    { name: 'beforestartedit', parameters: 'editor,boundEl,value,The' },
    { name: 'beforestorechange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforetofront', parameters: 'grid' },
    { name: 'beforetopchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'beforewidthchange', parameters: 'sender,value,oldValue,undefined' },
    { name: 'blur', parameters: 'grid,event' },
    { name: 'bottomchange', parameters: 'sender,value,oldValue' },
    { name: 'canceledit', parameters: 'editor,value,startValue' },
    { name: 'canceledit', parameters: 'sender,location' },
    { name: 'cellselection', parameters: 'grid,selection' },
    { name: 'centeredchange', parameters: 'sender,value,oldValue' },
    { name: 'childdoubletap', parameters: 'grid,location' },
    { name: 'childlongpress', parameters: 'grid,location' },
    { name: 'childmouseenter', parameters: 'grid,location' },
    { name: 'childmouseleave', parameters: 'grid,location' },
    { name: 'childsingletap', parameters: 'grid,location' },
    { name: 'childtap', parameters: 'grid,location' },
    { name: 'childtaphold', parameters: 'grid,location' },
    { name: 'childtouchcancel', parameters: 'grid,location' },
    { name: 'childtouchend', parameters: 'grid,location' },
    { name: 'childtouchmove', parameters: 'grid,location' },
    { name: 'childtouchstart', parameters: 'grid,location' },
    { name: 'columnadd', parameters: 'grid,column,index' },
    { name: 'columnhide', parameters: 'grid,column' },
    { name: 'columnmenucreated', parameters: 'grid,column,menu' },
    { name: 'columnmove', parameters: 'grid,column,fromIndex,toIndex' },
    { name: 'columnremove', parameters: 'grid,column' },
    { name: 'columnresize', parameters: 'grid,column,width' },
    { name: 'columnselection', parameters: 'grid,selection' },
    { name: 'columnshow', parameters: 'grid,column' },
    { name: 'columnsort', parameters: 'grid,column,direction' },
    { name: 'complete', parameters: 'editor,value,startValue,The' },
    { name: 'deactivate', parameters: 'oldActiveItem,grid,newActiveItem' },
    { name: 'deselect', parameters: 'grid,records' },
    { name: 'destroy', parameters: '' },
    { name: 'disabledchange', parameters: 'sender,value,oldValue' },
    { name: 'disclose', parameters: 'list,record,target,index,event' },
    { name: 'dockedchange', parameters: 'sender,value,oldValue' },
    { name: 'edit', parameters: 'sender,location' },
    { name: 'erased', parameters: 'sender' },
    { name: 'floatingchange', parameters: 'sender,positioned' },
    { name: 'focus', parameters: 'grid,event' },
    { name: 'focusenter', parameters: 'grid,event' },
    { name: 'focusleave', parameters: 'grid,event' },
    { name: 'fullscreen', parameters: 'sender' },
    { name: 'groupcollapse', parameters: 'grid,group' },
    { name: 'groupexpand', parameters: 'grid,group' },
    { name: 'heightchange', parameters: 'sender,value,oldValue' },
    { name: 'hiddenchange', parameters: 'sender,value,oldValue' },
    { name: 'hide', parameters: 'sender' },
    { name: 'initialize', parameters: 'sender' },
    { name: 'itemaction', parameters: 'grid,index,record,action' },
    { name: 'itemdoubletap', parameters: 'grid,index,target,record,e' },
    { name: 'itemlongpress', parameters: 'grid,index,target,record,e' },
    { name: 'itemmouseenter', parameters: 'grid,index,target,record,e' },
    { name: 'itemmouseleave', parameters: 'grid,index,target,record,e' },
    { name: 'itemsingletap', parameters: 'grid,index,target,record,e' },
    { name: 'itemswipe', parameters: 'grid,index,target,record,e' },
    { name: 'itemtap', parameters: 'grid,index,target,record,e' },
    { name: 'itemtaphold', parameters: 'grid,index,target,record,e' },
    { name: 'itemtouchcancel', parameters: 'grid,index,target,record,e' },
    { name: 'itemtouchend', parameters: 'grid,index,target,record,e' },
    { name: 'itemtouchmove', parameters: 'grid,index,target,record,e' },
    { name: 'itemtouchstart', parameters: 'grid,index,target,record,e' },
    { name: 'leftchange', parameters: 'sender,value,oldValue' },
    { name: 'maxHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'maxWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'minHeightchange', parameters: 'sender,value,oldValue' },
    { name: 'minWidthchange', parameters: 'sender,value,oldValue' },
    { name: 'move', parameters: '' },
    { name: 'moved', parameters: 'sender,container,toIndex,fromIndex' },
    { name: 'navigate', parameters: 'grid,to,from' },
    { name: 'orientationchange', parameters: '' },
    { name: 'painted', parameters: 'sender,element' },
    { name: 'positionedchange', parameters: 'sender,positioned' },
    { name: 'refresh', parameters: 'grid' },
    { name: 'remove', parameters: '' },
    { name: 'removed', parameters: 'sender,container,index' },
    { name: 'renderedchange', parameters: 'grid,item,rendered' },
    { name: 'resize', parameters: 'element,info' },
    { name: 'rightchange', parameters: 'sender,value,oldValue' },
    { name: 'scrollablechange', parameters: 'sender,value,oldValue' },
    { name: 'select', parameters: 'grid,selected' },
    { name: 'selectionextenderdrag', parameters: 'grid,An,extension' },
    { name: 'show', parameters: 'sender' },
    { name: 'specialkey', parameters: 'editor,field,event' },
    { name: 'startedit', parameters: 'editor,boundEl,value,The' },
    { name: 'storechange', parameters: 'sender,value,oldValue' },
    { name: 'tofront', parameters: 'grid' },
    { name: 'topchange', parameters: 'sender,value,oldValue' },
    { name: 'updatedata', parameters: 'sender,newData' },
    { name: 'validateedit', parameters: 'sender,location' },
    { name: 'widthchange', parameters: 'sender,value,oldValue' },
    { name: 'ready', parameters: '' }
];
gridMetaData.EVENTNAMES = [
    'activate',
    'activeItemchange',
    'add',
    'added',
    'beforeactiveItemchange',
    'beforebottomchange',
    'beforecenteredchange',
    'beforecomplete',
    'beforedisabledchange',
    'beforedockedchange',
    'beforeedit',
    'beforegroupcollapse',
    'beforegroupexpand',
    'beforeheightchange',
    'beforehiddenchange',
    'beforehide',
    'beforeleftchange',
    'beforemaxHeightchange',
    'beforemaxWidthchange',
    'beforeminHeightchange',
    'beforeminWidthchange',
    'beforeorientationchange',
    'beforerightchange',
    'beforescrollablechange',
    'beforeselectionextend',
    'beforeshow',
    'beforestartedit',
    'beforestorechange',
    'beforetofront',
    'beforetopchange',
    'beforewidthchange',
    'blur',
    'bottomchange',
    'canceledit',
    'canceledit',
    'cellselection',
    'centeredchange',
    'childdoubletap',
    'childlongpress',
    'childmouseenter',
    'childmouseleave',
    'childsingletap',
    'childtap',
    'childtaphold',
    'childtouchcancel',
    'childtouchend',
    'childtouchmove',
    'childtouchstart',
    'columnadd',
    'columnhide',
    'columnmenucreated',
    'columnmove',
    'columnremove',
    'columnresize',
    'columnselection',
    'columnshow',
    'columnsort',
    'complete',
    'deactivate',
    'deselect',
    'destroy',
    'disabledchange',
    'disclose',
    'dockedchange',
    'edit',
    'erased',
    'floatingchange',
    'focus',
    'focusenter',
    'focusleave',
    'fullscreen',
    'groupcollapse',
    'groupexpand',
    'heightchange',
    'hiddenchange',
    'hide',
    'initialize',
    'itemaction',
    'itemdoubletap',
    'itemlongpress',
    'itemmouseenter',
    'itemmouseleave',
    'itemsingletap',
    'itemswipe',
    'itemtap',
    'itemtaphold',
    'itemtouchcancel',
    'itemtouchend',
    'itemtouchmove',
    'itemtouchstart',
    'leftchange',
    'maxHeightchange',
    'maxWidthchange',
    'minHeightchange',
    'minWidthchange',
    'move',
    'moved',
    'navigate',
    'orientationchange',
    'painted',
    'positionedchange',
    'refresh',
    'remove',
    'removed',
    'renderedchange',
    'resize',
    'rightchange',
    'scrollablechange',
    'select',
    'selectionextenderdrag',
    'show',
    'specialkey',
    'startedit',
    'storechange',
    'tofront',
    'topchange',
    'updatedata',
    'validateedit',
    'widthchange',
    'ready'
];
let ExtGridComponent = ExtGridComponent_1 = class ExtGridComponent extends base {
    constructor(eRef, hostComponent) {
        super(eRef.nativeElement, gridMetaData, hostComponent);
        this.hostComponent = hostComponent;
    }
    ngOnInit() {
        this.baseOnInit(gridMetaData);
    }
    ngAfterContentInit() {
        this.baseAfterContentInit();
        //this['ready'].emit(this)
    }
};
ExtGridComponent = ExtGridComponent_1 = __decorate([
    Component({
        selector: 'grid',
        inputs: gridMetaData.PROPERTIES,
        outputs: gridMetaData.EVENTNAMES,
        providers: [{ provide: base, useExisting: forwardRef(() => ExtGridComponent_1) }],
        template: '<ng-template></ng-template>'
    }),
    __param(1, Host()), __param(1, Optional()), __param(1, SkipSelf()),
    __metadata("design:paramtypes", [ElementRef, base])
], ExtGridComponent);

let ExtAngularGridModule = class ExtAngularGridModule {
};
ExtAngularGridModule = __decorate([
    NgModule({
        imports: [CommonModule],
        declarations: [
            ExtGridComponent
        ],
        exports: [
            ExtGridComponent
        ]
    })
], ExtAngularGridModule);

export { ExtAngularGridModule, gridMetaData as ɵa, ExtGridComponent as ɵb, base as ɵc };
//# sourceMappingURL=sencha-ext-angular-grid.js.map
