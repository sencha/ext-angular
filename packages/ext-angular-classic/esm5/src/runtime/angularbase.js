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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5ndWxhcmJhc2UuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9Ac2VuY2hhL2V4dC1hbmd1bGFyLWNsYXNzaWMvIiwic291cmNlcyI6WyJzcmMvcnVudGltZS9hbmd1bGFyYmFzZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUNILFlBQVksRUFFWixlQUFlLEVBSWhCLE1BQU0sZUFBZSxDQUFDO0FBQ3pCLE9BQU8sRUFBRSxrQkFBa0IsRUFBRSxNQUFNLCtCQUErQixDQUFDO0FBQ25FLE9BQU8sRUFBRSxhQUFhLEVBQUUsTUFBTSwwQkFBMEIsQ0FBQztBQUN6RCxJQUFNLEdBQUcsR0FBRyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7QUFFMUI7SUE2QkksaUJBQ0ksSUFBUyxFQUNULGFBQWtCLEVBQ2xCLFVBQVUsRUFDVixNQUFNLEVBQ04sVUFBVSxFQUNWLEVBQUc7UUFFSCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxhQUFhLENBQUM7UUFDL0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxhQUFhLENBQUM7UUFDaEMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUM7UUFDN0IsZUFBZTtRQUVmLElBQUksRUFBRSxHQUFHLElBQUksQ0FBQztRQUNkLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLFVBQVUsU0FBUztZQUN2QyxJQUFJLFNBQVMsSUFBSSxRQUFRLEVBQUU7Z0JBQ3pCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLFlBQVksRUFBRSxDQUFDO2FBQ3BDO1FBQ0wsQ0FBQyxDQUFDLENBQUE7UUFFRixJQUFJLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNaLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxHQUFHLEVBQUUsQ0FBQTtRQUNqQixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQztRQUVwQixJQUFJLE1BQU0sQ0FBQyxZQUFZ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QUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUM7aUJBQzNEO2FBQ0Y7U0FDRjtRQUNELE9BQU0sQ0FBQyxFQUFFO1lBQ1AsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQTtTQUMxQjtJQUNILENBQUM7SUE5STJCO1FBQTNCLGVBQWUsQ0FBQyxTQUFTLENBQUM7OENBQTJCO0lBQzVCO1FBQXpCLGVBQWUsQ0FBQyxPQUFPLENBQUM7cURBQXNDO0lBOEluRSxjQUFDO0NBQUEsQUFwS0QsSUFvS0M7U0FwS1ksT0FBTyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gICAgRXZlbnRFbWl0dGVyLFxuICAgIENvbnRlbnRDaGlsZCxcbiAgICBDb250ZW50Q2hpbGRyZW4sXG4gICAgVmlld0NoaWxkcmVuLFxuICAgIFF1ZXJ5TGlzdCxcbiAgICBTaW1wbGVDaGFuZ2VzXG4gIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBkb0FuZ3VsYXJYVGVtcGxhdGUgfSBmcm9tICcuLi9vdmVycmlkZXMvQW5ndWxhclhUZW1wbGF0ZSc7XG5pbXBvcnQgeyBkb0FuZ3VsYXJDZWxsIH0gZnJvbSAnLi4vb3ZlcnJpZGVzL0FuZ3VsYXJDZWxsJztcbmNvbnN0IEV4dCA9IHdpbmRvd1snRXh0J107XG5cbmV4cG9ydCBjbGFzcyBFbmdCYXNlIHtcbiAgICAvL3N0YXRpYyByb290Tm9kZTogYW55ID0gbnVsbDtcbiAgICAvL3B1YmxpYyBleHQ6IGFueVxuICAgIC8vbmV3RGl2OiBhbnlcbiAgICB4dHlwZTogYW55XG4gICAgcHJvcGVydGllczogYW55XG4gICAgQTogYW55O1xuICAgIG5vZGU6IGFueVxuICAgIHBhcmVudE5vZGU6IGFueVxuICAgIGJhc2U6IGFueVxuICAgIC8vbm9kZU5hbWU6IGFueVxuICAgIC8vZXdjQ2hpbGRyZW46IGFueVxuICAgIC8vcmF3Q2hpbGRyZW46IGFueVxuICAgIC8vaGFzUGFyZW50OiBhbnlcbiAgICAvL3BhcmVudFR5cGU6IGFueVxuICAgIC8vY2hpbGRyZW46IGFueVxuICAgIC8vbGFzdDogYW55XG4gICAgLy9wdWJsaWMgdmM6IGFueTtcbiAgICBldmVudG5hbWVzOiBhbnk7XG5cbiAgICAvL0BDb250ZW50Q2hpbGQoJ2V4dGl0ZW0nLHsgc3RhdGljIDogZmFsc2UgfSkgX2V4dGl0ZW06IGFueTtcbiAgICBAQ29udGVudENoaWxkcmVuKCdleHRpdGVtJykgX2V4dGl0ZW1zOiBRdWVyeUxpc3Q8YW55PjtcbiAgICBAQ29udGVudENoaWxkcmVuKEVuZ0Jhc2UpIF9jaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICAvL0BWaWV3Q2hpbGRyZW4oRW5nQmFzZSkgX3ZpZXdjaGlsZENvbXBvbmVudHM6IFF1ZXJ5TGlzdDxFbmdCYXNlPjtcbiAgICBnZXQgY2hpbGRDb21wb25lbnRzKCk6IEVuZ0Jhc2VbXSB7XG4gICAgICAgIGlmICh0aGlzLl9jaGlsZENvbXBvbmVudHMgPT0gdW5kZWZpbmVkKSB7IHJldHVybiBbXX1cbiAgICAgICAgcmV0dXJuIHRoaXMuX2NoaWxkQ29tcG9uZW50cy5maWx0ZXIoaXRlbSA9PiBpdGVtICE9PSB0aGlzKTtcbiAgICB9XG5cbiAgICBjb25zdHJ1Y3RvciAoXG4gICAgICAgIGVSZWY6IGFueSxcbiAgICAgICAgaG9zdENvbXBvbmVudDogYW55LFxuICAgICAgICBwcm9wZXJ0aWVzLFxuICAgICAgICBldmVudHMsXG4gICAgICAgIGV2ZW50bmFtZXMsXG4gICAgICAgIHZjP1xuICAgICkge1xuICAgICAgICB0aGlzLm5vZGUgPSBlUmVmLm5hdGl2ZUVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFyZW50Tm9kZSA9IGhvc3RDb21wb25lbnQ7XG4gICAgICAgIHRoaXMucHJvcGVydGllcyA9IHByb3BlcnRpZXM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcyA9IGV2ZW50bmFtZXM7XG4gICAgICAgIC8vdGhpcy52YyA9IHZjO1xuXG4gICAgICAgIHZhciBtZSA9IHRoaXM7XG4gICAgICAgIHRoaXMuZXZlbnRuYW1lcy5mb3JFYWNoKGZ1bmN0aW9uIChldmVudG5hbWUpIHtcbiAgICAgICAgICAgIGlmIChldmVudG5hbWUgIT0gXCJsYXlvdXRcIikge1xuICAgICAgICAgICAgICBtZVtldmVudG5hbWVdID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgICAgIHRoaXMuQSA9IHt9O1xuICAgICAgICB0aGlzLkEucHJvcHMgPSB7fVxuICAgICAgICB0aGlzLmJhc2UgPSBFbmdCYXNlO1xuXG4gICAgICAgIGlmICh3aW5kb3dbJ0V4dEFuZ3VsYXInXSA9PSBudWxsKSB7XG4gICAgICAgICAgd2luZG93WydFeHRBbmd1bGFyJ10gPSAnbG9hZGVkJ1xuICAgICAgICAgIGRvQW5ndWxhclhUZW1wbGF0ZSgpO1xuICAgICAgICAgIGlmIChFeHQuaXNNb2Rlcm4gPT0gdHJ1ZSkge1xuICAgICAgICAgICAgZG9Bbmd1bGFyQ2VsbCgpO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cblxuICAgIGJhc2VPbkluaXQoKSB7XG4gICAgICAvL2NvbnNvbGUubG9nKCdiYXNlT25Jbml0JylcbiAgICAgIHRoaXMubm9kZS5uZXdEaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdleHQtJyArIHRoaXMueHR5cGUpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMucHJvcGVydGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgcHJvcGVydHkgPSB0aGlzLnByb3BlcnRpZXNbaV07XG4gICAgICAgIGlmICh0aGlzW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBpZiAocHJvcGVydHkgIT0gJ2Z1bGxzY3JlZW4nICYmIHByb3BlcnR5ICE9ICd4dHlwZScpIHtcbiAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5hdHRyaWJ1dGVPYmplY3RzW3Byb3BlcnR5XSA9IHRoaXNbcHJvcGVydHldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG5cblxuXG5cbiAgICAgIC8vIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5wcm9wZXJ0aWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAvLyAgICAgdmFyIHByb3BlcnR5ID0gdGhpcy5wcm9wZXJ0aWVzW2ldO1xuICAgICAgLy8gICAgIGlmICh0aGlzW3Byb3BlcnR5XSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAvLyAgICAgICAgIGlmIChwcm9wZXJ0eSAhPSAnZnVsbHNjcmVlbicgJiYgcHJvcGVydHkgIT0gJ3h0eXBlJykge1xuICAgICAgLy8gICAgICAgICAgICAgaWYgKHR5cGVvZiB0aGlzW3Byb3BlcnR5XSA9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAvLyAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuYXR0cmlidXRlT2JqZWN0c1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XVxuICAgICAgLy8gICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgJ2Z1bmN0aW9uJyk7XG4gICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAvLyAgICAgICAgICAgICBlbHNlIGlmICh0eXBlb2YgdGhpc1twcm9wZXJ0eV0gPT0gJ29iamVjdCcpIHtcbiAgICAgIC8vICAgICAgICAgICAgICAgdmFyIHNQcm9wVmFsID0gJydcbiAgICAgIC8vICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgIC8vICAgICAgICAgICAgICAgICBzUHJvcFZhbCA9IEpTT04uc3RyaW5naWZ5KHRoaXNbcHJvcGVydHldKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BlcnR5LCBzUHJvcFZhbCk7XG4gICAgICAvLyAgICAgICAgICAgICAgIH1cbiAgICAgIC8vICAgICAgICAgICAgICAgY2F0Y2goZSkge1xuICAgICAgLy8gICAgICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuYXR0cmlidXRlT2JqZWN0c1twcm9wZXJ0eV0gPSB0aGlzW3Byb3BlcnR5XTtcbiAgICAgIC8vICAgICAgICAgICAgICAgICB0aGlzLm5vZGUubmV3RGl2LnNldEF0dHJpYnV0ZShwcm9wZXJ0eSwgJ29iamVjdCcpO1xuICAgICAgLy8gICAgICAgICAgICAgICB9XG4gICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAvLyAgICAgICAgICAgICBlbHNlIHtcbiAgICAgIC8vICAgICAgICAgICAgICAgdGhpcy5ub2RlLm5ld0Rpdi5zZXRBdHRyaWJ1dGUocHJvcGVydHksIHRoaXNbcHJvcGVydHldKTtcbiAgICAgIC8vICAgICAgICAgICAgIH1cbiAgICAgIC8vICAgICAgICAgfVxuICAgICAgLy8gICAgIH1cbiAgICAgIC8vIH1cblxuICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgIG1lLm5vZGUubmV3RGl2LmRvQ3JlYXRlRXh0Q29tcG9uZW50KClcblxuICAgICAgdGhpcy5ldmVudG5hbWVzLmZvckVhY2goZnVuY3Rpb24gKGV2ZW50bmFtZSkge1xuICAgICAgICAgIG1lLm5vZGUubmV3RGl2LmFkZEV2ZW50TGlzdGVuZXIoZXZlbnRuYW1lLCBmdW5jdGlvbiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgaWYgKG1lW2V2ZW50bmFtZV0gIT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBpZiAoZXZlbnRuYW1lICE9ICdsYXlvdXQnKSB7XG4gICAgICAgICAgICAgICAgICAvL2NvbnNvbGUubG9nKGV2ZW50bmFtZSlcbiAgICAgICAgICAgICAgICAgIC8vY29uc29sZS5sb2cobWVbZXZlbnRuYW1lXSlcbiAgICAgICAgICAgICAgICAgIG1lW2V2ZW50bmFtZV0uZW1pdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvL21lW2V2ZW50bmFtZV0uZW1pdChldmVudC5kZXRhaWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5ub2RlTmFtZS5zdWJzdHJpbmcoMCwgMykgIT09ICdFWFQnKSB7XG4gICAgICAgICAgdGhpcy5ub2RlLmFmdGVyKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgfVxuICAgICAgZWxzZSB7XG4gICAgICAgICAgdGhpcy5ub2RlLnBhcmVudE5vZGUubmV3RGl2LmFwcGVuZENoaWxkKHRoaXMubm9kZS5uZXdEaXYpO1xuICAgICAgfVxuICB9XG5cbiAgICBiYXNlQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICAgICAgdmFyIG1lID0gdGhpcztcbiAgICAgICAgdGhpcy5fZXh0aXRlbXMudG9BcnJheSgpLmZvckVhY2goIGl0ZW0gPT4ge1xuICAgICAgICAgICAgLy9tZS5ub2RlLm5ld0Rpdi5hcHBlbmRDaGlsZChFeHQuZ2V0KGl0ZW0ubmF0aXZlRWxlbWVudCkuZG9tKTtcbiAgICAgICAgICAgIG1lLm5vZGUubmV3RGl2LmFwcGVuZENoaWxkKGl0ZW0ubmF0aXZlRWxlbWVudCk7XG4gICAgICAgIH0pXG4gICAgfVxuXG4gICAgYmFzZU9uQ2hhbmdlcyhjaGFuZ2VzOiBTaW1wbGVDaGFuZ2VzKSB7XG4gICAgICAgIGZvciAobGV0IHByb3BOYW1lIGluIGNoYW5nZXMpIHtcbiAgICAgICAgICAgIGxldCB2YWwgPSBjaGFuZ2VzW3Byb3BOYW1lXS5jdXJyZW50VmFsdWU7XG4gICAgICAgICAgICBpZiAodGhpcy5ub2RlLm5ld0RpdiAhPSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgdmFyIHByb3BlcnR5VmFsID0gJyc7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsID09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWwgPSB2YWw7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcHJvcGVydHlWYWwgPSBKU09OLnN0cmluZ2lmeSh2YWwpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRoaXMubm9kZS5uZXdEaXYuc2V0QXR0cmlidXRlKHByb3BOYW1lLCBwcm9wZXJ0eVZhbCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICBiYXNlT25EZXN0cm95KCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKHRoaXMubm9kZS5wYXJlbnROb2RlICE9IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICh0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYgIT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICB0aGlzLm5vZGUucGFyZW50Tm9kZS5uZXdEaXYucmVtb3ZlQ2hpbGQodGhpcy5ub2RlLm5ld0Rpdik7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICBjYXRjaChlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGUudG9TdHJpbmcoKSlcbiAgICAgIH1cbiAgICB9XG59XG5cblxuIl19