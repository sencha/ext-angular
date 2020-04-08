declare var Ext: any;
import { Component } from '@angular/core';

Ext.require([
  'Ext.MessageBox'
]);
@Component({
  selector: 'gridtools-component',
  templateUrl: './GridTools.html',
  styles: [``]
})
export class GridToolsComponent {

  store = Ext.create('Ext.data.Store', {
    autoLoad: true,
    fields: ['name', 'cuisine'],
    storeId: 'restaurants',
    groupField: 'cuisine',
    sorters: ['cuisine', 'name'],
    pageSize: 0,
    proxy: {
      type: 'ajax',
      url: 'assets/resources/data/restaurants.json'
    }
  })

  helperTpl = (data) => {
    console.log("helperTpl. data : " + data);
    /*
    <ul>
      { data.group.items.map((item, i) => <li key={i}>{item.data.name}</li>) }
    </ul>
    */
  }

  //-----------------------------------------------
  //Cell actions:
  onGear = (grid, info) => {
    Ext.Msg.alert('Settings', `Change settings for ${info.record.data.name}`);
  }

  onPin = (grid, info) => {
    Ext.Msg.alert('Pin', `Pinned item ${info.record.data.name}`);
  }

  onSearch = (grid, info) => {
    Ext.Msg.alert('Search', `Search for item ${info.record.data.name}`);
  }

  //-----------------------------------------------
  //Group actions:
  onGroupPrint = (grid, info) => {
      this.doGroup(info, 'Print Group');
  }

  onGroupRefresh = (grid, info) => {
      this.doGroup(info, 'Refresh Group');
  }

  onGroupSave = (grid, info) => {
      this.doGroup(info, 'Save Group');
  }

  doGroup = (info, action) => {
      Ext.Msg.alert(action, this.helperTpl.apply({ group: info.group }));
  }

}