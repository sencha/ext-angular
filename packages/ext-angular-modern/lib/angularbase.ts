import {
    EventEmitter,
    ContentChild,
    ContentChildren,
    ViewChildren,
    QueryList,
    SimpleChanges
  } from '@angular/core';
const Ext = window['Ext'];

export class EngBase {
    //static rootNode: any = null;
    public ext: any
    newDiv: any
    xtype: any
    properties: any
    //events: any
    A: any;
    node: any
    parentNode: any
    base: any
    nodeName: any
    ewcChildren: any
    rawChildren: any
    hasParent: any
    parentType: any
    children: any
    last: any
    public vc: any;
    eventnames: any;

    @ContentChild('extitem',{ static : false }) _extitem: any;
    @ContentChildren('extitem') _extitems: QueryList<any>;
    @ContentChildren(EngBase) _childComponents: QueryList<EngBase>;
    @ViewChildren(EngBase) _viewchildComponents: QueryList<EngBase>;
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
        this.properties = properties;
        //this.events = events;
        this.eventnames = eventnames;
        this.vc = vc;

        var me = this;
        this.eventnames.forEach(function (eventname) {
            //console.log(eventname)
            //(<any>this)[eventname] = new EventEmitter()
            me[eventname] = new EventEmitter()
        })

        this.A = {};
        this.A.props = {}
        this.base = EngBase;
    }

    baseOnInit() {
      //console.log('baseOnInit')
      this.node.newDiv = document.createElement('ext-' + this.xtype);
      for (var i = 0; i < this.properties.length; i++) {
          var property = this.properties[i];
          if (this[property] !== undefined) {
              if (property != 'fullscreen' && property != 'xtype') {
                  if (typeof this[property] == 'function') {
                    this.node.newDiv.attributeObjects[property] = this[property]
                    this.node.newDiv.setAttribute(property, 'function');
                  }
                  else if (typeof this[property] == 'object') {
                    var sPropVal = ''
                    try {
                      sPropVal = JSON.stringify(this[property])
                      this.node.newDiv.setAttribute(property, sPropVal);
                    }
                    catch(e) {
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

        if(this.node.innerHTML.length > 0) {
          if(this.node.innerHTML.charAt(0) != '<') {
            console.warn('use a div arount text')
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
            this.node.innerHTML.substring(0, 4) != '<rou')
            {
            var el = Ext.get(this.node.childNodes.item(0));
            var w = Ext.create({xtype:'widget', element: el});
            this.node.newDiv.A.ext.add(w)
          }
        }

        this._extitems.toArray().forEach( item => {
            //console.log(item.nativeElement)
            //var el = Ext.get(item.nativeElement);
            me.node.newDiv.appendChild(Ext.get(item.nativeElement).dom);
        })




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


