import { __decorate } from "tslib";
import { EventEmitter, ContentChildren } from '@angular/core';
import { doAngularXTemplate } from '../overrides/AngularXTemplate';
import { doAngularCell } from '../overrides/AngularCell';
const Ext = window['Ext'];
export class EngBase {
    constructor(eRef, hostComponent, properties, events, eventnames, vc) {
        this.node = eRef.nativeElement;
        this.parentNode = hostComponent;
        this.properties = properties;
        this.eventnames = eventnames;
        //this.vc = vc;
        var me = this;
        this.eventnames.forEach(function (eventname) {
            if (eventname != "layout") {
                me[eventname] = new EventEmitter();
            }
        });
        this.A = {};
        this.A.props = {};
        this.base = EngBase;
        if (window['ExtAngular'] == null) {
            window['ExtAngular'] = 'loaded';
            doAngularXTemplate();
            if (Ext.isModern == true) {
                doAngularCell();
            }
        }
    }
    //@ViewChildren(EngBase) _viewchildComponents: QueryList<EngBase>;
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
                    this.node.newDiv.attributeObjects[property] = this[property];
                }
            }
        }
        // for (var i = 0; i < this.properties.length; i++) {
        //     var property = this.properties[i];
        //     if (this[property] !== undefined) {
        //         if (property != 'fullscreen' && property != 'xtype') {
        //             if (typeof this[property] == 'function') {
        //               this.node.newDiv.attributeObjects[property] = this[property]
        //               this.node.newDiv.setAttribute(property, 'function');
        //             }
        //             else if (typeof this[property] == 'object') {
        //               var sPropVal = ''
        //               try {
        //                 sPropVal = JSON.stringify(this[property])
        //                 this.node.newDiv.setAttribute(property, sPropVal);
        //               }
        //               catch(e) {
        //                 this.node.newDiv.attributeObjects[property] = this[property];
        //                 this.node.newDiv.setAttribute(property, 'object');
        //               }
        //             }
        //             else {
        //               this.node.newDiv.setAttribute(property, this[property]);
        //             }
        //         }
        //     }
        // }
        var me = this;
        me.node.newDiv.doCreateExtComponent();
        this.eventnames.forEach(function (eventname) {
            me.node.newDiv.addEventListener(eventname, function (event) {
                if (me[eventname] != false) {
                    if (eventname != 'layout') {
                        //console.log(eventname)
                        //console.log(me[eventname])
                        me[eventname].emit(event.detail);
                    }
                    //me[eventname].emit(event.detail);
                }
            });
        });
        if (this.node.parentNode.nodeName.substring(0, 3) !== 'EXT') {
            this.node.after(this.node.newDiv);
        }
        else {
            this.node.parentNode.newDiv.appendChild(this.node.newDiv);
        }
    }
    baseAfterViewInit() {
        var me = this;
        this._extitems.toArray().forEach(item => {
            //me.node.newDiv.appendChild(Ext.get(item.nativeElement).dom);
            me.node.newDiv.appendChild(item.nativeElement);
        });
    }
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
__decorate([
    ContentChildren('extitem')
], EngBase.prototype, "_extitems", void 0);
__decorate([
    ContentChildren(EngBase)
], EngBase.prototype, "_childComponents", void 0);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9ydW50aW1lL2FuZ3VsYXJiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsWUFBWSxFQUVaLGVBQWUsRUFJaEIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELE1BQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUxQixNQUFNLE9BQU8sT0FBTztJQTZCaEIsWUFDSSxJQUFTLEVBQ1QsYUFBa0IsRUFDbEIsVUFBVSxFQUNWLE1BQU0sRUFDTixVQUFVLEVBQ1YsRUFBRztRQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixlQUFlO1FBRWYsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ3ZDLElBQUksU0FBUyxJQUFJLFFBQVEsRUFBRTtnQkFDekIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7YUFDcEM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBRXBCLElBQUks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QUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtRQUNELE9BQU0sQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUMxQjtJQUNILENBQUM7Q0FDSjtBQS9JK0I7SUFBM0IsZUFBZSxDQUFDLFNBQVMsQ0FBQzswQ0FBMkI7QUFDNUI7SUFBekIsZUFBZSxDQUFDLE9BQU8sQ0FBQztpREFBc0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICAgIEV2ZW50RW1pdHRlcixcbiAgICBDb250ZW50Q2hpbGQsXG4gICAgQ29udGVudENoaWxkcmVuLFxuICAgIFZpZXdDaGlsZHJlbixcbiAgICBRdWVyeUxpc3QsXG4gICAgU2ltcGxlQ2hhbmdlc1xuICB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgZG9Bbmd1bGFyWFRlbXBsYXRlIH0gZnJvbSAnLi4vb3ZlcnJpZGVzL0FuZ3VsYXJYVGVtcGxhdGUnO1xuaW1wb3J0IHsgZG9Bbmd1bGFyQ2VsbCB9IGZyb20gJy4uL292ZXJyaWRlcy9Bbmd1bGFyQ2VsbCc7XG5jb25zdCBFeHQgPSB3aW5kb3dbJ0V4dCddO1xuXG5leHBvcnQgY2xhc3MgRW5nQmFzZSB7XG4gICAgLy9zdGF0aWMgcm9vdE5vZGU6IGFueSA9IG51bGw7XG4gICAgLy9wdWJsaWMgZXh0OiBhbnlcbiAgICAvL25ld0RpdjogYW55XG4gICAgeHR5cGU6IGFueVxuICAgIHByb3BlcnRpZXM6IGFueVxuICAgIEE6IGFueTtcbiAgICBub2RlOiBhbnlcbiAgICBwYXJlbnROb2RlOiBhbnlcbiAgICBiYXNlOiBhbnlcbiAgICAvL25vZGVOYW1lOiBhbnlcbiAgICAvL2V3Y0NoaWxkcmVuOiBhbnlcbiAgICAvL3Jhd0NoaWxkcmVuOiBhbnlcbiAgICAvL2hhc1BhcmVudDogYW55XG4gICAgLy9wYXJlbnRUeXBlOiBhbnlcbiAgICAvL2NoaWxkcmVuOiBhbnlcbiAgICAvL2xhc3Q6IGFueVxuICAgIC8vcHVibGljIHZjOiBhbnk7XG4gICAgZXZlbnRuYW1lczogYW55O1xuXG4gICAgLy9AQ29udGVudENoaWxkKCdleHRpdGVtJyx7IHN0YXRpYyA6IGZhbHNlIH0pIF9leHRpdGVtOiBhbnk7XG4gICAgQENvbnRlbnRDaGlsZHJlbignZXh0aXRlbScpIF9leHRpdGVtczogUXVlcnlMaXN0PGFueT47XG4gICAgQENvbnRlbnRDaGlsZHJlbihFbmdCYXNlKSBfY2hpbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW5nQmFzZT47XG4gICAgLy9AVmlld0NoaWxkcmVuKEVuZ0Jhc2UpIF92aWV3Y2hpbGRDb21wb25lbnRzOiBRdWVyeUxpc3Q8RW5nQmFzZT47XG4gICAgZ2V0IGNoaWxkQ29tcG9uZW50cygpOiBFbmdCYXNlW10ge1xuICAgICAgICBpZiAodGhpcy5fY2hpbGRDb21wb25lbnRzID09IHVuZGVmaW5lZCkgeyByZXR1cm4gW119XG4gICAgICAgIHJldHVybiB0aGlzLl9jaGlsZENvbXBvbmVudHMuZmlsdGVyKGl0ZW0gPT4gaXRlbSAhPT0gdGhpcyk7XG4gICAgfVxuXG4gICAgY29uc3RydWN0b3IgKFxuICAgICAgICBlUmVmOiBhbnksXG4gICAgICAgIGhvc3RDb21wb25lbnQ6IGFueSxcbiAgICAgICAgcHJvcGVydGllcyxcbiAgICAgICAgZXZlbnRzLFxuICAgICAgICBldmVudG5hbWVzLFxuICAgICAgICB2Yz9cbiAgICApIHtcbiAgICAgICAgdGhpcy5ub2RlID0gZVJlZi5uYXRpdmVFbGVtZW50O1xuICAgICAgICB0aGlzLnBhcmVudE5vZGUgPSBob3N0Q29tcG9uZW50O1xuICAgICAgICB0aGlzLnByb3BlcnRpZXMgPSBwcm9wZXJ0aWVzO1xuICAgICAgICB0aGlzLmV2ZW50bmFtZXMgPSBldmVudG5hbWVzO1xuICAgICAgICAvL3RoaXMudmMgPSB2YztcblxuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRuYW1lKSB7XG4gICAgICAgICAgICBpZiAoZXZlbnRuYW1lICE9IFwibGF5b3V0XCIpIHtcbiAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXSA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcblxuICAgICAgICB0aGlzLkEgPSB7fTtcbiAgICAgICAgdGhpcy5BLnByb3BzID0ge31cbiAgICAgICAgdGhpcy5iYXNlID0gRW5nQmFzZTtcblxuICAgICAgICBpZiAod2luZG93WydFeHRBbmd1bGFyJ10gPT0gbnVsbCkge1xuICAgICAgICAgIHdpbmRvd1snRXh0QW5ndWxhciddID0gJ2xvYWRlZCdcbiAgICAgICAgICBkb0FuZ3VsYXJYVGVtcGxhdGUoKTtcbiAgICAgICAgICBpZiAoRXh0LmlzTW9kZXJuID09IHRydWUpIHtcbiAgICAgICAgICAgIGRvQW5ndWxhckNlbGwoKTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYXNlT25Jbml0KCkge1xuICAgICAgLy9jb25zb2xlLmxvZygnYmFzZU9uSW5pdCcpXG4gICAgICB0aGlzLm5vZGUubmV3RGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZXh0LScgKyB0aGlzLnh0eXBlKTtcblxuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW2ldO1xuICAgICAgICBpZiAodGhpc1twcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgaWYgKHByb3BlcnR5ICE9ICdmdWxsc2NyZWVuJyAmJiBwcm9wZXJ0eSAhPSAneHR5cGUnKSB7XG4gICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuYXR0cmlidXRlT2JqZWN0c1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG5cblxuXG4gICAgICAvLyBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgLy8gICAgIHZhciBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgIC8vICAgICBpZiAodGhpc1twcm9wZXJ0eV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgLy8gICAgICAgICBpZiAocHJvcGVydHkgIT0gJ2Z1bGxzY3JlZW4nICYmIHByb3BlcnR5ICE9ICd4dHlwZScpIHtcbiAgICAgIC8vICAgICAgICAgICAgIGlmICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LmF0dHJpYnV0ZU9iamVjdHNbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV1cbiAgICAgIC8vICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksICdmdW5jdGlvbicpO1xuICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICAgICAgZWxzZSBpZiAodHlwZW9mIHRoaXNbcHJvcGVydHldID09ICdvYmplY3QnKSB7XG4gICAgICAvLyAgICAgICAgICAgICAgIHZhciBzUHJvcFZhbCA9ICcnXG4gICAgICAvLyAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAvLyAgICAgICAgICAgICAgICAgc1Byb3BWYWwgPSBKU09OLnN0cmluZ2lmeSh0aGlzW3Byb3BlcnR5XSlcbiAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgc1Byb3BWYWwpO1xuICAgICAgLy8gICAgICAgICAgICAgICB9XG4gICAgICAvLyAgICAgICAgICAgICAgIGNhdGNoKGUpIHtcbiAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LmF0dHJpYnV0ZU9iamVjdHNbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksICdvYmplY3QnKTtcbiAgICAgIC8vICAgICAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICAgICAgZWxzZSB7XG4gICAgICAvLyAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCB0aGlzW3Byb3BlcnR5XSk7XG4gICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAvLyAgICAgICAgIH1cbiAgICAgIC8vICAgICB9XG4gICAgICAvLyB9XG5cbiAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICBtZS5ub2RlLm5ld0Rpdi5kb0NyZWF0ZUV4dENvbXBvbmVudCgpXG5cbiAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcbiAgICAgICAgICBtZS5ub2RlLm5ld0Rpdi5hZGRFdmVudExpc3RlbmVyKGV2ZW50bmFtZSwgZnVuY3Rpb24gKGV2ZW50KSB7XG4gICAgICAgICAgICAgIGlmIChtZVtldmVudG5hbWVdICE9IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGV2ZW50bmFtZSAhPSAnbGF5b3V0Jykge1xuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhldmVudG5hbWUpXG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKG1lW2V2ZW50bmFtZV0pXG4gICAgICAgICAgICAgICAgICBtZVtldmVudG5hbWVdLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy9tZVtldmVudG5hbWVdLmVtaXQoZXZlbnQuZGV0YWlsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUubm9kZU5hbWUuc3Vic3RyaW5nKDAsIDMpICE9PSAnRVhUJykge1xuICAgICAgICAgIHRoaXMubm9kZS5hZnRlcih0aGlzLm5vZGUubmV3RGl2KTtcbiAgICAgIH1cbiAgICAgIGVsc2Uge1xuICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLm5ld0Rpdi5hcHBlbmRDaGlsZCh0aGlzLm5vZGUubmV3RGl2KTtcbiAgICAgIH1cbiAgfVxuXG4gICAgYmFzZUFmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuX2V4dGl0ZW1zLnRvQXJyYXkoKS5mb3JFYWNoKCBpdGVtID0+IHtcbiAgICAgICAgICAgIC8vbWUubm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQoRXh0LmdldChpdGVtLm5hdGl2ZUVsZW1lbnQpLmRvbSk7XG4gICAgICAgICAgICBtZS5ub2RlLm5ld0Rpdi5hcHBlbmRDaGlsZChpdGVtLm5hdGl2ZUVsZW1lbnQpO1xuICAgICAgICB9KVxuICAgIH1cblxuICAgIGJhc2VPbkNoYW5nZXMoY2hhbmdlczogU2ltcGxlQ2hhbmdlcykge1xuICAgICAgICBmb3IgKGxldCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgICAgICBsZXQgdmFsID0gY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlO1xuICAgICAgICAgICAgaWYgKHRoaXMubm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHZhciBwcm9wZXJ0eVZhbCA9ICcnO1xuICAgICAgICAgICAgICBpZiAodHlwZW9mIHZhbCA9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsID0gdmFsO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHByb3BlcnR5VmFsID0gSlNPTi5zdHJpbmdpZnkodmFsKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wTmFtZSwgcHJvcGVydHlWYWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFzZU9uRGVzdHJveSgpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZSAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2LnJlbW92ZUNoaWxkKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgY2F0Y2goZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhlLnRvU3RyaW5nKCkpXG4gICAgICB9XG4gICAgfVxufVxuXG5cbiJdfQ==