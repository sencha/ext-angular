class ExtBase extends HTMLElement {

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

  constructor() {
    super()
    this._prevProps = {}
  }

  attributeChangedCallback(attr, oldVal, newVal) {
    console.log('attributeChangedCallback (attr,oldVal,newVal)',attr,oldVal,newVal)
    if (/^on/.test(attr)) {
      if (newVal) {
        this[attr] = newVal;
        this.addEventListener(attr.slice(2), function() {evaconsole.log(this[attr])});
      } else {
        delete this[attr];
        this.removeEventListener(attr.slice(2), this);
      }
    } else {
      if (this.ext === undefined) {
        console.log('this.ext is undefined')
      }
      else {
        var method = 'set' + attr[0].toUpperCase() + attr.substring(1)
        this.ext[method](newVal)
      }
    }
  }

  connectedCallback() {
    var nodeName = this.nodeName
    var nodeParentName = this.parentNode.nodeName
    console.dir(nodeName + ' ,parent: ' + nodeParentName)
    var parentCmp = this.parentNode['ext']
    var childCmp;
    var me = this
    var props = {}
    props.xtype = me.XTYPE
    for (var property in me.PROPERTIESOBJECT) {
      if (me.PROPERTIESOBJECT.hasOwnProperty(property)) {
        // if(me.XTYPE == 'grid') {
        //   console.log(property)
        // }
        if(me.getAttribute(property) !== null) {
          try {
            console.log(property)
            if (property == 'columns') {
              console.log('***columns***')
              console.log(me[property])
              //console.log(props[property])
            }
            else {
              console.log(me[property])
            }
            props[property] = JSON.parse(me[property])
            // if (property == 'columns')  {
            //   console.log('in')
            // }

          }
          catch(e) {

            // if (property == 'columns')  {
            //   console.log(e)
            //   console.log('out')
            // }
            props[property] =  me[property]
          }
        }
        else {
          // if (me.XTYPE == 'grid') {
          // console.log('null: ' + property)
          // }
        }
      }
    }
    //var o = props
    //o.xtype = me.XTYPE
    console.log(props)
    if (nodeParentName == 'BODY') {
      Ext.application({
        name: 'MyExtWCApp',
        launch: function () {
          console.log('\nXTYPE: ' + props.xtype)
          console.log('parent: ' + nodeParentName)
          me.ext = Ext.create(props)
          console.log('Ext.create')
          console.log(props)
          if (nodeParentName == 'BODY') {
            Ext.Viewport.add([me.ext])
          }
        }
      });
    }
    else{
      Ext.onReady(function(){
        console.log('\nXTYPE: ' + props.xtype)
        console.log('parent: ' + nodeParentName)
        me.ext = Ext.create(props)
        console.log('Ext.create')
        console.log(props)
        parentCmp = me.parentNode['ext'];
        childCmp = me.ext;
        console.log(`parentCmp: ${parentCmp.xtype} childCmp: ${childCmp.xtype}`)
        me.addTheChild(parentCmp, childCmp)
      });
    }
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
        //console.log('**')
        return
      }
    } 
      if (parentCmp.add != undefined) {
      parentCmp.add(childCmp)
      //console.log('**')
      return
    }
    console.log('child not added')
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

  disconnectedCallback() {
    delete this.ext
    console.log('ExtBase disconnectedCallback')
  }
}

