import {
    EventEmitter,
    ContentChild,
    ContentChildren,
    ViewChildren,
    QueryList,
    SimpleChanges
  } from '@angular/core';
//import { doAngularXTemplate } from '../overrides/AngularXTemplate';
//import { doAngularCell } from '../overrides/AngularCell';
const Ext = window['Ext'];

export class EngBase {
    xtype: any
    properties: any
    A: any;
    node: any
    parentNode: any
    base: any
    eventnames: any;

    @ContentChildren('extitem') _extitems: QueryList<any>;
    @ContentChildren(EngBase) _childComponents: QueryList<EngBase>;
    get childComponents(): EngBase[] {
        if (this._childComponents == undefined) { return []}
        return this._childComponents.filter(item => item !== this);
    }

    constructor (
        eRef: any,
        hostComponent: any,
        properties,
        events,
        eventnames,
        vc?
    ) {
        this.node = eRef.nativeElement;
        this.parentNode = hostComponent;

        const distinct = (value, index, self) => {
          return self.indexOf(value) === index;
        };
        this.properties = properties.filter(distinct);
        this.eventnames = eventnames.filter(distinct);

        var me = this;
        this.eventnames.forEach(function (eventname) {
            if (eventname != "layout") {
              me[eventname] = new EventEmitter();
            }
        })

        this.A = {};
        this.A.props = {}
        this.base = EngBase;

        if (window['ExtAngular'] == null) {
          window['ExtAngular'] = 'loaded'
          // doAngularXTemplate();
          // if (Ext.isModern == true) {
          //   doAngularCell();
          // }
        }
    }

    baseOnInit() {
      //console.log('baseOnInit')
      this.node.newDiv = document.createElement('ext-' + this.xtype);

      for (var i = 0; i < this.properties.length; i++) {
        var property = this.properties[i];
        if (this[property] !== undefined) {
          if (property == 'fullscreen' || property == 'xtype') {
            continue;
          }
          else if (typeof this[property] == 'function') {
            this.node.newDiv.setAttribute(property, 'function');
            this.node.newDiv.attributeObjects[property] = this[property];
          }
          else {
            this.node.newDiv.setAttribute(property, this[property]);
            this.node.newDiv.attributeObjects[property] = this[property];
            }
        }
      }
      this.node.newDiv.setAttribute('createExtComponentDefer', true);
      this.node.newDiv.attributeObjects['createExtComponentDefer'] = true;

      var me = this;
      this.eventnames.forEach(function (eventname) {
          me.node.newDiv.addEventListener(eventname, function (event) {
              if (me[eventname] != false) {
                if (eventname != 'layout') {
                  me[eventname].emit(event.detail);
                }
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
        this._extitems.toArray().forEach( item => {
            me.node.newDiv.appendChild(item.nativeElement);
        })
        me.node.newDiv.doCreateExtComponent();
    }

    baseOnChanges(changes: SimpleChanges) {
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
      catch(e) {
        console.log(e.toString())
      }
    }
}
