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
        var childxtype = childCmp.xtype;
        if (this.ext.initialConfig.align != undefined) {
            if (parentxtype != 'titlebar') {
                console.error('Can only use align property if parent is a Titlebar');
            }
        }
        //      if (childxtype === 'searchfield') {
        //        if (this.ext.initialConfig.align != undefined) {
        //        }
        //      }
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
                /** @type {?} */
                var setFunction = 'set' + capPropName
                //        console.log(this)
                //        console.log(this.ext.xtype)
                //        console.log(propName)
                //        console.log(setFunction)
                //        console.log(this.ext[setFunction])
                ;
                //        console.log(this)
                //        console.log(this.ext.xtype)
                //        console.log(propName)
                //        console.log(setFunction)
                //        console.log(this.ext[setFunction])
                if (this.ext[setFunction] != undefined) {
                    this.ext[setFunction](val);
                }
                else {
                    console.error(setFunction + ' not found for ' + this.ext.xtype);
                }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7O0FBQ0EsT0FBTyxFQUlMLFVBQVUsRUFDVixZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFFZixTQUFTLEVBRVYsTUFBTSxlQUFlLENBQUE7QUFFdEI7SUFNRSxjQUNFLGFBQWtCLEVBQ1YsUUFBYSxFQUNkLGFBQW9CO1FBSDdCLGlCQWVDO1FBYlMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFPO1FBTHJCLGlCQUFZLEdBQVEsS0FBSyxDQUFBO1FBTy9CLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFBO1FBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFBO1FBQ25DLFFBQVEsQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFFLFVBQUMsS0FBVSxFQUFFLENBQU07WUFDMUMsSUFBSSxLQUFLLENBQUMsSUFBSSxJQUFJLFlBQVksRUFBRTtnQkFDOUIsQ0FBQyxtQkFBSyxLQUFJLEVBQUEsQ0FBQyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQzdDO2lCQUNJO2dCQUNILENBQUMsbUJBQUssS0FBSSxFQUFBLENBQUMsQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7YUFDdkQ7UUFDSCxDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7Ozs7O0lBRUQseUJBQVU7Ozs7SUFBVixVQUFXLFFBQWE7OztZQUVsQixFQUFFLEdBQVEsSUFBSTs7WUFDZCxDQUFDLEdBQVEsRUFBRTtRQUNmLENBQUMsQ0FBQyxLQUFLLEdBQUcsUUFBUSxDQUFDLEtBQUssQ0FBQTs7WUFDcEIsaUJBQWlCLEdBQUcsS0FBSztRQUM3QixLQUFLLElBQUksQ0FBQyxHQUFH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O0lBa0ovQyxXQUFDO0NBQUEsQUExZ0JELElBMGdCQztTQTFnQlksSUFBSTs7O0lBQ2YsbUJBQWU7Ozs7O0lBQ2YsOEJBQTJCOzs7OztJQUMzQiw4QkFBMkI7Ozs7O0lBQzNCLDRCQUFpQzs7SUF5SGpDLHlCQUF3Qzs7SUEwUHhDLHFCQUE4Qzs7SUFDOUMsc0JBQTRFOzs7OztJQWhYMUUsd0JBQXFCOztJQUNyQiw2QkFBMkIiLCJzb3VyY2VzQ29udGVudCI6WyJkZWNsYXJlIHZhciBFeHQ6IGFueVxuaW1wb3J0IHtcbiAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgYmFzZSB7XG4gIHB1YmxpYyBleHQ6IGFueVxuICBwcml2YXRlIF9uYXRpdmVFbGVtZW50OiBhbnlcbiAgcHJpdmF0ZSBfaG9zdENvbXBvbmVudDogYW55XG4gIHByaXZhdGUgX2V4dENoaWxkcmVuOiBhbnkgPSBmYWxzZVxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hdGl2ZUVsZW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIG1ldGFEYXRhOiBhbnksXG4gICAgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlXG4gICkge1xuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBuYXRpdmVFbGVtZW50XG4gICAgdGhpcy5faG9zdENvbXBvbmVudCA9IGhvc3RDb21wb25lbnRcbiAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZSArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgbGV0IGxpc3RuZXJlc1Byb3ZpZGVkID0gZmFsc2VcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lLm1ldGFEYXRhLlBST1BFUlRJRVMubGVuZ3RoOyBpKyspIHsgXG4gICAgICB2YXIgcHJvcCA9IG1lLm1ldGFEYXRhLlBST1BFUlRJRVNbaV07XG4gICAgICBpZiAocHJvcCA9PSAnaGFuZGxlcicpIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICAvL25lZWQgdG8gaGFuZGxlIGxpc3RlbmVycyBjb21pbmcgaW4gaGVyZVxuICAgICAgaWYgKChvLnh0eXBlID09PSAnY2FydGVzaWFuJyB8fCBvLnh0eXBlID09PSAncG9sYXInKSAmJiBwcm9wID09PSAnbGF5b3V0Jykge1xuICAgICAgfVxuICAgICAgZWxzZSBpZihwcm9wID09ICdsaXN0ZW5lcnMnICYmIG1lW3Byb3BdICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07XG4gICAgICAgIGxpc3RuZXJlc1Byb3ZpZGVkID0gdHJ1ZTtcbiAgICAgIH0gXG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdjb25maWcnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnaGFuZGxlcicgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHsgXG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdOyBcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAodHJ1ZSA9PT0gbWUuZml0VG9QYXJlbnQpIHtcbiAgICAgIG8udG9wPTAsIFxuICAgICAgby5sZWZ0PTAsIFxuICAgICAgby53aWR0aD0nMTAwJScsIFxuICAgICAgby5oZWlnaHQ9JzEwMCUnXG4gICAgfVxuICAgIGlmIChtZS5jb25maWcgIT09IHt9ICkge1xuICAgICAgRXh0LmFwcGx5KG8sIG1lLmNvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYoIWxpc3RuZXJlc1Byb3ZpZGVkKSB7XG4gICAgICBvLmxpc3RlbmVycyA9IHt9XG4gICAgICB2YXIgRVZFTlRTID0gbWV0YURhdGEuRVZFTlRTXG4gICAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgICBsZXQgZXZlbnRuYW1lOiBhbnkgPSBldmVudC5uYW1lXG4gICAgICAgIGxldCBldmVudHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50LnBhcmFtZXRlcnNcbiAgICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBwYXJhbWV0ZXJzOiBhbnkgPSBldmVudHBhcmFtZXRlcnNcbiAgICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJylcbiAgICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICBsZXQgZW1pdHBhcm1zOiBhbnkgPSB7fVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrICkge1xuICAgICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBvLnJlbmRlclRvID0gdGhpcy5fbmF0aXZlRWxlbWVudFxuICAgIH1cbiAgICB0aGlzLmV4dCA9IEV4dC5jcmVhdGUobylcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25EZXN0cm95YClcbiAgICB2YXIgY2hpbGRDbXBcbiAgICB2YXIgcGFyZW50Q21wXG4gICAgdHJ5IHtcbiAgICAgIC8vY29uc29sZS5sb2codGhpcylcbiAgICAgIC8vY29uc29sZS5sb2codGhpcy5leHQpXG4gICAgICBjaGlsZENtcCA9IHRoaXMuZXh0XG4gICAgICAvL2NvbnNvbGUubG9nKHRoaXMuX2hvc3RDb21wb25lbnQpXG4gICAgICBpZiAodGhpcy5faG9zdENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgIC8vY29uc29sZS5sb2codGhpcy5faG9zdENvbXBvbmVudC5leHQpXG4gICAgICAgIHBhcmVudENtcCA9IHRoaXMuX2hvc3RDb21wb25lbnQuZXh0XG4gICAgICAgXG4gICAgICAgIC8vY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuXG4gICAgICAgIGlmKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnbWVudScpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24gbWVudSBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdjYXJvdXNlbCcpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjYXJvdXNlbCBjaGlsZCBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcGFyZW50Q21wLnJlbW92ZShbY2hpbGRDbXBdKVxuICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZCgnZXh0cm91dGUnKSBfZXh0cm91dGU6IGFueVxuICBiYXNlQWZ0ZXJDb250ZW50SW5pdCgpIHtcbi8vICAgIGNvbnNvbGUubG9nKCdcXG5iYXNlQWZ0ZXJDb250ZW50SW5pdCcpXG4gICAgaWYgKHRoaXMuX2V4dHJvdXRlICE9IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogdGhpcy5fZXh0cm91dGUubmF0aXZlRWxlbWVudH0pXG4gICAgICByZXR1cm5cbiAgICB9XG4vLyAgICBjb25zb2xlLmxvZygnY2hpbGQ6ICcgKyB0aGlzLmV4dC54dHlwZSlcbi8vICAgIGNvbnNvbGUubG9nKCd0aGlzLl9pdGVtcycpXG4vLyAgICBjb25zb2xlLmxvZyh0aGlzLl9pdGVtcylcbi8vICAgIGNvbnNvbGUubG9nKCd0aGlzJylcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMpXG5cbiAgICAvL2lmKHRoaXMuX2hvc3RDb21wb25lbnQgPT0gbnVsbCkge1xuICAgICAgLy8gY29uc29sZS5sb2coJ3Jvb3QnKVxuICAgICAgLy8gdmFyIGFueUl0ZW1zOiBhbnlbXSA9IFtdXG4gICAgICAvLyB2YXIgZWxSZWZJdGVtczogYW55W10gPSBbXVxuICAgICAgLy8gdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHthbnlJdGVtcy5wdXNoKGl0ZW0pfSlcbiAgICAgIC8vIHRoaXMuX2VsUmVmSXRlbXMuZm9yRWFjaChpdGVtID0+IHtlbFJlZkl0ZW1zLnB1c2goaXRlbSl9KVxuXG4gICAgICAvLyBmb3IgKHZhciBpIGluIGFueUl0ZW1zKSB7XG4gICAgICAvLyAgIHZhciBpdGVtID0gYW55SXRlbXNbaV1cbiAgICAgIC8vICAgdmFyIGVsUmVmSXRlbSA9IGVsUmVmSXRlbXNbaV1cbiAgICAgIC8vICAgaWYgKGl0ZW0ubmF0aXZlRWxlbWVudCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnaGVyZScpXG4gICAgICAvLyAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgIC8vICAgfVxuICAgICAgLy8gICBlbHNlIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygnbm90IHN1cHBvcnRlZCcpXG4gICAgICAvLyAgIH1cbiAgICAgIC8vIH1cblxuICAgIC8vfVxuICAgIC8vZWxzZSB7XG5cbiAgICBpZih0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ19ob3N0Q29tcG9uZW50OiAnKVxuICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9ob3N0Q29tcG9uZW50KVxuICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50OiAnICsgdGhpcy5faG9zdENvbXBvbmVudC5leHQueHR5cGUpXG4gICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5faG9zdENvbXBvbmVudC5leHRcbiAgICAgIHZhciBjaGlsZENtcCA9IHRoaXMuZXh0XG4gICAgICB0aGlzLmFkZFRoZUNoaWxkKHBhcmVudENtcCxjaGlsZENtcClcbiAgICB9XG4gICAgcmV0dXJuXG5cblxuXG5cbi8vICAgICAgICBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuLy8gICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbi8vICAgICAgICB9XG4vLyAgICAgICAgZWxzZSB7XG4vLyAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRcbi8vICAgICAgICAgIHZhciBjaGlsZENtcCA9IGl0ZW0uZXh0XG4vLyAgICAgICAgICB0aGlzLmFkZFRoZUNoaWxkKHBhcmVudENtcCxjaGlsZENtcClcbi8vICAgICAgICB9XG5cbi8vICAgIGNvbnNvbGUubG9nKCdob3N0Jylcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMuX2hvc3RDb21wb25lbnQpXG4vLyAgICBjb25zb2xlLmxvZygnbmF0aXZlJylcbi8vICAgIGNvbnNvbGUubG9nKHRoaXMuX25hdGl2ZUVsZW1lbnQpXG5cbi8vICAgIGNvbnNvbGUubG9nKCdfaXRlbXMnKVxuLy8gICAgY29uc29sZS5sb2codGhpcy5faXRlbXMpXG4vLyAgICBjb25zb2xlLmxvZyh0aGlzLl9pdGVtcy5sZW5ndGgpXG5cbi8vICAgICBpZiAodGhpcy5faXRlbXMubGVuZ3RoID4gMCAmJiB0aGlzLl9leHRDaGlsZHJlbiA9PSB0cnVlKSB7XG4vLyAgICAgICBjb25zb2xlLmVycm9yKCdjYW50IGhhdmUgYm90aCBuYXRpdmUgZWxlbWVudHMgYW5kIEV4dEFuZ3VsYXIgZWxlbWVudHMgYXMgY2hpbGRyZW4nKVxuLy8gICAgICAgcmV0dXJuXG4vLyAgICAgfVxuLy8gICAgIGVsc2UgaWYgKHRoaXMuX2l0ZW1zLmxlbmd0aCA+IDApIHtcbi8vICAgICAgIGNvbnNvbGUuZXJyb3IoJ2RvIGl0Jylcbi8vICAgICAgIGlmICh0aGlzLl9pdGVtcy5sZW5ndGggPCAyKSB7XG4vLyAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ29ubHkgMSBpdGVtJylcbi8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5faG9zdENvbXBvbmVudClcbi8vICAgICAgICAgLy9jb25zb2xlLmxvZyh0aGlzLl9pdGVtcylcblxuLy8gICAgICAgLy8gIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAvLyAgICB0aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiBpdGVtLm5hdGl2ZUVsZW1lbnR9KVxuLy8gICAgICAgLy8gIH1cbi8vICAgICAgIC8vICBlbHNlIHtcbi8vICAgICAgIC8vICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmV4dFxuLy8gICAgICAgLy8gICAgdmFyIGNoaWxkQ21wID0gaXRlbS5leHRcbi8vICAgICAgIC8vICAgIHRoaXMuYWRkVGhlQ2hpbGQocGFyZW50Q21wLGNoaWxkQ21wKVxuLy8gICAgICAgLy8gIH1cblxuXG5cblxuLy8gICAgICAgICByZXR1cm5cbi8vICAgICAgIH1cbi8vICAgICAgIC8vY29uc29sZS5sb2codGhpcy5faXRlbXMubGVuZ3RoICsgJyBpdGVtcycpXG4vLyAgICAgICBjb25zb2xlLmxvZygnZG9pbmcgc29tZXRoaW5nJylcblxuLy8gICAgICAgdmFyIGFueUl0ZW1zOiBhbnlbXSA9IFtdXG4vLyAgICAgICB2YXIgZWxSZWZJdGVtczogYW55W10gPSBbXVxuLy8gICAgICAgdGhpcy5faXRlbXMuZm9yRWFjaChpdGVtID0+IHthbnlJdGVtcy5wdXNoKGl0ZW0pfSlcbi8vICAgICAgIHRoaXMuX2VsUmVmSXRlbXMuZm9yRWFjaChpdGVtID0+IHtlbFJlZkl0ZW1zLnB1c2goaXRlbSl9KVxuXG4vLyAgICAgICB2YXIgajogYW55ID0gMFxuLy8gICAgICAgZm9yICh2YXIgaSBpbiBhbnlJdGVtcykge1xuLy8gICAgICAgICBpZiAoaiA9PSAwKSB7aisrO2NvbnRpbnVlfVxuLy8gICAgICAgICB2YXIgaXRlbSA9IGFueUl0ZW1zW2ldXG4vLyAgICAgICAgIHZhciBlbFJlZkl0ZW0gPSBlbFJlZkl0ZW1zW2ldXG4vLyAgICAgICAgIGlmIChpdGVtLm5hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4vLyAvLyAgICAgICAgICBjb25zb2xlLmxvZygnbmF0aXZlJylcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKCdwYXJlbnQ6ICcgKyB0aGlzLmV4dC54dHlwZSlcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCcpXG4vLyAvLyAgICAgICAgICBjb25zb2xlLmxvZyhpdGVtLm5hdGl2ZUVsZW1lbnQpXG4vLyAgICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbi8vICAgICAgICAgfVxuLy8gICAgICAgICBlbHNlIHtcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKCdjb21wb25lbnQnKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coJ3BhcmVudDogJyArIHRoaXMuZXh0Lnh0eXBlKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkJylcbi8vIC8vICAgICAgICAgIGNvbnNvbGUubG9nKGVsUmVmSXRlbS5uYXRpdmVFbGVtZW50KVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coZWxSZWZJdGVtKVxuLy8gLy8gICAgICAgICAgY29uc29sZS5sb2coaXRlbSlcbi8vICAgICAgICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5leHRcbi8vICAgICAgICAgICB2YXIgY2hpbGRDbXAgPSBpdGVtLmV4dFxuLy8gICAgICAgICAgIHRoaXMuYWRkVGhlQ2hpbGQocGFyZW50Q21wLGNoaWxkQ21wKVxuLy8gICAgICAgICAgIC8vdGhpcy5leHQuYWRkKGl0ZW0uZXh0KVxuLy8gICAgICAgICAgIC8vdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogZWxSZWZJdGVtLm5hdGl2ZUVsZW1lbnR9KVxuLy8gICAgICAgICB9XG4vLyAgICAgICB9XG4vLyAgICAgICByZXR1cm5cbi8vICAgICB9XG5cbi8vICAgICAvLyBpZiAodGhpcy5leHQgIT0gdW5kZWZpbmVkICYmIHRoaXMuaG9zdENvbXBvbmVudCAhPSB1bmRlZmluZWQpIHtcbi8vICAgICAvLyAgIHZhciBwYXJlbnR4dHlwZSA9IHRoaXMuaG9zdENvbXBvbmVudFsnZXh0J10ueHR5cGVcbi8vICAgICAvLyAgIHZhciBjaGlsZHh0eXBlID0gdGhpc1snZXh0J10ueHR5cGVcbi8vICAgICAvLyAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLmhvc3RDb21wb25lbnRbJ2V4dCddXG4vLyAgICAgLy8gICB2YXIgY2hpbGRDbXAgPSB0aGlzWydleHQnXVxuLy8gICAgIC8vICAgY29uc29sZS5sb2coJ3BhcmVudDogJyArIHBhcmVudHh0eXBlICsgJywgY2hpbGQ6ICcgKyBjaGlsZHh0eXBlKVxuLy8gICAgIC8vICAgdGhpcy5ob3N0Q29tcG9uZW50Ll9leHRDaGlsZHJlbiA9IHRydWVcblxuLy8gICAgIC8vICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcpIHtcbi8vICAgICAvLyAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyY29sdW1uJykge1xuLy8gICAgIC8vICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgICAgZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgLy8gICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuLy8gICAgIC8vICAgICAgICAgLy92YXIgaiA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGg7XG4vLyAgICAgLy8gICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbi8vICAgICAvLyAgICAgICB9XG4vLyAgICAgLy8gICAgICAgZWxzZSB7XG4vLyAgICAgLy8gICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbi8vICAgICAvLyAgICAgICB9XG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgICAgZWxzZSB7XG4vLyAgICAgLy8gICAgICAgY29uc29sZS5sb2coJz8/Jylcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbHRpcCcpIHtcbi8vICAgICAvLyAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4vLyAgICAgLy8gICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICdwbHVnaW4nKSB7XG4vLyAgICAgLy8gICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4vLyAgICAgLy8gICB9IGVsc2UgaWYgKHBhcmVudHh0eXBlID09PSAnYnV0dG9uJykge1xuLy8gICAgIC8vICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ21lbnUnKSB7XG4vLyAgICAgLy8gICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4vLyAgICAgLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgLy8gICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4vLyAgICAgLy8gICAgIH1cbi8vICAgICAvLyAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT09IHRydWUpIHtcbi8vICAgICAvLyAgICAgcGFyZW50Q21wLmFkZERvY2tlZEl0ZW1zKGNoaWxkQ21wKVxuLy8gICAgIC8vICAgfSBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbi8vICAgICAvLyAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuLy8gICAgIC8vICAgICAgIC8vdmFyIGo6IGFueSA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGhcbi8vICAgICAvLyAgICAgICAvL3BhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuLy8gICAgIC8vICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApXG4vLyAgICAgLy8gICAgIH0gZWxzZSB7XG4vLyAgICAgLy8gICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbi8vICAgICAvLyAgICAgfVxuLy8gICAgIC8vICAgfSBlbHNlIGlmIChwYXJlbnRDbXAuYWRkICE9IHVuZGVmaW5lZCkge1xuLy8gICAgIC8vICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuLy8gICAgIC8vICAgfSBlbHNlIHtcbi8vICAgICAvLyAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4vLyAgICAgLy8gICB9XG4vLyAgICAgLy8gfVxuLy8gICAgIC8vIGVsc2UgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQgIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgLy8gICBjb25zb2xlLmxvZyh0aGlzLl9uYXRpdmVFbGVtZW50KVxuLy8gICAgIC8vICAgLy90aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiB0aGlzLl9uYXRpdmVFbGVtZW50fSlcbi8vICAgICAvLyB9XG4vLyAgICAgLy8gZWxzZSB7XG4vLyAgICAgLy8gICBjb25zb2xlLmxvZygnY29tcG9uZW50Jylcbi8vICAgICAvLyAgIC8vY29uc29sZS5sb2coZWxSZWZJdGVtKVxuLy8gICAgIC8vICAgLy90aGlzLmV4dC5hZGQoe3h0eXBlOiAnY29udGFpbmVyJyxodG1sOiB0aGlzLl9uYXRpdmVFbGVtZW50fSlcbi8vICAgICAvLyB9XG4vLyAgICAgLy90aGlzWydyZWFkeSddLmVtaXQocGFyZW50Q21wKVxuLy8gICAgIC8vdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG5cbiAgfVxuXG4gIGFkZFRoZUNoaWxkKHBhcmVudENtcCwgY2hpbGRDbXApIHtcbiAgICB2YXIgcGFyZW50eHR5cGUgPSBwYXJlbnRDbXAueHR5cGVcbiAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlXG5cbiAgICBpZiAodGhpcy5leHQuaW5pdGlhbENvbmZpZy5hbGlnbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwYXJlbnR4dHlwZSAhPSAndGl0bGViYXInKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ0NhbiBvbmx5IHVzZSBhbGlnbiBwcm9wZXJ0eSBpZiBwYXJlbnQgaXMgYSBUaXRsZWJhcicpXG4gICAgICB9XG4gICAgfVxuXG4vLyAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnc2VhcmNoZmllbGQnKSB7XG4vLyAgICAgICAgaWYgKHRoaXMuZXh0LmluaXRpYWxDb25maWcuYWxpZ24gIT0gdW5kZWZpbmVkKSB7XG4vLyAgICAgICAgfVxuLy8gICAgICB9XG5cbiAgICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnKSB7XG4gICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicpIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIC8vdmFyIGogPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCc/PycpXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdtZW51Jykge1xuICAgICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIH0gZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvL3ZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgICAgLy9wYXJlbnRDbXAuaW5zZXJ0KGogLSAxLCBjaGlsZENtcClcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZHJlbignaXRlbScpIGl0ZW1zOiBRdWVyeUxpc3Q8YW55PlxuICBAQ29udGVudENoaWxkcmVuKCdpdGVtJywgeyByZWFkOiBFbGVtZW50UmVmIH0pIGl0ZW1zMjogUXVlcnlMaXN0PEVsZW1lbnRSZWY+XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0T3JpZygpIHtcbiAgICAvL2NvbnNvbGUubG9nKCdcXG5iYXNlQWZ0ZXJDb250ZW50SW5pdCcpXG5cbiAgICBpZiAodGhpcy5pdGVtcy5sZW5ndGggPCAyKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCcxIGl0ZW0nKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2codGhpcy5pdGVtcy5sZW5ndGggKyAnIGl0ZW1zJylcblxuICAgIHZhciBhbnlJdGVtczogYW55W10gPSBbXVxuICAgIHZhciBlbFJlZkl0ZW1zOiBhbnlbXSA9IFtdXG4gICAgdGhpcy5pdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgYW55SXRlbXMucHVzaChpdGVtKVxuICAgIH0pXG4gICAgdGhpcy5pdGVtczIuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgIGVsUmVmSXRlbXMucHVzaChpdGVtKVxuICAgIH0pXG5cbiAgICBmb3IgKHZhciBpIGluIGFueUl0ZW1zKSB7XG4gICAgICB2YXIgaXRlbSA9IGFueUl0ZW1zW2ldXG4gICAgICB2YXIgZWxSZWZJdGVtID0gZWxSZWZJdGVtc1tpXVxuICAgICAgaWYgKGl0ZW0gIT0gdGhpcykge1xuICAgICAgICBpZiAoaXRlbS5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50OiAnICsgdGhpcy5leHQueHR5cGUgKyAnLCBjaGlsZDogJyArIGl0ZW0uZXh0Lnh0eXBlKVxuICAgICAgICAgIHZhciBwYXJlbnR4dHlwZSA9IHRoaXNbJ2V4dCddLnh0eXBlXG4gICAgICAgICAgdmFyIGNoaWxkeHR5cGUgPSBpdGVtWydleHQnXS54dHlwZVxuICAgICAgICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzWydleHQnXVxuICAgICAgICAgIHZhciBjaGlsZENtcCA9IGl0ZW1bJ2V4dCddXG5cbiAgICAgICAgICBpZiAocGFyZW50eHR5cGUgPT09ICdncmlkJyB8fCBwYXJlbnR4dHlwZSA9PT0gJ2xvY2tlZGdyaWQnKSB7XG4gICAgICAgICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RyZWVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0Y29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnY2hlY2tjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdkYXRlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAncm93bnVtYmVyZXInIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJjb2x1bW4nKSB7XG4gICAgICAgICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIC8vdmFyIGogPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoO1xuICAgICAgICAgICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBcbiAgICAgICAgICBlbHNlIGlmKHBhcmVudHh0eXBlID09PSAnY29sdW1uJykge1xuICAgICAgICAgICAgICBpZihjaGlsZHh0eXBlID09PSAnc2VsZWN0ZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICd0ZXh0ZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdudW1iZXJmaWVsZCcgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRhcmVhZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdoaWRkZW5maWVsZCcgfHwgY2hpbGR4dHlwZSA9PT0gJ3JhZGlvZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdmaWxlZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2JveGZpZWxkJyB8fCBjaGlsZHh0eXBlID09PSAndG9nZ2xlZmllbGQnIHx8IGNoaWxkeHR5cGUgPT09ICdmaWVsZHNldCcpIHtcbiAgICAgICAgICAgICAgICBwYXJlbnRDbXAuc2V0RWRpdG9yKGl0ZW0uZXh0LmluaXRpYWxDb25maWcpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmIChjaGlsZHh0eXBlID09PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRUb29sdGlwKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgICAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICAgICAgfSBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgLy92YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAgICAgICAvL3BhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygnY2hpbGQgbm90IGFkZGVkJylcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoaXRlbS5uYXRpdmVFbGVtZW50ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ25hdGl2ZScpXG4gICAgICAgICAgdGhpcy5leHQuYWRkKHt4dHlwZTogJ2NvbnRhaW5lcicsaHRtbDogaXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdjb21wb25lbnQnKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coZWxSZWZJdGVtKVxuICAgICAgICAgIHRoaXMuZXh0LmFkZCh7eHR5cGU6ICdjb250YWluZXInLGh0bWw6IGVsUmVmSXRlbS5uYXRpdmVFbGVtZW50fSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy8gZWxzZSB7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKCdzYW1lIGl0ZW0nKVxuICAgICAgLy8gfVxuICAgIH1cbiAgICAvL3RoaXNbJ3JlYWR5J10uZW1pdChwYXJlbnRDbXApXG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICBsZXQgY2hhbmdlc01zZ3M6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgdmVyYiA9ICcnXG4gICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT0gdHJ1ZSkge1xuICAgICAgICB2ZXJiID0gJ2luaXRpYWxpemVkJ1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIHZlcmIgPSAnY2hhbmdlZCdcbiAgICAgIH1cbiAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWVcbiAgICAgIGlmICh0aGlzLmV4dCAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgdmFyIGNhcFByb3BOYW1lID0gcHJvcE5hbWUuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyBwcm9wTmFtZS5zbGljZSgxKVxuICAgICAgICB2YXIgc2V0RnVuY3Rpb24gPSAnc2V0JyArIGNhcFByb3BOYW1lXG4vLyAgICAgICAgY29uc29sZS5sb2codGhpcylcbi8vICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV4dC54dHlwZSlcbi8vICAgICAgICBjb25zb2xlLmxvZyhwcm9wTmFtZSlcbi8vICAgICAgICBjb25zb2xlLmxvZyhzZXRGdW5jdGlvbilcbi8vICAgICAgICBjb25zb2xlLmxvZyh0aGlzLmV4dFtzZXRGdW5jdGlvbl0pXG5cbiAgICAgICAgaWYgKHRoaXMuZXh0W3NldEZ1bmN0aW9uXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmV4dFtzZXRGdW5jdGlvbl0odmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc2V0RnVuY3Rpb24gKyAnIG5vdCBmb3VuZCBmb3IgJyArIHRoaXMuZXh0Lnh0eXBlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gIH1cblxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nRG9DaGVjaygpIHtjb25zb2xlLmxvZyhgRG9DaGVja2ApfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJDb250ZW50Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyQ29udGVudENoZWNrZWRgKSB9XG4gIC8vbmdBZnRlclZpZXdJbml0KCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3SW5pdGApIH1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyVmlld0NoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdDaGVja2VkYCkgfVxuXG59Il19