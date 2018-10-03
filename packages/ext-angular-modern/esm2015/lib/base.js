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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbImxpYi9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7QUFDQSxPQUFPLEVBQVksWUFBWSxFQUFDLGVBQWUsRUFBQyxTQUFTLEVBVXhELE1BQU0sZUFBZSxDQUFDO0FBRXZCLE1BQU07Ozs7O0lBSUosWUFBWSxFQUFjLEVBQVUsUUFBYTtRQUFiLGFBQVEsR0FBUixRQUFRLENBQUs7b0JBWXRDLGFBQWE7O1FBVnRCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDLGFBQWEsQ0FBQTtRQUN0QyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQVUsRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUM5QyxtQkFBTSxJQUFJLEVBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTtTQUM3QyxDQUFDLENBQUE7S0FDSDs7Ozs7SUFFQyxTQUFTLENBQUMsT0FBc0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsQ0FBQTtLQUN2Qjs7Ozs7SUFHSCxXQUFXLENBQUMsT0FBc0I7UUFDaEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLENBQUMsQ0FBQTs7UUFDMUIsSUFBSSxXQUFXLEdBQWEsRUFBRSxDQUFBO1FBQzlCLEtBQUssSUFBSSxRQUFRLElBQUksT0FBTyxFQUFFOztZQUM1QixJQUFJLEdBQUcsR0FBRyxPQUFPLENBQUMsUUFBUSxDQUFDLENBQUMsWUFBWSxDQUFBO1lBQ3hDLElBQUksSUFBSSxDQUFDLEdBQUcsSUFBSSxTQUFTLEVBQUU7O2dCQUN6QixJQUFJLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQ3RFLElBQUksQ0FBQyxHQUFHLENBQUMsS0FBSyxHQUFDLFdBQVcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ2pDO1lBQ0QsV0FBVyxDQUFDLElBQUksQ0FBQyxHQUFHLFFBQVEsSUFBSSxJQUFJLENBQUMsSUFBSSxRQUFRLEdBQUcsR0FBRyxDQUFDLENBQUE7U0FDekQ7UUFDRCxPQUFPLENBQUMsR0FBRyxDQUFDLGNBQWMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUE7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxTQUFTLENBQUE7S0FDdEI7Ozs7O0lBY0QsVUFBVSxDQUFDLFFBQWE7O1FBRXRCLElBQUksRUFBRSxHQUFRLElBQUksQ0FBQTs7UUFDbEIsSUFBSSxDQUFDLEdBQVEsRUFBRSxDQUFBO1FBQ2YsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBO1FBQ3hCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLENBQUMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7O1lBQ3RELElBQUksSUFBSSxHQUFHLEVBQUUsQ0FBQyxRQUFRLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDOztZQUVyQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssSUFBSSxXQUFXLElBQUksQ0FBQyxDQUFDLEtBQUssSUFBSSxPQUFPLENBQUMsSUFBSSxJQUFJLElBQUksUUFBUSxFQUFFO2FBQ3ZFO2lCQUNJO2dCQUNILElBQUksRUFBRSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVM7b0JBQ3JCLElBQUksSUFBSSxXQUFXO29CQUNuQixJQUFJLElBQUksUUFBUTtvQkFDaEIsSUFBSSxJQUFJLGFBQWEsRUFBRTtvQkFDekIsQ0FBQyxDQUFDLElBQUksQ0FBQyxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQztpQkFDcEI7YUFDRjtTQUNGO1FBQ0QsSUFBSSxNQUFNLElBQUksRUFBRSxDQUFDLFdBQVcsRUFBRTtZQUM1QixDQUFDLENBQUMsR0FBRyxHQUFDLENBQUM7Z0JBQ1AsQ0FBQyxDQUFDLElBQUksR0FBQyxDQUFDO2dCQUNSLENBQUMsQ0FBQyxLQUFLLEdBQUMsTUFBTTtnQkFDZCxDQUFDLENBQUMsTUFBTSxHQUFDLE1BQU0sQ0FBQTtTQUNoQjtRQUNELElBQUksRUFBRSxDQUFDLE1BQU0sS0FBSyxFQUFFLEVBQUc7WUFDckIsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1NBQ3pCO1FBQ0QsQ0FBQyxDQUFDLFNBQVMsR0FBRyxFQUFFLENBQUE7O1FBQ2hCLElBQUksTUFBTSxHQUFHLFFBQVEsQ0FBQyxNQUFNLENBQUE7UUFDNUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxVQUFVLEtBQVUsRUFBRSxLQUFVLEVBQUUsS0FBVTs7WUFDekQsSUFBSSxTQUFTLEdBQVEsS0FBSyxDQUFDLElBQUksQ0FBQTs7WUFDL0IsSUFBSSxlQUFlLEdBQVEsS0FBSyxDQUFDLFVBQVUsQ0FBQTtZQUMzQyxDQUFDLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxHQUFHOztnQkFDdkIsSUFBSSxVQUFVLEdBQVEsZUFBZSxDQUFBOztnQkFDckMsSUFBSSxLQUFLLEdBQUcsVUFBVSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQTs7Z0JBQ2pDLElBQUksSUFBSSxHQUFHLEtBQUssQ0FBQyxTQUFTLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTs7Z0JBQ2hELElBQUksU0FBUyxHQUFRLEVBQUUsQ0FBQTtnQkFDdkIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRztvQkFDN0MsU0FBUyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQztpQkFDL0I7Z0JBQ0QsRUFBRSxDQUFDLFNBQVMsQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQTthQUM5QixDQUFBO1NBQ0YsQ0FBQyxDQUFBO1FBQ0YsSUFBSSxJQUFJLENBQUMsY0FBYyxDQUFDLGFBQWEsSUFBSSxJQUFJLEVBQUU7WUFDN0MsQ0FBQyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFBO1NBQ2pDO1FBQ0QsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFBO0tBQ3pCOzs7O0lBSUQsb0JBQW9COztRQUdsQixJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUE7O1FBQzFDLElBQUksV0FBVyxHQUFHLElBQUksQ0FBQyxXQUFXLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUE7UUFDbEQsSUFBSSxXQUFXLElBQUksV0FBVztZQUMxQixJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssSUFBSSxTQUFTO1lBQ25DLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxJQUFJLENBQUMsRUFBRTs7WUFFaEMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxhQUFhLENBQUMsQ0FBQTtZQUN2RCxPQUFNO1NBQ1A7O1FBQ0QsSUFBSSxnQkFBZ0IsR0FBUSxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxDQUFBOztRQUN0RCxJQUFJLFdBQVcsR0FBRyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUE7UUFDekMsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFdBQVcsRUFBRSxDQUFDLEVBQUUsRUFBRSxFQUFFLHVCQUF1Qjs7WUFDN0QsSUFBSSxRQUFRLEdBQUcsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFBOztZQUN0QyxJQUFJLFVBQVUsR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBOztZQUUvQixJQUFJLFdBQVcsSUFBSSxNQUFNLEVBQUU7Z0JBQ3pCLElBQUksVUFBVSxJQUFJLFFBQVEsSUFBSSxVQUFVLElBQUksWUFBWSxJQUFJLFVBQVUsSUFBSSxZQUFZLElBQUksVUFBVSxJQUFJLGFBQWEsSUFBSSxVQUFVLElBQUksWUFBWSxJQUFJLFVBQVUsSUFBSSxhQUFhLElBQUksVUFBVSxJQUFJLGNBQWMsRUFBRTtvQkFDbE4sU0FBUyxDQUFDLFNBQVMsQ0FBQyxRQUFRLENBQUMsQ0FBQTtpQkFDOUI7YUFDRjtpQkFBTSxJQUFJLFdBQVcsSUFBSSxTQUFTLEVBQUU7Z0JBQ25DLFNBQVMsQ0FBQyxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUE7YUFDL0I7aUJBQU0sSUFBSSxXQUFXLElBQUksUUFBUSxFQUFFO2dCQUNsQyxTQUFTLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQzlCO2lCQUFNLElBQUksV0FBVyxJQUFJLFFBQVEsRUFBRTtnQkFDbEMsSUFBSSxVQUFVLElBQUksTUFBTSxFQUFFO29CQUN4QixTQUFTLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2lCQUM1QjtxQkFBTTtvQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7aUJBQy9CO2FBQ0Y7aUJBQU0sSUFBSSxVQUFVLElBQUksU0FBUyxJQUFJLEdBQUcsQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUMzRCxTQUFTLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFBO2FBQ25DO2lCQUFNLElBQUksQ0FBQyxVQUFVLElBQUksU0FBUyxJQUFJLFVBQVUsSUFBSSxVQUFVLENBQUMsSUFBSSxTQUFTLENBQUMsY0FBYyxJQUFJLFNBQVMsRUFBRTtnQkFDekcsSUFBSSxTQUFTLENBQUMsY0FBYyxFQUFFLElBQUksS0FBSyxFQUFFOztvQkFDdkMsSUFBSSxDQUFDLEdBQVEsU0FBUyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFBO29CQUN6QyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUE7aUJBQ2xDO3FCQUFNO29CQUNMLFNBQVMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUE7aUJBQ3hCO2FBQ0Y7aUJBQU0sSUFBSSxTQUFTLENBQUMsR0FBRyxJQUFJLFNBQVMsRUFBRTtnQkFDckMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQTthQUN4QjtpQkFBTTtnQkFDTCxPQUFPLENBQUMsR0FBRyxDQUFDLGlCQUFpQixDQUFDLENBQUE7YUFDL0I7U0FDRjtRQUNELElBQUksQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLENBQUE7S0FDOUI7OzswQkFsREEsZUFBZSxTQUFDLElBQUksRUFBRSxFQUFDLFdBQVcsRUFBRSxLQUFLLEVBQUM7MEJBQzFDLGVBQWUsU0FBQyxLQUFLIiwic291cmNlc0NvbnRlbnQiOlsiZGVjbGFyZSB2YXIgRXh0OiBhbnk7XG5pbXBvcnQge0VsZW1lbnRSZWYsRXZlbnRFbWl0dGVyLENvbnRlbnRDaGlsZHJlbixRdWVyeUxpc3QsXG4vLyAgQWZ0ZXJDb250ZW50Q2hlY2tlZCxcbi8vICBBZnRlckNvbnRlbnRJbml0LFxuLy8gIEFmdGVyVmlld0NoZWNrZWQsXG4vLyAgQWZ0ZXJWaWV3SW5pdCxcbi8vICBEb0NoZWNrLFxuLy8gIE9uQ2hhbmdlcyxcbi8vICBPbkRlc3Ryb3ksXG4vLyAgT25Jbml0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5leHBvcnQgY2xhc3MgYmFzZSB7XG4gIHB1YmxpYyBleHQ6IGFueVxuICBwcml2YXRlIF9uYXRpdmVFbGVtZW50OiBhbnlcblxuICBjb25zdHJ1Y3RvcihlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSBtZXRhRGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZygnY29uc3RydWN0b3InKTtjb25zb2xlLmxvZyhlbC5uYXRpdmVFbGVtZW50KVxuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBlbC5uYXRpdmVFbGVtZW50XG4gICAgbWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbiAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgfSlcbiAgfVxuXG4gICAgT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zb2xlLmxvZyhgT25DaGFuZ2VzYClcbiAgICB9XG5cbiAgdmVyYjphbnkgPSAnaW5pdGlhbGl6ZWQnXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBjb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgIGxldCBjaGFuZ2VzTXNnczogc3RyaW5nW10gPSBbXVxuICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWVcbiAgICAgIGlmICh0aGlzLmV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKVxuICAgICAgICB0aGlzLmV4dFsnc2V0JytjYXBQcm9wTmFtZV0odmFsKVxuICAgICAgfVxuICAgICAgY2hhbmdlc01zZ3MucHVzaChgJHtwcm9wTmFtZX0gJHt0aGlzLnZlcmJ9IHRvIFwiJHt2YWx9XCJgKVxuICAgIH1cbiAgICBjb25zb2xlLmxvZyhgT25DaGFuZ2VzOiAke2NoYW5nZXNNc2dzLmpvaW4oJzsgJyl9YClcbiAgICB0aGlzLnZlcmIgPSAnY2hhbmdlZCcgLy8gbmV4dCB0aW1lIGl0IHdpbGwgYmUgYSBjaGFuZ2VcbiAgfVxuXG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdEb0NoZWNrKCkge2NvbnNvbGUubG9nKGBEb0NoZWNrYCl9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlckNvbnRlbnRDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJDb250ZW50Q2hlY2tlZGApIH1cbiAgLy9uZ0FmdGVyVmlld0luaXQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdJbml0YCkgfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0NoZWNrZWRgKSB9XG4gIC8vbmdPbkRlc3Ryb3koKSB7IGNvbnNvbGUubG9nKGBPbkRlc3Ryb3lgKSB9XG5cbiAgYmFzZU9uSW5pdChtZXRhRGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkluaXQ6ICR7bWV0YURhdGEuWFRZUEV9YClcbiAgICBsZXQgbWU6IGFueSA9IHRoaXNcbiAgICBsZXQgbzogYW55ID0ge31cbiAgICBvLnh0eXBlID0gbWV0YURhdGEuWFRZUEVcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lLm1ldGFEYXRhLlBST1BFUlRJRVMubGVuZ3RoOyBpKyspIHsgXG4gICAgICB2YXIgcHJvcCA9IG1lLm1ldGFEYXRhLlBST1BFUlRJRVNbaV07XG4gICAgICAvL25lZWQgdG8gaGFuZGxlIGxpc3RlbmVycyBjb21pbmcgaW4gaGVyZVxuICAgICAgaWYgKChvLnh0eXBlID09ICdjYXJ0ZXNpYW4nIHx8IG8ueHR5cGUgPT0gJ3BvbGFyJykgJiYgcHJvcCA9PSAnbGF5b3V0Jykge1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdsaXN0ZW5lcnMnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnY29uZmlnJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50JykgeyBcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07IFxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgndHJ1ZScgPT0gbWUuZml0VG9QYXJlbnQpIHtcbiAgICAgIG8udG9wPTAsIFxuICAgICAgby5sZWZ0PTAsIFxuICAgICAgby53aWR0aD0nMTAwJScsIFxuICAgICAgby5oZWlnaHQ9JzEwMCUnXG4gICAgfVxuICAgIGlmIChtZS5jb25maWcgIT09IHt9ICkge1xuICAgICAgRXh0LmFwcGx5KG8sIG1lLmNvbmZpZyk7XG4gICAgfVxuICAgIG8ubGlzdGVuZXJzID0ge31cbiAgICB2YXIgRVZFTlRTID0gbWV0YURhdGEuRVZFTlRTXG4gICAgRVZFTlRTLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50OiBhbnksIGluZGV4OiBhbnksIGFycmF5OiBhbnkpIHtcbiAgICAgIGxldCBldmVudG5hbWU6IGFueSA9IGV2ZW50Lm5hbWVcbiAgICAgIGxldCBldmVudHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50LnBhcmFtZXRlcnNcbiAgICAgIG8ubGlzdGVuZXJzW2V2ZW50bmFtZV0gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgbGV0IHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50cGFyYW1ldGVyc1xuICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJylcbiAgICAgICAgbGV0IGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpXG4gICAgICAgIGxldCBlbWl0cGFybXM6IGFueSA9IHt9XG4gICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrICkge1xuICAgICAgICAgIGVtaXRwYXJtc1twYXJtc1tpXV0gPSBhcmdzW2ldO1xuICAgICAgICB9XG4gICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpXG4gICAgICB9XG4gICAgfSlcbiAgICBpZiAodGhpcy5fbmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIG8ucmVuZGVyVG8gPSB0aGlzLl9uYXRpdmVFbGVtZW50XG4gICAgfVxuICAgIHRoaXMuZXh0ID0gRXh0LmNyZWF0ZShvKVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbihiYXNlLCB7ZGVzY2VuZGFudHM6IGZhbHNlfSkgZXh0Q2hpbGRyZW46IFF1ZXJ5TGlzdDxhbnk+XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2V4dCcpIGFsbENoaWxkcmVuOiBRdWVyeUxpc3Q8YW55PlxuICBiYXNlQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ0FmdGVyQ29udGVudEluaXQ6ICR7dGhpcy5leHRDaGlsZHJlbi5maXJzdC5leHQueHR5cGV9ICR7dGhpcy5leHRDaGlsZHJlbi5sZW5ndGh9ICR7dGhpcy5hbGxDaGlsZHJlbi5sZW5ndGh9YClcbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuYWxsQ2hpbGRyZW4pXG4gICAgdmFyIHBhcmVudENtcCA9IHRoaXMuZXh0Q2hpbGRyZW4uZmlyc3QuZXh0XG4gICAgdmFyIHBhcmVudHh0eXBlID0gdGhpcy5leHRDaGlsZHJlbi5maXJzdC5leHQueHR5cGVcbiAgICBpZiAocGFyZW50eHR5cGUgPT0gJ2NvbnRhaW5lcicgJiZcbiAgICAgICAgdGhpcy5hbGxDaGlsZHJlbi5maXJzdCAhPSB1bmRlZmluZWQgJiYgXG4gICAgICAgIHRoaXMuYWxsQ2hpbGRyZW4ubGVuZ3RoID09IDEpIHtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5hbGxDaGlsZHJlbi5maXJzdC5uYXRpdmVFbGVtZW50KVxuICAgICAgcGFyZW50Q21wLnNldEh0bWwodGhpcy5hbGxDaGlsZHJlbi5maXJzdC5uYXRpdmVFbGVtZW50KVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIHZhciBleHRDaGlsZHJlbkFycmF5OiBhbnkgPSB0aGlzLmV4dENoaWxkcmVuLnRvQXJyYXkoKVxuICAgIHZhciBhcnJheUxlbmd0aCA9IGV4dENoaWxkcmVuQXJyYXkubGVuZ3RoXG4gICAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcnJheUxlbmd0aDsgaSsrKSB7IC8vc3RhcnQgYWZ0ZXIgZmlyc3Qgb25lXG4gICAgICB2YXIgY2hpbGRDbXAgPSBleHRDaGlsZHJlbkFycmF5W2ldLmV4dFxuICAgICAgdmFyIGNoaWxkeHR5cGUgPSBjaGlsZENtcC54dHlwZVxuICAgICAgLy9jb25zb2xlLmxvZyhgcGFyZW50OiAke3BhcmVudHh0eXBlfSwgY2hpbGQ6ICR7Y2hpbGR4dHlwZX1gKVxuICAgICAgaWYgKHBhcmVudHh0eXBlID09ICdncmlkJykge1xuICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09ICd0b29sdGlwJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT0gJ3BsdWdpbicpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PSB0cnVlKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT0gZmFsc2UpIHtcbiAgICAgICAgICB2YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICAgIH1cbiAgICB0aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuICB9XG5cbn0iXX0=