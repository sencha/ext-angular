(function () {
class ExtColorselector extends ExtBase {
	get alphaDecimalFormat(){return this.getAttribute('alphaDecimalFormat')};set alphaDecimalFormat(alphaDecimalFormat){this.setAttribute('alphaDecimalFormat',alphaDecimalFormat)}
	get cancelButtonText(){return this.getAttribute('cancelButtonText')};set cancelButtonText(cancelButtonText){this.setAttribute('cancelButtonText',cancelButtonText)}
	get color(){return this.getAttribute('color')};set color(color){this.setAttribute('color',color)}
	get fieldPad(){return this.getAttribute('fieldPad')};set fieldPad(fieldPad){this.setAttribute('fieldPad',fieldPad)}
	get fieldWidth(){return this.getAttribute('fieldWidth')};set fieldWidth(fieldWidth){this.setAttribute('fieldWidth',fieldWidth)}
	get format(){return this.getAttribute('format')};set format(format){this.setAttribute('format',format)}
	get okButtonText(){return this.getAttribute('okButtonText')};set okButtonText(okButtonText){this.setAttribute('okButtonText',okButtonText)}
	get showOkCancelButtons(){return this.getAttribute('showOkCancelButtons')};set showOkCancelButtons(showOkCancelButtons){this.setAttribute('showOkCancelButtons',showOkCancelButtons)}
	get showPreviousColor(){return this.getAttribute('showPreviousColor')};set showPreviousColor(showPreviousColor){this.setAttribute('showPreviousColor',showPreviousColor)}
	get value(){return this.getAttribute('value')};set value(value){this.setAttribute('value',value)}

	static XTYPE() {return 'colorselector'}
  static PROPERTIESOBJECT() { return {
    "alphaDecimalFormat": "String",
    "cancelButtonText": "String",
    "color": "Object",
    "fieldPad": "Number",
    "fieldWidth": "Number",
    "format": "'hex6'/'hex8'/'#hex6'/'#hex8'/'HEX6'/'HEX8'/'#HEX6'/'#HEX8'",
    "okButtonText": "String",
    "showOkCancelButtons": "Boolean",
    "showPreviousColor": "Boolean",
    "value": "String",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
		{name:'cancel',parameters:'colorselector'},
		{name:'change',parameters:'colorselector,color,previousColor'},
		{name:'ok',parameters:'colorselector,color'},
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
		{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
		{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
		{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
		{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
		{ name:'destroy',function: function() { return this.ext.destroy() } },
		{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
		{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
		{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
		{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
		{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
		{ name:'initConfig',function: function(instanceConfig) { return this.ext.initConfig(instanceConfig) } },
		{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
		{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
		{ name:'statics',function: function() { return this.ext.statics() } },
		{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
		{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },

  ]}

  constructor() {
    super()
    this.METHODS = ExtColorselector.METHODS()
    this.XTYPE = ExtColorselector.XTYPE()
    //this.PROPERTIES = ExtColorselector.PROPERTIES()
    this.PROPERTIESOBJECT = ExtColorselector.PROPERTIESOBJECT()
    this.EVENTS = ExtColorselector.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
window.customElements.define('ext-colorselector', ExtColorselector);
})();