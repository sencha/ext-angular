import * as tslib_1 from "tslib";
import { EventEmitter, ContentChild, ContentChildren, ViewChildren } from '@angular/core';
const Ext = window['Ext'];
export class EngBase {
    constructor(eRef, hostComponent, properties, events, eventnames, vc) {
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
    get childComponents() {
        if (this._childComponents == undefined) {
            return [];
        }
        return this._childComponents.filter(item => item !== this);
    }
    baseOnInit() {
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
    }
    baseAfterViewInit() {
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
        this._extitems.toArray().forEach(item => {
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
    }
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
    baseOnChanges(changes) {
        for (let propName in changes) {
            let val = changes[propName].currentValue;
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
    }
    baseOnDestroy() {
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
    }
}
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9hbmd1bGFyYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN6QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFMUIsTUFBTSxPQUFPLE9BQU87SUE4QmhCLFlBQ0ksSUFBUyxFQUNULGFBQWtCLEVBQ2xCLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLEVBQUc7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ3ZDLHdCQUF3QjtZQUN4Qiw2Q0FBNkM7WUFDN0MsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBOUJELElBQUksZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNB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SUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtvQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzRDthQUNGO1NBQ0Y7UUFDRCxPQUFNLENBQUMsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDMUI7SUFDSCxDQUFDO0NBQ0o7QUF6UCtDO0lBQTNDLFlBQVksQ0FBQyxTQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7eUNBQWU7QUFDOUI7SUFBM0IsZUFBZSxDQUFDLFNBQVMsQ0FBQzswQ0FBMkI7QUFDNUI7SUFBekIsZUFBZSxDQUFDLE9BQU8sQ0FBQztpREFBc0M7QUFDeEM7SUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQztxREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEV2ZW50RW1pdHRlcixcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgU2ltcGxlQ2hhbmdlc1xuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgRXh0ID0gd2luZG93WydFeHQnXTtcblxuZXhwb3J0IGNsYXNzIEVuZ0Jhc2Uge1xuICAgIC8vc3RhdGljIHJvb3ROb2RlOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBleHQ6IGFueVxuICAgIG5ld0RpdjogYW55XG4gICAgeHR5cGU6IGFueVxuICAgIHByb3BlcnRpZXM6IGFueVxuICAgIC8vZXZlbnRzOiBhbnlcbiAgICBBOiBhbnk7XG4gICAgbm9kZTogYW55XG4gICAgcGFyZW50Tm9kZTogYW55XG4gICAgYmFzZTogYW55XG4gICAgbm9kZU5hbWU6IGFueVxuICAgIGV3Y0NoaWxkcmVuOiBhbnlcbiAgICByYXdDaGlsZHJlbjogYW55XG4gICAgaGFzUGFyZW50OiBhbnlcbiAgICBwYXJlbnRUeXBlOiBhbnlcbiAgICBjaGlsZHJlbjogYW55XG4gICAgbGFzdDogYW55XG4gICAgcHVibGljIHZjOiBhbnk7XG4gICAgZXZlbnRuYW1lczogYW55O1xuXG4gICAgQENvbnRlbnRDaGlsZCgnZXh0aXRlbScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0aXRlbTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dGl0ZW0nKSBfZXh0aXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRW5nQmFzZSkgX2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIEBWaWV3Q2hpbGRyZW4oRW5nQmFzZSkgX3ZpZXdjaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBnZXQgY2hpbGRDb21wb25lbnRzKCk6IEVuZ0Jhc2VbXSB7XG4gICAgICAgIGlmICh0aGlzLl9jaGlsZENvbXBvbmVudHMgPT0gdW5kZWZpbmVkKSB7IHJldHVybiBbXX1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ29tcG9uZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIGVSZWY6IGFueSxcbiAgICAgICAgaG9zdENvbXBvbmVudDogYW55LFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBldmVudHMsXG4gICAgICAgIGV2ZW50bmFtZXMsXG4gICAgICAgIHZjP1xuICAgICkge1xuICAgICAgICB0aGlzLm5vZGUgPSBlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IGhvc3RDb21wb25lbnQ7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIC8vdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXM7XG4gICAgICAgIHRoaXMudmMgPSB2YztcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRuYW1lKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50bmFtZSlcbiAgICAgICAgICAgIC8vKDxhbnk+dGhpcylbZXZlbnRuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICAgICAgbWVbZXZlbnRuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuQSA9IHt9O1xuICAgICAgICB0aGlzLkEucHJvcHMgPSB7fVxuICAgICAgICB0aGlzLmJhc2UgPSBFbmdCYXNlO1xuICAgIH1cblxuICAgIGJhc2VPbkluaXQoKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCdiYXNlT25Jbml0JylcbiAgICAgIHRoaXMubm9kZS5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArIHRoaXMueHR5cGUpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XG4gICAgICAgICAgaWYgKHRoaXNbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9ICdmdWxsc2NyZWVuJyAmJiBwcm9wZXJ0eSAhPSAneHR5cGUnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbcHJvcGVydHldID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCAnZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc1Byb3BWYWwgPSAnJ1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIHNQcm9wVmFsID0gSlNPTi5zdHJpbmdpZnkodGhpc1twcm9wZXJ0eV0pXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHNQcm9wVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCAnb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcbiAgICAgICAgICBtZS5ub2RlLm5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIC8vbWVbZXZlbnRuYW1lXS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgIGlmIChtZVtldmVudG5hbWVdICE9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUubm9kZU5hbWUuc3Vic3RyaW5nKDAsIDMpICE9PSAnRVhUJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCBub3QgZXh0JylcbiAgICAgICAgICAvL3RoaXMubm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgICB0aGlzLm5vZGUuYWZ0ZXIodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICAgICAgLy9FbmdCYXNlLnJvb3ROb2RlID0gdGhpcy5uZXdEaXZcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCBpcyBleHQnKVxuICAgICAgICAgIC8vY29uc29sZS5kaXIodGhpcylcbiAgICAgICAgICAvL2NvbnNvbGUuZGlyKEVuZ0Jhc2Uucm9vdE5vZGUpXG4gICAgICAgICAgLy90aGlzLnBhcmVudE5vZGUubmV3RGl2LmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgICAvL3RoaXMubm9kZS5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICAgICAgLy9FbmdCYXNlLnJvb3ROb2RlLmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmMpXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQpXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgIC8vIGlmICh0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nJylcbiAgICAgIC8vICAgICB0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQpXG4gICAgICAvLyB9XG4gICAgICAvL3RoaXMubm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGhpcy5uZXdEaXYpO1xuICB9XG5cbiAgICBiYXNlQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgICAgICBpZih0aGlzLm5vZGUuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZih0aGlzLm5vZGUuaW5uZXJIVE1MLmNoYXJBdCgwKSAhPSAnPCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybigndXNlIGEgZGl2IGFyb3VudCB0ZXh0JylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5uZXdEaXYuQS5leHQpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmRpcih0aGlzLm5vZGUuY2hpbGROb2RlcylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMubm9kZS5jaGlsZE5vZGVzLml0ZW0oMCkpXG4gICAgICAgICAgICAvLyAvL3ZhciBlbCA9IHRoaXMubm9kZS5jaGlsZE5vZGVzLml0ZW0oMCk7XG4gICAgICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGVsKVxuICAgICAgICAgICAgLy8gdmFyIHcgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZWxlbWVudDogdGhpcy5ub2RlLmNoaWxkTm9kZXMuaXRlbSgwKX0pO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLm5ld0Rpdi5BLmV4dC5hZGQodylcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLmlubmVySFRNTC5zdWJzdHJpbmcoMCwgNCkgIT0gJzxleHQnICYmXG4gICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTC5zdWJzdHJpbmcoMCwgNCkgIT0gJzwhLS0nXG4gICAgICAgICAgKSB7XG4gICAgICAgICAgICB2YXIgZWwgPSBFeHQuZ2V0KHRoaXMubm9kZS5jaGlsZE5vZGVzLml0ZW0oMCkpO1xuICAgICAgICAgICAgdmFyIHcgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZWxlbWVudDogZWx9KTtcbiAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuQS5leHQuYWRkKHcpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgdGhpcy5fZXh0aXRlbXMudG9BcnJheSgpLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhpdGVtLm5hdGl2ZUVsZW1lbnQpXG4gICAgICAgICAgICAvL3ZhciBlbCA9IEV4dC5nZXQoaXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgICAgIG1lLm5vZGUubmV3RGl2LmFwcGVuZENoaWxkKEV4dC5nZXQoaXRlbS5uYXRpdmVFbGVtZW50KS5kb20pO1xuICAgICAgICB9KVxuXG5cblxuXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy54dHlwZSlcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLmNoaWxkQ29tcG9uZW50cylcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLl92aWV3Y2hpbGRDb21wb25lbnRzKVxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuX2V4dGl0ZW1zKVxuXG4gICAgICAgIC8vIGlmICh0aGlzLl9leHRpdGVtcyAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gICAgIGlmICh0aGlzLl9leHRpdGVtcy5sZW5ndGggPT0gMSkge1xuXG5cbiAgICAgICAgLy8gICAgICAgICAvLyB2YXIgcm91dGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncm91dGVyLW91dGxldCcpO1xuICAgICAgICAvLyAgICAgICAgIC8vIHJvdXRlci5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdXRlJyk7XG4gICAgICAgIC8vICAgICAgICAgLy8gdGhpcy5uZXdEaXYuYXBwZW5kQ2hpbGQocm91dGVyKTtcblxuICAgICAgICAvLyAgICAgICAgIHZhciBlbCA9IEV4dC5nZXQodGhpcy5fZXh0aXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmRpcih0aGlzKVxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZGlyKGVsKVxuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMubmV3RGl2KVxuICAgICAgICAvLyAgICAgICAgIC8vdmFyIHdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2V4dC0nICsgJ3dpZGdldCcpO1xuICAgICAgICAvLyAgICAgICAgIC8vd2lkZ2V0WydlbGVtZW50J10gPSBlbDtcbiAgICAgICAgLy8gICAgICAgICAvL3dpZGdldC5zZXRBdHRyaWJ1dGUoJ2VsZW1lbnQnLCBlbCk7XG4gICAgICAgIC8vICAgICAgICAgLy92YXIgd2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZXh0LScgKyAncGFuZWwnKTtcbiAgICAgICAgLy8gICAgICAgICAvL3dpZGdldC5zZXRBdHRyaWJ1dGUoJ3RpdGxlJywgJ2hpJyk7XG4gICAgICAgIC8vICAgICAgICAgdGhpcy5uZXdEaXYuYXBwZW5kQ2hpbGQoZWwuZG9tKTtcbiAgICAgICAgLy8gICAgICAgICAvL3RoaXMubm9kZS5hZnRlcihlbClcblxuICAgICAgICAvLyAgICAgICAgIC8vY29uc29sZS5kaXIoZWwpXG4gICAgICAgIC8vICAgICAgICAgLy92YXIgdyA9IEV4dC5jcmVhdGUoe3h0eXBlOid3aWRnZXQnLCBlbGVtZW50OiBlbH0pO1xuICAgICAgICAvLyAgICAgICAgIC8vdGhpcy5hZGRUaGVDaGlsZChBLmV4dCwgdywgbnVsbCk7XG4gICAgICAgIC8vICAgICB9XG4gICAgICAgIC8vIH1cblxuICAgIH1cblxuICAgIC8vIG5ld0NyZWF0ZVByb3BzKHByb3BlcnRpZXMpIHtcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZygnc3RvcmUgcHJvcCcpXG4gICAgLy8gICAgIC8vY29uc29sZS5sb2codGhpcy5zdG9yZSlcbiAgICAvLyAgICAgbGV0IGxpc3RlbmVyc1Byb3ZpZGVkID0gZmFsc2U7XG4gICAgLy8gICAgIHZhciBvID0ge307XG4gICAgLy8gICAgIG9bJ3h0eXBlJ10gPSB0aGlzLnh0eXBlO1xuXG4gICAgLy8gICAgIGlmICh0aGlzWydjb25maWcnXSAhPT0ge30pIHtcbiAgICAvLyAgICAgICAgIEV4dC5hcHBseShvLCB0aGlzWydjb25maWcnXSk7XG4gICAgLy8gICAgIH1cblxuICAgIC8vICAgICBpZiAodHJ1ZSA9PT0gdGhpc1snZml0VG9QYXJlbnQnXSkge1xuICAgIC8vICAgICAgICAgb1snaGVpZ2h0J109JzEwMCUnXG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgLy8gICAgICAgICB2YXIgcHJvcGVydHkgPSBwcm9wZXJ0aWVzW2ldXG4gICAgLy8gICAgICAgICAvL2lmICh0aGlzLmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkgIT09IG51bGwpIHtcbiAgICAvLyAgICAgICAgIGlmICh0aGlzW3Byb3BlcnR5XSAhPT0gbnVsbCkge1xuXG4gICAgLy8gICAgICAgICAgICAgaWYgKHByb3BlcnR5ID09ICdoYW5kbGVyJykge1xuICAgIC8vICAgICAgICAgICAgICAgICBvW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgIC8vIGVsc2UgaWYgKChvWyd4dHlwZSddID09PSAnY2FydGVzaWFuJyB8fCBvWyd4dHlwZSddID09PSAncG9sYXInKSAmJiBwcm9wZXJ0eSA9PT0gJ2xheW91dCcpIHtcbiAgICAvLyAgICAgICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgICAgICAgZWxzZSBpZiAocHJvcGVydHkgPT0gJ2xpc3RlbmVycycgJiYgdGhpc1twcm9wZXJ0eV0gIT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIG9bcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgLy8gICAgICAgICAgICAgICAgIGxpc3RlbmVyc1Byb3ZpZGVkID0gdHJ1ZTtcbiAgICAvLyAgICAgICAgICAgICB9XG4gICAgLy8gICAgICAgICAgICAgZWxzZSBpZiAodGhpc1twcm9wZXJ0eV0gIT0gdW5kZWZpbmVkICYmXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9ICdsaXN0ZW5lcnMnICYmXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9ICdjb25maWcnICYmXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9ICdoYW5kbGVyJyAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnZml0VG9QYXJlbnQnKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIC8vcHJvcHNbcHJvcGVydHldID0gcHJvcGVydHlbcHJvcF07XG4gICAgLy8gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coJ2hlcmU/PycpXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cocHJvcGVydHkpXG4gICAgLy8gICAgICAgICAgICAgICAgIC8vb1twcm9wZXJ0eV0gPSBmaWx0ZXJQcm9wKHRoaXMuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSwgcHJvcGVydHksIHRoaXMpO1xuICAgIC8vICAgICAgICAgICAgICAgICBvW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgLy8gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gICAgIG9bcHJvcGVydHldID0gZmlsdGVyUHJvcCh0aGlzLmdldEF0dHJpYnV0ZShwcm9wZXJ0eSkpO1xuICAgIC8vICAgICAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgLy8gaWYgKCFsaXN0ZW5lcnNQcm92aWRlZCkge1xuICAgIC8vICAgICAgICAgLy8gICAgIG8ubGlzdGVuZXJzID0ge307XG4gICAgLy8gICAgICAgICAvLyAgICAgdmFyIG1lID0gdGhpcztcbiAgICAvLyAgICAgICAgIC8vICAgICB0aGlzLmV2ZW50cy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudCwgaW5kZXgsIGFycmF5KSB7XG4gICAgLy8gICAgICAgICAvLyAgICAgICAgIG1lLnNldEV2ZW50KGV2ZW50LG8sbWUpXG4gICAgLy8gICAgICAgICAvLyAgICAgfSlcbiAgICAvLyAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgfVxuICAgIC8vICAgICB0aGlzLkEubyA9IG87XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2cobylcbiAgICAvLyB9XG5cbiAgICBiYXNlT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmV3RGl2ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB2YXIgcHJvcGVydHlWYWwgPSAnJztcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbCA9IHZhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcE5hbWUsIHByb3BlcnR5VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhc2VPbkRlc3Ryb3koKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlLm5ld0RpdiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLm5ld0Rpdi5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubmV3RGl2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50b1N0cmluZygpKVxuICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0=