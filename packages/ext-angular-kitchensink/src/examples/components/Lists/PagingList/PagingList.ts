declare var Ext: any;
import {Component} from '@angular/core'
declare var require: any;
require('../stocks');

Ext.require([
  'Ext.dataview.plugin.ListPaging'
])

@Component({
  selector: 'paginglist-component',
  templateUrl: "./PagingList.html",
  styles: [``]
})
export class PagingListComponent {

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
        implicitIncludes: false
      },
      extraParams: {
        shuffle: true
      }
    }
  });

  bufferZone:any = false;
  setBufferZone = (value) => {
    this.bufferZone = value;
    var store = this.list.getStore()
    var plugin = this.list.findPlugin('listpaging');
    store.removeAll();
    plugin.setAutoPaging(value !== false);
    plugin.setBufferZone(value || 0);
    store.loadPage(1);
  }

  list: any;
  listReady = (event) => {
    this.list = event.cmp;
  }

  onSelect = (event) => {
    console.log('onSelect')
  }

}
