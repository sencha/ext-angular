import * as tslib_1 from "tslib";
import { EventEmitter, ContentChild, ContentChildren, QueryList } from '@angular/core';
export class base {
    constructor(nativeElement, metaData, hostComponent) {
        this.metaData = metaData;
        this.hostComponent = hostComponent;
        this._extChildren = false;
        this.q = null;
        this._nativeElement = nativeElement;
        this._hostComponent = hostComponent;
        metaData.EVENTNAMES.forEach((event, n) => {
            if (event != 'fullscreen') {
                this[event] = new EventEmitter();
            }
            else {
                this[event + 'event'] = new EventEmitter();
            }
        });
    }
    baseOnInit(metaData) {
        //console.log(`ngOnInit: ${metaData.XTYPE}`)
        let me = this;
        let o = {};
        o.xtype = metaData.XTYPE;
        let listenersProvided = false;
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
                let eventname = event.name;
                let eventparameters = event.parameters;
                o.listeners[eventname] = function () {
                    let parameters = eventparameters;
                    let parms = parameters.split(',');
                    let args = Array.prototype.slice.call(arguments);
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
        if (o.xtype == 'dialog') {
            o.renderTo = undefined;
        }
        Ext.onReady(function () {
            me.ext = Ext.create(o);
        });
    }
    baseAfterContentInit() {
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
    }
    addTheChild(parentCmp, childCmp) {
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
    }
    ngOnChanges(changes) {
        //console.log(`ngOnChanges`)
        //console.log(changes)
        let changesMsgs = [];
        for (let propName in changes) {
            let verb = '';
            if (changes[propName].firstChange === true) {
                verb = 'initialized';
            }
            else {
                verb = 'changed';
            }
            let val = changes[propName].currentValue;
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
            changesMsgs.push(`${propName} ${verb} to "${val}"`);
        }
        //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
    }
    ngOnDestroy() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmFzZS5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BzZW5jaGEvZXh0LWFuZ3VsYXItZ3JpZC8iLCJzb3VyY2VzIjpbInNyYy9iYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxPQUFPLEVBS0wsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBRWYsU0FBUyxFQUVWLE1BQU0sZUFBZSxDQUFBO0FBRXRCLE1BQU0sT0FBTyxJQUFJO0lBT2YsWUFDRSxhQUFrQixFQUNWLFFBQWEsRUFDZCxhQUFvQjtRQURuQixhQUFRLEdBQVIsUUFBUSxDQUFLO1FBQ2Qsa0JBQWEsR0FBYixhQUFhLENBQU87UUFOckIsaUJBQVksR0FBUSxLQUFLLENBQUE7UUFRL0IsSUFBSSxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7UUFDYixJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtRQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQTtRQUVuQyxRQUFRLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBRSxDQUFDLEtBQVUsRUFBRSxDQUFNLEVBQUUsRUFBRTtZQUNsRCxJQUFJLEtBQUssSUFBSSxZQUFZLEVBQUU7Z0JBQ25CLElBQUssQ0FBQyxLQUFLLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO2FBQ3hDO2lCQUNJO2dCQUNHLElBQUssQ0FBQyxLQUFLLEdBQUcsT0FBTyxDQUFDLEdBQUcsSUFBSSxZQUFZLEVBQUUsQ0FBQTthQUNsRDtRQUNILENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELFVBQVUsQ0FBQyxRQUFhO1FBQ3RCLDRDQUE0QztRQUM1QyxJQUFJLEVBQUUsR0FBUSxJQUFJLENBQUE7UUFDbEIsSUFBSSxDQUFDLEdBQVEsRUFBRSxDQUFBO1FBQ2YsQ0FBQyxDQUFDLEtBQUssR0FBRyxRQUFRLENBQUMsS0FBSyxDQUFBO1FBQ3hCLElBQUksaUJBQWlCLEdBQUcsS0FBSyxDQUFBO1FBQzdCLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FB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biAgSG9zdCxcbiAgT3B0aW9uYWwsXG4gIFNraXBTZWxmLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIENvbnRlbnRDaGlsZCxcbiAgQ29udGVudENoaWxkcmVuLFxuICBWaWV3Q2hpbGRyZW4sXG4gIFF1ZXJ5TGlzdCxcbiAgU2ltcGxlQ2hhbmdlc1xufSBmcm9tICdAYW5ndWxhci9jb3JlJ1xuXG5leHBvcnQgY2xhc3MgYmFzZSB7XG4gIHB1YmxpYyBleHQ6IGFueVxuICBwcml2YXRlIF9uYXRpdmVFbGVtZW50OiBhbnlcbiAgcHJpdmF0ZSBfaG9zdENvbXBvbmVudDogYW55XG4gIHByaXZhdGUgX2V4dENoaWxkcmVuOiBhbnkgPSBmYWxzZVxuICBwcml2YXRlIHE6IFF1ZXJ5TGlzdDxhbnk+XG5cbiAgY29uc3RydWN0b3IoXG4gICAgbmF0aXZlRWxlbWVudDogYW55LFxuICAgIHByaXZhdGUgbWV0YURhdGE6IGFueSxcbiAgICBwdWJsaWMgaG9zdENvbXBvbmVudCA6IGJhc2VcbiAgKSB7XG4gICAgdGhpcy5xID0gbnVsbFxuICAgIHRoaXMuX25hdGl2ZUVsZW1lbnQgPSBuYXRpdmVFbGVtZW50XG4gICAgdGhpcy5faG9zdENvbXBvbmVudCA9IGhvc3RDb21wb25lbnRcblxuICAgIG1ldGFEYXRhLkVWRU5UTkFNRVMuZm9yRWFjaCggKGV2ZW50OiBhbnksIG46IGFueSkgPT4ge1xuICAgICAgaWYgKGV2ZW50ICE9ICdmdWxsc2NyZWVuJykge1xuICAgICAgICAoPGFueT50aGlzKVtldmVudF0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAoPGFueT50aGlzKVtldmVudCArICdldmVudCddID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICB9XG4gICAgfSlcbiAgfVxuXG4gIGJhc2VPbkluaXQobWV0YURhdGE6IGFueSkge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25Jbml0OiAke21ldGFEYXRhLlhUWVBFfWApXG4gICAgbGV0IG1lOiBhbnkgPSB0aGlzXG4gICAgbGV0IG86IGFueSA9IHt9XG4gICAgby54dHlwZSA9IG1ldGFEYXRhLlhUWVBFXG4gICAgbGV0IGxpc3RlbmVyc1Byb3ZpZGVkID0gZmFsc2VcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IG1lLm1ldGFEYXRhLlBST1BFUlRJRVMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwcm9wID0gbWUubWV0YURhdGEuUFJPUEVSVElFU1tpXTtcbiAgICAgIGlmIChwcm9wID09ICdoYW5kbGVyJykge1xuICAgICAgICBpZiAobWVbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgb1twcm9wXSA9IG1lW3Byb3BdXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIC8vbmVlZCB0byBoYW5kbGUgbGlzdGVuZXJzIGNvbWluZyBpbiBoZXJlXG4gICAgICBpZiAoKG8ueHR5cGUgPT09ICdjYXJ0ZXNpYW4nIHx8IG8ueHR5cGUgPT09ICdwb2xhcicpICYmIHByb3AgPT09ICdsYXlvdXQnKSB7XG4gICAgICB9XG4gICAgICBlbHNlIGlmKHByb3AgPT0gJ2xpc3RlbmVycycgJiYgbWVbcHJvcF0gIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIG9bcHJvcF0gPSBtZVtwcm9wXTtcbiAgICAgICAgbGlzdGVuZXJzUHJvdmlkZWQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgIGlmIChtZVtwcm9wXSAhPSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgIHByb3AgIT0gJ2xpc3RlbmVycycgJiZcbiAgICAgICAgICAgIHByb3AgIT0gJ2NvbmZpZycgJiZcbiAgICAgICAgICAgIHByb3AgIT0gJ2hhbmRsZXInICYmXG4gICAgICAgICAgICBwcm9wICE9ICdmaXRUb1BhcmVudCcpIHtcbiAgICAgICAgICBvW3Byb3BdID0gbWVbcHJvcF07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBpZiAodHJ1ZSA9PT0gbWUuZml0VG9QYXJlbnQpIHtcbiAgICAgIG8udG9wPTAsXG4gICAgICBvLmxlZnQ9MCxcbiAgICAgIG8ud2lkdGg9JzEwMCUnLFxuICAgICAgby5oZWlnaHQ9JzEwMCUnXG4gICAgfVxuICAgIGlmIChtZS5jb25maWcgIT09IHt9ICkge1xuICAgICAgRXh0LmFwcGx5KG8sIG1lLmNvbmZpZyk7XG4gICAgfVxuXG4gICAgaWYoIWxpc3RlbmVyc1Byb3ZpZGVkKSB7XG4gICAgICBvLmxpc3RlbmVycyA9IHt9XG4gICAgICB2YXIgRVZFTlRTID0gbWV0YURhdGEuRVZFTlRTXG4gICAgICBFVkVOVFMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQ6IGFueSwgaW5kZXg6IGFueSwgYXJyYXk6IGFueSkge1xuICAgICAgICBsZXQgZXZlbnRuYW1lOiBhbnkgPSBldmVudC5uYW1lXG4gICAgICAgIGxldCBldmVudHBhcmFtZXRlcnM6IGFueSA9IGV2ZW50LnBhcmFtZXRlcnNcbiAgICAgICAgby5saXN0ZW5lcnNbZXZlbnRuYW1lXSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIGxldCBwYXJhbWV0ZXJzOiBhbnkgPSBldmVudHBhcmFtZXRlcnNcbiAgICAgICAgICBsZXQgcGFybXMgPSBwYXJhbWV0ZXJzLnNwbGl0KCcsJylcbiAgICAgICAgICBsZXQgYXJncyA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cylcbiAgICAgICAgICBsZXQgZW1pdHBhcm1zOiBhbnkgPSB7fVxuICAgICAgICAgIGZvciAobGV0IGkgPSAwLCBqID0gcGFybXMubGVuZ3RoOyBpIDwgajsgaSsrICkge1xuICAgICAgICAgICAgZW1pdHBhcm1zW3Bhcm1zW2ldXSA9IGFyZ3NbaV07XG4gICAgICAgICAgfVxuICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChlbWl0cGFybXMpXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuXG4gICAgaWYgKHRoaXMuX25hdGl2ZUVsZW1lbnQucGFyZW50RWxlbWVudCAhPSBudWxsKSB7XG4gICAgICBvLnJlbmRlclRvID0gdGhpcy5fbmF0aXZlRWxlbWVudFxuICAgIH1cblxuICAgIGlmIChvLnh0eXBlID09ICdkaWFsb2cnKSB7XG4gICAgICBvLnJlbmRlclRvID0gdW5kZWZpbmVkO1xuICAgIH1cblxuICAgIEV4dC5vblJlYWR5KGZ1bmN0aW9uKCkge1xuICAgICAgICBtZS5leHQgPSBFeHQuY3JlYXRlKG8pXG4gICAgfSk7XG5cbiAgfVxuXG4gIEBDb250ZW50Q2hpbGQoJ2V4dHJvdXRlJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRyb3V0ZTogYW55O1xuICBAQ29udGVudENoaWxkcmVuKCdleHRyb3V0ZScpIF9leHRyb3V0ZXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICBAQ29udGVudENoaWxkKCdleHRpdGVtJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRpdGVtOiBhbnk7XG4gIEBDb250ZW50Q2hpbGRyZW4oJ2V4dGl0ZW0nKSBfZXh0aXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICBiYXNlQWZ0ZXJDb250ZW50SW5pdCgpIHtcbiAgICBpZiAodGhpcy5fZXh0aXRlbXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgaWYgKHRoaXMuX2hvc3RDb21wb25lbnQgIT0gbnVsbCkge1xuICAgICAgICAgIHRoaXMuZXh0LnNldEh0bWwodGhpcy5fZXh0aXRlbS5uYXRpdmVFbGVtZW50KVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmICh0aGlzLl9leHRyb3V0ZXMubGVuZ3RoID09IDEpIHtcbiAgICAgIHRoaXMuZXh0LnNldEh0bWwodGhpcy5fZXh0cm91dGUubmF0aXZlRWxlbWVudClcbiAgICB9XG4gICAgaWYodGhpcy5faG9zdENvbXBvbmVudCAhPSBudWxsKSB7XG4gICAgICB2YXIgcGFyZW50Q21wID0gdGhpcy5faG9zdENvbXBvbmVudC5leHRcbiAgICAgIHZhciBjaGlsZENtcCA9IHRoaXMuZXh0XG4gICAgICB0aGlzLmFkZFRoZUNoaWxkKHBhcmVudENtcCxjaGlsZENtcClcbiAgICB9XG4gICAgdGhpc1sncmVhZHknXS5lbWl0KHRoaXMpXG4gIH1cblxuICBhZGRUaGVDaGlsZChwYXJlbnRDbXAsIGNoaWxkQ21wKSB7XG4gICAgdmFyIHBhcmVudHh0eXBlID0gcGFyZW50Q21wLnh0eXBlXG4gICAgdmFyIGNoaWxkeHR5cGUgPSBjaGlsZENtcC54dHlwZVxuXG4gICAgaWYgKHRoaXMuZXh0LmluaXRpYWxDb25maWcuYWxpZ24gIT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocGFyZW50eHR5cGUgIT0gJ3RpdGxlYmFyJyAmJiBwYXJlbnR4dHlwZSAhPSAnZ3JpZCcgJiYgcGFyZW50eHR5cGUgIT0gJ2J1dHRvbicpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignQ2FuIG9ubHkgdXNlIGFsaWduIHByb3BlcnR5IGlmIHBhcmVudCBpcyBhIFRpdGxlYmFyIG9yIEdyaWQgb3IgQnV0dG9uJylcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwYXJlbnR4dHlwZSA9PT0gJ2dyaWQnIHx8IHBhcmVudHh0eXBlID09PSAnbG9ja2VkZ3JpZCcpIHtcbiAgICAgIGlmIChjaGlsZHh0eXBlID09PSAnY29sdW1uJyB8fCBjaGlsZHh0eXBlID09PSAndHJlZWNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RleHRjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdjaGVja2NvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2RhdGVjb2x1bW4nIHx8IGNoaWxkeHR5cGUgPT09ICdyb3dudW1iZXJlcicgfHwgY2hpbGR4dHlwZSA9PT0gJ251bWJlcmNvbHVtbicgfHwgY2hpbGR4dHlwZSA9PT0gJ2Jvb2xlYW5jb2x1bW4nICkge1xuICAgICAgICBwYXJlbnRDbXAuYWRkQ29sdW1uKGNoaWxkQ21wKVxuICAgICAgICByZXR1cm5cbiAgICAgIH1cbiAgICAgIGVsc2UgaWYgKChjaGlsZHh0eXBlID09PSAndG9vbGJhcicgfHwgY2hpbGR4dHlwZSA9PT0gJ3RpdGxlYmFyJykgJiYgcGFyZW50Q21wLmdldEhpZGVIZWFkZXJzICE9IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAocGFyZW50Q21wLmdldEhpZGVIZWFkZXJzKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgLy92YXIgaiA9IHBhcmVudENtcC5pdGVtcy5pdGVtcy5sZW5ndGg7XG4gICAgICAgICAgcGFyZW50Q21wLmluc2VydCgxLCBjaGlsZENtcCk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcGFyZW50Q21wLmFkZChjaGlsZENtcCk7XG4gICAgICAgICAgcmV0dXJuXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICBjb25zb2xlLmxvZygndW5oYW5kbGVkIGVsc2UgaW4gYWRkVGhlQ2hpbGQnKVxuICAgICAgICBjb25zb2xlLmxvZyhwYXJlbnR4dHlwZSlcbiAgICAgICAgY29uc29sZS5sb2coY2hpbGR4dHlwZSlcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGNoaWxkeHR5cGUgPT09ICd0b29sdGlwJykge1xuICAgICAgcGFyZW50Q21wLnNldFRvb2x0aXAoY2hpbGRDbXApXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgaWYgKGNoaWxkeHR5cGUgPT09ICdwbHVnaW4nKSB7XG4gICAgICBwYXJlbnRDbXAuc2V0UGx1Z2luKGNoaWxkQ21wKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGVsc2UgaWYgKFxuICAgICAgcGFyZW50eHR5cGUgPT09ICdidXR0b24nIHx8XG4gICAgICBwYXJlbnR4dHlwZSA9PT0gJ21lbnVpdGVtJyB8fFxuICAgICAgcGFyZW50eHR5cGUgPT09ICdtZW51Y2hlY2tpdGVtJ1xuICAgICAgKSB7XG4gICAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ21lbnUnKSB7XG4gICAgICAgIHBhcmVudENtcC5zZXRNZW51KGNoaWxkQ21wKVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInICYmIEV4dC5pc0NsYXNzaWMgPT09IHRydWUpIHtcbiAgICAgIHBhcmVudENtcC5hZGREb2NrZWRJdGVtcyhjaGlsZENtcClcbiAgICAgIHJldHVyblxuICAgIH1cbiAgICBlbHNlIGlmICgoY2hpbGR4dHlwZSA9PT0gJ3Rvb2xiYXInIHx8IGNoaWxkeHR5cGUgPT09ICd0aXRsZWJhcicpICYmIHBhcmVudENtcC5nZXRIaWRlSGVhZGVycyAhPSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChwYXJlbnRDbXAuZ2V0SGlkZUhlYWRlcnMoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgLy92YXIgajogYW55ID0gcGFyZW50Q21wLml0ZW1zLml0ZW1zLmxlbmd0aFxuICAgICAgICAvL3BhcmVudENtcC5pbnNlcnQoaiAtIDEsIGNoaWxkQ21wKVxuICAgICAgICBwYXJlbnRDbXAuaW5zZXJ0KDEsIGNoaWxkQ21wKVxuICAgICAgICByZXR1cm5cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHBhcmVudENtcC5hZGQoY2hpbGRDbXApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuICAgIH1cbiAgICAgaWYgKHBhcmVudENtcC5hZGQgIT0gdW5kZWZpbmVkKSB7XG4gICAgICBwYXJlbnRDbXAuYWRkKGNoaWxkQ21wKVxuICAgICAgcmV0dXJuXG4gICAgfVxuICAgIGNvbnNvbGUubG9nKCdjaGlsZCBub3QgYWRkZWQnKVxuICB9XG5cbiAgbmdPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgIC8vY29uc29sZS5sb2coYG5nT25DaGFuZ2VzYClcbiAgICAvL2NvbnNvbGUubG9nKGNoYW5nZXMpXG4gICAgbGV0IGNoYW5nZXNNc2dzOiBzdHJpbmdbXSA9IFtdXG4gICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgbGV0IHZlcmIgPSAnJ1xuICAgICAgaWYgKGNoYW5nZXNbcHJvcE5hbWVdLmZpcnN0Q2hhbmdlID09PSB0cnVlKSB7XG4gICAgICAgIHZlcmIgPSAnaW5pdGlhbGl6ZWQnXG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgdmVyYiA9ICdjaGFuZ2VkJ1xuICAgICAgfVxuICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZVxuICAgICAgaWYgKHRoaXMuZXh0ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICB2YXIgY2FwUHJvcE5hbWUgPSBwcm9wTmFtZS5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHByb3BOYW1lLnNsaWNlKDEpXG4gICAgICAgIHZhciBzZXRGdW5jdGlvbiA9ICdzZXQnICsgY2FwUHJvcE5hbWVcbiAgICAgICAgaWYgKHRoaXMuZXh0W3NldEZ1bmN0aW9uXSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICB0aGlzLmV4dFtzZXRGdW5jdGlvbl0odmFsKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3Ioc2V0RnVuY3Rpb24gKyAnIG5vdCBmb3VuZCBmb3IgJyArIHRoaXMuZXh0Lnh0eXBlKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKHZlcmIgPT0gJ2NoYW5nZWQnKSB7XG4gICAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZSBuZWVkZWQgYW5kIGV4dCBub3QgZGVmaW5lZCcpXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNoYW5nZXNNc2dzLnB1c2goYCR7cHJvcE5hbWV9ICR7dmVyYn0gdG8gXCIke3ZhbH1cImApXG4gICAgfVxuICAgIC8vY29uc29sZS5sb2coYE9uQ2hhbmdlczogJHtjaGFuZ2VzTXNncy5qb2luKCc7ICcpfWApXG4gIH1cblxuICBuZ09uRGVzdHJveSgpIHtcbiAgICB2YXIgY2hpbGRDbXBcbiAgICB2YXIgcGFyZW50Q21wXG4gICAgdHJ5IHtcbiAgICAgIGNoaWxkQ21wID0gdGhpcy5leHRcbiAgICAgIGlmICh0aGlzLl9ob3N0Q29tcG9uZW50ICE9IG51bGwpIHtcbiAgICAgICAgcGFyZW50Q21wID0gdGhpcy5faG9zdENvbXBvbmVudC5leHRcbiAgICAgICAgaWYocGFyZW50Q21wLnh0eXBlID09ICdidXR0b24nICYmIGNoaWxkQ21wLnh0eXBlID09ICdtZW51Jykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2J1dHRvbi9tZW51IG5vdCBkZWxldGVkJylcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChwYXJlbnRDbXAueHR5cGUgPT0gJ2Nhcm91c2VsJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2Nhcm91c2VsIHBhcmVudCBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICdncmlkJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnY29sdW1uJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ2dyaWQvY29sdW1uIG5vdCBkZWxldGVkJylcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKGNoaWxkQ21wKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnc2VnbWVudGVkYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAnYnV0dG9uJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3NlZ21lbnRlZGJ1dHRvbi9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAnYnV0dG9uJyAmJiBjaGlsZENtcC54dHlwZSA9PSAndG9vbHRpcCcpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdidXR0b24vdG9vbHRpcCBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAocGFyZW50Q21wLnh0eXBlID09ICd0aXRsZWJhcicgJiYgY2hpbGRDbXAueHR5cGUgPT0gJ2J1dHRvbicpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9idXR0b24gbm90IGRlbGV0ZWQnKVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHBhcmVudENtcC54dHlwZSA9PSAndGl0bGViYXInICYmIGNoaWxkQ21wLnh0eXBlID09ICdzZWFyY2hmaWVsZCcpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCd0aXRsZWJhci9zZWFyY2hmaWVsZCBub3QgZGVsZXRlZCcpXG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgcGFyZW50Q21wLnJlbW92ZShbY2hpbGRDbXBdKVxuICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgaWYgKGNoaWxkQ21wICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGNoaWxkQ21wLmRlc3Ryb3koKVxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nKCdubyBkZXN0cm95JylcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICBjYXRjaChlKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGUpXG4gICAgICBjb25zb2xlLmxvZygnKioqKionKVxuICAgICAgY29uc29sZS5sb2cocGFyZW50Q21wKVxuICAgICAgY29uc29sZS5sb2coY2hpbGRDbXApXG4gICAgICBjb25zb2xlLmxvZygnKioqKionKVxuICAgIH1cbiAgfVxuXG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdEb0NoZWNrKCkge2NvbnNvbGUubG9nKGBEb0NoZWNrYCl9XG4gIC8vIEJld2FyZSEgQ2FsbGVkIGZyZXF1ZW50bHkhXG4gIC8vIENhbGxlZCBpbiBldmVyeSBjaGFuZ2UgZGV0ZWN0aW9uIGN5Y2xlIGFueXdoZXJlIG9uIHRoZSBwYWdlXG4gIC8vbmdBZnRlckNvbnRlbnRDaGVja2VkKCkgeyBjb25zb2xlLmxvZyhgQWZ0ZXJDb250ZW50Q2hlY2tlZGApIH1cbiAgLy9uZ0FmdGVyVmlld0luaXQoKSB7IGNvbnNvbGUubG9nKGBBZnRlclZpZXdJbml0YCkgfVxuICAvLyBCZXdhcmUhIENhbGxlZCBmcmVxdWVudGx5IVxuICAvLyBDYWxsZWQgaW4gZXZlcnkgY2hhbmdlIGRldGVjdGlvbiBjeWNsZSBhbnl3aGVyZSBvbiB0aGUgcGFnZVxuICAvL25nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHsgY29uc29sZS5sb2coYEFmdGVyVmlld0NoZWNrZWRgKSB9XG5cblxuLy8gICAgbWV0YURhdGEuRVZFTlRTLmZvckVhY2goIChldmVudDogYW55LCBuOiBhbnkpID0+IHtcbi8vICAgICAgaWYgKGV2ZW50Lm5hbWUgIT0gJ2Z1bGxzY3JlZW4nKSB7XG4vLyAgICAgICAgKDxhbnk+dGhpcylbZXZlbnQubmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbi8vICAgICAgfVxuLy8gICAgICBlbHNlIHtcbi8vICAgICAgICAoPGFueT50aGlzKVtldmVudC5uYW1lICsgJ2V2ZW50J10gPSBuZXcgRXZlbnRFbWl0dGVyKClcbi8vICAgICAgfVxuLy8gICAgfSlcblxuLy8gICAgbGV0IGYgPSB0aGlzLm5nT25EZXN0cm95O1xuLy8gICAgdGhpcy5uZ09uRGVzdHJveSA9ICgpID0+IHtcbi8vICAgICAgZigpO1xuLy8gICAgICB0aGlzLnVuc3Vic2NyaWJlQWxsKCk7XG4vLyAgICB9O1xuXG4gIC8vcHJpdmF0ZSBzdWJzY3JpcHRpb25zOiBTdWJzY3JpcHRpb25bXSA9IFtdO1xuXG4vLyAgICBwcm90ZWN0ZWQgc2FmZVN1YnNjcmlwdGlvbiAoc3ViOiBTdWJzY3JpcHRpb24pOiBTdWJzY3JpcHRpb24ge1xuLy8gICAgICAgIHRoaXMuc3Vic2NyaXB0aW9ucy5wdXNoKHN1Yik7XG4vLyAgICAgICAgcmV0dXJuIHN1Yjtcbi8vICAgIH1cblxuLy8gICAgcHJpdmF0ZSB1bnN1YnNjcmliZUFsbCgpIHtcbi8vICAgICAgICB0aGlzLnN1YnNjcmlwdGlvbnMuZm9yRWFjaChlbGVtZW50ID0+IHtcbi8vICAgICAgICAgICAgIWVsZW1lbnQuaXNVbnN1YnNjcmliZWQgJiYgZWxlbWVudC51bnN1YnNjcmliZSgpO1xuLy8gICAgICAgIH0pO1xuLy8gICAgfVxuXG59Il19