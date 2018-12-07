import {Component, OnInit, OnChanges} from '@angular/core'

declare var require: any;
declare var Ext: any;

require('../stocks');

@Component({
  selector: 'paginglist-component',
  templateUrl: "./PagingList.html",
  styles: [``]
})
export class PagingListComponent implements OnInit, OnChanges  {

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
        // Do not attempt to load orders inline. They are loaded through the proxy
        implicitIncludes: false
      },
      extraParams: {
        shuffle: true
      }
    }
  });

  bufferZone:boolean = false;
  listRef:any;

  setBufferZone = (val) => {
    this.bufferZone = val;
  }

  listReady = (ele) => {
    this.listRef = ele.ext.el;
  }

  ngOnInit() {}

  ngOnChanges(changes) {
    console.log(changes);
    // if (prevState.bufferZone !== bufferZone) {
        const plugin = this.listRef.findPlugin('listpaging');
        // console.log('got here');
        // plugin.setAutoPaging(bufferZone !== false);
        // plugin.setBufferZone(bufferZone);
    // }
  }

}
