/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, ContentChildren, QueryList } from '@angular/core';
export class base {
    /**
     * @param {?} nativeElement
     * @param {?} metaData
     * @param {?} hostComponent
     */
    constructor(nativeElement, metaData, hostComponent) {
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this._extChildren = false;
        //console.log('constructor');console.log(el.nativeElement)
        this._nativeElement = nativeElement;
        console.log('hostComponent');
        console.log(hostComponent);
        this._hostComponent = hostComponent;
        metaData.EVENTS.forEach((event, n) => {
            if (event.name != 'fullscreen') {
                ((/** @type {?} */ (this)))[event.name] = new EventEmitter();
            }
            else {
                ((/** @type {?} */ (this)))[event.name + 'event'] = new EventEmitter();
            }
        });
    }
    /**
     * @param {?} metaData
     * @return {?}
     */
    baseOnInit(metaData) {
        //console.log(`ngOnInit: ${metaData.XTYPE}`)
        /** @type {?} */
        let me = this;
        /** @type {?} */
        let o = {};
        o.xtype = metaData.XTYPE;
        for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
            /** @type {?} */
            var prop = me.metaData.PROPERTIES[i];
            //prop== 'title' is needed for children of tabpanel. 
            if (prop == 'handler') {
                if (me[prop] != undefined) {
                    o[prop] = me[prop];
                }
            }
            //need to handle listeners coming in here
            if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') {
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
        o.listeners = {};
        /** @type {?} */
        var EVENTS = metaData.EVENTS;
        EVENTS.forEach(function (event, index, array) {
            /** @type {?} */
            let eventname = event.name;
            /** @type {?} */
            let eventparameters = event.parameters;
            o.listeners[eventname] = function () {
                /** @type {?} */
                let parameters = eventparameters;
                /** @type {?} */
                let parms = parameters.split(',');
                /** @type {?} */
                let args = Array.prototype.slice.call(arguments);
                /** @type {?} */
                let emitparms = {};
                for (let i = 0, j = parms.length; i < j; i++) {
                    emitparms[parms[i]] = args[i];
                }
                me[eventname].emit(emitparms);
            };
        });
        if (this._nativeElement.parentElement != null) {
            o.renderTo = this._nativeElement;
        }
        this.ext = Ext.create(o);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        console.log(`ngOnDestroy`);
        console.log(this);
        //this.ext.parent.remove(this.ext)
    }
    /**
     * @return {?}
     */
    baseAfterContentInitNew() {
        //console.log('\nbaseAfterContentInit')
        if (this.items.length < 2) {
            //console.log('1 item')
            return;
        }
        //console.log(this.items.length + ' items')
        /** @type {?} */
        var anyItems = [];
        /** @type {?} */
        var elRefItems = [];
        this.items.forEach(item => {
            anyItems.push(item);
        });
        this.items2.forEach(item => {
            elRefItems.push(item);
        });
        for (var i in anyItems) {
            /** @type {?} */
            var item = anyItems[i];
            /** @type {?} */
            var elRefItem = elRefItems[i];
            if (item != this) {
                if (item.ext != undefined) {
                    //console.log('parent: ' + this.ext.xtype + ', child: ' + item.ext.xtype)
                    /** @type {?} */
                    var parentxtype = this['ext'].xtype;
                    /** @type {?} */
                    var childxtype = item['ext'].xtype;
                    /** @type {?} */
                    var parentCmp = this['ext'];
                    /** @type {?} */
                    var childCmp = item['ext'];
                    if (parentxtype === 'grid' || parentxtype === 'lockedgrid') {
                        if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
                            parentCmp.addColumn(childCmp);
                        }
                        else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                            if (parentCmp.getHideHeaders() === false) {
                                //var j = parentCmp.items.items.length;
                                parentCmp.insert(1, childCmp);
                            }
                            else {
                                parentCmp.add(childCmp);
                            }
                        }
                    }
                    else if (childxtype === 'tooltip') {
                        parentCmp.setTooltip(childCmp);
                    }
                    else if (childxtype === 'plugin') {
                        parentCmp.setPlugin(childCmp);
                    }
                    else if (parentxtype === 'button') {
                        if (childxtype === 'menu') {
                            parentCmp.setMenu(childCmp);
                        }
                        else {
                            console.log('child not added');
                        }
                    }
                    else if (childxtype === 'toolbar' && Ext.isClassic === true) {
                        parentCmp.addDockedItems(childCmp);
                    }
                    else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                        if (parentCmp.getHideHeaders() === false) {
                            //var j: any = parentCmp.items.items.length
                            //parentCmp.insert(j - 1, childCmp)
                            parentCmp.insert(1, childCmp);
                        }
                        else {
                            parentCmp.add(childCmp);
                        }
                    }
                    else if (parentCmp.add != undefined) {
                        parentCmp.add(childCmp);
                    }
                    else {
                        console.log('child not added');
                    }
                }
                else if (item.nativeElement != undefined) {
                    //console.log('native')
                    this.ext.add({ xtype: 'container', html: item.nativeElement });
                }
                else {
                    //console.log('component')
                    //console.log(elRefItem)
                    this.ext.add({ xtype: 'container', html: elRefItem.nativeElement });
                }
            }
            // else {
            //   console.log('same item')
            // }
        }
        //this['ready'].emit(parentCmp)
        this['ready'].emit(this);
    }
    /**
     * @return {?}
     */
    baseAfterContentInit() {
        console.log('host');
        console.log(this._hostComponent);
        console.log('native');
        console.log(this._nativeElement);
        console.log('_items');
        console.log(this._items);
        console.log(this._items.length);
        if (this._items.length > 0 && this._extChildren == true) {
            console.error('cant have both');
        }
        else if (this._items.length > 0) {
            console.error('do it');
            if (this.items.length < 2) {
                console.error('1 item');
                return;
            }
            //console.log(this.items.length + ' items')
            /** @type {?} */
            var anyItems = [];
            /** @type {?} */
            var elRefItems = [];
            this._items.forEach(item => { anyItems.push(item); });
            this._elRefItems.forEach(item => { elRefItems.push(item); });
            /** @type {?} */
            var j = 0;
            for (var i in anyItems) {
                if (j == 0) {
                    j++;
                    continue;
                }
                /** @type {?} */
                var item = anyItems[i];
                /** @type {?} */
                var elRefItem = elRefItems[i];
                if (item.nativeElement != undefined) {
                    //console.log('native')
                    this.ext.add({ xtype: 'container', html: item.nativeElement });
                }
                else {
                    //console.log('component')
                    //console.log(elRefItem)
                    this.ext.add({ xtype: 'container', html: elRefItem.nativeElement });
                }
            }
            return;
        }
        if (this.ext != undefined && this.hostComponent != undefined) {
            /** @type {?} */
            var parentxtype = this.hostComponent['ext'].xtype;
            /** @type {?} */
            var childxtype = this['ext'].xtype;
            /** @type {?} */
            var parentCmp = this.hostComponent['ext'];
            /** @type {?} */
            var childCmp = this['ext'];
            console.log('parent: ' + parentxtype + ', child: ' + childxtype);
            this.hostComponent._extChildren = true;
            if (parentxtype === 'grid') {
                if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
                    parentCmp.addColumn(childCmp);
                }
                else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                    if (parentCmp.getHideHeaders() === false) {
                        //var j = parentCmp.items.items.length;
                        parentCmp.insert(1, childCmp);
                    }
                    else {
                        parentCmp.add(childCmp);
                    }
                }
                else {
                    console.log('??');
                }
            }
            else if (childxtype === 'tooltip') {
                parentCmp.setTooltip(childCmp);
            }
            else if (childxtype === 'plugin') {
                parentCmp.setPlugin(childCmp);
            }
            else if (parentxtype === 'button') {
                if (childxtype === 'menu') {
                    parentCmp.setMenu(childCmp);
                }
                else {
                    console.log('child not added');
                }
            }
            else if (childxtype === 'toolbar' && Ext.isClassic === true) {
                parentCmp.addDockedItems(childCmp);
            }
            else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                if (parentCmp.getHideHeaders() === false) {
                    //var j: any = parentCmp.items.items.length
                    //parentCmp.insert(j - 1, childCmp)
                    parentCmp.insert(1, childCmp);
                }
                else {
                    parentCmp.add(childCmp);
                }
            }
            else if (parentCmp.add != undefined) {
                parentCmp.add(childCmp);
            }
            else {
                console.log('child not added');
            }
        }
        else if (this._nativeElement != undefined) {
            console.log(this._nativeElement);
            //this.ext.add({xtype: 'container',html: this._nativeElement})
        }
        else {
            console.log('component');
            //console.log(elRefItem)
            //this.ext.add({xtype: 'container',html: this._nativeElement})
        }
        //this['ready'].emit(parentCmp)
        this['ready'].emit(this);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        //console.log(`ngOnChanges`)
        //console.log(changes)
        /** @type {?} */
        let changesMsgs = [];
        for (let propName in changes) {
            /** @type {?} */
            let verb = '';
            if (changes[propName].firstChange == true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            /** @type {?} */
            let val = changes[propName].currentValue;
            if (this.ext != undefined) {
                /** @type {?} */
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                this.ext['set' + capPropName](val);
            }
            else {
                if (verb == 'changed') {
                    console.log('change needed and ext not defined');
                }
            }
            changesMsgs.push(`${propName} ${verb} to "${val}"`);
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    }
    /**
     * @return {?}
     */
    baseAfterContentInit3() {
        console.log('baseAfterContentInit');
        if (this.itemsa.length < 2) {
            return;
        }
        this.itemsa.forEach(item => {
            if (item.nativeElement == this._nativeElement) {
                return;
            }
            if (item.nativeElement != undefined) {
                //console.log('parent: ' + this.ext.xtype + ', child: ' + 'container')
                this.ext.add({ xtype: 'container', html: item.nativeElement });
            }
            else {
                if (item['ext'] != undefined) {
                    //console.log('parent: ' + this.ext.xtype + ', child: ' + item.ext.xtype)
                    /** @type {?} */
                    var parentxtype = this.ext.xtype;
                    /** @type {?} */
                    var childxtype = item['ext'].xtype;
                    /** @type {?} */
                    var parentCmp = this.ext;
                    /** @type {?} */
                    var childCmp = item['ext'];
                    if (parentxtype === 'grid') {
                        if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
                            parentCmp.addColumn(childCmp);
                        }
                        else if (parentCmp.add != undefined) {
                            parentCmp.add(childCmp);
                        }
                    }
                    else if (childxtype === 'tooltip') {
                        parentCmp.setTooltip(childCmp);
                    }
                    else if (childxtype === 'plugin') {
                        parentCmp.setPlugin(childCmp);
                    }
                    else if (parentxtype === 'button') {
                        if (childxtype === 'menu') {
                            parentCmp.setMenu(childCmp);
                        }
                        else {
                            console.log('child not added');
                        }
                    }
                    else if (childxtype === 'toolbar' && Ext.isClassic === true) {
                        parentCmp.addDockedItems(childCmp);
                    }
                    else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                        if (parentCmp.getHideHeaders() === false) {
                            /** @type {?} */
                            var j = parentCmp.items.items.length;
                            parentCmp.insert(j - 1, childCmp);
                        }
                        else {
                            parentCmp.add(childCmp);
                        }
                    }
                    else if (parentCmp.add != undefined) {
                        parentCmp.add(childCmp);
                    }
                    else {
                        console.log('child not added');
                    }
                }
                else {
                    console.log('child not handled');
                }
            }
        });
        //this['ready'].emit(parentCmp)
        this['ready'].emit(this);
    }
}
base.propDecorators = {
    items: [{ type: ContentChildren, args: ['item',] }],
    items2: [{ type: ContentChildren, args: ['item', { read: ElementRef },] }],
    _items: [{ type: ContentChildren, args: ['item',] }],
    _elRefItems: [{ type: ContentChildren, args: ['item', { read: ElementRef },] }],
    itemsa: [{ type: ContentChildren, args: ['item',] }]
};
if (false) {
    /** @type {?} */
    base.prototype.ext;
    /**
     * @type {?}
     * @private
     */
    base.prototype._nativeElement;
    /**
     * @type {?}
     * @private
     */
    base.prototype._hostComponent;
    /**
     * @type {?}
     * @private
     */
    base.prototype._extChildren;
    /** @type {?} */
    base.prototype.items;
    /** @type {?} */
    base.prototype.items2;
    /** @type {?} */
    base.prototype._items;
    /** @type {?} */
    base.prototype._elRefItems;
    /** @type {?} */
    base.prototype.itemsa;
    /**
     * @type {?}
     * @private
     */
    base.prototype.metaData;
    /** @type {?} */
    base.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFJTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUE7QUFFdEIsTUFBTSxPQUFPLElBQUk7Ozs7OztJQU1mLFlBQ0UsYUFBa0IsRUFDVixRQUFhLEVBQ2QsYUFBb0I7UUFEbkIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFPO1FBTHJCLGlCQUFZLEdBQVEsS0FBSyxDQUFBO1FBTy9CLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtRQUNuQyxPQUFPLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFBO1FBQzVCLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsQ0FBQyxLQUFVLEVBQUUsQ0FBTSxFQUFFLEVBQUU7WUFDOUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDOUIsQ0FBQyxtQkFBSyxJQUFJLEVBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQzdDO2lCQUNJO2dCQUNILENBQUMsbUJBQUssSUFBSSxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7YUFDdkQ7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQsVUFBVSxDQUFDLFFBQWE7OztZQUVsQixFQUFFLEdBQVEsSUFBSTs7WUFDZCxDQUFDLEdB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ZSxTQUFDLE1BQU07cUJBQ3RCLGVBQWUsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3FCQXVGNUMsZUFBZSxTQUFDLE1BQU07MEJBQ3RCLGVBQWUsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3FCQXNKNUMsZUFBZSxTQUFDLE1BQU07Ozs7SUF4VXZCLG1CQUFlOzs7OztJQUNmLDhCQUEyQjs7Ozs7SUFDM0IsOEJBQTJCOzs7OztJQUMzQiw0QkFBaUM7O0lBc0ZqQyxxQkFBOEM7O0lBQzlDLHNCQUE0RTs7SUF1RjVFLHNCQUErQzs7SUFDL0MsMkJBQWlGOztJQXNKakYsc0JBQStDOzs7OztJQWpVN0Msd0JBQXFCOztJQUNyQiw2QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuICBwcml2YXRlIF9ob3N0Q29tcG9uZW50OiBhbnlcbiAgcHJpdmF0ZSBfZXh0Q2hpbGRyZW46IGFueSA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IoXG4gICAgbmF0aXZlRWxlbWVudDogYW55LFxuICAgIHByaXZhdGUgbWV0YURhdGE6IGFueSxcbiAgICBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2VcbiAgKSB7XG4gICAgLy9jb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtjb25zb2xlLmxvZyhlbC5uYXRpdmVFbGVtZW50KVxuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBuYXRpdmVFbGVtZW50XG4gICAgY29uc29sZS5sb2coJ2hvc3RDb21wb25lbnQnKVxuICAgIGNvbnNvbGUubG9nKGhvc3RDb21wb25lbnQpXG4gICAgdGhpcy5faG9zdENvbXBvbmVudCA9IGhvc3RDb21wb25lbnRcbiAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZSArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgLy9wcm9wPT0gJ3RpdGxlJyBpcyBuZWVkZWQgZm9yIGNoaWxkcmVuIG9mIHRhYnBhbmVsLiBcbiAgICAgIGlmIChwcm9wID09ICdoYW5kbGVyJykge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICBpZiAoKG8ueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IG8ueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnaGFuZGxlcicgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHsgXG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdOyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHJ1ZSA9PT0gbWUuZml0VG9QYXJlbnQpIHtcbiAgICAgIG8udG9wPTAsIFxuICAgICAgby5sZWZ0PTAsIFxuICAgICAgby53aWR0aD0nMTAwJScsIFxuICAgICAgby5oZWlnaHQ9JzEwMCUnXG4gICAgfVxuICAgIGlmIChtZS5jb25maWcgIT09IHt9ICkge1xuICAgICAgRXh0LmFwcGx5KG8sIG1lLmNvbmZpZyk7XG4gICAgfVxuICAgIG8ubGlzdGVuZXJzID0ge31cbiAgICB2YXIgRVZFTlRTID0gbWV0YURhdGEuRVZFTlRTXG4gICAgRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50OiBhbnksIGluZGV4OiBhbnksIGFycmF5OiBhbnkpIHtcbiAgICAgIGxldCBldmVudG5hbWU6IGFueSA9IGV2ZW50Lm5hbWVcbiAgICAgIGxldCBldmVudHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50LnBhcmFtZXRlcnNcbiAgICAgIG8ubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50cGFyYW1ldGVyc1xuICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJylcbiAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgIGxldCBlbWl0cGFybXM6IGFueSA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrICkge1xuICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICB9XG4gICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAodGhpcy5fbmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIG8ucmVuZGVyVG8gPSB0aGlzLl9uYXRpdmVFbGVtZW50XG4gICAgfVxuICAgIHRoaXMuZXh0ID0gRXh0LmNyZWF0ZShvKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgY29uc29sZS5sb2coYG5nT25EZXN0cm95YClcbiAgICBjb25zb2xlLmxvZyh0aGlzKVxuICAgIC8vdGhpcy5leHQucGFyZW50LnJlbW92ZSh0aGlzLmV4dClcbiAgfVxuXG5cbiAgQENvbnRlbnRDaGlsZHJlbignaXRlbScpIGl0ZW1zOiBRdWVyeUxpc3Q8YW55PlxuICBAQ29udGVudENoaWxkcmVuKCdpdGVtJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGl0ZW1zMjogUXVlcnlMaXN0PEVsZW1lbnRSZWY+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0TmV3KCkge1xuICAgIC8vY29uc29sZS5sb2coJ1xcbmJhc2VBZnRlckNvbnRlbnRJbml0JylcblxuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA8IDIpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJzEgaXRlbScpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLml0ZW1zLmxlbmd0aCArICcgaXRlbXMnKVxuXG4gICAgdmFyIGFueUl0ZW1zOiBhbnlbXSA9IFtdXG4gICAgdmFyIGVsUmVmSXRlbXM6IGFueVtdID0gW11cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBhbnlJdGVtcy5wdXNoKGl0ZW0pXG4gICAgfSlcbiAgICB0aGlzLml0ZW1zMi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgZWxSZWZJdGVtcy5wdXNoKGl0ZW0pXG4gICAgfSlcblxuICAgIGZvciAodmFyIGkgaW4gYW55SXRlbXMpIHtcbiAgICAgIHZhciBpdGVtID0gYW55SXRlbXNbaV1cbiAgICAgIHZhciBlbFJlZkl0ZW0gPSBlbFJlZkl0ZW1zW2ldXG4gICAgICBpZiAoaXRlbSAhPSB0aGlzKSB7XG4gICAgICAgIGlmIChpdGVtLmV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLmV4dC54dHlwZSArICcsIGNoaWxkOiAnICsgaXRlbS5leHQueHR5cGUpXG4gICAgICAgICAgdmFyIHBhcmVudHh0eXBlID0gdGhpc1snZXh0J10ueHR5cGVcbiAgICAgICAgICB2YXIgY2hpbGR4dHlwZSA9IGl0ZW1bJ2V4dCddLnh0eXBlXG4gICAgICAgICAgdmFyIHBhcmVudENtcCA9IHRoaXNbJ2V4dCddXG4gICAgICAgICAgdmFyIGNoaWxkQ21wID0gaXRlbVsnZXh0J11cblxuICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnIHx8IHBhcmVudHh0eXBlID09PSAnbG9ja2VkZ3JpZCcpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgLy92YXIgaiA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sdGlwJykge1xuICAgICAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAvL3ZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgIC8vcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4gICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnbmF0aXZlJylcbiAgICAgICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBpdGVtLm5hdGl2ZUVsZW1lbnR9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NvbXBvbmVudCcpXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhlbFJlZkl0ZW0pXG4gICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogZWxSZWZJdGVtLm5hdGl2ZUVsZW1lbnR9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ3NhbWUgaXRlbScpXG4gICAgICAvLyB9XG4gICAgfVxuICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHBhcmVudENtcClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oJ2l0ZW0nKSBfaXRlbXM6IFF1ZXJ5TGlzdDxhbnk+XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2l0ZW0nLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgX2VsUmVmSXRlbXM6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPlxuICBiYXNlQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBjb25zb2xlLmxvZygnaG9zdCcpXG4gICAgY29uc29sZS5sb2codGhpcy5faG9zdENvbXBvbmVudClcbiAgICBjb25zb2xlLmxvZygnbmF0aXZlJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9uYXRpdmVFbGVtZW50KVxuXG4gICAgY29uc29sZS5sb2coJ19pdGVtcycpXG4gICAgY29uc29sZS5sb2codGhpcy5faXRlbXMpXG4gICAgY29uc29sZS5sb2codGhpcy5faXRlbXMubGVuZ3RoKVxuXG4gICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDAgJiYgdGhpcy5fZXh0Q2hpbGRyZW4gPT0gdHJ1ZSkge1xuICAgICAgY29uc29sZS5lcnJvcignY2FudCBoYXZlIGJvdGgnKVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPiAwKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdkbyBpdCcpXG4gICAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPCAyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJzEgaXRlbScpXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLml0ZW1zLmxlbmd0aCArICcgaXRlbXMnKVxuXG4gICAgICB2YXIgYW55SXRlbXM6IGFueVtdID0gW11cbiAgICAgIHZhciBlbFJlZkl0ZW1zOiBhbnlbXSA9IFtdXG4gICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge2FueUl0ZW1zLnB1c2goaXRlbSl9KVxuICAgICAgdGhpcy5fZWxSZWZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge2VsUmVmSXRlbXMucHVzaChpdGVtKX0pXG5cbiAgICAgIHZhciBqOiBhbnkgPSAwXG4gICAgICBmb3IgKHZhciBpIGluIGFueUl0ZW1zKSB7XG4gICAgICAgIGlmIChqID09IDApIHtqKys7Y29udGludWV9XG4gICAgICAgIHZhciBpdGVtID0gYW55SXRlbXNbaV1cbiAgICAgICAgdmFyIGVsUmVmSXRlbSA9IGVsUmVmSXRlbXNbaV1cbiAgICAgICAgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCduYXRpdmUnKVxuICAgICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGl0ZW0ubmF0aXZlRWxlbWVudH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnY29tcG9uZW50JylcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsUmVmSXRlbSlcbiAgICAgICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBlbFJlZkl0ZW0ubmF0aXZlRWxlbWVudH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIGlmICh0aGlzLmV4dCAhPSB1bmRlZmluZWQgJiYgdGhpcy5ob3N0Q29tcG9uZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHBhcmVudHh0eXBlID0gdGhpcy5ob3N0Q29tcG9uZW50WydleHQnXS54dHlwZVxuICAgICAgdmFyIGNoaWxkeHR5cGUgPSB0aGlzWydleHQnXS54dHlwZVxuICAgICAgdmFyIHBhcmVudENtcCA9IHRoaXMuaG9zdENvbXBvbmVudFsnZXh0J11cbiAgICAgIHZhciBjaGlsZENtcCA9IHRoaXNbJ2V4dCddXG4gICAgICBjb25zb2xlLmxvZygncGFyZW50OiAnICsgcGFyZW50eHR5cGUgKyAnLCBjaGlsZDogJyArIGNoaWxkeHR5cGUpXG4gICAgICB0aGlzLmhvc3RDb21wb25lbnQuX2V4dENoaWxkcmVuID0gdHJ1ZVxuXG4gICAgICBpZiAocGFyZW50eHR5cGUgPT09ICdncmlkJykge1xuICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvL3ZhciBqID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnPz8nKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sdGlwJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy92YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgIC8vcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4gICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgIH1cbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy5fbmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGNvbnNvbGUubG9nKHRoaXMuX25hdGl2ZUVsZW1lbnQpXG4gICAgICAvL3RoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IHRoaXMuX25hdGl2ZUVsZW1lbnR9KVxuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQnKVxuICAgICAgLy9jb25zb2xlLmxvZyhlbFJlZkl0ZW0pXG4gICAgICAvL3RoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IHRoaXMuX25hdGl2ZUVsZW1lbnR9KVxuICAgIH1cbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdChwYXJlbnRDbXApXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICBsZXQgY2hhbmdlc01zZ3M6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgdmVyYiA9ICcnXG4gICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT0gdHJ1ZSkge1xuICAgICAgICB2ZXJiID0gJ2luaXRpYWxpemVkJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZlcmIgPSAnY2hhbmdlZCdcbiAgICAgIH1cbiAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWVcbiAgICAgIGlmICh0aGlzLmV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKVxuICAgICAgICB0aGlzLmV4dFsnc2V0JytjYXBQcm9wTmFtZV0odmFsKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICh2ZXJiID09ICdjaGFuZ2VkJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UgbmVlZGVkIGFuZCBleHQgbm90IGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGFuZ2VzTXNncy5wdXNoKGAke3Byb3BOYW1lfSAke3ZlcmJ9IHRvIFwiJHt2YWx9XCJgKVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICB9XG5cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0RvQ2hlY2soKSB7Y29uc29sZS5sb2coYERvQ2hlY2tgKX1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlckNvbnRlbnRDaGVja2VkYCkgfVxuICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0luaXRgKSB9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlclZpZXdDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3Q2hlY2tlZGApIH1cbiAgLy9uZ09uRGVzdHJveSgpIHsgY29uc29sZS5sb2coYE9uRGVzdHJveWApIH1cblxuXG5cbiAgLy9AQ29udGVudENoaWxkcmVuKCdpdGVtJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGl0ZW1zYTogUXVlcnlMaXN0PEVsZW1lbnRSZWY+XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2l0ZW0nKSBpdGVtc2E6IFF1ZXJ5TGlzdDxhbnk+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0MyAoKSB7XG4gICAgY29uc29sZS5sb2coJ2Jhc2VBZnRlckNvbnRlbnRJbml0JylcbiAgICBpZiAodGhpcy5pdGVtc2EubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuaXRlbXNhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ID09IHRoaXMuX25hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLmV4dC54dHlwZSArICcsIGNoaWxkOiAnICsgJ2NvbnRhaW5lcicpXG4gICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGl0ZW0ubmF0aXZlRWxlbWVudH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGl0ZW1bJ2V4dCddICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlICsgJywgY2hpbGQ6ICcgKyBpdGVtLmV4dC54dHlwZSlcbiAgICAgICAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzLmV4dC54dHlwZVxuICAgICAgICAgIHZhciBjaGlsZHh0eXBlID0gaXRlbVsnZXh0J10ueHR5cGVcbiAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRcbiAgICAgICAgICB2YXIgY2hpbGRDbXAgPSBpdGVtWydleHQnXVxuXG4gICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICdwbHVnaW4nKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ21lbnUnKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZERvY2tlZEl0ZW1zKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBoYW5kbGVkJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG5cbn0iXX0=