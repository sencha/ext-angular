import * as tslib_1 from "tslib";
import { EventEmitter, ContentChild, ContentChildren, ViewChildren } from '@angular/core';
var Ext = window['Ext'];
var EngBase = /** @class */ (function () {
    function EngBase(eRef, hostComponent, properties, events, eventnames, vc) {
        this.node = eRef.nativeElement;
        this.parentNode = hostComponent;
        this.properties = properties;
        //this.events = events;
        this.eventnames = eventnames;
        this.vc = vc;
        var me = this;
        this.eventnames.forEach(function (eventname) {
            //console.log(eventname)
            //(<any>this)[eventname] = new EventEmitter()
            me[eventname] = new EventEmitter();
        });
        this.A = {};
        this.A.props = {};
        this.base = EngBase;
    }
    Object.defineProperty(EngBase.prototype, "childComponents", {
        get: function () {
            var _this = this;
            if (this._childComponents == undefined) {
                return [];
            }
            return this._childComponents.filter(function (item) { return item !== _this; });
        },
        enumerable: true,
        configurable: true
    });
    EngBase.prototype.baseOnInit = function () {
        //console.log('baseOnInit')
        this.node.newDiv = document.createElement('ext-' + this.xtype);
        for (var i = 0; i < this.properties.length; i++) {
            var property = this.properties[i];
            if (this[property] !== undefined) {
                if (property != 'fullscreen' && property != 'xtype') {
                    if (typeof this[property] == 'function') {
                        this.node.newDiv.attributeObjects[property] = this[property];
                        this.node.newDiv.setAttribute(property, 'function');
                    }
                    else if (typeof this[property] == 'object') {
                        var sPropVal = '';
                        try {
                            sPropVal = JSON.stringify(this[property]);
                            this.node.newDiv.setAttribute(property, sPropVal);
                        }
                        catch (e) {
                            this.node.newDiv.attributeObjects[property] = this[property];
                            this.node.newDiv.setAttribute(property, 'object');
                        }
                    }
                    else {
                        this.node.newDiv.setAttribute(property, this[property]);
                    }
                }
            }
        }
        var me = this;
        this.eventnames.forEach(function (eventname) {
            me.node.newDiv.addEventListener(eventname, function (event) {
                //me[eventname].emit(event.detail);
                if (me[eventname] != false) {
                    me[eventname].emit(event.detail);
                }
            });
        });
        if (this.node.parentNode.nodeName.substring(0, 3) !== 'EXT') {
            //console.log('parent not ext')
            //this.node.parentNode.appendChild(this.newDiv);
            this.node.after(this.node.newDiv);
            //EngBase.rootNode = this.newDiv
        }
        else {
            //console.log('parent is ext')
            //console.dir(this)
            //console.dir(EngBase.rootNode)
            //this.parentNode.newDiv.appendChild(this.newDiv);
            //this.node.parentNode.nextSibling.appendChild(this.newDiv);
            this.node.parentNode.newDiv.appendChild(this.node.newDiv);
            //EngBase.rootNode.appendChild(this.newDiv);
        }
        // console.log(this.vc)
        // console.log(this.vc._data.renderElement)
        // console.log(this.vc._data.renderElement.parentNode)
        // if (this.vc._data.renderElement.parentNode != null) {
        //     console.log('removing')
        //     this.vc._data.renderElement.parentNode.removeChild(this.vc._data.renderElement)
        // }
        //this.node.insertAdjacentElement('beforebegin', this.newDiv);
    };
    EngBase.prototype.baseAfterViewInit = function () {
        var me = this;
        if (this.node.innerHTML.length > 0) {
            if (this.node.innerHTML.charAt(0) != '<') {
                console.warn('use a div arount text');
                // console.log(this.node.newDiv.A.ext)
                // console.dir(this.node.childNodes)
                // console.dir(this.node.childNodes.item(0))
                // //var el = this.node.childNodes.item(0);
                // //console.log(el)
                // var w = Ext.create({xtype:'widget', element: this.node.childNodes.item(0)});
                // this.node.newDiv.A.ext.add(w)
            }
            else if (this.node.innerHTML.substring(0, 4) != '<ext' &&
                this.node.innerHTML.substring(0, 4) != '<!--') {
                var el = Ext.get(this.node.childNodes.item(0));
                var w = Ext.create({ xtype: 'widget', element: el });
                this.node.newDiv.A.ext.add(w);
            }
        }
        this._extitems.toArray().forEach(function (item) {
            //console.log(item.nativeElement)
            //var el = Ext.get(item.nativeElement);
            me.node.newDiv.appendChild(Ext.get(item.nativeElement).dom);
        });
        // //console.log(this.xtype)
        // //console.log(this.childComponents)
        // //console.log(this._viewchildComponents)
        // //console.log(this._extitems)
        // if (this._extitems != undefined) {
        //     if (this._extitems.length == 1) {
        //         // var router = document.createElement('router-outlet');
        //         // router.setAttribute('id', 'route');
        //         // this.newDiv.appendChild(router);
        //         var el = Ext.get(this._extitem.nativeElement);
        //         console.dir(this)
        //         console.dir(el)
        //         console.log(this.newDiv)
        //         //var widget = document.createElement('ext-' + 'widget');
        //         //widget['element'] = el;
        //         //widget.setAttribute('element', el);
        //         //var widget = document.createElement('ext-' + 'panel');
        //         //widget.setAttribute('title', 'hi');
        //         this.newDiv.appendChild(el.dom);
        //         //this.node.after(el)
        //         //console.dir(el)
        //         //var w = Ext.create({xtype:'widget', element: el});
        //         //this.addTheChild(A.ext, w, null);
        //     }
        // }
    };
    // newCreateProps(properties) {
    //     //console.log('store prop')
    //     //console.log(this.store)
    //     let listenersProvided = false;
    //     var o = {};
    //     o['xtype'] = this.xtype;
    //     if (this['config'] !== {}) {
    //         Ext.apply(o, this['config']);
    //     }
    //     if (true === this['fitToParent']) {
    //         o['height']='100%'
    //     }
    //     for (var i = 0; i < properties.length; i++) {
    //         var property = properties[i]
    //         //if (this.getAttribute(property) !== null) {
    //         if (this[property] !== null) {
    //             if (property == 'handler') {
    //                 o[property] = this[property];
    //             }
    //             // else if ((o['xtype'] === 'cartesian' || o['xtype'] === 'polar') && property === 'layout') {
    //             // }
    //             else if (property == 'listeners' && this[property] != undefined) {
    //                 o[property] = this[property];
    //                 listenersProvided = true;
    //             }
    //             else if (this[property] != undefined &&
    //                 property != 'listeners' &&
    //                 property != 'config' &&
    //                 property != 'handler' &&
    //                 property != 'fitToParent') {
    //                 //props[property] = property[prop];
    //                 //console.log('here??')
    //                 //console.log(property)
    //                 //o[property] = filterProp(this.getAttribute(property), property, this);
    //                 o[property] = this[property]
    //             }
    //             // else {
    //             //     o[property] = filterProp(this.getAttribute(property));
    //             // }
    //         }
    //         // if (!listenersProvided) {
    //         //     o.listeners = {};
    //         //     var me = this;
    //         //     this.events.forEach(function (event, index, array) {
    //         //         me.setEvent(event,o,me)
    //         //     })
    //         // }
    //     }
    //     this.A.o = o;
    //     //console.log(o)
    // }
    EngBase.prototype.baseOnChanges = function (changes) {
        for (var propName in changes) {
            var val = changes[propName].currentValue;
            if (this.node.newDiv != undefined) {
                var propertyVal = '';
                if (typeof val == 'string') {
                    propertyVal = val;
                }
                else {
                    propertyVal = JSON.stringify(val);
                }
                this.node.newDiv.setAttribute(propName, propertyVal);
            }
        }
    };
    EngBase.prototype.baseOnDestroy = function () {
        try {
            if (this.node.parentNode != undefined) {
                if (this.node.parentNode.newDiv != undefined) {
                    this.node.parentNode.newDiv.removeChild(this.node.newDiv);
                }
            }
        }
        catch (e) {
            console.log(e.toString());
        }
    };
    tslib_1.__decorate([
        ContentChild('extitem', { static: false })
    ], EngBase.prototype, "_extitem", void 0);
    tslib_1.__decorate([
        ContentChildren('extitem')
    ], EngBase.prototype, "_extitems", void 0);
    tslib_1.__decorate([
        ContentChildren(EngBase)
    ], EngBase.prototype, "_childComponents", void 0);
    tslib_1.__decorate([
        ViewChildren(EngBase)
    ], EngBase.prototype, "_viewchildComponents", void 0);
    return EngBase;
}());
export { EngBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9hbmd1bGFyYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN6QixJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFMUI7SUE4QkksaUJBQ0ksSUFBUyxFQUNULGFBQWtCLEVBQ2xCLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLEVBQUc7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ3ZDLHdCQUF3QjtZQUN4Qiw2Q0FBNkM7WUFDN0MsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBOUJELHNCQUFJLG9DQUFlO2FBQW5CO1lBQUEsaUJBR0M7WUFGRyxJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFB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SUFDTCxDQUFDO0lBRUQsK0JBQWEsR0FBYjtRQUNFLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtRQUNELE9BQU0sQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUMxQjtJQUNILENBQUM7SUF4UDJDO1FBQTNDLFlBQVksQ0FBQyxTQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7NkNBQWU7SUFDOUI7UUFBM0IsZUFBZSxDQUFDLFNBQVMsQ0FBQzs4Q0FBMkI7SUFDNUI7UUFBekIsZUFBZSxDQUFDLE9BQU8sQ0FBQztxREFBc0M7SUFDeEM7UUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQzt5REFBMEM7SUFzUHBFLGNBQUM7Q0FBQSxBQTlRRCxJQThRQztTQTlRWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXNcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmNvbnN0IEV4dCA9IHdpbmRvd1snRXh0J107XG5cbmV4cG9ydCBjbGFzcyBFbmdCYXNlIHtcbiAgICAvL3N0YXRpYyByb290Tm9kZTogYW55ID0gbnVsbDtcbiAgICBwdWJsaWMgZXh0OiBhbnlcbiAgICBuZXdEaXY6IGFueVxuICAgIHh0eXBlOiBhbnlcbiAgICBwcm9wZXJ0aWVzOiBhbnlcbiAgICAvL2V2ZW50czogYW55XG4gICAgQTogYW55O1xuICAgIG5vZGU6IGFueVxuICAgIHBhcmVudE5vZGU6IGFueVxuICAgIGJhc2U6IGFueVxuICAgIG5vZGVOYW1lOiBhbnlcbiAgICBld2NDaGlsZHJlbjogYW55XG4gICAgcmF3Q2hpbGRyZW46IGFueVxuICAgIGhhc1BhcmVudDogYW55XG4gICAgcGFyZW50VHlwZTogYW55XG4gICAgY2hpbGRyZW46IGFueVxuICAgIGxhc3Q6IGFueVxuICAgIHB1YmxpYyB2YzogYW55O1xuICAgIGV2ZW50bmFtZXM6IGFueTtcblxuICAgIEBDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkcmVuKEVuZ0Jhc2UpIF9jaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBAVmlld0NoaWxkcmVuKEVuZ0Jhc2UpIF92aWV3Y2hpbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW5nQmFzZT47XG4gICAgZ2V0IGNoaWxkQ29tcG9uZW50cygpOiBFbmdCYXNlW10ge1xuICAgICAgICBpZiAodGhpcy5fY2hpbGRDb21wb25lbnRzID09IHVuZGVmaW5lZCkgeyByZXR1cm4gW119XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZENvbXBvbmVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBlUmVmOiBhbnksXG4gICAgICAgIGhvc3RDb21wb25lbnQ6IGFueSxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgZXZlbnRzLFxuICAgICAgICBldmVudG5hbWVzLFxuICAgICAgICB2Yz9cbiAgICApIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBob3N0Q29tcG9uZW50O1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgICAgICAvL3RoaXMuZXZlbnRzID0gZXZlbnRzO1xuICAgICAgICB0aGlzLmV2ZW50bmFtZXMgPSBldmVudG5hbWVzO1xuICAgICAgICB0aGlzLnZjID0gdmM7XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50bmFtZSkge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudG5hbWUpXG4gICAgICAgICAgICAvLyg8YW55PnRoaXMpW2V2ZW50bmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKClcbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLkEgPSB7fTtcbiAgICAgICAgdGhpcy5BLnByb3BzID0ge31cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcbiAgICB9XG5cbiAgICBiYXNlT25Jbml0KCkge1xuICAgICAgLy9jb25zb2xlLmxvZygnYmFzZU9uSW5pdCcpXG4gICAgICB0aGlzLm5vZGUubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZXh0LScgKyB0aGlzLnh0eXBlKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgIGlmICh0aGlzW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSAhPSAnZnVsbHNjcmVlbicgJiYgcHJvcGVydHkgIT0gJ3h0eXBlJykge1xuICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuYXR0cmlidXRlT2JqZWN0c1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgJ2Z1bmN0aW9uJyk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNQcm9wVmFsID0gJydcbiAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICBzUHJvcFZhbCA9IEpTT04uc3RyaW5naWZ5KHRoaXNbcHJvcGVydHldKVxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCBzUHJvcFZhbCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2F0Y2goZSkge1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuYXR0cmlidXRlT2JqZWN0c1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgJ29iamVjdCcpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRuYW1lKSB7XG4gICAgICAgICAgbWUubm9kZS5uZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICAvL21lW2V2ZW50bmFtZV0uZW1pdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICBpZiAobWVbZXZlbnRuYW1lXSAhPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lLnN1YnN0cmluZygwLCAzKSAhPT0gJ0VYVCcpIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQgbm90IGV4dCcpXG4gICAgICAgICAgLy90aGlzLm5vZGUucGFyZW50Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgdGhpcy5ub2RlLmFmdGVyKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgICAgIC8vRW5nQmFzZS5yb290Tm9kZSA9IHRoaXMubmV3RGl2XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICAvL2NvbnNvbGUubG9nKCdwYXJlbnQgaXMgZXh0JylcbiAgICAgICAgICAvL2NvbnNvbGUuZGlyKHRoaXMpXG4gICAgICAgICAgLy9jb25zb2xlLmRpcihFbmdCYXNlLnJvb3ROb2RlKVxuICAgICAgICAgIC8vdGhpcy5wYXJlbnROb2RlLm5ld0Rpdi5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgLy90aGlzLm5vZGUucGFyZW50Tm9kZS5uZXh0U2libGluZy5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2LmFwcGVuZENoaWxkKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgICAgIC8vRW5nQmFzZS5yb290Tm9kZS5hcHBlbmRDaGlsZCh0aGlzLm5ld0Rpdik7XG4gICAgICB9XG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZjKVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50KVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50LnBhcmVudE5vZGUpXG4gICAgICAvLyBpZiAodGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50LnBhcmVudE5vZGUgIT0gbnVsbCkge1xuICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCdyZW1vdmluZycpXG4gICAgICAvLyAgICAgdGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy52Yy5fZGF0YS5yZW5kZXJFbGVtZW50KVxuICAgICAgLy8gfVxuICAgICAgLy90aGlzLm5vZGUuaW5zZXJ0QWRqYWNlbnRFbGVtZW50KCdiZWZvcmViZWdpbicsIHRoaXMubmV3RGl2KTtcbiAgfVxuXG4gICAgYmFzZUFmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG5cbiAgICAgICAgaWYodGhpcy5ub2RlLmlubmVySFRNTC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYodGhpcy5ub2RlLmlubmVySFRNTC5jaGFyQXQoMCkgIT0gJzwnKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ3VzZSBhIGRpdiBhcm91bnQgdGV4dCcpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLm5vZGUubmV3RGl2LkEuZXh0KVxuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5ub2RlLmNoaWxkTm9kZXMpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmRpcih0aGlzLm5vZGUuY2hpbGROb2Rlcy5pdGVtKDApKVxuICAgICAgICAgICAgLy8gLy92YXIgZWwgPSB0aGlzLm5vZGUuY2hpbGROb2Rlcy5pdGVtKDApO1xuICAgICAgICAgICAgLy8gLy9jb25zb2xlLmxvZyhlbClcbiAgICAgICAgICAgIC8vIHZhciB3ID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGVsZW1lbnQ6IHRoaXMubm9kZS5jaGlsZE5vZGVzLml0ZW0oMCl9KTtcbiAgICAgICAgICAgIC8vIHRoaXMubm9kZS5uZXdEaXYuQS5leHQuYWRkKHcpXG4gICAgICAgICAgfVxuICAgICAgICAgIGVsc2UgaWYgKHRoaXMubm9kZS5pbm5lckhUTUwuc3Vic3RyaW5nKDAsIDQpICE9ICc8ZXh0JyAmJlxuICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwuc3Vic3RyaW5nKDAsIDQpICE9ICc8IS0tJ1xuICAgICAgICAgICkge1xuICAgICAgICAgICAgdmFyIGVsID0gRXh0LmdldCh0aGlzLm5vZGUuY2hpbGROb2Rlcy5pdGVtKDApKTtcbiAgICAgICAgICAgIHZhciB3ID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGVsZW1lbnQ6IGVsfSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LkEuZXh0LmFkZCh3KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2V4dGl0ZW1zLnRvQXJyYXkoKS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbS5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLy92YXIgZWwgPSBFeHQuZ2V0KGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBtZS5ub2RlLm5ld0Rpdi5hcHBlbmRDaGlsZChFeHQuZ2V0KGl0ZW0ubmF0aXZlRWxlbWVudCkuZG9tKTtcbiAgICAgICAgfSlcblxuXG5cblxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMueHR5cGUpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jaGlsZENvbXBvbmVudHMpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5fdmlld2NoaWxkQ29tcG9uZW50cylcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLl9leHRpdGVtcylcblxuICAgICAgICAvLyBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fZXh0aXRlbXMubGVuZ3RoID09IDEpIHtcblxuXG4gICAgICAgIC8vICAgICAgICAgLy8gdmFyIHJvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3JvdXRlci1vdXRsZXQnKTtcbiAgICAgICAgLy8gICAgICAgICAvLyByb3V0ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdyb3V0ZScpO1xuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMubmV3RGl2LmFwcGVuZENoaWxkKHJvdXRlcik7XG5cbiAgICAgICAgLy8gICAgICAgICB2YXIgZWwgPSBFeHQuZ2V0KHRoaXMuX2V4dGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5kaXIodGhpcylcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmRpcihlbClcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld0RpdilcbiAgICAgICAgLy8gICAgICAgICAvL3ZhciB3aWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArICd3aWRnZXQnKTtcbiAgICAgICAgLy8gICAgICAgICAvL3dpZGdldFsnZWxlbWVudCddID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgLy93aWRnZXQuc2V0QXR0cmlidXRlKCdlbGVtZW50JywgZWwpO1xuICAgICAgICAvLyAgICAgICAgIC8vdmFyIHdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2V4dC0nICsgJ3BhbmVsJyk7XG4gICAgICAgIC8vICAgICAgICAgLy93aWRnZXQuc2V0QXR0cmlidXRlKCd0aXRsZScsICdoaScpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubmV3RGl2LmFwcGVuZENoaWxkKGVsLmRvbSk7XG4gICAgICAgIC8vICAgICAgICAgLy90aGlzLm5vZGUuYWZ0ZXIoZWwpXG5cbiAgICAgICAgLy8gICAgICAgICAvL2NvbnNvbGUuZGlyKGVsKVxuICAgICAgICAvLyAgICAgICAgIC8vdmFyIHcgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZWxlbWVudDogZWx9KTtcbiAgICAgICAgLy8gICAgICAgICAvL3RoaXMuYWRkVGhlQ2hpbGQoQS5leHQsIHcsIG51bGwpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICB9XG5cbiAgICAvLyBuZXdDcmVhdGVQcm9wcyhwcm9wZXJ0aWVzKSB7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coJ3N0b3JlIHByb3AnKVxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RvcmUpXG4gICAgLy8gICAgIGxldCBsaXN0ZW5lcnNQcm92aWRlZCA9IGZhbHNlO1xuICAgIC8vICAgICB2YXIgbyA9IHt9O1xuICAgIC8vICAgICBvWyd4dHlwZSddID0gdGhpcy54dHlwZTtcblxuICAgIC8vICAgICBpZiAodGhpc1snY29uZmlnJ10gIT09IHt9KSB7XG4gICAgLy8gICAgICAgICBFeHQuYXBwbHkobywgdGhpc1snY29uZmlnJ10pO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgaWYgKHRydWUgPT09IHRoaXNbJ2ZpdFRvUGFyZW50J10pIHtcbiAgICAvLyAgICAgICAgIG9bJ2hlaWdodCddPScxMDAlJ1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXVxuICAgIC8vICAgICAgICAgLy9pZiAodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpICE9PSBudWxsKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpc1twcm9wZXJ0eV0gIT09IG51bGwpIHtcblxuICAgIC8vICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PSAnaGFuZGxlcicpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICAvLyBlbHNlIGlmICgob1sneHR5cGUnXSA9PT0gJ2NhcnRlc2lhbicgfHwgb1sneHR5cGUnXSA9PT0gJ3BvbGFyJykgJiYgcHJvcGVydHkgPT09ICdsYXlvdXQnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09ICdsaXN0ZW5lcnMnICYmIHRoaXNbcHJvcGVydHldICE9IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBvW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgIC8vICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNQcm92aWRlZCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXNbcHJvcGVydHldICE9IHVuZGVmaW5lZCAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnbGlzdGVuZXJzJyAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnY29uZmlnJyAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnaGFuZGxlcicgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2ZpdFRvUGFyZW50Jykge1xuICAgIC8vICAgICAgICAgICAgICAgICAvL3Byb3BzW3Byb3BlcnR5XSA9IHByb3BlcnR5W3Byb3BdO1xuICAgIC8vICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlPz8nKVxuICAgIC8vICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BlcnR5KVxuICAgIC8vICAgICAgICAgICAgICAgICAvL29bcHJvcGVydHldID0gZmlsdGVyUHJvcCh0aGlzLmdldEF0dHJpYnV0ZShwcm9wZXJ0eSksIHByb3BlcnR5LCB0aGlzKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIC8vICAgICBvW3Byb3BlcnR5XSA9IGZpbHRlclByb3AodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpKTtcbiAgICAvLyAgICAgICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIC8vIGlmICghbGlzdGVuZXJzUHJvdmlkZWQpIHtcbiAgICAvLyAgICAgICAgIC8vICAgICBvLmxpc3RlbmVycyA9IHt9O1xuICAgIC8vICAgICAgICAgLy8gICAgIHZhciBtZSA9IHRoaXM7XG4gICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGluZGV4LCBhcnJheSkge1xuICAgIC8vICAgICAgICAgLy8gICAgICAgICBtZS5zZXRFdmVudChldmVudCxvLG1lKVxuICAgIC8vICAgICAgICAgLy8gICAgIH0pXG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5BLm8gPSBvO1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG8pXG4gICAgLy8gfVxuXG4gICAgYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5ld0RpdiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFyIHByb3BlcnR5VmFsID0gJyc7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWwgPSB2YWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BOYW1lLCBwcm9wZXJ0eVZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYXNlT25EZXN0cm95KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSlcbiAgICAgIH1cbiAgICB9XG59XG5cblxuIl19