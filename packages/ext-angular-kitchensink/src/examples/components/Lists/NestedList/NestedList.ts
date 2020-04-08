declare var Ext: any;
import { Component } from '@angular/core'



@Component({
  selector: 'nestedlist-component',
  templateUrl: "./NestedList.html",
  styles: [``]
})
export class NestedListComponent {

  store = Ext.create('Ext.data.TreeStore', {
    autoLoad: true,
    root: {},
    proxy: {
      type: 'ajax',
      url: 'assets/resources/data/tree/cars.json'
    },
    sorters: ['last_name', 'first_name']
  });

  onLeafItemTap = ({record}) => {
    Ext.toast(`You selected ${record.get('text')}`)
  }

}
