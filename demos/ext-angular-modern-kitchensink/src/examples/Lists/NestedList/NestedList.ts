import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'nestedlist-component',
  templateUrl: "./NestedList.html",
  styles: [``]
})
export class NestedListComponent implements OnInit  {

  constructor() { }
  store = Ext.create('Ext.data.TreeStore', { 
    autoLoad: true,
    root: {},
    proxy: {
      type: 'ajax',
      url: 'build/resources/data/tree/cars.json'
    },
    sorters: ['last_name', 'first_name']
  });

  onLeafItemTap = ({record}) => {
    Ext.toast(`You selected ${record.get('text')}`)
  }


  ngOnInit() {}

}
