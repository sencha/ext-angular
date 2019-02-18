(function () {
class ExtCleartrigger extends ExtBase {
	get alwaysOnTop(){return this.getAttribute('alwaysOnTop')};set alwaysOnTop(alwaysOnTop){this.setAttribute('alwaysOnTop',alwaysOnTop)}
	get ariaAttributes(){return this.getAttribute('ariaAttributes')};set ariaAttributes(ariaAttributes){this.setAttribute('ariaAttributes',ariaAttributes)}
	get ariaDescribedBy(){return this.getAttribute('ariaDescribedBy')};set ariaDescribedBy(ariaDescribedBy){this.setAttribute('ariaDescribedBy',ariaDescribedBy)}
	get ariaLabel(){return this.getAttribute('ariaLabel')};set ariaLabel(ariaLabel){this.setAttribute('ariaLabel',ariaLabel)}
	get ariaLabelledBy(){return this.getAttribute('ariaLabelledBy')};set ariaLabelledBy(ariaLabelledBy){this.setAttribute('ariaLabelledBy',ariaLabelledBy)}
	get bind(){return this.getAttribute('bind')};set bind(bind){this.setAttribute('bind',bind)}
	get border(){return this.getAttribute('border')};set border(border){this.setAttribute('border',border)}
	get cls(){return this.getAttribute('cls')};set cls(cls){this.setAttribute('cls',cls)}
	get constrainAlign(){return this.getAttribute('constrainAlign')};set constrainAlign(constrainAlign){this.setAttribute('constrainAlign',constrainAlign)}
	get controller(){return this.getAttribute('controller')};set controller(controller){this.setAttribute('controller',controller)}
	get defaultListenerScope(){return this.getAttribute('defaultListenerScope')};set defaultListenerScope(defaultListenerScope){this.setAttribute('defaultListenerScope',defaultListenerScope)}
	get disabled(){return this.getAttribute('disabled')};set disabled(disabled){this.setAttribute('disabled',disabled)}
	get eventHandlers(){return this.getAttribute('eventHandlers')};set eventHandlers(eventHandlers){this.setAttribute('eventHandlers',eventHandlers)}
	get field(){return this.getAttribute('field')};set field(field){this.setAttribute('field',field)}
	get flex(){return this.getAttribute('flex')};set flex(flex){this.setAttribute('flex',flex)}
	get floated(){return this.getAttribute('floated')};set floated(floated){this.setAttribute('floated',floated)}
	get focusCls(){return this.getAttribute('focusCls')};set focusCls(focusCls){this.setAttribute('focusCls',focusCls)}
	get focusOnTap(){return this.getAttribute('focusOnTap')};set focusOnTap(focusOnTap){this.setAttribute('focusOnTap',focusOnTap)}
	get group(){return this.getAttribute('group')};set group(group){this.setAttribute('group',group)}
	get handler(){return this.getAttribute('handler')};set handler(handler){this.setAttribute('handler',handler)}
	get height(){return this.getAttribute('height')};set height(height){this.setAttribute('height',height)}
	get hidden(){return this.getAttribute('hidden')};set hidden(hidden){this.setAttribute('hidden',hidden)}
	get hideMode(){return this.getAttribute('hideMode')};set hideMode(hideMode){this.setAttribute('hideMode',hideMode)}
	get iconCls(){return this.getAttribute('iconCls')};set iconCls(iconCls){this.setAttribute('iconCls',iconCls)}
	get id(){return this.getAttribute('id')};set id(id){this.setAttribute('id',id)}
	get instanceCls(){return this.getAttribute('instanceCls')};set instanceCls(instanceCls){this.setAttribute('instanceCls',instanceCls)}
	get itemId(){return this.getAttribute('itemId')};set itemId(itemId){this.setAttribute('itemId',itemId)}
	get keyMap(){return this.getAttribute('keyMap')};set keyMap(keyMap){this.setAttribute('keyMap',keyMap)}
	get keyMapEnabled(){return this.getAttribute('keyMapEnabled')};set keyMapEnabled(keyMapEnabled){this.setAttribute('keyMapEnabled',keyMapEnabled)}
	get keyMapTarget(){return this.getAttribute('keyMapTarget')};set keyMapTarget(keyMapTarget){this.setAttribute('keyMapTarget',keyMapTarget)}
	get listeners(){return this.getAttribute('listeners')};set listeners(listeners){this.setAttribute('listeners',listeners)}
	get name(){return this.getAttribute('name')};set name(name){this.setAttribute('name',name)}
	get nameable(){return this.getAttribute('nameable')};set nameable(nameable){this.setAttribute('nameable',nameable)}
	get plugins(){return this.getAttribute('plugins')};set plugins(plugins){this.setAttribute('plugins',plugins)}
	get publishes(){return this.getAttribute('publishes')};set publishes(publishes){this.setAttribute('publishes',publishes)}
	get reference(){return this.getAttribute('reference')};set reference(reference){this.setAttribute('reference',reference)}
	get relative(){return this.getAttribute('relative')};set relative(relative){this.setAttribute('relative',relative)}
	get renderTo(){return this.getAttribute('renderTo')};set renderTo(renderTo){this.setAttribute('renderTo',renderTo)}
	get repeat(){return this.getAttribute('repeat')};set repeat(repeat){this.setAttribute('repeat',repeat)}
	get ripple(){return this.getAttribute('ripple')};set ripple(ripple){this.setAttribute('ripple',ripple)}
	get scope(){return this.getAttribute('scope')};set scope(scope){this.setAttribute('scope',scope)}
	get selfAlign(){return this.getAttribute('selfAlign')};set selfAlign(selfAlign){this.setAttribute('selfAlign',selfAlign)}
	get session(){return this.getAttribute('session')};set session(session){this.setAttribute('session',session)}
	get shadow(){return this.getAttribute('shadow')};set shadow(shadow){this.setAttribute('shadow',shadow)}
	get shareableName(){return this.getAttribute('shareableName')};set shareableName(shareableName){this.setAttribute('shareableName',shareableName)}
	get shim(){return this.getAttribute('shim')};set shim(shim){this.setAttribute('shim',shim)}
	get side(){return this.getAttribute('side')};set side(side){this.setAttribute('side',side)}
	get style(){return this.getAttribute('style')};set style(style){this.setAttribute('style',style)}
	get toFrontOnShow(){return this.getAttribute('toFrontOnShow')};set toFrontOnShow(toFrontOnShow){this.setAttribute('toFrontOnShow',toFrontOnShow)}
	get touchAction(){return this.getAttribute('touchAction')};set touchAction(touchAction){this.setAttribute('touchAction',touchAction)}
	get translatable(){return this.getAttribute('translatable')};set translatable(translatable){this.setAttribute('translatable',translatable)}
	get triggers(){return this.getAttribute('triggers')};set triggers(triggers){this.setAttribute('triggers',triggers)}
	get twoWayBindable(){return this.getAttribute('twoWayBindable')};set twoWayBindable(twoWayBindable){this.setAttribute('twoWayBindable',twoWayBindable)}
	get ui(){return this.getAttribute('ui')};set ui(ui){this.setAttribute('ui',ui)}
	get userCls(){return this.getAttribute('userCls')};set userCls(userCls){this.setAttribute('userCls',userCls)}
	get viewModel(){return this.getAttribute('viewModel')};set viewModel(viewModel){this.setAttribute('viewModel',viewModel)}
	get width(){return this.getAttribute('width')};set width(width){this.setAttribute('width',width)}
	get x(){return this.getAttribute('x')};set x(x){this.setAttribute('x',x)}
	get y(){return this.getAttribute('y')};set y(y){this.setAttribute('y',y)}

	static XTYPE() {return 'cleartrigger'}
  static PROPERTIESOBJECT() { return {
    "alwaysOnTop": "Boolean/Number",
    "ariaAttributes": "Object",
    "ariaDescribedBy": "String",
    "ariaLabel": "String",
    "ariaLabelledBy": "String",
    "bind": "Object/String",
    "border": "Boolean",
    "cls": "String/String[]",
    "constrainAlign": "String/Ext.util.Region/Ext.dom.Element",
    "controller": "String/Object/Ext.app.ViewController",
    "defaultListenerScope": "Boolean",
    "disabled": "Boolean",
    "eventHandlers": "Object",
    "field": "Ext.field.Text",
    "flex": "Number/String/Object",
    "floated": "Boolean",
    "focusCls": "String",
    "focusOnTap": "Boolean",
    "group": "String",
    "handler": "Function/String",
    "height": "Number/String",
    "hidden": "Boolean",
    "hideMode": "'clip'/'display'/'offsets'/'opacity'/'visibility'",
    "iconCls": "String",
    "id": "String",
    "instanceCls": "String/String[]",
    "itemId": "String",
    "keyMap": "Object",
    "keyMapEnabled": "Boolean",
    "keyMapTarget": "String",
    "listeners": "Object",
    "name": "String",
    "nameable": "Boolean",
    "plugins": "Array/Ext.enums.Plugin/Object/Ext.plugin.Abstract",
    "publishes": "String/String[]/Object",
    "reference": "String",
    "relative": "Boolean",
    "renderTo": "Ext.dom.Element",
    "repeat": "Boolean/Object",
    "ripple": "Boolean/Object/String",
    "scope": "Object",
    "selfAlign": "String",
    "session": "Boolean/Object/Ext.data.Session",
    "shadow": "Boolean",
    "shareableName": "Boolean",
    "shim": "Boolean",
    "side": "'left'/'right'",
    "style": "String/Object",
    "toFrontOnShow": "Boolean",
    "touchAction": "Object",
    "translatable": "Object",
    "triggers": "any",
    "twoWayBindable": "String/String[]/Object",
    "ui": "String/String[]",
    "userCls": "String/String[]",
    "viewModel": "String/Object/Ext.app.ViewModel",
    "width": "Number/String",
    "x": "Number",
    "y": "Number",
    "platformConfig": "Object",
    "responsiveConfig": "Object",
    "fitToParent": "Boolean",
    "config": "Object",

  }}
  static EVENTS() { return [
		{name:'beforedisabledchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforeheightchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforehiddenchange',parameters:'sender,value,oldValue,undefined'},
		{name:'beforetofront',parameters:'cleartrigger'},
		{name:'beforewidthchange',parameters:'sender,value,oldValue,undefined'},
		{name:'blur',parameters:'cleartrigger,event'},
		{name:'disabledchange',parameters:'sender,value,oldValue'},
		{name:'focus',parameters:'cleartrigger,event'},
		{name:'focusenter',parameters:'cleartrigger,event'},
		{name:'focusleave',parameters:'cleartrigger,event'},
		{name:'heightchange',parameters:'sender,value,oldValue'},
		{name:'hiddenchange',parameters:'sender,value,oldValue'},
		{name:'tofront',parameters:'cleartrigger'},
		{name:'widthchange',parameters:'sender,value,oldValue'},
		{name:'ready',parameters:''}

  ]}
  static METHODS() { return [
		{ name:'_addDeclaredListeners',function: function(listeners) { return this.ext._addDeclaredListeners(listeners) } },
		{ name:'_fixReference',function: function() { return this.ext._fixReference() } },
		{ name:'activatePlugin',function: function(type) { return this.ext.activatePlugin(type) } },
		{ name:'addAfterListener',function: function() { return this.ext.addAfterListener() } },
		{ name:'addBeforeListener',function: function() { return this.ext.addBeforeListener() } },
		{ name:'addCls',function: function(cls,prefix,suffix) { return this.ext.addCls(cls,prefix,suffix) } },
		{ name:'addDelegatedListener',function: function(eventName,fn,scope,options,order,caller,manager) { return this.ext.addDelegatedListener(eventName,fn,scope,options,order,caller,manager) } },
		{ name:'addDeprecations',function: function(deprecations) { return this.ext.addDeprecations(deprecations) } },
		{ name:'addElementReference',function: function(name,domNode) { return this.ext.addElementReference(name,domNode) } },
		{ name:'addElementReferenceOnDemand',function: function(name,domNode) { return this.ext.addElementReferenceOnDemand(name,domNode) } },
		{ name:'addListener',function: function(eventName,fn,scope,options,order,caller) { return this.ext.addListener(eventName,fn,scope,options,order,caller) } },
		{ name:'addManagedListener',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.addManagedListener(item,ename,fn,scope,options,noDestroy) } },
		{ name:'addPlugin',function: function(plugin) { return this.ext.addPlugin(plugin) } },
		{ name:'afterRender',function: function() { return this.ext.afterRender() } },
		{ name:'alignTo',function: function(component,alignment,options) { return this.ext.alignTo(component,alignment,options) } },
		{ name:'applyBind',function: function(binds,currentBindings) { return this.ext.applyBind(binds,currentBindings) } },
		{ name:'applyPlugins',function: function(plugins,oldPlugins) { return this.ext.applyPlugins(plugins,oldPlugins) } },
		{ name:'applySession',function: function(session) { return this.ext.applySession(session) } },
		{ name:'applyStyle',function: function(style,oldStyle) { return this.ext.applyStyle(style,oldStyle) } },
		{ name:'applyViewModel',function: function(viewModel) { return this.ext.applyViewModel(viewModel) } },
		{ name:'blur',function: function() { return this.ext.blur() } },
		{ name:'bubble',function: function(fn,scope,args) { return this.ext.bubble(fn,scope,args) } },
		{ name:'callOverridden',function: function(args) { return this.ext.callOverridden(args) } },
		{ name:'callParent',function: function(args) { return this.ext.callParent(args) } },
		{ name:'callSuper',function: function(args) { return this.ext.callSuper(args) } },
		{ name:'clearDelegatedListeners',function: function() { return this.ext.clearDelegatedListeners() } },
		{ name:'clearListeners',function: function() { return this.ext.clearListeners() } },
		{ name:'clearManagedListeners',function: function() { return this.ext.clearManagedListeners() } },
		{ name:'createPlugin',function: function(config) { return this.ext.createPlugin(config) } },
		{ name:'createRelayer',function: function(newName,beginEnd) { return this.ext.createRelayer(newName,beginEnd) } },
		{ name:'destroy',function: function() { return this.ext.destroy() } },
		{ name:'destroyMembers',function: function(args) { return this.ext.destroyMembers(args) } },
		{ name:'destroyPlugin',function: function(plugin) { return this.ext.destroyPlugin(plugin) } },
		{ name:'disable',function: function() { return this.ext.disable() } },
		{ name:'doAddListener',function: function(name,fn,scope,options,order,caller,manager) { return this.ext.doAddListener(name,fn,scope,options,order,caller,manager) } },
		{ name:'doDestroy',function: function() { return this.ext.doDestroy() } },
		{ name:'doFireDelegatedEvent',function: function(eventName,args) { return this.ext.doFireDelegatedEvent(eventName,args) } },
		{ name:'doFireEvent',function: function(eventName,args,bubbles) { return this.ext.doFireEvent(eventName,args,bubbles) } },
		{ name:'doInheritUi',function: function() { return this.ext.doInheritUi() } },
		{ name:'doUninheritUi',function: function() { return this.ext.doUninheritUi() } },
		{ name:'enable',function: function() { return this.ext.enable() } },
		{ name:'enableBubble',function: function(eventNames) { return this.ext.enableBubble(eventNames) } },
		{ name:'findFloatParent',function: function(needsShow) { return this.ext.findFloatParent(needsShow) } },
		{ name:'findFocusTarget',function: function() { return this.ext.findFocusTarget() } },
		{ name:'findPlugin',function: function(type) { return this.ext.findPlugin(type) } },
		{ name:'fireAction',function: function(eventName,args,fn,scope,options,order) { return this.ext.fireAction(eventName,args,fn,scope,options,order) } },
		{ name:'fireEvent',function: function(eventName,args) { return this.ext.fireEvent(eventName,args) } },
		{ name:'fireEventArgs',function: function(eventName,args) { return this.ext.fireEventArgs(eventName,args) } },
		{ name:'fireEventedAction',function: function(eventName,args,fn,scope,fnArgs) { return this.ext.fireEventedAction(eventName,args,fn,scope,fnArgs) } },
		{ name:'focus',function: function(selectText) { return this.ext.focus(selectText) } },
		{ name:'getAlignmentInfo',function: function(component,alignment) { return this.ext.getAlignmentInfo(component,alignment) } },
		{ name:'getAlignRegion',function: function(component,alignment,options) { return this.ext.getAlignRegion(component,alignment,options) } },
		{ name:'getAriaLabelEl',function: function(reference) { return this.ext.getAriaLabelEl(reference) } },
		{ name:'getBubbleParent',function: function() { return this.ext.getBubbleParent() } },
		{ name:'getClassCls',function: function() { return this.ext.getClassCls() } },
		{ name:'getConfig',function: function(name,peek,ifInitialized) { return this.ext.getConfig(name,peek,ifInitialized) } },
		{ name:'getController',function: function() { return this.ext.getController() } },
		{ name:'getCurrentAlignmentInfo',function: function() { return this.ext.getCurrentAlignmentInfo() } },
		{ name:'getCurrentConfig',function: function() { return this.ext.getCurrentConfig() } },
		{ name:'getElementConfig',function: function() { return this.ext.getElementConfig() } },
		{ name:'getFloatParent',function: function() { return this.ext.getFloatParent() } },
		{ name:'getFloatWrap',function: function() { return this.ext.getFloatWrap() } },
		{ name:'getFocusClsEl',function: function(focusEl) { return this.ext.getFocusClsEl(focusEl) } },
		{ name:'getFocusEl',function: function() { return this.ext.getFocusEl() } },
		{ name:'getId',function: function() { return this.ext.getId() } },
		{ name:'getInherited',function: function(inner) { return this.ext.getInherited(inner) } },
		{ name:'getInheritedConfig',function: function(property,skipThis) { return this.ext.getInheritedConfig(property,skipThis) } },
		{ name:'getInitialConfig',function: function(name) { return this.ext.getInitialConfig(name) } },
		{ name:'getPlugin',function: function(id) { return this.ext.getPlugin(id) } },
		{ name:'getRefOwner',function: function() { return this.ext.getRefOwner() } },
		{ name:'getSize',function: function() { return this.ext.getSize() } },
		{ name:'getTabIndex',function: function() { return this.ext.getTabIndex() } },
		{ name:'handleBlurEvent',function: function(info) { return this.ext.handleBlurEvent(info) } },
		{ name:'handleFocusEvent',function: function(info) { return this.ext.handleFocusEvent(info) } },
		{ name:'hasCls',function: function(className) { return this.ext.hasCls(className) } },
		{ name:'hasConfig',function: function(name) { return this.ext.hasConfig(name) } },
		{ name:'hasListener',function: function(eventName) { return this.ext.hasListener(eventName) } },
		{ name:'initBindable',function: function() { return this.ext.initBindable() } },
		{ name:'initConfig',function: function(instanceConfig) { return this.ext.initConfig(instanceConfig) } },
		{ name:'initElement',function: function() { return this.ext.initElement() } },
		{ name:'initElementListeners',function: function(elementConfig) { return this.ext.initElementListeners(elementConfig) } },
		{ name:'initFocusableElement',function: function(force) { return this.ext.initFocusableElement(force) } },
		{ name:'initFocusableEvents',function: function(force) { return this.ext.initFocusableEvents(force) } },
		{ name:'initInheritedState',function: function(inheritedState,inheritedStateInner) { return this.ext.initInheritedState(inheritedState,inheritedStateInner) } },
		{ name:'initKeyMap',function: function() { return this.ext.initKeyMap() } },
		{ name:'initUiReference',function: function(referenceName,uiCls,isInstance) { return this.ext.initUiReference(referenceName,uiCls,isInstance) } },
		{ name:'insertFloatedDom',function: function(needsShow) { return this.ext.insertFloatedDom(needsShow) } },
		{ name:'invalidateInheritedState',function: function() { return this.ext.invalidateInheritedState() } },
		{ name:'is',function: function(selector) { return this.ext.is(selector) } },
		{ name:'isAncestor',function: function(possibleDescendant) { return this.ext.isAncestor(possibleDescendant) } },
		{ name:'isBlurring',function: function(e) { return this.ext.isBlurring(e) } },
		{ name:'isBound',function: function(name) { return this.ext.isBound(name) } },
		{ name:'isDescendantOf',function: function(ancestor) { return this.ext.isDescendantOf(ancestor) } },
		{ name:'isDestructing',function: function() { return this.ext.isDestructing() } },
		{ name:'isDisabled',function: function() { return this.ext.isDisabled() } },
		{ name:'isEnabled',function: function() { return this.ext.isEnabled() } },
		{ name:'isFocusable',function: function(deep) { return this.ext.isFocusable(deep) } },
		{ name:'isFocusing',function: function(e) { return this.ext.isFocusing(e) } },
		{ name:'isHeighted',function: function() { return this.ext.isHeighted() } },
		{ name:'isHidden',function: function(deep) { return this.ext.isHidden(deep) } },
		{ name:'isSuspended',function: function(event) { return this.ext.isSuspended(event) } },
		{ name:'isSyncing',function: function(name) { return this.ext.isSyncing(name) } },
		{ name:'isVisible',function: function(deep) { return this.ext.isVisible(deep) } },
		{ name:'isWidthed',function: function() { return this.ext.isWidthed() } },
		{ name:'isXType',function: function(xtype,shallow) { return this.ext.isXType(xtype,shallow) } },
		{ name:'link',function: function(name,value) { return this.ext.link(name,value) } },
		{ name:'lookupController',function: function(skipThis) { return this.ext.lookupController(skipThis) } },
		{ name:'lookupNameHolder',function: function(skipThis) { return this.ext.lookupNameHolder(skipThis) } },
		{ name:'lookupReferenceHolder',function: function(skipThis) { return this.ext.lookupReferenceHolder(skipThis) } },
		{ name:'lookupSession',function: function(skipThis) { return this.ext.lookupSession(skipThis) } },
		{ name:'lookupTpl',function: function(name) { return this.ext.lookupTpl(name) } },
		{ name:'lookupViewModel',function: function(skipThis) { return this.ext.lookupViewModel(skipThis) } },
		{ name:'mon',function: function(item,ename,fn,scope,options,noDestroy) { return this.ext.mon(item,ename,fn,scope,options,noDestroy) } },
		{ name:'mun',function: function(item,ename,fn,scope) { return this.ext.mun(item,ename,fn,scope) } },
		{ name:'on',function: function(eventName,fn,scope,options,order,caller) { return this.ext.on(eventName,fn,scope,options,order,caller) } },
		{ name:'onAdded',function: function(parent,instanced) { return this.ext.onAdded(parent,instanced) } },
		{ name:'onAfter',function: function(eventName,fn,scope,options) { return this.ext.onAfter(eventName,fn,scope,options) } },
		{ name:'onBefore',function: function(eventName,fn,scope,options) { return this.ext.onBefore(eventName,fn,scope,options) } },
		{ name:'onBlur',function: function(e) { return this.ext.onBlur(e) } },
		{ name:'onFocus',function: function(e) { return this.ext.onFocus(e) } },
		{ name:'onFocusEnter',function: function(e) { return this.ext.onFocusEnter(e) } },
		{ name:'onFocusLeave',function: function(e) { return this.ext.onFocusLeave(e) } },
		{ name:'onFocusMove',function: function(info) { return this.ext.onFocusMove(info) } },
		{ name:'onInheritedAdd',function: function(parent,instanced) { return this.ext.onInheritedAdd(parent,instanced) } },
		{ name:'onInheritedRemove',function: function(destroying) { return this.ext.onInheritedRemove(destroying) } },
		{ name:'onRender',function: function() { return this.ext.onRender() } },
		{ name:'owns',function: function(element) { return this.ext.owns(element) } },
		{ name:'processElementConfig',function: function() { return this.ext.processElementConfig() } },
		{ name:'publishState',function: function(property,value) { return this.ext.publishState(property,value) } },
		{ name:'realign',function: function(component,alignment,options) { return this.ext.realign(component,alignment,options) } },
		{ name:'relayEvents',function: function(origin,events,prefix) { return this.ext.relayEvents(origin,events,prefix) } },
		{ name:'removeAfterListener',function: function() { return this.ext.removeAfterListener() } },
		{ name:'removeBeforeListener',function: function() { return this.ext.removeBeforeListener() } },
		{ name:'removeCls',function: function(cls,prefix,suffix) { return this.ext.removeCls(cls,prefix,suffix) } },
		{ name:'removeDelegatedListener',function: function(eventName,fn,scope) { return this.ext.removeDelegatedListener(eventName,fn,scope) } },
		{ name:'removeListener',function: function(eventName,fn,scope,eventOptions) { return this.ext.removeListener(eventName,fn,scope,eventOptions) } },
		{ name:'removeManagedListener',function: function(item,ename,fn,scope) { return this.ext.removeManagedListener(item,ename,fn,scope) } },
		{ name:'removeManagedListenerItem',function: function(isClear,managedListener,item,ename,fn,scope) { return this.ext.removeManagedListenerItem(isClear,managedListener,item,ename,fn,scope) } },
		{ name:'removePlugin',function: function(plugin,destroy) { return this.ext.removePlugin(plugin,destroy) } },
		{ name:'replaceCls',function: function(oldCls,newCls,prefix,suffix) { return this.ext.replaceCls(oldCls,newCls,prefix,suffix) } },
		{ name:'resolveListenerScope',function: function(defaultScope) { return this.ext.resolveListenerScope(defaultScope) } },
		{ name:'resolveSatelliteListenerScope',function: function(satellite,defaultScope) { return this.ext.resolveSatelliteListenerScope(satellite,defaultScope) } },
		{ name:'resumeEvent',function: function(eventName) { return this.ext.resumeEvent(eventName) } },
		{ name:'resumeEvents',function: function(discardQueue) { return this.ext.resumeEvents(discardQueue) } },
		{ name:'revertFocus',function: function() { return this.ext.revertFocus() } },
		{ name:'revertFocusTo',function: function(target) { return this.ext.revertFocusTo(target) } },
		{ name:'setConfig',function: function(name,value,options) { return this.ext.setConfig(name,value,options) } },
		{ name:'setCurrentAlignmentInfo',function: function(alignmentInfo) { return this.ext.setCurrentAlignmentInfo(alignmentInfo) } },
		{ name:'setListeners',function: function(listeners) { return this.ext.setListeners(listeners) } },
		{ name:'setRendered',function: function(rendered,root) { return this.ext.setRendered(rendered,root) } },
		{ name:'setSize',function: function(width,height) { return this.ext.setSize(width,height) } },
		{ name:'setTabIndex',function: function(newTabIndex,focusEl) { return this.ext.setTabIndex(newTabIndex,focusEl) } },
		{ name:'statics',function: function() { return this.ext.statics() } },
		{ name:'suspendEvent',function: function(eventName) { return this.ext.suspendEvent(eventName) } },
		{ name:'suspendEvents',function: function(queueSuspended) { return this.ext.suspendEvents(queueSuspended) } },
		{ name:'syncAlwaysOnTop',function: function(fromMousedown) { return this.ext.syncAlwaysOnTop(fromMousedown) } },
		{ name:'syncFloatWrap',function: function() { return this.ext.syncFloatWrap() } },
		{ name:'toFront',function: function(fromMousedown) { return this.ext.toFront(fromMousedown) } },
		{ name:'toggleCls',function: function(className,state) { return this.ext.toggleCls(className,state) } },
		{ name:'un',function: function(eventName,fn,scope,eventOptions) { return this.ext.un(eventName,fn,scope,eventOptions) } },
		{ name:'unAfter',function: function(eventName,fn,scope,options) { return this.ext.unAfter(eventName,fn,scope,options) } },
		{ name:'unBefore',function: function(eventName,fn,scope,options) { return this.ext.unBefore(eventName,fn,scope,options) } },
		{ name:'unlink',function: function(names) { return this.ext.unlink(names) } },
		{ name:'up',function: function(selector,limit) { return this.ext.up(selector,limit) } },
		{ name:'updateCls',function: function(newCls,oldCls) { return this.ext.updateCls(newCls,oldCls) } },
		{ name:'updateHeight',function: function(height) { return this.ext.updateHeight(height) } },
		{ name:'updateSession',function: function(session) { return this.ext.updateSession(session) } },
		{ name:'updateViewModel',function: function(viewModel,oldViewModel) { return this.ext.updateViewModel(viewModel,oldViewModel) } },
		{ name:'updateWidth',function: function(width) { return this.ext.updateWidth(width) } },
		{ name:'watchConfig',function: function(name,fn,scope) { return this.ext.watchConfig(name,fn,scope) } },

  ]}

  constructor() {
    super()
    this.METHODS = ExtCleartrigger.METHODS()
    this.XTYPE = ExtCleartrigger.XTYPE()
    //this.PROPERTIES = ExtCleartrigger.PROPERTIES()
    this.PROPERTIESOBJECT = ExtCleartrigger.PROPERTIESOBJECT()
    this.EVENTS = ExtCleartrigger.EVENTS()
  }

  connectedCallback() {
    super.connectedCallback()
  }

  attributeChangedCallback(attrName, oldVal, newVal) {
    super.attributeChangedCallback(attrName, oldVal, newVal)
  }
}
window.customElements.define('ext-cleartrigger', ExtCleartrigger);
})();