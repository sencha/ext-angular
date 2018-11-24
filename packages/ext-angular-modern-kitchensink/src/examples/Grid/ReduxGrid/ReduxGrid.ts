import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {data} from './data';

declare var Ext: any;

Ext.require(['Ext.grid.plugin.PagingToolbar']);

@Component({
  selector: 'reduxgrid-component',
  templateUrl: './ReduxGrid.html',
  styles: [``]
})
export class ReduxGridComponent implements OnInit {

  constructor() { }


  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    pageSize: 50,
    data: data,
    autoDestroy: true
});


  ngOnInit() {
  }

  filterNav = function(event) {
    var oldValue = event.oldValue;
    var newValue = event.newValue;
    this.filterVal = newValue;
    console.log("In filterNav.oldValue : " + oldValue + " newValue: " + newValue);
    const store = this.treeStore;
    var escapeRegex = Ext.String.escapeRegex(newValue);
    console.log(escapeRegex);
    this.filterRegex = new RegExp(escapeRegex, 'i');
    store.filterBy(record => this.containsMatches(record));
    
  }


}
