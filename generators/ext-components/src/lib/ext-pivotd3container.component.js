(function () {
class ExtPivotd3container extends ExtBase {
	get configurator(){return this.getAttribute('configurator')};set configurator(configurator){this.setAttribute('configurator',configurator)}
	get drawing(){return this.getAttribute('drawing')};set drawing(drawing){this.setAttribute('drawing',drawing)}
	get matrix(){return this.getAttribute('matrix')};set matrix(matrix){this.setAttribute('matrix',matrix)}

	static XTYPE() {return 'pivotd3container'}
  static PROPERTIESOBJECT() { return {
    "configurator": "Ext.pivot.plugin.Configurator",
    "drawing": "Ext.Component",
    "matrix": "Ext.pivot.matrix.Base",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [

  ]}

  constructor() {
    super()
    this.METHODS = ExtPivotd3container.METHODS()
    this.XTYPE = ExtPivotd3container.XTYPE()
    //this.PROPERTIES = ExtPivotd3container.PROPERTIES()
    this.PROPERTIESOBJECT = ExtPivotd3container.PROPERTIESOBJECT()
    this.EVENTS = ExtPivotd3container.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
window.customElements.define('ext-pivotd3container', ExtPivotd3container);
})();