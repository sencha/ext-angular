import {Component, OnInit} from '@angular/core'

declare var Ext: any;

@Component({
  selector: 'groupedlist-component',
  templateUrl: "./GroupedList.html",
  styles: [``]
})
export class GroupedListComponent implements OnInit  {

  constructor() { }
  store = Ext.create('Ext.data.Store', { 
    autoLoad: true,
    proxy: {
      type: 'rest',
      url: 'build/resources/data/people.json'
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

  ngOnInit() {}

}
