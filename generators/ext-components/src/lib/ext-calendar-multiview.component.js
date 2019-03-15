import ExtBase from './base';

export class ExtCalendar_multiviewComponent extends ExtBase {
	get compact(){return this.getAttribute('compact')};set compact(compact){this.setAttribute('compact',compact)}
	get compactOptions(){return this.getAttribute('compactOptions')};set compactOptions(compactOptions){this.setAttribute('compactOptions',compactOptions)}
	get defaultView(){return this.getAttribute('defaultView')};set defaultView(defaultView){this.setAttribute('defaultView',defaultView)}
	get layout(){return this.getAttribute('layout')};set layout(layout){this.setAttribute('layout',layout)}
	get store(){return this.getAttribute('store')};set store(store){this.setAttribute('store',store)}
	get timezoneOffset(){return this.getAttribute('timezoneOffset')};set timezoneOffset(timezoneOffset){this.setAttribute('timezoneOffset',timezoneOffset)}
	get value(){return this.getAttribute('value')};set value(value){this.setAttribute('value',value)}
	get views(){return this.getAttribute('views')};set views(views){this.setAttribute('views',views)}
	get platformConfig(){return this.getAttribute('platformConfig')};set platformConfig(platformConfig){this.setAttribute('platformConfig',platformConfig)}
	get responsiveConfig(){return this.getAttribute('responsiveConfig')};set responsiveConfig(responsiveConfig){this.setAttribute('responsiveConfig',responsiveConfig)}
	get align(){return this.getAttribute('align')};set align(align){this.setAttribute('align',align)}
	get fitToParent(){return this.getAttribute('fitToParent')};set fitToParent(fitToParent){this.setAttribute('fitToParent',fitToParent)}
	get config(){return this.getAttribute('config')};set config(config){this.setAttribute('config',config)}

	static XTYPE() {return 'calendar_multiview'}
  static PROPERTIESOBJECT() { return {
    "compact": "Boolean",
    "compactOptions": "Object",
    "defaultView": "String",
    "layout": "Object/String",
    "store": "Object/Ext.calendar.store.Calendars",
    "timezoneOffset": "Number",
    "value": "Date",
    "views": "Object",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "align": "Obyect",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
		{ name:'moveNext',function: function() { return this.ext.moveNext() } },
		{ name:'movePrevious',function: function() { return this.ext.movePrevious() } },
		{ name:'navigate',function: function(amount,interval) { return this.ext.navigate(amount,interval) } },
		{ name:'setView',function: function(view) { return this.ext.setView(view) } },

  ]}

  constructor() {
    super()
    this.METHODS = ExtCalendar_multiviewComponent.METHODS()
    this.XTYPE = ExtCalendar_multiviewComponent.XTYPE()
    //this.PROPERTIES = ExtCalendar_multiviewComponent.PROPERTIES()
    this.PROPERTIESOBJECT = ExtCalendar_multiviewComponent.PROPERTIESOBJECT()
    this.EVENTS = ExtCalendar_multiviewComponent.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
(function () {
window.customElements.define('ext-calendar_multiview', ExtCalendar_multiviewComponent);
})();