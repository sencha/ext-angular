import { Injectable } from '@angular/core';
declare var Ext: any;

@Injectable()
export class AppService {

  constructor() {
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