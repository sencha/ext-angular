import * as tslib_1 from "tslib";
import { EventEmitter, ContentChild, ContentChildren, ViewChildren } from '@angular/core';
//import * as JsonStringifySafe from 'json-stringify-safe'
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
        // console.log(this['html'])
        // if (this['html'] == 'route') {
        //   console.log('in route')
        //   this.node.newDiv = document.createElement('router-outlet');
        //   this.node.newDiv.setAttribute('id', 'route');
        //   console.log(this.node.newDiv)
        // }
        // else {
        //   this.node.newDiv = document.createElement('ext-' + this.xtype);
        // }
        this.node.newDiv = document.createElement('ext-' + this.xtype);
        for (var i = 0; i < this.properties.length; i++) {
            var property = this.properties[i];
            if (this[property] !== undefined) {
                //o[property] = this[property];
                // why does this need to be done??
                if (property != 'fullscreen' && property != 'xtype') {
                    // var propertyVal = '';
                    //   if (typeof this[property] == 'string') {
                    //       propertyVal = this[property];
                    //   }
                    //   else {
                    //       propertyVal = JSON.stringify(this[property]);
                    //       // if (property == 'store') {
                    //       //   propertyVal = this[property];
                    //       // }
                    //       // else {
                    //       //   propertyVal = JSON.stringify(this[property]);
                    //       //   //propertyVal = JsonStringifySafe(this[property]);
                    //       // }
                    //   }
                    //this.node.newDiv.setAttribute(property, propertyVal);
                    if (typeof this[property] == 'function') {
                        this.node.newDiv.attributeObjects[property] = this[property];
                        this.node.newDiv.setAttribute(property, 'function');
                    }
                    else if (typeof this[property] == 'object') {
                        this.node.newDiv.attributeObjects[property] = this[property];
                        this.node.newDiv.setAttribute(property, 'object');
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLyIsInNvdXJjZXMiOlsic3JjL2FuZ3VsYXJiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsWUFBWSxFQUNaLFlBQVksRUFDWixlQUFlLEVBQ2YsWUFBWSxFQUdiLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLDBEQUEwRDtBQUc1RCxNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFMUIsTUFBTSxPQUFPLE9BQU87SUE4QmhCLFlBQ0ksSUFBUyxFQUNULGFBQWtCLEVBQ2xCLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLEVBQUc7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ3ZDLHdCQUF3QjtZQUN4Qiw2Q0FBNkM7WUFDN0MsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBOUJELElBQUksZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLGdCQUFnQixJ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SSxTQUFTLEVBQUU7Z0JBQ2pDLElBQUksV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxPQUFPLEdBQUcsSUFBSSxRQUFRLEVBQUU7b0JBQzFCLFdBQVcsR0FBRyxHQUFHLENBQUM7aUJBQ25CO3FCQUNJO29CQUNILFdBQVcsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2lCQUNuQztnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxZQUFZLENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtRQUNELE9BQU0sQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUMxQjtJQUNILENBQUM7Q0FDSjtBQS9QK0M7SUFBM0MsWUFBWSxDQUFDLFNBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsQ0FBQzt5Q0FBZTtBQUM5QjtJQUEzQixlQUFlLENBQUMsU0FBUyxDQUFDOzBDQUEyQjtBQUM1QjtJQUF6QixlQUFlLENBQUMsT0FBTyxDQUFDO2lEQUFzQztBQUN4QztJQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDO3FEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBTaW1wbGVDaGFuZ2VzXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG4gIC8vaW1wb3J0ICogYXMgSnNvblN0cmluZ2lmeVNhZmUgZnJvbSAnanNvbi1zdHJpbmdpZnktc2FmZSdcblxuXG5jb25zdCBFeHQgPSB3aW5kb3dbJ0V4dCddO1xuXG5leHBvcnQgY2xhc3MgRW5nQmFzZSB7XG4gICAgLy9zdGF0aWMgcm9vdE5vZGU6IGFueSA9IG51bGw7XG4gICAgcHVibGljIGV4dDogYW55XG4gICAgbmV3RGl2OiBhbnlcbiAgICB4dHlwZTogYW55XG4gICAgcHJvcGVydGllczogYW55XG4gICAgLy9ldmVudHM6IGFueVxuICAgIEE6IGFueTtcbiAgICBub2RlOiBhbnlcbiAgICBwYXJlbnROb2RlOiBhbnlcbiAgICBiYXNlOiBhbnlcbiAgICBub2RlTmFtZTogYW55XG4gICAgZXdjQ2hpbGRyZW46IGFueVxuICAgIHJhd0NoaWxkcmVuOiBhbnlcbiAgICBoYXNQYXJlbnQ6IGFueVxuICAgIHBhcmVudFR5cGU6IGFueVxuICAgIGNoaWxkcmVuOiBhbnlcbiAgICBsYXN0OiBhbnlcbiAgICBwdWJsaWMgdmM6IGFueTtcbiAgICBldmVudG5hbWVzOiBhbnk7XG5cbiAgICBAQ29udGVudENoaWxkKCdleHRpdGVtJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRpdGVtOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZHJlbignZXh0aXRlbScpIF9leHRpdGVtczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZHJlbihFbmdCYXNlKSBfY2hpbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW5nQmFzZT47XG4gICAgQFZpZXdDaGlsZHJlbihFbmdCYXNlKSBfdmlld2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIGdldCBjaGlsZENvbXBvbmVudHMoKTogRW5nQmFzZVtdIHtcbiAgICAgICAgaWYgKHRoaXMuX2NoaWxkQ29tcG9uZW50cyA9PSB1bmRlZmluZWQpIHsgcmV0dXJuIFtdfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRDb21wb25lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgZVJlZjogYW55LFxuICAgICAgICBob3N0Q29tcG9uZW50OiBhbnksXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIGV2ZW50cyxcbiAgICAgICAgZXZlbnRuYW1lcyxcbiAgICAgICAgdmM/XG4gICAgKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGVSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gaG9zdENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgLy90aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzID0gZXZlbnRuYW1lcztcbiAgICAgICAgdGhpcy52YyA9IHZjO1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnRuYW1lKVxuICAgICAgICAgICAgLy8oPGFueT50aGlzKVtldmVudG5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgICAgICBtZVtldmVudG5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5BID0ge307XG4gICAgICAgIHRoaXMuQS5wcm9wcyA9IHt9XG4gICAgICAgIHRoaXMuYmFzZSA9IEVuZ0Jhc2U7XG4gICAgfVxuXG4gICAgYmFzZU9uSW5pdCgpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ2Jhc2VPbkluaXQnKVxuXG4gICAgICAvLyBjb25zb2xlLmxvZyh0aGlzWydodG1sJ10pXG4gICAgICAvLyBpZiAodGhpc1snaHRtbCddID09ICdyb3V0ZScpIHtcbiAgICAgIC8vICAgY29uc29sZS5sb2coJ2luIHJvdXRlJylcbiAgICAgIC8vICAgdGhpcy5ub2RlLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3JvdXRlci1vdXRsZXQnKTtcbiAgICAgIC8vICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUoJ2lkJywgJ3JvdXRlJyk7XG4gICAgICAvLyAgIGNvbnNvbGUubG9nKHRoaXMubm9kZS5uZXdEaXYpXG4gICAgICAvLyB9XG4gICAgICAvLyBlbHNlIHtcbiAgICAgIC8vICAgdGhpcy5ub2RlLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2V4dC0nICsgdGhpcy54dHlwZSk7XG4gICAgICAvLyB9XG5cblxuXG4gICAgICB0aGlzLm5vZGUubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZXh0LScgKyB0aGlzLnh0eXBlKTtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW2ldO1xuICAgICAgICAgIGlmICh0aGlzW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIC8vb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgICAgLy8gd2h5IGRvZXMgdGhpcyBuZWVkIHRvIGJlIGRvbmU/P1xuICAgICAgICAgICAgICBpZiAocHJvcGVydHkgIT0gJ2Z1bGxzY3JlZW4nICYmIHByb3BlcnR5ICE9ICd4dHlwZScpIHtcblxuICAgICAgICAgICAgICAgIC8vIHZhciBwcm9wZXJ0eVZhbCA9ICcnO1xuICAgICAgICAgICAgICAgIC8vICAgaWYgKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIC8vICAgICAgIHByb3BlcnR5VmFsID0gdGhpc1twcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgLy8gICB9XG4gICAgICAgICAgICAgICAgLy8gICBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICBwcm9wZXJ0eVZhbCA9IEpTT04uc3RyaW5naWZ5KHRoaXNbcHJvcGVydHldKTtcblxuICAgICAgICAgICAgICAgIC8vICAgICAgIC8vIGlmIChwcm9wZXJ0eSA9PSAnc3RvcmUnKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgLy8gICBwcm9wZXJ0eVZhbCA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgICAgIC8vICAgICAgIC8vIH1cbiAgICAgICAgICAgICAgICAvLyAgICAgICAvLyBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAvLyAgIHByb3BlcnR5VmFsID0gSlNPTi5zdHJpbmdpZnkodGhpc1twcm9wZXJ0eV0pO1xuICAgICAgICAgICAgICAgIC8vICAgICAgIC8vICAgLy9wcm9wZXJ0eVZhbCA9IEpzb25TdHJpbmdpZnlTYWZlKHRoaXNbcHJvcGVydHldKTtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAvLyB9XG5cbiAgICAgICAgICAgICAgICAvLyAgIH1cbiAgICAgICAgICAgICAgICAgIC8vdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHByb3BlcnR5VmFsKTtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LmF0dHJpYnV0ZU9iamVjdHNbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXNbcHJvcGVydHldID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuYXR0cmlidXRlT2JqZWN0c1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgJ29iamVjdCcpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB0aGlzW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgdGhpcy5ldmVudG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50bmFtZSkge1xuICAgICAgICAgIG1lLm5vZGUubmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgLy9tZVtldmVudG5hbWVdLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgaWYgKG1lW2V2ZW50bmFtZV0gIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZS5zdWJzdHJpbmcoMCwgMykgIT09ICdFWFQnKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50IG5vdCBleHQnKVxuICAgICAgICAgIC8vdGhpcy5ub2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5uZXdEaXYpO1xuICAgICAgICAgIHRoaXMubm9kZS5hZnRlcih0aGlzLm5vZGUubmV3RGl2KTtcbiAgICAgICAgICAvL0VuZ0Jhc2Uucm9vdE5vZGUgPSB0aGlzLm5ld0RpdlxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50IGlzIGV4dCcpXG4gICAgICAgICAgLy9jb25zb2xlLmRpcih0aGlzKVxuICAgICAgICAgIC8vY29uc29sZS5kaXIoRW5nQmFzZS5yb290Tm9kZSlcbiAgICAgICAgICAvL3RoaXMucGFyZW50Tm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQodGhpcy5uZXdEaXYpO1xuICAgICAgICAgIC8vdGhpcy5ub2RlLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuYXBwZW5kQ2hpbGQodGhpcy5uZXdEaXYpO1xuICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLm5ld0Rpdi5hcHBlbmRDaGlsZCh0aGlzLm5vZGUubmV3RGl2KTtcbiAgICAgICAgICAvL0VuZ0Jhc2Uucm9vdE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5uZXdEaXYpO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy52YylcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudClcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudC5wYXJlbnROb2RlKVxuICAgICAgLy8gaWYgKHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcnKVxuICAgICAgLy8gICAgIHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudClcbiAgICAgIC8vIH1cbiAgICAgIC8vdGhpcy5ub2RlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCB0aGlzLm5ld0Rpdik7XG4gIH1cblxuICAgIGJhc2VBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLl9leHRpdGVtcy50b0FycmF5KCkuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICAvL2NvbnNvbGUubG9nKGl0ZW0ubmF0aXZlRWxlbWVudClcbiAgICAgICAgICAgIC8vdmFyIGVsID0gRXh0LmdldChpdGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAgICAgbWUubm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQoRXh0LmdldChpdGVtLm5hdGl2ZUVsZW1lbnQpLmRvbSk7XG4gICAgICAgIH0pXG5cblxuXG5cbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLnh0eXBlKVxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuY2hpbGRDb21wb25lbnRzKVxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMuX3ZpZXdjaGlsZENvbXBvbmVudHMpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5fZXh0aXRlbXMpXG5cbiAgICAgICAgLy8gaWYgKHRoaXMuX2V4dGl0ZW1zICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyAgICAgaWYgKHRoaXMuX2V4dGl0ZW1zLmxlbmd0aCA9PSAxKSB7XG5cblxuICAgICAgICAvLyAgICAgICAgIC8vIHZhciByb3V0ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdyb3V0ZXItb3V0bGV0Jyk7XG4gICAgICAgIC8vICAgICAgICAgLy8gcm91dGVyLnNldEF0dHJpYnV0ZSgnaWQnLCAncm91dGUnKTtcbiAgICAgICAgLy8gICAgICAgICAvLyB0aGlzLm5ld0Rpdi5hcHBlbmRDaGlsZChyb3V0ZXIpO1xuXG4gICAgICAgIC8vICAgICAgICAgdmFyIGVsID0gRXh0LmdldCh0aGlzLl9leHRpdGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICAvLyAgICAgICAgIGNvbnNvbGUuZGlyKHRoaXMpXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5kaXIoZWwpXG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5sb2codGhpcy5uZXdEaXYpXG4gICAgICAgIC8vICAgICAgICAgLy92YXIgd2lkZ2V0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZXh0LScgKyAnd2lkZ2V0Jyk7XG4gICAgICAgIC8vICAgICAgICAgLy93aWRnZXRbJ2VsZW1lbnQnXSA9IGVsO1xuICAgICAgICAvLyAgICAgICAgIC8vd2lkZ2V0LnNldEF0dHJpYnV0ZSgnZWxlbWVudCcsIGVsKTtcbiAgICAgICAgLy8gICAgICAgICAvL3ZhciB3aWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArICdwYW5lbCcpO1xuICAgICAgICAvLyAgICAgICAgIC8vd2lkZ2V0LnNldEF0dHJpYnV0ZSgndGl0bGUnLCAnaGknKTtcbiAgICAgICAgLy8gICAgICAgICB0aGlzLm5ld0Rpdi5hcHBlbmRDaGlsZChlbC5kb20pO1xuICAgICAgICAvLyAgICAgICAgIC8vdGhpcy5ub2RlLmFmdGVyKGVsKVxuXG4gICAgICAgIC8vICAgICAgICAgLy9jb25zb2xlLmRpcihlbClcbiAgICAgICAgLy8gICAgICAgICAvL3ZhciB3ID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGVsZW1lbnQ6IGVsfSk7XG4gICAgICAgIC8vICAgICAgICAgLy90aGlzLmFkZFRoZUNoaWxkKEEuZXh0LCB3LCBudWxsKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gfVxuXG4gICAgfVxuXG4gICAgLy8gbmV3Q3JlYXRlUHJvcHMocHJvcGVydGllcykge1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKCdzdG9yZSBwcm9wJylcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyh0aGlzLnN0b3JlKVxuICAgIC8vICAgICBsZXQgbGlzdGVuZXJzUHJvdmlkZWQgPSBmYWxzZTtcbiAgICAvLyAgICAgdmFyIG8gPSB7fTtcbiAgICAvLyAgICAgb1sneHR5cGUnXSA9IHRoaXMueHR5cGU7XG5cbiAgICAvLyAgICAgaWYgKHRoaXNbJ2NvbmZpZyddICE9PSB7fSkge1xuICAgIC8vICAgICAgICAgRXh0LmFwcGx5KG8sIHRoaXNbJ2NvbmZpZyddKTtcbiAgICAvLyAgICAgfVxuXG4gICAgLy8gICAgIGlmICh0cnVlID09PSB0aGlzWydmaXRUb1BhcmVudCddKSB7XG4gICAgLy8gICAgICAgICBvWydoZWlnaHQnXT0nMTAwJSdcbiAgICAvLyAgICAgfVxuICAgIC8vICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAvLyAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHByb3BlcnRpZXNbaV1cbiAgICAvLyAgICAgICAgIC8vaWYgKHRoaXMuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSAhPT0gbnVsbCkge1xuICAgIC8vICAgICAgICAgaWYgKHRoaXNbcHJvcGVydHldICE9PSBudWxsKSB7XG5cbiAgICAvLyAgICAgICAgICAgICBpZiAocHJvcGVydHkgPT0gJ2hhbmRsZXInKSB7XG4gICAgLy8gICAgICAgICAgICAgICAgIG9bcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgLy8gICAgICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAgICAgLy8gZWxzZSBpZiAoKG9bJ3h0eXBlJ10gPT09ICdjYXJ0ZXNpYW4nIHx8IG9bJ3h0eXBlJ10gPT09ICdwb2xhcicpICYmIHByb3BlcnR5ID09PSAnbGF5b3V0Jykge1xuICAgIC8vICAgICAgICAgICAgIC8vIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlIGlmIChwcm9wZXJ0eSA9PSAnbGlzdGVuZXJzJyAmJiB0aGlzW3Byb3BlcnR5XSAhPSB1bmRlZmluZWQpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAvLyAgICAgICAgICAgICAgICAgbGlzdGVuZXJzUHJvdmlkZWQgPSB0cnVlO1xuICAgIC8vICAgICAgICAgICAgIH1cbiAgICAvLyAgICAgICAgICAgICBlbHNlIGlmICh0aGlzW3Byb3BlcnR5XSAhPSB1bmRlZmluZWQgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2xpc3RlbmVycycgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2NvbmZpZycgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2hhbmRsZXInICYmXG4gICAgLy8gICAgICAgICAgICAgICAgIHByb3BlcnR5ICE9ICdmaXRUb1BhcmVudCcpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy9wcm9wc1twcm9wZXJ0eV0gPSBwcm9wZXJ0eVtwcm9wXTtcbiAgICAvLyAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZygnaGVyZT8/JylcbiAgICAvLyAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhwcm9wZXJ0eSlcbiAgICAvLyAgICAgICAgICAgICAgICAgLy9vW3Byb3BlcnR5XSA9IGZpbHRlclByb3AodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpLCBwcm9wZXJ0eSwgdGhpcyk7XG4gICAgLy8gICAgICAgICAgICAgICAgIG9bcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICAvLyBlbHNlIHtcbiAgICAvLyAgICAgICAgICAgICAvLyAgICAgb1twcm9wZXJ0eV0gPSBmaWx0ZXJQcm9wKHRoaXMuZ2V0QXR0cmlidXRlKHByb3BlcnR5KSk7XG4gICAgLy8gICAgICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgfVxuXG4gICAgLy8gICAgICAgICAvLyBpZiAoIWxpc3RlbmVyc1Byb3ZpZGVkKSB7XG4gICAgLy8gICAgICAgICAvLyAgICAgby5saXN0ZW5lcnMgPSB7fTtcbiAgICAvLyAgICAgICAgIC8vICAgICB2YXIgbWUgPSB0aGlzO1xuICAgIC8vICAgICAgICAgLy8gICAgIHRoaXMuZXZlbnRzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50LCBpbmRleCwgYXJyYXkpIHtcbiAgICAvLyAgICAgICAgIC8vICAgICAgICAgbWUuc2V0RXZlbnQoZXZlbnQsbyxtZSlcbiAgICAvLyAgICAgICAgIC8vICAgICB9KVxuICAgIC8vICAgICAgICAgLy8gfVxuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuQS5vID0gbztcbiAgICAvLyAgICAgLy9jb25zb2xlLmxvZyhvKVxuICAgIC8vIH1cblxuICAgIGJhc2VPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9wZXJ0eVZhbCA9ICcnO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsID0gdmFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wTmFtZSwgcHJvcGVydHlWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFzZU9uRGVzdHJveSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2LnJlbW92ZUNoaWxkKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRvU3RyaW5nKCkpXG4gICAgICB9XG4gICAgfVxufVxuXG5cbiJdfQ==