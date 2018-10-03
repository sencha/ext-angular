class ExtBase extends HTMLElement {
  get config() {return this.getAttribute('config')}; 
  set config(val) {if (val) {this.setAttribute('config', val)} else {this.removeAttribute('config')}}

  //  "platformConfig": "Object",
  //  "responsiveConfig": "Object",
  //  "fitToParent": "Boolean",
  //  "config": "Object",

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
      // if(attr == 'config' && newVal != null && this._config == undefined) {
      // 	this._config = newVal
      // }
      if (this.ext === undefined) {
        //console.log('this.ext is undefined')
        //this.connectedCallback()
        //console.log('after')
      }
      else {
        var method = 'set' + attr[0].toUpperCase() + attr.substring(1)
        this.ext[method](newVal)
      }
    }
  }

  connectedCallback() {
    var me = this
    var props = {}
    for (var property in me.PROPERTIESOBJECT) {
      if (me.PROPERTIESOBJECT.hasOwnProperty(property)) {
        if(me.getAttribute(property) !== null) {
          props[property] =  me[property]
        }
      }
    }

    var numElements = Object.keys(props).length
    if (numElements == 1 && props['config'] != undefined) {
      var o = {}
      // other things in the type: Ext. []
      if(me.PROPERTIESOBJECT['config'].includes('Object')) {
        o = JSON.parse(me.config)
      }
      else {
        o = me.config
      }
      o.xtype = me.XTYPE
      //o.renderTo = me
      let shadowRoot = me.attachShadow({mode: 'open'})
      //shadowRoot.innerHTML = `<style>@import '../../GeneratedFolders/ext-webcomponents-modern/modern/theme-${theme}/resources/theme-${theme}-all.css'</style>`
      shadowRoot.innerHTML = `<style>@import '${root}modern/theme-${theme}/resources/theme-${theme}-all.css'</style>`
      o.renderTo = shadowRoot
      Ext.onReady(function() {
        me.ext = Ext.create(o)
      })
    }
  }

	zzzzzzzzconnectedCallback2() {
		var me = this
		Ext.onReady(function() {
			console.log(me.getAttribute('id') + ' connectedCallback');
			var props = {}
			if (me.ext === undefined) {

        for (var property in me.PROPERTIESOBJECT) {
          if (me.PROPERTIESOBJECT.hasOwnProperty(property)) {
            if(me.getAttribute(property) !== null) {
              props[property] =  me[property]
            }
          }
        }


//				me.PROPERTIES.forEach(function (property, index, array) {
//					if(me.getAttribute(property) !== null) {
//						props[property] =  me[property]
//					}
//				})

				var numElements = Object.keys(props).length
////				console.log(numElements)
//				console.log(props)
//				console.log(me._prevProps)

				var same = false
				if(JSON.stringify(props) === JSON.stringify(me._prevProps) ) {
					same = true
//					console.log('same')
				}
				else {
					same = false
//					console.log('different')
				}

				if (numElements > 1 && same === false) {
					var o = Object.assign(props) 
					if (o.width === undefined) { o.width = '100%' }
					if (o.height === undefined) { o.height = '100%' }
					o.xtype = me.XTYPE

			let shadowRoot = me.attachShadow({mode: 'open'});
			// @import "ext-6.5.2/build/modern/theme-material/resources/fonts/MaterialIcons-Regular.ttf"
			// @import "ext-6.5.2/build/modern/theme-material/resources/fonts/roboto/Roboto-Medium.ttf"
			// @import "ext-6.5.2/build/modern/theme-material/resources/fonts/roboto/Roboto-Regular.ttf"
			//@import "http://se.sencha.com/ext-6.5.2/build/modern/theme-material/resources/theme-material-all.css"
			shadowRoot.innerHTML = `
			<style>
			@import "http://se.sencha.com/ext-6.5.2/build/modern/theme-material/resources/theme-material-all.css"
			</style>
			`
			o.renderTo = shadowRoot


					//o.renderTo = me
					o.listeners = {}
					me.EVENTS.forEach(function (eventparameter, index, array) {
						me.setEvent(eventparameter,o,me)
					})
					//me.ext = Ext.create(o)
					console.log(me.getAttribute('id') + ' Ext.create (o, ext)',o,me.ext)
				}
				// else {
				// 	console.log('DO NOT do it')
				// }
				me._prevProps = Object.assign(props)
			}
		});
	}

	zzzzzzzconnectedCallbackOrig() {
		//console.log('ExtBase connectedCallback')
		var me = this
		Ext.onReady(function() {
			console.log(me.getAttribute('id') + ' connectedCallback');
			if (me._config == undefined || me._xtype == undefined) {return}
			if (me.ext !== undefined) {return}

			var o
			if (typeof(me._config) === 'string') { o = JSON.parse(me._config) }
			else { o = Object.assign(me._config) }

			if (o.width === undefined) { o.width = '100%' }
			if (o.height === undefined) { o.height = '100%' }

			o.xtype = me.XTYPE

			// let shadowRoot = me.attachShadow({mode: 'open'});
			// // @import "ext-6.5.2/build/modern/theme-material/resources/fonts/MaterialIcons-Regular.ttf"
			// // @import "ext-6.5.2/build/modern/theme-material/resources/fonts/roboto/Roboto-Medium.ttf"
			// // @import "ext-6.5.2/build/modern/theme-material/resources/fonts/roboto/Roboto-Regular.ttf"
			// //@import "ext-6.5.2/build/modern/theme-material/resources/theme-material-all.css"
			// shadowRoot.innerHTML = `
			// <style>
			// @import "ext.css"
			// </style>
			// `
			// o.renderTo = shadowRoot

			o.renderTo = me


			o.listeners = {}
			me.EVENTS.forEach(function (eventparameter, index, array) {
				me.setEvent(eventparameter,o,me)
			})
			//me.ext = Ext.create(o)
			console.log(me.getAttribute('id') + ' Ext.create ',me.ext)
		});
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


/*
	get configx() {
    console.log('get')
    var c = this.getAttribute('config')
    var cp = JSON.parse(c);
    console.log(cp)
    return cp

    //return this.getAttribute('config')
  };
  set configx(config) {
    console.log('set')
    var c = JSON.parse(config);
    console.log(c)
    this._config=JSON.parse(config);
    this.setAttribute('config',JSON.parse(config));
  }
  */
