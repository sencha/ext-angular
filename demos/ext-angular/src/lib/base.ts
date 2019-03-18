declare var Ext: any
import {
  Host,
  Optional,
  SkipSelf,
  ElementRef,
  EventEmitter,
  ContentChild,
  ContentChildren,
  ViewChildren,
  QueryList,
  SimpleChanges
} from '@angular/core'

export class base {
  public ext: any
  private _nativeElement: any
  private _hostComponent: any
  private _extChildren: any = false
  private q: QueryList<any>

  constructor(
    nativeElement: any,
    private metaData: any,
    public hostComponent : base
  ) {
    this.q = null
    this._nativeElement = nativeElement
    this._hostComponent = hostComponent

    metaData.EVENTNAMES.forEach( (event: any, n: any) => {
      if (event != 'fullscreen') {
        (<any>this)[event] = new EventEmitter()
      }
      else {
        (<any>this)[event + 'event'] = new EventEmitter()
      }
    })
  }

  baseOnInit(metaData: any) {
    //console.log(`ngOnInit: ${metaData.XTYPE}`)
    let me: any = this
    let o: any = {}
    o.xtype = metaData.XTYPE
    let listneresProvided = false
    for (var i = 0; i < me.metaData.PROPERTIES.length; i++) { 
      var prop = me.metaData.PROPERTIES[i];
      if (prop == 'handler') {
        if (me[prop] != undefined) {
          o[prop] = me[prop]
        }
      }
      //need to handle listeners coming in here
      if ((o.xtype === 'cartesian' || o.xtype === 'polar') && prop === 'layout') {
      }
      else if(prop == 'listeners' && me[prop] != undefined) {
        o[prop] = me[prop];
        listneresProvided = true;
      } 
      else {
        if (me[prop] != undefined && 
            prop != 'listeners' && 
            prop != 'config' && 
            prop != 'handler' && 
            prop != 'fitToParent') { 
          o[prop] = me[prop]; 
        }
      }
    }

    if (true === me.fitToParent) {
      o.top=0, 
      o.left=0, 
      o.width='100%', 
      o.height='100%'
    }
    if (me.config !== {} ) {
      Ext.apply(o, me.config);
    }

    if(!listneresProvided) {
      o.listeners = {}
      var EVENTS = metaData.EVENTS
      EVENTS.forEach(function (event: any, index: any, array: any) {
        let eventname: any = event.name
        let eventparameters: any = event.parameters
        o.listeners[eventname] = function() {
          let parameters: any = eventparameters
          let parms = parameters.split(',')
          let args = Array.prototype.slice.call(arguments)
          let emitparms: any = {}
          for (let i = 0, j = parms.length; i < j; i++ ) {
            emitparms[parms[i]] = args[i];
          }
          me[eventname].emit(emitparms)
        }
      })
    }

    if (this._nativeElement.parentElement != null) {
      o.renderTo = this._nativeElement
    }
    this.ext = Ext.create(o)
  }

  @ContentChild('extroute') _extroute: any;
  @ContentChildren('extroute') _extroutes: QueryList<any>;
  @ContentChild('extitem') _extitem: any;
  @ContentChildren('extitem') _extitems: QueryList<any>;
  baseAfterContentInit() {
    if (this._extitems.length == 1) {
        if (this._hostComponent != null) {
          this.ext.setHtml(this._extitem.nativeElement)
        }
    }
    if (this._extroutes.length == 1) {
      this.ext.setHtml(this._extroute.nativeElement)
    }
    if(this._hostComponent != null) {
      var parentCmp = this._hostComponent.ext
      var childCmp = this.ext
      this.addTheChild(parentCmp,childCmp)
    }
    this['ready'].emit(this)
  }

