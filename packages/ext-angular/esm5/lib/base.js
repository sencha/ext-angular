/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import { ElementRef, EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
var base = /** @class */ (function () {
    function base(nativeElement, metaData, hostComponent) {
        var _this = this;
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this._extChildren = false;
        //    console.log('constructor')
        this._nativeElement = nativeElement;
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
        /** @type {?} */
        var listneresProvided = false;
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
        }
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
    };
    /**
     * @return {?}
     */
    base.prototype.baseAfterContentInit = /**
     * @return {?}
     */
    function () {
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
    };
    /**
     * @param {?} parentCmp
     * @param {?} childCmp
     * @return {?}
     */
    base.prototype.addTheChild = /**
     * @param {?} parentCmp
     * @param {?} childCmp
     * @return {?}
     */
    function (parentCmp, childCmp) {
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
    };
    /**
     * @return {?}
     */
    base.prototype.baseAfterContentInitOrig = /**
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
    base.propDecorators = {
        _extroute: [{ type: ContentChild, args: ['extroute',] }],
        items: [{ type: ContentChildren, args: ['item',] }],
        items2: [{ type: ContentChildren, args: ['item', { read: ElementRef },] }]
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUlMLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFFZixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUE7QUFFdEI7SUFNRSxjQUNFLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQW9CO1FBSDdCLGlCQWdCQztRQWRTLGFBQVEsR0FBUixRQUFRLENBQUs7UUFDZCxrQkFBYSxHQUFiLGFBQWEsQ0FBTztRQUxyQixpQkFBWSxHQUFRLEtBQUssQ0FBQTtRQU9uQyxnQ0FBZ0M7UUFDNUIsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFDbkMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVLEVBQUUsQ0FBTTtZQUMxQyxJQUFJLEtBQUssQ0FBQyxJQUFJLElBQUksWUFBWSxFQUFFO2dCQUM5QixDQUFDLG1CQUFLLEtBQUksRUFBQSxDQUFDLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7YUFDN0M7aUJBQ0k7Z0JBQ0gsQ0FBQyxtQkFBSyxLQUFJLEVBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUN2RDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQzs7Ozs7SUFFRCx5QkFBVTs7OztJQUFWLFVBQVcsUUFBYTs7O1lBRWxCLEVBQUUsR0FBUSxJQUFJOztZQUNkLENBQUMsR0FBUSxFQUFFO1FBQ2YsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBOztZQUNwQixpQkFBaUIsR0FBRyxLQUFLO1FBQzdCLEtBQUss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Q3JCLFdBQVcsR0FBRyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUN0RSxJQUFJLENBQUMsR0FBRyxDQUFDLEtBQUssR0FBQyxXQUFXLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTthQUNqQztpQkFDSTtnQkFDSCxJQUFJLElBQUksSUFBSSxTQUFTLEVBQUU7b0JBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUNBQW1DLENBQUMsQ0FBQTtpQkFDakQ7YUFDRjtZQUNELFdBQVcsQ0FBQyxJQUFJLENBQUksUUFBUSxTQUFJLElBQUksY0FBUSxHQUFHLE9BQUcsQ0FBQyxDQUFBO1NBQ3BEO1FBQ0QscURBQXFEO0lBQ3ZELENBQUM7OzRCQTFXQSxZQUFZLFNBQUMsVUFBVTt3QkFnUHZCLGVBQWUsU0FBQyxNQUFNO3lCQUN0QixlQUFlLFNBQUMsTUFBTSxFQUFFLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBRTs7SUFzSS9DLFdBQUM7Q0FBQSxBQXJmRCxJQXFmQztTQXJmWSxJQUFJOzs7SUFDZixtQkFBZTs7Ozs7SUFDZiw4QkFBMkI7Ozs7O0lBQzNCLDhCQUEyQjs7Ozs7SUFDM0IsNEJBQWlDOztJQTBIakMseUJBQXdDOztJQWdQeEMscUJBQThDOztJQUM5QyxzQkFBNEU7Ozs7O0lBdlcxRSx3QkFBcUI7O0lBQ3JCLDZCQUEyQiIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuICBwcml2YXRlIF9ob3N0Q29tcG9uZW50OiBhbnlcbiAgcHJpdmF0ZSBfZXh0Q2hpbGRyZW46IGFueSA9IGZhbHNlXG5cbiAgY29uc3RydWN0b3IoXG4gICAgbmF0aXZlRWxlbWVudDogYW55LFxuICAgIHByaXZhdGUgbWV0YURhdGE6IGFueSxcbiAgICBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2VcbiAgKSB7XG4vLyAgICBjb25zb2xlLmxvZygnY29uc3RydWN0b3InKVxuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBuYXRpdmVFbGVtZW50XG4gICAgdGhpcy5faG9zdENvbXBvbmVudCA9IGhvc3RDb21wb25lbnRcbiAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZSArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgbGV0IGxpc3RuZXJlc1Byb3ZpZGVkID0gZmFsc2VcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lLm1ldGFEYXRhLlBST1BFUlRJRVMubGVuZ3RoOyBpKyspIHsgXG4gICAgICB2YXIgcHJvcCA9IG1lLm1ldGFEYXRhLlBST1BFUlRJRVNbaV07XG4gICAgICBpZiAocHJvcCA9PSAnaGFuZGxlcicpIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL25lZWQgdG8gaGFuZGxlIGxpc3RlbmVycyBjb21pbmcgaW4gaGVyZVxuICAgICAgaWYgKChvLnh0eXBlID09PSAnY2FydGVzaWFuJyB8fCBvLnh0eXBlID09PSAncG9sYXInKSAmJiBwcm9wID09PSAnbGF5b3V0Jykge1xuICAgICAgfVxuICAgICAgZWxzZSBpZihwcm9wID09ICdsaXN0ZW5lcnMnICYmIG1lW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07XG4gICAgICAgIGxpc3RuZXJlc1Byb3ZpZGVkID0gdHJ1ZTtcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnaGFuZGxlcicgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHsgXG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdOyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHJ1ZSA9PT0gbWUuZml0VG9QYXJlbnQpIHtcbiAgICAgIG8udG9wPTAsIFxuICAgICAgby5sZWZ0PTAsIFxuICAgICAgby53aWR0aD0nMTAwJScsIFxuICAgICAgby5oZWlnaHQ9JzEwMCUnXG4gICAgfVxuICAgIGlmIChtZS5jb25maWcgIT09IHt9ICkge1xuICAgICAgRXh0LmFwcGx5KG8sIG1lLmNvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYoIWxpc3RuZXJlc1Byb3ZpZGVkKSB7XG4gICAgICBvLmxpc3RlbmVycyA9IHt9XG4gICAgICB2YXIgRVZFTlRTID0gbWV0YURhdGEuRVZFTlRTXG4gICAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgICBsZXQgZXZlbnRuYW1lOiBhbnkgPSBldmVudC5uYW1lXG4gICAgICAgIGxldCBldmVudHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50LnBhcmFtZXRlcnNcbiAgICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBwYXJhbWV0ZXJzOiBhbnkgPSBldmVudHBhcmFtZXRlcnNcbiAgICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJylcbiAgICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICBsZXQgZW1pdHBhcm1zOiBhbnkgPSB7fVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrICkge1xuICAgICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBvLnJlbmRlclRvID0gdGhpcy5fbmF0aXZlRWxlbWVudFxuICAgIH1cbiAgICB0aGlzLmV4dCA9IEV4dC5jcmVhdGUobylcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25EZXN0cm95YClcbiAgICB2YXIgY2hpbGRDbXBcbiAgICB2YXIgcGFyZW50Q21wXG4gICAgdHJ5IHtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5leHQpXG4gICAgICBjaGlsZENtcCA9IHRoaXMuZXh0XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2hvc3RDb21wb25lbnQpXG4gICAgICBpZiAodGhpcy5faG9zdENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5faG9zdENvbXBvbmVudC5leHQpXG4gICAgICAgIHBhcmVudENtcCA9IHRoaXMuX2hvc3RDb21wb25lbnQuZXh0XG4gICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuXG4gICAgICAgIGlmKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnbWVudScpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24gbWVudSBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdjYXJvdXNlbCcpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjYXJvdXNlbCBjaGlsZCBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcGFyZW50Q21wLnJlbW92ZShbY2hpbGRDbXBdKVxuICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZCgnZXh0cm91dGUnKSBfZXh0cm91dGU6IGFueVxuICBiYXNlQWZ0ZXJDb250ZW50SW5pdCgpIHtcbi8vICAgIGNvbnNvbGUubG9nKCdcXG5iYXNlQWZ0ZXJDb250ZW50SW5pdCcpXG4gICAgaWYgKHRoaXMuX2V4dHJvdXRlICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogdGhpcy5fZXh0cm91dGUubmF0aXZlRWxlbWVudH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4vLyAgICBjb25zb2xlLmxvZygnY2hpbGQ6ICcgKyB0aGlzLmV4dC54dHlwZSlcbi8vICAgIGNvbnNvbGUubG9nKCd0aGlzLl9pdGVtcycpXG4vLyAgICBjb25zb2xlLmxvZyh0aGlzLl9pdGVtcylcbi8vICAgIGNvbnNvbGUubG9nKCd0aGlzJylcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMpXG5cbiAgICAvL2lmKHRoaXMuX2hvc3RDb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3Jvb3QnKVxuICAgICAgLy8gdmFyIGFueUl0ZW1zOiBhbnlbXSA9IFtdXG4gICAgICAvLyB2YXIgZWxSZWZJdGVtczogYW55W10gPSBbXVxuICAgICAgLy8gdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHthbnlJdGVtcy5wdXNoKGl0ZW0pfSlcbiAgICAgIC8vIHRoaXMuX2VsUmVmSXRlbXMuZm9yRWFjaChpdGVtID0+IHtlbFJlZkl0ZW1zLnB1c2goaXRlbSl9KVxuXG4gICAgICAvLyBmb3IgKHZhciBpIGluIGFueUl0ZW1zKSB7XG4gICAgICAvLyAgIHZhciBpdGVtID0gYW55SXRlbXNbaV1cbiAgICAgIC8vICAgdmFyIGVsUmVmSXRlbSA9IGVsUmVmSXRlbXNbaV1cbiAgICAgIC8vICAgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgICAvLyAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBlbHNlIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnbm90IHN1cHBvcnRlZCcpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgIC8vfVxuICAgIC8vZWxzZSB7XG5cbiAgICBpZih0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ19ob3N0Q29tcG9uZW50OiAnKVxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9ob3N0Q29tcG9uZW50KVxuICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50OiAnICsgdGhpcy5faG9zdENvbXBvbmVudC5leHQueHR5cGUpXG4gICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5faG9zdENvbXBvbmVudC5leHRcbiAgICAgIHZhciBjaGlsZENtcCA9IHRoaXMuZXh0XG4gICAgICB0aGlzLmFkZFRoZUNoaWxkKHBhcmVudENtcCxjaGlsZENtcClcbiAgICB9XG4gICAgcmV0dXJuXG5cblxuXG5cbi8vICAgICAgICBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuLy8gICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbi8vICAgICAgICB9XG4vLyAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRcbi8vICAgICAgICAgIHZhciBjaGlsZENtcCA9IGl0ZW0uZXh0XG4vLyAgICAgICAgICB0aGlzLmFkZFRoZUNoaWxkKHBhcmVudENtcCxjaGlsZENtcClcbi8vICAgICAgICB9XG5cbi8vICAgIGNvbnNvbGUubG9nKCdob3N0Jylcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMuX2hvc3RDb21wb25lbnQpXG4vLyAgICBjb25zb2xlLmxvZygnbmF0aXZlJylcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMuX25hdGl2ZUVsZW1lbnQpXG5cbi8vICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnKVxuLy8gICAgY29uc29sZS5sb2codGhpcy5faXRlbXMpXG4vLyAgICBjb25zb2xlLmxvZyh0aGlzLl9pdGVtcy5sZW5ndGgpXG5cbi8vICAgICBpZiAodGhpcy5faXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLl9leHRDaGlsZHJlbiA9PSB0cnVlKSB7XG4vLyAgICAgICBjb25zb2xlLmVycm9yKCdjYW50IGhhdmUgYm90aCBuYXRpdmUgZWxlbWVudHMgYW5kIEV4dEFuZ3VsYXIgZWxlbWVudHMgYXMgY2hpbGRyZW4nKVxuLy8gICAgICAgcmV0dXJuXG4vLyAgICAgfVxuLy8gICAgIGVsc2UgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RvIGl0Jylcbi8vICAgICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPCAyKSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ29ubHkgMSBpdGVtJylcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5faG9zdENvbXBvbmVudClcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9pdGVtcylcblxuLy8gICAgICAgLy8gIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAvLyAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBpdGVtLm5hdGl2ZUVsZW1lbnR9KVxuLy8gICAgICAgLy8gIH1cbi8vICAgICAgIC8vICBlbHNlIHtcbi8vICAgICAgIC8vICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmV4dFxuLy8gICAgICAgLy8gICAgdmFyIGNoaWxkQ21wID0gaXRlbS5leHRcbi8vICAgICAgIC8vICAgIHRoaXMuYWRkVGhlQ2hpbGQocGFyZW50Q21wLGNoaWxkQ21wKVxuLy8gICAgICAgLy8gIH1cblxuXG5cblxuLy8gICAgICAgICByZXR1cm5cbi8vICAgICAgIH1cbi8vICAgICAgIC8vY29uc29sZS5sb2codGhpcy5faXRlbXMubGVuZ3RoICsgJyBpdGVtcycpXG4vLyAgICAgICBjb25zb2xlLmxvZygnZG9pbmcgc29tZXRoaW5nJylcblxuLy8gICAgICAgdmFyIGFueUl0ZW1zOiBhbnlbXSA9IFtdXG4vLyAgICAgICB2YXIgZWxSZWZJdGVtczogYW55W10gPSBbXVxuLy8gICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHthbnlJdGVtcy5wdXNoKGl0ZW0pfSlcbi8vICAgICAgIHRoaXMuX2VsUmVmSXRlbXMuZm9yRWFjaChpdGVtID0+IHtlbFJlZkl0ZW1zLnB1c2goaXRlbSl9KVxuXG4vLyAgICAgICB2YXIgajogYW55ID0gMFxuLy8gICAgICAgZm9yICh2YXIgaSBpbiBhbnlJdGVtcykge1xuLy8gICAgICAgICBpZiAoaiA9PSAwKSB7aisrO2NvbnRpbnVlfVxuLy8gICAgICAgICB2YXIgaXRlbSA9IGFueUl0ZW1zW2ldXG4vLyAgICAgICAgIHZhciBlbFJlZkl0ZW0gPSBlbFJlZkl0ZW1zW2ldXG4vLyAgICAgICAgIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4vLyAvLyAgICAgICAgICBjb25zb2xlLmxvZygnbmF0aXZlJylcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLmV4dC54dHlwZSlcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCcpXG4vLyAvLyAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLm5hdGl2ZUVsZW1lbnQpXG4vLyAgICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIHtcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQnKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkJylcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKGVsUmVmSXRlbS5uYXRpdmVFbGVtZW50KVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coZWxSZWZJdGVtKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbi8vICAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRcbi8vICAgICAgICAgICB2YXIgY2hpbGRDbXAgPSBpdGVtLmV4dFxuLy8gICAgICAgICAgIHRoaXMuYWRkVGhlQ2hpbGQocGFyZW50Q21wLGNoaWxkQ21wKVxuLy8gICAgICAgICAgIC8vdGhpcy5leHQuYWRkKGl0ZW0uZXh0KVxuLy8gICAgICAgICAgIC8vdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogZWxSZWZJdGVtLm5hdGl2ZUVsZW1lbnR9KVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm5cbi8vICAgICB9XG5cbi8vICAgICAvLyBpZiAodGhpcy5leHQgIT0gdW5kZWZpbmVkICYmIHRoaXMuaG9zdENvbXBvbmVudCAhPSB1bmRlZmluZWQpIHtcbi8vICAgICAvLyAgIHZhciBwYXJlbnR4dHlwZSA9IHRoaXMuaG9zdENvbXBvbmVudFsnZXh0J10ueHR5cGVcbi8vICAgICAvLyAgIHZhciBjaGlsZHh0eXBlID0gdGhpc1snZXh0J10ueHR5cGVcbi8vICAgICAvLyAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmhvc3RDb21wb25lbnRbJ2V4dCddXG4vLyAgICAgLy8gICB2YXIgY2hpbGRDbXAgPSB0aGlzWydleHQnXVxuLy8gICAgIC8vICAgY29uc29sZS5sb2coJ3BhcmVudDogJyArIHBhcmVudHh0eXBlICsgJywgY2hpbGQ6ICcgKyBjaGlsZHh0eXBlKVxuLy8gICAgIC8vICAgdGhpcy5ob3N0Q29tcG9uZW50Ll9leHRDaGlsZHJlbiA9IHRydWVcblxuLy8gICAgIC8vICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcpIHtcbi8vICAgICAvLyAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyY29sdW1uJykge1xuLy8gICAgIC8vICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgICAgZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgLy8gICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuLy8gICAgIC8vICAgICAgICAgLy92YXIgaiA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGg7XG4vLyAgICAgLy8gICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbi8vICAgICAvLyAgICAgICB9XG4vLyAgICAgLy8gICAgICAgZWxzZSB7XG4vLyAgICAgLy8gICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbi8vICAgICAvLyAgICAgICB9XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgICAgZWxzZSB7XG4vLyAgICAgLy8gICAgICAgY29uc29sZS5sb2coJz8/Jylcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbHRpcCcpIHtcbi8vICAgICAvLyAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4vLyAgICAgLy8gICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICdwbHVnaW4nKSB7XG4vLyAgICAgLy8gICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4vLyAgICAgLy8gICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAnYnV0dG9uJykge1xuLy8gICAgIC8vICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ21lbnUnKSB7XG4vLyAgICAgLy8gICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4vLyAgICAgLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT09IHRydWUpIHtcbi8vICAgICAvLyAgICAgcGFyZW50Q21wLmFkZERvY2tlZEl0ZW1zKGNoaWxkQ21wKVxuLy8gICAgIC8vICAgfSBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbi8vICAgICAvLyAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuLy8gICAgIC8vICAgICAgIC8vdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbi8vICAgICAvLyAgICAgICAvL3BhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuLy8gICAgIC8vICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApXG4vLyAgICAgLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgLy8gICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfSBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuLy8gICAgIC8vICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuLy8gICAgIC8vICAgfSBlbHNlIHtcbi8vICAgICAvLyAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4vLyAgICAgLy8gICB9XG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIGVsc2UgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLl9uYXRpdmVFbGVtZW50KVxuLy8gICAgIC8vICAgLy90aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiB0aGlzLl9uYXRpdmVFbGVtZW50fSlcbi8vICAgICAvLyB9XG4vLyAgICAgLy8gZWxzZSB7XG4vLyAgICAgLy8gICBjb25zb2xlLmxvZygnY29tcG9uZW50Jylcbi8vICAgICAvLyAgIC8vY29uc29sZS5sb2coZWxSZWZJdGVtKVxuLy8gICAgIC8vICAgLy90aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiB0aGlzLl9uYXRpdmVFbGVtZW50fSlcbi8vICAgICAvLyB9XG4vLyAgICAgLy90aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuLy8gICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG5cbiAgfVxuXG4gIGFkZFRoZUNoaWxkKHBhcmVudENtcCwgY2hpbGRDbXApIHtcbiAgICAgIHZhciBwYXJlbnR4dHlwZSA9IHBhcmVudENtcC54dHlwZVxuICAgICAgdmFyIGNoaWxkeHR5cGUgPSBjaGlsZENtcC54dHlwZVxuLy8gICAgICBjb25zb2xlLmxvZygncGFyZW50OiAnICsgcGFyZW50eHR5cGUgKyAnLCBjaGlsZDogJyArIGNoaWxkeHR5cGUpXG4vLyAgICAgIHRoaXMuaG9zdENvbXBvbmVudC5fZXh0Q2hpbGRyZW4gPSB0cnVlXG4gICAgICBpZiAocGFyZW50eHR5cGUgPT09ICdncmlkJykge1xuICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgcGFyZW50Q21wLmFkZENvbHVtbihjaGlsZENtcClcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAvL3ZhciBqID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnPz8nKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sdGlwJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuc2V0TWVudShjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICB9IGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy92YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgIC8vcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4gICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgIH1cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGRyZW4oJ2l0ZW0nKSBpdGVtczogUXVlcnlMaXN0PGFueT5cbiAgQENvbnRlbnRDaGlsZHJlbignaXRlbScsIHsgcmVhZDogRWxlbWVudFJlZiB9KSBpdGVtczI6IFF1ZXJ5TGlzdDxFbGVtZW50UmVmPlxuICBiYXNlQWZ0ZXJDb250ZW50SW5pdE9yaWcoKSB7XG4gICAgLy9jb25zb2xlLmxvZygnXFxuYmFzZUFmdGVyQ29udGVudEluaXQnKVxuXG4gICAgaWYgKHRoaXMuaXRlbXMubGVuZ3RoIDwgMikge1xuICAgICAgLy9jb25zb2xlLmxvZygnMSBpdGVtJylcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICAvL2NvbnNvbGUubG9nKHRoaXMuaXRlbXMubGVuZ3RoICsgJyBpdGVtcycpXG5cbiAgICB2YXIgYW55SXRlbXM6IGFueVtdID0gW11cbiAgICB2YXIgZWxSZWZJdGVtczogYW55W10gPSBbXVxuICAgIHRoaXMuaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGFueUl0ZW1zLnB1c2goaXRlbSlcbiAgICB9KVxuICAgIHRoaXMuaXRlbXMyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICBlbFJlZkl0ZW1zLnB1c2goaXRlbSlcbiAgICB9KVxuXG4gICAgZm9yICh2YXIgaSBpbiBhbnlJdGVtcykge1xuICAgICAgdmFyIGl0ZW0gPSBhbnlJdGVtc1tpXVxuICAgICAgdmFyIGVsUmVmSXRlbSA9IGVsUmVmSXRlbXNbaV1cbiAgICAgIGlmIChpdGVtICE9IHRoaXMpIHtcbiAgICAgICAgaWYgKGl0ZW0uZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlICsgJywgY2hpbGQ6ICcgKyBpdGVtLmV4dC54dHlwZSlcbiAgICAgICAgICB2YXIgcGFyZW50eHR5cGUgPSB0aGlzWydleHQnXS54dHlwZVxuICAgICAgICAgIHZhciBjaGlsZHh0eXBlID0gaXRlbVsnZXh0J10ueHR5cGVcbiAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpc1snZXh0J11cbiAgICAgICAgICB2YXIgY2hpbGRDbXAgPSBpdGVtWydleHQnXVxuXG4gICAgICAgICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcgfHwgcGFyZW50eHR5cGUgPT09ICdsb2NrZWRncmlkJykge1xuICAgICAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyY29sdW1uJykge1xuICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAvL3ZhciBqID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH0gXG4gICAgICAgICAgZWxzZSBpZihwYXJlbnR4dHlwZSA9PT0gJ2NvbHVtbicpIHtcbiAgICAgICAgICAgICAgaWYoY2hpbGR4dHlwZSA9PT0gJ3NlbGVjdGZpZWxkJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGZpZWxkJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0YXJlYWZpZWxkJyB8fCBjaGlsZHh0eXBlID09PSAnaGlkZGVuZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdyYWRpb2ZpZWxkJyB8fCBjaGlsZHh0eXBlID09PSAnZmlsZWZpZWxkJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tib3hmaWVsZCcgfHwgY2hpbGR4dHlwZSA9PT0gJ3RvZ2dsZWZpZWxkJyB8fCBjaGlsZHh0eXBlID09PSAnZmllbGRzZXQnKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wLnNldEVkaXRvcihpdGVtLmV4dC5pbml0aWFsQ29uZmlnKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICdwbHVnaW4nKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAocGFyZW50eHR5cGUgPT09ICdidXR0b24nKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ21lbnUnKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZERvY2tlZEl0ZW1zKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgIC8vdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbiAgICAgICAgICAgICAgLy9wYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcClcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCduYXRpdmUnKVxuICAgICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGl0ZW0ubmF0aXZlRWxlbWVudH0pXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnY29tcG9uZW50JylcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGVsUmVmSXRlbSlcbiAgICAgICAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBlbFJlZkl0ZW0ubmF0aXZlRWxlbWVudH0pXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vIGVsc2Uge1xuICAgICAgLy8gICBjb25zb2xlLmxvZygnc2FtZSBpdGVtJylcbiAgICAgIC8vIH1cbiAgICB9XG4gICAgLy90aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuICAgIHRoaXNbJ3JlYWR5J10uZW1pdCh0aGlzKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICAvL2NvbnNvbGUubG9nKGNoYW5nZXMpXG4gICAgbGV0IGNoYW5nZXNNc2dzOiBzdHJpbmdbXSA9IFtdXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgbGV0IHZlcmIgPSAnJ1xuICAgICAgaWYgKGNoYW5nZXNbcHJvcE5hbWVdLmZpcnN0Q2hhbmdlID09IHRydWUpIHtcbiAgICAgICAgdmVyYiA9ICdpbml0aWFsaXplZCdcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2ZXJiID0gJ2NoYW5nZWQnXG4gICAgICB9XG4gICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlXG4gICAgICBpZiAodGhpcy5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSlcbiAgICAgICAgdGhpcy5leHRbJ3NldCcrY2FwUHJvcE5hbWVdKHZhbClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodmVyYiA9PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlIG5lZWRlZCBhbmQgZXh0IG5vdCBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hhbmdlc01zZ3MucHVzaChgJHtwcm9wTmFtZX0gJHt2ZXJifSB0byBcIiR7dmFsfVwiYClcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhgT25DaGFuZ2VzOiAke2NoYW5nZXNNc2dzLmpvaW4oJzsgJyl9YClcbiAgfVxuXG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdEb0NoZWNrKCkge2NvbnNvbGUubG9nKGBEb0NoZWNrYCl9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlckNvbnRlbnRDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJDb250ZW50Q2hlY2tlZGApIH1cbiAgLy9uZ0FmdGVyVmlld0luaXQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdJbml0YCkgfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0NoZWNrZWRgKSB9XG5cbn0iXX0=