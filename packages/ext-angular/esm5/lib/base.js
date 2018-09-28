/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
var base = /** @class */ (function () {
    function base(el, metaData) {
        var _this = this;
        this.metaData = metaData;
        this.verb = 'initialized';
        //console.log('constructor');console.log(el.nativeElement)
        this._nativeElement = el.nativeElement;
        metaData.EVENTS.forEach(function (event, n) {
            (/** @type {?} */ (_this))[event.name] = new EventEmitter();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    base.prototype.OnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        console.log("OnChanges");
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
        console.log("ngOnChanges");
        /** @type {?} */
        var changesMsgs = [];
        for (var propName in changes) {
            /** @type {?} */
            var val = changes[propName].currentValue;
            if (this.ext != undefined) {
                /** @type {?} */
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                this.ext['set' + capPropName](val);
            }
            changesMsgs.push(propName + " " + this.verb + " to \"" + val + "\"");
        }
        console.log("OnChanges: " + changesMsgs.join('; '));
        this.verb = 'changed'; // next time it will be a change
    };
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
    base.prototype.baseOnInit = /**
     * @param {?} metaData
     * @return {?}
     */
    function (metaData) {
        /** @type {?} */
        var me = this;
        /** @type {?} */
        var o = {};
        o.xtype = metaData.XTYPE;
        for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
            /** @type {?} */
            var prop = me.metaData.PROPERTIES[i];
            //need to handle listeners coming in here
            if ((o.xtype == 'cartesian' || o.xtype == 'polar') && prop == 'layout') {
            }
            else {
                if (me[prop] != undefined &&
                    prop != 'listeners' &&
                    prop != 'config' &&
                    prop != 'fitToParent') {
                    o[prop] = me[prop];
                }
            }
        }
        if ('true' == me.fitToParent) {
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
    base.prototype.baseAfterContentInit = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var parentCmp = this.extChildren.first.ext;
        /** @type {?} */
        var parentxtype = this.extChildren.first.ext.xtype;
        if (parentxtype == 'container' &&
            this.allChildren.first != undefined &&
            this.allChildren.length == 1) {
            //console.log(this.allChildren.first.nativeElement)
            parentCmp.setHtml(this.allChildren.first.nativeElement);
            return;
        }
        /** @type {?} */
        var extChildrenArray = this.extChildren.toArray();
        /** @type {?} */
        var arrayLength = extChildrenArray.length;
        for (var i = 1; i < arrayLength; i++) { //start after first one
            /** @type {?} */
            var childCmp = extChildrenArray[i].ext;
            /** @type {?} */
            var childxtype = childCmp.xtype;
            //console.log(`parent: ${parentxtype}, child: ${childxtype}`)
            if (parentxtype == 'grid') {
                if (childxtype == 'column' || childxtype == 'treecolumn' || childxtype == 'textcolumn' || childxtype == 'checkcolumn' || childxtype == 'datecolumn' || childxtype == 'rownumberer' || childxtype == 'numbercolumn') {
                    parentCmp.addColumn(childCmp);
                }
            }
            else if (parentxtype == 'tooltip') {
                parentCmp.setTooltip(childCmp);
            }
            else if (parentxtype == 'plugin') {
                parentCmp.setPlugin(childCmp);
            }
            else if (parentxtype == 'button') {
                if (childxtype == 'menu') {
                    parentCmp.setMenu(childCmp);
                }
                else {
                    console.log('child not added');
                }
            }
            else if (childxtype == 'toolbar' && Ext.isClassic == true) {
                parentCmp.addDockedItems(childCmp);
            }
            else if ((childxtype == 'toolbar' || childxtype == 'titlebar') && parentCmp.getHideHeaders != undefined) {
                if (parentCmp.getHideHeaders() == false) {
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
        this['ready'].emit(parentCmp);
    };
    base.propDecorators = {
        extChildren: [{ type: ContentChildren, args: [base, { descendants: false },] }],
        allChildren: [{ type: ContentChildren, args: ['ext',] }]
    };
    return base;
}());
export { base };
if (false) {
    /** @type {?} */
    base.prototype.ext;
    /** @type {?} */
    base.prototype._nativeElement;
    /** @type {?} */
    base.prototype.verb;
    /** @type {?} */
    base.prototype.extChildren;
    /** @type {?} */
    base.prototype.allChildren;
    /** @type {?} */
    base.prototype.metaData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBWSxZQUFZLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFVeEQsTUFBTSxlQUFlLENBQUM7O0lBTXJCLGNBQVksRUFBYyxFQUFVLFFBQWE7UUFBakQsaUJBTUM7UUFObUMsYUFBUSxHQUFSLFFBQVEsQ0FBSztvQkFZdEMsYUFBYTs7UUFWdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFBO1FBQ3RDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVSxFQUFFLENBQU07WUFDMUMsbUJBQU0sS0FBSSxFQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7U0FDN0MsQ0FBQyxDQUFBO0tBQ0g7Ozs7O0lBRUMsd0JBQVM7Ozs7SUFBVCxVQUFVLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUE7S0FDdkI7Ozs7O0lBR0gsMEJBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7O1FBQzFCLElBQUksV0FBVyxHQUFhLEVBQUUsQ0FBQTtRQUM5QixLQUFLLElBQUksUUFBUSxJQUFJLE9BQU8sRUFBRTs7WUFDNUIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLFlBQVksQ0FBQTtZQUN4QyxJQUFJLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFOztnQkFDekIsSUFBSSxXQUFXLEdBQUcsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxXQUFXLEVBQUUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxDQUFBO2dCQUN0RSxJQUFJLENBQUMsR0FB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UyxDQUFDLGNBQWMsRUFBRSxJQUFJLEtBQUssRUFBRTs7b0JBQ3ZDLElBQUksQ0FBQyxHQUFRLFNBQVMsQ0FBQyxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQTtvQkFDekMsU0FBUyxDQUFDLE1BQU0sQ0FBQyxDQUFDLEdBQUcsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFBO2lCQUNsQztxQkFBTTtvQkFDTCxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUN4QjthQUNGO2lCQUFNLElBQUksU0FBUyxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUU7Z0JBQ3JDLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDeEI7aUJBQU07Z0JBQ0wsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFBO2FBQy9CO1NBQ0Y7UUFDRCxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFBO0tBQzlCOzs4QkFsREEsZUFBZSxTQUFDLElBQUksRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUM7OEJBQzFDLGVBQWUsU0FBQyxLQUFLOztlQTVHeEI7O1NBYWEsSUFBSSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55O1xuaW1wb3J0IHtFbGVtZW50UmVmLEV2ZW50RW1pdHRlcixDb250ZW50Q2hpbGRyZW4sUXVlcnlMaXN0LFxuLy8gIEFmdGVyQ29udGVudENoZWNrZWQsXG4vLyAgQWZ0ZXJDb250ZW50SW5pdCxcbi8vICBBZnRlclZpZXdDaGVja2VkLFxuLy8gIEFmdGVyVmlld0luaXQsXG4vLyAgRG9DaGVjayxcbi8vICBPbkNoYW5nZXMsXG4vLyAgT25EZXN0cm95LFxuLy8gIE9uSW5pdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuZXhwb3J0IGNsYXNzIGJhc2Uge1xuICBwdWJsaWMgZXh0OiBhbnlcbiAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55XG5cbiAgY29uc3RydWN0b3IoZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgbWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yJyk7Y29uc29sZS5sb2coZWwubmF0aXZlRWxlbWVudClcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gZWwubmF0aXZlRWxlbWVudFxuICAgIG1ldGFEYXRhLkVWRU5UUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgIH0pXG4gIH1cblxuICAgIE9uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYE9uQ2hhbmdlc2ApXG4gICAgfVxuXG4gIHZlcmI6YW55ID0gJ2luaXRpYWxpemVkJ1xuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICBsZXQgY2hhbmdlc01zZ3M6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlXG4gICAgICBpZiAodGhpcy5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSlcbiAgICAgICAgdGhpcy5leHRbJ3NldCcrY2FwUHJvcE5hbWVdKHZhbClcbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dGhpcy52ZXJifSB0byBcIiR7dmFsfVwiYClcbiAgICB9XG4gICAgY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gICAgdGhpcy52ZXJiID0gJ2NoYW5nZWQnIC8vIG5leHQgdGltZSBpdCB3aWxsIGJlIGEgY2hhbmdlXG4gIH1cblxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nRG9DaGVjaygpIHtjb25zb2xlLmxvZyhgRG9DaGVja2ApfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyQ29udGVudENoZWNrZWRgKSB9XG4gIC8vbmdBZnRlclZpZXdJbml0KCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3SW5pdGApIH1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdDaGVja2VkYCkgfVxuICAvL25nT25EZXN0cm95KCkgeyBjb25zb2xlLmxvZyhgT25EZXN0cm95YCkgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PSAnY2FydGVzaWFuJyB8fCBvLnh0eXBlID09ICdwb2xhcicpICYmIHByb3AgPT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHsgXG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdOyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ3RydWUnID09IG1lLmZpdFRvUGFyZW50KSB7XG4gICAgICBvLnRvcD0wLCBcbiAgICAgIG8ubGVmdD0wLCBcbiAgICAgIG8ud2lkdGg9JzEwMCUnLCBcbiAgICAgIG8uaGVpZ2h0PScxMDAlJ1xuICAgIH1cbiAgICBpZiAobWUuY29uZmlnICE9PSB7fSApIHtcbiAgICAgIEV4dC5hcHBseShvLCBtZS5jb25maWcpO1xuICAgIH1cbiAgICBvLmxpc3RlbmVycyA9IHt9XG4gICAgdmFyIEVWRU5UUyA9IG1ldGFEYXRhLkVWRU5UU1xuICAgIEVWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudDogYW55LCBpbmRleDogYW55LCBhcnJheTogYW55KSB7XG4gICAgICBsZXQgZXZlbnRuYW1lOiBhbnkgPSBldmVudC5uYW1lXG4gICAgICBsZXQgZXZlbnRwYXJhbWV0ZXJzOiBhbnkgPSBldmVudC5wYXJhbWV0ZXJzXG4gICAgICBvLmxpc3RlbmVyc1tldmVudG5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGxldCBwYXJhbWV0ZXJzOiBhbnkgPSBldmVudHBhcmFtZXRlcnNcbiAgICAgICAgbGV0IHBhcm1zID0gcGFyYW1ldGVycy5zcGxpdCgnLCcpXG4gICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICBsZXQgZW1pdHBhcm1zOiBhbnkgPSB7fVxuICAgICAgICBmb3IgKGxldCBpID0gMCwgaiA9IHBhcm1zLmxlbmd0aDsgaSA8IGo7IGkrKyApIHtcbiAgICAgICAgICBlbWl0cGFybXNbcGFybXNbaV1dID0gYXJnc1tpXTtcbiAgICAgICAgfVxuICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZW1pdHBhcm1zKVxuICAgICAgfVxuICAgIH0pXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBvLnJlbmRlclRvID0gdGhpcy5fbmF0aXZlRWxlbWVudFxuICAgIH1cbiAgICB0aGlzLmV4dCA9IEV4dC5jcmVhdGUobylcbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oYmFzZSwge2Rlc2NlbmRhbnRzOiBmYWxzZX0pIGV4dENoaWxkcmVuOiBRdWVyeUxpc3Q8YW55PlxuICBAQ29udGVudENoaWxkcmVuKCdleHQnKSBhbGxDaGlsZHJlbjogUXVlcnlMaXN0PGFueT5cbiAgYmFzZUFmdGVyQ29udGVudEluaXQoKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdBZnRlckNvbnRlbnRJbml0OiAke3RoaXMuZXh0Q2hpbGRyZW4uZmlyc3QuZXh0Lnh0eXBlfSAke3RoaXMuZXh0Q2hpbGRyZW4ubGVuZ3RofSAke3RoaXMuYWxsQ2hpbGRyZW4ubGVuZ3RofWApXG4gICAgLy9jb25zb2xlLmxvZyh0aGlzLmFsbENoaWxkcmVuKVxuICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmV4dENoaWxkcmVuLmZpcnN0LmV4dFxuICAgIHZhciBwYXJlbnR4dHlwZSA9IHRoaXMuZXh0Q2hpbGRyZW4uZmlyc3QuZXh0Lnh0eXBlXG4gICAgaWYgKHBhcmVudHh0eXBlID09ICdjb250YWluZXInICYmXG4gICAgICAgIHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QgIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICB0aGlzLmFsbENoaWxkcmVuLmxlbmd0aCA9PSAxKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QubmF0aXZlRWxlbWVudClcbiAgICAgIHBhcmVudENtcC5zZXRIdG1sKHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QubmF0aXZlRWxlbWVudClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB2YXIgZXh0Q2hpbGRyZW5BcnJheTogYW55ID0gdGhpcy5leHRDaGlsZHJlbi50b0FycmF5KClcbiAgICB2YXIgYXJyYXlMZW5ndGggPSBleHRDaGlsZHJlbkFycmF5Lmxlbmd0aFxuICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYXJyYXlMZW5ndGg7IGkrKykgeyAvL3N0YXJ0IGFmdGVyIGZpcnN0IG9uZVxuICAgICAgdmFyIGNoaWxkQ21wID0gZXh0Q2hpbGRyZW5BcnJheVtpXS5leHRcbiAgICAgIHZhciBjaGlsZHh0eXBlID0gY2hpbGRDbXAueHR5cGVcbiAgICAgIC8vY29uc29sZS5sb2coYHBhcmVudDogJHtwYXJlbnR4dHlwZX0sIGNoaWxkOiAke2NoaWxkeHR5cGV9YClcbiAgICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnZ3JpZCcpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PSAndG9vbHRpcCcpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09ICdwbHVnaW4nKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT0gdHJ1ZSkge1xuICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09IGZhbHNlKSB7XG4gICAgICAgICAgdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHBhcmVudENtcClcbiAgfVxuXG59Il19