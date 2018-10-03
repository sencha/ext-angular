class Ext{capclassname} extends ExtBase {
	//get columns(){return JSON.parse(this.getAttribute('columns'))};set columns(columns){this.setAttribute('columns',JSON.stringify(columns))}
	//get data(){return JSON.parse(this.getAttribute('data'))};set data(data){this.setAttribute('data',JSON.stringify(data))}
{sGETSET}
	static XTYPE() {return '{classname}'}
  static PROPERTIESOBJECT() { return {
{sPROPERTIESOBJECT}
	}}
	static EVENTS() { return [
{sEVENTS}
	]}

	//properties
	get text(){return this.getAttribute('text')};set text(text){this.setAttribute('text',text)}
	get tooltip(){return this.getAttribute('tooltip')};set tooltip(tooltip){this.setAttribute('tooltip',tooltip)}
	get height(){return this.getAttribute('height')};set height(height){this.setAttribute('height',height)}
	get width(){return this.getAttribute('width')};set width(width){this.setAttribute('width',width)}

	static METHODS() { return [
{sMETHODS}
	]}

	constructor() {
		super()
		this.METHODS = Ext{capclassname}.METHODS()
		this.XTYPE = Ext{capclassname}.XTYPE()
		//this.PROPERTIES = Ext{capclassname}.PROPERTIES()
    this.PROPERTIESOBJECT = Ext{capclassname}.PROPERTIESOBJECT()
		this.EVENTS = Ext{capclassname}.EVENTS()
	}
	
		//var me = this
		//this.METHODS.forEach(function (method, index, array) {
		//	me[method.name] = method.function
		//})
		//console.log(method.name)
		//var fn = `function(@@@method.parameters}) { return this.ext.@@@method.name}(@@@method.parameters}) };`
		//console.log(fn)
		//debugger
		//me[method.name] = evaconsole.log(fn)
		//me[method.name] = function(height) { return this.ext.setHeight(height)}
		// for (var i in this.METHODS) {
		// 	debugger
		// 	var parms = 'height'
		// 	this[this.METHODS[i].name] = `function(${parms}) { return this.ext.${this.METHODS[0].name}(${parms});`
		// }


	attributeChangedCallback(attr, oldVal, newVal) {
		super.attributeChangedCallback(attr, oldVal, newVal)
	}

	connectedCallback() {
		super.connectedCallback()
	}
}

window.customElements.define('ext-{classname}', Ext{capclassname});
