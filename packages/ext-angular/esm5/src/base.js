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
        //this.ext = Ext.create(o)
        Ext.onReady(function () {
            me.ext = Ext.create(o);
        });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXIvIiwic291cmNlcyI6WyJzcmMvYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQ0EsT0FBTyxFQUtMLFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUVmLFNBQVMsRUFFVixNQUFNLGVBQWUsQ0FBQTtBQUV0QjtJQU9FLGNBQ0UsYUFBa0IsRUFDVixRQUFhLEVBQ2QsYUFBb0I7UUFIN0IsaUJBaUJDO1FBZlMsYUFBUSxHQUFSLFFBQVEsQ0FBSztRQUNkLGtCQUFhLEdBQWIsYUFBYSxDQUFPO1FBTnJCLGlCQUFZLEdBQVEsS0FBSyxDQUFBO1FBUS9CLElBQUksQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFBO1FBQ2IsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUE7UUFFbkMsUUFBUSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUUsVUFBQyxLQUFVLEVBQUUsQ0FBTTtZQUM5QyxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ25CLEtBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQ3hDO2lCQUNJO2dCQUNHLEtBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUNsRDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHlCQUFVLEdBQVYsVUFBVyxRQUFhO1FBQ3RCLDRDQUE0QztRQUM1QyxJQUFJLEVBQUUsR0FBUSxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLEdBQVEsRUFBRSxDQUFBO1FBQ2YsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBO1FBQ3hCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFBO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMs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SSIsInNvdXJjZXNDb250ZW50IjpbImRlY2xhcmUgdmFyIEV4dDogYW55XG5pbXBvcnQge1xuICBIb3N0LFxuICBPcHRpb25hbCxcbiAgU2tpcFNlbGYsXG4gIEVsZW1lbnRSZWYsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ29udGVudENoaWxkLFxuICBDb250ZW50Q2hpbGRyZW4sXG4gIFZpZXdDaGlsZHJlbixcbiAgUXVlcnlMaXN0LFxuICBTaW1wbGVDaGFuZ2VzXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnXG5cbmV4cG9ydCBjbGFzcyBiYXNlIHtcbiAgcHVibGljIGV4dDogYW55XG4gIHByaXZhdGUgX25hdGl2ZUVsZW1lbnQ6IGFueVxuICBwcml2YXRlIF9ob3N0Q29tcG9uZW50OiBhbnlcbiAgcHJpdmF0ZSBfZXh0Q2hpbGRyZW46IGFueSA9IGZhbHNlXG4gIHByaXZhdGUgcTogUXVlcnlMaXN0PGFueT5cblxuICBjb25zdHJ1Y3RvcihcbiAgICBuYXRpdmVFbGVtZW50OiBhbnksXG4gICAgcHJpdmF0ZSBtZXRhRGF0YTogYW55LFxuICAgIHB1YmxpYyBob3N0Q29tcG9uZW50IDogYmFzZVxuICApIHtcbiAgICB0aGlzLnEgPSBudWxsXG4gICAgdGhpcy5fbmF0aXZlRWxlbWVudCA9IG5hdGl2ZUVsZW1lbnRcbiAgICB0aGlzLl9ob3N0Q29tcG9uZW50ID0gaG9zdENvbXBvbmVudFxuXG4gICAgbWV0YURhdGEuRVZFTlROQU1FUy5mb3JFYWNoKCAoZXZlbnQ6IGFueSwgbjogYW55KSA9PiB7XG4gICAgICBpZiAoZXZlbnQgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50XSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICg8YW55PnRoaXMpW2V2ZW50ICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgIH1cbiAgICB9KVxuICB9XG5cbiAgYmFzZU9uSW5pdChtZXRhRGF0YTogYW55KSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkluaXQ6ICR7bWV0YURhdGEuWFRZUEV9YClcbiAgICBsZXQgbWU6IGFueSA9IHRoaXNcbiAgICBsZXQgbzogYW55ID0ge31cbiAgICBvLnh0eXBlID0gbWV0YURhdGEuWFRZUEVcbiAgICBsZXQgbGlzdGVuZXJzUHJvdmlkZWQgPSBmYWxzZVxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbWUubWV0YURhdGEuUFJPUEVSVElFUy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHByb3AgPSBtZS5tZXRhRGF0YS5QUk9QRVJUSUVTW2ldO1xuICAgICAgaWYgKHByb3AgPT0gJ2hhbmRsZXInKSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgLy9uZWVkIHRvIGhhbmRsZSBsaXN0ZW5lcnMgY29taW5nIGluIGhlcmVcbiAgICAgIGlmICgoby54dHlwZSA9PT0gJ2NhcnRlc2lhbicgfHwgby54dHlwZSA9PT0gJ3BvbGFyJykgJiYgcHJvcCA9PT0gJ2xheW91dCcpIHtcbiAgICAgIH1cbiAgICAgIGVsc2UgaWYocHJvcCA9PSAnbGlzdGVuZXJzJyAmJiBtZVtwcm9wXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdO1xuICAgICAgICBsaXN0ZW5lcnNQcm92aWRlZCA9IHRydWU7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKG1lW3Byb3BdICE9IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgcHJvcCAhPSAnbGlzdGVuZXJzJyAmJlxuICAgICAgICAgICAgcHJvcCAhPSAnY29uZmlnJyAmJlxuICAgICAgICAgICAgcHJvcCAhPSAnaGFuZGxlcicgJiZcbiAgICAgICAgICAgIHByb3AgIT0gJ2ZpdFRvUGFyZW50Jykge1xuICAgICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICh0cnVlID09PSBtZS5maXRUb1BhcmVudCkge1xuICAgICAgby50b3A9MCxcbiAgICAgIG8ubGVmdD0wLFxuICAgICAgby53aWR0aD0nMTAwJScsXG4gICAgICBvLmhlaWdodD0nMTAwJSdcbiAgICB9XG4gICAgaWYgKG1lLmNvbmZpZyAhPT0ge30gKSB7XG4gICAgICBFeHQuYXBwbHkobywgbWUuY29uZmlnKTtcbiAgICB9XG5cbiAgICBpZighbGlzdGVuZXJzUHJvdmlkZWQpIHtcbiAgICAgIG8ubGlzdGVuZXJzID0ge31cbiAgICAgIHZhciBFVkVOVFMgPSBtZXRhRGF0YS5FVkVOVFNcbiAgICAgIEVWRU5UUy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudDogYW55LCBpbmRleDogYW55LCBhcnJheTogYW55KSB7XG4gICAgICAgIGxldCBldmVudG5hbWU6IGFueSA9IGV2ZW50Lm5hbWVcbiAgICAgICAgbGV0IGV2ZW50cGFyYW1ldGVyczogYW55ID0gZXZlbnQucGFyYW1ldGVyc1xuICAgICAgICBvLmxpc3RlbmVyc1tldmVudG5hbWVdID0gZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGV0IHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50cGFyYW1ldGVyc1xuICAgICAgICAgIGxldCBwYXJtcyA9IHBhcmFtZXRlcnMuc3BsaXQoJywnKVxuICAgICAgICAgIGxldCBhcmdzID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKVxuICAgICAgICAgIGxldCBlbWl0cGFybXM6IGFueSA9IHt9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDAsIGogPSBwYXJtcy5sZW5ndGg7IGkgPCBqOyBpKysgKSB7XG4gICAgICAgICAgICBlbWl0cGFybXNbcGFybXNbaV1dID0gYXJnc1tpXTtcbiAgICAgICAgICB9XG4gICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGVtaXRwYXJtcylcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG5cbiAgICBpZiAodGhpcy5fbmF0aXZlRWxlbWVudC5wYXJlbnRFbGVtZW50ICE9IG51bGwpIHtcbiAgICAgIG8ucmVuZGVyVG8gPSB0aGlzLl9uYXRpdmVFbGVtZW50XG4gICAgfVxuXG4gICAgaWYgKG8ueHR5cGUgPT0gJ2RpYWxvZycpIHtcbiAgICAgIG8ucmVuZGVyVG8gPSB1bmRlZmluZWQ7XG4gICAgfVxuXG4gICAgLy90aGlzLmV4dCA9IEV4dC5jcmVhdGUobylcbiAgICBFeHQub25SZWFkeShmdW5jdGlvbigpIHtcbiAgICAgICAgbWUuZXh0ID0gRXh0LmNyZWF0ZShvKVxuICAgIH0pO1xuICB9XG5cbiAgQENvbnRlbnRDaGlsZCgnZXh0cm91dGUnLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dHJvdXRlOiBhbnk7XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2V4dHJvdXRlJykgX2V4dHJvdXRlczogUXVlcnlMaXN0PGFueT47XG4gIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgQENvbnRlbnRDaGlsZHJlbignZXh0aXRlbScpIF9leHRpdGVtczogUXVlcnlMaXN0PGFueT47XG4gIGJhc2VBZnRlckNvbnRlbnRJbml0KCkge1xuICAgIGlmICh0aGlzLl9leHRpdGVtcy5sZW5ndGggPT0gMSkge1xuICAgICAgICBpZiAodGhpcy5faG9zdENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICAgICAgdGhpcy5leHQuc2V0SHRtbCh0aGlzLl9leHRpdGVtLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuX2V4dHJvdXRlcy5sZW5ndGggPT0gMSkge1xuICAgICAgdGhpcy5leHQuc2V0SHRtbCh0aGlzLl9leHRyb3V0ZS5uYXRpdmVFbGVtZW50KVxuICAgIH1cbiAgICBpZih0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgIHZhciBwYXJlbnRDbXAgPSB0aGlzLl9ob3N0Q29tcG9uZW50LmV4dFxuICAgICAgdmFyIGNoaWxkQ21wID0gdGhpcy5leHRcbiAgICAgIHRoaXMuYWRkVGhlQ2hpbGQocGFyZW50Q21wLGNoaWxkQ21wKVxuICAgIH1cbiAgICB0aGlzWydyZWFkeSddLmVtaXQodGhpcylcbiAgfVxuXG4gIGFkZFRoZUNoaWxkKHBhcmVudENtcCwgY2hpbGRDbXApIHtcbiAgICB2YXIgcGFyZW50eHR5cGUgPSBwYXJlbnRDbXAueHR5cGVcbiAgICB2YXIgY2hpbGR4dHlwZSA9IGNoaWxkQ21wLnh0eXBlXG5cbiAgICBpZiAodGhpcy5leHQuaW5pdGlhbENvbmZpZy5hbGlnbiAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwYXJlbnR4dHlwZSAhPSAndGl0bGViYXInICYmIHBhcmVudHh0eXBlICE9ICdncmlkJyAmJiBwYXJlbnR4dHlwZSAhPSAnYnV0dG9uJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdDYW4gb25seSB1c2UgYWxpZ24gcHJvcGVydHkgaWYgcGFyZW50IGlzIGEgVGl0bGViYXIgb3IgR3JpZCBvciBCdXR0b24nKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmVudHh0eXBlID09PSAnZ3JpZCcgfHwgcGFyZW50eHR5cGUgPT09ICdsb2NrZWRncmlkJykge1xuICAgICAgaWYgKGNoaWxkeHR5cGUgPT09ICdjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICd0cmVlY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndGV4dGNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2NoZWNrY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnZGF0ZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3Jvd251bWJlcmVyJyB8fCBjaGlsZHh0eXBlID09PSAnbnVtYmVyY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAnYm9vbGVhbmNvbHVtbicgKSB7XG4gICAgICAgIHBhcmVudENtcC5hZGRDb2x1bW4oY2hpbGRDbXApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgICAgZWxzZSBpZiAoKGNoaWxkeHR5cGUgPT09ICd0b29sYmFyJyB8fCBjaGlsZHh0eXBlID09PSAndGl0bGViYXInKSAmJiBwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAvL3ZhciBqID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aDtcbiAgICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKTtcbiAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCd1bmhhbmRsZWQgZWxzZSBpbiBhZGRUaGVDaGlsZCcpXG4gICAgICAgIGNvbnNvbGUubG9nKHBhcmVudHh0eXBlKVxuICAgICAgICBjb25zb2xlLmxvZyhjaGlsZHh0eXBlKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2x0aXAnKSB7XG4gICAgICBwYXJlbnRDbXAuc2V0VG9vbHRpcChjaGlsZENtcClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ3BsdWdpbicpIHtcbiAgICAgIHBhcmVudENtcC5zZXRQbHVnaW4oY2hpbGRDbXApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgZWxzZSBpZiAoXG4gICAgICBwYXJlbnR4dHlwZSA9PT0gJ2J1dHRvbicgfHxcbiAgICAgIHBhcmVudHh0eXBlID09PSAnbWVudWl0ZW0nIHx8XG4gICAgICBwYXJlbnR4dHlwZSA9PT0gJ21lbnVjaGVja2l0ZW0nXG4gICAgICApIHtcbiAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnbWVudScpIHtcbiAgICAgICAgcGFyZW50Q21wLnNldE1lbnUoY2hpbGRDbXApXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgJiYgRXh0LmlzQ2xhc3NpYyA9PT0gdHJ1ZSkge1xuICAgICAgcGFyZW50Q21wLmFkZERvY2tlZEl0ZW1zKGNoaWxkQ21wKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgaWYgKHBhcmVudENtcC5nZXRIaWRlSGVhZGVycygpID09PSBmYWxzZSkge1xuICAgICAgICAvL3ZhciBqOiBhbnkgPSBwYXJlbnRDbXAuaXRlbXMuaXRlbXMubGVuZ3RoXG4gICAgICAgIC8vcGFyZW50Q21wLmluc2VydChqIC0gMSwgY2hpbGRDbXApXG4gICAgICAgIHBhcmVudENtcC5pbnNlcnQoMSwgY2hpbGRDbXApXG4gICAgICAgIHJldHVyblxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgICBpZiAocGFyZW50Q21wLmFkZCAhPSB1bmRlZmluZWQpIHtcbiAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgY29uc29sZS5sb2coJ2NoaWxkIG5vdCBhZGRlZCcpXG4gIH1cblxuICBuZ09uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgLy9jb25zb2xlLmxvZyhgbmdPbkNoYW5nZXNgKVxuICAgIC8vY29uc29sZS5sb2coY2hhbmdlcylcbiAgICBsZXQgY2hhbmdlc01zZ3M6IHN0cmluZ1tdID0gW11cbiAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICBsZXQgdmVyYiA9ICcnXG4gICAgICBpZiAoY2hhbmdlc1twcm9wTmFtZV0uZmlyc3RDaGFuZ2UgPT09IHRydWUpIHtcbiAgICAgICAgdmVyYiA9ICdpbml0aWFsaXplZCdcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICB2ZXJiID0gJ2NoYW5nZWQnXG4gICAgICB9XG4gICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlXG4gICAgICBpZiAodGhpcy5leHQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHZhciBjYXBQcm9wTmFtZSA9IHByb3BOYW1lLmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgcHJvcE5hbWUuc2xpY2UoMSlcbiAgICAgICAgdmFyIHNldEZ1bmN0aW9uID0gJ3NldCcgKyBjYXBQcm9wTmFtZVxuICAgICAgICBpZiAodGhpcy5leHRbc2V0RnVuY3Rpb25dICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHRoaXMuZXh0W3NldEZ1bmN0aW9uXSh2YWwpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5lcnJvcihzZXRGdW5jdGlvbiArICcgbm90IGZvdW5kIGZvciAnICsgdGhpcy5leHQueHR5cGUpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAodmVyYiA9PSAnY2hhbmdlZCcpIHtcbiAgICAgICAgICBjb25zb2xlLmxvZygnY2hhbmdlIG5lZWRlZCBhbmQgZXh0IG5vdCBkZWZpbmVkJylcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2hhbmdlc01zZ3MucHVzaChgJHtwcm9wTmFtZX0gJHt2ZXJifSB0byBcIiR7dmFsfVwiYClcbiAgICB9XG4gICAgLy9jb25zb2xlLmxvZyhgT25DaGFuZ2VzOiAke2NoYW5nZXNNc2dzLmpvaW4oJzsgJyl9YClcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIHZhciBjaGlsZENtcFxuICAgIHZhciBwYXJlbnRDbXBcbiAgICB0cnkge1xuICAgICAgY2hpbGRDbXAgPSB0aGlzLmV4dFxuICAgICAgaWYgKHRoaXMuX2hvc3RDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICBwYXJlbnRDbXAgPSB0aGlzLl9ob3N0Q29tcG9uZW50LmV4dFxuICAgICAgICBpZihwYXJlbnRDbXAueHR5cGUgPT0gJ2J1dHRvbicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ21lbnUnKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnYnV0dG9uL21lbnUgbm90IGRlbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnY2Fyb3VzZWwnKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnY2Fyb3VzZWwgcGFyZW50IG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2dyaWQnICYmIGNoaWxkQ21wLnh0eXBlID09ICdjb2x1bW4nKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnZ3JpZC9jb2x1bW4gbm90IGRlbGV0ZWQnKVxuICAgICAgICAgIC8vY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdzZWdtZW50ZWRidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdidXR0b24nKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygnc2VnbWVudGVkYnV0dG9uL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICd0b29sdGlwJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi90b29sdGlwIG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ3RpdGxlYmFyJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL2J1dHRvbiBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ3NlYXJjaGZpZWxkJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3RpdGxlYmFyL3NlYXJjaGZpZWxkIG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBwYXJlbnRDbXAucmVtb3ZlKFtjaGlsZENtcF0pXG4gICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBpZiAoY2hpbGRDbXAgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgY2hpbGRDbXAuZGVzdHJveSgpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ25vIGRlc3Ryb3knKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGNhdGNoKGUpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgICBjb25zb2xlLmxvZyhwYXJlbnRDbXApXG4gICAgICBjb25zb2xlLmxvZyhjaGlsZENtcClcbiAgICAgIGNvbnNvbGUubG9nKCcqKioqKicpXG4gICAgfVxuICB9XG5cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0RvQ2hlY2soKSB7Y29uc29sZS5sb2coYERvQ2hlY2tgKX1cbiAgLy8gQmV3YXJlISBDYWxsZWQgZnJlcXVlbnRseSFcbiAgLy8gQ2FsbGVkIGluIGV2ZXJ5IGNoYW5nZSBkZXRlY3Rpb24gY3ljbGUgYW55d2hlcmUgb24gdGhlIHBhZ2VcbiAgLy9uZ0FmdGVyQ29udGVudENoZWNrZWQoKSB7IGNvbnNvbGUubG9nKGBBZnRlckNvbnRlbnRDaGVja2VkYCkgfVxuICAvL25nQWZ0ZXJWaWV3SW5pdCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0luaXRgKSB9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlclZpZXdDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJWaWV3Q2hlY2tlZGApIH1cblxuXG4vLyAgICBtZXRhRGF0YS5FVkVOVFMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuLy8gICAgICBpZiAoZXZlbnQubmFtZSAhPSAnZnVsbHNjcmVlbicpIHtcbi8vICAgICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuLy8gICAgICB9XG4vLyAgICAgIGVsc2Uge1xuLy8gICAgICAgICg8YW55PnRoaXMpW2V2ZW50Lm5hbWUgKyAnZXZlbnQnXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuLy8gICAgICB9XG4vLyAgICB9KVxuXG4vLyAgICBsZXQgZiA9IHRoaXMubmdPbkRlc3Ryb3k7XG4vLyAgICB0aGlzLm5nT25EZXN0cm95ID0gKCkgPT4ge1xuLy8gICAgICBmKCk7XG4vLyAgICAgIHRoaXMudW5zdWJzY3JpYmVBbGwoKTtcbi8vICAgIH07XG5cbiAgLy9wcml2YXRlIHN1YnNjcmlwdGlvbnM6IFN1YnNjcmlwdGlvbltdID0gW107XG5cbi8vICAgIHByb3RlY3RlZCBzYWZlU3Vic2NyaXB0aW9uIChzdWI6IFN1YnNjcmlwdGlvbik6IFN1YnNjcmlwdGlvbiB7XG4vLyAgICAgICAgdGhpcy5zdWJzY3JpcHRpb25zLnB1c2goc3ViKTtcbi8vICAgICAgICByZXR1cm4gc3ViO1xuLy8gICAgfVxuXG4vLyAgICBwcml2YXRlIHVuc3Vic2NyaWJlQWxsKCkge1xuLy8gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5mb3JFYWNoKGVsZW1lbnQgPT4ge1xuLy8gICAgICAgICAgICAhZWxlbWVudC5pc1Vuc3Vic2NyaWJlZCAmJiBlbGVtZW50LnVuc3Vic2NyaWJlKCk7XG4vLyAgICAgICAgfSk7XG4vLyAgICB9XG5cbn0iXX0=