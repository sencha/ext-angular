declare var Ext: any;
import { Component } from '@angular/core'

@Component({
  selector: 'groupedlist-component',
  templateUrl: "./GroupedList.html",
  styles: [``]
})
export class GroupedListComponent {

  store = Ext.create('Ext.data.Store', { 
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: 'resources/data/people.json'
    },
    grouper: {
      groupFn: record => record.get('last_name')[0]
    },
    sorters: ['last_name', 'first_name']
  });

  tpl =
    `<div>
        <div style="font-size:16px;margin-bottom:5px;">{first_name} {last_name}</div>
        <div style="font-size:12px;color:#666;">{title}</div>
    </div>`;

  onSelect = ({list, selected}) => {
    Ext.toast(`You selected ${selected.get('first_name')} ${selected.get('last_name')}.`);
  }

}
