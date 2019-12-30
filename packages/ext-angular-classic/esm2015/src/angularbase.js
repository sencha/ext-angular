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
                this.node.innerHTML.substring(0, 4) != '<!--' &&
                this.node.innerHTML.substring(0, 4) != '<rou') {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvYW5ndWxhcmJhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFDSCxZQUFZLEVBQ1osWUFBWSxFQUNaLGVBQWUsRUFDZixZQUFZLEVBR2IsTUFBTSxlQUFlLENBQUM7QUFDekIsTUFBTSxHQUFHLEdBQUcsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBRTFCLE1BQU0sT0FBTyxPQUFPO0lBOEJoQixZQUNJLElBQVMsRUFDVCxhQUFrQixFQUNsQixVQUFVLEVBQ1YsTUFBTSxFQUNOLFVBQVUsRUFDVixFQUFHO1FBRUgsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDO1FBQy9CLElBQUksQ0FBQyxVQUFVLEdBQUcsYUFBYSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLHVCQUF1QjtRQUN2QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUViLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUztZQUN2Qyx3QkFBd0I7WUFDeEIsNkNBQTZDO1lBQzdDLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFBO1FBQ3RDLENBQUMsQ0FBQyxDQUFBO1FBRUYsSUFBSSxDQUFDLENBQUMsR0FBRyxFQUFFLENBQUM7UUFDWixJQUFJLENBQUMsQ0FBQyxDQUFDLEtBQUssR0FBRyxFQUFFLENBQUE7UUFDakIsSUFBSSxDQUFDLElBQUksR0FBRyxPQUFPLENBQUM7SUFDeEIsQ0FBQztJQTlCRCxJQUFJLGVBQWU7UUFDZixJQUFJLElBQUksQ0FBQyxnQkFBZ0IsSUFBSSxT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WSxDQUFDLFFBQVEsRUFBRSxXQUFXLENBQUMsQ0FBQzthQUN0RDtTQUNKO0lBQ0wsQ0FBQztJQUVELGFBQWE7UUFDWCxJQUFJO1lBQ0YsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsSUFBSSxTQUFTLEVBQUU7Z0JBQ3JDLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxJQUFJLFNBQVMsRUFBRTtvQkFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxVQUFVLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2lCQUMzRDthQUNGO1NBQ0Y7UUFDRCxPQUFNLENBQUMsRUFBRTtZQUNQLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLFFBQVEsRUFBRSxDQUFDLENBQUE7U0FDMUI7SUFDSCxDQUFDO0NBQ0o7QUExUCtDO0lBQTNDLFlBQVksQ0FBQyxTQUFTLEVBQUMsRUFBRSxNQUFNLEVBQUcsS0FBSyxFQUFFLENBQUM7eUNBQWU7QUFDOUI7SUFBM0IsZUFBZSxDQUFDLFNBQVMsQ0FBQzswQ0FBMkI7QUFDNUI7SUFBekIsZUFBZSxDQUFDLE9BQU8sQ0FBQztpREFBc0M7QUFDeEM7SUFBdEIsWUFBWSxDQUFDLE9BQU8sQ0FBQztxREFBMEMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEV2ZW50RW1pdHRlcixcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgU2ltcGxlQ2hhbmdlc1xuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuY29uc3QgRXh0ID0gd2luZG93WydFeHQnXTtcblxuZXhwb3J0IGNsYXNzIEVuZ0Jhc2Uge1xuICAgIC8vc3RhdGljIHJvb3ROb2RlOiBhbnkgPSBudWxsO1xuICAgIHB1YmxpYyBleHQ6IGFueVxuICAgIG5ld0RpdjogYW55XG4gICAgeHR5cGU6IGFueVxuICAgIHByb3BlcnRpZXM6IGFueVxuICAgIC8vZXZlbnRzOiBhbnlcbiAgICBBOiBhbnk7XG4gICAgbm9kZTogYW55XG4gICAgcGFyZW50Tm9kZTogYW55XG4gICAgYmFzZTogYW55XG4gICAgbm9kZU5hbWU6IGFueVxuICAgIGV3Y0NoaWxkcmVuOiBhbnlcbiAgICByYXdDaGlsZHJlbjogYW55XG4gICAgaGFzUGFyZW50OiBhbnlcbiAgICBwYXJlbnRUeXBlOiBhbnlcbiAgICBjaGlsZHJlbjogYW55XG4gICAgbGFzdDogYW55XG4gICAgcHVibGljIHZjOiBhbnk7XG4gICAgZXZlbnRuYW1lczogYW55O1xuXG4gICAgQENvbnRlbnRDaGlsZCgnZXh0aXRlbScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0aXRlbTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dGl0ZW0nKSBfZXh0aXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRW5nQmFzZSkgX2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIEBWaWV3Q2hpbGRyZW4oRW5nQmFzZSkgX3ZpZXdjaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBnZXQgY2hpbGRDb21wb25lbnRzKCk6IEVuZ0Jhc2VbXSB7XG4gICAgICAgIGlmICh0aGlzLl9jaGlsZENvbXBvbmVudHMgPT0gdW5kZWZpbmVkKSB7IHJldHVybiBbXX1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ29tcG9uZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIGVSZWY6IGFueSxcbiAgICAgICAgaG9zdENvbXBvbmVudDogYW55LFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBldmVudHMsXG4gICAgICAgIGV2ZW50bmFtZXMsXG4gICAgICAgIHZjP1xuICAgICkge1xuICAgICAgICB0aGlzLm5vZGUgPSBlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IGhvc3RDb21wb25lbnQ7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIC8vdGhpcy5ldmVudHMgPSBldmVudHM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXM7XG4gICAgICAgIHRoaXMudmMgPSB2YztcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRuYW1lKSB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50bmFtZSlcbiAgICAgICAgICAgIC8vKDxhbnk+dGhpcylbZXZlbnRuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICAgICAgbWVbZXZlbnRuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuQSA9IHt9O1xuICAgICAgICB0aGlzLkEucHJvcHMgPSB7fVxuICAgICAgICB0aGlzLmJhc2UgPSBFbmdCYXNlO1xuICAgIH1cblxuICAgIGJhc2VPbkluaXQoKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCdiYXNlT25Jbml0JylcbiAgICAgIHRoaXMubm9kZS5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArIHRoaXMueHR5cGUpO1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XG4gICAgICAgICAgaWYgKHRoaXNbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9ICdmdWxsc2NyZWVuJyAmJiBwcm9wZXJ0eSAhPSAneHR5cGUnKSB7XG4gICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbcHJvcGVydHldID09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCAnZnVuY3Rpb24nKTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSA9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgc1Byb3BWYWwgPSAnJ1xuICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgIHNQcm9wVmFsID0gSlNPTi5zdHJpbmdpZnkodGhpc1twcm9wZXJ0eV0pXG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHNQcm9wVmFsKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXRjaChlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCAnb2JqZWN0Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcbiAgICAgICAgICBtZS5ub2RlLm5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIC8vbWVbZXZlbnRuYW1lXS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgIGlmIChtZVtldmVudG5hbWVdICE9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUubm9kZU5hbWUuc3Vic3RyaW5nKDAsIDMpICE9PSAnRVhUJykge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCBub3QgZXh0JylcbiAgICAgICAgICAvL3RoaXMubm9kZS5wYXJlbnROb2RlLmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgICB0aGlzLm5vZGUuYWZ0ZXIodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICAgICAgLy9FbmdCYXNlLnJvb3ROb2RlID0gdGhpcy5uZXdEaXZcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIC8vY29uc29sZS5sb2coJ3BhcmVudCBpcyBleHQnKVxuICAgICAgICAgIC8vY29uc29sZS5kaXIodGhpcylcbiAgICAgICAgICAvL2NvbnNvbGUuZGlyKEVuZ0Jhc2Uucm9vdE5vZGUpXG4gICAgICAgICAgLy90aGlzLnBhcmVudE5vZGUubmV3RGl2LmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgICAvL3RoaXMubm9kZS5wYXJlbnROb2RlLm5leHRTaWJsaW5nLmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICAgICAgLy9FbmdCYXNlLnJvb3ROb2RlLmFwcGVuZENoaWxkKHRoaXMubmV3RGl2KTtcbiAgICAgIH1cbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmMpXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQpXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQucGFyZW50Tm9kZSlcbiAgICAgIC8vIGlmICh0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQucGFyZW50Tm9kZSAhPSBudWxsKSB7XG4gICAgICAvLyAgICAgY29uc29sZS5sb2coJ3JlbW92aW5nJylcbiAgICAgIC8vICAgICB0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZCh0aGlzLnZjLl9kYXRhLnJlbmRlckVsZW1lbnQpXG4gICAgICAvLyB9XG4gICAgICAvL3RoaXMubm9kZS5pbnNlcnRBZGphY2VudEVsZW1lbnQoJ2JlZm9yZWJlZ2luJywgdGhpcy5uZXdEaXYpO1xuICB9XG5cbiAgICBiYXNlQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcblxuICAgICAgICBpZih0aGlzLm5vZGUuaW5uZXJIVE1MLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICBpZih0aGlzLm5vZGUuaW5uZXJIVE1MLmNoYXJBdCgwKSAhPSAnPCcpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybigndXNlIGEgZGl2IGFyb3VudCB0ZXh0JylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMubm9kZS5uZXdEaXYuQS5leHQpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmRpcih0aGlzLm5vZGUuY2hpbGROb2RlcylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMubm9kZS5jaGlsZE5vZGVzLml0ZW0oMCkpXG4gICAgICAgICAgICAvLyAvL3ZhciBlbCA9IHRoaXMubm9kZS5jaGlsZE5vZGVzLml0ZW0oMCk7XG4gICAgICAgICAgICAvLyAvL2NvbnNvbGUubG9nKGVsKVxuICAgICAgICAgICAgLy8gdmFyIHcgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZWxlbWVudDogdGhpcy5ub2RlLmNoaWxkTm9kZXMuaXRlbSgwKX0pO1xuICAgICAgICAgICAgLy8gdGhpcy5ub2RlLm5ld0Rpdi5BLmV4dC5hZGQodylcbiAgICAgICAgICB9XG4gICAgICAgICAgZWxzZSBpZiAodGhpcy5ub2RlLmlubmVySFRNTC5zdWJzdHJpbmcoMCwgNCkgIT0gJzxleHQnICYmXG4gICAgICAgICAgICB0aGlzLm5vZGUuaW5uZXJIVE1MLnN1YnN0cmluZygwLCA0KSAhPSAnPCEtLScgJiZcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwuc3Vic3RyaW5nKDAsIDQpICE9ICc8cm91JylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgIHZhciBlbCA9IEV4dC5nZXQodGhpcy5ub2RlLmNoaWxkTm9kZXMuaXRlbSgwKSk7XG4gICAgICAgICAgICB2YXIgdyA9IEV4dC5jcmVhdGUoe3h0eXBlOid3aWRnZXQnLCBlbGVtZW50OiBlbH0pO1xuICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5BLmV4dC5hZGQodylcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICB0aGlzLl9leHRpdGVtcy50b0FycmF5KCkuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0ubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC8vdmFyIGVsID0gRXh0LmdldChpdGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgbWUubm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQoRXh0LmdldChpdGVtLm5hdGl2ZUVsZW1lbnQpLmRvbSk7XG4gICAgICAgIH0pXG5cblxuXG5cbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnh0eXBlKVxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY2hpbGRDb21wb25lbnRzKVxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuX3ZpZXdjaGlsZENvbXBvbmVudHMpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5fZXh0aXRlbXMpXG5cbiAgICAgICAgLy8gaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG5cblxuICAgICAgICAvLyAgICAgICAgIC8vIHZhciByb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdyb3V0ZXItb3V0bGV0Jyk7XG4gICAgICAgIC8vICAgICAgICAgLy8gcm91dGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncm91dGUnKTtcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLm5ld0Rpdi5hcHBlbmRDaGlsZChyb3V0ZXIpO1xuXG4gICAgICAgIC8vICAgICAgICAgdmFyIGVsID0gRXh0LmdldCh0aGlzLl9leHRpdGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMpXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5kaXIoZWwpXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5uZXdEaXYpXG4gICAgICAgIC8vICAgICAgICAgLy92YXIgd2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZXh0LScgKyAnd2lkZ2V0Jyk7XG4gICAgICAgIC8vICAgICAgICAgLy93aWRnZXRbJ2VsZW1lbnQnXSA9IGVsO1xuICAgICAgICAvLyAgICAgICAgIC8vd2lkZ2V0LnNldEF0dHJpYnV0ZSgnZWxlbWVudCcsIGVsKTtcbiAgICAgICAgLy8gICAgICAgICAvL3ZhciB3aWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArICdwYW5lbCcpO1xuICAgICAgICAvLyAgICAgICAgIC8vd2lkZ2V0LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnaGknKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5ld0Rpdi5hcHBlbmRDaGlsZChlbC5kb20pO1xuICAgICAgICAvLyAgICAgICAgIC8vdGhpcy5ub2RlLmFmdGVyKGVsKVxuXG4gICAgICAgIC8vICAgICAgICAgLy9jb25zb2xlLmRpcihlbClcbiAgICAgICAgLy8gICAgICAgICAvL3ZhciB3ID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGVsZW1lbnQ6IGVsfSk7XG4gICAgICAgIC8vICAgICAgICAgLy90aGlzLmFkZFRoZUNoaWxkKEEuZXh0LCB3LCBudWxsKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgfVxuXG4gICAgLy8gbmV3Q3JlYXRlUHJvcHMocHJvcGVydGllcykge1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKCdzdG9yZSBwcm9wJylcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0b3JlKVxuICAgIC8vICAgICBsZXQgbGlzdGVuZXJzUHJvdmlkZWQgPSBmYWxzZTtcbiAgICAvLyAgICAgdmFyIG8gPSB7fTtcbiAgICAvLyAgICAgb1sneHR5cGUnXSA9IHRoaXMueHR5cGU7XG5cbiAgICAvLyAgICAgaWYgKHRoaXNbJ2NvbmZpZyddICE9PSB7fSkge1xuICAgIC8vICAgICAgICAgRXh0LmFwcGx5KG8sIHRoaXNbJ2NvbmZpZyddKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGlmICh0cnVlID09PSB0aGlzWydmaXRUb1BhcmVudCddKSB7XG4gICAgLy8gICAgICAgICBvWydoZWlnaHQnXT0nMTAwJSdcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV1cbiAgICAvLyAgICAgICAgIC8vaWYgKHRoaXMuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSAhPT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgaWYgKHRoaXNbcHJvcGVydHldICE9PSBudWxsKSB7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT0gJ2hhbmRsZXInKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIG9bcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgLy8gZWxzZSBpZiAoKG9bJ3h0eXBlJ10gPT09ICdjYXJ0ZXNpYW4nIHx8IG9bJ3h0eXBlJ10gPT09ICdwb2xhcicpICYmIHByb3BlcnR5ID09PSAnbGF5b3V0Jykge1xuICAgIC8vICAgICAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PSAnbGlzdGVuZXJzJyAmJiB0aGlzW3Byb3BlcnR5XSAhPSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGlzdGVuZXJzUHJvdmlkZWQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlIGlmICh0aGlzW3Byb3BlcnR5XSAhPSB1bmRlZmluZWQgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2xpc3RlbmVycycgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2NvbmZpZycgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2hhbmRsZXInICYmXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9ICdmaXRUb1BhcmVudCcpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy9wcm9wc1twcm9wZXJ0eV0gPSBwcm9wZXJ0eVtwcm9wXTtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZT8/JylcbiAgICAvLyAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9wZXJ0eSlcbiAgICAvLyAgICAgICAgICAgICAgICAgLy9vW3Byb3BlcnR5XSA9IGZpbHRlclByb3AodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpLCBwcm9wZXJ0eSwgdGhpcyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG9bcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAvLyAgICAgb1twcm9wZXJ0eV0gPSBmaWx0ZXJQcm9wKHRoaXMuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSk7XG4gICAgLy8gICAgICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAvLyBpZiAoIWxpc3RlbmVyc1Byb3ZpZGVkKSB7XG4gICAgLy8gICAgICAgICAvLyAgICAgby5saXN0ZW5lcnMgPSB7fTtcbiAgICAvLyAgICAgICAgIC8vICAgICB2YXIgbWUgPSB0aGlzO1xuICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAvLyAgICAgICAgIC8vICAgICAgICAgbWUuc2V0RXZlbnQoZXZlbnQsbyxtZSlcbiAgICAvLyAgICAgICAgIC8vICAgICB9KVxuICAgIC8vICAgICAgICAgLy8gfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuQS5vID0gbztcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhvKVxuICAgIC8vIH1cblxuICAgIGJhc2VPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9wZXJ0eVZhbCA9ICcnO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsID0gdmFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wTmFtZSwgcHJvcGVydHlWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFzZU9uRGVzdHJveSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2LnJlbW92ZUNoaWxkKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRvU3RyaW5nKCkpXG4gICAgICB9XG4gICAgfVxufVxuXG5cbiJdfQ==