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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsibGliL2Jhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7OztBQUNBLE9BQU8sRUFBWSxZQUFZLEVBQUMsZUFBZSxFQUFDLFNBQVMsRUFVeEQsTUFBTSxlQUFlLENBQUM7QUFFdkIsTUFBTTs7Ozs7SUFJSixZQUFZLEVBQWMsRUFBVSxRQUFhO1FBQWIsYUFBUSxHQUFSLFFBQVEsQ0FBSztvQkFZdEMsYUFBYTs7UUFWdEIsSUFBSSxDQUFDLGNBQWMsR0FBRyxFQUFFLENBQUMsYUFBYSxDQUFBO1FBQ3RDLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLENBQUMsS0FBVSxFQUFFLENBQU0sRUFBRSxFQUFFO1lBQzlDLG1CQUFNLElBQUksRUFBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1NBQzdDLENBQUMsQ0FBQTtLQUNIOzs7OztJQUVDLFNBQVMsQ0FBQyxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO0tBQ3ZCOzs7OztJQUdILFdBQVcsQ0FBQyxPQUFzQjtRQUNoQyxPQUFPLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFBOztRQUMxQixJQUFJLFdBQVcsR0FBYSxFQUFFLENBQUE7UUFDOUIsS0FBSyxJQUFJLFFBQVEsSUFBSSxPQUFPLEVBQUU7O1lBQzVCLElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxRQUFRLENBQUMsQ0FBQyxZQUFZLENBQUE7WUFDeEMsSUFBSSxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRTs7Z0JBQ3pCLElBQUksV0FBVyxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQTtnQkFDdEUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxL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QkFDbEM7cUJBQU07b0JBQ0wsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDeEI7YUFDRjtpQkFBTSxJQUFJLFNBQVMsQ0FBQyxHQUFHLElBQUksU0FBUyxFQUFFO2dCQUNyQyxTQUFTLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ3hCO2lCQUFNO2dCQUNMLE9BQU8sQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsQ0FBQTthQUMvQjtTQUNGO1FBQ0QsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTtLQUM5Qjs7OzBCQWxEQSxlQUFlLFNBQUMsSUFBSSxFQUFFLEVBQUMsV0FBVyxFQUFFLEtBQUssRUFBQzswQkFDMUMsZUFBZSxTQUFDLEtBQUsiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueTtcbmltcG9ydCB7RWxlbWVudFJlZixFdmVudEVtaXR0ZXIsQ29udGVudENoaWxkcmVuLFF1ZXJ5TGlzdCxcbi8vICBBZnRlckNvbnRlbnRDaGVja2VkLFxuLy8gIEFmdGVyQ29udGVudEluaXQsXG4vLyAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbi8vICBBZnRlclZpZXdJbml0LFxuLy8gIERvQ2hlY2ssXG4vLyAgT25DaGFuZ2VzLFxuLy8gIE9uRGVzdHJveSxcbi8vICBPbkluaXQsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuXG4gIGNvbnN0cnVjdG9yKGVsOiBFbGVtZW50UmVmLCBwcml2YXRlIG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdjb25zdHJ1Y3RvcicpO2NvbnNvbGUubG9nKGVsLm5hdGl2ZUVsZW1lbnQpXG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IGVsLm5hdGl2ZUVsZW1lbnRcbiAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICB9KVxuICB9XG5cbiAgICBPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnNvbGUubG9nKGBPbkNoYW5nZXNgKVxuICAgIH1cblxuICB2ZXJiOmFueSA9ICdpbml0aWFsaXplZCdcbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIGNvbnNvbGUubG9nKGBuZ09uQ2hhbmdlc2ApXG4gICAgbGV0IGNoYW5nZXNNc2dzOiBzdHJpbmdbXSA9IFtdXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHRoaXMuZXh0WydzZXQnK2NhcFByb3BOYW1lXSh2YWwpXG4gICAgICB9XG4gICAgICBjaGFuZ2VzTXNncy5wdXNoKGAke3Byb3BOYW1lfSAke3RoaXMudmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICAgIHRoaXMudmVyYiA9ICdjaGFuZ2VkJyAvLyBuZXh0IHRpbWUgaXQgd2lsbCBiZSBhIGNoYW5nZVxuICB9XG5cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0RvQ2hlY2soKSB7Y29uc29sZS5sb2coYERvQ2hlY2tgKX1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlckNvbnRlbnRDaGVja2VkYCkgfVxuICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0luaXRgKSB9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlclZpZXdDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3Q2hlY2tlZGApIH1cbiAgLy9uZ09uRGVzdHJveSgpIHsgY29uc29sZS5sb2coYE9uRGVzdHJveWApIH1cblxuICBiYXNlT25Jbml0KG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uSW5pdDogJHttZXRhRGF0YS5YVFlQRX1gKVxuICAgIGxldCBtZTogYW55ID0gdGhpc1xuICAgIGxldCBvOiBhbnkgPSB7fVxuICAgIG8ueHR5cGUgPSBtZXRhRGF0YS5YVFlQRVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWUubWV0YURhdGEuUFJPUEVSVElFUy5sZW5ndGg7IGkrKykgeyBcbiAgICAgIHZhciBwcm9wID0gbWUubWV0YURhdGEuUFJPUEVSVElFU1tpXTtcbiAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICBpZiAoKG8ueHR5cGUgPT0gJ2NhcnRlc2lhbicgfHwgby54dHlwZSA9PSAncG9sYXInKSAmJiBwcm9wID09ICdsYXlvdXQnKSB7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnZml0VG9QYXJlbnQnKSB7IFxuICAgICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCd0cnVlJyA9PSBtZS5maXRUb1BhcmVudCkge1xuICAgICAgby50b3A9MCwgXG4gICAgICBvLmxlZnQ9MCwgXG4gICAgICBvLndpZHRoPScxMDAlJywgXG4gICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICB9XG4gICAgaWYgKG1lLmNvbmZpZyAhPT0ge30gKSB7XG4gICAgICBFeHQuYXBwbHkobywgbWUuY29uZmlnKTtcbiAgICB9XG4gICAgby5saXN0ZW5lcnMgPSB7fVxuICAgIHZhciBFVkVOVFMgPSBtZXRhRGF0YS5FVkVOVFNcbiAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgbGV0IGV2ZW50bmFtZTogYW55ID0gZXZlbnQubmFtZVxuICAgICAgbGV0IGV2ZW50cGFyYW1ldGVyczogYW55ID0gZXZlbnQucGFyYW1ldGVyc1xuICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBsZXQgcGFyYW1ldGVyczogYW55ID0gZXZlbnRwYXJhbWV0ZXJzXG4gICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKVxuICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgbGV0IGVtaXRwYXJtczogYW55ID0ge31cbiAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG4gICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgIH1cbiAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcylcbiAgICAgIH1cbiAgICB9KVxuICAgIGlmICh0aGlzLl9uYXRpdmVFbGVtZW50LnBhcmVudEVsZW1lbnQgIT0gbnVsbCkge1xuICAgICAgby5yZW5kZXJUbyA9IHRoaXMuX25hdGl2ZUVsZW1lbnRcbiAgICB9XG4gICAgdGhpcy5leHQgPSBFeHQuY3JlYXRlKG8pXG4gIH1cblxuICBAQ29udGVudENoaWxkcmVuKGJhc2UsIHtkZXNjZW5kYW50czogZmFsc2V9KSBleHRDaGlsZHJlbjogUXVlcnlMaXN0PGFueT5cbiAgQENvbnRlbnRDaGlsZHJlbignZXh0JykgYWxsQ2hpbGRyZW46IFF1ZXJ5TGlzdDxhbnk+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIC8vY29uc29sZS5sb2coYG5nQWZ0ZXJDb250ZW50SW5pdDogJHt0aGlzLmV4dENoaWxkcmVuLmZpcnN0LmV4dC54dHlwZX0gJHt0aGlzLmV4dENoaWxkcmVuLmxlbmd0aH0gJHt0aGlzLmFsbENoaWxkcmVuLmxlbmd0aH1gKVxuICAgIC8vY29uc29sZS5sb2codGhpcy5hbGxDaGlsZHJlbilcbiAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRDaGlsZHJlbi5maXJzdC5leHRcbiAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzLmV4dENoaWxkcmVuLmZpcnN0LmV4dC54dHlwZVxuICAgIGlmIChwYXJlbnR4dHlwZSA9PSAnY29udGFpbmVyJyAmJlxuICAgICAgICB0aGlzLmFsbENoaWxkcmVuLmZpcnN0ICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgdGhpcy5hbGxDaGlsZHJlbi5sZW5ndGggPT0gMSkge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmFsbENoaWxkcmVuLmZpcnN0Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICBwYXJlbnRDbXAuc2V0SHRtbCh0aGlzLmFsbENoaWxkcmVuLmZpcnN0Lm5hdGl2ZUVsZW1lbnQpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgdmFyIGV4dENoaWxkcmVuQXJyYXk6IGFueSA9IHRoaXMuZXh0Q2hpbGRyZW4udG9BcnJheSgpXG4gICAgdmFyIGFycmF5TGVuZ3RoID0gZXh0Q2hpbGRyZW5BcnJheS5sZW5ndGhcbiAgICBmb3IgKHZhciBpID0gMTsgaSA8IGFycmF5TGVuZ3RoOyBpKyspIHsgLy9zdGFydCBhZnRlciBmaXJzdCBvbmVcbiAgICAgIHZhciBjaGlsZENtcCA9IGV4dENoaWxkcmVuQXJyYXlbaV0uZXh0XG4gICAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlXG4gICAgICAvL2NvbnNvbGUubG9nKGBwYXJlbnQ6ICR7cGFyZW50eHR5cGV9LCBjaGlsZDogJHtjaGlsZHh0eXBlfWApXG4gICAgICBpZiAocGFyZW50eHR5cGUgPT0gJ2dyaWQnKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PSAnbnVtYmVyY29sdW1uJykge1xuICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PSAncGx1Z2luJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PSAnbWVudScpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09IHRydWUpIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZERvY2tlZEl0ZW1zKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PSBmYWxzZSkge1xuICAgICAgICAgIHZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICB9XG4gICAgfVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdChwYXJlbnRDbXApXG4gIH1cblxufSJdfQ==