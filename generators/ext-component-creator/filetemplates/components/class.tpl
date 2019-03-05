import ExtBase from './base';

export class Ext{capclassname}Component extends ExtBase {
{sGETSET}
	static XTYPE() {return '{classname}'}
  static PROPERTIESOBJECT() { return {
{sPROPERTIESOBJECT}
  }}
  static EVENTS() { return [
{sEVENTS}
  ]}
  static METHODS() { return [
{sMETHODS}
  ]}

  constructor() {
    super()
    this.METHODS = Ext{capclassname}Component.METHODS()
    this.XTYPE = Ext{capclassname}Component.XTYPE()
    //this.PROPERTIES = Ext{capclassname}Component.PROPERTIES()
    this.PROPERTIESOBJECT = Ext{capclassname}Component.PROPERTIESOBJECT()
    this.EVENTS = Ext{capclassname}Component.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
(function () {
window.customElements.define('ext-{classname}', Ext{capclassname}Component);
})();