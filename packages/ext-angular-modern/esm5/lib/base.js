/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, ContentChildren, QueryList } from '@angular/core';
var base = /** @class */ (function () {
    function base(nativeElement, metaData, hostComponent) {
        var _this = this;
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this._extChildren = false;
        //console.log('constructor');console.log(el.nativeElement)
        this._nativeElement = nativeElement;
        console.log('hostComponent');
        console.log(hostComponent);
        this._hostComponent = hostComponent;
        metaData.EVENTS.forEach(function (event, n) {
            if (event.name != 'fullscreen') {
                ((/** @type {?} */ (_this)))[event.name] = new EventEmitter();
            }
            else {
                ((/** @type {?} */ (_this)))[event.name + 'event'] = new EventEmitter();
            }
        });
    }
    /**
     * @param {?} metaData
     * @return {?}
     */
    base.prototype.baseOnInit = /**
     * @param {?} metaData
     * @return {?}
     */
    function (metaData) {
        //console.log(`ngOnInit: ${metaData.XTYPE}`)
        /** @type {?} */
        var me = this;
        /** @type {?} */
        var o = {};
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
            var eventname = event.name;
            /** @type {?} */
            var eventparameters = event.parameters;
            o.listeners[eventname] = function () {
                /** @type {?} */
                var parameters = eventparameters;
                /** @type {?} */
                var parms = parameters.split(',');
                /** @type {?} */
                var args = Array.prototype.slice.call(arguments);
                /** @type {?} */
                var emitparms = {};
                for (var i_1 = 0, j = parms.length; i_1 < j; i_1++) {
                    emitparms[parms[i_1]] = args[i_1];
                }
                me[eventname].emit(emitparms);
            };
        });
        if (this._nativeElement.parentElement != null) {
            o.renderTo = this._nativeElement;
        }
        this.ext = Ext.create(o);
    };
    /**
     * @return {?}
     */
    base.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        console.log("ngOnDestroy");
        console.log(this);
        //this.ext.parent.remove(this.ext)
    };
    /**
     * @return {?}
     */
    base.prototype.baseAfterContentInitNew = /**
     * @return {?}
     */
    function () {
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
        this.items.forEach(function (item) {
            anyItems.push(item);
        });
        this.items2.forEach(function (item) {
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
    };
    /**
     * @return {?}
     */
    base.prototype.baseAfterContentInit = /**
     * @return {?}
     */
    function () {
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
            this._items.forEach(function (item) { anyItems.push(item); });
            this._elRefItems.forEach(function (item) { elRefItems.push(item); });
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
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    base.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        //console.log(`ngOnChanges`)
        //console.log(changes)
        /** @type {?} */
        var changesMsgs = [];
        for (var propName in changes) {
            /** @type {?} */
            var verb = '';
            if (changes[propName].firstChange == true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            /** @type {?} */
            var val = changes[propName].currentValue;
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
            changesMsgs.push(propName + " " + verb + " to \"" + val + "\"");
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    };
    /**
     * @return {?}
     */
    base.prototype.baseAfterContentInit3 = /**
     * @return {?}
     */
    function () {
        var _this = this;
        console.log('baseAfterContentInit');
        if (this.itemsa.length < 2) {
            return;
        }
        this.itemsa.forEach(function (item) {
            if (item.nativeElement == _this._nativeElement) {
                return;
            }
            if (item.nativeElement != undefined) {
                //console.log('parent: ' + this.ext.xtype + ', child: ' + 'container')
                _this.ext.add({ xtype: 'container', html: item.nativeElement });
            }
            else {
                if (item['ext'] != undefined) {
                    //console.log('parent: ' + this.ext.xtype + ', child: ' + item.ext.xtype)
                    /** @type {?} */
                    var parentxtype = _this.ext.xtype;
                    /** @type {?} */
                    var childxtype = item['ext'].xtype;
                    /** @type {?} */
                    var parentCmp = _this.ext;
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
    };
    base.propDecorators = {
        items: [{ type: ContentChildren, args: ['item',] }],
        items2: [{ type: ContentChildren, args: ['item', { read: ElementRef },] }],
        _items: [{ type: ContentChildren, args: ['item',] }],
        _elRefItems: [{ type: ContentChildren, args: ['item', { read: ElementRef },] }],
        itemsa: [{ type: ContentChildren, args: ['item',] }]
    };
    return base;
}());
export { base };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFJTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUE7QUFFdEI7SUFNRSxjQUNFLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQW9CO1FBSDdCLGlCQWtCQztRQWhCUyxhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQU87UUFMckIsaUJBQVksR0FBUSxLQUFLLENBQUE7UUFPL0IsMERBQTBEO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFBO1FBQ25DLE9BQU8sQ0FBQyxHQUFHLENBQUMsZUFBZSxDQUFDLENBQUE7UUFDNUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTtRQUMxQixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtRQUNuQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxVQUFDLEtBQVUsRUFBRSxDQUFNO1lBQzFDLElBQUksS0FBSyxDQUFDLElBQUksSUFBSSxZQUFZLEVBQUU7Z0JBQzlCLENBQUMsbUJBQUssS0FBSSxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUM3QztpQkFDSTtnQkFDSCxDQUFDLG1CQUFLLEtBQUksRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQ3ZEO1FBQ0gsQ0FBQyxDQUFDLENBQUE7SUFDSixDQUFDOzs7OztJQUVELHlCQUFVOzs7O0lBQVYsVUFBVyxRQUFhOzs7WUFFbEIsRUFBRSxHQUFRLElBQUk7O1lBQ2QsQ0FBQyxHQUFRLEVBQUU7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Ozt3QkE1U0EsZUFBZSxTQUFDLE1BQU07eUJBQ3RCLGVBQWUsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3lCQXVGNUMsZUFBZSxTQUFDLE1BQU07OEJBQ3RCLGVBQWUsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3lCQXNKNUMsZUFBZSxTQUFDLE1BQU07O0lBK0R6QixXQUFDO0NBQUEsQUF4WUQsSUF3WUM7U0F4WVksSUFBSTs7O0lBQ2YsbUJBQWU7Ozs7O0lBQ2YsOEJBQTJCOzs7OztJQUMzQiw4QkFBMkI7Ozs7O0lBQzNCLDRCQUFpQzs7SUFzRmpDLHFCQUE4Qzs7SUFDOUMsc0JBQTRFOztJQXVGNUUsc0JBQStDOztJQUMvQywyQkFBaUY7O0lBc0pqRixzQkFBK0M7Ozs7O0lBalU3Qyx3QkFBcUI7O0lBQ3JCLDZCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGNsYXNzIGJhc2Uge1xuICBwdWJsaWMgZXh0OiBhbnlcbiAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55XG4gIHByaXZhdGUgX2hvc3RDb21wb25lbnQ6IGFueVxuICBwcml2YXRlIF9leHRDaGlsZHJlbjogYW55ID0gZmFsc2VcblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYXRpdmVFbGVtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBtZXRhRGF0YTogYW55LFxuICAgIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZVxuICApIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcicpO2NvbnNvbGUubG9nKGVsLm5hdGl2ZUVsZW1lbnQpXG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnRcbiAgICBjb25zb2xlLmxvZygnaG9zdENvbXBvbmVudCcpXG4gICAgY29uc29sZS5sb2coaG9zdENvbXBvbmVudClcbiAgICB0aGlzLl9ob3N0Q29tcG9uZW50ID0gaG9zdENvbXBvbmVudFxuICAgIG1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICBpZiAoZXZlbnQubmFtZSAhPSAnZnVsbHNjcmVlbicpIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmFzZU9uSW5pdChtZXRhRGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkluaXQ6ICR7bWV0YURhdGEuWFRZUEV9YClcbiAgICBsZXQgbWU6IGFueSA9IHRoaXNcbiAgICBsZXQgbzogYW55ID0ge31cbiAgICBvLnh0eXBlID0gbWV0YURhdGEuWFRZUEVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lLm1ldGFEYXRhLlBST1BFUlRJRVMubGVuZ3RoOyBpKyspIHsgXG4gICAgICB2YXIgcHJvcCA9IG1lLm1ldGFEYXRhLlBST1BFUlRJRVNbaV07XG4gICAgICAvL3Byb3A9PSAndGl0bGUnIGlzIG5lZWRlZCBmb3IgY2hpbGRyZW4gb2YgdGFicGFuZWwuIFxuICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgby54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50JykgeyBcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0cnVlID09PSBtZS5maXRUb1BhcmVudCkge1xuICAgICAgby50b3A9MCwgXG4gICAgICBvLmxlZnQ9MCwgXG4gICAgICBvLndpZHRoPScxMDAlJywgXG4gICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICB9XG4gICAgaWYgKG1lLmNvbmZpZyAhPT0ge30gKSB7XG4gICAgICBFeHQuYXBwbHkobywgbWUuY29uZmlnKTtcbiAgICB9XG4gICAgby5saXN0ZW5lcnMgPSB7fVxuICAgIHZhciBFVkVOVFMgPSBtZXRhRGF0YS5FVkVOVFNcbiAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgbGV0IGV2ZW50bmFtZTogYW55ID0gZXZlbnQubmFtZVxuICAgICAgbGV0IGV2ZW50cGFyYW1ldGVyczogYW55ID0gZXZlbnQucGFyYW1ldGVyc1xuICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0gZXZlbnRwYXJhbWV0ZXJzXG4gICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKVxuICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgbGV0IGVtaXRwYXJtczogYW55ID0ge31cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG4gICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgIH1cbiAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcylcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgby5yZW5kZXJUbyA9IHRoaXMuX25hdGl2ZUVsZW1lbnRcbiAgICB9XG4gICAgdGhpcy5leHQgPSBFeHQuY3JlYXRlKG8pXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICBjb25zb2xlLmxvZyhgbmdPbkRlc3Ryb3lgKVxuICAgIGNvbnNvbGUubG9nKHRoaXMpXG4gICAgLy90aGlzLmV4dC5wYXJlbnQucmVtb3ZlKHRoaXMuZXh0KVxuICB9XG5cblxuICBAQ29udGVudENoaWxkcmVuKCdpdGVtJykgaXRlbXM6IFF1ZXJ5TGlzdDxhbnk+XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2l0ZW0nLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaXRlbXMyOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj5cbiAgYmFzZUFmdGVyQ29udGVudEluaXROZXcoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnXFxuYmFzZUFmdGVyQ29udGVudEluaXQnKVxuXG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoIDwgMikge1xuICAgICAgLy9jb25zb2xlLmxvZygnMSBpdGVtJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuaXRlbXMubGVuZ3RoICsgJyBpdGVtcycpXG5cbiAgICB2YXIgYW55SXRlbXM6IGFueVtdID0gW11cbiAgICB2YXIgZWxSZWZJdGVtczogYW55W10gPSBbXVxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGFueUl0ZW1zLnB1c2goaXRlbSlcbiAgICB9KVxuICAgIHRoaXMuaXRlbXMyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBlbFJlZkl0ZW1zLnB1c2goaXRlbSlcbiAgICB9KVxuXG4gICAgZm9yICh2YXIgaSBpbiBhbnlJdGVtcykge1xuICAgICAgdmFyIGl0ZW0gPSBhbnlJdGVtc1tpXVxuICAgICAgdmFyIGVsUmVmSXRlbSA9IGVsUmVmSXRlbXNbaV1cbiAgICAgIGlmIChpdGVtICE9IHRoaXMpIHtcbiAgICAgICAgaWYgKGl0ZW0uZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlICsgJywgY2hpbGQ6ICcgKyBpdGVtLmV4dC54dHlwZSlcbiAgICAgICAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzWydleHQnXS54dHlwZVxuICAgICAgICAgIHZhciBjaGlsZHh0eXBlID0gaXRlbVsnZXh0J10ueHR5cGVcbiAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpc1snZXh0J11cbiAgICAgICAgICB2YXIgY2hpbGRDbXAgPSBpdGVtWydleHQnXVxuXG4gICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcgfHwgcGFyZW50eHR5cGUgPT09ICdsb2NrZWRncmlkJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyY29sdW1uJykge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciBqID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICdwbHVnaW4nKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ21lbnUnKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZERvY2tlZEl0ZW1zKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgLy9wYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCduYXRpdmUnKVxuICAgICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGl0ZW0ubmF0aXZlRWxlbWVudH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnY29tcG9uZW50JylcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsUmVmSXRlbSlcbiAgICAgICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBlbFJlZkl0ZW0ubmF0aXZlRWxlbWVudH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnc2FtZSBpdGVtJylcbiAgICAgIC8vIH1cbiAgICB9XG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbignaXRlbScpIF9pdGVtczogUXVlcnlMaXN0PGFueT5cbiAgQENvbnRlbnRDaGlsZHJlbignaXRlbScsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBfZWxSZWZJdGVtczogUXVlcnlMaXN0PEVsZW1lbnRSZWY+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGNvbnNvbGUubG9nKCdob3N0JylcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9ob3N0Q29tcG9uZW50KVxuICAgIGNvbnNvbGUubG9nKCduYXRpdmUnKVxuICAgIGNvbnNvbGUubG9nKHRoaXMuX25hdGl2ZUVsZW1lbnQpXG5cbiAgICBjb25zb2xlLmxvZygnX2l0ZW1zJylcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9pdGVtcylcbiAgICBjb25zb2xlLmxvZyh0aGlzLl9pdGVtcy5sZW5ndGgpXG5cbiAgICBpZiAodGhpcy5faXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLl9leHRDaGlsZHJlbiA9PSB0cnVlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKCdjYW50IGhhdmUgYm90aCcpXG4gICAgfVxuICAgIGVsc2UgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ2RvIGl0JylcbiAgICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA8IDIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignMSBpdGVtJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuaXRlbXMubGVuZ3RoICsgJyBpdGVtcycpXG5cbiAgICAgIHZhciBhbnlJdGVtczogYW55W10gPSBbXVxuICAgICAgdmFyIGVsUmVmSXRlbXM6IGFueVtdID0gW11cbiAgICAgIHRoaXMuX2l0ZW1zLmZvckVhY2goaXRlbSA9PiB7YW55SXRlbXMucHVzaChpdGVtKX0pXG4gICAgICB0aGlzLl9lbFJlZkl0ZW1zLmZvckVhY2goaXRlbSA9PiB7ZWxSZWZJdGVtcy5wdXNoKGl0ZW0pfSlcblxuICAgICAgdmFyIGo6IGFueSA9IDBcbiAgICAgIGZvciAodmFyIGkgaW4gYW55SXRlbXMpIHtcbiAgICAgICAgaWYgKGogPT0gMCkge2orKztjb250aW51ZX1cbiAgICAgICAgdmFyIGl0ZW0gPSBhbnlJdGVtc1tpXVxuICAgICAgICB2YXIgZWxSZWZJdGVtID0gZWxSZWZJdGVtc1tpXVxuICAgICAgICBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ25hdGl2ZScpXG4gICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjb21wb25lbnQnKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coZWxSZWZJdGVtKVxuICAgICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGVsUmVmSXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCAmJiB0aGlzLmhvc3RDb21wb25lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzLmhvc3RDb21wb25lbnRbJ2V4dCddLnh0eXBlXG4gICAgICB2YXIgY2hpbGR4dHlwZSA9IHRoaXNbJ2V4dCddLnh0eXBlXG4gICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5ob3N0Q29tcG9uZW50WydleHQnXVxuICAgICAgdmFyIGNoaWxkQ21wID0gdGhpc1snZXh0J11cbiAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyBwYXJlbnR4dHlwZSArICcsIGNoaWxkOiAnICsgY2hpbGR4dHlwZSlcbiAgICAgIHRoaXMuaG9zdENvbXBvbmVudC5fZXh0Q2hpbGRyZW4gPSB0cnVlXG5cbiAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vdmFyIGogPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc/PycpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvL3ZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgLy9wYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICAgIH1cbiAgICBlbHNlIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgY29uc29sZS5sb2codGhpcy5fbmF0aXZlRWxlbWVudClcbiAgICAgIC8vdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogdGhpcy5fbmF0aXZlRWxlbWVudH0pXG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudCcpXG4gICAgICAvL2NvbnNvbGUubG9nKGVsUmVmSXRlbSlcbiAgICAgIC8vdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogdGhpcy5fbmF0aXZlRWxlbWVudH0pXG4gICAgfVxuICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHBhcmVudENtcClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKVxuICAgIGxldCBjaGFuZ2VzTXNnczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGxldCB2ZXJiID0gJydcbiAgICAgIGlmIChjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSA9PSB0cnVlKSB7XG4gICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJ1xuICAgICAgfVxuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHRoaXMuZXh0WydzZXQnK2NhcFByb3BOYW1lXSh2YWwpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gIH1cblxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nRG9DaGVjaygpIHtjb25zb2xlLmxvZyhgRG9DaGVja2ApfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyQ29udGVudENoZWNrZWRgKSB9XG4gIC8vbmdBZnRlclZpZXdJbml0KCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3SW5pdGApIH1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdDaGVja2VkYCkgfVxuICAvL25nT25EZXN0cm95KCkgeyBjb25zb2xlLmxvZyhgT25EZXN0cm95YCkgfVxuXG5cblxuICAvL0BDb250ZW50Q2hpbGRyZW4oJ2l0ZW0nLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaXRlbXNhOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj5cbiAgQENvbnRlbnRDaGlsZHJlbignaXRlbScpIGl0ZW1zYTogUXVlcnlMaXN0PGFueT5cbiAgYmFzZUFmdGVyQ29udGVudEluaXQzICgpIHtcbiAgICBjb25zb2xlLmxvZygnYmFzZUFmdGVyQ29udGVudEluaXQnKVxuICAgIGlmICh0aGlzLml0ZW1zYS5sZW5ndGggPCAyKSB7XG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdGhpcy5pdGVtc2EuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgPT0gdGhpcy5fbmF0aXZlRWxlbWVudCkge1xuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlICsgJywgY2hpbGQ6ICcgKyAnY29udGFpbmVyJylcbiAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXRlbVsnZXh0J10gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50OiAnICsgdGhpcy5leHQueHR5cGUgKyAnLCBjaGlsZDogJyArIGl0ZW0uZXh0Lnh0eXBlKVxuICAgICAgICAgIHZhciBwYXJlbnR4dHlwZSA9IHRoaXMuZXh0Lnh0eXBlXG4gICAgICAgICAgdmFyIGNoaWxkeHR5cGUgPSBpdGVtWydleHQnXS54dHlwZVxuICAgICAgICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmV4dFxuICAgICAgICAgIHZhciBjaGlsZENtcCA9IGl0ZW1bJ2V4dCddXG5cbiAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT09ICdncmlkJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyY29sdW1uJykge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGhhbmRsZWQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfSlcbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdChwYXJlbnRDbXApXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cblxufSJdfQ==