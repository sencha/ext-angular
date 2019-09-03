import {Component} from '@angular/core'
declare var Ext: any;
declare var require: any;
require('../stocks');
Ext.require(['Ext.plugin.PullRefresh']);

@Component({
  selector: 'pullrefresh-list-component',
  templateUrl: "./PullRefresh.html",
  styles: [``]
})
export class PullRefreshListComponent {

  constructor() {}

  tpl = `<div>{name}</div>`;

  store = Ext.create('Ext.data.Store', {
    fields: ['name'],
    autoLoad: true,
    proxy: {
        type: 'ajax',
        url: '/KitchenSink/Company',
        reader: {
            type: 'json',
            rootProperty: 'data',
            // Do not attempt to load orders inline.
            // They are loaded through the proxy
            implicitIncludes: false
        },
        extraParams: {
            shuffle: true
        }
    }
});

}
