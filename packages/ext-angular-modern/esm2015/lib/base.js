/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, ContentChildren, QueryList } from '@angular/core';
export class base {
    /**
     * @param {?} el
     * @param {?} metaData
     */
    constructor(el, metaData) {
        this.metaData = metaData;
        //console.log('constructor');console.log(el.nativeElement)
        this._nativeElement = el.nativeElement;
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
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    //ngDoCheck() {console.log(`DoCheck`)}
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    //ngAfterContentChecked() { console.log(`AfterContentChecked`) }
    //ngAfterViewInit() { console.log(`AfterViewInit`) }
    // Beware! Called frequently!
    // Called in every change detection cycle anywhere on the page
    //ngAfterViewChecked() { console.log(`AfterViewChecked`) }
    //ngOnDestroy() { console.log(`OnDestroy`) }
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
    baseAfterContentInit() {
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
                    if (parentxtype === 'grid') {
                        if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
                            parentCmp.addColumn(childCmp);
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
    baseAfterContentInit2() {
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
    itemsa: [{ type: ContentChildren, args: ['item', { read: ElementRef },] }]
};
if (false) {
    /** @type {?} */
    base.prototype.ext;
    /**
     * @type {?}
     * @private
     */
    base.prototype._nativeElement;
    /** @type {?} */
    base.prototype.items;
    /** @type {?} */
    base.prototype.items2;
    /** @type {?} */
    base.prototype.itemsa;
    /**
     * @type {?}
     * @private
     */
    base.prototype.metaData;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItbW9kZXJuLyIsInNvdXJjZXMiOlsibGliL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFFTCxVQUFVLEVBQ1YsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsTUFBTSxPQUFPLElBQUk7Ozs7O0lBSWYsWUFBWSxFQUFjLEVBQVUsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDL0MsMERBQTBEO1FBQzFELElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQTtRQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQVUsRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUM5QixDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7YUFDN0M7aUJBQ0k7Z0JBQ0gsQ0FBQyxtQkFBSyxJQUFJLEVBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUN2RDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCxXQUFXLENBQUMsT0FBc0I7Ozs7WUFHNUIsV0FBVyxHQUFhLEVBQUU7UUFDOUIsS0FBSyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7O2dCQUN4QixJQUFJLEdBQUcsRUFBRTtZQUNiLElBQUksT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFdBQVcsSUFBSSxJQUFJLEVBQUU7Z0JBQ3pDLElBQUksR0FBRyxhQUFhLENBQUE7YUFDckI7aUJBQ0k7Z0JBQ0gsSUFBSSxHQUFHLFNBQVMsQ0FBQTthQUNqQjs7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Q0FBQTt5QkFDeEI7cUJBQ0Y7eUJBQU0sSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRTt3QkFDckMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtxQkFDeEI7eUJBQU07d0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO3FCQUMvQjtpQkFDRjtxQkFDSTtvQkFDSCxPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixDQUFDLENBQUE7aUJBQ2pDO2FBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQTtRQUNGLCtCQUErQjtRQUMvQixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzFCLENBQUM7OztvQkE1SUEsZUFBZSxTQUFDLE1BQU07cUJBQ3RCLGVBQWUsU0FBQyxNQUFNLEVBQUUsRUFBRSxJQUFJLEVBQUUsVUFBVSxFQUFFO3FCQStFNUMsZUFBZSxTQUFDLE1BQU0sRUFBRSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUU7Ozs7SUEvTDdDLG1CQUFlOzs7OztJQUNmLDhCQUEyQjs7SUE4RzNCLHFCQUE4Qzs7SUFDOUMsc0JBQTRFOztJQStFNUUsc0JBQTRFOzs7OztJQTVMaEQsd0JBQXFCIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgRXh0OiBhbnk7XG5pbXBvcnQge1xuICBPdXRwdXQsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcicpO2NvbnNvbGUubG9nKGVsLm5hdGl2ZUVsZW1lbnQpXG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnRcbiAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZSArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgLy9jb25zb2xlLmxvZyhjaGFuZ2VzKVxuICAgIGxldCBjaGFuZ2VzTXNnczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGxldCB2ZXJiID0gJydcbiAgICAgIGlmIChjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSA9PSB0cnVlKSB7XG4gICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJ1xuICAgICAgfVxuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHRoaXMuZXh0WydzZXQnK2NhcFByb3BOYW1lXSh2YWwpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gIH1cblxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nRG9DaGVjaygpIHtjb25zb2xlLmxvZyhgRG9DaGVja2ApfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyQ29udGVudENoZWNrZWRgKSB9XG4gIC8vbmdBZnRlclZpZXdJbml0KCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3SW5pdGApIH1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdDaGVja2VkYCkgfVxuICAvL25nT25EZXN0cm95KCkgeyBjb25zb2xlLmxvZyhgT25EZXN0cm95YCkgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgby54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdoYW5kbGVyJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50JykgeyBcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0cnVlID09PSBtZS5maXRUb1BhcmVudCkge1xuICAgICAgby50b3A9MCwgXG4gICAgICBvLmxlZnQ9MCwgXG4gICAgICBvLndpZHRoPScxMDAlJywgXG4gICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICB9XG4gICAgaWYgKG1lLmNvbmZpZyAhPT0ge30gKSB7XG4gICAgICBFeHQuYXBwbHkobywgbWUuY29uZmlnKTtcbiAgICB9XG4gICAgby5saXN0ZW5lcnMgPSB7fVxuICAgIHZhciBFVkVOVFMgPSBtZXRhRGF0YS5FVkVOVFNcbiAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgbGV0IGV2ZW50bmFtZTogYW55ID0gZXZlbnQubmFtZVxuICAgICAgbGV0IGV2ZW50cGFyYW1ldGVyczogYW55ID0gZXZlbnQucGFyYW1ldGVyc1xuICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0gZXZlbnRwYXJhbWV0ZXJzXG4gICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKVxuICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgbGV0IGVtaXRwYXJtczogYW55ID0ge31cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG4gICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgIH1cbiAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcylcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgby5yZW5kZXJUbyA9IHRoaXMuX25hdGl2ZUVsZW1lbnRcbiAgICB9XG4gICAgdGhpcy5leHQgPSBFeHQuY3JlYXRlKG8pXG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKCdpdGVtJykgaXRlbXM6IFF1ZXJ5TGlzdDxhbnk+XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2l0ZW0nLCB7IHJlYWQ6IEVsZW1lbnRSZWYgfSkgaXRlbXMyOiBRdWVyeUxpc3Q8RWxlbWVudFJlZj5cbiAgYmFzZUFmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnXFxuYmFzZUFmdGVyQ29udGVudEluaXQnKVxuXG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoIDwgMikge1xuICAgICAgLy9jb25zb2xlLmxvZygnMSBpdGVtJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuaXRlbXMubGVuZ3RoICsgJyBpdGVtcycpXG5cbiAgICB2YXIgYW55SXRlbXMgPSBbXVxuICAgIHZhciBlbFJlZkl0ZW1zID0gW11cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBhbnlJdGVtcy5wdXNoKGl0ZW0pXG4gICAgfSlcbiAgICB0aGlzLml0ZW1zMi5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgZWxSZWZJdGVtcy5wdXNoKGl0ZW0pXG4gICAgfSlcblxuICAgIGZvciAodmFyIGkgaW4gYW55SXRlbXMpIHtcbiAgICAgIHZhciBpdGVtID0gYW55SXRlbXNbaV1cbiAgICAgIHZhciBlbFJlZkl0ZW0gPSBlbFJlZkl0ZW1zW2ldXG4gICAgICBpZiAoaXRlbSAhPSB0aGlzKSB7XG4gICAgICAgIGlmIChpdGVtLmV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLmV4dC54dHlwZSArICcsIGNoaWxkOiAnICsgaXRlbS5leHQueHR5cGUpXG4gICAgICAgICAgdmFyIHBhcmVudHh0eXBlID0gdGhpc1snZXh0J10ueHR5cGVcbiAgICAgICAgICB2YXIgY2hpbGR4dHlwZSA9IGl0ZW1bJ2V4dCddLnh0eXBlXG4gICAgICAgICAgdmFyIHBhcmVudENtcCA9IHRoaXNbJ2V4dCddXG4gICAgICAgICAgdmFyIGNoaWxkQ21wID0gaXRlbVsnZXh0J11cblxuICAgICAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnbmF0aXZlJylcbiAgICAgICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBpdGVtLm5hdGl2ZUVsZW1lbnR9KVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2NvbXBvbmVudCcpXG4gICAgICAgICAgLy9jb25zb2xlLmxvZyhlbFJlZkl0ZW0pXG4gICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogZWxSZWZJdGVtLm5hdGl2ZUVsZW1lbnR9KVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ3NhbWUgaXRlbScpXG4gICAgICAvLyB9XG4gICAgfVxuICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHBhcmVudENtcClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuXG5cblxuICBAQ29udGVudENoaWxkcmVuKCdpdGVtJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGl0ZW1zYTogUXVlcnlMaXN0PEVsZW1lbnRSZWY+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0MigpIHtcbiAgICBpZiAodGhpcy5pdGVtc2EubGVuZ3RoIDwgMikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHRoaXMuaXRlbXNhLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ID09IHRoaXMuX25hdGl2ZUVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgICBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLmV4dC54dHlwZSArICcsIGNoaWxkOiAnICsgJ2NvbnRhaW5lcicpXG4gICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGl0ZW0ubmF0aXZlRWxlbWVudH0pXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGl0ZW1bJ2V4dCddICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlICsgJywgY2hpbGQ6ICcgKyBpdGVtLmV4dC54dHlwZSlcbiAgICAgICAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzLmV4dC54dHlwZVxuICAgICAgICAgIHZhciBjaGlsZHh0eXBlID0gaXRlbVsnZXh0J10ueHR5cGVcbiAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRcbiAgICAgICAgICB2YXIgY2hpbGRDbXAgPSBpdGVtWydleHQnXVxuXG4gICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICdwbHVnaW4nKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ21lbnUnKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZERvY2tlZEl0ZW1zKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIHZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBoYW5kbGVkJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pXG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG5cbn0iXX0=