  addTheChild(parentCmp, childCmp) {
    var parentxtype = parentCmp.xtype
    var childxtype = childCmp.xtype

    if (this.ext.initialConfig.align != undefined) {
      if (parentxtype != 'titlebar' && parentxtype != 'grid' && parentxtype != 'button') {
        console.error('Can only use align property if parent is a Titlebar or Grid or Button')
        return
      }
    }
    if (parentxtype === 'grid' || parentxtype === 'lockedgrid') {
      if (childxtype === 'column' || childxtype === 'treecolumn' || childxtype === 'textcolumn' || childxtype === 'checkcolumn' || childxtype === 'datecolumn' || childxtype === 'rownumberer' || childxtype === 'numbercolumn' || childxtype === 'booleancolumn' ) {
        parentCmp.addColumn(childCmp)
        return
      }
      else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
        if (parentCmp.getHideHeaders() === false) {
          //var j = parentCmp.items.items.length;
          parentCmp.insert(1, childCmp);
          return
        }
        else {
          parentCmp.add(childCmp);
          return
        }
      }
      else {
        console.log('unhandled else in addTheChild')
        console.log(parentxtype)
        console.log(childxtype)
      }
    } 
    if (childxtype === 'tooltip') {
      parentCmp.setTooltip(childCmp)
      return
    } 
    if (childxtype === 'plugin') {
      parentCmp.setPlugin(childCmp)
      return
    } 
    else if (parentxtype === 'button') {
      if (childxtype === 'menu') {
        parentCmp.setMenu(childCmp)
        return
      } else {
        console.log('child not added')
      }
    } 
    if (childxtype === 'toolbar' && Ext.isClassic === true) {
      parentCmp.addDockedItems(childCmp)
      return
    } 
    else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
      if (parentCmp.getHideHeaders() === false) {
        //var j: any = parentCmp.items.items.length
        //parentCmp.insert(j - 1, childCmp)
        parentCmp.insert(1, childCmp)
        return
      } else {
        parentCmp.add(childCmp)
        return
      }
    } 
     if (parentCmp.add != undefined) {
      parentCmp.add(childCmp)
      return
    }
    console.log('child not added')
  }

  ngOnChanges(changes: SimpleChanges) {
    //console.log(`ngOnChanges`)
    //console.log(changes)
    let changesMsgs: string[] = []
    for (let propName in changes) {
      let verb = ''
      if (changes[propName].firstChange === true) {
        verb = 'initialized'
      }
      else {
        verb = 'changed'
      }
      let val = changes[propName].currentValue
      if (this.ext != undefined) {
        var capPropName = propName.charAt(0).toUpperCase() + propName.slice(1)
        var setFunction = 'set' + capPropName
        if (this.ext[setFunction] != undefined) {
          this.ext[setFunction](val)
        }
        else {
          console.error(setFunction + ' not found for ' + this.ext.xtype)
        }
      }
      else {
        if (verb == 'changed') {
          console.log('change needed and ext not defined')
        }
      }
      changesMsgs.push(`${propName} ${verb} to "${val}"`)
    }
    //console.log(`OnChanges: ${changesMsgs.join('; ')}`)
  }

  ngOnDestroy() {
    var childCmp
    var parentCmp
    try {
      childCmp = this.ext
      if (this._hostComponent != null) {
        parentCmp = this._hostComponent.ext
        if(parentCmp.xtype == 'button' && childCmp.xtype == 'menu') {
          //console.log('button/menu not deleted')
        }
        else if (parentCmp.xtype == 'carousel') {
          //console.log('carousel parent not deleted')
        }
        else if (parentCmp.xtype == 'grid' && childCmp.xtype == 'column') {
          //console.log('grid/column not deleted')
          //console.log(childCmp)
        }
        else if (parentCmp.xtype == 'segmentedbutton' && childCmp.xtype == 'button') {
          //console.log('segmentedbutton/button not deleted')
        }
        else if (parentCmp.xtype == 'button' && childCmp.xtype == 'tooltip') {
          //console.log('button/tooltip not deleted')
        }
        else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'button') {
          //console.log('titlebar/button not deleted')
        }
        else if (parentCmp.xtype == 'titlebar' && childCmp.xtype == 'searchfield') {
          //console.log('titlebar/searchfield not deleted')
        }
        else {
          parentCmp.remove([childCmp])
          childCmp.destroy()
        }
      }
      else {
        if (childCmp != undefined) {
          childCmp.destroy()
        }
        else {
          console.log('no destroy')
        }
      }
    }
    catch(e) {
      console.error(e)
      console.log('*****')
      console.log(parentCmp)
      console.log(childCmp)
      console.log('*****')
    }
  }

  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngDoCheck() {console.log(`DoCheck`)}
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngAfterContentChecked() { console.log(`AfterContentChecked`) }
  //ngAfterViewInit() { console.log(`AfterViewInit`) }
  // Beware! Called frequently!
  // Called in every change detection cycle anywhere on the page
  //ngAfterViewChecked() { console.log(`AfterViewChecked`) }


//    metaData.EVENTS.forEach( (event: any, n: any) => {
//      if (event.name != 'fullscreen') {
//        (<any>this)[event.name] = new EventEmitter()
//      }
//      else {
//        (<any>this)[event.name + 'event'] = new EventEmitter()
//      }
//    })

//    let f = this.ngOnDestroy;
//    this.ngOnDestroy = () => {
//      f();
//      this.unsubscribeAll();
//    };

  //private subscriptions: Subscription[] = [];

//    protected safeSubscription (sub: Subscription): Subscription {
//        this.subscriptions.push(sub);
//        return sub;
//    }
 
//    private unsubscribeAll() {
//        this.subscriptions.forEach(element => {
//            !element.isUnsubscribed && element.unsubscribe();
//        });
//    }

}