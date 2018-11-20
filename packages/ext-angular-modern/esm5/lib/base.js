/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
var base = /** @class */ (function () {
    function base(el, metaData) {
        var _this = this;
        this.metaData = metaData;
        //console.log('constructor');console.log(el.nativeElement)
        this._nativeElement = el.nativeElement;
        metaData.EVENTS.forEach(function (event, n) {
            if (event.name != 'fullscreen') {
                (/** @type {?} */ (_this))[event.name] = new EventEmitter();
            }
            else {
                (/** @type {?} */ (_this))[event.name + 'event'] = new EventEmitter();
            }
        });
    }
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
        console.log(changes);
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
        console.log("OnChanges: " + changesMsgs.join('; '));
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
        if ('true' === me.fitToParent) {
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
        //console.log('before create for ' + o.xtype)
        //Ext.onReady(function() {
        //  me.ext = Ext.create(o)
        //  console.log(me.ext)
        //})
        this.ext = Ext.create(o);
        //console.log(this.ext)
    };
    /**
     * @return {?}
     */
    base.prototype.baseAfterContentInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        if (this.items.length < 2) {
            return;
        }
        this.items.forEach(function (item) {
            if (_this == item) {
                return;
            }
            if (item.nativeElement != undefined) {
                console.log('parent: ' + _this.ext.xtype + ', child: ' + 'container');
                _this.ext.add({ xtype: 'container', html: item.nativeElement });
            }
            else {
                if (item.ext != undefined) {
                    console.log('parent: ' + _this.ext.xtype + ', child: ' + item.ext.xtype);
                    /** @type {?} */
                    var parentxtype = _this.ext.xtype;
                    /** @type {?} */
                    var childxtype = item.ext.xtype;
                    /** @type {?} */
                    var parentCmp = _this.ext;
                    /** @type {?} */
                    var childCmp = item.ext;
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
                else {
                    console.log('child not handled');
                }
            }
        });
        //this['ready'].emit(parentCmp)
        this['ready'].emit(this);
    };
    base.propDecorators = {
        items: [{ type: ContentChildren, args: ['item',] }]
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
    base.prototype.items;
    /** @type {?} */
    base.prototype.metaData;
}

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBRUwsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7O0lBTXJCLGNBQVksRUFBYyxFQUFVLFFBQWE7UUFBakQsaUJBV0M7UUFYbUMsYUFBUSxHQUFSLFFBQVEsQ0FBSzs7UUFFL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFBO1FBQ3RDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVSxFQUFFLENBQU07WUFDMUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDOUIsbUJBQU0sS0FBSSxFQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7YUFDN0M7aUJBQ0k7Z0JBQ0gsbUJBQU0sS0FBSSxFQUFDLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxPQUFPLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQ3ZEO1NBQ0YsQ0FBQyxDQUFBO0tBQ0g7Ozs7O0lBRUQsMEJBQVc7Ozs7SUFBWCxVQUFZLE9BQXNCO1FBQ2hDLE9BQU8sQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUE7UUFDMUIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQTs7UUFDcEIsSUFBSSxXQUFXLEdBQWEsRUFBRSxDQUFBO1FBQzlCLEtBQUssSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOztZQUM1QixJQUFJLElBQUksR0FBRyxFQUFFLENBQUE7WUFDYixJQUFJLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxXQUFXLElBQUksSUFBSSxFQUFFO2dCQUN6QyxJQUFJLEdBQUcsYUFBYSxDQUFBO2FBQ3JCO2lCQUNJO2dCQUNI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QUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO3FCQUN4Qjt5QkFBTTt3QkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7cUJBQy9CO2lCQUNGO3FCQUNJO29CQUNILE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQTtpQkFDakM7YUFDRjtTQUNGLENBQUMsQ0FBQTs7UUFFRixJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFBO0tBQ3pCOzt3QkF6REEsZUFBZSxTQUFDLE1BQU07O2VBL0h6Qjs7U0FTYSxJQUFJIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgRXh0OiBhbnk7XG5pbXBvcnQge1xuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgYmFzZSB7XG4gIHB1YmxpYyBleHQ6IGFueVxuICBwcml2YXRlIF9uYXRpdmVFbGVtZW50OiBhbnlcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBtZXRhRGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtjb25zb2xlLmxvZyhlbC5uYXRpdmVFbGVtZW50KVxuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50XG4gICAgbWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbiAgICAgIGlmIChldmVudC5uYW1lICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWUgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICBjb25zb2xlLmxvZyhjaGFuZ2VzKVxuICAgIGxldCBjaGFuZ2VzTXNnczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGxldCB2ZXJiID0gJydcbiAgICAgIGlmIChjaGFuZ2VzW3Byb3BOYW1lXS5maXJzdENoYW5nZSA9PSB0cnVlKSB7XG4gICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJ1xuICAgICAgfVxuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHRoaXMuZXh0WydzZXQnK2NhcFByb3BOYW1lXSh2YWwpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICB9XG5cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0RvQ2hlY2soKSB7Y29uc29sZS5sb2coYERvQ2hlY2tgKX1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlckNvbnRlbnRDaGVja2VkYCkgfVxuICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0luaXRgKSB9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlclZpZXdDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3Q2hlY2tlZGApIH1cbiAgLy9uZ09uRGVzdHJveSgpIHsgY29uc29sZS5sb2coYE9uRGVzdHJveWApIH1cblxuICBiYXNlT25Jbml0KG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uSW5pdDogJHttZXRhRGF0YS5YVFlQRX1gKVxuICAgIGxldCBtZTogYW55ID0gdGhpc1xuICAgIGxldCBvOiBhbnkgPSB7fVxuICAgIG8ueHR5cGUgPSBtZXRhRGF0YS5YVFlQRVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWUubWV0YURhdGEuUFJPUEVSVElFUy5sZW5ndGg7IGkrKykgeyBcbiAgICAgIHZhciBwcm9wID0gbWUubWV0YURhdGEuUFJPUEVSVElFU1tpXTtcbiAgICAgIGlmIChwcm9wID09ICdoYW5kbGVyJykge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICBpZiAoKG8ueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IG8ueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnaGFuZGxlcicgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHsgXG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdOyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoJ3RydWUnID09PSBtZS5maXRUb1BhcmVudCkge1xuICAgICAgby50b3A9MCwgXG4gICAgICBvLmxlZnQ9MCwgXG4gICAgICBvLndpZHRoPScxMDAlJywgXG4gICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICB9XG4gICAgaWYgKG1lLmNvbmZpZyAhPT0ge30gKSB7XG4gICAgICBFeHQuYXBwbHkobywgbWUuY29uZmlnKTtcbiAgICB9XG4gICAgby5saXN0ZW5lcnMgPSB7fVxuICAgIHZhciBFVkVOVFMgPSBtZXRhRGF0YS5FVkVOVFNcbiAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgbGV0IGV2ZW50bmFtZTogYW55ID0gZXZlbnQubmFtZVxuICAgICAgbGV0IGV2ZW50cGFyYW1ldGVyczogYW55ID0gZXZlbnQucGFyYW1ldGVyc1xuICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0gZXZlbnRwYXJhbWV0ZXJzXG4gICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKVxuICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgbGV0IGVtaXRwYXJtczogYW55ID0ge31cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG4gICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgIH1cbiAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcylcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgby5yZW5kZXJUbyA9IHRoaXMuX25hdGl2ZUVsZW1lbnRcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZygnYmVmb3JlIGNyZWF0ZSBmb3IgJyArIG8ueHR5cGUpXG4gICAgLy9FeHQub25SZWFkeShmdW5jdGlvbigpIHtcbiAgICAvLyAgbWUuZXh0ID0gRXh0LmNyZWF0ZShvKVxuICAgIC8vICBjb25zb2xlLmxvZyhtZS5leHQpXG4gICAgLy99KVxuICAgIHRoaXMuZXh0ID0gRXh0LmNyZWF0ZShvKVxuICAgIC8vY29uc29sZS5sb2codGhpcy5leHQpXG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKCdpdGVtJykgaXRlbXM6IFF1ZXJ5TGlzdDxhbnk+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLml0ZW1zLmxlbmd0aCA8IDIpIHtcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICB0aGlzLml0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBpZiAodGhpcyA9PSBpdGVtKSB7XG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlICsgJywgY2hpbGQ6ICcgKyAnY29udGFpbmVyJylcbiAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoaXRlbS5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlICsgJywgY2hpbGQ6ICcgKyBpdGVtLmV4dC54dHlwZSlcbiAgICAgICAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzLmV4dC54dHlwZVxuICAgICAgICAgIHZhciBjaGlsZHh0eXBlID0gaXRlbS5leHQueHR5cGVcbiAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRcbiAgICAgICAgICB2YXIgY2hpbGRDbXAgPSBpdGVtLmV4dFxuXG4gICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sdGlwJykge1xuICAgICAgICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAnYnV0dG9uJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICB2YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgaGFuZGxlZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHBhcmVudENtcClcbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuXG59Il19