declare var Ext: any;

import {AfterContentInit,AfterViewInit,Attribute,Component,ComponentFactory,ComponentRef,ComponentFactoryResolver,ContentChildren,
	ElementRef,EventEmitter,OnInit,QueryList,Type,ViewChild,ViewContainerRef
} from '@angular/core';

export class base{
	public extjsObject: any;
	private rootElement: any;
	private listeners = {};
	private xtype: string;
	private inputs: any;
	[key:string]: any;
	
	constructor(
		private myElement: any, 
		private componentFactoryResolver: ComponentFactoryResolver, 
		private viewContainerRef: ViewContainerRef, 
		private metaData: any
		) {
		this.xtype = metaData.XTYPE;
		this.inputs = metaData.PROPERTIES;
		this.rootElement = myElement.nativeElement;
		this['ready'] = new EventEmitter();
		metaData.EVENTS.forEach( (event: any, n: any) => {
			(<any>this)[event.name] = new EventEmitter();
		});
	}

	AfterContentInit(ExtJSBaseRef: any) {
		//var extJSRootComponentRef : ViewContainerRef = ExtJSBaseRef.first;
		var extJSRootComponentRef : base = ExtJSBaseRef.first;
		//var firstExtJS = extJSRootComponentRef['_element'].component.extjsObject;
		var firstExtJS = extJSRootComponentRef.extjsObject;
		//firstExtJS.setRenderTo(this.myElement.nativeElement);
		if (Ext.isClassic == true) {
			firstExtJS.render(this.myElement.nativeElement);
		}
		else {
			firstExtJS.setRenderTo(this.myElement.nativeElement);
		}
		var ExtJSComponentRefArray: any = ExtJSBaseRef.toArray();
		var arrayLength = ExtJSComponentRefArray.length;
		for (var i = 1; i < arrayLength; i++) {
			//var obj = ExtJSComponentRefArray[i]['_element'].component.extjsObject;
			var obj = ExtJSComponentRefArray[i].extjsObject;
			if (obj.config.docked != null) {
				firstExtJS.insert(0, obj);
			}
			else {
				firstExtJS.add(obj);
			}
		}
	}

	OnInit(dynamicTarget: any,metadata?: any) {
		let me: any = this;
		let o: any = {};
		o.listeners = {};

		var eventnames = metadata.EVENTNAMES;
		if (eventnames != undefined) {
			eventnames.forEach(function (eventname: any, index: any, array: any) {
				var eventIndex = metadata.EVENTNAMES.indexOf(eventname);
				if (eventIndex != -1) {
					var eventparameters = metadata.EVENTS[eventIndex].parameters

					var extjsevent = '';
					if (eventname == 'tapit') {
						extjsevent = 'tap'
					}
					else {
						extjsevent = eventname
					}
					o.listeners[extjsevent] = function() {
					//o.listeners[eventname] = function() {
							let parameters: any = eventparameters;
							let parms = parameters.split(',');
							let args = Array.prototype.slice.call(arguments);
							let o: any = {};
							for (let i = 0, j = parms.length; i < j; i++ ) {
									o[parms[i]] = args[i];
							}
							me[eventname].next(o);
					};
				}
			});
		}

		o.xtype = me.xtype;
		//if (me.xtype != '') { o.xtype = me.xtype; }
		for (var i = 0; i < me.metaData.PROPERTIES.length; i++) { 
			var prop = me.metaData.PROPERTIES[i];
			//need to handle listeners coming in here
			if ((o.xtype == 'cartesian' || o.xtype == 'polar') && prop == 'layout') {
			}
			else {
				if (me[prop] != undefined && 
						prop != 'listeners' && 
						prop != 'config' && 
						prop != 'fitToParent') { 
					o[prop] = me[prop]; 
				};
			}
		}

		if ('true' == me.fitToParent) {
			o.top=0, 
			o.left=0, 
			o.width='100%', 
			o.height='100%'
		}
		if (me.config !== {} ) {
			Ext.apply(o, me.config);
		};
		me.extjsObject = Ext.create(o);
		me.ext = me.extjsObject;
		me.x = me.extjsObject;

		var componentFactory: ComponentFactory<any>;
		var type: Type<any>;

		if (me.component != undefined) {
			type = me.component;
			componentFactory = me.componentFactoryResolver.resolveComponentFactory(type);
			me.componentRef = dynamicTarget.createComponent(componentFactory);
			//me.componentRef.instance['buttontext'] = 'testing';
			var node = me.extjsObject.innerElement.dom;
			node.appendChild(me.componentRef['_hostElement'].nativeElement);
		}

		if (me.parent != undefined) {
			me.parent.insert(0, me.extjsObject);
		}
		me.ready.next(me);
	}
}