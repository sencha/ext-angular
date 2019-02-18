(function () {
class ExtInteraction extends ExtBase {
	get chart(){return this.getAttribute('chart')};set chart(chart){this.setAttribute('chart',chart)}
	get enabled(){return this.getAttribute('enabled')};set enabled(enabled){this.setAttribute('enabled',enabled)}
	get gesture(){return this.getAttribute('gesture')};set gesture(gesture){this.setAttribute('gesture',gesture)}
	get listeners(){return this.getAttribute('listeners')};set listeners(listeners){this.setAttribute('listeners',listeners)}

	static XTYPE() {return 'interaction'}
  static PROPERTIESOBJECT() { return {
    "chart": "Ext.chart.AbstractChart",
    "enabled": "Boolean",
    "gesture": "Object",
    "listeners": "Object",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
		{ name:'_addDeclaredListeners',function: function(listeners) { return this.ext._addDeclaredListeners(listeners) } },
		{ name:'addAfterListener',function: function() { return this.ext.addAfterListener() } },
		{ name:'addBeforeListener',function: function() { return this.ext.addBeforeListener() } },
		{ name:'addChartListener',function: function() { return this.ext.addChartListener() } },
		{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
		{ name:'addListener',function: function(eventName,fn,scope,options,order,caller) { return this.ext.addListener(eventName,fn,scope,options,order,caller) } },
		{ name:'addManagedListener',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.addManagedListener(item,ename,fn,scope,options,noDestroy) } },
		{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
		{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
		{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
		{ name:'clearListeners',function: function() { return this.ext.clearListeners() } },
		{ name:'clearManagedListeners',function: function() { return this.ext.clearManagedListeners() } },
		{ name:'createRelayer',function: function(newName,beginEnd) { return this.ext.createRelayer(newName,beginEnd) } },
		{ name:'destroy',function: function() { return this.ext.destroy() } },
		{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
		{ name:'doFireEvent',function: function(eventName,args,bubbles) { return this.ext.doFireEvent(eventName,args,bubbles) } },
		{ name:'enableBubble',function: function(eventNames) { return this.ext.enableBubble(eventNames) } },
		{ name:'fireAction',function: function(eventName,args,fn,scope,options,order) { return this.ext.fireAction(eventName,args,fn,scope,options,order) } },
		{ name:'fireEvent',function: function(eventName,args) { return this.ext.fireEvent(eventName,args) } },
		{ name:'fireEventArgs',function: function(eventName,args) { return this.ext.fireEventArgs(eventName,args) } },
		{ name:'fireEventedAction',function: function(eventName,args,fn,scope,fnArgs) { return this.ext.fireEventedAction(eventName,args,fn,scope,fnArgs) } },
		{ name:'getBubbleParent',function: function() { return this.ext.getBubbleParent() } },
		{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
		{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
		{ name:'getId',function: function() { return this.ext.getId() } },
		{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
		{ name:'getItemForEvent',function: function(e) { return this.ext.getItemForEvent(e) } },
		{ name:'getItemsForEvent',function: function(e) { return this.ext.getItemsForEvent(e) } },
		{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
		{ name:'hasListener',function: function(eventName) { return this.ext.hasListener(eventName) } },
		{ name:'initConfig',function: function(instanceConfig) { return this.ext.initConfig(instanceConfig) } },
		{ name:'isSuspended',function: function(event) { return this.ext.isSuspended(event) } },
		{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
		{ name:'mon',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.mon(item,ename,fn,scope,options,noDestroy) } },
		{ name:'mun',function: function(item,ename,fn,scope) { return this.ext.mun(item,ename,fn,scope) } },
		{ name:'on',function: function(eventName,fn,scope,options,order,caller) { return this.ext.on(eventName,fn,scope,options,order,caller) } },
		{ name:'onAfter',function: function(eventName,fn,scope,options) { return this.ext.onAfter(eventName,fn,scope,options) } },
		{ name:'onBefore',function: function(eventName,fn,scope,options) { return this.ext.onBefore(eventName,fn,scope,options) } },
		{ name:'onGesture',function: function() { return this.ext.onGesture() } },
		{ name:'relayEvents',function: function(origin,events,prefix) { return this.ext.relayEvents(origin,events,prefix) } },
		{ name:'removeAfterListener',function: function() { return this.ext.removeAfterListener() } },
		{ name:'removeBeforeListener',function: function() { return this.ext.removeBeforeListener() } },
		{ name:'removeListener',function: function(eventName,fn,scope,eventOptions) { return this.ext.removeListener(eventName,fn,scope,eventOptions) } },
		{ name:'removeManagedListener',function: function(item,ename,fn,scope) { return this.ext.removeManagedListener(item,ename,fn,scope) } },
		{ name:'removeManagedListenerItem',function: function(isClear,managedListener,item,ename,fn,scope) { return this.ext.removeManagedListenerItem(isClear,managedListener,item,ename,fn,scope) } },
		{ name:'resolveListenerScope',function: function(defaultScope) { return this.ext.resolveListenerScope(defaultScope) } },
		{ name:'resumeEvent',function: function(eventName) { return this.ext.resumeEvent(eventName) } },
		{ name:'resumeEvents',function: function(discardQueue) { return this.ext.resumeEvents(discardQueue) } },
		{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
		{ name:'setListeners',function: function(listeners) { return this.ext.setListeners(listeners) } },
		{ name:'statics',function: function() { return this.ext.statics() } },
		{ name:'suspendEvent',function: function(eventName) { return this.ext.suspendEvent(eventName) } },
		{ name:'suspendEvents',function: function(queueSuspended) { return this.ext.suspendEvents(queueSuspended) } },
		{ name:'un',function: function(eventName,fn,scope,eventOptions) { return this.ext.un(eventName,fn,scope,eventOptions) } },
		{ name:'unAfter',function: function(eventName,fn,scope,options) { return this.ext.unAfter(eventName,fn,scope,options) } },
		{ name:'unBefore',function: function(eventName,fn,scope,options) { return this.ext.unBefore(eventName,fn,scope,options) } },
		{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
		{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },

  ]}

  constructor() {
    super()
    this.METHODS = ExtInteraction.METHODS()
    this.XTYPE = ExtInteraction.XTYPE()
    //this.PROPERTIES = ExtInteraction.PROPERTIES()
    this.PROPERTIESOBJECT = ExtInteraction.PROPERTIESOBJECT()
    this.EVENTS = ExtInteraction.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
window.customElements.define('ext-interaction', ExtInteraction);
})();