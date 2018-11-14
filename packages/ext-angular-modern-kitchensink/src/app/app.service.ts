import { Injectable } from '@angular/core';

declare var Ext: any;
declare var KitchenSink: any;

@Injectable()
export class AppService {


	constructor() {
		console.log("Constructor called for AppService");
		this.init();
	}

	init = function () {
		Ext.define('KitchenSink.data.Init', {
			requires: [
			  'Ext.ux.ajax.JsonSimlet',
			  'Ext.ux.ajax.SimManager'
			],
			singleton: true,
			constructor: function() {
			  Ext.ux.ajax.SimManager.init({
				  defaultSimlet: null
			  })
			}
		  })
	}



}
