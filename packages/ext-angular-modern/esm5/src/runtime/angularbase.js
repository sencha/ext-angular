import { __decorate } from "tslib";
import { EventEmitter, ContentChildren } from '@angular/core';
import { doAngularXTemplate } from '../overrides/AngularXTemplate';
import { doAngularCell } from '../overrides/AngularCell';
var Ext = window['Ext'];
var EngBase = /** @class */ (function () {
    function EngBase(eRef, hostComponent, properties, events, eventnames, vc) {
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
    Object.defineProperty(EngBase.prototype, "childComponents", {
        //@ViewChildren(EngBase) _viewchildComponents: QueryList<EngBase>;
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
    };
    EngBase.prototype.baseAfterViewInit = function () {
        var me = this;
        this._extitems.toArray().forEach(function (item) {
            //me.node.newDiv.appendChild(Ext.get(item.nativeElement).dom);
            me.node.newDiv.appendChild(item.nativeElement);
        });
    };
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
    __decorate([
        ContentChildren('extitem')
    ], EngBase.prototype, "_extitems", void 0);
    __decorate([
        ContentChildren(EngBase)
    ], EngBase.prototype, "_childComponents", void 0);
    return EngBase;
}());
export { EngBase };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLW1vZGVybi8iLCJzb3VyY2VzIjpbInNyYy9ydW50aW1lL2FuZ3VsYXJiYXNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0gsWUFBWSxFQUVaLGVBQWUsRUFJaEIsTUFBTSxlQUFlLENBQUM7QUFDekIsT0FBTyxFQUFFLGtCQUFrQixFQUFFLE1BQU0sK0JBQStCLENBQUM7QUFDbkUsT0FBTyxFQUFFLGFBQWEsRUFBRSxNQUFNLDBCQUEwQixDQUFDO0FBQ3pELElBQU0sR0FBRyxHQUFHLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUUxQjtJQTZCSSxpQkFDSSxJQUFTLEVBQ1QsYUFBa0IsRUFDbEIsVUFBVSxFQUNWLE1BQU0sRUFDTixVQUFVLEVBQ1YsRUFBRztRQUVILElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUMvQixJQUFJLENBQUMsVUFBVSxHQUFHLGFBQWEsQ0FBQztRQUNoQyxJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixJQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQztRQUM3QixlQUFlO1FBRWYsSUFBSSxFQUFFLEdBQUcsSUFBSSxDQUFDO1FBQ2QsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsVUFBVSxTQUFTO1lBQ3ZDLElBQUksU0FBUyxJQUFJLFFBQVEsRUFBRTtnQkFDekIsRUFBRSxDQUFDLFNBQVMsQ0FBQyxHQUFHLElBQUksWUFBWSxFQUFFLENBQUM7YUFDcEM7UUFDTCxDQUFDLENBQUMsQ0FBQTtRQUVGLElBQUksQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFDO1FBQ1osSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLLEdBQUcsRUFBRSxDQUFBO1FBQ2pCLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDO1FBRXBCLElBQUksTUFBTSxDQUFDLFlBQVks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QzVDLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLE1BQU0sQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztpQkFDM0Q7YUFDRjtTQUNGO1FBQ0QsT0FBTSxDQUFDLEVBQUU7WUFDUCxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFBO1NBQzFCO0lBQ0gsQ0FBQztJQTlJMkI7UUFBM0IsZUFBZSxDQUFDLFNBQVMsQ0FBQzs4Q0FBMkI7SUFDNUI7UUFBekIsZUFBZSxDQUFDLE9BQU8sQ0FBQztxREFBc0M7SUE4SW5FLGNBQUM7Q0FBQSxBQXBLRCxJQW9LQztTQXBLWSxPQUFPIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgICBFdmVudEVtaXR0ZXIsXG4gICAgQ29udGVudENoaWxkLFxuICAgIENvbnRlbnRDaGlsZHJlbixcbiAgICBWaWV3Q2hpbGRyZW4sXG4gICAgUXVlcnlMaXN0LFxuICAgIFNpbXBsZUNoYW5nZXNcbiAgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IGRvQW5ndWxhclhUZW1wbGF0ZSB9IGZyb20gJy4uL292ZXJyaWRlcy9Bbmd1bGFyWFRlbXBsYXRlJztcbmltcG9ydCB7IGRvQW5ndWxhckNlbGwgfSBmcm9tICcuLi9vdmVycmlkZXMvQW5ndWxhckNlbGwnO1xuY29uc3QgRXh0ID0gd2luZG93WydFeHQnXTtcblxuZXhwb3J0IGNsYXNzIEVuZ0Jhc2Uge1xuICAgIC8vc3RhdGljIHJvb3ROb2RlOiBhbnkgPSBudWxsO1xuICAgIC8vcHVibGljIGV4dDogYW55XG4gICAgLy9uZXdEaXY6IGFueVxuICAgIHh0eXBlOiBhbnlcbiAgICBwcm9wZXJ0aWVzOiBhbnlcbiAgICBBOiBhbnk7XG4gICAgbm9kZTogYW55XG4gICAgcGFyZW50Tm9kZTogYW55XG4gICAgYmFzZTogYW55XG4gICAgLy9ub2RlTmFtZTogYW55XG4gICAgLy9ld2NDaGlsZHJlbjogYW55XG4gICAgLy9yYXdDaGlsZHJlbjogYW55XG4gICAgLy9oYXNQYXJlbnQ6IGFueVxuICAgIC8vcGFyZW50VHlwZTogYW55XG4gICAgLy9jaGlsZHJlbjogYW55XG4gICAgLy9sYXN0OiBhbnlcbiAgICAvL3B1YmxpYyB2YzogYW55O1xuICAgIGV2ZW50bmFtZXM6IGFueTtcblxuICAgIC8vQENvbnRlbnRDaGlsZCgnZXh0aXRlbScseyBzdGF0aWMgOiBmYWxzZSB9KSBfZXh0aXRlbTogYW55O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oJ2V4dGl0ZW0nKSBfZXh0aXRlbXM6IFF1ZXJ5TGlzdDxhbnk+O1xuICAgIEBDb250ZW50Q2hpbGRyZW4oRW5nQmFzZSkgX2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIC8vQFZpZXdDaGlsZHJlbihFbmdCYXNlKSBfdmlld2NoaWxkQ29tcG9uZW50czogUXVlcnlMaXN0PEVuZ0Jhc2U+O1xuICAgIGdldCBjaGlsZENvbXBvbmVudHMoKTogRW5nQmFzZVtdIHtcbiAgICAgICAgaWYgKHRoaXMuX2NoaWxkQ29tcG9uZW50cyA9PSB1bmRlZmluZWQpIHsgcmV0dXJuIFtdfVxuICAgICAgICByZXR1cm4gdGhpcy5fY2hpbGRDb21wb25lbnRzLmZpbHRlcihpdGVtID0+IGl0ZW0gIT09IHRoaXMpO1xuICAgIH1cblxuICAgIGNvbnN0cnVjdG9yIChcbiAgICAgICAgZVJlZjogYW55LFxuICAgICAgICBob3N0Q29tcG9uZW50OiBhbnksXG4gICAgICAgIHByb3BlcnRpZXMsXG4gICAgICAgIGV2ZW50cyxcbiAgICAgICAgZXZlbnRuYW1lcyxcbiAgICAgICAgdmM/XG4gICAgKSB7XG4gICAgICAgIHRoaXMubm9kZSA9IGVSZWYubmF0aXZlRWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXJlbnROb2RlID0gaG9zdENvbXBvbmVudDtcbiAgICAgICAgdGhpcy5wcm9wZXJ0aWVzID0gcHJvcGVydGllcztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzID0gZXZlbnRuYW1lcztcbiAgICAgICAgLy90aGlzLnZjID0gdmM7XG5cbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5ldmVudG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50bmFtZSkge1xuICAgICAgICAgICAgaWYgKGV2ZW50bmFtZSAhPSBcImxheW91dFwiKSB7XG4gICAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG5cbiAgICAgICAgdGhpcy5BID0ge307XG4gICAgICAgIHRoaXMuQS5wcm9wcyA9IHt9XG4gICAgICAgIHRoaXMuYmFzZSA9IEVuZ0Jhc2U7XG5cbiAgICAgICAgaWYgKHdpbmRvd1snRXh0QW5ndWxhciddID09IG51bGwpIHtcbiAgICAgICAgICB3aW5kb3dbJ0V4dEFuZ3VsYXInXSA9ICdsb2FkZWQnXG4gICAgICAgICAgZG9Bbmd1bGFyWFRlbXBsYXRlKCk7XG4gICAgICAgICAgaWYgKEV4dC5pc01vZGVybiA9PSB0cnVlKSB7XG4gICAgICAgICAgICBkb0FuZ3VsYXJDZWxsKCk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgYmFzZU9uSW5pdCgpIHtcbiAgICAgIC8vY29uc29sZS5sb2coJ2Jhc2VPbkluaXQnKVxuICAgICAgdGhpcy5ub2RlLm5ld0RpdiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2V4dC0nICsgdGhpcy54dHlwZSk7XG5cbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eSA9IHRoaXMucHJvcGVydGllc1tpXTtcbiAgICAgICAgaWYgKHRoaXNbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIGlmIChwcm9wZXJ0eSAhPSAnZnVsbHNjcmVlbicgJiYgcHJvcGVydHkgIT0gJ3h0eXBlJykge1xuICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LmF0dHJpYnV0ZU9iamVjdHNbcHJvcGVydHldID0gdGhpc1twcm9wZXJ0eV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cblxuXG5cblxuICAgICAgLy8gZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLnByb3BlcnRpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIC8vICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XG4gICAgICAvLyAgICAgaWYgKHRoaXNbcHJvcGVydHldICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIC8vICAgICAgICAgaWYgKHByb3BlcnR5ICE9ICdmdWxsc2NyZWVuJyAmJiBwcm9wZXJ0eSAhPSAneHR5cGUnKSB7XG4gICAgICAvLyAgICAgICAgICAgICBpZiAodHlwZW9mIHRoaXNbcHJvcGVydHldID09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldXG4gICAgICAvLyAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCAnZnVuY3Rpb24nKTtcbiAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgIC8vICAgICAgICAgICAgIGVsc2UgaWYgKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSA9PSAnb2JqZWN0Jykge1xuICAgICAgLy8gICAgICAgICAgICAgICB2YXIgc1Byb3BWYWwgPSAnJ1xuICAgICAgLy8gICAgICAgICAgICAgICB0cnkge1xuICAgICAgLy8gICAgICAgICAgICAgICAgIHNQcm9wVmFsID0gSlNPTi5zdHJpbmdpZnkodGhpc1twcm9wZXJ0eV0pXG4gICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHNQcm9wVmFsKTtcbiAgICAgIC8vICAgICAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICAgICAgICBjYXRjaChlKSB7XG4gICAgICAvLyAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCAnb2JqZWN0Jyk7XG4gICAgICAvLyAgICAgICAgICAgICAgIH1cbiAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgIC8vICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgLy8gICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgdGhpc1twcm9wZXJ0eV0pO1xuICAgICAgLy8gICAgICAgICAgICAgfVxuICAgICAgLy8gICAgICAgICB9XG4gICAgICAvLyAgICAgfVxuICAgICAgLy8gfVxuXG4gICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgbWUubm9kZS5uZXdEaXYuZG9DcmVhdGVFeHRDb21wb25lbnQoKVxuXG4gICAgICB0aGlzLmV2ZW50bmFtZXMuZm9yRWFjaChmdW5jdGlvbiAoZXZlbnRuYW1lKSB7XG4gICAgICAgICAgbWUubm9kZS5uZXdEaXYuYWRkRXZlbnRMaXN0ZW5lcihldmVudG5hbWUsIGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgICBpZiAobWVbZXZlbnRuYW1lXSAhPSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGlmIChldmVudG5hbWUgIT0gJ2xheW91dCcpIHtcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2coZXZlbnRuYW1lKVxuICAgICAgICAgICAgICAgICAgLy9jb25zb2xlLmxvZyhtZVtldmVudG5hbWVdKVxuICAgICAgICAgICAgICAgICAgbWVbZXZlbnRuYW1lXS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vbWVbZXZlbnRuYW1lXS5lbWl0KGV2ZW50LmRldGFpbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICB9KTtcbiAgICAgIH0pO1xuICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlLm5vZGVOYW1lLnN1YnN0cmluZygwLCAzKSAhPT0gJ0VYVCcpIHtcbiAgICAgICAgICB0aGlzLm5vZGUuYWZ0ZXIodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICB9XG4gICAgICBlbHNlIHtcbiAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICB9XG4gIH1cblxuICAgIGJhc2VBZnRlclZpZXdJbml0KCkge1xuICAgICAgICB2YXIgbWUgPSB0aGlzO1xuICAgICAgICB0aGlzLl9leHRpdGVtcy50b0FycmF5KCkuZm9yRWFjaCggaXRlbSA9PiB7XG4gICAgICAgICAgICAvL21lLm5vZGUubmV3RGl2LmFwcGVuZENoaWxkKEV4dC5nZXQoaXRlbS5uYXRpdmVFbGVtZW50KS5kb20pO1xuICAgICAgICAgICAgbWUubm9kZS5uZXdEaXYuYXBwZW5kQ2hpbGQoaXRlbS5uYXRpdmVFbGVtZW50KTtcbiAgICAgICAgfSlcbiAgICB9XG5cbiAgICBiYXNlT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICAgICAgZm9yIChsZXQgcHJvcE5hbWUgaW4gY2hhbmdlcykge1xuICAgICAgICAgICAgbGV0IHZhbCA9IGNoYW5nZXNbcHJvcE5hbWVdLmN1cnJlbnRWYWx1ZTtcbiAgICAgICAgICAgIGlmICh0aGlzLm5vZGUubmV3RGl2ICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICB2YXIgcHJvcGVydHlWYWwgPSAnJztcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiB2YWwgPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbCA9IHZhbDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBwcm9wZXJ0eVZhbCA9IEpTT04uc3RyaW5naWZ5KHZhbCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcE5hbWUsIHByb3BlcnR5VmFsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhc2VPbkRlc3Ryb3koKSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAodGhpcy5ub2RlLnBhcmVudE5vZGUgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlLm5ld0RpdiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHRoaXMubm9kZS5wYXJlbnROb2RlLm5ld0Rpdi5yZW1vdmVDaGlsZCh0aGlzLm5vZGUubmV3RGl2KTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGNhdGNoKGUpIHtcbiAgICAgICAgY29uc29sZS5sb2coZS50b1N0cmluZygpKVxuICAgICAgfVxuICAgIH1cbn1cblxuXG4iXX0=