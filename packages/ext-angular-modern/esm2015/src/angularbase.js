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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9hbmd1bGFyYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFlBQVksRUFDWixZQUFZLEVBQ1osZUFBZSxFQUNmLFlBQVksRUFHYixNQUFNLGVBQWUsQ0FBQztBQUN6QixNQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFMUIsTUFBTSxPQUFPLE9BQU87SUE4QmhCLFlBQ0ksSUFBUyxFQUNULGFBQWtCLEVBQ2xCLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLEVBQUc7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsdUJBQXVCO1FBQ3ZCLElBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDO1FBQzdCLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBRWIsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ3ZDLHdCQUF3QjtZQUN4Qiw2Q0FBNkM7WUFDN0MsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUE7UUFDdEMsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztJQUN4QixDQUFDO0lBOUJELElBQUksZUFBZTtRQUNmLElBQUksSUFBSSxDQUFDLGdCQUFnQixJQUFJLFNB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LENBQUMsUUFBUSxFQUFFLFdBQVcsQ0FBQyxDQUFDO2FBQ3REO1NBQ0o7SUFDTCxDQUFDO0lBRUQsYUFBYTtRQUNYLElBQUk7WUFDRixJQUFJLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLFNBQVMsRUFBRTtnQkFDckMsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLElBQUksU0FBUyxFQUFFO29CQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtRQUNELE9BQU0sQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUMxQjtJQUNILENBQUM7Q0FDSjtBQTFQK0M7SUFBM0MsWUFBWSxDQUFDLFNBQVMsRUFBQyxFQUFFLE1BQU0sRUFBRyxLQUFLLEVBQUUsQ0FBQzt5Q0FBZTtBQUM5QjtJQUEzQixlQUFlLENBQUMsU0FBUyxDQUFDOzBDQUEyQjtBQUM1QjtJQUF6QixlQUFlLENBQUMsT0FBTyxDQUFDO2lEQUFzQztBQUN4QztJQUF0QixZQUFZLENBQUMsT0FBTyxDQUFDO3FEQUEwQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBTaW1wbGVDaGFuZ2VzXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5jb25zdCBFeHQgPSB3aW5kb3dbJ0V4dCddO1xuXG5leHBvcnQgY2xhc3MgRW5nQmFzZSB7XG4gICAgLy9zdGF0aWMgcm9vdE5vZGU6IGFueSA9IG51bGw7XG4gICAgcHVibGljIGV4dDogYW55XG4gICAgbmV3RGl2OiBhbnlcbiAgICB4dHlwZTogYW55XG4gICAgcHJvcGVydGllczogYW55XG4gICAgLy9ldmVudHM6IGFueVxuICAgIEE6IGFueTtcbiAgICBub2RlOiBhbnlcbiAgICBwYXJlbnROb2RlOiBhbnlcbiAgICBiYXNlOiBhbnlcbiAgICBub2RlTmFtZTogYW55XG4gICAgZXdjQ2hpbGRyZW46IGFueVxuICAgIHJhd0NoaWxkcmVuOiBhbnlcbiAgICBoYXNQYXJlbnQ6IGFueVxuICAgIHBhcmVudFR5cGU6IGFueVxuICAgIGNoaWxkcmVuOiBhbnlcbiAgICBsYXN0OiBhbnlcbiAgICBwdWJsaWMgdmM6IGFueTtcbiAgICBldmVudG5hbWVzOiBhbnk7XG5cbiAgICBAQ29udGVudENoaWxkKCdleHRpdGVtJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRpdGVtOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZHJlbignZXh0aXRlbScpIF9leHRpdGVtczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZHJlbihFbmdCYXNlKSBfY2hpbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW5nQmFzZT47XG4gICAgQFZpZXdDaGlsZHJlbihFbmdCYXNlKSBfdmlld2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIGdldCBjaGlsZENvbXBvbmVudHMoKTogRW5nQmFzZVtdIHtcbiAgICAgICAgaWYgKHRoaXMuX2NoaWxkQ29tcG9uZW50cyA9PSB1bmRlZmluZWQpIHsgcmV0dXJuIFtdfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRDb21wb25lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgZVJlZjogYW55LFxuICAgICAgICBob3N0Q29tcG9uZW50OiBhbnksXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIGV2ZW50cyxcbiAgICAgICAgZXZlbnRuYW1lcyxcbiAgICAgICAgdmM/XG4gICAgKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGVSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gaG9zdENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgLy90aGlzLmV2ZW50cyA9IGV2ZW50cztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzID0gZXZlbnRuYW1lcztcbiAgICAgICAgdGhpcy52YyA9IHZjO1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnRuYW1lKVxuICAgICAgICAgICAgLy8oPGFueT50aGlzKVtldmVudG5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgICAgICBtZVtldmVudG5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpXG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5BID0ge307XG4gICAgICAgIHRoaXMuQS5wcm9wcyA9IHt9XG4gICAgICAgIHRoaXMuYmFzZSA9IEVuZ0Jhc2U7XG4gICAgfVxuXG4gICAgYmFzZU9uSW5pdCgpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ2Jhc2VPbkluaXQnKVxuICAgICAgdGhpcy5ub2RlLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2V4dC0nICsgdGhpcy54dHlwZSk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgIHZhciBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgICAgICBpZiAodGhpc1twcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICBpZiAocHJvcGVydHkgIT0gJ2Z1bGxzY3JlZW4nICYmIHByb3BlcnR5ICE9ICd4dHlwZScpIHtcbiAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LmF0dHJpYnV0ZU9iamVjdHNbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksICdmdW5jdGlvbicpO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXNbcHJvcGVydHldID09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzUHJvcFZhbCA9ICcnXG4gICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgc1Byb3BWYWwgPSBKU09OLnN0cmluZ2lmeSh0aGlzW3Byb3BlcnR5XSlcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgc1Byb3BWYWwpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LmF0dHJpYnV0ZU9iamVjdHNbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksICdvYmplY3QnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB0aGlzW3Byb3BlcnR5XSk7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgdGhpcy5ldmVudG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50bmFtZSkge1xuICAgICAgICAgIG1lLm5vZGUubmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgLy9tZVtldmVudG5hbWVdLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgaWYgKG1lW2V2ZW50bmFtZV0gIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZS5zdWJzdHJpbmcoMCwgMykgIT09ICdFWFQnKSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50IG5vdCBleHQnKVxuICAgICAgICAgIC8vdGhpcy5ub2RlLnBhcmVudE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5uZXdEaXYpO1xuICAgICAgICAgIHRoaXMubm9kZS5hZnRlcih0aGlzLm5vZGUubmV3RGl2KTtcbiAgICAgICAgICAvL0VuZ0Jhc2Uucm9vdE5vZGUgPSB0aGlzLm5ld0RpdlxuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgLy9jb25zb2xlLmxvZygncGFyZW50IGlzIGV4dCcpXG4gICAgICAgICAgLy9jb25zb2xlLmRpcih0aGlzKVxuICAgICAgICAgIC8vY29uc29sZS5kaXIoRW5nQmFzZS5yb290Tm9kZSlcbiAgICAgICAgICAvL3RoaXMucGFyZW50Tm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQodGhpcy5uZXdEaXYpO1xuICAgICAgICAgIC8vdGhpcy5ub2RlLnBhcmVudE5vZGUubmV4dFNpYmxpbmcuYXBwZW5kQ2hpbGQodGhpcy5uZXdEaXYpO1xuICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLm5ld0Rpdi5hcHBlbmRDaGlsZCh0aGlzLm5vZGUubmV3RGl2KTtcbiAgICAgICAgICAvL0VuZ0Jhc2Uucm9vdE5vZGUuYXBwZW5kQ2hpbGQodGhpcy5uZXdEaXYpO1xuICAgICAgfVxuICAgICAgLy8gY29uc29sZS5sb2codGhpcy52YylcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudClcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudC5wYXJlbnROb2RlKVxuICAgICAgLy8gaWYgKHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudC5wYXJlbnROb2RlICE9IG51bGwpIHtcbiAgICAgIC8vICAgICBjb25zb2xlLmxvZygncmVtb3ZpbmcnKVxuICAgICAgLy8gICAgIHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHRoaXMudmMuX2RhdGEucmVuZGVyRWxlbWVudClcbiAgICAgIC8vIH1cbiAgICAgIC8vdGhpcy5ub2RlLmluc2VydEFkamFjZW50RWxlbWVudCgnYmVmb3JlYmVnaW4nLCB0aGlzLm5ld0Rpdik7XG4gIH1cblxuICAgIGJhc2VBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuXG4gICAgICAgIGlmKHRoaXMubm9kZS5pbm5lckhUTUwubGVuZ3RoID4gMCkge1xuICAgICAgICAgIGlmKHRoaXMubm9kZS5pbm5lckhUTUwuY2hhckF0KDApICE9ICc8Jykge1xuICAgICAgICAgICAgY29uc29sZS53YXJuKCd1c2UgYSBkaXYgYXJvdW50IHRleHQnKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5ub2RlLm5ld0Rpdi5BLmV4dClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUuZGlyKHRoaXMubm9kZS5jaGlsZE5vZGVzKVxuICAgICAgICAgICAgLy8gY29uc29sZS5kaXIodGhpcy5ub2RlLmNoaWxkTm9kZXMuaXRlbSgwKSlcbiAgICAgICAgICAgIC8vIC8vdmFyIGVsID0gdGhpcy5ub2RlLmNoaWxkTm9kZXMuaXRlbSgwKTtcbiAgICAgICAgICAgIC8vIC8vY29uc29sZS5sb2coZWwpXG4gICAgICAgICAgICAvLyB2YXIgdyA9IEV4dC5jcmVhdGUoe3h0eXBlOid3aWRnZXQnLCBlbGVtZW50OiB0aGlzLm5vZGUuY2hpbGROb2Rlcy5pdGVtKDApfSk7XG4gICAgICAgICAgICAvLyB0aGlzLm5vZGUubmV3RGl2LkEuZXh0LmFkZCh3KVxuICAgICAgICAgIH1cbiAgICAgICAgICBlbHNlIGlmICh0aGlzLm5vZGUuaW5uZXJIVE1MLnN1YnN0cmluZygwLCA0KSAhPSAnPGV4dCcgJiZcbiAgICAgICAgICAgIHRoaXMubm9kZS5pbm5lckhUTUwuc3Vic3RyaW5nKDAsIDQpICE9ICc8IS0tJyAmJlxuICAgICAgICAgICAgdGhpcy5ub2RlLmlubmVySFRNTC5zdWJzdHJpbmcoMCwgNCkgIT0gJzxyb3UnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgdmFyIGVsID0gRXh0LmdldCh0aGlzLm5vZGUuY2hpbGROb2Rlcy5pdGVtKDApKTtcbiAgICAgICAgICAgIHZhciB3ID0gRXh0LmNyZWF0ZSh7eHR5cGU6J3dpZGdldCcsIGVsZW1lbnQ6IGVsfSk7XG4gICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LkEuZXh0LmFkZCh3KVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRoaXMuX2V4dGl0ZW1zLnRvQXJyYXkoKS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIC8vY29uc29sZS5sb2coaXRlbS5uYXRpdmVFbGVtZW50KVxuICAgICAgICAgICAgLy92YXIgZWwgPSBFeHQuZ2V0KGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgICAgICBtZS5ub2RlLm5ld0Rpdi5hcHBlbmRDaGlsZChFeHQuZ2V0KGl0ZW0ubmF0aXZlRWxlbWVudCkuZG9tKTtcbiAgICAgICAgfSlcblxuXG5cblxuICAgICAgICAvLyAvL2NvbnNvbGUubG9nKHRoaXMueHR5cGUpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5jaGlsZENvbXBvbmVudHMpXG4gICAgICAgIC8vIC8vY29uc29sZS5sb2codGhpcy5fdmlld2NoaWxkQ29tcG9uZW50cylcbiAgICAgICAgLy8gLy9jb25zb2xlLmxvZyh0aGlzLl9leHRpdGVtcylcblxuICAgICAgICAvLyBpZiAodGhpcy5fZXh0aXRlbXMgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIC8vICAgICBpZiAodGhpcy5fZXh0aXRlbXMubGVuZ3RoID09IDEpIHtcblxuXG4gICAgICAgIC8vICAgICAgICAgLy8gdmFyIHJvdXRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3JvdXRlci1vdXRsZXQnKTtcbiAgICAgICAgLy8gICAgICAgICAvLyByb3V0ZXIuc2V0QXR0cmlidXRlKCdpZCcsICdyb3V0ZScpO1xuICAgICAgICAvLyAgICAgICAgIC8vIHRoaXMubmV3RGl2LmFwcGVuZENoaWxkKHJvdXRlcik7XG5cbiAgICAgICAgLy8gICAgICAgICB2YXIgZWwgPSBFeHQuZ2V0KHRoaXMuX2V4dGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIC8vICAgICAgICAgY29uc29sZS5kaXIodGhpcylcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmRpcihlbClcbiAgICAgICAgLy8gICAgICAgICBjb25zb2xlLmxvZyh0aGlzLm5ld0RpdilcbiAgICAgICAgLy8gICAgICAgICAvL3ZhciB3aWRnZXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArICd3aWRnZXQnKTtcbiAgICAgICAgLy8gICAgICAgICAvL3dpZGdldFsnZWxlbWVudCddID0gZWw7XG4gICAgICAgIC8vICAgICAgICAgLy93aWRnZXQuc2V0QXR0cmlidXRlKCdlbGVtZW50JywgZWwpO1xuICAgICAgICAvLyAgICAgICAgIC8vdmFyIHdpZGdldCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2V4dC0nICsgJ3BhbmVsJyk7XG4gICAgICAgIC8vICAgICAgICAgLy93aWRnZXQuc2V0QXR0cmlidXRlKCd0aXRsZScsICdoaScpO1xuICAgICAgICAvLyAgICAgICAgIHRoaXMubmV3RGl2LmFwcGVuZENoaWxkKGVsLmRvbSk7XG4gICAgICAgIC8vICAgICAgICAgLy90aGlzLm5vZGUuYWZ0ZXIoZWwpXG5cbiAgICAgICAgLy8gICAgICAgICAvL2NvbnNvbGUuZGlyKGVsKVxuICAgICAgICAvLyAgICAgICAgIC8vdmFyIHcgPSBFeHQuY3JlYXRlKHt4dHlwZTond2lkZ2V0JywgZWxlbWVudDogZWx9KTtcbiAgICAgICAgLy8gICAgICAgICAvL3RoaXMuYWRkVGhlQ2hpbGQoQS5leHQsIHcsIG51bGwpO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyB9XG5cbiAgICB9XG5cbiAgICAvLyBuZXdDcmVhdGVQcm9wcyhwcm9wZXJ0aWVzKSB7XG4gICAgLy8gICAgIC8vY29uc29sZS5sb2coJ3N0b3JlIHByb3AnKVxuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKHRoaXMuc3RvcmUpXG4gICAgLy8gICAgIGxldCBsaXN0ZW5lcnNQcm92aWRlZCA9IGZhbHNlO1xuICAgIC8vICAgICB2YXIgbyA9IHt9O1xuICAgIC8vICAgICBvWyd4dHlwZSddID0gdGhpcy54dHlwZTtcblxuICAgIC8vICAgICBpZiAodGhpc1snY29uZmlnJ10gIT09IHt9KSB7XG4gICAgLy8gICAgICAgICBFeHQuYXBwbHkobywgdGhpc1snY29uZmlnJ10pO1xuICAgIC8vICAgICB9XG5cbiAgICAvLyAgICAgaWYgKHRydWUgPT09IHRoaXNbJ2ZpdFRvUGFyZW50J10pIHtcbiAgICAvLyAgICAgICAgIG9bJ2hlaWdodCddPScxMDAlJ1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgIC8vICAgICAgICAgdmFyIHByb3BlcnR5ID0gcHJvcGVydGllc1tpXVxuICAgIC8vICAgICAgICAgLy9pZiAodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpICE9PSBudWxsKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpc1twcm9wZXJ0eV0gIT09IG51bGwpIHtcblxuICAgIC8vICAgICAgICAgICAgIGlmIChwcm9wZXJ0eSA9PSAnaGFuZGxlcicpIHtcbiAgICAvLyAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAvLyAgICAgICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgICAgICAvLyBlbHNlIGlmICgob1sneHR5cGUnXSA9PT0gJ2NhcnRlc2lhbicgfHwgb1sneHR5cGUnXSA9PT0gJ3BvbGFyJykgJiYgcHJvcGVydHkgPT09ICdsYXlvdXQnKSB7XG4gICAgLy8gICAgICAgICAgICAgLy8gfVxuICAgIC8vICAgICAgICAgICAgIGVsc2UgaWYgKHByb3BlcnR5ID09ICdsaXN0ZW5lcnMnICYmIHRoaXNbcHJvcGVydHldICE9IHVuZGVmaW5lZCkge1xuICAgIC8vICAgICAgICAgICAgICAgICBvW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgIC8vICAgICAgICAgICAgICAgICBsaXN0ZW5lcnNQcm92aWRlZCA9IHRydWU7XG4gICAgLy8gICAgICAgICAgICAgfVxuICAgIC8vICAgICAgICAgICAgIGVsc2UgaWYgKHRoaXNbcHJvcGVydHldICE9IHVuZGVmaW5lZCAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnbGlzdGVuZXJzJyAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnY29uZmlnJyAmJlxuICAgIC8vICAgICAgICAgICAgICAgICBwcm9wZXJ0eSAhPSAnaGFuZGxlcicgJiZcbiAgICAvLyAgICAgICAgICAgICAgICAgcHJvcGVydHkgIT0gJ2ZpdFRvUGFyZW50Jykge1xuICAgIC8vICAgICAgICAgICAgICAgICAvL3Byb3BzW3Byb3BlcnR5XSA9IHByb3BlcnR5W3Byb3BdO1xuICAgIC8vICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKCdoZXJlPz8nKVxuICAgIC8vICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKHByb3BlcnR5KVxuICAgIC8vICAgICAgICAgICAgICAgICAvL29bcHJvcGVydHldID0gZmlsdGVyUHJvcCh0aGlzLmdldEF0dHJpYnV0ZShwcm9wZXJ0eSksIHByb3BlcnR5LCB0aGlzKTtcbiAgICAvLyAgICAgICAgICAgICAgICAgb1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgIC8vICAgICAgICAgICAgIH1cblxuICAgIC8vICAgICAgICAgICAgIC8vIGVsc2Uge1xuICAgIC8vICAgICAgICAgICAgIC8vICAgICBvW3Byb3BlcnR5XSA9IGZpbHRlclByb3AodGhpcy5nZXRBdHRyaWJ1dGUocHJvcGVydHkpKTtcbiAgICAvLyAgICAgICAgICAgICAvLyB9XG4gICAgLy8gICAgICAgICB9XG5cbiAgICAvLyAgICAgICAgIC8vIGlmICghbGlzdGVuZXJzUHJvdmlkZWQpIHtcbiAgICAvLyAgICAgICAgIC8vICAgICBvLmxpc3RlbmVycyA9IHt9O1xuICAgIC8vICAgICAgICAgLy8gICAgIHZhciBtZSA9IHRoaXM7XG4gICAgLy8gICAgICAgICAvLyAgICAgdGhpcy5ldmVudHMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnQsIGluZGV4LCBhcnJheSkge1xuICAgIC8vICAgICAgICAgLy8gICAgICAgICBtZS5zZXRFdmVudChldmVudCxvLG1lKVxuICAgIC8vICAgICAgICAgLy8gICAgIH0pXG4gICAgLy8gICAgICAgICAvLyB9XG4gICAgLy8gICAgIH1cbiAgICAvLyAgICAgdGhpcy5BLm8gPSBvO1xuICAgIC8vICAgICAvL2NvbnNvbGUubG9nKG8pXG4gICAgLy8gfVxuXG4gICAgYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5ld0RpdiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFyIHByb3BlcnR5VmFsID0gJyc7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWwgPSB2YWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BOYW1lLCBwcm9wZXJ0eVZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYXNlT25EZXN0cm95KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSlcbiAgICAgIH1cbiAgICB9XG59XG5cblxuIl19