class ExtBase extends HTMLElement {

  constructor() {
    super()
//    this._prevProps = {}
  }

  static get observedAttributes() {
    var attrs = []
    for (var property in this.PROPERTIESOBJECT) {
      if (this.PROPERTIESOBJECT.hasOwnProperty(property)) {
        if(this.getAttribute(property) !== null) {
          attrs.push(property)
        }
      }
    }
    this.EVENTS().forEach(function (eventparameter, index, array) {
      attrs.push('on'+eventparameter.name)
    })
    return attrs
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    if (/^on/.test(attr)) {
      if (newVal) {
        this.addEventListener(attr.slice(2), function() {eval(newVal)});
      } else {
        //delete this[attr];
        //this.removeEventListener(attr.slice(2), this);
      }
    } else {
      // if(attr == 'config' && newVal != null && this._config == undefined) {
      // 	this._config = newVal
      // }
      if (this.ext === undefined) {
        this.connectedCallback()
      }
      else {
        var method = 'set' + attr[0].toUpperCase() + attr.substring(1)
        this.ext[method](newVal)
      }
    }
  }

  setEvent(eventparameters,o,me) {
    o.listeners[eventparameters.name] = function() {
      let eventname = eventparameters.name
      let parameters = eventparameters.parameters;
      let parms = parameters.split(',');
      let args = Array.prototype.slice.call(arguments);
      let event = {};
      for (let i = 0, j = parms.length; i < j; i++ ) {
        event[parms[i]] = args[i];
      }
      me.dispatchEvent(new CustomEvent(eventname,{detail: event}))
    }
  }

  connectedCallback() {
    //console.dir(this)
    //var nodeName = this.nodeName
    var nodeParentName = this.parentNode.nodeName
    //console.dir(nodeName + ' ,parent: ' + nodeParentName)
    var parentCmp = this.parentNode['ext']
    var childCmp;
    var me = this
    var props = {}
    props.xtype = me.XTYPE
    setTimeout(function(){ 
      for (var property in me.PROPERTIESOBJECT) {
        if (me.PROPERTIESOBJECT.hasOwnProperty(property)) {
          if(me.getAttribute(property) !== null) {
            try {
              props[property] = JSON.parse(me[property])
            }
            catch(e) {
              props[property] =  me[property]
            }
          }
        }
      }
  
      props.listeners = {}
      me.EVENTS.forEach(function (eventparameter, index, array) {
        me.setEvent(eventparameter,props,me)
      })
      if (nodeParentName == 'APP-ROOT') {
        Ext.onReady(function(){
          props.renderTo = me.parentNode
          me.ext = Ext.create(props)
          me.dispatchEvent(new CustomEvent('ready',{detail:{cmp: me.ext}}))
        });
        return
      }
  
      if (nodeParentName == 'BODY') {
        Ext.application({
          name: 'MyExtWCApp',
          launch: function () {
            //console.log('\nXTYPE: ' + props.xtype)
            //console.log('parent: ' + nodeParentName)
            me.ext = Ext.create(props)
            //console.log(`launch: Ext.create(${props.xtype})`)
            me.dispatchEvent(new CustomEvent('ready',{detail:{cmp: me.ext}}))
            if (nodeParentName == 'BODY') {
              //console.log(`Ext.Viewport.add(${me.ext.xtype})`)
              Ext.Viewport.add([me.ext])
            }
          }
        });
      }
      else {
        Ext.onReady(function(){
          //console.log('\nXTYPE: ' + props.xtype)
          //console.log('parent: ' + nodeParentName)
          if(nodeParentName.substring(0, 3) != 'EXT') {
            props.renderTo = me.parentNode
            //console.dir(me.parentNode)
          }

          me.ext = Ext.create(props)
          //console.log(`Ext.create(${props.xtype})`)
          me.dispatchEvent(new CustomEvent('ready',{detail:{cmp: me.ext}}))

          if (nodeParentName.substring(0, 3) == 'EXT') {
            parentCmp = me.parentNode['ext'];
            childCmp = me.ext;
            me.addTheChild(parentCmp, childCmp)
          }


          setTimeout(function() { 
            var i = 0
            var removeItems = []
            for (let item of me.children) {
              //if (item.nodeName.substring(0, 3) != "EXT" && item.nodeName != "#text") {
              if (item.nodeName.substring(0, 3) != "EXT") {
                var cln = item.cloneNode(true);
                var el = Ext.get(cln);
                me.ext.insert(i,{xtype:'widget', element:el});
                //console.log(`${me.ext.xtype}.insert(${i},widget,${cln.nodeName}) ${cln.outerHTML}`)
                removeItems.push(item)
              }
              else {
              }
              i++;
            }
            for (let item of removeItems) {
              item.remove(); 
              //console.log(`${item.nodeName}.remove() ${item.outerHTML}`)
            }
          }, 50);
        });
      }
    }, 50);
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
        console.log(`${parentCmp.xtype}.addColumn(${childCmp.xtype})`)
        return
      }
      else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
        if (parentCmp.getHideHeaders() === false) {
          parentCmp.insert(1, childCmp);
          //console.log('**')
          return
        }
        else {
          parentCmp.add(childCmp);
          //console.log('**')
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
      //console.log('**')
      return
    } 
    if (childxtype === 'plugin') {
      parentCmp.setPlugin(childCmp)
      //console.log('**')
      return
    } 
    else if (parentxtype === 'button') {
      if (childxtype === 'menu') {
        parentCmp.setMenu(childCmp)
        //console.log('**')
        return
      } else {
        console.log('child not added')
      }
    } 
    if (childxtype === 'toolbar' && Ext.isClassic === true) {
      parentCmp.addDockedItems(childCmp)
      //console.log('**')
      return
    } 
    else if ((childxtype === 'toolbar' || childxtype === 'titlebar') && parentCmp.getHideHeaders != undefined) {
      if (parentCmp.getHideHeaders() === false) {
        parentCmp.insert(1, childCmp)
        //console.log('**')
        return
      } else {
        parentCmp.add(childCmp)
        //console.log(`${parentCmp.xtype}.add(${childCmp.xtype})`)
        return
      }
    } 
      if (parentCmp.add != undefined) {
      parentCmp.add(childCmp)
      //console.log(`${parentCmp.xtype}.add(${childCmp.xtype})`)
      return
    }
    console.log('child not added')
  }

  disconnectedCallback() {
    console.log('ExtBase disconnectedCallback ' + this.ext.xtype)
    delete this.ext
  }
}
