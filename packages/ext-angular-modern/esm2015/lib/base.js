/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,uselessCode} checked by tsc
 */
import { EventEmitter, ContentChildren, QueryList } from '@angular/core';
export class base {
    /**
     * @param {?} el
     * @param {?} metaData
     */
    constructor(el, metaData) {
        this.metaData = metaData;
        this.verb = 'initialized';
        //console.log('constructor');console.log(el.nativeElement)
        this._nativeElement = el.nativeElement;
        metaData.EVENTS.forEach((event, n) => {
            (/** @type {?} */ (this))[event.name] = new EventEmitter();
        });
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    OnChanges(changes) {
        console.log(`OnChanges`);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        console.log(`ngOnChanges`);
        /** @type {?} */
        let changesMsgs = [];
        for (let propName in changes) {
            /** @type {?} */
            let val = changes[propName].currentValue;
            if (this.ext != undefined) {
                /** @type {?} */
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                this.ext['set' + capPropName](val);
            }
            changesMsgs.push(`${propName} ${this.verb} to "${val}"`);
        }
        console.log(`OnChanges: ${changesMsgs.join('; ')}`);
        this.verb = 'changed'; // next time it will be a change
    }
    /**
     * @param {?} metaData
     * @return {?}
     */
    baseOnInit(metaData) {
        /** @type {?} */
        let me = this;
        /** @type {?} */
        let o = {};
        o.xtype = metaData.XTYPE;
        for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
            /** @type {?} */
            var prop = me.metaData.PROPERTIES[i];
            //need to handle listeners coming in here
            if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') {
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
        /** @type {?} */
        var parentCmp = this.extChildren.first.ext;
        /** @type {?} */
        var parentxtype = this.extChildren.first.ext.xtype;
        if (parentxtype === 'container' &&
            this.allChildren.first != undefined &&
            this.allChildren.length === 1) {
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
            if (parentxtype === 'grid') {
                if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
                    parentCmp.addColumn(childCmp);
                }
            }
            else if (parentxtype === 'tooltip') {
                parentCmp.setTooltip(childCmp);
            }
            else if (parentxtype === 'plugin') {
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
        this['ready'].emit(parentCmp);
    }
}
base.propDecorators = {
    extChildren: [{ type: ContentChildren, args: [base, { descendants: false },] }],
    allChildren: [{ type: ContentChildren, args: ['ext',] }]
};
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBRUwsWUFBWSxFQUNaLGVBQWUsRUFDZixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUM7QUFFdkIsTUFBTTs7Ozs7SUFJSixZQUFZLEVBQWMsRUFBVSxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztvQkFZdEMsYUFBYTs7UUFWdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFBO1FBQ3RDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBVSxFQUFFLENBQU0sRUFBRSxFQUFFO1lBQzlDLG1CQUFNLElBQUksRUFBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1NBQzdDLENBQUMsQ0FBQTtLQUNIOzs7OztJQUVDLFNBQVMsQ0FBQyxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0tBQ3ZCOzs7OztJQUdILFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBOztRQUMxQixJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUE7UUFDOUIsS0FBSyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7O1lBQzVCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUE7WUFDeEMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRTs7Z0JBQ3pCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdEUsSUFBSSxDQUFDLEdBQUcs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Q0FBQTtpQkFDbEM7cUJBQU07b0JBQ0wsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDeEI7YUFDRjtpQkFBTSxJQUFJLFNBQVMsQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUNyQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3hCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTthQUMvQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtLQUM5Qjs7OzBCQWxEQSxlQUFlLFNBQUMsSUFBSSxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQzswQkFDMUMsZUFBZSxTQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueTtcbmltcG9ydCB7XG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcicpO2NvbnNvbGUubG9nKGVsLm5hdGl2ZUVsZW1lbnQpXG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnRcbiAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICB9KVxuICB9XG5cbiAgICBPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnNvbGUubG9nKGBPbkNoYW5nZXNgKVxuICAgIH1cblxuICB2ZXJiOmFueSA9ICdpbml0aWFsaXplZCdcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgbGV0IGNoYW5nZXNNc2dzOiBzdHJpbmdbXSA9IFtdXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHRoaXMuZXh0WydzZXQnK2NhcFByb3BOYW1lXSh2YWwpXG4gICAgICB9XG4gICAgICBjaGFuZ2VzTXNncy5wdXNoKGAke3Byb3BOYW1lfSAke3RoaXMudmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICAgIHRoaXMudmVyYiA9ICdjaGFuZ2VkJyAvLyBuZXh0IHRpbWUgaXQgd2lsbCBiZSBhIGNoYW5nZVxuICB9XG5cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0RvQ2hlY2soKSB7Y29uc29sZS5sb2coYERvQ2hlY2tgKX1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlckNvbnRlbnRDaGVja2VkYCkgfVxuICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0luaXRgKSB9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlclZpZXdDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3Q2hlY2tlZGApIH1cbiAgLy9uZ09uRGVzdHJveSgpIHsgY29uc29sZS5sb2coYE9uRGVzdHJveWApIH1cblxuICBiYXNlT25Jbml0KG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uSW5pdDogJHttZXRhRGF0YS5YVFlQRX1gKVxuICAgIGxldCBtZTogYW55ID0gdGhpc1xuICAgIGxldCBvOiBhbnkgPSB7fVxuICAgIG8ueHR5cGUgPSBtZXRhRGF0YS5YVFlQRVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWUubWV0YURhdGEuUFJPUEVSVElFUy5sZW5ndGg7IGkrKykgeyBcbiAgICAgIHZhciBwcm9wID0gbWUubWV0YURhdGEuUFJPUEVSVElFU1tpXTtcbiAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICBpZiAoKG8ueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IG8ueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnZml0VG9QYXJlbnQnKSB7IFxuICAgICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCd0cnVlJyA9PT0gbWUuZml0VG9QYXJlbnQpIHtcbiAgICAgIG8udG9wPTAsIFxuICAgICAgby5sZWZ0PTAsIFxuICAgICAgby53aWR0aD0nMTAwJScsIFxuICAgICAgby5oZWlnaHQ9JzEwMCUnXG4gICAgfVxuICAgIGlmIChtZS5jb25maWcgIT09IHt9ICkge1xuICAgICAgRXh0LmFwcGx5KG8sIG1lLmNvbmZpZyk7XG4gICAgfVxuICAgIG8ubGlzdGVuZXJzID0ge31cbiAgICB2YXIgRVZFTlRTID0gbWV0YURhdGEuRVZFTlRTXG4gICAgRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50OiBhbnksIGluZGV4OiBhbnksIGFycmF5OiBhbnkpIHtcbiAgICAgIGxldCBldmVudG5hbWU6IGFueSA9IGV2ZW50Lm5hbWVcbiAgICAgIGxldCBldmVudHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50LnBhcmFtZXRlcnNcbiAgICAgIG8ubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50cGFyYW1ldGVyc1xuICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJylcbiAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgIGxldCBlbWl0cGFybXM6IGFueSA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrICkge1xuICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICB9XG4gICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAodGhpcy5fbmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIG8ucmVuZGVyVG8gPSB0aGlzLl9uYXRpdmVFbGVtZW50XG4gICAgfVxuICAgIHRoaXMuZXh0ID0gRXh0LmNyZWF0ZShvKVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihiYXNlLCB7ZGVzY2VuZGFudHM6IGZhbHNlfSkgZXh0Q2hpbGRyZW46IFF1ZXJ5TGlzdDxhbnk+XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2V4dCcpIGFsbENoaWxkcmVuOiBRdWVyeUxpc3Q8YW55PlxuICBiYXNlQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ0FmdGVyQ29udGVudEluaXQ6ICR7dGhpcy5leHRDaGlsZHJlbi5maXJzdC5leHQueHR5cGV9ICR7dGhpcy5leHRDaGlsZHJlbi5sZW5ndGh9ICR7dGhpcy5hbGxDaGlsZHJlbi5sZW5ndGh9YClcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuYWxsQ2hpbGRyZW4pXG4gICAgdmFyIHBhcmVudENtcCA9IHRoaXMuZXh0Q2hpbGRyZW4uZmlyc3QuZXh0XG4gICAgdmFyIHBhcmVudHh0eXBlID0gdGhpcy5leHRDaGlsZHJlbi5maXJzdC5leHQueHR5cGVcbiAgICBpZiAocGFyZW50eHR5cGUgPT09ICdjb250YWluZXInICYmXG4gICAgICAgIHRoaXMuYWxsQ2hpbGRyZW4uZmlyc3QgIT0gdW5kZWZpbmVkICYmIFxuICAgICAgICB0aGlzLmFsbENoaWxkcmVuLmxlbmd0aCA9PT0gMSkge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmFsbENoaWxkcmVuLmZpcnN0Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICBwYXJlbnRDbXAuc2V0SHRtbCh0aGlzLmFsbENoaWxkcmVuLmZpcnN0Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGV4dENoaWxkcmVuQXJyYXk6IGFueSA9IHRoaXMuZXh0Q2hpbGRyZW4udG9BcnJheSgpXG4gICAgdmFyIGFycmF5TGVuZ3RoID0gZXh0Q2hpbGRyZW5BcnJheS5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFycmF5TGVuZ3RoOyBpKyspIHsgLy9zdGFydCBhZnRlciBmaXJzdCBvbmVcbiAgICAgIHZhciBjaGlsZENtcCA9IGV4dENoaWxkcmVuQXJyYXlbaV0uZXh0XG4gICAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlXG4gICAgICAvL2NvbnNvbGUubG9nKGBwYXJlbnQ6ICR7cGFyZW50eHR5cGV9LCBjaGlsZDogJHtjaGlsZHh0eXBlfWApXG4gICAgICBpZiAocGFyZW50eHR5cGUgPT09ICdncmlkJykge1xuICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgIH1cbiAgICB9XG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHBhcmVudENtcClcbiAgfVxuXG59Il19