/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
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
        //    console.log('constructor')
        this._nativeElement = nativeElement;
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
        /** @type {?} */
        let listneresProvided = false;
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
            else if (prop == 'listeners' && me[prop] != undefined) {
                o[prop] = me[prop];
                listneresProvided = true;
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
        if (me._nativeElement && me._nativeElement.attributes && me._nativeElement.attributes.length > 0) {
            for (var i = 0; i < me._nativeElement.attributes.length; i++) {
                debugger;
                /** @type {?} */
                var attribute = me._nativeElement.attributes[i];
                /** @type {?} */
                var key = attribute.nodeName;
                /** @type {?} */
                var value = attribute.nodeValue;
                if (!o[key]) {
                    o[key] = value;
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
        if (!listneresProvided) {
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
        }
        if (this._nativeElement.parentElement != null) {
            o.renderTo = this._nativeElement;
        }
        this.ext = Ext.create(o);
    }
    /**
     * @return {?}
     */
    ngOnDestroy() {
        //console.log(`ngOnDestroy`)
        /** @type {?} */
        var childCmp;
        /** @type {?} */
        var parentCmp;
        try {
            //console.log(this)
            //console.log(this.ext)
            childCmp = this.ext;
            //console.log(this._hostComponent)
            if (this._hostComponent != null) {
                //console.log(this._hostComponent.ext)
                parentCmp = this._hostComponent.ext;
                //console.log(parentCmp)
                //console.log(childCmp)
                if (parentCmp.xtype == 'button' && childCmp.xtype == 'menu') {
                    //console.log('button menu not deleted')
                }
                else if (parentCmp.xtype == 'carousel') {
                    //console.log('carousel child not deleted')
                }
                else {
                    parentCmp.remove([childCmp]);
                    childCmp.destroy();
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
    /**
     * @return {?}
     */
    baseAfterContentInit() {
        //    console.log('\nbaseAfterContentInit')
        if (this._extroute != undefined) {
            this.ext.add({ xtype: 'container', html: this._extroute.nativeElement });
            return;
        }
        //    console.log('child: ' + this.ext.xtype)
        //    console.log('this._items')
        //    console.log(this._items)
        //    console.log('this')
        //    console.log(this)
        //if(this._hostComponent == null) {
        // console.log('root')
        // var anyItems: any[] = []
        // var elRefItems: any[] = []
        // this._items.forEach(item => {anyItems.push(item)})
        // this._elRefItems.forEach(item => {elRefItems.push(item)})
        // for (var i in anyItems) {
        //   var item = anyItems[i]
        //   var elRefItem = elRefItems[i]
        //   if (item.nativeElement != undefined) {
        //     console.log('here')
        //     this.ext.add({xtype: 'container',html: item.nativeElement})
        //   }
        //   else {
        //     console.log('not supported')
        //   }
        // }
        //}
        //else {
        if (this._hostComponent != null) {
            //console.log('_hostComponent: ')
            //console.log(this._hostComponent)
            //console.log('parent: ' + this._hostComponent.ext.xtype)
            /** @type {?} */
            var parentCmp = this._hostComponent.ext;
            /** @type {?} */
            var childCmp = this.ext;
            this.addTheChild(parentCmp, childCmp);
        }
        return;
        //        if (item.nativeElement != undefined) {
        //          this.ext.add({xtype: 'container',html: item.nativeElement})
        //        }
        //        else {
        //          var parentCmp = this.ext
        //          var childCmp = item.ext
        //          this.addTheChild(parentCmp,childCmp)
        //        }
        //    console.log('host')
        //    console.log(this._hostComponent)
        //    console.log('native')
        //    console.log(this._nativeElement)
        //    console.log('_items')
        //    console.log(this._items)
        //    console.log(this._items.length)
        //     if (this._items.length > 0 && this._extChildren == true) {
        //       console.error('cant have both native elements and ExtAngular elements as children')
        //       return
        //     }
        //     else if (this._items.length > 0) {
        //       console.error('do it')
        //       if (this._items.length < 2) {
        //         console.error('only 1 item')
        //         console.log(this._hostComponent)
        //         //console.log(this._items)
        //       //  if (item.nativeElement != undefined) {
        //       //    this.ext.add({xtype: 'container',html: item.nativeElement})
        //       //  }
        //       //  else {
        //       //    var parentCmp = this.ext
        //       //    var childCmp = item.ext
        //       //    this.addTheChild(parentCmp,childCmp)
        //       //  }
        //         return
        //       }
        //       //console.log(this._items.length + ' items')
        //       console.log('doing something')
        //       var anyItems: any[] = []
        //       var elRefItems: any[] = []
        //       this._items.forEach(item => {anyItems.push(item)})
        //       this._elRefItems.forEach(item => {elRefItems.push(item)})
        //       var j: any = 0
        //       for (var i in anyItems) {
        //         if (j == 0) {j++;continue}
        //         var item = anyItems[i]
        //         var elRefItem = elRefItems[i]
        //         if (item.nativeElement != undefined) {
        // //          console.log('native')
        // //          console.log('parent: ' + this.ext.xtype)
        // //          console.log('child')
        // //          console.log(item.nativeElement)
        //           this.ext.add({xtype: 'container',html: item.nativeElement})
        //         }
        //         else {
        // //          console.log('component')
        // //          console.log('parent: ' + this.ext.xtype)
        // //          console.log('child')
        // //          console.log(elRefItem.nativeElement)
        // //          console.log(elRefItem)
        // //          console.log(item)
        //           var parentCmp = this.ext
        //           var childCmp = item.ext
        //           this.addTheChild(parentCmp,childCmp)
        //           //this.ext.add(item.ext)
        //           //this.ext.add({xtype: 'container',html: elRefItem.nativeElement})
        //         }
        //       }
        //       return
        //     }
        //     // if (this.ext != undefined && this.hostComponent != undefined) {
        //     //   var parentxtype = this.hostComponent['ext'].xtype
        //     //   var childxtype = this['ext'].xtype
        //     //   var parentCmp = this.hostComponent['ext']
        //     //   var childCmp = this['ext']
        //     //   console.log('parent: ' + parentxtype + ', child: ' + childxtype)
        //     //   this.hostComponent._extChildren = true
        //     //   if (parentxtype === 'grid') {
        //     //     if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn') {
        //     //       parentCmp.addColumn(childCmp)
        //     //     }
        //     //     else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
        //     //       if (parentCmp.getHideHeaders() === false) {
        //     //         //var j = parentCmp.items.items.length;
        //     //         parentCmp.insert(1, childCmp);
        //     //       }
        //     //       else {
        //     //         parentCmp.add(childCmp);
        //     //       }
        //     //     }
        //     //     else {
        //     //       console.log('??')
        //     //     }
        //     //   } else if (childxtype === 'tooltip') {
        //     //     parentCmp.setTooltip(childCmp)
        //     //   } else if (childxtype === 'plugin') {
        //     //     parentCmp.setPlugin(childCmp)
        //     //   } else if (parentxtype === 'button') {
        //     //     if (childxtype === 'menu') {
        //     //       parentCmp.setMenu(childCmp)
        //     //     } else {
        //     //       console.log('child not added')
        //     //     }
        //     //   } else if (childxtype === 'toolbar' && Ext.isClassic === true) {
        //     //     parentCmp.addDockedItems(childCmp)
        //     //   } else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
        //     //     if (parentCmp.getHideHeaders() === false) {
        //     //       //var j: any = parentCmp.items.items.length
        //     //       //parentCmp.insert(j - 1, childCmp)
        //     //       parentCmp.insert(1, childCmp)
        //     //     } else {
        //     //       parentCmp.add(childCmp)
        //     //     }
        //     //   } else if (parentCmp.add != undefined) {
        //     //     parentCmp.add(childCmp)
        //     //   } else {
        //     //     console.log('child not added')
        //     //   }
        //     // }
        //     // else if (this._nativeElement != undefined) {
        //     //   console.log(this._nativeElement)
        //     //   //this.ext.add({xtype: 'container',html: this._nativeElement})
        //     // }
        //     // else {
        //     //   console.log('component')
        //     //   //console.log(elRefItem)
        //     //   //this.ext.add({xtype: 'container',html: this._nativeElement})
        //     // }
        //     //this['ready'].emit(parentCmp)
        //     //this['ready'].emit(this)
    }
    /**
     * @param {?} parentCmp
     * @param {?} childCmp
     * @return {?}
     */
    addTheChild(parentCmp, childCmp) {
        /** @type {?} */
        var parentxtype = parentCmp.xtype;
        /** @type {?} */
        var childxtype = childCmp.xtype
        //      console.log('parent: ' + parentxtype + ', child: ' + childxtype)
        //      this.hostComponent._extChildren = true
        ;
        //      console.log('parent: ' + parentxtype + ', child: ' + childxtype)
        //      this.hostComponent._extChildren = true
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
    /**
     * @return {?}
     */
    baseAfterContentInitOrig() {
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
                    else if (parentxtype === 'column') {
                        if (childxtype === 'selectfield' || childxtype === 'textfield' || childxtype === 'numberfield' || childxtype === 'textareafield' || childxtype === 'hiddenfield' || childxtype === 'radiofield' || childxtype === 'filefield' || childxtype === 'checkboxfield' || childxtype === 'togglefield' || childxtype === 'fieldset') {
                            parentCmp.setEditor(item.ext.initialConfig);
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
}
base.propDecorators = {
    _extroute: [{ type: ContentChild, args: ['extroute',] }],
    items: [{ type: ContentChildren, args: ['item',] }],
    items2: [{ type: ContentChildren, args: ['item', { read: ElementRef },] }]
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
    base.prototype._extroute;
    /** @type {?} */
    base.prototype.items;
    /** @type {?} */
    base.prototype.items2;
    /**
     * @type {?}
     * @private
     */
    base.prototype.metaData;
    /** @type {?} */
    base.prototype.hostComponent;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUlMLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFFZixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUE7QUFFdEIsTUFBTSxPQUFPLElBQUk7Ozs7OztJQU1mLFlBQ0UsYUFBa0IsRUFDVixRQUFhLEVBQ2QsYUFBb0I7UUFEbkIsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFPO1FBTHJCLGlCQUFZLEdBQVEsS0FBSyxDQUFBO1FBT25DLGdDQUFnQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtRQUNuQyxRQUFRLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQVUsRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUM5QyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUM5QixDQUFDLG1CQUFLLElBQUksRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7YUFDN0M7aUJBQ0k7Z0JBQ0gsQ0FBQyxtQkFBSyxJQUFJLEVBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUN2RDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCxVQUFVLENBQUMsUUFBYTs7O1lBRWxCLEVBQUUsR0FBUSxJQUFJOztZQUNkLENBQUMsR0FBUSxFQUFFO1FBQ2YsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBOztZQUNwQixpQkFBaUIsR0FBRyxLQUFLO1FB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QWU7Ozs7O0lBQ2YsOEJBQTJCOzs7OztJQUMzQiw4QkFBMkI7Ozs7O0lBQzNCLDRCQUFpQzs7SUF3SWpDLHlCQUF3Qzs7SUFnUHhDLHFCQUE4Qzs7SUFDOUMsc0JBQTRFOzs7OztJQXJYMUUsd0JBQXFCOztJQUNyQiw2QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgYmFzZSB7XG4gIHB1YmxpYyBleHQ6IGFueVxuICBwcml2YXRlIF9uYXRpdmVFbGVtZW50OiBhbnlcbiAgcHJpdmF0ZSBfaG9zdENvbXBvbmVudDogYW55XG4gIHByaXZhdGUgX2V4dENoaWxkcmVuOiBhbnkgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hdGl2ZUVsZW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIG1ldGFEYXRhOiBhbnksXG4gICAgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlXG4gICkge1xuLy8gICAgY29uc29sZS5sb2coJ2NvbnN0cnVjdG9yJylcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gbmF0aXZlRWxlbWVudFxuICAgIHRoaXMuX2hvc3RDb21wb25lbnQgPSBob3N0Q29tcG9uZW50XG4gICAgbWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbiAgICAgIGlmIChldmVudC5uYW1lICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWUgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiYXNlT25Jbml0KG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uSW5pdDogJHttZXRhRGF0YS5YVFlQRX1gKVxuICAgIGxldCBtZTogYW55ID0gdGhpc1xuICAgIGxldCBvOiBhbnkgPSB7fVxuICAgIG8ueHR5cGUgPSBtZXRhRGF0YS5YVFlQRVxuICAgIGxldCBsaXN0bmVyZXNQcm92aWRlZCA9IGZhbHNlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgby54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocHJvcCA9PSAnbGlzdGVuZXJzJyAmJiBtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdO1xuICAgICAgICBsaXN0bmVyZXNQcm92aWRlZCA9IHRydWU7XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdsaXN0ZW5lcnMnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnY29uZmlnJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2hhbmRsZXInICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnZml0VG9QYXJlbnQnKSB7IFxuICAgICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgXG4gICAgaWYobWUuX25hdGl2ZUVsZW1lbnQgJiYgbWUuX25hdGl2ZUVsZW1lbnQuYXR0cmlidXRlcyAmJiBtZS5fbmF0aXZlRWxlbWVudC5hdHRyaWJ1dGVzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgZm9yKHZhciBpID0gMDsgaSA8IG1lLl9uYXRpdmVFbGVtZW50LmF0dHJpYnV0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgZGVidWdnZXI7XG4gICAgICAgICAgICB2YXIgYXR0cmlidXRlID0gbWUuX25hdGl2ZUVsZW1lbnQuYXR0cmlidXRlc1tpXTtcbiAgICAgICAgICAgIHZhciBrZXkgPSBhdHRyaWJ1dGUubm9kZU5hbWU7XG4gICAgICAgICAgICB2YXIgdmFsdWUgPSBhdHRyaWJ1dGUubm9kZVZhbHVlO1xuICAgICAgICAgICAgaWYoIW9ba2V5XSl7XG4gICAgICAgICAgICAgICAgb1trZXldID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cblxuICAgIGlmICh0cnVlID09PSBtZS5maXRUb1BhcmVudCkge1xuICAgICAgby50b3A9MCwgXG4gICAgICBvLmxlZnQ9MCwgXG4gICAgICBvLndpZHRoPScxMDAlJywgXG4gICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICB9XG4gICAgaWYgKG1lLmNvbmZpZyAhPT0ge30gKSB7XG4gICAgICBFeHQuYXBwbHkobywgbWUuY29uZmlnKTtcbiAgICB9XG5cbiAgICBpZighbGlzdG5lcmVzUHJvdmlkZWQpIHtcbiAgICAgIG8ubGlzdGVuZXJzID0ge31cbiAgICAgIHZhciBFVkVOVFMgPSBtZXRhRGF0YS5FVkVOVFNcbiAgICAgIEVWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudDogYW55LCBpbmRleDogYW55LCBhcnJheTogYW55KSB7XG4gICAgICAgIGxldCBldmVudG5hbWU6IGFueSA9IGV2ZW50Lm5hbWVcbiAgICAgICAgbGV0IGV2ZW50cGFyYW1ldGVyczogYW55ID0gZXZlbnQucGFyYW1ldGVyc1xuICAgICAgICBvLmxpc3RlbmVyc1tldmVudG5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGV0IHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50cGFyYW1ldGVyc1xuICAgICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKVxuICAgICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgIGxldCBlbWl0cGFybXM6IGFueSA9IHt9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG4gICAgICAgICAgICBlbWl0cGFybXNbcGFybXNbaV1dID0gYXJnc1tpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIG8ucmVuZGVyVG8gPSB0aGlzLl9uYXRpdmVFbGVtZW50XG4gICAgfVxuICAgIHRoaXMuZXh0ID0gRXh0LmNyZWF0ZShvKVxuICB9XG5cbiAgbmdPbkRlc3Ryb3koKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkRlc3Ryb3lgKVxuICAgIHZhciBjaGlsZENtcFxuICAgIHZhciBwYXJlbnRDbXBcbiAgICB0cnkge1xuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzKVxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLmV4dClcbiAgICAgIGNoaWxkQ21wID0gdGhpcy5leHRcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5faG9zdENvbXBvbmVudClcbiAgICAgIGlmICh0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9ob3N0Q29tcG9uZW50LmV4dClcbiAgICAgICAgcGFyZW50Q21wID0gdGhpcy5faG9zdENvbXBvbmVudC5leHRcbiAgICAgICBcbiAgICAgICAgLy9jb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRDbXApXG5cbiAgICAgICAgaWYocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbiBtZW51IG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2Nhcm91c2VsJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Nhcm91c2VsIGNoaWxkIG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAucmVtb3ZlKFtjaGlsZENtcF0pXG4gICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgY2F0Y2goZSkge1xuICAgICAgY29uc29sZS5lcnJvcihlKVxuICAgICAgY29uc29sZS5sb2coJyoqKioqJylcbiAgICAgIGNvbnNvbGUubG9nKHBhcmVudENtcClcbiAgICAgIGNvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgY29uc29sZS5sb2coJyoqKioqJylcbiAgICB9XG4gIH1cblxuICBAQ29udGVudENoaWxkKCdleHRyb3V0ZScpIF9leHRyb3V0ZTogYW55XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0KCkge1xuLy8gICAgY29uc29sZS5sb2coJ1xcbmJhc2VBZnRlckNvbnRlbnRJbml0JylcbiAgICBpZiAodGhpcy5fZXh0cm91dGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiB0aGlzLl9leHRyb3V0ZS5uYXRpdmVFbGVtZW50fSlcbiAgICAgIHJldHVyblxuICAgIH1cbi8vICAgIGNvbnNvbGUubG9nKCdjaGlsZDogJyArIHRoaXMuZXh0Lnh0eXBlKVxuLy8gICAgY29uc29sZS5sb2coJ3RoaXMuX2l0ZW1zJylcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMuX2l0ZW1zKVxuLy8gICAgY29uc29sZS5sb2coJ3RoaXMnKVxuLy8gICAgY29uc29sZS5sb2codGhpcylcblxuICAgIC8vaWYodGhpcy5faG9zdENvbXBvbmVudCA9PSBudWxsKSB7XG4gICAgICAvLyBjb25zb2xlLmxvZygncm9vdCcpXG4gICAgICAvLyB2YXIgYW55SXRlbXM6IGFueVtdID0gW11cbiAgICAgIC8vIHZhciBlbFJlZkl0ZW1zOiBhbnlbXSA9IFtdXG4gICAgICAvLyB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge2FueUl0ZW1zLnB1c2goaXRlbSl9KVxuICAgICAgLy8gdGhpcy5fZWxSZWZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge2VsUmVmSXRlbXMucHVzaChpdGVtKX0pXG5cbiAgICAgIC8vIGZvciAodmFyIGkgaW4gYW55SXRlbXMpIHtcbiAgICAgIC8vICAgdmFyIGl0ZW0gPSBhbnlJdGVtc1tpXVxuICAgICAgLy8gICB2YXIgZWxSZWZJdGVtID0gZWxSZWZJdGVtc1tpXVxuICAgICAgLy8gICBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdoZXJlJylcbiAgICAgIC8vICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBpdGVtLm5hdGl2ZUVsZW1lbnR9KVxuICAgICAgLy8gICB9XG4gICAgICAvLyAgIGVsc2Uge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdub3Qgc3VwcG9ydGVkJylcbiAgICAgIC8vICAgfVxuICAgICAgLy8gfVxuXG4gICAgLy99XG4gICAgLy9lbHNlIHtcblxuICAgIGlmKHRoaXMuX2hvc3RDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgLy9jb25zb2xlLmxvZygnX2hvc3RDb21wb25lbnQ6ICcpXG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2hvc3RDb21wb25lbnQpXG4gICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLl9ob3N0Q29tcG9uZW50LmV4dC54dHlwZSlcbiAgICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLl9ob3N0Q29tcG9uZW50LmV4dFxuICAgICAgdmFyIGNoaWxkQ21wID0gdGhpcy5leHRcbiAgICAgIHRoaXMuYWRkVGhlQ2hpbGQocGFyZW50Q21wLGNoaWxkQ21wKVxuICAgIH1cbiAgICByZXR1cm5cblxuXG5cblxuLy8gICAgICAgIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBpdGVtLm5hdGl2ZUVsZW1lbnR9KVxuLy8gICAgICAgIH1cbi8vICAgICAgICBlbHNlIHtcbi8vICAgICAgICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmV4dFxuLy8gICAgICAgICAgdmFyIGNoaWxkQ21wID0gaXRlbS5leHRcbi8vICAgICAgICAgIHRoaXMuYWRkVGhlQ2hpbGQocGFyZW50Q21wLGNoaWxkQ21wKVxuLy8gICAgICAgIH1cblxuLy8gICAgY29uc29sZS5sb2coJ2hvc3QnKVxuLy8gICAgY29uc29sZS5sb2codGhpcy5faG9zdENvbXBvbmVudClcbi8vICAgIGNvbnNvbGUubG9nKCduYXRpdmUnKVxuLy8gICAgY29uc29sZS5sb2codGhpcy5fbmF0aXZlRWxlbWVudClcblxuLy8gICAgY29uc29sZS5sb2coJ19pdGVtcycpXG4vLyAgICBjb25zb2xlLmxvZyh0aGlzLl9pdGVtcylcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMuX2l0ZW1zLmxlbmd0aClcblxuLy8gICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPiAwICYmIHRoaXMuX2V4dENoaWxkcmVuID09IHRydWUpIHtcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ2NhbnQgaGF2ZSBib3RoIG5hdGl2ZSBlbGVtZW50cyBhbmQgRXh0QW5ndWxhciBlbGVtZW50cyBhcyBjaGlsZHJlbicpXG4vLyAgICAgICByZXR1cm5cbi8vICAgICB9XG4vLyAgICAgZWxzZSBpZiAodGhpcy5faXRlbXMubGVuZ3RoID4gMCkge1xuLy8gICAgICAgY29uc29sZS5lcnJvcignZG8gaXQnKVxuLy8gICAgICAgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA8IDIpIHtcbi8vICAgICAgICAgY29uc29sZS5lcnJvcignb25seSAxIGl0ZW0nKVxuLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLl9ob3N0Q29tcG9uZW50KVxuLy8gICAgICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2l0ZW1zKVxuXG4vLyAgICAgICAvLyAgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbi8vICAgICAgIC8vICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGl0ZW0ubmF0aXZlRWxlbWVudH0pXG4vLyAgICAgICAvLyAgfVxuLy8gICAgICAgLy8gIGVsc2Uge1xuLy8gICAgICAgLy8gICAgdmFyIHBhcmVudENtcCA9IHRoaXMuZXh0XG4vLyAgICAgICAvLyAgICB2YXIgY2hpbGRDbXAgPSBpdGVtLmV4dFxuLy8gICAgICAgLy8gICAgdGhpcy5hZGRUaGVDaGlsZChwYXJlbnRDbXAsY2hpbGRDbXApXG4vLyAgICAgICAvLyAgfVxuXG5cblxuXG4vLyAgICAgICAgIHJldHVyblxuLy8gICAgICAgfVxuLy8gICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9pdGVtcy5sZW5ndGggKyAnIGl0ZW1zJylcbi8vICAgICAgIGNvbnNvbGUubG9nKCdkb2luZyBzb21ldGhpbmcnKVxuXG4vLyAgICAgICB2YXIgYW55SXRlbXM6IGFueVtdID0gW11cbi8vICAgICAgIHZhciBlbFJlZkl0ZW1zOiBhbnlbXSA9IFtdXG4vLyAgICAgICB0aGlzLl9pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge2FueUl0ZW1zLnB1c2goaXRlbSl9KVxuLy8gICAgICAgdGhpcy5fZWxSZWZJdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge2VsUmVmSXRlbXMucHVzaChpdGVtKX0pXG5cbi8vICAgICAgIHZhciBqOiBhbnkgPSAwXG4vLyAgICAgICBmb3IgKHZhciBpIGluIGFueUl0ZW1zKSB7XG4vLyAgICAgICAgIGlmIChqID09IDApIHtqKys7Y29udGludWV9XG4vLyAgICAgICAgIHZhciBpdGVtID0gYW55SXRlbXNbaV1cbi8vICAgICAgICAgdmFyIGVsUmVmSXRlbSA9IGVsUmVmSXRlbXNbaV1cbi8vICAgICAgICAgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKCduYXRpdmUnKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkJylcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKGl0ZW0ubmF0aXZlRWxlbWVudClcbi8vICAgICAgICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBpdGVtLm5hdGl2ZUVsZW1lbnR9KVxuLy8gICAgICAgICB9XG4vLyAgICAgICAgIGVsc2Uge1xuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coJ2NvbXBvbmVudCcpXG4vLyAvLyAgICAgICAgICBjb25zb2xlLmxvZygncGFyZW50OiAnICsgdGhpcy5leHQueHR5cGUpXG4vLyAvLyAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQnKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coZWxSZWZJdGVtLm5hdGl2ZUVsZW1lbnQpXG4vLyAvLyAgICAgICAgICBjb25zb2xlLmxvZyhlbFJlZkl0ZW0pXG4vLyAvLyAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtKVxuLy8gICAgICAgICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmV4dFxuLy8gICAgICAgICAgIHZhciBjaGlsZENtcCA9IGl0ZW0uZXh0XG4vLyAgICAgICAgICAgdGhpcy5hZGRUaGVDaGlsZChwYXJlbnRDbXAsY2hpbGRDbXApXG4vLyAgICAgICAgICAgLy90aGlzLmV4dC5hZGQoaXRlbS5leHQpXG4vLyAgICAgICAgICAgLy90aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBlbFJlZkl0ZW0ubmF0aXZlRWxlbWVudH0pXG4vLyAgICAgICAgIH1cbi8vICAgICAgIH1cbi8vICAgICAgIHJldHVyblxuLy8gICAgIH1cblxuLy8gICAgIC8vIGlmICh0aGlzLmV4dCAhPSB1bmRlZmluZWQgJiYgdGhpcy5ob3N0Q29tcG9uZW50ICE9IHVuZGVmaW5lZCkge1xuLy8gICAgIC8vICAgdmFyIHBhcmVudHh0eXBlID0gdGhpcy5ob3N0Q29tcG9uZW50WydleHQnXS54dHlwZVxuLy8gICAgIC8vICAgdmFyIGNoaWxkeHR5cGUgPSB0aGlzWydleHQnXS54dHlwZVxuLy8gICAgIC8vICAgdmFyIHBhcmVudENtcCA9IHRoaXMuaG9zdENvbXBvbmVudFsnZXh0J11cbi8vICAgICAvLyAgIHZhciBjaGlsZENtcCA9IHRoaXNbJ2V4dCddXG4vLyAgICAgLy8gICBjb25zb2xlLmxvZygncGFyZW50OiAnICsgcGFyZW50eHR5cGUgKyAnLCBjaGlsZDogJyArIGNoaWxkeHR5cGUpXG4vLyAgICAgLy8gICB0aGlzLmhvc3RDb21wb25lbnQuX2V4dENoaWxkcmVuID0gdHJ1ZVxuXG4vLyAgICAgLy8gICBpZiAocGFyZW50eHR5cGUgPT09ICdncmlkJykge1xuLy8gICAgIC8vICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4vLyAgICAgLy8gICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbi8vICAgICAvLyAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4vLyAgICAgLy8gICAgICAgICAvL3ZhciBqID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aDtcbi8vICAgICAvLyAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuLy8gICAgIC8vICAgICAgIH1cbi8vICAgICAvLyAgICAgICBlbHNlIHtcbi8vICAgICAvLyAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuLy8gICAgIC8vICAgICAgIH1cbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgICBlbHNlIHtcbi8vICAgICAvLyAgICAgICBjb25zb2xlLmxvZygnPz8nKVxuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sdGlwJykge1xuLy8gICAgIC8vICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbi8vICAgICAvLyAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbi8vICAgICAvLyAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbi8vICAgICAvLyAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT09ICdidXR0b24nKSB7XG4vLyAgICAgLy8gICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbi8vICAgICAvLyAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcClcbi8vICAgICAvLyAgICAgfSBlbHNlIHtcbi8vICAgICAvLyAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuLy8gICAgIC8vICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4vLyAgICAgLy8gICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuLy8gICAgIC8vICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4vLyAgICAgLy8gICAgICAgLy92YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuLy8gICAgIC8vICAgICAgIC8vcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4vLyAgICAgLy8gICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcClcbi8vICAgICAvLyAgICAgfSBlbHNlIHtcbi8vICAgICAvLyAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuLy8gICAgIC8vICAgICB9XG4vLyAgICAgLy8gICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgLy8gICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4vLyAgICAgLy8gICB9IGVsc2Uge1xuLy8gICAgIC8vICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbi8vICAgICAvLyAgIH1cbi8vICAgICAvLyB9XG4vLyAgICAgLy8gZWxzZSBpZiAodGhpcy5fbmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbi8vICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMuX25hdGl2ZUVsZW1lbnQpXG4vLyAgICAgLy8gICAvL3RoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IHRoaXMuX25hdGl2ZUVsZW1lbnR9KVxuLy8gICAgIC8vIH1cbi8vICAgICAvLyBlbHNlIHtcbi8vICAgICAvLyAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQnKVxuLy8gICAgIC8vICAgLy9jb25zb2xlLmxvZyhlbFJlZkl0ZW0pXG4vLyAgICAgLy8gICAvL3RoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IHRoaXMuX25hdGl2ZUVsZW1lbnR9KVxuLy8gICAgIC8vIH1cbi8vICAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdChwYXJlbnRDbXApXG4vLyAgICAgLy90aGlzWydyZWFkeSddLmVtaXQodGhpcylcblxuICB9XG5cbiAgYWRkVGhlQ2hpbGQocGFyZW50Q21wLCBjaGlsZENtcCkge1xuICAgICAgdmFyIHBhcmVudHh0eXBlID0gcGFyZW50Q21wLnh0eXBlXG4gICAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlXG4vLyAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyBwYXJlbnR4dHlwZSArICcsIGNoaWxkOiAnICsgY2hpbGR4dHlwZSlcbi8vICAgICAgdGhpcy5ob3N0Q29tcG9uZW50Ll9leHRDaGlsZHJlbiA9IHRydWVcbiAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vdmFyIGogPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc/PycpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvL3ZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgLy9wYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbignaXRlbScpIGl0ZW1zOiBRdWVyeUxpc3Q8YW55PlxuICBAQ29udGVudENoaWxkcmVuKCdpdGVtJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGl0ZW1zMjogUXVlcnlMaXN0PEVsZW1lbnRSZWY+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0T3JpZygpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdcXG5iYXNlQWZ0ZXJDb250ZW50SW5pdCcpXG5cbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPCAyKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCcxIGl0ZW0nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2codGhpcy5pdGVtcy5sZW5ndGggKyAnIGl0ZW1zJylcblxuICAgIHZhciBhbnlJdGVtczogYW55W10gPSBbXVxuICAgIHZhciBlbFJlZkl0ZW1zOiBhbnlbXSA9IFtdXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgYW55SXRlbXMucHVzaChpdGVtKVxuICAgIH0pXG4gICAgdGhpcy5pdGVtczIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGVsUmVmSXRlbXMucHVzaChpdGVtKVxuICAgIH0pXG5cbiAgICBmb3IgKHZhciBpIGluIGFueUl0ZW1zKSB7XG4gICAgICB2YXIgaXRlbSA9IGFueUl0ZW1zW2ldXG4gICAgICB2YXIgZWxSZWZJdGVtID0gZWxSZWZJdGVtc1tpXVxuICAgICAgaWYgKGl0ZW0gIT0gdGhpcykge1xuICAgICAgICBpZiAoaXRlbS5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50OiAnICsgdGhpcy5leHQueHR5cGUgKyAnLCBjaGlsZDogJyArIGl0ZW0uZXh0Lnh0eXBlKVxuICAgICAgICAgIHZhciBwYXJlbnR4dHlwZSA9IHRoaXNbJ2V4dCddLnh0eXBlXG4gICAgICAgICAgdmFyIGNoaWxkeHR5cGUgPSBpdGVtWydleHQnXS54dHlwZVxuICAgICAgICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzWydleHQnXVxuICAgICAgICAgIHZhciBjaGlsZENtcCA9IGl0ZW1bJ2V4dCddXG5cbiAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT09ICdncmlkJyB8fCBwYXJlbnR4dHlwZSA9PT0gJ2xvY2tlZGdyaWQnKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vdmFyIGogPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIGlmKHBhcmVudHh0eXBlID09PSAnY29sdW1uJykge1xuICAgICAgICAgICAgICBpZihjaGlsZHh0eXBlID09PSAnc2VsZWN0ZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0ZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJmaWVsZCcgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRhcmVhZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdoaWRkZW5maWVsZCcgfHwgY2hpbGR4dHlwZSA9PT0gJ3JhZGlvZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdmaWxlZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2JveGZpZWxkJyB8fCBjaGlsZHh0eXBlID09PSAndG9nZ2xlZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0RWRpdG9yKGl0ZW0uZXh0LmluaXRpYWxDb25maWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy92YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAvL3BhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ25hdGl2ZScpXG4gICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjb21wb25lbnQnKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coZWxSZWZJdGVtKVxuICAgICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGVsUmVmSXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdzYW1lIGl0ZW0nKVxuICAgICAgLy8gfVxuICAgIH1cbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdChwYXJlbnRDbXApXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICBsZXQgY2hhbmdlc01zZ3M6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgdmVyYiA9ICcnXG4gICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT0gdHJ1ZSkge1xuICAgICAgICB2ZXJiID0gJ2luaXRpYWxpemVkJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZlcmIgPSAnY2hhbmdlZCdcbiAgICAgIH1cbiAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWVcbiAgICAgIGlmICh0aGlzLmV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKVxuICAgICAgICB0aGlzLmV4dFsnc2V0JytjYXBQcm9wTmFtZV0odmFsKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmICh2ZXJiID09ICdjaGFuZ2VkJykge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2UgbmVlZGVkIGFuZCBleHQgbm90IGRlZmluZWQnKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjaGFuZ2VzTXNncy5wdXNoKGAke3Byb3BOYW1lfSAke3ZlcmJ9IHRvIFwiJHt2YWx9XCJgKVxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKGBPbkNoYW5nZXM6ICR7Y2hhbmdlc01zZ3Muam9pbignOyAnKX1gKVxuICB9XG5cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0RvQ2hlY2soKSB7Y29uc29sZS5sb2coYERvQ2hlY2tgKX1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlckNvbnRlbnRDaGVja2VkYCkgfVxuICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0luaXRgKSB9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlclZpZXdDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3Q2hlY2tlZGApIH1cblxufSJdfQ==