import * as tslib_1 from "tslib";
import { EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
var base = /** @class */ (function () {
    function base(nativeElement, metaData, hostComponent) {
        var _this = this;
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this._extChildren = false;
        this.q = null;
        this._nativeElement = nativeElement;
        this._hostComponent = hostComponent;
        metaData.EVENTNAMES.forEach(function (event, n) {
            if (event != 'fullscreen') {
                _this[event] = new EventEmitter();
            }
            else {
                _this[event + 'event'] = new EventEmitter();
            }
        });
    }
    base.prototype.baseOnInit = function (metaData) {
        //console.log(`ngOnInit: ${metaData.XTYPE}`)
        var me = this;
        var o = {};
        o.xtype = metaData.XTYPE;
        var listenersProvided = false;
        for (var i = 0; i < me.metaData.PROPERTIES.length; i++) {
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
                listenersProvided = true;
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
        if (!listenersProvided) {
            o.listeners = {};
            var EVENTS = metaData.EVENTS;
            EVENTS.forEach(function (event, index, array) {
                var eventname = event.name;
                var eventparameters = event.parameters;
                o.listeners[eventname] = function () {
                    var parameters = eventparameters;
                    var parms = parameters.split(',');
                    var args = Array.prototype.slice.call(arguments);
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
        if (o.xtype == 'dialog') {
            o.renderTo = undefined;
        }
        this.ext = Ext.create(o);
    };
    base.prototype.baseAfterContentInit = function () {
        if (this._extitems.length == 1) {
            if (this._hostComponent != null) {
                this.ext.setHtml(this._extitem.nativeElement);
            }
        }
        if (this._extroutes.length == 1) {
            this.ext.setHtml(this._extroute.nativeElement);
        }
        if (this._hostComponent != null) {
            var parentCmp = this._hostComponent.ext;
            var childCmp = this.ext;
            this.addTheChild(parentCmp, childCmp);
        }
        this['ready'].emit(this);
    };
    base.prototype.addTheChild = function (parentCmp, childCmp) {
        var parentxtype = parentCmp.xtype;
        var childxtype = childCmp.xtype;
        if (this.ext.initialConfig.align != undefined) {
            if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'button') {
                console.error('Can only use align property if parent is a Titlebar or Grid or Button');
                return;
            }
        }
        if (parentxtype === 'grid' || parentxtype === 'lockedgrid') {
            if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn' || childxtype === 'booleancolumn') {
                parentCmp.addColumn(childCmp);
                return;
            }
            else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
                if (parentCmp.getHideHeaders() === false) {
                    //var j = parentCmp.items.items.length;
                    parentCmp.insert(1, childCmp);
                    return;
                }
                else {
                    parentCmp.add(childCmp);
                    return;
                }
            }
            else {
                console.log('unhandled else in addTheChild');
                console.log(parentxtype);
                console.log(childxtype);
            }
        }
        if (childxtype === 'tooltip') {
            parentCmp.setTooltip(childCmp);
            return;
        }
        if (childxtype === 'plugin') {
            parentCmp.setPlugin(childCmp);
            return;
        }
        else if (parentxtype === 'button' ||
            parentxtype === 'menuitem' ||
            parentxtype === 'menucheckitem') {
            if (childxtype === 'menu') {
                parentCmp.setMenu(childCmp);
                return;
            }
            else {
                console.log('child not added');
            }
        }
        if (childxtype === 'toolbar' && Ext.isClassic === true) {
            parentCmp.addDockedItems(childCmp);
            return;
        }
        else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
            if (parentCmp.getHideHeaders() === false) {
                //var j: any = parentCmp.items.items.length
                //parentCmp.insert(j - 1, childCmp)
                parentCmp.insert(1, childCmp);
                return;
            }
            else {
                parentCmp.add(childCmp);
                return;
            }
        }
        if (parentCmp.add != undefined) {
            parentCmp.add(childCmp);
            return;
        }
        console.log('child not added');
    };
    base.prototype.ngOnChanges = function (changes) {
        //console.log(`ngOnChanges`)
        //console.log(changes)
        var changesMsgs = [];
        for (var propName in changes) {
            var verb = '';
            if (changes[propName].firstChange === true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            var val = changes[propName].currentValue;
            if (this.ext != undefined) {
                var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1);
                var setFunction = 'set' + capPropName;
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
    base.prototype.ngOnDestroy = function () {
        var childCmp;
        var parentCmp;
        try {
            childCmp = this.ext;
            if (this._hostComponent != null) {
                parentCmp = this._hostComponent.ext;
                if (parentCmp.xtype == 'button' && childCmp.xtype == 'menu') {
                    //console.log('button/menu not deleted')
                }
                else if (parentCmp.xtype == 'carousel') {
                    //console.log('carousel parent not deleted')
                }
                else if (parentCmp.xtype == 'grid' && childCmp.xtype == 'column') {
                    //console.log('grid/column not deleted')
                    //console.log(childCmp)
                }
                else if (parentCmp.xtype == 'segmentedbutton' && childCmp.xtype == 'button') {
                    //console.log('segmentedbutton/button not deleted')
                }
                else if (parentCmp.xtype == 'button' && childCmp.xtype == 'tooltip') {
                    //console.log('button/tooltip not deleted')
                }
                else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'button') {
                    //console.log('titlebar/button not deleted')
                }
                else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'searchfield') {
                    //console.log('titlebar/searchfield not deleted')
                }
                else {
                    parentCmp.remove([childCmp]);
                    childCmp.destroy();
                }
            }
            else {
                if (childCmp != undefined) {
                    childCmp.destroy();
                }
                else {
                    console.log('no destroy');
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
    tslib_1.__decorate([
        ContentChild('extroute', { static: false }),
        tslib_1.__metadata("design:type", Object)
    ], base.prototype, "_extroute", void 0);
    tslib_1.__decorate([
        ContentChildren('extroute'),
        tslib_1.__metadata("design:type", QueryList)
    ], base.prototype, "_extroutes", void 0);
    tslib_1.__decorate([
        ContentChild('extitem', { static: false }),
        tslib_1.__metadata("design:type", Object)
    ], base.prototype, "_extitem", void 0);
    tslib_1.__decorate([
        ContentChildren('extitem'),
        tslib_1.__metadata("design:type", QueryList)
    ], base.prototype, "_extitems", void 0);
    return base;
}());
export { base };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJsaWIvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUtMLFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUVmLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQTtBQUV0QjtJQU9FLGNBQ0UsYUFBa0IsRUFDVixRQUFhLEVBQ2QsYUFBb0I7UUFIN0IsaUJBaUJDO1FBZlMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFPO1FBTnJCLGlCQUFZLEdBQVEsS0FBSyxDQUFBO1FBUS9CLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFFbkMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVLEVBQUUsQ0FBTTtZQUM5QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQ3hDO2lCQUNJO2dCQUNHLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUNsRDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxRQUFhO1FBQ3RCLDRDQUE0QztRQUM1QyxJQUFJLEVBQUUsR0FBUSxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLEdBQVEsRUFBRSxDQUFBO1FBQ2YsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBO1FBQ3hCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFBO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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c3QsXG4gIE9wdGlvbmFsLFxuICBTa2lwU2VsZixcbiAgRWxlbWVudFJlZixcbiAgRXZlbnRFbWl0dGVyLFxuICBDb250ZW50Q2hpbGQsXG4gIENvbnRlbnRDaGlsZHJlbixcbiAgVmlld0NoaWxkcmVuLFxuICBRdWVyeUxpc3QsXG4gIFNpbXBsZUNoYW5nZXNcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSdcblxuZXhwb3J0IGNsYXNzIGJhc2Uge1xuICBwdWJsaWMgZXh0OiBhbnlcbiAgcHJpdmF0ZSBfbmF0aXZlRWxlbWVudDogYW55XG4gIHByaXZhdGUgX2hvc3RDb21wb25lbnQ6IGFueVxuICBwcml2YXRlIF9leHRDaGlsZHJlbjogYW55ID0gZmFsc2VcbiAgcHJpdmF0ZSBxOiBRdWVyeUxpc3Q8YW55PlxuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG5hdGl2ZUVsZW1lbnQ6IGFueSxcbiAgICBwcml2YXRlIG1ldGFEYXRhOiBhbnksXG4gICAgcHVibGljIGhvc3RDb21wb25lbnQgOiBiYXNlXG4gICkge1xuICAgIHRoaXMucSA9IG51bGxcbiAgICB0aGlzLl9uYXRpdmVFbGVtZW50ID0gbmF0aXZlRWxlbWVudFxuICAgIHRoaXMuX2hvc3RDb21wb25lbnQgPSBob3N0Q29tcG9uZW50XG5cbiAgICBtZXRhRGF0YS5FVkVOVE5BTUVTLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbiAgICAgIGlmIChldmVudCAhPSAnZnVsbHNjcmVlbicpIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnRdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgfVxuICAgIH0pXG4gIH1cblxuICBiYXNlT25Jbml0KG1ldGFEYXRhOiBhbnkpIHtcbiAgICAvL2NvbnNvbGUubG9nKGBuZ09uSW5pdDogJHttZXRhRGF0YS5YVFlQRX1gKVxuICAgIGxldCBtZTogYW55ID0gdGhpc1xuICAgIGxldCBvOiBhbnkgPSB7fVxuICAgIG8ueHR5cGUgPSBtZXRhRGF0YS5YVFlQRVxuICAgIGxldCBsaXN0ZW5lcnNQcm92aWRlZCA9IGZhbHNlXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTLmxlbmd0aDsgaSsrKSB7IFxuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgby54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocHJvcCA9PSAnbGlzdGVuZXJzJyAmJiBtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdO1xuICAgICAgICBsaXN0ZW5lcnNQcm92aWRlZCA9IHRydWU7XG4gICAgICB9IFxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQgJiYgXG4gICAgICAgICAgICBwcm9wICE9ICdsaXN0ZW5lcnMnICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnY29uZmlnJyAmJiBcbiAgICAgICAgICAgIHByb3AgIT0gJ2hhbmRsZXInICYmIFxuICAgICAgICAgICAgcHJvcCAhPSAnZml0VG9QYXJlbnQnKSB7IFxuICAgICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTsgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJ1ZSA9PT0gbWUuZml0VG9QYXJlbnQpIHtcbiAgICAgIG8udG9wPTAsIFxuICAgICAgby5sZWZ0PTAsIFxuICAgICAgby53aWR0aD0nMTAwJScsIFxuICAgICAgby5oZWlnaHQ9JzEwMCUnXG4gICAgfVxuICAgIGlmIChtZS5jb25maWcgIT09IHt9ICkge1xuICAgICAgRXh0LmFwcGx5KG8sIG1lLmNvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYoIWxpc3RlbmVyc1Byb3ZpZGVkKSB7XG4gICAgICBvLmxpc3RlbmVycyA9IHt9XG4gICAgICB2YXIgRVZFTlRTID0gbWV0YURhdGEuRVZFTlRTXG4gICAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgICBsZXQgZXZlbnRuYW1lOiBhbnkgPSBldmVudC5uYW1lXG4gICAgICAgIGxldCBldmVudHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50LnBhcmFtZXRlcnNcbiAgICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBwYXJhbWV0ZXJzOiBhbnkgPSBldmVudHBhcmFtZXRlcnNcbiAgICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJylcbiAgICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICBsZXQgZW1pdHBhcm1zOiBhbnkgPSB7fVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrICkge1xuICAgICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBvLnJlbmRlclRvID0gdGhpcy5fbmF0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGlmIChvLnh0eXBlID09ICdkaWFsb2cnKSB7XG4gICAgICBvLnJlbmRlclRvID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIHRoaXMuZXh0ID0gRXh0LmNyZWF0ZShvKVxuICB9XG5cbiAgQENvbnRlbnRDaGlsZCgnZXh0cm91dGUnLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dHJvdXRlOiBhbnk7XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2V4dHJvdXRlJykgX2V4dHJvdXRlczogUXVlcnlMaXN0PGFueT47XG4gIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgQENvbnRlbnRDaGlsZHJlbignZXh0aXRlbScpIF9leHRpdGVtczogUXVlcnlMaXN0PGFueT47XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBpZiAodGhpcy5faG9zdENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5leHQuc2V0SHRtbCh0aGlzLl9leHRpdGVtLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4dHJvdXRlcy5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5leHQuc2V0SHRtbCh0aGlzLl9leHRyb3V0ZS5uYXRpdmVFbGVtZW50KVxuICAgIH1cbiAgICBpZih0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLl9ob3N0Q29tcG9uZW50LmV4dFxuICAgICAgdmFyIGNoaWxkQ21wID0gdGhpcy5leHRcbiAgICAgIHRoaXMuYWRkVGhlQ2hpbGQocGFyZW50Q21wLGNoaWxkQ21wKVxuICAgIH1cbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuXG4gIGFkZFRoZUNoaWxkKHBhcmVudENtcCwgY2hpbGRDbXApIHtcbiAgICB2YXIgcGFyZW50eHR5cGUgPSBwYXJlbnRDbXAueHR5cGVcbiAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlXG5cbiAgICBpZiAodGhpcy5leHQuaW5pdGlhbENvbmZpZy5hbGlnbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwYXJlbnR4dHlwZSAhPSAndGl0bGViYXInICYmIHBhcmVudHh0eXBlICE9ICdncmlkJyAmJiBwYXJlbnR4dHlwZSAhPSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYW4gb25seSB1c2UgYWxpZ24gcHJvcGVydHkgaWYgcGFyZW50IGlzIGEgVGl0bGViYXIgb3IgR3JpZCBvciBCdXR0b24nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcgfHwgcGFyZW50eHR5cGUgPT09ICdsb2NrZWRncmlkJykge1xuICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnYm9vbGVhbmNvbHVtbicgKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvL3ZhciBqID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmhhbmRsZWQgZWxzZSBpbiBhZGRUaGVDaGlsZCcpXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmVudHh0eXBlKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZHh0eXBlKVxuICAgICAgfVxuICAgIH0gXG4gICAgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sdGlwJykge1xuICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICByZXR1cm5cbiAgICB9IFxuICAgIGlmIChjaGlsZHh0eXBlID09PSAncGx1Z2luJykge1xuICAgICAgcGFyZW50Q21wLnNldFBsdWdpbihjaGlsZENtcClcbiAgICAgIHJldHVyblxuICAgIH0gXG4gICAgZWxzZSBpZiAoXG4gICAgICBwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicgfHwgXG4gICAgICBwYXJlbnR4dHlwZSA9PT0gJ21lbnVpdGVtJyB8fFxuICAgICAgcGFyZW50eHR5cGUgPT09ICdtZW51Y2hlY2tpdGVtJ1xuICAgICAgKSB7XG4gICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ21lbnUnKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICAgIH0gXG4gICAgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyAmJiBFeHQuaXNDbGFzc2ljID09PSB0cnVlKSB7XG4gICAgICBwYXJlbnRDbXAuYWRkRG9ja2VkSXRlbXMoY2hpbGRDbXApXG4gICAgICByZXR1cm5cbiAgICB9IFxuICAgIGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAvL3ZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgIC8vcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4gICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfSBcbiAgICAgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICAvL2NvbnNvbGUubG9nKGNoYW5nZXMpXG4gICAgbGV0IGNoYW5nZXNNc2dzOiBzdHJpbmdbXSA9IFtdXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgbGV0IHZlcmIgPSAnJ1xuICAgICAgaWYgKGNoYW5nZXNbcHJvcE5hbWVdLmZpcnN0Q2hhbmdlID09PSB0cnVlKSB7XG4gICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJ1xuICAgICAgfVxuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHZhciBzZXRGdW5jdGlvbiA9ICdzZXQnICsgY2FwUHJvcE5hbWVcbiAgICAgICAgaWYgKHRoaXMuZXh0W3NldEZ1bmN0aW9uXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmV4dFtzZXRGdW5jdGlvbl0odmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc2V0RnVuY3Rpb24gKyAnIG5vdCBmb3VuZCBmb3IgJyArIHRoaXMuZXh0Lnh0eXBlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB2YXIgY2hpbGRDbXBcbiAgICB2YXIgcGFyZW50Q21wXG4gICAgdHJ5IHtcbiAgICAgIGNoaWxkQ21wID0gdGhpcy5leHRcbiAgICAgIGlmICh0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Q21wID0gdGhpcy5faG9zdENvbXBvbmVudC5leHRcbiAgICAgICAgaWYocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi9tZW51IG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2Nhcm91c2VsJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Nhcm91c2VsIHBhcmVudCBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdncmlkJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnY29sdW1uJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dyaWQvY29sdW1uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnc2VnbWVudGVkYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NlZ21lbnRlZGJ1dHRvbi9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vdG9vbHRpcCBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAndGl0bGViYXInICYmIGNoaWxkQ21wLnh0eXBlID09ICdzZWFyY2hmaWVsZCcpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9zZWFyY2hmaWVsZCBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcGFyZW50Q21wLnJlbW92ZShbY2hpbGRDbXBdKVxuICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGNoaWxkQ21wICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkZXN0cm95JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICBjb25zb2xlLmxvZygnKioqKionKVxuICAgIH1cbiAgfVxuXG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdEb0NoZWNrKCkge2NvbnNvbGUubG9nKGBEb0NoZWNrYCl9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlckNvbnRlbnRDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJDb250ZW50Q2hlY2tlZGApIH1cbiAgLy9uZ0FmdGVyVmlld0luaXQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdJbml0YCkgfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0NoZWNrZWRgKSB9XG5cblxuLy8gICAgbWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4vLyAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbi8vICAgICAgfVxuLy8gICAgICBlbHNlIHtcbi8vICAgICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbi8vICAgICAgfVxuLy8gICAgfSlcblxuLy8gICAgbGV0IGYgPSB0aGlzLm5nT25EZXN0cm95O1xuLy8gICAgdGhpcy5uZ09uRGVzdHJveSA9ICgpID0+IHtcbi8vICAgICAgZigpO1xuLy8gICAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4vLyAgICB9O1xuXG4gIC8vcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4vLyAgICBwcm90ZWN0ZWQgc2FmZVN1YnNjcmlwdGlvbiAoc3ViOiBTdWJzY3JpcHRpb24pOiBTdWJzY3JpcHRpb24ge1xuLy8gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1Yik7XG4vLyAgICAgICAgcmV0dXJuIHN1Yjtcbi8vICAgIH1cbiBcbi8vICAgIHByaXZhdGUgdW5zdWJzY3JpYmVBbGwoKSB7XG4vLyAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLmZvckVhY2goZWxlbWVudCA9PiB7XG4vLyAgICAgICAgICAgICFlbGVtZW50LmlzVW5zdWJzY3JpYmVkICYmIGVsZW1lbnQudW5zdWJzY3JpYmUoKTtcbi8vICAgICAgICB9KTtcbi8vICAgIH1cblxufSJdfQ==