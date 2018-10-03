import {Component,ViewChild,ElementRef,ComponentFactoryResolver,ViewContainerRef,forwardRef,ContentChildren,QueryList} from '@angular/core';
import { base } from './base';
// Ext Class - {name}
export class {classname}MetaData {
	public static XTYPE: string = '{xtype}';
	public static METHODS: any[] = [
{sMETHODS}];
	public static PROPERTIES: string[] = [
{sPROPERTIES}];
	public static PROPERTIESOBJECT: any{} = {
{sPROPERTIESOBJECT}};
	public static EVENTS: any[] = [
{sEVENTS}];
	public static EVENTNAMES: string[] = [
{sEVENTNAMES}];
}
@Component({
  selector: {classname}MetaData.XTYPE,
	inputs: {classname}MetaData.PROPERTIES,
	outputs: {classname}MetaData.EVENTNAMES,
	providers: [{provide: base, useExisting: forwardRef(() => {classname})}],
	template: '<ng-template #dynamic></ng-template>'
})
export class {classname} extends base {
	constructor(eRef:ElementRef,resolver:ComponentFactoryResolver,vcRef: ViewContainerRef) {
		super(eRef,resolver,vcRef,{classname}MetaData);
	}
	//@ContentChildren(base,{read: ViewContainerRef }) extbaseRef:QueryList<ViewContainerRef>;
	@ContentChildren(base,{read: base}) extbaseRef: QueryList<base>;
	@ViewChild('dynamic', {read: ViewContainerRef}) dynamicRef: ViewContainerRef;
	ngAfterContentInit() {this.AfterContentInit(this.extbaseRef);}
	ngOnInit() {this.OnInit(this.dynamicRef,{classname}MetaData);}
}